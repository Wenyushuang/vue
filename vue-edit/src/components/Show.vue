<template>
  <div class="show">

      <div class="show-box" ref='show'>
          <!-- ref在组件上代码组件实例 在普通元素上代表 dom元素 -->
      </div>
    </div>
</template>

<script>
export default {
    props: {
        code: { //将这个属性放到当前实例
            type: String, //默认code字符串类型
            default: ''
        }
    },
    methods: {
        getSource(type) {
            const startTeg = `/<${type}[^>]*>/` 
            let code = this.code
            let matched = code.match(startTeg)
            if(matched) {
                let tag = mathed[0]
                return code.slice(code.indexOf(tag) + tag.length, code.lastIndexOf(`</${type}>/`))
            }else {

            }
        },
        run() {
            //获取模版中的内容
            const template = this.getSource('template')
            const script = this.getSource('script').replace(/export defaut/, 'return')
            const sty = this.getSource('style')
            //动态加载一个组件 组件就是一个对象 对象包含数据 render 方法 生命周期
            // js现在是 string
            let component = {}
            if(script) {
                component = new Function(script)()
            }
            if(template) {
                // component 不包括render
                component.template = template // 因为vue.config.js中设置 可以runtime可以使用complier    
                let instance = new (this.$options._base.extend(component)) //Vue.extend(component)///组件构造函数 this.$options._base.extend(component)
                instance.$mount().$el //挂载不传参数的话 是在内存中进行挂载 挂载的结果放到了$el上 
                this.$refs.show(instance.$mount().$el)
            }
            if(sty) {
                let element = document.createElement('style')
                element.type = 'text/css'
                element.innerText = sty
                document.body.appendChild(element)
            }
            //有组件以后怎么渲染到固定的区域
            // $mount主动挂载组件
            // 先获取组件实例 
            //先将对象转成vnode 再渲染

            
            
        }
    }
}
</script>

<style lang="stylus">

</style>