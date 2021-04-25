import React from 'react'
import { Breadcrumb } from "antd";
import {Link} from 'react-router-dom'

const Project = () => {
    return (
        <div>
        <div className="bread">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/fetch">Fetch</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/fetch/project">Project</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          </div>
      
           
        </div>
    )
}

export default Project
