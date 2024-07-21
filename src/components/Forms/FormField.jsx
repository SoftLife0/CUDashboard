import React from 'react';

const FormField = ({ id, label, type, placeholder, value, onChange }) => {
  return (
    <div className="col-12">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormField;
