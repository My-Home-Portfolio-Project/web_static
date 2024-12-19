import React from "react";

const Dashboard = () => {
  const boxes = Array(9).fill("Photo Placeholder");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-600 text-sm font-medium"
          >
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
