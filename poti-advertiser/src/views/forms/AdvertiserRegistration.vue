<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <v-card-text>
      <h2 class="text-center">Cadastro</h2>

      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="form.name"
          :counter="10"
          :rules="[(v) => !!v || 'Nome é de preenchimento obrigatório']"
          label="Nome"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.email"
          :rules="[(v) => !!v || 'Email é de preenchimento obrigatório']"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          label="Senha"
          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (value = !value)"
          :type="value ? 'password' : 'text'"
          :rules="[rules.password]"
          required
        ></v-text-field>
        <v-btn large rounded dark color="success" @click.prevent="submit">
          Cadastrar
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "AdvertiserRegistration",
  components: {},
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
    },
    valid: true,
    value: true,
    rules: {
      required: (value) => !!value || "Required.",
      password: (value) => {
        const pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
        return (
          pattern.test(value) ||
          "Min. 8 characters with at least one capital letter, a number and a special character."
        );
      },
    },
  }),
  created() {
    this.$store.commit("setTitle", "Cadastro de Anunciante");
  },
};
</script>
<style scoped>
</style>