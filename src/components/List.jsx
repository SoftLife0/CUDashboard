import React from 'react';
import { Dropdown, Table, Badge } from 'react-bootstrap';
// import { BiMenu } from 'react-icons/bs';

const List = () => {
  const salesData = [
    { id: '#2457', customer: 'Brandon Jacob', product: 'At praesentium minu', price: '$64', status: 'Approved' },
    { id: '#2147', customer: 'Bridie Kessler', product: 'Blanditiis dolor omnis similique', price: '$47', status: 'Pending' },
    { id: '#2049', customer: 'Ashleigh Langosh', product: 'At recusandae consectetur', price: '$147', status: 'Approved' },
    { id: '#2644', customer: 'Angus Grady', product: 'Ut voluptatem id earum et', price: '$67', status: 'Rejected' },
    { id: '#2644', customer: 'Raheem Lehner', product: 'Sunt similique distinctio', price: '$165', status: 'Approved' }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <Badge bg="success">Approved</Badge>;
      case 'Pending':
        return <Badge bg="warning">Pending</Badge>;
      case 'Rejected':
        return <Badge bg="danger">Rejected</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="col-12">
      <div className="card recent-sales overflow-auto">
        <div className="filter">
          <Dropdown>
            <Dropdown.Toggle variant="link" className="icon">
              {/* <BiMenu /> */}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
              <Dropdown.Header className="text-start">
                <h6>Filter</h6>
              </Dropdown.Header>
              <Dropdown.Item href="#">Today</Dropdown.Item>
              <Dropdown.Item href="#">This Month</Dropdown.Item>
              <Dropdown.Item href="#">This Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="card-body">
          <h5 className="card-title">Recent Sales <span>| Today</span></h5>

          <Table borderless className="datatable">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale, index) => (
                <tr key={index}>
                  <th scope="row"><a href="#">{sale.id}</a></th>
                  <td>{sale.customer}</td>
                  <td><a href="#" className="text-primary">{sale.product}</a></td>
                  <td>{sale.price}</td>
                  <td>{getStatusBadge(sale.status)}</td>
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
