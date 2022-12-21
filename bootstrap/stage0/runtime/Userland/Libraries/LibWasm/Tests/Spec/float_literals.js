let globalImportObject = {};
let namedModules = {};

describe("float_literals_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_literals_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_literals_0: f32.nan (instance 0)", () => {
        let _f32_nan = module.getExport("f32.nan");
        expect(_f32_nan).not.toBeUndefined();
        let _f32_nan_result = module.invoke(_f32_nan);
        expect(_f32_nan_result).toBe(2143289344);
    });

    _test("execution of float_literals_0: f32.positive_nan (instance 0)", () => {
        let _f32_positive_nan = module.getExport("f32.positive_nan");
        expect(_f32_positive_nan).not.toBeUndefined();
        let _f32_positive_nan_result = module.invoke(_f32_positive_nan);
        expect(_f32_positive_nan_result).toBe(2143289344);
    });

    _test("execution of float_literals_0: f32.negative_nan (instance 0)", () => {
        let _f32_negative_nan = module.getExport("f32.negative_nan");
        expect(_f32_negative_nan).not.toBeUndefined();
        let _f32_negative_nan_result = module.invoke(_f32_negative_nan);
        expect(_f32_negative_nan_result).toBe(-4194304);
    });

    _test("execution of float_literals_0: f32.plain_nan (instance 0)", () => {
        let _f32_plain_nan = module.getExport("f32.plain_nan");
        expect(_f32_plain_nan).not.toBeUndefined();
        let _f32_plain_nan_result = module.invoke(_f32_plain_nan);
        expect(_f32_plain_nan_result).toBe(2143289344);
    });

    _test("execution of float_literals_0: f32.informally_known_as_plain_snan (instance 0)", () => {
        let _f32_informally_known_as_plain_snan = module.getExport(
            "f32.informally_known_as_plain_snan"
        );
        expect(_f32_informally_known_as_plain_snan).not.toBeUndefined();
        let _f32_informally_known_as_plain_snan_result = module.invoke(
            _f32_informally_known_as_plain_snan
        );
        expect(_f32_informally_known_as_plain_snan_result).toBe(2141192192);
    });

    _test("execution of float_literals_0: f32.all_ones_nan (instance 0)", () => {
        let _f32_all_ones_nan = module.getExport("f32.all_ones_nan");
        expect(_f32_all_ones_nan).not.toBeUndefined();
        let _f32_all_ones_nan_result = module.invoke(_f32_all_ones_nan);
        expect(_f32_all_ones_nan_result).toBe(-1);
    });

    _test("execution of float_literals_0: f32.misc_nan (instance 0)", () => {
        let _f32_misc_nan = module.getExport("f32.misc_nan");
        expect(_f32_misc_nan).not.toBeUndefined();
        let _f32_misc_nan_result = module.invoke(_f32_misc_nan);
        expect(_f32_misc_nan_result).toBe(2139169605);
    });

    _test("execution of float_literals_0: f32.misc_positive_nan (instance 0)", () => {
        let _f32_misc_positive_nan = module.getExport("f32.misc_positive_nan");
        expect(_f32_misc_positive_nan).not.toBeUndefined();
        let _f32_misc_positive_nan_result = module.invoke(_f32_misc_positive_nan);
        expect(_f32_misc_positive_nan_result).toBe(2142257232);
    });

    _test("execution of float_literals_0: f32.misc_negative_nan (instance 0)", () => {
        let _f32_misc_negative_nan = module.getExport("f32.misc_negative_nan");
        expect(_f32_misc_negative_nan).not.toBeUndefined();
        let _f32_misc_negative_nan_result = module.invoke(_f32_misc_negative_nan);
        expect(_f32_misc_negative_nan_result).toBe(-5587746);
    });

    _test("execution of float_literals_0: f32.infinity (instance 0)", () => {
        let _f32_infinity = module.getExport("f32.infinity");
        expect(_f32_infinity).not.toBeUndefined();
        let _f32_infinity_result = module.invoke(_f32_infinity);
        expect(_f32_infinity_result).toBe(2139095040);
    });

    _test("execution of float_literals_0: f32.positive_infinity (instance 0)", () => {
        let _f32_positive_infinity = module.getExport("f32.positive_infinity");
        expect(_f32_positive_infinity).not.toBeUndefined();
        let _f32_positive_infinity_result = module.invoke(_f32_positive_infinity);
        expect(_f32_positive_infinity_result).toBe(2139095040);
    });

    _test("execution of float_literals_0: f32.negative_infinity (instance 0)", () => {
        let _f32_negative_infinity = module.getExport("f32.negative_infinity");
        expect(_f32_negative_infinity).not.toBeUndefined();
        let _f32_negative_infinity_result = module.invoke(_f32_negative_infinity);
        expect(_f32_negative_infinity_result).toBe(-8388608);
    });

    _test("execution of float_literals_0: f32.zero (instance 0)", () => {
        let _f32_zero = module.getExport("f32.zero");
        expect(_f32_zero).not.toBeUndefined();
        let _f32_zero_result = module.invoke(_f32_zero);
        expect(_f32_zero_result).toBe(0);
    });

    _test("execution of float_literals_0: f32.positive_zero (instance 0)", () => {
        let _f32_positive_zero = module.getExport("f32.positive_zero");
        expect(_f32_positive_zero).not.toBeUndefined();
        let _f32_positive_zero_result = module.invoke(_f32_positive_zero);
        expect(_f32_positive_zero_result).toBe(0);
    });

    _test("execution of float_literals_0: f32.negative_zero (instance 0)", () => {
        let _f32_negative_zero = module.getExport("f32.negative_zero");
        expect(_f32_negative_zero).not.toBeUndefined();
        let _f32_negative_zero_result = module.invoke(_f32_negative_zero);
        expect(_f32_negative_zero_result).toBe(-2147483648);
    });

    _test("execution of float_literals_0: f32.misc (instance 0)", () => {
        let _f32_misc = module.getExport("f32.misc");
        expect(_f32_misc).not.toBeUndefined();
        let _f32_misc_result = module.invoke(_f32_misc);
        expect(_f32_misc_result).toBe(1086918619);
    });

    _test("execution of float_literals_0: f32.min_positive (instance 0)", () => {
        let _f32_min_positive = module.getExport("f32.min_positive");
        expect(_f32_min_positive).not.toBeUndefined();
        let _f32_min_positive_result = module.invoke(_f32_min_positive);
        expect(_f32_min_positive_result).toBe(1);
    });

    _test("execution of float_literals_0: f32.min_normal (instance 0)", () => {
        let _f32_min_normal = module.getExport("f32.min_normal");
        expect(_f32_min_normal).not.toBeUndefined();
        let _f32_min_normal_result = module.invoke(_f32_min_normal);
        expect(_f32_min_normal_result).toBe(8388608);
    });

    _test("execution of float_literals_0: f32.max_subnormal (instance 0)", () => {
        let _f32_max_subnormal = module.getExport("f32.max_subnormal");
        expect(_f32_max_subnormal).not.toBeUndefined();
        let _f32_max_subnormal_result = module.invoke(_f32_max_subnormal);
        expect(_f32_max_subnormal_result).toBe(8388607);
    });

    _test("execution of float_literals_0: f32.max_finite (instance 0)", () => {
        let _f32_max_finite = module.getExport("f32.max_finite");
        expect(_f32_max_finite).not.toBeUndefined();
        let _f32_max_finite_result = module.invoke(_f32_max_finite);
        expect(_f32_max_finite_result).toBe(2139095039);
    });

    _test("execution of float_literals_0: f32.trailing_dot (instance 0)", () => {
        let _f32_trailing_dot = module.getExport("f32.trailing_dot");
        expect(_f32_trailing_dot).not.toBeUndefined();
        let _f32_trailing_dot_result = module.invoke(_f32_trailing_dot);
        expect(_f32_trailing_dot_result).toBe(1149239296);
    });

    _test("execution of float_literals_0: f32_dec.zero (instance 0)", () => {
        let _f32_dec_zero = module.getExport("f32_dec.zero");
        expect(_f32_dec_zero).not.toBeUndefined();
        let _f32_dec_zero_result = module.invoke(_f32_dec_zero);
        expect(_f32_dec_zero_result).toBe(0);
    });

    _test("execution of float_literals_0: f32_dec.positive_zero (instance 0)", () => {
        let _f32_dec_positive_zero = module.getExport("f32_dec.positive_zero");
        expect(_f32_dec_positive_zero).not.toBeUndefined();
        let _f32_dec_positive_zero_result = module.invoke(_f32_dec_positive_zero);
        expect(_f32_dec_positive_zero_result).toBe(0);
    });

    _test("execution of float_literals_0: f32_dec.negative_zero (instance 0)", () => {
        let _f32_dec_negative_zero = module.getExport("f32_dec.negative_zero");
        expect(_f32_dec_negative_zero).not.toBeUndefined();
        let _f32_dec_negative_zero_result = module.invoke(_f32_dec_negative_zero);
        expect(_f32_dec_negative_zero_result).toBe(-2147483648);
    });

    _test("execution of float_literals_0: f32_dec.misc (instance 0)", () => {
        let _f32_dec_misc = module.getExport("f32_dec.misc");
        expect(_f32_dec_misc).not.toBeUndefined();
        let _f32_dec_misc_result = module.invoke(_f32_dec_misc);
        expect(_f32_dec_misc_result).toBe(1086918619);
    });

    _test("execution of float_literals_0: f32_dec.min_positive (instance 0)", () => {
        let _f32_dec_min_positive = module.getExport("f32_dec.min_positive");
        expect(_f32_dec_min_positive).not.toBeUndefined();
        let _f32_dec_min_positive_result = module.invoke(_f32_dec_min_positive);
        expect(_f32_dec_min_positive_result).toBe(1);
    });

    _test("execution of float_literals_0: f32_dec.min_normal (instance 0)", () => {
        let _f32_dec_min_normal = module.getExport("f32_dec.min_normal");
        expect(_f32_dec_min_normal).not.toBeUndefined();
        let _f32_dec_min_normal_result = module.invoke(_f32_dec_min_normal);
        expect(_f32_dec_min_normal_result).toBe(8388608);
    });

    _test("execution of float_literals_0: f32_dec.max_subnormal (instance 0)", () => {
        let _f32_dec_max_subnormal = module.getExport("f32_dec.max_subnormal");
        expect(_f32_dec_max_subnormal).not.toBeUndefined();
        let _f32_dec_max_subnormal_result = module.invoke(_f32_dec_max_subnormal);
        expect(_f32_dec_max_subnormal_result).toBe(8388607);
    });

    _test("execution of float_literals_0: f32_dec.max_finite (instance 0)", () => {
        let _f32_dec_max_finite = module.getExport("f32_dec.max_finite");
        expect(_f32_dec_max_finite).not.toBeUndefined();
        let _f32_dec_max_finite_result = module.invoke(_f32_dec_max_finite);
        expect(_f32_dec_max_finite_result).toBe(2139095039);
    });

    _test("execution of float_literals_0: f32_dec.trailing_dot (instance 0)", () => {
        let _f32_dec_trailing_dot = module.getExport("f32_dec.trailing_dot");
        expect(_f32_dec_trailing_dot).not.toBeUndefined();
        let _f32_dec_trailing_dot_result = module.invoke(_f32_dec_trailing_dot);
        expect(_f32_dec_trailing_dot_result).toBe(1343554297);
    });

    _test("execution of float_literals_0: f32_dec.root_beer_float (instance 0)", () => {
        let _f32_dec_root_beer_float = module.getExport("f32_dec.root_beer_float");
        expect(_f32_dec_root_beer_float).not.toBeUndefined();
        let _f32_dec_root_beer_float_result = module.invoke(_f32_dec_root_beer_float);
        expect(_f32_dec_root_beer_float_result).toBe(1065353217);
    });

    _test("execution of float_literals_0: f64.nan (instance 0)", () => {
        let _f64_nan = module.getExport("f64.nan");
        expect(_f64_nan).not.toBeUndefined();
        let _f64_nan_result = module.invoke(_f64_nan);
        expect(_f64_nan_result).toBe(9221120237041090560n);
    });

    _test("execution of float_literals_0: f64.positive_nan (instance 0)", () => {
        let _f64_positive_nan = module.getExport("f64.positive_nan");
        expect(_f64_positive_nan).not.toBeUndefined();
        let _f64_positive_nan_result = module.invoke(_f64_positive_nan);
        expect(_f64_positive_nan_result).toBe(9221120237041090560n);
    });

    _test("execution of float_literals_0: f64.negative_nan (instance 0)", () => {
        let _f64_negative_nan = module.getExport("f64.negative_nan");
        expect(_f64_negative_nan).not.toBeUndefined();
        let _f64_negative_nan_result = module.invoke(_f64_negative_nan);
        expect(_f64_negative_nan_result).toBe(-2251799813685248n);
    });

    _test("execution of float_literals_0: f64.plain_nan (instance 0)", () => {
        let _f64_plain_nan = module.getExport("f64.plain_nan");
        expect(_f64_plain_nan).not.toBeUndefined();
        let _f64_plain_nan_result = module.invoke(_f64_plain_nan);
        expect(_f64_plain_nan_result).toBe(9221120237041090560n);
    });

    _test("execution of float_literals_0: f64.informally_known_as_plain_snan (instance 0)", () => {
        let _f64_informally_known_as_plain_snan = module.getExport(
            "f64.informally_known_as_plain_snan"
        );
        expect(_f64_informally_known_as_plain_snan).not.toBeUndefined();
        let _f64_informally_known_as_plain_snan_result = module.invoke(
            _f64_informally_known_as_plain_snan
        );
        expect(_f64_informally_known_as_plain_snan_result).toBe(9219994337134247936n);
    });

    _test("execution of float_literals_0: f64.all_ones_nan (instance 0)", () => {
        let _f64_all_ones_nan = module.getExport("f64.all_ones_nan");
        expect(_f64_all_ones_nan).not.toBeUndefined();
        let _f64_all_ones_nan_result = module.invoke(_f64_all_ones_nan);
        expect(_f64_all_ones_nan_result).toBe(-1n);
    });

    _test("execution of float_literals_0: f64.misc_nan (instance 0)", () => {
        let _f64_misc_nan = module.getExport("f64.misc_nan");
        expect(_f64_misc_nan).not.toBeUndefined();
        let _f64_misc_nan_result = module.invoke(_f64_misc_nan);
        expect(_f64_misc_nan_result).toBe(9218888453225749180n);
    });

    _test("execution of float_literals_0: f64.misc_positive_nan (instance 0)", () => {
        let _f64_misc_positive_nan = module.getExport("f64.misc_positive_nan");
        expect(_f64_misc_positive_nan).not.toBeUndefined();
        let _f64_misc_positive_nan_result = module.invoke(_f64_misc_positive_nan);
        expect(_f64_misc_positive_nan_result).toBe(9219717281780008969n);
    });

    _test("execution of float_literals_0: f64.misc_negative_nan (instance 0)", () => {
        let _f64_misc_negative_nan = module.getExport("f64.misc_negative_nan");
        expect(_f64_misc_negative_nan).not.toBeUndefined();
        let _f64_misc_negative_nan_result = module.invoke(_f64_misc_negative_nan);
        expect(_f64_misc_negative_nan_result).toBe(-3751748707474619n);
    });

    _test("execution of float_literals_0: f64.infinity (instance 0)", () => {
        let _f64_infinity = module.getExport("f64.infinity");
        expect(_f64_infinity).not.toBeUndefined();
        let _f64_infinity_result = module.invoke(_f64_infinity);
        expect(_f64_infinity_result).toBe(9218868437227405312n);
    });

    _test("execution of float_literals_0: f64.positive_infinity (instance 0)", () => {
        let _f64_positive_infinity = module.getExport("f64.positive_infinity");
        expect(_f64_positive_infinity).not.toBeUndefined();
        let _f64_positive_infinity_result = module.invoke(_f64_positive_infinity);
        expect(_f64_positive_infinity_result).toBe(9218868437227405312n);
    });

    _test("execution of float_literals_0: f64.negative_infinity (instance 0)", () => {
        let _f64_negative_infinity = module.getExport("f64.negative_infinity");
        expect(_f64_negative_infinity).not.toBeUndefined();
        let _f64_negative_infinity_result = module.invoke(_f64_negative_infinity);
        expect(_f64_negative_infinity_result).toBe(-4503599627370496n);
    });

    _test("execution of float_literals_0: f64.zero (instance 0)", () => {
        let _f64_zero = module.getExport("f64.zero");
        expect(_f64_zero).not.toBeUndefined();
        let _f64_zero_result = module.invoke(_f64_zero);
        expect(_f64_zero_result).toBe(0n);
    });

    _test("execution of float_literals_0: f64.positive_zero (instance 0)", () => {
        let _f64_positive_zero = module.getExport("f64.positive_zero");
        expect(_f64_positive_zero).not.toBeUndefined();
        let _f64_positive_zero_result = module.invoke(_f64_positive_zero);
        expect(_f64_positive_zero_result).toBe(0n);
    });

    _test("execution of float_literals_0: f64.negative_zero (instance 0)", () => {
        let _f64_negative_zero = module.getExport("f64.negative_zero");
        expect(_f64_negative_zero).not.toBeUndefined();
        let _f64_negative_zero_result = module.invoke(_f64_negative_zero);
        expect(_f64_negative_zero_result).toBe(-9223372036854775808n);
    });

    _test("execution of float_literals_0: f64.misc (instance 0)", () => {
        let _f64_misc = module.getExport("f64.misc");
        expect(_f64_misc).not.toBeUndefined();
        let _f64_misc_result = module.invoke(_f64_misc);
        expect(_f64_misc_result).toBe(4618760256179416344n);
    });

    _test("execution of float_literals_0: f64.min_positive (instance 0)", () => {
        let _f64_min_positive = module.getExport("f64.min_positive");
        expect(_f64_min_positive).not.toBeUndefined();
        let _f64_min_positive_result = module.invoke(_f64_min_positive);
        expect(_f64_min_positive_result).toBe(1n);
    });

    _test("execution of float_literals_0: f64.min_normal (instance 0)", () => {
        let _f64_min_normal = module.getExport("f64.min_normal");
        expect(_f64_min_normal).not.toBeUndefined();
        let _f64_min_normal_result = module.invoke(_f64_min_normal);
        expect(_f64_min_normal_result).toBe(4503599627370496n);
    });

    _test("execution of float_literals_0: f64.max_subnormal (instance 0)", () => {
        let _f64_max_subnormal = module.getExport("f64.max_subnormal");
        expect(_f64_max_subnormal).not.toBeUndefined();
        let _f64_max_subnormal_result = module.invoke(_f64_max_subnormal);
        expect(_f64_max_subnormal_result).toBe(4503599627370495n);
    });

    _test("execution of float_literals_0: f64.max_finite (instance 0)", () => {
        let _f64_max_finite = module.getExport("f64.max_finite");
        expect(_f64_max_finite).not.toBeUndefined();
        let _f64_max_finite_result = module.invoke(_f64_max_finite);
        expect(_f64_max_finite_result).toBe(9218868437227405311n);
    });

    _test("execution of float_literals_0: f64.trailing_dot (instance 0)", () => {
        let _f64_trailing_dot = module.getExport("f64.trailing_dot");
        expect(_f64_trailing_dot).not.toBeUndefined();
        let _f64_trailing_dot_result = module.invoke(_f64_trailing_dot);
        expect(_f64_trailing_dot_result).toBe(5057542381537067008n);
    });

    _test("execution of float_literals_0: f64_dec.zero (instance 0)", () => {
        let _f64_dec_zero = module.getExport("f64_dec.zero");
        expect(_f64_dec_zero).not.toBeUndefined();
        let _f64_dec_zero_result = module.invoke(_f64_dec_zero);
        expect(_f64_dec_zero_result).toBe(0n);
    });

    _test("execution of float_literals_0: f64_dec.positive_zero (instance 0)", () => {
        let _f64_dec_positive_zero = module.getExport("f64_dec.positive_zero");
        expect(_f64_dec_positive_zero).not.toBeUndefined();
        let _f64_dec_positive_zero_result = module.invoke(_f64_dec_positive_zero);
        expect(_f64_dec_positive_zero_result).toBe(0n);
    });

    _test("execution of float_literals_0: f64_dec.negative_zero (instance 0)", () => {
        let _f64_dec_negative_zero = module.getExport("f64_dec.negative_zero");
        expect(_f64_dec_negative_zero).not.toBeUndefined();
        let _f64_dec_negative_zero_result = module.invoke(_f64_dec_negative_zero);
        expect(_f64_dec_negative_zero_result).toBe(-9223372036854775808n);
    });

    _test("execution of float_literals_0: f64_dec.misc (instance 0)", () => {
        let _f64_dec_misc = module.getExport("f64_dec.misc");
        expect(_f64_dec_misc).not.toBeUndefined();
        let _f64_dec_misc_result = module.invoke(_f64_dec_misc);
        expect(_f64_dec_misc_result).toBe(4618760256179416344n);
    });

    _test("execution of float_literals_0: f64_dec.min_positive (instance 0)", () => {
        let _f64_dec_min_positive = module.getExport("f64_dec.min_positive");
        expect(_f64_dec_min_positive).not.toBeUndefined();
        let _f64_dec_min_positive_result = module.invoke(_f64_dec_min_positive);
        expect(_f64_dec_min_positive_result).toBe(1n);
    });

    _test("execution of float_literals_0: f64_dec.min_normal (instance 0)", () => {
        let _f64_dec_min_normal = module.getExport("f64_dec.min_normal");
        expect(_f64_dec_min_normal).not.toBeUndefined();
        let _f64_dec_min_normal_result = module.invoke(_f64_dec_min_normal);
        expect(_f64_dec_min_normal_result).toBe(4503599627370496n);
    });

    _test("execution of float_literals_0: f64_dec.max_subnormal (instance 0)", () => {
        let _f64_dec_max_subnormal = module.getExport("f64_dec.max_subnormal");
        expect(_f64_dec_max_subnormal).not.toBeUndefined();
        let _f64_dec_max_subnormal_result = module.invoke(_f64_dec_max_subnormal);
        expect(_f64_dec_max_subnormal_result).toBe(4503599627370495n);
    });

    _test("execution of float_literals_0: f64_dec.max_finite (instance 0)", () => {
        let _f64_dec_max_finite = module.getExport("f64_dec.max_finite");
        expect(_f64_dec_max_finite).not.toBeUndefined();
        let _f64_dec_max_finite_result = module.invoke(_f64_dec_max_finite);
        expect(_f64_dec_max_finite_result).toBe(9218868437227405311n);
    });

    _test("execution of float_literals_0: f64_dec.trailing_dot (instance 0)", () => {
        let _f64_dec_trailing_dot = module.getExport("f64_dec.trailing_dot");
        expect(_f64_dec_trailing_dot).not.toBeUndefined();
        let _f64_dec_trailing_dot_result = module.invoke(_f64_dec_trailing_dot);
        expect(_f64_dec_trailing_dot_result).toBe(6103021453049119613n);
    });

    _test("execution of float_literals_0: f64_dec.root_beer_float (instance 0)", () => {
        let _f64_dec_root_beer_float = module.getExport("f64_dec.root_beer_float");
        expect(_f64_dec_root_beer_float).not.toBeUndefined();
        let _f64_dec_root_beer_float_result = module.invoke(_f64_dec_root_beer_float);
        expect(_f64_dec_root_beer_float_result).toBe(4607182419335945764n);
    });

    _test("execution of float_literals_0: f32-dec-sep1 (instance 0)", () => {
        let _f32_dec_sep1 = module.getExport("f32-dec-sep1");
        expect(_f32_dec_sep1).not.toBeUndefined();
        let _f32_dec_sep1_result = module.invoke(_f32_dec_sep1);
        expect(_f32_dec_sep1_result).toBe(1000000.0);
    });

    _test("execution of float_literals_0: f32-dec-sep2 (instance 0)", () => {
        let _f32_dec_sep2 = module.getExport("f32-dec-sep2");
        expect(_f32_dec_sep2).not.toBeUndefined();
        let _f32_dec_sep2_result = module.invoke(_f32_dec_sep2);
        expect(_f32_dec_sep2_result).toBe(1000.0);
    });

    _test("execution of float_literals_0: f32-dec-sep3 (instance 0)", () => {
        let _f32_dec_sep3 = module.getExport("f32-dec-sep3");
        expect(_f32_dec_sep3).not.toBeUndefined();
        let _f32_dec_sep3_result = module.invoke(_f32_dec_sep3);
        expect(_f32_dec_sep3_result).toBe(1003.141592);
    });

    _test("execution of float_literals_0: f32-dec-sep4 (instance 0)", () => {
        let _f32_dec_sep4 = module.getExport("f32-dec-sep4");
        expect(_f32_dec_sep4).not.toBeUndefined();
        let _f32_dec_sep4_result = module.invoke(_f32_dec_sep4);
        expect(_f32_dec_sep4_result).toBe(990000000000000.0);
    });

    _test("execution of float_literals_0: f32-dec-sep5 (instance 0)", () => {
        let _f32_dec_sep5 = module.getExport("f32-dec-sep5");
        expect(_f32_dec_sep5).not.toBeUndefined();
        let _f32_dec_sep5_result = module.invoke(_f32_dec_sep5);
        expect(_f32_dec_sep5_result).toBe(1.2200011354e28);
    });

    _test("execution of float_literals_0: f32-hex-sep1 (instance 0)", () => {
        let _f32_hex_sep1 = module.getExport("f32-hex-sep1");
        expect(_f32_hex_sep1).not.toBeUndefined();
        let _f32_hex_sep1_result = module.invoke(_f32_hex_sep1);
        expect(_f32_hex_sep1_result).toBe(168755353.0);
    });

    _test("execution of float_literals_0: f32-hex-sep2 (instance 0)", () => {
        let _f32_hex_sep2 = module.getExport("f32-hex-sep2");
        expect(_f32_hex_sep2).not.toBeUndefined();
        let _f32_hex_sep2_result = module.invoke(_f32_hex_sep2);
        expect(_f32_hex_sep2_result).toBe(109071.0);
    });

    _test("execution of float_literals_0: f32-hex-sep3 (instance 0)", () => {
        let _f32_hex_sep3 = module.getExport("f32-hex-sep3");
        expect(_f32_hex_sep3).not.toBeUndefined();
        let _f32_hex_sep3_result = module.invoke(_f32_hex_sep3);
        expect(_f32_hex_sep3_result).toBe(41215.94240794191);
    });

    _test("execution of float_literals_0: f32-hex-sep4 (instance 0)", () => {
        let _f32_hex_sep4 = module.getExport("f32-hex-sep4");
        expect(_f32_hex_sep4).not.toBeUndefined();
        let _f32_hex_sep4_result = module.invoke(_f32_hex_sep4);
        expect(_f32_hex_sep4_result).toBe(1966080.0);
    });

    _test("execution of float_literals_0: f32-hex-sep5 (instance 0)", () => {
        let _f32_hex_sep5 = module.getExport("f32-hex-sep5");
        expect(_f32_hex_sep5).not.toBeUndefined();
        let _f32_hex_sep5_result = module.invoke(_f32_hex_sep5);
        expect(_f32_hex_sep5_result).toBe(23605225168752.0);
    });

    _test("execution of float_literals_0: f64-dec-sep1 (instance 0)", () => {
        let _f64_dec_sep1 = module.getExport("f64-dec-sep1");
        expect(_f64_dec_sep1).not.toBeUndefined();
        let _f64_dec_sep1_result = module.invoke(_f64_dec_sep1);
        expect(_f64_dec_sep1_result).toBe(1000000.0);
    });

    _test("execution of float_literals_0: f64-dec-sep2 (instance 0)", () => {
        let _f64_dec_sep2 = module.getExport("f64-dec-sep2");
        expect(_f64_dec_sep2).not.toBeUndefined();
        let _f64_dec_sep2_result = module.invoke(_f64_dec_sep2);
        expect(_f64_dec_sep2_result).toBe(1000.0);
    });

    _test("execution of float_literals_0: f64-dec-sep3 (instance 0)", () => {
        let _f64_dec_sep3 = module.getExport("f64-dec-sep3");
        expect(_f64_dec_sep3).not.toBeUndefined();
        let _f64_dec_sep3_result = module.invoke(_f64_dec_sep3);
        expect(_f64_dec_sep3_result).toBe(1003.141592);
    });

    _test("execution of float_literals_0: f64-dec-sep4 (instance 0)", () => {
        let _f64_dec_sep4 = module.getExport("f64-dec-sep4");
        expect(_f64_dec_sep4).not.toBeUndefined();
        let _f64_dec_sep4_result = module.invoke(_f64_dec_sep4);
        expect(_f64_dec_sep4_result).toBe(9.9e-122);
    });

    _test("execution of float_literals_0: f64-dec-sep5 (instance 0)", () => {
        let _f64_dec_sep5 = module.getExport("f64-dec-sep5");
        expect(_f64_dec_sep5).not.toBeUndefined();
        let _f64_dec_sep5_result = module.invoke(_f64_dec_sep5);
        expect(_f64_dec_sep5_result).toBe(1.2200011354e28);
    });

    _test("execution of float_literals_0: f64-hex-sep1 (instance 0)", () => {
        let _f64_hex_sep1 = module.getExport("f64-hex-sep1");
        expect(_f64_hex_sep1).not.toBeUndefined();
        let _f64_hex_sep1_result = module.invoke(_f64_hex_sep1);
        expect(_f64_hex_sep1_result).toBe(3078696982321561.0);
    });

    _test("execution of float_literals_0: f64-hex-sep2 (instance 0)", () => {
        let _f64_hex_sep2 = module.getExport("f64-hex-sep2");
        expect(_f64_hex_sep2).not.toBeUndefined();
        let _f64_hex_sep2_result = module.invoke(_f64_hex_sep2);
        expect(_f64_hex_sep2_result).toBe(109071.0);
    });

    _test("execution of float_literals_0: f64-hex-sep3 (instance 0)", () => {
        let _f64_hex_sep3 = module.getExport("f64-hex-sep3");
        expect(_f64_hex_sep3).not.toBeUndefined();
        let _f64_hex_sep3_result = module.invoke(_f64_hex_sep3);
        expect(_f64_hex_sep3_result).toBe(41215.94240794191);
    });

    _test("execution of float_literals_0: f64-hex-sep4 (instance 0)", () => {
        let _f64_hex_sep4 = module.getExport("f64-hex-sep4");
        expect(_f64_hex_sep4).not.toBeUndefined();
        let _f64_hex_sep4_result = module.invoke(_f64_hex_sep4);
        expect(_f64_hex_sep4_result).toBe(1966080.0);
    });

    _test("execution of float_literals_0: f64-hex-sep5 (instance 0)", () => {
        let _f64_hex_sep5 = module.getExport("f64-hex-sep5");
        expect(_f64_hex_sep5).not.toBeUndefined();
        let _f64_hex_sep5_result = module.invoke(_f64_hex_sep5);
        expect(_f64_hex_sep5_result).toBe(23605225168752.0);
    });
});

