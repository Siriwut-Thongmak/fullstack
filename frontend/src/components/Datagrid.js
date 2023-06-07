import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Actions } from "./Actions";
import { Box } from "@mui/material";

function DataGridPatients() {
  const [data, setData] = useState([]);

  const fetchPatients = async () => {
    await axios
      .get("http://localhost:8080/StokePatient/getData")
      .then((res) => {
        setData(res.data);
        //console.log(res.data)
      });
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Patient Name", width: 200 },
    {
      field: "age",
      headerName: "Age",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "bmi",
      headerName: "BMI",
      width: 100,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "blood_sugar_level",
      headerName: "Glucose",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cholesterol_level",
      headerName: "Cholesterol",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "is_smoke",
      headerName: "Smoking",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "stroke",
      headerName: "Stroke Experience",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      type: "action",
      width: 100,
      headerAlign: "center",
      renderCell: (param) => <Actions {...{ param }} />,
    },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    name: row.name,
    age: row.age,
    gender: row.gender,
    bmi: row.bmi,
    blood_sugar_level: row.blood_sugar_level,
    cholesterol_level: row.cholesterol_level,
    is_smoke: row.is_smoke,
    stroke: row.stroke,
  }));

  return (
    <Box m="60px 18% 0px 20%">
      <h1>Manage Patients</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataGridPatients;
