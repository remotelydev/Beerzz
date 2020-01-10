<template>
  <div class="card-wrapper">
    <div class="card border border-white rounded">
      <img
        class="h-64 w-full object-contain mx-auto p-4 bg-white rounded"
        :src="item.image_url"
        :alt="item.name"
      />
      <div class="p-2 bg-white rounded">
        <h2 class="card-title text-xl font-bold text-gray-800">
          {{ item.name }}
        </h2>
        <p class="text-gray-600">{{ item.tagline }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: undefined
    }
  }
};
</script>
<style lang="scss" scoped>
.card:hover {
  @apply shadow border-blue-600;
  cursor: pointer;
  .card-title {
    text-decoration: underline;
  }
}
</style>
