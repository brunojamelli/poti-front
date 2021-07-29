<template>
  <div>
    <v-img
      v-if="photo_list.length > 0"
      :src="`http://localhost:3333/photo/${first_file}`"
      :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
      
      height="180"
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
    <v-img
      v-else
      height="180"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
  </div>
</template>
<script>
import ApiService from "../utils/ApiService";
let http = {};
export default {
  name: "AnnouncementImage",
  props: ["announcement"],
  data: () => ({
    photo_list: [],
    first_file: "",
  }),
  async created() {
    // window.console.log(this.announcement);
    //buscando fotos do anuncio para a listagem nos cards
    let photo_link = `photo/filenames/announcement/${this.announcement.id}`;
    http = new ApiService(photo_link);
    let response = await http.getList();
    this.photo_list = response.data;

    // this.photo_link = this.photo_list[0].filename;
    // window.console.log(this.photo_list[0].filename);
    this.first_file = this.photo_list[0].filename;
  },
};
</script>


