<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const tasks = ref([]);
const taskSIngolar = ref([]);
const elementStore = ref({
  name: "",
  is_completed: false,
});

const fetchTasks = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/v1/tasks/");
    tasks.value = res.data;
  } catch (err) {
    console.log(err);
  }
};
const oneTask = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/v1/tasks/1");
    taskSIngolar.value = res.data;
  } catch (err) {
    console.log(err);
  }
};
// ci deve essere il value se no laravel non vede l'oggetto
const storeTask = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/tasks",
      elementStore.value
    );
    fetchTasks();
  } catch (err) {
    console.log(err);
  }
};
const updateTask = async () => {
  try {
    const res = await axios.patch(
      "http://localhost:8000/api/v1/tasks/1",
      taskSIngolar.value
    );
    fetchTasks();
  } catch (err) {
    console.log(err);
  }
};
const deleteTask = async () => {
  try {
    const res = await axios.delete(
      "http://localhost:8000/api/v1/tasks/1",
      taskSIngolar
    );
    fetchTasks();
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  fetchTasks();
  oneTask();
});
</script>


<template>
  <div>
    <h2>Tutti i task</h2>
    <div v-for="(task, index) in tasks" :key="index">
      <p>
        {{ task.name }}
      </p>
    </div>
  </div>
  <div>
    <h2>show</h2>
    <div>
      <p>
        {{ taskSIngolar.name }}
      </p>
    </div>
  </div>
  <div>
    <h2>store</h2>
    <div>
      <input type="text" v-model="elementStore.name" />
      <button @click="storeTask">crea</button>
    </div>
  </div>
  <div>
    <h2>modify/update</h2>
    <div>
      <input type="text" v-model="taskSIngolar.name" />
      <button @click="updateTask">modifica</button>
    </div>
  </div>
  <div>
    <h2>delete</h2>
    <div>
      <button @click="deleteTask">elimina primo task</button>
    </div>
  </div>
</template>
  

<style scoped>
</style>
