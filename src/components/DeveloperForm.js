import React, { useState } from "react";

export default function DeveloperForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    techStack: "",
    experience: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.techStack || !form.experience)
      return alert("All fields required!");
    onAdd(form);
    setForm({ name: "", role: "", techStack: "", experience: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 mb-4 space-y-3"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Role</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Full-Stack</option>
      </select>
      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack (comma separated)"
        value={form.techStack}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="experience"
        placeholder="Experience (years)"
        value={form.experience}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded"
      >
        Add Developer
      </button>
    </form>
  );
}
