import React from "react";
import skillData from "../../data/skillData.json";
import { Link } from "react-router-dom";

const PopularSkill = () => {
  return (
    <div className="py-10 px-4 bg-gray-50 ">
      <h2 className="text-4xl font-bold text-center text-gray-800">Popular Skills</h2>
      <p className="text-gray-500 text-center mb-8">
        Explore top-rated skills offered by talented providers
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillData.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-40 object-contain mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800">{skill.skillName}</h3>

            <p className="text-blue-600 font-bold mt-2">
              Price: ${skill.price}
            </p>

            <p className="text-yellow-500 font-medium">⭐ {skill.rating}</p>

            {/* View Details Button with Link */}
<Link to={`/skill/${skill.skillId}`}>
  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
    View Details
  </button>
</Link>


          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSkill;
