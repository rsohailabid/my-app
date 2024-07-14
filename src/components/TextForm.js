//import { useState } from "react";
import React, {useState} from 'react';


export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleUpClick = () =>{
    console.log("Upercase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Convert to Upercase", "success");
    //setText("You have clicke on handleOnClick");
  }

  const handleLowerClick = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase", "success");
    //setText("You have clicke on handleOnClick");
  }

  const handleClearText = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Clear text", "success");
    //setText("You have clicke on handleOnClick");
  }

  const handleCopy = () =>{
    //console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy text", "success");
  }

  const handleExtraSpace = () =>{
    //console.log("I am copy");
    let newText = text.split (/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  }

  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }
  
  //setText("Pakistan"); //Correct method
  //text = "newtext"; //worng method
  return ( 
    <>
    <div className= "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-outline-primary btn-sm mx-1" onClick={handleUpClick}>Convert to Upercase</button>
            
            <button className="btn btn-outline-secondary btn-sm mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
            
            <button className="btn btn-primary btn-sm mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            {/*<button className="btn btn-primary btn-sm mx-1" onClick={handleCapitalize}>First Letter Capital</button>*/}
        </div>
        <div className= "container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p> 
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Text in the textbox above to preview it here"}</p>
     </div>
     </>
  );
}
