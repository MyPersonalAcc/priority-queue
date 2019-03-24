const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();
		this.first = null;
	}

	push(data, priority) {
		if(this.heap.lenght == this.maxSize){
			throw new Error();
		}else{
			return this.heap.push(data,priority);
		}	
	}

	shift() {
		var valueOfRemoved = this.heap.pop();
		if(this.isEmpty()){
			throw new Error();
		}return valueOfRemoved;
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.length === 0;
	}
}
module.exports = PriorityQueue;
