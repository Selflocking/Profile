import React from "react"
import "./Footer.css"

function Footer() {
    return (
        <footer className="Footer">
            {"Copyright © 2022 "}
            <a href='/'>YunShu</a>
            {" · "}
            <a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2020029697号-1</a>
        </footer>
    )
}


export default Footer