'use client'

import { Advantages } from "@/shared/components/Advantages";
import { BannerContent } from "@/shared/components/BannerContent";
import { Customers } from "@/shared/components/Customers";
import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";
import { Newsletter } from "@/shared/components/Newsletter";
import { PlatformPreview } from "@/shared/components/PlatformPreview";

// import { Home } from "@/shared/components/Olds/Home";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <BannerContent />
      <Advantages />
      <PlatformPreview />
      <Customers />
      <Newsletter />
      <Footer />
    </>
  );
}
