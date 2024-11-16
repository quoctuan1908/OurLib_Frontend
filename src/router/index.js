import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        guest: true,
        is_admin: false
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/BooksView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/book/',
      name: 'book.detail',
      component: () => import('../views/BookDetailsView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        requiresAuth: true,
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/HelpView.vue'),
      meta: {
        guest: true
      }
    },
  ]
})
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {
  if (!to.meta.guest && !localStorage.getItem('id')) {
    console.log('Hello')
    return {
      path: 'login',
      replace: true
    }
  } else {
    return true
  }
})
export default router
