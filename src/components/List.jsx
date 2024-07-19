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
    <div className="col-12">
      <div className="card overflow-auto">

        <div className="card-body">
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h5 className="card-title">Recent Staff </h5>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <p><BiCloudUpload className='icon'/> Import From CSV</p>
              </div>
              <div className='col-md-6'>
                <button><BiSolidPlusCircle className='icon'/> Add Employee</button>
              </div>
            </div>
          </div>
          
          <br />
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
                  <td><a href="#" style={{textDecoration: 'none', color:'#000'}}>{staff.name}</a></td>
                  <td scope="row">{staff.jobTitle}</td>
                  <td>{staff.department}</td>
                  <td>{getStatusBadge(staff.status)}</td>
                  {/* <td><button onClick={() => handleEdit(staff)}><BiEditAlt className='icon'/> Edit</button></td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default List;
