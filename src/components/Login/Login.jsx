import React, { use } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
    const {signInUser} = use(AuthContext);


    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogIn = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            event.target.reset();
            navigate(location.state || "/")
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
           {/* Left Section */}
          <div className="flex items-center justify-center bg-orange-200 p-10">
             <img src="https://i.ibb.co/52bVjnP/illustration.png"alt="login visual"className="w-80 md:w-96"/>
          </div>


           {/* Right Section */}
       <div className="flex flex-col justify-center px-10 md:px-20">
           <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
            <p className="text-gray-500 mb-6">Enter your credentials to access your account.</p>


           <form onSubmit={handleLogIn}>

            {/* Email */}
       <label className="text-gray-700 font-medium">Email</label>
           <input type="email" name='email' placeholder="Enter your email"className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"/>

           {/* Password */}
       <label className="text-gray-700 font-medium">Password</label>
           <input type="password" name='password' placeholder="Enter your password"className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"/>

            {/* Login Button */}
       <button type="submit"className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg">Login</button>
           
           </form>


        <Link className="text-sm text-teal-600 mb-4" to="/forgot">Forgot Password?</Link>


          {/* Divider */}
        <div className="flex items-center my-6 gap-3">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
        </div>


        {/* Google Login */}
       <button className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-100">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg"className="w-6 h-6"alt="google"/>
           <span className="font-medium text-gray-700">Continue with Google</span>
       </button>


        {/* Sign Up */}
       <p className="text-center text-gray-600 mt-6">Don't have an account?
    <Link to="/signup" className="text-teal-600 font-semibold"> Sign Up</Link>
       </p>
    </div>
    </div>
    );
};

export default Login;