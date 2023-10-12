
/**
    2703. Return Length of Arguments Passed. 
        Solved it with 2 pointers 
        argumentsLength(1, 2, 3); // 3
        TC: O(N);
        SC: O(1);
 */
var argumentsLength = function(...args) {
	//check if the args is not empty, if so, return false
    // create two pointers left and right
    // while left is less than right, continue looping
    //retrn the length of the args 

    if(args.length === 0) return false;
    let left = 0; 
    let right = args.length; 
    while(left<right){
            left++;
            right--;
        }
    return args.length; 
};

/** ____________________________________________ 
    2621. Sleep 
    Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
    Example 1:

    Input: millis = 100
    Output: 100
    Explanation: It should return a promise that resolves after 100ms.
    let t = Date.now();
    sleep(100).then(() => {
    console.log(Date.now() - t); // 100
    });
    Example 2:

    Input: millis = 200
    Output: 200
    Explanation: It should return a promise that resolves after 200ms.
        TC: O(1);
        SC: O(1);
 */
        async function sleep(millis) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, millis)
            })
            }

/** ______________________________________________
 * 2704. To Be Or Not To Be
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 * 
 * created functions in an object to solve it with construction functions.
 */
var expect = function(val) {
    return {
        toBe: function(newVal){
            if(val === newVal){
                return true;
            }else{
                throw new Error ('Not Equal');
            }
        },
        notToBe: function(newVal){
            if(val !== newVal){
                return true;
            }else{
                throw new Error ('Equal')
            }
        }
    }
};

/**____________________________________________
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 */
var compose = function(functions) {
    return function (input) {
        return functions.reduceRight((acc, fn) => fn(acc), input);
    };
};

/** _______________________________________________
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 */

var once = function(fn) {
    let executed = false;
        let result;
    
        return function (...args) {
            if (!executed) {
                result = fn(...args);
                executed = true;
                return result;
            } else {
                return undefined;
            }
        };
    };

/**_____________________________________________________
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 */

var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};

/**_____________________________________________________
 2635. Apply Transform Over Each Element in Array
    Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

    The returned array should be created such that returnedArray[i] = fn(arr[i], i).

    Please solve it without the built-in Array.map method.
 */
    var map = function(arr, fn) {
        let result = [];
        //i created an empty array;
       for(let i=0; i<arr.length; i++){
           result.push(fn(arr[i], i))
       }
       //looped through the arr
       //pushed it to the new arr with the function;
       return result
    };

/**_____________________________________________________
 2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.
TC: O(N);
SC: O(1); - because the init and accumulate both always single values;

 */    
var reduce = function(nums, fn, init) {
    //check if the nums is empty, if it is return 0; 
    //create a new arr;
    //loop through the nums; 
    // and push everything into it;
    //return new arr
 if(nums.length === 0) return init; 
 let result = init;
 for(let i=0; i<nums.length; i++){
    result = fn(result, nums[i]);
 }
 return result;
 };

/**_____________________________________________________
 2715. Timeout Cancellation
    Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

    After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

    this is the logic when it can be used: 
    Imagine you're building a notification system for a web application. When a new notification comes in, you want to display it to the user in a non-intrusive way, like a small popup in the corner of the screen. However, you also want to give the user the option to dismiss the notification if they choose.

    Here's how you could use the cancellable function in this scenario:

    When a new notification arrives, you use setTimeout to delay showing the notification for a short period (e.g., 5 seconds). This gives the user a moment to see the notification before it disappears.

    You also provide a "dismiss" button on the notification. If the user clicks the "dismiss" button within the delay period (e.g., 5 seconds), you call the canceller function to cancel the timeout, preventing the notification from being displayed.

    If the user doesn't dismiss the notification within the delay period, the setTimeout triggers the display of the notification.

    By using a cancellable timeout, you allow the user to interact with the notification during the delay period, and if they choose to dismiss it, you can cancel the display before it occurs.

    This approach provides a better user experience by allowing the user to control when they see and interact with notifications.
    TC: O(1);
    SC: O(1);
 */    
    var cancellable = function(fn, args, t) {
        const timeOut = setTimeout(() => {
            fn(...args)
        }, t);
    
        return function(){
            clearTimeout(timeOut);
        }
    };
    
/**_____________________________________________________
    2725. Interval Cancellation
    Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

    The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

 */    
    var cancellable = function(fn, args, t) {
        fn(...args);  // Call the function immediately before setting up the interval;
    
        const timer = setInterval(() => {
            fn(...args);
        }, t);
        // we call the function again every t (miliseconds) until the clearInterval is called. 

        return function() { 
            clearInterval(timer);
        };
        // Return a function to cancel the interval
        // it will ensure that the provided function (fn) won't be executed repeatedly; 
        //TC: O(1); - The overall time complexity is O(f) for invoking the provided function plus O(1) for setting and clearing the interval.
        //SC: O(1); - Overall, the space complexity is O(1) because the amount of additional memory used is constant regardless of the input parameters.
    };

