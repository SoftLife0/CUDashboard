import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import Form from '../Forms/Form';



const School = () => {

    const [schools, setSchools] = useState([]);

    const formFields = [
        { id: 'schoolName', label: 'School Name', type: 'text' },
        { id: 'location', label: 'Location', type: 'text' },
        { id: 'level', label: 'Level', type: 'text' },
    ];

    const handleFormSubmit = (formData) => {
        setSchools([...schools, formData]);
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this school?");
        if (confirmDelete) {
          const newSchools = schools.filter((_, i) => i !== index);
          setSchools(newSchools);
        }
    };


  return (
    <div class="row">
        <div className="col-lg-5">
            <Form title="Add New School" fields={formFields} onSubmit={handleFormSubmit} />
        </div>

        <div className="col-lg-7">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">All School</h5>
                    
                    <div>
                        <Table responsive className="table table-hover">
                            <thead>
                                <tr>
                                    <th>School Name</th>
                                    {/* <th>School Name</th> */}
                                    <th>Location</th>
                                    <th>Level</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schools.map((school, index) => (
                                    <tr key={index}>
                                    <td>{school.schoolName}</td>
                                    <td>{school.location}</td>
                                    <td>{school.level}</td>
                                    <td>
                                        <BiEditAlt className='icon' />
                                        <BiTrashAlt className='icon' onClick={() => handleDelete(index)} />
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default School