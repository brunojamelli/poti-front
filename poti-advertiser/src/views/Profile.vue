<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="text-h5"> Meu Perfil </v-card-title>
    <v-card-text>
      <b>{{ whatsLabel }}</b>
      {{ userData.whatsapp }}
    </v-card-text>
    <v-card-text>
      <b>{{ emailLabel }}</b>
      {{ userData.email }}
    </v-card-text>
    <v-card-text v-if="userData.address != ''">
      <b>{{ addressLabel }}</b>
      {{ userData.address }}
    </v-card-text>
    <v-card-text v-else>
      <b>Endereço não Informado</b>
    </v-card-text>

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
  data: () => ({
    userData: {},
    whatsLabel: "Whatsapp: ",
    emailLabel: "Email: ",
    addressLabel: "Endereço: ",
  }),
  async created() {
    this.$store.commit("setTitle", "Perfil");
    const userToken = decode(this.$store.state.token);
    window.console.log(userToken.user.id);
    http = new ApiService("advertiser");
    let response = await http.getOne(userToken.user.id);
    let user = response.data[0];
    this.userData = user;
    window.console.log(user);
  },
};
</script>
<style scoped>
</style>