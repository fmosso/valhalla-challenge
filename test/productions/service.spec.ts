
import { responseAxeProduction, responseDataError, responseSearchEpisode, responseSearchMovie, responseTittle, responseVikingProduction } from '../dummy-data/imdb';

import * as modelProduction from '../../src/productions/model'
import * as serviceProduction from '../../src/productions/service'

jest.mock('../../src/productions/model');
const mockedModel = modelProduction as jest.Mocked<typeof modelProduction>;

describe("Tests service productions", () => {
    it("get vikings productions", async () => {
        mockedModel.getroductions.mockImplementation(() => Promise.resolve([responseDataError,
            responseDataError,
            responseTittle,
            responseTittle]))

        expect(await serviceProduction.getVikingsProductions()).toStrictEqual(responseVikingProduction)
    })
    it("get axe productions", async () => {
        mockedModel.getroductions.mockImplementation(() => Promise.resolve([responseDataError,
            responseDataError,
            responseTittle,
            responseTittle]))
            
        expect(await serviceProduction.getAxeroductions()).toStrictEqual(responseAxeProduction)
    })
})