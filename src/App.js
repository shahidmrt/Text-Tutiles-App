import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';





function App(props) {

  const [mode, setMode] = useState('light')
  const [enablemode, setEnablemode] = useState('Enabel Dark Mode')

  const removeBgColor =()=>{
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const togglemode =(cls)=>{
    // console.log(cls)
    removeBgColor();
    document.body.classList.add('bg-'+ cls)
    

    if(mode === 'light'){
      setMode('dark')
      document.body.style.background='black';
      setEnablemode('Enabel light mode')
      // showAlert('Drak mode is Enabled', 'success')




        // jb dark mode enable hojayega tu title badalta rahega infinite time.?
        // setInterval(() => {
        //       document.title='Enable Dark mode'         
        // },2000);
        // setInterval(() => {
        //      document.title='Enable light mode'   
        //  },1500);
        
    }
    else{
      setMode('light')
      document.body.style.background='white';
      setEnablemode('Enabel Dark mode')
      // showAlert('light mode is Enabled', 'success')
      
      document.title='Enable light mode'



    }
  }

  // const [alert, setAlert] = useState(null)

  // const showAlert=(message, type)=>{
  //   setAlert({
  //     msg: message,
  //     typ: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 1000);
  // }




  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={ <Navbar   title="Tutils" mode={mode} togglemode={togglemode} enablemode={enablemode} showAlert={props.showAlert} />} >
        <Route index element={<TextForm mode={mode}   labl="Enter the text to analyze below" />}    />
        <Route path='/about' element={<About mode={mode}/>}/>  
      </Route>
  
    )
  )

  
  return (


  //  <BrowserRouter>
  //               <Navbar title="Tutils" mode={mode} togglemode={togglemode} enablemode={enablemode}/>
  //               <Alert alert={alert} />
  //        <Routes>
  //              <Route path='/' element={<TextForm showAlert={showAlert} labl="Enter the text to analyze below" mode={mode}/>}/>               
  //              <Route path='/about' element={<About mode={mode}/>}/>                 
  //        </Routes>
  //  </BrowserRouter>
  <>
    <RouterProvider router={router}/>
  </>


    
  );
}

export default App;
