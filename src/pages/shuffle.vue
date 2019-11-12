<template>
  <div class="root">
    <p>シャッフルのページです</p>
    <button @click="add">追加</button>
    <div v-for="(speaker, idx) in speakersArr" v-bind:key="idx">
      <InputWithButton @regist="regist" />
    </div>
    <div>登録されたユーザ</div>
    <div v-for="name in speakersName" v-bind:key="name">{{ name }}</div>
    <ShuffleResult :speakersName="speakersName" />
  </div>
</template>

<script>
import InputWithButton from '@/components/InputWithButton'
import ShuffleResult from '@/components/ShuffleResult'
export default {
  components: {
    InputWithButton,
    ShuffleResult
  },
  data() {
    return {
      speakersArr: [],
      speakersName: []
    }
  },
  methods: {
    add() {
      this.speakersArr.push('')
    },
    regist(name) {
      this.speakersName.push(name)
    }
  }
}
</script>

<style>
.root {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
