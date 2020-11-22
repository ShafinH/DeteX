<template>
  <h2>Your Patient's Diagnoses</h2>
  <div class="content">
    <center>
      <input
        v-model="filter"
        type="text"
        placeholder="Filter by name, diagnosis, etc . . ."
        style="margin-bottom: 30px"
      />
    </center>

    <center>
      <div
        id="diagnosis-list"
        style="list-style: none"
        class="diagnosis-list"
      ></div>
    </center>
  </div>
</template>

<script>
import firebase from "firebase/";

export default {
  data() {
    return {
      diagnoses: [],
      filter: "",
    };
  },
  mounted() {
    const diagnosisList = document.querySelector("#diagnosis-list");

    // create element & render cafe
    function renderCafe(doc) {
      let li = document.createElement("ul");
      let patient = document.createElement("h2");
      let name = document.createElement("li");
      let dob = document.createElement("li");
      let diagnosis = document.createElement("li");
      let date = document.createElement("li");
      let image = document.createElement("a");
      image.href = doc.data().image;
      image.target = "_blank";

      li.setAttribute("data-id", doc.id);
      patient.textContent = "Patient";
      name.textContent = `Patient Name: ${doc.data().name}`;
      dob.textContent = `Pantient DOB: ${doc.data().dob}`;
      diagnosis.textContent = `Diagnosis: ${doc.data().diagnosis}`;
      date.textContent = `Date: ${doc.data().date}`;
      image.textContent = `Xray: image`;

      li.appendChild(patient);
      li.appendChild(name);
      li.appendChild(dob);
      li.appendChild(diagnosis);
      li.appendChild(date);
      li.appendChild(image);

      diagnosisList.appendChild(li);
    }

    // getting data
    firebase
      .firestore()
      .collection("diagnosis")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          renderCafe(doc);
        });
      });
  },
};
</script>
<style scoped>
h2 {
  align-items: center;
}
.content {
  background: rgb(86, 191, 240);
  max-width: 960px;
  margin: 30px auto;
  padding: 20px 30px;
  border-radius: 75px;
  box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
}
input {
  width: 50%;
}
input:hover {
  transition-delay: 0.05s;
  transform: scale(1.05);
}
.diagnosis-list {
  align-items: center;
}
</style>