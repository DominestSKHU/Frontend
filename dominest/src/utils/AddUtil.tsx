export const handleInputChange = (e, field) => {
    let value = e.target.value;
  
    setResidentId((prevResident) => ({
      ...prevResident,
      [field]: value,
    }));
    console.log(value);
  };