import { useRouter } from 'next/router'
import useSWR from 'swr'
import Container from '@mui/material/Container'
const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Booking() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/bookings/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  return (
    <Container component="main" maxWidth="xs">
        <div>
        <h5>{data.data.id}</h5>
        <h5>
            {data.data.name}
        </h5>
        <h5>
            {data.data.email}
        </h5>
        <h5>
            {data.data.phone}
        </h5>
        <h5>

            {data.data.service}
        </h5>
        <h5>
            {data.data.accepted}
        </h5>
        <h5>
            {data.data.createdAt}
        </h5>
    </div>
      </Container>
    
  )
}