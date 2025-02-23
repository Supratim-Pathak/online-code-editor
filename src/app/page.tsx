/* eslint-disable @typescript-eslint/no-unused-vars */
// import Image from "next/image";
"use client";
import React, { Fragment, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { getRuntimes } from "@/lib/compilerServices";
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [output, setOutput] = useState<string>(
    "Try programiz.pro\n=== Code Execution Successful ==="
  );
  const [runtimeList, setRuntimeList] = useState([]);
  const [lang, setLang] = useState<string | null>();

  useEffect(() => {
    async function runtimeList() {
      try {
        const data = await getRuntimes();
        console.log(data, "===========>");
        setRuntimeList(data);
      } catch (error) {
        console.log(error);
      }
    }
    runtimeList();
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col bg-gray-900 text-white">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div>
            <span className="text-lg font-semibold">
              Start codeing in {lang ? lang.toUpperCase(): ""}
            </span>
          </div>
          {/* <ComboBox></ComboBox> */}
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
          <div
            className="w-[100px] bg-gray-800 flex flex-col items-center py-4 space-y-4 overflow-scroll"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {runtimeList.map((data: any, index) => {
              return (
                <React.Fragment key={index}>
                  <button
                    className={`flex text-xs w-full p-0 flex-col items-center  hover:text-white ${
                      lang == data?.language
                        ? "text-white-400 text-lg font-semibold"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      setLang(data?.language);
                    }}
                  >
                    <span className="text-l ">
                      {data?.language.toUpperCase()}
                    </span>
                  </button>
                </React.Fragment>
              );
            })}
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
// https://emkc.org/api/v2/runtimes/
