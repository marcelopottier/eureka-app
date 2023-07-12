import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/auth/login/index.vue"),
  },
  {
    path: "/login2",
    name: "login2",
    component: () => import("@/views/auth/login/login2.vue"),
  },
  {
    path: "/login3",
    name: "login3",
    component: () => import("@/views/auth/login/login3.vue"),
  },
  {
    path: "/register",
    name: "reg",
    component: () => import("@/views/auth/register"),
  },
  {
    path: "/register2",
    name: "reg2",
    component: () => import("@/views/auth/register/register2"),
  },
  {
    path: "/register3",
    name: "reg3",
    component: () => import("@/views/auth/register/register3"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/views/auth/forgot-password.vue"),
  },
  {
    path: "/forgot-password2",
    name: "forgot-password2",
    component: () => import("@/views/auth/forgot-password2.vue"),
  },
  {
    path: "/forgot-password3",
    name: "forgot-password3",
    component: () => import("@/views/auth/forgot-password3.vue"),
  },
  {
    path: "/lock-screen",
    name: "lock-screen",
    component: () => import("@/views/auth/lock-screen.vue"),
  },
  {
    path: "/lock-screen2",
    name: "lock-screen2",
    component: () => import("@/views/auth/lock-screen2.vue"),
  },
  {
    path: "/lock-screen3",
    name: "lock-screen3",
    component: () => import("@/views/auth/lock-screen3.vue"),
  },
  {
    path: "/success-500",
    name: "success-500",
    component: () => import("@/views/auth/success.vue"),
  },
  {
    path: "/app",
    name: "Layout",
    redirect: "/app/home",
    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: "blank-page",
        name: "blank-page",
        component: () => import("@/views/blank-page.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("@/views/notifications.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          hide: true,
        },
      },
      // NORMAL PAGES

      //CADASTROS
      {
        path: "client-register",
        name: "Cadastro de Clientes",
        component: () => import("@/views/records/client-register"),
        meta: {
          groupParent: "Cadastros",
        },
      },
      {
        path: "user-register",
        name: "Cadastro de Funcionário",
        component: () => import("@/views/records/user-register"),
        meta: {
          groupParent: "Cadastros",
        },
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/views/utility/faq"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "blog",
        name: "blog",
        component: () => import("@/views/utility/blog"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "blog-details",
        name: "blog-details",
        component: () => import("@/views/utility/blog/blog-details"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/profile.vue"),
      },
      {
        path: "profile-setting",
        name: "profile-setting",
        component: () => import("@/views/profile.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/settings.vue"),
      },
      {
        path: "icons",
        name: "icons",
        component: () => import("@/views/icons.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    component: () => import("@/views/utility/comming-soon"),
  },
  {
    path: "/under-construction",
    name: "under-construction",
    component: () => import("@/views/utility/under-construction"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/error.vue"),
  },
];

export default routes;
