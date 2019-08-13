<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'" />
        </div>
      </template>
      <div>
        <h2>整体风格定制</h2>
        <a-radio-group :value="$route.query.navTheme || 'dark'" @change="e => handleSettingChange('navTheme', e.target.value)">
          <a-radio value="dark">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <a-radio-group :value="$route.query.navLayout || 'left'" @change="e => handleSettingChange('navLayout', e.target.value)">
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: 'SettingDrawer',
  data() {
    return {
      visible: false,
      navTheme: 'dark',
      navLayout: 'left'
    }
  },
  methods: {
    onClose() {
      this.visible = false
    },
    handleSettingChange (type, value) {
      this.$router.push({
        query: {
          ...this.$route.query,
          [type]: value
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.handle{
  position: absolute;
  top: 240px;
  right: 300px;
  height: 48px;
  width: 48px;
  background: #1890ff;
  text-align: center;
  line-height: 48px;
  font-size: 20px;
  color: #fff;
  border-radius: 4px 0 0 4px;
}
</style>
