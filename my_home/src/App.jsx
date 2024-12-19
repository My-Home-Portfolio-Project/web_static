import React from "react"
import "./App.css"
import Footer  from "./Components/footer";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/navbar";
import FilterMenu from "./Components/FilterMenu";
import CategoryCards from "./Components/categorycard";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-white shadow py-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Linking tenants to realtors</h1>
        </div>
      </header>

      {/* Filter Menu */}
      <FilterMenu />

      {/* Top Categories */}
      <section className="py-10 bg-gray-50">
          <CategoryCards />
      </section>*/

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Categories Section */}
          <div className="flex-shrink-0 w-full lg:w-1/3 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="font-medium">Furnishing Level:</span>
                <select className="border rounded-md px-4 py-2 flex-grow">
                  <option>Fully Furnished</option>
                  <option>Semi-Furnished</option>
                  <option>Unfurnished</option>
                </select>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">Location:</span>
                <select className="border rounded-md px-4 py-2 flex-grow">
                  <option>Urban</option>
                  <option>Suburban</option>
                  <option>Countryside</option>
                </select>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">Property Type:</span>
                <select className="border rounded-md px-4 py-2 flex-grow">
                  <option>Apartment</option>
                  <option>Studio</option>
                  <option>Villas</option>
                </select>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">Tenant Needs:</span>
                <select className="border rounded-md px-4 py-2 flex-grow">
                  <option>Pet-Friendly</option>
                  <option>Family Homes</option>
                  <option>Student Housing</option>
                </select>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">Amenities & Lifestyle:</span>
                <select className="border rounded-md px-4 py-2 flex-grow">
                  <option>Luxury Rentals</option>
                  <option>Eco-Friendly</option>
                  <option>Serviced Apartments</option>
                </select>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">Specialty:</span>
                <select className="border rounded-md px-4 py-2 flex-grow">
                  <option>Off-Grid Homes</option>
                  <option>Tiny Homes</option>
                  <option>Floating Homes</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Dashboard Section */}
          <div className="flex-grow bg-white shadow rounded-lg p-6">
            <Dashboard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