describe("float_literals_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_literals_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_literals_1: 4294967249 (instance 0)", () => {
        let _4294967249 = module.getExport("4294967249");
        expect(_4294967249).not.toBeUndefined();
        let _4294967249_result = module.invoke(_4294967249);
        expect(_4294967249_result).toBe(4294967249.0);
    });
});

describe("float_literals_2", () => {
    let _test = test;

    _test("execution of float_literals_2: _inline_test_0 (instance 0)", () => {});
});

describe("float_literals_3", () => {
    let _test = test;

    _test("execution of float_literals_3: _inline_test_1 (instance 0)", () => {});
});

describe("float_literals_4", () => {
    let _test = test;

    _test("execution of float_literals_4: _inline_test_2 (instance 0)", () => {});
});

describe("float_literals_5", () => {
    let _test = test;

    _test("execution of float_literals_5: _inline_test_3 (instance 0)", () => {});
});

describe("float_literals_6", () => {
    let _test = test;

    _test("execution of float_literals_6: _inline_test_4 (instance 0)", () => {});
});

describe("float_literals_7", () => {
    let _test = test;

    _test("execution of float_literals_7: _inline_test_5 (instance 0)", () => {});
});

describe("float_literals_8", () => {
    let _test = test;

    _test("execution of float_literals_8: _inline_test_6 (instance 0)", () => {});
});

