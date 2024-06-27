import { createRouter, createWebHistory } from 'vue-router';
import NewsList from "./components/News/NewsList.vue";
import NewsDetail from "./components/News/NewsDetail.vue";
import NotFound from "./components/Error/NotFound.vue";
import Terms from "./components/Corporate/TermsView.vue";
import Privacy from "./components/Corporate/PrivacyView.vue";
import Base from "./Base.vue";

const routes = [
    { path: '/', name: 'Base', component: Base },
    { path: '/news', name: 'NewsList', component: NewsList, props: route => ({ noticesData: route.params.data }) },
    { path: '/news/:id', name: 'NewsDetail', component: NewsDetail, props: true },
    { path: '/terms-use', name: 'TermsUse', component: Terms },
    { path: '/privacy-policy', name: 'PrivacyPolicy', component: Privacy },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;