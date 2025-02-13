import { createRouter, createWebHistory } from 'vue-router';

//LAYOUT
import LayoutMain from './layout/Main.vue';
//PAGES
import About from './pages/About.vue';
import Skills from './pages/Skills.vue';
import Experience from './pages/Experience.vue';
import Projects from './pages/Projects.vue';  

const routes = [
    {
        path: '/',
        component: LayoutMain,
        children: [
            {
                path: '',
                name: 'about',
                component: About
            },
            {
                path: '/skills',
                name: 'skills',
                component: Skills
            },
            {
                path: '/experiences',
                name: 'experiences',
                component: Experience
            },
            {
                path: '/projects',
                name: 'projects',
                component: Projects
            }

        ],
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;