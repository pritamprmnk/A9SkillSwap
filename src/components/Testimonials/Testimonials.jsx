import React from "react";
import testimonials from "../../data/testimonialsData.js"

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Review</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4 text-gray-800">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h3 className="text-xl font-semibold">{test.name}</h3>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{test.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
