import Hero from '../components/Hero';
import QuoteBanner from '../components/QuoteBanner';
import WhatWeOffer from '../components/WhatWeOffer';
import InstituteInfo from '../components/InstituteInfo';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuoteBanner />
      <WhatWeOffer />
      <InstituteInfo />
      <Testimonials />
    </>
  );
}
