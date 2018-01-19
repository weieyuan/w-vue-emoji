<template>
  <div id="app" class="container">
    <h1>{{ msg }}</h1>
    <div>
      <p><b>Input message which will be stored in database: </b></p>
      <p>{{inputMessage}}</p>
      <textarea v-model="inputMessage"></textarea>
      <div style="width: 30px; height: 30px; position: relative">
        <!--单个表情-->
        <emoji-item :emojiObj="smileEmoji" @onClickEmoji="onClickEmojiBtn"></emoji-item>
        <!--选择表情的对话框-->
        <c-emoji ref="ref4CEmoji" @onClickEmoji="onClickChooseEmoji"></c-emoji>
      </div>
    </div>
    <div>
      <p><b>Get message form database, and show in page: </b></p>
      <!--将文本解析成表情符号展示-->
      <display-info-with-emoji :msg="inputMessage"></display-info-with-emoji>
    </div>
  </div>
</template>

<script>

  import {
    smileEmoji,
    CEmoji,
    DisplayInfoWithEmoji,
    EmojiItem,
    convertEmoji2Str,
    convertStr2Emoji
  } from "../src/emoji"

  export default {
    name: 'app',
    components: {
      CEmoji,
      DisplayInfoWithEmoji,
      EmojiItem
    },
    data() {
      return {
        msg: 'This is a demo to show how to use w-vue-emoji',
        smileEmoji,
        inputMessage: ""
      }
    },
    methods: {
      onClickEmojiBtn(emoji, event) {
        this.$refs.ref4CEmoji.show(event.offsetX + 24, event.offsetY + 24);
      },
      onClickChooseEmoji(emoji) {
        let str = convertEmoji2Str(emoji);
        let oElement = this.$el.querySelector("textarea");
        let index = oElement.selectionStart;//返回选中文本的开始索引，如果没有选中文本，那么返回光标后字符的索引
        this.inputMessage = this.inputMessage.slice(0, index) + str + this.inputMessage.slice(index);
      }
    },
  }
</script>

<style scoped>
  .container {
    text-align: left;
  }
</style>
