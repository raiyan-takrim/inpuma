import About from '@/components/About';
import Branding from '@/components/Branding';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavigationBar from '@/components/NavigationBar';
import NewsUpdates from '@/components/NewsUpdates';
import SocialBar from '@/components/SocialBar';
import VideoTour from '@/components/VideoTour';

export default function Home() {
  return (
    <div>
      <SocialBar />
      <div className="container mx-auto md:px-16">
        <Branding />
        <NavigationBar />
        <Hero />
        <div className="px-4">
          <About />
          <NewsUpdates />
          <Events />
          <VideoTour />
        </div>
      </div>
      <Footer />
    </div>
  );
}
