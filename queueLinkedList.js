class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    remove() {
      if (this.head) {        
        this.head = this.head.next;
        this.size--;
      } else {
        return null;
      }
    }
  
    isEmpty() {
      if (this.size === 0) {
        return true;
      } else {
        return false;
      }
    }
  
    getSize() {
      return this.size;
    }

    get(){
        return this.head.value;
    }
  }
  
  const queue = new Queue();
  queue.add(10);
  queue.add(20);
  
  console.log(queue);
  
  queue.remove();
  
  console.log(queue);
  
  queue.add(30);
  
  
  console.log(queue);

  console.log(queue.get());
  /*
    const linkedList = new LinkedList();
    linkedList.add(12);
    linkedList.add(99);
    //linkedList.removeFromIndex(0);
    console.log(linkedList); */