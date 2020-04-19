/** Class representing a Stack. */

class Stack {
	constructor() {
		this._storage = {};
		this._length = 0;
	}
	/*
	 * Adds a new value at the end of the stack
	 * @param {*} value the value to push
	 */
	push(value) {
		if (value !== undefined) {
			this._storage[this._length] = value;
			this._length++;
			return value;
		}
	}

	/*
	 * Removes the value at the end of the stack and returns it
	 * @return {*} the last and newest value in the stack
	 */
	pop() {
		if (this._length > 0) {
			const lastVal = this._storage[this._length - 1];
			delete this._storage[this._length - 1];
			this._length--;
			return lastVal;
		}
	}
	/*
	 * Returns the value at the end of the stack without removing it
	 * @return {*} the last and newest value in the stack
	 */
	peek() {
		return this._storage[this._length - 1];
	}
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
myStack.pop();
myStack.pop();
console.log(myStack);
