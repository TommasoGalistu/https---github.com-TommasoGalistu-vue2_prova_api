<script setup>
// import axios from "axios"; // Assicurati che axios sia importato

// const user = {
//   name: "",
//   email: "",
//   password: "",
// };

// const register = async () => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8000/api/register",
//       user.value,
//       {
//         withCredentials: true, // Permette di includere i cookie nella richiesta
//       }
//     );

//     // Controlla se ci sono errori nella risposta dal backend
//     console.log("Risposta dal server:", response.message);

//     if (response.status !== 201) {
//       // Se il codice di stato non è 201, logga la risposta
//       console.error("Errore del server (non 201):", response.data);
//       alert("Errore durante la registrazione.");
//     } else {
//       alert("Registrazione completata");
//     }
//   } catch (error) {
//     // Questo blocco dovrebbe essere eseguito solo se c'è un errore di rete
//     console.error("Errore durante la registrazione:", error);
//   }
// };
</script>

<template>
  <h2>ciao</h2>
  <!-- <form @submit.prevent="register">
    <input type="text" placeholder="name" v-model="user.name" />
    <input type="email" placeholder="email" v-model="user.email" />
    <input type="password" placeholder="password" v-model="user.password" />
    <button type="submit">submit</button>
  </form> -->
</template>

<style scoped>
/* input {
  display: block;
  margin-bottom: 10px; */
/* } */
</style>
