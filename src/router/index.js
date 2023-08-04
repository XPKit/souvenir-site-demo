import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SouvenirsView from '../views/SouvenirsView.vue';
import FaqsView from '../views/FaqsView.vue';
import ContactView from '../views/ContactView.vue';
import TermsView from '../views/TermsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/souvenirs',
      name: 'souvenirs',
      component: SouvenirsView
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FaqsView
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/terms-and-conditions',
      name: 'terms',
      component: TermsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
