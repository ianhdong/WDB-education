// Q1: Function This
// Testing variables, control flow, function composition
function max(iterable, key) {
    // Implement a function which finds the maximum in a list after applying    // function `key` to each element
    // ex. max([3, 1, 2], (x) => x) = 3
    // ex. max([-1, -4, 4, 6], (x) => 1 / x) = 4
    let maximum = iterable[0];
    for (let i = 0; i < iterable.length; i++) {
        let result = key(iterable[i]);
        if (result > key(maximum)) {
            maximum = iterable[i];
        }
    }
    return maximum;     
    
}
console.log(max([3, 1, 2], (x) => x));
console.log(max([-1, -4, 4, 6], (x) => 1 / x));

// Q2: Flip It and Reverse It
// Testing anonymous (arrow) function and function composition
const reverser = (x) => {
    return -x;
};
// Given a list of real numbers, write an anonymous function that we can pass as the key to `max` to return the smallest element
// ex. max([1, -2, 3], reverser) = -2
console.log(max([1, -2, 3], reverser));

// Q3: What is This?
// Testing knowledge of this, operators, and builtins
let thiser = {
    a: (Math.random() * 100),
    b: (Math.random() * 100),
    x: (Math.random() * 100),
    y: (Math.random() * 100),
    // distance: Math.sqrt(
    //     // return the Euclidean distance between the point (a, b) and (x, y)
    //     // hint: Euclidean distance is given by sqrt((a - x)^2 + (b - y)^2) 
    // )    
}

// Q4: Objects Gworl
// Testing Objects (JSON), Arrays, and Object Properties
function changer(object, key, value) {
    let prev = object[key];
    if (Array.isArray(prev)) {
        prev.push(value);
    } else if ((typeof(prev) == 'object') && (prev != null)) {
        prev[key] = value;
    } else {
        object[key] = value;
    }
    return null
}
var myObj = { name: "John", age: 31, city: ["New York", "Georgia"], college: {undergrad: "Berkeley"}};
changer(myObj, "college", "UCLA");
console.log(myObj);

// Q5: Promises Promises
// Testing asynchronous, promises, 
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        resolve()
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = await a.then(() => 5)
    console.log(five)
    return five
}

promise_me()
