import React from "react"
import "./Footer.css"

function Footer() {
    const year = new Date().getUTCFullYear();
    return (
        <footer className="Footer">
            {`Copyright © ${year} `}
            <a href='/'>YunShu</a>
            {" · "}
            <a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2020029697号-1</a>
        </footer>
    )
}


export default Footer