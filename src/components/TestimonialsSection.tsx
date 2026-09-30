import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  ThumbsUp, 
  MessageSquarePlus, 
  Sparkles,
  User,
  Heart
} from 'lucide-react';
import { TESTIMONIALS, CSC_INFO } from '../data/servicesData';
import { LanguageMode, TestimonialItem } from '../types';
import { generateWhatsAppUrl } from '../utils/helpers';

interface TestimonialsSectionProps {
  language: LanguageMode;
  onOpenEnquiry?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  language,
  onOpenEnquiry 
}) => {
  const [filterService, setFilterService] = useState<string>('all');
  const [userFeedbackSubmitted, setUserFeedbackSubmitted] = useState<boolean>(false);
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);

  // Review submission state for local citizen feedback
  const [reviewName, setReviewName] = useState('');
  const [reviewLocation, setReviewLocation] = useState('');
  const [reviewService, setReviewService] = useState('Banking & AePS');
  const [reviewRating, setReviewRating] = useState<number>(5);
  const [reviewText, setReviewText] = useState('');

  // Calculate average rating
  const averageRating = (
    TESTIMONIALS.reduce((sum, item) => sum + item.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  // Filtered testimonials
  const filteredTestimonials = filterService === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.serviceUsed.toLowerCase().includes(filterService.toLowerCase()) || 
                              t.serviceUsedBn.toLowerCase().includes(filterService.toLowerCase()));

  const handleShareFeedbackOnWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const stars = '⭐'.repeat(reviewRating);
    const msg = `*CUSTOMER REVIEW / FEEDBACK - OMKAR CREATIVE E-POINT*\n\n` +
      `👤 *Name:* ${reviewName.trim() || 'Valued Citizen'}\n` +
      `📍 *Location:* ${reviewLocation.trim() || 'Gopiballavpur / Jhargram'}\n` +
      `🛠️ *Service Used:* ${reviewService}\n` +
      `⭐ *Rating:* ${stars} (${reviewRating}/5)\n` +
      `💬 *Feedback:* ${reviewText.trim()}\n\n` +
      `_Sent from Citizen Portal_`;

    setUserFeedbackSubmitted(true);
    setTimeout(() => {
      window.open(generateWhatsAppUrl(msg), '_blank');
      setReviewName('');
      setReviewLocation('');
      setReviewText('');
      setUserFeedbackSubmitted(false);
      setShowReviewForm(false);
    }, 1000);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200/80 mb-3 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Citizen Trust & Experience • গ্রাহকদের মতামত ও অভিজ্ঞতা</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHAT OUR CITIZENS SAY
          </h2>

          <p className="mt-2 text-xl font-bold text-blue-700 font-bengali">
            স্থানীয় গ্রাহকদের ভালোবাসা ও নির্ভরযোগ্যতার প্রমাণ
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {language === 'bn'
              ? 'গোপীবল্লভপুর, বেলিয়াবেড়া ও নয়াগ্রামের শত শত সন্তুষ্ট সাধারণ মানুষ, শিক্ষার্থী ও কৃষকদের অকৃত্রিম মতামত।'
              : 'Real, authentic feedback from residents, college students, farmers, and shop owners across Gopiballavpur & Jhargram.'}
          </p>
        </div>

        {/* Trust Badges & Rating Overview Strip */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* 1. Rating Metric */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left pb-4 md:pb-0">
              <div className="flex items-center gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {averageRating}
                </span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block">
                    Out of 5.0 Rating
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-2">
                {language === 'bn' ? '১০০% সন্তুষ্ট স্থানীয় গ্রাহক' : '100% Satisfied Local Citizens'}
              </p>
            </div>

            {/* 2. Zero Error Filing */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Zero Error Filing</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'bn' ? 'সঠিক যাচাই ও শতভাগ নির্ভুল ফর্ম' : 'Double verified preview before fee payment'}
                </p>
              </div>
            </div>

            {/* 3. Instant Cash & AePS */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Instant Cash & Slips</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'bn' ? 'আঙুলের ছাপে টাকা ও পাকা রসিদ' : 'No long queue; instant AePS & printouts'}
                </p>
              </div>
            </div>

            {/* 4. Action button to submit citizen review */}
            <div className="flex flex-col items-center md:items-end justify-center pt-4 md:pt-0 md:pl-6">
              <button
                type="button"
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all hover:scale-[1.02]"
              >
                <MessageSquarePlus className="w-4 h-4 text-amber-400" />
                <span>
                  {showReviewForm 
                    ? (language === 'bn' ? 'ফর্ম বন্ধ করুন' : 'Close Form') 
                    : (language === 'bn' ? 'আপনার মতামত জানান' : 'Write a Review')}
                </span>
              </button>
              <span className="text-[11px] text-slate-400 mt-1">
                Share your experience with us
              </span>
            </div>

          </div>

          {/* Interactive Review Form (Collapsible) */}
          {showReviewForm && (
            <div className="mt-6 pt-6 border-t border-slate-200 animate-in fade-in duration-200">
              <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>{language === 'bn' ? 'আপনার অভিজ্ঞতা ও মতামত লিখুন' : 'Submit Your Feedback & Experience'}</span>
                  </h4>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Direct to WhatsApp
                  </span>
                </div>

                {userFeedbackSubmitted ? (
                  <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-center text-xs font-semibold">
                    Thank you! Redirecting your review to our WhatsApp support...
                  </div>
                ) : (
                  <form onSubmit={handleShareFeedbackOnWhatsApp} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          {language === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewName}
                          onChange={e => setReviewName(e.target.value)}
                          placeholder="e.g. Subrata Jana"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          {language === 'bn' ? 'গ্রাম / এলাকা *' : 'Village / Location *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewLocation}
                          onChange={e => setReviewLocation(e.target.value)}
                          placeholder="e.g. Gopiballavpur / Beliabera"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          {language === 'bn' ? 'পরিষেবা (Service Taken)' : 'Service Taken'}
                        </label>
                        <select
                          value={reviewService}
                          onChange={e => setReviewService(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                        >
                          <option value="Banking & AePS Cash">Banking & AePS Cash (টাকা তোলা)</option>
                          <option value="PAN Card Application / Correction">PAN Card (প্যান কার্ড পরিষেবা)</option>
                          <option value="College Admission & Scholarship">College Admission & Scholarship</option>
                          <option value="Electricity Bill & Recharge">Electricity Bill & Recharge</option>
                          <option value="Government Welfare Schemes">Government Schemes (সরকারি প্রকল্প)</option>
                          <option value="Railway & Travel Tickets">Railway / Travel Ticket</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          {language === 'bn' ? 'রেটিং (Rating)' : 'Your Rating'}
                        </label>
                        <div className="flex items-center gap-1.5 pt-1.5">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <button
                              type="button"
                              key={num}
                              onClick={() => setReviewRating(num)}
                              className="focus:outline-hidden p-0.5"
                            >
                              <Star 
                                className={`w-5 h-5 transition-transform hover:scale-110 ${
                                  num <= reviewRating 
                                    ? 'fill-amber-400 text-amber-400' 
                                    : 'text-slate-300'
                                }`} 
                              />
                            </button>
                          ))}
                          <span className="text-xs font-bold text-slate-700 ml-1">
                            {reviewRating} of 5 Stars
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        {language === 'bn' ? 'আপনার মতামত (Feedback)' : 'Your Experience / Feedback'}
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        placeholder={language === 'bn' 
                          ? 'আমাদের সেন্টারের পরিষেবা আপনার কেমন লাগল লিখুন...' 
                          : 'Write your honest review and experience at Omkar Creative E-Point...'}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setShowReviewForm(false)}
                        className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs"
                      >
                        <Heart className="w-3.5 h-3.5 fill-white" />
                        <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে জমা দিন' : 'Submit Review via WhatsApp'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Filter Badges */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setFilterService('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filterService === 'all'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'bn' ? 'সকল রিভিউ (All Reviews)' : 'All Reviews'}
          </button>
          <button
            onClick={() => setFilterService('College')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              filterService === 'College'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'bn' ? 'কলেজ ও স্কলারশিপ' : 'College & Scholarship'}
          </button>
          <button
            onClick={() => setFilterService('Banking')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              filterService === 'Banking'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'bn' ? 'ব্যাংকিং ও টাকা তোলা' : 'Banking & AePS'}
          </button>
          <button
            onClick={() => setFilterService('PAN')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              filterService === 'PAN'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'bn' ? 'প্যান ও বিদ্যুৎ বিল' : 'PAN & Bill Payment'}
          </button>
          <button
            onClick={() => setFilterService('PM-Kisan')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              filterService === 'PM-Kisan'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'bn' ? 'সরকারি প্রকল্প ও কৃষক' : 'Govt Schemes'}
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item: TestimonialItem) => {
            const quote = language === 'en' ? item.quoteEn : item.quoteBn;
            const secondaryQuote = language === 'bilingual' ? item.quoteEn : null;
            const name = (language === 'bn' && item.nameBn) ? item.nameBn : item.name;
            const location = (language === 'bn' && item.locationBn) ? item.locationBn : item.location;
            const role = (language === 'bn' && item.roleBn) ? item.roleBn : item.role;
            const serviceUsed = (language === 'bn' && item.serviceUsedBn) ? item.serviceUsedBn : item.serviceUsed;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top card bar: Stars + Verified Citizen Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {item.verifiedCitizen && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Verified Citizen</span>
                      </span>
                    )}
                  </div>

                  {/* Service tag pill */}
                  <div className="mb-3">
                    <span className="inline-block text-[11px] font-semibold text-blue-800 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                      {serviceUsed}
                    </span>
                  </div>

                  {/* Quote Body with Quote Icon */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-slate-100 group-hover:text-amber-100 transition-colors absolute -top-2 -left-1 pointer-events-none" />
                    <p className="relative text-xs sm:text-sm text-slate-700 font-bengali leading-relaxed italic">
                      "{quote}"
                    </p>
                    {secondaryQuote && (
                      <p className="mt-2 text-[11px] text-slate-500 leading-normal border-t border-slate-100 pt-2">
                        "{secondaryQuote}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Author Card Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Citizen Avatar initial badge */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-700 to-indigo-800 text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {name}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                        <span>{location}</span>
                        {role && <span className="text-slate-400">• {role}</span>}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.date.split('•')[0].trim()}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Local Trust Summary */}
        <div className="mt-12 p-6 bg-blue-50/60 rounded-3xl border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {language === 'bn' 
                  ? 'আপনার দৈনন্দিন ডিজিটাল কাজের নির্ভরযোগ্য ঠিকানা' 
                  : 'Your Neighborhood Digital Service Center in Gopiballavpur'}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Authorized CSC ID: <strong>{CSC_INFO.cscId}</strong> • Near Subarnarekha Mahavidyalaya, Jhargram
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CSC_INFO.mobile}`}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold transition-all shadow-2xs"
            >
              Call {CSC_INFO.mobile}
            </a>
            {onOpenEnquiry && (
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                {language === 'bn' ? 'অনলাইন সেবা নিন' : 'Visit / Contact Us'}
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
