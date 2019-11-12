<template>
  <div class="root">
    <p>シャッフルのページです</p>
    <button @click="add">追加</button>
    <div v-for="(speaker, idx) in state.speakersArr" v-bind:key="idx">
      <InputWithButton @regist="regist" />
    </div>
    <div>登録されたユーザ</div>
    <div v-for="name in speakersName" v-bind:key="name">{{ name }}</div>
    <ShuffleResult />
  </div>
</template>

<script>
import { createComponent, reactive, inject } from '@vue/composition-api'

import InputWithButton from '@/components/InputWithButton'
import ShuffleResult from '@/components/ShuffleResult'
import ShuffleKey from '@/components/key/shuffle'

export default createComponent({
  components: {
    InputWithButton,
    ShuffleResult
  },
  setup() {
    const store = inject(ShuffleKey)
    const speakersName = store.speakersName

    const state = reactive({
      speakersArr: []
    })

    const add = () => state.speakersArr.push('')
    const regist = (name) => store.add(name)

    return {
      state,
      speakersName,
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
