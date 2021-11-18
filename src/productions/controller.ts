import { Request, Response } from "express";
import logger from "../logging";
import * as service from "./service";

export async function getVikingsProductions(req: Request, res: Response, next: Function) {
    try{
        const result = await service.getVikingsProductions()
        logger.debug("Resultado de la consulta", result)
        res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}

export async function getAxeProductions(req: Request, res: Response, next: Function) {
    try{
        const result = await service.getAxeroductions()
        logger.debug("Resultado de la consulta", result)
        res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}

