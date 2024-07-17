import React from 'react';
import { Table, Badge } from 'react-bootstrap';
// import { BiMenu } from 'react-icons/bs';

const List = () => {
  const staffData = [
    { id: '2457', name: 'Nana Kweku Adumatta', department: 'IT Directorate', rank: 'Senior Member' },
    { id: '2147', name: 'Onikosi Adewale', department: 'Finance Directorate', rank: 'Junior Staff' },
    { id: '2457', name: 'Nana Kweku Adumatta', department: 'Audit Directorate', rank: 'Duputy Registrar' },
    { id: '2147', name: 'Onikosi Adewale', department: 'Chaplaincy', rank: 'Senior Staff' },
    { id: '2457', name: 'Nana Kweku Adumatta', department: 'SET', rank: 'NSS' },
    { id: '2147', name: 'Onikosi Adewale', department: 'FASS', rank: 'Faculty' },
  ];

  const getRankBadge = (rank) => {
    switch (rank) {
      case 'Senior Member':
        return <Badge bg="success">Senior Member</Badge>;
      case 'Junior Staff':
        return <Badge bg="warning">Junior Staff</Badge>;
      case 'Duputy Registrar':
        return <Badge bg="danger">Duputy Registrar</Badge>;
      case 'Senior Staff':
        return <Badge bg="info">Senior Staff</Badge>;
        case 'Faculty':
        return <Badge bg="primary">Faculty</Badge>;
      default:
        return <Badge bg="dark">{rank}</Badge>;
    }
  };

  return (
    <div className="col-12">
      <div className="card overflow-auto">

        <div className="card-body">
          <h5 className="card-title">Recent Staff </h5>

          <Table borderless className="datatable">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staff, index) => (
                <tr key={index}>
                  <th scope="row">{staff.id}</th>
                  <td><a href="#" className="text-primary">{staff.name}</a></td>
                  <td>{staff.department}</td>
                  <td>{getRankBadge(staff.rank)}</td>
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
