<template>
    <input :value="value" @input= "handleInput"/>
</template>

<script>
export default {
    name: 'elInput',
    props: { //属性不能改 可以让父组件的数据更新  子组件就会响应更新
        value: {
            type: String
        }
    },
    methods: {
        handleInput(e) {
            let value = e.target.value
            //绑定给父元素
            this.$emit('changeInput', value)
        }
    }
}
</script>

<style>

</style>