<template>
  <div class="space-y-4">
    <Textinput
      label="Nome Completo"
      name="v_Fullname"
      type="text"
      placeholder="Nome Completo"
    />
    <Textinput
      label="Email"
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
      label="Especialização"
      name="v_espec"
      type="espec"
      placeholder="Especialização"
    />
    <Button text="Cadastrar" btnClass="btn-dark"/>
  </div>
</template>
<script>
import Textinput from "@/components/Textinput";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

export default {
  components: {
    Textinput,
    Checkbox,
    Button,
  },
};
</script>
<style lang=""></style>
