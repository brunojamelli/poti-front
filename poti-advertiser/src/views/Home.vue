<template>
  <div>
    <div>
      <h2 style="text-align: center">Anúncios</h2>
      <br />
    </div>
    <v-row align="center" justify="space-around">
      <v-btn depressed @click="clickListAll"> Todos </v-btn>
      <v-btn depressed color="primary" @click="clickValids"> Validos </v-btn>
      <v-btn depressed color="primary" @click="clickActivateds"> Ativos </v-btn>
      <v-btn depressed color="error" @click="clickInvalids"> Invalidos </v-btn>
      <v-btn depressed color="warning" @click="clickDisableds"> Inativos </v-btn>
    </v-row>
    <br />
    <v-row align="center">
      {{ announcements }}
    </v-row>
  </div>
</template>

<script>
import ApiService from "../utils/ApiService";
let http = {};
export default {
  name: "Home",

  components: {},
  data: () => ({
    announcements: [],
    advId: 4,
  }),
  methods: {
    clickValids(){
      alert('listando validos')
    },
    clickInvalids(){
      alert('listando invalidos')
    },
    clickActivateds(){
      alert('listando ativados')
    },
    clickDisableds(){
      alert('listando inativos')
    },
    clickListAll(){
      alert('listando todos')
    }
  },
  async created() {
    http = new ApiService(`announcement/advertiser/${this.advId}`);
    const response = await http.getList();
    this.announcements = response.data;
  },
  async mounted() {},
};
</script>
