<template>
  <v-card class="mx-auto" max-width="500" style="margin-top: 20px">
    <v-card-text>
      <h2 class="text-center">
        Informe o email da sua conta para alterar a senha
      </h2>

      <v-form ref="form" v-model="isValid">
        <v-text-field
          v-model="form.email"
          :rules="rules.emailRules"
          label="E-mail"
          required
          error-count="2"
        ></v-text-field>

        <v-card-actions class="justify-center">
          <v-btn
            style="width: 250px"
            large
            color="success"
            @click.prevent="changePassword"
            :disabled="!isValid"
          >
            Alterar Senha
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import ApiService from "../../utils/ApiService";
const http = new ApiService("forgot-password");

export default {
  name: "ResetPassword",
  data: () => ({
    form: {
      email: "",
    },
    isValid: true,
    rules: {
      required: (value) => !!value || "Required.",
      emailRules: [
        (v) => !!v || "Email é obrigatório",
        (v) => /.+@.+/.test(v) || "Email tem que ser válido",
      ],
    },
  }),
  methods: {
    async changePassword(evt) {
      evt.preventDefault();
      const text =
        "Caro anunciante, caso este email esteja cadastrado na plataforma, nele você recebera a sua nova senha";
      let obj = { email: this.form.email };
      try {
        let response = await http.create(obj);
        window.console.log(response);
        this.$alert(text, "Concluido", "success");
        this.$router.push("/entrar");
      } catch (error) {
        this.$alert(text, "Concluido", "success");
        this.$router.push("/entrar");
      }
    },
  },
};
</script>