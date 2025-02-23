// import Image from "next/image";
"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [output, setOutput] = useState<string>(
    "Try programiz.pro\n=== Code Execution Successful ==="
  );

  
  return (
    <>
      <div className="h-screen flex flex-col bg-gray-900 text-white">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">main.c</span>
          <div className="space-x-2">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
              Run
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
              Clear
            </button>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-4">
            <button className="flex flex-col items-center text-gray-400 hover:text-white">
              {/* <SiCplusplus size={24} /> */}
              <span className="text-l ">C++</span>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-white">
              {/* <SiJavascript size={24} /> */}
              <span className="text-l">JS</span>
            </button>
          </div>

          {/* Code Editor */}
          <div className="flex-1 p-4">
            <div className="bg-gray-800 h-full p-4 rounded">
              {/* <pre className="text-green-400">sjhsdgasdfjg</pre> */}
              <Editor
                theme="vs-dark"
                className="editor"
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// Start codeing"
              />
            </div>
          </div>
          {/* Output Panel */}
          <div className="w-1/3 p-4 border-l border-gray-700">
            <div className="bg-gray-800 h-full p-4 rounded">
              <pre className="text-gray-300">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
