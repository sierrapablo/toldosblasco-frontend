export interface Galeria {
  id: number;
  titulo: string;
  descripcion?: string;
  imagen: string;
  fechaCreacion: Date;
  etiquetas?: string[];
}
