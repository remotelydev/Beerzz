<template>
  <div id="app" class="bg-gray-100">
    <Navbar />
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
  min-height: calc(100vh - 87px);
}
</style>
