## 库和框架
 - 库是我们调用库中得方法 实现逻辑
 - 框架 我们把代码写到特定得位置上 框架本身调用我们得逻辑

 ## mvc MVVM
 - MVC backbone我们在全栈开发 view视图 访问页面 对页面进行操作 会调用路由控制器 路由接口 转发给 controller 调用model层  渲染回数据 手动渲染视图
 - MVVM  vue 视图数据进行交互 是自动映射得关系 不需要手动得操作dom 
 - MV react

 ## vue是渐进式框架  可以使用局部功能也可以使用完成功能  (响应式原理 vue组件化得功能)

## 渲染采用模板的顺序
- 手动传入render函数
- 不能通过模板的方式进行渲染 当使用runtime的vue
- render函数 默认会优先查找用户的render函数
 render(h) {
     return h('h1', {id: 'xxx', this.name})
 }
 - 如果没有render 查找template
 - 如果render /template都没有 就采用el对应的元素进行渲染 将templte -》 ast -》 render函数

 ## 响应式规则
 ### 表达式


 
 ### 表达式只能存放有返回值的结果
 - 运算 取值 三元表达试 函数返回值

 ### v-if v-show v-once都不是指令 是在渲染函树生成的时候就是不一样的  v-show是真正意义上的指令
 ### display:none visibility:hidden opacity: 0的区别

 -  dispaly：none是不占位置的 visibility/opacity是占位置的 opacity的事件依旧生效

 ## Vue组件  复用组件 、 方便维护 减少不必要的渲染操作
- 组件渲染是独立渲染的 不需要更新其它组件  给每个组件都添加watcher 数据变化只通知当前组件 渲染
- cnpm install -g @vue-cli
- cnpm install -g @vue/cli-service-global  //快速原型工具 demo 运行代码
- vue create vu-online-edit
- $refs获取实例
- 父组件中通过 provider提供 变量 子组件中通过inject注入变量 暴露全局变量

- eventBus 平级组件数据传递 
- vuex


### 默认vue是runtime版本  vue.config.js 更改vue-cli的配置 vue-loader处理 
```
modelue.exports = {
    runtimeComplier: true // vue-cli
}
``` 