import React from "react";
import {
  TwitterSquareFilled,
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <TwitterSquareFilled style={{ color: "#918E9B",fontSize:"35px" }} />
      <FacebookFilled style={{ color: "#918E9B",fontSize:"35px" }} />
      <InstagramFilled style={{ color: "#918E9B",fontSize:"35px" }} />
      <GithubFilled style={{ color: "#918E9B",fontSize:"35px" }} />
    </div>
  );
};

export default Footer;
