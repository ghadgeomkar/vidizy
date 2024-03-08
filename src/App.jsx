import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Search from "./Components/Search/Search";
import PlayVideo from "./Components/PlayVideo/PlayVideo";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home  sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/playvideo/:videoId" element={<PlayVideo />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
