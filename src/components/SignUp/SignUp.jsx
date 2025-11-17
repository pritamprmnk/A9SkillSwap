import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photoURL = event.target.photoURL.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;

                // Name & Photo URL update
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                })
                .then(() => {
                    console.log("Profile updated successfully!");
                })
                .catch(error => {
                    console.error("Profile update error:", error);
                });

                event.target.reset();
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
            
            {/* Left Section */}
            <div className="flex items-center justify-center bg-orange-200 p-10">
                <img 
                    src="https://i.ibb.co/52bVjnP/illustration.png" 
                    alt="signup visual" 
                    className="w-80 md:w-96" 
                />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center px-10 md:px-20">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
                <p className="text-gray-500 mb-6">Join our community and start swapping skills today.</p>

                <form onSubmit={handleSignUp}>

                    {/* Name */}
                    <label className="text-gray-700 font-medium">Name</label>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder="Enter your name"
                        className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                        required 
                    />

                    {/* Photo URL */}
                    <label className="text-gray-700 font-medium">Photo URL</label>
                    <input 
                        type="text" 
                        name='photoURL' 
                        placeholder="Enter your photo URL"
                        className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                    />

                    {/* Email */}
                    <label className="text-gray-700 font-medium">Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        placeholder="Enter your email"
                        className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                        required 
                    />

                    {/* Password */}
                    <label className="text-gray-700 font-medium">Password</label>
                    <input 
                        type="password" 
                        name='password' 
                        placeholder="Enter your password"
                        className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                        required 
                    />

                    {/* Sign Up Button */}
                    <button 
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6 gap-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Google Login Button */}
                <button className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-100">
                    <img 
                        src="https://www.svgrepo.com/show/475656/google-color.svg" 
                        className="w-6 h-6" 
                        alt="google" 
                    />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                </button>

                {/* Already have account */}
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <Link to="/login" className="text-teal-600 font-semibold"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
