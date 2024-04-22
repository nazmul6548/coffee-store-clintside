import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./component/Pages/CoffeeCard";
import { useState } from "react";



function App() {
  const loaderCoffees = useLoaderData()
  const [coffees,setCoffees] =useState(loaderCoffees)
  
  

  return (
    <div>
     
      <h1>hot coffee {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
      {
        coffees.map(coffee => <CoffeeCard key={coffees._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
      }
      </div>
      
      
    </div>
  )
}

export default App
