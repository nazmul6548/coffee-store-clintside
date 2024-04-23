import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


const Login = () => {
    const {signInUser}= useContext(AuthContext)
// console.log(signInUser);

    const handleButton = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const res ={email, password}
        console.log(res);
        signInUser(email, password)
      
        .then(result => {
            console.log("hel",result.user);
            const user = {
                email,lastLoggedAt:result.user.metadata
                ?.lastSignInTime
            }
            fetch("http://localhost:5175/user",{
                method:'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div>
            <h1 className="text-center font-bold text-4xl p-2 mt-2">You Have Account? Please Login Here</h1>

            {/*  */}
            <div className="flex mt-8 justify-center items-center bg-gray-100 font-sans text-gray-800 h-full md:min-h-screen p-4">
      <div className="grid justify-center max-w-md mx-auto">
        <div>
          <img src="https://readymadeui.com/login-image.webp" className="w-full object-cover" alt="login-image" />
        </div>
        <form onSubmit={handleButton} className="bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-md">
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-blue-600">Sign in</h3>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold">Email</label>
            <input name="email" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold">Password</label>
            <input name="password" type="password" required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-3 block text-sm">Remember me</label>
            </div>
            <div>
              <a href="#" className="text-blue-600 text-sm hover:underline">Forgot Password?</a>
            </div>
          </div>
          <div>
            <input type="submit" value="Sign in" className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" />
           
          </div>
        </form>
      </div>
    </div>
            {/*  */}
        </div>
    );
};

export default Login;