import {BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Details from "./Components/Details";
import Create from "./Components/Create";
// import Login from "./Components/Login";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        
          
          <Route path="/details" element={<Details />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
