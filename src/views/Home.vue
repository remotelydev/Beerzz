<template>
  <div class="home flex p-16">
    <Sidebar class="w-1/4" />
    <div class="w-3/4 flex flex-wrap -mx-8">
      <router-link
        v-for="beer in beers"
        :key="beer.id"
        :to="`/beer/${beer.id}`"
        class="w-1/4 px-4"
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
