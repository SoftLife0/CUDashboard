import React from 'react'

const School = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Vertical Form</h5>

        {/* Vertical Form */}
        <form className="row g-3">
          <div className="col-12">
            <label htmlFor="inputName4" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="inputName4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-secondary">Reset</button>
          </div>
        </form>
        {/* Vertical Form */}
      </div>
    </div>
  )
}

export default School