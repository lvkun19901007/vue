<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item label="付款账户" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        {{step.payAccount}}
      </a-form-item>
      <a-form-item label="密码" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-input v-decorator="['password', {
          initialValue: step.payAccount,
          rules: [{required:true, message: '请输入付款密码'}]
        }]" placeholder="请输入付款密码" type="password"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">提交</a-button>
        <a-button style="margin-left:8px" @click="onPrev">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    this.form = this.$form.createForm(this)
    return {
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 4 }
      }
    }
  },
  computed: {
    step() {
      return this.$store.state.form.step
    }
  },
  methods: {
    handleSubmit() {
      const { form, $store, step } = this
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch({
            type: 'form/submitStepForm',
            payload: { ...step, ...values }
          })
        }
      })
    },
    onPrev () {
      this.$router.push('/form/step-form/info')
    }
  }
}
</script>

<style scoped lang="less">
</style>
