import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { updateProfile } from 'firebase/auth';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (event) => {
        event.preventDefault();
        setLoading(true);

        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.password.value.trim();
        const photoURL = event.target.photoURL.value.trim();

        // Password validation //
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain at least 1 uppercase, 1 lowercase, and minimum 6 characters!");
            setLoading(false);
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                });

                event.target.reset();
                toast.success("Sign up successful!");
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message || "Sign up failed!");
            })
            .finally(() => setLoading(false));
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("Logged in with Google!");
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message || "Google sign-in failed!");
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">

            {/* Left Image Section */}
            <div className="flex items-center justify-center bg-orange-200 p-10">
                <img src="/assets/signup.png" alt="signup" className="w-80 md:w-96" />
            </div>

            {/* Right Form Section */}
            <div className="flex flex-col justify-center px-10 md:px-20">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
                <p className="text-gray-500 mb-6">Join our community and start swapping skills today.</p>

                <form onSubmit={handleSignUp}>
                    <label className="text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        name='name'
                        className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                        required
                    />

                    <label className="text-gray-700 font-medium">Photo URL</label>
                    <input
                        type="text"
                        name='photoURL'
                        className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                    />

                    <label className="text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        name='email'
                        className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                        required
                    />

                    <label className="text-gray-700 font-medium">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                        Password must contain:<br/>
                        ✔️ At least 1 Uppercase letter<br/>
                        ✔️ At least 1 Lowercase letter<br/>
                        ✔️ Minimum 6 characters
                    </p>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg flex justify-center"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6 gap-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Google Sign-In */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-200"
                >
                    <img src="/assets/search.png" className="w-6 h-6" alt="google" />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                </button>

                {/* Login Link */}
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <Link to="/login" className="text-teal-600 font-semibold"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
