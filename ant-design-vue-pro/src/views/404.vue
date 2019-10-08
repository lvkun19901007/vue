<template>
  <div class="not-found" style="text-align:center;font-size:60px;">
    <IconFont type="icon-icon-404"></IconFont>
    404！您访问的页面不存在！
    <Logo></Logo>
  </div>
</template>

<script>
import Logo from '../assets/logo.svg'
export default {
  name: '',
  data () {
    return {}
  },
  components: { Logo }
}
</script>

<style scoped lang="less">
.not-found{
  font-size: 18px;
  margin: 50px 0 0 50px;
}
</style>
