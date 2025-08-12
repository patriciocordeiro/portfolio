// src/pages/index.tsx
import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection/HeroSection';

import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import CollaborationBlueprint from '../components/CollaborationBlueprint/CollaborationBlueprint';
import PartnershipAdvantage from '../components/PartnershipAdvantage/PartnershipAdvantage';
import AboutMe from '../components/AboutMe/AboutMe';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Home(): JSX.Element {
  return (
    <Layout
      title='Patricio Cordeiro - Freelance Tech Lead & Architect'
      description='Expert freelance developer delivering high-impact digital solutions with React, Angular, Node.js, and AI.'>
      <main>
        <HeroSection />
        <ServicesSection />
        <CollaborationBlueprint />
        {/* <WhatIDeliver /> */}
        <ProjectsSection />
        {/* <WhyMeSection /> */}
        <PartnershipAdvantage />
        <AboutMe />
        <ContactForm />
      </main>
    </Layout>
  );
}
