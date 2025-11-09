<script setup>
<<<<<<< HEAD
import { ref, onMounted} from "vue";
import UserCard from "./components/UserCard.vue";
const message =ref('Hello from Vue.js 3!')
const count=ref(0)
function increment() {
  count.value++
}
onMounted(()=>{
  console.log(`The initial count is ${count.value}`)
})

// Directives and Data Binding
 const title=ref('Vue Directives Example')
 const showDetails=ref(true)
 function toggleDetails(){
  showDetails.value = !showDetails.value
 }

</script>
<template>
  <h1>{{ message }}</h1>
  <button @click="increment">Count is :{{ count }}</button>
  <h1>Directives and data binding</h1>
  <div>
  <h1>{{ title }}</h1>
  <p v-if="showDetails">This is shown conditionally!</p>
  <button @click="toggleDetails">Toggle Details</button>
  <input v-model="title" placeholder="Edit title">
  </div>
<!-- component example -->
  <div id="day3-component">
   <h1>My App</h1>
   <UserCard name="Bishal" age="23" />
  </div>
  <!-- routing example -->
  <div id="day4-routing">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">about</router-link>
    </nav>
      <router-view/>
  </div> 
  <!-- vuex counter example -->
  <div id="vuex-day5">
    <p>Count: {{ $store.state.count }}</p>
    <button @click="$store.commit('increment')">Increment</button>
  </div>

</template>
=======
import { ref, reactive, computed, watch, onMounted } from "vue";
import UserCard from "./components/UserCard.vue";
import Userlist from "./components/Userlist.vue";

const message = ref("Hello from Vue.js 3!");
const count = ref(0);

function increment() {
  count.value++;
}

onMounted(() => {
  console.log(`Initial count: ${count.value}`);
});


const title = ref("Vue Directives Example");
const showDetails = ref(true);

function toggleDetails() {
  showDetails.value = !showDetails.value;
}

const users = reactive([
  { name: "Bishal", age: 22 },
  { name: "Kumar", age: 25 },
  { name: "Asha", age: 20 },
]);

function incrementAge(index) {
  users[index].age++;
}


const newUserName = ref("");
const newUserAge = ref(0);

function addUser() {
  if (newUserName.value && newUserAge.value) {
    users.push({ name: newUserName.value, age: newUserAge.value });
    newUserName.value = "";
    newUserAge.value = 0;
  }
}
function deleteTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}


const totalAge = computed(() => users.reduce((sum, u) => sum + u.age, 0));

watch(users, (newVal, oldVal) => {
  console.log("Users updated:", newVal);
}, { deep: true });

const headerText = ref("Vue Directives and Event Handling Example");
const detailsVisible = ref(true);

function toggleDetailsa() {
  detailsVisible.value = !detailsVisible.value;
}

// passing child component
 const student = {
  name: "Miles Morales",
  age: 24,
  email: "milesmorales@11gmail.com"
 }
</script>

<template>

  <h1>{{ message }}</h1>
  <button @click="increment">Count is: {{ count }}</button>

  
  <h2>Directives and Data Binding</h2>
  <div>
    <h3>{{ title }}</h3>
    <p v-if="showDetails">This is shown conditionally!</p>
    <button @click="toggleDetails">Toggle Details</button>
    <input v-model="title" placeholder="Edit title" />
  </div>


  <div>
    <h2>Parent to Child Component</h2>
    <UserCard name="Bishal" age="23" />
  </div>

  
  <div id="app">
    <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/addtask">Add Task</router-link> |
  <router-link to="/completed">Completed</router-link> |
  <router-link to="/TaskDetails">Task Details</router-link> |
  <router-link to="/introduction">Introduction</router-link> |
  <router-link to="/computed">Computed Example</router-link>
</nav>

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

 
  <div>
    <h2>{{ headerText }}</h2>
    <button @click="toggleDetailsa">
      {{ detailsVisible ? "Hide Details" : "Show Details" }}
    </button>
    <p v-if="detailsVisible">Here are some details about the users!</p>

    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }} (Age: {{ user.age }})
        <button @click="incrementAge(index)">Increase Age</button>
      </li>
    </ul>

    <h3>Add a new user</h3>
    <input v-model="newUserName" placeholder="Enter name" />
    <input v-model.number="newUserAge" type="number" placeholder="Enter age" />
    <button @click="addUser">Add User</button>

    <h4>Total Age of Users (Computed): {{ totalAge }}</h4>
  </div>
  <div>
    <h1>Passing child component</h1>
    <Userlist :name="student.name" :age="student.age" :email="student.email" />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
>>>>>>> ab97a0a (Initial commit: Add Vue.js project files)
