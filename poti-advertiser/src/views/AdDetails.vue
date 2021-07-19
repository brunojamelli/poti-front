<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <h2 class="text-center">Detalhes Anúncio</h2>
    <br />
    <v-card-text>
      <div>{{ advertiser.createdAt }}</div>
      <p class="text-h4 text--primary">{{ advertiser.title }}</p>
      <p class="text-h5 text--primary">R$ {{ advertiser.value }}</p>
      <p v-if="advertiser.quantity == 0" class="text-h5 text--primary">
        Quantidade não Informada
      </p>
      <p v-else class="text-h5 text--primary">
        {{ advertiser.quantity }} Unidades
      </p>

      <div class="text--primary">
        {{ advertiser.description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "AdDetails",
  props: ["advertiser"],
};
</script>
<style scoped>
</style>