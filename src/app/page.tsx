import BlogCards from "@/components/blog-cards";
import Footer from "@/components/footer";
import Ripple from "@/components/ui/ripple";
import { Suspense } from "react";


async function Home() {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const repsonse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs = await repsonse.json();

  return (
    <div className="min-h-screen py-2 space-y-4">
      <BlogCards blogs={blogs} />
      <Footer />
    </div>
  );
}

const LoadingScreen = () => {
  return <div className="relative w-full flex h-screen items-center justify-center overflow-hidden">
    <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black">
      Loading...
    </p>
    <Ripple />
  </div>
}

export default function HomePage() {
  return <Suspense fallback={<LoadingScreen />}><Home /></Suspense>
}
