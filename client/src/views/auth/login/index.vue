<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="left-column relative z-[1]">
        <div class="max-w-[520px] pt-80 ltr:pl-20 rtl:pr-20 mx-auto">
          <router-link to="/">
            <img
              :src="logo"
              alt=""
              class="mb-10"
              v-if="!this.$store.themeSettingsStore.isDark"
            />
            <img
              :src="logoWhite"
              alt=""
              class="mb-10"
              v-else
            />
          </router-link>

          <h4>
            Desbloqueie a sua
            <span class="text-white dark:text-slate-400 font-bold"
              >Performance</span
            >
          </h4>
        </div>
      </div>
      <div class="right-column relative">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box h-full flex flex-col justify-center">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/">
                <img
                  :src="mobileLogo"
                  alt=""
                  class="mx-auto"
                  v-if="!this.$store.themeSettingsStore.isDark"
                />
                <img
                  :src="logoWhite"
                  alt=""
                  class="mx-auto"
                  v-else
                />
              </router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-4">
              <h4 class="font-medium">Entre</h4>
              <div class="text-slate-500 text-base">
                Entre na sua conta para começar a utilizar o Eureka
              </div>
            </div>
            <Signin />
            <div
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm"
            >
              Não tem uma conta?
              <router-link
                to="/register"
                class="text-slate-900 dark:text-white font-medium hover:underline"
              >
                Cadastre-se
              </router-link>
            </div>
          </div>
          <div class="auth-footer text-center">
            Copyright 2021, Dashcode All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Signin from "../common/Signin";
import Social from "../common/Social";
// Image Import
import logoWhite from "@/assets/images/logo/logo-no-background.svg"
import logo from "@/assets/images/logo/logo-no-background.svg"
import mobileLogo from "@/assets/images/logo/logo-black.png"

export default {
  data () {
    return {
      logoWhite,logo, mobileLogo
    }
  },
  components: {
    Social,
    Signin,
  },
};
</script>
<style lang="scss">
</style>
