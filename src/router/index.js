import HelloWorld from "../components/HelloWorld.vue"
import Create from "../view/Create.vue"
import Edit from "../view/Edit.vue"
import {
    createRouter,
    createWebHistory
} from 'vue-router'


const routes = [{
        path: '/helloworld',
        component: HelloWorld,

    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/projects/:id',
        component: Edit
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router