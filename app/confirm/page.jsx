import React from "react";

export default function Page() {
  const messages = [
    "Thank you for confirming your appointment! We're excited to see you soon and help you look your best!",
    "Your appointment is confirmed! We can’t wait to welcome you and make your visit exceptional. See you soon!",
    "Thank you for confirming your appointment with us! We’re looking forward to providing you with a great experience. See you soon!"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <main
      key="1"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4"
    >
      <div className="bg-gray-800 p-6 rounded-md">
        <h1 className="text-white">
          {randomMessage}
        </h1>
      </div>
    </main>
  );
}