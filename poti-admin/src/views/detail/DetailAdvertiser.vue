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