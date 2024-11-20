import Header from "@/app/components/header/page";
import HeroSection from "@/app/components/hero/page";
import Services from "@/app/components/service/page"
import Work from "@/app/components/work/page"
import Counter from "@/app/components/counter/page"
import Team from "@/app/components/team/page"
import Blogs from "@/app/components/blogs/page"
import CallActions from "@/app/components/callAction/page"
import Footer from "@/app/components/footer/page"
import dynamic from 'next/dynamic'
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services/>
      <Work/>
      <Counter/>
      <Team/>
      <Blogs/>
      <CallActions/>
      <Footer/>
    </>
  );
}