describe("float_literals_9", () => {
    let _test = test;

    _test("execution of float_literals_9: _inline_test_7 (instance 0)", () => {});
});

describe("float_literals_10", () => {
    let _test = test;

    _test("execution of float_literals_10: _inline_test_8 (instance 0)", () => {});
});

describe("float_literals_11", () => {
    let _test = test;

    _test("execution of float_literals_11: _inline_test_9 (instance 0)", () => {});
});

describe("float_literals_12", () => {
    let _test = test;

    _test("execution of float_literals_12: _inline_test_10 (instance 0)", () => {});
});

describe("float_literals_13", () => {
    let _test = test;

    _test("execution of float_literals_13: _inline_test_11 (instance 0)", () => {});
});

describe("float_literals_14", () => {
    let _test = test;

    _test("execution of float_literals_14: _inline_test_12 (instance 0)", () => {});
});

describe("float_literals_15", () => {
    let _test = test;

    _test("execution of float_literals_15: _inline_test_13 (instance 0)", () => {});
});

describe("float_literals_16", () => {
    let _test = test;

    _test("execution of float_literals_16: _inline_test_14 (instance 0)", () => {});
});

describe("float_literals_17", () => {
    let _test = test;

    _test("execution of float_literals_17: _inline_test_15 (instance 0)", () => {});
});

describe("float_literals_18", () => {
    let _test = test;

    _test("execution of float_literals_18: _inline_test_16 (instance 0)", () => {});
});

describe("float_literals_19", () => {
    let _test = test;

    _test("execution of float_literals_19: _inline_test_17 (instance 0)", () => {});
});

describe("float_literals_20", () => {
    let _test = test;

    _test("execution of float_literals_20: _inline_test_18 (instance 0)", () => {});
});

describe("float_literals_21", () => {
    let _test = test;

    _test("execution of float_literals_21: _inline_test_19 (instance 0)", () => {});
});

describe("float_literals_22", () => {
    let _test = test;

    _test("execution of float_literals_22: _inline_test_20 (instance 0)", () => {});
});

describe("float_literals_23", () => {
    let _test = test;

    _test("execution of float_literals_23: _inline_test_21 (instance 0)", () => {});
});

describe("float_literals_24", () => {
    let _test = test;

    _test("execution of float_literals_24: _inline_test_22 (instance 0)", () => {});
});

describe("float_literals_25", () => {
    let _test = test;

    _test("execution of float_literals_25: _inline_test_23 (instance 0)", () => {});
});

describe("float_literals_26", () => {
    let _test = test;

    _test("execution of float_literals_26: _inline_test_24 (instance 0)", () => {});
});

