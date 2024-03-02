import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import HomeLayout from '../layout/HomeLayout/HomeLayout.vue'
import AdminLayout from "../layout/AdminLayout/AdminLayoutView.vue"
import LoginLayout from "../layout/LoginLayout/LoginLayout.vue"
import FilmDetail from "../views/FilmDetail/FilmDetailView.vue"
import WatchFilm from "../views/WatchFilm/WatchFilmView.vue"
import Checkout from "../views/Checkout/CheckoutView.vue"
import SearchFilm from "../views/SearchFilm/SearchFilmView.vue"
import Profile from "../views/Profile/ProfileView.vue"
import Login from "../views/Login/LoginView.vue"
import Register from "../views/Register/RegisterView.vue"
import ManagerUser from "../views/ManagerUser/ManagerUserView.vue"
import ManagerFilm from "../views/ManagerFilm/ManagerFilmView.vue"
import ManagerCheckout from "../views/ManagerCheckout/ManagerCheckoutView.vue"
import CreateFilm from "../views/CreateFilm/CreateFilmView.vue"
import UpdateFilm from "../views/UpdateFilm/UpdateFilmView.vue"
import UpdateUser from "../views/UpdateUser/UpdateUserView.vue"
import ManagerCheckoutBitcoin from "../views/ManagerCheckoutBitcoin/ManagerCheckoutBitcoin.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homelayout',
      component: HomeLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path:"/filmdetail/:id",
          component:FilmDetail
        },
        {
          path:"/watchfilm/:id",
          component:WatchFilm
        },
        {
          path:"/checkout",
          component:Checkout
        },
        {
          path:"/search",
          component:SearchFilm,
          name:"search"
        },
        {
          path: "/profile",
          component:Profile
        },
      ]
    },
    {
      path: '/admin',
      name: 'adlayout',
      component: AdminLayout,
      children:[
        {
          path:"/admin/user",
          component: ManagerUser,
        },
        {
          path:"/admin/film",
          component: ManagerFilm,
        },
        {
          path:"/admin/checkout",
          component: ManagerCheckout,
        },
        {
          path:"/admin/createfilm",
          component: CreateFilm,
        },
        {
          path:"/film/update/:id",
          component: UpdateFilm,
        },
        {
          path:"/user/update/:id",
          component: UpdateUser,
        },
        {
          path:"/admin/checkoutbitcoin",
          component: ManagerCheckoutBitcoin,
        }
      ]
    },
    {
      path: '/',
      name: 'loginlayout',
      component: LoginLayout,
      children:[
        {
          path:"/login",
          component: Login,
        },
        {
          path:"/register",
          component: Register,
        }
      ]
    }
  ]
})

export default router
