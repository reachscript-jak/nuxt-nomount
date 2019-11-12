<template>
  <div class="root">
    <p>シャッフルのページです</p>
    <button @click="add">追加</button>
    <div v-for="(speaker, idx) in state.speakersArr" v-bind:key="idx">
      <InputWithButton @regist="regist" />
    </div>
    <div>登録されたユーザ</div>
    <div v-for="name in state.speakersName" v-bind:key="name">{{ name }}</div>
    <ShuffleResult :speakersName="state.speakersName" />
  </div>
</template>

<script>
import { createComponent, reactive } from '@vue/composition-api'

import InputWithButton from '@/components/InputWithButton'
import ShuffleResult from '@/components/ShuffleResult'

export default createComponent({
  components: {
    InputWithButton,
    ShuffleResult
  },
  setup() {
    const state = reactive({
      speakersArr: [],
      speakersName: []
    })

    const add = () => state.speakersArr.push('')
    const regist = (name) => state.speakersName.push(name)

    return {
      state,
      add,
      regist
    }
  }
})
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
