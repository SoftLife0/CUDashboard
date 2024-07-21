import React, { useState } from 'react';
import FormField from './FormField';

const Form = ({ title, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({}); // Clear form after submission
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <form className="row g-3" onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <FormField
              key={index}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id] || ''}
              onChange={handleChange}
            />
          ))}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-secondary" onClick={() => setFormData({})}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
