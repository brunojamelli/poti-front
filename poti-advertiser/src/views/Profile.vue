<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="text-h5"> Meu Perfil </v-card-title>
    <v-card-text>
      <h4>Whatsapp:</h4>
    </v-card-text>
    <v-card-text>Email: </v-card-text>
    <v-card-text>endereço: </v-card-text>

    <v-card-actions></v-card-actions>
    <!-- <div class="title"></div> -->
  </v-card>
</template>

<script>
import ApiService from "../utils/ApiService";
import decode from "jwt-decode";

let http = {};
export default {
  name: "Profile",

  components: {},
  async created() {
    this.$store.commit("setTitle", "Perfil");
    const userToken = decode(this.$store.state.token);
    window.console.log(userToken.user.id);
    http = new ApiService("advertiser");
    let data = await http.getOne(userToken.user.id);
    window.console.log(data);
  },
};
</script>
<style scoped>
</style>