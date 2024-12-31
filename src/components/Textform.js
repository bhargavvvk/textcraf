import React,{useState} from 'react'
import Textsummary from './Textsummary';

export default function Textform(props) {
    const[text,setText]=useState("Hello...!");
    const upperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const lowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText=()=>{
        setText("");
    }
    const clearSpace=()=>{
        let noSpaces = text.replace(/\s+/g, '');
        setText(noSpaces);
    }
    const clearChar=()=>{
        let newText = text.replace(/[^a-zA-Z0-9\s]/g, "");  // Remove special characters
        setText(newText);
    }
    const onChangeUpdate = (event) => {
        setText(event.target.value); // Update state when user types
    };
  return (
    <>
    <div className="container mt-3">
        <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}> Enter your text below</h3>
    <div className="mb-3 mt-2">
    <textarea className={`form-control border-${props.mode==='light'?'dark':'white'}`} style={{color:props.mode === 'light' ? 'black' : 'white',backgroundColor:props.mode==="light"?"white":"rgba(33, 37, 41, 0.5)"}} id="exampleFormControlTextarea1" value={text} onChange={onChangeUpdate} rows="9"></textarea>
    <div className="d-flex gap-3 mt-3">
  <button type="button" className={`btn btn-${props.mode==='light'?"dark":"light"}`} onClick={upperCase}>
    Convert to UpperCase
  </button>
  <button type="button" className={`btn btn-${props.mode==='light'?"dark":"light"}`} onClick={lowerCase}>
    Convert to LowerCase
  </button>
  <button type="button" className={`btn btn-${props.mode==='light'?"dark":"light"}`} onClick={clearSpace}>
    Remove Spaces
  </button>
  <button type="button" className={`btn btn-${props.mode==='light'?"dark":"light"}`} onClick={clearChar}>
    Remove special Characters
  </button>
  <button type="button" className={`btn btn-${props.mode==='light'?"dark":"light"}`} onClick={clearText}>
    Clear
  </button>
</div>
    </div>
    </div>
    <Textsummary text={text} mode={props.mode}/>
</>
  )
}
