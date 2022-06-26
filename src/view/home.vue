<template>
  <div class="home">{{ data }}</div>
</template>

<script>
import { getData } from '@/api'
export default {
  name: 'home',
  data() {
    return {
      data: 'home'
    }
  },
  created() {
    this.getdd()
  },
  methods: {
    getdd(data) {
      getData(data).then(data => {
        // console.log('data', data)
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style scoped>
.home {
  color: red;
}
</style>