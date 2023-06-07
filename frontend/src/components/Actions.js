import { Box, IconButton, Tooltip } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "./PopUp";
import EditPatientForm from "./EditPatientForm";

const delUrl = "http://localhost:8080/StokePatient/delete/";

export const Actions = ({ param }) => {
  function DeleteRow() {
    axios.delete(`${delUrl}+${param.id}`).then(() => {
      window.location.reload(false);
    });
  }

  const [openPopup, setOpenPopup] = useState(false);
  const [data, setData] = useState([]);

  const getDataById = "http://localhost:8080/StokePatient/";

  const fetchPatientsById = async () => {
    await axios.get(`${getDataById} + ${param.id}`).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    fetchPatientsById();
  }, []);

  return (
    <Box>
      <PopUp
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Edit Patient's Data"
      >
        <EditPatientForm {...{ data }} />
      </PopUp>
      <Tooltip title="Edit">
        <IconButton
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton
          onClick={() => {
            DeleteRow(param.id);
          }}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
