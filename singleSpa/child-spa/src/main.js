import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'
Vue.config.productionTip = false

/*new Vue({
    router,
    render: h => h(App)
}).$mount('#app')*/
//替代vue
//将子打包成一个个lib给父应用使用，子无法启动，没有new vue
//怎么打包？建config。js


//需要父应用加载子应用

//bootstrap  mount unmount三个方法
//single-spa ，single-spa-vue
const appOptions = {
    el: "#vue", //应用挂在到父应用的哪个标签上
    router,
    render: h => h(App)
}


if (!window.singleSpaNavigate) {
    delete appOptions.el
    new Vue(appOptions).$mount("#app")

}
//包装后的生命周期，三个方法
const vueLifeCycle = singleSpaVue({
    Vue, //vue对象
    appOptions //single配置
})

//如果是父饮用我
if (window.singleSpaNavigate) {
    __webpack_public_path__ = "http://localhost:10000/"

}
//三个接口协议，父会调用这几个方法
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount