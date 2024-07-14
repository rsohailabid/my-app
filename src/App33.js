import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }

  return (
    <>
      {/* <Navbar title = "Text Util" aboutText = "About Us"/> */}
      {/* <Navbar title = "Text Util" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/> */}
      <Navbar title = "Text Util" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className = "container my-3">
        {/*<TextForm heading = "Enter text to analyze below"/> */}
        {/*<About/>*/}
        <TextForm showAlert= {showAlert} heading = "Enter text to analyze below" mode={mode}/>

      </div>
    </>
  
  );
}

export default App;
