import { Router } from 'express'
import auth from '../middleware/auth.js'
import uploadImageController from '../controllers/uploadImage.controller.js'
import upload from '../middleware/multer.js'

const uploadRouter = Router()

uploadRouter.post(
    "/upload",
    auth,
    upload.array("images", 10),     // ← allow up to 10 files, field name = "images"
    uploadImageController
  );
  
export default uploadRouter