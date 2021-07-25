<template>
  <div class="home">
    <h2>Bem Vindo</h2>

    <div class="grid-container">
      <Card
        class="grid-item"
        v-for="item in an_list"
        :key="item.id"
        style="width: 22rem; margin-bottom: 1em"
      >
        <template #header>
          <AnnouncementImage :announcement="item"></AnnouncementImage>
        </template>
        <template #title>
          <div class="item-title">
            {{ item.title }}
          </div>
        </template>
        <template #content>
          <p>
            {{ item.description }}
          </p>
        </template>
        <template #subtitle> <b> R$ </b>{{ item.value }} </template>
        <template #footer>
          <Button
            v-if="!item.valid"
            class="p-button-warning"
            icon="pi pi-check"
            label="Validar"
            @click="adValitation(item)"
          />
          <Button v-else label="Validado" class="p-button-success" />
          <Button
            icon="pi pi-eye"
            label="Detalhes"
            class="p-button-secondary"
            style="margin-left: 0.5em"
            @click="sendToDetail('detalhes-anuncio', item)"
          />
        </template>
      </Card>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Card from "primevue/card";
import ApiService from "../utils/ApiService";
import Button from "primevue/button";
import AnnouncementImage from "../components/AnnouncementImage.vue";

const http = new ApiService("announcement");
export default {
  name: "Home",
  components: {
    Card,
    Button,
    AnnouncementImage
  },
  data: () => ({
    an_list: null,
    photo_links: [],
  }),
  methods: {
    sendToDetail(where, data) {
      this.$router.push({ name: where, params: { advertiser: data } });
    },
    async adValitation(object) {
      const service = new ApiService("announcement/validation");
      let response = service.patch(object.id);
      window.console.log(response);
      alert("validado");
      let index = this.an_list.indexOf(object);
      this.an_list[index].valid = true;
    },
  },
  async created() {
    this.an_list = [];
  },
  async mounted() {
    let response = await http.getList();
    this.an_list = response.data;
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  margin-left: 3%;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: left;
}
.home {
  /* margin-left: 3%; */
  /* margin-right: 50%; */
}
</style>