import React from "react";

function Button({ text, url }) {

    const handleClick = () => {
        if (url !== undefined) {
            // window.location.href = link
            window.open(url)
        }
    }

    return (
        <button
            className="Button"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

function AboutMe() {
    return (
        <section
            style={{
                minWidth: "85%",
                marginTop: "20px"
            }}
        >
            A undergraduate student in computer science.
        </section>
    )
}

function ContactMe() {
    return (
        <section
            style={{
                display: "grid"
            }}
        >
            <h3>Contact Me</h3>
            <Button text="GitHub" url="https://github.com/Selflocking" />
            <Button text="Blog" url="https://blog.yunshu.site" />
            {/* <Button text="Email" url="im@yunshu.site" />
            <Button text="QQ" url="2859976342" /> */}
            <Button text="mastodon" url="https://o3o.ca/@YunShu" />
        </section>
    )
}

function Content() {
    return (
        <div
            style={{
                display: "flex",
                marginBottom: "100px"
            }}
        >
            <AboutMe />
            <ContactMe />
        </div>
    )
}

export default Content;