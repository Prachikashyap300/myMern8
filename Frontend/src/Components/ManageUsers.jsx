import React, { useState, useEffect } from 'react'
import { use } from '../../../Backend/Routers/User'

const ManageUsers = () => {
    const [Data, setData] = useState([])

  return (
    <div className=''>
        <header className='bg-danger text-white text-center mt-5'>
            <div className="container py-2">
                <h1>Manage User</h1>
            </div>
        </header>

        <div className="container mt-3">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageUsers