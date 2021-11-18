
import { responseDataError, responseSearchEpisode, responseSearchMovie, responseTittle } from '../dummy-data/imdb';
import * as modelIbdm from '../../src/imdb/model'
import * as modelProduction from '../../src/productions/model'


jest.mock('../../src/imdb/model');
const mockedModel = modelIbdm as jest.Mocked<typeof modelIbdm>;

describe("Tests model productions", () => {
    it("response list of production's data ", async () => {
        mockedModel.searchMovie.mockImplementation(() => Promise.resolve(responseSearchMovie))
        mockedModel.searchEpisode.mockImplementation(() => Promise.resolve(responseSearchEpisode))
        mockedModel.getTitleData.mockImplementationOnce(() => Promise.resolve(responseDataError))
        mockedModel.getTitleData.mockImplementationOnce(() => Promise.resolve(responseDataError))
        mockedModel.getTitleData.mockImplementation(() => Promise.resolve(responseTittle))
        expect(await modelProduction.getroductions("vikings")).toStrictEqual([responseDataError,
            responseDataError,
            responseTittle,
            responseTittle])
    })
})