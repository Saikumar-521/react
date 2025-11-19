import React from "react";
import './App.css'
import ReactSetupGuide from "./components/concepts/introduction/ReactSetupGuide";
export default function App(){
  return(
    <div className="bg-gray-300">
      <h1 className="text-3xl font-bold bg-blue-500 text-white p-4 rounded text-center">Hello world</h1>
      <ReactSetupGuide></ReactSetupGuide>
    </div>
  )
}