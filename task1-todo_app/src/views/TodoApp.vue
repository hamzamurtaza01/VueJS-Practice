<template>
    <TodoList v-if="todos.length" :todos="todos" @delete-todo="deleteTodo" />
    <p v-else>There are no items to display!</p>

    <div class="form-container">
        <input type="text" :value="text" @input="handleTextChange" />
        <button @click="() => addTodo(text)">Add Todo</button>
    </div>
</template>

<script>
import TodoList from "../components/TodoList.vue"

export default {
    name: "TodoApp",

    components: {
        TodoList
    },

    data() {
        return {
            todos: [
                {
                    id: 1,
                    title: "drink water"
                }
            ],
            text: ""
        }
    },

    methods: {
        handleTextChange(e) {
            const value = e.target.value
            this.text = value
        },

        addTodo(text) {
            const id = this.todos.length + 1
            const newTodo = { id, title: text }
            this.todos.push(newTodo)
            this.text = ""
        },

        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id)
        }
    }
}
</script>
