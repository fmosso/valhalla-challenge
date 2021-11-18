import axios from 'axios';
import { responseDataError, responseSearchEpisode, responseSearchError, responseSearchMovie, responseTittle } from '../dummy-data/imdb';
import * as model from '../../src/imdb/model'


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Tests model IMDB", () => {
    it("Test movie successful", async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: responseSearchMovie}))
        expect(await model.searchMovie("vikings")).toBe(responseSearchMovie)
    })

    it("Test series successful", async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: responseSearchEpisode}))
        expect(await model.searchEpisode("vikings")).toBe(responseSearchEpisode)
    })

    it("Test tittle successful", async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: responseTittle}))
        expect(await model.searchEpisode("tt6155374")).toBe(responseTittle)
    })

    it("Test movie error", async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: responseSearchError}))
        expect(model.searchMovie("vikings")).rejects.toEqual(new Error("Ha ocurrido un error al buscar pelicula"))
    })

    it("Test episode error", async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: responseSearchError}))
        expect(model.searchEpisode("vikings")).rejects.toEqual(new Error("Ha ocurrido un error al buscar episodio de serie"))
    })

    it("Test tittle error", async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: responseDataError}))
        expect(await model.getTitleData("vikings")).toBe(responseDataError)
    })
})