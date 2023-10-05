
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

