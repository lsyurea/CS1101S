// Type your program in here!
//queens ADT

const make_queen = pair;
const r = head;
const c = tail;

function attack_each_other_diagonally(q1, q2) {
    return math_abs(r(q1) - r(q2)) === math_abs(c(q1), c(q2));
}

function attack_any_diagonally(q1, qs) {
    return accumulate((x, y) => attack_each_other_diagonally(q1, x)
                        || y,
                      false,
                      qs);
}

function attack_diagonally(qs) {
    return is_null(qs)
          ? false
          : attack_any_diagonally(head(qs), tail(qs)) 
                || attack_diagonally(tail(qs));
}

function permutations(xs) {
    if (is_null(xs)) {
        return list(null);
    }
    else {
        return accumulate(append,
                          null,
                          map(x => map(y => pair(x, y), 
                                      permutations(remove(x, xs))),
                              xs));
    }
}
/* 
space: O(n!)
time: O(n!)
*/

function zip(f, lst1, lst2) {
    return is_null(lst1)
           ? null 
           : pair(f(head(lst1), head(lst2)), zip(f, tail(lst1), tail(lst2)));
}

function queens(n) {
    return map(x => zip(make_queen, enum_list(1, n), x), 
               permutations(enum_list(1, n)));
}

/* 
size of list is p, and each element in p is of size n
so time complexity is np
Time complexity is n * n!
Space complexity is n * n!
*/

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

