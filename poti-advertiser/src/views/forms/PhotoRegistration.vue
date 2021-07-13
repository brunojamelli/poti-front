<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <v-card-text>
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Adicione fotos ao seu anúncio"
        prepend-icon="mdi-camera"
        label="Foto"
      ></v-file-input>
      <v-card-actions class="justify-center">
        <v-btn
          style="width: 250px"
          large
          dark
          color="success"
          @click.prevent="submit"
        >
          Cadastrar
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "PhotoRegistration",
  data: () => ({
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "As fotos do anuncio não pode ter mais de 2MB",
    ],
  }),
  created() {
    this.$store.commit("setTitle", "Cadastro de Fotos");
  },
  methods: {
    async submit(evt) {
      evt.preventDefault();
    //   http.create(this.form);
      // this.$alert("Espaço Cadastrado.", "Sucesso", "success");
      alert("foto salva com sucesso !!");
    //   this.$router.push("/cadastro-fotos");
    },
  },
};
</script>

<style scoped>
</style>