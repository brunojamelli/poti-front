<template>
  <v-row justify="center" class="text-center" style="margin-top: 100px">
    <v-col cols="12" sm="10" md="8" lg="5">
      <v-card ref="form" elevation="2" outlined>
        <v-card-title>
          <v-card-text class="text-h4">Potianuncios</v-card-text>
        </v-card-title>

        <div v-if="!valid">
          <v-alert color="red" dense outlined>Credenciais inválidas.</v-alert>
        </div>

        <v-card-text>
          <v-text-field
            v-model="form.email"
            label="Email"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Senha"
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-row align="center" justify="center">
            <v-btn @click="login" dark color="blue" style="width: 200px;margin-bottom: 40px; margin-right: 2%" large class="justify-center">
              <!-- style="width: 200px; margin-bottom: 40px; margin-right: 2%" -->
              Entrar
            </v-btn>

            <v-btn
              @click="register"
              dark
              large
              color="blue"
              style="width: 200px;margin-bottom: 40px; margin-right: 2%"
            >
              <!-- style="width: 200px; margin-bottom: 40px; margin-left: 2%" -->
              Cadastre-se
            </v-btn>

            <a @click="forgotPassword" style="width: 200px;">Esqueceu a senha?</a>

            <!-- <v-btn class="ma-2" outlined color="blue">
              esqueci minha senha
            </v-btn> -->
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import ApiService from "../../utils/ApiService";
// const http = new ApiService("forgot-password");

export default {
  name: "Login",

  components: {},
  data: () => ({
    show1: false,
    valid: true,
    form: { email: "", password: "" },
  }),
  methods: {
    login: function () {
      this.$store
        .dispatch("login", this.form)
        .then(() => this.$router.push("/"))
        .catch(() => (this.valid = false));
    },
    register() {
      this.$router.push("/registro-anunciante");
    },
    forgotPassword() {
      this.$router.push("/alterar-senha");
    },
  },
};
</script>
<style scoped>
</style>