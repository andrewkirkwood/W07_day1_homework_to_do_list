import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Buy shopping", "Clean bathroom", "Car's MOT"],
      newItem: ""
    },
    methods: {
      // saveNewItem: function() {
      //   this.items.push(this.newItem)
      //   this.newItem = {name: "", isPurchased: false}
      // },
      // purchaseItem: function(indexPosition) {
      //   this.items[indexPosition].isPurchased = true
      // }
    }
  });
});
