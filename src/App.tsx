import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Requests from "./components/Requests";
import Memo from "./components/Memo";
import Help from "./components/Help";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import FinalCta from "./components/FinalCta";
import SignatureSpine from "./components/SignatureSpine";
import SectionSeam from "./components/SectionSeam";

export default function App() {
  return (
    <div className="relative min-h-svh">
      <div className="grain" aria-hidden />
      <a href="#top" className="skip-link">
        К содержанию
      </a>
      <Header />
      <main className="relative">
        <SignatureSpine />
        <Hero />
        <div className="bg-ink">
          <SectionSeam convergence={0.12} tone="on-ink" />
        </div>
        <About />
        <div className="bg-sand">
          <SectionSeam convergence={0.32} tone="on-sand" />
        </div>
        <Requests />
        <div className="bg-ink">
          <SectionSeam convergence={0.42} tone="on-ink" />
        </div>
        <Memo />
        <div className="bg-ink">
          <SectionSeam convergence={0.58} tone="on-ink" />
        </div>
        <Help />
        <div className="bg-sand">
          <SectionSeam convergence={0.72} tone="on-sand" />
        </div>
        <Services />
        <div className="bg-sand">
          <SectionSeam convergence={0.86} tone="on-sand" />
        </div>
        <Reviews />
        <div className="bg-ink">
          <SectionSeam convergence={1} tone="on-ink" />
        </div>
        <FinalCta />
      </main>
    </div>
  );
}
