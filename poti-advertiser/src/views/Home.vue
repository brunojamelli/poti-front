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
    <!-- align="center" -->
    <v-row>
      <v-card
        cols="12"
        sm="3"
        md="4"
        :loading="loading"
        class="mx-auto my-12"
        max-width="240"
        v-for="item in announcements"
        :key="item.id"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="180"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">R$ {{ item.value }} •</div>

          <div>
            {{ item.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <!-- <v-btn color="deep-purple lighten-2" text @click="reserve">
            Reserve
          </v-btn> -->
          <v-btn v-if="!item.active" depressed color="primary" @click="a">
            Ativar
          </v-btn>
          <v-btn v-else depressed color="warning" @click="a"> Desativar </v-btn>
          <v-btn depressed color="error" @click="a"> Apagar </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import ApiService from "../utils/ApiService";
import decode from "jwt-decode";

let http = {};
export default {
  name: "Home",

  components: {},
  data: () => ({
    announcements: [],
    advId: 4,
    loading: false,
    selection: 1,
  }),
  computed: {
    token() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    async clickValids() {
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const params = new URLSearchParams({
        filterBy: "valids",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
    },
    async clickInvalids() {
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const params = new URLSearchParams({
        filterBy: "invalids",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
    },
    async clickActivateds() {
      http = new ApiService(`announcement/advertiser/${this.advId}`);
      const params = new URLSearchParams({
        filterBy: "activated",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
    },
    async clickDisableds() {
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
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  async created() {
    const obj  = decode(this.$store.state.token);
    window.console.log(obj.user.id);
    
    http = new ApiService(`announcement/advertiser/${this.advId}`);
    const response = await http.getList();
    this.announcements = response.data;
  },
  async mounted() {},
};
</script>

<style scoped>
</style>