import server from './../../src/index'
import supertest from 'supertest'
import * as serviceProduction from '../../src/productions/service'
import { responseAxeProduction, responseVikingProduction } from '../dummy-data/imdb';

jest.mock('../../src/productions/service');
const mockedService = serviceProduction as jest.Mocked<typeof serviceProduction>;
const productionsRoute = "/producciones"

afterAll(done => {
    server.close()
    done()
});



describe("Test controller", () => {
    test("Vikings ok", async () => {
        mockedService.getVikingsProductions.mockResolvedValue(responseVikingProduction)
        const response = await supertest(server).get(`${productionsRoute}/vikingos`)
        expect(response.statusCode).toBe(200)
        expect(response.body).toStrictEqual(responseVikingProduction)
    });

    test("Axe ok", async () => {
        mockedService.getAxeroductions.mockResolvedValue(responseAxeProduction)
        const response = await supertest(server).get(`${productionsRoute}/hacha`)
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(responseAxeProduction)
    });
    
    test("Vikings error", async () => {
        mockedService.getVikingsProductions.mockRejectedValue(new Error('Test error'))
        const response = await supertest(server).get(`${productionsRoute}/vikingos`)
        expect(response.statusCode).toBe(500);
        expect(response.body).toStrictEqual({mensaje: "Test error", nombre: "Error"})
    });

    test("Axe error", async () => {
        mockedService.getAxeroductions.mockRejectedValue(new Error('Test error'))
        const response = await supertest(server).get(`${productionsRoute}/hacha`)
        expect(response.statusCode).toBe(500);
        expect(response.body).toStrictEqual({mensaje: "Test error", nombre: "Error"})
    });

});

