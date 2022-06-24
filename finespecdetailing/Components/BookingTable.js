import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: '_id', headerName: 'id', width: 90 },
  {
    field: 'name',
    headerName: 'Full Name',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: false,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 110,
    editable: false,
  },
  {
    field: 'appointment',
    headerName: 'Appointment',
    width: 110,
    editable: false,
  },
  {
    field: 'year',
    headerName: 'Year',
    width: 110,
    editable: false,
  },
  {
    field: 'make',
    headerName: 'Make',
    width: 110,
    editable: false,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 110,
    editable: false,
  },
  {
    field: 'service',
    headerName: 'Service',
    width: 110,
    editable: false,
  },
  {
    field: 'button',
    headerName: 'Buttons',
    width: 110,
    editable: false,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
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

  
  return (
    <>
      {loading ? <div>Loading...</div> :
      <div style={{ height: '80vh', width: '100%', paddingTop: '30px'}}>
        <DataGrid
          rows={bookings}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row._id}
        />
      </div>
      }
    </>
  );
}
