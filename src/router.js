import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = ()=> import("./page/home.vue");
const Login = () => import("./page/login.vue");
const Table = () => import("./page/table.vue");


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Home,
         children:[
            
             { path: '/table', component: Table }
         ]
       
       },
        { path: '/login', component: Login },
        
    
    ]
})

export default router