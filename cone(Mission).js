import {show, scale, overlay_frac, circle} from "rune";

function cone(n, rune){
    // your answer here
    return n === 1
        ? rune
        : overlay_frac((n - 1)/n, cone(n - 1, scale((n - 1)/n , rune)), rune);
}

function cone_iter(n, rune) {
    function helper(start, stop, prod, init) {
        const sc = 1 / (start + 1);
        return start === stop
            ? prod
            : helper(start + 1, stop, overlay_frac(sc, scale((stop - start)/ stop, init), prod), init);
    }
    return helper(1, n, rune, rune);
}

// Tests
// show(cone_iter(4, circle));
show(cone(4, circle));