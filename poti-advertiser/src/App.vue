<template>
  <div v-if="!showMenu || !showMenu2 || !detailHide || !registerHide || !forgotHide">
    <v-app style="background-color: #d9e2eb">
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-divider style="margin: 0"></v-divider>
      <!-- <Footer></Footer> -->
    </v-app>
  </div>
  <div v-else>
    <v-app>
      <app-navbar />
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar";
// import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    AppNavbar,
    // Footer,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    showMenu() {
      return this.$route.name !== "entrar";
    },
    showMenu2() {
      return this.$route.name !== "listagem-publica";
    },
    detailHide(){
      return this.$route.name !== "detalhe-publico";
    },
    registerHide(){
      return this.$route.name !== "registro-anunciante";
    },
    forgotHide(){
      return this.$route.name !== "alterar-senha";
    }
  },
};
</script>
