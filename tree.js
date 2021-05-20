class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (this.root == null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left != null) {
                        current = current.left;
                    } else {
                        current.left = newNode;
                        break;
                    }
                } else {
                    if (current.right != null) {
                        current = current.right;
                    } else {
                        current.right = newNode;
                        break;
                    }
                }
            }
        }
    }
}

const tree = new Tree();
tree.add(10);
tree.add(8);
tree.add(5);

console.log(tree);
