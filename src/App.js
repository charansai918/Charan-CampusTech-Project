import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';
import React,{BrowserRouter,Routes,Route, Link} from "react-router-dom"
import RateMe from './ButtonComponent/RateMe';
import ReportBug from './ButtonComponent/ReportBug';
import { IoMdMenu } from "react-icons/io";
import Aim from './MenueComponent/Aim';
import Theory from './MenueComponent/Theory';
import Pretest from './MenueComponent/Pretest';
import Procedure from './MenueComponent/Procedure';
import Posttext from './MenueComponent/Posttext';
import References from './MenueComponent/References';
import Feedback from './MenueComponent/Feedback';
import Circuitdiagram from './MenueComponent/Circuitdiagram';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="App">
      
      
     <BrowserRouter>
     
     <nav className='button-nav-link'>
    
        <Link id='button-link' to="RateMe">Rate Me</Link>
        <Link id='button-link1' to="ReportBug">Report a Bug</Link>
      </nav>
      

      <>
      <Button  className='menu_icon'variant="primary" onClick={handleShow}>
        
      <IoMdMenu className='icon1' />
      </Button>

      <p className='heading'>HOUSE WIRING</p>

      <Offcanvas className='menu-nav' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='menu-close'>
          <Offcanvas.Title >
            <img src='./images/vlabs-logo.jpg'  className='menu-logo' alt=''/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
<nav className='menu-nav'>
  <div>
  <Link className='aim' to="Aim">Aim</Link>
  </div>
  <div>
  <Link className='theory' to="Theory">Theory</Link>
  </div>
  <div>
  <Link  className="pretest"to="Pretest">Pretest</Link>
  </div>
  <div>
  <Link  className='procedure' to="Procedure">Procedure</Link>
  </div>
  <div>
  <Link className='Circuitdiagram' to="Circuitdiagram">Circuit Diagram</Link>
  </div>
   <div>
  <Link className='posttext'to="Posttext">Post Text</Link>
  </div>
  <div>
  <Link className='references' to="References">References</Link>
  </div>
  <div>
  <Link className='feedback' to="Feedback">Feed Back</Link>
  </div>
       </nav>
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
    <div className='back_ground'>
     
     <Routes>
     <Route path='/RateMe'element={<RateMe></RateMe>}></Route>
     <Route path="/ReportBug" element={<ReportBug></ReportBug>}></Route>
     </Routes>

     <Routes>
      <Route path="/Aim" element={<Aim></Aim>}></Route>
      <Route path="/Theory" element={<Theory></Theory>}></Route>
      <Route path="/Pretest" element={<Pretest></Pretest>}></Route>
      <Route path="/Procedure" element={<Procedure></Procedure>}></Route>
      <Route path="/Circuitdiagram" element={<Circuitdiagram></Circuitdiagram>}></Route>
      <Route path="/Posttext" element={<Posttext></Posttext>}></Route>
      <Route path="/References" element={<References></References>}></Route>
      <Route path="/Feedback" element={<Feedback></Feedback>}></Route>
     </Routes>
     </div>
     </BrowserRouter>
     </div>
   
  );
}

export default App;