describe("float_literals_27", () => {
    let _test = test;

    _test("execution of float_literals_27: _inline_test_25 (instance 0)", () => {});
});

describe("float_literals_28", () => {
    let _test = test;

    _test("execution of float_literals_28: _inline_test_26 (instance 0)", () => {});
});

describe("float_literals_29", () => {
    let _test = test;

    _test("execution of float_literals_29: _inline_test_27 (instance 0)", () => {});
});

describe("float_literals_30", () => {
    let _test = test;

    _test("execution of float_literals_30: _inline_test_28 (instance 0)", () => {});
});

describe("float_literals_31", () => {
    let _test = test;

    _test("execution of float_literals_31: _inline_test_29 (instance 0)", () => {});
});

describe("float_literals_32", () => {
    let _test = test;

    _test("execution of float_literals_32: _inline_test_30 (instance 0)", () => {});
});

describe("float_literals_33", () => {
    let _test = test;

    _test("execution of float_literals_33: _inline_test_31 (instance 0)", () => {});
});

describe("float_literals_34", () => {
    let _test = test;

    _test("execution of float_literals_34: _inline_test_32 (instance 0)", () => {});
});

describe("float_literals_35", () => {
    let _test = test;

    _test("execution of float_literals_35: _inline_test_33 (instance 0)", () => {});
});

describe("float_literals_36", () => {
    let _test = test;

    _test("execution of float_literals_36: _inline_test_34 (instance 0)", () => {});
});

describe("float_literals_37", () => {
    let _test = test;

    _test("execution of float_literals_37: _inline_test_35 (instance 0)", () => {});
});

describe("float_literals_38", () => {
    let _test = test;

    _test("execution of float_literals_38: _inline_test_36 (instance 0)", () => {});
});

describe("float_literals_39", () => {
    let _test = test;

    _test("execution of float_literals_39: _inline_test_37 (instance 0)", () => {});
});

describe("float_literals_40", () => {
    let _test = test;

    _test("execution of float_literals_40: _inline_test_38 (instance 0)", () => {});
});

describe("float_literals_41", () => {
    let _test = test;

    _test("execution of float_literals_41: _inline_test_39 (instance 0)", () => {});
});

describe("float_literals_42", () => {
    let _test = test;

    _test("execution of float_literals_42: _inline_test_40 (instance 0)", () => {});
});

describe("float_literals_43", () => {
    let _test = test;

    _test("execution of float_literals_43: _inline_test_41 (instance 0)", () => {});
});

describe("float_literals_44", () => {
    let _test = test;

    _test("execution of float_literals_44: _inline_test_42 (instance 0)", () => {});
});

describe("float_literals_45", () => {
    let _test = test;

    _test("execution of float_literals_45: _inline_test_43 (instance 0)", () => {});
});

describe("float_literals_46", () => {
    let _test = test;

    _test("execution of float_literals_46: _inline_test_44 (instance 0)", () => {});
});

describe("float_literals_47", () => {
    let _test = test;

    _test("execution of float_literals_47: _inline_test_45 (instance 0)", () => {});
});

describe("float_literals_48", () => {
    let _test = test;

    _test("execution of float_literals_48: _inline_test_46 (instance 0)", () => {});
});

describe("float_literals_49", () => {
    let _test = test;

    _test("execution of float_literals_49: _inline_test_47 (instance 0)", () => {});
});

describe("float_literals_50", () => {
    let _test = test;

    _test("execution of float_literals_50: _inline_test_48 (instance 0)", () => {});
});

describe("float_literals_51", () => {
    let _test = test;

    _test("execution of float_literals_51: _inline_test_49 (instance 0)", () => {});
});

describe("float_literals_52", () => {
    let _test = test;

    _test("execution of float_literals_52: _inline_test_50 (instance 0)", () => {});
});

describe("float_literals_53", () => {
    let _test = test;

    _test("execution of float_literals_53: _inline_test_51 (instance 0)", () => {});
});

describe("float_literals_54", () => {
    let _test = test;

    _test("execution of float_literals_54: _inline_test_52 (instance 0)", () => {});
});

describe("float_literals_55", () => {
    let _test = test;

    _test("execution of float_literals_55: _inline_test_53 (instance 0)", () => {});
});

describe("float_literals_56", () => {
    let _test = test;

    _test("execution of float_literals_56: _inline_test_54 (instance 0)", () => {});
});

describe("float_literals_57", () => {
    let _test = test;

    _test("execution of float_literals_57: _inline_test_55 (instance 0)", () => {});
});

describe("float_literals_58", () => {
    let _test = test;

    _test("execution of float_literals_58: _inline_test_56 (instance 0)", () => {});
});

describe("float_literals_59", () => {
    let _test = test;

    _test("execution of float_literals_59: _inline_test_57 (instance 0)", () => {});
});

describe("float_literals_60", () => {
    let _test = test;

    _test("execution of float_literals_60: _inline_test_58 (instance 0)", () => {});
});

describe("float_literals_61", () => {
    let _test = test;

    _test("execution of float_literals_61: _inline_test_59 (instance 0)", () => {});
});

describe("float_literals_62", () => {
    let _test = test;

    _test("execution of float_literals_62: _inline_test_60 (instance 0)", () => {});
});

describe("float_literals_63", () => {
    let _test = test;

    _test("execution of float_literals_63: _inline_test_61 (instance 0)", () => {});
});

describe("float_literals_64", () => {
    let _test = test;

    _test("execution of float_literals_64: _inline_test_62 (instance 0)", () => {});
});

describe("float_literals_65", () => {
    let _test = test;

    _test("execution of float_literals_65: _inline_test_63 (instance 0)", () => {});
});

describe("float_literals_66", () => {
    let _test = test;

    _test("execution of float_literals_66: _inline_test_64 (instance 0)", () => {});
});

describe("float_literals_67", () => {
    let _test = test;

    _test("execution of float_literals_67: _inline_test_65 (instance 0)", () => {});
});

describe("float_literals_68", () => {
    let _test = test;

    _test("execution of float_literals_68: _inline_test_66 (instance 0)", () => {});
});

describe("float_literals_69", () => {
    let _test = test;

    _test("execution of float_literals_69: _inline_test_67 (instance 0)", () => {});
});

describe("float_literals_70", () => {
    let _test = test;

    _test("execution of float_literals_70: _inline_test_68 (instance 0)", () => {});
});

describe("float_literals_71", () => {
    let _test = test;

    _test("execution of float_literals_71: _inline_test_69 (instance 0)", () => {});
});

describe("float_literals_72", () => {
    let _test = test;

    _test("execution of float_literals_72: _inline_test_70 (instance 0)", () => {});
});

describe("float_literals_73", () => {
    let _test = test;

    _test("execution of float_literals_73: _inline_test_71 (instance 0)", () => {});
});

describe("float_literals_74", () => {
    let _test = test;

    _test("execution of float_literals_74: _inline_test_72 (instance 0)", () => {});
});

describe("float_literals_75", () => {
    let _test = test;

    _test("execution of float_literals_75: _inline_test_73 (instance 0)", () => {});
});

describe("float_literals_76", () => {
    let _test = test;

    _test("execution of float_literals_76: _inline_test_74 (instance 0)", () => {});
});

describe("float_literals_77", () => {
    let _test = test;

    _test("execution of float_literals_77: _inline_test_75 (instance 0)", () => {});
});
