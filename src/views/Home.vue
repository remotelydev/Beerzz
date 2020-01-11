<template>
  <div class="home flex flex-col lg:flex-row p-4 sm:p-8">
    <Sidebar class="lg:w-1/4 lg:mr-16" />
    <div class="lg:w-3/4 flex flex-col sm:flex-row sm:flex-wrap lg:-ml-8">
      <router-link
        v-for="beer in beers"
        :key="beer.id"
        :to="`/beer/${beer.id}`"
        class="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 pt-4 lg:pt-0"
        ><Card :item="beer"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";

export default {
  name: "home",
  data() {
    return {
      beers: undefined
    };
  },
  mounted() {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=8")
      .then(res => res.json())
      .then(beers => {
        this.beers = beers;
      });
  },
  components: {
    Card,
    Sidebar
  }
};
</script>
