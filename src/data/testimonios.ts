import personagenerica from "../assets/img/guy.png";
import personagenerica2 from "../assets/img/avatar.png";
import personagenerica3 from "../assets/img/personagenerica3.png"
import personagenerica4 from "../assets/img/personagenerica4.png"
import tecnico from "../assets/img/tecnico.png"

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
    avatar: personagenerica.src,
    rating: 5,
    quote:
      'La calidad del trabajo fue excelente y el trato impecable. Volveremos a contar con ellos.',
  },
  {
    name: 'Luis P.',
    role: 'Founder',
    company: 'Dropify',
    avatar: personagenerica2.src,
    rating: 4,
    quote: 
      'Entrega puntual y una comunicación muy fluida durante todo el proyecto.',
  },
  {
    name: 'Sara R.',
    role: 'Product Manager',
    company: 'Nexa',
    avatar: personagenerica3.src,
    rating: 5,
    quote: 
      'Entendieron perfectamente nuestras necesidades y lo clavaron a la primera.',
  },
  {
    name: 'Javier C.',
    role: 'Marketing Lead',
    company: 'Boldly',
    avatar: personagenerica4.src,
    rating: 5,
    quote: 
      'Excelente relación calidad-precio. El soporte post-lanzamiento es de 10.',
  },
  {
    name: 'Jose N.',
    role: 'Técnico',
    company: 'BaronetteSystems',
    avatar: tecnico.src,
    rating: 5,
    quote: 
      'Hola.',
  },
];
