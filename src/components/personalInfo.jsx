import { useState } from "react";
import '../styles/personalInfo.css'

function Name({ name }) {

    return (
        <h1>{name}</h1>
    )
}

export default function PersonalInfo({ name="Sam Campbell", email="testeremail@gmail.com", phoneNumber="416-555-5555"}) {
    return (
        <header className="header">
            <Name name="Sam Campbell"/>
            <h3>{email}</h3>
            <h3>{phoneNumber}</h3>
        </header>
    )
}