// generated by pgen/main.py
Sk.OpMap = {
"(": Sk.token.tokens.T_LPAR,
")": Sk.token.tokens.T_RPAR,
"[": Sk.token.tokens.T_LSQB,
"]": Sk.token.tokens.T_RSQB,
":": Sk.token.tokens.T_COLON,
",": Sk.token.tokens.T_COMMA,
";": Sk.token.tokens.T_SEMI,
"+": Sk.token.tokens.T_PLUS,
"-": Sk.token.tokens.T_MINUS,
"*": Sk.token.tokens.T_STAR,
"/": Sk.token.tokens.T_SLASH,
"|": Sk.token.tokens.T_VBAR,
"&": Sk.token.tokens.T_AMPER,
"<": Sk.token.tokens.T_LESS,
">": Sk.token.tokens.T_GREATER,
"=": Sk.token.tokens.T_EQUAL,
".": Sk.token.tokens.T_DOT,
"%": Sk.token.tokens.T_PERCENT,
"`": Sk.token.tokens.T_BACKQUOTE,
"{": Sk.token.tokens.T_LBRACE,
"}": Sk.token.tokens.T_RBRACE,
"@": Sk.token.tokens.T_AT,
"@=": Sk.token.tokens.T_ATEQUAL,
"==": Sk.token.tokens.T_EQEQUAL,
"!=": Sk.token.tokens.T_NOTEQUAL,
"<>": Sk.token.tokens.T_NOTEQUAL,
"<=": Sk.token.tokens.T_LESSEQUAL,
">=": Sk.token.tokens.T_GREATEREQUAL,
"~": Sk.token.tokens.T_TILDE,
"^": Sk.token.tokens.T_CIRCUMFLEX,
"<<": Sk.token.tokens.T_LEFTSHIFT,
">>": Sk.token.tokens.T_RIGHTSHIFT,
"**": Sk.token.tokens.T_DOUBLESTAR,
"+=": Sk.token.tokens.T_PLUSEQUAL,
"-=": Sk.token.tokens.T_MINEQUAL,
"*=": Sk.token.tokens.T_STAREQUAL,
"/=": Sk.token.tokens.T_SLASHEQUAL,
"%=": Sk.token.tokens.T_PERCENTEQUAL,
"&=": Sk.token.tokens.T_AMPEREQUAL,
"|=": Sk.token.tokens.T_VBAREQUAL,
"^=": Sk.token.tokens.T_CIRCUMFLEXEQUAL,
"<<=": Sk.token.tokens.T_LEFTSHIFTEQUAL,
">>=": Sk.token.tokens.T_RIGHTSHIFTEQUAL,
"**=": Sk.token.tokens.T_DOUBLESTAREQUAL,
"//": Sk.token.tokens.T_DOUBLESLASH,
"//=": Sk.token.tokens.T_DOUBLESLASHEQUAL,
"->": Sk.token.tokens.T_RARROW,
"...": Sk.token.tokens.T_ELLIPSIS
};
Sk.ParseTables = {
sym:
{and_expr: 257,
 and_test: 258,
 annassign: 259,
 arglist: 260,
 argument: 261,
 arith_expr: 262,
 assert_stmt: 263,
 async_funcdef: 264,
 async_stmt: 265,
 atom: 266,
 atom_expr: 267,
 augassign: 268,
 break_stmt: 269,
 classdef: 270,
 comp_for: 271,
 comp_if: 272,
 comp_iter: 273,
 comp_op: 274,
 comparison: 275,
 compound_stmt: 276,
 continue_stmt: 277,
 debugger_stmt: 278,
 decorated: 279,
 decorator: 280,
 decorators: 281,
 del_stmt: 282,
 dictorsetmaker: 283,
 dotted_as_name: 284,
 dotted_as_names: 285,
 dotted_name: 286,
 encoding_decl: 287,
 eval_input: 288,
 except_clause: 289,
 expr: 290,
 expr_stmt: 291,
 exprlist: 292,
 factor: 293,
 file_input: 294,
 flow_stmt: 295,
 for_stmt: 296,
 forever_stmt: 297,
 funcdef: 298,
 global_stmt: 299,
 if_stmt: 300,
 import_as_name: 301,
 import_as_names: 302,
 import_from: 303,
 import_name: 304,
 import_stmt: 305,
 lambdef: 306,
 lambdef_nocond: 307,
 nonlocal_stmt: 308,
 not_test: 309,
 or_test: 310,
 parameters: 311,
 pass_stmt: 312,
 power: 313,
 print_stmt: 314,
 raise_stmt: 315,
 repeatuntil_stmt: 316,
 return_stmt: 317,
 shift_expr: 318,
 simple_stmt: 319,
 single_input: 256,
 sliceop: 320,
 small_stmt: 321,
 star_expr: 322,
 stmt: 323,
 subscript: 324,
 subscriptlist: 325,
 suite: 326,
 term: 327,
 test: 328,
 test_nocond: 329,
 testlist: 330,
 testlist_comp: 331,
 testlist_star_expr: 332,
 tfpdef: 333,
 trailer: 334,
 try_stmt: 335,
 typedargslist: 336,
 until_stmt: 337,
 varargslist: 338,
 vfpdef: 339,
 while_stmt: 340,
 with_item: 341,
 with_stmt: 342,
 xor_expr: 343,
 yield_arg: 344,
 yield_expr: 345,
 yield_stmt: 346},
number2symbol:
{256: 'single_input',
 257: 'and_expr',
 258: 'and_test',
 259: 'annassign',
 260: 'arglist',
 261: 'argument',
 262: 'arith_expr',
 263: 'assert_stmt',
 264: 'async_funcdef',
 265: 'async_stmt',
 266: 'atom',
 267: 'atom_expr',
 268: 'augassign',
 269: 'break_stmt',
 270: 'classdef',
 271: 'comp_for',
 272: 'comp_if',
 273: 'comp_iter',
 274: 'comp_op',
 275: 'comparison',
 276: 'compound_stmt',
 277: 'continue_stmt',
 278: 'debugger_stmt',
 279: 'decorated',
 280: 'decorator',
 281: 'decorators',
 282: 'del_stmt',
 283: 'dictorsetmaker',
 284: 'dotted_as_name',
 285: 'dotted_as_names',
 286: 'dotted_name',
 287: 'encoding_decl',
 288: 'eval_input',
 289: 'except_clause',
 290: 'expr',
 291: 'expr_stmt',
 292: 'exprlist',
 293: 'factor',
 294: 'file_input',
 295: 'flow_stmt',
 296: 'for_stmt',
 297: 'forever_stmt',
 298: 'funcdef',
 299: 'global_stmt',
 300: 'if_stmt',
 301: 'import_as_name',
 302: 'import_as_names',
 303: 'import_from',
 304: 'import_name',
 305: 'import_stmt',
 306: 'lambdef',
 307: 'lambdef_nocond',
 308: 'nonlocal_stmt',
 309: 'not_test',
 310: 'or_test',
 311: 'parameters',
 312: 'pass_stmt',
 313: 'power',
 314: 'print_stmt',
 315: 'raise_stmt',
 316: 'repeatuntil_stmt',
 317: 'return_stmt',
 318: 'shift_expr',
 319: 'simple_stmt',
 320: 'sliceop',
 321: 'small_stmt',
 322: 'star_expr',
 323: 'stmt',
 324: 'subscript',
 325: 'subscriptlist',
 326: 'suite',
 327: 'term',
 328: 'test',
 329: 'test_nocond',
 330: 'testlist',
 331: 'testlist_comp',
 332: 'testlist_star_expr',
 333: 'tfpdef',
 334: 'trailer',
 335: 'try_stmt',
 336: 'typedargslist',
 337: 'until_stmt',
 338: 'varargslist',
 339: 'vfpdef',
 340: 'while_stmt',
 341: 'with_item',
 342: 'with_stmt',
 343: 'xor_expr',
 344: 'yield_arg',
 345: 'yield_expr',
 346: 'yield_stmt'},
dfas:
{256: [[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
       {2: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        41: 1,
        42: 1,
        43: 1,
        44: 1,
        45: 1,
        46: 1}],
 257: [[[[47, 1]], [[48, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 258: [[[[49, 1]], [[50, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 259: [[[[51, 1]], [[52, 2]], [[53, 3], [0, 2]], [[52, 4]], [[0, 4]]],
       {51: 1}],
 260: [[[[54, 1]], [[55, 2], [0, 1]], [[54, 1], [0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        18: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1,
        56: 1}],
 261: [[[[52, 1], [18, 2], [56, 2]],
        [[53, 2], [57, 3], [0, 1]],
        [[52, 3]],
        [[0, 3]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        18: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1,
        56: 1}],
 262: [[[[58, 1]], [[37, 0], [45, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 263: [[[[13, 1]], [[52, 2]], [[55, 3], [0, 2]], [[52, 4]], [[0, 4]]],
       {13: 1}],
 264: [[[[29, 1]], [[59, 2]], [[0, 2]]], {29: 1}],
 265: [[[[29, 1]], [[59, 2], [60, 2], [61, 2]], [[0, 2]]], {29: 1}],
 266: [[[[5, 1],
         [33, 1],
         [14, 1],
         [23, 1],
         [7, 1],
         [38, 2],
         [16, 3],
         [24, 4],
         [10, 1],
         [21, 5]],
        [[0, 1]],
        [[62, 1], [63, 6]],
        [[64, 1], [65, 7], [63, 7]],
        [[66, 1], [67, 8]],
        [[21, 5], [0, 5]],
        [[62, 1]],
        [[64, 1]],
        [[66, 1]]],
       {5: 1, 7: 1, 10: 1, 14: 1, 16: 1, 21: 1, 23: 1, 24: 1, 33: 1, 38: 1}],
 267: [[[[36, 1], [68, 2]], [[68, 2]], [[69, 2], [0, 2]]],
       {5: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        38: 1}],
 268: [[[[70, 1],
         [71, 1],
         [72, 1],
         [73, 1],
         [74, 1],
         [75, 1],
         [76, 1],
         [77, 1],
         [78, 1],
         [79, 1],
         [80, 1],
         [81, 1],
         [82, 1]],
        [[0, 1]]],
       {70: 1,
        71: 1,
        72: 1,
        73: 1,
        74: 1,
        75: 1,
        76: 1,
        77: 1,
        78: 1,
        79: 1,
        80: 1,
        81: 1,
        82: 1}],
 269: [[[[17, 1]], [[0, 1]]], {17: 1}],
 270: [[[[25, 1]],
        [[33, 2]],
        [[51, 3], [16, 4]],
        [[83, 5]],
        [[64, 6], [84, 7]],
        [[0, 5]],
        [[51, 3]],
        [[64, 6]]],
       {25: 1}],
 271: [[[[29, 1], [40, 2]],
        [[40, 2]],
        [[85, 3]],
        [[86, 4]],
        [[87, 5]],
        [[88, 6], [0, 5]],
        [[0, 6]]],
       {29: 1, 40: 1}],
 272: [[[[43, 1]], [[89, 2]], [[88, 3], [0, 2]], [[0, 3]]], {43: 1}],
 273: [[[[90, 1], [57, 1]], [[0, 1]]], {29: 1, 40: 1, 43: 1}],
 274: [[[[91, 1],
         [92, 1],
         [22, 2],
         [91, 1],
         [93, 1],
         [86, 1],
         [94, 1],
         [95, 3],
         [96, 1],
         [97, 1]],
        [[0, 1]],
        [[86, 1]],
        [[22, 1], [0, 3]]],
       {22: 1, 86: 1, 91: 1, 92: 1, 93: 1, 94: 1, 95: 1, 96: 1, 97: 1}],
 275: [[[[98, 1]], [[99, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 276: [[[[100, 1],
         [101, 1],
         [61, 1],
         [102, 1],
         [60, 1],
         [103, 1],
         [104, 1],
         [105, 1],
         [59, 1],
         [106, 1],
         [107, 1],
         [108, 1]],
        [[0, 1]]],
       {8: 1,
        9: 1,
        11: 1,
        19: 1,
        25: 1,
        29: 1,
        31: 1,
        32: 1,
        40: 1,
        43: 1,
        44: 1,
        46: 1}],
 277: [[[[27, 1]], [[0, 1]]], {27: 1}],
 278: [[[[41, 1]], [[0, 1]]], {41: 1}],
 279: [[[[109, 1]], [[59, 2], [110, 2], [102, 2]], [[0, 2]]], {19: 1}],
 280: [[[[19, 1]],
        [[111, 2]],
        [[2, 4], [16, 3]],
        [[64, 5], [84, 6]],
        [[0, 4]],
        [[2, 4]],
        [[64, 5]]],
       {19: 1}],
 281: [[[[112, 1]], [[112, 1], [0, 1]]], {19: 1}],
 282: [[[[34, 1]], [[85, 2]], [[0, 2]]], {34: 1}],
 283: [[[[52, 1], [113, 2], [56, 3]],
        [[51, 4], [57, 5], [55, 6], [0, 1]],
        [[57, 5], [55, 6], [0, 2]],
        [[98, 7]],
        [[52, 7]],
        [[0, 5]],
        [[52, 8], [113, 8], [0, 6]],
        [[57, 5], [55, 9], [0, 7]],
        [[55, 6], [0, 8]],
        [[52, 10], [56, 11], [0, 9]],
        [[51, 12]],
        [[98, 13]],
        [[52, 13]],
        [[55, 9], [0, 13]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        18: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1,
        56: 1}],
 284: [[[[111, 1]], [[114, 2], [0, 1]], [[33, 3]], [[0, 3]]], {33: 1}],
 285: [[[[115, 1]], [[55, 0], [0, 1]]], {33: 1}],
 286: [[[[33, 1]], [[116, 0], [0, 1]]], {33: 1}],
 287: [[[[33, 1]], [[0, 1]]], {33: 1}],
 288: [[[[117, 1]], [[2, 1], [118, 2]], [[0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 289: [[[[119, 1]],
        [[52, 2], [0, 1]],
        [[114, 3], [55, 3], [0, 2]],
        [[52, 4]],
        [[0, 4]]],
       {119: 1}],
 290: [[[[120, 1]], [[121, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 291: [[[[122, 1]],
        [[123, 2], [53, 3], [124, 4], [0, 1]],
        [[117, 4], [65, 4]],
        [[122, 5], [65, 5]],
        [[0, 4]],
        [[53, 3], [0, 5]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        18: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 292: [[[[98, 1], [113, 1]], [[55, 2], [0, 1]], [[98, 1], [113, 1], [0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        18: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 293: [[[[125, 2], [37, 1], [6, 1], [45, 1]], [[126, 2]], [[0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 294: [[[[2, 0], [118, 1], [127, 0]], [[0, 1]]],
       {2: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        41: 1,
        42: 1,
        43: 1,
        44: 1,
        45: 1,
        46: 1,
        118: 1}],
 295: [[[[128, 1], [129, 1], [130, 1], [131, 1], [132, 1]], [[0, 1]]],
       {12: 1, 15: 1, 17: 1, 20: 1, 27: 1}],
 296: [[[[40, 1]],
        [[85, 2]],
        [[86, 3]],
        [[117, 4]],
        [[51, 5]],
        [[83, 6]],
        [[133, 7], [0, 6]],
        [[51, 8]],
        [[83, 9]],
        [[0, 9]]],
       {40: 1}],
 297: [[[[9, 1]], [[51, 2]], [[83, 3]], [[0, 3]]], {9: 1}],
 298: [[[[8, 1]],
        [[33, 2]],
        [[134, 3]],
        [[51, 4], [135, 5]],
        [[83, 6]],
        [[52, 7]],
        [[0, 6]],
        [[51, 4]]],
       {8: 1}],
 299: [[[[39, 1]], [[33, 2]], [[55, 1], [0, 2]]], {39: 1}],
 300: [[[[43, 1]],
        [[52, 2]],
        [[51, 3]],
        [[83, 4]],
        [[133, 5], [136, 1], [0, 4]],
        [[51, 6]],
        [[83, 7]],
        [[0, 7]]],
       {43: 1}],
 301: [[[[33, 1]], [[114, 2], [0, 1]], [[33, 3]], [[0, 3]]], {33: 1}],
 302: [[[[137, 1]], [[55, 2], [0, 1]], [[137, 1], [0, 2]]], {33: 1}],
 303: [[[[42, 1]],
        [[111, 2], [10, 3], [116, 3]],
        [[4, 4]],
        [[111, 2], [10, 3], [4, 4], [116, 3]],
        [[138, 5], [18, 5], [16, 6]],
        [[0, 5]],
        [[138, 7]],
        [[64, 5]]],
       {42: 1}],
 304: [[[[4, 1]], [[139, 2]], [[0, 2]]], {4: 1}],
 305: [[[[140, 1], [141, 1]], [[0, 1]]], {4: 1, 42: 1}],
 306: [[[[26, 1]], [[51, 2], [142, 3]], [[52, 4]], [[51, 2]], [[0, 4]]],
       {26: 1}],
 307: [[[[26, 1]], [[51, 2], [142, 3]], [[89, 4]], [[51, 2]], [[0, 4]]],
       {26: 1}],
 308: [[[[30, 1]], [[33, 2]], [[55, 1], [0, 2]]], {30: 1}],
 309: [[[[22, 1], [143, 2]], [[49, 2]], [[0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 310: [[[[144, 1]], [[145, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 311: [[[[16, 1]], [[64, 2], [146, 3]], [[0, 2]], [[64, 2]]], {16: 1}],
 312: [[[[35, 1]], [[0, 1]]], {35: 1}],
 313: [[[[147, 1]], [[56, 2], [0, 1]], [[126, 3]], [[0, 3]]],
       {5: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        38: 1}],
 314: [[[[28, 1]],
        [[52, 2], [148, 3], [0, 1]],
        [[55, 4], [0, 2]],
        [[52, 5]],
        [[52, 2], [0, 4]],
        [[55, 6], [0, 5]],
        [[52, 7]],
        [[55, 8], [0, 7]],
        [[52, 7], [0, 8]]],
       {28: 1}],
 315: [[[[20, 1]],
        [[52, 2], [0, 1]],
        [[42, 3], [55, 3], [0, 2]],
        [[52, 4]],
        [[55, 5], [0, 4]],
        [[52, 6]],
        [[0, 6]]],
       {20: 1}],
 316: [[[[46, 1]], [[51, 2]], [[83, 3]], [[32, 4]], [[52, 5]], [[0, 5]]],
       {46: 1}],
 317: [[[[12, 1]], [[117, 2], [0, 1]], [[0, 2]]], {12: 1}],
 318: [[[[149, 1]], [[148, 0], [150, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 319: [[[[151, 1]], [[2, 2], [152, 3]], [[0, 2]], [[151, 1], [2, 2]]],
       {4: 1,
        5: 1,
        6: 1,
        7: 1,
        10: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        27: 1,
        28: 1,
        30: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        41: 1,
        42: 1,
        45: 1}],
 320: [[[[51, 1]], [[52, 2], [0, 1]], [[0, 2]]], {51: 1}],
 321: [[[[153, 1],
         [154, 1],
         [155, 1],
         [156, 1],
         [157, 1],
         [158, 1],
         [159, 1],
         [160, 1],
         [161, 1],
         [162, 1]],
        [[0, 1]]],
       {4: 1,
        5: 1,
        6: 1,
        7: 1,
        10: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        27: 1,
        28: 1,
        30: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        41: 1,
        42: 1,
        45: 1}],
 322: [[[[18, 1]], [[98, 2]], [[0, 2]]], {18: 1}],
 323: [[[[1, 1], [3, 1]], [[0, 1]]],
       {4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        41: 1,
        42: 1,
        43: 1,
        44: 1,
        45: 1,
        46: 1}],
 324: [[[[52, 1], [51, 2]],
        [[51, 2], [0, 1]],
        [[52, 3], [163, 4], [0, 2]],
        [[163, 4], [0, 3]],
        [[0, 4]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1,
        51: 1}],
 325: [[[[164, 1]], [[55, 2], [0, 1]], [[164, 1], [0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1,
        51: 1}],
 326: [[[[1, 1], [2, 2]],
        [[0, 1]],
        [[165, 3]],
        [[127, 4]],
        [[166, 1], [127, 4]]],
       {2: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        10: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        27: 1,
        28: 1,
        30: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        41: 1,
        42: 1,
        45: 1}],
 327: [[[[126, 1]], [[167, 0], [18, 0], [168, 0], [19, 0], [169, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 328: [[[[87, 1], [170, 2]],
        [[43, 3], [0, 1]],
        [[0, 2]],
        [[87, 4]],
        [[133, 5]],
        [[52, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 329: [[[[171, 1], [87, 1]], [[0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 330: [[[[52, 1]], [[55, 2], [0, 1]], [[52, 1], [0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 331: [[[[52, 1], [113, 1]],
        [[57, 2], [55, 3], [0, 1]],
        [[0, 2]],
        [[52, 4], [113, 4], [0, 3]],
        [[55, 3], [0, 4]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        18: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 332: [[[[52, 1], [113, 1]], [[55, 2], [0, 1]], [[52, 1], [113, 1], [0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        18: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 333: [[[[33, 1]], [[51, 2], [0, 1]], [[52, 3]], [[0, 3]]], {33: 1}],
 334: [[[[16, 1], [116, 2], [38, 3]],
        [[64, 4], [84, 5]],
        [[33, 4]],
        [[172, 6]],
        [[0, 4]],
        [[64, 4]],
        [[62, 4]]],
       {16: 1, 38: 1, 116: 1}],
 335: [[[[11, 1]],
        [[51, 2]],
        [[83, 3]],
        [[173, 4], [174, 5]],
        [[51, 6]],
        [[51, 7]],
        [[83, 8]],
        [[83, 9]],
        [[173, 4], [133, 10], [174, 5], [0, 8]],
        [[0, 9]],
        [[51, 11]],
        [[83, 12]],
        [[174, 5], [0, 12]]],
       {11: 1}],
 336: [[[[18, 1], [175, 2], [56, 3]],
        [[175, 4], [55, 5], [0, 1]],
        [[53, 6], [55, 7], [0, 2]],
        [[175, 8]],
        [[55, 5], [0, 4]],
        [[175, 9], [56, 3], [0, 5]],
        [[52, 10]],
        [[18, 11], [175, 2], [56, 3], [0, 7]],
        [[55, 12], [0, 8]],
        [[53, 13], [55, 5], [0, 9]],
        [[55, 7], [0, 10]],
        [[175, 14], [55, 15], [0, 11]],
        [[0, 12]],
        [[52, 4]],
        [[55, 15], [0, 14]],
        [[175, 16], [56, 3], [0, 15]],
        [[53, 17], [55, 15], [0, 16]],
        [[52, 14]]],
       {18: 1, 33: 1, 56: 1}],
 337: [[[[32, 1]], [[52, 2]], [[51, 3]], [[83, 4]], [[0, 4]]], {32: 1}],
 338: [[[[18, 1], [56, 2], [176, 3]],
        [[176, 5], [55, 4], [0, 1]],
        [[176, 6]],
        [[53, 7], [55, 8], [0, 3]],
        [[56, 2], [176, 9], [0, 4]],
        [[55, 4], [0, 5]],
        [[55, 10], [0, 6]],
        [[52, 11]],
        [[18, 12], [56, 2], [176, 3], [0, 8]],
        [[53, 13], [55, 4], [0, 9]],
        [[0, 10]],
        [[55, 8], [0, 11]],
        [[55, 15], [176, 14], [0, 12]],
        [[52, 5]],
        [[55, 15], [0, 14]],
        [[56, 2], [176, 16], [0, 15]],
        [[53, 17], [55, 15], [0, 16]],
        [[52, 14]]],
       {18: 1, 33: 1, 56: 1}],
 339: [[[[33, 1]], [[0, 1]]], {33: 1}],
 340: [[[[31, 1]],
        [[52, 2]],
        [[51, 3]],
        [[83, 4]],
        [[133, 5], [0, 4]],
        [[51, 6]],
        [[83, 7]],
        [[0, 7]]],
       {31: 1}],
 341: [[[[52, 1]], [[114, 2], [0, 1]], [[98, 3]], [[0, 3]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 342: [[[[44, 1]], [[177, 2]], [[51, 3], [55, 1]], [[83, 4]], [[0, 4]]],
       {44: 1}],
 343: [[[[178, 1]], [[179, 0], [0, 1]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        23: 1,
        24: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        45: 1}],
 344: [[[[117, 2], [42, 1]], [[52, 2]], [[0, 2]]],
       {5: 1,
        6: 1,
        7: 1,
        10: 1,
        14: 1,
        16: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        26: 1,
        33: 1,
        36: 1,
        37: 1,
        38: 1,
        42: 1,
        45: 1}],
 345: [[[[15, 1]], [[180, 2], [0, 1]], [[0, 2]]], {15: 1}],
 346: [[[[65, 1]], [[0, 1]]], {15: 1}]},
states:
[[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
 [[[47, 1]], [[48, 0], [0, 1]]],
 [[[49, 1]], [[50, 0], [0, 1]]],
 [[[51, 1]], [[52, 2]], [[53, 3], [0, 2]], [[52, 4]], [[0, 4]]],
 [[[54, 1]], [[55, 2], [0, 1]], [[54, 1], [0, 2]]],
 [[[52, 1], [18, 2], [56, 2]],
  [[53, 2], [57, 3], [0, 1]],
  [[52, 3]],
  [[0, 3]]],
 [[[58, 1]], [[37, 0], [45, 0], [0, 1]]],
 [[[13, 1]], [[52, 2]], [[55, 3], [0, 2]], [[52, 4]], [[0, 4]]],
 [[[29, 1]], [[59, 2]], [[0, 2]]],
 [[[29, 1]], [[59, 2], [60, 2], [61, 2]], [[0, 2]]],
 [[[5, 1],
   [33, 1],
   [14, 1],
   [23, 1],
   [7, 1],
   [38, 2],
   [16, 3],
   [24, 4],
   [10, 1],
   [21, 5]],
  [[0, 1]],
  [[62, 1], [63, 6]],
  [[64, 1], [65, 7], [63, 7]],
  [[66, 1], [67, 8]],
  [[21, 5], [0, 5]],
  [[62, 1]],
  [[64, 1]],
  [[66, 1]]],
 [[[36, 1], [68, 2]], [[68, 2]], [[69, 2], [0, 2]]],
 [[[70, 1],
   [71, 1],
   [72, 1],
   [73, 1],
   [74, 1],
   [75, 1],
   [76, 1],
   [77, 1],
   [78, 1],
   [79, 1],
   [80, 1],
   [81, 1],
   [82, 1]],
  [[0, 1]]],
 [[[17, 1]], [[0, 1]]],
 [[[25, 1]],
  [[33, 2]],
  [[51, 3], [16, 4]],
  [[83, 5]],
  [[64, 6], [84, 7]],
  [[0, 5]],
  [[51, 3]],
  [[64, 6]]],
 [[[29, 1], [40, 2]],
  [[40, 2]],
  [[85, 3]],
  [[86, 4]],
  [[87, 5]],
  [[88, 6], [0, 5]],
  [[0, 6]]],
 [[[43, 1]], [[89, 2]], [[88, 3], [0, 2]], [[0, 3]]],
 [[[90, 1], [57, 1]], [[0, 1]]],
 [[[91, 1],
   [92, 1],
   [22, 2],
   [91, 1],
   [93, 1],
   [86, 1],
   [94, 1],
   [95, 3],
   [96, 1],
   [97, 1]],
  [[0, 1]],
  [[86, 1]],
  [[22, 1], [0, 3]]],
 [[[98, 1]], [[99, 0], [0, 1]]],
 [[[100, 1],
   [101, 1],
   [61, 1],
   [102, 1],
   [60, 1],
   [103, 1],
   [104, 1],
   [105, 1],
   [59, 1],
   [106, 1],
   [107, 1],
   [108, 1]],
  [[0, 1]]],
 [[[27, 1]], [[0, 1]]],
 [[[41, 1]], [[0, 1]]],
 [[[109, 1]], [[59, 2], [110, 2], [102, 2]], [[0, 2]]],
 [[[19, 1]],
  [[111, 2]],
  [[2, 4], [16, 3]],
  [[64, 5], [84, 6]],
  [[0, 4]],
  [[2, 4]],
  [[64, 5]]],
 [[[112, 1]], [[112, 1], [0, 1]]],
 [[[34, 1]], [[85, 2]], [[0, 2]]],
 [[[52, 1], [113, 2], [56, 3]],
  [[51, 4], [57, 5], [55, 6], [0, 1]],
  [[57, 5], [55, 6], [0, 2]],
  [[98, 7]],
  [[52, 7]],
  [[0, 5]],
  [[52, 8], [113, 8], [0, 6]],
  [[57, 5], [55, 9], [0, 7]],
  [[55, 6], [0, 8]],
  [[52, 10], [56, 11], [0, 9]],
  [[51, 12]],
  [[98, 13]],
  [[52, 13]],
  [[55, 9], [0, 13]]],
 [[[111, 1]], [[114, 2], [0, 1]], [[33, 3]], [[0, 3]]],
 [[[115, 1]], [[55, 0], [0, 1]]],
 [[[33, 1]], [[116, 0], [0, 1]]],
 [[[33, 1]], [[0, 1]]],
 [[[117, 1]], [[2, 1], [118, 2]], [[0, 2]]],
 [[[119, 1]],
  [[52, 2], [0, 1]],
  [[114, 3], [55, 3], [0, 2]],
  [[52, 4]],
  [[0, 4]]],
 [[[120, 1]], [[121, 0], [0, 1]]],
 [[[122, 1]],
  [[123, 2], [53, 3], [124, 4], [0, 1]],
  [[117, 4], [65, 4]],
  [[122, 5], [65, 5]],
  [[0, 4]],
  [[53, 3], [0, 5]]],
 [[[98, 1], [113, 1]], [[55, 2], [0, 1]], [[98, 1], [113, 1], [0, 2]]],
 [[[125, 2], [37, 1], [6, 1], [45, 1]], [[126, 2]], [[0, 2]]],
 [[[2, 0], [118, 1], [127, 0]], [[0, 1]]],
 [[[128, 1], [129, 1], [130, 1], [131, 1], [132, 1]], [[0, 1]]],
 [[[40, 1]],
  [[85, 2]],
  [[86, 3]],
  [[117, 4]],
  [[51, 5]],
  [[83, 6]],
  [[133, 7], [0, 6]],
  [[51, 8]],
  [[83, 9]],
  [[0, 9]]],
 [[[9, 1]], [[51, 2]], [[83, 3]], [[0, 3]]],
 [[[8, 1]],
  [[33, 2]],
  [[134, 3]],
  [[51, 4], [135, 5]],
  [[83, 6]],
  [[52, 7]],
  [[0, 6]],
  [[51, 4]]],
 [[[39, 1]], [[33, 2]], [[55, 1], [0, 2]]],
 [[[43, 1]],
  [[52, 2]],
  [[51, 3]],
  [[83, 4]],
  [[133, 5], [136, 1], [0, 4]],
  [[51, 6]],
  [[83, 7]],
  [[0, 7]]],
 [[[33, 1]], [[114, 2], [0, 1]], [[33, 3]], [[0, 3]]],
 [[[137, 1]], [[55, 2], [0, 1]], [[137, 1], [0, 2]]],
 [[[42, 1]],
  [[111, 2], [10, 3], [116, 3]],
  [[4, 4]],
  [[111, 2], [10, 3], [4, 4], [116, 3]],
  [[138, 5], [18, 5], [16, 6]],
  [[0, 5]],
  [[138, 7]],
  [[64, 5]]],
 [[[4, 1]], [[139, 2]], [[0, 2]]],
 [[[140, 1], [141, 1]], [[0, 1]]],
 [[[26, 1]], [[51, 2], [142, 3]], [[52, 4]], [[51, 2]], [[0, 4]]],
 [[[26, 1]], [[51, 2], [142, 3]], [[89, 4]], [[51, 2]], [[0, 4]]],
 [[[30, 1]], [[33, 2]], [[55, 1], [0, 2]]],
 [[[22, 1], [143, 2]], [[49, 2]], [[0, 2]]],
 [[[144, 1]], [[145, 0], [0, 1]]],
 [[[16, 1]], [[64, 2], [146, 3]], [[0, 2]], [[64, 2]]],
 [[[35, 1]], [[0, 1]]],
 [[[147, 1]], [[56, 2], [0, 1]], [[126, 3]], [[0, 3]]],
 [[[28, 1]],
  [[52, 2], [148, 3], [0, 1]],
  [[55, 4], [0, 2]],
  [[52, 5]],
  [[52, 2], [0, 4]],
  [[55, 6], [0, 5]],
  [[52, 7]],
  [[55, 8], [0, 7]],
  [[52, 7], [0, 8]]],
 [[[20, 1]],
  [[52, 2], [0, 1]],
  [[42, 3], [55, 3], [0, 2]],
  [[52, 4]],
  [[55, 5], [0, 4]],
  [[52, 6]],
  [[0, 6]]],
 [[[46, 1]], [[51, 2]], [[83, 3]], [[32, 4]], [[52, 5]], [[0, 5]]],
 [[[12, 1]], [[117, 2], [0, 1]], [[0, 2]]],
 [[[149, 1]], [[148, 0], [150, 0], [0, 1]]],
 [[[151, 1]], [[2, 2], [152, 3]], [[0, 2]], [[151, 1], [2, 2]]],
 [[[51, 1]], [[52, 2], [0, 1]], [[0, 2]]],
 [[[153, 1],
   [154, 1],
   [155, 1],
   [156, 1],
   [157, 1],
   [158, 1],
   [159, 1],
   [160, 1],
   [161, 1],
   [162, 1]],
  [[0, 1]]],
 [[[18, 1]], [[98, 2]], [[0, 2]]],
 [[[1, 1], [3, 1]], [[0, 1]]],
 [[[52, 1], [51, 2]],
  [[51, 2], [0, 1]],
  [[52, 3], [163, 4], [0, 2]],
  [[163, 4], [0, 3]],
  [[0, 4]]],
 [[[164, 1]], [[55, 2], [0, 1]], [[164, 1], [0, 2]]],
 [[[1, 1], [2, 2]], [[0, 1]], [[165, 3]], [[127, 4]], [[166, 1], [127, 4]]],
 [[[126, 1]], [[167, 0], [18, 0], [168, 0], [19, 0], [169, 0], [0, 1]]],
 [[[87, 1], [170, 2]],
  [[43, 3], [0, 1]],
  [[0, 2]],
  [[87, 4]],
  [[133, 5]],
  [[52, 2]]],
 [[[171, 1], [87, 1]], [[0, 1]]],
 [[[52, 1]], [[55, 2], [0, 1]], [[52, 1], [0, 2]]],
 [[[52, 1], [113, 1]],
  [[57, 2], [55, 3], [0, 1]],
  [[0, 2]],
  [[52, 4], [113, 4], [0, 3]],
  [[55, 3], [0, 4]]],
 [[[52, 1], [113, 1]], [[55, 2], [0, 1]], [[52, 1], [113, 1], [0, 2]]],
 [[[33, 1]], [[51, 2], [0, 1]], [[52, 3]], [[0, 3]]],
 [[[16, 1], [116, 2], [38, 3]],
  [[64, 4], [84, 5]],
  [[33, 4]],
  [[172, 6]],
  [[0, 4]],
  [[64, 4]],
  [[62, 4]]],
 [[[11, 1]],
  [[51, 2]],
  [[83, 3]],
  [[173, 4], [174, 5]],
  [[51, 6]],
  [[51, 7]],
  [[83, 8]],
  [[83, 9]],
  [[173, 4], [133, 10], [174, 5], [0, 8]],
  [[0, 9]],
  [[51, 11]],
  [[83, 12]],
  [[174, 5], [0, 12]]],
 [[[18, 1], [175, 2], [56, 3]],
  [[175, 4], [55, 5], [0, 1]],
  [[53, 6], [55, 7], [0, 2]],
  [[175, 8]],
  [[55, 5], [0, 4]],
  [[175, 9], [56, 3], [0, 5]],
  [[52, 10]],
  [[18, 11], [175, 2], [56, 3], [0, 7]],
  [[55, 12], [0, 8]],
  [[53, 13], [55, 5], [0, 9]],
  [[55, 7], [0, 10]],
  [[175, 14], [55, 15], [0, 11]],
  [[0, 12]],
  [[52, 4]],
  [[55, 15], [0, 14]],
  [[175, 16], [56, 3], [0, 15]],
  [[53, 17], [55, 15], [0, 16]],
  [[52, 14]]],
 [[[32, 1]], [[52, 2]], [[51, 3]], [[83, 4]], [[0, 4]]],
 [[[18, 1], [56, 2], [176, 3]],
  [[176, 5], [55, 4], [0, 1]],
  [[176, 6]],
  [[53, 7], [55, 8], [0, 3]],
  [[56, 2], [176, 9], [0, 4]],
  [[55, 4], [0, 5]],
  [[55, 10], [0, 6]],
  [[52, 11]],
  [[18, 12], [56, 2], [176, 3], [0, 8]],
  [[53, 13], [55, 4], [0, 9]],
  [[0, 10]],
  [[55, 8], [0, 11]],
  [[55, 15], [176, 14], [0, 12]],
  [[52, 5]],
  [[55, 15], [0, 14]],
  [[56, 2], [176, 16], [0, 15]],
  [[53, 17], [55, 15], [0, 16]],
  [[52, 14]]],
 [[[33, 1]], [[0, 1]]],
 [[[31, 1]],
  [[52, 2]],
  [[51, 3]],
  [[83, 4]],
  [[133, 5], [0, 4]],
  [[51, 6]],
  [[83, 7]],
  [[0, 7]]],
 [[[52, 1]], [[114, 2], [0, 1]], [[98, 3]], [[0, 3]]],
 [[[44, 1]], [[177, 2]], [[51, 3], [55, 1]], [[83, 4]], [[0, 4]]],
 [[[178, 1]], [[179, 0], [0, 1]]],
 [[[117, 2], [42, 1]], [[52, 2]], [[0, 2]]],
 [[[15, 1]], [[180, 2], [0, 1]], [[0, 2]]],
 [[[65, 1]], [[0, 1]]]],
labels:
[[0, 'EMPTY'],
 [319, null],
 [4, null],
 [276, null],
 [1, 'import'],
 [1, 'True'],
 [31, null],
 [2, null],
 [1, 'def'],
 [1, 'forever'],
 [52, null],
 [1, 'try'],
 [1, 'return'],
 [1, 'assert'],
 [1, 'False'],
 [1, 'yield'],
 [7, null],
 [1, 'break'],
 [16, null],
 [49, null],
 [1, 'raise'],
 [3, null],
 [1, 'not'],
 [1, 'null'],
 [25, null],
 [1, 'class'],
 [1, 'lambda'],
 [1, 'continue'],
 [1, 'print'],
 [55, null],
 [1, 'nonlocal'],
 [1, 'while'],
 [1, 'until'],
 [1, null],
 [1, 'del'],
 [1, 'pass'],
 [54, null],
 [15, null],
 [9, null],
 [1, 'global'],
 [1, 'for'],
 [1, 'debugger'],
 [1, 'from'],
 [1, 'if'],
 [1, 'with'],
 [14, null],
 [1, 'repeat'],
 [318, null],
 [19, null],
 [309, null],
 [1, 'and'],
 [11, null],
 [328, null],
 [22, null],
 [261, null],
 [12, null],
 [35, null],
 [271, null],
 [327, null],
 [298, null],
 [342, null],
 [296, null],
 [10, null],
 [331, null],
 [8, null],
 [345, null],
 [26, null],
 [283, null],
 [266, null],
 [334, null],
 [45, null],
 [38, null],
 [40, null],
 [50, null],
 [46, null],
 [41, null],
 [42, null],
 [36, null],
 [43, null],
 [48, null],
 [39, null],
 [37, null],
 [44, null],
 [326, null],
 [260, null],
 [292, null],
 [1, 'in'],
 [310, null],
 [273, null],
 [329, null],
 [272, null],
 [28, null],
 [21, null],
 [27, null],
 [29, null],
 [1, 'is'],
 [30, null],
 [20, null],
 [290, null],
 [274, null],
 [335, null],
 [300, null],
 [270, null],
 [340, null],
 [337, null],
 [297, null],
 [279, null],
 [316, null],
 [265, null],
 [281, null],
 [264, null],
 [286, null],
 [280, null],
 [322, null],
 [1, 'as'],
 [284, null],
 [23, null],
 [330, null],
 [0, null],
 [1, 'except'],
 [343, null],
 [18, null],
 [332, null],
 [268, null],
 [259, null],
 [313, null],
 [293, null],
 [323, null],
 [269, null],
 [277, null],
 [315, null],
 [317, null],
 [346, null],
 [1, 'else'],
 [311, null],
 [51, null],
 [1, 'elif'],
 [301, null],
 [302, null],
 [285, null],
 [304, null],
 [303, null],
 [338, null],
 [275, null],
 [258, null],
 [1, 'or'],
 [336, null],
 [267, null],
 [34, null],
 [262, null],
 [33, null],
 [321, null],
 [13, null],
 [295, null],
 [282, null],
 [305, null],
 [312, null],
 [308, null],
 [314, null],
 [263, null],
 [299, null],
 [291, null],
 [278, null],
 [320, null],
 [324, null],
 [5, null],
 [6, null],
 [47, null],
 [17, null],
 [24, null],
 [306, null],
 [307, null],
 [325, null],
 [289, null],
 [1, 'finally'],
 [333, null],
 [339, null],
 [341, null],
 [257, null],
 [32, null],
 [344, null]],
keywords:
{'False': 14,
 'null': 23,
 'True': 5,
 'and': 50,
 'as': 114,
 'assert': 13,
 'break': 17,
 'class': 25,
 'continue': 27,
 'debugger': 41,
 'def': 8,
 'del': 34,
 'elif': 136,
 'else': 133,
 'except': 119,
 'finally': 174,
 'for': 40,
 'forever': 9,
 'from': 42,
 'global': 39,
 'if': 43,
 'import': 4,
 'in': 86,
 'is': 95,
 'lambda': 26,
 'nonlocal': 30,
 'not': 22,
 'or': 145,
 'pass': 35,
 'print': 28,
 'raise': 20,
 'repeat': 46,
 'return': 12,
 'try': 11,
 'until': 32,
 'while': 31,
 'with': 44,
 'yield': 15},
tokens:
{0: 118,
 1: 33,
 2: 7,
 3: 21,
 4: 2,
 5: 165,
 6: 166,
 7: 16,
 8: 64,
 9: 38,
 10: 62,
 11: 51,
 12: 55,
 13: 152,
 14: 45,
 15: 37,
 16: 18,
 17: 168,
 18: 121,
 19: 48,
 20: 97,
 21: 92,
 22: 53,
 23: 116,
 24: 169,
 25: 24,
 26: 66,
 27: 93,
 28: 91,
 29: 94,
 30: 96,
 31: 6,
 32: 179,
 33: 150,
 34: 148,
 35: 56,
 36: 77,
 37: 81,
 38: 71,
 39: 80,
 40: 72,
 41: 75,
 42: 76,
 43: 78,
 44: 82,
 45: 70,
 46: 74,
 47: 167,
 48: 79,
 49: 19,
 50: 73,
 51: 135,
 52: 10,
 54: 36,
 55: 29},
start: 256
};
