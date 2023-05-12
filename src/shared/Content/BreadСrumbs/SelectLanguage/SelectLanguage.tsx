import React, { useState } from 'react';
import './selectlanguage.css';
import Select, { components } from "react-select";
import turkey from '../../../../images/flags/turkey.svg';
import russia from '../../../../images/flags/russia.svg';
import usa from '../../../../images/flags/usa.svg';

const options = [
  { value: 'ru', label: 'Русский', icon: russia},
  { value: 'en', label: 'Английский', icon: usa},
  { value: 'tr', label: 'Турецкий', icon: turkey}
]

const Option = (props: any) => (
  <components.Option {...props}>
    <img src={props.data.icon} alt="logo" className="country-logo" />
    <span>{props.data.label}</span>
  </components.Option>
);

export function SelectLanguage() {
  const [selectedCountry, setSelectedCountry] = useState(options[0]);

  const handleChange = (value: any) => {
    setSelectedCountry(value);
  };

  const SingleValue = ({ children, ...props }: any) => (
    <components.SingleValue {...props}>
      <img src={selectedCountry.icon} alt="s-logo" className="selected-logo" />
      <span>{children}</span>
    </components.SingleValue>
  );

  return (
    <div>
      <Select
        classNamePrefix='select'
        value={selectedCountry}
        options={options}
        onChange={handleChange}
        components={{
          Option,
          SingleValue
        }}
        hideSelectedOptions={true}
        isSearchable={false}
      />
    </div>
  );
}
