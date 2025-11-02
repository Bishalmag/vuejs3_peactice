<script setup>
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