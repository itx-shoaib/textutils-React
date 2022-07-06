import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpChange = (event)=>{
        setText(event.target.value);
    }


    const [text, setText] = useState("Enter your text here");
  return (
    <div>
    <div class="mb-3">
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="6"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}