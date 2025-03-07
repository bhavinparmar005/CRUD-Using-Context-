import React, { use, useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCrud } from '../../Crudprovider'
import Swal from 'sweetalert2'




const EditData = () => {
    const { update } = useCrud()

    let editData = useLocation()

    let finalData = editData.state;

    let nav = useNavigate()




    const [userData, setUserData] = useState(
        {
            id: "" || finalData.id,
            firstName: "" || finalData.firstName,
            lastName: "" || finalData.lastName,
            email: "" || finalData.email,
            phoneNumber: "" || finalData.phoneNumber,
            dateofbirth: "" || finalData.dateofbirth,
            address: "" || finalData.address,

        }
    )



    const formData = (e) => {

        let name = e.target.name
        let value = e.target.value
        // console.log(name);
        // console.log(value);
        setUserData((pre) => ({ ...pre, [name]: value }))





    }


    const handle = (e) => {
        e.preventDefault()

        update(userData)

        Swal.fire({
            title: " Edit User Information Successfully !",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 1900
        });
        setTimeout(() => {

            nav('/')
        }, 2000);
    }








    return (
        <>
           
            <div className="container py-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="form-container border">
                            <h3 className="text-center text-success">User Information Form</h3>
                            <form onSubmit={handle} >
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
                                        <button type="submit" className="btn btn-custom w-100">Update</button>
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