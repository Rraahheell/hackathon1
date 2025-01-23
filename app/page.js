import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/mainpage/Hero";
import EditorsPick from "@/sections/mainpage/EditorsPick";
import BestSeller from "@/sections/mainpage/BestSeller";
import HomePage from "@/sections/mainpage/HomePage";
import FeaturedProducts from "@/sections/mainpage/FeaturedProducts";

export default function MainPage() {
    return (
        <div>
            <TopBanner/>
            <Navbar/>
            <Hero/>
            <EditorsPick/>
            <BestSeller/>
            <HomePage/>
            <FeaturedProducts/>
        </div>
    );
}
