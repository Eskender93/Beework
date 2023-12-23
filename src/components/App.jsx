import React, { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Tariffs from "./Tariffs/Tariffs";
import Benefits from "./Benefits/Benefits";
import MeetingRoom from "./MeetingRoom/MeetingRoom";

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Header toggleSidebar={() => setMenuOpen(!isMenuOpen)} />
      <Sidebar isOpen={isMenuOpen} closeMenu={() => setMenuOpen(false)} />
      {/* Інші компоненти або вміст */}
      <Hero />
      <Features />
      <Tariffs />
      <Benefits />

      <MeetingRoom />
    </div>
  );
};

export default App;
