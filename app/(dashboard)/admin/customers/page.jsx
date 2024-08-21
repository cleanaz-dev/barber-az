import AllCustomers from "@/components/AllCustomers";
import { getAllCustomers } from "@/lib/action";

export default async function CustomerPage() {
  const customers = await getAllCustomers();
  return (
    <>
    
    <AllCustomers customers={customers} />
    </>
  )
}
