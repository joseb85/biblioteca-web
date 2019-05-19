import { Lectura } from './lectura.model';
import { Coleccion } from './coleccion.model';
import { Genero } from './genero.model';
import { Autor } from './autor.model';
import { Tag } from './tag.model';
export class Libro {
    id:            number;
    nombre:        string;
    argumento:     string;
    agno:          number;
    archivo:       boolean;
    paginas:       number;
    interes:       number;
    fichero:       string;
    observaciones: string;
    tags:          Tag[];
    autores:       Autor[];
    genero:        Genero;
    colecciones:   Coleccion[];
    lecturas:      Lectura[];
}