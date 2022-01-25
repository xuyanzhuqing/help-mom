import { redis } from '../utils/db.js'
import conf from '../utils/conf.js'
import * as vm2 from 'vm2'
import fetch from 'node-fetch'


const parseModule = (text) => {
  const vm = new vm2.NodeVM();
  const script = new vm2.VMScript(text)
  const result = vm.run(script)
  return result
}

const getData = async (url, ...varPath) => {
  const exportsWhat = varPath.join('.')
  const key = varPath.pop()
  try {
    let text = await redis.get(key)
    if (!text) {
      const response = await fetch(url);
      text = await response.text()
      text +=`;module.exports = ${exportsWhat};`
      redis.set(key, text)
    }
    return parseModule(text)
  } catch (e) {
    console.error(e)
    return []
  }
}
// https://tongbu.eduyun.cn/tbkt/tbkthtml/CaseListJsonData.js?t= 
// caseJson xueDuan
const findBy = function (mainKey = '', subKey = '') {
  return function (req, res, next) {
    const _mainKey = req.query[mainKey]
    const data = res.locals.data.find(v => v[mainKey] === _mainKey)[subKey] ?? []
    res.locals.data = data
    next()
  }
}

const buildUrl = ({ baseUrl = conf.baseUrl, path = conf.path.js, filename }) => `${baseUrl}${path}${filename}`

export const phases = async function  (req, res, next) {
  const url = buildUrl('ItemJsonData.js')
  const data = await getData(url, 'xueduanJson', 'xueDuan')
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