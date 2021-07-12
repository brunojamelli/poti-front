<template>
  <v-card width="1400px" class="mx-auto">
    <div class="title">Registro Anuncio</div>
  </v-card>
</template>

<script>
export default {
  name: "AdRegistration",

  components: {},
  created(){
    this.$store.commit("setTitle", "Cadastro de Anúncio");
  }
};
</script>
<style scoped>
</style>