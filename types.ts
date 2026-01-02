
export interface SyllabusModule {
  id: number;
  title: string;
  description: string;
  lessons: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}
