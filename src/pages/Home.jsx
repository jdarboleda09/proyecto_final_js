import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Services from '../components/Services';
import WhoWeAre from '../components/WhoWeAre';
import AppointmentModal from '../components/AppointmentModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Carousel />
      <About />
      <Services onOpenModal={() => setShowModal(true)} />
      <WhoWeAre />
      <AppointmentModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
