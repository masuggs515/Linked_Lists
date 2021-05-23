/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const insert = new Node(val);
    if (!this.head) {
      this.head = insert;
      this.tail = insert;
      this.length += 1;
    } else {
      this.tail.next = insert;
      this.tail = insert;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const insert = new Node(val);
    if (!this.head) {
      this.head = insert;
      this.tail = insert;
      this.length += 1;
    } else {
      insert.next = this.head;
      this.head = insert;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    if (this.length <= 1) {
      const deleted = current.val;
      this.length = 0;
      this.head = null;
      this.tail = null;
      return deleted;
    }
    while (current) {

      if (current.next === this.tail) {
        const deleted = current.next.val;
        this.tail = current;
        this.tail.next = null;
        this.length -= 1;
        return deleted;
      }

      current = current.next;
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    let current = this.head;
    if (this.length <= 1) {
      const deleted = current.val;
      this.length = 0;
      this.head = null;
      this.tail = null;
      return deleted;
    }
    const deleted = current.val;
    this.head = current.next;
    current = null;
    this.length -= 1;
    return deleted;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === idx) {
        return current.val;
      }
      count++;
      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const data = new Node(val);
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === idx) {
        data.next = current.next
        current.val = data.val;
        return;

      }
      count++;
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const insert = new Node(val);
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let current = this.head;
    let count = 0;
    while (current) {
      if (count + 1 === idx) {
        insert.next = current.next;
        current.next = insert;
        this.length += 1;
        return;
      }

      count++;
      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) return this.shift();
    let current = this.head;
    let count = 0;
    while (current) {
      if (count+1 === idx) {
        let deleted = current.next.val;
        return deleted;

      }
      count++;
      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length===0) return 0;
    let total = 0;
    let count = 0;
    let current = this.head;
    while(current){
      total += current.val;
      count ++;
      current = current.next;
    }
    return total / count;
  }
}

module.exports = LinkedList;
