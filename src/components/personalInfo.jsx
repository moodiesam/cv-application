import { useState } from "react";
import '../styles/personalInfo.css'

export default function PersonalInfo() {
    const [info, setInfo] = useState({
        name: 'Sam Campbell',
        email: 'hello@testemail.com',
        phone: '234-553-1313'
    });

    function handleNameChange(e) {
        setInfo({
            ...info,
            name: e.target.value
        });
    }

    function handleEmailChange(e) {
        setInfo({
            ...info,
            email: e.target.value
        })
    }

    function handlePhoneChange(e) {
        setInfo({
            ...info,
            phone: e.target.value
        })
    }

    return (
        <>
            <form className="entryForm">
                <label>
                    Name:
                    <input 
                        id="infoName"
                        value={info.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        id="infoEmail"
                        value={info.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        id="infoNumber"
                        value={info.phone}
                        onChange={handlePhoneChange}
                    />
                </label>
            </form>
            <header className="infoDisplay">
                <h1>{info.name}</h1>
                <h3>{info.email}</h3>
                <h3>{info.phone}</h3>
            </header>
        </>
    )
}
    

    