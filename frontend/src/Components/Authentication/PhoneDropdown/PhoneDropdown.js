import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./PhoneStyle.css";

const PhoneDropdown = ({ setPhone, validatePhone }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(e);
    setPhone(e);
    validatePhone(e);
  };
  return (
    <PhoneInput
      name="phoneNumber"
      placeholder="Phone number"
      value={value}
      onChange={handleClick}
      maxLength="15"
    />
  );
};

export default PhoneDropdown;
