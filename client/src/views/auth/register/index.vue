<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="left-column relative z-[1]">
        <div class="max-w-[520px] pt-80 ltr:pl-20 rtl:pr-20 mx-auto">
          <router-link to="/">
            <img
              src="@/assets/images/logo/logo-no-background.svg"
              alt=""
              class="mb-10"
              v-if="!this.$store.themeSettingsStore.isDark"
            />
            <img
              src="@/assets/images/logo/logo-no-background.svg"
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
      <div class="right-column relative bg-white dark:bg-slate-800">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box h-full flex flex-col justify-center">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  src="@/assets/images/logo/logo-black.png"
                  alt=""
                  class="mx-auto"
              /></router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-5">
              <h4 class="font-medium">Cadastre-se</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                Crie uma conta para começar a usar o Eureka
              </div>
            </div>
            <Signup />
            <div
              className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
            >
            </div>
            <div
              class="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm"
            >
              Já tem uma conta?
              <router-link
                to="/"
                class="text-slate-900 dark:text-white font-medium hover:underline"
              >
                Entre</router-link
              >
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
import Signup from "../common/Signup";
import Social from "../common/Social";

export default {
  components: {
    Social,
    Signup,
  },
};
</script>
<style lang="scss"></style>
