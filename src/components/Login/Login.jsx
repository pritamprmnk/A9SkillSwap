import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import toast from "react-hot-toast";
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");

    const handleLogIn = event => {
        event.preventDefault();
        const emailInput = event.target.email.value;
        const password = event.target.password.value;

        setLoading(true);

        signInUser(emailInput, password)
            .then(result => {
                console.log(result);
                event.target.reset();
                toast.success("Logged in successfully!");
                navigate(location.state || "/");
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message || "Invalid email or password!");
            })
            .finally(() => setLoading(false));
    };
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
            navigate(location.state || "/");
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">

            {/* Left Section */}
            <div className="flex items-center justify-center bg-orange-200 p-10">
            <img src="/assets/loginpage.png" alt="login visual" className="w-80 md:w-96" />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center px-10 md:px-20">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
                <p className="text-gray-500 mb-6">Enter your credentials to access your account.</p>

            <form onSubmit={handleLogIn}>
            {/* Email */}
            <label className="text-gray-700 font-medium">Email</label>
            <input type="email"name="email"value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"required/>

            {/* Password with Eye Toggle */}
            <label className="text-gray-700 font-medium">Password</label>
             <div className="relative">
             <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800 pr-10"required/>
            <button
                type="button"onClick={() => setShowPassword(!showPassword)}className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
            </div>
            {/* Login Button with Loader */}
            <button
                 type="submit"
                 disabled={loading}
                 className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg flex justify-center items-center">
                  {loading ? (
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>) : ("Login")}
            </button>
            </form>
            {/* Forgot Password Link */}
                <Link
                    className="text-sm text-teal-600 mb-4 mt-2 inline-block"
                    to="/forgot"
                    state={{ email }}>Forgot Password?
                </Link>

            {/* Divider */}
                <div className="flex items-center my-6 gap-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

            {/* Google Login */}
                <button onClick={handleGoogleSignIn} className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-100">
                    <img
                        src="/assets/search.png"
                        className="w-6 h-6"
                        alt="google"
                    />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                </button>

            {/* Sign Up Link */}
                <p className="text-center text-gray-600 mt-6">
                    Don't have an account?
                    <Link to="/signup" className="text-teal-600 font-semibold"> Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
