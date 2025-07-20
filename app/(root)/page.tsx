import React from "react";
import Main from "../components/ui/Home/Main";
import { WorksSection } from "../components/ui/Home/WorksSection";
import BrandsSection from "../components/ui/Home/BrandsSection";
import ExploreSection from "../components/ui/Home/ExploreSection";
import ServicesSection from "../components/ui/Home/ServicesSection";
import TestimonialSection from "../components/ui/Home/TestimonialSection";
import LoginToaster from "../components/ui/LoginToaster";

export default function Home() {
  return (
    <>
      <LoginToaster />
      <Main />
      <WorksSection />
      <BrandsSection />
      <ExploreSection />
      <ServicesSection />
      <TestimonialSection />
    </>
  );
}
