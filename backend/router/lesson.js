import express from 'express'
import lodash from 'lodash'
import { v4 as uuidv4 } from 'uuid';
const router = express.Router()
import { project, redis } from '../utils/db.js'
import fetch from 'node-fetch'
import * as vm2 from 'vm2'
const getAllLessons = async () => {
  try {
    let text = await redis.get('xueDuan')
    if (!text) {
      const response = await fetch('https://tongbu.eduyun.cn/tbkt/tbkthtml/ItemJsonData.js');
      text = await response.text()
      text+=';module.exports = xueduanJson.xueDuan;'
      redis.set('xueDuan', text)
    }
    const vm = new vm2.NodeVM();
    const script = new vm2.VMScript(text)
    const result = vm.run(script)
    return result
  } catch (e) {
    console.error(e)
    return []
  }
}

router.get('/', async function (req, res) {
  const result = await getAllLessons()
  res.json({ code: 200, result })
})

router.get('/phase', async function (req, res) {
  const result = await getAllLessons()
  const data = result.map(({xueDuanCode, xueDuanName, subjectsList}) => {
    return { xueDuanCode, xueDuanName }
  })
  res.json({ code: 200, result: data })
})

router.get('/grade/', async function (req, res) {
  const result = await getAllLessons()
  const code = req.query.code
  const data = result.find(v => v.xueDuanCode === code).nianJiList
  res.json({ code: 200, result: data.map(({ njCode, njName }) => ({ njCode, njName })) })
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