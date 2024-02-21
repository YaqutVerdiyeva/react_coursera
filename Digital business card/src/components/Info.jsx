import React from "react";
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const Info = () => {
  return (
    <div className="info">
      <h1>Laura Smith</h1>
      <span>Frontend Developer</span>
      <p>laurasmith.website</p>
      <div className="btns">
        <button className="email">
          <MailOutlined style={{ color: "#1a1b21" }} />
          Email
        </button>
        <button className="linkedin">
          <LinkedinOutlined style={{ color: "#FFF" }} />
          Linkedin
        </button>
      </div>
    </div>
  );
};

export default Info;
