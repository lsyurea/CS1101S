//consultation questions

//fast power for integer numbers
function fast_power(b, n) {
    return n < 0
           ? 1 / fast_power(b, - n)
           : n === 0
           ? 1
           : n % 2 === 0
           ? math_pow(fast_power(b, n/2), 2)
           : fast_power(b, n - 1) * b;
}
/*
Time complexity = O(log(n))
Space complexity = O(log(n))
*/

function fast_power_iter(b, n) {
    function helper(res, n, b) {
        return n === 0
               ? res
               : n % 2 === 0
               ? helper(res, n / 2, b * b)
               : helper(res * b, n - 1, b);
    }
    return n < 0 ? 1 / helper(1, - n, b) : helper(1, n, b);
}
/*
Iterative version seems impossible without helper/modifying number of arguments

Time complexity = 0(log(n))
Space complexity = O(1)
*/
function zip(f, lst1, lst2) {
    return is_null(lst1)
           ? null 
           : pair(f(head(lst1), head(lst2)), zip(f, tail(lst1), tail(lst2)));
}


function zip_1(lst1, lst2) {
    return is_null(lst1)
           ? null
           : pair(pair(head(lst1), head(lst2)), zip_1(tail(lst1), tail(lst2)));
}
/* 
Time complexity = O(n)
Space complexity = O(n)
*/

function zip1_iter(lst1, lst2) {
    return is_null(lst1)
           ? lst2
           : zip1_iter(tail(lst1), 
                       append(tail(lst2), list(pair(head(lst1), head(lst2)))));
}
/* 
Time complexity = O(n ^ 2);
Space complexity = O(1);
*/

function zip1_iter_2(lst1, lst2) {
    function helper(res, lst1, lst2) {
        return is_null(lst1) 
               ? reverse(res)
               : helper(pair(pair(head(lst1), head(lst2)), res), 
                        tail(lst1), 
                        tail(lst2));
    }
    return helper(null, lst1, lst2);
}
/*
Time complexity = O(n)
Space complexity = O(1)
*/

function reverse_1(lst) {
    return accumulate((x, y) => append(y, list(x)),
                      null, 
                      lst);
}
/*
Time complexity = O(n ^ 2)
Space complexity = O(n)
*/

function reverse_iter(lst) {
    function helper(res, lst) {
        return is_null(lst) 
               ? res
               : helper(pair(head(lst), res), lst);
    }
    return helper(null, lst);
}
/* 
Time complexity = O(n)
Space complexity = O(1)
*/

function multi_zip(matrix) {
    return is_null(head(head(matrix)))
           ? null
           : pair(map(head, matrix), multi_zip(map(tail, matrix)));
}
/*
Assumption that the individual matrix length are equal

Time complexity = O(n * m) 
Space complexity = O(n * m)

where n is the number of elements in the matrix 
and m is the number of elements within each list of the matrix
*/

function filter_1(pred, lst) {
    return accumulate((x, y) => pred(x) ? pair(x, y) : y,
                      null,
                      lst);
}
/* 
Time complexity = O(n)
Space complexity = O(n)
*/

function filter_tree(f, tree) {
    return is_null(tree)
           ? null
           : is_list(head(tree))
           ? pair(filter_tree(f, head(tree)), filter_tree(f, tail(tree)))
           : f(head(tree))
           ? pair(head(tree), filter_tree(f, tail(tree)))
           : filter_tree(f, tail(tree));
}
/*
Time complexity = O(n)
Space complexity = O(n)
best case O(log(n))
*/

function modified_filter_tree(f, tree) {
    return filter_tree(x => !is_null(x), filter_tree(f, tree));
}
/* 
Time complexity = O(n)
Space complexity = O(n)

where n is assumed to be the total number of elements
*/

