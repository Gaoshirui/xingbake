import head from '../views/home/components/head'
export default {
    install(Vue){
        console.log(Vue,'install');
        Vue.component('el-header',head)
    }
}