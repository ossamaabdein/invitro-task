import Image from "next/image";
import useAppointmentsStore from "../common/appointmentsStore";
import { Doctor } from "../common/Interfaces";

const DoctorCard = ({ doctor, setSelectedDoctor } : { doctor: Doctor, setSelectedDoctor: (doctor: Doctor) => void }) => {
  const { appointments } = useAppointmentsStore();

  const isDoctorBooked = appointments.some(
    (appointment) => appointment.doctorName === doctor.name
  );

  return (
    <div key={doctor.id} className="doctor-card border p-4 rounded shadow">
      <div className="img-container relative w-full h-[15rem]">
        {doctor?.photo && (
          <Image
            src={doctor?.photo}
            alt={doctor?.name}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <h3 className="text-lg font-bold mt-2">{doctor?.name}</h3>
      <p className="text-sm text-gray-600">{doctor?.specialty?.name}</p>
      <p className="text-sm text-gray-600">{doctor?.availability}</p>
      <p className="text-sm text-gray-600">{doctor?.location}</p>
      <p className="text-sm text-yellow-500">Rating: {doctor?.rating} ⭐</p>
      <button
        onClick={() => setSelectedDoctor(doctor)}
        className={`mt-4 py-2 px-4 rounded cursor-pointer ${
          isDoctorBooked ? "bg-green-600 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isDoctorBooked ? "Booked" : "Book Appointment"}
      </button>
    </div>
  );
};

export default DoctorCard;
