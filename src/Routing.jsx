import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Listings from './pages/Listings';
import InternshipDetail from './pages/InternshipsDetail';
import ApplicationForm from './pages/ApplicationForm';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const Routing = () => (
  <>
    <Header />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/internships" element={<Listings />} />
        <Route path="/internships/:id" element={<InternshipDetail />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default Routing;
