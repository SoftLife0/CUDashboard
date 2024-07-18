import React from 'react';
import { Table, Badge } from 'react-bootstrap';
// import { BiMenu } from 'react-icons/bs';

const List = () => {
  const staffData = [
    { id: '2457', name: 'Nana Kweku Adumatta', department: 'IT Directorate', status: 'Active' },
    { id: '2147', name: 'Onikosi Adewale', department: 'Finance Directorate', status: 'On Leave' },
    { id: '2457', name: 'Nana Kweku Adumatta', department: 'Audit Directorate', status: 'Resigned' },
    { id: '2147', name: 'Onikosi Adewale', department: 'Chaplaincy', status: 'Active' },
    { id: '2457', name: 'Nana Kweku Adumatta', department: 'SET', status: 'Active' },
    { id: '2147', name: 'Onikosi Adewale', department: 'FASS', status: 'On Leave' },
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

  return (
    <div className="col-12">
      <div className="card overflow-auto">

        <div className="card-body">
          <h5 className="card-title">Recent Staff </h5>

          <Table borderless className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staff, index) => (
                <tr key={index}>
                  <th scope="row">{staff.id}</th>
                  <td><a href="#" className="text-primary">{staff.name}</a></td>
                  <td>{staff.department}</td>
                  <td>{getStatusBadge(staff.status)}</td>
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
