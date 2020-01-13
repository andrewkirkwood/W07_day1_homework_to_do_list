import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy shopping", priority: false},
        {name: "Clean bathroom", priority: false},
        {name: "Car's MOT", priority: true}
      ],
      newItem: {name: "", priority: false}
    },
    methods: {
      saveNewItem: function() {
        this.items.push(this.newItem)
        this.newItem = {name: "", priority: false}
      },
      assignPriority: function (index) {
        this.items[index].priority = true
      }
    }
  });
});
