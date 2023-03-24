import React, { useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import styled from "styled-components";

const SelectCountry = styled.select`
  width: 80%;
  height: 50px;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`;

const CountryDropdown = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (e) => {
    setSelectedCountry(e.target.value);
    props.onInputChange(e);
  };

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  return (
    <SelectCountry
      value={selectedCountry}
      onChange={selectCountryHandler}
      name="country"
      required
    >
      <option value="" disabled hidden>
        Select a Country
      </option>
      {!!countryArr?.length &&
        countryArr.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
    </SelectCountry>
  );
};

export default CountryDropdown;
