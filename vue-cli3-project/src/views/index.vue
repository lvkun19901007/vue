<template>
  <div class="home">
    <div class="morning">早上好</div>
  </div>
</template>

<script>
// @ts-check
export default {
  name: "Index",
  data () {
    return {
      newDate: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      /**
       * @typedef {Object} person a peron.
       * @property {string} name The person's name.
       * @property {number} age The person's age.
       * @property {Function} sayName A function that alerts the person's name.
       */
      const person = {
        name: 23,
        age: '32',
        sayName () {
          alert(this.name)
        }
      }
    }
  },
};
</script>
<style lang="less" scoped>
.morning {
  .fs(32);
}
</style>
