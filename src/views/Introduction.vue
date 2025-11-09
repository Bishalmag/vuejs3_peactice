<template>
  <div class="intro">
    <h1>🌿 Introduction to Vue.js 3</h1>
    <p>
      Vue.js is a progressive JavaScript framework used to build user interfaces.
      It focuses on the view layer and can be easily integrated into existing projects or used to build single-page applications (SPAs).
    </p>

    <h2>🔹 Vue Instance</h2>
    <p>
      Every Vue app starts by creating a Vue instance using <code>createApp()</code>.
      It’s the root of your Vue application.
    </p>
    <pre><code>import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')</code></pre>

    <h2>🔹 Vue Lifecycle</h2>
    <p>
      Each component in Vue has a lifecycle — from creation to mounting, updating, and unmounting.
    </p>
    <ul>
      <li><b>onBeforeMount()</b> – Called before the component is added to the DOM</li>
      <li><b>onMounted()</b> – Called after the component is added to the DOM</li>
      <li><b>onUpdated()</b> – Called when reactive data changes</li>
      <li><b>onUnmounted()</b> – Called before the component is destroyed</li>
    </ul>

    <h2>🔹 Vue Data & Methods</h2>
    <p>
      In Vue 3, we use the <code>ref()</code> and <code>reactive()</code> APIs to create reactive data.
      Methods are just functions you define inside the component’s <code>&lt;script&gt;</code> block.
    </p>

    <pre><code>&lt;script setup&gt;
import { ref } from 'vue'

const message = ref('Hello Vue!')
function changeMessage() {
  message.value = 'Welcome to Vue.js 3!'
}
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;{{ message }}&lt;/p&gt;
  &lt;button @click="changeMessage"&gt;Change&lt;/button&gt;
&lt;/template&gt;
</code></pre>
  </div>
</template>

<script setup></script>

<style scoped>
.intro {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
  color: #333;
  transition: all 0.3s ease;
}

h1 {
  color: #4f46e5;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
  color: #4338ca;
}

code {
  background: #f1f3f8;
  padding: 3px 6px;
  border-radius: 6px;
  font-family: monospace;
}

pre {
  background: #1e1e2f;
  color: #e4e4e4;
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
  margin-top: 10px;
  transition: all 0.3s ease;
}

pre:hover {
  transform: scale(1.02);
}
</style>
