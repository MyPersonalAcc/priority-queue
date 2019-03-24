const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;
		this.lenght = 0;
	}

	push(data, priority) {
		const node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.lenght++;	
	}

	pop() {
		var detach = this.detachRoot();
		this.restoreRootFromLastInsertedNode(this.detachRoot);
		this.shiftNodeDown(this.root);
		return detach;
	}

	detachRoot() {
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.root === null;
	} 

	clear() {
		this.parentNodes = [];
		this.root = null;
		this.lenght = 0;	
	}

	insertNode(node) {

	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
