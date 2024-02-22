<template>
    <div class="todo-item">
        <p>{{ todo.title }}</p>

        <div class="action-container">
            <button @click="() => this.$emit('delete-todo', todo.id)">
                delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",

    emits: ["delete-todo"],

    props: {
        todo: {
            required: true,
            type: Object
        }
    }
}
</script>

<style scoped>
.todo-item {
    margin: 12px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    border: 5px solid #d3d3d3;
}

.action-container {
    display: flex;
    align-items: center;
}
</style>
