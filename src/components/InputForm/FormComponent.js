import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Button,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  Paper,
  styled,
} from "@mui/material";
// import callApi from "../../Auth/config";
// import authInstance from "../../Auth/config";
// import { addService } from "../../../api/service";
import { useNavigate } from "react-router-dom";
// import Permission from "../../Permissions/Permission";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload  } from '@fortawesome/free-solid-svg-icons';
import { DropzoneArea } from "react-mui-dropzone";
import ReactQuill from "react-quill";

const FormComponent = ({ formData, formname, service }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [userRoutes, setUserRoutes] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const onChange = (value, temp, e) => {
    if (e.target.checked) {
      setUserRoutes([...userRoutes, temp.lnk]);
    } else {
      setUserRoutes(userRoutes?.filter((v) => v !== temp.lnk));
    }
  };
  // console.log(userRoutes,"user")

  // State to hold form values for each step
  const [allFormValues, setAllFormValues] = useState(
    formData.reduce((acc, _, index) => {
      acc[index] = {}; //empty obj.. on initialization (every step)
      return acc;
    }, {})
  );

 
  const formValues = {};
  // for (let [name, value] of formData.entries()) {
  //   formValues[name] = value;
  // }
  // console.log("form values",formValues);

  // Function to handle form field changes
  const handleFormFieldChangeOld = (stepIndex, fieldName, fieldValue) => {
    setAllFormValues((prevValues) => {
      const updatedValues = { ...prevValues };
      updatedValues[stepIndex][fieldName] = fieldValue;
      return updatedValues;
    });
  };
  const handleFormFieldChange = (stepIndex, fieldName, fieldValue) => {
    setAllFormValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [stepIndex]: {
          ...prevValues[stepIndex],
          [fieldName]: fieldValue,  
        },
      };
      return updatedValues;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit clicked....");
    console.log("submit clicked....",formname);

    const combinedFormValues = Object.values(allFormValues).reduce(
      (acc, stepValues) => ({ ...acc, ...stepValues }),
      {}
    );
  
    console.log("Combined Form Values:", combinedFormValues);

    // Combine all form values from all steps
    // const combinedFormValues = Object.values(allFormValues).reduce(
    //   (acc, stepValues) => ({ ...acc, ...stepValues }),
    //   {}
    // );

    // if (formname === "service") {
    //   try {
    //     const response = await authInstance.post(
    //       "service/",
    //       combinedFormValues
    //     );
    //     if (response.status === 200) {
    //       alert("service added successfully");
    //       navigate("/service-list");
    //     } else {
    //       alert("Error adding employee");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // if (formname === "employee") {
    //   const payload = {
    //     ...combinedFormValues,
    //     aadhar_upload: "https://example.com/aadhar_upload.jpg",
    //     pan_upload: "https://example.com/pan_upload.jpg",
    //     permittedRoutes: userRoutes,
    //   };
    //   try {
    //     const response = await authInstance.post("employees/", payload);
    //     if (response.status === 201) {
    //       alert("Employee added successfully");
    //       navigate("/employee-records");
    //     } else {
    //       alert("Error adding employee");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else if (formname === "client") {
    //   try {
    //     const payload = {
    //       ...combinedFormValues,
    //       documents_files: "https://example.com/aadhar_upload.jpg",
    //     };
    //     const response = await authInstance.post(
    //       "clients/",
    //       payload
    //     );
    //     if (response.status === 201) {
    //       alert("Client added successfully");
    //       navigate("/client-records");
    //     } else {
    //       alert("Error adding client");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else if (formname === "payment") {
    //   try {
    //     const response = await authInstance.post(
    //       "payment/",
    //       combinedFormValues
    //     );
    //     if (response.status === 201) {
    //       alert("payment added successfully");
    //       // navigate('/client-records')
    //     } else {
    //       alert("Error adding client");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const theme = useTheme();
  // cutomizing the mui..............................>>>>>
  
  const CustomTextField = styled(TextField)(({ theme }) => ({
    marginTop: "24px",    
    "& .MuiInputBase-root": {
      // color: "#000", //  input text
      color: "#555", 
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#000", // underline
      borderBottomColor: "#555", // underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#000", //  underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#008000", // green color on focus
    },
    "& .MuiInputLabel-root": {
      color: "#000", 
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#008000", 
      // transform: "none", 
    },
  }));
  const CustomSelect = styled(Select)(({ theme }) => ({
    marginTop: "24px", 
    "& .MuiInputBase-root": {
      color: "#555",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#555",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#555",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#008000",
    },
    "& .MuiInputLabel-root": {
      color: "#000",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#008000",
      transform: "none",
    },
  }));

  const DatePickersContainer = styled(Grid)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    display: "flex",
    gap: theme.spacing(2),
  }));

  return (
    <div
      className="form-paper"
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        paddingTop: formData.length > 1 ? "20px" : "0px",
      }}
    >
      {formData.length > 1 ? (
        <div className="stepper-input-form">
          <Stepper alternativeLabel activeStep={activeStep}>
            {formData.map((section, index) => (
              <Step key={index}>
                <StepLabel
                  className={`steplabel ${
                    activeStep === index ? "active-step" : ""
                  }`}
                ></StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      ) : (
        //  null
        <div className="stepper-input-form">
          <div style={{ textAlign: "center", height: "25px" }}> </div>
        </div>
      )}

      <Paper
        elevation={0}
        className={`form-paper w-100 ${
          formData.length > 1 ? "" : "mt-35px"
        }`}
        style={{ padding: "10px",borderRadius:'18px' }}
      >
        <form
          className={`w-100 ${formData.length > 1 ? "mt-20px" : ""}`}
          onSubmit={handleSubmit}
        >
          {formData[activeStep] && (
            <div>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  fontSize:'16px'
                }}
              >
                {formData[activeStep].title}
              </Typography>             
              <Grid container spacing={2}>              
              {formData[activeStep].fields.map((field, fieldIndex) => (
                <Grid item xs={12} md={field.fullSpace === true ? 12 : 6} key={fieldIndex}>
                    {field.type === "dropzone" && (
                      <Grid item xs={12} style={{marginTop:'24px'}}>
                        <>
                        <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize:'14px'
                      }}
                    >
                      Upload Project Documents
                    </Typography> 
                       <DropzoneArea
                       fullWidth
                          acceptedFiles={['image/*']}
                          dropzoneText={field.label}
                          filesLimit={10}
                          // dropzoneProps={{
                          //   style: {
                          //     height: '100px',
                          //     maxHeight: 'auto',
                          //   }
                          // }}
                          onChange={(files) => 
                            handleFormFieldChange(
                              activeStep,
                              field.name,
                              files
                            )
                          }
                        />
                        </>
                      </Grid>
                    )}
                    {field.type === "text" && (
                      // <TextField
                        // label={field.label}
                        // name={field.name}
                        // type="text"
                        // fullWidth
                        // variant="standard"
                        // required={field.required}
                        // value={allFormValues[activeStep][field.name] || ""}
                        // onChange={(e) =>
                        //   handleFormFieldChange(
                        //     activeStep,
                        //     field.name,
                        //     e.target.value
                        //   )
                        // }
                      // />
                      <CustomTextField
                      label={field.label}
                      name={field.name}
                      type="text"
                      fullWidth
                      variant="standard"
                      required={field.required}
                      value={allFormValues[activeStep][field.name] || ""}
                      onChange={(e) =>
                        handleFormFieldChange(
                          activeStep,
                          field.name,
                          e.target.value
                        )
                      }
                      />
                    )}
                    {field.type === "date" && (
                      <DatePickersContainer>
                        <Grid item lg={12} sm={12} xs={12} key={fieldIndex}>
                          <CustomTextField
                            fullWidth
                            label={field.label}
                            name={field.name}
                            type="date"
                            variant="standard"
                            // value={
                            //   field.name === "start_date"
                            //     ? startDate
                            //     : endDate
                            // }
                            // InputLabelProps={{ shrink: true }}
                            // onChange={(event) => {
                            //   if (field.name === "start_date") {
                            //     setStartDate(event.target.value);
                            //   } else if (field.name === "end_date") {
                            //     setEndDate(event.target.value);
                            //   }
                            // }}
                            value={
                              allFormValues[activeStep][field.name] ||
                              (field.name === "start_date"
                                ? startDate
                                : endDate)
                            }
                            InputLabelProps={{ shrink: true }}
                            onChange={(event) => {
                              handleFormFieldChange(
                                activeStep,
                                field.name,
                                event.target.value
                              );
                              if (field.name === "start_date") {
                                setStartDate(event.target.value);
                              } else if (field.name === "end_date") {
                                setEndDate(event.target.value);
                              }
                            }}
                          />
                        </Grid>
                      </DatePickersContainer>
                    )}
                    {field.type === "number" && (
                      <CustomTextField
                        label={field.label}
                        name={field.name}
                        type="number"
                        fullWidth
                        variant="standard"
                        required={field.required}
                        value={allFormValues[activeStep][field.name] || ""}
                        onChange={(e) =>
                          handleFormFieldChange(
                            activeStep,
                            field.name,
                            e.target.value
                          )
                        }
                      />
                    )}
                    {field.type === "email" && (
                      <CustomTextField
                        label={field.label}
                        name={field.name}
                        type="email"
                        fullWidth
                        variant="standard"
                        required={field.required}
                        value={allFormValues[activeStep][field.name] || ""}
                        onChange={(e) =>
                          handleFormFieldChange(
                            activeStep,
                            field.name,
                            e.target.value
                          )
                        }
                      />
                    )}
                    {field.type === "select" && (
                      <FormControl fullWidth variant="standard">
                        <InputLabel>{field.label}</InputLabel>
                        <CustomSelect
                          sx={{marginTop: 35}}
                          name={field.name}
                          required={field.required}
                          value={allFormValues[activeStep][field.name] || ""}
                          onChange={(e) =>
                            handleFormFieldChange(
                              activeStep,
                              field.name,
                              e.target.value
                            )
                          }
                        >
                          {field.options.map((option, optionIndex) => (
                            <MenuItem key={optionIndex} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </CustomSelect>
                      </FormControl>
                    )}
                    {field.type === "file" && (
                      <Button
                        component="label"
                        variant="contained"
                        size="small"
                        startIcon={<FontAwesomeIcon icon={faUpload} />}
                      >
                        Upload File
                        <input
                          type="file"
                          name={field.name}
                          accept={field.accept}
                          required={field.required}
                          style={{ display: "none" }}
                          onChange={(e) =>
                            handleFormFieldChange(
                              activeStep,
                              field.name,
                              e.target.files[0]
                            )
                          }
                        />
                      </Button>
                    )}
                    {field.type === "password" && (
                      <TextField
                        label={field.label}
                        name={field.name}
                        type="password"
                        fullWidth
                        variant="standard"
                        required={field.required}
                        value={allFormValues[activeStep][field.name] || ""}
                        onChange={(e) =>
                          handleFormFieldChange(
                            activeStep,
                            field.name,
                            e.target.value
                          )
                        }
                      />
                    )}
                    {field.type === "switch" && (
                      <FormControlLabel
                        control={
                          <Switch
                            name={field.name}
                            checked={
                              allFormValues[activeStep][field.name] || false
                            }
                            onChange={(e) =>
                              handleFormFieldChange(
                                activeStep,
                                field.name,
                                e.target.checked
                              )
                            }
                          />
                        }
                        label={field.label}
                      />
                    )}  
                    {field.type === "editor" && (  
                    //  <ReactQuill theme="snow" value={field.content} onChange={handleChange} /> 
                    <div style={{marginTop:'24px'}}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize:'14px'
                      }}
                    >
                      Details about Project 
                    </Typography> 
                     <ReactQuill 
                        theme="snow"
                        value={allFormValues[activeStep][field.name] || ""}
                        onChange={(value) => handleFormFieldChange(activeStep, field.name, value)}
                      /> 
                      </div>              
                     )}  
                  </Grid>
                  ))}
                                     
              </Grid>
              {/* {formname === "employee" && (
                <Permission
                  onChange={onChange}
                  setSelectedCheckboxes={setSelectedCheckboxes}
                  selectedCheckboxes={selectedCheckboxes}
                />
              )} */}
            </div>
          )}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {activeStep > 0 && (
              <Button
                onClick={handleBack}
                variant="contained"
                style={{ marginRight: "10px" }}
                sx={{
                  backgroundColor: "#d3d3d3",
                  color: "black",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#d3d3d3",
                  },
                }}
              >
                Back
              </Button>
            )}
            {activeStep < formData.length - 1 ? (
              <Button
                onClick={handleNext}
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.common.black,
                  color: theme.palette.common.white,
                  "&:hover": {
                    backgroundColor: theme.palette.common.black,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.common.black,
                  color: theme.palette.common.white,
                  "&:hover": {
                    backgroundColor: theme.palette.common.black,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default FormComponent;
