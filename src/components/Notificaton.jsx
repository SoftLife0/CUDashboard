import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { BiCircle } from 'react-icons/bi';
import { Table } from 'react-bootstrap';


const Notificaton = () => {
    const activities = [
        { content: 'Quia quae rerum explicabo officiis beatae' },
        { content: 'Voluptatem blanditiis blanditiis eveniet' },
        { content: 'Voluptates corrupti molestias voluptatem' },
    ];

    const badgeStyle = {
        width: '7px',
        height: '7px',
        backgroundColor: '#000',
        borderRadius: '50%'
    };

    return (
    <div className="card">
        <div className="card-body">
            <div className='d-flex justify-content-between align-center '>
                <h6 className="card-title">Leave Request </h6>
                <Link to="" style={{textDecoration:'none', color: '#992621'}}><h6>6 request</h6></Link>
            </div>

            <div className=''>
                <Table className="table table-hover">
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Job Title</th>
                   
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="activity">
            {activities.map((activity, index) => (
                <div className="activity-item d-flex" key={index}>
                <div className="activity-content">
                    <BiCircle style={badgeStyle} className='icon'/>
                    {activity.content}
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}

export default Notificaton


// {activities.map((activity, index) => (
//     <div className="activity-item d-flex" key={index}>
//     <div className="activity-content">
//         <BiCircle style={badgeStyle} className='icon'/>
//         {activity.content}
//     </div>
//     </div>
// ))}