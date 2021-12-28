import {Howl} from 'howler';
import axios, { baseURL } from '../plugins/axios.js'

export default async (words, cb = () => {}) => {
  const res = await axios({
    url: 'word/read',
    params: {
      words
    }
  })

  if (res.data.code !== 200) {
    return
  }

  var sound = new Howl({
    src: [`${baseURL}/wav/${res.data.result}.wav`],
    onend: cb
  });
  sound.play()
};