import React, { useRef, useState } from "react";
import * as curlconverter from 'curlconverter';

export default function Form() {
    const [content, setContnet] = useState("");
    const inputRef = useRef(null);

    const convert = () => {
        let siteUrl = inputRef.current.value;
        setContnet(curlconverter.toPython(`curl ${siteUrl}`));
    }

    return <div className="form-container">
        <input type="text" id="curlInput" rows="5" cols="50" ref={inputRef}></input>
        <button onClick={convert}>Convert to Python</button>
        <pre>{content}</pre>
    </div>;
}