/**_____________________________________________________
    2727. Is Object Empty
    Given an object or an array, return if it is empty.

    An empty object contains no key-value pairs.
    An empty array contains no elements.
    You may assume the object or array is the output of JSON.parse.
 */ 

    var isEmpty = function(obj) {
        /** Array.isArray(obj): This is a method in JavaScript that determines whether the passed value (obj in this case) is an array. It returns true if obj is an array, and false if it is not.

        return obj.length === 0;: If obj is determined to be an array (using Array.isArray(obj)), we then check if the length of the array is zero (obj.length === 0). If the length is zero, it means the array is empty, and we return true. Otherwise, we return false, indicating that the array is not empty.

        In summary:

        If the obj is an array (Array.isArray(obj) returns true), we check if it's empty by verifying if its length is zero (obj.length === 0).
        If it's an empty array, we return true to indicate that it's empty.
        If it's not an array or if it's a non-empty array, we return false to indicate that it's not empty. */
        if(Array.isArray(obj)){
            return obj.length === 0;
        }
        //first, we check if the obj is array, if it is an empty array, we return true; 
        if(obj && typeof obj === 'object'){
            //check if obj is an object;
            //if so, we loop through each property
            //if obj has any property, we return false;
            for(let key in obj){
                if(obj.hasOwnProperty(key)){
                    return false;
                }
            }
            //else, we return true;
            return true;
        }
        //if the obj is not an array or an object, so it's non-empty, we return false; 
        return false;
        //TC: O(N);
        //SC: O(1);
    };

/**_____________________________________________________
    2677. Chunk Array
    Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

    You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

    Please solve it without using lodash's _.chunk function.

    Input: arr = [1,2,3,4,5], size = 1
    Output: [[1],[2],[3],[4],[5]]
    Explanation: The arr has been split into subarrays each with 1 element.
    TC: O(N);
    SC: O(N);
 */ 
    var chunk = function(arr, size) {
        //create new empty array; 
        let newArr = [];
        //loop through the array 
        for (let i = 0; i < arr.length; i += size){
            newArr.push(arr.slice(i, i + size))
        // pushed the arr that slices i and then size (i - is the starting index and i+size is the end)
        }
        return newArr;
    };

/**_____________________________________________________
    2619. Array Prototype Last
    Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

    You may assume the array is the output of JSON.parse.
    TC: O(N);
    SC: O(N);

 */ 
    Array.prototype.last = function() {
        if(this.length === 0 ){
            return -1; 
        } else{
                return this[this.length - 1];
        }
        
    };

/**_____________________________________________________
    2724. Sort By
    Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

    You may assume that fn will never duplicate numbers for a given array.
    TC: O(n log n);
    SC: O(n);
 */ 

    var sortBy = function(arr, fn) {
        if (arr.length <= 1) {
          return arr;
      }
       const compareFn = (a, b) => fn(a) - fn(b);
      
        const sortedArr = arr.slice().sort(compareFn);
      
        return sortedArr;
      
      }
      
/**_____________________________________
 * 2695. Array Wrapper
    Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

    When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
    When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 * TC: O(N);
 * SC: O(N);
 */

    var ArrayWrapper = function(nums) {
        this.nums = nums;
    };
    
    /**
     * @return {number}
     */
    ArrayWrapper.prototype.valueOf = function() {
       return this.nums.reduce(
            (n, a) => n + a, 0
       );
    }
    
    /**
     * @return {string}
     */
    ArrayWrapper.prototype.toString = function() {
        return `[${String(this.nums)}]`;
    }

/**_____________________________________
 * 2726. Calculator with Method Chaining
    Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

    Your Calculator class should have the following methods:

    add - This method adds the given number value to the result and returns the updated Calculator.
    subtract - This method subtracts the given number value from the result and returns the updated Calculator.
    multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
    divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
    power - This method raises the result to the power of the given number value and returns the updated Calculator.
    getResult - This method returns the result.
    Solutions within 10-5 of the actual result are considered correct.
     
    The time and space complexity for each method in the Calculator class is O(1), indicating constant time and constant space requirements. This is because the calculations and operations are not dependent on the size of any input; they involve a fixed number of operations and variables regardless of the input values.
 */

    class Calculator {
        /**
         * @param {number} value
         */
        constructor(value) {
            this.result = value;
        }
    
        /**
         * @param {number} value
         * @return {number}
         */
        add(value) {
            this.result += value;
            return this; 
        }
    
        /**
         * @param {number} value
         * @return {number}
         */
        subtract(value) {
            this.result -= value;
            return this;
        }
    
        /**
         * @param {number} value
         * @return {number}
         */
        multiply(value) {
            this.result *= value;
            return this;
        }
    
        /**
         * @param {number} value
         * @return {number}
         */
        divide(value) {
            if (value === 0) {
                throw new Error("Division by zero is not allowed");
            }
            this.result /= value;
            return this;
        }
    
    
        /**
         * @param {number} value
         * @return {number}
         */
        power(value) {
            this.result = Math.pow(this.result, value);
            return this; 
        }
    
        /**
         * @return {number}
         */
        getResult() {
            return this.result;
        }
    }

/**_________________________________
 * 58. Length of Last Word
    Given a string s consisting of words and spaces, return the length of the last word in the string.

    A word is a maximal substring consisting of non-space characters only.
    Example 1:

    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

    The function creates a new array to store the words in the string. The size of this array will be equal to the number of words in the string.
    The function also creates a new variable to store the length of the last word in the string.
    TC: O(N);
    SC: O(N);
 * 
 */
//Solution of Length of Last Word
    var lengthOfLastWord = function(s) {
        //to find the last word in the string, convert string into array
        //loop through the array 
        //return the length of the last element in the array 
        if(s.length === 0) return 0;
    
        const arrayOfWords = s.trim().split(' ');
        const lastWordLength = arrayOfWords[arrayOfWords.length -1].length;
        return lastWordLength;
    };
    
