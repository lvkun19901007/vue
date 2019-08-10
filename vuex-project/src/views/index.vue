<template>
  <div>
    count: {{count}}
    doubleCount: {{$store.getters.doubleCount}}
    <button @click="$store.commit('increment')">count++</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data () {
    return {
      
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
};
</script>
