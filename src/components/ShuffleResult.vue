<template>
  <div>
    <button
      @click="dispSpeakers"
      class="button is-danger is-rounded is-light"
      style="margin-bottom:20px;"
    >
      結果発表👏
    </button>
    <ui id="disp_area"></ui>
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
      dispNameOneByOne(state.dispArr.slice(0))
    }
    const dispNameOneByOne = (nameArr) => {
      const li = document.createElement('li')
      li.textContent = nameArr[0]
      document.getElementById('disp_area').appendChild(li)
      nameArr.shift()
      if (nameArr.length > 0) {
        setTimeout(function() {
          dispNameOneByOne(nameArr)
        }, 1000)
      }
    }
    return {
      state,
      dispSpeakers
    }
  }
})
</script>
