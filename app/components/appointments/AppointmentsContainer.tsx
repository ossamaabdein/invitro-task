'use client';
import useAppointmentsStore from "../common/appointmentsStore";

const AppointmentsContainer = () => {
    const { appointments } = useAppointmentsStore();

    return (
        <div className="appointments-container p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">My Appointments</h2>
            {appointments.length === 0 ? (
                <p className="text-gray-600 text-center">No appointments booked yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appointments.map((appointment, index) => (
                        <div
                            key={index}
                            className="appointment-card border p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">
                                {appointment.doctorName}
                            </h3>
                            <p className="text-sm text-gray-500 mb-1">
                                <span className="font-medium text-gray-700">Specialty:</span> {appointment.specialty}
                            </p>
                            <p className="text-sm text-gray-500 mb-1">
                                <span className="font-medium text-gray-700">Date:</span> {appointment.date}
                            </p>
                            <p className="text-sm text-gray-500 mb-1">
                                <span className="font-medium text-gray-700">Time Slot:</span> {appointment.timeSlot}
                            </p>
                            <p className="text-sm text-gray-500">
                                <span className="font-medium text-gray-700">Location:</span> {appointment.location}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AppointmentsContainer;