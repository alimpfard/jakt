let globalImportObject = {};
let namedModules = {};

describe("int_literals_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_literals_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_literals_0: i32.test (instance 0)", () => {
        let _i32_test = module.getExport("i32.test");
        expect(_i32_test).not.toBeUndefined();
        let _i32_test_result = module.invoke(_i32_test);
        expect(_i32_test_result).toBe(195940365);
    });

    _test("execution of int_literals_0: i32.umax (instance 0)", () => {
        let _i32_umax = module.getExport("i32.umax");
        expect(_i32_umax).not.toBeUndefined();
        let _i32_umax_result = module.invoke(_i32_umax);
        expect(_i32_umax_result).toBe(-1);
    });

    _test("execution of int_literals_0: i32.smax (instance 0)", () => {
        let _i32_smax = module.getExport("i32.smax");
        expect(_i32_smax).not.toBeUndefined();
        let _i32_smax_result = module.invoke(_i32_smax);
        expect(_i32_smax_result).toBe(2147483647);
    });

    _test("execution of int_literals_0: i32.neg_smax (instance 0)", () => {
        let _i32_neg_smax = module.getExport("i32.neg_smax");
        expect(_i32_neg_smax).not.toBeUndefined();
        let _i32_neg_smax_result = module.invoke(_i32_neg_smax);
        expect(_i32_neg_smax_result).toBe(-2147483647);
    });

    _test("execution of int_literals_0: i32.smin (instance 0)", () => {
        let _i32_smin = module.getExport("i32.smin");
        expect(_i32_smin).not.toBeUndefined();
        let _i32_smin_result = module.invoke(_i32_smin);
        expect(_i32_smin_result).toBe(-2147483648);
    });

    _test("execution of int_literals_0: i32.alt_smin (instance 0)", () => {
        let _i32_alt_smin = module.getExport("i32.alt_smin");
        expect(_i32_alt_smin).not.toBeUndefined();
        let _i32_alt_smin_result = module.invoke(_i32_alt_smin);
        expect(_i32_alt_smin_result).toBe(-2147483648);
    });

    _test("execution of int_literals_0: i32.inc_smin (instance 0)", () => {
        let _i32_inc_smin = module.getExport("i32.inc_smin");
        expect(_i32_inc_smin).not.toBeUndefined();
        let _i32_inc_smin_result = module.invoke(_i32_inc_smin);
        expect(_i32_inc_smin_result).toBe(-2147483647);
    });

    _test("execution of int_literals_0: i32.neg_zero (instance 0)", () => {
        let _i32_neg_zero = module.getExport("i32.neg_zero");
        expect(_i32_neg_zero).not.toBeUndefined();
        let _i32_neg_zero_result = module.invoke(_i32_neg_zero);
        expect(_i32_neg_zero_result).toBe(0);
    });

    _test("execution of int_literals_0: i32.not_octal (instance 0)", () => {
        let _i32_not_octal = module.getExport("i32.not_octal");
        expect(_i32_not_octal).not.toBeUndefined();
        let _i32_not_octal_result = module.invoke(_i32_not_octal);
        expect(_i32_not_octal_result).toBe(10);
    });

    _test("execution of int_literals_0: i32.unsigned_decimal (instance 0)", () => {
        let _i32_unsigned_decimal = module.getExport("i32.unsigned_decimal");
        expect(_i32_unsigned_decimal).not.toBeUndefined();
        let _i32_unsigned_decimal_result = module.invoke(_i32_unsigned_decimal);
        expect(_i32_unsigned_decimal_result).toBe(-1);
    });

    _test("execution of int_literals_0: i32.plus_sign (instance 0)", () => {
        let _i32_plus_sign = module.getExport("i32.plus_sign");
        expect(_i32_plus_sign).not.toBeUndefined();
        let _i32_plus_sign_result = module.invoke(_i32_plus_sign);
        expect(_i32_plus_sign_result).toBe(42);
    });

    _test("execution of int_literals_0: i64.test (instance 0)", () => {
        let _i64_test = module.getExport("i64.test");
        expect(_i64_test).not.toBeUndefined();
        let _i64_test_result = module.invoke(_i64_test);
        expect(_i64_test_result).toBe(913028331277281902n);
    });

    _test("execution of int_literals_0: i64.umax (instance 0)", () => {
        let _i64_umax = module.getExport("i64.umax");
        expect(_i64_umax).not.toBeUndefined();
        let _i64_umax_result = module.invoke(_i64_umax);
        expect(_i64_umax_result).toBe(-1n);
    });

    _test("execution of int_literals_0: i64.smax (instance 0)", () => {
        let _i64_smax = module.getExport("i64.smax");
        expect(_i64_smax).not.toBeUndefined();
        let _i64_smax_result = module.invoke(_i64_smax);
        expect(_i64_smax_result).toBe(9223372036854775807n);
    });

    _test("execution of int_literals_0: i64.neg_smax (instance 0)", () => {
        let _i64_neg_smax = module.getExport("i64.neg_smax");
        expect(_i64_neg_smax).not.toBeUndefined();
        let _i64_neg_smax_result = module.invoke(_i64_neg_smax);
        expect(_i64_neg_smax_result).toBe(-9223372036854775807n);
    });

    _test("execution of int_literals_0: i64.smin (instance 0)", () => {
        let _i64_smin = module.getExport("i64.smin");
        expect(_i64_smin).not.toBeUndefined();
        let _i64_smin_result = module.invoke(_i64_smin);
        expect(_i64_smin_result).toBe(-9223372036854775808n);
    });

    _test("execution of int_literals_0: i64.alt_smin (instance 0)", () => {
        let _i64_alt_smin = module.getExport("i64.alt_smin");
        expect(_i64_alt_smin).not.toBeUndefined();
        let _i64_alt_smin_result = module.invoke(_i64_alt_smin);
        expect(_i64_alt_smin_result).toBe(-9223372036854775808n);
    });

    _test("execution of int_literals_0: i64.inc_smin (instance 0)", () => {
        let _i64_inc_smin = module.getExport("i64.inc_smin");
        expect(_i64_inc_smin).not.toBeUndefined();
        let _i64_inc_smin_result = module.invoke(_i64_inc_smin);
        expect(_i64_inc_smin_result).toBe(-9223372036854775807n);
    });

    _test("execution of int_literals_0: i64.neg_zero (instance 0)", () => {
        let _i64_neg_zero = module.getExport("i64.neg_zero");
        expect(_i64_neg_zero).not.toBeUndefined();
        let _i64_neg_zero_result = module.invoke(_i64_neg_zero);
        expect(_i64_neg_zero_result).toBe(0n);
    });

    _test("execution of int_literals_0: i64.not_octal (instance 0)", () => {
        let _i64_not_octal = module.getExport("i64.not_octal");
        expect(_i64_not_octal).not.toBeUndefined();
        let _i64_not_octal_result = module.invoke(_i64_not_octal);
        expect(_i64_not_octal_result).toBe(10n);
    });

    _test("execution of int_literals_0: i64.unsigned_decimal (instance 0)", () => {
        let _i64_unsigned_decimal = module.getExport("i64.unsigned_decimal");
        expect(_i64_unsigned_decimal).not.toBeUndefined();
        let _i64_unsigned_decimal_result = module.invoke(_i64_unsigned_decimal);
        expect(_i64_unsigned_decimal_result).toBe(-1n);
    });

    _test("execution of int_literals_0: i64.plus_sign (instance 0)", () => {
        let _i64_plus_sign = module.getExport("i64.plus_sign");
        expect(_i64_plus_sign).not.toBeUndefined();
        let _i64_plus_sign_result = module.invoke(_i64_plus_sign);
        expect(_i64_plus_sign_result).toBe(42n);
    });

    _test("execution of int_literals_0: i32-dec-sep1 (instance 0)", () => {
        let _i32_dec_sep1 = module.getExport("i32-dec-sep1");
        expect(_i32_dec_sep1).not.toBeUndefined();
        let _i32_dec_sep1_result = module.invoke(_i32_dec_sep1);
        expect(_i32_dec_sep1_result).toBe(1000000);
    });

    _test("execution of int_literals_0: i32-dec-sep2 (instance 0)", () => {
        let _i32_dec_sep2 = module.getExport("i32-dec-sep2");
        expect(_i32_dec_sep2).not.toBeUndefined();
        let _i32_dec_sep2_result = module.invoke(_i32_dec_sep2);
        expect(_i32_dec_sep2_result).toBe(1000);
    });

    _test("execution of int_literals_0: i32-hex-sep1 (instance 0)", () => {
        let _i32_hex_sep1 = module.getExport("i32-hex-sep1");
        expect(_i32_hex_sep1).not.toBeUndefined();
        let _i32_hex_sep1_result = module.invoke(_i32_hex_sep1);
        expect(_i32_hex_sep1_result).toBe(168755353);
    });

    _test("execution of int_literals_0: i32-hex-sep2 (instance 0)", () => {
        let _i32_hex_sep2 = module.getExport("i32-hex-sep2");
        expect(_i32_hex_sep2).not.toBeUndefined();
        let _i32_hex_sep2_result = module.invoke(_i32_hex_sep2);
        expect(_i32_hex_sep2_result).toBe(109071);
    });

    _test("execution of int_literals_0: i64-dec-sep1 (instance 0)", () => {
        let _i64_dec_sep1 = module.getExport("i64-dec-sep1");
        expect(_i64_dec_sep1).not.toBeUndefined();
        let _i64_dec_sep1_result = module.invoke(_i64_dec_sep1);
        expect(_i64_dec_sep1_result).toBe(1000000n);
    });

    _test("execution of int_literals_0: i64-dec-sep2 (instance 0)", () => {
        let _i64_dec_sep2 = module.getExport("i64-dec-sep2");
        expect(_i64_dec_sep2).not.toBeUndefined();
        let _i64_dec_sep2_result = module.invoke(_i64_dec_sep2);
        expect(_i64_dec_sep2_result).toBe(1000n);
    });

    _test("execution of int_literals_0: i64-hex-sep1 (instance 0)", () => {
        let _i64_hex_sep1 = module.getExport("i64-hex-sep1");
        expect(_i64_hex_sep1).not.toBeUndefined();
        let _i64_hex_sep1_result = module.invoke(_i64_hex_sep1);
        expect(_i64_hex_sep1_result).toBe(3078696982321561n);
    });

    _test("execution of int_literals_0: i64-hex-sep2 (instance 0)", () => {
        let _i64_hex_sep2 = module.getExport("i64-hex-sep2");
        expect(_i64_hex_sep2).not.toBeUndefined();
        let _i64_hex_sep2_result = module.invoke(_i64_hex_sep2);
        expect(_i64_hex_sep2_result).toBe(109071n);
    });
});

describe("int_literals_1", () => {
    let _test = test;

    _test("execution of int_literals_1: _inline_test_0 (instance 0)", () => {});
});

describe("int_literals_2", () => {
    let _test = test;

    _test("execution of int_literals_2: _inline_test_1 (instance 0)", () => {});
});

describe("int_literals_3", () => {
    let _test = test;

    _test("execution of int_literals_3: _inline_test_2 (instance 0)", () => {});
});

describe("int_literals_4", () => {
    let _test = test;

    _test("execution of int_literals_4: _inline_test_3 (instance 0)", () => {});
});

describe("int_literals_5", () => {
    let _test = test;

    _test("execution of int_literals_5: _inline_test_4 (instance 0)", () => {});
});

describe("int_literals_6", () => {
    let _test = test;

    _test("execution of int_literals_6: _inline_test_5 (instance 0)", () => {});
});

describe("int_literals_7", () => {
    let _test = test;

    _test("execution of int_literals_7: _inline_test_6 (instance 0)", () => {});
});

describe("int_literals_8", () => {
    let _test = test;

    _test("execution of int_literals_8: _inline_test_7 (instance 0)", () => {});
});

describe("int_literals_9", () => {
    let _test = test;

    _test("execution of int_literals_9: _inline_test_8 (instance 0)", () => {});
});

