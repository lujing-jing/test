import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

Vue.config.productionTip = false
async function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = url;
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
    })


}
//子，名字，任意写
registerApplication('myVueApp',
    async() => {
        console.log("加载模块")
        await loadScript(`http://localhost:10000/js/chunk-vendors.js`);
        await loadScript(`http://localhost:10000/js/app.js`)
        return window.singleVue;
    },
    location => location.pathname.startsWith("/vue")
)
start()
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

//注册自应用