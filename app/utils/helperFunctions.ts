export function uniqueSpecialties(
	doctors: { specialty: { id: number; name: string } }[]
) {
	const uniqueValues = Array.from(
		new Set(doctors.map((doctor) => JSON.stringify(doctor.specialty)))
	).map((specialty) => JSON.parse(specialty));
	return uniqueValues || [];
}

export function uniqueTimeSlots(doctors: { timeSlots: string[] }[]) {
	const uniqueTimeSlots = Array.from(
		new Set(doctors.flatMap((doctor) => doctor.timeSlots))
	).sort((a, b) => {
		const timeToNumber = (time: string) => {
			const [hour, minute] = time.split(":");
			const period = time.slice(-2);
			let numericHour = parseInt(hour);
			if (period === "PM" && numericHour !== 12) numericHour += 12;
			if (period === "AM" && numericHour === 12) numericHour = 0;
			return numericHour * 60 + parseInt(minute);
		};
		return timeToNumber(a) - timeToNumber(b);
	});
	return uniqueTimeSlots || [];
}
