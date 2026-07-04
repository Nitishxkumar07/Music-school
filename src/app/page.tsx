import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import ScrollCard from "@/components/ScrollCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Whychooseus from "@/components/Whychooseus";
import { main } from "framer-motion/client"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.0]">
    <Hero />
    <FeaturedCourses />
    <Whychooseus />
    <ScrollCard />
    <UpcomingWebinar />
    <Instructors />
    <Footer />
    </main>
  );
}
