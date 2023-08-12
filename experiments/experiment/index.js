function Counter() {
    var count = 0;
    let incrementCounter = function() { //anonymous function
      count++;
      console.log(count);
    }
    let decrementCounter = function() {
      count--;
      console.log(count);
    }
    return {incrementCounter,decrementCounter}
  }
  
  var counter1 = new Counter();  // new keyword for constructor fun
  counter1.incrementCounter();
  counter1.incrementCounter();
  counter1.decrementCounter();
