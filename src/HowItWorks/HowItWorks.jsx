import React from "react";
import { Search, Users, GraduationCap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Search",
      icon: <Search size={32} />,
      desc: "Find the perfect skill you want to learn, from cooking to coding, right in your neighborhood.",
    },
    {
      id: 2,
      title: "Connect",
      icon: <Users size={32} />,
      desc: "Connect with talented local providers, read reviews, and agree on a price or trade.",
    },
    {
      id: 3,
      title: "Learn & Swap",
      icon: <GraduationCap size={32} />,
      desc: "Meet up, learn something new, and grow your skills. You can pay, or even trade a skill of your own!",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
      <p className="text-gray-600 mt-2 mb-12 max-w-2xl mx-auto">
        A simple way to connect and grow your skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="bg-teal-100 p-6 rounded-full mb-6 text-teal-500">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.id}. {step.title}</h3>
            <p className="text-gray-600 max-w-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
