<template>
<<<<<<< HEAD
    <div>
        <h3>{{ name }}</h3>
        <p>Age: {{ age }}</p>
    </div>
</template>
<script setup>
defineProps(['name', 'age'])
</script>
=======
  <div class="user-card">
    <h2>User Information</h2>
    <p><strong>Name:</strong> {{ name }}</p>
    <p><strong>Age:</strong> {{ age }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  age: Number,
  email: String
})
</script>

>>>>>>> ab97a0a (Initial commit: Add Vue.js project files)
