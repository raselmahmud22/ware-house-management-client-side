import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Blog from "./Components/Pages/Blog/Blog";
import Inventory from "./Components/Pages/Inventory/Inventory";
import MyOrder from "./Components/Pages/MyOrder/MyOrder";
import NotFound from "./Components/Common/NotFound/NotFound";
import Registration from "./Components/Pages/GetStart/Registration";
import React, { useState } from "react";
import LogIn from "./Components/Pages/GetStart/LogIn";
import SocialLogIn from "./Components/Pages/GetStart/SocialLogIn";
export const ThemeContext = React.createContext("");
function App() {
  const [count, setCount] = useState(1);
  /* const handleGoogleSignIn = (e) => {
    setGoogleSignIn(e);

  }; */
  const handleMe = () => {
    console.log("count hello");
    
  }

  return (
    <div className="container">
      <Header />
      <ThemeContext.Provider value={{handleMe}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/order" element={<MyOrder />}></Route>
          <Route path="/getStart" element={<LogIn />}></Route>
          <Route path="/social" element={<SocialLogIn />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
