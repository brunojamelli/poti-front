<template>
  <div>
    <div>
      <h2 style="text-align: center">Anúncios</h2>
      <br />
    </div>
    <v-row align="center" justify="space-around">
      <v-btn depressed> Todos </v-btn>
      <v-btn depressed color="primary"> Validos </v-btn>
      <v-btn depressed color="primary"> Ativos </v-btn>
      <v-btn depressed color="error"> Invalidos </v-btn>
      <v-btn depressed color="warning"> Inativos </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data: () => ({
    
  }),
  methods: {

  },
};
</script>
