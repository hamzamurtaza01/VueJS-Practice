<template>
    <div class="todo-list-container">
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @delete-todo="(id) => this.$emit('delete-todo', id)"
        />
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue"

export default {
    name: "TodoList",

    props: {
        todos: {
            required: true,
            type: Array
        }
    },

    emits: ["delete-todo"],

    components: {
        TodoItem
    }
}
</script>
