import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'

const Home = () => {
    return (
        <>
        <Navbar/>
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
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john.doe@example.com</td>
                    <td>+123456789</td>
                    <td>1990-01-01</td>
                    <td>123 Main St, NY</td>
                    <td>
                        <button className="btn btn-primary btn-sm me-2">
                            <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi bi-trash"></i> Delete
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Jane</td>
                    <td>Smith</td>
                    <td>jane.smith@example.com</td>
                    <td>+987654321</td>
                    <td>1995-05-15</td>
                    <td>456 Elm St, CA</td>
                    <td>
                        <button className="btn btn-primary btn-sm me-2">
                            <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button className="btn btn-danger btn-sm">
                            <i className="bi bi-trash"></i> Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  
        
        </>
    )
}

export default Home
