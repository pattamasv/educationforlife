var LinkedListNode = require('./linknode.js');
var Comparator = require('./comparator.js');

class LinkedList {
  
  constructor(comparatorFunction) {
  
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  getHead(){
    return this.head;
  }

  getTail(){
    return this.tail;
  }

  //TBD
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      
      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

 
  find(value = undefined ) {
    if (this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
    
      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

  
      currentNode = currentNode.next;
    }

    return null;
  }
  

 
 // TBD
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.tail = null;
    } 

    return deletedHead;
  }


  //TBD
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = null;
    }

    return nodes;
  }

  

  
}

module.exports  = LinkedList;