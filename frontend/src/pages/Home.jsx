import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

const Home = () => {
  return (
    <div>
      {/* Helmet configuration */}
      <Helmet>
        <title>Franck Freville - Développeur Web</title>
        <meta
          name="description"
          content="Portfolio de Fréville Franck, développeur web spécialisé en React, Tailwind CSS, et Strapi. Découvrez mes projets et mes compétences."
        />
        <meta
          name="keywords"
          content="Franck Freville, Développeur Web, React, Tailwind CSS, Strapi, Portfolio"
        />
        <meta name="author" content="Franck Freville" />
        <link rel="canonical" href="https://frevillefranck.fr/" />
        <meta property="og:title" content="Fréville Franck - Développeur Web" />
        <meta
          property="og:description"
          content="Portfolio de Fréville Franck, développeur web, Création site web"
        />
        <meta property="og:url" content="https://frevillefranck.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/logo2.png" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;
