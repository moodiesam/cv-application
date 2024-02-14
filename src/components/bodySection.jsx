import { useState } from "react";
import '../styles/bodySection.css'

function Entry({ schoolName, schoolLevel, dates }) {
    return (
        <>
            <div>{schoolName}</div>
            <div>{schoolLevel}</div>
            <div>{dates}</div>
        </>
    )
}

function AddEntryButton({ text }) {
    return (
        <button>{text}</button>
    )
}

export default function Section({ sectionTitle="Education" }) {
    return (
        <main>
            <header className="sectionHeader">
                <h2>{sectionTitle}</h2>
                <AddEntryButton text="Add Education Entry" />
            </header>
            <section>
                <Entry schoolName="Bishops University" schoolLevel="Undergraduate" dates="2004-2008" />
            </section>
        </main>
    )
}