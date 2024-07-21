import React, { useState, useEffect } from 'react';
import FormField from './FormField';
import SelectField from './SelectField';


const Form = ({ title, fields, initialData, data, setData, currentDataIndex, setCurrentDataIndex  }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentDataIndex !== null) {
      // Editing an existing data
      const updatedData = data.map((item, index) =>
        index === currentDataIndex ? formData : item
      );
      setData(updatedData);
      setCurrentDataIndex(null); // Reset current data index after editing
    } else {
      // Adding new data
      setData([...data, formData]);
    }
    setFormData({}); // Clear form after submission
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <form className="row g-2 my-2" onSubmit={handleSubmit}>
        {fields.map((field, index) => {
            if (field.type === 'select') {
              return (
                <SelectField
                  key={index}
                  id={field.id}
                  label={field.label}
                  options={field.options}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                />
              );
            }
            return (
              <FormField
                key={index}
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id] || ''}
                onChange={handleChange}
              />
            );
          })}
          <div className="text-center mt-3">
            <button type="submit" className="pill-button me-2" style={{padding: '8px 12px'}}>Submit</button>
            <button type="reset" className="pill-button-alternate" onClick={() => setFormData({})}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
