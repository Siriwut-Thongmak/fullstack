import { Box, ThemeProvider, createTheme } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export const GetSumPatient = () => {
  const [stroke, setStroke] = useState([]);
  const getSumStroke = async () => {
    await axios
      .get("http://localhost:8080/StokePatient/getSumPatient")
      .then((res) => {
        setStroke(res.data);
      });
  };
  useEffect(() => {
    getSumStroke();
  }, []);

  const [allPatient, setallPatient] = useState([]);
  const getSumAll = async () => {
    await axios
      .get("http://localhost:8080/StokePatient/getSumAll")
      .then((res) => {
        setallPatient(res.data);
      });
  };
  useEffect(() => {
    getSumAll();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          border: "1px solid black",
          borderRadius: 2,
          padding: 2,
          display: "inline-block",
          grid: "span 2",
          maxWidth: "50%",
          margin: "10px 10px 10px 50px",
        }}
      >
        <Box sx={{ color: "text.secondary" }}>There are</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          {stroke}
          <Box
            sx={{
              color: "text.secondary",
              fontSize: 20,
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            from
          </Box>
          <Box
            sx={{
              color: "text.primary",
              fontSize: 34,
              display: "inline-block",
              fontWeight: "medium",
              marginLeft: "10px",
            }}
          >
            {allPatient}
          </Box>
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
          patients who is experienced stroke in our care.
        </Box>
      </Box>
    </ThemeProvider>
  );
};
