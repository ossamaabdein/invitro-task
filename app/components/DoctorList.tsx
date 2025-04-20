"use client";

import React, { useState } from "react";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    photo: "/images/dr1.jpg",
    specialty: "Cardiology",
    availability: "9:00 AM - 5:00 PM",
    location: "New York, NY",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    photo: "/images/dr2.jpg",
    specialty: "Dermatology",
    availability: "10:00 AM - 4:00 PM",
    location: "Los Angeles, CA",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    photo: "/images/dr3.jpg",
    specialty: "Pediatrics",
    availability: "8:00 AM - 3:00 PM",
    location: "Chicago, IL",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    photo: "/images/dr4.jpg",
    specialty: "Neurology",
    availability: "7:00 AM - 2:00 PM",
    location: "Houston, TX",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Dr. Sarah Davis",
    photo: "/images/dr5.jpg",
    specialty: "Orthopedics",
    availability: "11:00 AM - 6:00 PM",
    location: "Phoenix, AZ",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Dr. William Martinez",
    photo: "/images/dr6.jpg",
    specialty: "Oncology",
    availability: "10:00 AM - 5:00 PM",
    location: "Philadelphia, PA",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Dr. Linda Wilson",
    photo: "/images/dr7.jpg",
    specialty: "Psychiatry",
    availability: "9:00 AM - 4:00 PM",
    location: "San Antonio, TX",
    rating: 4.3,
  },
  {
    id: 8,
    name: "Dr. James Garcia",
    photo: "/images/dr8.jpg",
    specialty: "Gastroenterology",
    availability: "8:00 AM - 3:00 PM",
    location: "San Diego, CA",
    rating: 4.6,
  }
];

const BookingModal = ({ doctor, onClose, onConfirm }) => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleConfirm = () => {
    if (selectedTime) {
      onConfirm(doctor, selectedTime);
      alert(`Appointment confirmed with ${doctor.name} at ${selectedTime}`);
      onClose();
    } else {
      alert("Please select a time slot.");
    }
  };

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
        <p className="text-lg font-semibold">{doctor.name}</p>
        <p className="text-sm text-gray-600 mb-4">Available Time Slots:</p>
        <ul className="mb-4">
          {timeSlots.map((slot) => (
            <li key={slot} className="mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot}
                  checked={selectedTime === slot}
                  onChange={() => setSelectedTime(slot)}
                  className="mr-2"
                />
                {slot}
              </label>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const AppointmentsSummary = ({ appointments }) => {
  return (
    <div className="appointments-summary py-8 px-10">
      <h2 className="text-2xl font-bold mb-4">Appointments Summary</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-600">No appointments booked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="appointment-card border p-4 rounded shadow"
            >
              <h3 className="text-lg font-bold">{appointment.doctorName}</h3>
              <p className="text-sm text-gray-600">{appointment.specialty}</p>
              <p className="text-sm text-gray-600">{appointment.dateTime}</p>
              <p className="text-sm text-gray-600">{appointment.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DoctorList = () => {
  const [filter, setFilter] = useState({ specialty: "", availability: "" });
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (doctor, timeSlot) => {
    const newAppointment = {
      doctorName: doctor.name,
      specialty: doctor.specialty,
      dateTime: timeSlot,
      location: doctor.location,
    };
    setAppointments((prev) => [...prev, newAppointment]);
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
              // className="rounded-full"
            />
            <h3 className="text-lg font-bold mt-2">{doctor.name}</h3>
            <p className="text-sm text-gray-600">{doctor.specialty}</p>
            <p className="text-sm text-gray-600">{doctor.availability}</p>
            <p className="text-sm text-gray-600">{doctor.location}</p>
            <p className="text-sm text-yellow-500">Rating: {doctor.rating} ⭐</p>
            <button
              onClick={() => setSelectedDoctor(doctor)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onConfirm={handleBooking}
        />
      )}
    </div>
  );
};

export default DoctorList;