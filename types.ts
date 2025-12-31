
export interface SyllabusModule {
  id: number;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  icon: string;
}

export interface TrainingMode {
  type: string;
  duration: string;
  features: string[];
  price?: string;
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
