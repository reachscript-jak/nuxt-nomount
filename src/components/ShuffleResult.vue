<template>
  <div>
    <button @click="dispSpeakers">スピーカー表示</button>
    <div v-for="val in dispArr" v-bind:key="val">{{ val }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dispArr: []
    }
  },
  props: {
    speakersName: Array
  },
  methods: {
    dispSpeakers() {
      this.dispArr = this.speakersName.slice(0)
      for (let i = this.dispArr.length - 1; i >= 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1))
        ;[this.dispArr[i], this.dispArr[rand]] = [
          this.dispArr[rand],
          this.dispArr[i]
        ]
      }
    }
  }
}
</script>
