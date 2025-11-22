import React from "react";
import './App.css'
import ReactSetupGuide from "./components/concepts/introduction/ReactSetupGuide";
import ReactClassStateGuide from "./components/concepts/States/ReactClassState";
import ReactPropsGuide from "./components/concepts/props/ReactPropsGuide";
import ReactStateGuide from "./components/concepts/States/ReactStateGuide";
import Counter from "./components/concepts/States/Counter";
import ReactComponentsGuide from "./components/concepts/compTypes/ReactComponentGuide";
import TodoTable from "./components/concepts/Hooks/TodoTable";
import ReactUseEffectGuide from "./components/concepts/Hooks/ReactUseEffectGuide";
export default function App(){
  return(
    <div className="app-container">
      <h1 className="text-3xl font-bold bg-blue-500 text-white p-4 rounded text-center">Hello world</h1>
      <div className="component-block">
                <ReactSetupGuide />
      </div>

      <div className="component-block">
         <ReactClassStateGuide />
      </div>

      <div className="component-block">
            <ReactPropsGuide/>
      </div>
       <div className="component-block">
          <ReactStateGuide />
          <Counter/>
          <ReactComponentsGuide/>
      </div>
       <div className="component-block">
         <TodoTable/>
      </div>

      <div className="component-block">
        <ReactUseEffectGuide/>
      </div>
      
    </div>
  )
}