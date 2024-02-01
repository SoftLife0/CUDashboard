import React from 'react'
import '../App.css'
// import {BiBarChartSquare, BiCalendarExclamation} from 'react-icons/bi'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='main-container'>
        <h5>DASHBOARD</h5>
        <div className='main-cards'>
            <Link to=''>
                <div className='dashboard-item'>
                    <p className='text-muted'>Dashboard</p>
                    <h4 className='dashboard-item-text'>30</h4>
                </div>
            </Link>
            <Link to=''>
                <div className='dashboard-item'>
                    <p className='text-muted'>Dashboard</p>
                    <h4 className='dashboard-item-text'>30</h4>
                </div>
            </Link>
            <Link to=''>
                <div className='dashboard-item'>
                    <p className='text-muted'>Dashboard</p>
                    <h4 className='dashboard-item-text'>30</h4>
                </div>
            </Link>
            
        
        </div>

    </div>
  )
}

export default Dashboard