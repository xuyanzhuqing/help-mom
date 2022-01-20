import express from 'express'
import lodash from 'lodash';
import { phases, grades, subjects, sections } from '../middleware/lesson.js'

const { pick } = lodash;
const router = express.Router()

function pickBy (...keys) {
  return function (req, res) {
    const result = res.locals.data.map(v => pick(v, keys))
    res.json({ code: 200, result })
  }
}

router.get('/', phases, function (req, res) {
  const result = res.locals.data
  res.json({ code: 200, result })
})

router.get('/phases', phases, pickBy('xueDuanCode', 'xueDuanName'))
router.get('/grades/', phases, grades, pickBy('njCode', 'njName'))
router.get('/subjects', phases, grades, subjects, pickBy('xkName', 'xkCode'))
router.get('/sections', phases, grades, subjects, sections, pickBy('danyuanCode', 'danyuanName'))

export default router
