export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: 'Client' | 'Personal';
  name: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  tags?: string[];
  liveUrl?: string;
  description?: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}
