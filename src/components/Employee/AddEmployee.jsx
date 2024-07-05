import React from "react";

import { Paper } from "@mui/material";
import FormComponent from "../InputForm/FormComponent";
const AddEmployee = () => {
  const dummyFormData = [
    {
      title: "Client Registration Form",
      fields: [
        { type: "text", label: "Full Name", name: "full_name", required: true },
        {
          type: "number",
          label: "Mobile Number",
          name: "mobile_number",
          required: true,
        },
        { type: "email", label: "Email", name: "email", required: true },
        { type: "text", label: "Address Line 1", name: "address_line1" },
        { type: "text", label: "Address Line 2", name: "address_line2" },
        { type: "text", label: "City", name: "city" },
        {
          type: "select",
          label: "State",
          name: "state",
          options: [
            { label: "Maharashtra", value: "maharashtra" },
            { label: "Uttar Pradesh", value: "uttar-pradesh" },
            { label: "Karnataka", value: "karnataka" },
          ],
        },
        { type: "text", label: "Country", name: "country" },
      ],
    },
    // {
    //   title: "Identification and Qualifications",
    //   fields: [
    //     { type: "text", label: "GST Certificate", name: "gst_certificate" },
    //     {
    //       type: "select",
    //       label: "Documents",
    //       name: "documents",
    //       options: [
    //         { label: "Select a document", value: "select" },
    //         { label: "12th Marksheet", value: "mumbai" },
    //         { label: "Degree", value: "delhi" },
    //       ],
    //     },
    //     {
    //       type: "file",
    //       label: "Upload Documents Image",
    //       name: "documents_files",
    //       accept: "image/*",
    //     },
    //   ],
    // },
    // {
    //   title: "Services",
    //   fields: [
    //     {
    //       type: "select",
    //       label: "Select Service",
    //       name: "services",
    //       options: [
    //         { label: "service1", value: "service1" },
    //         { label: "service2", value: "s2" },
    //         { label: "service3", value: "s3" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: "Services Combo",
    //   fields: [
    //     {
    //       type: "select",
    //       label: "Select Services",
    //       name: "services_combo",
    //       options: [
    //         { label: "service11", value: "service1" },
    //         { label: "service22", value: "s2" },
    //         { label: "service33", value: "s3" },
    //       ],
    //     },
    //   ],
    // },
  ];
  return (
    <div className="root-div mt-50px form-w" style={{padding:'20px'}}>
      <Paper elevation={3} className="border-radius-18px">
      
        <div className="country-sales-body">
          <div className="common-table-inner">
            <FormComponent formname={"client"} formData={dummyFormData} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AddEmployee;
