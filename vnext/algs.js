var Algs = (function () {
    sets = {
        cmll: { name: "CMLL", source: "https://sites.google.com/view/kianroux/cmll", algs: [
            { id: "o_adjacent_swap", alg: "R U R' F' R U R' U' R' F R2 U' R'", kind: "cmll" },
            { id: "o_diagonal_swap", alg: "r2 D r' U r D' R2 U' F' U' F", kind: "cmll" },
            { id: "h_columns", alg: "R U2 R' U' R U R' U' R U' R'", kind: "cmll" },
            { id: "h_rows", alg: "F R U R' U' R U R' U' R U R' U' F'", kind: "cmll" },
            { id: "h_column", alg: "U R U2' R2' F R F' U2 R' F R F'", kind: "cmll" },
            { id: "h_row", alg: "r U' r2' D' r U' r' D r2 U r'", kind: "cmll" },
            { id: "pi_right_bar", alg: "F R U R' U' R U R' U' F'", kind: "cmll" },
            { id: "pi_back_slash", alg: "U F R' F' R U2 R U' R' U R U2' R'", kind: "cmll" },
            { id: "pi_x_checkerboard", alg: "U' R' F R U F U' R U R' U' F'", kind: "cmll" },
            { id: "pi_forward_slash", alg: "R U2 R' U' R U R' U2' R' F R F'", kind: "cmll" },
            { id: "pi_columns", alg: "U' r U' r2' D' r U r' D r2 U r'", kind: "cmll" },
            { id: "pi_left_bar", alg: "U' R' U' R' F R F' R U' R' U2 R", kind: "cmll" },
            { id: "u_forward_slash", alg: "U2 R2 D R' U2 R D' R' U2 R'", kind: "cmll" },
            { id: "u_back_slash", alg: "R2' D' R U2 R' D R U2 R", kind: "cmll" },
            { id: "u_front_row", alg: "R2' F U' F U F2 R2 U' R' F R", kind: "cmll" },
            { id: "u_rows", alg: "U' F R2 D R' U R D' R2' U' F'", kind: "cmll" },
            { id: "u_x_checkerboard", alg: "U2 r U' r' U r' D' r U' r' D r", kind: "cmll" },
            { id: "u_back_row", alg: "U' F R U R' U' F'", kind: "cmll" },
            { id: "t_left_bar", alg: "U' R U R' U' R' F R F'", kind: "cmll" },
            { id: "t_right_bar", alg: "U L' U' L U L F' L' F", kind: "cmll" },
            { id: "t_rows", alg: "F R' F R2 U' R' U' R U R' F2", kind: "cmll" },
            { id: "t_front_row", alg: "r' U r U2' R2' F R F' R", kind: "cmll" },
            { id: "t_back_row", alg: "r' D' r U r' D r U' r U r'", kind: "cmll" },
            { id: "t_columns", alg: "U2 r2' D' r U r' D r2 U' r' U' r", kind: "cmll" },
            { id: "s_left_bar", alg: "U R U R' U R U2 R'", kind: "cmll" },
            { id: "s_x_checkerboard", alg: "U L' U2 L U2' L F' L' F", kind: "cmll" },
            { id: "s_forward_slash", alg: "U F R' F' R U2 R U2' R'", kind: "cmll" },
            { id: "s_Columns", alg: "U2 R' U' R U' R2' F' R U R U' R' F U2' R", kind: "cmll" },
            { id: "s_right_bar", alg: "U' R U R' U R' F R F' R U2' R'", kind: "cmll" },
            { id: "s_back_slash", alg: "U R U' L' U R' U' L", kind: "cmll" },
            { id: "as_right_bar", alg: "U R' U' R U' R' U2' R", kind: "cmll" },
            { id: "as_columns", alg: "U' R2 D R' U R D' R' U R' U' R U' R'", kind: "cmll" },
            { id: "as_back_slash", alg: "U' F' L F L' U2' L' U2 L", kind: "cmll" },
            { id: "as_x_checkerboard", alg: "U' R U2' R' U2 R' F R F'", kind: "cmll" },
            { id: "as_forward_slash", alg: "U' L' U R U' L U R'", kind: "cmll" },
            { id: "as_left_bar", alg: "R' U' R U' R' U R' F R F' U R", kind: "cmll" },
            { id: "l_mirror", alg: "F R U' R' U' R U R' F'", kind: "cmll" },
            { id: "l_inverse", alg: "F R' F' R U R U' R'", kind: "cmll" },
            { id: "l_pure", alg: "R U2 R' U' R U R' U' R U R' U' R U' R'", kind: "cmll" },
            { id: "l_front_commutator", alg: "R U2 R D R' U2 R D' R2'", kind: "cmll" },
            { id: "l_diag", alg: "R' U' R U R' F' R U R' U' R' F R2", kind: "cmll" },
            { id: "l_back_commutator", alg: "U R' U2 R' D' R U2 R' D R2", kind: "cmll" }]
        },
        coll: { name: "COLL", source: "http://www.cyotheking.com/coll", algs: [
            { id: "s_1", alg: "R U R' U R U2 R'", kind: "coll" },
            { id: "s_2", alg: "U' R U R' U R U' R D R' U' R D' R2'", kind: "coll" },
            { id: "s_3", alg: "U2 R U R' U R2 D R' U2 R D' R2'", kind: "coll" },
            { id: "s_4", alg: "F' R U2 R' U2 R' F2 R U R U' R' F'", kind: "coll" },
            { id: "s_5", alg: "L' R U R' U' L U2 R U2 R'", kind: "coll" },
            { id: "s_6", alg: "R U' L' U R' U' L", kind: "coll" },
            { id: "as_1", alg: "R' U' R U' R' U2 R", kind: "coll" },
            { id: "as_2", alg: "U2 R U2 R' U2 L' U R U' R' L", kind: "coll" },
            { id: "as_3", alg: "U2 R2 D R' U R D' R' U R' U' R U' R'", kind: "coll" },
            { id: "as_4", alg: "R' U L U' R U L'", kind: "coll" },
            { id: "as_5", alg: "U2 R2 D R' U2 R D' R2 U' R U' R'", kind: "coll" },
            { id: "as_6", alg: "R U' R' U2 R U' R' U2 R' D' R U R' D R", kind: "coll" },
            { id: "t_1", alg: "r U R' U' r' F R F'", kind: "coll" },
            { id: "t_2", alg: "U' R' F R U R' U' R' F' R2 U' R' U2 R", kind: "coll" },
            { id: "t_3", alg: "U2 l' U' L U R U' r' F", kind: "coll" },
            { id: "t_4", alg: "U' F R U R' U' R U' R' U' R U R' F'", kind: "coll" },
            { id: "t_5", alg: "U R U2 R' U' R U' R2 U2 R U R' U R", kind: "coll" },
            { id: "t_6", alg: "U' R U' R2' D' r U2 r' D R2 U R'", kind: "coll" },
            { id: "u_1", alg: "R2 D R' U2 R D' R' U2 R'", kind: "coll" },
            { id: "u_2", alg: "U2 R' F R U' R' U' R U R' F' R U R' U' R' F R F' R", kind: "coll" },
            { id: "u_3", alg: "U2 R2' D' R U2 R' D R U2 R", kind: "coll" },
            { id: "u_4", alg: "R' F2 R U2 R U2 R' F2 R U2 R'", kind: "coll" },
            { id: "u_5", alg: "R U R' U R U2 R2 U' R U' R' U2 R", kind: "coll" },
            { id: "u_6", alg: "U2 R2 D' R U R' D R U R U' R' U' R", kind: "coll" },
            { id: "l_1", alg: "F' r U R' U' r' F R", kind: "coll" },
            { id: "l_2", alg: "U R' U' R U R' F' R U R' U' R' F R2", kind: "coll" },
            { id: "l_3", alg: "U' F R' F' r U R U' r'", kind: "coll" },
            { id: "l_4", alg: "U' R U2 R D R' U2 R D' R2", kind: "coll" },
            { id: "l_5", alg: "R' U' R U' R' U R U' R' U R U' R' U2 R", kind: "coll" },
            { id: "l_6", alg: "U2 R' U2 R' D' R U2 R' D R2", kind: "coll" },
            { id: "pi_1", alg: "R U2 R2' U' R2 U' R2' U2' R", kind: "coll" },
            { id: "pi_2", alg: "R U R' U' R' F R2 U R' U' R U R' U' F'", kind: "coll" },
            { id: "pi_3", alg: "R' F2 R U2 R U2 R' F2 U' R U' R'", kind: "coll" },
            { id: "pi_4", alg: "r U' r' U' r U r' U' x' R2 U' R' U R' x", kind: "coll" },
            { id: "pi_5", alg: "U F U R U' R' U R U2 R' U' R U R' F'", kind: "coll" },
            { id: "pi_6", alg: "R U D' R U R' D R2 U' R' U' R2' U2' R", kind: "coll" },
            { id: "h_1", alg: "R U R' U R U' R' U R U2 R'", kind: "coll" },
            { id: "h_2", alg: "U' F R U R' U' R U R' U' R U R' U' F'", kind: "coll" },
            { id: "h_3", alg: "F R U' R' U R U2 R' U' R U R' U' F'", kind: "coll" },
            { id: "h_4", alg: "R' F' R U2 R U2 R' F U' R U' R'", kind: "coll" }]
        },
        oll: { name: "OLL", source: "http://www.cyotheking.com/oll", algs: [
            { id: "all_edges1", alg: "R U R' U R U2 R'", kind: "oll" },
            { id: "all_edges2", alg: "R' U' R U' R' U2 R", kind: "oll" },
            { id: "all_edges3", alg: "R U R' U R U' R' U R U2 R'", kind: "oll" },
            { id: "all_edges4", alg: "R2 D R' U2 R D' R' U2 R'", kind: "oll" },
            { id: "all_edges5", alg: "F' r U R' U' L' U l", kind: "oll" },
            { id: "all_edges6", alg: "R U2 R2 U' R2 U' R2 U2 R", kind: "oll" },
            { id: "all_edges7", alg: "r U R' U' L' U l F'", kind: "oll" },
            { id: "on_edges1", alg: "U2 r' R2 U R' U r U2 r' U M'", kind: "oll" },
            { id: "on_edges2", alg: "U r U R' U2 R U2 r' U2 r U' r'", kind: "oll" },
            { id: "on_edges3", alg: "R U2 R2 F R F' U2 R' F R F'", kind: "oll" },
            { id: "on_edges4", alg: "U' r R2 U' R U' r' U2 r U' M", kind: "oll" },
            { id: "on_edges5", alg: "R U R' U R' F R F' U2 R' F R F' ", kind: "oll" },
            { id: "on_edges6", alg: "U R2 D' r U r' D R2 r' U r U' r' U' r", kind: "oll" },
            { id: "on_edges7", alg: "M U R U R' U' M' R' F R F'", kind: "oll" },
            { id: "on_edges8", alg: "r U R' U' M2 U R U' R' U' M'", kind: "oll" },
            { id: "p1", alg: "R' U' F U R U' R' F' R", kind: "oll" },
            { id: "p2", alg: "R U B' U' R' U R B R'", kind: "oll" },
            { id: "p3", alg: "U2 R' U' F R' F' R U R", kind: "oll" },
            { id: "p4", alg: "F U R U' R' F'", kind: "oll" },
            { id: "w1", alg: "L' U' L U' L' U L U L F' L' F", kind: "oll" },
            { id: "w2", alg: "R U R' U R U' R' U' R' F R F'", kind: "oll" },
            { id: "l1", alg: "F' L' U' L U L' U' L U F", kind: "oll" },
            { id: "l2", alg: "F R U R' U' R U R' U' F'", kind: "oll" },
            { id: "l3", alg: "r U' r2 U r2 U r2 U' r", kind: "oll" },
            { id: "l4", alg: "l' U l2 U' l2 U' l2 U l'", kind: "oll" },
            { id: "l5", alg: "l' U' L U' L' U L U' L' U2 l", kind: "oll" },
            { id: "l6", alg: "U' r U2 R' U' R U R' U' R U' r'", kind: "oll" },
            { id: "c1", alg: "R U R' U' x D' R' U R U' D x'", kind: "oll" },
            { id: "c2", alg: "R' U' R' F R F' U R", kind: "oll" },
            { id: "t1", alg: "R U R' U' R' F R F'", kind: "oll" },
            { id: "t2", alg: "F R U R' U' F'", kind: "oll" },
            { id: "i1", alg: "f R U R' U' R U R' U' f'", kind: "oll" },
            { id: "i2", alg: "U' F U R U' R2' F' R U2 R U2 R'", kind: "oll" },
            { id: "i3", alg: "U R' F R U R U' R2 F' R2 U' R' U R U R'", kind: "oll" },
            { id: "i4", alg: "r U r' U R U' R' U R U' R' r U' r'", kind: "oll" },
            { id: "square1", alg: "l' U2 L U L' U l", kind: "oll" },
            { id: "square2", alg: "r U2 R' U' R U' r'", kind: "oll" },
            { id: "big_lightning1", alg: "R' F R U R' U' F' U R", kind: "oll" },
            { id: "big_lightning2", alg: "L F' L' U' L U F U' L'", kind: "oll" },
            { id: "small_lightning1", alg: "r U R' U R U2 r'", kind: "oll" },
            { id: "small_lightning2", alg: "l' U' L U' L' U2 l", kind: "oll" },
            { id: "small_lightning3", alg: "r' R2 U R' U R U2 R' U M'", kind: "oll" },
            { id: "small_lightning4", alg: "r R2 U' R U' R' U2 R U' M", kind: "oll" },
            { id: "fish1", alg: "R U R' y R' F R U' R' F' R", kind: "oll" },
            { id: "fish2", alg: "R U R' U' R' F R2 U R' U' F'", kind: "oll" },
            { id: "fish3", alg: "R U2 R2 F R F' R U2 R'", kind: "oll" },
            { id: "fish4", alg: "F R U' R' U' R U R' F'", kind: "oll" },
            { id: "knight1", alg: "F U R U' R2 F' R U R U' R'", kind: "oll" },
            { id: "knight2", alg: "R' F R U R' F' R F U' F'", kind: "oll" },
            { id: "knight3", alg: "R' F' R L' U' L U R' F R", kind: "oll" },
            { id: "knight4", alg: "r U r' R U R' U' r U' r'", kind: "oll" },
            { id: "awkward1", alg: "r2 D' r U r' D r2 U' r' U' r", kind: "oll" },
            { id: "awkward2", alg: "F U l F' U R' D' R U' l'", kind: "oll" },
            { id: "awkward3", alg: "R U R' U R U2 R' F R U R' U' F'", kind: "oll" },
            { id: "awkward4", alg: "R' U' R U' R' U2 R F R U R' U' F'", kind: "oll" },
            { id: "all_corners1", alg: "r U R' U' r' R U R U' R'", kind: "oll" },
            { id: "all_corners2", alg: "R U R' U' r R' U R U' r'", kind: "oll" }]
        },
        pll: { name: "PLL", source: "http://www.cyotheking.com/pll", algs: [
            { id: "ub", alg: "M2 U' M U2 M' U' M2", kind: "pll" },
            { id: "ua", alg: "M2 U M U2 M' U M2", kind: "pll" },
            { id: "h", alg: "M2 U M2 U2 M2 U M2 ", kind: "pll" },
            { id: "z", alg: "M2 U M2 U M' U2 M2 U2 M' ", kind: "pll" },
            { id: "aa", alg: "x R' U R' D2 R U' R' D2 R2 x'", kind: "pll" },
            { id: "ab", alg: "x' R U' R D2 R' U R D2 R2 x", kind: "pll" },
            { id: "f", alg: "U' R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", kind: "pll" },
            { id: "t", alg: "R U R' U' R' F R2 U' R' U' R U R' F'", kind: "pll" },
            { id: "ga", alg: "R2 u R' U R' U' R u' R2 y' R' U R", kind: "pll" },
            { id: "gb", alg: "U F' U' F R2 u R' U R U' R u' R2", kind: "pll" },
            { id: "gc", alg: "U2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2", kind: "pll" },
            { id: "gd", alg: "R U R' U' D R2 U' R U' R' U R' U R2 D' ", kind: "pll" },
            { id: "ra", alg: "R U R' F' R U2 R' U2 R' F R U R U2 R'", kind: "pll" },
            { id: "rb", alg: "R' U2 R U2 R' F R U R' U' R' F' R2 U'", kind: "pll" },
            { id: "ja", alg: "R' U L' U2 R U' R' U2 R r x'", kind: "pll" },
            { id: "jb", alg: "R U R' F' R U R' U' R' F R2 U' R' ", kind: "pll" },
            { id: "y", alg: "F R U' R' U' R U R' F' R U R' U' R' F R F' ", kind: "pll" },
            { id: "e", alg: "x' R U' R' D R U R' D' R U R' D R U' R' D' x", kind: "pll" },
            { id: "v", alg: "R' U R' U' y R' F' R2 U' R' U R' F R F", kind: "pll" },
            { id: "nb", alg: "z U' R D' R2 U R' D U' R D' R2 U R' D z'", kind: "pll" },
            { id: "na", alg: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", kind: "pll" }]
        },
        eo: { name: "EO", source: "https://sites.google.com/view/kianroux/eo", algs: [
            { id: "eo6", alg: "R U' r' U' M' U r U r'", kind: "eo" },
            { id: "eo4af", alg: "M' U' M'", kind: "eo" },
            { id: "eo4ab", alg: "M U' M'", kind: "eo" },
            { id: "eo4tc", alg: "M' U2 M' U2 M' U' M'", kind: "eo" },
            { id: "eo4sc", alg: "M' U2 M' U2 M U' M", kind: "eo" },
            { id: "eo4lb", alg: "M2 U' M' U' M'", kind: "eo" }, // AUF specific
            { id: "eo2tb", alg: "M' U M U' M' U' M'", kind: "eo" },
            { id: "eo2bb", alg: "M' U M' U' M U' M'", kind: "eo" },
            { id: "eo2tl", alg: "M' U M' U2 M' U' M'", kind: "eo" }, // AUF specific
            { id: "eo1ft", alg: "M' U' M' U' M U' M'", kind: "eo" },
            { id: "eo1bt", alg: "M' U' M U' M' U' M'", kind: "eo" }]
        }
    }

    return {
        sets: sets
    };
}());