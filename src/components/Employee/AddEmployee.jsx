import React from "react";

import { Paper } from "@mui/material";
import FormComponent from "../InputForm/FormComponent";
const AddEmployee = (props) => {
  const title=props.title;
  const dummyFormData = [
    {
      title: title,
      fields: [
        { type: "text", label: "First Name", name: "first_name", required: true },
        { type: "text", label: "Last Name", name: "last_name", required: true },
        { type: "email", label: "Email", name: "email", required: true },
        { type: "date", label: "Joining Date", name: "joining_date", required: true },
        { type: "text", label: "Designation", name: "designation", required: true },
        {
          type: "select",
          label: "Gender",
          name: "gender",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ],
        },
        { type: "number", label: "Telephone", name: "telephone", required: true },        
        { type: "date", label: "Birth Date", name: "birth_date", required: true },
        { type: "text", label: "Address", name: "address", required: true, fullSpace:true },
        { type: "dropzone", label: "Click here to upload your Profile Photo", name: "profile_photo", fullSpace:true },
      ],
    },
  ];

  return (
    <div className="root-div mt-50px form-w" style={{padding:'20px'}}>
      <Paper elevation={3} className="border-radius-18px">
      
        <div className="country-sales-body">
          <div className="common-table-inner">
            <FormComponent formname={"add-employee"} formData={dummyFormData} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AddEmployee;
