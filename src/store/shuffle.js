import { reactive } from '@vue/composition-api'

export default function shuffleStore() {
  const state = reactive({
    speakersName: []
  })
  return {
    get speakersName() {
      return state.speakersName
    },
    add(name) {
      state.speakersName.push(name)
    }
  }
}
