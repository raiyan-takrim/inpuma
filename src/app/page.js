import Branding from "@/components/Branding";
import NavigationBar from "@/components/NavigationBar";
import SocialBar from "@/components/SocialBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SocialBar />
      <div className="container mx-auto md:px-16">
        <Branding />
        <NavigationBar />
      </div>
    </div>
  );
}
