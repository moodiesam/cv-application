import { useState } from "react";
import '../styles/education.css'

let nextID = 0;

export default function Section() {
    const [entry, setEntry] = useState({
        name: '',
        level: '',
        start: '',
        finish: ''
    })

    const [eduEntries, setEduEntries] = useState([]);

    function handleNameChange(e) {
        setEntry({
            ...entry,
            name: e.target.value
        })
    }

    function handleLevelChange(e) {
        setEntry({
            ...entry,
            level: e.target.value
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
                <h2>Education</h2>
            </header>
            <form className="entryForm" >
                <label>
                    School Name:
                    <input
                        id="schoolName"
                        value={entry.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Level of Education:
                    <input
                        id="schoolLevel"
                        value={entry.level}
                        onChange={handleLevelChange}
                    />
                </label>
                <label>
                    Start Date:
                    <input
                        id="schoolStart"
                        value={entry.start}
                        onChange={handleStartChange}
                    />
                </label>
                <label>
                    Finish Date:
                    <input
                        id="schoolFinish"
                        value={entry.finish}
                        onChange={handleFinishChange}
                    />
                </label>
                <button onClick={(e) => {
                    e.preventDefault();
                    setEduEntries([
                        ...eduEntries,
                        {id: nextID++,
                        name: entry.name,
                        level: entry.level,
                        start: entry.start,
                        finish: entry.finish
                        }
                    ]);
                    console.log(eduEntries)
                }}>Add Entry</button>
            </form>
            <ul>
                {eduEntries.map(entry => (
                    <li key={entry.id}>
                        {entry.name} {entry.level} {entry.start} {entry.finish} 
                    </li>
                ))}
            </ul>
        </main>
    )
}