export interface Service {
  id?: string;
  title: string;
  description: string;
  category: 'Soldadura' | 'Portones' | 'Puertas' | 'Reparaciones';
  image: string;
  icon?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Product {
  id?: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  image: string;
  created_at?: string;
  updated_at?: string;
}

export interface GalleryImage {
  id?: string;
  image: string;
  caption?: string;
  category: string;
  created_at?: string;
  updated_at?: string;
}

export interface Testimonial {
  id?: string;
  author: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  visible: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}