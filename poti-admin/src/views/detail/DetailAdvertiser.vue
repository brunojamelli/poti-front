<template>
  <div>
    <!-- {{ advertiser }} -->
    <div class="teste">
      <!-- <div class="grid-container">
        <Card
          class="grid-item"
          v-for="item in photo_list"
          :key="item.id"
          style="width: 22rem; margin-bottom: 1em"
        >
          <template #content>
            <img
              class="ads-reader"
              alt="user header"
              :src="'http://localhost:3333/photo/' + `${item.filename}`"
            />
          </template>
        </Card>
      </div> -->
      <v-row>
        <v-col v-for="photo in photo_list" :key="photo" class="d-flex child-flex" cols="6">
          <v-img
            :src="`http://localhost:3333/photo/${photo.filename}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
      <Card>
        <!-- <template #header>
          <img
            class="ads-reader"
            alt="user header"
            src="http://localhost:3333/photo/1620690041851 - postrock-fluxo.jpg"
          />
        </template> -->
        <template #title>
          <div id="ad-title">{{ advertiser.title }}</div>
        </template>
        <template #subtitle>
          <div id="ad-value">
            {{ advertiser.value }} R$ - {{ advertiser.category }}
          </div>
        </template>
        <template #content>
          <div id="ad-description">{{ advertiser.description }}</div>
        </template>

        <template #footer> </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Card from "primevue/card";
import ApiService from "../../utils/ApiService";

export default {
  name: "DetailAdvertiser",
  data: () => ({
    photo_list: [],
    photo_link: "",
    first_file: "",
  }),
  props: ["advertiser"],
  components: {
    Card,
  },
  async created() {
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
.ads-reader {
  width: 40%;
  height: 40%;
  margin-top: 10px;
}
.teste {
  margin-top: 3%;
  margin-left: 25%;
  margin-right: 25%;
}
#ad-title {
  text-align: left;
}

#ad-value {
  text-align: left;
}
#ad-description {
  text-align: left;
}
</style>