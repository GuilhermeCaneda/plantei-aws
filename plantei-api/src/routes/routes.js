import { Router } from 'express'
import multer from 'multer'
import PlantController from '../controllers/PlantController.js'
import uploadConfig from '../config/upload.js'

const routes = new Router()

const upload = multer (uploadConfig)

routes.post('/plants', upload.single('imgPlant'), PlantController.store);

routes.get('/plants', PlantController.index)
routes.get('/plants/:plant_id', PlantController.id);

export default routes