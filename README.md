# MediCare — Doctor Appointment Booking

MediCare is a responsive doctor appointment booking web application built with React. Users can browse doctors, search by name, filter by specialization, view doctor details and availability, book appointments, and manage their appointments.

## Features

- **Doctor Listing:** Browse doctors with profile images and information.
- **Search Doctors:** Search doctors by name with debounced input.
- **Filter by Specialization:** Filter doctors by medical specialization.
- **Pagination:** Navigate through doctor listings page by page.
- **Doctor Details:** View doctor information and availability schedules.
- **Book Appointments:** Select a date and time and enter patient details with form validation.
- **Manage Appointments:** View booked appointments and cancel them.
- **Dark and Light Mode:** Switch themes with preferences saved in local storage.
- **Responsive UI:** Designed for desktop, tablet, and mobile screens.
- **Loading and Error States:** Display loading indicators and handle empty results and errors.
- **Routing:** Navigate between pages using React Router.

## Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** React Router
- **Doctor Data:** [DummyJSON Users API](https://dummyjson.com/users)
- **Appointments API:** JSON Server
- **State Management:** React Hooks and Context API

## Pages

- **Home:** Search, filter, and browse doctors.
- **Doctor Details:** View doctor profiles and availability.
- **Book Appointment:** Submit patient details and book an appointment.
- **My Appointments:** View and cancel bookings.
- **About:** Learn about MediCare.
- **Contact:** View contact information.
- **Not Found:** Display a page for invalid routes.

## Project Structure


## Project Structure

```text
mediCare/
├── public/
├── src/
│   ├── assets/
│   │   ├── female_doctor_card.png
│   │   ├── male_doctor_card.png
│   │   ├── homeimage.png
│   │   └── logo.png
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── layout/
│   ├── pages/
│   ├── route/
│   ├── utils/
│   │   ├── doctorData.js
│   │   └── validateForm.js
│   ├── App.css
│   ├── App.jsx
│   ├── constants.js
│   ├── index.css
│   └── main.jsx
├── db.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```


## Getting Started

### Prerequisites

- Node.js and npm
- A code editor such as Visual Studio Code

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Replace the repository URL with your GitHub repository URL.

### 2. Navigate to the project folder

```bash
cd mediCare
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the appointments API

Make sure JSON Server is installed in your project. Start it with:

```bash
npx json-server --watch db.json --port 3000
```

The appointments API will be available at:

```text
http://localhost:3000/appointments
```

The `db.json` file contains the appointments resource:

```json
{
  "appointments": []
}
```

### 5. Start the React application

Open another terminal in the project folder and run:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## Data Sources

### Doctors

Doctor information is fetched from DummyJSON:

```text
https://dummyjson.com/users
```

Doctor specializations and availability schedules are assigned using local application data.

### Appointments

Appointment records are stored using JSON Server. The application supports creating, retrieving, and deleting appointments.

For local development, the API runs on port `3000`. When deploying, configure the frontend to use your deployed API URL instead of `localhost`.

## React Concepts Used

- Functional components and props
- `useState` and `useEffect`
- `useContext` for theme management
- `useReducer` for form state
- `useRef` for input focus
- `useMemo` for filtering calculations
- `useCallback` for callback functions
- Custom hooks: `useDebounce` and `useLocalStorage`
- React Router and dynamic routes
- Array methods such as `map`, `filter`, and `slice`
- Asynchronous API requests using `fetch`, `async`, and `await`
- Controlled forms and validation
- Conditional rendering and list keys

## Future Improvements

- Prevent double booking of the same appointment slot.
- Add user authentication and personalized appointments.
- Improve appointment filtering and sorting.
- Add automated tests and accessibility improvements.

## Author

**Adish K T**

- GitHub: [github.com/adishkt](https://github.com/adishkt)

## License

This project was developed for educational purposes.
