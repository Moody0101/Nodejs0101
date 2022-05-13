

/*
Javascript stack based on a linked list.
*/

const print = (printable) => {
	console.log(printable);
}


class Node {
	constructor(data, Next) { 
		this.data = data;
		this.Next = Next;
	}

	getNode() {
		return this;
	}

	getData() {
		return this.data;
	}
}


class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.headPrev = null;
		this.size = 0;
	}

	append(nodeData) {
		var New;
		switch(this.size) {
			case 0:
				New = new Node(nodeData, null);
				this.tail = New;
				this.head = this.tail;
				break
			case 1:
				New = new Node(nodeData, null);
				this.tail.Next = New;
				this.head = New;
				break;
			default:
				const head = this.head;
				New = new Node(nodeData, null);
				this.head = New;
				head.Next = this.head;
				break;
		}

		this.size++;
		
	}

	prepend(nodeData) {
		var New = null;
		switch(this.size) {
			case 0:
				New = new Node(nodeData, this.head);
				this.headPrev = this.head;
				this.head = New;
				this.tail = this.head;
				break
			case 1:
				New = new Node(nodeData, this.head);
				this.tail = New;
				this.headPrev = this.tail;
				break
			default:
				New = new Node(nodeData, this.tail);
				this.tail = New;	
				break
		}

		this.size++;		
	}

	findPrevNode(data) {
		var current = this.tail;
		while(current.Next) {
			
			if(current.Next.data == data) {
				return current;
			}

			current = current.Next;
		}
	}



	findNode(data) {
		var current = this.tail;
		while(current) {
			if(current.data == data) {
				return current;
			}
			current = current.Next;
		}
	}
	

	findNextNode(data) {
		var current = this.tail;
		while(current) {
			
			if(current.data == data) {
				return current.Next;
			}

			current = current.Next;
		}
	}


	pop() {

		var current = this.tail;
		var prev = null;
		while(current.Next) {
			prev = current;
			current = current.Next;
		}
		prev.Next = null;
		this.head = prev;
		current = null;
	}

	popLeft() {
		temp = this.tail.Next;
		this.tail.Next = null;
		this.tail = temp;
	}

	print() {
		
		var current = this.tail;
		var List = [

			];

		while(current) {
			switch(current) {
				case this.head:
					List.push(`${current.data}{head}`);

					break
				case this.tail:
					List.push(`${current.data}{tail}`);
					break
				default:
					List.push(current.data);
					break
			}
			
			current = current.Next;
		}

		print(List.join(" --> "))
	}

	reverse() {
		var current = this.tail;
		var prev = null;
		while(current) {
			var Next = current.Next;
			current.Next = prev;
			prev = current;
			current = Next;
		}

		const head = this.head;
		const tail = this.tail;
		this.head = tail;
		this.tail = head;
	}
}

class stack extends LinkedList {
	
	constructor(list=[]) {
		super();
		this.list = list;
		if(this.list.length > 0) {
			for(let i = 0; i < this.list.length; i++) {
				this.append(list[i]);
			}
		}
	}
}


// const RectObj = (x, y) => {
// 	return {
// 		x, 
// 		y,
// 		computeArea: () => {
// 			return x * y
// 		},
// 		id: Math.random(10, 20)
// 	}
// }

function main() {

	var list = [...Array(10).keys()];
	
	var st = new stack(list);

	st.pop();
	st.print();
	st.pop();
	st.print();
	st.pop();
	st.print();
	st.pop();
	st.print();
	st.append(2333);
	st.print();
	st.append('Works');
	st.print();



	// const myRect = RectObj(10, 40);
	// const myRect2 = RectObj(10, 10);

	// print(`REct1 ${myRect.computeArea()}`);
	// print(`REct2 ${myRect2.computeArea()}`);
	// print(`REct1 ${myRect.id}`);
	// print(`REct2 ${myRect2.id}`);
}




// class Player {
	
// 	constructor(Health, X, Y, Z, items=[]) {
// 		this.Health = Health
// 		this.X = X
// 		this.Y = Y
// 		this.items = items
// 		this.GameItems = [
// 			"Sword", "magic Spell", "flame sword", "book"
// 		]

// 	}

// 	MoveLeft() {
// 		this.X--;
// 	}

// 	MoveRight() {
// 		this.X++;
// 	}

// 	MoveUp() {
// 		this.Y++;
// 	}

// 	MoveDown() {
// 		this.Y--;
// 	}

// 	gainItem() {
// 		const index = Math.random() * this.GameItems.length;

// 		this.items.push(this.GameItems[index]);

// 		print(`You have aquired ${this.GameItems[index]}`);
// 	}

	
// }

// function input(LABEL) {
// 	var stdin = process.openStdin();
// 	process.stdout.write(LABEL);
// 	stdin.setRawMode( true );
// 	stdin.setEncoding( 'utf8' );
// 	stdin.resume();
// 	stdin.on('data', key => {
// 		if ( key === '\u0003' ) {
//      	   process.exit();
//     	}
// 	  	process.stdout.write(key);
// 	 })
// }

module.exports = LinkedList;


/*

	I had to look for some help in my python repo.

    def reverse(self):
        prev = None #initializing the previous node                       
        current = self.head #initializing the head
        while current: # if the current node is valid
            Next = current.Next # go to the next node of the current which is initialy the head
            current.Next = prev # change current's next to point to the prev
            prev = current # 
            current = Next
        self.head = prev

*/ 