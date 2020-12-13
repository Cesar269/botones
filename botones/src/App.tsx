import { useRef} from 'react';
import React from "react";
import './App.css'

function App() {
  let amigos = useRef<HTMLInputElement>(null)
  let familia = useRef<HTMLInputElement>(null)
  let novia = useRef<HTMLInputElement>(null)

  const evento = () =>{
    if(amigos.current?.checked ===true && novia.current?.checked ===true && familia.current?.checked === true){
      amigos.current.checked = false;
    } 
  }
  

  return (

    <div className="botones">
      <h2>No se puede tener todo xD</h2>
      <label className="switch">
        <input type="checkbox" ref={amigos} onClick={()=>{
        if(amigos.current?.checked ===true && novia.current?.checked ===true && familia.current?.checked === true){
          amigos.current.checked = true;
          novia.current.checked = true;
          familia.current.checked = false;
        } 
          evento()
        }}/>
        <span className="slider round" ></span><span className="soy">Amigos</span>
      </label>
      <br/>
      <label className="switch">
        <input type="checkbox" ref={familia} onClick={()=>{
           if(amigos.current?.checked ===true && novia.current?.checked ===true && familia.current?.checked === true){
            amigos.current.checked = true;
            novia.current.checked = false;
            familia.current.checked = true;
          } 
          evento()
        }}/>
        <span className="slider round" ></span><span className="soy">Familia</span>
      </label>
      <br/>
      <label className="switch">
        <input type="checkbox" ref={novia} onClick={()=>{
          evento()
        }}/>
        <span className="slider round" ></span><span className="soy">Novia</span>
      </label>

    </div>



  );
}

export default App;
