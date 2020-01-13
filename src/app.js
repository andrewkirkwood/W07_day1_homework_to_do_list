import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: ["Buy shopping", "Clean bathroom", "Car's MOT"],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push(this.newItem)
      }
    }
  });
});
