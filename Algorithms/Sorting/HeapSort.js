const Heap = require("../../Data Structure/Heap");

const heapSort = function (array) {
  let heap = new Heap({type:"MAX_HEAP"});
  for (let index = 0; index < array.length; index++) {
    heap.add(array[index]);
  }
  for (let index = array.length - 1; index >= 0; index--) {
    array[index] = heap.poll();
  }
};

