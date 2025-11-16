import React from "react";
import { Star } from "lucide-react";

export default function TopRatedProviders() {
  const providers = [
    {
      name: "Sarah Chen",
      role: "Digital Marketing Pro",
      rating: 5.0,
      img: "/avatar.png",
    },
    {
      name: "David Lee",
      role: "Guitar Teacher",
      rating: 4.9,
      img: "/avatar2.png",
    },
    {
      name: "Maria Garcia",
      role: "Spanish Tutor",
      rating: 5.0,
      img: "/avatar3.png",
    },
    {
      name: "James Taylor",
      role: "Woodworking Expert",
      rating: 4.8,
      img: "/avatar4.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Top Rated Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {providers.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 text-center border hover:shadow-md transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>
              <p className="text-blue-600 mt-1 text-sm font-medium">{p.role}</p>

              <div className="flex items-center justify-center gap-1 mt-4 text-yellow-500">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
                <span className="text-gray-700 ml-1 text-sm font-medium">{p.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}