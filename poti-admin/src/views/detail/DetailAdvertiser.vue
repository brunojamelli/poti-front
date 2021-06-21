<template>
  <div>
    <!-- {{ advertiser }} -->
    <div class="teste">
      <Card>
        <template #header>
          <img
            class="ads-reader"
            alt="user header"
            src="../../assets/logo.png"
          />
        </template>
        <template #title>
          <div>{{ advertiser.title }}</div>
        </template>
        <template #subtitle>
          <p>{{ advertiser.value }} R$ - {{ advertiser.category }}</p>
        </template>
        <template #content>
          {{ advertiser.description }}
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

export default {
  name: "DetailAdvertiser",
  props: ["advertiser"],
  components: {
    Card,
  },
};
</script>

<style scoped>
.ads-reader {
  width: 10%;
  height: 10%;
  margin-top: 10px;
}
.teste {
  margin-top: 3%;
  margin-left: 15%;
  margin-right: 15%;
}
</style>