<template>
  <v-card width="1400px" class="mx-auto">
    <div class="title">Registro Anunciante</div>
  </v-card>
</template>

<script>
export default {
  name: "AdvertiserRegistration",

  components: {},
  created(){
    this.$store.commit("setTitle", "Cadastro de Anunciante");
  }
};
</script>
<style scoped>
</style>