import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Learn Vue 3', description: 'Learn basics', completed: false },
      { id: 2, title: 'Build TaskList App', description: 'Create a full task manager', completed: true }
    ]
  },
  mutations: {
    ADD_TASK(state, task) {
      const id = state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1
      state.tasks.push({ id, title: task.title, description: task.description || '', completed: false })
    },
    TOGGLE_TASK(state, taskId) {
      const task = state.tasks.find(t => t.id === taskId)
      if (task) task.completed = !task.completed
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(t => t.id !== taskId)
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task)
    },
    toggleTask({ commit }, taskId) {
      commit('TOGGLE_TASK', taskId)
    },
    deleteTask({ commit }, taskId) {
      commit('DELETE_TASK', taskId)
    }
  },
  getters: {
    allTasks: state => state.tasks,
    getTaskById: state => id => state.tasks.find(t => t.id === id),
    completedTasks: state => state.tasks.filter(t => t.completed)
  }
})
