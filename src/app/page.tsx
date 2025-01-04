import BlogCards from "@/components/blog-cards";
import Navbar from "@/components/nav-bar";


export default async function Home() {
  const repsonse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs = await repsonse.json();

  return (
    <div className="min-h-screen py-2 space-y-4">
      <Navbar />
      <BlogCards blogs={blogs} />
    </div>
  );
}
