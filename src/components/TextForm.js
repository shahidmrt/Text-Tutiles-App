import React, { useState } from 'react'
// import Alert from './Alert';
import Alertpage from './Alertpage';

export default function TextForm(props) {
    const [text, setText] =useState("");

    const [alert, setAlert] = useState(null)
   

      
    function handlechange(e) {
    console.log('You use a Text area');
    setText(e.target.value);
  }

    const handleUpClick= () => {
      // console.log('uper case button click' + text);
      // setText('you click a upercase btn')
      const upercase = text.toUpperCase();
      setText(upercase);

      setAlert({message:'text is convert to upppercase', type:'success' }) 
      setTimeout(() => {
      setAlert(null)
      }, 1000);      
    }
    
    const handleDownClick =() => {
      const lowercase = text.toLowerCase();
      setText(lowercase);
      setAlert({message:'text is convert to lowercase', type:'success' }) 
      setTimeout(() => {
      setAlert(null)
      }, 1000);

    }
     
    const handleClear = () => {
      const clearText = "";
      setText(clearText);
      setAlert({message:'textarea is clear', type:'success' }) 
      setTimeout(() => {
      setAlert(null)
      }, 1000);      
    }

    const handleCopy =()=>{
      // const copytext=document.getElementById('mybox');
      // copytext.select();
      // navigator.clipboard.writeText(copytext.value)
      // Or
      navigator.clipboard.writeText(text)
      // document.getSelection().removeAllRanges();
      setAlert({message:'the text is copied ', type:'success' }) 
      setTimeout(() => {
      setAlert(null)
      }, 1000);
    }

    const RmovXtraSpce= ()=>{
      const newText= text.split(/[ ]+/);
      setText(newText.join(" "));
      setAlert({message:'the extra spaces is removed', type:'success' }) 
      setTimeout(() => {
      setAlert(null)
      }, 1000);
    }



  return (
    <>
    <Alertpage alert={alert} />
    <div className='container'>
        <div className="mb-3 mt-5 "  >
            <label style={{backgroundColor: props.mode ==='dark'?'#1d2436' :'white',color: props.mode === 'dark'? 'white':'black' }} className="form-control fw-bold fs-2 ">{props.labl}</label>
            <textarea style={{backgroundColor: props.mode ==='dark'?'#1d2436' :'white',color: props.mode === 'dark'? 'white':'black' }} className="form-control mt-3" id="mybox" onChange={handlechange} value={text} rows="5"/>  
        </div>
        <button disabled={text.length === 0} className='btn btn-primary m-1' onClick={handleClear }> Clear text </button>
        <button disabled={text.length === 0} className='btn btn-primary m-1' onClick={handleUpClick}> Convert to Uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary m-1'  onClick={handleDownClick}> Convert to Lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary m-1' onClick={handleCopy} >Copy text</button>
        <button disabled={text.length === 0} className='btn btn-primary m-1' onClick={RmovXtraSpce}> Romove extra Spaces</button>

        <div className="container" style={{color: props.mode === 'dark' ? "white":"black"}}>
          <h3>Your Text Summary</h3>
          <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} word and {text.length} character</p>
          <p>{0.008 * text.split(" ").length } Minute read .</p>
          <h4>Preview</h4>
          <p>{text.length>0?text:'plz write some text in textarea'}</p>
        </div>
    </div>
    </>
  )
}
