<template>
  <div>
      <the-header/>
      <newsletters/>
      <the-footer/>
  </div>
</template>

<script>
import theHeader from '~/components/default/theHeader'
import newsletters from '~/components/default/newsletters'
import theFooter from '~/components/default/theFooter'


export default {
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1200)
        })
    },
    components: {
        theHeader,
        newsletters,
        theFooter
    }
}
</script>

<style>

</style>