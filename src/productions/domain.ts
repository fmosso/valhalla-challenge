export interface DataPeliculas {
    detalle: {
        titulo: string,
        descripcion: string,
        rating: string,
        trama: string,
        duracion: string,
    }[],
    duracionTotal: string,
}

export interface DataVikingos extends DataPeliculas {
    directores: {
        nombre: string,
        peliculaDirigida: string,
    }[]
}

export interface DataHacha extends DataPeliculas {
    actoresPrincipales: {
        nombre: string,
        pelicula: string,
    }[]
}