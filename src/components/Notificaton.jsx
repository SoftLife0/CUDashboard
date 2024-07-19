import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { BiCircle } from 'react-icons/bi';
import profileImage from '../assets/softlife.png'


const Notificaton = () => {
    const activities = [
        { content: 'Quia quae rerum explicabo officiis beatae' },
        { content: 'Voluptatem blanditiis blanditiis eveniet' },
        { content: 'Voluptates corrupti molestias voluptatem' },
    ];

    const staffLeave = [
        { name: 'Nana Kweku Adumatta', department: 'IT' },
        { name: 'Onikosi Adewale', department: 'IT' },
        { name: 'Onikosi Adewale', department: 'IT' },
        { name: 'Onikosi Adewale', department: 'IT' },
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
                {staffLeave.map((staff) => (
                    <div key={staff} className='d-flex justify-content-between mb-2'>
                        <div className='card-body d-flex align-items-center' style={{padding: '1px'}}>
                            <img src={profileImage} alt="" className='rounded-circle'  style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
                            <div>
                                <h6 style={{fontSize:'14px'}}>{staff.name}</h6>
                                {/* <small className='text-muted'>{staff.department}</small> */}
                            </div>

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