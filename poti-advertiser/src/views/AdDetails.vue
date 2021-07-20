<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <h2 class="text-center">Detalhes Anúncio</h2>
    <v-row>
      <v-col
        v-for="photo in photo_list"
        :key="photo"
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
    <br />
    <v-card-text>
      <div>{{ advertiser.createdAt }}</div>
      <p class="text-h4 text--primary">{{ advertiser.title }}</p>
      <p class="text-h5 text--primary">R$ {{ advertiser.value }}</p>
      <p v-if="advertiser.quantity == 0" class="text-h5 text--primary">
        Quantidade não Informada
      </p>
      <p v-else class="text-h5 text--primary">
        {{ advertiser.quantity }} Unidades
      </p>

      <div class="text--primary">
        {{ advertiser.description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
    </v-card-actions>
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
  }),
  methods: {},
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