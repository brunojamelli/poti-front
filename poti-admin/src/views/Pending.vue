<template>
  <div>
    <h2>Anúncios Pendentes</h2>
    <div class="grid-container" v-if="pendings.length > 0">
      <Card
        class="grid-item"
        v-for="item in pendings"
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
      <h3>Não tem anúncios pendentes</h3>
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
  name: "Pending",
  components: {
    Card,
    Button,
    AnnouncementImage,
  },
  data: () => ({
    pendings: null,
  }),
  async created() {
    this.pendings = [];
  },
  async mounted() {
    const params = new URLSearchParams({
      isValid: 0,
    }).toString();

    const response = await http.getListWithParams(params);
    this.pendings = response.data;
  },
  methods: {
    sendToDetail(where, data) {
      this.$router.push({ name: where, params: { advertiser: data } });
    },
    async adValitation(object) {
      const service = new ApiService("announcement/validation");
      let response = service.patch(object.id);
      window.console.log(response);
      this.$alert("Anúncio validado com sucesso", "Concluido", "success");
      let index = this.pendings.indexOf(object);
      this.pendings.splice(index, 1);
      // this.an_list[index].valid = true;
    },
  },
};
</script>