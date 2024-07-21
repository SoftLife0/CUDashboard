import React from 'react'
import { BiUser } from 'react-icons/bi'
import Notificaton from './Notificaton'

const Card = () => {
  return (
    <div className="row">
        <div className='col-lg-12 col-12'>
            <div className='main-cards'>
                <div className='dashboard-item'>
                    <h6 className='text-muted dashboard-item-smalltext'>Total Employees</h6>
                    <div class="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <BiUser/>
                        </div>
                        <div className="ps-3">
                            <h4 className='dashboard-item-text'>233</h4>
                        </div>
                    </div>
                </div>
                <div className='dashboard-item'>
                    <h6 className='text-muted dashboard-item-smalltext'>Active Employees</h6>
                    <div class="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <BiUser/>
                        </div>
                        <div className="ps-3">
                            <h4 className='dashboard-item-text'>227</h4>
                        </div>
                    </div>
                </div>

                <div className='dashboard-item'>
                    <h6 className='text-muted dashboard-item-smalltext'>Active Employees</h6>
                    <div class="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <BiUser/>
                        </div>
                        <div className="ps-3">
                            <h4 className='dashboard-item-text'>17</h4>
                        </div>
                    </div>
                </div>

                <div className='dashboard-item'>
                    <h6 className='text-muted dashboard-item-smalltext'>Active Employees</h6>
                    <div class="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <BiUser/>
                        </div>
                        <div className="ps-3">
                            <h4 className='dashboard-item-text'>17</h4>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Card