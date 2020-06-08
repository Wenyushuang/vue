<template>
  <div class="edit">
        <div class="edit-list">
            <button @click="$emit('run')">运行</button>
            <button>清空</button>
        </div>
        <!-- value +  input = v-model :vuleu ="code" @input="handleInput" -->
        <!-- v-model对于原生标签会对输入法做处理 （阻止compoision ）而且不同标签解析的结果不一样 type = checked + change -->
        <div class="edit-box">
            <textarea :vuleu ="code" @input="handleInput" @keydown.9.prevent="handleKeyDown"></textarea>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            code: ''
        }
    },
    methods: {
        handleInput(e) {
            this.code = e.target.value
            this.$emit('input', this.code) //子父通信
            //输入的时候将数据传递给父组件
            // 发布订阅可以实现组件的解耦
        },
        handleKeyDown(e) {
            // 用户按了tab键 
        } 
    }
}
</script>

<style lang="stylus">
.edit{
    .edit-list{
        padding: 10px;
        button{
            height: 40px;
            width: 80px;
            margin: 5px
        }
        background: #ccc
    }
    .edit-box{
        position: absolute;
        top: 90px;
        bottom: 0;
        left: 0;
        right: 0
        textarea{
            border: none;
            outline: none;
            width: 50%;
            font-size: 24px;
            height: 100%;
        }
    }
}
</style>