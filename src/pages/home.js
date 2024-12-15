import { Header } from '../components/Header';
import Hero from '@/components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import Tariffs from '@/components/Tariffs';
import Address from '@/components/Address';

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
