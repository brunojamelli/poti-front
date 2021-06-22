<template>
  <div>
    <p class="font-weight-black"></p>
    <h2>Cadastre um novo Administrador</h2>
    <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
      <v-card-text>
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
            :rules="[(v) => !!v || 'A senha é de preenchimento obrigatória']"
            label="Senha"
            required
          ></v-text-field>
          <v-btn
            large
            rounded
            dark
            color="success"
            @click.prevent="submit"
          >
            Cadastrar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
</style>

<script>

import ApiService from "../utils/ApiService";
const http = new ApiService("administrator");
export default {
  name: "AdministrationRegister",
  data: () => ({
    valid: true,
    form: {
      name: "",
      email: "",
      password: "",
    },
  }),

  methods: {
    
    async submit(evt) {
      evt.preventDefault();
      http.create(this.form);
      alert("cadastrado com sucesso");
      this.$router.push("/administradores");
      this.$router.push("/administradores");
    },
  },
};
</script>