
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