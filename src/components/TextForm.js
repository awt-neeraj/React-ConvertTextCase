import React, {useState} from 'react'
import { titleCase } from "title-case";

export default function TextForm(props) {
    const handleUC = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLC = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCC = () => {
        let newText = text.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        setText(newText)
    }

    const handleTC = () => {
        let newText = titleCase(text);
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    
    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () => {
        let newText = document.getElementById("myText");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container py-5" style={{backgroundColor: props.mode === 'dark'?'#2c3136':'#f8f9fa', height:'93.9vh'}}>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="10" style={{backgroundColor: props.mode === 'dark'?'#6c757d':'white', color: props.mode==='dark'?'#FFF':'#212529'}} placeholder='Type or Paste your content here'></textarea>
            </div>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleLC}>lower case</button>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleUC}>UPPER CASE</button>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleCC}>Capitalized Case</button>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleTC}>Title Case</button>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleSpeak}>Speak</button>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleExtraspaces}>Remove Extra Spaces</button>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-secondary btn-sm mx-1 my-1" disabled={text.length===0} onClick={handleClear}>Clear</button>
            <hr/>
            <p>Charcter Count: {text.length} | Word Count: {text.split(/\s+/).filter((element) => {return element.length!==0}).length} | Read Time:  {0.008 *  text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes</p>
            <hr/>
        </div>
        </>
    )
}
