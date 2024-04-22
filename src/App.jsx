import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./component/Pages/CoffeeCard";



function App() {
  const coffees = useLoaderData()
  console.log(coffees);
  

  return (
    <div>
     
      <h1>hot coffee {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
      {
        coffees.map(coffee => <CoffeeCard key={coffees._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
      
      
    </div>
  )
}

export default App
