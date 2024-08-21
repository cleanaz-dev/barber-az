"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const HAPIO_API_KEY = process.env.HAPIO_API_KEY;

export const createBooking = async (req, res) => {
 const { name, email, phone, date, time, service, barber, location, price } =
  req.body;

 await prisma.booking.create({
  data: {
   name,
   email,
   phone,
   date,
   time,
   service,
   barber,
   location,
   price,
  },
 });
};

export const getAllBookings = async () => {
    const bookings = await prisma.booking.findMany({
      include: {
        service: true,
      },
        orderBy: [
            {
                // Specify the field you want to order by, for example, 'date' or 'time'
                date: 'asc', // 'asc' for ascending order, 'desc' for descending order
            },
        ],
    });
    return bookings;
};

export const getBooking = async (props) => {

    const id = props
    const booking = await prisma.booking.findUnique({
        where: {
            id: id
        },
        include: {
          service: true,
        }
    })
    return booking
}

export const cancelBooking = async (formData) => {
    const id = formData.get('id');
    const bookingId = formData.get('bookingId');
  
    try {
      const response = await fetch(`https://eu-central-1.hapio.net/v1/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
        'Authorization': `Bearer ${HAPIO_API_KEY}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      await prisma.booking.delete({
        where: {
          id: id,
        },
      });
  
    } catch (error) {
      console.error('Error canceling booking:', error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
    redirect('/appointment/cancel')
  };

export const confirmAppointmentAction = async (formData) => {
  const id = formData.get('id');
  const bookingId = formData.get('bookingId');

  try {
    const appointment = await prisma.booking.findFirst({
      where: {
        id: id
      }
    })

      await prisma.booking.update({
        where: {
          id: appointment.id
        },
        data: {
          status: 'Confirmed'
        }
      })
  } catch (error) {
    console.error('Error confirming appointment:', error);
    // Handle errors appropriately (e.g., display an error message to the user)
  }
  redirect(`/confirm`)
}

export const getEmployeeById = async (id) => {
  const employee = await prisma.hairStylist.findUnique({
    where: {
      id: id
    }
  })
  return employee
}


export const getAllEmployees = async () => {
  const employees = await prisma.hairStylist.findMany({
    orderBy: [
      {
        // Specify the field you want to order by, for example, 'date' or 'time'
        name: 'asc', // 'asc' for ascending order, 'desc' for descending order
      },
    ],
  });
  return employees;
}

export const addEmployee = async (formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const location = formData.get('location');

  try {
    const requestBody = {
      name: name,
      max_simultaneous_bookings: 1,
      metadata: {
        email: email,
        phone: phone,
        location: location,
      },
      protected_metadata: null,
      enabled: false
    };
  
    const response = await fetch('https://eu-central-1.hapio.net/v1/resources', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HAPIO_API_KEY}`,
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify(requestBody), // Pass the JSON request body here
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    const bookingId = responseData.id;
  
    const employee = await prisma.hairStylist.create({
      data: {
        name,
        email,
        phone,
        location,
        barberId: bookingId,
      },
    });
  
    // Handle successful response
  } catch (error) {
    console.error('Error creating employee:', error);
    // Handle errors appropriately (e.g., display an error message to the user)
  }
  redirect("/admin/employees")
}

export const getAllCustomers = async () => {
  const customers = await prisma.customer.findMany({
    orderBy: [
      {
        // Specify the field you want to order by, for example, 'date' or 'time'
        name: 'asc', // 'asc' for ascending order, 'desc' for descending order
      },
    ],
  });
  return customers;
}

export const sendReminderEmail = async (formData) => {
  try {
    
    const id = await formData.get('id');
    

    const customer = await prisma.booking.findFirst({
      where: {
        id: id
      },
      include: {
        service: true,
      }
    });
    await prisma.booking.update({
      where: {
        id: customer.id
      },
      data: {
        reminderSent: true,
      }
    })

    const response = await fetch("https://hook.us1.make.com/mexpab4e0snq4xcnr3cvb71s7r4om3kk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    revalidatePath("/admin/employees")
    return JSON.stringify(response)
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to send reminder email');
  }
};
