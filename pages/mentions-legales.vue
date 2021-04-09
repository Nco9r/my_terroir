<template>
<div>
  <the-header/>
</div>
  
</template>

<script>

import theHeader from '../components/default/theHeader'
export default {

  components: {
    theHeader, 
  },
    mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }

}
</script>

<style>

</style>