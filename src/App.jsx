import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import AboutUs from "./components/pages/AboutUs";
import Login from "./components/pages/authentication/Login";
import Register from "./components/pages/authentication/Register";
import Forum from "./components/pages/Forum";
import ForumListOfPosts from "./components/pages/ForumListOfPosts";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:category" element={<ForumListOfPosts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
