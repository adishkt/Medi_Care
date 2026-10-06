export const specialization = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
  "General Physician",
  "Dentist",
];

export const availabilitySchedules = [
  {
    Monday: ["09:00 AM", "10:00 AM", "11:00 AM"],
    Wednesday: ["02:00 PM", "03:00 PM", "04:00 PM"],
    Friday: ["09:00 AM", "10:00 AM"],
  },

  {
    Tuesday: ["10:00 AM", "11:00 AM", "12:00 PM"],
    Thursday: ["02:00 PM", "03:00 PM", "04:00 PM"],
    Saturday: ["10:00 AM", "11:00 AM"],
  },

  {
    Monday: ["02:00 PM", "03:00 PM", "04:00 PM"],
    Tuesday: ["09:00 AM", "10:00 AM"],
    Friday: ["02:00 PM", "03:00 PM"],
  },

  {
    Wednesday: ["09:00 AM", "10:00 AM", "11:00 AM"],
    Thursday: ["03:00 PM", "04:00 PM", "05:00 PM"],
    Saturday: ["09:00 AM", "10:00 AM", "11:00 AM"],
  },

  {
    Monday: ["10:00 AM", "11:00 AM"],
    Wednesday: ["02:00 PM", "03:00 PM", "04:00 PM"],
    Saturday: ["10:00 AM", "11:00 AM", "12:00 PM"],
  },

  {
    Tuesday: ["09:00 AM", "10:00 AM", "11:00 AM"],
    Thursday: ["01:00 PM", "02:00 PM", "03:00 PM"],
    Friday: ["04:00 PM", "05:00 PM"],
  },

  {
    Monday: ["03:00 PM", "04:00 PM", "05:00 PM"],
    Wednesday: ["09:00 AM", "10:00 AM"],
    Friday: ["02:00 PM", "03:00 PM", "04:00 PM"],
  },
];

export const doctorImages = {
  1: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  2: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  3: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  4: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
  5: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38",
  6: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f",
  7: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
};

export const getSpecialization = (id) => {
  return specialization[(id - 1) % specialization.length];
};

export const getDoctorAvailability = (id) => {
  const scheduleIndex = (id - 1) % availabilitySchedules.length;

  return availabilitySchedules[scheduleIndex];
};
