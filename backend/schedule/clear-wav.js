import schedule from 'node-schedule'
import fs from 'fs'
import { join } from 'path'
import dir from '../utils/dir.js'
const __dirname = dir(import.meta.url)

const clearWav = () => {
  console.info('clear wav start')
  const wavDir = join(__dirname, '../var/wav')
  const allwavs = fs.readdirSync(wavDir)
  allwavs.forEach(p => {
    const url = join(wavDir, p)
    fs.unlink(url, (err) => {
      if (err) throw err;
      console.log(url + '文件已删除');
    });
  })
  console.info('clear wav end ...')
}

// 每天的凌晨1点1分30秒触发
schedule.scheduleJob('30 1 1 * * *', () => {
  clearWav()
});
