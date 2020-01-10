<template>
  <header id="nav" class="border-b">
    <div class="container sm:flex sm:items-center sm:p-4">
      <div
        class="container mx-auto flex items-center justify-between p-4 sm:p-0"
      >
        <div @click="isOpen = false">
          <router-link to="/" class="text-4xl font-thin">Beerzz</router-link>
        </div>
        <div class="sm:hidden">
          <button type="button" @click="isOpen = !isOpen">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="px-4 pt-2 pb-4 sm:flex sm:p-0"
        @click="isOpen = false"
      >
        <router-link class="block font-semibold sm:px-2" to="/"
          >Home</router-link
        >
        <router-link class="block font-semibold sm:px-2" to="/about"
          >About</router-link
        >
        <router-link class="block font-semibold sm:px-2" to="/contact"
          >Contact</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>
