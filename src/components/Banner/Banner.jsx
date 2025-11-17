import React from 'react';

const Banner = () => {
    return (
        <section className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden mt-10">
{/* Background Image */}
<img
src= "https://postimg.cc/dLyFcJGC"
alt="Group"
className="w-full h-[450px] object-cover brightness-50"
/>


{/* Content */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
Share Your Passion,<br /> Earn Locally
</h1>


<p className="mt-4 max-w-2xl text-lg">
Join our community to offer, learn, and trade skills in your area.
Discover new hobbies and connect with local experts.
</p>


<button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition">
Explore Skills Now
</button>
</div>
</section>
    );
};

export default Banner;