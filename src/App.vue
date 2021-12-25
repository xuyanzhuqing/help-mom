<script setup>
import word from './components/word.vue'
import { ref } from "vue";

const wd = ref({
    "word": "嗄",
    "oldword": "嗄",
    "strokes": "13",
    "pinyin": "á",
    "radicals": "口",
    "explanation": "嗄〈叹〉\n\n 同啊”。表示省悟或惊奇\n\n 嗄!难道这里是没有地方官的么?--宋·佚名《新编五代史平话》\n\n 嗄á叹词。在句首，〈表〉疑问或反问～，这是什么？～，你想干什么？\"嗄\"另见shà㈠。\n\n 嗄shà\n\n ⒈声音嘶哑～声。\n\n 嗄a 1.助词。表示强调﹑肯定或辩解。 2.助词。方言。表示疑问或反诘。\n\n 嗄xià 1.见\"嗄饭\"。 2.见\"嗄程\"。",
    "more": "嗄 ga、a 部首 口 部首笔画 03 总笔画 13  嗄2\nshà\n〈形〉\n(1)\n声音嘶哑的 [hoarse]\n终日嚎而嗌不嗄。--《老子》\n(2)\n又如嗄哑,嗄嘶(嗓音嘶哑)\n嗄\nshà\n〈叹〉\n(1)\n什么 [what]--表示否定\n我要丢个干干净,看你嗄法把我治。--清·蒲松龄《聊斋俚曲集》\n(2)\n旧时仆役对主人、下级对上级的应诺声 [yes]\n带进来”。两边军士应一声嗄”,即将牛皋推至面前。--《说岳全传》\n另见á\n嗄1\ná\n〈叹〉\n同啊”(á)。表示省悟或惊奇 [ah]\n嗄!难道这里是没有地方官的么?--宋·佚名《新编五代史平话》\n另见shà\n嗄1\nshà　ㄕㄚ╝\n嗓音嘶哑。\n郑码janr，u55c4，gbke0c4\n笔画数13，部首口，笔顺编号2511325111354\n嗄2\ná　ㄚˊ\n同啊2”。\n郑码janr，u55c4，gbke0c4\n笔画数13，部首口，笔顺编号2511325111354"
})
</script>

<template>
  <ul class="tab tab-block">
    <li class="tab-item active">
      <a href="#">Music</a>
    </li>
    <li class="tab-item">
      <a href="#">Playlists</a>
    </li>
    <li class="tab-item">
      <a href="#">Radio</a>
    </li>
    <li class="tab-item">
      <a href="#">Connect</a>
    </li>
  </ul>
  <word :value="wd"/>

</template>
