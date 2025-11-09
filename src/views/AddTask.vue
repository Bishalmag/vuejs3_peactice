<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const newTaskTitle = ref('')
const newTaskDesc = ref('')

// Computed tasks from Vuex store
const tasks = computed(() => store.getters.allTasks)

function addTask() {
  if (!newTaskTitle.value.trim()) return alert('Enter a task title!')
  store.dispatch('addTask', { title: newTaskTitle.value, description: newTaskDesc.value })
  newTaskTitle.value = ''
  newTaskDesc.value = ''
}

function toggleTask(taskId) {
  store.dispatch('toggleTask', taskId)
}

function deleteTask(taskId) {
  store.dispatch('deleteTask', taskId)
}
</script>

<template>
  <div>
    <h2>Add a New Task</h2>
    <input v-model="newTaskTitle" placeholder="Task title" />
    <input v-model="newTaskDesc" placeholder="Task description" />
    <button @click="addTask">Add Task</button>

    <h3>Task List</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.title }}
        </span>
        <button @click="toggleTask(task.id)">
          {{ task.completed ? 'Undo' : 'Done' }}
        </button>
        <button @click="deleteTask(task.id)">Delete</button>
        <router-link :to="`/task/${task.id}`">View Details</router-link>
      </li>
    </ul>
  </div>
</template>
