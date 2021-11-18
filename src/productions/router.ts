
import { Router } from 'express'
import { getAxeProductions, getVikingsProductions } from './controller'

const router = Router() 

router.get('/vikingos', getVikingsProductions )
router.get('/hacha', getAxeProductions)


export default router