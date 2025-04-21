export interface Doctor {
  id: number;
  name: string;
  photo: string;
  specialty: { id: number; name: string };
  availability: string;
  location: string;
  rating: number;
  timeSlots: string[];
}

export interface BookingModalProps {
  doctor: Doctor;
  onClose: () => void;
}