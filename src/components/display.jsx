import { useState } from "react";
import '../styles/display.css'

export default function Display({ children }) {
    return (
        <body className="mainDisplay">
            {children}
        </body>
    )
}