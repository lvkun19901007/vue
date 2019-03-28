<template>
  <div>主页</div>
</template>
<script>
export default {
  name: 'Index',
  created () {
    this.practiceMethod()
  },
  methods: {
    practiceMethod () {
      function* helloWorldGenerator () {
        yield 'hello'
        yield 'world'
        return 'ending'
      }
      var hw = helloWorldGenerator()
    }
  }
}
</script>
