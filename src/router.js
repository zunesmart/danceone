import meDance from './components/MeDance.vue' 
import Home from './components/JumpStart.vue'
import comment from './components/comment.vue'

export const routes = [
    {path: '/', component: Home},  
    // {path: '/user/:id', component: User} //expect par :id
    {path: '/about', component: meDance},
    {path: '/comment', component: comment},
    { path: '*', redirect: '/' }// * go to any path user goes to can go to a 404
] 