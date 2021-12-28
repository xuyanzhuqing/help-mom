import express from 'express'
const router = express.Router()
import { project } from '../utils/db.js'
import query from '../middleware/query.js'

router.get('/', query(project.grade))

export default router