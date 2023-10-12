/** _______________________________
 * 2623. Memoize
    Given a function fn, return a memoized version of that function.

    A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

    You can assume there are 3 possible input functions: sum, fib, and factorial.

    sum accepts two integers a and b and returns a + b.
    fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
    factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
    Example 1:

    Input:
    fnName = "sum"
    actions = ["call","call","getCallCount","call","getCallCount"]
    values = [[2,2],[2,2],[],[1,2],[]]
    Output: [4,4,1,3,2]
    Explanation:
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);
    memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
    memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
    // "getCallCount" - total call count: 1
    memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
    // "getCallCount" - total call count: 2
    
    The time complexity for the memoized functions is O(n) due to the stringification of arguments using JSON.stringify, and the space complexity is also O(n) due to the space needed to store the string key and the memoized results. The space complexity does not grow linearly with the number of function calls; rather, it's based on the size of the arguments being passed.
 * 
 */
    //Memoize  Solution: 
    function memoize(fn) {
        const cache = {}; 
        // creates an empty object called cache that will be used to store memoized results.
    
        return function(...args) {
            const key = JSON.stringify(args);
            //converts the arguments passed to the function into a string representation using JSON.stringify and will be used as the key to store and retrieve memoized results. 
            if(key in cache){
                return cache[key];
                //if the key exists in the cache (i.e., the function has been called with these arguments before), it returns the memoized result associated with these arguments.
            }
            cache[key] = fn(...args);
            //If the key does not exist in the cache, it calls the original function fn with the given arguments (...args), stores the result in the cache using the key, and then returns the result.
            return cache[key];
        }
    }