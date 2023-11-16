import React from "react"
import "./Footer.css"

function Footer() {
    const year = new Date().getUTCFullYear();
    return (
        <footer className="Footer">
            {`Copyright © ${year} `}
            <a href='/'>YunShu</a>
            {" · "}
            <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">冀ICP备2020029697号-1</a>
            {" · "}
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=13050902001780" rel="noreferrer" target="_blank">冀公网安备13050902001780</a>
        </footer>
    )
}


export default Footer