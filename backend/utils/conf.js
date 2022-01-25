import YAML from 'yaml'
import fs from 'fs'
import dir from '../utils/dir.js'
import { join } from 'path'

const __dirname = dir(import.meta.url)
const file = fs.readFileSync(join(__dirname, '../app.yaml'), 'utf8')

export default YAML.parse(file)