import React, { useState } from "react";
import { Paper } from "@mui/material";
import FormComponent from "../InputForm/FormComponent";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const AddProject = (props) => {
  const title=props.title;
  const dummyFormData = [
    {
      title: title,
      fields: [
        { type: "text", label: "Project Name", name: "first_name", required: true,fullSpace:true },
        { type: "text", label: "Client Name", name: "last_name", required: true },
        { type: "email", label: "Client Email", name: "email", required: true },
        { type: "date", label: "Start Date", name: "start_date", required: true },
        { type: "date", label: "End Date", name: "end_date", required: true },
        { type: "number", label: "Team Size", name: "team_size", required: true },        
        { type: "dropzone", label: "Drop Files or Click here to upload", name: "profile_photo", fullSpace:true },
        { type: "editor", label: "Project Description", name: "project_description", required: true, fullSpace:true },
      ],
    },
  ];

  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div className="root-div mt-50px form-w" style={{padding:'20px'}}>
      <Paper elevation={3} className="border-radius-18px">
      
        <div className="country-sales-body">
          <div className="common-table-inner">
            <FormComponent formname={"add-employee"} formData={dummyFormData} />            
          </div>
          {/* <div style={{ marginTop: '20px' }}>
            <ReactQuill theme="snow" value={content} onChange={handleChange} />
            <button 
            style={{ marginTop: '10px' }}
            onClick={() => console.log('Content:', content)}>
              Save Content
            </button>
          </div> */}
        </div>
      </Paper>
    </div>
  );
};

export default AddProject;
