import React, {useState, useEffect} from 'react'
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function AllBookings() {
    const { data: session, status } = useSession()
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/api/bookings/')
        .then(res => {
            setLoading(true);
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Something went wrong ...')
            }
        })
        .then(data => {
            setLoading(false)
            setBookings(data.data)
        }).catch(e => {
            console.log(e)
            console.debug(e)
            setLoading(false);
        })
    }, [setBookings, setLoading])
    
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Please Sign in before booking.</p>
    }
    if (status === "authenticated") {
    if (session.status === 'admin') {
        return (
        <h1>hey admin</h1>) 
    } else {
        return (
            <>
                {!loading || bookings.length >= 1 ? bookings.map(b => (
                    <ul>
                    <li>
                    <div key={b.id}>
                        <h5>
                        {b.id}
                        </h5>
                        <h5>
                        {b.name}
                        </h5>
                        <h5>
                        {b.email}
                        </h5>
                        <h5>
                        {b.phone}
                        </h5>
                        <h5>
                        {b.service}
                        </h5>
                        <h5>
                        {b.accepted}
                        </h5>
                        <h5>
                        {b.year}
                        </h5>
                        <h5>
                        {b.make}
                        </h5>
                        <h5>
                        {b.model}
                        </h5>
                        <h5>
                        {b.appointment}
                        </h5>
                        <h5>
                        {b.paid}
                        </h5>
                    </div>
                    </li>
                    </ul>   
                ))
                : (null)
                }
            </>
            
        )
    }
        
    }
        
}
