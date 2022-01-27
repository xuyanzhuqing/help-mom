import fs from 'fs'
import { join } from 'path'
import dir from '../utils/dir.js'
import { basePath } from '../swagger.js'
const __dirname = dir(import.meta.url);
const paths = fs.readdirSync(join(__dirname, './')).filter(file => file != 'index.js')

export default (app, prefix = basePath) => {
  paths.forEach(async (p) => {
    const route = await import('./' + p)
    const suffix = p.replace('.js', '')
    app.use(prefix + '/' + suffix, route.default)
  })
}