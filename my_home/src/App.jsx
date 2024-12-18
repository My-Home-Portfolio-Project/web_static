import React from "react"
import "./App.css"
import Footer  from "./Components/footer";
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
