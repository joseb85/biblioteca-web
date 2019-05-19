import { Pais } from "./pais.model";

/**
 * Representa un Autor
 */
export interface Autor {
    id: number;
    nombre: string;
    sexo: string;
    pais: Pais;
}

