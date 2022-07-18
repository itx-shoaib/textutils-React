import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpChange = (event)=>{
        setText(event.target.value);
    }
    const handleloClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
    }


    const [text, setText] = useState("");
  return (
    <>
    <div className="container mb-3">
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="6"></textarea>
        <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleloClick}>Convert to uppercase</button>
    </div>
    <div className="container">
      <h1>Summary of your text:</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split('').length} Minutes read </p>
      <h3>Preview:</h3>
      <p>{text}</p>
    </div>
    </>
  )
}