const QueueA = () => {
    const queue = []
    return {
        get length() {
            return queue.length
          },
          push: x => queue.push(x),
          pop: () => queue.shift(),
          top: () => queue[0],
      }
  }
 
 
 var MyStack = function() {
    this.queue = QueueA()
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  MyStack.prototype.push = function(x) {
    if (this.queue.length === 0) {
        this.queue.push(x)
      } else {
        this.queue.push(x)
        for (let i = 1; i <= this.queue.length - 1; i++) {
            this.queue.push(this.queue.pop())
          }
      }
  };
  
  /**
   * @return {number}
   */
  MyStack.prototype.pop = function() {
    return this.queue.pop()
  };
  
  /**
   * @return {number}
   */
  MyStack.prototype.top = function() {
    return this.queue.top()
  };
  
  /**
   * @return {boolean}
   */
  MyStack.prototype.empty = function() {
    return this.queue.length === 0
  };
  
  /** 
   * Your MyStack object will be instantiated and called as such:
   * var obj = new MyStack()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.empty()
   */

  /**
   * 
   */