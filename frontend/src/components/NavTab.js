import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Homepage" component={Link} to="/" />
        <LinkTab label="Dashboard" component={Link} to="/404" />
      </Tabs>
    </Box>
  );
}