//S5 extra
function every_second(lst) {
    return is_null(lst) || is_null(tail(lst))
           ? null
           : pair(head(tail(lst)), every_second(tail(tail(lst))));
}
/* 
Time complexity = O(n)
Space complexity = O(n)
*/

function sums(lst) {
    if (is_null(lst)) {
        return list(0, 0);
    }
    else if (is_null(tail(lst))) {
        return list(head(lst), 0);
    }
    else {
        const prev = sums(tail(tail(lst)));
        return list(head(lst) + head(prev), head(tail(lst)) + head(tail(prev)));
    }
}

/* 
Time complexity = O(n)
Space complexity = O(n)
*/

//S6

function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y),
                      null,
                      xs);
}

/*
Time complexity = O(n)
Space complexity = O(n)
*/

function remove_duplicates(lst) {
    return is_null(lst)
           ? null
           : pair(head(lst), remove_duplicates(filter(x => !(x === head(lst)),
                                                      tail(lst))));
}

/* 
Time complexity = O(n ^ 2)
Space complexity = O(n)
*/

function makeup_amount(x, coins) {
    return x < 0 || is_null(coins)
           ? null
           : x === 0
           ? list(null)
           : append(makeup_amount(x, tail(coins)), 
                    map(x => pair(head(coins), x), 
                        makeup_amount(x - head(coins), tail(coins))));
}

/*
Algorithm where order matters

Time complexity = O(2 ^ n)
Space complexity = O(n)
where n refers to length of coins
*/

//S6 extra

function remove_duplicates_2(lst) {
    return accumulate((x, y) => pair(x, filter(z => !(z === x), y)),
                      null,
                      lst);
}
function remove_duplicates_3(lst) {
    return accumulate((x, y) => is_null(member(x, y)) 
                                ? pair(x, y)
                                : y,
                      null,
                      lst);
}

function subsets(xs) {
    return is_null(xs) 
           ? list(null)
           : append(subsets(tail(xs)), 
                    map(x => pair(head(xs), x), subsets(tail(xs))));
}

/* 
Time complexity = O(2 ^ n)
Space complexity = O(n)
*/

function permutations_1(lst) {
    if (is_null(lst)) {
        return list(null);
    }
    else {
        return accumulate(append, 
                          null,
                          map(x => map(y => pair(x, y), 
                                         permutations_1(remove(x, lst))), 
                              lst));
    }
}

/*
Time complexity = O(n * n!)
Space complexity = O(n * n!)

alternative variant below >>
*/

function insertions(v, lst) {
    return is_null(lst) 
           ? list(list(v))
           : append(list(pair(v, lst)), map(x => pair(head(lst), x), 
                                     insertions(v, tail(lst))));
}

/* 
Time complexity = O(n * n!)
Space complexity = O(n * n!)
*/

function permutations_2(lst) {
    return is_null(lst)
           ? list(null)
           : accumulate(append,
                        null,
                        map(x => insertions(head(lst), x), 
                            permutations_2(tail(lst))));
}

/*
Time complexity = O(n * n!)
Space complexity = O(n * n!)
*/


// use of higher order functions
const flatten_once = (f => f(f))(f => xs => is_null(xs)
                                            ? null 
                                            : is_list(head(xs))
                                            ? append(f(f)(head(xs)), f(f)(tail(xs)))
                                            : pair(head(xs), f(f)(tail(xs))));
                                            
const flatten = xs => is_null(xs)
                      ? null 
                      : is_list(head(xs))
                      ? append(flatten(head(xs)), flatten(tail(xs)))
                      : pair(head(xs), flatten(tail(xs)));


//note both functions are the same

//HOF
const thrice = f => x => f(f(f(x)));
const zero_repeater = f => x => x;
const increment_repeater = repeater => f => x => f(repeater(f)(x));
const decrement_repeater = repeater => 
                             head(repeater(x => pair(tail(x), 
                                            increment_repeater(tail(x))))
                                  (pair(zero_repeater, zero_repeater)));
                                
                                  