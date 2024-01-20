import React from "react";
import Form from "./form.js";

const App = () => {
  return <Form />;
};

export default App;

// import React from "react";
// import * as curlconverter from 'curlconverter';
// const App = () => {
//     console.log(curlconverter.toPython('curl example.com'))
//   return <h1>{curlconverter.toPython('curl example.com')}</h1>;
// };

// export default App;

// import React, { useState, useRef } from "react";
// import * as curlconverter from 'curlconverter';

// export default function Form() {
//     const [content, setContnet] = useState("");
//     const inputRef = useRef(null);

//     const convert = () => {
//         console.log(inputRef.current);
//         let siteUrl = inputRef.current.value;
//         setContnet(curlconverter.toPython(`curl ${siteUrl}`));
//     }

//     return <div className="form-container">
//         <input type="text" id="curlInput" rows="5" cols="50" ref={inputRef}></input>
//         <button onclick={() => convert}>Convert to Python</button>
//         <h3>{content}</h3>
//     </div>;
// }