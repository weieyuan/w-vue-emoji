<template>
  <div id="app" class="container">
    <h1>{{ msg }}</h1>
    <div>
      <p><b>Input message which will be stored in database: </b></p>
      <p>{{inputMessage}}</p>
      <textarea v-model="inputMessage"></textarea>
      <div style="position: relative">
        <emoji-item :emojiObj="smileEmoji" @onClickEmoji="onClickEmojiBtn"></emoji-item>
        <c-emoji ref="ref4CEmoji" @onClickEmoji="onClickChooseEmoji"></c-emoji>
      </div>
    </div>
    <div>
      <p><b>Get message form database, and show in page: </b></p>
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
        msg: 'This is a demo to show how to use w-emoji',
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
        this.inputMessage += str;
      }
    },
  }
</script>

<style scoped>
  .container {
    text-align: left;
  }
</style>
