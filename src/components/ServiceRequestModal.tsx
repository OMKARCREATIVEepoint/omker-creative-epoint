import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Phone, 
  MessageCircle, 
  User, 
  MapPin, 
  FileText,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { ServiceItem, LanguageMode, ServiceEnquiryForm } from '../types';
import { CSC_INFO, SERVICES_DATA } from '../data/servicesData';
import { generateWhatsAppUrl } from '../utils/helpers';

interface ServiceRequestModalProps {
  initialService: ServiceItem | null;
  onClose: () => void;
  language: LanguageMode;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  initialService,
  onClose,
  language
}) => {
  const allServices = SERVICES_DATA.flatMap(cat => cat.services);

  const [form, setForm] = useState<ServiceEnquiryForm>({
    name: '',
    phone: '',
    village: '',
    serviceId: initialService?.id || allServices[0]?.id || '',
    serviceName: initialService ? `${initialService.titleEn} (${initialService.titleBn})` : allServices[0]?.titleEn || '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = allServices.find(s => s.id === e.target.value);
    if (selected) {
      setForm(prev => ({
        ...prev,
        serviceId: selected.id,
        serviceName: `${selected.titleEn} (${selected.titleBn})`
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct polished WhatsApp message
    const msg = `*NEW CSC SERVICE ENQUIRY - OMKAR CREATIVE E-POINT*\n\n` +
      `👤 *Customer Name:* ${form.name.trim() || 'Citizen'}\n` +
      `📱 *Phone:* ${form.phone.trim()}\n` +
      `📍 *Village / Location:* ${form.village.trim() || 'Gopiballavpur Area'}\n` +
      `🏷️ *Service Requested:* ${form.serviceName}\n` +
      `📝 *Details / Requirement:* ${form.notes.trim() || 'General enquiry / appointment'}\n\n` +
      `_Sent from Omkar Creative E-Point Digital Seva Portal_`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(generateWhatsAppUrl(msg), '_blank');
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                Quick Service Request
              </span>
              <span className="text-[11px] text-slate-300">
                CSC ID: {CSC_INFO.cscId}
              </span>
            </div>
            <h2 className="text-xl font-bold mt-1 text-white">
              {language === 'bn' ? 'অনলাইন পরিষেবা অনুরোধ' : 'Request Service / Direct WhatsApp'}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              {language === 'bn' 
                ? 'আপনার প্রয়োজনীয় কাজের বিবরণ পাঠান, আমরা অবিলম্বে যোগাযোগ করব।' 
                : 'Send your requirements directly to our center on WhatsApp.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {language === 'bn' ? 'হোয়াটসঅ্যাপ খোলা হচ্ছে...' : 'Redirecting to WhatsApp...'}
            </h3>
            <p className="text-sm text-slate-600">
              {language === 'bn' 
                ? 'আপনার তথ্যাদি প্রস্তুত। সরাসরি আমাদের অপারেটরের সাথে কথা বলুন।' 
                : 'Your message has been formulated. Chat directly with Monisankar / CSC Operator.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'bn' ? 'পরিষেবা নির্বাচন করুন *' : 'Select Desired Service *'}
              </label>
              <select
                value={form.serviceId}
                onChange={handleServiceChange}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
              >
                {allServices.map(srv => (
                  <option key={srv.id} value={srv.id}>
                    {srv.titleEn} — {srv.titleBn}
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {language === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder={language === 'bn' ? 'যেমন: রাজেশ পাত্র' : 'e.g. Rajesh Patra'}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {language === 'bn' ? 'মোবাইল নম্বর *' : 'Mobile Number *'}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="10 digit mobile"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Village / Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'bn' ? 'গ্রাম / এলাকা (Village / Area)' : 'Village / Area'}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={form.village}
                  onChange={e => setForm({ ...form, village: e.target.value })}
                  placeholder={language === 'bn' ? 'যেমন: গোপীবল্লভপুর, বেলিয়াবেড়া' : 'e.g. Gopiballavpur, Beliabera, Nayagram'}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
                />
              </div>
            </div>

            {/* Notes / Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'bn' ? 'কী সাহায্য প্রয়োজন? (সংক্ষেপে লিখুন)' : 'Details / Specific Requirement'}
              </label>
              <textarea
                rows={2}
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
                placeholder={language === 'bn' 
                  ? 'যেমন: নতুন প্যান কার্ডে আবেদন করতে চাই / ট্রেনের টিকিট দরকার...' 
                  : 'e.g. Need urgent PAN card correction or SVMCM scholarship guidance...'}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-hidden transition-all"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-100/30" />
                <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে পাঠান (Send via WhatsApp)' : 'Send Enquiry via WhatsApp'}</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Or speak directly:</span>
                <a
                  href={`tel:${CSC_INFO.mobile}`}
                  className="text-blue-700 font-bold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  Call {CSC_INFO.mobile}
                </a>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
