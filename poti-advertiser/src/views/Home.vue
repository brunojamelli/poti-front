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
    <v-row >
      <!-- {{ announcements }} -->
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
          <!-- <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row> -->

          <div class="my-4 text-subtitle-1">R$ {{ item.value }} •</div>

          <div>
            {{ item.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <!-- <v-card-title>Tonight's availability</v-card-title> -->

        <v-card-text>
          <!-- <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group> -->
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>
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
    loading: false,
    selection: 1,
  }),
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
    http = new ApiService(`announcement/advertiser/${this.advId}`);
    const response = await http.getList();
    this.announcements = response.data;
  },
  async mounted() {},
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  margin-left: 3%;
}
</style>