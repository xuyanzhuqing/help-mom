import fs from 'fs'
import { join } from 'path'
import dir from '../utils/dir.js'
const __dirname = dir(import.meta.url);

const paths = fs.readdirSync(join(__dirname, './')).filter(file => file != 'index.js')

paths.forEach(p => import('./' + p))
