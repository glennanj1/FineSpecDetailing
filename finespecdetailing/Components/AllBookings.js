import React, {useState, useEffect} from 'react'
import { useSession, getSession } from "next-auth/react"
import DataGrid from './BookingTable'
import Container from '@mui/material/Container';
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
        return( <Container component="main" maxWidth="md"> 
                    <h1>Loading ...</h1>
                </Container>)
    }
    if (status === "unauthenticated") {
        return( <Container component="main" maxWidth="md"> 
                    <h1>Please Login to Continue</h1>
                </Container>)
    }
    if (status === "authenticated") {
        return (
            <>
                {session.status === 'admin' ?   <DataGrid /> : 
                    
                    (<>
                        <h1>Hey {session.user.email}</h1>
                        {!loading && bookings.length >= 1 ? bookings.map(b => (
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
                    : (<><h2>Currently No Bookings At this Time!</h2> <button>Book Now?</button></>)
                    }
                    </>)}
              
                
            </>
            
        )
    }
        
    
        
}
