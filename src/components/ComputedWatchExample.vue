<script setup>
import { ref, reactive, computed, watch } from 'vue'


const users = reactive([
  { name: "Bishal", age: 22 },
  { name: "Raj", age: 20 },
  { name: "Sandesh", age: 25 },
  { name: "Salin", age: 19 },
])


const newUserName = ref("")
const newUserAge = ref(0)

function addUser() {
  if (newUserName.value && newUserAge.value > 0) {
    users.push({ name: newUserName.value, age: newUserAge.value })
    newUserName.value = ""
    newUserAge.value = 0
  }
}

const totalAge = computed(() => users.reduce((sum, u) => sum + u.age, 0))
const averageAge = computed(() => 
  users.length ? (totalAge.value / users.length).toFixed(1) : 0
)

watch(users, (newVal, oldVal) => {
  console.log("User list changed:", newVal)
}, { deep: true })


watch(totalAge, (newVal, oldVal) => {
  console.log(`Total age changed from ${oldVal} to ${newVal}`)
})
</script>

<template>
  <div class="container">
    <h2>Day 20: Computed Properties & Watchers Example</h2>

    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }} (Age: {{ user.age }})
      </li>
    </ul>

    <h4>Total Age: {{ totalAge }}</h4>
    <h4>Average Age: {{ averageAge }}</h4>

    <div class="add-user">
      <input v-model="newUserName" placeholder="Enter name" />
      <input v-model.number="newUserAge" type="number" placeholder="Enter age" />
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 2px solid #42b983;
  border-radius: 12px;
  padding: 15px;
  max-width: 400px;
  margin: 20px auto;
  background: #f0fff4;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.add-user {
  margin-top: 10px;
}
.add-user input {
  margin-right: 5px;
  padding: 5px;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #369e6f;
}
</style>
