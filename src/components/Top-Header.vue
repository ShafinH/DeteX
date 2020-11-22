<template>
  <nav class="navbar stick-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" style="margin-right: 125px">Name</a>

    <ul class="navbar-nav router-style">
      <li class="nav-item">
        <router-link class="nav-link" to="/diagnose">Diagnose</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/past_diagnoses"
          >Past Diagnoses</router-link
        >
      </li>
    </ul>

    <div class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/symptoms">Symptoms</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/map">Map</router-link>
      </li>
      <a class="nav-link text-white" href="#">{{ username }}</a>
      <button v-if="loggedIn" class="btn text-white" @click="signOut">
        Sign Out
      </button>
      <button v-else class="btn text-white" type="button" @click="oneOrTwo">
        <router-link class="text-white" to="/" v-if="loginOrRegister == true"
          >Sign In / Register</router-link
        >
        <router-link v-else class="text-white" to="/register"
          >Sign In / Register</router-link
        >
      </button>
    </div>
  </nav>
</template>
    
<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        this.username = user.email;
      } else {
        this.loggedIn = false;
        this.username = "";
      }
    });
  },
  data() {
    return {
      loggedIn: false,
      username: "",
      loginOrRegister: true,
    };
  },

  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "Login" });
      } catch (err) {
        console.log(err.message);
      }
    },
    oneOrTwo() {
      if (this.loginOrRegister == false) {
        this.loginOrRegister = true;
      } else {
        this.loginOrRegister = false;
      }
    },
  },
};
</script>

<style  scoped>
* {
  font-family: "Poppins", sans-serif;
}
.navbar-nav a.router-link-exact-active {
  color: #42b983;
}

.btn {
  background-color: #42b983;
}
.btn:hover {
  background: rgb(30, 126, 52);
}
#router-link {
  text-decoration: none;
}
</style>