<template>
  <div>
    <input v-model="state.name" placeholder="Input name here" />
    <button @click="handleClick">この人</button>
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
