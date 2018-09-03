<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>

  </div>
</template>

<script>
import Test from './components/test'
import Users from './components/users'
import Add from './components/add'
import Navbar from './components/navbar'
import Edit from './components/edit'

export default {
  name: 'app',
  components: {
    Test, Users, Navbar, Add, Edit
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
