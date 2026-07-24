import React from 'react';
import Hero from '../../components/Sections/Hero/Hero';
import About from '../../components/Sections/About/About.jsx';
import ServicesList from '../../components/Sections/ServicesList/ServicesList';
import ContractSection from '../../components/Sections/ContractSection/ContractSection';
import MapSection from '../../components/Sections/MapSection/MapSection';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <About />
      <ServicesList />
      <ContractSection />
      <MapSection />
    </div>
  );
};

export default HomePage;