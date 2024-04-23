import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./component/Pages/CoffeeCard";
import { useState } from "react";



function App() {
  const loaderCoffees = useLoaderData()
  const [coffees,setCoffees] =useState(loaderCoffees)
  
  

  return (
    <div>
     
      <h1 className="text-center font-bold text-5xl p-2">Hot Coffee List</h1>
      <p className="text-center font-bold text-2xl p-2">Total items Number : {coffees.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
      {
        coffees.map(coffee => <CoffeeCard key={coffees._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
      }
      </div>
      
      
    </div>
  )
}

export default App
