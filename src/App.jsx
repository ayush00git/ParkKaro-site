import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";


function App() {

  return (
    <>
      <NavBar />
      <div id="home" className="scroll-mt-28"><HeroSection /></div>
      <div id="features" className="scroll-mt-28"><Features /></div>
      <div id="reviews" className="scroll-mt-28"><Reviews /></div>
      <div id="faqs" className="scroll-mt-28"><FAQ /></div>
      <div id="how-it-works" className="scroll-mt-28"><HowItWorks /></div>
      <Footer />
    </>
  )
}

export default App
