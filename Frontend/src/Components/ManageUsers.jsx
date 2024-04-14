import React, { useState, useEffect } from 'react'
//import { use } from '../../../Backend/Routers/User'

const ManageUsers = () => {
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res =  await fetch('http://localhost:4000/user/getall',)
        console.log(res.status)
        if(res.status ===200){
            const data = await res.json()
            console.log(data)
            setData(data)

        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const displayUser = (v) => {
        return Data.map((user) => {
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-danger'>D elete</button>
                </td>
            </tr>
        })
    }

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
                    {displayUser()}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageUsers