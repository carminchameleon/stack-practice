// LIFO
// last in first out

type stackItem = number | string;

class Stack {
  container = [1, 2, 3, '가'];

  // push
  pushItem(item: stackItem) {
    const length = this.container.length;
    this.container[length] = item;
    console.log('push', this.container);
  }

  // pop
  popItem() {
    let newContainer = [];
    for (let i = 0; i < this.container.length - 1; i++) {
      newContainer[i] = this.container[i + 1];
    }
    this.container = newContainer;
    console.log('pop', this.container);
  }
}

const stacks = new Stack();
stacks.pushItem(6);
stacks.pushItem(7);
stacks.popItem();
stacks.popItem();
stacks.popItem();
