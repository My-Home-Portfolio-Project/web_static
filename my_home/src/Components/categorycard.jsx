import React from "react";

const CategoryCards = () => {
  const categories = [
    { name: "Studio Apartments", style: "bg-blue-100" },
    { name: "Semi-Furnished", style: "bg-yellow-100" },
    { name: "Villas", style: "bg-green-100" },
    { name: "Pools", style: "bg-purple-100" },
    { name: "Gated Communities", style: "bg-red-100" },
    { name: "Suburban", style: "bg-indigo-100" },
  ];

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-xl font-semibold mb-6">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${category.style} p-6 rounded-lg shadow-md text-center`}
          >
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
