import { dirname } from 'path'
import { fileURLToPath } from 'url'

export default (URL) => dirname(fileURLToPath(URL));

