<template>
  <div id="app" class="bg-gray-100">
    <Navbar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contacct</router-link>
    </div> -->
    <router-view class="main" />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 87px);
}
</style>
