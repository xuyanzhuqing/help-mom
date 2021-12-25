import SayLinux from './platform/linux.js'
import SayMacos from './platform/darwin.js'
import SayWin32 from './platform/win32.js'

const MACOS = 'darwin'
const LINUX = 'linux'
const WIN32 = 'win32'

class Say {
  constructor (platform) {
    if (!platform) {
      platform = process.platform
    }

    if (platform === MACOS) {
      return new SayMacos()
    } else if (platform === LINUX) {
      return new SayLinux()
    } else if (platform === WIN32) {
      return new SayWin32()
    }

    throw new Error(`new Say(): unsupported platorm! ${platform}`)
  }
}

export default new Say()
