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
      <v-card-text>
        <p v-if="photo_list.length == 0" class="text-h5 text--primary">
          {{ empty_ad }}
        </p>
      </v-card-text>
    </div>
    <!-- {{ announcement }} -->
  </v-card>
</template>
<script>
import ApiService from "../utils/ApiService";
// let http = {};

export default {
  name: "PublicAdDetails",
  props: ["announcement"],
  data: () => ({
    photo_list: [],
    photo_link: "",
    // first_file: "",
    empty_ad: "O anúncio ainda não conta com fotos disponiveis",
  }),
  methods: {
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
    this.photo_link = `photo/filenames/announcement/${this.announcement.id}`;
    const http = new ApiService(this.photo_link);
    let response = await http.getList();
    this.photo_list = response.data;

    this.photo_link = this.photo_list[0].filename;
    window.console.log(this.photo_list[0].filename);
    this.$store.commit("setTitle", "");
  },
};
</script>