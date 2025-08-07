import Blog from "@/components/blog/Blog";
import Hero from "@/components/heroSection/Hero";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <Project title=" Featured Projects" />
      <Blog title=" Latest Blog Posts" />
    </div>
  );
}
