import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import BuildStrength from "./components/BuildStrength";
import Pricing from "./components/Pricing";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  if (isLoginOpen) {
    return <LoginPage onBack={() => setIsLoginOpen(false)} />;
  }

  return (
    <>
      <Navbar onOpenLogin={() => setIsLoginOpen(true)} />
      <Hero />
      <Features />
      <BuildStrength />
      <Pricing />
      <Achievements />
      <Contact />
    </>
  );
}
