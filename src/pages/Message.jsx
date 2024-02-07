import React, { useState, useEffect } from 'react';
import { getMessages } from '../utils/api';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Message = () => {

    const [openSidebarToogle, setOpenSidebarToogle] = useState("false")
    const OpenSidebar = () => {
        console.log("Triggered sidebar function")
        setOpenSidebarToggle(!openSidebarToggle)
      }
    
    const [messageData, setMessageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = '2';
                const token = 'user_token';

                const userData = await getMessages(userId, token);
                setMessageData(userData.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    return(
        <main className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

            <div className="main-container">
            <h5>DASHBOARD</h5>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
            <div className='main-cards'>
                {contactFormData && Object.entries(contactFormData).map(([key, value]) => (
                <div className='dashboard-item' key={key}>
                    <p className='text-muted'>{key}</p>
                    <h4 className='dashboard-item-text'>{value}</h4>
                </div>
                ))} 
                </div>
            )}
            </div>
        </main>
    );
};

export default Message