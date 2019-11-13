<template>
  <div>
    <button
      @click="dispSpeakers"
      class="button is-danger is-rounded is-light"
      style="margin-bottom:20px;"
    >
      結果発表👏
    </button>
    <p
      v-for="val in state.dispArr"
      v-bind:key="val"
      class="has-text-weight-bold is-size-4"
    >
      {{ val }}
    </p>
  </div>
</template>

<script>
import { createComponent, reactive, inject } from '@vue/composition-api'
import ShuffleKey from '@/components/key/shuffle'

export default createComponent({
  setup() {
    const store = inject(ShuffleKey)
    const state = reactive({
      dispArr: []
    })

    const dispSpeakers = () => {
      const speakersName = store.speakersName
      state.dispArr = speakersName.slice(0)
      for (let i = state.dispArr.length - 1; i >= 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1))
        ;[state.dispArr[i], state.dispArr[rand]] = [
          state.dispArr[rand],
          state.dispArr[i]
        ]
      }
    }
    return {
      state,
      dispSpeakers
    }
  }
})
</script>
