import { Link } from "react-router-dom";
import swal from "sweetalert";


const CoffeeCard = ({coffee,setCoffees,coffees}) => {
    const {name,details,image,taste,supplier,quantity,_id} =coffee;
    const handelDelete = (_id) => {
        console.log(_id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
               
           
                fetch(`http://localhost:5175/coffee/${_id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                   console.log("delete confirm");
                swal("'WoW' You successfully deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Your imaginary file is safe!");
                }

                const reminder = coffees.filter(cof=> cof._id !== _id)
                setCoffees(reminder);
               }

            )
            }
            
        }
          );
    }
    return (
        <div>
            <div
  className="bg-white flex h-72   shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border items-center p-3 w-full max-w-xl  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-8">
  <img src={image} className="w-full rounded-lg p-4" />
  <div className="px-4 my-6 text-center">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="mt-2 text-sm text-gray-400">
      supplier : {supplier} details : {details} taste : {taste}</p>
      <div className="join flex mt-5 text-white">
  <button className="btn join-item text-white bg-indigo-700">view</button>
 <Link to={`updateCoffee/${_id}`}>
 <button className="btn join-item text-white bg-violet-700">edit</button>
 </Link>
  <button onClick={() => handelDelete(_id)} className="btn join-item text-white bg-fuchsia-700">delete</button>
</div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;