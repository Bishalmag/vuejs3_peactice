<template>
    <div>
        <h3>{{ name }}</h3>
        <p>Age: {{ age }}</p>
    </div>
</template>
<script setup>
defineProps(['name', 'age'])
</script>