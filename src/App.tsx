/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GovtPortalsSection } from './components/GovtPortalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DocumentChecklistModal } from './components/DocumentChecklistModal';
import { ServiceRequestModal } from './components/ServiceRequestModal';
import { DigitalVisitingCardModal } from './components/DigitalVisitingCardModal';
import { FloatingActions } from './components/FloatingActions';
import { LanguageMode, ServiceItem } from './types';

export default function App() {
  const [language, setLanguage] = useState<LanguageMode>('bilingual');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals state
  const [checklistService, setChecklistService] = useState<ServiceItem | null>(null);
  const [enquiryService, setEnquiryService] = useState<ServiceItem | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);

  const handleOpenChecklist = (service: ServiceItem) => {
    setChecklistService(service);
  };

  const handleOpenEnquiryForService = (service: ServiceItem) => {
    setEnquiryService(service);
    setIsEnquiryModalOpen(true);
  };

  const handleOpenGeneralEnquiry = () => {
    setEnquiryService(null);
    setIsEnquiryModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white font-sans">
      
      {/* Top Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onOpenCardModal={() => setIsCardModalOpen(true)}
        onOpenEnquiryModal={handleOpenGeneralEnquiry}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Shop Status and Live Search */}
        <Hero
          language={language}
          onExploreServices={handleExploreServices}
          onOpenEnquiry={handleOpenGeneralEnquiry}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Full Services Catalog */}
        <ServicesSection
          language={language}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenChecklist={handleOpenChecklist}
          onOpenEnquiry={handleOpenEnquiryForService}
        />

        {/* Government Services & Central / State Schemes Directory */}
        <GovtPortalsSection
          language={language}
          onOpenEnquiry={handleOpenGeneralEnquiry}
        />

        {/* About Us & Why Choose Us Section */}
        <AboutSection language={language} />

        {/* Testimonials & Reviews Section */}
        <TestimonialsSection 
          language={language} 
          onOpenEnquiry={handleOpenGeneralEnquiry}
        />

        {/* Contact Us, Map & Quick Message */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenCardModal={() => setIsCardModalOpen(true)}
        onOpenEnquiry={handleOpenGeneralEnquiry}
      />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingActions onOpenCard={() => setIsCardModalOpen(true)} />

      {/* Document Checklist Modal */}
      {checklistService && (
        <DocumentChecklistModal
          service={checklistService}
          language={language}
          onClose={() => setChecklistService(null)}
          onRequestService={(service) => {
            setChecklistService(null);
            handleOpenEnquiryForService(service);
          }}
        />
      )}

      {/* Service Request / WhatsApp Form Modal */}
      {isEnquiryModalOpen && (
        <ServiceRequestModal
          initialService={enquiryService}
          language={language}
          onClose={() => setIsEnquiryModalOpen(false)}
        />
      )}

      {/* Digital Visiting Card & QR Modal */}
      {isCardModalOpen && (
        <DigitalVisitingCardModal
          language={language}
          onClose={() => setIsCardModalOpen(false)}
        />
      )}

    </div>
  );
}
