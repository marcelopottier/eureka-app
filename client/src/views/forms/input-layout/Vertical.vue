<template>
  <div class="space-y-4">
    <Textinput
      label="Nome Completo"
      name="fullname"
      type="text"
      placeholder="Nome Completo"
    />
    <Textinput
      label="Email do Responsável"
      name="v_email"
      type="email"
      placeholder="Email"
    />
    <Textinput
      label="Celular"
      name="v_phone"
      type="phone"
      placeholder="Celular"
    />
    <Textinput
      label="Escola"
      name="v_school"
      type="school"
      placeholder="Escola"
    />
    <Textinput
      label="Instituto"
      name="v_institute"
      type="institute"
      placeholder="Instituto"
    />
    <Button @click="register" text="Cadastrar" btnClass="btn-dark"/>
  </div>
</template>
<script>
import AuthenticationService from "@/plugins/AuthenticationService";
import Textinput from "@/components/Textinput";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

export default {
  components: {
    Textinput,
    Checkbox,
    Button,
  },
  methods: {
    async register (){
      const response = await AuthenticationService.register({
        fullName: this.fullname,
        email: this.v_email,
        phone: this.v_phone,
        school: this.v_school,
        institute: this.v_institute
      })
      console.log(response.data);
    }
  }
};
</script>
<style lang=""></style>
