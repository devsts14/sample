import React from 'react'
import { Breadcrumb } from "antd";
import {Link} from 'react-router-dom'

const Upload = () => {
    return (
        <div>
        <div className="bread">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/upload">Upload</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      </div>
            Upload
        </div>
    )
}

export default Upload
