const { LinkedList, Node } = require("../Data-Structures-Templates/Linked-List-Template")

////////////////////////////////////////////////
// node constructor tests
////////////////////////////////////////////////

test("New Node's value should equal constructor's parameter value", () => {
    
    const nodeOne = new Node(7);
    
    const result = nodeOne.value;

    expect(result).toBe(7);

    const nodeTwo = new Node();

    const resultTwo = nodeTwo.value;

    expect(resultTwo).toBe(undefined);

})

test("New Node returns null for its next value", () => {
    
    const result = new Node(7).next;

    expect(result).toBe(null);

})

////////////////////////////////////////////////
// linked list constructor tests
////////////////////////////////////////////////

test("New Linked List's head and tail's should be set to new node", () => {

    const myLinkedList = new LinkedList(10);

    const head = myLinkedList.head.value;
    const tail = myLinkedList.tail.value;

    expect(head).toBe(10);    
    expect(tail).toBe(10);

})

////////////////////////////////////////////
// push method tests
// returns linked list
////////////////////////////////////////////

// push cases
// non null list
// null list

test("", () => {
    
    const myLinkedList = new LinkedList(10);

    myLinkedList.push(50);

    expect(myLinkedList.length).toBe(2);
    expect(myLinkedList.tail.value).toBe(50)

})

////////////////////////////////////////////
// pop method tests
// return undefined or node
////////////////////////////////////////////

// 3 cases 
// 0 nodes
// 1 node
// more than 1 nodes

test("pop() should decrease length by 1", () => {
    
    const myLinkedList = new LinkedList(33);
    myLinkedList.push(44);
    myLinkedList.push(55);

    myLinkedList.pop();

    expect(myLinkedList.length).toBe(2);

})

test("pop() should keep length of 0 if there are 0 nodes in linked list", () => {
    
    const myLinkedList = new LinkedList(33);
    myLinkedList.pop();
    myLinkedList.pop();

    expect(myLinkedList.length).toBe(0);

})

test("after pop(), the new tail should be the previous value before the last tail was popped", () => {
    
    const myLinkedList = new LinkedList(33);
    myLinkedList.push(44);
    myLinkedList.push(111);

    myLinkedList.pop();

    expect(myLinkedList.tail.value).toBe(44);

})

////////////////////////////////////////////
// unshift method tests
// returns linked list
////////////////////////////////////////////

// increase length
// head should be new value
// head.next from null list
// head.next for >= one node


////////////////////////////////////////////
// shift method tests
// returns undefined or node
////////////////////////////////////////////

// still length of zero for null list
// decrease length for > null
// new head should be value


////////////////////////////////////////////
// get method tests
// returns undefined or node
////////////////////////////////////////////

// return undefined for index < 0
// cant return index >= linked list length
// return node at index


////////////////////////////////////////////
// set method tests
// returns true or false
////////////////////////////////////////////

// return undefined for index < 0
// cant return index >= linked list length
// get that index value after to see if it changes


////////////////////////////////////////////
// insert method tests
// return linked list or false
////////////////////////////////////////////

// check if length increases
// cannot insert at index that does not exist


////////////////////////////////////////////
// remove method tests
////////////////////////////////////////////

// length should decrease
// same length if valid index

////////////////////////////////////////////
// reverse method tests
////////////////////////////////////////////

// previous head's value should be at new tail
// previous tail's value should be at new head
// same length