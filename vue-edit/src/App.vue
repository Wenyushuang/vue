<template>
  <div id="app">
    <!--  //不是原生的input事件 .native会出发原生 -->
    <Edit @input="handleInput" @run="handleRun"></Edit>
    <!-- 可以传属性也可以传方法 -->
    <Show :code = "code" ref='show'></Show>
  </div>
</template>

<script>
import Show from '@/components/Show.vue'
import Edit from '@/components/Edit.vue'


export default {
  name: 'App',
  components: { //注册组件
    Show,
    Edit
  },
  data() {
    return{
      code: ''
    }
  },
  methods:{
    handleInput(v) {
      this.code = v
      //给组件订阅了事件 子组件出发
    },
    handleRun() {
      this.$refs.show.run()
    }
  }
}
</script>

<style lang="stylus">
*{
  padding: 0;
  margin: 0
}
#app {
  div{
    width: 50%;
    height: 100%;
    display:inline-block
  }
}
</style>
