import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
// import './pages/LoginComponent/login.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Login from './pages/LoginComponent/Login';
import CallList from './pages/PhoneComponent/CallList';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
                <Header />  
                <SideBar />
                <Main />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/tables" element={
          <>
            <Header />  
            <SideBar />
            <CallList/>
          </>
        }
         />
      </Routes>
    </Router>
  );
}


export default App;






// import React from 'react';

// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'remixicon/fonts/remixicon.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// import './App.css';
// import Header from './components/Header';
// import SideBar from './components/SideBar';
// import Main from './components/Main';

// function App(){
//     return(
//         <>
//         <Header />
//         <SideBar />
//         <Main />
//       </>
//     )
// } 

// export default App