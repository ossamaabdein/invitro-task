"use client";

import React, { useState } from "react";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    photo: "/public/doctor1.jpg",
    specialty: "Cardiology",
    availability: "9:00 AM - 5:00 PM",
    location: "New York, NY",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    photo: "/public/doctor2.jpg",
    specialty: "Dermatology",
    availability: "10:00 AM - 4:00 PM",
    location: "Los Angeles, CA",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    photo: "/public/doctor3.jpg",
    specialty: "Pediatrics",
    availability: "8:00 AM - 3:00 PM",
    location: "Chicago, IL",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    photo: "/public/doctor4.jpg",
    specialty: "Neurology",
    availability: "7:00 AM - 2:00 PM",
    location: "Houston, TX",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Dr. Sarah Davis",
    photo: "/public/doctor5.jpg",
    specialty: "Orthopedics",
    availability: "11:00 AM - 6:00 PM",
    location: "Phoenix, AZ",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Dr. William Martinez",
    photo: "/public/doctor6.jpg",
    specialty: "Oncology",
    availability: "10:00 AM - 5:00 PM",
    location: "Philadelphia, PA",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Dr. Linda Wilson",
    photo: "/public/doctor7.jpg",
    specialty: "Psychiatry",
    availability: "9:00 AM - 4:00 PM",
    location: "San Antonio, TX",
    rating: 4.3,
  },
  {
    id: 8,
    name: "Dr. James Garcia",
    photo: "/public/doctor8.jpg",
    specialty: "Gastroenterology",
    availability: "8:00 AM - 3:00 PM",
    location: "San Diego, CA",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Dr. Patricia Anderson",
    photo: "/public/doctor9.jpg",
    specialty: "Endocrinology",
    availability: "7:00 AM - 1:00 PM",
    location: "Dallas, TX",
    rating: 4.7,
  },
];

const DoctorList = () => {
  const [filter, setFilter] = useState({ specialty: "", availability: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (filter.specialty === "" || doctor.specialty === filter.specialty) &&
      (filter.availability === "" || doctor.availability === filter.availability)
  );

  return (
    <div className="doctor-list py-8 px-10">
      <div className="filters mb-5 flex gap-4 flex-wrap flex-row">
        <select
          name="specialty"
          value={filter.specialty}
          onChange={handleFilterChange}
        >
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>

        <select
          name="availability"
          value={filter.availability}
          onChange={handleFilterChange}
        >
          <option value="">All Availability</option>
          <option value="9:00 AM - 5:00 PM">9:00 AM - 5:00 PM</option>
          <option value="10:00 AM - 4:00 PM">10:00 AM - 4:00 PM</option>
          <option value="8:00 AM - 3:00 PM">8:00 AM - 3:00 PM</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card border p-4 rounded shadow">
            <Image
              src={doctor.photo}
              alt={doctor.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h3 className="text-lg font-bold mt-2">{doctor.name}</h3>
            <p className="text-sm text-gray-600">{doctor.specialty}</p>
            <p className="text-sm text-gray-600">{doctor.availability}</p>
            <p className="text-sm text-gray-600">{doctor.location}</p>
            <p className="text-sm text-yellow-500">Rating: {doctor.rating} ⭐</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;