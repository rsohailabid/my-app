import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
// import { Switch } from 'react-router-dom';
// import { 
//   BrowserRouter as Router,
//   Routes, 
//   Route
// } from 'react-router-dom';

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
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Now';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils is Amazing Mode';
      // }, 1700);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
          {/* <Navbar title = "Text Util" aboutText = "About Us"/> */}
          {/* <Navbar title = "Text Util" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/> */}
          <Navbar title = "Text Util" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
          <Alert alert = {alert}/>
      <div className = "container my-3">
          {/* <Routes>
          <Route path="/" element={<TextForm showAlert= {showAlert} heading = "Enter text to analyze below" mode={mode}/>}>
            </Route>
            <Route path="/about" element={<About/>}> </Route>          
          </Routes> */}
          <TextForm showAlert= {showAlert} heading = "Enter text to analyze below" mode={mode}/>
      </div>
      {/* </Router> */}
    </>
  
  );
}

export default App;
 