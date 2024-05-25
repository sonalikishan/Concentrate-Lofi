import { Button } from "@chakra-ui/react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import VirtualRoom from './components/VirtualRoom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Header />
      
<Routes>

  <Route path='/' element={<Home />} />
  <Route path="/VirtualRoom" element={<VirtualRoom />}></Route>
  <Route path="/Login" element={<Login />}></Route>
  <Route path="/Signup" element={<Signup />}></Route>
</Routes>
<Footer />
    </Router>
  );
}

export default App;
