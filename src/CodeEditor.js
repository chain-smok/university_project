import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import { transform } from "@babel/standalone";

const Editor = () => {
  const [code, setCode] = useState("");

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  const handleCompile = () => {
    try {
      const compiledCode = transform(code, { presets: ["env"] }).code;
      console.log(compiledCode);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <CodeMirror
        value={code}
        onBeforeChange={handleChange}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
      />
       <button style={{backgroundColor: "green"}} onClick={handleCompile}>Compile</button> 
    </div>
  );
};

export default Editor;
