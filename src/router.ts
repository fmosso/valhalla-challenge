import { Router, Request, Response } from 'express'
import productionRouter from './productions/router'
import morgan from 'morgan'
import logger from './logging';

const router = Router()  

router.use(morgan('combined', { stream: { write: message => logger.info(message) } }))

router.use("/producciones", productionRouter);

router.use((error: Error, req: Request, res: Response, next: Function) => {
    logger.error(`Ha ocurrido un error inesperado ${error.message} ${error.stack}`)
    res.status(500).send({
        nombre: error.name,
        mensaje : error.message})
})

export default router