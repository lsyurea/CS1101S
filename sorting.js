//in-place sorting

//iterative-recursive hybrid
function selection_sort(L) {
    if (!is_null(L)) {
        const len = length(L);
        let cur_lst = tail(L);
        while (!is_null(cur_lst)) {
            if (head(L) > head(cur_lst)) {
                const temp = head(L);
                set_head(L, head(cur_lst));
                set_head(cur_lst, temp);
            }
            cur_lst = tail(cur_lst);
        }
        selection_sort(tail(L));
    }
}


//iterative-recursive hybrid
function bubble_sort(L) {
    function bubble(xs, end) {
        if (length(xs) > end + 1) {
            if (head(xs) > head(tail(xs))) {
                const temp = head(xs);
                set_head(xs, head(tail(xs)));
                set_head(tail(xs), temp);
            }
            bubble(tail(xs), end);
        }
    }
    
    for (let i = 0; i < length(L) - 1; i = i + 1) {
        bubble(L, i);
    }
}

const LL = list(3, 5, 2, 4, 1, 3, 7, 9);
bubble_sort(LL);
LL;

//recursive implementation
function bubble_sort(xs) {
    function bubble(ls) {
        if (is_null(ls) || is_null(tail(ls))) {
            return ls;
        }
        const prev = bubble(tail(ls));
        if (head(ls) > head(prev)) {
            const temp = head(ls);
            set_head(ls, head(prev));
            set_head(prev, temp);
        }
        return ls;
    }
    
    if (!is_null(xs) && !is_null(tail(xs))) {
        bubble(xs);
        bubble_sort(tail(xs));
    }
}

const L = list(1, 4, -9, 2, 5, 3, -7);
bubble_sort(L);
L;