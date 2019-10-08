<template>
  <div class="header">
    <a-dropdown>
      <a-icon type="global" />
      <a-menu slot="overlay" @click="localeChange" :selectedKeys="[$route.query.locale || 'zhCN']">
        <a-menu-item key="zhCN">
          中文
        </a-menu-item>
        <a-menu-item key="enUS">
          English
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  components: {},
  methods: {
    localeChange(key) {
      console.log(key)
      this.$router.push({ query: {...this.$route.query, locale: key.key} })
      this.$i18n.locale = key.key
    }
  },
}
</script>

<style scoped lang="less">
.header{
  float: right;
  margin-right: 30px;
}
</style>
