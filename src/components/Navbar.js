import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Alert from './Alert'

export default function Navbar(props) {

  


  return (
          <div>
                    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="#">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/about">About</Link>
                        </li>
                        

                      </ul>

                      <div className='d-flex'>
                          <div onClick={()=>{props.togglemode('secondary')}} className='bg-secondary rounded mx-2' style={{height:'20px', width:'20px'}}></div>
                          <div onClick={()=>{props.togglemode('warning')}} className='bg-warning rounded mx-2' style={{height:'20px', width:'20px'}}></div>
                          <div onClick={()=>{props.togglemode('danger')}} className='bg-danger rounded mx-2' style={{height:'20px', width:'20px'}}></div>
                          <div onClick={()=>{props.togglemode('success')}} className='bg-success rounded mx-2' style={{height:'20px', width:'20px'}}></div>

                      </div>
                    
                      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input onClick={()=>{props.togglemode(null)}}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enablemode}</label>
                </div>
                    </div>
                  </div>
                </nav>
                 {/* <Alert alert={alert}/> */}
                <main>
                  <Outlet/>
                </main>

       </div>
  )
}
