import React from 'react'
import { Badge } from 'react-bootstrap';
import { BiCircle } from 'react-icons/bi';
import { TbBackground } from 'react-icons/tb';


const Notificaton = () => {
    const activities = [
        { content: 'Quia quae rerum explicabo officiis beatae' },
        { content: 'Voluptatem blanditiis blanditiis eveniet' },
        { content: 'Voluptates corrupti molestias voluptatem' },
        { content: 'Tempore autem saepe occaecati voluptatem tempore' },
        { content: 'Est sit eum reiciendis exercitationem' },
        { content: 'Dicta dolorem harum nulla eius. Ut quidem quidem sit quas'},
    ];

    const badgeStyle = {
        width: '10px',
        height: '10px',
    };

    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Recent Activity</h5>
            <div className="activity">
            {activities.map((activity, index) => (
                <div className="activity-item d-flex" key={index}>
                <div className="activity-content">
                    <BiCircle style={badgeStyle} bg="warning" className='icon'/>
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