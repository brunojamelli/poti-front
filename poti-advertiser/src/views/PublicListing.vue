<template>
  <div>
    <div>
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
          @click="clickDetails('detalhe-publico',item)"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <AnnouncementImage :announcement="item"></AnnouncementImage>

          <v-card-title >
            {{ item.title }}
          </v-card-title>

          <v-card-text>
            <div class="my-4 text-subtitle-1">
              <b>R$ {{ item.value }} •</b>
            </div>
          </v-card-text>
          <v-card-text>
            <AnnouncementContact :data="item"></AnnouncementContact>
          </v-card-text>
        </v-card>
      </v-row>
    </div>
    <v-row> </v-row>
  </div>
</template>
<script>
import AnnouncementImage from "../components/AnnouncementImage.vue";
import AnnouncementContact from "../components/AnnouncementContact.vue";

import ApiService from "../utils/ApiService";
let http = {};
export default {
  name: "PublicListing",
  components: {
    AnnouncementImage,
    AnnouncementContact,
  },
  data: () => ({
    title: "",
    announcements: [],
  }),
  async created() {
    http = new ApiService("announcements/public");
    let result = await http.getList();
    this.announcements = result.data;
    window.console.log(this.announcements);
  },
  methods:{
    clickDetails(where, data){
      // this.$router.push("detalhe-publico");
      this.$router.push({ name: where, params: { announcement: data } });
    }
  }
};
</script>

<style scoped>
</style>