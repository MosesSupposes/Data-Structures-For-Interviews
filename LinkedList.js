/** Class representing a Linked List */

class LinkedList {
	constructor(value) {
		this.head = { value, next: null };
		this.tail = this.head;
	}
	/*
	 * Inserts a new value to the end of the linked list
	 * @param {*} value - the value to insert
	 */
	insert(value) {
		const node = { value, next: null };
		this.tail.next = node;
		this.tail = node;
	}
	/*
	 * Deletes a node
	 * @param {*} node - the node to remove
	 * @return {*} value - the deleted node's value
	 */
	remove(node) {
		// this works in theory, but not in practice
		function findMatch(node1, node2) {
			if (isEqual(node1, node2.next)) {
				const nextNext = node2.next.next;
				node2.next = nextNext;
				return node;
			}

			if (node2.next === null) {
				throw new ReferenceError(
					`The node with value ${value} is not in this list.`
				);
			}

			return findMatch(node1, node2.next);
		}
		return findMatch(node, this.head);
	}
	/*
	 * Removes the value at the end of the linked list
	 * @return {*} - the removed value
	 */
	// {
	//   head: {value: 1, next: {value: 2, next: null}}
	//   tail: {value: 2, next: null}
	// }

	removeTail() {
		let currentNode = this.head;
		while (currentNode.next !== this.tail) {
			currentNode = currentNode.next;
		}
		currentNode.next = null;
		this.tail = currentNode;
	}
	/*
	 * Searches the linked list and returns true if it contains the value passed
	 * @param {*} value - the value to search for
	 * @return {boolean} - true if value is found, otherwise false
	 */
	contains(value) {
		let currentNode = this.head;
		while (currentNode.value !== value) {
			currentNode = currentNode.next;
		}
		return currentNode.value === value;
	}
	/*
	 * Checks if a node is the head of the linked list
	 * @param {{prev:Object|null, next:Object|null}} node - the node to check
	 * @return {boolean} - true if node is the head, otherwise false
	 */
	isHead(node) {
		return node === this.head;
	}
	/*
	 * Checks if a node is the tail of the linked list
	 * @param {{prev:Object|null, next:Object|null}} node - the node to check
	 * @return {boolean} - true if node is the tail, otherwise false
	 */
	isTail(node) {
		return node === this.tail;
	}
}

const myList = new LinkedList(1); //initiate?
console.log(myList);

// {
//   head: {value: 1, next: null}
//   tail: {value: 1, next: null}
// }

myList.insert(2);

// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }

myList.insert(3);

// {
//   head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//   tail: {value: 3, next: null}
// }
console.log(myList);
myList.removeTail();
console.log(myList);

/**
 * Determines if two objects are equal by value.
 * It also works for arrays.
 * @param {(Object|Array)} o1
 * @param {Object|Array} o2
 * @returns {Boolean}
 */
function isEqual(o1, o2) {
	if (Array.isArray(o1) && Array.isArray(o2)) {
		for (let i = 0; i < o1.length; i++) {
			if (o1[i] === o2[i]) {
				continue;
			} else {
				return false;
			}
		}
		return true;
	} else if (typeof o1 == "object" && typeof o2 == "object") {
		const o1Keys = Object.keys(o1);
		const o2Keys = Object.keys(o2);

		for (let i = 0; i < o1Keys.length; i++) {
			if (o1Keys[i] == o2Keys[i]) {
				continue;
			} else {
				return false;
			}
		}
		return true;
	} else {
		throw new TypeError(
			"You must pass in either an object or array to this function."
		);
	}
}
