import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeveloperForm from "./components/DeveloperForm";
import DeveloperList from "./components/DeveloperList";

function App() {
  const [developers, setDevelopers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchDevelopers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/developers");
      setDevelopers(res.data);
    } catch {
      toast.error("Error fetching developers");
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const handleAdd = async (data) => {
    try {
      await axios.post("http://localhost:5000/developers", data);
      toast.success("Developer added!");
      fetchDevelopers();
    } catch {
      toast.error("Failed to add developer");
    }
  };

  const filtered = developers.filter(
    (dev) =>
      dev.role.toLowerCase().includes(filter.toLowerCase()) ||
      dev.techStack.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
        Developer Directory
      </h1>

      <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
        {/* Developer Form */}
        <DeveloperForm onAdd={handleAdd} />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by role or tech..."
          className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        {/* Developer List */}
        <DeveloperList developers={filtered} />
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
