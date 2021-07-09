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
      <v-btn depressed color="warning" @click="clickDisableds">
        Inativos
      </v-btn>
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
    async clickValids() {
      alert("listando validos");
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const params = new URLSearchParams({
        filterBy: "valids",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
    },
    async clickInvalids() {
      alert("listando invalidos");
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const params = new URLSearchParams({
        filterBy: "invalids",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
    },
    async clickActivateds() {
      alert("listando ativados");
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const params = new URLSearchParams({
        filterBy: "activated",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
    },
    async clickDisableds() {
      alert("listando inativos");
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const params = new URLSearchParams({
        filterBy: "disabled",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
    },
    async clickListAll() {
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const response = await http.getList();
      this.announcements = response.data;
      alert("listando todos");
    },
  },
  async created() {
    http = new ApiService(`announcement/advertiser/${this.advId}`);
    const response = await http.getList();
    this.announcements = response.data;
  },
  async mounted() {},
};
</script>
