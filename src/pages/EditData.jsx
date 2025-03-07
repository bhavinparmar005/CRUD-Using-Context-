import React from 'react'
import Navbar from '../components/Navbar'

const EditData = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="form-container border">
                            <h3 className="text-center text-success"> Edit User Information Form</h3>
                            <form >
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" name="firstName" placeholder="John" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" name="lastName" placeholder="Doe" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="example@email.com" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="tel" className="form-control" name="phoneNumber" placeholder="+123 456 7890" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                                        <input type="date" className="form-control" name="dateofbirth" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <textarea className="form-control" name="address" rows={3} placeholder="Enter your address" required />
                                    </div>
                                    <div className="col-12 ">
                                        <button type="submit" className="btn btn-custom w-100">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditData