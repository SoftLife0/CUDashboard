import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'


function Login() {
  return (
      <section>
        <Layout/>
        <div className="container">
            <div className="row"  style={{ justifyContent: 'space-around', minHeight: '80vh', marginTop: '4vh' }}>

                <div className="col-md-6" style={{ backgroundColor: 'rgba(180, 156, 62, 0.731)'}}>

                </div>

                <div className="col-md-6" style={{ alignItems: 'center'}}>
                    <div className="defaultCard">
                        <h6 className="heading" style={{ marginTop: "1vh" }}>central.edu.gh</h6>
                        <h2 className="heading" style={{ marginTop: "1vh" }}><b>Login to your dashboard</b></h2>
                        
                        <br />

                        <form action="">    
                            <div className='mb-3'>
                                <label htmlFor="">Email</label>
                                <input className="inputCard" placeholder="Enter your email" type="email"/>
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="">Password</label>
                                <input className="inputCard" placeholder="Enter your password" type="password"/>
                            </div>

                            <div className='pill-button' style={{ marginTop: '4vh'}}>Submit</div>

                            <br />
                            
                            <Link>
                            <h6 className="text-center">I dont have an account!</h6>
                            </Link>
                        </form>
             
                    </div>
                </div>
            </div>
        </div>


       
    </section>
  )
}

export default Login