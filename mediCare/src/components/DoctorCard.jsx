function DoctorCard(props) {
  const { docData } = props;

  const {specialization} =props;

  const { firstName, lastName, age, gender, email, phone, image  } = docData;
  return (
    <div className="w-auto h-auto p-5 m-5 hover:bg-gray-600 cursor-pointer bg-[#f0f0f0]">
      <img src={image} />
      <h1>
        Dr.{firstName} {lastName}
      </h1>
      <h1>{age}</h1>
      <h1>{gender}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <h1>{specialization}</h1>

    </div>
  );
}

export default DoctorCard;

// 🖼️ Doctor image
// 👨‍⚕️ Doctor name — add Dr. before the name
// 🧑 Age
// ⚧ Gender
// 📧 Email
// 📞 Phone
