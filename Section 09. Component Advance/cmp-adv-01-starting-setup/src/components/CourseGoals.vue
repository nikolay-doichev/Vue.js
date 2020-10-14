<template>
  <ul>
      <li v-for="goal in goals" :key="goal">
          <slot :item='goal' another-props='...'>{{goal}}</slot>
      </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finishe the course', 'Learn Vue']
        }
    },
}
</script>

<style>

</style>