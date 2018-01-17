# w-vue-emoji

最近一个项目需要用到emoji表情包，从网上搜集到的信息来看，绝大部分的emoji项目都侧重怎么在界面上展示emoji表情。

**但是一个emoji表情怎样存储到数据库，然后再从数据库中取出来在界面上展示了？**

这个项目基于[emoji-mart-vue](https://github.com/jm-david/emoji-mart-vue)，重点解决了表情的存储和展示。

**解决思路**: 每一个表情都有一个唯一的id，用户输入信息存储到数据库时，将表情的id替换成`[:id:]`格式的字符串存储到数据库中；从数据库取出字符串后，解析该字符串，将`[:id:]`替换为表情符号在界面上展示。

## Demo

![](./examples/demo2.gif)

## Requirements
**Vue 2.0**

**bootstrap**  
[参考](https://getbootstrap.com/docs/4.0/getting-started/webpack)  
使用参考：

```
//install
npm install bootstrap --save

//in the entry js file
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
```

**jquery**  
bootstrap depends jquery  
使用参考：

```
//install 
npm install jquery --save

//in webpack.config.js file
plugins: [
  new webpack.ProvidePlugin({
    jQuery: "jquery",
    $: "jquery"
  })
]
```

## Install

```
npm install w-vue-emoji --save
```

## Usage
详细的使用可以参考代码库中的demo/App.vue


```
//import 
import {smileEmoji,
    CEmoji,
    DisplayInfoWithEmoji,
    EmojiItem,
    convertEmoji2Str,
    convertStr2Emoji} from "w-vue-emoji"

//components
components: {
      CEmoji,
      DisplayInfoWithEmoji,
      EmojiItem
},

//template
<!--单个表情-->
<emoji-item :emojiObj="smileEmoji" @onClickEmoji="onClickEmojiBtn"></emoji-item>
<!--选择表情的对话框-->
<c-emoji ref="ref4CEmoji" @onClickEmoji="onClickChooseEmoji"></c-emoji>
<!--将文本解析成表情符号展示-->
<display-info-with-emoji :msg="inputMessage"></display-info-with-emoji>
```

## 关键点说明
src/emoji/data/emoji_icon.js中的emojis变量的值是从[emoji-mart-vue](https://github.com/jm-david/emoji-mart-vue)中提取出来的部分emoji数据源，使用者可以修改该变量值来自定义表情集合。

## Build Setup

``` bash
# install dependencies
npm install

# see demo with hot reload at localhost:8082
npm run dev

# build w-vue-emoji, the target file will be generated in dist directory
npm run build
```
