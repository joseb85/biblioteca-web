import { Libro } from './libro.model';
/**
 * Representa un encurso
 */
export interface Encurso {
    id: number;
    libro: Libro;
    pagina: number;
    efectivo: number;
}
