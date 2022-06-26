<template>
  <div class="test">{{data}}</div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      data: 'test'
    }
  }
}
</script>

<style scoped>
.test {
  color: green;
}
</style>