import { environment } from 'src/environments/environment';

/** Url raíz a la API en el servidor */
export const SERVER_API_URL: string = environment.server_api_url;
const API_AUTOR = 'autor';
const API_COLECCION = 'coleccion';
const API_ENCURSO = 'encurso';
const API_GENERO = 'genero';
const API_LECTURA = 'lectura';
const API_LIBRO = 'libro';
const API_PAIS = 'pais';
const API_TAG = 'tag';

export const REQUEST:any = {
    autor: {
        findAll: SERVER_API_URL + API_AUTOR,
        findById: SERVER_API_URL + API_AUTOR + '/'
    },
    coleccion: {
        findAll: SERVER_API_URL + API_COLECCION,
        findById: SERVER_API_URL + API_COLECCION + '/'
    },
    encurso: {
        findAll: SERVER_API_URL + API_ENCURSO,
        save: SERVER_API_URL + API_ENCURSO + '/save',
        delete: SERVER_API_URL + API_ENCURSO + '/'
    },
    genero: {
        findAll: SERVER_API_URL + API_GENERO,
        findById: SERVER_API_URL + API_GENERO + '/'
    },
    lectura: {
        findAll: SERVER_API_URL + API_LECTURA,
        findById: SERVER_API_URL + API_LECTURA + '/',
        minYear: SERVER_API_URL + API_LECTURA + '/minYear' 
    },
    libro: {
        findAll: SERVER_API_URL + API_LIBRO,
        findById: SERVER_API_URL + API_LIBRO + '/',
        filter: SERVER_API_URL + API_LIBRO + '/filter',
        foto: SERVER_API_URL + API_LIBRO + '/getFoto/'
    },
    pais: {
        findAll: SERVER_API_URL + API_PAIS,
        findById: SERVER_API_URL + API_PAIS + '/'
    },
    tag: {
        findAll: SERVER_API_URL + API_TAG,
        findById: SERVER_API_URL + API_TAG + '/'
    }
};