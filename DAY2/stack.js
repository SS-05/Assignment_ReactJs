class Stack {
    constructor() {
      this.ele = [];
    }
  
    push(element) {
      this.ele.push(element);
    }
  
    pop() {
      if (this.ele.length === 0) {
        return "Stack is empty. Cannot pop an element.";
      }
      return this.ele.pop();
    }
  }
  
  const s = new Stack();
  s.push(8);
  s.push(22);
  s.push(11);
  s.pop();
  console.log(s)