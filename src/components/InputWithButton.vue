<template>
  <div>
    <input v-model="name" placeholder="Input name here" />
    <button @click="handleClick">この人</button>
  </div>
</template>

<script>
export default {
  name: 'InputWithButton',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('regist', this.name)
    }
  }
}
</script>
