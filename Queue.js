const LinkedList = require("./LinkedListAndStack");


class Queue extends LinkedList {
	constructor(list) {
		super();
		this.list = list;
		if(this.list.length) {
			for (var i = this.list.length - 1; i >= 0; i--) {
				this.append(this.list[i]);
				console.log(`added ${this.list[i]}`);
			}
		}

	}
}


function main() {
	var list = [...Array(10).keys()];
	var Q = new Queue(list);
	Q.print();
	Q.reverse();
	Q.print();
}

main();