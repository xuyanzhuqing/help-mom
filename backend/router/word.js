import express from 'express'
import lodash from 'lodash'
import { v4 as uuidv4 } from 'uuid';
const router = express.Router()
import say from '../lib/say/index.js'
import { xinhua, project } from '../utils/db.js'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { info } from 'console';
import query from '../middleware/query.js'
const __dirname = dirname(fileURLToPath(import.meta.url));

router.get('/', async function (req, res) {
  try {
    const db = project.word
    await db.read()
    const result = lodash.chain(db.data)
    res.json({ code: 200, result })
  } catch (error) {
    res.json({ code: 500, error })
  }
})

router.get('/query/project', query(project.word))

router.get('/xinhua', async function (req, res) {
  try {
    const db = xinhua.word
    await db.read()
    const result = lodash.chain(db.data)
    .find({ word: req.query.word })
    res.json({ code: 200, result })
  } catch (error) {
    res.json({ code: 500, error })
  }
})

router.post('/', async function (req, res) {
  const { word, lesson, lessonUuid } = req.body
  const item = {
    word,
    lesson,
    uuid: uuidv4(),
    lessonUuid,
    createTime: new Date().getTime(),
  }
  try {
    const db = project.word
    await db.read()

    if (db.data.find(v => v.word === word)) {
      throw new Error(`【${word}】已经在生词中啦`)
    }
    db.data.push(item)
    await db.write()
  } catch (error) {
    res.json({ code: 500, error: error.toString().replace('Error: ', '') })
  }
})

router.get('/read', async function (req, res) {
  say.setEncoding('gbk')
  const { words, speed = 1 } = req.query
  const uuid = uuidv4()
  const dest = join(__dirname, `../var/wav/${uuid}.wav`)
  say.export(words, '', speed, dest, function (err) {
    if (err) {
      return res.json({ code: 500, error: err.toString().replace('Error: ', '') })
    }
    res.json({
      code: 200,
      result: uuid
    })
  })
})

export default router