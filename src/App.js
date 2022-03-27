import Home from "./pages/Home";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import NavBar from "./components/NavBar";
import Announcement from "./components/Announcement";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



const App = () => {
  // return <Home />;
  return (
    <Router>
      <Announcement />
        <NavBar />
        <Routes>
            <Route
                path="/home"
                element={<Home />}
            />   
            <Route
                path="/shop"
                element={<Shop />}
            />  
            <Route
                path="/ourstory"
                element={<OurStory />}
            />            
            <Route path="*" element={<Navigate to="/home" />} />   
        </Routes>
    </Router>
);


};

export default App;
