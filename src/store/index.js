import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    cartTotal: 0
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find(product => product.id == item.id);

      if (found) {
        found.amount++;
      } else {
        state.cart.push(item);

        Vue.set(item, "amount", 1);
      }

      state.cartTotal += 1;
    }
  },
  actions: {},
  modules: {}
});
