import { Header } from '../components/Header';
import Hero from '@/frontend/HomeFront/Hero';
import About from '@/frontend/HomeFront/About';
import Services from '../frontend/HomeFront/Services';
import Testimonials from '../frontend/HomeFront/Testimonials';
import ContactForm from '../frontend/HomeFront/ContactForm';
import Footer from '../components/Footer';

import Advantages from '@/frontend/HomeFront/Advantages';
import Tariffs from '@/frontend/HomeFront/Tariffs';
import Address from '@/frontend/HomeFront/Address';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Advantages/>
      <Tariffs/>
      <Services />
      <Testimonials />
      <ContactForm />
      <Address/>
      <Footer />
    </div>
  );
}
