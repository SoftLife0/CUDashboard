import React, { useState } from 'react'
import Form from '../Forms/Form';
import DynamicTable from '../Forms/DynamicTable';




const School = () => {

    const [schools, setSchools] = useState([]);
    const [currentSchool, setCurrentSchool] = useState(null);

    const formFields = [
        { id: 'schoolName', label: 'School Name', type: 'text' },
        { id: 'location', label: 'Location', type: 'text' },
        { id: 'level', label: 'Level', type: 'text' },
    ];

    const handleEdit = (index) => {
        setCurrentSchool(index); // Set the current school to be edited
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this school?");
        if (confirmDelete) {
          const newSchools = schools.filter((_, i) => i !== index);
          setSchools(newSchools);
        }
    };


  return (
    <div className="row">
        <div className="col-lg-5">
            <Form
                title={currentSchool !== null ? 'Edit School' : 'Add New School'}
                fields={formFields}
                initialData={currentSchool !== null ? schools[currentSchool] : {}}
                data={schools}
                setData={setSchools}
                currentDataIndex={currentSchool}
                setCurrentDataIndex={setCurrentSchool}
            />
        </div>

        <div className="col-lg-7">
            <div className="col-lg-7"> 
                <DynamicTable
                    data={banks}
                    fields={formFields}
                    setData={setBanks}
                    setCurrentDataIndex={setCurrentBank}
                />
            </div>
        </div>
    </div>
  )
}

export default School