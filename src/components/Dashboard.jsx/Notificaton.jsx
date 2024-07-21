import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import profileImage from '../../assets/softlife.png'


const Notificaton = () => {
  
    const staffLeave = [
        { name: 'Nana Kweku Adumatta', department: 'IT', requestType: 'Leave' },
        { name: 'Onikosi Adewale', department: 'IT', requestType: 'Statement' },
        { name: 'Onikosi Adewale', department: 'IT', requestType: 'Leave' },
        { name: 'Onikosi Adewale', department: 'IT', requestType: 'Statement' },
    ];

    return (
    <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
                <h6 className="card-title">Pending Approval</h6>
                <Link to="#" style={{ textDecoration: 'none', color: '#992621' }}>
                <h6>4 request</h6>
                </Link>
            </div>

            <div className=''>
            {staffLeave.map((staff) => (
                <div key={staff.id} className="list-group-item d-flex align-items-center justify-content-between p-2">
                    <div className="d-flex align-items-center">
                    <img
                        src={profileImage}
                        alt=""
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px', objectFit: 'cover', marginRight: '10px' }}
                    />
                    <span>{staff.name}</span>
                    </div>
                    <div className="d-flex align-items-center">
                    <span className="text-muted">{staff.requestType}</span>
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