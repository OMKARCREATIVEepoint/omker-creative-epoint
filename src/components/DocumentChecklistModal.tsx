import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  Square, 
  Printer, 
  Share2, 
  Clock, 
  ShieldCheck, 
  FileText,
  AlertCircle,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { ServiceItem, LanguageMode } from '../types';
import { CSC_INFO } from '../data/servicesData';
import { generateWhatsAppUrl } from '../utils/helpers';
import { IconRenderer } from './IconRenderer';

interface DocumentChecklistModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  language: LanguageMode;
  onRequestService: (service: ServiceItem) => void;
}

export const DocumentChecklistModal: React.FC<DocumentChecklistModalProps> = ({
  service,
  onClose,
  language,
  onRequestService
}) => {
  if (!service) return null;

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const docs = (language === 'bn' ? service.requiredDocsBn : service.requiredDocsEn) || service.requiredDocsEn || [];
  const secondaryDocs = (language === 'bilingual' ? service.requiredDocsBn : null);

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const docList = docs.map((d, i) => `${i + 1}. ${d}`).join('\n');
    const msg = `*OMKAR CREATIVE E-POINT - Required Documents*\n\n📌 Service: ${service.titleEn} (${service.titleBn})\n⏱️ Expected Time: ${service.turnaroundEn || 'Standard'}\n\n*Documents to bring:*\n${docList}\n\n📍 Center: Gopiballavpur, Near Subarnarekha Mahavidyalaya\n📞 Call/WhatsApp: 9932541732 / 8902141457\n🆔 CSC ID: ${CSC_INFO.cscId}`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center">
              <IconRenderer name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  Document Checklist
                </span>
                {service.turnaroundEn && (
                  <span className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {language === 'bn' ? service.turnaroundBn : service.turnaroundEn}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold mt-0.5 text-white">
                {service.titleEn}
              </h2>
              <p className="text-sm text-slate-300 font-bengali">
                {service.titleBn}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Important Advice Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">
                {language === 'bn' 
                  ? 'কেন্দ্রে আসার আগে এই নির্দেশাবলী লক্ষ্য করুন:' 
                  : 'Please review before visiting the center:'}
              </p>
              <p className="text-amber-800 mt-0.5">
                {language === 'bn'
                  ? 'অনুগ্রহ করে আসল (Original) নথিপত্র এবং এক সেট ফটোকপি (Xerox) সাথে আনবেন। যে মোবাইল নম্বরে OTP আসবে সেটি সাথে রাখা জরুরি।'
                  : 'Please bring original documents along with one set of photocopies. Keep the mobile phone registered for OTPs with you.'}
              </p>
            </div>
          </div>

          {/* Checklist Items */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              {language === 'bn' ? 'প্রয়োজনীয় নথিপত্রের তালিকা (টিক দিয়ে মিলিয়ে নিন):' : 'Required Documents (Check to verify):'}
            </h3>

            <div className="space-y-2.5">
              {docs.map((doc, idx) => {
                const isChecked = !!checkedItems[idx];
                const secondary = secondaryDocs && secondaryDocs[idx];

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCheck(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isChecked 
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' 
                        : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="mt-0.5 text-emerald-600 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {doc}
                      </p>
                      {secondary && (
                        <p className="text-xs text-slate-500 font-bengali mt-0.5">
                          {secondary}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Address Reference for print */}
          <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 flex items-center justify-between">
            <div>
              <span className="font-bold text-slate-900">OMKAR CREATIVE E-POINT (CSC)</span>
              <p className="text-slate-500">{CSC_INFO.address.fullEn}</p>
            </div>
            <div className="text-right">
              <span className="font-mono font-bold text-slate-800">Ph: {CSC_INFO.mobile}</span>
              <p className="text-slate-500 font-mono">CSC ID: {CSC_INFO.cscId}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg shadow-2xs transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print Checklist</span>
            </button>

            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4 text-emerald-600" />
              <span>Share on WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onRequestService(service);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'bn' ? 'আবেদন / যোগাযোগ করুন' : 'Apply / Enquire Now'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
