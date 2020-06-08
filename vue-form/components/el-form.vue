<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'elForm',
    provide() {
        return {
            elForm: this
        }
    },//这个属性放到当前组件的—provided
    props: {
        model: {
                type: Object,
                dafeult: () => {}
            },
        rules:{
            rules: {
                type: Object,
                dafeult: () => {}
            }
        }
    },
    methods: {
        validate() {

        }
    }
}
</script>
<style>

</style>