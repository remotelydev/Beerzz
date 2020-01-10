<template>
  <div class="p-4 mr-16 self-start text-white bg-blue-600">
    <h2 class="flex text-xl mb-4">
      <div
        class="h-8 w-8 flex items-center justify-center mr-3 rounded-full text-blue-600 bg-white"
      >
        C
      </div>
      Contact
    </h2>
    <p class="text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
      quaerat cum. Labore hic dignissimos in maxime? Quam iusto autem nulla
      natus, praesentium officia, fugit aspernatur odio minima cupiditate
      explicabo dignissimos.
    </p>
    <h2 class="flex text-xl my-4">
      <div
        class="h-8 w-8 flex items-center justify-center mr-3 rounded-full text-blue-600 bg-white"
      >
        C
      </div>
      Cart <span v-if="cartTotal">( {{ cartTotal }} )</span>
    </h2>
    <div class="cart">
      <div v-if="cart.length">
        <div
          v-for="item in cart"
          :key="`item-${item.id}`"
          class="bg-blue-800 m-1 p-1"
        >
          <span class="font-bold text-green-500">{{ item.amount }}</span>
          {{ item.name }}
        </div>
      </div>
      <span v-else class="flex items-center justify-center h-40"
        >Cart is empty</span
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  }
};
</script>

<style scoped>
.cart {
  min-height: 10rem;
  border: 2px dashed #e2e8f0;
}
</style>
