<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
      label="Email"
      type="email"
      placeholder="Digite seu email"
      name="emil"
      v-model="email"
      :error="emailError"
      classInput="h-[48px]"
    />
    <Textinput
      label="Senha"
      type="password"
      placeholder="5+ caracteres, 1 letra maiuscúla "
      name="password"
      v-model="password"
      :error="passwordError"
      hasicon
      classInput="h-[48px]"
    />

    <div class="flex justify-between">
      <label class="cursor-pointer flex items-start">
        <input
          type="checkbox"
          class="hidden"
          @change="() => (checkbox = !checkbox)"
        />
        <span
          class="h-4 w-4 border rounded flex-none inline-flex mr-3 relative top-1 transition-all duration-150"
          :class="
            checkbox
              ? 'ring-2 ring-black-500 dark:ring-offset-slate-600 dark:ring-slate-900  dark:bg-slate-900 ring-offset-2 bg-slate-900'
              : 'bg-slate-100 dark:bg-slate-600 border-slate-100 dark:border-slate-600 '
          "
        >
          <img
            src="@/assets/images/icon/ck-white.svg"
            alt=""
            class="h-[10px] w-[10px] block m-auto"
            v-if="checkbox"
          />
        </span>
        <span class="text-slate-500 dark:text-slate-400 text-sm leading-6"
          >Mantenha-me Conectado</span
        >
      </label>
      <router-link
        to="/forgot-password"
        class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >Esqueceu a senha?</router-link
      >
    </div>

    <button type="submit" class="btn btn-dark block w-full text-center">
      Sign in
    </button>
  </form>
</template>
<script>
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
export default {
  components: {
    Textinput,
  },
  data() {
    return {
      checkbox: false,
    };
  },
  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required("Email precisa ser preenchido").email(),
      password: yup.string().required("Senha precisa ser preenchido").min(5),
    });

    const toast = useToast();
    const router = useRouter();

    const formValues = {
      email: "dashcode@gmail.com",
      password: "dashcode",
    };

    const { handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: formValues,
    });
    // No need to define rules for fields

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");

    const onSubmit = handleSubmit((values) => {
      let isUser = localStorage.users;
      isUser = JSON.parse(isUser);

      let userIndex = isUser.findIndex((user) => user.email === values.email);

      if (userIndex > -1) {
        let activeUser = isUser.find((user) => user.email === values.email);
        localStorage.setItem("activeUser", JSON.stringify(activeUser));

        if (isUser[userIndex].password === values.password) {
          router.push("/app/home");
          toast.success("Logado com sucesso", {
            timeout: 2000,
          });
        } else {
          toast.error("Usuário ou senha incorretos", {
            timeout: 2000,
          });
        }
      } else {
        toast.error("Usuário ou senha incorretos", {
          timeout: 2000,
        });
      }
    });

    return {
      email,
      emailError,
      password,
      passwordError,
      onSubmit,
    };
  },
};
</script>
<style lang="scss"></style>
