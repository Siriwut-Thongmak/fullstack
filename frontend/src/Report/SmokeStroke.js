import { Box, ThemeProvider, createTheme } from "@mui/system";
import axios from "axios";
import { Chart as ChartJS, Legend, Tooltip } from "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend);

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

export const SmokeStroke = () => {
  const [data, setData] = useState([]);

  const getFatStroke = async () => {
    await axios
      .get("http://localhost:8080/StokePatient/getSmoke_Stroke")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getFatStroke();
  }, []);

  const { smoke, notSmoke } = data;

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
          margin: "10px 0 0 30px",
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
          Smoke vs Not Smoke
        </Box>
        <Bar
          data={{
            labels: ["Smoke", "Not Smoke"],
            datasets: [
              {
                data: [smoke, notSmoke],
                backgroundColor: [
                  "rgba(15, 163, 177, 0.5)",
                  "rgba(247, 160, 114, 0.5)",
                ],
                borderColor: [
                  "rgba(15, 163, 177, 0.5)",
                  "rgba(247, 160, 114, 0.5)",
                ],
              },
            ],
          }}
          height={500}
          width={500}
          options={{
            maintainAspectRatio: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
};
