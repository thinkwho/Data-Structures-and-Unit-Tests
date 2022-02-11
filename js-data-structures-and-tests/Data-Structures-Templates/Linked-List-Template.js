class Node {
    
    /**
     * @summary Creates instance of Node
     * 
     * @constructor 
     * 
     * @property Value
     * @property Next
     * 
     * @param {Number} value - value of new node instance
     */
    constructor(value) {

    }

}

class LinkedList {
    
    /**
     * @summary Instantiate Linked List, Instantiate Node and add to linked list
     * 
     * @constructor
     * 
     * @property Head
     * @property Tail
     * @property Length
     * 
     * @param {Number} value - value of new node 
     */
    constructor(value) {
        
    }

    /**
     * @summary Instantiate new node and add to tail of linked list.
     * 
     * @param {Number} value - value of new node
     * 
     * @returns {LinkedList}
     */
    push(value) {

    }

    /**
     * @summary Remove node from tail of linked list.
     * 
     * @returns {(Node|undefined)} Removed node or undefined if no nodes to remove
     */
    pop() {
        
    }

    /**
     * @summary Instantiate new node and add before head of linked list.
     * 
     * @param {Number} value - value of new node
     * 
     * @returns {LinkedList}
     */
    unshift(value) {

    }

    /**
     * @summary Removes first node from Linked List
     * 
     * @returns {(Node|undefined)} Removed node or undefined if no node to remove
     */
    shift() {

    }

    /**
     * @summary Returns the node in a Linked List based off the index
     * 
     * @param {Number} index - position of node in Linked List
     * 
     * @returns {Node} 
     */
    get(index) {
        
    }

    /**
     * @summary Changing value of existing node at given index
     * 
     * @param {Number} index - position of node
     * @param {Number} value - new value of node
     * 
     * @returns {Boolean} Changing the value is successful
     */
    set(index, value) {
        
    }

    /**
     * @summary Create new node and add it to Linked List at index
     * 
     * @param {Number} index - position of new node
     * @param {Number} value - value of new node
     * 
     * @returns {(Boolean)} Insert was successful
     */
    insert(index, value) {
        
    }

    /**
     * @summary Remove a node from Linked List at given index.
     * 
     * @param {Number} index - position of node
     * 
     * @returns {(Node|undefined)} Removed node or undefined if no nodes removed.
     */
    remove(index) {

    } 

    /**
     * @summary Linked List's head should be at tail, and tail should be at head.
     * 
     * @returns {LinkedList}
     */
    reverse() {
        
    }

}

module.exports = { LinkedList, Node };