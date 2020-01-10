<template>
  <div class="beer flex p-16">
    <Sidebar class="w-1/4" />
    <div v-if="beer" class="w-3/4 p-4 flex justify-between bg-white rounded">
      <div class="beer-description flex flex-col">
        <h1 class="font-semibold text-4xl text-gray-800">{{ beer.name }}</h1>
        <p class="text-gray-600 mb-8">{{ beer.tagline }}</p>
        <p class="text-gray-700 flex-1">{{ beer.description }}</p>
        <p>First brewed: {{ beer.first_brewed }}</p>
        <p>ABV: {{ beer.abv }}</p>
        <p>IBU: {{ beer.ibu }}</p>
        <p>EBC: {{ beer.ebc }}</p>
        <p>SRM: {{ beer.srm }}</p>
        <p>pH: {{ beer.ph }}</p>
        <p class="text-sm text-gray-600 mb-4">By: {{ beer.contributed_by }}</p>
        <button
          type="button"
          class="bg-blue-600 text-white text-2xl py-2"
          @click="addToCart(beer)"
        >
          Add to cart
        </button>
      </div>
      <img
        class="w-1/2 object-contain p-4"
        :src="beer.image_url"
        :alt="beer.name"
      />
    </div>
    <div v-else class="w-3/4">Loading...</div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "Beer",
  data() {
    return {
      beer: undefined
    };
  },
  mounted() {
    fetch(`https://api.punkapi.com/v2/beers/${this.$route.params.id}`)
      .then(res => res.json())
      .then(beer => {
        this.beer = beer[0];
      });
  },

  methods: {
    addToCart(beer) {
      this.$store.commit("addToCart", beer);
    }
  },

  components: {
    Sidebar
  }
};
</script>
