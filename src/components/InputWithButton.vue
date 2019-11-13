<template>
  <div class="inputButtonArea">
    <input
      v-model="state.name"
      type="text"
      class="input is-rounded is-primary"
      placeholder="お名前なんじゃらほい"
    />
    <button
      @click="handleClick"
      class="button is-primary is-light is-rounded"
      style="margin-left:10px;"
    >
      てい
    </button>
  </div>
</template>

<script>
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  name: 'InputWithButton',
  setup(_props, context) {
    const state = reactive({
      name: ''
    })
    const handleClick = () => context.emit('regist', state.name)
    return {
      state,
      handleClick
    }
  }
})
</script>

<style scoped>
.inputButtonArea {
  display: flex;
  margin-top: 10px;
}
</style>
