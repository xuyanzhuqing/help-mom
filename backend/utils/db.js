import fs from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { Low, JSONFile } from 'lowdb'

const filterJson = arr => arr.endsWith('.json')

const __dirname = dirname(fileURLToPath(import.meta.url));

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
