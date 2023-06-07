import { Box, Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import axios from "axios";
import { Field, Formik } from "formik";

// const patientSchema ={
//   name: yup.string().required("required"),
//   age: yup.number().required("required"),
//   gender: yup.string().required("required"),
//   cholesterol: yup.number().required("required"),
//   blood_sugar_level: yup.number().required("required"),
//   is_smoke: yup.string().required("required"),
//   stroke: yup.string().required("required"),
// }

const updateUrl = "http://localhost:8080/StokePatient/update/";

export const EditPatientForm = ({ data }) => {
  const initialValues = {
    id: data.id,
    name: data.name,
    age: data.age,
    gender: data.gender,
    bmi: data.bmi,
    cholesterol_level: data.cholesterol_level,
    blood_sugar_level: data.blood_sugar_level,
    is_smoke: data.is_smoke,
    stroke: data.stroke,
  };

  function updatePatient(values) {
    axios.put(`${updateUrl}` + `${data.id}`, values).then(() => {
      window.location.reload(false);
    });
  }

  const handleSubmit = (values) => {
    updatePatient(values);
  };

  return (
    <Box m="10px">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        // validationSchema={patientSchema}
      >
        {({
          values,
          // error,
          // touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ grid: "span 2", paddingRight: "10px", width: "75%" }}
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
              sx={{ grid: "span 2", width: "25%" }}
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
              sx={{ grid: "span 3", width: "33%", paddingRight: "10px" }}
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
              sx={{ grid: "span 3", width: "33%", paddingRight: "10px" }}
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
              sx={{ grid: "span 3", width: "33%" }}
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
              sx={{ grid: "span 3", width: "40%", paddingTop: "20px" }}
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
              sx={{ grid: "span 3", width: "33%", paddingTop: "20px" }}
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

            <FormControl sx={{ grid: "span 3", paddingTop: "20px" }}>
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

            <pre>{JSON.stringify(values, null, 2)}</pre>

            <Box display="flex" justifyContent="end" marginTop="40px">
              <Button type="submit" color="secondary" variant="contained">
                Edit Patient
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditPatientForm;
