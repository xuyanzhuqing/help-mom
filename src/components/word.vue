<script setup>
import { ref } from "vue";
import axios from '../plugins/axios.js'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
defineProps({
  value: Object
})
import wd from './wd.vue'

import {Howl, Howler} from 'howler';

const play = async (words) => {
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
    src: [`http://localhost:3001/wav/${res.data.result}.wav`]
  });
  sound.play()
};

const toggleMore = (e) => {
  const clzList = e.target.classList
  if (clzList.contains('toggle-more')) {
    clzList.remove('toggle-more')
  } else {
    clzList.add('toggle-more')
  }
}

</script>

<template>
  <div class="word container card">
    <div class="columns">
      <ul class="column col-auto">
        <wd :value="value.word"/>
      </ul>
      <ul class="column">
         <li class="columns">
           <div class="column col-4 col-mr-auto">
            读音:
            <span class="word-pinyin">{{ value.pinyin }}</span>
           </div>
           <div class="column col-2">
             <css-icon class="icon-audio" @click="play(value.word)"></css-icon>
           </div>
          </li>
        <li>
          笔划：{{ value.strokes }}
          </li>
      </ul>
    </div>
    <pre class="word-explanation">解释：{{ value.explanation }}</pre>
    <css-icon @click.capture="toggleMore" class="icon-more-horiz"></css-icon>
    <pre class="word-more"> {{value.more}}</pre>
  </div>
</template>
<style lang="scss">
.word-pinyin {
  margin-right: 10px;
}

.word-explanation {
  font-family: fangsong;
  white-space: break-spaces;
  line-height: 16px;
}

.word-more {
  display: none;
  white-space: break-spaces;
  line-height: 16px;
  font-size: 12px;
  font-weight: 100;
  font-family: inherit;
}

.toggle-more + .word-more  {
  display: block;
}
</style>