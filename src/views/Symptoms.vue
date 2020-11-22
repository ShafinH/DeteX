<template>
  <h4 style="line-height: 125%">
    Enter your symptoms in order to figure out whether you have Covid or<br />
    Pnuemoia, and what your next steps should be
  </h4>
  <hr style="margin-top: 50px" />
  <div style="margin-top: 50px">
    <form @submit.prevent="diagnose">
      <input
        v-model="symptoms"
        id="symptoms"
        placeholder="Enter Your Symptoms"
      />
      <button class="button">Submit</button>
    </form>

    <div
      v-if="load == true"
      style="
        margin-top: 25px;
        padding-right: 250px;
        padding-left: 250px;
        line-height: 250%;
      "
    >
      <div v-if="positive == true">
        <p>
          You may have Pneumonia or Covid. However, based on your symptoms we
          are unable to identify which one. If you want to learn more about your
          symptoms and what you might have click
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
            target="_blank"
            >here</a
          >. If you would like to get tested or find hospitals near you go to
          our <router-link to="/map">Map</router-link> section to learn more.
        </p>
      </div>
      <div v-else>
        Our algorithim has concluded you are unlikely to have Pneumonia or
        Covid-19. However, if you would like to learn more about the symptomns,
        click here, and if you would like to get tested or find hospitals near
        you go to our <router-link to="/map">Map</router-link> section.
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      symptoms: "",
      positive: false,
      load: false,
      substring: "chills",
    };
  },

  methods: {
    diagnose() {
      this.symptoms.toLowerCase();
      if (
        this.symptoms.includes(this.substring) ||
        this.symptoms.includes(this.substring2)
      ) {
        this.positive = true;
      } else {
        this.positive = false;
      }
      this.load = true;
      this.symptoms = "";
    },
  },
};
</script>

<style scoped>
input {
  height: 35px;
}
.button {
  background-color: #42b983;
  height: 35px;
  border-color: #42b983;
}
.button:hover {
  background: rgb(30, 126, 52);
  border-color: rgb(30, 126, 52);
}
</style>