<template>
  <div>
    <div>
      <h2 style="text-align: center">Anúncios</h2>
      <br />
    </div>
    <v-row align="center" justify="space-around">
      <v-btn depressed> Todos </v-btn>
      <v-btn depressed color="primary"> Validos </v-btn>
      <v-btn depressed color="primary"> Ativos </v-btn>
      <v-btn depressed color="error"> Invalidos </v-btn>
      <v-btn depressed color="warning"> Inativos </v-btn>
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
    async clickValids(){
      
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
