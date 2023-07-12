<template>
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="Formulário do Usuário">
        <VerticalUser/>
      </Card>
      <div class="xl:col-span-1">
          <Card title="Documentos do Paciente">
            <DropZoneVue />
          </Card>
        </div>
    </div>
  </template>
  <script>
  import Card from "@/components/Card";
  
  import VerticalUser from "../forms/input-layout/VerticalUser.vue";
  import DropZoneVue from "../forms/file-input/DropZone.vue";
  
  export default {
    components: {
      Card,
      VerticalUser,
      DropZoneVue,
    },
  };
  </script>
  <style lang="scss">
  .card-auto-height3 {
    .card {
      @apply h-min;
    }
  }
  </style>
  