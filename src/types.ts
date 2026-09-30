export type LanguageMode = 'bilingual' | 'bn' | 'en';

export type ServiceCategoryId = 
  | 'banking'
  | 'pan_id'
  | 'certificate'
  | 'bill_recharge'
  | 'education'
  | 'travel'
  | 'government_schemes';

export interface ServiceItem {
  id: string;
  categoryId: ServiceCategoryId;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  itemsEn: string[];
  itemsBn: string[];
  requiredDocsEn?: string[];
  requiredDocsBn?: string[];
  turnaroundEn?: string;
  turnaroundBn?: string;
  iconName: string;
  badge?: string;
  badgeBn?: string;
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  iconName: string;
  services: ServiceItem[];
}

export interface ServiceEnquiryForm {
  name: string;
  phone: string;
  village: string;
  serviceId: string;
  serviceName: string;
  notes: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  nameBn?: string;
  location: string;
  locationBn?: string;
  role?: string;
  roleBn?: string;
  serviceUsed: string;
  serviceUsedBn: string;
  rating: number;
  date: string;
  quoteEn: string;
  quoteBn: string;
  verifiedCitizen?: boolean;
}
