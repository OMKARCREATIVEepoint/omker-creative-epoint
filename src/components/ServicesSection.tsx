import React, { useState, useMemo } from 'react';
import { 
  SERVICES_DATA 
} from '../data/servicesData';
import { 
  ServiceItem, 
  ServiceCategoryId, 
  LanguageMode 
} from '../types';
import { IconRenderer } from './IconRenderer';
import { 
  Clock, 
  FileCheck2, 
  MessageCircle, 
  Search, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

interface ServicesSectionProps {
  language: LanguageMode;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenChecklist: (service: ServiceItem) => void;
  onOpenEnquiry: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  searchQuery,
  setSearchQuery,
  onOpenChecklist,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryId | 'all'>('all');

  // Filter services by category and search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return SERVICES_DATA.map(category => {
      // Check if category is filtered out
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }

      // Filter services within this category
      const matchedServices = category.services.filter(srv => {
        if (!q) return true;
        const haystack = [
          srv.titleEn,
          srv.titleBn,
          srv.descEn,
          srv.descBn,
          ...srv.itemsEn,
          ...srv.itemsBn,
          ...(srv.requiredDocsEn || []),
          ...(srv.requiredDocsBn || [])
        ].join(' ').toLowerCase();

        return haystack.includes(q);
      });

      if (matchedServices.length === 0) return null;

      return {
        ...category,
        services: matchedServices
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  const totalServicesCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + (cat?.services.length || 0), 0);
  }, [filteredCategories]);

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Digital Seva Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR DIGITAL SERVICES
          </h2>
          
          <p className="mt-2 text-xl font-bold text-blue-700 font-bengali">
            আমাদের ডিজিটাল পরিষেবাসমূহ
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {language === 'bn'
              ? 'ব্যাংকিং, প্যান কার্ড, সরকারি শংসাপত্র, বিদ্যুৎ বিল এবং অনলাইন ফর্মের নির্ভরযোগ্য সমাধান।'
              : 'Reliable, instant and authorized digital assistance for banking, IDs, certificates, bills, and government applications.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-700 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'bn' ? 'সমস্ত পরিষেবা (All)' : 'All Services'}
          </button>

          {SERVICES_DATA.map(category => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <IconRenderer name={category.iconName} className="w-4 h-4" />
                <span>
                  {language === 'bn' ? category.titleBn : category.titleEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter if search active */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
            <span>
              Found <strong>{totalServicesCount}</strong> matching services for "{searchQuery}"
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-blue-700 font-bold hover:underline"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Service Categories Loop */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">No services found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold"
            >
              Show All Services
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category: any) => (
              <div key={category.id} className="space-y-5">
                
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center">
                      <IconRenderer name={category.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {category.titleEn}
                      </h3>
                      <p className="text-sm font-semibold text-blue-700 font-bengali">
                        {category.titleBn}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                    {language === 'bn' ? category.descBn : category.descEn}
                  </p>
                </div>

                {/* Services Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service: ServiceItem) => {
                    const title = language === 'bn' ? service.titleBn : service.titleEn;
                    const secondaryTitle = language === 'bilingual' ? service.titleBn : null;
                    const desc = language === 'bn' ? service.descBn : service.descEn;
                    const items = language === 'bn' ? service.itemsBn : service.itemsEn;
                    const turnaround = language === 'bn' ? service.turnaroundBn : service.turnaroundEn;

                    return (
                      <div 
                        key={service.id}
                        className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                      >
                        {/* Card Top Details */}
                        <div className="p-5 space-y-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-blue-700 border border-slate-200 group-hover:border-blue-200 flex items-center justify-center transition-colors">
                              <IconRenderer name={service.iconName} className="w-6 h-6" />
                            </div>

                            {/* Badge */}
                            {(service.badge || service.turnaroundEn) && (
                              <div className="flex flex-col items-end gap-1">
                                {service.badge && (
                                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                                    {language === 'bn' && service.badgeBn ? service.badgeBn : service.badge}
                                  </span>
                                )}
                                {turnaround && (
                                  <span className="text-[10px] text-slate-500 flex items-center gap-1 font-medium">
                                    <Clock className="w-3 h-3 text-emerald-600" />
                                    {turnaround}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                              {service.titleEn}
                            </h4>
                            <p className="text-xs sm:text-sm font-semibold text-slate-600 font-bengali mt-0.5">
                              {service.titleBn}
                            </p>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                              {desc}
                            </p>
                          </div>

                          {/* Bullet points list from user brief */}
                          <div className="space-y-1.5 pt-2 border-t border-slate-100">
                            {items.map((it, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{it}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Bottom Actions */}
                        <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
                          {/* Required Documents Modal Button */}
                          <button
                            type="button"
                            onClick={() => onOpenChecklist(service)}
                            className="flex-1 py-2 px-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                            title="View required documents to bring"
                          >
                            <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                            <span>{language === 'bn' ? 'নথি নির্দেশিকা' : 'Required Docs'}</span>
                          </button>

                          {/* WhatsApp / Apply Button */}
                          <button
                            type="button"
                            onClick={() => onOpenEnquiry(service)}
                            className="flex-1 py-2 px-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                            <span>{language === 'bn' ? 'আবেদন / যোগাযোগ' : 'Apply Now'}</span>
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
