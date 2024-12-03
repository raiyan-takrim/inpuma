import About from '@/components/About';
import Branding from '@/components/Branding';
import Hero from '@/components/Hero';
import NavigationBar from '@/components/NavigationBar';
import NewsUpdates from '@/components/NewsUpdates';
import SocialBar from '@/components/SocialBar';

export default function Home() {
  return (
    <div>
      <SocialBar />
      <div className="container mx-auto md:px-16">
        <Branding />
        <NavigationBar />
        <Hero />
        <div className="px-2">
          <About />
          <NewsUpdates />
        </div>
      </div>
    </div>
  );
}
