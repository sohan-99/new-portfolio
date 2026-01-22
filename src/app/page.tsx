import Hero from "@/components/Hero";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
