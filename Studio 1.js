// studio session 1

//problem 1

//assume only biggie size or non-biggie size inputs were given
function biggie_size(n) {
    return !is_biggie_size(n)? n + 4: n;
}



function unbiggie_size(n) {
    return is_biggie_size(n)? n - 4: n;
}

function is_biggie_size(n) {
    return n > 4 && n <= 8 && n === math_floor(n); //check for int
}

function combo_price(n) {
    return is_biggie_size(n) ? (n - 4) * 1.17 + 0.5: n*1.17;
    
}

function empty_order() {
    return 0;
}

function add_to_order(prev, combo) {
    // return prev !== 0 ? prev * 10 + combo: combo;
    prev * 10 + combo;
    // not necessary to use predicate
}

function last_combo(combo) {
    return combo%10;
}

function other_combos(combo) {
    return math_floor(combo/10);
}


