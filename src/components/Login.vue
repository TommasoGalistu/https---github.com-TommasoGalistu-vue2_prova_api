<script setup>
// import axios from "axios";
// import { ref } from "vue";

// const tasks = ref([]);

// const user = ref({
//   email: "",
//   password: "",
// });

// const login = async () => {
//   try {
//     // Ottieni il cookie CSRF prima di fare il login
//     await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
//       withCredentials: true,
//     });

//     // Fai il login e aspetta che la richiesta sia completata
//     await axios.post(
//       "http://localhost:8000/api/login",
//       {
//         email: user.value.email,
//         password: user.value.password,
//       },
//       {
//         withCredentials: true, // Permette di inviare i cookie
//       }
//     );

//     alert("Login completato");

//     // Dopo il login, chiama allPost per recuperare i task
//     // await allPost(); // Assicurati che la funzione allPost venga chiamata dopo il login
//   } catch (error) {
//     console.error("Errore durante il login:", error);
//   }
// };

// const allPost = async () => {
//   try {
//     const res = await axios.get("http://localhost:8000/api/v2/tasks", {
//       withCredentials: true,
//     });
//     tasks.value = res.data;
//     console.log(tasks.value);
//   } catch (err) {
//     console.log(err);
//   }
// };
</script>

<template>
  <h2>Login</h2>
  <!-- <form @submit.prevent="login">
    <input type="email" placeholder="email" v-model="user.email" />
    <input type="password" placeholder="password" v-model="user.password" />
    <button type="submit">submit</button>
  </form>

  <div>
    <h2>Tutti i task</h2>
    <p>{{ tasks }}</p>
  </div> -->
</template>

<style scoped>
</style>