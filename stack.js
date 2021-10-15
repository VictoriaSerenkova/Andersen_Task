class Node {
    constructor(el) {
        this.value = el;
        this.next = null;
    }
}

class Stack {
    constructor(max) {
        if(max === undefined) this.max = 10;
        else if(!Number.isSafeInteger(max) || max < 1) {
            throw new Error('Error');
        }
        else this.max = max;
        this.top = null;
        this.count = 0;
    }
    push(elem) {
        if(this.count === this.max) {
            throw new Error('stack is overflow');
        }
        else {
            let node = new Node(elem);
            let curr = this.top;
            if(!curr) {
                this.top = node;
            }
            else {
                while(curr.next) {
                    curr = curr.next;
                }
                curr.next = node;
            }
            this.count++;
        }
    }

    pop() {
        if(this.count === 0) {
            throw new Error('stack is underflow');
        }
        else {
            let del;
            let curr = this.top;
            if(this.count === 1)  {
                del = this.top
                this.top = null;
            }
            while(curr.next) {
                del = curr;
                if(curr.next === null) curr = null;
                else {
                    curr = curr.next;
                }
            }
            this.count--;
            return del;
        }
    }

    peek() {
        if(this.count === 0) {
            return null;
        }
        else {
            let curr = this.top;
            while(curr) {
                if(curr.next === null) return curr;
                else curr = curr.next;
            }
        }
    }

    isEmpty() {
        return (this.count === 0);
    }

    toArray() {
        let mas = [];
        let i = 0;
        let curr = this.top;
        while(curr) {
            mas[i] = curr.value;
            curr = curr.next;
            i++;
        }
        return mas;
    }
    static fromIterable(iterable) {
        if(iterable === null || iterable === undefined || (typeof iterable[Symbol.iterator]) !== 'function') {
            throw new Error('Is not iterable');
        }
        const stack1 = new Stack(iterable.length);
        for(let k of iterable) {
            stack1.push(k);
        }
        return stack1;
    }

}

module.exports = {Stack};