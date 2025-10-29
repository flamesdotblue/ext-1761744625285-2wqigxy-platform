import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Hero />
      <Features />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
