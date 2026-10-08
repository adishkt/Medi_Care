export function handleValidateForm(
  formValue,
  selectedDate,
  selectedTime,
  nameRef,
) {
  if (!formValue.name.trim() || !/^[A-Za-z ]+$/.test(formValue.name)) {
    alert("Please enter patient name or Invaild Name");
    nameRef.current.focus();
    return false;
  }

  if (!formValue.age || formValue.age < 1 || formValue.age > 120) {
    alert("Please enter a valid age");
    return false;
  }

  if (!formValue.email.includes("@") || !formValue.email.includes(".")) {
    alert("Please enter a valid email");
    return false;
  }

  if (formValue.phone.length !== 10) {
    alert("Please enter a valid phone number");
    return false;
  }

  if (!formValue.place.trim()) {
    alert("Please enter place");
    return false;
  }

  if (!formValue.gender) {
    alert("Please select gender");
    return false;
  }

  if (!selectedDate) {
    alert("Please select appointment date");
    return false;
  }

  if (!selectedTime) {
    alert("Please select appointment time");
    return false;
  }

  return true;
}
