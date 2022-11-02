//PE 1617

// Instructions for students who are using this for practice:

function is_nucleobase(s) {

    // WRITE HERE.
    return s === "A" || s === "T" || s === "C"|| s === "G";

}



////////////////////////////////////////////////////////////
// Question 1B
////////////////////////////////////////////////////////////

function is_dna_strand(xs) {

    // WRITE HERE.
    return is_null(xs) 
           ? true 
           : is_nucleobase(head(xs)) && is_dna_strand(tail(xs));
}



////////////////////////////////////////////////////////////
// Question 1C
////////////////////////////////////////////////////////////

function combine(xss) {

    // WRITE HERE.
    return accumulate(append, null, xss);
}



////////////////////////////////////////////////////////////
// Question 1D
////////////////////////////////////////////////////////////

function oxoguanine_repair(xs) {

    // WRITE HERE.
    return map(x => x === "8" ? "G" : x, xs);
}



////////////////////////////////////////////////////////////
// Question 1E
////////////////////////////////////////////////////////////

function find_gene_start(xs) {

    // WRITE HERE.
    if (length(xs) < 3) {
        return null;
    }
    if (head(xs) === "A" && list_ref(xs, 1) === "T" 
            && list_ref(xs, 2) === "G") {
        const res = tail(tail(tail(xs)));
        return list(res);
    }
    return find_gene_start(tail(xs));
}


////////////////////////////////////////////////////////////
// Question 1F
////////////////////////////////////////////////////////////

function find_gene_end(xs) {

    // WRITE HERE.
    if (length(xs) < 3) {
        return null;
    }
    const cur = list(head(xs), list_ref(xs, 1), list_ref(xs, 2));
    if (equal(cur, list("T", "A", "G")) || equal(cur, list("T", "A", "A"))
            || equal(cur, list("T", "G", "A"))) {
        return list(null);
    }
    const next = find_gene_end(tail(xs));
    if (is_null(next)) {
        return next;
    }
    return pair(pair(head(xs), head(next)), null);
}


////////////////////////////////////////////////////////////
// Question 1G
////////////////////////////////////////////////////////////

