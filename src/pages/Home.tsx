import Header from "../components/Header"
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Testimonial from "../components/sections/Testimonial";
import RippleEffect from "../components/RippleEffect";
import VerticalLines from "../components/VerticalLines"


function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <Header />
      <div className="relative overflow-y-clip">
        <Hero />
        <div className="md:w-10/12 mt-10 mx-auto font-geist relative md:border-l-0 md:border-b-0 md:border-[1.2px] md:border-border rounded-none -pr-2 dark:bg-black/[0.95]">
          <div className="w-full md:mx-0">
            <Features />
            <Testimonial />
          </div>
          <RippleEffect />
        </div>
        <VerticalLines />
      </div>
    </div>
  )
}

export default Home