describe("int_literals_10", () => {
    let _test = test;

    _test("execution of int_literals_10: _inline_test_9 (instance 0)", () => {});
});

describe("int_literals_11", () => {
    let _test = test;

    _test("execution of int_literals_11: _inline_test_10 (instance 0)", () => {});
});

describe("int_literals_12", () => {
    let _test = test;

    _test("execution of int_literals_12: _inline_test_11 (instance 0)", () => {});
});

describe("int_literals_13", () => {
    let _test = test;

    _test("execution of int_literals_13: _inline_test_12 (instance 0)", () => {});
});

describe("int_literals_14", () => {
    let _test = test;

    _test("execution of int_literals_14: _inline_test_13 (instance 0)", () => {});
});

describe("int_literals_15", () => {
    let _test = test;

    _test("execution of int_literals_15: _inline_test_14 (instance 0)", () => {});
});

describe("int_literals_16", () => {
    let _test = test;

    _test("execution of int_literals_16: _inline_test_15 (instance 0)", () => {});
});

describe("int_literals_17", () => {
    let _test = test;

    _test("execution of int_literals_17: _inline_test_16 (instance 0)", () => {});
});

describe("int_literals_18", () => {
    let _test = test;

    _test("execution of int_literals_18: _inline_test_17 (instance 0)", () => {});
});

describe("int_literals_19", () => {
    let _test = test;

    _test("execution of int_literals_19: _inline_test_18 (instance 0)", () => {});
});

describe("int_literals_20", () => {
    let _test = test;

    _test("execution of int_literals_20: _inline_test_19 (instance 0)", () => {});
});
