import fs from 'fs'
import { join } from 'path'
import { Low, JSONFile } from 'lowdb'
import dir from './dir.js'
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

export const xinhua = prepare('../lib/chinese-xinhua/data/')
export const project = prepare('../data')
