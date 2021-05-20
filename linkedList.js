class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        const newNode = new Node(value);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    //Imprimir apenas no final de toda operação. Está alterando o valor do Nó (talvez seja escopo)
    print() {
        if (!this.size) {
            return null;
        }
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value += ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    remove(value) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.value === value) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.value;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeFromIndex(index){
        if (index < 0 || index > this.size){
            return null;
        }

        let current = this.head;
        let previous = null;

        if(index === 0){
            this.head = current.next;
        }else{
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.value;
    }

    isEmpty(){
        if(this.size === 0){
            return true;
        }else{
            return false;
        }
    }

    getSize(){
        return this.size;
    }
}



const linkedList = new LinkedList();
linkedList.add(12);
linkedList.add(99);

linkedList.removeFromIndex(0);

console.log(linkedList)
