import React from 'react';
import {
  Landmark,
  CreditCard,
  ScrollText,
  Zap,
  GraduationCap,
  Compass,
  Shield,
  Banknote,
  Send,
  ReceiptText,
  FileBadge,
  FileEdit,
  UserCheck,
  Fingerprint,
  FileCheck,
  Award,
  Home,
  Building2,
  Lightbulb,
  Smartphone,
  ShieldCheck,
  BookOpen,
  Trophy,
  Briefcase,
  Train,
  PlaneTakeoff,
  Luggage,
  HeartHandshake,
  BadgeIndianRupee,
  ShieldAlert,
  Users,
  CheckCircle2,
  Clock,
  Printer
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Landmark': return <Landmark className={className} />;
    case 'CreditCard': return <CreditCard className={className} />;
    case 'ScrollText': return <ScrollText className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Banknote': return <Banknote className={className} />;
    case 'Send': return <Send className={className} />;
    case 'ReceiptText': return <ReceiptText className={className} />;
    case 'FileBadge': return <FileBadge className={className} />;
    case 'FileEdit': return <FileEdit className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Fingerprint': return <Fingerprint className={className} />;
    case 'FileCheck': return <FileCheck className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Lightbulb': return <Lightbulb className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Trophy': return <Trophy className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Train': return <Train className={className} />;
    case 'PlaneTakeoff': return <PlaneTakeoff className={className} />;
    case 'Luggage': return <Luggage className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'BadgeIndianRupee': return <BadgeIndianRupee className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Printer': return <Printer className={className} />;
    default: return <CheckCircle2 className={className} />;
  }
};
