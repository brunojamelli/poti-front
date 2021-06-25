<template>
  <v-app>
    <div id="menu">
      <TabMenu :model="items" />
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2%;
}
#menu {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#ads-image {
  width: 350px;
  height: 100px;
}
#logout {
  margin-left: 40%;
  margin-top: 10%;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        { label: "inicio", icon: "pi pi-fw pi-home", to: "/" },
        {
          label: "pendentes",
          icon: "pi pi-exclamation-circle",
          to: "/pendentes",
        },
        {
          label: "validados",
          icon: "pi pi-exclamation-circle",
          to: "/validados",
        },
        {
          label: "administradores",
          icon: "pi pi-shield",
          to: "/administradores",
        },
        {
          label: "anunciantes",
          icon: "pi pi-calendar",
          to: "/anunciantes",
        },
      ],
    };
  },
};
</script>