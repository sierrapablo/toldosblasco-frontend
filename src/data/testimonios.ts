import personagenerica from '../assets/img/guy.png';

export type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'María G.',
    role: 'CTO',
    company: 'Techibu',
    avatar: '/avatars/maria.jpg',
    rating: 5,
    quote:
      'La calidad del trabajo fue excelente y el trato impecable. Volveremos a contar con ellos.',
  },
  {
    name: 'Luis P.',
    role: 'Founder',
    company: 'Dropify',
    avatar: '/avatars/luis.jpg',
    rating: 4,
    quote: 'Entrega puntual y una comunicación muy fluida durante todo el proyecto.',
  },
  {
    name: 'Sara R.',
    role: 'Product Manager',
    company: 'Nexa',
    avatar: '/avatars/sara.jpg',
    rating: 5,
    quote: 'Entendieron perfectamente nuestras necesidades y lo clavaron a la primera.',
  },
  {
    name: 'Javier C.',
    role: 'Marketing Lead',
    company: 'Boldly',
    avatar: '/avatars/javier.jpg',
    rating: 5,
    quote: 'Excelente relación calidad-precio. El soporte post-lanzamiento es de 10.',
  },
  {
    name: 'Jose N.',
    role: 'Técnico',
    company: 'BaronetteSystems',
    avatar: '/avatars/javier.jpg',
    rating: 5,
    quote: 'Hola.',
  },
];
