/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ARShowcase } from "./components/ARShowcase";
import { Expertise } from "./components/Expertise";
import { Collaboration } from "./components/Collaboration";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="selection:bg-white selection:text-black">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <ARShowcase />
        <Expertise />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
