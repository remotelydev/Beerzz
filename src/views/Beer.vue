<template>
  <div class="beer flex flex-col lg:flex-row p-4 sm:p-8">
    <Sidebar class="mb-4 lg:w-1/4 lg:mr-8" />
    <div
      v-if="beer"
      class="lg:w-3/4 p-4 flex flex-col-reverse sm:flex-row justify-between bg-white rounded"
    >
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
        class="h-64 sm:h-auto sm:w-1/2 object-contain object-top p-4"
        :src="beer.image_url"
        :alt="beer.name"
      />
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Loader";

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
    Sidebar,
    Loader
  }
};
</script>
