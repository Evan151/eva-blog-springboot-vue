<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <h2>test msg : {{testMsg}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api/test'

export default {
  name: 'Dashboard',
  data(){
    return{
      testMsg:""
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created(){
    this.fetchData();
  },
  methods:{
    fetchData() {
      api.test().then(res=>{
        this.testMsg= res.message;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
