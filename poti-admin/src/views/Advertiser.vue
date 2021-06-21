<template>
  <div>
    <h2>Anunciantes cadastrados na plataforma</h2>
    <div class="grid-container">
      <Card
        class="grid-item"
        v-for="item in advertisers"
        :key="item.id"
        style="width: 22rem; margin-bottom: 1em"
      >
        <template #title>
          <div class="item-title">
            {{ item.name }}
          </div>
        </template>
        <template #content>
          <p>
            {{ item.whatsapp }}
          </p>
          <!-- <p>
            {{ formatPhone(item.whatsapp) }}
          </p> -->
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import Card from "primevue/card";
import ApiService from "../utils/ApiService";
const http = new ApiService("advertiser");
export default {
  name: "Advertiser",
  components: {
    Card,
  },
  data: () => ({
    advertisers: null,
  }),
  methods: {
    formatPhone(str) {
      return str
        .replace(/\D/g, "")
        
        .substring(0, 16)
        .trim();
    },
  },
  async created() {
    this.advertisers = [];
  },
  async mounted() {
    let response = await http.getList();
    this.advertisers = response.data;
  },
};
</script>