import express from 'express'
import lodash from 'lodash'
import { v4 as uuidv4 } from 'uuid';
const router = express.Router()
import { project } from '../utils/db.js'

router.get('/', async function (req, res) {
  try {
    const db = project.lesson
    await db.read()
    const result = lodash.chain(db.data)
    res.json({ code: 200, result })
  } catch (error) {
    res.json({ code: 500, error })
  }
})

router.post('/', async function (req, res) {
  const { name } = req.body
  const item = {
    name,
    uuid: uuidv4(),
    createTime: new Date().getTime()
  }
  try {
    const db = project.lesson
    await db.read()
    console.info(name)
    if (db.data.find(v => v.name === name)) {
      throw new Error(`【${name}】已经在课程中啦`)
    }
    db.data.push(item)
    await db.write()
  } catch (error) {
    res.json({ code: 500, error: error.toString().replace('Error: ', '') })
  }
})

export default router