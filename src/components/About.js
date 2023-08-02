// import React, { useState } from 'react'


export default function About(props) {

  const mystyle= { background: props.mode === "dark" ? '#1d2436' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'}

    // const [mystyle, setMystyle] = useState({
    //     color: "white",
    //     backgroundColor:"black"
    // })

    // const [btnText, setBtnText] = useState('Enable white mode')
    //  const handleColor =()=>{
    //     if(mystyle.color === 'white'){
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable dark mode')
    //     }
    //     else{
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText('Enable white mode')
    //     }
    // }
     
  return (
    <div className='container'  >
    <h2 className={` my-3 `} style={{color: props.mode === 'dark' ? 'white' : 'black'}} > ths is about page....... </h2>

      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" style={mystyle}  type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

{/* <button onClick={handleColor} type="button" className="btn btn-primary my-3">{btnText}</button> */}
    </div>
  )
}
