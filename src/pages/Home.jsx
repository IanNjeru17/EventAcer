import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to MC Event Hosting</h1>
      <p className="text-lg text-gray-700 mt-4">
        Professional event hosting to make your special moments unforgettable.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Book an Event
      </button>
    </div>
  );
};

export default Home;
