import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Diagnose from "../views/Diagnose.vue"
import Diagnoses from "../views/Diagnoses.vue"
import Symptoms from "../views/Symptoms.vue"
import Map from "../views/Map.vue"

import firebase from 'firebase/app'
import 'firebase/auth'

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/diagnose",
    name: "Diagnose",
    component: Diagnose,
    meta: { requiresAuth: true }
  },
  {
    path: "/past_diagnoses",
    name: "Diagnoses",
    component: Diagnoses,
    meta: { requiresAuth: true }
  },
  {
    path: "/symptoms",
    name: "Symptoms",
    component: Symptoms
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
})

export default router;
