<template>
<transition name="leave" appear>
  <div class="transition" v-if="loading">
      <div class="logo_transition">
          <img src="~assets/img/svg/logo.svg" alt="">
          <img src="~assets/img/svg/pig_white.svg" alt="">
            <div class="animation_scooter">
                <img src="~assets/img/svg/scooter.svg" alt="">
            </div>
      </div>
  </div>
</transition>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail(error) {
      console.log(error)
    }
   
  },
}
</script>

<style>

.transition {
    background-color: var(--orange);
    position: fixed; 
    top: 0; 
    right: 0; 
    left: 0;
    bottom: 0; 
    z-index: 1010;
    display: flex; 
}

.logo_transition {
    z-index: 102;
    display: flex; 
    flex-flow: column;
    text-align: center;
    margin-top: 100px;
}

.logo_transition img:nth-child(2) {
    width: 60px;
    display: flex; 
    margin: -80px auto;
    text-align: center;
}

.animation_scooter {
    margin-top: 100px;
    animation: move 2.5s ease-in-out;
    animation-fill-mode: forwards;
    transform: translateX(-100%);
}

.animation_scooter img {
    width: 130px;
}

@keyframes move {
    0%{
        transform: translateX(-100%)
    }
    100%{
        transform: translateX(100%)
    }
}

/* .leave-enter-active {
    animation: enter .7s ease-in-out; 
}

@keyframes enter {
    from{
        transform: translateX(-100%)
    }
    to{
        transform: translateX(0%)
    }
} */

.leave-leave-active {
    animation: leave .7s ease-in-out; 
}

@keyframes leave {
    from{
        transform: translateX(0)
    }
    to{
        transform: translateX(100%)
    }
}

</style>