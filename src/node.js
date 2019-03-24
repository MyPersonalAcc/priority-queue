class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	appendChild(node) {
		if (this.left  != null && this.right != null){
			return;
		}
		if (this.left === null){
			this.left = node;
			this.left.parent = this;
		}
		else{
			this.right = node;
			this.right.parent = this;
		}		
	}

	removeChild(node) {
		if (this.left === node) { 
			this.left = null; 
			node.parent = null; 
		} 
		else{
			if (this.right === node){ 
				this.right = null; 
				node.parent = null;
			}else{
				throw "error";
			}
		}
	}

	remove() {
		if (this.parent === null){
			return;
		}
		this.parent.removeChild(this);
	}

	swapWithParent() {
	}
}

module.exports = Node;
