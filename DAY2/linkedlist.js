import { Node } from "./stack.js";

class LinkedList {
  constructor() {
    this.head = new Node();
    this.Length = 0;
  }

  InsertStart(value) {
    var node = this.head;
    if (node.data == null) {
      node.data = value;
    } 
    else {
      node = new Node(value, this.head);
      this.head = node;
    }
    this.Length = this.Length + 1;
  }

  DeleteStart() {
    var node = this.head;
    this.head = node.next;
    if (this.Length > 0) {
      this.Length = this.Length - 1;
    }
  }

  InsertEnd(value) {
    var node = this.head;
    if (node.data == null) {
      node.data = value;
    } 
    else {
      for (let i = 0; node.next != null; i++) {
        node = node.next;
      }
      node.next = new Node(value, null);
    }
    this.Length = this.Length + 1;
  }

  DeleteEnd() {
    var node = this.head;
    if (node.next == null) {
      node.data = null;
    } 
    else {
      for (let i = 0; node.next.next != null; i++) {
        node = node.next;
      }
      node.next = null;
    }
    if (this.Length > 0) {
      this.Length = this.Length - 1;
    }
  }

  Insert(value, index) {
    this.Length = this.Length + 1;
    if (index == 0) {
      this.InsertStart(value);
      this.Length = this.Length - 1;
    } 
    else if (index == this.Length - 1) {
      this.InsertEnd(value);
      this.Length = this.Length - 1;
    } 
    else {
      var node = this.head;
      if (this.Length > index) {
        for (let i = 0; i < index - 1; i++) {
          node = node.next;
        }
        var temp = node.next;
        node.next = new Node(value, temp);
      } 
    else {
        console.log("Index out of range");
        this.Length = this.Length - 1;
      }
    }
  }

  Delete(index) {
    this.Length = this.Length - 1;
    if (index == 0) {
      this.DeleteStart();
      if (this.Length != 0) {
        this.Length = this.Length + 1;
      }
    }
    else if (index == this.Length) {
      this.DeleteEnd();
      this.Length = this.Length + 1;
    } else {
      if (index > this.Length || index < 0) {
        console.log("Index out of bound");
        this.Length = this.Length + 1;
      } else {
        var node = this.head;
        for (let i = 0; i < index - 1; i++) {
          node = node.next;
        }
        node.next = node.next.next;
      }
    }  
  }

  Display() {
    var node = this.head;
    if (node != null) {
      for (let i = 0; node.next != null; i++) {
        console.log(node.data);
        node = node.next;
      }
      if (node.data != null) {
        console.log(node.data);
      }
    }
  }
}

var k = new LinkedList();
k.InsertStart(200);
k.InsertStart(100);
k.InsertStart(300);
k.InsertEnd(500);
k.InsertEnd(400);
k.DeleteStart();
k.DeleteStart();
k.DeleteEnd();
k.DeleteEnd();
k.DeleteEnd();
k.Display();
k.Insert(100, 0);
k.Insert(200, 1);
k.Insert(400, 2);
k.Insert(200, 3);
k.Delete(0);
k.Delete(1);
k.Delete(1);
k.Delete(0);
k.Display();
console.log(k.Length);