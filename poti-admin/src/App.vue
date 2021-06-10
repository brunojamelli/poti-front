<template>
  <div id="app">
    <div id="menu">
      <TabMenu :model="items" />
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3%;
}

#menu {
  width: 80%;
  margin: auto;
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
</style>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Inicio", icon: "pi pi-fw pi-home", to: "/" },

        {
          label: "Gerenciar Administradores",
          icon: "pi pi-fw pi-pencil",
          to: "/tabmenu/edit",
        },
        {
          label: "Gerenciar Anunciantes",
          icon: "pi pi-fw pi-file",
          to: "/tabmenu/documentation",
        },
        {
          label: "Sobre",
          icon: "pi pi-fw pi-calendar",
          to: "/about",
        },
      ],
    };
  },
};
</script>