import React, { useState } from 'react'
import Navbar from '../components/Navbar'
// import { useNavigate } from 'react-router-dom'
import './AddData.css'

const AddData = () => {

    // let navigate = useNavigate()

    const [allData, setAllData] = useState([])
    const [userData, setUserData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            dateofbirth: "",
            address: "",
        })


    const formData = (e) => {
        let name = e.target.name
        let value = e.target.value
        // console.log(name);
        // console.log(value);
        setUserData((pre) => ({ ...pre, [name]: value }))
    }




    const handalsubmit = (e) => {
        e.preventDefault()


        setUserData(
            {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                dateofbirth: "",
                address: "",
            }
        )
        console.log(userData);

    }

    return (
        <>
            <Navbar />
            <div className="container py-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="form-container border">
                            <h3 className="text-center text-success">User Information Form</h3>
                            <form onSubmit={handalsubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" name="firstName" placeholder="John" onChange={(e) => formData(e)} value={userData.firstName} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" name="lastName" placeholder="Doe" onChange={(e) => formData(e)} value={userData.lastName} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="example@email.com" onChange={(e) => formData(e)} value={userData.email} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="tel" className="form-control" name="phoneNumber" placeholder="+123 456 7890" onChange={(e) => formData(e)} maxLength={10} value={userData.phoneNumber} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                                        <input type="date" className="form-control" name="dateofbirth" onChange={(e) => formData(e)} value={userData.dateofbirth} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <textarea className="form-control" name="address" rows={3} placeholder="Enter your address" onChange={(e) => formData(e)} value={userData.address} required />
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

export default AddData
