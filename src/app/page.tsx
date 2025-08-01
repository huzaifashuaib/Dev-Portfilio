import Blog from "@/components/blog/Blog";
import Hero from "@/components/heroSection/Hero";
import NewLetter from "@/components/newsLetter/NewLetter";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <Blog />
      <NewLetter />
    </div>
  );
}
