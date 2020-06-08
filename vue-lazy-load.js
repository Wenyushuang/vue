const getScrollParent = (el) => {
    let parent = el.parentNode
    while(parent) {
        if(/(scroll)|(auto)/.test(getComputedStyle(parent)['overflow'])) {
            return parent
        }
        parent = parent.parentNode
    }
    return parent
}
const loadingImageAsync = (path, resolve, reject) => {
    let image = new Image()
    image.src = path
    image.onload = resolve
    image.onerror = reject
}
const Lazy = (_Vue) => {
    class ReactiveListener { //每一个图片元素 都构造成一个类的实例 类方便扩展可以风筝
        constructor(el,src,options,elRender) {
            this.el = el
            this.src = src
            this.options = options
            this.state = {loading: false} //没有加载过
            this.elRender = elRender
        }
        checkInvie() {
            let {top} = this.el.getBoundingClientRect() //获取元素的顶部距离
            return top < window.innerHeight * (this.options.preLoad || 1.3)
        } //检测图片是否在可视区域
        load(){
            //先加载loading 
            //加载成功显示图片 失败显示失败图片
            this.elRender(this, 'loading') 
            //懒加载的核心就是 new Image
            loadingImageAsync(this.src, () => {
                this.state.loading = true
                this.elRender(this, 'finish')
            }, () => {
                // this.state.error = true 
                this.elRender(this, 'error')
            })
        }//加载图片
    }
    return class lazyClass {
        constructor(options) {
            this.options = options//保存用户 传入的指定
            this.bindHandler = false //是否绑定过handler
            this.listenerQueue = [] 
        }
        handlerLazyLoad() { //校验数组中的哪些元素是显示的
            //计算当前图片的位置是否在可视区域
            this.listenerQueue.forEach(listener => {
                if(!listener.state.loading) {
                    let catIn = listenr.checkInvie
                    catIn && listenr.load()
                } 
            })
        }
        add(el,binds,vnode,oldVnode) { //
            //el没有插入到父元素中
            //找到父亲的 
            Vue.nextTick(() => {
                //找到带有滚动的盒子 infiniteScroll
                let scrollParent = getScrollParent(el)
                if(scrollParent && !this.bindHandler) {
                    this.bindHandler = true
                    scrollParent.addEventListener('scroll',this.handlerLazyLoad.bind(this)) // this指向这个实例
                }
                //需要判断当前元素是否在容器可视区域中 如果不是就不用渲染
                const listenr = new ReactiveListener({
                    el,
                    src: binds.value,//渲染以后的值 
                    options: this.options,
                    elRender: this.elRender.bind(this)
                })
                this.listenerQueue.push(listenr)
                this.handlerLazyLoad()
            })
        }
        elRender(listenr, state) { //渲染方法
            let el = this.listenr.el
            let src= ''
            switch(state) {
                case 'loading':
                    src = lisenter.options.loading || ''
                    break
                case 'error': 
                    src = listenr.options.error || ''
                    break
                default:
                    src = listenr.src
                break
            }
            el.setAttribute('src', src)
        }
    }
}
const VueLazyLoad = {
    install(Vue, options) { //
        console.log(Vue)
        //把所有逻辑进行封装 一般会对库用类进行封装， 把类再封装到函数中
        const lazyClass= Lazy(Vue)
        const lazyInstance = new lazyClass(options) //curring的方式

        Vue.directive('lazy', {
            bind: lazyInstance.add.bind(lazyInstance)//参数穿过去了？
        })
    }
}

//加个节流进行优化scroll方法
