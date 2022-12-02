import React from "react";
import "./Content.css";

const aboutMe = "A undergraduate student in computer science."

function Button({ text, url }) {

    const handleClick = () => {
        if (url !== undefined) {
            window.open(url)
        }
    }

    return (
        <div
            className="Button"
            onClick={handleClick}
        >
            {text}
        </div>
    )
}

function AboutMe() {
    return (
        <section
            className="AboutMe"
        >
            {aboutMe}
        </section>
    )
}

function ContactMe() {
    return (
        <section
            className="ContactMe"
        >
            <h3>Contact Me</h3>
            <div className="Buttons">
                <Button text="GitHub" url="https://github.com/Selflocking" />
                <Button text="Blog" url="https://blog.yunshu.site" />
                <Button text="Mastodon" url="https://o3o.ca/@YunShu" />
            </div>
        </section>
    )
}

function Content() {
    return (
        <div
            className="Content"
        >
            <AboutMe />
            <ContactMe />
        </div>
    )
}

export default Content;