import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Features />
            <div className="w-full h-px bg-gray-200" />
            <Reviews />
            <div className="w-full h-px bg-gray-200" />
            <FAQ />
            <div className="w-full h-px bg-gray-200" />
        </>
    );
};

export default Home;
