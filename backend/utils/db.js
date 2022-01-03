import fs from 'fs'
import { join } from 'path'
import { Low, JSONFile } from 'lowdb'
import dir from './dir.js'
import YAML from 'yaml'
import Redis from 'ioredis';

const filterJson = arr => arr.endsWith('.json')
const __dirname = dir(import.meta.url)

function prepare (src) {
    const paths = fs.readdirSync(join(__dirname, src)).filter(filterJson)

    return paths.reduce((acc, cur) => {
        const key = cur.split('.')[0]
        const file = join(__dirname, src, cur)
        const adapter = new JSONFile(file)
        const db = new Low(adapter)
        acc[key] =  db
        return acc
    }, {})
}

const file = fs.readFileSync(join(__dirname, '../app.yaml'), 'utf8')
export const app = YAML.parse(file)
export const xinhua = prepare('../lib/chinese-xinhua/data/')
export const project = prepare('../data')
export const redis = new Redis(app.redis)
redis.on('error', (err) => console.log('Redis Client Error', err));