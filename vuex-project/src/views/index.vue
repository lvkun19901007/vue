<template>
  <div>
    {{count}}
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
  },
  created () {
    this.getData()
  },
  methods: {
    /**
     * 初始资金10万元，一年240个交易日，每天上涨0.1%
     * 一年后多少钱
     */
    getData () {
      let beginMoney = 100000
      let dayAmount = 12 * 20
      for (let i = 0; i < dayAmount; i++) {
        beginMoney = beginMoney * (1 + 0.001)
      }
      console.log(beginMoney)
    }
  }
};
</script>
