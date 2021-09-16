<template>
  <div>
    <v-app-bar app clipped-rigth flat color="#588E43" dark>
      <v-app-bar-nav-icon
        dark
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title dark class="text-center">{{
        $store.getters.titlePage
      }}</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn @click="logout" icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      color="#588E43"
      dark
      width="220"
    >
      <v-list nav dense>
        <v-list-item>
          <!-- <v-img src="../assets/logo.svg"></v-img> -->
          <v-img src="../assets/logo-potianuncios.jpg"></v-img>

        </v-list-item>
        <v-divider></v-divider>

        <div v-for="(item, i) in items" :key="i">
          <v-list-item
            v-if="!item.subLinks"
            @click="navegateTo(item.to)"
            :active-class="color"
            avatar
            class="v-list-item"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title" />
          </v-list-item>

          <v-list-group
            v-else
            :key="item.title"
            no-action
            :prepend-icon="item.icon"
            :value="false"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="sublink in item.subLinks"
              @click="navegateTo(sublink.to)"
              :key="sublink.text"
            >
              <v-list-item-icon>
                <v-icon>{{ sublink.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ sublink.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Meus Anuncios",
          icon: "mdi-home",
          to: "home",
        },
        // {
        //   title: "Anuncios Validados",
        //   icon: "mdi-checkbox-marked-circle ",
        //   to: "anuncios-validados",
        // },
        {
          title: "Cadastrar Anúncio",
          icon: "mdi-bookmark-plus",
          to: "registro-anuncio",
          // subLinks: [
          //   {
          //     to: "registro-anuncio",
          //     text: "Anúncio",
          //     icon: "mdi-bookmark-plus",
          //   },
          //   {
          //     to: "registro-anuncio",
          //     text: "Fotos Anúncio",
          //     icon: "mdi-bookmark-plus",
          //   },
          // ],
        },
        {
          title: "Meu Perfil",
          icon: "mdi-eye-plus",
          to: "perfil",
        },
      ],
      namePage: "Espaços",
    };
  },
  methods: {
    navegateTo(where) {
      this.$router.push({ name: where });
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push("/login"))
        .catch((err) => console.log(err));
    },
  },
};
</script>