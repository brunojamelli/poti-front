<template>
  <div>
    <div>
      <h2 style="text-align: center">
        {{ $store.getters.titleHome }}
      </h2>
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
        <v-row align="center" justify="space-around">
          <v-btn depressed class="mx-auto my-4" @click="click03">
            Detalhes
          </v-btn>
        </v-row>

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
          <v-btn
            v-if="!item.active"
            depressed
            color="primary"
            @click="click01(false)"
          >
            Ativar
          </v-btn>
          <v-btn v-else depressed color="warning" @click="click01(true)">
            Desativar
          </v-btn>
          <v-btn depressed color="error" @click="click02"> Apagar </v-btn>
        </v-card-actions>
      
      <v-dialog v-model="dialogDelete" max-width="380">
        <v-card>
          <v-card-title class="text-h5">
            Tem certeja que deseja apagar esse anúncio?
            {{ item.id }}
          </v-card-title>

          <v-card-text>
            Tem certeza que deseja prosseguir? essa ação é irreversivel.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialogDelete = false">
              Voltar aos Anúncios
            </v-btn>

            <v-btn color="green darken-1" text @click="clickAgreeDelete(item)">
              Concordo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    advertiserId: 0,
    loading: false,
    selection: 1,
    dialogDelete: false,
  }),
  computed: {
    token() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    async clickValids() {
      http = new ApiService(`announcement/advertiser/${this.advertiserId}`);
      const params = new URLSearchParams({
        filterBy: "valids",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
      this.$store.commit("setTitleHome", "Anúncios Válidos");
    },
    async clickInvalids() {
      http = new ApiService(`announcement/advertiser/${this.advertiserId}`);
      const params = new URLSearchParams({
        filterBy: "invalids",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
      this.$store.commit("setTitleHome", "Anúncios Inválidos");
    },
    async clickActivateds() {
      http = new ApiService(`announcement/advertiser/${this.advertiserId}`);
      const params = new URLSearchParams({
        filterBy: "activated",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
      this.$store.commit("setTitleHome", "Anúncios Ativos");
    },
    async clickDisableds() {
      http = new ApiService(`announcement/advertiser/${this.advertiserId}`);
      const params = new URLSearchParams({
        filterBy: "disabled",
      }).toString();

      const response = await http.getListWithParams(params);
      this.announcements = response.data;
      this.$store.commit("setTitleHome", "Anúncios Desativados");
    },
    async clickListAll() {
      http = new ApiService(`announcement/advertiser/${this.advertiserId}`);
      const response = await http.getList();
      this.announcements = response.data;
      this.$store.commit("setTitleHome", "Todos Anúncios");
    },
    async click01(payload) {
      window.console.log(payload);
    },
    click02() {
      this.dialogDelete = true;
    },
    async clickAgreeDelete(data) {
      alert("apagado");
      http = new ApiService("announcement");
      let response = await http.delete(data.id);
      window.console.log(response);
    },
    click03() {
      // this.$router.push("/");
      alert("detalhes");
      this.$router.push("/detalhes-anuncio");
    },

    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  async created() {
    const userToken = decode(this.$store.state.token);
    window.console.log(userToken.user.id);
    this.advertiserId = userToken.user.id;
    http = new ApiService(`announcement/advertiser/${this.advertiserId}`);
    const response = await http.getList();
    this.announcements = response.data;
    this.$store.commit("setTitle", "Anúncios");
    this.$store.commit("setTitleHome", "Todos Anúncios");
  },
  async mounted() {},
};
</script>

<style scoped>
</style>