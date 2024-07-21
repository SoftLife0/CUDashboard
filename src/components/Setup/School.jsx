import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import Form from '../Forms/Form';



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
                                    <th>Level of School</th>
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
                                        <BiEditAlt className='icon'  onClick={() => handleEdit(index)}/>
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