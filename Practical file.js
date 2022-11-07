//PA cheatsheet


// Arrays

//----------------------------------------------------------------
function list_to_array(L) {
    const len = length(L);
    const a = [];
    for (let i = 0; i < len; i = i + 1) {
        a[i] = list_ref(L, i);
    }
    return a;
}

//----------------------------------------------------------------

function array_to_list(a) {
    return build_list(i => a[i], array_length(a));
}

//----------------------------------------------------------------

function swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
//---------------------------------------------------------------
function copy_array(A) {
    const len = array_length(A);
    const B = [];
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    return B;
}
//---------------------------------------------------------------
function reverse_array(A) {
    const len = array_length(A);
    const half_len = math_floor(len / 2);
    for (let i = 0; i < half_len; i = i + 1) {
        swap(A, i, len - 1 - i);
    }
}
//----------------------------------------------------------------
//in-place array_sort
function array_sort(a) {
    function swap(a, i, j) {
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    
    const n = array_length(a);
    for (let i = 0; i < n - 1; i = i + 1) {
        for (let j = 0; j < n - i - 1; j = j + 1) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
            }
        }
    }
    
    return a;
}
//----------------------------------------------------------------

// Lists
//----------------------------------------------------------------
function sort(lst) {
    
}
//----------------------------------------------------------------
// returns a permutation of the list
function permutations(lst) {
    return is_null(lst)
           ? list(null)
           : accumulate(append, 
                        null,
                        map(x => map(y => pair(x, y),
                                     permutations(remove(x, lst))),
                            lst));
}
//----------------------------------------------------------------
// returns a power set
function power_set(lst) {
    return is_null(lst)
           ? list(null)
           : append(map(x => pair(head(lst), x), 
                        power_set(tail(lst))),
                    power_set(tail(lst)));
}
//----------------------------------------------------------------
// returns all possible permutations of the list
function all_permutations(lst) {
    return accumulate(append,
                      null,
                      map(permutations, 
                          power_set(lst)));
}
//----------------------------------------------------------------
// choose n elements from the original list
function combination(lst, n) {
    if (is_null(lst) && n === 0) {
        return list(null);
    }
    if (n < 0 || is_null(lst)) {
        return null;
    }
    return append(map(x => pair(head(lst), x), 
                      combination(tail(lst), n - 1)), 
                  combination(tail(lst), n));
}
//----------------------------------------------------------------
// permuatate n elements from the original list
function permutate(lst, n) {
    const cur = combination(lst, n);
    return accumulate(append, 
                      null,
                      map(permutations, 
                          cur));
}
//----------------------------------------------------------------


//trees
//----------------------------------------------------------------
function flatten(tree) {
    if (is_null(tree)) {
        return tree;
    }
    return accumulate((x, y) => is_pair(x)
                                ? append(flatten(x), y)
                                : pair(x, y),
                      null, 
                      tree);
}
//----------------------------------------------------------------
// unary function f
function tree_map(f, tree) {
    if (is_null(tree)) {
        return tree;
    }
    return accumulate((x, y) => is_pair(x)
                                ? pair(tree_map(f, x), y)
                                : pair(f(x), y),
                      null,
                      tree);
}
//----------------------------------------------------------------
// unary function f
function tree_filter(f, tree) {
    if (is_null(tree)) {
        return tree;
    }
    return accumulate((x, y) => is_pair(x)
                                ? pair(tree_filter(f, x), y)
                                : f(x)
                                ? pair(x, y)
                                : y,
                      null,
                      tree);
}

//----------------------------------------------------------------
// binary function f
// works for init = 0 or null but not for init > 0 or init < 0
// use accumulate(f, init, flatten(tree)) for those instance instead
function tree_accumulate(f, init, tree) {
    return accumulate((x, y) => is_pair(x)
                                ? f(tree_accumulate(f, init, x), y)
                                : f(x, y), 
                      init, 
                      tree);
}
//----------------------------------------------------------------
//streams
function add_streams(s1, s2) {
    return pair(head(s1) + head(s2), () => add_streams(stream_tail(s1), 
                                                       stream_tail(s2)));
}

function list_to_streams(lst) {
    return pair(head(lst), () => list_to_streams(tail(lst)));
}

// Data structures
//----------------------------------------------------------------

//first in last out
const stack = [];
let stack_length = 0;

function push(x) {
    stack[stack_length] = x;
    stack_length = stack_length + 1;
}

function pop() {
    // usage check
    if (stack_length === 0) {
        error("pop() cannot be done on a stack of size 0.");
    }
    
    stack_length = stack_length - 1;
    return stack[stack_length];
}

//first in first out.
let queue = list();

function enqueue(x) {
    queue = append(queue, list(x));
}

function dequeue() {
    if (is_null(queue)) {
        error("dequeue() cannot be done on a queue of size 0.");
    }
    
    const ans = head(queue);
    queue = tail(queue);
    return ans;
}


