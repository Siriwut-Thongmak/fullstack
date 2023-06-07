import { Box, ThemeProvider, createTheme } from "@mui/system";
import axios from "axios";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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

export const GenderStrokeCount = () => {
  const [data, setData] = useState([]);

  const getCountGenderStoke = async () => {
    await axios
      .get("http://localhost:8080/StokePatient/getCountGenderStoke")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getCountGenderStoke();
  }, []);

  const { male, female } = data;
  //console.log(male)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          padding: 2,
          maxWidth: "800px",
          maxHeight: "400px",
          grid: "span 2",
          display: "inline-block",
          margin: "40px 25px 0 25%",
        }}
      >
        <Box
          sx={{
            color: "text.primary",
            fontSize: 20,
            fontWeight: "medium",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Male and Female who is experienced Stroke
        </Box>
        <Doughnut
          data={{
            labels: ["Male", "Female"],
            datasets: [
              {
                data: [male, female],
                backgroundColor: [
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 146, 194, 0.7)",
                ],
                borderColor: [
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 146, 194, 0.7)",
                ],
              },
            ],
          }}
          height={100}
          width={100}
        />
      </Box>
    </ThemeProvider>
  );
};
