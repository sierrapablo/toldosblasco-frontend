export interface Galeria {
  id: number;
  titulo: string;
  descripcion?: string;
  imagenes: string[];
  fechaCreacion: Date;
  etiquetas?: string[];
}
