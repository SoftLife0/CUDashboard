import React from 'react'
import { BiUser } from 'react-icons/bi'

const Card = () => {
  return (
    <div className='col-12'>
        <div className='main-cards'>
            <div className='dashboard-item'>
                <p className='text-muted'>Total Employees</p>
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
                <p className='text-muted'>Active Employees</p>
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
                <p className='text-muted'>Active Employees</p>
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
  )
}

export default Card