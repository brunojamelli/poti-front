<template>
  <v-card class="mx-auto" max-width="800" style="margin-top: 20px">
    <h2 class="text-center">Detalhes Anúncio</h2>
    <div>
      <v-row>
        <v-col
          v-for="photo in photo_list"
          :key="photo.filename"
          class="d-flex child-flex"
          cols="6"
        >
          <v-img
            :src="`http://localhost:3333/photo/${photo.filename}`"
            :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
            aspect-ratio="1.5"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>

    <br />
    <v-card-text>
      <div class="text--primary">criado em: {{ formatDate(advertiser.createdAt) }}</div>

      <p v-if="photo_list.length == 0" class="text-h5 text--primary">
        {{ empty_ad }}
      </p>
      <!-- <div>criado em: {{ advertiser.createdAt }}</div> -->

      <p class="text-h4 text--primary">{{ advertiser.title }}</p>
      <p class="text-h5 text--primary">R$ {{ advertiser.value }}</p>
      <p v-if="advertiser.quantity == 0" class="text-h5 text--primary">
        Quantidade não Informada
      </p>
      <p v-else class="text-h5 text--primary">{{ advertiser.quantity }} Unidades</p>

      <div class="text--primary">
        {{ advertiser.description }}
      </div>
    </v-card-text>
    <div class="text-center">
      <v-card-actions>
        <v-btn v-if="!advertiser.active" depressed color="primary">
          Ativar
        </v-btn>
        <v-btn v-else depressed color="warning"> Desativar </v-btn>
        <v-btn outlined color="error">
          <v-icon left>mdi-delete</v-icon> Apagar
        </v-btn>
        <v-btn
          class="ma-2"
          tile
          outlined
          color="cyan"
          @click="editionMode('cadastro-fotos', true)"
        >
          <v-icon left>mdi-pencil</v-icon> Editar
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>
<script>
import ApiService from "../utils/ApiService";

export default {
  name: "AdDetails",
  props: ["advertiser"],
  data: () => ({
    photo_list: [],
    photo_link: "",
    first_file: "",
    empty_ad: "O anúncio ainda não conta com fotos disponiveis",
  }),
  methods: {
    editionMode(where, data) {
      this.$router.push({ name: where, params: { edit: data } });
    },
    formatDate(date) {
      if (!date) return null;
      let part01 = date.slice(0, 10);
      const [year, month, day] = part01.split("-");
      let part02 = date.slice(11, 16);

      return `${day}/${month}/${year} as ${part02}`;
    },
  },
  async created() {
    //buscando fotos do anuncio para a listagem nos cards
    this.photo_link = `photo/filenames/announcement/${this.advertiser.id}`;
    const http = new ApiService(this.photo_link);
    let response = await http.getList();
    this.photo_list = response.data;

    // this.photo_link = this.photo_list[0].filename;
    window.console.log(this.photo_list[0].filename);
  },
};
</script>
<style scoped>
</style>