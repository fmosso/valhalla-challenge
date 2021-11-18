import { DataVikingos, DataHacha, DataPeliculas } from './domain';
import * as model from './model'
import logger from '../logging';
import { TitleData } from '../imdb/domain';


export async function getVikingsProductions(): Promise<DataVikingos> {
    const dataFiltered = (await getCommonProductions("vikings"))
    return {... convertToDataPeliculas(dataFiltered), 
            directores: dataFiltered.map(ms =>  ms.directorList
                    .map(d => ({ nombre: d.name, peliculaDirigida: ms.title })))
                    .reduce((prev, curr) => prev.concat(curr), []) }
}

export async function getAxeroductions(): Promise<DataHacha> {
    const dataFiltered = (await getCommonProductions("axe"))
    return {... convertToDataPeliculas(dataFiltered), 
        actoresPrincipales : dataFiltered.map(ms =>  ms.starList
                    .map(d => ({ nombre: d.name, pelicula: ms.title })))
                    .reduce((prev, curr) => prev.concat(curr), []) }
}


async function getCommonProductions(term: string): Promise<TitleData[]> {
    const response = (await model.getroductions(term))
    logger.info(`Respondieron correctamente: ${response.filter(ms => ms.errorMessage === '').length} `)
    const dataFiltered = response.filter(ms => ms.errorMessage === '')
    return dataFiltered
}

function convertToDataPeliculas(dataFiltered: TitleData[]): DataPeliculas{
    return {
        detalle: dataFiltered.map(ms => ({
            titulo: ms.title,
            descripcion: ms.tagline,
            rating: ms.imDbRating,
            trama: ms.plot,
            duracion: ms.runtimeStr,
        })),
        duracionTotal: dataFiltered.map(ms => Number(ms.runtimeMins))
                            .reduce((prev, curr) => prev + curr, 0).toString()
    }
}