import AllEmployees from '@/components/AllEmployees'
import React from 'react'

import { getAllEmployees } from '../../../../lib/action'


export default async function AllEmployeesPage() {
  const employees = await getAllEmployees()
  
  return (
    <>
      <AllEmployees employees={employees}/>
    </>
  )
}
