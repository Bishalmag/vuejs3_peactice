<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

const route = useRoute()
const store = useStore()
const taskId = Number(route.params.id)

const task = computed(() => store.getters.getTaskById(taskId))
</script>

<template>
  <div>
    <h2>Task Details</h2>
    <div v-if="task">
      <p>ID: {{ task.id }}</p>
      <p>Title: {{ task.title }}</p>
      <p>Description: {{ task.description }}</p>
      <p>Status: {{ task.completed ? 'Completed' : 'Pending' }}</p>
    </div>
    <div v-else>
      <p>Task not found!</p>
    </div>
    <router-link to="/addtask">⬅ Back to Task List</router-link>
  </div>
</template>
