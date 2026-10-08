function About() {
  return (
    <div className="text-center p-10 border border-gray-500 rounded-xl w-96 mx-auto mt-10 mb-10">
      <h1 className="text-4xl font-bold">About MediCare</h1>
      <p className="mt-5">
        MediCare is a simple doctor appointment booking application.
      </p>
      <h2 className="text-2xl font-bold mt-8">Features</h2>
      <ul className="mt-3 inline-block text-left">
        <li>-- Find doctors</li>
        <li>-- Search and filter doctors</li>
        <li>-- View doctor details</li>
        <li>-- Book appointments</li>
        <li>-- Manage appointments</li>
      </ul>
    </div>
  );
}

export default About;
