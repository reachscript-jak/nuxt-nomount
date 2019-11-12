<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { provide } from '@vue/composition-api'
import shuffleStore from '@/store/shuffle'
import ShuffleKey from '@/components/key/shuffle'

export default {
  setup() {
    provide(ShuffleKey, shuffleStore())
    return {}
  }
}
</script>
