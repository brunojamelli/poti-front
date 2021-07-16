<template>
  <v-card class="mx-auto" max-width="500">
    <div class="title">Meu Perfil</div>
  </v-card>
</template>

<script>
export default {
  name: "Profile",

  components: {},
  created(){
    this.$store.commit("setTitle", "Perfil");
  }
};
</script>
<style scoped>
</style>