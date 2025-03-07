import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import { useCrud } from '../../Crudprovider'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    let { data,deleteData } = useCrud()

    let nav =useNavigate()

   
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h2 className="text-center">User Information</h2>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead className="table-dark">
                            <tr>
                              
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Date of Birth</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val) => {
                                    return (
                                        <tr>
                                            
                                            <td>{val.firstName}</td>
                                            <td>{val.lastName}</td>
                                            <td>{val.email}</td>
                                            <td>{val.phoneNumber}</td>
                                            <td>{val.dateofbirth}</td>
                                            <td>{val.address}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm me-2" onClick={()=> nav('/editpost',{state:val})} >
                                                    <i className="bi bi-pencil"></i> Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm" onClick={()=>deleteData(val.id)} >
                                                    <i className="bi bi-trash"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default Home
