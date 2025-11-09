<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    name: String,
    age: Number,
    email: String

})
</script>
<template>
    <div class="user-list">
     <h3>{{ name }}</h3>
     <p>Age: {{ age }}</p>
     <p>Email: {{ email }}</p>
    </div>
</template>