import axios, { AxiosResponse } from "axios"
import { SearchData, TitleData } from "./domain"
import config from "../config"
import logger from "../logging"

export async function searchMovie(expression: string): Promise<SearchData> {
   const url = `${config.imdbUrl}/SearchMovie/${config.imdbApiKey}/${expression}`
   logger.info(`Consultando peliculas con url: ${url}`)
   const result = (await axios.get<any, AxiosResponse<SearchData,any>>(url)).data
   if(result.errorMessage !== ''){
     logger.error(`Ha ocurrido un error al buscar pelicula mensaje: ${result.errorMessage}`)
     throw new Error(`Ha ocurrido un error al buscar pelicula`)
   }
   return result
}

export async function searchEpisode(expression: string): Promise<SearchData> {
   const url = `${config.imdbUrl}/SearchEpisode/${config.imdbApiKey}/${expression}`
   logger.info(`Consultando episodios con url: ${url}`)
   const result = (await axios.get<any, AxiosResponse<SearchData,any>>(url)).data
   if(result.errorMessage !== ''){
    logger.error(`Ha ocurrido un error al buscar episodio de serie mensaje: ${result.errorMessage}`)
    throw new Error(`Ha ocurrido un error al buscar episodio de serie`)
  }
   return result
 }

 export async function getTitleData(id: string): Promise<TitleData> {
   const url = `${config.imdbUrl}/Title/${config.imdbApiKey}/${id}`
   logger.info(`Consultando data con url: ${url}`)
   const result = (await axios.get<any,AxiosResponse<TitleData,any>>(url)).data
   logger.info(`Titulo con id ${id} respondio` )
    if(result.errorMessage !== ''){
        logger.info(`Respondio incorrectamente id: ${result.id}, mensaje: ${result.errorMessage}`)
    }
   return result
 }
