<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div>
    <p v-for="(people, index) in peoples" :key="index" v-on:click="toggleClass">
      {{ index + 1 }}: My name is {{ people.name }} and surname
      {{ people.surname }}. I work at company called {{ people.company }}
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    toggleClass: function (e) {
      e.target.classList.toggle("active");
    },
  },
  data() {
    return {
      isActive: false,
      peoples: [
        {
          name: "Emir",
          surname: "Abdrazakov",
          age: "20",
          company: "CCC",
        },
        {
          name: "Warner",
          surname: "Brosers",
          age: "100",
          company: "CinemaTV",
        },
        {
          name: "Das",
          surname: "Doe",
          age: "17",
          company: "Microsoft",
        },
      ],
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p {
  cursor: pointer;
}
.active {
  color: red;
  border: 1px solid red;
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