function all_genes(xs) {

    // WRITE HERE.
    if (is_null(xs)) {
        return null;
    }
    const now = find_gene_start(xs);
    if (is_null(now)) {
        return null;
    }
    if (is_null(find_gene_end(head(now)))) {
        return null;
    }
    return pair(head(find_gene_end(head(now))), all_genes(head(now)));
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


//===========================================================
// This function is provided for running the testcases
// in the Source Academy Playground.
// They are NOT part of the actual testing facility provided
// in the actual Practical Assessment.
//===========================================================
function assert(f, test_name, fnames) {
    display(test_name + ": " + (f() ? "PASS" : "FAIL"));
}
//===========================================================



////////////////////////////////////////////////////////////
// Test Cases for Q1A
////////////////////////////////////////////////////////////

// assert(
//     () => {
//         return equal(is_nucleobase("Mary"), false);
//     },
//     "Q1A-P01",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_nucleobase("T"), true);
//     },
//     "Q1A-P02",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_nucleobase("^^^"), false);
//     },
//     "Q1A-P03",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_nucleobase("Mary"), false);
//     },
//     "Q1A-T01",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_nucleobase("G"), true);
//     },
//     "Q1A-T02",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_nucleobase("A"), true);
//     },
//     "Q1A-T03",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_nucleobase("TAG"), false);
//     },
//     "Q1A-T04",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_nucleobase("C"), true);
//     },
//     "Q1A-T05",
//     ['is_nucleobase']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q1B
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         return equal(is_dna_strand(list("A", "G", "A")), true);
//     },
//     "Q1B-P01",
//     ['is_dna_strand']
// );

// assert(
//     () => {
//         return equal(is_dna_strand(list("A", "B", "B", "A")), false);
//     },
//     "Q1B-P02",
//     ['is_dna_strand']
// );


// assert(
//     () => {
//         return equal(is_dna_strand(list("T", "G", "C")), true);
//     },
//     "Q1B-P03",
//     ['is_dna_strand']
// );


// assert(
//     () => {
//         return equal(is_dna_strand(list("T", "G", "Otto")), false);
//     },
//     "Q1B-P04",
//     ['is_dna_strand']
// );

// assert(
//     () => {
//         return equal(is_dna_strand(list("T", "G", "C", "B")), false);
//     },
//     "Q1B-T01",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_dna_strand(null), true);
//     },
//     "Q1B-T02",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_dna_strand(list("A", "A", "A")), true);
//     },
//     "Q1B-T03",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_dna_strand(list("_", "A", "T")), false);
//     },
//     "Q1B-T04",
//     ['is_nucleobase']
// );

// assert(
//     () => {
//         return equal(is_dna_strand(list("T", "G", "C", "TT")), false);
//     },
//     "Q1B-T05",
//     ['is_nucleobase']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q1C
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         return equal(combine(list(list("A", "G", "A", "T", "A"),
//                                   list("A"),
//                                   list("G", "A", "G"))),
//                     list("A", "G", "A", "T", "A", "A", "G", "A", "G"));
//     },
//     "Q1C-P01",
//     ['combine']
// );

// assert(
//     () => {
//         return equal(combine(list(list("G"),
//                                   list("G"),
//                                   list("C", "T", "C", "T"),
//                                   list("A"))),
//                      list("G", "G", "C", "T", "C", "T", "A"));
//     },
//     "Q1C-P02",
//     ['combine']
// );

// assert(
//     () => {
//         return equal(combine(list(list("A", "A", "A"),
//                                   list("G"),
//                                   list("C", "G", "C", "T"),
//                                   list("A", "C"))),
//                      list("A", "A", "A", "G", "C", "G", "C", "T", "A", "C"));
//     },
//     "Q1C-T01",
//     ['combine']
// );

// assert(
//     () => {
//         return equal(combine(null),
//                      null);
//     },
//     "Q1C-T02",
//     ['combine']
// );

// assert(
//     () => {
//         return equal(combine(list(null)),
//                      null);
//     },
//     "Q1C-T03",
//     ['combine']
// );

// assert(
//     () => {
//         return equal(combine(list(list("A"))),
//                      list("A"));
//     },
//     "Q1C-T04",
//     ['combine']
// );

// assert(
//     () => {
//         return equal(combine(list(null, null, list("T"))),
//                      list("T"));
//     },
//     "Q1C-T05",
//     ['combine']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q1D
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         return equal(oxoguanine_repair(list("A", "8", "A", "8", "C", "T", "A", "C")),
//                      list("A", "G", "A", "G", "C", "T", "A", "C"));
//     },
//     "Q1D-P01",
//     ['oxoguanine_repair']
// );

// assert(
//     () => {
//         return equal(oxoguanine_repair(list("8", "8", "8", "8", "8")),
//                      list("G", "G", "G", "G", "G"));
//     },
//     "Q1D-T01",
//     ['oxoguanine_repair']
// );

// assert(
//     () => {
//         return equal(oxoguanine_repair(list("A", "A", "A", "A")),
//                      list("A", "A", "A", "A"));
//     },
//     "Q1D-T02",
//     ['oxoguanine_repair']
// );

// assert(
//     () => {
//         return equal(oxoguanine_repair(null),
//                      null);
//     },
//     "Q1D-T03",
//     ['oxoguanine_repair']
// );

// assert(
//     () => {
//         return equal(oxoguanine_repair(list("A", "T", "G", "C", "8")),
//                      list("A", "T", "G", "C", "G"));
//     },
//     "Q1D-T04",
//     ['oxoguanine_repair']
// );

// assert(
//     () => {
//         return equal(oxoguanine_repair(list("8", "C")),
//                      list("G", "C"));
//     },
//     "Q1D-T05",
//     ['oxoguanine_repair']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q1E
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         return equal(find_gene_start(list("A", "C", "A", "T", "G", "T", "A", "C")),
//                      list(list("T", "A", "C")));
//     },
//     "Q1E-P01",
//     ['find_gene_start']
// );

// assert(
//     () => {
//         return equal(find_gene_start(list("A", "T", "A", "C", "G", "T", "A", "C")),
//                      null);
//     },
//     "Q1E-P02",
//     ['find_gene_start']
// );

// assert(
//     () => {
//         return equal(find_gene_start(list("A", "T", "A", "G", "T", "A", "T", "G")),
//                      list(null));
//     },
//     "Q1E-P03",
//     ['find_gene_start']
// );

// assert(
//     () => {
//         return equal(find_gene_start(null),
//                      null);
//     },
//     "Q1E-T01",
//     ['find_gene_start']
// );

// assert(
//     () => {
//         return equal(find_gene_start(list("A", "A", "A", "T", "G", "A", "T", "G")),
//                      list(list("A", "T", "G")));
//     },
//     "Q1E-T02",
//     ['find_gene_start']
// );

// assert(
//     () => {
//         return equal(find_gene_start(list("A", "T", "G", "C", "G", "T", "A", "C")),
//                      list(list("C", "G", "T", "A", "C")));
//     },
//     "Q1E-T03",
//     ['find_gene_start']
// );

// assert(
//     () => {
//         return equal(find_gene_start(list("A", "T", "A", "T", "A", "T", "A", "T")),
//                      null);
//     },
//     "Q1E-T04",
//     ['find_gene_start']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q1F
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         return equal(find_gene_end(list("A", "G", "A", "G", "T", "A", "A", "T", "A", "A")),
//                      list(list("A", "G", "A", "G")));
//     },
//     "Q1F-P01",
//     ['find_gene_end']
// );

// assert(
//     () => {
//         return equal(find_gene_end(list("A", "T", "A", "C", "C", "A", "G", "A", "T")),
//                      null);
//     },
//     "Q1F-P02",
//     ['find_gene_end']
// );

// assert(
//     () => {
//         return equal(find_gene_end(list("T", "G", "A", "A", "T", "A", "C")),
//                      list(null));
//     },
//     "Q1F-P03",
//     ['find_gene_end']
// );

// assert(
//     () => {
//         return equal(find_gene_end(list("G", "C", "T", "G", "A", "T", "A", "A")),
//                      list(list("G", "C")));
//     },
//     "Q1F-T01",
//     ['find_gene_end']
// );

// assert(
//     () => {
//         return equal(find_gene_end(list("T", "T", "A", "C", "A", "G", "A", "T")),
//                      null);
//     },
//     "Q1F-T02",
//     ['find_gene_end']
// );

// assert(
//     () => {
//         return equal(find_gene_end(list("T", "A", "A", "T", "G", "A", "C")),
//                      list(null));
//     },
//     "Q1F-T03",
//     ['find_gene_end']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q1G
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         return equal(all_genes(list("C", "T", "A", "A", "G", "C")),
//                      null);
//     },
//     "Q1G-P01",
//     ['all_genes']
// );

// assert(
//     () => {
//         return equal(all_genes(list("A", "A", "T", "G", "A", "C", "T",
//                                     "A", "G", "G")),
//                      list(list("A", "C")));
//     },
//     "Q1G-P02",
//     ['all_genes']
// );

// assert(
//     () => {
//         return equal(all_genes(list("T", "A", "T", "G", "C", "A", "T",
//                                     "A", "A", "G", "T", "A", "G", "A",
//                                     "T", "G", "A", "T", "G", "A", "T")),
//                      list(list("C", "A"), list("A")));
//     },
//     "Q1G-P03",
//     ['all_genes']
// );

// Instructions for students who are using this for practice:
//
// (1) Copy and paste this entire file into the editor of Source Academy
//     Playground at https://sourceacademy.nus.edu.sg/playground
// (2) Write your solution for each task in the Source Academy Playground.
// (3) Run the program to test your solution on the given testcases.


////////////////////////////////////////////////////////////
// Question 2A
////////////////////////////////////////////////////////////

function all_different(nums) {

    // WRITE HERE.
    if (is_null(nums)) {
        return true;
    }
    if (!is_null(member(head(nums), tail(nums)))) {
        return false;
    }
    return all_different(tail(nums));
}



////////////////////////////////////////////////////////////
// Question 2B
////////////////////////////////////////////////////////////

function is_valid_toto_set(nums, n, min, max) {

    // WRITE HERE.
    return length(nums) === n && length(filter(x => x < min, nums)) === 0 &&
            length(filter(x => x > max, nums)) === 0 && all_different(nums);
}



////////////////////////////////////////////////////////////
// Question 2C
////////////////////////////////////////////////////////////

function num_of_matches(numsA, numsB) {

    // WRITE HERE.
    if (is_null(numsA) || is_null(numsB)) {
        return 0;
    }
    if (is_null(member(head(numsA), numsB))) {
        return num_of_matches(tail(numsA), numsB);
    }
    return 1 + num_of_matches(numsA, remove(head(numsA), numsB));

}



////////////////////////////////////////////////////////////
// Question 2D
////////////////////////////////////////////////////////////

function check_winning_group(bet_nums, draw_nums, extra_num) {

    // WRITE HERE.
    const num = num_of_matches(bet_nums, draw_nums);
    const is_extra = !is_null(member(extra_num, bet_nums));
    const len = length(bet_nums);
    return num === len
           ? 1
           : num === len - 1
           ? is_extra ? 2 : 3
           : num === len - 2
           ? is_extra ? 4 : 5
           : 0;
}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// assert(
//     () => {
//         const nums = list(23);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T1",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(2, 5, 1, 6, 7, 4, 3);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T2",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(2, 6, 1, 7, 6, 4, 3);
//         return equal(all_different(nums), false);
//     },
//     "Q2A-T3",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(3, 2);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T4",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(3, 2, 1, 9, 8);
//         return equal(all_different(nums), true);
//     },
//     "Q2A-T5",
//     ['all_different']
// );

// assert(
//     () => {
//         const nums = list(2, 6, 3, 7, 6, 6, 3, 1);
//         return equal(all_different(nums), false);
//     },
//     "Q2A-T6",
//     ['all_different']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q2B
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const nums = list(5, 1, 8, 49);
//         const n = 6;
//         const min = 1;
//         const max = 49;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T1",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(25, 13, 2, 31, 30, 3, 15);
//         const n = 7;
//         const min = 3;
//         const max = 30;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T2",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(25, 13, 8, 14, 30, 3, 8);
//         const n = 7;
//         const min = 3;
//         const max = 30;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T3",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(25, 13, 8, 14, 30, 3, 15);
//         const n = 7;
//         const min = 3;
//         const max = 30;
//         return equal(is_valid_toto_set(nums, n, min, max), true);
//     },
//     "Q2B-T4",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(40, 20, 30, 15, 10);
//         const n = 5;
//         const min = 10;
//         const max = 40;
//         return equal(is_valid_toto_set(nums, n, min, max), true);
//     },
//     "Q2B-T5",
//     ['is_valid_toto_set']
// );

// assert(
//     () => {
//         const nums = list(40, 20, 30, 15, 40);
//         const n = 5;
//         const min = 10;
//         const max = 40;
//         return equal(is_valid_toto_set(nums, n, min, max), false);
//     },
//     "Q2B-T6",
//     ['is_valid_toto_set']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q2C
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40);
//         const numsB = list(3, 29, 40, 15, 20 );
//         return equal(num_of_matches(numsA, numsB), 2);
//     },
//     "Q2C-T1",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsB = list(23, 21, 30, 15, 40);
//         const numsA = list(3, 29, 40, 15, 20);
//         return equal(num_of_matches(numsA, numsB), 2);
//     },
//     "Q2C-T2",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40);
//         const numsB = list(31, 29, 41, 16, 20);
//         return equal(num_of_matches(numsA, numsB), 0);
//     },
//     "Q2C-T3",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40, 4, 2, 1);
//         const numsB = list(1, 21, 23, 30, 4, 15, 2, 40);
//         return equal(num_of_matches(numsA, numsB), 8);
//     },
//     "Q2C-T4",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(2, 1, 30, 15);
//         const numsB = list(31, 29, 41, 16);
//         return equal(num_of_matches(numsA, numsB), 0);
//     },
//     "Q2C-T5",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(2, 1, 30, 15);
//         const numsB = list(15, 29, 2, 16);
//         return equal(num_of_matches(numsA, numsB), 2);
//     },
//     "Q2C-T6",
//     ['num_of_matches']
// );

// assert(
//     () => {
//         const numsA = list(23, 21, 30, 15, 40, 4, 2, 1, 35);
//         const numsB = list(1, 21, 23, 35, 30, 4, 15, 2, 40);
//         return equal(num_of_matches(numsA, numsB), 9);
//     },
//     "Q2C-T7",
//     ['num_of_matches']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q2D
// ////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const bet_nums = list(40, 30, 1, 49, 23, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 1);
//     },
//     "Q2D-T1",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 30, 1, 49, 27, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 2);
//     },
//     "Q2D-T2",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 30, 1, 49, 17, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 3);
//     },
//     "Q2D-T3",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 27, 1, 49, 17, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 4);
//     },
//     "Q2D-T4",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 37, 1, 49, 17, 15);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 5);
//     },
//     "Q2D-T5",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(40, 37, 1, 49, 17, 27);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 0);
//     },
//     "Q2D-T6",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(21, 32, 1, 49, 27, 15, 3);
//         const draw_nums = list(21, 30, 1, 49, 27, 15, 3);
//         const extra_num = 32;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 2);
//     },
//     "Q2D-T7",
//     ['check_winning_group']
// );

// assert(
//     () => {
//         const bet_nums = list(41, 37, 2, 48, 17, 27);
//         const draw_nums = list(23, 1, 30, 15, 40, 49);
//         const extra_num = 27;
//         return equal(check_winning_group(bet_nums, draw_nums, extra_num), 0);
//     },
//     "Q2D-T8",
//     ['check_winning_group']
// );

// Instructions for students who are using this for practice:
//
// (1) Copy and paste this entire file into the editor of Source Academy
//     Playground at https://sourceacademy.nus.edu.sg/playground
// (2) Write your solution for each task in the Source Academy Playground.
// (3) Run the program to test your solution on the given testcases.


////////////////////////////////////////////////////////////
// Question 3A
////////////////////////////////////////////////////////////

function evaluate_BAE_tree(bae_tree) {

    // WRITE HERE.
    if (!is_list(bae_tree)) {
        return bae_tree;
    }
    const op = list_ref(bae_tree, 1);
    let left = list_ref(bae_tree, 0);
    let right = list_ref(bae_tree, 2);
    if (is_list(left)) {
        left = evaluate_BAE_tree(left);
    }
    if (is_list(right)) {
        right = evaluate_BAE_tree(right);
    }
    return op === '+'
           ? left + right
           : op === '*'
           ? left * right
           : op === '-'
           ? left - right
           : left / right;
}



////////////////////////////////////////////////////////////
// Question 3B
////////////////////////////////////////////////////////////

function build_BAE_tree(bae_list) {

    // WRITE HERE.
    const len = length(bae_list);
    if (len === 1) {
        return head(bae_list);
    }
    let l = - 1;
    let r = - 1;
    for (let i = 0; i < len; i = i + 1) {
        if (list_ref(bae_list, i) === '(') {
            l = math_max(l, i);
        }
        if (r < l && list_ref(bae_list, i) === ')') {
            r = math_max(r, i);
        }
    }
    if (l === -1) {
        return bae_list;
    } 
    const mid = build_list(x => list_ref(bae_list, x + l + 1), r - l - 1);
    const left = build_list(x => list_ref(bae_list, x), l);
    const right = build_list(x => list_ref(bae_list, x + r + 1), len - r - 1);
    return build_BAE_tree(append(left, pair(mid, right)));
}

////////////////////////////////////////////////////////////
// Question 3C
////////////////////////////////////////////////////////////

function evaluate_BAE(bae_list) {

    // WRITE HERE.
    return evaluate_BAE_tree(build_BAE_tree(bae_list));
}



////////////////////////////////////////////////////////////
// Question 3D
////////////////////////////////////////////////////////////

function check_parentheses(paren_list) {

    // WRITE HERE.
    if (is_null(paren_list)) {
        return true;
    }
    if (head(paren_list) === ')') {
        return false;
    }
    if (!is_null(member(')', tail(paren_list)))) {
        return check_parentheses(remove(')', tail(paren_list)));
    }
    return false;
}



////////////////////////////////////////////////////////////
// Test Cases for Q3A
////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const bae_tree = 23;
//         return equal(evaluate_BAE_tree(bae_tree), 23);
//     },
//     "Q3A-T1",
//     ['evaluate_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(5, "*", 6);
//         return equal(evaluate_BAE_tree(bae_tree), 30);
//     },
//     "Q3A-T2",
//     ['evaluate_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(5, "*", list(7, "+", 3));
//         return equal(evaluate_BAE_tree(bae_tree), 50);
//     },
//     "Q3A-T3",
//     ['evaluate_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(list(8, "-", 2), "*", list(7, "+", 3));
//         return equal(evaluate_BAE_tree(bae_tree), 60);
//     },
//     "Q3A-T4",
//     ['evaluate_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(list(list(20, "/", 2), "-", 2), "*",
//                             list(7, "+", 3));
//         return equal(evaluate_BAE_tree(bae_tree), 80);
//     },
//     "Q3A-T5",
//     ['evaluate_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = 100;
//         return equal(evaluate_BAE_tree(bae_tree), 100);
//     },
//     "Q3A-T6",
//     ['evaluate_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(70, "-", 15);
//         return equal(evaluate_BAE_tree(bae_tree), 55);
//     },
//     "Q3A-T7",
//     ['evaluate_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(list(list(7, "+", 5), "*", 3), "/",
//                             list(list(20, "/", 2), "-", list(100, "-", 94)));
//         return equal(evaluate_BAE_tree(bae_tree), 9);
//     },
//     "Q3A-T8",
//     ['evaluate_BAE_tree']
// );



////////////////////////////////////////////////////////////
// Test Cases for Q3B
////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const bae_tree = 23;
//         const bae_list = list(23);
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T1",
//     ['build_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(5, "*", 6);
//         const bae_list = list("(", 5, "*", 6, ")");
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T2",
//     ['build_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(5, "*", list(7, "+", 3));
//         const bae_list = list("(", 5, "*", "(", 7, "+", 3, ")", ")");
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T3",
//     ['build_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(list(8, "-", 2), "*", list(7, "+", 3));
//         const bae_list = list("(", "(", 8, "-", 2, ")", "*",
//                             "(", 7, "+", 3, ")", ")");
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T4",
//     ['build_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(list(list(20, "/", 2), "-", 2), "*",
//                             list(7, "+", 3));
//         const bae_list = list("(", "(", "(", 20, "/", 2, ")", "-", 2, ")", "*",
//                             "(", 7, "+", 3, ")", ")");
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T5",
//     ['build_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = 100;
//         const bae_list = list(100);
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T6",
//     ['build_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(70, "-", 15);
//         const bae_list = list("(", 70, "-", 15, ")");
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T7",
//     ['build_BAE_tree']
// );

// assert(
//     () => {
//         const bae_tree = list(list(list(7, "+", 5), "*", 3), "/",
//                             list(list(20, "/", 2), "-", list(100, "-", 94)));
//         const bae_list = list("(", "(", "(", 7, "+", 5, ")", "*", 3, ")", "/",
//                             "(", "(", 20, "/", 2, ")", "-",
//                                  "(", 100, "-", 94, ")", ")", ")");
//         return equal(build_BAE_tree(bae_list), bae_tree);
//     },
//     "Q3B-T8",
//     ['build_BAE_tree']
// );



////////////////////////////////////////////////////////////
// Test Cases for Q3C
////////////////////////////////////////////////////////////

// assert(
//     () => {
//         const bae_list = list(23);
//         return equal(evaluate_BAE(bae_list), 23);
//     },
//     "Q3C-T1",
//     ['evaluate_BAE']
// );

// assert(
//     () => {
//         const bae_list = list("(", 5, "*", 6, ")");
//         return equal(evaluate_BAE(bae_list), 30);
//     },
//     "Q3C-T2",
//     ['evaluate_BAE']
// );

// assert(
//     () => {
//         const bae_list = list("(", "(", "(", 20, "/", 2, ")", "-", 2, ")", "*",
//                             "(", 7, "+", 3, ")", ")");
//         return equal(evaluate_BAE(bae_list), 80);
//     },
//     "Q3C-T3",
//     ['evaluate_BAE']
// );



// ////////////////////////////////////////////////////////////
// // Test Cases for Q3D
// ////////////////////////////////////////////////////////////

assert(
    () => {
        const paren_list = list();
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T1",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", ")");
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T2",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", "(", ")", ")",
                                  "(", "(", ")", "(", ")", ")", ")");
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T3",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list(")", "(");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T4",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", ")", ")", ")", "(", "(", ")");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T5",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", ")", "(");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T6",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", ")", "(", ")", "(", ")");
        return equal(check_parentheses(paren_list), true);
    },
    "Q3D-T7",
    ['check_parentheses']
);

assert(
    () => {
        const paren_list = list("(", "(", "(", ")", ")",
                                  "(", "(", ")", ")", ")", ")", ")");
        return equal(check_parentheses(paren_list), false);
    },
    "Q3D-T8",
    ['check_parentheses']
);
