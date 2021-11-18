import { TitleData } from "../imdb/domain"
import * as imdbModel from "../imdb/model"

export async  function getroductions(expression: string): Promise<TitleData[]> {
     const result = await Promise.all([imdbModel.searchMovie(expression), imdbModel.searchEpisode(expression)])
     const moviesAndSeries = result[0].results.concat(result[1].results)
     return Promise.all(moviesAndSeries.map( ms => imdbModel.getTitleData(ms.id)))  
}