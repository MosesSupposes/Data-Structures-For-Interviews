/** Class representing a Hash Table */

class HashTable {
	constructor() {
		this._storage = [];
		this._size = 0;
	}
	/*
	 * Inserts a new key-value pair
	 * @param {string} key - the key associated with the value
	 * @param {*} value - the value to insert
	 */
	insert(key, value) {
		this._storage[this._size] = [key, value];
		this._size++;
	}

	/*
	 * Deletes a key-value pair
	 * @param {string} key - the key associated with the value
	 * @return {*} value - the deleted value
	 */
	remove(key) {
		let deletedValue = null;
		this._storage.forEach(([k, v], i, arr) => {
			console.log(k);
			console.log(v);
			if (key === k) {
				this._storage.splice(i, 1);
				this.size--;
				deletedValue = v;
			}
		});
		return deletedValue;
	}

	/*
	 * Returns the value associated with a key
	 * @param {string} key - the key to search for
	 * @return {*} - the value associated with the key
	 */
	retrieve(key) {
		const item = this._storage.find(([k, v]) => key === k);
		return item ? item[1] : null;
	}

	/*
	 * Hashes string value into an integer that can be mapped to an array index
	 * @param {string} str - the string to be hashed
	 * @param {number} n - the size of the storage array
	 * @return {number} - an integer between 0 and n
	 */
	_hash(str, n) {
		let sum = 0;
		for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

		return sum % n;
	}
}

let ht = new HashTable();

ht.insert("halle", "lujah");
ht.insert("my", "bad");
ht.insert("what the", "heck");

console.log(ht.remove("my")); // bad
console.log(ht.retrieve("my")); // null
console.log(ht.retrieve("halle"));
