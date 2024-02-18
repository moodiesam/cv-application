import { useState } from "react";

let nextID = 0;

export default function ExperienceSection() {
    const [entry, setEntry] = useState({
        name: '',
        position: '',
        start: '',
        finish: ''
    })

    const [expEntries, setExpEntries] = useState([]);

    function handleNameChange(e) {
        setEntry({
            ...entry,
            name: e.target.value
        })
    }

    function handlePositionChange(e) {
        setEntry({
            ...entry,
            position: e.target.value
        })
    }

    function handleStartChange(e) {
        setEntry({
            ...entry,
            start: e.target.value
        })
    }

    function handleFinishChange(e) {
        setEntry({
            ...entry,
            finish: e.target.value
        })
    }



    return (
        <main>
            <header className="sectionHeader">
                <h2>Experience</h2>
            </header>
            <form className="entryForm" >
                <label>
                    Company Name:
                    <input
                        id="companyName"
                        value={entry.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Position held:
                    <input
                        id="experiencePosition"
                        value={entry.position}
                        onChange={handlePositionChange}
                    />
                </label>
                <label>
                    Start Date:
                    <input
                        id="experienceStart"
                        value={entry.start}
                        onChange={handleStartChange}
                    />
                </label>
                <label>
                    Finish Date:
                    <input
                        id="experienceFinish"
                        value={entry.finish}
                        onChange={handleFinishChange}
                    />
                </label>
                <button onClick={(e) => {
                    e.preventDefault();
                    setExpEntries([
                        ...expEntries,
                        {id: nextID++,
                        name: entry.name,
                        position: entry.position,
                        start: entry.start,
                        finish: entry.finish
                        }
                    ]);
                    console.log(eduEntries)
                }}>Add Entry</button>
            </form>
            <ul>
                {expEntries.map(entry => (
                    <li key={entry.id}>
                        {entry.name} {entry.position} {entry.start} {entry.finish} 
                    </li>
                ))}
            </ul>
        </main>
    )
}