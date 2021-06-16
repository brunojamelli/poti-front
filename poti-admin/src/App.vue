<template>
  <div id="app">
    <div id="menu">
      <TabMenu :model="items" />
    </div>
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
  margin-top: 2%;
}

#menu {
  width: 70%;
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
        }
      ],
    };
  },
};
</script>