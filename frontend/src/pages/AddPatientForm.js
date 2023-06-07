import { Box, Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import axios from "axios";
import { Field, Formik } from "formik";
import * as React from "react";

// const patientSchema ={
//   name: yup.string().required("required"),
//   age: yup.number().required("required"),
//   gender: yup.string().required("required"),
//   cholesterol: yup.number().required("required"),
//   blood_sugar_level: yup.number().required("required"),
//   is_smoke: yup.string().required("required"),
//   stroke: yup.string().required("required"),
// }

const addUrl = "http://localhost:8080/StokePatient/add";

export const AddPatientForm = () => {
  function addData(values) {
    axios.post(addUrl, values);
  }

  const handleSubmit = (values) => {
    addData(values);
    //console.log(values);
  };

  return (
    <Box m="100px 550px 0px 550px">
      <h1>Add Patient</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        // validationSchema={patientSchema}
      >
        {({
          values,
          error,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{
                grid: "span 2",
                paddingTop: "40px",
                paddingBottom: "40px",
                width: "75%",
                paddingRight: "20px",
              }}
            >
              <TextField
                required
                id="name"
                label="Required"
                variant="standard"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                type="text"
              />
              <FormHelperText>Name</FormHelperText>
            </FormControl>

            <FormControl
              variant="standard"
              fullWidth
              sx={{
                grid: "span 2",
                paddingTop: "40px",
                paddingBottom: "40px",
                width: "25%",
                paddingRight: "40px",
              }}
            >
              <TextField
                required
                id="bmi"
                label="Required"
                variant="standard"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bmi}
                type="number"
              />
              <FormHelperText id="standard-weight-helper-text">
                BMI
              </FormHelperText>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{
                grid: "span 3",
                width: "33%",
                paddingRight: "40px",
                paddingBottom: "40px",
              }}
            >
              <TextField
                required
                id="age"
                label="Required"
                variant="standard"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                type="number"
              />
              <FormHelperText id="standard-weight-helper-text">
                Age
              </FormHelperText>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{
                grid: "span 3",
                width: "33%",
                paddingRight: "40px",
                paddingBottom: "40px",
              }}
            >
              <TextField
                required
                id="blood_sugar_level"
                label="Required"
                variant="standard"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.blood_sugar_level}
                type="number"
              />
              <FormHelperText id="standard-weight-helper-text">
                Blood Sugar Level
              </FormHelperText>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{
                grid: "span 3",
                width: "33%",
                paddingRight: "40px",
                paddingBottom: "40px",
              }}
            >
              <TextField
                required
                id="cholesterol_level"
                label="Required"
                variant="standard"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cholesterol_level}
                type="number"
              />
              <FormHelperText id="standard-weight-helper-text">
                Cholesterol
              </FormHelperText>
            </FormControl>

            <FormControl
              sx={{ grid: "span 3", width: "33%", paddingRight: "10px" }}
            >
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  control={
                    <Field
                      as={Radio}
                      type="radio"
                      name="gender"
                      value="Female"
                    />
                  }
                  label="Female"
                />
                <FormControlLabel
                  control={
                    <Field as={Radio} type="radio" name="gender" value="Male" />
                  }
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            <FormControl
              sx={{ grid: "span 3", width: "33%", paddingRight: "10px" }}
            >
              <FormLabel id="is_smoke">Smoking</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  control={
                    <Field
                      as={Radio}
                      type="radio"
                      name="is_smoke"
                      value="Yes"
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Field as={Radio} type="radio" name="is_smoke" value="No" />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ grid: "span 3", width: "33%" }}>
              <FormLabel id="stroke">Stroke</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  control={
                    <Field as={Radio} type="radio" name="stroke" value="Yes" />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  control={
                    <Field as={Radio} type="radio" name="stroke" value="No" />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>

            {/* <pre>{JSON.stringify(values,null,2)}</pre> */}

            <Box display="flex" justifyContent="end" marginTop="40px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Patient
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  name: "",
  age: null,
  gender: "",
  bmi: null,
  cholesterol_level: null,
  blood_sugar_level: null,
  is_smoke: "",
  stroke: "",
};

export default AddPatientForm;
