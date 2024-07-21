import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import { BiEditAlt, BiCloudUpload, BiSolidPlusCircle } from 'react-icons/bi';

const List = () => {
  const staffData = [
    { name: 'Nana Kweku Adumatta', jobTitle: 'IT Director', department: 'IT', status: 'Active' },
    { name: 'Onikosi Adewale', jobTitle: 'Administrator', department: 'Finance', status: 'On Leave' },
    { name: 'Nana Kweku Adumatta', jobTitle: 'Application Developer', department: 'Audit', status: 'Resigned' },
    { name: 'Onikosi Adewale', jobTitle: 'Senior Pastor', department: 'Chaplaincy', status: 'Active' },
    { name: 'Nana Kweku Adumatta', jobTitle: 'HR Director', department: 'HR', status: 'Active' },
    { name: 'Onikosi Adewale', jobTitle: 'Dean', department: 'Faculty', status: 'On Leave' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <Badge bg="success">Active</Badge>;
      case 'Resigned':
        return <Badge bg="danger">Resigned</Badge>;
      case 'On Leave':
        return <Badge bg="warning">On Leave</Badge>;
      default:
        return <Badge bg="dark">{rank}</Badge>;
    }
  };

  const handleEdit = (staff) => {
    console.log(`Edit staff: ${staff.name}`);
  };



  return (
    <div className="col-lg-12">
      <div className="card overflow-auto">

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3 p-1">
            <h5>Recent Staff</h5>
            <div>
              {/* <button className="me-2 pill-button-alternate">
                <BiCloudUpload className="icon" /> Import From CSV
              </button> */}
              <button className='pill-button-alternate' style={{color:'#fff', background:'#992621'}}>
                <BiSolidPlusCircle className="icon" /> Add Employee
              </button>
            </div>
          </div>
          
          <div className='table-responsive'>
            <Table borderless className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((staff, index) => (
                  <tr key={index}>
                    <td>
                      <a href="#" style={{textDecoration: 'none', color:'#000'}}>{staff.name}</a>
                    </td>
                    <td>{staff.jobTitle}</td>
                    <td>{staff.department}</td>
                    <td>{getStatusBadge(staff.status)}</td>
                    <td><button onClick={() => handleEdit(staff)} style={{background: '#fff', border: 'none', borderRadius: '5px', }}><BiEditAlt className='icon'/></button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
