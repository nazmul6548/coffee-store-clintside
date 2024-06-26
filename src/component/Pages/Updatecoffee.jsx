import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Updatecoffee = () => {
    const coffee = useLoaderData()
    const {name,details,image,taste,supplier,quantity,_id,category} =coffee;



    const handleCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const image =form.image.value;
        const updatedCoffee ={name, quantity, supplier, taste, category, details,image};
        console.log(updatedCoffee);
        fetch(`http://localhost:5175/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              swal({
                title: "Good job!",
                text: "coffee added successfully",
                icon: "success",
                button: "Aww yiss!",
              })
              
            }
        })

    }

    return (
        <div className="bg-[#F4F3F0] flex justify-center p-20">
      <form onSubmit={handleCoffee} >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="join flex flex-col w-96 ">
            <h2 className="font-bold pb-2">Coffee Name {name}</h2>
            <input
            type="text"
            name="name"
              className="input input-bordered rounded-l-lg "
              placeholder="Coffee Name" defaultValue={name}
            />
           
          </div>

          <div className="join flex flex-col w-96 ">
            <h2 className="font-bold pb-2">Available Quantity</h2>
            <input
             type="text"
             name="quantity"
              className="input input-bordered rounded-l-lg"
              placeholder="Available Quantity"
              defaultValue={{quantity}}
            />
            
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="join flex flex-col w-96 ">
            <h2 className="font-bold pb-2">Supplier</h2>
            <input
             type="text"
             name="supplier"
              className="input input-bordered rounded-l-lg "
              placeholder="Enter Coffee Supplier"
              defaultValue={supplier}
            />
       
          </div>

          <div className="join flex flex-col w-96 ">
            <h2 className="font-bold pb-2">Taste</h2>
            <input
             type="text"
             name="taste"
              className="input input-bordered rounded-l-lg"
              placeholder="Enter Coffee tester"
              defaultValue={taste}
            />
      
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="join flex flex-col w-96 ">
            <h2 className="font-bold pb-2">Category</h2>
            <input
             type="text"
             name="category"
              className="input input-bordered rounded-l-lg "
              placeholder="Enter Coffee Category"
              defaultValue={category}
            />
       
          </div>

          <div className="join flex flex-col w-96 ">
            <h2 className="font-bold pb-2">Details</h2>
            <input
             type="text"
             name="details"
              className="input input-bordered rounded-l-lg"
              placeholder="Enter Coffee Details"
              defaultValue={details}
            />
      
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="join flex flex-col w-full ">
            <h2 className="font-bold pb-2">Photo URL</h2>
            <input
             type="text"
             name="image"
              className="input input-bordered rounded-l-lg "
              placeholder="Enter Coffee photo URL"
              defaultValue={image}
            />
       
          </div>

         
        </div>
        <input type="submit" value="Add Coffee" className="btn mt-8 bg-slate-400 text-white w-full " />
      </form>
    </div>
    );
};

export default Updatecoffee;