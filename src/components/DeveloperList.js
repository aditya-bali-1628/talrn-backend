import React from "react";

export default function DeveloperList({ developers }) {
  if (!developers.length)
    return <p className="text-center text-gray-500">No developers found</p>;

  return (
    <div className="grid gap-3">
      {developers.map((dev, index) => (
        <div key={index} className="bg-white shadow p-4 rounded-lg">
          <h2 className="font-semibold text-lg">{dev.name}</h2>
          <p>Role: {dev.role}</p>
          <p>Tech Stack: {dev.techStack}</p>
          <p>Experience: {dev.experience} years</p>
        </div>
      ))}
    </div>
  );
}
