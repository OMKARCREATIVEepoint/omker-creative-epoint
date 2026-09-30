import { CSC_INFO } from '../data/servicesData';

export function getShopStatus(): {
  isOpen: boolean;
  statusTextEn: string;
  statusTextBn: string;
  nextTimeEn: string;
  nextTimeBn: string;
} {
  // Current time in IST (UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 3600000 * 5.5);
  
  const day = istTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const timeInDecimal = hours + minutes / 60;

  if (day === 0) {
    // Sunday: 8:30 AM to 2:00 PM
    if (timeInDecimal >= 8.5 && timeInDecimal < 14.0) {
      return {
        isOpen: true,
        statusTextEn: 'Open Now (Sunday Half Day)',
        statusTextBn: 'এখন খোলা রয়েছে (রবিবার হাফ-ডে)',
        nextTimeEn: 'Closes at 2:00 PM today',
        nextTimeBn: 'আজ দুপুর ২:০০ টায় বন্ধ হবে'
      };
    } else {
      return {
        isOpen: false,
        statusTextEn: 'Closed Now',
        statusTextBn: 'এখন বন্ধ রয়েছে',
        nextTimeEn: 'Opens Monday at 8:00 AM',
        nextTimeBn: 'সোমবার সকাল ৮:০০ টায় খুলবে'
      };
    }
  } else {
    // Mon-Sat: 8:00 AM to 8:30 PM (20.5)
    if (timeInDecimal >= 8.0 && timeInDecimal < 20.5) {
      return {
        isOpen: true,
        statusTextEn: 'Open Now • Serving Citizens',
        statusTextBn: 'এখন খোলা রয়েছে • পরিষেবা চালু',
        nextTimeEn: 'Closes at 8:30 PM today',
        nextTimeBn: 'আজ রাত ৮:৩০ টায় বন্ধ হবে'
      };
    } else if (timeInDecimal >= 7.0 && timeInDecimal < 8.0) {
      return {
        isOpen: false,
        statusTextEn: 'Opening Soon',
        statusTextBn: 'শীঘ্রই খুলবে',
        nextTimeEn: 'Opens today at 8:00 AM',
        nextTimeBn: 'আজ সকাল ৮:০০ টায় খুলবে'
      };
    } else {
      return {
        isOpen: false,
        statusTextEn: 'Closed for the Day',
        statusTextBn: 'আজকের জন্য বন্ধ',
        nextTimeEn: 'Opens tomorrow at 8:00 AM',
        nextTimeBn: 'আগামীকাল সকাল ৮:০০ টায় খুলবে'
      };
    }
  }
}

export function generateWhatsAppUrl(message: string, phone: string = CSC_INFO.whatsapp): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const targetPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
}

export function downloadVCard(): void {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:OMKAR CREATIVE E-POINT
ORG:OMKAR CREATIVE E-POINT (CSC Seva Kendra)
TITLE:CSC VLE Center (ID: ${CSC_INFO.cscId})
TEL;TYPE=CELL,VOICE:+91${CSC_INFO.mobile}
TEL;TYPE=WORK,VOICE:+91${CSC_INFO.whatsapp}
EMAIL;TYPE=INTERNET,WORK:${CSC_INFO.email}
ADR;TYPE=WORK:;;Village Gopiballavpur, Near Subarnarekha Mahavidyalaya;Gopiballavpur;Jhargram, West Bengal;721506;India
NOTE:Common Service Center (CSC) & Digital Seva Kendra. Banking, AePS, PAN Card, Certificates, Bill Payments.
URL:${window.location.origin}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Omkar_Creative_E_Point_CSC.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
