import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage'
import CrewPage from '../components/CrewPage'
import DestinationPage from '../components/destinations/DestinationPage'
import MarsPage from '../components/destinations/planets/MarsPage'
import MoonPage from '../components/destinations/planets/MoonPage'
import EuropaPage from '../components/destinations/planets/EuropaPage'
import TitanPage from '../components/destinations/planets/TitanPage'
import TechPage from '../components/TechPage'
const routes = [
  { path: '/home', component: HomePage },
  { path: '/destination', component: DestinationPage },
  { path: '/mars', component: MarsPage },
  { path: '/moon', component: MoonPage },
  { path: '/europa', component: EuropaPage },
  { path: '/titan', component: TitanPage },
  { path: '/crew', component: CrewPage },
  { path: '/technology', component: TechPage },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
