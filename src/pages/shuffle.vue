<template>
  <ShuffleProvider>
    <ShuffleMain />
  </ShuffleProvider>
</template>

<script>
import { createComponent } from '@vue/composition-api'

import ShuffleProvider from '@/components/provider/ShuffleProvider'
import ShuffleMain from '@/components/ShuffleMain'

export default createComponent({
  components: {
    ShuffleProvider,
    ShuffleMain
  }
})
</script>
