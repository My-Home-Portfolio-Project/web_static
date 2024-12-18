import React from "react";

const FilterMenu = () => {
  return (
    <div className="container mx-auto px-6 py-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <select className="border rounded-md px-4 py-2">
          <option>Furnishing Level</option>
          <option>Fully Furnished</option>
          <option>Semi-Furnished</option>
          <option>Unfurnished</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Location</option>
          <option>Urban</option>
          <option>Suburban</option>
          <option>Countryside</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Studio</option>
          <option>Villas</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Tenant Needs</option>
          <option>Pet-Friendly</option>
          <option>Family Homes</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Amenities & Lifestyle</option>
          <option>Luxury Rentals</option>
          <option>Eco-Friendly</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Specialty</option>
          <option>Off-Grid Homes</option>
          <option>Floating Homes</option>
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;
