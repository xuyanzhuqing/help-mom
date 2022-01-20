import { redis } from '../utils/db.js'
import * as vm2 from 'vm2'
import fetch from 'node-fetch'

const getData = async () => {
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

const findBy = function (mainKey = '', subKey = '') {
  return function (req, res, next) {
    const _mainKey = req.query[mainKey]
    const data = res.locals.data.find(v => v[mainKey] === _mainKey)[subKey] ?? []
    res.locals.data = data
    next()
  }
}

export const phases = async function  (req, res, next) {
  const data = await getData()
  res.locals.data = data
  next()
}

export const grades = findBy('xueDuanCode', 'nianJiList')
export const subjects = findBy('njCode', 'subjectsList')
export const sections = findBy('xkCode', 'danYuanList')
export const cases = findBy('danyuanCode', 'caseList')

export default {
  phases,
  grades,
  subjects,
  sections
}