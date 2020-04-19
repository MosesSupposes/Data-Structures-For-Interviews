/** Class representing a Queue.
 * @constructor
 */

class Queue {
	constructor() {
		this._storage = {};
		this._length = 0;
		this._headIndex = 0;
	}
	/*
	 * Enqueues a new value at the end of the queue
	 * @param {*} value the value to enqueue
	 */
	enqueue(value) {
		if (value !== undefined) {
			this._storage[this._length] = value;
			this._length++;
			return value;
		}
	}

	/*
	 * Dequeues the value from the beginning of the queue and returns it
	 * @return {*} the first and oldest value in the queue
	 */
	dequeue() {
		if (this._length > 0) {
			const firstVal = this._storage[this._headIndex];
			delete this._storage[this._headIndex];
			this._length--;
			this._headIndex++;
			return firstVal;
		}
	}
	/*
	 * Returns the value at the beginning of the queue without removing it from the queue
	 * @return {*} the first and oldest value in the queue
	 */
	peek() {
		return this._storage[this._headIndex];
	}
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);
q.dequeue();
q.dequeue();
console.log(q.peek());
console.log(q);
