function About() {
  return (
    <div className="about-card">
      <h1 >About MediCare</h1>
      <p className="about-description">
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
