import React,{useState} from 'react'

export default function Textform() {
    const[text,setText]=useState("Hello...!");
    const upperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const clearText=()=>{
        setText("");
    }
    const onChangeUpdate = (event) => {
        setText(event.target.value); // Update state when user types
    };
  return (
    <>
    <div className="container mt-3">
        <h3> Enter your text below</h3>
    <div className="mb-3 mt-2">
    <textarea className="form-control border-dark" id="exampleFormControlTextarea1" value={text} onChange={onChangeUpdate} rows="9"></textarea>
    <button type="button" className="btn btn-dark mt-3" onClick={upperCase}>Convert to UpperCase</button>
    <button type="button" className="btn btn-dark mt-3" onClick={clearText}>Clear</button>
    </div>
    </div>
</>
  )
}
