import React, { useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Create = ({ history }) => {
  const [visible, setVisible] = useState(false);
  const [project,setProject]=useState(false);
  const [repo,setRepo]=useState(false)


  const openProject=()=>{
setVisible(true)
setProject(true)
  }

  const openRepo=()=>{
    setVisible(true)
    setRepo(true)
  }

  const close=()=>{
    setVisible(false)
    setProject(false)
    setRepo(false)
  }
  return (
    <div className="create">
      <div className="bread">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/create">Create</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="fetch">
        <div onClick={openProject} className="box">
          <span className="box-1">
            <i class="fas fa-plus-circle"></i>
          </span>
          <span className="box-2">Create Project</span>
        </div>
        <div onClick={openRepo} className="box">
          <span className="box-1">
            <i class="fas fa-plus-circle"></i>
          </span>
          <span className="box-2">Create Repository</span>
        </div>
      </div>
      <div
        className="modal-wrapper"
        onClick={close}
        style={visible ? { display: "block" } : { display: "none" }}
      ></div>
      <div
        className="modal"
        style={visible ? { display: "block" } : { display: "none" }}
      >
        <div className="x">
          <span onClick={close}>
            <i class="fas fa-times"></i>
          </span>
        </div>
        {project&&<div className="create-project-box">
          <div className="form-data">
            <label>Project Name</label>
            <input placeholder="Enter project name" type="text" />
          </div>

          <div className="form-data">
            <label>Project Key</label>
            <input placeholder="Enter project Key"  type="text" />
          </div>
          <div className="form-data">
            <label>Project Description</label>
            <textarea placeholder="Enter project description" type="text" />
          </div>
          <div className="create-button"><span>Create</span></div>
        </div>}

        {repo&&<div className="create-project-box">
        <div className="form-data">
          <label>Repository Name</label>
          <input placeholder="Enter repository name" type="text" />
        </div>

        <div className="form-data">
          <label>Project Key</label>
          <input placeholder="Enter project Key"  type="text" />
        </div>
        <div className="form-data">
          <label>Repository Description</label>
          <textarea placeholder="Enter repository description" type="text" />
        </div>
        <div className="create-button"><span>Create</span></div>
      </div>}
        
      </div>
    </div>
  );
};

export default Create;
