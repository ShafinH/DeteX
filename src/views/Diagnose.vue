<template>
  <div id="app" style="margin-bottom: 100px">
    <h3>
      Diagnose an x-ray scan as Viral or Bacterial Pneumonia, Covid-19, or None
    </h3>
    <hr />
    <label>Upload File: </label>
    <input type="file" @change="previewImage" style="margin-left: 10px" />
    <div v-if="imageData != null">
      <img
        class="preview"
        :src="picture"
        id="predict_picture"
        crossorigin="anonymous"
      />
      <br />

      <button class="btn" @click="onUpload">Upload</button>
    </div>
    <hr />
    <div v-if="picture != null" style="margin-top: 15px">
      <button class="btn" @click="getPrediction">Get Diagnosis</button>
      <br />

      <h2 style="margin-top: 10px">Results:</h2>

      <div id="label-container" style="margin-top: 10px"></div>
      <hr />

      <form
        @submit.prevent="addDiagnosis"
        v-if="loadForm == true"
        style="margin-top: 25px"
      >
        <h2 style="padding-bottom: 15px">Add Diagnosis</h2>

        <label>Patient Name: </label>
        <br />
        <input type="text" v-model="name" required /> <br />

        <label>Patient DOB: </label>
        <br />
        <input type="text" v-model="dob" required /> <br />

        <label style="margin-top: 5px">Diagnosis: </label>
        <br />
        <input type="text" v-model="diagnosis" required /> <br />

        <label style="margin-top: 5px">Date: </label>
        <br />
        <input type="text" v-model="date" required /> <br />
        <button class="btn bg-dark text-white" style="margin-top: 15px">
          Submit
        </button>
      </form>
    </div>

    <center>
      <div
        class="bg-success"
        style="width: 25%; margin-top: 15px"
        v-if="diagnosisAdded"
      >
        Diagnosis has been added!
      </div>
    </center>
  </div>
</template>

<script>
import firebase from "firebase";
// import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

export default {
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      name: "",
      diagnosis: "",
      date: "",
      dob: "",
      diagnosisAdded: false,
      loadForm: false,
      URL: "https://teachablemachine.withgoogle.com/models/_apQwTNo8/",
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    },

    async getPrediction() {
      let model, labelContainer, maxPredictions;

      const modelURL = this.URL + "model.json";
      const metadataURL = this.URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      console.log(model);

      maxPredictions = model.getTotalClasses();

      const img = document.getElementById("predict_picture");

      console.log(img);
      console.log("hereFIrst");

      console.log(this.picture);

      labelContainer = document.getElementById("label-container");
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }
      async function predict() {
        const prediction = await model.predict(img);
        for (let i = 0; i < maxPredictions; i++) {
          const classPrediction =
            prediction[i].className +
            ": " +
            prediction[i].probability.toFixed(2) * 100 +
            "%";
          labelContainer.childNodes[i].innerHTML = classPrediction;
        }
        console.log(img.src);
      }

      predict();
      this.loadForm = true;
    },

    addDiagnosis() {
      if (this.name && this.diagnosis && this.date && this.dob) {
        firebase.firestore().collection("diagnosis").add({
          name: this.name,
          diagnosis: this.diagnosis,
          date: this.date,
          dob: this.dob,
          image: this.picture,
        });
        (this.name = ""),
          (this.diagnosis = ""),
          (this.date = ""),
          (this.dob = ""),
          (this.diagnosisAdded = true);
      } else {
        alert("You must enter the name, diagnosis, and the date");
      }
    },
  },
};
</script>

<style scoped>
img.preview {
  width: 500px;
  margin-bottom: 20px;
  margin-top: 15px;
}
.btn {
  background-color: #42b983;
}
.btn:hover {
  background: rgb(30, 126, 52);
}
</style>