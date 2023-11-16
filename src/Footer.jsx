import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="Footer">
      <div>
        {`Copyright © ${year} `}
        <a href="/">YunShu</a>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img alt="公安备案图标" src="police_beian.png" width="16px" />
        &nbsp;
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=13050902001780"
          rel="noreferrer"
          target="_blank"
        >
          冀公网安备13050902001780
        </a>
        &nbsp;&nbsp;
        <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">
          冀ICP备2020029697号-1
        </a>
      </div>
    </footer>
  );
}

export default Footer;
