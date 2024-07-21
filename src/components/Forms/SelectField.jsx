import React from 'react';

const SelectField = ({ id, label, options, value, onChange }) => {
  return (
    <div className="col-12">
      <label htmlFor={id} className="form-label">{label}</label>
      <select id={id} className="form-select" value={value} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;