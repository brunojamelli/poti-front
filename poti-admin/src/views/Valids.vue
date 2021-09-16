<template>
  <div>
    <h2>Anúncios Validos</h2>
    <div class="grid-container" v-if="valids.length > 0">
      <Card
        class="grid-item"
        v-for="item in valids"
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
    <div v-else>
      <h3>Ainda não tem anúncios validados</h3>
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
import ApiService from "../utils/ApiService";
const http = new ApiService("announcement/by_validation");
import Card from "primevue/card";
import Button from "primevue/button";
import AnnouncementImage from "../components/AnnouncementImage.vue";

export default {
  name: "Valids",
  components: {
    Card,
    Button,
    AnnouncementImage,
  },
  data: () => ({
    valids: null,
  }),
  async created() {
    this.valids = [];
  },
  async mounted() {
    const params = new URLSearchParams({
      isValid: 1,
    }).toString();

    const response = await http.getListWithParams(params);
    this.valids = response.data;
  },
  methods: {
    sendToDetail(where, data) {
      this.$router.push({ name: where, params: { advertiser: data } });
    },
  },
};
</script>