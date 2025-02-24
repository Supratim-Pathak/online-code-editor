"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const [html, setHtml] = useState("<h1>Hello, World!</h1>");
  const [css, setCss] = useState("h1 { color: red; }");
  const [js, setJs] = useState("console.log('Hello from JS!');");
  const [output, setOutput] = useState("");

  const runCode = () => {
    const combinedCode = `
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
      </html>
    `;
    setOutput(combinedCode);
  };

  return (
    <div className="h-screen bg-[#0D1117] text-white flex flex-col">
      {/* Header */}
      <div className="bg-[#161B22] p-2 text-center text-lg font-semibold flex justify-between">
        <div>Online Code Editor 🚀</div>
        <div>
          <button
            className="bg-green-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-700"
            onClick={runCode}
          >
            Build 🛠️
          </button>
        </div>
      </div>
      {/* Run Button */}

      {/* Code Panels & Output */}
      <div className="flex flex-1">
        {/* Code Panels */}
        <div className="w-2/5 flex flex-col space-y-2 p-2">
          {/* HTML Editor */}
          <div className="bg-[#161B22] rounded-lg p-2">
            <h2 className="text-green-400 font-semibold">🔹 HTML</h2>
            <Editor
              height="250px"
              defaultLanguage="html"
              theme="vs-dark"
              value={html}
              onChange={(value) => setHtml(value || "")}
              options={{ fontSize: 14 }}
            />
          </div>

          {/* CSS Editor */}
          <div className="bg-[#161B22] rounded-lg p-2">
            <h2 className="text-blue-400 font-semibold">🔹 CSS</h2>
            <Editor
              height="250px"
              defaultLanguage="css"
              theme="vs-dark"
              value={css}
              onChange={(value) => setCss(value || "")}
              options={{ fontSize: 14 }}
            />
          </div>

          {/* JavaScript Editor */}
          <div className="bg-[#161B22] rounded-lg p-2">
            <h2 className="text-yellow-400 font-semibold">🔹 JavaScript</h2>
            <Editor
              height="250px"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={js}
              onChange={(value) => setJs(value || "")}
              options={{ fontSize: 14 }}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-3/5 bg-[#161B22] rounded-lg p-4">
          {/* <h2 className="text-green-400 font-semibold">Output:</h2> */}
          <iframe
            title="output"
            className="w-full h-full bg-white rounded-md"
            srcDoc={output}
          />
        </div>
      </div>
    </div>
  );
}
