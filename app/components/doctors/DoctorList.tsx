"use client";

import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import BookingModal from "../common/BookingModal";
import SelectInput from "../common/SelectInput";
import { doctors } from "@/app/data/doctorsData";
import { Doctor } from "../common/Interfaces";

import { uniqueSpecialties, uniqueTimeSlots } from "@/app/utils/helperFunctions";

const specialtyOptions = [
	{ value: "", label: "All Specialties" },
  ...uniqueSpecialties(doctors)?.map((specialty: { name: string }) => ({
		value: specialty.name,
		label: specialty.name,
	})),
];

const timeSlotOptions = [
	{ value: "", label: "All Time Slots" },
	...uniqueTimeSlots(doctors)?.map((slot : string) => ({
		value: slot,
		label: slot,
	})),
];

const DoctorList = () => {
	const [filter, setFilter] = useState({ specialty: "", timeSlot: "" });
	const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

	const filteredDoctors = doctors?.filter((doctor) => {
		const isSpecialtyMatch =
			filter?.specialty === "" || doctor?.specialty.name === filter?.specialty;

		const isTimeSlotMatch =
			filter?.timeSlot === "" || doctor?.timeSlots.includes(filter?.timeSlot);

		return isSpecialtyMatch && isTimeSlotMatch;
	});

	return (
		<div className="doctor-list py-8 px-8 lg:px-10">
			<div className="filters mb-5 flex gap-4 flex-wrap flex-row">
				<label htmlFor="specialty-select" className="sr-only">Filter by Specialty</label>
				<SelectInput
					name="specialty"
					id="specialty-select"
					value={
						specialtyOptions.find(
							(option) => option.value === filter?.specialty
						) || null
					}
					onChange={(selectedOption) =>
						setFilter((prev) => ({
							...prev,
							specialty: String(selectedOption?.value || ""),
						}))
					}
					options={specialtyOptions}
					placeholder="All Specialties"
					className="w-full lg:w-[14rem]"
				/>
				<label htmlFor="time-slot-select" className="sr-only">Filter by Time Slot</label>
				<SelectInput
					name="timeSlot"
					id="time-slot-select"
					value={
						timeSlotOptions.find(
							(option) => option.value === filter.timeSlot
						) || null
					}
					onChange={(selectedOption) =>
						setFilter((prev) => ({
							...prev,
							timeSlot: String(selectedOption?.value || ""),
						}))
					}
					options={timeSlotOptions}
					placeholder="All Time Slots"
					className="w-full lg:w-[14rem]"
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
				{filteredDoctors?.map((doctor) => (
					<DoctorCard
						key={doctor?.id}
						doctor={doctor}
						setSelectedDoctor={setSelectedDoctor}
					/>
				))}
			</div>

			{selectedDoctor && (
				<BookingModal
					doctor={selectedDoctor}
					onClose={() => setSelectedDoctor(null)}
				/>
			)}
		</div>
	);
};

export default DoctorList;