import { useParams } from "react-router-dom";
import skillData from "../../data/skillData.json";
import toast from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const skill = skillData.find((item) => item.skillId == id);

  if (!skill) return <h2 className="p-10 text-gray-900">Skill Not Found</h2>;

  // Booking Toast Function
  const handleBooking = () => {
    toast.success("Your booking request has been sent.");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-10 bg-gray-100">

      {/* LEFT SECTION */}
      <div className="md:col-span-2">

        {/* Big Image */}
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-[380px] object-cover rounded-xl shadow"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold mt-6 text-gray-900">
          {skill.skillName}
        </h1>

        {/* Provider */}
        <p className="text-gray-700 mt-2">
          by <span className="font-semibold text-gray-900">{skill.providerName}</span>
        </p>

        {/* Info Cards */}
        <div className="flex flex-wrap gap-6 mt-6">

          <div className="border px-6 py-4 rounded-lg shadow-sm bg-white">
            <p className="text-sm text-gray-600">Price</p>
            <p className="text-lg font-semibold text-gray-900">${skill.price}</p>
          </div>

          <div className="border px-6 py-4 rounded-lg shadow-sm bg-white">
            <p className="text-sm text-gray-600">Rating</p>
            <p className="text-lg font-semibold text-gray-900">⭐ {skill.rating}</p>
          </div>

          <div className="border px-6 py-4 rounded-lg shadow-sm bg-white">
            <p className="text-sm text-gray-600">Slots Available</p>
            <p className="text-lg font-semibold text-gray-900">{skill.slotsAvailable}</p>
          </div>

          <div className="border px-6 py-4 rounded-lg shadow-sm bg-white">
            <p className="text-sm text-gray-600">Category</p>
            <p className="text-lg font-semibold text-gray-900">{skill.category}</p>
          </div>

        </div>

        <h2 className="text-xl font-bold mt-10 text-gray-900">About this skill</h2>

        <p className="text-gray-700 mt-3 leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="h-fit border rounded-xl p-6 shadow-md bg-gray-50">

        <h2 className="text-xl font-semibold mb-4 text-gray-900">Book a Session</h2>

        <label className="text-sm font-medium text-gray-700 ">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
        />

        <label className="text-sm font-medium text-gray-700">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
        />

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
        >
          Confirm Booking
        </button>
      </div>

    </div>
  );
};

export default SkillDetails;
