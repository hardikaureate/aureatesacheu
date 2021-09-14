import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import '../../App.css'
import Skeleton from 'react-loading-skeleton'

const SkeletFunc = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsersData = async () => {
        try {
            setLoading(false)
            const res = await fetch('http://jsonplaceholder.typicode.com/users')
            const allusers = await res.json()
            console.log({ allusers })
            setUsers(allusers)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getUsersData()
        }, 2000)
    }, [])


    if (loading) {
        return (
            <>
                <div className="usercard">
                    <div className="cards">
                        <Skeleton height={20} count={4} />
                        <Skeleton height={100} />
                    </div>
                </div>
                <div className="usercard">
                    <div className="cards">
                        <Skeleton count={4} />
                        <Skeleton height={100} />
                    </div>
                </div>
                <div className="usercard">
                    <div className="cards">
                        <Skeleton count={4} />
                        <Skeleton height={100} />
                    </div>
                </div>
                <div className="usercard">
                    <div className="cards">
                        <Skeleton count={4} />
                        <Skeleton height={100} />
                    </div>
                </div>
            </>)
    }

    return (
        <div className="usercard">
            {users.slice(0, 3).map(u =>
                <div key={u.id} className="cards">
                    <h3 style={{ textAlign: 'left' }}><b>Name: </b><b>{u.name}</b></h3>
                    <p style={{ textAlign: 'left' }}><b>Username: </b>{u.username}</p>
                    <p style={{ textAlign: 'left' }}><b>Email: </b><a href={`mailto:${u.email}`}>{u.email}</a></p>
                    <p style={{ textAlign: 'left' }}><b>Website: </b><a href={u.website}>{u.website}</a></p>
                    <p style={{ textAlign: 'left' }}><b>Company Name: </b>{u.company.name}</p>
                    <p style={{ textAlign: 'left' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id eaque delectus quis. Voluptatum cum minus nemo aliquam, necessitatibus accusantium quia maxime ab nesciunt! Sapiente voluptatibus vero nobis autem quasi.</p>
                </div>)}
        </div>
    )

}

export default SkeletFunc
