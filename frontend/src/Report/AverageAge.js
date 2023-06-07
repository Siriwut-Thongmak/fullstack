import { Box, ThemeProvider, createTheme } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});


export const GetAvgAgePatient = () => {

    const [data, setData] = useState([]);

    const getSumPatient = async () => {
        await axios
          .get("http://localhost:8080/StokePatient/getAvgAgePatient")
          .then((res) => {
            setData(res.data);
          });
      };
    
      useEffect(() => {
        getSumPatient();
      }, []);

    return (
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              border: "1px solid black",
              borderRadius: 2,
              padding: 2,
              display: 'inline-block',
              grid: "span 2",
              maxWidth: "50%",
              margin:'10px 10px 0 30px'
            }}
          >

            <Box sx={{ color: 'text.primary', fontSize: 37, fontWeight: 'medium' }}>
              {data} Years old
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
              is average stroke patients's age.
            </Box>
          </Box>
        </ThemeProvider>
      );
}
