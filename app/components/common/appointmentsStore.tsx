import { create } from 'zustand';

interface Appointment {
  doctorName: string;
  specialty: string;
  date: string;
  timeSlot: string;
  location: string;
}

interface AppointmentsStore {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
}

const useAppointmentsStore = create<AppointmentsStore>((set) => ({
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({ appointments: [...state.appointments, appointment] })),
}));

export default useAppointmentsStore;