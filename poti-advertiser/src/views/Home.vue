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
          <v-btn
            depressed
            class="mx-auto my-4"
            @click="sendToDetail('detalhes-anuncio', item)"
          >
            Detalhes
          </v-btn>
        </v-row>

        <AnnouncementImage :announcement="item"></AnnouncementImage>

        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">R$ {{ item.value }} •</div>

          <!-- <div>
            {{ item.description }}
          </div> -->
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn
            v-if="!item.active"
            depressed
            color="primary"
            @click="clickActivation(false, item)"
          >
            Ativar
          </v-btn>
          <v-btn
            v-else
            depressed
            color="warning"
            @click="clickDesative(true, item)"
          >
            Desativar
          </v-btn>
          <v-btn depressed color="error" @click="click02(item)"> Apagar </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <v-dialog v-model="dialogDelete" max-width="380">
      <v-card>
        <v-card-title class="text-h5">
          Tem certeja que deseja apagar esse anúncio?
        </v-card-title>

        <v-card-text>
          Tem certeza que deseja prosseguir? essa ação é irreversivel.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialogDelete = false">
            Voltar aos Anúncios
          </v-btn>

          <v-btn color="green darken-1" text @click="clickAgreeDelete">
            Concordo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :multi-line="multiLine">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import ApiService from "../utils/ApiService";
import decode from "jwt-decode";
import AnnouncementImage from "../components/AnnouncementImage.vue";

let http = {};
export default {
  name: "Home",

  components: {
    AnnouncementImage,
  },
  data: () => ({
    announcements: [],
    advertiserId: 0,
    loading: false,
    selection: 1,
    dialogDelete: false,
    dialogDesative: false,
    clickedAnnouncement: {},
    multiLine: true,
    snackbar: false,
    text: `Anuncio desativado`,
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
    async clickDesative(status, clicked) {
      this.snackbar = true;
      window.console.log(status);

      window.console.log(clicked);
      http = new ApiService("announcement/desativation");
      let response = await http.patch(clicked.id);
      window.console.log(response);
      let index = this.announcements.indexOf(clicked);
      this.announcements[index].active = !status;
    },
    async clickActivation(status, clicked) {
      window.console.log(status);
      window.console.log(clicked);
      http = new ApiService("announcement/activation");
      let response = await http.patch(clicked.id);
      window.console.log(response);
      let index = this.announcements.indexOf(clicked);
      this.announcements[index].active = !status;
      alert("ativar");
    },
    // clique do evento de discordar da ação de exclusão
    click02(data) {
      this.dialogDelete = true;
      this.clickedAnnouncement = data;
      window.console.log(data);
    },
    // evento de click de exclusão permanente de anúncio
    async clickAgreeDelete() {
      http = new ApiService("announcement");
      // executando a requisição http do delete
      let response = await http.delete(this.clickedAnnouncement.id);
      window.console.log(response);
      // fechando caixa de dialogo da exclusão
      this.dialogDelete = false;
      // pegando o indice do elemento clicado para removelo da lista
      let index = this.announcements.indexOf(this.clickedAnnouncement);
      this.announcements.splice(index, 1);
      this.$alert(
          "Anúncio Apagado",
          "Concluído",
          "warning"
        );
      
    },

    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    formatDate(date) {
      if (!date) return null;
      let part01 = date.slice(0, 10);
      const [year, month, day] = part01.split("-");
      let part02 = date.slice(11, 16);

      return `${day}/${month}/${year} as ${part02}`;
    },

    sendToDetail(where, data) {
      this.$router.push({ name: where, params: { advertiser: data } });
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