import React from 'react'
import { Badge } from 'react-bootstrap';


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
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        marginTop: '3px',
        zIndex: 1,
        fontSize: '11px',
        lineHeight: 0,
        border: '3px solid #fff',
        flexShrink: 0,
        flexGrow: 0,
    };

    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Recent Activity</h5>
            <div className="activity">
            {activities.map((activity, index) => (
                <div className="activity-item d-flex" key={index}>
                <Badge bg="warning" className='me-2' style={badgeStyle}></Badge>
                <div className="activity-content">
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