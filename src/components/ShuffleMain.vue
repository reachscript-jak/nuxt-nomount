<template>
  <div class="shuffleContainer has-background-white-bis">
    <div class="contentArea">
      <h1 class="title is-3">Let's Shuffle!!</h1>
      <button @click="add" class="button is-primary is-light is-rounded">
        追加
      </button>
    </div>
    <div>
      <div
        v-for="(speaker, idx) in state.speakersArr"
        v-bind:key="idx"
        style="width:300px;"
      >
        <InputWithButton @regist="regist" />
      </div>
    </div>
    <div class="contentArea">
      <h2 class="title is-5">登録されたユーザ</h2>
      <div style="display:flex;justify-content:center;">
        <div
          v-for="name in speakersName"
          v-bind:key="name"
          style="margin-right:5px;"
        >
          {{ name }}
        </div>
      </div>
    </div>
    <div class="contentArea">
      <ShuffleResult />
    </div>
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

<style scoped>
.shuffleContainer {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.contentArea {
  padding-top: 30px;
}
</style>
