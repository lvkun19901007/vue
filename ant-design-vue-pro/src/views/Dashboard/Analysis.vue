<template>
  <div>
    <chart :option="chartOption"/>
  </div>
</template>

<script>
import chart from '../../components/chart'

import request from '../../utils/request'
export default {
  name: '',
  data () {
    return {
      chartOption: {}
    }
  },
  components: { chart },
  mounted() {
    this.getChartData()
    this.interval = setInterval(() => {
      this.getChartData()
    }, 30000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    getChartData () {
      request({
        url: '/api/dashboard/chart',
        method: 'get',
        parmas: { ID: '12345' }
      }).then((response) => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        }
      })
    }
  },
}
</script>

<style scoped lang="less">
</style>
