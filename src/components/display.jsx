import { useState } from "react";
import '../styles/display.css'

export default function Display({ children }) {
    return (
        <div className="mainDisplay">
            {children}
        </div>
    )
}