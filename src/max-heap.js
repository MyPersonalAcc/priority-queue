const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;
		this.length  = 0;
	}

	push(data, priority) {
		const node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.length++;	
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
		this.length = 0;	
	}

	insertNode(node) {

	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {
		if (node === this.root) 
			return;

		if (node.priority <= node.parent.priority) 
			return;
		if ( this.root.left  === node ||
			this.root.right === node ){
			node.swapWithParent();
			this.root = node;
			this.root.parent = null;
		}
		else 
			node.swapWithParent();
			
		this.shiftNodeUp(node);		
	}
}

module.exports = MaxHeap;
