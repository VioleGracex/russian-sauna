import { Header } from '../components/Header';
import Hero from '@/components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
