import React, { useState, useEffect } from "react";
import { BookingModalProps } from "./Interfaces";
import useAppointmentsStore from "./appointmentsStore";

const BookingModal = ({ doctor, onClose }: BookingModalProps) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isDateInvalid, setIsDateInvalid] = useState(false);
  const addAppointment = useAppointmentsStore((state) => state.addAppointment);
  const appointments = useAppointmentsStore((state) => state.appointments);

  useEffect(() => {    
    const existingAppointment = appointments.find(
      (appointment) => appointment.doctorName === doctor.name
    );

    if (existingAppointment) {
      setSelectedDate(existingAppointment.date);
      setSelectedTime(existingAppointment.timeSlot);
    } else {
      setSelectedDate("");
      setSelectedTime("");
    }
  }, [doctor, appointments]);

  const handleConfirm = () => {
    if (!selectedDate) {
      setIsDateInvalid(true);
      return;
    }

    if (selectedTime && selectedDate) {
      const newAppointment = {
        doctorName: doctor.name,
        specialty: doctor.specialty.name,
        date: selectedDate,
        timeSlot: selectedTime,
        location: doctor.location,
      };
      addAppointment(newAppointment);
      onClose();
    } else {
      // alert("Please select both a date and a time slot.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] lg:w-[50%]">
        <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
        <p className="text-lg font-semibold mb-2">{doctor.name}</p>
        <p className="text-sm text-gray-600 mb-4">Available Time Slots:</p>
        <div
          role="button"
          tabIndex={0}
          onClick={() => document.getElementById('date-picker')?.focus()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              document.getElementById('date-picker')?.focus();
            }
          }}
          aria-label="Open date picker"
          className="relative cursor-pointer"
        >
          <label htmlFor="date-picker" className="hidden">Select Date</label>
          <input
            id="date-picker"
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setIsDateInvalid(false);
            }}
            className={`mb-4 p-2 border rounded w-full cursor-pointer ${
              isDateInvalid ? "border-red-500" : "border-gray-300"
            }`}
            onFocus={(e) => e?.target?.showPicker && e?.target?.showPicker()}
            min={new Date(new Date().setHours(0, 0, 0, 0)).toISOString().split("T")[0]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {doctor.timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`py-2 px-4 rounded border text-sm font-medium transition-all cursor-pointer ${
                selectedTime === slot
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;