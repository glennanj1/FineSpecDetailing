import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Spinner from "./Spinner";
import { Button } from "@mui/material";
import ActionAlerts from "../Components/Alert.js";

const columns = [
  { field: "_id", headerName: "id", width: 90 },
  { field: "accepted", headerName: "Accepted", width: 90 },
  {
    field: "name",
    headerName: "Full Name",
    width: 150,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: false,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 110,
    editable: false,
  },
  {
    field: "appointment",
    headerName: "Appointment",
    width: 210,
    editable: false,
  },
  {
    field: "year",
    headerName: "Year",
    width: 110,
    editable: false,
  },
  {
    field: "make",
    headerName: "Make",
    width: 110,
    editable: false,
  },
  {
    field: "model",
    headerName: "Model",
    width: 110,
    editable: false,
  },
  {
    field: "service",
    headerName: "Service",
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

export default function DataGridDemo() {
  const [bookings, setBookings] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateSuccess, setupdateSuccess] = useState(false);
  const [updateFail, setupdateFail] = useState(false);
  const [error, setError] = useState();
  let handleAcceptAppointments = () => {
    setLoading(true);
    if (selectedIds.length) {
      debugger;
      setBookings([]);
      fetch("/api/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          acceptAppointments: true,
          ids: selectedIds,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.alert("Error please report email john");
          }
        })
        .then((data) => {
          setLoading(false);
          setupdateSuccess(true);
          setTimeout(() => {
            setupdateSuccess(false);
            setError('');
          }, 5000);
          setBookings(data.data);
        })
        .catch((e) => {
          setError(e);
          setupdateFail(true);
          setTimeout(() => {
            setupdateFail(false);
            setError('');
          }, 5000);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    fetch("/api/bookings/")
      .then((res) => {
        setLoading(true);
        if (res.ok) {
          return res.json();
        } else {
          setError('Error with response');
          setupdateFail(true);
          setTimeout(() => {
            setupdateFail(false);
            setError('');
          }, 5000);
        }
      })
      .then((data) => {
        setLoading(false);
        setBookings(data.data);
      })
      .catch((e) => {
        setError(e);
        setupdateFail(true);
        setTimeout(() => {
          setupdateFail(false);
          setError('');
        }, 5000);
        setLoading(false);
      });
  }, [setBookings, setLoading]);

  if (loading) return <Spinner />;

  return (
    <div style={{ height: "80vh", width: "100%", paddingTop: "30px" }}>
      {updateSuccess ? (
        <ActionAlerts type="success" message="Successful Update" />
      ) : null}
      {updateFail ? (
        <ActionAlerts type="error" message={"Error: " + error} />
      ) : null}
      <DataGrid
        rows={bookings}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(ids) => {
          setSelectedIds(ids);
        }}
        getRowId={(row) => row._id}
      />
      <Button variant="contained" onClick={handleAcceptAppointments}>
        Accept Appointment
      </Button>
    </div>
  );
}
