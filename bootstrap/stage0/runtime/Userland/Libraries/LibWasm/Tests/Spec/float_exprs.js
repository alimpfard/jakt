let globalImportObject = {};
let namedModules = {};

describe("float_exprs_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_0: f64.no_contraction (instance 0)", () => {
        let _f64_no_contraction = module.getExport("f64.no_contraction");
        expect(_f64_no_contraction).not.toBeUndefined();
        let _f64_no_contraction_result = module.invoke(
            _f64_no_contraction,
            -1.5967133604096234e-31,
            8.763352160827123e199,
            4.289657620489846e160
        );
        expect(_f64_no_contraction_result).toBe(-1.3992561434270632e169);
    });

    _test("execution of float_exprs_0: f64.no_contraction (instance 1)", () => {
        let _f64_no_contraction = module.getExport("f64.no_contraction");
        expect(_f64_no_contraction).not.toBeUndefined();
        let _f64_no_contraction_result = module.invoke(
            _f64_no_contraction,
            8341016642481988.0,
            3.223424965918293e-97,
            2.3310835741659086e-91
        );
        expect(_f64_no_contraction_result).toBe(2.6886641288847496e-81);
    });

    _test("execution of float_exprs_0: f64.no_contraction (instance 2)", () => {
        let _f64_no_contraction = module.getExport("f64.no_contraction");
        expect(_f64_no_contraction).not.toBeUndefined();
        let _f64_no_contraction_result = module.invoke(
            _f64_no_contraction,
            -3.0119045290520013e-179,
            5.269933643923675e160,
            6.654454781339856e-32
        );
        expect(_f64_no_contraction_result).toBe(-1.5872537009936566e-18);
    });

    _test("execution of float_exprs_0: f64.no_contraction (instance 3)", () => {
        let _f64_no_contraction = module.getExport("f64.no_contraction");
        expect(_f64_no_contraction).not.toBeUndefined();
        let _f64_no_contraction_result = module.invoke(
            _f64_no_contraction,
            3.1413936116780743e-21,
            -7.262766035707377e-31,
            4.619684894228461e-66
        );
        expect(_f64_no_contraction_result).toBe(-2.28152068276836e-51);
    });

    _test("execution of float_exprs_0: f64.no_contraction (instance 4)", () => {
        let _f64_no_contraction = module.getExport("f64.no_contraction");
        expect(_f64_no_contraction).not.toBeUndefined();
        let _f64_no_contraction_result = module.invoke(
            _f64_no_contraction,
            -1.6080464217402378e-286,
            -3.82103410226833e281,
            1.0541980504151345e-16
        );
        expect(_f64_no_contraction_result).toBe(6.144400215510552e-5);
    });
});

describe("float_exprs_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_1: f32.no_fma (instance 0)", () => {
        let _f32_no_fma = module.getExport("f32.no_fma");
        expect(_f32_no_fma).not.toBeUndefined();
        let _f32_no_fma_result = module.invoke(
            _f32_no_fma,
            3.5184304122947826e37,
            2.1584361320492462e-7,
            2.593406430766023e32
        );
        expect(_f32_no_fma_result).toBe(2.669349603329165e32);
    });

    _test("execution of float_exprs_1: f32.no_fma (instance 1)", () => {
        let _f32_no_fma = module.getExport("f32.no_fma");
        expect(_f32_no_fma).not.toBeUndefined();
        let _f32_no_fma_result = module.invoke(
            _f32_no_fma,
            7.175324334696143e-9,
            -1.2255339607787391e-15,
            4.131643583655494e-27
        );
        expect(_f32_no_fma_result).toBe(-8.789472428754409e-24);
    });

    _test("execution of float_exprs_1: f32.no_fma (instance 2)", () => {
        let _f32_no_fma = module.getExport("f32.no_fma");
        expect(_f32_no_fma).not.toBeUndefined();
        let _f32_no_fma_result = module.invoke(
            _f32_no_fma,
            231063437312.0,
            0.00020773262076545507,
            1797.64208984375
        );
        expect(_f32_no_fma_result).toBe(48001208.0);
    });

    _test("execution of float_exprs_1: f32.no_fma (instance 3)", () => {
        let _f32_no_fma = module.getExport("f32.no_fma");
        expect(_f32_no_fma).not.toBeUndefined();
        let _f32_no_fma_result = module.invoke(
            _f32_no_fma,
            0.004554270301014185,
            -7265493.5,
            -2.396428346633911
        );
        expect(_f32_no_fma_result).toBe(-33091.4140625);
    });

    _test("execution of float_exprs_1: f32.no_fma (instance 4)", () => {
        let _f32_no_fma = module.getExport("f32.no_fma");
        expect(_f32_no_fma).not.toBeUndefined();
        let _f32_no_fma_result = module.invoke(
            _f32_no_fma,
            9.888172614935959e37,
            -8.57063118026681e-22,
            -21579143168.0
        );
        expect(_f32_no_fma_result).toBe(-8.474790813761536e16);
    });

    _test("execution of float_exprs_1: f64.no_fma (instance 0)", () => {
        let _f64_no_fma = module.getExport("f64.no_fma");
        expect(_f64_no_fma).not.toBeUndefined();
        let _f64_no_fma_result = module.invoke(
            _f64_no_fma,
            7.890842843751792e167,
            4.21502005211736e129,
            -1.3366010811317447e297
        );
        expect(_f64_no_fma_result).toBe(1.9894050003203128e297);
    });

    _test("execution of float_exprs_1: f64.no_fma (instance 1)", () => {
        let _f64_no_fma = module.getExport("f64.no_fma");
        expect(_f64_no_fma).not.toBeUndefined();
        let _f64_no_fma_result = module.invoke(
            _f64_no_fma,
            5.5868223480092855e225,
            7.397302005677334e-40,
            3.656783417204092e172
        );
        expect(_f64_no_fma_result).toBe(4.1327412160292407e186);
    });

    _test("execution of float_exprs_1: f64.no_fma (instance 2)", () => {
        let _f64_no_fma = module.getExport("f64.no_fma");
        expect(_f64_no_fma).not.toBeUndefined();
        let _f64_no_fma_result = module.invoke(
            _f64_no_fma,
            1.4260477822274587e-217,
            -3.108763203659986e304,
            3.4326923552377763e71
        );
        expect(_f64_no_fma_result).toBe(-4.433244872049653e87);
    });

    _test("execution of float_exprs_1: f64.no_fma (instance 3)", () => {
        let _f64_no_fma = module.getExport("f64.no_fma");
        expect(_f64_no_fma).not.toBeUndefined();
        let _f64_no_fma_result = module.invoke(
            _f64_no_fma,
            -8.09034701735478e-117,
            -2.487441785066745e133,
            4.948476513851081e16
        );
        expect(_f64_no_fma_result).toBe(2.5072743740509472e17);
    });

    _test("execution of float_exprs_1: f64.no_fma (instance 4)", () => {
        let _f64_no_fma = module.getExport("f64.no_fma");
        expect(_f64_no_fma).not.toBeUndefined();
        let _f64_no_fma_result = module.invoke(
            _f64_no_fma,
            6723256985364377.0,
            2.8545656669287946e206,
            -5.593839470050757e207
        );
        expect(_f64_no_fma_result).toBe(1.9191978560360286e222);
    });
});

describe("float_exprs_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_2: f32.no_fold_add_zero (instance 0)", () => {
        let _f32_no_fold_add_zero = module.getExport("f32.no_fold_add_zero");
        expect(_f32_no_fold_add_zero).not.toBeUndefined();
        let _f32_no_fold_add_zero_result = module.invoke(_f32_no_fold_add_zero, -0.0);
        expect(_f32_no_fold_add_zero_result).toBe(0.0);
    });

    _test("execution of float_exprs_2: f64.no_fold_add_zero (instance 0)", () => {
        let _f64_no_fold_add_zero = module.getExport("f64.no_fold_add_zero");
        expect(_f64_no_fold_add_zero).not.toBeUndefined();
        let _f64_no_fold_add_zero_result = module.invoke(_f64_no_fold_add_zero, -0.0);
        expect(_f64_no_fold_add_zero_result).toBe(0.0);
    });

    _test("execution of float_exprs_2: f32.no_fold_add_zero (instance 1)", () => {
        let _f32_no_fold_add_zero = module.getExport("f32.no_fold_add_zero");
        expect(_f32_no_fold_add_zero).not.toBeUndefined();
        let _f32_no_fold_add_zero_result = module.invoke(_f32_no_fold_add_zero, NaN);
        expect(_f32_no_fold_add_zero_result).toBe(NaN);
    });

    _test("execution of float_exprs_2: f64.no_fold_add_zero (instance 1)", () => {
        let _f64_no_fold_add_zero = module.getExport("f64.no_fold_add_zero");
        expect(_f64_no_fold_add_zero).not.toBeUndefined();
        let _f64_no_fold_add_zero_result = module.invoke(_f64_no_fold_add_zero, NaN);
        expect(_f64_no_fold_add_zero_result).toBe(NaN);
    });
});

describe("float_exprs_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_3: f32.no_fold_zero_sub (instance 0)", () => {
        let _f32_no_fold_zero_sub = module.getExport("f32.no_fold_zero_sub");
        expect(_f32_no_fold_zero_sub).not.toBeUndefined();
        let _f32_no_fold_zero_sub_result = module.invoke(_f32_no_fold_zero_sub, 0.0);
        expect(_f32_no_fold_zero_sub_result).toBe(0.0);
    });

    _test("execution of float_exprs_3: f64.no_fold_zero_sub (instance 0)", () => {
        let _f64_no_fold_zero_sub = module.getExport("f64.no_fold_zero_sub");
        expect(_f64_no_fold_zero_sub).not.toBeUndefined();
        let _f64_no_fold_zero_sub_result = module.invoke(_f64_no_fold_zero_sub, 0.0);
        expect(_f64_no_fold_zero_sub_result).toBe(0.0);
    });

    _test("execution of float_exprs_3: f32.no_fold_zero_sub (instance 1)", () => {
        let _f32_no_fold_zero_sub = module.getExport("f32.no_fold_zero_sub");
        expect(_f32_no_fold_zero_sub).not.toBeUndefined();
        let _f32_no_fold_zero_sub_result = module.invoke(_f32_no_fold_zero_sub, NaN);
        expect(_f32_no_fold_zero_sub_result).toBe(NaN);
    });

    _test("execution of float_exprs_3: f64.no_fold_zero_sub (instance 1)", () => {
        let _f64_no_fold_zero_sub = module.getExport("f64.no_fold_zero_sub");
        expect(_f64_no_fold_zero_sub).not.toBeUndefined();
        let _f64_no_fold_zero_sub_result = module.invoke(_f64_no_fold_zero_sub, NaN);
        expect(_f64_no_fold_zero_sub_result).toBe(NaN);
    });
});

describe("float_exprs_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_4: f32.no_fold_sub_zero (instance 0)", () => {
        let _f32_no_fold_sub_zero = module.getExport("f32.no_fold_sub_zero");
        expect(_f32_no_fold_sub_zero).not.toBeUndefined();
        let _f32_no_fold_sub_zero_result = module.invoke(_f32_no_fold_sub_zero, NaN);
        expect(_f32_no_fold_sub_zero_result).toBe(NaN);
    });

    _test("execution of float_exprs_4: f64.no_fold_sub_zero (instance 0)", () => {
        let _f64_no_fold_sub_zero = module.getExport("f64.no_fold_sub_zero");
        expect(_f64_no_fold_sub_zero).not.toBeUndefined();
        let _f64_no_fold_sub_zero_result = module.invoke(_f64_no_fold_sub_zero, NaN);
        expect(_f64_no_fold_sub_zero_result).toBe(NaN);
    });
});

describe("float_exprs_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_5: f32.no_fold_mul_zero (instance 0)", () => {
        let _f32_no_fold_mul_zero = module.getExport("f32.no_fold_mul_zero");
        expect(_f32_no_fold_mul_zero).not.toBeUndefined();
        let _f32_no_fold_mul_zero_result = module.invoke(_f32_no_fold_mul_zero, -0.0);
        expect(_f32_no_fold_mul_zero_result).toBe(-0.0);
    });

    _test("execution of float_exprs_5: f32.no_fold_mul_zero (instance 1)", () => {
        let _f32_no_fold_mul_zero = module.getExport("f32.no_fold_mul_zero");
        expect(_f32_no_fold_mul_zero).not.toBeUndefined();
        let _f32_no_fold_mul_zero_result = module.invoke(_f32_no_fold_mul_zero, -1.0);
        expect(_f32_no_fold_mul_zero_result).toBe(-0.0);
    });

    _test("execution of float_exprs_5: f32.no_fold_mul_zero (instance 2)", () => {
        let _f32_no_fold_mul_zero = module.getExport("f32.no_fold_mul_zero");
        expect(_f32_no_fold_mul_zero).not.toBeUndefined();
        let _f32_no_fold_mul_zero_result = module.invoke(_f32_no_fold_mul_zero, -2.0);
        expect(_f32_no_fold_mul_zero_result).toBe(-0.0);
    });

    _test("execution of float_exprs_5: f32.no_fold_mul_zero (instance 3)", () => {
        let _f32_no_fold_mul_zero = module.getExport("f32.no_fold_mul_zero");
        expect(_f32_no_fold_mul_zero).not.toBeUndefined();
        let _f32_no_fold_mul_zero_result = module.invoke(_f32_no_fold_mul_zero, NaN);
        expect(_f32_no_fold_mul_zero_result).toBe(NaN);
    });

    _test("execution of float_exprs_5: f64.no_fold_mul_zero (instance 0)", () => {
        let _f64_no_fold_mul_zero = module.getExport("f64.no_fold_mul_zero");
        expect(_f64_no_fold_mul_zero).not.toBeUndefined();
        let _f64_no_fold_mul_zero_result = module.invoke(_f64_no_fold_mul_zero, -0.0);
        expect(_f64_no_fold_mul_zero_result).toBe(-0.0);
    });

    _test("execution of float_exprs_5: f64.no_fold_mul_zero (instance 1)", () => {
        let _f64_no_fold_mul_zero = module.getExport("f64.no_fold_mul_zero");
        expect(_f64_no_fold_mul_zero).not.toBeUndefined();
        let _f64_no_fold_mul_zero_result = module.invoke(_f64_no_fold_mul_zero, -1.0);
        expect(_f64_no_fold_mul_zero_result).toBe(-0.0);
    });

    _test("execution of float_exprs_5: f64.no_fold_mul_zero (instance 2)", () => {
        let _f64_no_fold_mul_zero = module.getExport("f64.no_fold_mul_zero");
        expect(_f64_no_fold_mul_zero).not.toBeUndefined();
        let _f64_no_fold_mul_zero_result = module.invoke(_f64_no_fold_mul_zero, -2.0);
        expect(_f64_no_fold_mul_zero_result).toBe(-0.0);
    });

    _test("execution of float_exprs_5: f64.no_fold_mul_zero (instance 3)", () => {
        let _f64_no_fold_mul_zero = module.getExport("f64.no_fold_mul_zero");
        expect(_f64_no_fold_mul_zero).not.toBeUndefined();
        let _f64_no_fold_mul_zero_result = module.invoke(_f64_no_fold_mul_zero, NaN);
        expect(_f64_no_fold_mul_zero_result).toBe(NaN);
    });
});

describe("float_exprs_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_6: f32.no_fold_mul_one (instance 0)", () => {
        let _f32_no_fold_mul_one = module.getExport("f32.no_fold_mul_one");
        expect(_f32_no_fold_mul_one).not.toBeUndefined();
        let _f32_no_fold_mul_one_result = module.invoke(_f32_no_fold_mul_one, NaN);
        expect(_f32_no_fold_mul_one_result).toBe(NaN);
    });

    _test("execution of float_exprs_6: f64.no_fold_mul_one (instance 0)", () => {
        let _f64_no_fold_mul_one = module.getExport("f64.no_fold_mul_one");
        expect(_f64_no_fold_mul_one).not.toBeUndefined();
        let _f64_no_fold_mul_one_result = module.invoke(_f64_no_fold_mul_one, NaN);
        expect(_f64_no_fold_mul_one_result).toBe(NaN);
    });
});

describe("float_exprs_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_7: f32.no_fold_zero_div (instance 0)", () => {
        let _f32_no_fold_zero_div = module.getExport("f32.no_fold_zero_div");
        expect(_f32_no_fold_zero_div).not.toBeUndefined();
        let _f32_no_fold_zero_div_result = module.invoke(_f32_no_fold_zero_div, 0.0);
        expect(_f32_no_fold_zero_div_result).toBe(NaN);
    });

    _test("execution of float_exprs_7: f32.no_fold_zero_div (instance 1)", () => {
        let _f32_no_fold_zero_div = module.getExport("f32.no_fold_zero_div");
        expect(_f32_no_fold_zero_div).not.toBeUndefined();
        let _f32_no_fold_zero_div_result = module.invoke(_f32_no_fold_zero_div, -0.0);
        expect(_f32_no_fold_zero_div_result).toBe(NaN);
    });

    _test("execution of float_exprs_7: f32.no_fold_zero_div (instance 2)", () => {
        let _f32_no_fold_zero_div = module.getExport("f32.no_fold_zero_div");
        expect(_f32_no_fold_zero_div).not.toBeUndefined();
        let _f32_no_fold_zero_div_result = module.invoke(_f32_no_fold_zero_div, NaN);
        expect(_f32_no_fold_zero_div_result).toBe(NaN);
    });

    _test("execution of float_exprs_7: f32.no_fold_zero_div (instance 3)", () => {
        let _f32_no_fold_zero_div = module.getExport("f32.no_fold_zero_div");
        expect(_f32_no_fold_zero_div).not.toBeUndefined();
        let _f32_no_fold_zero_div_result = module.invoke(_f32_no_fold_zero_div, NaN);
        expect(_f32_no_fold_zero_div_result).toBe(NaN);
    });

    _test("execution of float_exprs_7: f64.no_fold_zero_div (instance 0)", () => {
        let _f64_no_fold_zero_div = module.getExport("f64.no_fold_zero_div");
        expect(_f64_no_fold_zero_div).not.toBeUndefined();
        let _f64_no_fold_zero_div_result = module.invoke(_f64_no_fold_zero_div, 0.0);
        expect(_f64_no_fold_zero_div_result).toBe(NaN);
    });

    _test("execution of float_exprs_7: f64.no_fold_zero_div (instance 1)", () => {
        let _f64_no_fold_zero_div = module.getExport("f64.no_fold_zero_div");
        expect(_f64_no_fold_zero_div).not.toBeUndefined();
        let _f64_no_fold_zero_div_result = module.invoke(_f64_no_fold_zero_div, -0.0);
        expect(_f64_no_fold_zero_div_result).toBe(NaN);
    });

    _test("execution of float_exprs_7: f64.no_fold_zero_div (instance 2)", () => {
        let _f64_no_fold_zero_div = module.getExport("f64.no_fold_zero_div");
        expect(_f64_no_fold_zero_div).not.toBeUndefined();
        let _f64_no_fold_zero_div_result = module.invoke(_f64_no_fold_zero_div, NaN);
        expect(_f64_no_fold_zero_div_result).toBe(NaN);
    });

    _test("execution of float_exprs_7: f64.no_fold_zero_div (instance 3)", () => {
        let _f64_no_fold_zero_div = module.getExport("f64.no_fold_zero_div");
        expect(_f64_no_fold_zero_div).not.toBeUndefined();
        let _f64_no_fold_zero_div_result = module.invoke(_f64_no_fold_zero_div, NaN);
        expect(_f64_no_fold_zero_div_result).toBe(NaN);
    });
});

describe("float_exprs_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_8: f32.no_fold_div_one (instance 0)", () => {
        let _f32_no_fold_div_one = module.getExport("f32.no_fold_div_one");
        expect(_f32_no_fold_div_one).not.toBeUndefined();
        let _f32_no_fold_div_one_result = module.invoke(_f32_no_fold_div_one, NaN);
        expect(_f32_no_fold_div_one_result).toBe(NaN);
    });

    _test("execution of float_exprs_8: f64.no_fold_div_one (instance 0)", () => {
        let _f64_no_fold_div_one = module.getExport("f64.no_fold_div_one");
        expect(_f64_no_fold_div_one).not.toBeUndefined();
        let _f64_no_fold_div_one_result = module.invoke(_f64_no_fold_div_one, NaN);
        expect(_f64_no_fold_div_one_result).toBe(NaN);
    });
});

describe("float_exprs_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_9: f32.no_fold_div_neg1 (instance 0)", () => {
        let _f32_no_fold_div_neg1 = module.getExport("f32.no_fold_div_neg1");
        expect(_f32_no_fold_div_neg1).not.toBeUndefined();
        let _f32_no_fold_div_neg1_result = module.invoke(_f32_no_fold_div_neg1, NaN);
        expect(_f32_no_fold_div_neg1_result).toBe(NaN);
    });

    _test("execution of float_exprs_9: f64.no_fold_div_neg1 (instance 0)", () => {
        let _f64_no_fold_div_neg1 = module.getExport("f64.no_fold_div_neg1");
        expect(_f64_no_fold_div_neg1).not.toBeUndefined();
        let _f64_no_fold_div_neg1_result = module.invoke(_f64_no_fold_div_neg1, NaN);
        expect(_f64_no_fold_div_neg1_result).toBe(NaN);
    });
});

describe("float_exprs_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_10: f32.no_fold_neg0_sub (instance 0)", () => {
        let _f32_no_fold_neg0_sub = module.getExport("f32.no_fold_neg0_sub");
        expect(_f32_no_fold_neg0_sub).not.toBeUndefined();
        let _f32_no_fold_neg0_sub_result = module.invoke(_f32_no_fold_neg0_sub, NaN);
        expect(_f32_no_fold_neg0_sub_result).toBe(NaN);
    });

    _test("execution of float_exprs_10: f64.no_fold_neg0_sub (instance 0)", () => {
        let _f64_no_fold_neg0_sub = module.getExport("f64.no_fold_neg0_sub");
        expect(_f64_no_fold_neg0_sub).not.toBeUndefined();
        let _f64_no_fold_neg0_sub_result = module.invoke(_f64_no_fold_neg0_sub, NaN);
        expect(_f64_no_fold_neg0_sub_result).toBe(NaN);
    });
});

describe("float_exprs_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_11: f32.no_fold_neg1_mul (instance 0)", () => {
        let _f32_no_fold_neg1_mul = module.getExport("f32.no_fold_neg1_mul");
        expect(_f32_no_fold_neg1_mul).not.toBeUndefined();
        let _f32_no_fold_neg1_mul_result = module.invoke(_f32_no_fold_neg1_mul, NaN);
        expect(_f32_no_fold_neg1_mul_result).toBe(NaN);
    });

    _test("execution of float_exprs_11: f64.no_fold_neg1_mul (instance 0)", () => {
        let _f64_no_fold_neg1_mul = module.getExport("f64.no_fold_neg1_mul");
        expect(_f64_no_fold_neg1_mul).not.toBeUndefined();
        let _f64_no_fold_neg1_mul_result = module.invoke(_f64_no_fold_neg1_mul, NaN);
        expect(_f64_no_fold_neg1_mul_result).toBe(NaN);
    });
});

describe("float_exprs_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_12: f32.no_fold_eq_self (instance 0)", () => {
        let _f32_no_fold_eq_self = module.getExport("f32.no_fold_eq_self");
        expect(_f32_no_fold_eq_self).not.toBeUndefined();
        let _f32_no_fold_eq_self_result = module.invoke(_f32_no_fold_eq_self, NaN);
        expect(_f32_no_fold_eq_self_result).toBe(0);
    });

    _test("execution of float_exprs_12: f64.no_fold_eq_self (instance 0)", () => {
        let _f64_no_fold_eq_self = module.getExport("f64.no_fold_eq_self");
        expect(_f64_no_fold_eq_self).not.toBeUndefined();
        let _f64_no_fold_eq_self_result = module.invoke(_f64_no_fold_eq_self, NaN);
        expect(_f64_no_fold_eq_self_result).toBe(0);
    });
});

describe("float_exprs_13", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_13.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_13: f32.no_fold_ne_self (instance 0)", () => {
        let _f32_no_fold_ne_self = module.getExport("f32.no_fold_ne_self");
        expect(_f32_no_fold_ne_self).not.toBeUndefined();
        let _f32_no_fold_ne_self_result = module.invoke(_f32_no_fold_ne_self, NaN);
        expect(_f32_no_fold_ne_self_result).toBe(1);
    });

    _test("execution of float_exprs_13: f64.no_fold_ne_self (instance 0)", () => {
        let _f64_no_fold_ne_self = module.getExport("f64.no_fold_ne_self");
        expect(_f64_no_fold_ne_self).not.toBeUndefined();
        let _f64_no_fold_ne_self_result = module.invoke(_f64_no_fold_ne_self, NaN);
        expect(_f64_no_fold_ne_self_result).toBe(1);
    });
});

describe("float_exprs_14", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_14.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_14: f32.no_fold_sub_self (instance 0)", () => {
        let _f32_no_fold_sub_self = module.getExport("f32.no_fold_sub_self");
        expect(_f32_no_fold_sub_self).not.toBeUndefined();
        let _f32_no_fold_sub_self_result = module.invoke(_f32_no_fold_sub_self, Infinity);
        expect(_f32_no_fold_sub_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_14: f32.no_fold_sub_self (instance 1)", () => {
        let _f32_no_fold_sub_self = module.getExport("f32.no_fold_sub_self");
        expect(_f32_no_fold_sub_self).not.toBeUndefined();
        let _f32_no_fold_sub_self_result = module.invoke(_f32_no_fold_sub_self, NaN);
        expect(_f32_no_fold_sub_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_14: f64.no_fold_sub_self (instance 0)", () => {
        let _f64_no_fold_sub_self = module.getExport("f64.no_fold_sub_self");
        expect(_f64_no_fold_sub_self).not.toBeUndefined();
        let _f64_no_fold_sub_self_result = module.invoke(_f64_no_fold_sub_self, Infinity);
        expect(_f64_no_fold_sub_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_14: f64.no_fold_sub_self (instance 1)", () => {
        let _f64_no_fold_sub_self = module.getExport("f64.no_fold_sub_self");
        expect(_f64_no_fold_sub_self).not.toBeUndefined();
        let _f64_no_fold_sub_self_result = module.invoke(_f64_no_fold_sub_self, NaN);
        expect(_f64_no_fold_sub_self_result).toBe(NaN);
    });
});

describe("float_exprs_15", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_15.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_15: f32.no_fold_div_self (instance 0)", () => {
        let _f32_no_fold_div_self = module.getExport("f32.no_fold_div_self");
        expect(_f32_no_fold_div_self).not.toBeUndefined();
        let _f32_no_fold_div_self_result = module.invoke(_f32_no_fold_div_self, Infinity);
        expect(_f32_no_fold_div_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_15: f32.no_fold_div_self (instance 1)", () => {
        let _f32_no_fold_div_self = module.getExport("f32.no_fold_div_self");
        expect(_f32_no_fold_div_self).not.toBeUndefined();
        let _f32_no_fold_div_self_result = module.invoke(_f32_no_fold_div_self, NaN);
        expect(_f32_no_fold_div_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_15: f32.no_fold_div_self (instance 2)", () => {
        let _f32_no_fold_div_self = module.getExport("f32.no_fold_div_self");
        expect(_f32_no_fold_div_self).not.toBeUndefined();
        let _f32_no_fold_div_self_result = module.invoke(_f32_no_fold_div_self, 0.0);
        expect(_f32_no_fold_div_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_15: f32.no_fold_div_self (instance 3)", () => {
        let _f32_no_fold_div_self = module.getExport("f32.no_fold_div_self");
        expect(_f32_no_fold_div_self).not.toBeUndefined();
        let _f32_no_fold_div_self_result = module.invoke(_f32_no_fold_div_self, -0.0);
        expect(_f32_no_fold_div_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_15: f64.no_fold_div_self (instance 0)", () => {
        let _f64_no_fold_div_self = module.getExport("f64.no_fold_div_self");
        expect(_f64_no_fold_div_self).not.toBeUndefined();
        let _f64_no_fold_div_self_result = module.invoke(_f64_no_fold_div_self, Infinity);
        expect(_f64_no_fold_div_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_15: f64.no_fold_div_self (instance 1)", () => {
        let _f64_no_fold_div_self = module.getExport("f64.no_fold_div_self");
        expect(_f64_no_fold_div_self).not.toBeUndefined();
        let _f64_no_fold_div_self_result = module.invoke(_f64_no_fold_div_self, NaN);
        expect(_f64_no_fold_div_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_15: f64.no_fold_div_self (instance 2)", () => {
        let _f64_no_fold_div_self = module.getExport("f64.no_fold_div_self");
        expect(_f64_no_fold_div_self).not.toBeUndefined();
        let _f64_no_fold_div_self_result = module.invoke(_f64_no_fold_div_self, 0.0);
        expect(_f64_no_fold_div_self_result).toBe(NaN);
    });

    _test("execution of float_exprs_15: f64.no_fold_div_self (instance 3)", () => {
        let _f64_no_fold_div_self = module.getExport("f64.no_fold_div_self");
        expect(_f64_no_fold_div_self).not.toBeUndefined();
        let _f64_no_fold_div_self_result = module.invoke(_f64_no_fold_div_self, -0.0);
        expect(_f64_no_fold_div_self_result).toBe(NaN);
    });
});

describe("float_exprs_16", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_16.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_16: f32.no_fold_div_3 (instance 0)", () => {
        let _f32_no_fold_div_3 = module.getExport("f32.no_fold_div_3");
        expect(_f32_no_fold_div_3).not.toBeUndefined();
        let _f32_no_fold_div_3_result = module.invoke(_f32_no_fold_div_3, -1361678981660672.0);
        expect(_f32_no_fold_div_3_result).toBe(-453892982702080.0);
    });

    _test("execution of float_exprs_16: f32.no_fold_div_3 (instance 1)", () => {
        let _f32_no_fold_div_3 = module.getExport("f32.no_fold_div_3");
        expect(_f32_no_fold_div_3).not.toBeUndefined();
        let _f32_no_fold_div_3_result = module.invoke(_f32_no_fold_div_3, -1.873688036745896e28);
        expect(_f32_no_fold_div_3_result).toBe(-6.245626592387716e27);
    });

    _test("execution of float_exprs_16: f32.no_fold_div_3 (instance 2)", () => {
        let _f32_no_fold_div_3 = module.getExport("f32.no_fold_div_3");
        expect(_f32_no_fold_div_3).not.toBeUndefined();
        let _f32_no_fold_div_3_result = module.invoke(_f32_no_fold_div_3, -1.2045130720366438e-25);
        expect(_f32_no_fold_div_3_result).toBe(-4.0150434707392155e-26);
    });

    _test("execution of float_exprs_16: f32.no_fold_div_3 (instance 3)", () => {
        let _f32_no_fold_div_3 = module.getExport("f32.no_fold_div_3");
        expect(_f32_no_fold_div_3).not.toBeUndefined();
        let _f32_no_fold_div_3_result = module.invoke(_f32_no_fold_div_3, -5.281345934922403e-38);
        expect(_f32_no_fold_div_3_result).toBe(-1.7604485982641855e-38);
    });

    _test("execution of float_exprs_16: f32.no_fold_div_3 (instance 4)", () => {
        let _f32_no_fold_div_3 = module.getExport("f32.no_fold_div_3");
        expect(_f32_no_fold_div_3).not.toBeUndefined();
        let _f32_no_fold_div_3_result = module.invoke(_f32_no_fold_div_3, -2.5495562672178882e-17);
        expect(_f32_no_fold_div_3_result).toBe(-8.498520614999423e-18);
    });

    _test("execution of float_exprs_16: f64.no_fold_div_3 (instance 0)", () => {
        let _f64_no_fold_div_3 = module.getExport("f64.no_fold_div_3");
        expect(_f64_no_fold_div_3).not.toBeUndefined();
        let _f64_no_fold_div_3_result = module.invoke(_f64_no_fold_div_3, -2.9563579573969634e190);
        expect(_f64_no_fold_div_3_result).toBe(-9.854526524656545e189);
    });

    _test("execution of float_exprs_16: f64.no_fold_div_3 (instance 1)", () => {
        let _f64_no_fold_div_3 = module.getExport("f64.no_fold_div_3");
        expect(_f64_no_fold_div_3).not.toBeUndefined();
        let _f64_no_fold_div_3_result = module.invoke(_f64_no_fold_div_3, -9.291150921449772e-51);
        expect(_f64_no_fold_div_3_result).toBe(-3.097050307149924e-51);
    });

    _test("execution of float_exprs_16: f64.no_fold_div_3 (instance 2)", () => {
        let _f64_no_fold_div_3 = module.getExport("f64.no_fold_div_3");
        expect(_f64_no_fold_div_3).not.toBeUndefined();
        let _f64_no_fold_div_3_result = module.invoke(_f64_no_fold_div_3, 1.3808061543557006e-263);
        expect(_f64_no_fold_div_3_result).toBe(4.602687181185669e-264);
    });

    _test("execution of float_exprs_16: f64.no_fold_div_3 (instance 3)", () => {
        let _f64_no_fold_div_3 = module.getExport("f64.no_fold_div_3");
        expect(_f64_no_fold_div_3).not.toBeUndefined();
        let _f64_no_fold_div_3_result = module.invoke(_f64_no_fold_div_3, -1.378076163468349e303);
        expect(_f64_no_fold_div_3_result).toBe(-4.593587211561163e302);
    });

    _test("execution of float_exprs_16: f64.no_fold_div_3 (instance 4)", () => {
        let _f64_no_fold_div_3 = module.getExport("f64.no_fold_div_3");
        expect(_f64_no_fold_div_3).not.toBeUndefined();
        let _f64_no_fold_div_3_result = module.invoke(_f64_no_fold_div_3, 8.632400808831366e124);
        expect(_f64_no_fold_div_3_result).toBe(2.877466936277122e124);
    });
});

describe("float_exprs_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_17: f32.no_factor (instance 0)", () => {
        let _f32_no_factor = module.getExport("f32.no_factor");
        expect(_f32_no_factor).not.toBeUndefined();
        let _f32_no_factor_result = module.invoke(
            _f32_no_factor,
            -1435111653376.0,
            -853617636540416.0,
            1.1138493281216758e18
        );
        expect(_f32_no_factor_result).toBe(-9.523998846739127e32);
    });

    _test("execution of float_exprs_17: f32.no_factor (instance 1)", () => {
        let _f32_no_factor = module.getExport("f32.no_factor");
        expect(_f32_no_factor).not.toBeUndefined();
        let _f32_no_factor_result = module.invoke(
            _f32_no_factor,
            -0.026666631922125816,
            0.04841282218694687,
            -0.0028136970940977335
        );
        expect(_f32_no_factor_result).toBe(-6.118720193626359e-5);
    });

    _test("execution of float_exprs_17: f32.no_factor (instance 2)", () => {
        let _f32_no_factor = module.getExport("f32.no_factor");
        expect(_f32_no_factor).not.toBeUndefined();
        let _f32_no_factor_result = module.invoke(
            _f32_no_factor,
            -4.661977726604094e-13,
            1.0478376971705394e-19,
            1.4469202269317853e37
        );
        expect(_f32_no_factor_result).toBe(-6.74550795100697e24);
    });

    _test("execution of float_exprs_17: f32.no_factor (instance 3)", () => {
        let _f32_no_factor = module.getExport("f32.no_factor");
        expect(_f32_no_factor).not.toBeUndefined();
        let _f32_no_factor_result = module.invoke(
            _f32_no_factor,
            -1.0689046302790726e-19,
            1.0694433217685706e-25,
            5.683070165258062e35
        );
        expect(_f32_no_factor_result).toBe(-6.074653996587418e16);
    });

    _test("execution of float_exprs_17: f32.no_factor (instance 4)", () => {
        let _f32_no_factor = module.getExport("f32.no_factor");
        expect(_f32_no_factor).not.toBeUndefined();
        let _f32_no_factor_result = module.invoke(
            _f32_no_factor,
            -6.354599380381072e-26,
            7.524624844008798e-22,
            1626770.25
        );
        expect(_f32_no_factor_result).toBe(1.223980290595238e-15);
    });

    _test("execution of float_exprs_17: f64.no_factor (instance 0)", () => {
        let _f64_no_factor = module.getExport("f64.no_factor");
        expect(_f64_no_factor).not.toBeUndefined();
        let _f64_no_factor_result = module.invoke(
            _f64_no_factor,
            2.8390554709988774e-128,
            1.473981250649641e-139,
            -2.9001229846550766e-68
        );
        expect(_f64_no_factor_result).toBe(-8.233610026197336e-196);
    });

    _test("execution of float_exprs_17: f64.no_factor (instance 1)", () => {
        let _f64_no_factor = module.getExport("f64.no_factor");
        expect(_f64_no_factor).not.toBeUndefined();
        let _f64_no_factor_result = module.invoke(
            _f64_no_factor,
            6.461015505916123e-200,
            -2.3923242802975938e-304,
            -1.5300738798561604e-288
        );
        expect(_f64_no_factor_result).toBe(0.0);
    });

    _test("execution of float_exprs_17: f64.no_factor (instance 2)", () => {
        let _f64_no_factor = module.getExport("f64.no_factor");
        expect(_f64_no_factor).not.toBeUndefined();
        let _f64_no_factor_result = module.invoke(
            _f64_no_factor,
            -2.939056292080733e-101,
            -2.146156743463356e-85,
            -2.5109672231302416e144
        );
        expect(_f64_no_factor_result).toBe(5.388929238536426e59);
    });

    _test("execution of float_exprs_17: f64.no_factor (instance 3)", () => {
        let _f64_no_factor = module.getExport("f64.no_factor");
        expect(_f64_no_factor).not.toBeUndefined();
        let _f64_no_factor_result = module.invoke(
            _f64_no_factor,
            -1.7785466771708878e-87,
            9.328516775403213e-79,
            -1.2121009044876735e-76
        );
        expect(_f64_no_factor_result).toBe(-1.130710359943689e-154);
    });

    _test("execution of float_exprs_17: f64.no_factor (instance 4)", () => {
        let _f64_no_factor = module.getExport("f64.no_factor");
        expect(_f64_no_factor).not.toBeUndefined();
        let _f64_no_factor_result = module.invoke(
            _f64_no_factor,
            1.5194859063177362e-183,
            8.83589921438065e-175,
            -1.7358300194691958e147
        );
        expect(_f64_no_factor_result).toBe(-1.5337619131701908e-27);
    });
});

describe("float_exprs_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_18: f32.no_distribute (instance 0)", () => {
        let _f32_no_distribute = module.getExport("f32.no_distribute");
        expect(_f32_no_distribute).not.toBeUndefined();
        let _f32_no_distribute_result = module.invoke(
            _f32_no_distribute,
            -1435111653376.0,
            -853617636540416.0,
            1.1138493281216758e18
        );
        expect(_f32_no_distribute_result).toBe(-9.523999620451651e32);
    });

    _test("execution of float_exprs_18: f32.no_distribute (instance 1)", () => {
        let _f32_no_distribute = module.getExport("f32.no_distribute");
        expect(_f32_no_distribute).not.toBeUndefined();
        let _f32_no_distribute_result = module.invoke(
            _f32_no_distribute,
            -0.026666631922125816,
            0.04841282218694687,
            -0.0028136970940977335
        );
        expect(_f32_no_distribute_result).toBe(-6.118719466030598e-5);
    });

    _test("execution of float_exprs_18: f32.no_distribute (instance 2)", () => {
        let _f32_no_distribute = module.getExport("f32.no_distribute");
        expect(_f32_no_distribute).not.toBeUndefined();
        let _f32_no_distribute_result = module.invoke(
            _f32_no_distribute,
            -4.661977726604094e-13,
            1.0478376971705394e-19,
            1.4469202269317853e37
        );
        expect(_f32_no_distribute_result).toBe(-6.745508527467722e24);
    });

    _test("execution of float_exprs_18: f32.no_distribute (instance 3)", () => {
        let _f32_no_distribute = module.getExport("f32.no_distribute");
        expect(_f32_no_distribute).not.toBeUndefined();
        let _f32_no_distribute_result = module.invoke(
            _f32_no_distribute,
            -1.0689046302790726e-19,
            1.0694433217685706e-25,
            5.683070165258062e35
        );
        expect(_f32_no_distribute_result).toBe(-6.074653567090688e16);
    });

    _test("execution of float_exprs_18: f32.no_distribute (instance 4)", () => {
        let _f32_no_distribute = module.getExport("f32.no_distribute");
        expect(_f32_no_distribute).not.toBeUndefined();
        let _f32_no_distribute_result = module.invoke(
            _f32_no_distribute,
            -6.354599380381072e-26,
            7.524624844008798e-22,
            1626770.25
        );
        expect(_f32_no_distribute_result).toBe(1.2239801847161195e-15);
    });

    _test("execution of float_exprs_18: f64.no_distribute (instance 0)", () => {
        let _f64_no_distribute = module.getExport("f64.no_distribute");
        expect(_f64_no_distribute).not.toBeUndefined();
        let _f64_no_distribute_result = module.invoke(
            _f64_no_distribute,
            2.8390554709988774e-128,
            1.473981250649641e-139,
            -2.9001229846550766e-68
        );
        expect(_f64_no_distribute_result).toBe(-8.233610026197337e-196);
    });

    _test("execution of float_exprs_18: f64.no_distribute (instance 1)", () => {
        let _f64_no_distribute = module.getExport("f64.no_distribute");
        expect(_f64_no_distribute).not.toBeUndefined();
        let _f64_no_distribute_result = module.invoke(
            _f64_no_distribute,
            6.461015505916123e-200,
            -2.3923242802975938e-304,
            -1.5300738798561604e-288
        );
        expect(_f64_no_distribute_result).toBe(-0.0);
    });

    _test("execution of float_exprs_18: f64.no_distribute (instance 2)", () => {
        let _f64_no_distribute = module.getExport("f64.no_distribute");
        expect(_f64_no_distribute).not.toBeUndefined();
        let _f64_no_distribute_result = module.invoke(
            _f64_no_distribute,
            -2.939056292080733e-101,
            -2.146156743463356e-85,
            -2.5109672231302416e144
        );
        expect(_f64_no_distribute_result).toBe(5.388929238536425e59);
    });

    _test("execution of float_exprs_18: f64.no_distribute (instance 3)", () => {
        let _f64_no_distribute = module.getExport("f64.no_distribute");
        expect(_f64_no_distribute).not.toBeUndefined();
        let _f64_no_distribute_result = module.invoke(
            _f64_no_distribute,
            -1.7785466771708878e-87,
            9.328516775403213e-79,
            -1.2121009044876735e-76
        );
        expect(_f64_no_distribute_result).toBe(-1.1307103599436889e-154);
    });

    _test("execution of float_exprs_18: f64.no_distribute (instance 4)", () => {
        let _f64_no_distribute = module.getExport("f64.no_distribute");
        expect(_f64_no_distribute).not.toBeUndefined();
        let _f64_no_distribute_result = module.invoke(
            _f64_no_distribute,
            1.5194859063177362e-183,
            8.83589921438065e-175,
            -1.7358300194691958e147
        );
        expect(_f64_no_distribute_result).toBe(-1.5337619131701907e-27);
    });
});

describe("float_exprs_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_19: f32.no_regroup_div_mul (instance 0)", () => {
        let _f32_no_regroup_div_mul = module.getExport("f32.no_regroup_div_mul");
        expect(_f32_no_regroup_div_mul).not.toBeUndefined();
        let _f32_no_regroup_div_mul_result = module.invoke(
            _f32_no_regroup_div_mul,
            -2.831348900581148e-35,
            -7.270787044900695e-20,
            1.6406605104124838e-35
        );
        expect(_f32_no_regroup_div_mul_result).toBe(1.2547467815134785e-19);
    });

    _test("execution of float_exprs_19: f32.no_regroup_div_mul (instance 1)", () => {
        let _f32_no_regroup_div_mul = module.getExport("f32.no_regroup_div_mul");
        expect(_f32_no_regroup_div_mul).not.toBeUndefined();
        let _f32_no_regroup_div_mul_result = module.invoke(
            _f32_no_regroup_div_mul,
            -3.145897699301651e27,
            -4.0864003417251035e-35,
            -9.245928315588461e21
        );
        expect(_f32_no_regroup_div_mul_result).toBe(-0.0);
    });

    _test("execution of float_exprs_19: f32.no_regroup_div_mul (instance 2)", () => {
        let _f32_no_regroup_div_mul = module.getExport("f32.no_regroup_div_mul");
        expect(_f32_no_regroup_div_mul).not.toBeUndefined();
        let _f32_no_regroup_div_mul_result = module.invoke(
            _f32_no_regroup_div_mul,
            -93157.4296875,
            -8.129265438583388e-7,
            -1.5469396736694269e-37
        );
        expect(_f32_no_regroup_div_mul_result).toBe(-4.8954812241811386e35);
    });

    _test("execution of float_exprs_19: f32.no_regroup_div_mul (instance 3)", () => {
        let _f32_no_regroup_div_mul = module.getExport("f32.no_regroup_div_mul");
        expect(_f32_no_regroup_div_mul).not.toBeUndefined();
        let _f32_no_regroup_div_mul_result = module.invoke(
            _f32_no_regroup_div_mul,
            -8.899642828403211e-29,
            1.7887724636863027e22,
            5.146802318776667e20
        );
        expect(_f32_no_regroup_div_mul_result).toBe(-3.09307295741405e-27);
    });

    _test("execution of float_exprs_19: f32.no_regroup_div_mul (instance 4)", () => {
        let _f32_no_regroup_div_mul = module.getExport("f32.no_regroup_div_mul");
        expect(_f32_no_regroup_div_mul).not.toBeUndefined();
        let _f32_no_regroup_div_mul_result = module.invoke(
            _f32_no_regroup_div_mul,
            9.222036179566499e33,
            33330492.0,
            -3.253108762736574e21
        );
        expect(_f32_no_regroup_div_mul_result).toBe(-9.44865493251166e19);
    });

    _test("execution of float_exprs_19: f64.no_regroup_div_mul (instance 0)", () => {
        let _f64_no_regroup_div_mul = module.getExport("f64.no_regroup_div_mul");
        expect(_f64_no_regroup_div_mul).not.toBeUndefined();
        let _f64_no_regroup_div_mul_result = module.invoke(
            _f64_no_regroup_div_mul,
            5.698811412550059e-128,
            -1.8313439132919336e-36,
            9.543270551003098e-194
        );
        expect(_f64_no_regroup_div_mul_result).toBe(-1.093596114413331e30);
    });

    _test("execution of float_exprs_19: f64.no_regroup_div_mul (instance 1)", () => {
        let _f64_no_regroup_div_mul = module.getExport("f64.no_regroup_div_mul");
        expect(_f64_no_regroup_div_mul).not.toBeUndefined();
        let _f64_no_regroup_div_mul_result = module.invoke(
            _f64_no_regroup_div_mul,
            3.5728928842550755e101,
            3.952760844538651e-135,
            -1.4507812412549008e240
        );
        expect(_f64_no_regroup_div_mul_result).toBe(-0.0);
    });

    _test("execution of float_exprs_19: f64.no_regroup_div_mul (instance 2)", () => {
        let _f64_no_regroup_div_mul = module.getExport("f64.no_regroup_div_mul");
        expect(_f64_no_regroup_div_mul).not.toBeUndefined();
        let _f64_no_regroup_div_mul_result = module.invoke(
            _f64_no_regroup_div_mul,
            9.124278383497107e-145,
            5.556134527714797e271,
            2.5090826940306507e-135
        );
        expect(_f64_no_regroup_div_mul_result).toBe(Infinity);
    });

    _test("execution of float_exprs_19: f64.no_regroup_div_mul (instance 3)", () => {
        let _f64_no_regroup_div_mul = module.getExport("f64.no_regroup_div_mul");
        expect(_f64_no_regroup_div_mul).not.toBeUndefined();
        let _f64_no_regroup_div_mul_result = module.invoke(
            _f64_no_regroup_div_mul,
            -4.492093000352015e144,
            -1.2087878984017852e184,
            -5.966133806260623e251
        );
        expect(_f64_no_regroup_div_mul_result).toBe(-9.101350780337626e76);
    });

    _test("execution of float_exprs_19: f64.no_regroup_div_mul (instance 4)", () => {
        let _f64_no_regroup_div_mul = module.getExport("f64.no_regroup_div_mul");
        expect(_f64_no_regroup_div_mul).not.toBeUndefined();
        let _f64_no_regroup_div_mul_result = module.invoke(
            _f64_no_regroup_div_mul,
            7.470269158630455e-181,
            7.568026329781282e-265,
            -1.055389683973521e-252
        );
        expect(_f64_no_regroup_div_mul_result).toBe(-5.356807494101561e-193);
    });
});

describe("float_exprs_20", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_20.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_20: f32.no_regroup_mul_div (instance 0)", () => {
        let _f32_no_regroup_mul_div = module.getExport("f32.no_regroup_mul_div");
        expect(_f32_no_regroup_mul_div).not.toBeUndefined();
        let _f32_no_regroup_mul_div_result = module.invoke(
            _f32_no_regroup_mul_div,
            -2.831348900581148e-35,
            -7.270787044900695e-20,
            1.6406605104124838e-35
        );
        expect(_f32_no_regroup_mul_div_result).toBe(0.0);
    });

    _test("execution of float_exprs_20: f32.no_regroup_mul_div (instance 1)", () => {
        let _f32_no_regroup_mul_div = module.getExport("f32.no_regroup_mul_div");
        expect(_f32_no_regroup_mul_div).not.toBeUndefined();
        let _f32_no_regroup_mul_div_result = module.invoke(
            _f32_no_regroup_mul_div,
            -3.145897699301651e27,
            -4.0864003417251035e-35,
            -9.245928315588461e21
        );
        expect(_f32_no_regroup_mul_div_result).toBe(-1.3903847991921543e-29);
    });

    _test("execution of float_exprs_20: f32.no_regroup_mul_div (instance 2)", () => {
        let _f32_no_regroup_mul_div = module.getExport("f32.no_regroup_mul_div");
        expect(_f32_no_regroup_mul_div).not.toBeUndefined();
        let _f32_no_regroup_mul_div_result = module.invoke(
            _f32_no_regroup_mul_div,
            -93157.4296875,
            -8.129265438583388e-7,
            -1.5469396736694269e-37
        );
        expect(_f32_no_regroup_mul_div_result).toBe(-4.895481620321951e35);
    });

    _test("execution of float_exprs_20: f32.no_regroup_mul_div (instance 3)", () => {
        let _f32_no_regroup_mul_div = module.getExport("f32.no_regroup_mul_div");
        expect(_f32_no_regroup_mul_div).not.toBeUndefined();
        let _f32_no_regroup_mul_div_result = module.invoke(
            _f32_no_regroup_mul_div,
            -8.899642828403211e-29,
            1.7887724636863027e22,
            5.146802318776667e20
        );
        expect(_f32_no_regroup_mul_div_result).toBe(-3.0930731500070443e-27);
    });

    _test("execution of float_exprs_20: f32.no_regroup_mul_div (instance 4)", () => {
        let _f32_no_regroup_mul_div = module.getExport("f32.no_regroup_mul_div");
        expect(_f32_no_regroup_mul_div).not.toBeUndefined();
        let _f32_no_regroup_mul_div_result = module.invoke(
            _f32_no_regroup_mul_div,
            9.222036179566499e33,
            33330492.0,
            -3.253108762736574e21
        );
        expect(_f32_no_regroup_mul_div_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_20: f64.no_regroup_mul_div (instance 0)", () => {
        let _f64_no_regroup_mul_div = module.getExport("f64.no_regroup_mul_div");
        expect(_f64_no_regroup_mul_div).not.toBeUndefined();
        let _f64_no_regroup_mul_div_result = module.invoke(
            _f64_no_regroup_mul_div,
            5.698811412550059e-128,
            -1.8313439132919336e-36,
            9.543270551003098e-194
        );
        expect(_f64_no_regroup_mul_div_result).toBe(-1.0935961144133311e30);
    });

    _test("execution of float_exprs_20: f64.no_regroup_mul_div (instance 1)", () => {
        let _f64_no_regroup_mul_div = module.getExport("f64.no_regroup_mul_div");
        expect(_f64_no_regroup_mul_div).not.toBeUndefined();
        let _f64_no_regroup_mul_div_result = module.invoke(
            _f64_no_regroup_mul_div,
            3.5728928842550755e101,
            3.952760844538651e-135,
            -1.4507812412549008e240
        );
        expect(_f64_no_regroup_mul_div_result).toBe(-9.734611044734945e-274);
    });

    _test("execution of float_exprs_20: f64.no_regroup_mul_div (instance 2)", () => {
        let _f64_no_regroup_mul_div = module.getExport("f64.no_regroup_mul_div");
        expect(_f64_no_regroup_mul_div).not.toBeUndefined();
        let _f64_no_regroup_mul_div_result = module.invoke(
            _f64_no_regroup_mul_div,
            9.124278383497107e-145,
            5.556134527714797e271,
            2.5090826940306507e-135
        );
        expect(_f64_no_regroup_mul_div_result).toBe(2.0204881364667663e262);
    });

    _test("execution of float_exprs_20: f64.no_regroup_mul_div (instance 3)", () => {
        let _f64_no_regroup_mul_div = module.getExport("f64.no_regroup_mul_div");
        expect(_f64_no_regroup_mul_div).not.toBeUndefined();
        let _f64_no_regroup_mul_div_result = module.invoke(
            _f64_no_regroup_mul_div,
            -4.492093000352015e144,
            -1.2087878984017852e184,
            -5.966133806260623e251
        );
        expect(_f64_no_regroup_mul_div_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_20: f64.no_regroup_mul_div (instance 4)", () => {
        let _f64_no_regroup_mul_div = module.getExport("f64.no_regroup_mul_div");
        expect(_f64_no_regroup_mul_div).not.toBeUndefined();
        let _f64_no_regroup_mul_div_result = module.invoke(
            _f64_no_regroup_mul_div,
            7.470269158630455e-181,
            7.568026329781282e-265,
            -1.055389683973521e-252
        );
        expect(_f64_no_regroup_mul_div_result).toBe(-0.0);
    });
});

describe("float_exprs_21", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_21.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_21: f32.no_reassociate_add (instance 0)", () => {
        let _f32_no_reassociate_add = module.getExport("f32.no_reassociate_add");
        expect(_f32_no_reassociate_add).not.toBeUndefined();
        let _f32_no_reassociate_add_result = module.invoke(
            _f32_no_reassociate_add,
            -24154321453056.0,
            26125811712.0,
            -238608082534400.0,
            -2478953463808.0
        );
        expect(_f32_no_reassociate_add_result).toBe(-265215220383744.0);
    });

    _test("execution of float_exprs_21: f32.no_reassociate_add (instance 1)", () => {
        let _f32_no_reassociate_add = module.getExport("f32.no_reassociate_add");
        expect(_f32_no_reassociate_add).not.toBeUndefined();
        let _f32_no_reassociate_add_result = module.invoke(
            _f32_no_reassociate_add,
            0.0036181053146719933,
            -0.009859439916908741,
            0.06337537616491318,
            -0.011150198988616467
        );
        expect(_f32_no_reassociate_add_result).toBe(0.04598383978009224);
    });

    _test("execution of float_exprs_21: f32.no_reassociate_add (instance 2)", () => {
        let _f32_no_reassociate_add = module.getExport("f32.no_reassociate_add");
        expect(_f32_no_reassociate_add).not.toBeUndefined();
        let _f32_no_reassociate_add_result = module.invoke(
            _f32_no_reassociate_add,
            -34206967808.0,
            -3770877214720.0,
            30868424884224.0,
            421132075008.0
        );
        expect(_f32_no_reassociate_add_result).toBe(27484470902784.0);
    });

    _test("execution of float_exprs_21: f32.no_reassociate_add (instance 3)", () => {
        let _f32_no_reassociate_add = module.getExport("f32.no_reassociate_add");
        expect(_f32_no_reassociate_add).not.toBeUndefined();
        let _f32_no_reassociate_add_result = module.invoke(
            _f32_no_reassociate_add,
            153506392571904.0,
            925114682048512.0,
            -36021854208.0,
            2450846046486528.0
        );
        expect(_f32_no_reassociate_add_result).toBe(3529430982983680.0);
    });

    _test("execution of float_exprs_21: f32.no_reassociate_add (instance 4)", () => {
        let _f32_no_reassociate_add = module.getExport("f32.no_reassociate_add");
        expect(_f32_no_reassociate_add).not.toBeUndefined();
        let _f32_no_reassociate_add_result = module.invoke(
            _f32_no_reassociate_add,
            4.7060031399738006e32,
            -3.965520407781218e32,
            4.806693894491044e31,
            -3.564407275758035e28
        );
        expect(_f32_no_reassociate_add_result).toBe(1.220795633595999e32);
    });

    _test("execution of float_exprs_21: f64.no_reassociate_add (instance 0)", () => {
        let _f64_no_reassociate_add = module.getExport("f64.no_reassociate_add");
        expect(_f64_no_reassociate_add).not.toBeUndefined();
        let _f64_no_reassociate_add_result = module.invoke(
            _f64_no_reassociate_add,
            -2.070465292771702e253,
            1.5946897043763697e255,
            4.5110663655941613e257,
            -1.3743335091868633e258
        );
        expect(_f64_no_reassociate_add_result).toBe(-9.216528875759986e257);
    });

    _test("execution of float_exprs_21: f64.no_reassociate_add (instance 1)", () => {
        let _f64_no_reassociate_add = module.getExport("f64.no_reassociate_add");
        expect(_f64_no_reassociate_add).not.toBeUndefined();
        let _f64_no_reassociate_add_result = module.invoke(
            _f64_no_reassociate_add,
            3.485747658213531e-164,
            3.1210957391311754e-164,
            -6.83008546431621e-164,
            -2.617177347131095e-179
        );
        expect(_f64_no_reassociate_add_result).toBe(-2.2324206697150536e-165);
    });

    _test("execution of float_exprs_21: f64.no_reassociate_add (instance 2)", () => {
        let _f64_no_reassociate_add = module.getExport("f64.no_reassociate_add");
        expect(_f64_no_reassociate_add).not.toBeUndefined();
        let _f64_no_reassociate_add_result = module.invoke(
            _f64_no_reassociate_add,
            -5.4125849211227263e132,
            5.976036561703795e122,
            -3.558300777933963e131,
            3.7362725995762544e119
        );
        expect(_f64_no_reassociate_add_result).toBe(-5.768414998318146e132);
    });

    _test("execution of float_exprs_21: f64.no_reassociate_add (instance 3)", () => {
        let _f64_no_reassociate_add = module.getExport("f64.no_reassociate_add");
        expect(_f64_no_reassociate_add).not.toBeUndefined();
        let _f64_no_reassociate_add_result = module.invoke(
            _f64_no_reassociate_add,
            -6.469047714189599e-96,
            6.4286584974746e-93,
            -2.1277698072285604e-79,
            8.768287273189493e-79
        );
        expect(_f64_no_reassociate_add_result).toBe(6.640517465960996e-79);
    });

    _test("execution of float_exprs_21: f64.no_reassociate_add (instance 4)", () => {
        let _f64_no_reassociate_add = module.getExport("f64.no_reassociate_add");
        expect(_f64_no_reassociate_add).not.toBeUndefined();
        let _f64_no_reassociate_add_result = module.invoke(
            _f64_no_reassociate_add,
            -1.6422137086414828e193,
            -8.803213793979071e184,
            4.4995705978285785e194,
            -1.1409126716627439e194
        );
        expect(_f64_no_reassociate_add_result).toBe(3.1944365544213656e194);
    });
});

describe("float_exprs_22", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_22.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_22: f32.no_reassociate_mul (instance 0)", () => {
        let _f32_no_reassociate_mul = module.getExport("f32.no_reassociate_mul");
        expect(_f32_no_reassociate_mul).not.toBeUndefined();
        let _f32_no_reassociate_mul_result = module.invoke(
            _f32_no_reassociate_mul,
            1.904514939832524e-35,
            2.254886138919332e-10,
            -6.964321833196614e30,
            2.6902831813425547e-17
        );
        expect(_f32_no_reassociate_mul_result).toBe(-7.87641729500113e-31);
    });

    _test("execution of float_exprs_22: f32.no_reassociate_mul (instance 1)", () => {
        let _f32_no_reassociate_mul = module.getExport("f32.no_reassociate_mul");
        expect(_f32_no_reassociate_mul).not.toBeUndefined();
        let _f32_no_reassociate_mul_result = module.invoke(
            _f32_no_reassociate_mul,
            1.873312459090269e-17,
            -7.565903872775787e30,
            -3.0807684065430607e-38,
            -1.5927592290270105e21
        );
        expect(_f32_no_reassociate_mul_result).toBe(-0.006954728625714779);
    });

    _test("execution of float_exprs_22: f32.no_reassociate_mul (instance 2)", () => {
        let _f32_no_reassociate_mul = module.getExport("f32.no_reassociate_mul");
        expect(_f32_no_reassociate_mul).not.toBeUndefined();
        let _f32_no_reassociate_mul_result = module.invoke(
            _f32_no_reassociate_mul,
            5.0355575083511385e-15,
            -5.646688422828442e16,
            -1.174051199141768e-12,
            8.49847264083322e22
        );
        expect(_f32_no_reassociate_mul_result).toBe(28370653937664.0);
    });

    _test("execution of float_exprs_22: f32.no_reassociate_mul (instance 3)", () => {
        let _f32_no_reassociate_mul = module.getExport("f32.no_reassociate_mul");
        expect(_f32_no_reassociate_mul).not.toBeUndefined();
        let _f32_no_reassociate_mul_result = module.invoke(
            _f32_no_reassociate_mul,
            4.639494588818367e-32,
            2.544493617355654e23,
            -7.246097736636826e16,
            -9.62511035846099e17
        );
        expect(_f32_no_reassociate_mul_result).toBe(8.233451127971567e26);
    });

    _test("execution of float_exprs_22: f32.no_reassociate_mul (instance 4)", () => {
        let _f32_no_reassociate_mul = module.getExport("f32.no_reassociate_mul");
        expect(_f32_no_reassociate_mul).not.toBeUndefined();
        let _f32_no_reassociate_mul_result = module.invoke(
            _f32_no_reassociate_mul,
            -1.9420535891404027e-30,
            2.320035524507264e-15,
            -9.772747993469238,
            8.640659873752678e17
        );
        expect(_f32_no_reassociate_mul_result).toBe(3.5113616375826304e-26);
    });

    _test("execution of float_exprs_22: f64.no_reassociate_mul (instance 0)", () => {
        let _f64_no_reassociate_mul = module.getExport("f64.no_reassociate_mul");
        expect(_f64_no_reassociate_mul).not.toBeUndefined();
        let _f64_no_reassociate_mul_result = module.invoke(
            _f64_no_reassociate_mul,
            -3.109868654414946e-201,
            -2.0713190487745434e298,
            -7.162612845524978e-114,
            -8.847825329596909e199
        );
        expect(_f64_no_reassociate_mul_result).toBe(4.0822261813278614e184);
    });

    _test("execution of float_exprs_22: f64.no_reassociate_mul (instance 1)", () => {
        let _f64_no_reassociate_mul = module.getExport("f64.no_reassociate_mul");
        expect(_f64_no_reassociate_mul).not.toBeUndefined();
        let _f64_no_reassociate_mul_result = module.invoke(
            _f64_no_reassociate_mul,
            6.044271641295681e136,
            6.700545015107397e-156,
            -3.1469664275798185e-271,
            -6.4016772956405615e162
        );
        expect(_f64_no_reassociate_mul_result).toBe(8.159057447560471e-127);
    });

    _test("execution of float_exprs_22: f64.no_reassociate_mul (instance 2)", () => {
        let _f64_no_reassociate_mul = module.getExport("f64.no_reassociate_mul");
        expect(_f64_no_reassociate_mul).not.toBeUndefined();
        let _f64_no_reassociate_mul_result = module.invoke(
            _f64_no_reassociate_mul,
            2.216807720454268e-151,
            -1.8022341865367216e237,
            7.500283778521931e-230,
            -4.144121524339569e26
        );
        expect(_f64_no_reassociate_mul_result).toBe(1.241793627299937e-116);
    });

    _test("execution of float_exprs_22: f64.no_reassociate_mul (instance 3)", () => {
        let _f64_no_reassociate_mul = module.getExport("f64.no_reassociate_mul");
        expect(_f64_no_reassociate_mul).not.toBeUndefined();
        let _f64_no_reassociate_mul_result = module.invoke(
            _f64_no_reassociate_mul,
            2.431806596629872e208,
            6.508014075793436e-128,
            1.7596421287233897e67,
            -1.416141401305358e-7
        );
        expect(_f64_no_reassociate_mul_result).toBe(-3.943741918531223e141);
    });

    _test("execution of float_exprs_22: f64.no_reassociate_mul (instance 4)", () => {
        let _f64_no_reassociate_mul = module.getExport("f64.no_reassociate_mul");
        expect(_f64_no_reassociate_mul).not.toBeUndefined();
        let _f64_no_reassociate_mul_result = module.invoke(
            _f64_no_reassociate_mul,
            3.849767156964772e-71,
            7.0008754943224875e-239,
            -2.5368878252183865e219,
            -6.101114518858449e-181
        );
        expect(_f64_no_reassociate_mul_result).toBe(4.171548126376117e-270);
    });
});

describe("float_exprs_23", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_23.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 0)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, 1.0);
        expect(_f32_no_fold_div_0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 1)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, -1.0);
        expect(_f32_no_fold_div_0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 2)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, Infinity);
        expect(_f32_no_fold_div_0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 3)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, -Infinity);
        expect(_f32_no_fold_div_0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 4)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, 0.0);
        expect(_f32_no_fold_div_0_result).toBe(NaN);
    });

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 5)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, -0.0);
        expect(_f32_no_fold_div_0_result).toBe(NaN);
    });

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 6)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, NaN);
        expect(_f32_no_fold_div_0_result).toBe(NaN);
    });

    _test("execution of float_exprs_23: f32.no_fold_div_0 (instance 7)", () => {
        let _f32_no_fold_div_0 = module.getExport("f32.no_fold_div_0");
        expect(_f32_no_fold_div_0).not.toBeUndefined();
        let _f32_no_fold_div_0_result = module.invoke(_f32_no_fold_div_0, NaN);
        expect(_f32_no_fold_div_0_result).toBe(NaN);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 0)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, 1.0);
        expect(_f64_no_fold_div_0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 1)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, -1.0);
        expect(_f64_no_fold_div_0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 2)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, Infinity);
        expect(_f64_no_fold_div_0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 3)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, -Infinity);
        expect(_f64_no_fold_div_0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 4)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, 0.0);
        expect(_f64_no_fold_div_0_result).toBe(NaN);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 5)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, -0.0);
        expect(_f64_no_fold_div_0_result).toBe(NaN);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 6)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, NaN);
        expect(_f64_no_fold_div_0_result).toBe(NaN);
    });

    _test("execution of float_exprs_23: f64.no_fold_div_0 (instance 7)", () => {
        let _f64_no_fold_div_0 = module.getExport("f64.no_fold_div_0");
        expect(_f64_no_fold_div_0).not.toBeUndefined();
        let _f64_no_fold_div_0_result = module.invoke(_f64_no_fold_div_0, NaN);
        expect(_f64_no_fold_div_0_result).toBe(NaN);
    });
});

describe("float_exprs_24", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_24.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 0)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, 1.0);
        expect(_f32_no_fold_div_neg0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 1)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, -1.0);
        expect(_f32_no_fold_div_neg0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 2)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, Infinity);
        expect(_f32_no_fold_div_neg0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 3)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, -Infinity);
        expect(_f32_no_fold_div_neg0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 4)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, 0.0);
        expect(_f32_no_fold_div_neg0_result).toBe(NaN);
    });

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 5)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, -0.0);
        expect(_f32_no_fold_div_neg0_result).toBe(NaN);
    });

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 6)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, NaN);
        expect(_f32_no_fold_div_neg0_result).toBe(NaN);
    });

    _test("execution of float_exprs_24: f32.no_fold_div_neg0 (instance 7)", () => {
        let _f32_no_fold_div_neg0 = module.getExport("f32.no_fold_div_neg0");
        expect(_f32_no_fold_div_neg0).not.toBeUndefined();
        let _f32_no_fold_div_neg0_result = module.invoke(_f32_no_fold_div_neg0, NaN);
        expect(_f32_no_fold_div_neg0_result).toBe(NaN);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 0)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, 1.0);
        expect(_f64_no_fold_div_neg0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 1)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, -1.0);
        expect(_f64_no_fold_div_neg0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 2)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, Infinity);
        expect(_f64_no_fold_div_neg0_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 3)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, -Infinity);
        expect(_f64_no_fold_div_neg0_result).toBe(Infinity);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 4)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, 0.0);
        expect(_f64_no_fold_div_neg0_result).toBe(NaN);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 5)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, -0.0);
        expect(_f64_no_fold_div_neg0_result).toBe(NaN);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 6)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, NaN);
        expect(_f64_no_fold_div_neg0_result).toBe(NaN);
    });

    _test("execution of float_exprs_24: f64.no_fold_div_neg0 (instance 7)", () => {
        let _f64_no_fold_div_neg0 = module.getExport("f64.no_fold_div_neg0");
        expect(_f64_no_fold_div_neg0).not.toBeUndefined();
        let _f64_no_fold_div_neg0_result = module.invoke(_f64_no_fold_div_neg0, NaN);
        expect(_f64_no_fold_div_neg0_result).toBe(NaN);
    });
});

describe("float_exprs_25", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_25.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_25: f32.no_fold_to_hypot (instance 0)", () => {
        let _f32_no_fold_to_hypot = module.getExport("f32.no_fold_to_hypot");
        expect(_f32_no_fold_to_hypot).not.toBeUndefined();
        let _f32_no_fold_to_hypot_result = module.invoke(
            _f32_no_fold_to_hypot,
            7.285491363580183e-25,
            4.236579586704008e-21
        );
        expect(_f32_no_fold_to_hypot_result).toBe(4.236653499815384e-21);
    });

    _test("execution of float_exprs_25: f32.no_fold_to_hypot (instance 1)", () => {
        let _f32_no_fold_to_hypot = module.getExport("f32.no_fold_to_hypot");
        expect(_f32_no_fold_to_hypot).not.toBeUndefined();
        let _f32_no_fold_to_hypot_result = module.invoke(
            _f32_no_fold_to_hypot,
            -7.470285075631299e-22,
            -7.45374502637483e-33
        );
        expect(_f32_no_fold_to_hypot_result).toBe(7.468043953354002e-22);
    });

    _test("execution of float_exprs_25: f32.no_fold_to_hypot (instance 2)", () => {
        let _f32_no_fold_to_hypot = module.getExport("f32.no_fold_to_hypot");
        expect(_f32_no_fold_to_hypot).not.toBeUndefined();
        let _f32_no_fold_to_hypot_result = module.invoke(
            _f32_no_fold_to_hypot,
            -7.708949923849511e-35,
            -3.2627214338520023e-21
        );
        expect(_f32_no_fold_to_hypot_result).toBe(3.2627694975692356e-21);
    });

    _test("execution of float_exprs_25: f32.no_fold_to_hypot (instance 3)", () => {
        let _f32_no_fold_to_hypot = module.getExport("f32.no_fold_to_hypot");
        expect(_f32_no_fold_to_hypot).not.toBeUndefined();
        let _f32_no_fold_to_hypot_result = module.invoke(
            _f32_no_fold_to_hypot,
            -35.42818069458008,
            174209.484375
        );
        expect(_f32_no_fold_to_hypot_result).toBe(174209.5);
    });

    _test("execution of float_exprs_25: f32.no_fold_to_hypot (instance 4)", () => {
        let _f32_no_fold_to_hypot = module.getExport("f32.no_fold_to_hypot");
        expect(_f32_no_fold_to_hypot).not.toBeUndefined();
        let _f32_no_fold_to_hypot_result = module.invoke(
            _f32_no_fold_to_hypot,
            2.062814311395589e-23,
            -4.634475271768322e-22
        );
        expect(_f32_no_fold_to_hypot_result).toBe(4.630320183608342e-22);
    });

    _test("execution of float_exprs_25: f64.no_fold_to_hypot (instance 0)", () => {
        let _f64_no_fold_to_hypot = module.getExport("f64.no_fold_to_hypot");
        expect(_f64_no_fold_to_hypot).not.toBeUndefined();
        let _f64_no_fold_to_hypot_result = module.invoke(
            _f64_no_fold_to_hypot,
            3.863640258986321e-192,
            1.9133014752624014e-161
        );
        expect(_f64_no_fold_to_hypot_result).toBe(1.9120893753235554e-161);
    });

    _test("execution of float_exprs_25: f64.no_fold_to_hypot (instance 1)", () => {
        let _f64_no_fold_to_hypot = module.getExport("f64.no_fold_to_hypot");
        expect(_f64_no_fold_to_hypot).not.toBeUndefined();
        let _f64_no_fold_to_hypot_result = module.invoke(
            _f64_no_fold_to_hypot,
            1.3856123895032977e119,
            -2.828038515930043e123
        );
        expect(_f64_no_fold_to_hypot_result).toBe(2.8280385193244834e123);
    });

    _test("execution of float_exprs_25: f64.no_fold_to_hypot (instance 2)", () => {
        let _f64_no_fold_to_hypot = module.getExport("f64.no_fold_to_hypot");
        expect(_f64_no_fold_to_hypot).not.toBeUndefined();
        let _f64_no_fold_to_hypot_result = module.invoke(
            _f64_no_fold_to_hypot,
            6.502729096641792e-162,
            -4.544399933151275e-231
        );
        expect(_f64_no_fold_to_hypot_result).toBe(6.668276248455232e-162);
    });

    _test("execution of float_exprs_25: f64.no_fold_to_hypot (instance 3)", () => {
        let _f64_no_fold_to_hypot = module.getExport("f64.no_fold_to_hypot");
        expect(_f64_no_fold_to_hypot).not.toBeUndefined();
        let _f64_no_fold_to_hypot_result = module.invoke(
            _f64_no_fold_to_hypot,
            -2.2340232024202604e-157,
            3.435929714143315e-221
        );
        expect(_f64_no_fold_to_hypot_result).toBe(2.2340232023799234e-157);
    });

    _test("execution of float_exprs_25: f64.no_fold_to_hypot (instance 4)", () => {
        let _f64_no_fold_to_hypot = module.getExport("f64.no_fold_to_hypot");
        expect(_f64_no_fold_to_hypot).not.toBeUndefined();
        let _f64_no_fold_to_hypot_result = module.invoke(
            _f64_no_fold_to_hypot,
            2.797963998630554e-202,
            -1.906867996862016e-155
        );
        expect(_f64_no_fold_to_hypot_result).toBe(1.9068679968620105e-155);
    });
});

describe("float_exprs_26", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_26.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_26: f32.no_approximate_reciprocal (instance 0)", () => {
        let _f32_no_approximate_reciprocal = module.getExport("f32.no_approximate_reciprocal");
        expect(_f32_no_approximate_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_result = module.invoke(
            _f32_no_approximate_reciprocal,
            -0.0011329756816849113
        );
        expect(_f32_no_approximate_reciprocal_result).toBe(-882.6314697265625);
    });

    _test("execution of float_exprs_26: f32.no_approximate_reciprocal (instance 1)", () => {
        let _f32_no_approximate_reciprocal = module.getExport("f32.no_approximate_reciprocal");
        expect(_f32_no_approximate_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_result = module.invoke(
            _f32_no_approximate_reciprocal,
            3.237530143903465e38
        );
        expect(_f32_no_approximate_reciprocal_result).toBe(3.088774304929441e-39);
    });

    _test("execution of float_exprs_26: f32.no_approximate_reciprocal (instance 2)", () => {
        let _f32_no_approximate_reciprocal = module.getExport("f32.no_approximate_reciprocal");
        expect(_f32_no_approximate_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_result = module.invoke(
            _f32_no_approximate_reciprocal,
            -1.2725990163945628e-28
        );
        expect(_f32_no_approximate_reciprocal_result).toBe(-7.857934595785829e27);
    });

    _test("execution of float_exprs_26: f32.no_approximate_reciprocal (instance 3)", () => {
        let _f32_no_approximate_reciprocal = module.getExport("f32.no_approximate_reciprocal");
        expect(_f32_no_approximate_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_result = module.invoke(
            _f32_no_approximate_reciprocal,
            1.0302067914563079e23
        );
        expect(_f32_no_approximate_reciprocal_result).toBe(9.706789077198895e-24);
    });

    _test("execution of float_exprs_26: f32.no_approximate_reciprocal (instance 4)", () => {
        let _f32_no_approximate_reciprocal = module.getExport("f32.no_approximate_reciprocal");
        expect(_f32_no_approximate_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_result = module.invoke(
            _f32_no_approximate_reciprocal,
            -2.8443762909518046e-25
        );
        expect(_f32_no_approximate_reciprocal_result).toBe(-3.515709324545706e24);
    });
});

describe("float_exprs_27", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_27.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_27: f32.no_approximate_reciprocal_sqrt (instance 0)", () => {
        let _f32_no_approximate_reciprocal_sqrt = module.getExport(
            "f32.no_approximate_reciprocal_sqrt"
        );
        expect(_f32_no_approximate_reciprocal_sqrt).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_sqrt_result = module.invoke(
            _f32_no_approximate_reciprocal_sqrt,
            1.6117864692650336e-13
        );
        expect(_f32_no_approximate_reciprocal_sqrt_result).toBe(2490842.5);
    });

    _test("execution of float_exprs_27: f32.no_approximate_reciprocal_sqrt (instance 1)", () => {
        let _f32_no_approximate_reciprocal_sqrt = module.getExport(
            "f32.no_approximate_reciprocal_sqrt"
        );
        expect(_f32_no_approximate_reciprocal_sqrt).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_sqrt_result = module.invoke(
            _f32_no_approximate_reciprocal_sqrt,
            0.007449136581271887
        );
        expect(_f32_no_approximate_reciprocal_sqrt_result).toBe(11.586359977722168);
    });

    _test("execution of float_exprs_27: f32.no_approximate_reciprocal_sqrt (instance 2)", () => {
        let _f32_no_approximate_reciprocal_sqrt = module.getExport(
            "f32.no_approximate_reciprocal_sqrt"
        );
        expect(_f32_no_approximate_reciprocal_sqrt).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_sqrt_result = module.invoke(
            _f32_no_approximate_reciprocal_sqrt,
            2.339817041277766e-20
        );
        expect(_f32_no_approximate_reciprocal_sqrt_result).toBe(6537460224.0);
    });

    _test("execution of float_exprs_27: f32.no_approximate_reciprocal_sqrt (instance 3)", () => {
        let _f32_no_approximate_reciprocal_sqrt = module.getExport(
            "f32.no_approximate_reciprocal_sqrt"
        );
        expect(_f32_no_approximate_reciprocal_sqrt).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_sqrt_result = module.invoke(
            _f32_no_approximate_reciprocal_sqrt,
            1.1123504325754804e-13
        );
        expect(_f32_no_approximate_reciprocal_sqrt_result).toBe(2998328.25);
    });

    _test("execution of float_exprs_27: f32.no_approximate_reciprocal_sqrt (instance 4)", () => {
        let _f32_no_approximate_reciprocal_sqrt = module.getExport(
            "f32.no_approximate_reciprocal_sqrt"
        );
        expect(_f32_no_approximate_reciprocal_sqrt).not.toBeUndefined();
        let _f32_no_approximate_reciprocal_sqrt_result = module.invoke(
            _f32_no_approximate_reciprocal_sqrt,
            1.7653063085045715e-26
        );
        expect(_f32_no_approximate_reciprocal_sqrt_result).toBe(7526446268416.0);
    });

    _test("execution of float_exprs_27: f64.no_fuse_reciprocal_sqrt (instance 0)", () => {
        let _f64_no_fuse_reciprocal_sqrt = module.getExport("f64.no_fuse_reciprocal_sqrt");
        expect(_f64_no_fuse_reciprocal_sqrt).not.toBeUndefined();
        let _f64_no_fuse_reciprocal_sqrt_result = module.invoke(
            _f64_no_fuse_reciprocal_sqrt,
            4.472459252766337e267
        );
        expect(_f64_no_fuse_reciprocal_sqrt_result).toBe(1.4952947335898096e-134);
    });

    _test("execution of float_exprs_27: f64.no_fuse_reciprocal_sqrt (instance 1)", () => {
        let _f64_no_fuse_reciprocal_sqrt = module.getExport("f64.no_fuse_reciprocal_sqrt");
        expect(_f64_no_fuse_reciprocal_sqrt).not.toBeUndefined();
        let _f64_no_fuse_reciprocal_sqrt_result = module.invoke(
            _f64_no_fuse_reciprocal_sqrt,
            4.752392260007119e93
        );
        expect(_f64_no_fuse_reciprocal_sqrt_result).toBe(1.4505872638954843e-47);
    });

    _test("execution of float_exprs_27: f64.no_fuse_reciprocal_sqrt (instance 2)", () => {
        let _f64_no_fuse_reciprocal_sqrt = module.getExport("f64.no_fuse_reciprocal_sqrt");
        expect(_f64_no_fuse_reciprocal_sqrt).not.toBeUndefined();
        let _f64_no_fuse_reciprocal_sqrt_result = module.invoke(
            _f64_no_fuse_reciprocal_sqrt,
            2.9014415885392436e31
        );
        expect(_f64_no_fuse_reciprocal_sqrt_result).toBe(1.8564920084793608e-16);
    });

    _test("execution of float_exprs_27: f64.no_fuse_reciprocal_sqrt (instance 3)", () => {
        let _f64_no_fuse_reciprocal_sqrt = module.getExport("f64.no_fuse_reciprocal_sqrt");
        expect(_f64_no_fuse_reciprocal_sqrt).not.toBeUndefined();
        let _f64_no_fuse_reciprocal_sqrt_result = module.invoke(
            _f64_no_fuse_reciprocal_sqrt,
            1.3966125076974778e201
        );
        expect(_f64_no_fuse_reciprocal_sqrt_result).toBe(2.6758516751072132e-101);
    });

    _test("execution of float_exprs_27: f64.no_fuse_reciprocal_sqrt (instance 4)", () => {
        let _f64_no_fuse_reciprocal_sqrt = module.getExport("f64.no_fuse_reciprocal_sqrt");
        expect(_f64_no_fuse_reciprocal_sqrt).not.toBeUndefined();
        let _f64_no_fuse_reciprocal_sqrt_result = module.invoke(
            _f64_no_fuse_reciprocal_sqrt,
            1.5159641544070443e44
        );
        expect(_f64_no_fuse_reciprocal_sqrt_result).toBe(8.121860649480894e-23);
    });
});

describe("float_exprs_28", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_28.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_28: f32.no_approximate_sqrt_reciprocal (instance 0)", () => {
        let _f32_no_approximate_sqrt_reciprocal = module.getExport(
            "f32.no_approximate_sqrt_reciprocal"
        );
        expect(_f32_no_approximate_sqrt_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_sqrt_reciprocal_result = module.invoke(
            _f32_no_approximate_sqrt_reciprocal,
            1.8950570813004186e18
        );
        expect(_f32_no_approximate_sqrt_reciprocal_result).toBe(7.264217560809527e-10);
    });

    _test("execution of float_exprs_28: f32.no_approximate_sqrt_reciprocal (instance 1)", () => {
        let _f32_no_approximate_sqrt_reciprocal = module.getExport(
            "f32.no_approximate_sqrt_reciprocal"
        );
        expect(_f32_no_approximate_sqrt_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_sqrt_reciprocal_result = module.invoke(
            _f32_no_approximate_sqrt_reciprocal,
            0.002565894043073058
        );
        expect(_f32_no_approximate_sqrt_reciprocal_result).toBe(19.74152183532715);
    });

    _test("execution of float_exprs_28: f32.no_approximate_sqrt_reciprocal (instance 2)", () => {
        let _f32_no_approximate_sqrt_reciprocal = module.getExport(
            "f32.no_approximate_sqrt_reciprocal"
        );
        expect(_f32_no_approximate_sqrt_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_sqrt_reciprocal_result = module.invoke(
            _f32_no_approximate_sqrt_reciprocal,
            6.32654487022683e20
        );
        expect(_f32_no_approximate_sqrt_reciprocal_result).toBe(3.975728427030312e-11);
    });

    _test("execution of float_exprs_28: f32.no_approximate_sqrt_reciprocal (instance 3)", () => {
        let _f32_no_approximate_sqrt_reciprocal = module.getExport(
            "f32.no_approximate_sqrt_reciprocal"
        );
        expect(_f32_no_approximate_sqrt_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_sqrt_reciprocal_result = module.invoke(
            _f32_no_approximate_sqrt_reciprocal,
            14153.5390625
        );
        expect(_f32_no_approximate_sqrt_reciprocal_result).toBe(0.008405576460063457);
    });

    _test("execution of float_exprs_28: f32.no_approximate_sqrt_reciprocal (instance 4)", () => {
        let _f32_no_approximate_sqrt_reciprocal = module.getExport(
            "f32.no_approximate_sqrt_reciprocal"
        );
        expect(_f32_no_approximate_sqrt_reciprocal).not.toBeUndefined();
        let _f32_no_approximate_sqrt_reciprocal_result = module.invoke(
            _f32_no_approximate_sqrt_reciprocal,
            2.6173729982836207e31
        );
        expect(_f32_no_approximate_sqrt_reciprocal_result).toBe(1.9546418164459933e-16);
    });
});

describe("float_exprs_29", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_29.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_29: i32.no_fold_f32_s (instance 0)", () => {
        let _i32_no_fold_f32_s = module.getExport("i32.no_fold_f32_s");
        expect(_i32_no_fold_f32_s).not.toBeUndefined();
        let _i32_no_fold_f32_s_result = module.invoke(_i32_no_fold_f32_s, 16777216);
        expect(_i32_no_fold_f32_s_result).toBe(16777216);
    });

    _test("execution of float_exprs_29: i32.no_fold_f32_s (instance 1)", () => {
        let _i32_no_fold_f32_s = module.getExport("i32.no_fold_f32_s");
        expect(_i32_no_fold_f32_s).not.toBeUndefined();
        let _i32_no_fold_f32_s_result = module.invoke(_i32_no_fold_f32_s, 16777217);
        expect(_i32_no_fold_f32_s_result).toBe(16777216);
    });

    _test("execution of float_exprs_29: i32.no_fold_f32_s (instance 2)", () => {
        let _i32_no_fold_f32_s = module.getExport("i32.no_fold_f32_s");
        expect(_i32_no_fold_f32_s).not.toBeUndefined();
        let _i32_no_fold_f32_s_result = module.invoke(_i32_no_fold_f32_s, -268435440);
        expect(_i32_no_fold_f32_s_result).toBe(-268435440);
    });

    _test("execution of float_exprs_29: i32.no_fold_f32_u (instance 0)", () => {
        let _i32_no_fold_f32_u = module.getExport("i32.no_fold_f32_u");
        expect(_i32_no_fold_f32_u).not.toBeUndefined();
        let _i32_no_fold_f32_u_result = module.invoke(_i32_no_fold_f32_u, 16777216);
        expect(_i32_no_fold_f32_u_result).toBe(16777216);
    });

    _test("execution of float_exprs_29: i32.no_fold_f32_u (instance 1)", () => {
        let _i32_no_fold_f32_u = module.getExport("i32.no_fold_f32_u");
        expect(_i32_no_fold_f32_u).not.toBeUndefined();
        let _i32_no_fold_f32_u_result = module.invoke(_i32_no_fold_f32_u, 16777217);
        expect(_i32_no_fold_f32_u_result).toBe(16777216);
    });

    _test("execution of float_exprs_29: i32.no_fold_f32_u (instance 2)", () => {
        let _i32_no_fold_f32_u = module.getExport("i32.no_fold_f32_u");
        expect(_i32_no_fold_f32_u).not.toBeUndefined();
        let _i32_no_fold_f32_u_result = module.invoke(_i32_no_fold_f32_u, -268435440);
        expect(_i32_no_fold_f32_u_result).toBe(-268435456);
    });

    _test("execution of float_exprs_29: i64.no_fold_f64_s (instance 0)", () => {
        let _i64_no_fold_f64_s = module.getExport("i64.no_fold_f64_s");
        expect(_i64_no_fold_f64_s).not.toBeUndefined();
        let _i64_no_fold_f64_s_result = module.invoke(_i64_no_fold_f64_s, 9007199254740992n);
        expect(_i64_no_fold_f64_s_result).toBe(9007199254740992n);
    });

    _test("execution of float_exprs_29: i64.no_fold_f64_s (instance 1)", () => {
        let _i64_no_fold_f64_s = module.getExport("i64.no_fold_f64_s");
        expect(_i64_no_fold_f64_s).not.toBeUndefined();
        let _i64_no_fold_f64_s_result = module.invoke(_i64_no_fold_f64_s, 9007199254740993n);
        expect(_i64_no_fold_f64_s_result).toBe(9007199254740992n);
    });

    _test("execution of float_exprs_29: i64.no_fold_f64_s (instance 2)", () => {
        let _i64_no_fold_f64_s = module.getExport("i64.no_fold_f64_s");
        expect(_i64_no_fold_f64_s).not.toBeUndefined();
        let _i64_no_fold_f64_s_result = module.invoke(_i64_no_fold_f64_s, -1152921504606845952n);
        expect(_i64_no_fold_f64_s_result).toBe(-1152921504606845952n);
    });

    _test("execution of float_exprs_29: i64.no_fold_f64_u (instance 0)", () => {
        let _i64_no_fold_f64_u = module.getExport("i64.no_fold_f64_u");
        expect(_i64_no_fold_f64_u).not.toBeUndefined();
        let _i64_no_fold_f64_u_result = module.invoke(_i64_no_fold_f64_u, 9007199254740992n);
        expect(_i64_no_fold_f64_u_result).toBe(9007199254740992n);
    });

    _test("execution of float_exprs_29: i64.no_fold_f64_u (instance 1)", () => {
        let _i64_no_fold_f64_u = module.getExport("i64.no_fold_f64_u");
        expect(_i64_no_fold_f64_u).not.toBeUndefined();
        let _i64_no_fold_f64_u_result = module.invoke(_i64_no_fold_f64_u, 9007199254740993n);
        expect(_i64_no_fold_f64_u_result).toBe(9007199254740992n);
    });

    _test("execution of float_exprs_29: i64.no_fold_f64_u (instance 2)", () => {
        let _i64_no_fold_f64_u = module.getExport("i64.no_fold_f64_u");
        expect(_i64_no_fold_f64_u).not.toBeUndefined();
        let _i64_no_fold_f64_u_result = module.invoke(_i64_no_fold_f64_u, -1152921504606845952n);
        expect(_i64_no_fold_f64_u_result).toBe(-1152921504606846976n);
    });
});

describe("float_exprs_30", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_30.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_30: f32.no_fold_add_sub (instance 0)", () => {
        let _f32_no_fold_add_sub = module.getExport("f32.no_fold_add_sub");
        expect(_f32_no_fold_add_sub).not.toBeUndefined();
        let _f32_no_fold_add_sub_result = module.invoke(
            _f32_no_fold_add_sub,
            1.2138281983817452e-14,
            -2.0946384182707334e-8
        );
        expect(_f32_no_fold_add_sub_result).toBe(1.2434497875801753e-14);
    });

    _test("execution of float_exprs_30: f32.no_fold_add_sub (instance 1)", () => {
        let _f32_no_fold_add_sub = module.getExport("f32.no_fold_add_sub");
        expect(_f32_no_fold_add_sub).not.toBeUndefined();
        let _f32_no_fold_add_sub_result = module.invoke(
            _f32_no_fold_add_sub,
            -1.9768197034863988e-7,
            3.7154566143726697e-6
        );
        expect(_f32_no_fold_add_sub_result).toBe(-1.976820840354776e-7);
    });

    _test("execution of float_exprs_30: f32.no_fold_add_sub (instance 2)", () => {
        let _f32_no_fold_add_sub = module.getExport("f32.no_fold_add_sub");
        expect(_f32_no_fold_add_sub).not.toBeUndefined();
        let _f32_no_fold_add_sub_result = module.invoke(
            _f32_no_fold_add_sub,
            -9.596213016386575e24,
            -3.538041396989809e30
        );
        expect(_f32_no_fold_add_sub_result).toBe(-9.671406556917033e24);
    });

    _test("execution of float_exprs_30: f32.no_fold_add_sub (instance 3)", () => {
        let _f32_no_fold_add_sub = module.getExport("f32.no_fold_add_sub");
        expect(_f32_no_fold_add_sub).not.toBeUndefined();
        let _f32_no_fold_add_sub_result = module.invoke(
            _f32_no_fold_add_sub,
            5.054345810151827e-24,
            2.4572655756057543e-17
        );
        expect(_f32_no_fold_add_sub_result).toBe(4.963083675318166e-24);
    });

    _test("execution of float_exprs_30: f32.no_fold_add_sub (instance 4)", () => {
        let _f32_no_fold_add_sub = module.getExport("f32.no_fold_add_sub");
        expect(_f32_no_fold_add_sub).not.toBeUndefined();
        let _f32_no_fold_add_sub_result = module.invoke(
            _f32_no_fold_add_sub,
            -3.3693146823161225e-33,
            -7.101491652849161e-26
        );
        expect(_f32_no_fold_add_sub_result).toBe(-6.162975822039155e-33);
    });

    _test("execution of float_exprs_30: f64.no_fold_add_sub (instance 0)", () => {
        let _f64_no_fold_add_sub = module.getExport("f64.no_fold_add_sub");
        expect(_f64_no_fold_add_sub).not.toBeUndefined();
        let _f64_no_fold_add_sub_result = module.invoke(
            _f64_no_fold_add_sub,
            -8.445702651973109e-264,
            1.110684389828854e-258
        );
        expect(_f64_no_fold_add_sub_result).toBe(-8.445702651873978e-264);
    });

    _test("execution of float_exprs_30: f64.no_fold_add_sub (instance 1)", () => {
        let _f64_no_fold_add_sub = module.getExport("f64.no_fold_add_sub");
        expect(_f64_no_fold_add_sub).not.toBeUndefined();
        let _f64_no_fold_add_sub_result = module.invoke(
            _f64_no_fold_add_sub,
            8.198798715927055e-165,
            4.624035606110903e-159
        );
        expect(_f64_no_fold_add_sub_result).toBe(8.198798715897085e-165);
    });

    _test("execution of float_exprs_30: f64.no_fold_add_sub (instance 2)", () => {
        let _f64_no_fold_add_sub = module.getExport("f64.no_fold_add_sub");
        expect(_f64_no_fold_add_sub).not.toBeUndefined();
        let _f64_no_fold_add_sub_result = module.invoke(
            _f64_no_fold_add_sub,
            -1.3604511322066714e-9,
            -0.1751431740707098
        );
        expect(_f64_no_fold_add_sub_result).toBe(-1.3604511406306585e-9);
    });

    _test("execution of float_exprs_30: f64.no_fold_add_sub (instance 3)", () => {
        let _f64_no_fold_add_sub = module.getExport("f64.no_fold_add_sub");
        expect(_f64_no_fold_add_sub).not.toBeUndefined();
        let _f64_no_fold_add_sub_result = module.invoke(
            _f64_no_fold_add_sub,
            -3.944335437865966e-103,
            1.663809741322667e-92
        );
        expect(_f64_no_fold_add_sub_result).toBe(-3.9443355500325104e-103);
    });

    _test("execution of float_exprs_30: f64.no_fold_add_sub (instance 4)", () => {
        let _f64_no_fold_add_sub = module.getExport("f64.no_fold_add_sub");
        expect(_f64_no_fold_add_sub).not.toBeUndefined();
        let _f64_no_fold_add_sub_result = module.invoke(
            _f64_no_fold_add_sub,
            -5.078309818866e-187,
            -1.0790431644461104e-177
        );
        expect(_f64_no_fold_add_sub_result).toBe(-5.07831047937567e-187);
    });
});

describe("float_exprs_31", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_31.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_31: f32.no_fold_sub_add (instance 0)", () => {
        let _f32_no_fold_sub_add = module.getExport("f32.no_fold_sub_add");
        expect(_f32_no_fold_sub_add).not.toBeUndefined();
        let _f32_no_fold_sub_add_result = module.invoke(
            _f32_no_fold_sub_add,
            -676.474365234375,
            403.03680419921875
        );
        expect(_f32_no_fold_sub_add_result).toBe(-676.4744262695312);
    });

    _test("execution of float_exprs_31: f32.no_fold_sub_add (instance 1)", () => {
        let _f32_no_fold_sub_add = module.getExport("f32.no_fold_sub_add");
        expect(_f32_no_fold_sub_add).not.toBeUndefined();
        let _f32_no_fold_sub_add_result = module.invoke(
            _f32_no_fold_sub_add,
            -6.305943118406008e-34,
            3.67186006875961e-29
        );
        expect(_f32_no_fold_sub_add_result).toBe(-6.319457630020618e-34);
    });

    _test("execution of float_exprs_31: f32.no_fold_sub_add (instance 2)", () => {
        let _f32_no_fold_sub_add = module.getExport("f32.no_fold_sub_add");
        expect(_f32_no_fold_sub_add).not.toBeUndefined();
        let _f32_no_fold_sub_add_result = module.invoke(
            _f32_no_fold_sub_add,
            83184800.0,
            46216216576.0
        );
        expect(_f32_no_fold_sub_add_result).toBe(83185664.0);
    });

    _test("execution of float_exprs_31: f32.no_fold_sub_add (instance 3)", () => {
        let _f32_no_fold_sub_add = module.getExport("f32.no_fold_sub_add");
        expect(_f32_no_fold_sub_add).not.toBeUndefined();
        let _f32_no_fold_sub_add_result = module.invoke(
            _f32_no_fold_sub_add,
            2.211956963080186e-12,
            -1.0437929631734733e-8
        );
        expect(_f32_no_fold_sub_add_result).toBe(2.211564265053312e-12);
    });

    _test("execution of float_exprs_31: f32.no_fold_sub_add (instance 4)", () => {
        let _f32_no_fold_sub_add = module.getExport("f32.no_fold_sub_add");
        expect(_f32_no_fold_sub_add).not.toBeUndefined();
        let _f32_no_fold_sub_add_result = module.invoke(
            _f32_no_fold_sub_add,
            0.14944395422935486,
            -27393.650390625
        );
        expect(_f32_no_fold_sub_add_result).toBe(0.150390625);
    });

    _test("execution of float_exprs_31: f64.no_fold_sub_add (instance 0)", () => {
        let _f64_no_fold_sub_add = module.getExport("f64.no_fold_sub_add");
        expect(_f64_no_fold_sub_add).not.toBeUndefined();
        let _f64_no_fold_sub_add_result = module.invoke(
            _f64_no_fold_sub_add,
            9.036598261794624e76,
            -9.58186427535552e77
        );
        expect(_f64_no_fold_sub_add_result).toBe(9.036598261794628e76);
    });

    _test("execution of float_exprs_31: f64.no_fold_sub_add (instance 1)", () => {
        let _f64_no_fold_sub_add = module.getExport("f64.no_fold_sub_add");
        expect(_f64_no_fold_sub_add).not.toBeUndefined();
        let _f64_no_fold_sub_add_result = module.invoke(
            _f64_no_fold_sub_add,
            4.4230403564658815e-201,
            2.6713491049366576e-195
        );
        expect(_f64_no_fold_sub_add_result).toBe(4.423040356647721e-201);
    });

    _test("execution of float_exprs_31: f64.no_fold_sub_add (instance 2)", () => {
        let _f64_no_fold_sub_add = module.getExport("f64.no_fold_sub_add");
        expect(_f64_no_fold_sub_add).not.toBeUndefined();
        let _f64_no_fold_sub_add_result = module.invoke(
            _f64_no_fold_sub_add,
            4.095348452776429e75,
            -4.0501900195765687e90
        );
        expect(_f64_no_fold_sub_add_result).toBe(4.0708156372493975e75);
    });

    _test("execution of float_exprs_31: f64.no_fold_sub_add (instance 3)", () => {
        let _f64_no_fold_sub_add = module.getExport("f64.no_fold_sub_add");
        expect(_f64_no_fold_sub_add).not.toBeUndefined();
        let _f64_no_fold_sub_add_result = module.invoke(
            _f64_no_fold_sub_add,
            2.4008889207554433e-8,
            -0.00017253797929188484
        );
        expect(_f64_no_fold_sub_add_result).toBe(2.400888920756506e-8);
    });

    _test("execution of float_exprs_31: f64.no_fold_sub_add (instance 4)", () => {
        let _f64_no_fold_sub_add = module.getExport("f64.no_fold_sub_add");
        expect(_f64_no_fold_sub_add).not.toBeUndefined();
        let _f64_no_fold_sub_add_result = module.invoke(
            _f64_no_fold_sub_add,
            4.3367542918305866e-111,
            -3.9597706708227122e-109
        );
        expect(_f64_no_fold_sub_add_result).toBe(4.336754291830597e-111);
    });
});

describe("float_exprs_32", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_32.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_32: f32.no_fold_mul_div (instance 0)", () => {
        let _f32_no_fold_mul_div = module.getExport("f32.no_fold_mul_div");
        expect(_f32_no_fold_mul_div).not.toBeUndefined();
        let _f32_no_fold_mul_div_result = module.invoke(
            _f32_no_fold_mul_div,
            -3.247671518376755e16,
            1.0121375410693505e-14
        );
        expect(_f32_no_fold_mul_div_result).toBe(-3.2476713036283904e16);
    });

    _test("execution of float_exprs_32: f32.no_fold_mul_div (instance 1)", () => {
        let _f32_no_fold_mul_div = module.getExport("f32.no_fold_mul_div");
        expect(_f32_no_fold_mul_div).not.toBeUndefined();
        let _f32_no_fold_mul_div_result = module.invoke(
            _f32_no_fold_mul_div,
            -1.556116302481314e-8,
            1.5799828385609998e-32
        );
        expect(_f32_no_fold_mul_div_result).toBe(-1.5561145261244747e-8);
    });

    _test("execution of float_exprs_32: f32.no_fold_mul_div (instance 2)", () => {
        let _f32_no_fold_mul_div = module.getExport("f32.no_fold_mul_div");
        expect(_f32_no_fold_mul_div).not.toBeUndefined();
        let _f32_no_fold_mul_div_result = module.invoke(
            _f32_no_fold_mul_div,
            -6.763110003396491e-15,
            -441323995791360.0
        );
        expect(_f32_no_fold_mul_div_result).toBe(-6.763109579880017e-15);
    });

    _test("execution of float_exprs_32: f32.no_fold_mul_div (instance 3)", () => {
        let _f32_no_fold_mul_div = module.getExport("f32.no_fold_mul_div");
        expect(_f32_no_fold_mul_div).not.toBeUndefined();
        let _f32_no_fold_mul_div_result = module.invoke(
            _f32_no_fold_mul_div,
            7505613726679040.0,
            -2.1603840804897423e18
        );
        expect(_f32_no_fold_mul_div_result).toBe(7505613189808128.0);
    });

    _test("execution of float_exprs_32: f32.no_fold_mul_div (instance 4)", () => {
        let _f32_no_fold_mul_div = module.getExport("f32.no_fold_mul_div");
        expect(_f32_no_fold_mul_div).not.toBeUndefined();
        let _f32_no_fold_mul_div_result = module.invoke(
            _f32_no_fold_mul_div,
            -2.362576059154981e-28,
            -1.0808759269564927e-11
        );
        expect(_f32_no_fold_mul_div_result).toBe(-2.362576540637467e-28);
    });

    _test("execution of float_exprs_32: f64.no_fold_mul_div (instance 0)", () => {
        let _f64_no_fold_mul_div = module.getExport("f64.no_fold_mul_div");
        expect(_f64_no_fold_mul_div).not.toBeUndefined();
        let _f64_no_fold_mul_div_result = module.invoke(
            _f64_no_fold_mul_div,
            -1.3532103713575586e-252,
            -3.347836467564916e-62
        );
        expect(_f64_no_fold_mul_div_result).toBe(-1.3532103713672434e-252);
    });

    _test("execution of float_exprs_32: f64.no_fold_mul_div (instance 1)", () => {
        let _f64_no_fold_mul_div = module.getExport("f64.no_fold_mul_div");
        expect(_f64_no_fold_mul_div).not.toBeUndefined();
        let _f64_no_fold_mul_div_result = module.invoke(
            _f64_no_fold_mul_div,
            7.7662174313180845e115,
            1.9595915560693953e176
        );
        expect(_f64_no_fold_mul_div_result).toBe(7.766217431318085e115);
    });

    _test("execution of float_exprs_32: f64.no_fold_mul_div (instance 2)", () => {
        let _f64_no_fold_mul_div = module.getExport("f64.no_fold_mul_div");
        expect(_f64_no_fold_mul_div).not.toBeUndefined();
        let _f64_no_fold_mul_div_result = module.invoke(
            _f64_no_fold_mul_div,
            -7.180117811902948e71,
            -9.320036042623636e-167
        );
        expect(_f64_no_fold_mul_div_result).toBe(-7.1801178119029475e71);
    });

    _test("execution of float_exprs_32: f64.no_fold_mul_div (instance 3)", () => {
        let _f64_no_fold_mul_div = module.getExport("f64.no_fold_mul_div");
        expect(_f64_no_fold_mul_div).not.toBeUndefined();
        let _f64_no_fold_mul_div_result = module.invoke(
            _f64_no_fold_mul_div,
            1.7260010724693063e-50,
            3.568792428129926e-273
        );
        expect(_f64_no_fold_mul_div_result).toBe(1.661286799244216e-50);
    });

    _test("execution of float_exprs_32: f64.no_fold_mul_div (instance 4)", () => {
        let _f64_no_fold_mul_div = module.getExport("f64.no_fold_mul_div");
        expect(_f64_no_fold_mul_div).not.toBeUndefined();
        let _f64_no_fold_mul_div_result = module.invoke(
            _f64_no_fold_mul_div,
            -9.145223045828962e198,
            -5.562094034342845e-99
        );
        expect(_f64_no_fold_mul_div_result).toBe(-9.145223045828963e198);
    });
});

describe("float_exprs_33", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_33.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_33: f32.no_fold_div_mul (instance 0)", () => {
        let _f32_no_fold_div_mul = module.getExport("f32.no_fold_div_mul");
        expect(_f32_no_fold_div_mul).not.toBeUndefined();
        let _f32_no_fold_div_mul_result = module.invoke(
            _f32_no_fold_div_mul,
            -511517982720.0,
            986062208.0
        );
        expect(_f32_no_fold_div_mul_result).toBe(-511517949952.0);
    });

    _test("execution of float_exprs_33: f32.no_fold_div_mul (instance 1)", () => {
        let _f32_no_fold_div_mul = module.getExport("f32.no_fold_div_mul");
        expect(_f32_no_fold_div_mul).not.toBeUndefined();
        let _f32_no_fold_div_mul_result = module.invoke(
            _f32_no_fold_div_mul,
            -2.494485295186517e-16,
            -4.153983354626689e-6
        );
        expect(_f32_no_fold_div_mul_result).toBe(-2.494485559884313e-16);
    });

    _test("execution of float_exprs_33: f32.no_fold_div_mul (instance 2)", () => {
        let _f32_no_fold_div_mul = module.getExport("f32.no_fold_div_mul");
        expect(_f32_no_fold_div_mul).not.toBeUndefined();
        let _f32_no_fold_div_mul_result = module.invoke(
            _f32_no_fold_div_mul,
            2.0827855005069695e-38,
            -235.19847106933594
        );
        expect(_f32_no_fold_div_mul_result).toBe(2.0828013351796163e-38);
    });

    _test("execution of float_exprs_33: f32.no_fold_div_mul (instance 3)", () => {
        let _f32_no_fold_div_mul = module.getExport("f32.no_fold_div_mul");
        expect(_f32_no_fold_div_mul).not.toBeUndefined();
        let _f32_no_fold_div_mul_result = module.invoke(
            _f32_no_fold_div_mul,
            -6.249948683472858e-23,
            -6.96312604972286e17
        );
        expect(_f32_no_fold_div_mul_result).toBe(-6.249919022302821e-23);
    });

    _test("execution of float_exprs_33: f32.no_fold_div_mul (instance 4)", () => {
        let _f32_no_fold_div_mul = module.getExport("f32.no_fold_div_mul");
        expect(_f32_no_fold_div_mul).not.toBeUndefined();
        let _f32_no_fold_div_mul_result = module.invoke(
            _f32_no_fold_div_mul,
            5.835351440532773e-30,
            212781120.0
        );
        expect(_f32_no_fold_div_mul_result).toBe(5.8353518166909656e-30);
    });

    _test("execution of float_exprs_33: f64.no_fold_div_mul (instance 0)", () => {
        let _f64_no_fold_div_mul = module.getExport("f64.no_fold_div_mul");
        expect(_f64_no_fold_div_mul).not.toBeUndefined();
        let _f64_no_fold_div_mul_result = module.invoke(
            _f64_no_fold_div_mul,
            3.5984644259935362e-264,
            -2.881226329803332e55
        );
        expect(_f64_no_fold_div_mul_result).toBe(3.5985034356565485e-264);
    });

    _test("execution of float_exprs_33: f64.no_fold_div_mul (instance 1)", () => {
        let _f64_no_fold_div_mul = module.getExport("f64.no_fold_div_mul");
        expect(_f64_no_fold_div_mul).not.toBeUndefined();
        let _f64_no_fold_div_mul_result = module.invoke(
            _f64_no_fold_div_mul,
            -1.7486367047479447e-215,
            1.6508738454798636e-16
        );
        expect(_f64_no_fold_div_mul_result).toBe(-1.748636704747945e-215);
    });

    _test("execution of float_exprs_33: f64.no_fold_div_mul (instance 2)", () => {
        let _f64_no_fold_div_mul = module.getExport("f64.no_fold_div_mul");
        expect(_f64_no_fold_div_mul).not.toBeUndefined();
        let _f64_no_fold_div_mul_result = module.invoke(
            _f64_no_fold_div_mul,
            -3.140341989542684e-44,
            9.428298090819196e128
        );
        expect(_f64_no_fold_div_mul_result).toBe(-3.1403419895426836e-44);
    });

    _test("execution of float_exprs_33: f64.no_fold_div_mul (instance 3)", () => {
        let _f64_no_fold_div_mul = module.getExport("f64.no_fold_div_mul");
        expect(_f64_no_fold_div_mul).not.toBeUndefined();
        let _f64_no_fold_div_mul_result = module.invoke(
            _f64_no_fold_div_mul,
            -3.919745428533519e-84,
            -2.1314747179654705e85
        );
        expect(_f64_no_fold_div_mul_result).toBe(-3.9197454285335185e-84);
    });

    _test("execution of float_exprs_33: f64.no_fold_div_mul (instance 4)", () => {
        let _f64_no_fold_div_mul = module.getExport("f64.no_fold_div_mul");
        expect(_f64_no_fold_div_mul).not.toBeUndefined();
        let _f64_no_fold_div_mul_result = module.invoke(
            _f64_no_fold_div_mul,
            -5.734160003788982e186,
            6.350805843612229e297
        );
        expect(_f64_no_fold_div_mul_result).toBe(-5.734160003788981e186);
    });
});

describe("float_exprs_34", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_34.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_34: f32.no_fold_div2_mul2 (instance 0)", () => {
        let _f32_no_fold_div2_mul2 = module.getExport("f32.no_fold_div2_mul2");
        expect(_f32_no_fold_div2_mul2).not.toBeUndefined();
        let _f32_no_fold_div2_mul2_result = module.invoke(
            _f32_no_fold_div2_mul2,
            2.3509885615147286e-38
        );
        expect(_f32_no_fold_div2_mul2_result).toBe(2.350988701644575e-38);
    });

    _test("execution of float_exprs_34: f64.no_fold_div2_mul2 (instance 0)", () => {
        let _f64_no_fold_div2_mul2 = module.getExport("f64.no_fold_div2_mul2");
        expect(_f64_no_fold_div2_mul2).not.toBeUndefined();
        let _f64_no_fold_div2_mul2_result = module.invoke(
            _f64_no_fold_div2_mul2,
            4.4501477170144023e-308
        );
        expect(_f64_no_fold_div2_mul2_result).toBe(4.450147717014403e-308);
    });
});

describe("float_exprs_35", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_35.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_35: no_fold_demote_promote (instance 0)", () => {
        let _no_fold_demote_promote = module.getExport("no_fold_demote_promote");
        expect(_no_fold_demote_promote).not.toBeUndefined();
        let _no_fold_demote_promote_result = module.invoke(
            _no_fold_demote_promote,
            -1.7176297220569481e-40
        );
        expect(_no_fold_demote_promote_result).toBe(-1.7176275796615013e-40);
    });

    _test("execution of float_exprs_35: no_fold_demote_promote (instance 1)", () => {
        let _no_fold_demote_promote = module.getExport("no_fold_demote_promote");
        expect(_no_fold_demote_promote).not.toBeUndefined();
        let _no_fold_demote_promote_result = module.invoke(
            _no_fold_demote_promote,
            -2.8464775573304055e-26
        );
        expect(_no_fold_demote_promote_result).toBe(-2.846477619188087e-26);
    });

    _test("execution of float_exprs_35: no_fold_demote_promote (instance 2)", () => {
        let _no_fold_demote_promote = module.getExport("no_fold_demote_promote");
        expect(_no_fold_demote_promote).not.toBeUndefined();
        let _no_fold_demote_promote_result = module.invoke(
            _no_fold_demote_promote,
            2.0897069969990923e32
        );
        expect(_no_fold_demote_promote_result).toBe(2.08970700445326e32);
    });

    _test("execution of float_exprs_35: no_fold_demote_promote (instance 3)", () => {
        let _no_fold_demote_promote = module.getExport("no_fold_demote_promote");
        expect(_no_fold_demote_promote).not.toBeUndefined();
        let _no_fold_demote_promote_result = module.invoke(
            _no_fold_demote_promote,
            -4.7074160416121775e-27
        );
        expect(_no_fold_demote_promote_result).toBe(-4.7074161331556024e-27);
    });

    _test("execution of float_exprs_35: no_fold_demote_promote (instance 4)", () => {
        let _no_fold_demote_promote = module.getExport("no_fold_demote_promote");
        expect(_no_fold_demote_promote).not.toBeUndefined();
        let _no_fold_demote_promote_result = module.invoke(
            _no_fold_demote_promote,
            2.335945149795088e31
        );
        expect(_no_fold_demote_promote_result).toBe(2.3359452224542198e31);
    });
});

describe("float_exprs_36", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_36.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 0)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(_no_fold_promote_demote, NaN);
        expect(_no_fold_promote_demote_result).toBe(NaN);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 1)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(_no_fold_promote_demote, 0.0);
        expect(_no_fold_promote_demote_result).toBe(0.0);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 2)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(_no_fold_promote_demote, -0.0);
        expect(_no_fold_promote_demote_result).toBe(-0.0);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 3)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            1.401298464324817e-45
        );
        expect(_no_fold_promote_demote_result).toBe(1.401298464324817e-45);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 4)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            -1.401298464324817e-45
        );
        expect(_no_fold_promote_demote_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 5)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            1.1754942106924411e-38
        );
        expect(_no_fold_promote_demote_result).toBe(1.1754942106924411e-38);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 6)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            -1.1754942106924411e-38
        );
        expect(_no_fold_promote_demote_result).toBe(-1.1754942106924411e-38);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 7)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            1.1754943508222875e-38
        );
        expect(_no_fold_promote_demote_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 8)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            -1.1754943508222875e-38
        );
        expect(_no_fold_promote_demote_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 9)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            3.4028234663852886e38
        );
        expect(_no_fold_promote_demote_result).toBe(3.4028234663852886e38);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 10)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(
            _no_fold_promote_demote,
            -3.4028234663852886e38
        );
        expect(_no_fold_promote_demote_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 11)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(_no_fold_promote_demote, Infinity);
        expect(_no_fold_promote_demote_result).toBe(Infinity);
    });

    _test("execution of float_exprs_36: no_fold_promote_demote (instance 12)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(_no_fold_promote_demote, -Infinity);
        expect(_no_fold_promote_demote_result).toBe(-Infinity);
    });
});

describe("float_exprs_37", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_37.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_37: no_demote_mixed_add (instance 0)", () => {
        let _no_demote_mixed_add = module.getExport("no_demote_mixed_add");
        expect(_no_demote_mixed_add).not.toBeUndefined();
        let _no_demote_mixed_add_result = module.invoke(
            _no_demote_mixed_add,
            4.941266527909197e-29,
            1.8767182723004972e-36
        );
        expect(_no_demote_mixed_add_result).toBe(4.941266675715419e-29);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add (instance 1)", () => {
        let _no_demote_mixed_add = module.getExport("no_demote_mixed_add");
        expect(_no_demote_mixed_add).not.toBeUndefined();
        let _no_demote_mixed_add_result = module.invoke(
            _no_demote_mixed_add,
            140851523637.69385,
            401096441856.0
        );
        expect(_no_demote_mixed_add_result).toBe(541947953152.0);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add (instance 2)", () => {
        let _no_demote_mixed_add = module.getExport("no_demote_mixed_add");
        expect(_no_demote_mixed_add).not.toBeUndefined();
        let _no_demote_mixed_add_result = module.invoke(
            _no_demote_mixed_add,
            2.0831160914192852e-36,
            -6.050095133542437e-37
        );
        expect(_no_demote_mixed_add_result).toBe(1.4781065702760415e-36);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add (instance 3)", () => {
        let _no_demote_mixed_add = module.getExport("no_demote_mixed_add");
        expect(_no_demote_mixed_add).not.toBeUndefined();
        let _no_demote_mixed_add_result = module.invoke(
            _no_demote_mixed_add,
            -1.0032827553674626e-6,
            1.931291793155765e-9
        );
        expect(_no_demote_mixed_add_result).toBe(-1.0013515066020773e-6);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add (instance 4)", () => {
        let _no_demote_mixed_add = module.getExport("no_demote_mixed_add");
        expect(_no_demote_mixed_add).not.toBeUndefined();
        let _no_demote_mixed_add_result = module.invoke(
            _no_demote_mixed_add,
            -1.3840207035752711e-6,
            -5.202814091012642e-13
        );
        expect(_no_demote_mixed_add_result).toBe(-1.3840211749993614e-6);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add_commuted (instance 0)", () => {
        let _no_demote_mixed_add_commuted = module.getExport("no_demote_mixed_add_commuted");
        expect(_no_demote_mixed_add_commuted).not.toBeUndefined();
        let _no_demote_mixed_add_commuted_result = module.invoke(
            _no_demote_mixed_add_commuted,
            1.8767182723004972e-36,
            4.941266527909197e-29
        );
        expect(_no_demote_mixed_add_commuted_result).toBe(4.941266675715419e-29);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add_commuted (instance 1)", () => {
        let _no_demote_mixed_add_commuted = module.getExport("no_demote_mixed_add_commuted");
        expect(_no_demote_mixed_add_commuted).not.toBeUndefined();
        let _no_demote_mixed_add_commuted_result = module.invoke(
            _no_demote_mixed_add_commuted,
            401096441856.0,
            140851523637.69385
        );
        expect(_no_demote_mixed_add_commuted_result).toBe(541947953152.0);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add_commuted (instance 2)", () => {
        let _no_demote_mixed_add_commuted = module.getExport("no_demote_mixed_add_commuted");
        expect(_no_demote_mixed_add_commuted).not.toBeUndefined();
        let _no_demote_mixed_add_commuted_result = module.invoke(
            _no_demote_mixed_add_commuted,
            -6.050095133542437e-37,
            2.0831160914192852e-36
        );
        expect(_no_demote_mixed_add_commuted_result).toBe(1.4781065702760415e-36);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add_commuted (instance 3)", () => {
        let _no_demote_mixed_add_commuted = module.getExport("no_demote_mixed_add_commuted");
        expect(_no_demote_mixed_add_commuted).not.toBeUndefined();
        let _no_demote_mixed_add_commuted_result = module.invoke(
            _no_demote_mixed_add_commuted,
            1.931291793155765e-9,
            -1.0032827553674626e-6
        );
        expect(_no_demote_mixed_add_commuted_result).toBe(-1.0013515066020773e-6);
    });

    _test("execution of float_exprs_37: no_demote_mixed_add_commuted (instance 4)", () => {
        let _no_demote_mixed_add_commuted = module.getExport("no_demote_mixed_add_commuted");
        expect(_no_demote_mixed_add_commuted).not.toBeUndefined();
        let _no_demote_mixed_add_commuted_result = module.invoke(
            _no_demote_mixed_add_commuted,
            -5.202814091012642e-13,
            -1.3840207035752711e-6
        );
        expect(_no_demote_mixed_add_commuted_result).toBe(-1.3840211749993614e-6);
    });
});

describe("float_exprs_38", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_38.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_38: no_demote_mixed_sub (instance 0)", () => {
        let _no_demote_mixed_sub = module.getExport("no_demote_mixed_sub");
        expect(_no_demote_mixed_sub).not.toBeUndefined();
        let _no_demote_mixed_sub_result = module.invoke(
            _no_demote_mixed_sub,
            7.869935327202668e24,
            4.0863470592574095e18
        );
        expect(_no_demote_mixed_sub_result).toBe(7.869930965402192e24);
    });

    _test("execution of float_exprs_38: no_demote_mixed_sub (instance 1)", () => {
        let _no_demote_mixed_sub = module.getExport("no_demote_mixed_sub");
        expect(_no_demote_mixed_sub).not.toBeUndefined();
        let _no_demote_mixed_sub_result = module.invoke(
            _no_demote_mixed_sub,
            -1535841968.9056544,
            239897.28125
        );
        expect(_no_demote_mixed_sub_result).toBe(-1536081920.0);
    });

    _test("execution of float_exprs_38: no_demote_mixed_sub (instance 2)", () => {
        let _no_demote_mixed_sub = module.getExport("no_demote_mixed_sub");
        expect(_no_demote_mixed_sub).not.toBeUndefined();
        let _no_demote_mixed_sub_result = module.invoke(
            _no_demote_mixed_sub,
            -102.19459272722602,
            0.0003942613839171827
        );
        expect(_no_demote_mixed_sub_result).toBe(-102.19498443603516);
    });

    _test("execution of float_exprs_38: no_demote_mixed_sub (instance 3)", () => {
        let _no_demote_mixed_sub = module.getExport("no_demote_mixed_sub");
        expect(_no_demote_mixed_sub).not.toBeUndefined();
        let _no_demote_mixed_sub_result = module.invoke(
            _no_demote_mixed_sub,
            5.645470375565188e-17,
            5.85107700707483e-22
        );
        expect(_no_demote_mixed_sub_result).toBe(5.645411727723358e-17);
    });

    _test("execution of float_exprs_38: no_demote_mixed_sub (instance 4)", () => {
        let _no_demote_mixed_sub = module.getExport("no_demote_mixed_sub");
        expect(_no_demote_mixed_sub).not.toBeUndefined();
        let _no_demote_mixed_sub_result = module.invoke(
            _no_demote_mixed_sub,
            27090.388466832894,
            63120.890625
        );
        expect(_no_demote_mixed_sub_result).toBe(-36030.50390625);
    });
});

describe("float_exprs_39", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_39.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_s_convert_s (instance 0)", () => {
        let _f32_i32_no_fold_trunc_s_convert_s = module.getExport(
            "f32.i32.no_fold_trunc_s_convert_s"
        );
        expect(_f32_i32_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_s_convert_s_result = module.invoke(
            _f32_i32_no_fold_trunc_s_convert_s,
            1.5
        );
        expect(_f32_i32_no_fold_trunc_s_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_s_convert_s (instance 1)", () => {
        let _f32_i32_no_fold_trunc_s_convert_s = module.getExport(
            "f32.i32.no_fold_trunc_s_convert_s"
        );
        expect(_f32_i32_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_s_convert_s_result = module.invoke(
            _f32_i32_no_fold_trunc_s_convert_s,
            -1.5
        );
        expect(_f32_i32_no_fold_trunc_s_convert_s_result).toBe(-1.0);
    });

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_u_convert_s (instance 0)", () => {
        let _f32_i32_no_fold_trunc_u_convert_s = module.getExport(
            "f32.i32.no_fold_trunc_u_convert_s"
        );
        expect(_f32_i32_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_u_convert_s_result = module.invoke(
            _f32_i32_no_fold_trunc_u_convert_s,
            1.5
        );
        expect(_f32_i32_no_fold_trunc_u_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_u_convert_s (instance 1)", () => {
        let _f32_i32_no_fold_trunc_u_convert_s = module.getExport(
            "f32.i32.no_fold_trunc_u_convert_s"
        );
        expect(_f32_i32_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_u_convert_s_result = module.invoke(
            _f32_i32_no_fold_trunc_u_convert_s,
            -0.5
        );
        expect(_f32_i32_no_fold_trunc_u_convert_s_result).toBe(0.0);
    });

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_s_convert_u (instance 0)", () => {
        let _f32_i32_no_fold_trunc_s_convert_u = module.getExport(
            "f32.i32.no_fold_trunc_s_convert_u"
        );
        expect(_f32_i32_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_s_convert_u_result = module.invoke(
            _f32_i32_no_fold_trunc_s_convert_u,
            1.5
        );
        expect(_f32_i32_no_fold_trunc_s_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_s_convert_u (instance 1)", () => {
        let _f32_i32_no_fold_trunc_s_convert_u = module.getExport(
            "f32.i32.no_fold_trunc_s_convert_u"
        );
        expect(_f32_i32_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_s_convert_u_result = module.invoke(
            _f32_i32_no_fold_trunc_s_convert_u,
            -1.5
        );
        expect(_f32_i32_no_fold_trunc_s_convert_u_result).toBe(4294967296.0);
    });

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_u_convert_u (instance 0)", () => {
        let _f32_i32_no_fold_trunc_u_convert_u = module.getExport(
            "f32.i32.no_fold_trunc_u_convert_u"
        );
        expect(_f32_i32_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_u_convert_u_result = module.invoke(
            _f32_i32_no_fold_trunc_u_convert_u,
            1.5
        );
        expect(_f32_i32_no_fold_trunc_u_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i32.no_fold_trunc_u_convert_u (instance 1)", () => {
        let _f32_i32_no_fold_trunc_u_convert_u = module.getExport(
            "f32.i32.no_fold_trunc_u_convert_u"
        );
        expect(_f32_i32_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f32_i32_no_fold_trunc_u_convert_u_result = module.invoke(
            _f32_i32_no_fold_trunc_u_convert_u,
            -0.5
        );
        expect(_f32_i32_no_fold_trunc_u_convert_u_result).toBe(0.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_s_convert_s (instance 0)", () => {
        let _f64_i32_no_fold_trunc_s_convert_s = module.getExport(
            "f64.i32.no_fold_trunc_s_convert_s"
        );
        expect(_f64_i32_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_s_convert_s_result = module.invoke(
            _f64_i32_no_fold_trunc_s_convert_s,
            1.5
        );
        expect(_f64_i32_no_fold_trunc_s_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_s_convert_s (instance 1)", () => {
        let _f64_i32_no_fold_trunc_s_convert_s = module.getExport(
            "f64.i32.no_fold_trunc_s_convert_s"
        );
        expect(_f64_i32_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_s_convert_s_result = module.invoke(
            _f64_i32_no_fold_trunc_s_convert_s,
            -1.5
        );
        expect(_f64_i32_no_fold_trunc_s_convert_s_result).toBe(-1.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_u_convert_s (instance 0)", () => {
        let _f64_i32_no_fold_trunc_u_convert_s = module.getExport(
            "f64.i32.no_fold_trunc_u_convert_s"
        );
        expect(_f64_i32_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_u_convert_s_result = module.invoke(
            _f64_i32_no_fold_trunc_u_convert_s,
            1.5
        );
        expect(_f64_i32_no_fold_trunc_u_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_u_convert_s (instance 1)", () => {
        let _f64_i32_no_fold_trunc_u_convert_s = module.getExport(
            "f64.i32.no_fold_trunc_u_convert_s"
        );
        expect(_f64_i32_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_u_convert_s_result = module.invoke(
            _f64_i32_no_fold_trunc_u_convert_s,
            -0.5
        );
        expect(_f64_i32_no_fold_trunc_u_convert_s_result).toBe(0.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_s_convert_u (instance 0)", () => {
        let _f64_i32_no_fold_trunc_s_convert_u = module.getExport(
            "f64.i32.no_fold_trunc_s_convert_u"
        );
        expect(_f64_i32_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_s_convert_u_result = module.invoke(
            _f64_i32_no_fold_trunc_s_convert_u,
            1.5
        );
        expect(_f64_i32_no_fold_trunc_s_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_s_convert_u (instance 1)", () => {
        let _f64_i32_no_fold_trunc_s_convert_u = module.getExport(
            "f64.i32.no_fold_trunc_s_convert_u"
        );
        expect(_f64_i32_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_s_convert_u_result = module.invoke(
            _f64_i32_no_fold_trunc_s_convert_u,
            -1.5
        );
        expect(_f64_i32_no_fold_trunc_s_convert_u_result).toBe(4294967295.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_u_convert_u (instance 0)", () => {
        let _f64_i32_no_fold_trunc_u_convert_u = module.getExport(
            "f64.i32.no_fold_trunc_u_convert_u"
        );
        expect(_f64_i32_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_u_convert_u_result = module.invoke(
            _f64_i32_no_fold_trunc_u_convert_u,
            1.5
        );
        expect(_f64_i32_no_fold_trunc_u_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i32.no_fold_trunc_u_convert_u (instance 1)", () => {
        let _f64_i32_no_fold_trunc_u_convert_u = module.getExport(
            "f64.i32.no_fold_trunc_u_convert_u"
        );
        expect(_f64_i32_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f64_i32_no_fold_trunc_u_convert_u_result = module.invoke(
            _f64_i32_no_fold_trunc_u_convert_u,
            -0.5
        );
        expect(_f64_i32_no_fold_trunc_u_convert_u_result).toBe(0.0);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_s_convert_s (instance 0)", () => {
        let _f32_i64_no_fold_trunc_s_convert_s = module.getExport(
            "f32.i64.no_fold_trunc_s_convert_s"
        );
        expect(_f32_i64_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_s_convert_s_result = module.invoke(
            _f32_i64_no_fold_trunc_s_convert_s,
            1.5
        );
        expect(_f32_i64_no_fold_trunc_s_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_s_convert_s (instance 1)", () => {
        let _f32_i64_no_fold_trunc_s_convert_s = module.getExport(
            "f32.i64.no_fold_trunc_s_convert_s"
        );
        expect(_f32_i64_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_s_convert_s_result = module.invoke(
            _f32_i64_no_fold_trunc_s_convert_s,
            -1.5
        );
        expect(_f32_i64_no_fold_trunc_s_convert_s_result).toBe(-1.0);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_u_convert_s (instance 0)", () => {
        let _f32_i64_no_fold_trunc_u_convert_s = module.getExport(
            "f32.i64.no_fold_trunc_u_convert_s"
        );
        expect(_f32_i64_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_u_convert_s_result = module.invoke(
            _f32_i64_no_fold_trunc_u_convert_s,
            1.5
        );
        expect(_f32_i64_no_fold_trunc_u_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_u_convert_s (instance 1)", () => {
        let _f32_i64_no_fold_trunc_u_convert_s = module.getExport(
            "f32.i64.no_fold_trunc_u_convert_s"
        );
        expect(_f32_i64_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_u_convert_s_result = module.invoke(
            _f32_i64_no_fold_trunc_u_convert_s,
            -0.5
        );
        expect(_f32_i64_no_fold_trunc_u_convert_s_result).toBe(0.0);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_s_convert_u (instance 0)", () => {
        let _f32_i64_no_fold_trunc_s_convert_u = module.getExport(
            "f32.i64.no_fold_trunc_s_convert_u"
        );
        expect(_f32_i64_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_s_convert_u_result = module.invoke(
            _f32_i64_no_fold_trunc_s_convert_u,
            1.5
        );
        expect(_f32_i64_no_fold_trunc_s_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_s_convert_u (instance 1)", () => {
        let _f32_i64_no_fold_trunc_s_convert_u = module.getExport(
            "f32.i64.no_fold_trunc_s_convert_u"
        );
        expect(_f32_i64_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_s_convert_u_result = module.invoke(
            _f32_i64_no_fold_trunc_s_convert_u,
            -1.5
        );
        expect(_f32_i64_no_fold_trunc_s_convert_u_result).toBe(1.8446744073709552e19);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_u_convert_u (instance 0)", () => {
        let _f32_i64_no_fold_trunc_u_convert_u = module.getExport(
            "f32.i64.no_fold_trunc_u_convert_u"
        );
        expect(_f32_i64_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_u_convert_u_result = module.invoke(
            _f32_i64_no_fold_trunc_u_convert_u,
            1.5
        );
        expect(_f32_i64_no_fold_trunc_u_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f32.i64.no_fold_trunc_u_convert_u (instance 1)", () => {
        let _f32_i64_no_fold_trunc_u_convert_u = module.getExport(
            "f32.i64.no_fold_trunc_u_convert_u"
        );
        expect(_f32_i64_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f32_i64_no_fold_trunc_u_convert_u_result = module.invoke(
            _f32_i64_no_fold_trunc_u_convert_u,
            -0.5
        );
        expect(_f32_i64_no_fold_trunc_u_convert_u_result).toBe(0.0);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_s_convert_s (instance 0)", () => {
        let _f64_i64_no_fold_trunc_s_convert_s = module.getExport(
            "f64.i64.no_fold_trunc_s_convert_s"
        );
        expect(_f64_i64_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_s_convert_s_result = module.invoke(
            _f64_i64_no_fold_trunc_s_convert_s,
            1.5
        );
        expect(_f64_i64_no_fold_trunc_s_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_s_convert_s (instance 1)", () => {
        let _f64_i64_no_fold_trunc_s_convert_s = module.getExport(
            "f64.i64.no_fold_trunc_s_convert_s"
        );
        expect(_f64_i64_no_fold_trunc_s_convert_s).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_s_convert_s_result = module.invoke(
            _f64_i64_no_fold_trunc_s_convert_s,
            -1.5
        );
        expect(_f64_i64_no_fold_trunc_s_convert_s_result).toBe(-1.0);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_u_convert_s (instance 0)", () => {
        let _f64_i64_no_fold_trunc_u_convert_s = module.getExport(
            "f64.i64.no_fold_trunc_u_convert_s"
        );
        expect(_f64_i64_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_u_convert_s_result = module.invoke(
            _f64_i64_no_fold_trunc_u_convert_s,
            1.5
        );
        expect(_f64_i64_no_fold_trunc_u_convert_s_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_u_convert_s (instance 1)", () => {
        let _f64_i64_no_fold_trunc_u_convert_s = module.getExport(
            "f64.i64.no_fold_trunc_u_convert_s"
        );
        expect(_f64_i64_no_fold_trunc_u_convert_s).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_u_convert_s_result = module.invoke(
            _f64_i64_no_fold_trunc_u_convert_s,
            -0.5
        );
        expect(_f64_i64_no_fold_trunc_u_convert_s_result).toBe(0.0);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_s_convert_u (instance 0)", () => {
        let _f64_i64_no_fold_trunc_s_convert_u = module.getExport(
            "f64.i64.no_fold_trunc_s_convert_u"
        );
        expect(_f64_i64_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_s_convert_u_result = module.invoke(
            _f64_i64_no_fold_trunc_s_convert_u,
            1.5
        );
        expect(_f64_i64_no_fold_trunc_s_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_s_convert_u (instance 1)", () => {
        let _f64_i64_no_fold_trunc_s_convert_u = module.getExport(
            "f64.i64.no_fold_trunc_s_convert_u"
        );
        expect(_f64_i64_no_fold_trunc_s_convert_u).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_s_convert_u_result = module.invoke(
            _f64_i64_no_fold_trunc_s_convert_u,
            -1.5
        );
        expect(_f64_i64_no_fold_trunc_s_convert_u_result).toBe(1.8446744073709552e19);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_u_convert_u (instance 0)", () => {
        let _f64_i64_no_fold_trunc_u_convert_u = module.getExport(
            "f64.i64.no_fold_trunc_u_convert_u"
        );
        expect(_f64_i64_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_u_convert_u_result = module.invoke(
            _f64_i64_no_fold_trunc_u_convert_u,
            1.5
        );
        expect(_f64_i64_no_fold_trunc_u_convert_u_result).toBe(1.0);
    });

    _test("execution of float_exprs_39: f64.i64.no_fold_trunc_u_convert_u (instance 1)", () => {
        let _f64_i64_no_fold_trunc_u_convert_u = module.getExport(
            "f64.i64.no_fold_trunc_u_convert_u"
        );
        expect(_f64_i64_no_fold_trunc_u_convert_u).not.toBeUndefined();
        let _f64_i64_no_fold_trunc_u_convert_u_result = module.invoke(
            _f64_i64_no_fold_trunc_u_convert_u,
            -0.5
        );
        expect(_f64_i64_no_fold_trunc_u_convert_u_result).toBe(0.0);
    });
});

describe("float_exprs_40", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_40.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_40: init (instance 0)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_40: init (instance 1)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_40: init (instance 2)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_40: init (instance 3)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_40: check (instance 0)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 0);
        expect(_check_result).toBe(15.1);
    });

    _test("execution of float_exprs_40: check (instance 1)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(15.2);
    });

    _test("execution of float_exprs_40: check (instance 2)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(15.3);
    });

    _test("execution of float_exprs_40: check (instance 3)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(15.4);
    });

    _test("execution of float_exprs_40: run (instance 0)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        module.invoke(_run, 0);
    });

    _test("execution of float_exprs_40: check (instance 4)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 0);
        expect(_check_result).toBe(5.0333333015441895);
    });

    _test("execution of float_exprs_40: check (instance 5)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(5.066666603088379);
    });

    _test("execution of float_exprs_40: check (instance 6)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(5.099999904632568);
    });

    _test("execution of float_exprs_40: check (instance 7)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(5.133333206176758);
    });
});

describe("float_exprs_41", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_41.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_41: init (instance 4)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_41: init (instance 5)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_41: init (instance 6)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_41: init (instance 7)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of float_exprs_41: check (instance 8)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 0);
        expect(_check_result).toBe(15.1);
    });

    _test("execution of float_exprs_41: check (instance 9)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(15.2);
    });

    _test("execution of float_exprs_41: check (instance 10)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(15.3);
    });

    _test("execution of float_exprs_41: check (instance 11)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 24);
        expect(_check_result).toBe(15.4);
    });

    _test("execution of float_exprs_41: run (instance 1)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        module.invoke(_run, 0);
    });

    _test("execution of float_exprs_41: check (instance 12)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 0);
        expect(_check_result).toBe(5.033333333333333);
    });

    _test("execution of float_exprs_41: check (instance 13)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(5.066666666666666);
    });

    _test("execution of float_exprs_41: check (instance 14)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(5.1000000000000005);
    });

    _test("execution of float_exprs_41: check (instance 15)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 24);
        expect(_check_result).toBe(5.133333333333334);
    });
});

describe("float_exprs_42", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_42.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_42: f32.ult (instance 0)", () => {
        let _f32_ult = module.getExport("f32.ult");
        expect(_f32_ult).not.toBeUndefined();
        let _f32_ult_result = module.invoke(_f32_ult, 3.0, 2.0);
        expect(_f32_ult_result).toBe(0);
    });

    _test("execution of float_exprs_42: f32.ult (instance 1)", () => {
        let _f32_ult = module.getExport("f32.ult");
        expect(_f32_ult).not.toBeUndefined();
        let _f32_ult_result = module.invoke(_f32_ult, 2.0, 2.0);
        expect(_f32_ult_result).toBe(0);
    });

    _test("execution of float_exprs_42: f32.ult (instance 2)", () => {
        let _f32_ult = module.getExport("f32.ult");
        expect(_f32_ult).not.toBeUndefined();
        let _f32_ult_result = module.invoke(_f32_ult, 2.0, 3.0);
        expect(_f32_ult_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.ult (instance 3)", () => {
        let _f32_ult = module.getExport("f32.ult");
        expect(_f32_ult).not.toBeUndefined();
        let _f32_ult_result = module.invoke(_f32_ult, 2.0, NaN);
        expect(_f32_ult_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.ule (instance 0)", () => {
        let _f32_ule = module.getExport("f32.ule");
        expect(_f32_ule).not.toBeUndefined();
        let _f32_ule_result = module.invoke(_f32_ule, 3.0, 2.0);
        expect(_f32_ule_result).toBe(0);
    });

    _test("execution of float_exprs_42: f32.ule (instance 1)", () => {
        let _f32_ule = module.getExport("f32.ule");
        expect(_f32_ule).not.toBeUndefined();
        let _f32_ule_result = module.invoke(_f32_ule, 2.0, 2.0);
        expect(_f32_ule_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.ule (instance 2)", () => {
        let _f32_ule = module.getExport("f32.ule");
        expect(_f32_ule).not.toBeUndefined();
        let _f32_ule_result = module.invoke(_f32_ule, 2.0, 3.0);
        expect(_f32_ule_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.ule (instance 3)", () => {
        let _f32_ule = module.getExport("f32.ule");
        expect(_f32_ule).not.toBeUndefined();
        let _f32_ule_result = module.invoke(_f32_ule, 2.0, NaN);
        expect(_f32_ule_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.ugt (instance 0)", () => {
        let _f32_ugt = module.getExport("f32.ugt");
        expect(_f32_ugt).not.toBeUndefined();
        let _f32_ugt_result = module.invoke(_f32_ugt, 3.0, 2.0);
        expect(_f32_ugt_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.ugt (instance 1)", () => {
        let _f32_ugt = module.getExport("f32.ugt");
        expect(_f32_ugt).not.toBeUndefined();
        let _f32_ugt_result = module.invoke(_f32_ugt, 2.0, 2.0);
        expect(_f32_ugt_result).toBe(0);
    });

    _test("execution of float_exprs_42: f32.ugt (instance 2)", () => {
        let _f32_ugt = module.getExport("f32.ugt");
        expect(_f32_ugt).not.toBeUndefined();
        let _f32_ugt_result = module.invoke(_f32_ugt, 2.0, 3.0);
        expect(_f32_ugt_result).toBe(0);
    });

    _test("execution of float_exprs_42: f32.ugt (instance 3)", () => {
        let _f32_ugt = module.getExport("f32.ugt");
        expect(_f32_ugt).not.toBeUndefined();
        let _f32_ugt_result = module.invoke(_f32_ugt, 2.0, NaN);
        expect(_f32_ugt_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.uge (instance 0)", () => {
        let _f32_uge = module.getExport("f32.uge");
        expect(_f32_uge).not.toBeUndefined();
        let _f32_uge_result = module.invoke(_f32_uge, 3.0, 2.0);
        expect(_f32_uge_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.uge (instance 1)", () => {
        let _f32_uge = module.getExport("f32.uge");
        expect(_f32_uge).not.toBeUndefined();
        let _f32_uge_result = module.invoke(_f32_uge, 2.0, 2.0);
        expect(_f32_uge_result).toBe(1);
    });

    _test("execution of float_exprs_42: f32.uge (instance 2)", () => {
        let _f32_uge = module.getExport("f32.uge");
        expect(_f32_uge).not.toBeUndefined();
        let _f32_uge_result = module.invoke(_f32_uge, 2.0, 3.0);
        expect(_f32_uge_result).toBe(0);
    });

    _test("execution of float_exprs_42: f32.uge (instance 3)", () => {
        let _f32_uge = module.getExport("f32.uge");
        expect(_f32_uge).not.toBeUndefined();
        let _f32_uge_result = module.invoke(_f32_uge, 2.0, NaN);
        expect(_f32_uge_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.ult (instance 0)", () => {
        let _f64_ult = module.getExport("f64.ult");
        expect(_f64_ult).not.toBeUndefined();
        let _f64_ult_result = module.invoke(_f64_ult, 3.0, 2.0);
        expect(_f64_ult_result).toBe(0);
    });

    _test("execution of float_exprs_42: f64.ult (instance 1)", () => {
        let _f64_ult = module.getExport("f64.ult");
        expect(_f64_ult).not.toBeUndefined();
        let _f64_ult_result = module.invoke(_f64_ult, 2.0, 2.0);
        expect(_f64_ult_result).toBe(0);
    });

    _test("execution of float_exprs_42: f64.ult (instance 2)", () => {
        let _f64_ult = module.getExport("f64.ult");
        expect(_f64_ult).not.toBeUndefined();
        let _f64_ult_result = module.invoke(_f64_ult, 2.0, 3.0);
        expect(_f64_ult_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.ult (instance 3)", () => {
        let _f64_ult = module.getExport("f64.ult");
        expect(_f64_ult).not.toBeUndefined();
        let _f64_ult_result = module.invoke(_f64_ult, 2.0, NaN);
        expect(_f64_ult_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.ule (instance 0)", () => {
        let _f64_ule = module.getExport("f64.ule");
        expect(_f64_ule).not.toBeUndefined();
        let _f64_ule_result = module.invoke(_f64_ule, 3.0, 2.0);
        expect(_f64_ule_result).toBe(0);
    });

    _test("execution of float_exprs_42: f64.ule (instance 1)", () => {
        let _f64_ule = module.getExport("f64.ule");
        expect(_f64_ule).not.toBeUndefined();
        let _f64_ule_result = module.invoke(_f64_ule, 2.0, 2.0);
        expect(_f64_ule_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.ule (instance 2)", () => {
        let _f64_ule = module.getExport("f64.ule");
        expect(_f64_ule).not.toBeUndefined();
        let _f64_ule_result = module.invoke(_f64_ule, 2.0, 3.0);
        expect(_f64_ule_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.ule (instance 3)", () => {
        let _f64_ule = module.getExport("f64.ule");
        expect(_f64_ule).not.toBeUndefined();
        let _f64_ule_result = module.invoke(_f64_ule, 2.0, NaN);
        expect(_f64_ule_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.ugt (instance 0)", () => {
        let _f64_ugt = module.getExport("f64.ugt");
        expect(_f64_ugt).not.toBeUndefined();
        let _f64_ugt_result = module.invoke(_f64_ugt, 3.0, 2.0);
        expect(_f64_ugt_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.ugt (instance 1)", () => {
        let _f64_ugt = module.getExport("f64.ugt");
        expect(_f64_ugt).not.toBeUndefined();
        let _f64_ugt_result = module.invoke(_f64_ugt, 2.0, 2.0);
        expect(_f64_ugt_result).toBe(0);
    });

    _test("execution of float_exprs_42: f64.ugt (instance 2)", () => {
        let _f64_ugt = module.getExport("f64.ugt");
        expect(_f64_ugt).not.toBeUndefined();
        let _f64_ugt_result = module.invoke(_f64_ugt, 2.0, 3.0);
        expect(_f64_ugt_result).toBe(0);
    });

    _test("execution of float_exprs_42: f64.ugt (instance 3)", () => {
        let _f64_ugt = module.getExport("f64.ugt");
        expect(_f64_ugt).not.toBeUndefined();
        let _f64_ugt_result = module.invoke(_f64_ugt, 2.0, NaN);
        expect(_f64_ugt_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.uge (instance 0)", () => {
        let _f64_uge = module.getExport("f64.uge");
        expect(_f64_uge).not.toBeUndefined();
        let _f64_uge_result = module.invoke(_f64_uge, 3.0, 2.0);
        expect(_f64_uge_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.uge (instance 1)", () => {
        let _f64_uge = module.getExport("f64.uge");
        expect(_f64_uge).not.toBeUndefined();
        let _f64_uge_result = module.invoke(_f64_uge, 2.0, 2.0);
        expect(_f64_uge_result).toBe(1);
    });

    _test("execution of float_exprs_42: f64.uge (instance 2)", () => {
        let _f64_uge = module.getExport("f64.uge");
        expect(_f64_uge).not.toBeUndefined();
        let _f64_uge_result = module.invoke(_f64_uge, 2.0, 3.0);
        expect(_f64_uge_result).toBe(0);
    });

    _test("execution of float_exprs_42: f64.uge (instance 3)", () => {
        let _f64_uge = module.getExport("f64.uge");
        expect(_f64_uge).not.toBeUndefined();
        let _f64_uge_result = module.invoke(_f64_uge, 2.0, NaN);
        expect(_f64_uge_result).toBe(1);
    });
});

describe("float_exprs_43", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_43.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_43: f32.no_fold_lt_select (instance 0)", () => {
        let _f32_no_fold_lt_select = module.getExport("f32.no_fold_lt_select");
        expect(_f32_no_fold_lt_select).not.toBeUndefined();
        let _f32_no_fold_lt_select_result = module.invoke(_f32_no_fold_lt_select, 0.0, NaN);
        expect(_f32_no_fold_lt_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f32.no_fold_lt_select (instance 1)", () => {
        let _f32_no_fold_lt_select = module.getExport("f32.no_fold_lt_select");
        expect(_f32_no_fold_lt_select).not.toBeUndefined();
        let _f32_no_fold_lt_select_result = module.invoke(_f32_no_fold_lt_select, NaN, 0.0);
        expect(_f32_no_fold_lt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_lt_select (instance 2)", () => {
        let _f32_no_fold_lt_select = module.getExport("f32.no_fold_lt_select");
        expect(_f32_no_fold_lt_select).not.toBeUndefined();
        let _f32_no_fold_lt_select_result = module.invoke(_f32_no_fold_lt_select, 0.0, -0.0);
        expect(_f32_no_fold_lt_select_result).toBe(-0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_lt_select (instance 3)", () => {
        let _f32_no_fold_lt_select = module.getExport("f32.no_fold_lt_select");
        expect(_f32_no_fold_lt_select).not.toBeUndefined();
        let _f32_no_fold_lt_select_result = module.invoke(_f32_no_fold_lt_select, -0.0, 0.0);
        expect(_f32_no_fold_lt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_le_select (instance 0)", () => {
        let _f32_no_fold_le_select = module.getExport("f32.no_fold_le_select");
        expect(_f32_no_fold_le_select).not.toBeUndefined();
        let _f32_no_fold_le_select_result = module.invoke(_f32_no_fold_le_select, 0.0, NaN);
        expect(_f32_no_fold_le_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f32.no_fold_le_select (instance 1)", () => {
        let _f32_no_fold_le_select = module.getExport("f32.no_fold_le_select");
        expect(_f32_no_fold_le_select).not.toBeUndefined();
        let _f32_no_fold_le_select_result = module.invoke(_f32_no_fold_le_select, NaN, 0.0);
        expect(_f32_no_fold_le_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_le_select (instance 2)", () => {
        let _f32_no_fold_le_select = module.getExport("f32.no_fold_le_select");
        expect(_f32_no_fold_le_select).not.toBeUndefined();
        let _f32_no_fold_le_select_result = module.invoke(_f32_no_fold_le_select, 0.0, -0.0);
        expect(_f32_no_fold_le_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_le_select (instance 3)", () => {
        let _f32_no_fold_le_select = module.getExport("f32.no_fold_le_select");
        expect(_f32_no_fold_le_select).not.toBeUndefined();
        let _f32_no_fold_le_select_result = module.invoke(_f32_no_fold_le_select, -0.0, 0.0);
        expect(_f32_no_fold_le_select_result).toBe(-0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_gt_select (instance 0)", () => {
        let _f32_no_fold_gt_select = module.getExport("f32.no_fold_gt_select");
        expect(_f32_no_fold_gt_select).not.toBeUndefined();
        let _f32_no_fold_gt_select_result = module.invoke(_f32_no_fold_gt_select, 0.0, NaN);
        expect(_f32_no_fold_gt_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f32.no_fold_gt_select (instance 1)", () => {
        let _f32_no_fold_gt_select = module.getExport("f32.no_fold_gt_select");
        expect(_f32_no_fold_gt_select).not.toBeUndefined();
        let _f32_no_fold_gt_select_result = module.invoke(_f32_no_fold_gt_select, NaN, 0.0);
        expect(_f32_no_fold_gt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_gt_select (instance 2)", () => {
        let _f32_no_fold_gt_select = module.getExport("f32.no_fold_gt_select");
        expect(_f32_no_fold_gt_select).not.toBeUndefined();
        let _f32_no_fold_gt_select_result = module.invoke(_f32_no_fold_gt_select, 0.0, -0.0);
        expect(_f32_no_fold_gt_select_result).toBe(-0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_gt_select (instance 3)", () => {
        let _f32_no_fold_gt_select = module.getExport("f32.no_fold_gt_select");
        expect(_f32_no_fold_gt_select).not.toBeUndefined();
        let _f32_no_fold_gt_select_result = module.invoke(_f32_no_fold_gt_select, -0.0, 0.0);
        expect(_f32_no_fold_gt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_ge_select (instance 0)", () => {
        let _f32_no_fold_ge_select = module.getExport("f32.no_fold_ge_select");
        expect(_f32_no_fold_ge_select).not.toBeUndefined();
        let _f32_no_fold_ge_select_result = module.invoke(_f32_no_fold_ge_select, 0.0, NaN);
        expect(_f32_no_fold_ge_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f32.no_fold_ge_select (instance 1)", () => {
        let _f32_no_fold_ge_select = module.getExport("f32.no_fold_ge_select");
        expect(_f32_no_fold_ge_select).not.toBeUndefined();
        let _f32_no_fold_ge_select_result = module.invoke(_f32_no_fold_ge_select, NaN, 0.0);
        expect(_f32_no_fold_ge_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_ge_select (instance 2)", () => {
        let _f32_no_fold_ge_select = module.getExport("f32.no_fold_ge_select");
        expect(_f32_no_fold_ge_select).not.toBeUndefined();
        let _f32_no_fold_ge_select_result = module.invoke(_f32_no_fold_ge_select, 0.0, -0.0);
        expect(_f32_no_fold_ge_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f32.no_fold_ge_select (instance 3)", () => {
        let _f32_no_fold_ge_select = module.getExport("f32.no_fold_ge_select");
        expect(_f32_no_fold_ge_select).not.toBeUndefined();
        let _f32_no_fold_ge_select_result = module.invoke(_f32_no_fold_ge_select, -0.0, 0.0);
        expect(_f32_no_fold_ge_select_result).toBe(-0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_lt_select (instance 0)", () => {
        let _f64_no_fold_lt_select = module.getExport("f64.no_fold_lt_select");
        expect(_f64_no_fold_lt_select).not.toBeUndefined();
        let _f64_no_fold_lt_select_result = module.invoke(_f64_no_fold_lt_select, 0.0, NaN);
        expect(_f64_no_fold_lt_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f64.no_fold_lt_select (instance 1)", () => {
        let _f64_no_fold_lt_select = module.getExport("f64.no_fold_lt_select");
        expect(_f64_no_fold_lt_select).not.toBeUndefined();
        let _f64_no_fold_lt_select_result = module.invoke(_f64_no_fold_lt_select, NaN, 0.0);
        expect(_f64_no_fold_lt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_lt_select (instance 2)", () => {
        let _f64_no_fold_lt_select = module.getExport("f64.no_fold_lt_select");
        expect(_f64_no_fold_lt_select).not.toBeUndefined();
        let _f64_no_fold_lt_select_result = module.invoke(_f64_no_fold_lt_select, 0.0, -0.0);
        expect(_f64_no_fold_lt_select_result).toBe(-0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_lt_select (instance 3)", () => {
        let _f64_no_fold_lt_select = module.getExport("f64.no_fold_lt_select");
        expect(_f64_no_fold_lt_select).not.toBeUndefined();
        let _f64_no_fold_lt_select_result = module.invoke(_f64_no_fold_lt_select, -0.0, 0.0);
        expect(_f64_no_fold_lt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_le_select (instance 0)", () => {
        let _f64_no_fold_le_select = module.getExport("f64.no_fold_le_select");
        expect(_f64_no_fold_le_select).not.toBeUndefined();
        let _f64_no_fold_le_select_result = module.invoke(_f64_no_fold_le_select, 0.0, NaN);
        expect(_f64_no_fold_le_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f64.no_fold_le_select (instance 1)", () => {
        let _f64_no_fold_le_select = module.getExport("f64.no_fold_le_select");
        expect(_f64_no_fold_le_select).not.toBeUndefined();
        let _f64_no_fold_le_select_result = module.invoke(_f64_no_fold_le_select, NaN, 0.0);
        expect(_f64_no_fold_le_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_le_select (instance 2)", () => {
        let _f64_no_fold_le_select = module.getExport("f64.no_fold_le_select");
        expect(_f64_no_fold_le_select).not.toBeUndefined();
        let _f64_no_fold_le_select_result = module.invoke(_f64_no_fold_le_select, 0.0, -0.0);
        expect(_f64_no_fold_le_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_le_select (instance 3)", () => {
        let _f64_no_fold_le_select = module.getExport("f64.no_fold_le_select");
        expect(_f64_no_fold_le_select).not.toBeUndefined();
        let _f64_no_fold_le_select_result = module.invoke(_f64_no_fold_le_select, -0.0, 0.0);
        expect(_f64_no_fold_le_select_result).toBe(-0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_gt_select (instance 0)", () => {
        let _f64_no_fold_gt_select = module.getExport("f64.no_fold_gt_select");
        expect(_f64_no_fold_gt_select).not.toBeUndefined();
        let _f64_no_fold_gt_select_result = module.invoke(_f64_no_fold_gt_select, 0.0, NaN);
        expect(_f64_no_fold_gt_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f64.no_fold_gt_select (instance 1)", () => {
        let _f64_no_fold_gt_select = module.getExport("f64.no_fold_gt_select");
        expect(_f64_no_fold_gt_select).not.toBeUndefined();
        let _f64_no_fold_gt_select_result = module.invoke(_f64_no_fold_gt_select, NaN, 0.0);
        expect(_f64_no_fold_gt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_gt_select (instance 2)", () => {
        let _f64_no_fold_gt_select = module.getExport("f64.no_fold_gt_select");
        expect(_f64_no_fold_gt_select).not.toBeUndefined();
        let _f64_no_fold_gt_select_result = module.invoke(_f64_no_fold_gt_select, 0.0, -0.0);
        expect(_f64_no_fold_gt_select_result).toBe(-0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_gt_select (instance 3)", () => {
        let _f64_no_fold_gt_select = module.getExport("f64.no_fold_gt_select");
        expect(_f64_no_fold_gt_select).not.toBeUndefined();
        let _f64_no_fold_gt_select_result = module.invoke(_f64_no_fold_gt_select, -0.0, 0.0);
        expect(_f64_no_fold_gt_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_ge_select (instance 0)", () => {
        let _f64_no_fold_ge_select = module.getExport("f64.no_fold_ge_select");
        expect(_f64_no_fold_ge_select).not.toBeUndefined();
        let _f64_no_fold_ge_select_result = module.invoke(_f64_no_fold_ge_select, 0.0, NaN);
        expect(_f64_no_fold_ge_select_result).toBe(NaN);
    });

    _test("execution of float_exprs_43: f64.no_fold_ge_select (instance 1)", () => {
        let _f64_no_fold_ge_select = module.getExport("f64.no_fold_ge_select");
        expect(_f64_no_fold_ge_select).not.toBeUndefined();
        let _f64_no_fold_ge_select_result = module.invoke(_f64_no_fold_ge_select, NaN, 0.0);
        expect(_f64_no_fold_ge_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_ge_select (instance 2)", () => {
        let _f64_no_fold_ge_select = module.getExport("f64.no_fold_ge_select");
        expect(_f64_no_fold_ge_select).not.toBeUndefined();
        let _f64_no_fold_ge_select_result = module.invoke(_f64_no_fold_ge_select, 0.0, -0.0);
        expect(_f64_no_fold_ge_select_result).toBe(0.0);
    });

    _test("execution of float_exprs_43: f64.no_fold_ge_select (instance 3)", () => {
        let _f64_no_fold_ge_select = module.getExport("f64.no_fold_ge_select");
        expect(_f64_no_fold_ge_select).not.toBeUndefined();
        let _f64_no_fold_ge_select_result = module.invoke(_f64_no_fold_ge_select, -0.0, 0.0);
        expect(_f64_no_fold_ge_select_result).toBe(-0.0);
    });
});

describe("float_exprs_44", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_44.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_44: f32.no_fold_lt_if (instance 0)", () => {
        let _f32_no_fold_lt_if = module.getExport("f32.no_fold_lt_if");
        expect(_f32_no_fold_lt_if).not.toBeUndefined();
        let _f32_no_fold_lt_if_result = module.invoke(_f32_no_fold_lt_if, 0.0, NaN);
        expect(_f32_no_fold_lt_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f32.no_fold_lt_if (instance 1)", () => {
        let _f32_no_fold_lt_if = module.getExport("f32.no_fold_lt_if");
        expect(_f32_no_fold_lt_if).not.toBeUndefined();
        let _f32_no_fold_lt_if_result = module.invoke(_f32_no_fold_lt_if, NaN, 0.0);
        expect(_f32_no_fold_lt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_lt_if (instance 2)", () => {
        let _f32_no_fold_lt_if = module.getExport("f32.no_fold_lt_if");
        expect(_f32_no_fold_lt_if).not.toBeUndefined();
        let _f32_no_fold_lt_if_result = module.invoke(_f32_no_fold_lt_if, 0.0, -0.0);
        expect(_f32_no_fold_lt_if_result).toBe(-0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_lt_if (instance 3)", () => {
        let _f32_no_fold_lt_if = module.getExport("f32.no_fold_lt_if");
        expect(_f32_no_fold_lt_if).not.toBeUndefined();
        let _f32_no_fold_lt_if_result = module.invoke(_f32_no_fold_lt_if, -0.0, 0.0);
        expect(_f32_no_fold_lt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_le_if (instance 0)", () => {
        let _f32_no_fold_le_if = module.getExport("f32.no_fold_le_if");
        expect(_f32_no_fold_le_if).not.toBeUndefined();
        let _f32_no_fold_le_if_result = module.invoke(_f32_no_fold_le_if, 0.0, NaN);
        expect(_f32_no_fold_le_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f32.no_fold_le_if (instance 1)", () => {
        let _f32_no_fold_le_if = module.getExport("f32.no_fold_le_if");
        expect(_f32_no_fold_le_if).not.toBeUndefined();
        let _f32_no_fold_le_if_result = module.invoke(_f32_no_fold_le_if, NaN, 0.0);
        expect(_f32_no_fold_le_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_le_if (instance 2)", () => {
        let _f32_no_fold_le_if = module.getExport("f32.no_fold_le_if");
        expect(_f32_no_fold_le_if).not.toBeUndefined();
        let _f32_no_fold_le_if_result = module.invoke(_f32_no_fold_le_if, 0.0, -0.0);
        expect(_f32_no_fold_le_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_le_if (instance 3)", () => {
        let _f32_no_fold_le_if = module.getExport("f32.no_fold_le_if");
        expect(_f32_no_fold_le_if).not.toBeUndefined();
        let _f32_no_fold_le_if_result = module.invoke(_f32_no_fold_le_if, -0.0, 0.0);
        expect(_f32_no_fold_le_if_result).toBe(-0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_gt_if (instance 0)", () => {
        let _f32_no_fold_gt_if = module.getExport("f32.no_fold_gt_if");
        expect(_f32_no_fold_gt_if).not.toBeUndefined();
        let _f32_no_fold_gt_if_result = module.invoke(_f32_no_fold_gt_if, 0.0, NaN);
        expect(_f32_no_fold_gt_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f32.no_fold_gt_if (instance 1)", () => {
        let _f32_no_fold_gt_if = module.getExport("f32.no_fold_gt_if");
        expect(_f32_no_fold_gt_if).not.toBeUndefined();
        let _f32_no_fold_gt_if_result = module.invoke(_f32_no_fold_gt_if, NaN, 0.0);
        expect(_f32_no_fold_gt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_gt_if (instance 2)", () => {
        let _f32_no_fold_gt_if = module.getExport("f32.no_fold_gt_if");
        expect(_f32_no_fold_gt_if).not.toBeUndefined();
        let _f32_no_fold_gt_if_result = module.invoke(_f32_no_fold_gt_if, 0.0, -0.0);
        expect(_f32_no_fold_gt_if_result).toBe(-0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_gt_if (instance 3)", () => {
        let _f32_no_fold_gt_if = module.getExport("f32.no_fold_gt_if");
        expect(_f32_no_fold_gt_if).not.toBeUndefined();
        let _f32_no_fold_gt_if_result = module.invoke(_f32_no_fold_gt_if, -0.0, 0.0);
        expect(_f32_no_fold_gt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_ge_if (instance 0)", () => {
        let _f32_no_fold_ge_if = module.getExport("f32.no_fold_ge_if");
        expect(_f32_no_fold_ge_if).not.toBeUndefined();
        let _f32_no_fold_ge_if_result = module.invoke(_f32_no_fold_ge_if, 0.0, NaN);
        expect(_f32_no_fold_ge_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f32.no_fold_ge_if (instance 1)", () => {
        let _f32_no_fold_ge_if = module.getExport("f32.no_fold_ge_if");
        expect(_f32_no_fold_ge_if).not.toBeUndefined();
        let _f32_no_fold_ge_if_result = module.invoke(_f32_no_fold_ge_if, NaN, 0.0);
        expect(_f32_no_fold_ge_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_ge_if (instance 2)", () => {
        let _f32_no_fold_ge_if = module.getExport("f32.no_fold_ge_if");
        expect(_f32_no_fold_ge_if).not.toBeUndefined();
        let _f32_no_fold_ge_if_result = module.invoke(_f32_no_fold_ge_if, 0.0, -0.0);
        expect(_f32_no_fold_ge_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f32.no_fold_ge_if (instance 3)", () => {
        let _f32_no_fold_ge_if = module.getExport("f32.no_fold_ge_if");
        expect(_f32_no_fold_ge_if).not.toBeUndefined();
        let _f32_no_fold_ge_if_result = module.invoke(_f32_no_fold_ge_if, -0.0, 0.0);
        expect(_f32_no_fold_ge_if_result).toBe(-0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_lt_if (instance 0)", () => {
        let _f64_no_fold_lt_if = module.getExport("f64.no_fold_lt_if");
        expect(_f64_no_fold_lt_if).not.toBeUndefined();
        let _f64_no_fold_lt_if_result = module.invoke(_f64_no_fold_lt_if, 0.0, NaN);
        expect(_f64_no_fold_lt_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f64.no_fold_lt_if (instance 1)", () => {
        let _f64_no_fold_lt_if = module.getExport("f64.no_fold_lt_if");
        expect(_f64_no_fold_lt_if).not.toBeUndefined();
        let _f64_no_fold_lt_if_result = module.invoke(_f64_no_fold_lt_if, NaN, 0.0);
        expect(_f64_no_fold_lt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_lt_if (instance 2)", () => {
        let _f64_no_fold_lt_if = module.getExport("f64.no_fold_lt_if");
        expect(_f64_no_fold_lt_if).not.toBeUndefined();
        let _f64_no_fold_lt_if_result = module.invoke(_f64_no_fold_lt_if, 0.0, -0.0);
        expect(_f64_no_fold_lt_if_result).toBe(-0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_lt_if (instance 3)", () => {
        let _f64_no_fold_lt_if = module.getExport("f64.no_fold_lt_if");
        expect(_f64_no_fold_lt_if).not.toBeUndefined();
        let _f64_no_fold_lt_if_result = module.invoke(_f64_no_fold_lt_if, -0.0, 0.0);
        expect(_f64_no_fold_lt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_le_if (instance 0)", () => {
        let _f64_no_fold_le_if = module.getExport("f64.no_fold_le_if");
        expect(_f64_no_fold_le_if).not.toBeUndefined();
        let _f64_no_fold_le_if_result = module.invoke(_f64_no_fold_le_if, 0.0, NaN);
        expect(_f64_no_fold_le_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f64.no_fold_le_if (instance 1)", () => {
        let _f64_no_fold_le_if = module.getExport("f64.no_fold_le_if");
        expect(_f64_no_fold_le_if).not.toBeUndefined();
        let _f64_no_fold_le_if_result = module.invoke(_f64_no_fold_le_if, NaN, 0.0);
        expect(_f64_no_fold_le_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_le_if (instance 2)", () => {
        let _f64_no_fold_le_if = module.getExport("f64.no_fold_le_if");
        expect(_f64_no_fold_le_if).not.toBeUndefined();
        let _f64_no_fold_le_if_result = module.invoke(_f64_no_fold_le_if, 0.0, -0.0);
        expect(_f64_no_fold_le_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_le_if (instance 3)", () => {
        let _f64_no_fold_le_if = module.getExport("f64.no_fold_le_if");
        expect(_f64_no_fold_le_if).not.toBeUndefined();
        let _f64_no_fold_le_if_result = module.invoke(_f64_no_fold_le_if, -0.0, 0.0);
        expect(_f64_no_fold_le_if_result).toBe(-0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_gt_if (instance 0)", () => {
        let _f64_no_fold_gt_if = module.getExport("f64.no_fold_gt_if");
        expect(_f64_no_fold_gt_if).not.toBeUndefined();
        let _f64_no_fold_gt_if_result = module.invoke(_f64_no_fold_gt_if, 0.0, NaN);
        expect(_f64_no_fold_gt_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f64.no_fold_gt_if (instance 1)", () => {
        let _f64_no_fold_gt_if = module.getExport("f64.no_fold_gt_if");
        expect(_f64_no_fold_gt_if).not.toBeUndefined();
        let _f64_no_fold_gt_if_result = module.invoke(_f64_no_fold_gt_if, NaN, 0.0);
        expect(_f64_no_fold_gt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_gt_if (instance 2)", () => {
        let _f64_no_fold_gt_if = module.getExport("f64.no_fold_gt_if");
        expect(_f64_no_fold_gt_if).not.toBeUndefined();
        let _f64_no_fold_gt_if_result = module.invoke(_f64_no_fold_gt_if, 0.0, -0.0);
        expect(_f64_no_fold_gt_if_result).toBe(-0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_gt_if (instance 3)", () => {
        let _f64_no_fold_gt_if = module.getExport("f64.no_fold_gt_if");
        expect(_f64_no_fold_gt_if).not.toBeUndefined();
        let _f64_no_fold_gt_if_result = module.invoke(_f64_no_fold_gt_if, -0.0, 0.0);
        expect(_f64_no_fold_gt_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_ge_if (instance 0)", () => {
        let _f64_no_fold_ge_if = module.getExport("f64.no_fold_ge_if");
        expect(_f64_no_fold_ge_if).not.toBeUndefined();
        let _f64_no_fold_ge_if_result = module.invoke(_f64_no_fold_ge_if, 0.0, NaN);
        expect(_f64_no_fold_ge_if_result).toBe(NaN);
    });

    _test("execution of float_exprs_44: f64.no_fold_ge_if (instance 1)", () => {
        let _f64_no_fold_ge_if = module.getExport("f64.no_fold_ge_if");
        expect(_f64_no_fold_ge_if).not.toBeUndefined();
        let _f64_no_fold_ge_if_result = module.invoke(_f64_no_fold_ge_if, NaN, 0.0);
        expect(_f64_no_fold_ge_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_ge_if (instance 2)", () => {
        let _f64_no_fold_ge_if = module.getExport("f64.no_fold_ge_if");
        expect(_f64_no_fold_ge_if).not.toBeUndefined();
        let _f64_no_fold_ge_if_result = module.invoke(_f64_no_fold_ge_if, 0.0, -0.0);
        expect(_f64_no_fold_ge_if_result).toBe(0.0);
    });

    _test("execution of float_exprs_44: f64.no_fold_ge_if (instance 3)", () => {
        let _f64_no_fold_ge_if = module.getExport("f64.no_fold_ge_if");
        expect(_f64_no_fold_ge_if).not.toBeUndefined();
        let _f64_no_fold_ge_if_result = module.invoke(_f64_no_fold_ge_if, -0.0, 0.0);
        expect(_f64_no_fold_ge_if_result).toBe(-0.0);
    });
});

describe("float_exprs_45", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_45.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_45: f32.no_fold_lt_select_to_abs (instance 0)", () => {
        let _f32_no_fold_lt_select_to_abs = module.getExport("f32.no_fold_lt_select_to_abs");
        expect(_f32_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_select_to_abs_result = module.invoke(
            _f32_no_fold_lt_select_to_abs,
            NaN
        );
        expect(_f32_no_fold_lt_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_lt_select_to_abs (instance 1)", () => {
        let _f32_no_fold_lt_select_to_abs = module.getExport("f32.no_fold_lt_select_to_abs");
        expect(_f32_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_select_to_abs_result = module.invoke(
            _f32_no_fold_lt_select_to_abs,
            -NaN
        );
        expect(_f32_no_fold_lt_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_lt_select_to_abs (instance 2)", () => {
        let _f32_no_fold_lt_select_to_abs = module.getExport("f32.no_fold_lt_select_to_abs");
        expect(_f32_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_select_to_abs_result = module.invoke(
            _f32_no_fold_lt_select_to_abs,
            0.0
        );
        expect(_f32_no_fold_lt_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f32.no_fold_lt_select_to_abs (instance 3)", () => {
        let _f32_no_fold_lt_select_to_abs = module.getExport("f32.no_fold_lt_select_to_abs");
        expect(_f32_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_select_to_abs_result = module.invoke(
            _f32_no_fold_lt_select_to_abs,
            -0.0
        );
        expect(_f32_no_fold_lt_select_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_45: f32.no_fold_le_select_to_abs (instance 0)", () => {
        let _f32_no_fold_le_select_to_abs = module.getExport("f32.no_fold_le_select_to_abs");
        expect(_f32_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_select_to_abs_result = module.invoke(
            _f32_no_fold_le_select_to_abs,
            NaN
        );
        expect(_f32_no_fold_le_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_le_select_to_abs (instance 1)", () => {
        let _f32_no_fold_le_select_to_abs = module.getExport("f32.no_fold_le_select_to_abs");
        expect(_f32_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_select_to_abs_result = module.invoke(
            _f32_no_fold_le_select_to_abs,
            -NaN
        );
        expect(_f32_no_fold_le_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_le_select_to_abs (instance 2)", () => {
        let _f32_no_fold_le_select_to_abs = module.getExport("f32.no_fold_le_select_to_abs");
        expect(_f32_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_select_to_abs_result = module.invoke(
            _f32_no_fold_le_select_to_abs,
            0.0
        );
        expect(_f32_no_fold_le_select_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_45: f32.no_fold_le_select_to_abs (instance 3)", () => {
        let _f32_no_fold_le_select_to_abs = module.getExport("f32.no_fold_le_select_to_abs");
        expect(_f32_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_select_to_abs_result = module.invoke(
            _f32_no_fold_le_select_to_abs,
            -0.0
        );
        expect(_f32_no_fold_le_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f32.no_fold_gt_select_to_abs (instance 0)", () => {
        let _f32_no_fold_gt_select_to_abs = module.getExport("f32.no_fold_gt_select_to_abs");
        expect(_f32_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_select_to_abs_result = module.invoke(
            _f32_no_fold_gt_select_to_abs,
            NaN
        );
        expect(_f32_no_fold_gt_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_gt_select_to_abs (instance 1)", () => {
        let _f32_no_fold_gt_select_to_abs = module.getExport("f32.no_fold_gt_select_to_abs");
        expect(_f32_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_select_to_abs_result = module.invoke(
            _f32_no_fold_gt_select_to_abs,
            -NaN
        );
        expect(_f32_no_fold_gt_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_gt_select_to_abs (instance 2)", () => {
        let _f32_no_fold_gt_select_to_abs = module.getExport("f32.no_fold_gt_select_to_abs");
        expect(_f32_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_select_to_abs_result = module.invoke(
            _f32_no_fold_gt_select_to_abs,
            0.0
        );
        expect(_f32_no_fold_gt_select_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_45: f32.no_fold_gt_select_to_abs (instance 3)", () => {
        let _f32_no_fold_gt_select_to_abs = module.getExport("f32.no_fold_gt_select_to_abs");
        expect(_f32_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_select_to_abs_result = module.invoke(
            _f32_no_fold_gt_select_to_abs,
            -0.0
        );
        expect(_f32_no_fold_gt_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f32.no_fold_ge_select_to_abs (instance 0)", () => {
        let _f32_no_fold_ge_select_to_abs = module.getExport("f32.no_fold_ge_select_to_abs");
        expect(_f32_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_select_to_abs_result = module.invoke(
            _f32_no_fold_ge_select_to_abs,
            NaN
        );
        expect(_f32_no_fold_ge_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_ge_select_to_abs (instance 1)", () => {
        let _f32_no_fold_ge_select_to_abs = module.getExport("f32.no_fold_ge_select_to_abs");
        expect(_f32_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_select_to_abs_result = module.invoke(
            _f32_no_fold_ge_select_to_abs,
            -NaN
        );
        expect(_f32_no_fold_ge_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f32.no_fold_ge_select_to_abs (instance 2)", () => {
        let _f32_no_fold_ge_select_to_abs = module.getExport("f32.no_fold_ge_select_to_abs");
        expect(_f32_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_select_to_abs_result = module.invoke(
            _f32_no_fold_ge_select_to_abs,
            0.0
        );
        expect(_f32_no_fold_ge_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f32.no_fold_ge_select_to_abs (instance 3)", () => {
        let _f32_no_fold_ge_select_to_abs = module.getExport("f32.no_fold_ge_select_to_abs");
        expect(_f32_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_select_to_abs_result = module.invoke(
            _f32_no_fold_ge_select_to_abs,
            -0.0
        );
        expect(_f32_no_fold_ge_select_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_lt_select_to_abs (instance 0)", () => {
        let _f64_no_fold_lt_select_to_abs = module.getExport("f64.no_fold_lt_select_to_abs");
        expect(_f64_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_select_to_abs_result = module.invoke(
            _f64_no_fold_lt_select_to_abs,
            NaN
        );
        expect(_f64_no_fold_lt_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_lt_select_to_abs (instance 1)", () => {
        let _f64_no_fold_lt_select_to_abs = module.getExport("f64.no_fold_lt_select_to_abs");
        expect(_f64_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_select_to_abs_result = module.invoke(
            _f64_no_fold_lt_select_to_abs,
            -NaN
        );
        expect(_f64_no_fold_lt_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_lt_select_to_abs (instance 2)", () => {
        let _f64_no_fold_lt_select_to_abs = module.getExport("f64.no_fold_lt_select_to_abs");
        expect(_f64_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_select_to_abs_result = module.invoke(
            _f64_no_fold_lt_select_to_abs,
            0.0
        );
        expect(_f64_no_fold_lt_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_lt_select_to_abs (instance 3)", () => {
        let _f64_no_fold_lt_select_to_abs = module.getExport("f64.no_fold_lt_select_to_abs");
        expect(_f64_no_fold_lt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_select_to_abs_result = module.invoke(
            _f64_no_fold_lt_select_to_abs,
            -0.0
        );
        expect(_f64_no_fold_lt_select_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_le_select_to_abs (instance 0)", () => {
        let _f64_no_fold_le_select_to_abs = module.getExport("f64.no_fold_le_select_to_abs");
        expect(_f64_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_select_to_abs_result = module.invoke(
            _f64_no_fold_le_select_to_abs,
            NaN
        );
        expect(_f64_no_fold_le_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_le_select_to_abs (instance 1)", () => {
        let _f64_no_fold_le_select_to_abs = module.getExport("f64.no_fold_le_select_to_abs");
        expect(_f64_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_select_to_abs_result = module.invoke(
            _f64_no_fold_le_select_to_abs,
            -NaN
        );
        expect(_f64_no_fold_le_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_le_select_to_abs (instance 2)", () => {
        let _f64_no_fold_le_select_to_abs = module.getExport("f64.no_fold_le_select_to_abs");
        expect(_f64_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_select_to_abs_result = module.invoke(
            _f64_no_fold_le_select_to_abs,
            0.0
        );
        expect(_f64_no_fold_le_select_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_le_select_to_abs (instance 3)", () => {
        let _f64_no_fold_le_select_to_abs = module.getExport("f64.no_fold_le_select_to_abs");
        expect(_f64_no_fold_le_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_select_to_abs_result = module.invoke(
            _f64_no_fold_le_select_to_abs,
            -0.0
        );
        expect(_f64_no_fold_le_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_gt_select_to_abs (instance 0)", () => {
        let _f64_no_fold_gt_select_to_abs = module.getExport("f64.no_fold_gt_select_to_abs");
        expect(_f64_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_select_to_abs_result = module.invoke(
            _f64_no_fold_gt_select_to_abs,
            NaN
        );
        expect(_f64_no_fold_gt_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_gt_select_to_abs (instance 1)", () => {
        let _f64_no_fold_gt_select_to_abs = module.getExport("f64.no_fold_gt_select_to_abs");
        expect(_f64_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_select_to_abs_result = module.invoke(
            _f64_no_fold_gt_select_to_abs,
            -NaN
        );
        expect(_f64_no_fold_gt_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_gt_select_to_abs (instance 2)", () => {
        let _f64_no_fold_gt_select_to_abs = module.getExport("f64.no_fold_gt_select_to_abs");
        expect(_f64_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_select_to_abs_result = module.invoke(
            _f64_no_fold_gt_select_to_abs,
            0.0
        );
        expect(_f64_no_fold_gt_select_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_gt_select_to_abs (instance 3)", () => {
        let _f64_no_fold_gt_select_to_abs = module.getExport("f64.no_fold_gt_select_to_abs");
        expect(_f64_no_fold_gt_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_select_to_abs_result = module.invoke(
            _f64_no_fold_gt_select_to_abs,
            -0.0
        );
        expect(_f64_no_fold_gt_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_ge_select_to_abs (instance 0)", () => {
        let _f64_no_fold_ge_select_to_abs = module.getExport("f64.no_fold_ge_select_to_abs");
        expect(_f64_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_select_to_abs_result = module.invoke(
            _f64_no_fold_ge_select_to_abs,
            NaN
        );
        expect(_f64_no_fold_ge_select_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_ge_select_to_abs (instance 1)", () => {
        let _f64_no_fold_ge_select_to_abs = module.getExport("f64.no_fold_ge_select_to_abs");
        expect(_f64_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_select_to_abs_result = module.invoke(
            _f64_no_fold_ge_select_to_abs,
            -NaN
        );
        expect(_f64_no_fold_ge_select_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_45: f64.no_fold_ge_select_to_abs (instance 2)", () => {
        let _f64_no_fold_ge_select_to_abs = module.getExport("f64.no_fold_ge_select_to_abs");
        expect(_f64_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_select_to_abs_result = module.invoke(
            _f64_no_fold_ge_select_to_abs,
            0.0
        );
        expect(_f64_no_fold_ge_select_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_45: f64.no_fold_ge_select_to_abs (instance 3)", () => {
        let _f64_no_fold_ge_select_to_abs = module.getExport("f64.no_fold_ge_select_to_abs");
        expect(_f64_no_fold_ge_select_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_select_to_abs_result = module.invoke(
            _f64_no_fold_ge_select_to_abs,
            -0.0
        );
        expect(_f64_no_fold_ge_select_to_abs_result).toBe(-0.0);
    });
});

describe("float_exprs_46", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_46.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_46: f32.no_fold_lt_if_to_abs (instance 0)", () => {
        let _f32_no_fold_lt_if_to_abs = module.getExport("f32.no_fold_lt_if_to_abs");
        expect(_f32_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_if_to_abs_result = module.invoke(_f32_no_fold_lt_if_to_abs, NaN);
        expect(_f32_no_fold_lt_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_lt_if_to_abs (instance 1)", () => {
        let _f32_no_fold_lt_if_to_abs = module.getExport("f32.no_fold_lt_if_to_abs");
        expect(_f32_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_if_to_abs_result = module.invoke(_f32_no_fold_lt_if_to_abs, -NaN);
        expect(_f32_no_fold_lt_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_lt_if_to_abs (instance 2)", () => {
        let _f32_no_fold_lt_if_to_abs = module.getExport("f32.no_fold_lt_if_to_abs");
        expect(_f32_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_if_to_abs_result = module.invoke(_f32_no_fold_lt_if_to_abs, 0.0);
        expect(_f32_no_fold_lt_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f32.no_fold_lt_if_to_abs (instance 3)", () => {
        let _f32_no_fold_lt_if_to_abs = module.getExport("f32.no_fold_lt_if_to_abs");
        expect(_f32_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_lt_if_to_abs_result = module.invoke(_f32_no_fold_lt_if_to_abs, -0.0);
        expect(_f32_no_fold_lt_if_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_46: f32.no_fold_le_if_to_abs (instance 0)", () => {
        let _f32_no_fold_le_if_to_abs = module.getExport("f32.no_fold_le_if_to_abs");
        expect(_f32_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_if_to_abs_result = module.invoke(_f32_no_fold_le_if_to_abs, NaN);
        expect(_f32_no_fold_le_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_le_if_to_abs (instance 1)", () => {
        let _f32_no_fold_le_if_to_abs = module.getExport("f32.no_fold_le_if_to_abs");
        expect(_f32_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_if_to_abs_result = module.invoke(_f32_no_fold_le_if_to_abs, -NaN);
        expect(_f32_no_fold_le_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_le_if_to_abs (instance 2)", () => {
        let _f32_no_fold_le_if_to_abs = module.getExport("f32.no_fold_le_if_to_abs");
        expect(_f32_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_if_to_abs_result = module.invoke(_f32_no_fold_le_if_to_abs, 0.0);
        expect(_f32_no_fold_le_if_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_46: f32.no_fold_le_if_to_abs (instance 3)", () => {
        let _f32_no_fold_le_if_to_abs = module.getExport("f32.no_fold_le_if_to_abs");
        expect(_f32_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_le_if_to_abs_result = module.invoke(_f32_no_fold_le_if_to_abs, -0.0);
        expect(_f32_no_fold_le_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f32.no_fold_gt_if_to_abs (instance 0)", () => {
        let _f32_no_fold_gt_if_to_abs = module.getExport("f32.no_fold_gt_if_to_abs");
        expect(_f32_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_if_to_abs_result = module.invoke(_f32_no_fold_gt_if_to_abs, NaN);
        expect(_f32_no_fold_gt_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_gt_if_to_abs (instance 1)", () => {
        let _f32_no_fold_gt_if_to_abs = module.getExport("f32.no_fold_gt_if_to_abs");
        expect(_f32_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_if_to_abs_result = module.invoke(_f32_no_fold_gt_if_to_abs, -NaN);
        expect(_f32_no_fold_gt_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_gt_if_to_abs (instance 2)", () => {
        let _f32_no_fold_gt_if_to_abs = module.getExport("f32.no_fold_gt_if_to_abs");
        expect(_f32_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_if_to_abs_result = module.invoke(_f32_no_fold_gt_if_to_abs, 0.0);
        expect(_f32_no_fold_gt_if_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_46: f32.no_fold_gt_if_to_abs (instance 3)", () => {
        let _f32_no_fold_gt_if_to_abs = module.getExport("f32.no_fold_gt_if_to_abs");
        expect(_f32_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_gt_if_to_abs_result = module.invoke(_f32_no_fold_gt_if_to_abs, -0.0);
        expect(_f32_no_fold_gt_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f32.no_fold_ge_if_to_abs (instance 0)", () => {
        let _f32_no_fold_ge_if_to_abs = module.getExport("f32.no_fold_ge_if_to_abs");
        expect(_f32_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_if_to_abs_result = module.invoke(_f32_no_fold_ge_if_to_abs, NaN);
        expect(_f32_no_fold_ge_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_ge_if_to_abs (instance 1)", () => {
        let _f32_no_fold_ge_if_to_abs = module.getExport("f32.no_fold_ge_if_to_abs");
        expect(_f32_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_if_to_abs_result = module.invoke(_f32_no_fold_ge_if_to_abs, -NaN);
        expect(_f32_no_fold_ge_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f32.no_fold_ge_if_to_abs (instance 2)", () => {
        let _f32_no_fold_ge_if_to_abs = module.getExport("f32.no_fold_ge_if_to_abs");
        expect(_f32_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_if_to_abs_result = module.invoke(_f32_no_fold_ge_if_to_abs, 0.0);
        expect(_f32_no_fold_ge_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f32.no_fold_ge_if_to_abs (instance 3)", () => {
        let _f32_no_fold_ge_if_to_abs = module.getExport("f32.no_fold_ge_if_to_abs");
        expect(_f32_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f32_no_fold_ge_if_to_abs_result = module.invoke(_f32_no_fold_ge_if_to_abs, -0.0);
        expect(_f32_no_fold_ge_if_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_lt_if_to_abs (instance 0)", () => {
        let _f64_no_fold_lt_if_to_abs = module.getExport("f64.no_fold_lt_if_to_abs");
        expect(_f64_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_if_to_abs_result = module.invoke(_f64_no_fold_lt_if_to_abs, NaN);
        expect(_f64_no_fold_lt_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_lt_if_to_abs (instance 1)", () => {
        let _f64_no_fold_lt_if_to_abs = module.getExport("f64.no_fold_lt_if_to_abs");
        expect(_f64_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_if_to_abs_result = module.invoke(_f64_no_fold_lt_if_to_abs, -NaN);
        expect(_f64_no_fold_lt_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_lt_if_to_abs (instance 2)", () => {
        let _f64_no_fold_lt_if_to_abs = module.getExport("f64.no_fold_lt_if_to_abs");
        expect(_f64_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_if_to_abs_result = module.invoke(_f64_no_fold_lt_if_to_abs, 0.0);
        expect(_f64_no_fold_lt_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_lt_if_to_abs (instance 3)", () => {
        let _f64_no_fold_lt_if_to_abs = module.getExport("f64.no_fold_lt_if_to_abs");
        expect(_f64_no_fold_lt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_lt_if_to_abs_result = module.invoke(_f64_no_fold_lt_if_to_abs, -0.0);
        expect(_f64_no_fold_lt_if_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_le_if_to_abs (instance 0)", () => {
        let _f64_no_fold_le_if_to_abs = module.getExport("f64.no_fold_le_if_to_abs");
        expect(_f64_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_if_to_abs_result = module.invoke(_f64_no_fold_le_if_to_abs, NaN);
        expect(_f64_no_fold_le_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_le_if_to_abs (instance 1)", () => {
        let _f64_no_fold_le_if_to_abs = module.getExport("f64.no_fold_le_if_to_abs");
        expect(_f64_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_if_to_abs_result = module.invoke(_f64_no_fold_le_if_to_abs, -NaN);
        expect(_f64_no_fold_le_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_le_if_to_abs (instance 2)", () => {
        let _f64_no_fold_le_if_to_abs = module.getExport("f64.no_fold_le_if_to_abs");
        expect(_f64_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_if_to_abs_result = module.invoke(_f64_no_fold_le_if_to_abs, 0.0);
        expect(_f64_no_fold_le_if_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_le_if_to_abs (instance 3)", () => {
        let _f64_no_fold_le_if_to_abs = module.getExport("f64.no_fold_le_if_to_abs");
        expect(_f64_no_fold_le_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_le_if_to_abs_result = module.invoke(_f64_no_fold_le_if_to_abs, -0.0);
        expect(_f64_no_fold_le_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_gt_if_to_abs (instance 0)", () => {
        let _f64_no_fold_gt_if_to_abs = module.getExport("f64.no_fold_gt_if_to_abs");
        expect(_f64_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_if_to_abs_result = module.invoke(_f64_no_fold_gt_if_to_abs, NaN);
        expect(_f64_no_fold_gt_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_gt_if_to_abs (instance 1)", () => {
        let _f64_no_fold_gt_if_to_abs = module.getExport("f64.no_fold_gt_if_to_abs");
        expect(_f64_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_if_to_abs_result = module.invoke(_f64_no_fold_gt_if_to_abs, -NaN);
        expect(_f64_no_fold_gt_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_gt_if_to_abs (instance 2)", () => {
        let _f64_no_fold_gt_if_to_abs = module.getExport("f64.no_fold_gt_if_to_abs");
        expect(_f64_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_if_to_abs_result = module.invoke(_f64_no_fold_gt_if_to_abs, 0.0);
        expect(_f64_no_fold_gt_if_to_abs_result).toBe(-0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_gt_if_to_abs (instance 3)", () => {
        let _f64_no_fold_gt_if_to_abs = module.getExport("f64.no_fold_gt_if_to_abs");
        expect(_f64_no_fold_gt_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_gt_if_to_abs_result = module.invoke(_f64_no_fold_gt_if_to_abs, -0.0);
        expect(_f64_no_fold_gt_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_ge_if_to_abs (instance 0)", () => {
        let _f64_no_fold_ge_if_to_abs = module.getExport("f64.no_fold_ge_if_to_abs");
        expect(_f64_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_if_to_abs_result = module.invoke(_f64_no_fold_ge_if_to_abs, NaN);
        expect(_f64_no_fold_ge_if_to_abs_result).toBe(-NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_ge_if_to_abs (instance 1)", () => {
        let _f64_no_fold_ge_if_to_abs = module.getExport("f64.no_fold_ge_if_to_abs");
        expect(_f64_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_if_to_abs_result = module.invoke(_f64_no_fold_ge_if_to_abs, -NaN);
        expect(_f64_no_fold_ge_if_to_abs_result).toBe(NaN);
    });

    _test("execution of float_exprs_46: f64.no_fold_ge_if_to_abs (instance 2)", () => {
        let _f64_no_fold_ge_if_to_abs = module.getExport("f64.no_fold_ge_if_to_abs");
        expect(_f64_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_if_to_abs_result = module.invoke(_f64_no_fold_ge_if_to_abs, 0.0);
        expect(_f64_no_fold_ge_if_to_abs_result).toBe(0.0);
    });

    _test("execution of float_exprs_46: f64.no_fold_ge_if_to_abs (instance 3)", () => {
        let _f64_no_fold_ge_if_to_abs = module.getExport("f64.no_fold_ge_if_to_abs");
        expect(_f64_no_fold_ge_if_to_abs).not.toBeUndefined();
        let _f64_no_fold_ge_if_to_abs_result = module.invoke(_f64_no_fold_ge_if_to_abs, -0.0);
        expect(_f64_no_fold_ge_if_to_abs_result).toBe(-0.0);
    });
});

describe("float_exprs_47", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_47.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_47: f32.incorrect_correction (instance 0)", () => {
        let _f32_incorrect_correction = module.getExport("f32.incorrect_correction");
        expect(_f32_incorrect_correction).not.toBeUndefined();
        let _f32_incorrect_correction_result = module.invoke(_f32_incorrect_correction);
        expect(_f32_incorrect_correction_result).toBe(1.1920928955078125e-7);
    });

    _test("execution of float_exprs_47: f64.incorrect_correction (instance 0)", () => {
        let _f64_incorrect_correction = module.getExport("f64.incorrect_correction");
        expect(_f64_incorrect_correction).not.toBeUndefined();
        let _f64_incorrect_correction_result = module.invoke(_f64_incorrect_correction);
        expect(_f64_incorrect_correction_result).toBe(-2.220446049250313e-16);
    });
});

describe("float_exprs_48", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_48.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_48: calculate (instance 0)", () => {
        let _calculate = module.getExport("calculate");
        expect(_calculate).not.toBeUndefined();
        let _calculate_result = module.invoke(_calculate);
        expect(_calculate_result).toBe(-466.9268493652344);
    });
});

describe("float_exprs_49", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_49.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_49: calculate (instance 1)", () => {
        let _calculate = module.getExport("calculate");
        expect(_calculate).not.toBeUndefined();
        let _calculate_result = module.invoke(_calculate);
        expect(_calculate_result).toBe(-466.926956301738);
    });
});

describe("float_exprs_50", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_50.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_50: llvm_pr26746 (instance 0)", () => {
        let _llvm_pr26746 = module.getExport("llvm_pr26746");
        expect(_llvm_pr26746).not.toBeUndefined();
        let _llvm_pr26746_result = module.invoke(_llvm_pr26746, -0.0);
        expect(_llvm_pr26746_result).toBe(0.0);
    });
});

describe("float_exprs_51", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_51.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_51: llvm_pr27153 (instance 0)", () => {
        let _llvm_pr27153 = module.getExport("llvm_pr27153");
        expect(_llvm_pr27153).not.toBeUndefined();
        let _llvm_pr27153_result = module.invoke(_llvm_pr27153, 33554434);
        expect(_llvm_pr27153_result).toBe(25165824.0);
    });
});

describe("float_exprs_52", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_52.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_52: llvm_pr27036 (instance 0)", () => {
        let _llvm_pr27036 = module.getExport("llvm_pr27036");
        expect(_llvm_pr27036).not.toBeUndefined();
        let _llvm_pr27036_result = module.invoke(_llvm_pr27036, -25034805, 14942208);
        expect(_llvm_pr27036_result).toBe(-10092596.0);
    });
});

describe("float_exprs_53", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_53.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_53: thepast0 (instance 0)", () => {
        let _thepast0 = module.getExport("thepast0");
        expect(_thepast0).not.toBeUndefined();
        let _thepast0_result = module.invoke(
            _thepast0,
            4.450147717014403e-308,
            0.9999999999999999,
            2.0,
            0.5
        );
        expect(_thepast0_result).toBe(4.4501477170144023e-308);
    });

    _test("execution of float_exprs_53: thepast1 (instance 0)", () => {
        let _thepast1 = module.getExport("thepast1");
        expect(_thepast1).not.toBeUndefined();
        let _thepast1_result = module.invoke(
            _thepast1,
            5.551115123125783e-17,
            0.9999999999999999,
            5.551115123125783e-17
        );
        expect(_thepast1_result).toBe(-6.162975822039155e-33);
    });

    _test("execution of float_exprs_53: thepast2 (instance 0)", () => {
        let _thepast2 = module.getExport("thepast2");
        expect(_thepast2).not.toBeUndefined();
        let _thepast2_result = module.invoke(_thepast2, 2.350988701644575e-38, 0.5, 1.0);
        expect(_thepast2_result).toBe(1.1754943508222875e-38);
    });
});

describe("float_exprs_54", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_54.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_54: inverse (instance 0)", () => {
        let _inverse = module.getExport("inverse");
        expect(_inverse).not.toBeUndefined();
        let _inverse_result = module.invoke(_inverse, 96.0);
        expect(_inverse_result).toBe(0.010416666977107525);
    });
});

describe("float_exprs_55", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_55.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_55: f32_sqrt_minus_2 (instance 0)", () => {
        let _f32_sqrt_minus_2 = module.getExport("f32_sqrt_minus_2");
        expect(_f32_sqrt_minus_2).not.toBeUndefined();
        let _f32_sqrt_minus_2_result = module.invoke(_f32_sqrt_minus_2, 4.0);
        expect(_f32_sqrt_minus_2_result).toBe(0.0);
    });

    _test("execution of float_exprs_55: f64_sqrt_minus_2 (instance 0)", () => {
        let _f64_sqrt_minus_2 = module.getExport("f64_sqrt_minus_2");
        expect(_f64_sqrt_minus_2).not.toBeUndefined();
        let _f64_sqrt_minus_2_result = module.invoke(_f64_sqrt_minus_2, 4.0);
        expect(_f64_sqrt_minus_2_result).toBe(0.0);
    });
});

describe("float_exprs_56", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_56.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 0)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(
            _f32_no_fold_recip_recip,
            -7.043578799867927e19
        );
        expect(_f32_no_fold_recip_recip_result).toBe(-7.043578360063276e19);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 1)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(
            _f32_no_fold_recip_recip,
            1.2466100672499874e-23
        );
        expect(_f32_no_fold_recip_recip_result).toBe(1.2466099883638969e-23);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 2)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(
            _f32_no_fold_recip_recip,
            9.718454544006024e-20
        );
        expect(_f32_no_fold_recip_recip_result).toBe(9.718455190240878e-20);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 3)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(
            _f32_no_fold_recip_recip,
            -30.400758743286133
        );
        expect(_f32_no_fold_recip_recip_result).toBe(-30.400760650634766);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 4)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(
            _f32_no_fold_recip_recip,
            2.3316591903901535e21
        );
        expect(_f32_no_fold_recip_recip_result).toBe(2.3316590496526652e21);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 5)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(_f32_no_fold_recip_recip, -0.0);
        expect(_f32_no_fold_recip_recip_result).toBe(-0.0);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 6)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(_f32_no_fold_recip_recip, 0.0);
        expect(_f32_no_fold_recip_recip_result).toBe(0.0);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 7)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(_f32_no_fold_recip_recip, -Infinity);
        expect(_f32_no_fold_recip_recip_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_56: f32.no_fold_recip_recip (instance 8)", () => {
        let _f32_no_fold_recip_recip = module.getExport("f32.no_fold_recip_recip");
        expect(_f32_no_fold_recip_recip).not.toBeUndefined();
        let _f32_no_fold_recip_recip_result = module.invoke(_f32_no_fold_recip_recip, Infinity);
        expect(_f32_no_fold_recip_recip_result).toBe(Infinity);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 0)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(
            _f64_no_fold_recip_recip,
            -6.5797153436288686e44
        );
        expect(_f64_no_fold_recip_recip_result).toBe(-6.579715343628869e44);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 1)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(
            _f64_no_fold_recip_recip,
            -1.4424693186857643e20
        );
        expect(_f64_no_fold_recip_recip_result).toBe(-1.4424693186857642e20);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 2)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(
            _f64_no_fold_recip_recip,
            1.8499468920623135e50
        );
        expect(_f64_no_fold_recip_recip_result).toBe(1.8499468920623133e50);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 3)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(
            _f64_no_fold_recip_recip,
            5.779584288006583e-207
        );
        expect(_f64_no_fold_recip_recip_result).toBe(5.779584288006582e-207);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 4)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(
            _f64_no_fold_recip_recip,
            5.150117869614164e271
        );
        expect(_f64_no_fold_recip_recip_result).toBe(5.1501178696141634e271);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 5)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(_f64_no_fold_recip_recip, -0.0);
        expect(_f64_no_fold_recip_recip_result).toBe(-0.0);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 6)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(_f64_no_fold_recip_recip, 0.0);
        expect(_f64_no_fold_recip_recip_result).toBe(0.0);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 7)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(_f64_no_fold_recip_recip, -Infinity);
        expect(_f64_no_fold_recip_recip_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_56: f64.no_fold_recip_recip (instance 8)", () => {
        let _f64_no_fold_recip_recip = module.getExport("f64.no_fold_recip_recip");
        expect(_f64_no_fold_recip_recip).not.toBeUndefined();
        let _f64_no_fold_recip_recip_result = module.invoke(_f64_no_fold_recip_recip, Infinity);
        expect(_f64_no_fold_recip_recip_result).toBe(Infinity);
    });
});

describe("float_exprs_57", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_57.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_57: f32.no_algebraic_factoring (instance 0)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            -5.371186465411003e-17,
            9.744327905706555e-17
        );
        expect(_f32_no_algebraic_factoring_result).toBe(-6.610228647323988e-33);
    });

    _test("execution of float_exprs_57: f32.no_algebraic_factoring (instance 1)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            -19756732.0,
            32770204.0
        );
        expect(_f32_no_algebraic_factoring_result).toBe(-683557802475520.0);
    });

    _test("execution of float_exprs_57: f32.no_algebraic_factoring (instance 2)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            52314148700160.0,
            -145309984358400.0
        );
        expect(_f32_no_algebraic_factoring_result).toBe(-1.8378221355451492e28);
    });

    _test("execution of float_exprs_57: f32.no_algebraic_factoring (instance 3)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            195260.375,
            -227.75723266601562
        );
        expect(_f32_no_algebraic_factoring_result).toBe(38126563328.0);
    });

    _test("execution of float_exprs_57: f32.no_algebraic_factoring (instance 4)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            -237.487060546875,
            -972341.5
        );
        expect(_f32_no_algebraic_factoring_result).toBe(-945447960576.0);
    });

    _test("execution of float_exprs_57: f64.no_algebraic_factoring (instance 0)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            9.639720335949767e-144,
            8.019175443606207e-140
        );
        expect(_f64_no_algebraic_factoring_result).toBe(-6.430717386609473e-279);
    });

    _test("execution of float_exprs_57: f64.no_algebraic_factoring (instance 1)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            5.166066590392027e-114,
            1.494333315888213e-120
        );
        expect(_f64_no_algebraic_factoring_result).toBe(2.6688244016362468e-227);
    });

    _test("execution of float_exprs_57: f64.no_algebraic_factoring (instance 2)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            -2.866135870517635e-114,
            -1.2114355254268516e-111
        );
        expect(_f64_no_algebraic_factoring_result).toBe(-1.4675678175314036e-222);
    });

    _test("execution of float_exprs_57: f64.no_algebraic_factoring (instance 3)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            -1.2920992810078149e54,
            6.62717187728034e56
        );
        expect(_f64_no_algebraic_factoring_result).toBe(-4.391924013896023e113);
    });

    _test("execution of float_exprs_57: f64.no_algebraic_factoring (instance 4)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            2.624279568901057e34,
            -1.6250233986050802e27
        );
        expect(_f64_no_algebraic_factoring_result).toBe(6.886843255751491e68);
    });
});

describe("float_exprs_58", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_58.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_58: f32.no_algebraic_factoring (instance 5)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            2.2102996109817433e-14,
            3.146527526379228e-12
        );
        expect(_f32_no_algebraic_factoring_result).toBe(-9.900147562538522e-24);
    });

    _test("execution of float_exprs_58: f32.no_algebraic_factoring (instance 6)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            -3289460768768.0,
            -15941538816.0
        );
        expect(_f32_no_algebraic_factoring_result).toBe(1.082029860086528e25);
    });

    _test("execution of float_exprs_58: f32.no_algebraic_factoring (instance 7)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            0.00036497542168945074,
            -0.00016153714386746287
        );
        expect(_f32_no_algebraic_factoring_result).toBe(1.0711280395980793e-7);
    });

    _test("execution of float_exprs_58: f32.no_algebraic_factoring (instance 8)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            6.538326602139807e-14,
            -2.7412772911545626e-14
        );
        expect(_f32_no_algebraic_factoring_result).toBe(3.523511174043803e-27);
    });

    _test("execution of float_exprs_58: f32.no_algebraic_factoring (instance 9)", () => {
        let _f32_no_algebraic_factoring = module.getExport("f32.no_algebraic_factoring");
        expect(_f32_no_algebraic_factoring).not.toBeUndefined();
        let _f32_no_algebraic_factoring_result = module.invoke(
            _f32_no_algebraic_factoring,
            3609681910038528.0,
            -5260104429469696.0
        );
        expect(_f32_no_algebraic_factoring_result).toBe(-1.463889604789756e31);
    });

    _test("execution of float_exprs_58: f64.no_algebraic_factoring (instance 5)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            2.136404543498951e107,
            -2.928587558394428e101
        );
        expect(_f64_no_algebraic_factoring_result).toBe(4.564224373474385e214);
    });

    _test("execution of float_exprs_58: f64.no_algebraic_factoring (instance 6)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            -1.2290171159244358e93,
            -8.2221589190166e99
        );
        expect(_f64_no_algebraic_factoring_result).toBe(-6.760389728956271e199);
    });

    _test("execution of float_exprs_58: f64.no_algebraic_factoring (instance 7)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            5477733829752.252,
            -970738900948.5906
        );
        expect(_f64_no_algebraic_factoring_result).toBe(2.9063233895797397e25);
    });

    _test("execution of float_exprs_58: f64.no_algebraic_factoring (instance 8)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            -1.0689141744923551e55,
            -1.7337839359373804e50
        );
        expect(_f64_no_algebraic_factoring_result).toBe(1.1425775121300724e110);
    });

    _test("execution of float_exprs_58: f64.no_algebraic_factoring (instance 9)", () => {
        let _f64_no_algebraic_factoring = module.getExport("f64.no_algebraic_factoring");
        expect(_f64_no_algebraic_factoring).not.toBeUndefined();
        let _f64_no_algebraic_factoring_result = module.invoke(
            _f64_no_algebraic_factoring,
            -1.0295699877022106e-71,
            -8.952274637805908e-72
        );
        expect(_f64_no_algebraic_factoring_result).toBe(2.5858214767010105e-143);
    });
});

describe("float_exprs_59", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_59.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_59: f32.simple_x4_sum (instance 0)", () => {
        let _f32_simple_x4_sum = module.getExport("f32.simple_x4_sum");
        expect(_f32_simple_x4_sum).not.toBeUndefined();
        let _f32_simple_x4_sum_result = module.invoke(_f32_simple_x4_sum, 0, 16, 32);
    });

    _test("execution of float_exprs_59: f32.load (instance 0)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 32);
        expect(_f32_load_result).toBe(2.802596928649634e-45);
    });

    _test("execution of float_exprs_59: f32.load (instance 1)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 36);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of float_exprs_59: f32.load (instance 2)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 40);
        expect(_f32_load_result).toBe(1.401298464324817e-45);
    });

    _test("execution of float_exprs_59: f32.load (instance 3)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 44);
        expect(_f32_load_result).toBe(-1.401298464324817e-45);
    });
});

describe("float_exprs_60", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_60.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_60: f64.simple_x4_sum (instance 0)", () => {
        let _f64_simple_x4_sum = module.getExport("f64.simple_x4_sum");
        expect(_f64_simple_x4_sum).not.toBeUndefined();
        let _f64_simple_x4_sum_result = module.invoke(_f64_simple_x4_sum, 0, 32, 64);
    });

    _test("execution of float_exprs_60: f64.load (instance 0)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 64);
        expect(_f64_load_result).toBe(1e-323);
    });

    _test("execution of float_exprs_60: f64.load (instance 1)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 72);
        expect(_f64_load_result).toBe(0.0);
    });

    _test("execution of float_exprs_60: f64.load (instance 2)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 80);
        expect(_f64_load_result).toBe(5e-324);
    });

    _test("execution of float_exprs_60: f64.load (instance 3)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 88);
        expect(_f64_load_result).toBe(-5e-324);
    });
});

describe("float_exprs_61", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_61.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_61: f32.kahan_sum (instance 0)", () => {
        let _f32_kahan_sum = module.getExport("f32.kahan_sum");
        expect(_f32_kahan_sum).not.toBeUndefined();
        let _f32_kahan_sum_result = module.invoke(_f32_kahan_sum, 0, 256);
        expect(_f32_kahan_sum_result).toBe(-2.1558138246206565e31);
    });

    _test("execution of float_exprs_61: f32.plain_sum (instance 0)", () => {
        let _f32_plain_sum = module.getExport("f32.plain_sum");
        expect(_f32_plain_sum).not.toBeUndefined();
        let _f32_plain_sum_result = module.invoke(_f32_plain_sum, 0, 256);
        expect(_f32_plain_sum_result).toBe(-1.6487539472071106e31);
    });
});

describe("float_exprs_62", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_62.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_62: f64.kahan_sum (instance 0)", () => {
        let _f64_kahan_sum = module.getExport("f64.kahan_sum");
        expect(_f64_kahan_sum).not.toBeUndefined();
        let _f64_kahan_sum_result = module.invoke(_f64_kahan_sum, 0, 256);
        expect(_f64_kahan_sum_result).toBe(4.996401743142033e300);
    });

    _test("execution of float_exprs_62: f64.plain_sum (instance 0)", () => {
        let _f64_plain_sum = module.getExport("f64.plain_sum");
        expect(_f64_plain_sum).not.toBeUndefined();
        let _f64_plain_sum_result = module.invoke(_f64_plain_sum, 0, 256);
        expect(_f64_plain_sum_result).toBe(4.9964017432979576e300);
    });
});

describe("float_exprs_63", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_63.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_63: f32.no_fold_neg_sub (instance 0)", () => {
        let _f32_no_fold_neg_sub = module.getExport("f32.no_fold_neg_sub");
        expect(_f32_no_fold_neg_sub).not.toBeUndefined();
        let _f32_no_fold_neg_sub_result = module.invoke(_f32_no_fold_neg_sub, -0.0, -0.0);
        expect(_f32_no_fold_neg_sub_result).toBe(-0.0);
    });

    _test("execution of float_exprs_63: f32.no_fold_neg_sub (instance 1)", () => {
        let _f32_no_fold_neg_sub = module.getExport("f32.no_fold_neg_sub");
        expect(_f32_no_fold_neg_sub).not.toBeUndefined();
        let _f32_no_fold_neg_sub_result = module.invoke(_f32_no_fold_neg_sub, 0.0, -0.0);
        expect(_f32_no_fold_neg_sub_result).toBe(-0.0);
    });

    _test("execution of float_exprs_63: f32.no_fold_neg_sub (instance 2)", () => {
        let _f32_no_fold_neg_sub = module.getExport("f32.no_fold_neg_sub");
        expect(_f32_no_fold_neg_sub).not.toBeUndefined();
        let _f32_no_fold_neg_sub_result = module.invoke(_f32_no_fold_neg_sub, -0.0, 0.0);
        expect(_f32_no_fold_neg_sub_result).toBe(0.0);
    });

    _test("execution of float_exprs_63: f32.no_fold_neg_sub (instance 3)", () => {
        let _f32_no_fold_neg_sub = module.getExport("f32.no_fold_neg_sub");
        expect(_f32_no_fold_neg_sub).not.toBeUndefined();
        let _f32_no_fold_neg_sub_result = module.invoke(_f32_no_fold_neg_sub, 0.0, 0.0);
        expect(_f32_no_fold_neg_sub_result).toBe(-0.0);
    });

    _test("execution of float_exprs_63: f64.no_fold_neg_sub (instance 0)", () => {
        let _f64_no_fold_neg_sub = module.getExport("f64.no_fold_neg_sub");
        expect(_f64_no_fold_neg_sub).not.toBeUndefined();
        let _f64_no_fold_neg_sub_result = module.invoke(_f64_no_fold_neg_sub, -0.0, -0.0);
        expect(_f64_no_fold_neg_sub_result).toBe(-0.0);
    });

    _test("execution of float_exprs_63: f64.no_fold_neg_sub (instance 1)", () => {
        let _f64_no_fold_neg_sub = module.getExport("f64.no_fold_neg_sub");
        expect(_f64_no_fold_neg_sub).not.toBeUndefined();
        let _f64_no_fold_neg_sub_result = module.invoke(_f64_no_fold_neg_sub, 0.0, -0.0);
        expect(_f64_no_fold_neg_sub_result).toBe(-0.0);
    });

    _test("execution of float_exprs_63: f64.no_fold_neg_sub (instance 2)", () => {
        let _f64_no_fold_neg_sub = module.getExport("f64.no_fold_neg_sub");
        expect(_f64_no_fold_neg_sub).not.toBeUndefined();
        let _f64_no_fold_neg_sub_result = module.invoke(_f64_no_fold_neg_sub, -0.0, 0.0);
        expect(_f64_no_fold_neg_sub_result).toBe(0.0);
    });

    _test("execution of float_exprs_63: f64.no_fold_neg_sub (instance 3)", () => {
        let _f64_no_fold_neg_sub = module.getExport("f64.no_fold_neg_sub");
        expect(_f64_no_fold_neg_sub).not.toBeUndefined();
        let _f64_no_fold_neg_sub_result = module.invoke(_f64_no_fold_neg_sub, 0.0, 0.0);
        expect(_f64_no_fold_neg_sub_result).toBe(-0.0);
    });
});

describe("float_exprs_64", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_64.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_64: f32.no_fold_neg_add (instance 0)", () => {
        let _f32_no_fold_neg_add = module.getExport("f32.no_fold_neg_add");
        expect(_f32_no_fold_neg_add).not.toBeUndefined();
        let _f32_no_fold_neg_add_result = module.invoke(_f32_no_fold_neg_add, -0.0, -0.0);
        expect(_f32_no_fold_neg_add_result).toBe(0.0);
    });

    _test("execution of float_exprs_64: f32.no_fold_neg_add (instance 1)", () => {
        let _f32_no_fold_neg_add = module.getExport("f32.no_fold_neg_add");
        expect(_f32_no_fold_neg_add).not.toBeUndefined();
        let _f32_no_fold_neg_add_result = module.invoke(_f32_no_fold_neg_add, 0.0, -0.0);
        expect(_f32_no_fold_neg_add_result).toBe(-0.0);
    });

    _test("execution of float_exprs_64: f32.no_fold_neg_add (instance 2)", () => {
        let _f32_no_fold_neg_add = module.getExport("f32.no_fold_neg_add");
        expect(_f32_no_fold_neg_add).not.toBeUndefined();
        let _f32_no_fold_neg_add_result = module.invoke(_f32_no_fold_neg_add, -0.0, 0.0);
        expect(_f32_no_fold_neg_add_result).toBe(-0.0);
    });

    _test("execution of float_exprs_64: f32.no_fold_neg_add (instance 3)", () => {
        let _f32_no_fold_neg_add = module.getExport("f32.no_fold_neg_add");
        expect(_f32_no_fold_neg_add).not.toBeUndefined();
        let _f32_no_fold_neg_add_result = module.invoke(_f32_no_fold_neg_add, 0.0, 0.0);
        expect(_f32_no_fold_neg_add_result).toBe(-0.0);
    });

    _test("execution of float_exprs_64: f64.no_fold_neg_add (instance 0)", () => {
        let _f64_no_fold_neg_add = module.getExport("f64.no_fold_neg_add");
        expect(_f64_no_fold_neg_add).not.toBeUndefined();
        let _f64_no_fold_neg_add_result = module.invoke(_f64_no_fold_neg_add, -0.0, -0.0);
        expect(_f64_no_fold_neg_add_result).toBe(0.0);
    });

    _test("execution of float_exprs_64: f64.no_fold_neg_add (instance 1)", () => {
        let _f64_no_fold_neg_add = module.getExport("f64.no_fold_neg_add");
        expect(_f64_no_fold_neg_add).not.toBeUndefined();
        let _f64_no_fold_neg_add_result = module.invoke(_f64_no_fold_neg_add, 0.0, -0.0);
        expect(_f64_no_fold_neg_add_result).toBe(-0.0);
    });

    _test("execution of float_exprs_64: f64.no_fold_neg_add (instance 2)", () => {
        let _f64_no_fold_neg_add = module.getExport("f64.no_fold_neg_add");
        expect(_f64_no_fold_neg_add).not.toBeUndefined();
        let _f64_no_fold_neg_add_result = module.invoke(_f64_no_fold_neg_add, -0.0, 0.0);
        expect(_f64_no_fold_neg_add_result).toBe(-0.0);
    });

    _test("execution of float_exprs_64: f64.no_fold_neg_add (instance 3)", () => {
        let _f64_no_fold_neg_add = module.getExport("f64.no_fold_neg_add");
        expect(_f64_no_fold_neg_add).not.toBeUndefined();
        let _f64_no_fold_neg_add_result = module.invoke(_f64_no_fold_neg_add, 0.0, 0.0);
        expect(_f64_no_fold_neg_add_result).toBe(-0.0);
    });
});

describe("float_exprs_65", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_65.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_65: f32.no_fold_add_neg_neg (instance 0)", () => {
        let _f32_no_fold_add_neg_neg = module.getExport("f32.no_fold_add_neg_neg");
        expect(_f32_no_fold_add_neg_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_neg_result = module.invoke(_f32_no_fold_add_neg_neg, -0.0, -0.0);
        expect(_f32_no_fold_add_neg_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_65: f32.no_fold_add_neg_neg (instance 1)", () => {
        let _f32_no_fold_add_neg_neg = module.getExport("f32.no_fold_add_neg_neg");
        expect(_f32_no_fold_add_neg_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_neg_result = module.invoke(_f32_no_fold_add_neg_neg, 0.0, -0.0);
        expect(_f32_no_fold_add_neg_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_65: f32.no_fold_add_neg_neg (instance 2)", () => {
        let _f32_no_fold_add_neg_neg = module.getExport("f32.no_fold_add_neg_neg");
        expect(_f32_no_fold_add_neg_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_neg_result = module.invoke(_f32_no_fold_add_neg_neg, -0.0, 0.0);
        expect(_f32_no_fold_add_neg_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_65: f32.no_fold_add_neg_neg (instance 3)", () => {
        let _f32_no_fold_add_neg_neg = module.getExport("f32.no_fold_add_neg_neg");
        expect(_f32_no_fold_add_neg_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_neg_result = module.invoke(_f32_no_fold_add_neg_neg, 0.0, 0.0);
        expect(_f32_no_fold_add_neg_neg_result).toBe(-0.0);
    });

    _test("execution of float_exprs_65: f64.no_fold_add_neg_neg (instance 0)", () => {
        let _f64_no_fold_add_neg_neg = module.getExport("f64.no_fold_add_neg_neg");
        expect(_f64_no_fold_add_neg_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_neg_result = module.invoke(_f64_no_fold_add_neg_neg, -0.0, -0.0);
        expect(_f64_no_fold_add_neg_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_65: f64.no_fold_add_neg_neg (instance 1)", () => {
        let _f64_no_fold_add_neg_neg = module.getExport("f64.no_fold_add_neg_neg");
        expect(_f64_no_fold_add_neg_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_neg_result = module.invoke(_f64_no_fold_add_neg_neg, 0.0, -0.0);
        expect(_f64_no_fold_add_neg_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_65: f64.no_fold_add_neg_neg (instance 2)", () => {
        let _f64_no_fold_add_neg_neg = module.getExport("f64.no_fold_add_neg_neg");
        expect(_f64_no_fold_add_neg_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_neg_result = module.invoke(_f64_no_fold_add_neg_neg, -0.0, 0.0);
        expect(_f64_no_fold_add_neg_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_65: f64.no_fold_add_neg_neg (instance 3)", () => {
        let _f64_no_fold_add_neg_neg = module.getExport("f64.no_fold_add_neg_neg");
        expect(_f64_no_fold_add_neg_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_neg_result = module.invoke(_f64_no_fold_add_neg_neg, 0.0, 0.0);
        expect(_f64_no_fold_add_neg_neg_result).toBe(-0.0);
    });
});

describe("float_exprs_66", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_66.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_66: f32.no_fold_add_neg (instance 0)", () => {
        let _f32_no_fold_add_neg = module.getExport("f32.no_fold_add_neg");
        expect(_f32_no_fold_add_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_result = module.invoke(_f32_no_fold_add_neg, 0.0);
        expect(_f32_no_fold_add_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_66: f32.no_fold_add_neg (instance 1)", () => {
        let _f32_no_fold_add_neg = module.getExport("f32.no_fold_add_neg");
        expect(_f32_no_fold_add_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_result = module.invoke(_f32_no_fold_add_neg, -0.0);
        expect(_f32_no_fold_add_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_66: f32.no_fold_add_neg (instance 2)", () => {
        let _f32_no_fold_add_neg = module.getExport("f32.no_fold_add_neg");
        expect(_f32_no_fold_add_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_result = module.invoke(_f32_no_fold_add_neg, Infinity);
        expect(_f32_no_fold_add_neg_result).toBe(NaN);
    });

    _test("execution of float_exprs_66: f32.no_fold_add_neg (instance 3)", () => {
        let _f32_no_fold_add_neg = module.getExport("f32.no_fold_add_neg");
        expect(_f32_no_fold_add_neg).not.toBeUndefined();
        let _f32_no_fold_add_neg_result = module.invoke(_f32_no_fold_add_neg, -Infinity);
        expect(_f32_no_fold_add_neg_result).toBe(NaN);
    });

    _test("execution of float_exprs_66: f64.no_fold_add_neg (instance 0)", () => {
        let _f64_no_fold_add_neg = module.getExport("f64.no_fold_add_neg");
        expect(_f64_no_fold_add_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_result = module.invoke(_f64_no_fold_add_neg, 0.0);
        expect(_f64_no_fold_add_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_66: f64.no_fold_add_neg (instance 1)", () => {
        let _f64_no_fold_add_neg = module.getExport("f64.no_fold_add_neg");
        expect(_f64_no_fold_add_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_result = module.invoke(_f64_no_fold_add_neg, -0.0);
        expect(_f64_no_fold_add_neg_result).toBe(0.0);
    });

    _test("execution of float_exprs_66: f64.no_fold_add_neg (instance 2)", () => {
        let _f64_no_fold_add_neg = module.getExport("f64.no_fold_add_neg");
        expect(_f64_no_fold_add_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_result = module.invoke(_f64_no_fold_add_neg, Infinity);
        expect(_f64_no_fold_add_neg_result).toBe(NaN);
    });

    _test("execution of float_exprs_66: f64.no_fold_add_neg (instance 3)", () => {
        let _f64_no_fold_add_neg = module.getExport("f64.no_fold_add_neg");
        expect(_f64_no_fold_add_neg).not.toBeUndefined();
        let _f64_no_fold_add_neg_result = module.invoke(_f64_no_fold_add_neg, -Infinity);
        expect(_f64_no_fold_add_neg_result).toBe(NaN);
    });
});

describe("float_exprs_67", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_67.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_67: f32.no_fold_6x_via_add (instance 0)", () => {
        let _f32_no_fold_6x_via_add = module.getExport("f32.no_fold_6x_via_add");
        expect(_f32_no_fold_6x_via_add).not.toBeUndefined();
        let _f32_no_fold_6x_via_add_result = module.invoke(
            _f32_no_fold_6x_via_add,
            -8.555137345589493e29
        );
        expect(_f32_no_fold_6x_via_add_result).toBe(-5.133082709585151e30);
    });

    _test("execution of float_exprs_67: f32.no_fold_6x_via_add (instance 1)", () => {
        let _f32_no_fold_6x_via_add = module.getExport("f32.no_fold_6x_via_add");
        expect(_f32_no_fold_6x_via_add).not.toBeUndefined();
        let _f32_no_fold_6x_via_add_result = module.invoke(
            _f32_no_fold_6x_via_add,
            -1.2095059945729172e-23
        );
        expect(_f32_no_fold_6x_via_add_result).toBe(-7.257036282981865e-23);
    });

    _test("execution of float_exprs_67: f32.no_fold_6x_via_add (instance 2)", () => {
        let _f32_no_fold_6x_via_add = module.getExport("f32.no_fold_6x_via_add");
        expect(_f32_no_fold_6x_via_add).not.toBeUndefined();
        let _f32_no_fold_6x_via_add_result = module.invoke(
            _f32_no_fold_6x_via_add,
            6.642689238252199e-24
        );
        expect(_f32_no_fold_6x_via_add_result).toBe(3.9856133851791384e-23);
    });

    _test("execution of float_exprs_67: f32.no_fold_6x_via_add (instance 3)", () => {
        let _f32_no_fold_6x_via_add = module.getExport("f32.no_fold_6x_via_add");
        expect(_f32_no_fold_6x_via_add).not.toBeUndefined();
        let _f32_no_fold_6x_via_add_result = module.invoke(
            _f32_no_fold_6x_via_add,
            -6.147345965601403e-10
        );
        expect(_f32_no_fold_6x_via_add_result).toBe(-3.688407357316237e-9);
    });

    _test("execution of float_exprs_67: f32.no_fold_6x_via_add (instance 4)", () => {
        let _f32_no_fold_6x_via_add = module.getExport("f32.no_fold_6x_via_add");
        expect(_f32_no_fold_6x_via_add).not.toBeUndefined();
        let _f32_no_fold_6x_via_add_result = module.invoke(
            _f32_no_fold_6x_via_add,
            -1.209858100766292e24
        );
        expect(_f32_no_fold_6x_via_add_result).toBe(-7.259148316367375e24);
    });

    _test("execution of float_exprs_67: f64.no_fold_6x_via_add (instance 0)", () => {
        let _f64_no_fold_6x_via_add = module.getExport("f64.no_fold_6x_via_add");
        expect(_f64_no_fold_6x_via_add).not.toBeUndefined();
        let _f64_no_fold_6x_via_add_result = module.invoke(
            _f64_no_fold_6x_via_add,
            -3.517044906027714e20
        );
        expect(_f64_no_fold_6x_via_add_result).toBe(-2.1102269436166286e21);
    });

    _test("execution of float_exprs_67: f64.no_fold_6x_via_add (instance 1)", () => {
        let _f64_no_fold_6x_via_add = module.getExport("f64.no_fold_6x_via_add");
        expect(_f64_no_fold_6x_via_add).not.toBeUndefined();
        let _f64_no_fold_6x_via_add_result = module.invoke(
            _f64_no_fold_6x_via_add,
            -1.4824294109868734e-161
        );
        expect(_f64_no_fold_6x_via_add_result).toBe(-8.894576465921239e-161);
    });

    _test("execution of float_exprs_67: f64.no_fold_6x_via_add (instance 2)", () => {
        let _f64_no_fold_6x_via_add = module.getExport("f64.no_fold_6x_via_add");
        expect(_f64_no_fold_6x_via_add).not.toBeUndefined();
        let _f64_no_fold_6x_via_add_result = module.invoke(
            _f64_no_fold_6x_via_add,
            -7.484567838781003e81
        );
        expect(_f64_no_fold_6x_via_add_result).toBe(-4.4907407032686014e82);
    });

    _test("execution of float_exprs_67: f64.no_fold_6x_via_add (instance 3)", () => {
        let _f64_no_fold_6x_via_add = module.getExport("f64.no_fold_6x_via_add");
        expect(_f64_no_fold_6x_via_add).not.toBeUndefined();
        let _f64_no_fold_6x_via_add_result = module.invoke(
            _f64_no_fold_6x_via_add,
            1.7277868192936067e226
        );
        expect(_f64_no_fold_6x_via_add_result).toBe(1.0366720915761641e227);
    });

    _test("execution of float_exprs_67: f64.no_fold_6x_via_add (instance 4)", () => {
        let _f64_no_fold_6x_via_add = module.getExport("f64.no_fold_6x_via_add");
        expect(_f64_no_fold_6x_via_add).not.toBeUndefined();
        let _f64_no_fold_6x_via_add_result = module.invoke(
            _f64_no_fold_6x_via_add,
            -4.311639752519561e70
        );
        expect(_f64_no_fold_6x_via_add_result).toBe(-2.5869838515117364e71);
    });
});

describe("float_exprs_68", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_68.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_68: f32.no_fold_div_div (instance 0)", () => {
        let _f32_no_fold_div_div = module.getExport("f32.no_fold_div_div");
        expect(_f32_no_fold_div_div).not.toBeUndefined();
        let _f32_no_fold_div_div_result = module.invoke(
            _f32_no_fold_div_div,
            -5.938475291688351e23,
            -3.0265671739471145e-5,
            -1584.8681640625
        );
        expect(_f32_no_fold_div_div_result).toBe(-1.2380308618298272e25);
    });

    _test("execution of float_exprs_68: f32.no_fold_div_div (instance 1)", () => {
        let _f32_no_fold_div_div = module.getExport("f32.no_fold_div_div");
        expect(_f32_no_fold_div_div).not.toBeUndefined();
        let _f32_no_fold_div_div_result = module.invoke(
            _f32_no_fold_div_div,
            1.5438961616455177e-21,
            2.5334292803745544e33,
            -2.684478285682781e-34
        );
        expect(_f32_no_fold_div_div_result).toBe(-0.0);
    });

    _test("execution of float_exprs_68: f32.no_fold_div_div (instance 2)", () => {
        let _f32_no_fold_div_div = module.getExport("f32.no_fold_div_div");
        expect(_f32_no_fold_div_div).not.toBeUndefined();
        let _f32_no_fold_div_div_result = module.invoke(
            _f32_no_fold_div_div,
            13417423306752.0,
            2.933920464447575e-32,
            7.638637444001918e31
        );
        expect(_f32_no_fold_div_div_result).toBe(Infinity);
    });

    _test("execution of float_exprs_68: f32.no_fold_div_div (instance 3)", () => {
        let _f32_no_fold_div_div = module.getExport("f32.no_fold_div_div");
        expect(_f32_no_fold_div_div).not.toBeUndefined();
        let _f32_no_fold_div_div_result = module.invoke(
            _f32_no_fold_div_div,
            -0.00010776529234135523,
            -3.422094290809958e37,
            -1.656232388649176e-13
        );
        expect(_f32_no_fold_div_div_result).toBe(-1.9011326935735888e-29);
    });

    _test("execution of float_exprs_68: f32.no_fold_div_div (instance 4)", () => {
        let _f32_no_fold_div_div = module.getExport("f32.no_fold_div_div");
        expect(_f32_no_fold_div_div).not.toBeUndefined();
        let _f32_no_fold_div_div_result = module.invoke(
            _f32_no_fold_div_div,
            130582499557376.0,
            9.624534661044634e16,
            -4.146154510069999e37
        );
        expect(_f32_no_fold_div_div_result).toBe(-3.272312173891313e-41);
    });

    _test("execution of float_exprs_68: f64.no_fold_div_div (instance 0)", () => {
        let _f64_no_fold_div_div = module.getExport("f64.no_fold_div_div");
        expect(_f64_no_fold_div_div).not.toBeUndefined();
        let _f64_no_fold_div_div_result = module.invoke(
            _f64_no_fold_div_div,
            4.7776287467101434e101,
            1.0278672042040401e176,
            -7.18999894988884e-236
        );
        expect(_f64_no_fold_div_div_result).toBe(-6.464673011878799e160);
    });

    _test("execution of float_exprs_68: f64.no_fold_div_div (instance 1)", () => {
        let _f64_no_fold_div_div = module.getExport("f64.no_fold_div_div");
        expect(_f64_no_fold_div_div).not.toBeUndefined();
        let _f64_no_fold_div_div_result = module.invoke(
            _f64_no_fold_div_div,
            -2.1790236783875714e238,
            2.8324436844616576e-9,
            1.861107682598687e95
        );
        expect(_f64_no_fold_div_div_result).toBe(-4.133606807992067e151);
    });

    _test("execution of float_exprs_68: f64.no_fold_div_div (instance 2)", () => {
        let _f64_no_fold_div_div = module.getExport("f64.no_fold_div_div");
        expect(_f64_no_fold_div_div).not.toBeUndefined();
        let _f64_no_fold_div_div_result = module.invoke(
            _f64_no_fold_div_div,
            -7.287619347826683,
            -1.3467607316739855e265,
            2.462719007013688e51
        );
        expect(_f64_no_fold_div_div_result).toBe(2.19725454e-316);
    });

    _test("execution of float_exprs_68: f64.no_fold_div_div (instance 3)", () => {
        let _f64_no_fold_div_div = module.getExport("f64.no_fold_div_div");
        expect(_f64_no_fold_div_div).not.toBeUndefined();
        let _f64_no_fold_div_div_result = module.invoke(
            _f64_no_fold_div_div,
            -2.865523978629633e248,
            1.0211980370639414e-247,
            2.876458648332401e289
        );
        expect(_f64_no_fold_div_div_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_68: f64.no_fold_div_div (instance 4)", () => {
        let _f64_no_fold_div_div = module.getExport("f64.no_fold_div_div");
        expect(_f64_no_fold_div_div).not.toBeUndefined();
        let _f64_no_fold_div_div_result = module.invoke(
            _f64_no_fold_div_div,
            -9.525735602663874e-268,
            5.0233948816631796e-180,
            -2.8304570228221077e-42
        );
        expect(_f64_no_fold_div_div_result).toBe(6.699534674970116e-47);
    });
});

describe("float_exprs_69", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_69.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_69: f32.no_fold_mul_divs (instance 0)", () => {
        let _f32_no_fold_mul_divs = module.getExport("f32.no_fold_mul_divs");
        expect(_f32_no_fold_mul_divs).not.toBeUndefined();
        let _f32_no_fold_mul_divs_result = module.invoke(
            _f32_no_fold_mul_divs,
            -2.723473290390395e-33,
            3.8978429106441753e-28,
            4.8471230913214525e-27,
            -25.35777473449707
        );
        expect(_f32_no_fold_mul_divs_result).toBe(1.3355854774737518e-33);
    });

    _test("execution of float_exprs_69: f32.no_fold_mul_divs (instance 1)", () => {
        let _f32_no_fold_mul_divs = module.getExport("f32.no_fold_mul_divs");
        expect(_f32_no_fold_mul_divs).not.toBeUndefined();
        let _f32_no_fold_mul_divs_result = module.invoke(
            _f32_no_fold_mul_divs,
            -5.372844131686042e30,
            38340912.0,
            1.4973162251408212e-5,
            0.19213825464248657
        );
        expect(_f32_no_fold_mul_divs_result).toBe(-1.0920474831396798e19);
    });

    _test("execution of float_exprs_69: f32.no_fold_mul_divs (instance 2)", () => {
        let _f32_no_fold_mul_divs = module.getExport("f32.no_fold_mul_divs");
        expect(_f32_no_fold_mul_divs).not.toBeUndefined();
        let _f32_no_fold_mul_divs_result = module.invoke(
            _f32_no_fold_mul_divs,
            -16085042176.0,
            -1092920213504.0,
            -869606016.0,
            -1201.2060546875
        );
        expect(_f32_no_fold_mul_divs_result).toBe(10654.638671875);
    });

    _test("execution of float_exprs_69: f32.no_fold_mul_divs (instance 3)", () => {
        let _f32_no_fold_mul_divs = module.getExport("f32.no_fold_mul_divs");
        expect(_f32_no_fold_mul_divs).not.toBeUndefined();
        let _f32_no_fold_mul_divs_result = module.invoke(
            _f32_no_fold_mul_divs,
            -1.2712231404391021e33,
            1.0768114178105748e-10,
            1.857627103163395e-5,
            4.9268619715816126e23
        );
        expect(_f32_no_fold_mul_divs_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_69: f32.no_fold_mul_divs (instance 4)", () => {
        let _f32_no_fold_mul_divs = module.getExport("f32.no_fold_mul_divs");
        expect(_f32_no_fold_mul_divs).not.toBeUndefined();
        let _f32_no_fold_mul_divs_result = module.invoke(
            _f32_no_fold_mul_divs,
            1.3783863765364776e-16,
            -6.504628450864499e-20,
            6.816768371365373e-28,
            2.2892627030146606e-11
        );
        expect(_f32_no_fold_mul_divs_result).toBe(-6.310029538811324e-14);
    });

    _test("execution of float_exprs_69: f64.no_fold_mul_divs (instance 0)", () => {
        let _f64_no_fold_mul_divs = module.getExport("f64.no_fold_mul_divs");
        expect(_f64_no_fold_mul_divs).not.toBeUndefined();
        let _f64_no_fold_mul_divs_result = module.invoke(
            _f64_no_fold_mul_divs,
            -3.466499805233369e-247,
            -4.045567512248635e-140,
            -6.462341070607592e164,
            1.0045589533354074e56
        );
        expect(_f64_no_fold_mul_divs_result).toBe(-55.12215321310017);
    });

    _test("execution of float_exprs_69: f64.no_fold_mul_divs (instance 1)", () => {
        let _f64_no_fold_mul_divs = module.getExport("f64.no_fold_mul_divs");
        expect(_f64_no_fold_mul_divs).not.toBeUndefined();
        let _f64_no_fold_mul_divs_result = module.invoke(
            _f64_no_fold_mul_divs,
            -5.054883907636325e34,
            2.2223781649976275e-277,
            -1.5029790371100852e109,
            -6.994123759538121e140
        );
        expect(_f64_no_fold_mul_divs_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_69: f64.no_fold_mul_divs (instance 2)", () => {
        let _f64_no_fold_mul_divs = module.getExport("f64.no_fold_mul_divs");
        expect(_f64_no_fold_mul_divs).not.toBeUndefined();
        let _f64_no_fold_mul_divs_result = module.invoke(
            _f64_no_fold_mul_divs,
            -8.361116536344947e92,
            -1.0029528876067567e58,
            -1.2867801766038772e-42,
            -4.2230277746883753e220
        );
        expect(_f64_no_fold_mul_divs_result).toBe(2.540178100556387e-228);
    });

    _test("execution of float_exprs_69: f64.no_fold_mul_divs (instance 3)", () => {
        let _f64_no_fold_mul_divs = module.getExport("f64.no_fold_mul_divs");
        expect(_f64_no_fold_mul_divs).not.toBeUndefined();
        let _f64_no_fold_mul_divs_result = module.invoke(
            _f64_no_fold_mul_divs,
            -1.2020032116411193e39,
            -4.667409771338769e-105,
            1.0888652376540085e-288,
            1.8334948666517216e67
        );
        expect(_f64_no_fold_mul_divs_result).toBe(0.0);
    });

    _test("execution of float_exprs_69: f64.no_fold_mul_divs (instance 4)", () => {
        let _f64_no_fold_mul_divs = module.getExport("f64.no_fold_mul_divs");
        expect(_f64_no_fold_mul_divs).not.toBeUndefined();
        let _f64_no_fold_mul_divs_result = module.invoke(
            _f64_no_fold_mul_divs,
            6.331839568840419e-6,
            5.544474241905778e-84,
            2.7822472480359097e-187,
            -1.4419321081893022e106
        );
        expect(_f64_no_fold_mul_divs_result).toBe(-2.2035374770746518e-215);
    });
});

describe("float_exprs_70", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_70.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_70: f32.no_fold_add_divs (instance 0)", () => {
        let _f32_no_fold_add_divs = module.getExport("f32.no_fold_add_divs");
        expect(_f32_no_fold_add_divs).not.toBeUndefined();
        let _f32_no_fold_add_divs_result = module.invoke(
            _f32_no_fold_add_divs,
            377.368896484375,
            -0.04011818394064903,
            -1.3629298560546316e38
        );
        expect(_f32_no_fold_add_divs_result).toBe(-2.768512148377355e-36);
    });

    _test("execution of float_exprs_70: f32.no_fold_add_divs (instance 1)", () => {
        let _f32_no_fold_add_divs = module.getExport("f32.no_fold_add_divs");
        expect(_f32_no_fold_add_divs).not.toBeUndefined();
        let _f32_no_fold_add_divs_result = module.invoke(
            _f32_no_fold_add_divs,
            -1.8234023041237435e-19,
            -3.3970288113369237e-15,
            -170996707360768.0
        );
        expect(_f32_no_fold_add_divs_result).toBe(1.9867115411157125e-29);
    });

    _test("execution of float_exprs_70: f32.no_fold_add_divs (instance 2)", () => {
        let _f32_no_fold_add_divs = module.getExport("f32.no_fold_add_divs");
        expect(_f32_no_fold_add_divs).not.toBeUndefined();
        let _f32_no_fold_add_divs_result = module.invoke(
            _f32_no_fold_add_divs,
            -1.967263835557856e-14,
            6.414098702699398e-20,
            -541989070176256.0
        );
        expect(_f32_no_fold_add_divs_result).toBe(3.6296996567176507e-29);
    });

    _test("execution of float_exprs_70: f32.no_fold_add_divs (instance 3)", () => {
        let _f32_no_fold_add_divs = module.getExport("f32.no_fold_add_divs");
        expect(_f32_no_fold_add_divs).not.toBeUndefined();
        let _f32_no_fold_add_divs_result = module.invoke(
            _f32_no_fold_add_divs,
            -4.038505822193515e-31,
            3.848228081428171e-30,
            -3.4523719791292376e26
        );
        expect(_f32_no_fold_add_divs_result).toBe(0.0);
    });

    _test("execution of float_exprs_70: f32.no_fold_add_divs (instance 4)", () => {
        let _f32_no_fold_add_divs = module.getExport("f32.no_fold_add_divs");
        expect(_f32_no_fold_add_divs).not.toBeUndefined();
        let _f32_no_fold_add_divs_result = module.invoke(
            _f32_no_fold_add_divs,
            0.0010934415040537715,
            0.2070312350988388,
            1.3509783969902986e-37
        );
        expect(_f32_no_fold_add_divs_result).toBe(1.540547727687837e36);
    });

    _test("execution of float_exprs_70: f64.no_fold_add_divs (instance 0)", () => {
        let _f64_no_fold_add_divs = module.getExport("f64.no_fold_add_divs");
        expect(_f64_no_fold_add_divs).not.toBeUndefined();
        let _f64_no_fold_add_divs_result = module.invoke(
            _f64_no_fold_add_divs,
            -4.91701943214376e129,
            6.813215632201902e130,
            2.6125410100237784e274
        );
        expect(_f64_no_fold_add_divs_result).toBe(2.4196801752520584e-144);
    });

    _test("execution of float_exprs_70: f64.no_fold_add_divs (instance 1)", () => {
        let _f64_no_fold_add_divs = module.getExport("f64.no_fold_add_divs");
        expect(_f64_no_fold_add_divs).not.toBeUndefined();
        let _f64_no_fold_add_divs_result = module.invoke(
            _f64_no_fold_add_divs,
            -1.020646795322455e16,
            63.422616671746226,
            -1.6024747869814892e-288
        );
        expect(_f64_no_fold_add_divs_result).toBe(6.369190976445851e303);
    });

    _test("execution of float_exprs_70: f64.no_fold_add_divs (instance 2)", () => {
        let _f64_no_fold_add_divs = module.getExport("f64.no_fold_add_divs");
        expect(_f64_no_fold_add_divs).not.toBeUndefined();
        let _f64_no_fold_add_divs_result = module.invoke(
            _f64_no_fold_add_divs,
            -1.5270569633109837e-291,
            2.5755503329232514e-294,
            5.882693916421492e151
        );
        expect(_f64_no_fold_add_divs_result).toBe(0.0);
    });

    _test("execution of float_exprs_70: f64.no_fold_add_divs (instance 3)", () => {
        let _f64_no_fold_add_divs = module.getExport("f64.no_fold_add_divs");
        expect(_f64_no_fold_add_divs).not.toBeUndefined();
        let _f64_no_fold_add_divs_result = module.invoke(
            _f64_no_fold_add_divs,
            2.666796487439464e94,
            -2.1315692524936578e99,
            1.2377004518680012e-38
        );
        expect(_f64_no_fold_add_divs_result).toBe(-1.7221796932462534e137);
    });

    _test("execution of float_exprs_70: f64.no_fold_add_divs (instance 4)", () => {
        let _f64_no_fold_add_divs = module.getExport("f64.no_fold_add_divs");
        expect(_f64_no_fold_add_divs).not.toBeUndefined();
        let _f64_no_fold_add_divs_result = module.invoke(
            _f64_no_fold_add_divs,
            -1.2952888377288216e-219,
            5.808769259900048e-228,
            1.6745741699443756e-21
        );
        expect(_f64_no_fold_add_divs_result).toBe(-7.735034106987796e-199);
    });
});

describe("float_exprs_71", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_71.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_71: f32.no_fold_sqrt_square (instance 0)", () => {
        let _f32_no_fold_sqrt_square = module.getExport("f32.no_fold_sqrt_square");
        expect(_f32_no_fold_sqrt_square).not.toBeUndefined();
        let _f32_no_fold_sqrt_square_result = module.invoke(
            _f32_no_fold_sqrt_square,
            -1.8460000706651253e-20
        );
        expect(_f32_no_fold_sqrt_square_result).toBe(1.8460010400174057e-20);
    });

    _test("execution of float_exprs_71: f32.no_fold_sqrt_square (instance 1)", () => {
        let _f32_no_fold_sqrt_square = module.getExport("f32.no_fold_sqrt_square");
        expect(_f32_no_fold_sqrt_square).not.toBeUndefined();
        let _f32_no_fold_sqrt_square_result = module.invoke(
            _f32_no_fold_sqrt_square,
            -1.7907473239008437e-22
        );
        expect(_f32_no_fold_sqrt_square_result).toBe(1.7952678124321221e-22);
    });

    _test("execution of float_exprs_71: f32.no_fold_sqrt_square (instance 2)", () => {
        let _f32_no_fold_sqrt_square = module.getExport("f32.no_fold_sqrt_square");
        expect(_f32_no_fold_sqrt_square).not.toBeUndefined();
        let _f32_no_fold_sqrt_square_result = module.invoke(
            _f32_no_fold_sqrt_square,
            -7.912078484555785e-22
        );
        expect(_f32_no_fold_sqrt_square_result).toBe(7.91442007615797e-22);
    });

    _test("execution of float_exprs_71: f32.no_fold_sqrt_square (instance 3)", () => {
        let _f32_no_fold_sqrt_square = module.getExport("f32.no_fold_sqrt_square");
        expect(_f32_no_fold_sqrt_square).not.toBeUndefined();
        let _f32_no_fold_sqrt_square_result = module.invoke(
            _f32_no_fold_sqrt_square,
            1.8012937732222048e-26
        );
        expect(_f32_no_fold_sqrt_square_result).toBe(0.0);
    });

    _test("execution of float_exprs_71: f32.no_fold_sqrt_square (instance 4)", () => {
        let _f32_no_fold_sqrt_square = module.getExport("f32.no_fold_sqrt_square");
        expect(_f32_no_fold_sqrt_square).not.toBeUndefined();
        let _f32_no_fold_sqrt_square_result = module.invoke(
            _f32_no_fold_sqrt_square,
            6.1050196817521095e32
        );
        expect(_f32_no_fold_sqrt_square_result).toBe(Infinity);
    });

    _test("execution of float_exprs_71: f64.no_fold_sqrt_square (instance 0)", () => {
        let _f64_no_fold_sqrt_square = module.getExport("f64.no_fold_sqrt_square");
        expect(_f64_no_fold_sqrt_square).not.toBeUndefined();
        let _f64_no_fold_sqrt_square_result = module.invoke(
            _f64_no_fold_sqrt_square,
            6.209297167747496e-160
        );
        expect(_f64_no_fold_sqrt_square_result).toBe(6.209299542179727e-160);
    });

    _test("execution of float_exprs_71: f64.no_fold_sqrt_square (instance 1)", () => {
        let _f64_no_fold_sqrt_square = module.getExport("f64.no_fold_sqrt_square");
        expect(_f64_no_fold_sqrt_square).not.toBeUndefined();
        let _f64_no_fold_sqrt_square_result = module.invoke(
            _f64_no_fold_sqrt_square,
            -2.4211175303738945e-155
        );
        expect(_f64_no_fold_sqrt_square_result).toBe(2.4211175303738937e-155);
    });

    _test("execution of float_exprs_71: f64.no_fold_sqrt_square (instance 2)", () => {
        let _f64_no_fold_sqrt_square = module.getExport("f64.no_fold_sqrt_square");
        expect(_f64_no_fold_sqrt_square).not.toBeUndefined();
        let _f64_no_fold_sqrt_square_result = module.invoke(
            _f64_no_fold_sqrt_square,
            -1.6460687611875645e-157
        );
        expect(_f64_no_fold_sqrt_square_result).toBe(1.6460687611532367e-157);
    });

    _test("execution of float_exprs_71: f64.no_fold_sqrt_square (instance 3)", () => {
        let _f64_no_fold_sqrt_square = module.getExport("f64.no_fold_sqrt_square");
        expect(_f64_no_fold_sqrt_square).not.toBeUndefined();
        let _f64_no_fold_sqrt_square_result = module.invoke(
            _f64_no_fold_sqrt_square,
            -3.797811613378828e-186
        );
        expect(_f64_no_fold_sqrt_square_result).toBe(0.0);
    });

    _test("execution of float_exprs_71: f64.no_fold_sqrt_square (instance 4)", () => {
        let _f64_no_fold_sqrt_square = module.getExport("f64.no_fold_sqrt_square");
        expect(_f64_no_fold_sqrt_square).not.toBeUndefined();
        let _f64_no_fold_sqrt_square_result = module.invoke(
            _f64_no_fold_sqrt_square,
            8.158084284605592e257
        );
        expect(_f64_no_fold_sqrt_square_result).toBe(Infinity);
    });
});

describe("float_exprs_72", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_72.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_72: f32.no_fold_mul_sqrts (instance 0)", () => {
        let _f32_no_fold_mul_sqrts = module.getExport("f32.no_fold_mul_sqrts");
        expect(_f32_no_fold_mul_sqrts).not.toBeUndefined();
        let _f32_no_fold_mul_sqrts_result = module.invoke(
            _f32_no_fold_mul_sqrts,
            4.3885046947421455e-38,
            -1.1867333798281266e-25
        );
        expect(_f32_no_fold_mul_sqrts_result).toBe(NaN);
    });

    _test("execution of float_exprs_72: f32.no_fold_mul_sqrts (instance 1)", () => {
        let _f32_no_fold_mul_sqrts = module.getExport("f32.no_fold_mul_sqrts");
        expect(_f32_no_fold_mul_sqrts).not.toBeUndefined();
        let _f32_no_fold_mul_sqrts_result = module.invoke(
            _f32_no_fold_mul_sqrts,
            2.536590811126416e-28,
            4.132067465967282e-10
        );
        expect(_f32_no_fold_mul_sqrts_result).toBe(3.237493152183345e-19);
    });

    _test("execution of float_exprs_72: f32.no_fold_mul_sqrts (instance 2)", () => {
        let _f32_no_fold_mul_sqrts = module.getExport("f32.no_fold_mul_sqrts");
        expect(_f32_no_fold_mul_sqrts).not.toBeUndefined();
        let _f32_no_fold_mul_sqrts_result = module.invoke(
            _f32_no_fold_mul_sqrts,
            4.2144832231674335e-27,
            97.24911499023438
        );
        expect(_f32_no_fold_mul_sqrts_result).toBe(6.401990482879372e-13);
    });

    _test("execution of float_exprs_72: f32.no_fold_mul_sqrts (instance 3)", () => {
        let _f32_no_fold_mul_sqrts = module.getExport("f32.no_fold_mul_sqrts");
        expect(_f32_no_fold_mul_sqrts).not.toBeUndefined();
        let _f32_no_fold_mul_sqrts_result = module.invoke(
            _f32_no_fold_mul_sqrts,
            3.7240763422782964e30,
            0.0029449081048369408
        );
        expect(_f32_no_fold_mul_sqrts_result).toBe(104723751370752.0);
    });

    _test("execution of float_exprs_72: f32.no_fold_mul_sqrts (instance 4)", () => {
        let _f32_no_fold_mul_sqrts = module.getExport("f32.no_fold_mul_sqrts");
        expect(_f32_no_fold_mul_sqrts).not.toBeUndefined();
        let _f32_no_fold_mul_sqrts_result = module.invoke(
            _f32_no_fold_mul_sqrts,
            1.8660559344485864e-17,
            0.002111261012032628
        );
        expect(_f32_no_fold_mul_sqrts_result).toBe(1.9848754584383954e-10);
    });

    _test("execution of float_exprs_72: f64.no_fold_mul_sqrts (instance 0)", () => {
        let _f64_no_fold_mul_sqrts = module.getExport("f64.no_fold_mul_sqrts");
        expect(_f64_no_fold_mul_sqrts).not.toBeUndefined();
        let _f64_no_fold_mul_sqrts_result = module.invoke(
            _f64_no_fold_mul_sqrts,
            -1.2742064369772862e-191,
            -0.006829962938197246
        );
        expect(_f64_no_fold_mul_sqrts_result).toBe(NaN);
    });

    _test("execution of float_exprs_72: f64.no_fold_mul_sqrts (instance 1)", () => {
        let _f64_no_fold_mul_sqrts = module.getExport("f64.no_fold_mul_sqrts");
        expect(_f64_no_fold_mul_sqrts).not.toBeUndefined();
        let _f64_no_fold_mul_sqrts_result = module.invoke(
            _f64_no_fold_mul_sqrts,
            3.7082569269527534e-194,
            4.7183002857015043e-122
        );
        expect(_f64_no_fold_mul_sqrts_result).toBe(4.1829020688865954e-158);
    });

    _test("execution of float_exprs_72: f64.no_fold_mul_sqrts (instance 2)", () => {
        let _f64_no_fold_mul_sqrts = module.getExport("f64.no_fold_mul_sqrts");
        expect(_f64_no_fold_mul_sqrts).not.toBeUndefined();
        let _f64_no_fold_mul_sqrts_result = module.invoke(
            _f64_no_fold_mul_sqrts,
            2.329359505918655e-27,
            2.0743399642806364e-275
        );
        expect(_f64_no_fold_mul_sqrts_result).toBe(2.1981545701574452e-151);
    });

    _test("execution of float_exprs_72: f64.no_fold_mul_sqrts (instance 3)", () => {
        let _f64_no_fold_mul_sqrts = module.getExport("f64.no_fold_mul_sqrts");
        expect(_f64_no_fold_mul_sqrts).not.toBeUndefined();
        let _f64_no_fold_mul_sqrts_result = module.invoke(
            _f64_no_fold_mul_sqrts,
            1.0541899336289437e-109,
            5.98123819872803e-173
        );
        expect(_f64_no_fold_mul_sqrts_result).toBe(2.511047809129887e-141);
    });

    _test("execution of float_exprs_72: f64.no_fold_mul_sqrts (instance 4)", () => {
        let _f64_no_fold_mul_sqrts = module.getExport("f64.no_fold_mul_sqrts");
        expect(_f64_no_fold_mul_sqrts).not.toBeUndefined();
        let _f64_no_fold_mul_sqrts_result = module.invoke(
            _f64_no_fold_mul_sqrts,
            25589482.717358638,
            3.913891207119902e154
        );
        expect(_f64_no_fold_mul_sqrts_result).toBe(1.0007719590506955e81);
    });
});

describe("float_exprs_73", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_73.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_73: f32.no_fold_div_sqrts (instance 0)", () => {
        let _f32_no_fold_div_sqrts = module.getExport("f32.no_fold_div_sqrts");
        expect(_f32_no_fold_div_sqrts).not.toBeUndefined();
        let _f32_no_fold_div_sqrts_result = module.invoke(
            _f32_no_fold_div_sqrts,
            -58545012.0,
            -6.443772954144732e-18
        );
        expect(_f32_no_fold_div_sqrts_result).toBe(NaN);
    });

    _test("execution of float_exprs_73: f32.no_fold_div_sqrts (instance 1)", () => {
        let _f32_no_fold_div_sqrts = module.getExport("f32.no_fold_div_sqrts");
        expect(_f32_no_fold_div_sqrts).not.toBeUndefined();
        let _f32_no_fold_div_sqrts_result = module.invoke(
            _f32_no_fold_div_sqrts,
            7407384064.0,
            209778928.0
        );
        expect(_f32_no_fold_div_sqrts_result).toBe(5.942258358001709);
    });

    _test("execution of float_exprs_73: f32.no_fold_div_sqrts (instance 2)", () => {
        let _f32_no_fold_div_sqrts = module.getExport("f32.no_fold_div_sqrts");
        expect(_f32_no_fold_div_sqrts).not.toBeUndefined();
        let _f32_no_fold_div_sqrts_result = module.invoke(
            _f32_no_fold_div_sqrts,
            1.3764125694787306e-36,
            54692.8984375
        );
        expect(_f32_no_fold_div_sqrts_result).toBe(5.016592728986257e-21);
    });

    _test("execution of float_exprs_73: f32.no_fold_div_sqrts (instance 3)", () => {
        let _f32_no_fold_div_sqrts = module.getExport("f32.no_fold_div_sqrts");
        expect(_f32_no_fold_div_sqrts).not.toBeUndefined();
        let _f32_no_fold_div_sqrts_result = module.invoke(
            _f32_no_fold_div_sqrts,
            9.792889648106701e17,
            1.2643551761115646e-9
        );
        expect(_f32_no_fold_div_sqrts_result).toBe(27830490497024.0);
    });

    _test("execution of float_exprs_73: f32.no_fold_div_sqrts (instance 4)", () => {
        let _f32_no_fold_div_sqrts = module.getExport("f32.no_fold_div_sqrts");
        expect(_f32_no_fold_div_sqrts).not.toBeUndefined();
        let _f32_no_fold_div_sqrts_result = module.invoke(
            _f32_no_fold_div_sqrts,
            2.9141283262714446e-34,
            1.7928174342978603e-31
        );
        expect(_f32_no_fold_div_sqrts_result).toBe(0.04031682014465332);
    });

    _test("execution of float_exprs_73: f64.no_fold_div_sqrts (instance 0)", () => {
        let _f64_no_fold_div_sqrts = module.getExport("f64.no_fold_div_sqrts");
        expect(_f64_no_fold_div_sqrts).not.toBeUndefined();
        let _f64_no_fold_div_sqrts_result = module.invoke(
            _f64_no_fold_div_sqrts,
            -1.2206137319883022e-214,
            -8.209583449676083e-57
        );
        expect(_f64_no_fold_div_sqrts_result).toBe(NaN);
    });

    _test("execution of float_exprs_73: f64.no_fold_div_sqrts (instance 1)", () => {
        let _f64_no_fold_div_sqrts = module.getExport("f64.no_fold_div_sqrts");
        expect(_f64_no_fold_div_sqrts).not.toBeUndefined();
        let _f64_no_fold_div_sqrts_result = module.invoke(
            _f64_no_fold_div_sqrts,
            3.3818852462305824e-177,
            7.655783976315048e162
        );
        expect(_f64_no_fold_div_sqrts_result).toBe(2.1017671425665687e-170);
    });

    _test("execution of float_exprs_73: f64.no_fold_div_sqrts (instance 2)", () => {
        let _f64_no_fold_div_sqrts = module.getExport("f64.no_fold_div_sqrts");
        expect(_f64_no_fold_div_sqrts).not.toBeUndefined();
        let _f64_no_fold_div_sqrts_result = module.invoke(
            _f64_no_fold_div_sqrts,
            4.596333567064751e157,
            2.3932467846883046e-33
        );
        expect(_f64_no_fold_div_sqrts_result).toBe(1.3858366017266315e95);
    });

    _test("execution of float_exprs_73: f64.no_fold_div_sqrts (instance 3)", () => {
        let _f64_no_fold_div_sqrts = module.getExport("f64.no_fold_div_sqrts");
        expect(_f64_no_fold_div_sqrts).not.toBeUndefined();
        let _f64_no_fold_div_sqrts_result = module.invoke(
            _f64_no_fold_div_sqrts,
            2.5327340978668086e-244,
            4.475305129961258e87
        );
        expect(_f64_no_fold_div_sqrts_result).toBe(2.3789399141325018e-166);
    });

    _test("execution of float_exprs_73: f64.no_fold_div_sqrts (instance 4)", () => {
        let _f64_no_fold_div_sqrts = module.getExport("f64.no_fold_div_sqrts");
        expect(_f64_no_fold_div_sqrts).not.toBeUndefined();
        let _f64_no_fold_div_sqrts_result = module.invoke(
            _f64_no_fold_div_sqrts,
            5.103070160197939e-238,
            4.601576690980825e284
        );
        expect(_f64_no_fold_div_sqrts_result).toBe(1.0530826009924495e-261);
    });
});

describe("float_exprs_74", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_74.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_74: f32.no_fold_mul_sqrt_div (instance 0)", () => {
        let _f32_no_fold_mul_sqrt_div = module.getExport("f32.no_fold_mul_sqrt_div");
        expect(_f32_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f32_no_fold_mul_sqrt_div_result = module.invoke(
            _f32_no_fold_mul_sqrt_div,
            -4.7285568066582555e24,
            8.677281708846403e27
        );
        expect(_f32_no_fold_mul_sqrt_div_result).toBe(-Infinity);
    });

    _test("execution of float_exprs_74: f32.no_fold_mul_sqrt_div (instance 1)", () => {
        let _f32_no_fold_mul_sqrt_div = module.getExport("f32.no_fold_mul_sqrt_div");
        expect(_f32_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f32_no_fold_mul_sqrt_div_result = module.invoke(
            _f32_no_fold_mul_sqrt_div,
            -1.1776881788564836e-36,
            9.805153097384004e-30
        );
        expect(_f32_no_fold_mul_sqrt_div_result).toBe(-0.0);
    });

    _test("execution of float_exprs_74: f32.no_fold_mul_sqrt_div (instance 2)", () => {
        let _f32_no_fold_mul_sqrt_div = module.getExport("f32.no_fold_mul_sqrt_div");
        expect(_f32_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f32_no_fold_mul_sqrt_div_result = module.invoke(
            _f32_no_fold_mul_sqrt_div,
            816717056.0,
            3.323170900355518e-39
        );
        expect(_f32_no_fold_mul_sqrt_div_result).toBe(1.416756814348236e28);
    });

    _test("execution of float_exprs_74: f32.no_fold_mul_sqrt_div (instance 3)", () => {
        let _f32_no_fold_mul_sqrt_div = module.getExport("f32.no_fold_mul_sqrt_div");
        expect(_f32_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f32_no_fold_mul_sqrt_div_result = module.invoke(
            _f32_no_fold_mul_sqrt_div,
            -11932267446272.0,
            8.637066802072802e33
        );
        expect(_f32_no_fold_mul_sqrt_div_result).toBe(-0.0001283925521420315);
    });

    _test("execution of float_exprs_74: f32.no_fold_mul_sqrt_div (instance 4)", () => {
        let _f32_no_fold_mul_sqrt_div = module.getExport("f32.no_fold_mul_sqrt_div");
        expect(_f32_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f32_no_fold_mul_sqrt_div_result = module.invoke(
            _f32_no_fold_mul_sqrt_div,
            -401.02349853515625,
            134.33021545410156
        );
        expect(_f32_no_fold_mul_sqrt_div_result).toBe(-34.600547790527344);
    });

    _test("execution of float_exprs_74: f64.no_fold_mul_sqrt_div (instance 0)", () => {
        let _f64_no_fold_mul_sqrt_div = module.getExport("f64.no_fold_mul_sqrt_div");
        expect(_f64_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f64_no_fold_mul_sqrt_div_result = module.invoke(
            _f64_no_fold_mul_sqrt_div,
            1.4681346229104905e210,
            2.466074582285183e228
        );
        expect(_f64_no_fold_mul_sqrt_div_result).toBe(Infinity);
    });

    _test("execution of float_exprs_74: f64.no_fold_mul_sqrt_div (instance 1)", () => {
        let _f64_no_fold_mul_sqrt_div = module.getExport("f64.no_fold_mul_sqrt_div");
        expect(_f64_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f64_no_fold_mul_sqrt_div_result = module.invoke(
            _f64_no_fold_mul_sqrt_div,
            -1.7254022016758028e-249,
            5.5835540747130025e-202
        );
        expect(_f64_no_fold_mul_sqrt_div_result).toBe(-0.0);
    });

    _test("execution of float_exprs_74: f64.no_fold_mul_sqrt_div (instance 2)", () => {
        let _f64_no_fold_mul_sqrt_div = module.getExport("f64.no_fold_mul_sqrt_div");
        expect(_f64_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f64_no_fold_mul_sqrt_div_result = module.invoke(
            _f64_no_fold_mul_sqrt_div,
            1.6812810256029166e-128,
            7.362783602442129e168
        );
        expect(_f64_no_fold_mul_sqrt_div_result).toBe(6.196112486187196e-213);
    });

    _test("execution of float_exprs_74: f64.no_fold_mul_sqrt_div (instance 3)", () => {
        let _f64_no_fold_mul_sqrt_div = module.getExport("f64.no_fold_mul_sqrt_div");
        expect(_f64_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f64_no_fold_mul_sqrt_div_result = module.invoke(
            _f64_no_fold_mul_sqrt_div,
            -1.0605483729939836e106,
            6.22591783694072e-146
        );
        expect(_f64_no_fold_mul_sqrt_div_result).toBe(-4.2503900822233765e178);
    });

    _test("execution of float_exprs_74: f64.no_fold_mul_sqrt_div (instance 4)", () => {
        let _f64_no_fold_mul_sqrt_div = module.getExport("f64.no_fold_mul_sqrt_div");
        expect(_f64_no_fold_mul_sqrt_div).not.toBeUndefined();
        let _f64_no_fold_mul_sqrt_div_result = module.invoke(
            _f64_no_fold_mul_sqrt_div,
            2.6336349695373093e31,
            3.07914132858533e253
        );
        expect(_f64_no_fold_mul_sqrt_div_result).toBe(4.746142447510695e-96);
    });
});

describe("float_exprs_75", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_75.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_75: f32.no_flush_intermediate_subnormal (instance 0)", () => {
        let _f32_no_flush_intermediate_subnormal = module.getExport(
            "f32.no_flush_intermediate_subnormal"
        );
        expect(_f32_no_flush_intermediate_subnormal).not.toBeUndefined();
        let _f32_no_flush_intermediate_subnormal_result = module.invoke(
            _f32_no_flush_intermediate_subnormal,
            1.1754943508222875e-38,
            1.1920928955078125e-7,
            8388608.0
        );
        expect(_f32_no_flush_intermediate_subnormal_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of float_exprs_75: f64.no_flush_intermediate_subnormal (instance 0)", () => {
        let _f64_no_flush_intermediate_subnormal = module.getExport(
            "f64.no_flush_intermediate_subnormal"
        );
        expect(_f64_no_flush_intermediate_subnormal).not.toBeUndefined();
        let _f64_no_flush_intermediate_subnormal_result = module.invoke(
            _f64_no_flush_intermediate_subnormal,
            2.2250738585072014e-308,
            2.220446049250313e-16,
            4503599627370496.0
        );
        expect(_f64_no_flush_intermediate_subnormal_result).toBe(2.2250738585072014e-308);
    });
});

describe("float_exprs_76", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_76.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_76: f32.recoding_eq (instance 0)", () => {
        let _f32_recoding_eq = module.getExport("f32.recoding_eq");
        expect(_f32_recoding_eq).not.toBeUndefined();
        let _f32_recoding_eq_result = module.invoke(_f32_recoding_eq, -Infinity, 3.0);
        expect(_f32_recoding_eq_result).toBe(1);
    });

    _test("execution of float_exprs_76: f32.recoding_le (instance 0)", () => {
        let _f32_recoding_le = module.getExport("f32.recoding_le");
        expect(_f32_recoding_le).not.toBeUndefined();
        let _f32_recoding_le_result = module.invoke(_f32_recoding_le, -Infinity, 3.0);
        expect(_f32_recoding_le_result).toBe(1);
    });

    _test("execution of float_exprs_76: f32.recoding_lt (instance 0)", () => {
        let _f32_recoding_lt = module.getExport("f32.recoding_lt");
        expect(_f32_recoding_lt).not.toBeUndefined();
        let _f32_recoding_lt_result = module.invoke(_f32_recoding_lt, -Infinity, 3.0);
        expect(_f32_recoding_lt_result).toBe(0);
    });

    _test("execution of float_exprs_76: f32.recoding_eq (instance 1)", () => {
        let _f32_recoding_eq = module.getExport("f32.recoding_eq");
        expect(_f32_recoding_eq).not.toBeUndefined();
        let _f32_recoding_eq_result = module.invoke(_f32_recoding_eq, 0.0, 1.0);
        expect(_f32_recoding_eq_result).toBe(1);
    });

    _test("execution of float_exprs_76: f32.recoding_le (instance 1)", () => {
        let _f32_recoding_le = module.getExport("f32.recoding_le");
        expect(_f32_recoding_le).not.toBeUndefined();
        let _f32_recoding_le_result = module.invoke(_f32_recoding_le, 0.0, 1.0);
        expect(_f32_recoding_le_result).toBe(1);
    });

    _test("execution of float_exprs_76: f32.recoding_lt (instance 1)", () => {
        let _f32_recoding_lt = module.getExport("f32.recoding_lt");
        expect(_f32_recoding_lt).not.toBeUndefined();
        let _f32_recoding_lt_result = module.invoke(_f32_recoding_lt, 0.0, 1.0);
        expect(_f32_recoding_lt_result).toBe(0);
    });

    _test("execution of float_exprs_76: f64.recoding_eq (instance 0)", () => {
        let _f64_recoding_eq = module.getExport("f64.recoding_eq");
        expect(_f64_recoding_eq).not.toBeUndefined();
        let _f64_recoding_eq_result = module.invoke(_f64_recoding_eq, -Infinity, 3.0);
        expect(_f64_recoding_eq_result).toBe(1);
    });

    _test("execution of float_exprs_76: f64.recoding_le (instance 0)", () => {
        let _f64_recoding_le = module.getExport("f64.recoding_le");
        expect(_f64_recoding_le).not.toBeUndefined();
        let _f64_recoding_le_result = module.invoke(_f64_recoding_le, -Infinity, 3.0);
        expect(_f64_recoding_le_result).toBe(1);
    });

    _test("execution of float_exprs_76: f64.recoding_lt (instance 0)", () => {
        let _f64_recoding_lt = module.getExport("f64.recoding_lt");
        expect(_f64_recoding_lt).not.toBeUndefined();
        let _f64_recoding_lt_result = module.invoke(_f64_recoding_lt, -Infinity, 3.0);
        expect(_f64_recoding_lt_result).toBe(0);
    });

    _test("execution of float_exprs_76: f64.recoding_eq (instance 1)", () => {
        let _f64_recoding_eq = module.getExport("f64.recoding_eq");
        expect(_f64_recoding_eq).not.toBeUndefined();
        let _f64_recoding_eq_result = module.invoke(_f64_recoding_eq, 0.0, 1.0);
        expect(_f64_recoding_eq_result).toBe(1);
    });

    _test("execution of float_exprs_76: f64.recoding_le (instance 1)", () => {
        let _f64_recoding_le = module.getExport("f64.recoding_le");
        expect(_f64_recoding_le).not.toBeUndefined();
        let _f64_recoding_le_result = module.invoke(_f64_recoding_le, 0.0, 1.0);
        expect(_f64_recoding_le_result).toBe(1);
    });

    _test("execution of float_exprs_76: f64.recoding_lt (instance 1)", () => {
        let _f64_recoding_lt = module.getExport("f64.recoding_lt");
        expect(_f64_recoding_lt).not.toBeUndefined();
        let _f64_recoding_lt_result = module.invoke(_f64_recoding_lt, 0.0, 1.0);
        expect(_f64_recoding_lt_result).toBe(0);
    });

    _test("execution of float_exprs_76: recoding_demote (instance 0)", () => {
        let _recoding_demote = module.getExport("recoding_demote");
        expect(_recoding_demote).not.toBeUndefined();
        let _recoding_demote_result = module.invoke(
            _recoding_demote,
            2.3860049081905093e-40,
            1221.0
        );
        expect(_recoding_demote_result).toBe(2.913312062965535e-37);
    });
});

describe("float_exprs_77", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_77.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_77: f32.no_extended_precision_div (instance 0)", () => {
        let _f32_no_extended_precision_div = module.getExport("f32.no_extended_precision_div");
        expect(_f32_no_extended_precision_div).not.toBeUndefined();
        let _f32_no_extended_precision_div_result = module.invoke(
            _f32_no_extended_precision_div,
            3.0,
            7.0,
            0.4285714328289032
        );
        expect(_f32_no_extended_precision_div_result).toBe(1);
    });

    _test("execution of float_exprs_77: f64.no_extended_precision_div (instance 0)", () => {
        let _f64_no_extended_precision_div = module.getExport("f64.no_extended_precision_div");
        expect(_f64_no_extended_precision_div).not.toBeUndefined();
        let _f64_no_extended_precision_div_result = module.invoke(
            _f64_no_extended_precision_div,
            3.0,
            7.0,
            0.42857142857142855
        );
        expect(_f64_no_extended_precision_div_result).toBe(1);
    });
});

describe("float_exprs_78", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_78.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_78: f32.no_distribute_exact (instance 0)", () => {
        let _f32_no_distribute_exact = module.getExport("f32.no_distribute_exact");
        expect(_f32_no_distribute_exact).not.toBeUndefined();
        let _f32_no_distribute_exact_result = module.invoke(_f32_no_distribute_exact, -0.0);
        expect(_f32_no_distribute_exact_result).toBe(0.0);
    });

    _test("execution of float_exprs_78: f64.no_distribute_exact (instance 0)", () => {
        let _f64_no_distribute_exact = module.getExport("f64.no_distribute_exact");
        expect(_f64_no_distribute_exact).not.toBeUndefined();
        let _f64_no_distribute_exact_result = module.invoke(_f64_no_distribute_exact, -0.0);
        expect(_f64_no_distribute_exact_result).toBe(0.0);
    });
});

describe("float_exprs_79", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_79.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_79: f32.sqrt (instance 0)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 2.0);
        expect(_f32_sqrt_result).toBe(1.4142135381698608);
    });

    _test("execution of float_exprs_79: f32.xkcd_sqrt_2 (instance 0)", () => {
        let _f32_xkcd_sqrt_2 = module.getExport("f32.xkcd_sqrt_2");
        expect(_f32_xkcd_sqrt_2).not.toBeUndefined();
        let _f32_xkcd_sqrt_2_result = module.invoke(
            _f32_xkcd_sqrt_2,
            3.0,
            5.0,
            3.1415927410125732,
            7.0
        );
        expect(_f32_xkcd_sqrt_2_result).toBe(1.4142200946807861);
    });

    _test("execution of float_exprs_79: f32.sqrt (instance 1)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 3.0);
        expect(_f32_sqrt_result).toBe(1.7320507764816284);
    });

    _test("execution of float_exprs_79: f32.xkcd_sqrt_3 (instance 0)", () => {
        let _f32_xkcd_sqrt_3 = module.getExport("f32.xkcd_sqrt_3");
        expect(_f32_xkcd_sqrt_3).not.toBeUndefined();
        let _f32_xkcd_sqrt_3_result = module.invoke(
            _f32_xkcd_sqrt_3,
            2.0,
            2.7182817459106445,
            3.1415927410125732
        );
        expect(_f32_xkcd_sqrt_3_result).toBe(1.7305119037628174);
    });

    _test("execution of float_exprs_79: f32.sqrt (instance 2)", () => {
        let _f32_sqrt = module.getExport("f32.sqrt");
        expect(_f32_sqrt).not.toBeUndefined();
        let _f32_sqrt_result = module.invoke(_f32_sqrt, 5.0);
        expect(_f32_sqrt_result).toBe(2.2360680103302);
    });

    _test("execution of float_exprs_79: f32.xkcd_sqrt_5 (instance 0)", () => {
        let _f32_xkcd_sqrt_5 = module.getExport("f32.xkcd_sqrt_5");
        expect(_f32_xkcd_sqrt_5).not.toBeUndefined();
        let _f32_xkcd_sqrt_5_result = module.invoke(_f32_xkcd_sqrt_5, 2.0, 2.7182817459106445, 3.0);
        expect(_f32_xkcd_sqrt_5_result).toBe(2.2357587814331055);
    });

    _test("execution of float_exprs_79: f32.xkcd_better_sqrt_5 (instance 0)", () => {
        let _f32_xkcd_better_sqrt_5 = module.getExport("f32.xkcd_better_sqrt_5");
        expect(_f32_xkcd_better_sqrt_5).not.toBeUndefined();
        let _f32_xkcd_better_sqrt_5_result = module.invoke(
            _f32_xkcd_better_sqrt_5,
            13.0,
            4.0,
            3.1415927410125732,
            24.0
        );
        expect(_f32_xkcd_better_sqrt_5_result).toBe(2.2360680103302);
    });

    _test("execution of float_exprs_79: f64.sqrt (instance 0)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 2.0);
        expect(_f64_sqrt_result).toBe(1.4142135623730951);
    });

    _test("execution of float_exprs_79: f64.xkcd_sqrt_2 (instance 0)", () => {
        let _f64_xkcd_sqrt_2 = module.getExport("f64.xkcd_sqrt_2");
        expect(_f64_xkcd_sqrt_2).not.toBeUndefined();
        let _f64_xkcd_sqrt_2_result = module.invoke(
            _f64_xkcd_sqrt_2,
            3.0,
            5.0,
            3.141592653589793,
            7.0
        );
        expect(_f64_xkcd_sqrt_2_result).toBe(1.4142200580539208);
    });

    _test("execution of float_exprs_79: f64.sqrt (instance 1)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 3.0);
        expect(_f64_sqrt_result).toBe(1.7320508075688772);
    });

    _test("execution of float_exprs_79: f64.xkcd_sqrt_3 (instance 0)", () => {
        let _f64_xkcd_sqrt_3 = module.getExport("f64.xkcd_sqrt_3");
        expect(_f64_xkcd_sqrt_3).not.toBeUndefined();
        let _f64_xkcd_sqrt_3_result = module.invoke(
            _f64_xkcd_sqrt_3,
            2.0,
            2.718281828459045,
            3.141592653589793
        );
        expect(_f64_xkcd_sqrt_3_result).toBe(1.7305119588645301);
    });

    _test("execution of float_exprs_79: f64.sqrt (instance 2)", () => {
        let _f64_sqrt = module.getExport("f64.sqrt");
        expect(_f64_sqrt).not.toBeUndefined();
        let _f64_sqrt_result = module.invoke(_f64_sqrt, 5.0);
        expect(_f64_sqrt_result).toBe(2.23606797749979);
    });

    _test("execution of float_exprs_79: f64.xkcd_sqrt_5 (instance 0)", () => {
        let _f64_xkcd_sqrt_5 = module.getExport("f64.xkcd_sqrt_5");
        expect(_f64_xkcd_sqrt_5).not.toBeUndefined();
        let _f64_xkcd_sqrt_5_result = module.invoke(_f64_xkcd_sqrt_5, 2.0, 2.718281828459045, 3.0);
        expect(_f64_xkcd_sqrt_5_result).toBe(2.2357588823428847);
    });

    _test("execution of float_exprs_79: f64.xkcd_better_sqrt_5 (instance 0)", () => {
        let _f64_xkcd_better_sqrt_5 = module.getExport("f64.xkcd_better_sqrt_5");
        expect(_f64_xkcd_better_sqrt_5).not.toBeUndefined();
        let _f64_xkcd_better_sqrt_5_result = module.invoke(
            _f64_xkcd_better_sqrt_5,
            13.0,
            4.0,
            3.141592653589793,
            24.0
        );
        expect(_f64_xkcd_better_sqrt_5_result).toBe(2.2360678094452893);
    });
});

describe("float_exprs_80", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_80.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_80: f32.compute_radix (instance 0)", () => {
        let _f32_compute_radix = module.getExport("f32.compute_radix");
        expect(_f32_compute_radix).not.toBeUndefined();
        let _f32_compute_radix_result = module.invoke(_f32_compute_radix, 1.0, 1.0);
        expect(_f32_compute_radix_result).toBe(2.0);
    });

    _test("execution of float_exprs_80: f64.compute_radix (instance 0)", () => {
        let _f64_compute_radix = module.getExport("f64.compute_radix");
        expect(_f64_compute_radix).not.toBeUndefined();
        let _f64_compute_radix_result = module.invoke(_f64_compute_radix, 1.0, 1.0);
        expect(_f64_compute_radix_result).toBe(2.0);
    });
});

describe("float_exprs_81", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_81.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_81: f32.no_fold_sub1_mul_add (instance 0)", () => {
        let _f32_no_fold_sub1_mul_add = module.getExport("f32.no_fold_sub1_mul_add");
        expect(_f32_no_fold_sub1_mul_add).not.toBeUndefined();
        let _f32_no_fold_sub1_mul_add_result = module.invoke(
            _f32_no_fold_sub1_mul_add,
            2.3283064365386963e-10,
            1.0
        );
        expect(_f32_no_fold_sub1_mul_add_result).toBe(0.0);
    });

    _test("execution of float_exprs_81: f64.no_fold_sub1_mul_add (instance 0)", () => {
        let _f64_no_fold_sub1_mul_add = module.getExport("f64.no_fold_sub1_mul_add");
        expect(_f64_no_fold_sub1_mul_add).not.toBeUndefined();
        let _f64_no_fold_sub1_mul_add_result = module.invoke(
            _f64_no_fold_sub1_mul_add,
            5.421010862427522e-20,
            1.0
        );
        expect(_f64_no_fold_sub1_mul_add_result).toBe(0.0);
    });
});

describe("float_exprs_82", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_82.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_82: f32.no_fold_add_le_monotonicity (instance 0)", () => {
        let _f32_no_fold_add_le_monotonicity = module.getExport("f32.no_fold_add_le_monotonicity");
        expect(_f32_no_fold_add_le_monotonicity).not.toBeUndefined();
        let _f32_no_fold_add_le_monotonicity_result = module.invoke(
            _f32_no_fold_add_le_monotonicity,
            0.0,
            0.0,
            NaN
        );
        expect(_f32_no_fold_add_le_monotonicity_result).toBe(0);
    });

    _test("execution of float_exprs_82: f32.no_fold_add_le_monotonicity (instance 1)", () => {
        let _f32_no_fold_add_le_monotonicity = module.getExport("f32.no_fold_add_le_monotonicity");
        expect(_f32_no_fold_add_le_monotonicity).not.toBeUndefined();
        let _f32_no_fold_add_le_monotonicity_result = module.invoke(
            _f32_no_fold_add_le_monotonicity,
            Infinity,
            -Infinity,
            Infinity
        );
        expect(_f32_no_fold_add_le_monotonicity_result).toBe(0);
    });

    _test("execution of float_exprs_82: f64.no_fold_add_le_monotonicity (instance 0)", () => {
        let _f64_no_fold_add_le_monotonicity = module.getExport("f64.no_fold_add_le_monotonicity");
        expect(_f64_no_fold_add_le_monotonicity).not.toBeUndefined();
        let _f64_no_fold_add_le_monotonicity_result = module.invoke(
            _f64_no_fold_add_le_monotonicity,
            0.0,
            0.0,
            NaN
        );
        expect(_f64_no_fold_add_le_monotonicity_result).toBe(0);
    });

    _test("execution of float_exprs_82: f64.no_fold_add_le_monotonicity (instance 1)", () => {
        let _f64_no_fold_add_le_monotonicity = module.getExport("f64.no_fold_add_le_monotonicity");
        expect(_f64_no_fold_add_le_monotonicity).not.toBeUndefined();
        let _f64_no_fold_add_le_monotonicity_result = module.invoke(
            _f64_no_fold_add_le_monotonicity,
            Infinity,
            -Infinity,
            Infinity
        );
        expect(_f64_no_fold_add_le_monotonicity_result).toBe(0);
    });
});

describe("float_exprs_83", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_83.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_83: f32.not_lt (instance 0)", () => {
        let _f32_not_lt = module.getExport("f32.not_lt");
        expect(_f32_not_lt).not.toBeUndefined();
        let _f32_not_lt_result = module.invoke(_f32_not_lt, NaN, 0.0);
        expect(_f32_not_lt_result).toBe(1);
    });

    _test("execution of float_exprs_83: f32.not_le (instance 0)", () => {
        let _f32_not_le = module.getExport("f32.not_le");
        expect(_f32_not_le).not.toBeUndefined();
        let _f32_not_le_result = module.invoke(_f32_not_le, NaN, 0.0);
        expect(_f32_not_le_result).toBe(1);
    });

    _test("execution of float_exprs_83: f32.not_gt (instance 0)", () => {
        let _f32_not_gt = module.getExport("f32.not_gt");
        expect(_f32_not_gt).not.toBeUndefined();
        let _f32_not_gt_result = module.invoke(_f32_not_gt, NaN, 0.0);
        expect(_f32_not_gt_result).toBe(1);
    });

    _test("execution of float_exprs_83: f32.not_ge (instance 0)", () => {
        let _f32_not_ge = module.getExport("f32.not_ge");
        expect(_f32_not_ge).not.toBeUndefined();
        let _f32_not_ge_result = module.invoke(_f32_not_ge, NaN, 0.0);
        expect(_f32_not_ge_result).toBe(1);
    });

    _test("execution of float_exprs_83: f64.not_lt (instance 0)", () => {
        let _f64_not_lt = module.getExport("f64.not_lt");
        expect(_f64_not_lt).not.toBeUndefined();
        let _f64_not_lt_result = module.invoke(_f64_not_lt, NaN, 0.0);
        expect(_f64_not_lt_result).toBe(1);
    });

    _test("execution of float_exprs_83: f64.not_le (instance 0)", () => {
        let _f64_not_le = module.getExport("f64.not_le");
        expect(_f64_not_le).not.toBeUndefined();
        let _f64_not_le_result = module.invoke(_f64_not_le, NaN, 0.0);
        expect(_f64_not_le_result).toBe(1);
    });

    _test("execution of float_exprs_83: f64.not_gt (instance 0)", () => {
        let _f64_not_gt = module.getExport("f64.not_gt");
        expect(_f64_not_gt).not.toBeUndefined();
        let _f64_not_gt_result = module.invoke(_f64_not_gt, NaN, 0.0);
        expect(_f64_not_gt_result).toBe(1);
    });

    _test("execution of float_exprs_83: f64.not_ge (instance 0)", () => {
        let _f64_not_ge = module.getExport("f64.not_ge");
        expect(_f64_not_ge).not.toBeUndefined();
        let _f64_not_ge_result = module.invoke(_f64_not_ge, NaN, 0.0);
        expect(_f64_not_ge_result).toBe(1);
    });
});

describe("float_exprs_84", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_84.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_84: f32.epsilon (instance 0)", () => {
        let _f32_epsilon = module.getExport("f32.epsilon");
        expect(_f32_epsilon).not.toBeUndefined();
        let _f32_epsilon_result = module.invoke(_f32_epsilon);
        expect(_f32_epsilon_result).toBe(-1.1920928955078125e-7);
    });

    _test("execution of float_exprs_84: f64.epsilon (instance 0)", () => {
        let _f64_epsilon = module.getExport("f64.epsilon");
        expect(_f64_epsilon).not.toBeUndefined();
        let _f64_epsilon_result = module.invoke(_f64_epsilon);
        expect(_f64_epsilon_result).toBe(2.220446049250313e-16);
    });
});

describe("float_exprs_85", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_85.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_85: f32.epsilon (instance 1)", () => {
        let _f32_epsilon = module.getExport("f32.epsilon");
        expect(_f32_epsilon).not.toBeUndefined();
        let _f32_epsilon_result = module.invoke(_f32_epsilon);
        expect(_f32_epsilon_result).toBe(1.1920928955078125e-7);
    });

    _test("execution of float_exprs_85: f64.epsilon (instance 1)", () => {
        let _f64_epsilon = module.getExport("f64.epsilon");
        expect(_f64_epsilon).not.toBeUndefined();
        let _f64_epsilon_result = module.invoke(_f64_epsilon);
        expect(_f64_epsilon_result).toBe(2.220446049250313e-16);
    });
});

describe("float_exprs_86", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_86.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_86: f32.no_trichotomy_lt (instance 0)", () => {
        let _f32_no_trichotomy_lt = module.getExport("f32.no_trichotomy_lt");
        expect(_f32_no_trichotomy_lt).not.toBeUndefined();
        let _f32_no_trichotomy_lt_result = module.invoke(_f32_no_trichotomy_lt, 0.0, NaN);
        expect(_f32_no_trichotomy_lt_result).toBe(0);
    });

    _test("execution of float_exprs_86: f32.no_trichotomy_le (instance 0)", () => {
        let _f32_no_trichotomy_le = module.getExport("f32.no_trichotomy_le");
        expect(_f32_no_trichotomy_le).not.toBeUndefined();
        let _f32_no_trichotomy_le_result = module.invoke(_f32_no_trichotomy_le, 0.0, NaN);
        expect(_f32_no_trichotomy_le_result).toBe(0);
    });

    _test("execution of float_exprs_86: f32.no_trichotomy_gt (instance 0)", () => {
        let _f32_no_trichotomy_gt = module.getExport("f32.no_trichotomy_gt");
        expect(_f32_no_trichotomy_gt).not.toBeUndefined();
        let _f32_no_trichotomy_gt_result = module.invoke(_f32_no_trichotomy_gt, 0.0, NaN);
        expect(_f32_no_trichotomy_gt_result).toBe(0);
    });

    _test("execution of float_exprs_86: f32.no_trichotomy_ge (instance 0)", () => {
        let _f32_no_trichotomy_ge = module.getExport("f32.no_trichotomy_ge");
        expect(_f32_no_trichotomy_ge).not.toBeUndefined();
        let _f32_no_trichotomy_ge_result = module.invoke(_f32_no_trichotomy_ge, 0.0, NaN);
        expect(_f32_no_trichotomy_ge_result).toBe(0);
    });

    _test("execution of float_exprs_86: f64.no_trichotomy_lt (instance 0)", () => {
        let _f64_no_trichotomy_lt = module.getExport("f64.no_trichotomy_lt");
        expect(_f64_no_trichotomy_lt).not.toBeUndefined();
        let _f64_no_trichotomy_lt_result = module.invoke(_f64_no_trichotomy_lt, 0.0, NaN);
        expect(_f64_no_trichotomy_lt_result).toBe(0);
    });

    _test("execution of float_exprs_86: f64.no_trichotomy_le (instance 0)", () => {
        let _f64_no_trichotomy_le = module.getExport("f64.no_trichotomy_le");
        expect(_f64_no_trichotomy_le).not.toBeUndefined();
        let _f64_no_trichotomy_le_result = module.invoke(_f64_no_trichotomy_le, 0.0, NaN);
        expect(_f64_no_trichotomy_le_result).toBe(0);
    });

    _test("execution of float_exprs_86: f64.no_trichotomy_gt (instance 0)", () => {
        let _f64_no_trichotomy_gt = module.getExport("f64.no_trichotomy_gt");
        expect(_f64_no_trichotomy_gt).not.toBeUndefined();
        let _f64_no_trichotomy_gt_result = module.invoke(_f64_no_trichotomy_gt, 0.0, NaN);
        expect(_f64_no_trichotomy_gt_result).toBe(0);
    });

    _test("execution of float_exprs_86: f64.no_trichotomy_ge (instance 0)", () => {
        let _f64_no_trichotomy_ge = module.getExport("f64.no_trichotomy_ge");
        expect(_f64_no_trichotomy_ge).not.toBeUndefined();
        let _f64_no_trichotomy_ge_result = module.invoke(_f64_no_trichotomy_ge, 0.0, NaN);
        expect(_f64_no_trichotomy_ge_result).toBe(0);
    });
});

describe("float_exprs_87", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_87.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_87: f32.arithmetic_nan_bitpattern (instance 0)", () => {
        let _f32_arithmetic_nan_bitpattern = module.getExport("f32.arithmetic_nan_bitpattern");
        expect(_f32_arithmetic_nan_bitpattern).not.toBeUndefined();
        let _f32_arithmetic_nan_bitpattern_result = module.invoke(
            _f32_arithmetic_nan_bitpattern,
            2139107856,
            2139107856
        );
        expect(_f32_arithmetic_nan_bitpattern_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.canonical_nan_bitpattern (instance 0)", () => {
        let _f32_canonical_nan_bitpattern = module.getExport("f32.canonical_nan_bitpattern");
        expect(_f32_canonical_nan_bitpattern).not.toBeUndefined();
        let _f32_canonical_nan_bitpattern_result = module.invoke(
            _f32_canonical_nan_bitpattern,
            0,
            0
        );
        expect(_f32_canonical_nan_bitpattern_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.canonical_nan_bitpattern (instance 1)", () => {
        let _f32_canonical_nan_bitpattern = module.getExport("f32.canonical_nan_bitpattern");
        expect(_f32_canonical_nan_bitpattern).not.toBeUndefined();
        let _f32_canonical_nan_bitpattern_result = module.invoke(
            _f32_canonical_nan_bitpattern,
            2143289344,
            2143289344
        );
        expect(_f32_canonical_nan_bitpattern_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.canonical_nan_bitpattern (instance 2)", () => {
        let _f32_canonical_nan_bitpattern = module.getExport("f32.canonical_nan_bitpattern");
        expect(_f32_canonical_nan_bitpattern).not.toBeUndefined();
        let _f32_canonical_nan_bitpattern_result = module.invoke(
            _f32_canonical_nan_bitpattern,
            -4194304,
            2143289344
        );
        expect(_f32_canonical_nan_bitpattern_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.canonical_nan_bitpattern (instance 3)", () => {
        let _f32_canonical_nan_bitpattern = module.getExport("f32.canonical_nan_bitpattern");
        expect(_f32_canonical_nan_bitpattern).not.toBeUndefined();
        let _f32_canonical_nan_bitpattern_result = module.invoke(
            _f32_canonical_nan_bitpattern,
            2143289344,
            -4194304
        );
        expect(_f32_canonical_nan_bitpattern_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.canonical_nan_bitpattern (instance 4)", () => {
        let _f32_canonical_nan_bitpattern = module.getExport("f32.canonical_nan_bitpattern");
        expect(_f32_canonical_nan_bitpattern).not.toBeUndefined();
        let _f32_canonical_nan_bitpattern_result = module.invoke(
            _f32_canonical_nan_bitpattern,
            -4194304,
            -4194304
        );
        expect(_f32_canonical_nan_bitpattern_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.nonarithmetic_nan_bitpattern (instance 0)", () => {
        let _f32_nonarithmetic_nan_bitpattern = module.getExport(
            "f32.nonarithmetic_nan_bitpattern"
        );
        expect(_f32_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f32_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f32_nonarithmetic_nan_bitpattern,
            2143302160
        );
        expect(_f32_nonarithmetic_nan_bitpattern_result).toBe(-4181488);
    });

    _test("execution of float_exprs_87: f32.nonarithmetic_nan_bitpattern (instance 1)", () => {
        let _f32_nonarithmetic_nan_bitpattern = module.getExport(
            "f32.nonarithmetic_nan_bitpattern"
        );
        expect(_f32_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f32_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f32_nonarithmetic_nan_bitpattern,
            -4181488
        );
        expect(_f32_nonarithmetic_nan_bitpattern_result).toBe(2143302160);
    });

    _test("execution of float_exprs_87: f32.nonarithmetic_nan_bitpattern (instance 2)", () => {
        let _f32_nonarithmetic_nan_bitpattern = module.getExport(
            "f32.nonarithmetic_nan_bitpattern"
        );
        expect(_f32_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f32_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f32_nonarithmetic_nan_bitpattern,
            2139107856
        );
        expect(_f32_nonarithmetic_nan_bitpattern_result).toBe(-8375792);
    });

    _test("execution of float_exprs_87: f32.nonarithmetic_nan_bitpattern (instance 3)", () => {
        let _f32_nonarithmetic_nan_bitpattern = module.getExport(
            "f32.nonarithmetic_nan_bitpattern"
        );
        expect(_f32_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f32_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f32_nonarithmetic_nan_bitpattern,
            -8375792
        );
        expect(_f32_nonarithmetic_nan_bitpattern_result).toBe(2139107856);
    });

    _test("execution of float_exprs_87: f64.arithmetic_nan_bitpattern (instance 0)", () => {
        let _f64_arithmetic_nan_bitpattern = module.getExport("f64.arithmetic_nan_bitpattern");
        expect(_f64_arithmetic_nan_bitpattern).not.toBeUndefined();
        let _f64_arithmetic_nan_bitpattern_result = module.invoke(
            _f64_arithmetic_nan_bitpattern,
            9218868437227418128n,
            9218868437227418128n
        );
        expect(_f64_arithmetic_nan_bitpattern_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.canonical_nan_bitpattern (instance 0)", () => {
        let _f64_canonical_nan_bitpattern = module.getExport("f64.canonical_nan_bitpattern");
        expect(_f64_canonical_nan_bitpattern).not.toBeUndefined();
        let _f64_canonical_nan_bitpattern_result = module.invoke(
            _f64_canonical_nan_bitpattern,
            0n,
            0n
        );
        expect(_f64_canonical_nan_bitpattern_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.canonical_nan_bitpattern (instance 1)", () => {
        let _f64_canonical_nan_bitpattern = module.getExport("f64.canonical_nan_bitpattern");
        expect(_f64_canonical_nan_bitpattern).not.toBeUndefined();
        let _f64_canonical_nan_bitpattern_result = module.invoke(
            _f64_canonical_nan_bitpattern,
            9221120237041090560n,
            9221120237041090560n
        );
        expect(_f64_canonical_nan_bitpattern_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.canonical_nan_bitpattern (instance 2)", () => {
        let _f64_canonical_nan_bitpattern = module.getExport("f64.canonical_nan_bitpattern");
        expect(_f64_canonical_nan_bitpattern).not.toBeUndefined();
        let _f64_canonical_nan_bitpattern_result = module.invoke(
            _f64_canonical_nan_bitpattern,
            -2251799813685248n,
            9221120237041090560n
        );
        expect(_f64_canonical_nan_bitpattern_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.canonical_nan_bitpattern (instance 3)", () => {
        let _f64_canonical_nan_bitpattern = module.getExport("f64.canonical_nan_bitpattern");
        expect(_f64_canonical_nan_bitpattern).not.toBeUndefined();
        let _f64_canonical_nan_bitpattern_result = module.invoke(
            _f64_canonical_nan_bitpattern,
            9221120237041090560n,
            -2251799813685248n
        );
        expect(_f64_canonical_nan_bitpattern_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.canonical_nan_bitpattern (instance 4)", () => {
        let _f64_canonical_nan_bitpattern = module.getExport("f64.canonical_nan_bitpattern");
        expect(_f64_canonical_nan_bitpattern).not.toBeUndefined();
        let _f64_canonical_nan_bitpattern_result = module.invoke(
            _f64_canonical_nan_bitpattern,
            -2251799813685248n,
            -2251799813685248n
        );
        expect(_f64_canonical_nan_bitpattern_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.nonarithmetic_nan_bitpattern (instance 0)", () => {
        let _f64_nonarithmetic_nan_bitpattern = module.getExport(
            "f64.nonarithmetic_nan_bitpattern"
        );
        expect(_f64_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f64_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f64_nonarithmetic_nan_bitpattern,
            9221120237041103376n
        );
        expect(_f64_nonarithmetic_nan_bitpattern_result).toBe(-2251799813672432n);
    });

    _test("execution of float_exprs_87: f64.nonarithmetic_nan_bitpattern (instance 1)", () => {
        let _f64_nonarithmetic_nan_bitpattern = module.getExport(
            "f64.nonarithmetic_nan_bitpattern"
        );
        expect(_f64_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f64_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f64_nonarithmetic_nan_bitpattern,
            -2251799813672432n
        );
        expect(_f64_nonarithmetic_nan_bitpattern_result).toBe(9221120237041103376n);
    });

    _test("execution of float_exprs_87: f64.nonarithmetic_nan_bitpattern (instance 2)", () => {
        let _f64_nonarithmetic_nan_bitpattern = module.getExport(
            "f64.nonarithmetic_nan_bitpattern"
        );
        expect(_f64_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f64_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f64_nonarithmetic_nan_bitpattern,
            9218868437227418128n
        );
        expect(_f64_nonarithmetic_nan_bitpattern_result).toBe(-4503599627357680n);
    });

    _test("execution of float_exprs_87: f64.nonarithmetic_nan_bitpattern (instance 3)", () => {
        let _f64_nonarithmetic_nan_bitpattern = module.getExport(
            "f64.nonarithmetic_nan_bitpattern"
        );
        expect(_f64_nonarithmetic_nan_bitpattern).not.toBeUndefined();
        let _f64_nonarithmetic_nan_bitpattern_result = module.invoke(
            _f64_nonarithmetic_nan_bitpattern,
            -4503599627357680n
        );
        expect(_f64_nonarithmetic_nan_bitpattern_result).toBe(9218868437227418128n);
    });

    _test("execution of float_exprs_87: f32.no_fold_sub_zero (instance 1)", () => {
        let _f32_no_fold_sub_zero = module.getExport("f32.no_fold_sub_zero");
        expect(_f32_no_fold_sub_zero).not.toBeUndefined();
        let _f32_no_fold_sub_zero_result = module.invoke(_f32_no_fold_sub_zero, 2141192192);
        expect(_f32_no_fold_sub_zero_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.no_fold_neg0_sub (instance 1)", () => {
        let _f32_no_fold_neg0_sub = module.getExport("f32.no_fold_neg0_sub");
        expect(_f32_no_fold_neg0_sub).not.toBeUndefined();
        let _f32_no_fold_neg0_sub_result = module.invoke(_f32_no_fold_neg0_sub, 2141192192);
        expect(_f32_no_fold_neg0_sub_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.no_fold_mul_one (instance 1)", () => {
        let _f32_no_fold_mul_one = module.getExport("f32.no_fold_mul_one");
        expect(_f32_no_fold_mul_one).not.toBeUndefined();
        let _f32_no_fold_mul_one_result = module.invoke(_f32_no_fold_mul_one, 2141192192);
        expect(_f32_no_fold_mul_one_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.no_fold_neg1_mul (instance 1)", () => {
        let _f32_no_fold_neg1_mul = module.getExport("f32.no_fold_neg1_mul");
        expect(_f32_no_fold_neg1_mul).not.toBeUndefined();
        let _f32_no_fold_neg1_mul_result = module.invoke(_f32_no_fold_neg1_mul, 2141192192);
        expect(_f32_no_fold_neg1_mul_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.no_fold_div_one (instance 1)", () => {
        let _f32_no_fold_div_one = module.getExport("f32.no_fold_div_one");
        expect(_f32_no_fold_div_one).not.toBeUndefined();
        let _f32_no_fold_div_one_result = module.invoke(_f32_no_fold_div_one, 2141192192);
        expect(_f32_no_fold_div_one_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f32.no_fold_div_neg1 (instance 1)", () => {
        let _f32_no_fold_div_neg1 = module.getExport("f32.no_fold_div_neg1");
        expect(_f32_no_fold_div_neg1).not.toBeUndefined();
        let _f32_no_fold_div_neg1_result = module.invoke(_f32_no_fold_div_neg1, 2141192192);
        expect(_f32_no_fold_div_neg1_result).toBe(2143289344);
    });

    _test("execution of float_exprs_87: f64.no_fold_sub_zero (instance 1)", () => {
        let _f64_no_fold_sub_zero = module.getExport("f64.no_fold_sub_zero");
        expect(_f64_no_fold_sub_zero).not.toBeUndefined();
        let _f64_no_fold_sub_zero_result = module.invoke(
            _f64_no_fold_sub_zero,
            9219994337134247936n
        );
        expect(_f64_no_fold_sub_zero_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.no_fold_neg0_sub (instance 1)", () => {
        let _f64_no_fold_neg0_sub = module.getExport("f64.no_fold_neg0_sub");
        expect(_f64_no_fold_neg0_sub).not.toBeUndefined();
        let _f64_no_fold_neg0_sub_result = module.invoke(
            _f64_no_fold_neg0_sub,
            9219994337134247936n
        );
        expect(_f64_no_fold_neg0_sub_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.no_fold_mul_one (instance 1)", () => {
        let _f64_no_fold_mul_one = module.getExport("f64.no_fold_mul_one");
        expect(_f64_no_fold_mul_one).not.toBeUndefined();
        let _f64_no_fold_mul_one_result = module.invoke(_f64_no_fold_mul_one, 9219994337134247936n);
        expect(_f64_no_fold_mul_one_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.no_fold_neg1_mul (instance 1)", () => {
        let _f64_no_fold_neg1_mul = module.getExport("f64.no_fold_neg1_mul");
        expect(_f64_no_fold_neg1_mul).not.toBeUndefined();
        let _f64_no_fold_neg1_mul_result = module.invoke(
            _f64_no_fold_neg1_mul,
            9219994337134247936n
        );
        expect(_f64_no_fold_neg1_mul_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.no_fold_div_one (instance 1)", () => {
        let _f64_no_fold_div_one = module.getExport("f64.no_fold_div_one");
        expect(_f64_no_fold_div_one).not.toBeUndefined();
        let _f64_no_fold_div_one_result = module.invoke(_f64_no_fold_div_one, 9219994337134247936n);
        expect(_f64_no_fold_div_one_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: f64.no_fold_div_neg1 (instance 1)", () => {
        let _f64_no_fold_div_neg1 = module.getExport("f64.no_fold_div_neg1");
        expect(_f64_no_fold_div_neg1).not.toBeUndefined();
        let _f64_no_fold_div_neg1_result = module.invoke(
            _f64_no_fold_div_neg1,
            9219994337134247936n
        );
        expect(_f64_no_fold_div_neg1_result).toBe(9221120237041090560n);
    });

    _test("execution of float_exprs_87: no_fold_promote_demote (instance 13)", () => {
        let _no_fold_promote_demote = module.getExport("no_fold_promote_demote");
        expect(_no_fold_promote_demote).not.toBeUndefined();
        let _no_fold_promote_demote_result = module.invoke(_no_fold_promote_demote, 2141192192);
        expect(_no_fold_promote_demote_result).toBe(2143289344);
    });
});

describe("float_exprs_88", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_88.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_88: dot_product_example (instance 0)", () => {
        let _dot_product_example = module.getExport("dot_product_example");
        expect(_dot_product_example).not.toBeUndefined();
        let _dot_product_example_result = module.invoke(
            _dot_product_example,
            32000000.0,
            1.0,
            -1.0,
            80000000.0,
            40000000.0,
            1.0,
            -1.0,
            -16000000.0
        );
        expect(_dot_product_example_result).toBe(2.0);
    });

    _test("execution of float_exprs_88: with_binary_sum_collapse (instance 0)", () => {
        let _with_binary_sum_collapse = module.getExport("with_binary_sum_collapse");
        expect(_with_binary_sum_collapse).not.toBeUndefined();
        let _with_binary_sum_collapse_result = module.invoke(
            _with_binary_sum_collapse,
            32000000.0,
            1.0,
            -1.0,
            80000000.0,
            40000000.0,
            1.0,
            -1.0,
            -16000000.0
        );
        expect(_with_binary_sum_collapse_result).toBe(2.0);
    });
});

describe("float_exprs_89", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_89.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_89: f32.contract2fma (instance 0)", () => {
        let _f32_contract2fma = module.getExport("f32.contract2fma");
        expect(_f32_contract2fma).not.toBeUndefined();
        let _f32_contract2fma_result = module.invoke(_f32_contract2fma, 1.0, 1.0);
        expect(_f32_contract2fma_result).toBe(0.0);
    });

    _test("execution of float_exprs_89: f32.contract2fma (instance 1)", () => {
        let _f32_contract2fma = module.getExport("f32.contract2fma");
        expect(_f32_contract2fma).not.toBeUndefined();
        let _f32_contract2fma_result = module.invoke(
            _f32_contract2fma,
            1.100000023841858,
            1.100000023841858
        );
        expect(_f32_contract2fma_result).toBe(0.0);
    });

    _test("execution of float_exprs_89: f32.contract2fma (instance 2)", () => {
        let _f32_contract2fma = module.getExport("f32.contract2fma");
        expect(_f32_contract2fma).not.toBeUndefined();
        let _f32_contract2fma_result = module.invoke(
            _f32_contract2fma,
            1.1999999284744263,
            1.1999999284744263
        );
        expect(_f32_contract2fma_result).toBe(0.0);
    });

    _test("execution of float_exprs_89: f64.contract2fma (instance 0)", () => {
        let _f64_contract2fma = module.getExport("f64.contract2fma");
        expect(_f64_contract2fma).not.toBeUndefined();
        let _f64_contract2fma_result = module.invoke(_f64_contract2fma, 1.0, 1.0);
        expect(_f64_contract2fma_result).toBe(0.0);
    });

    _test("execution of float_exprs_89: f64.contract2fma (instance 1)", () => {
        let _f64_contract2fma = module.getExport("f64.contract2fma");
        expect(_f64_contract2fma).not.toBeUndefined();
        let _f64_contract2fma_result = module.invoke(_f64_contract2fma, 1.1, 1.1);
        expect(_f64_contract2fma_result).toBe(0.0);
    });

    _test("execution of float_exprs_89: f64.contract2fma (instance 2)", () => {
        let _f64_contract2fma = module.getExport("f64.contract2fma");
        expect(_f64_contract2fma).not.toBeUndefined();
        let _f64_contract2fma_result = module.invoke(_f64_contract2fma, 1.2, 1.2);
        expect(_f64_contract2fma_result).toBe(0.0);
    });
});

describe("float_exprs_90", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_90.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_90: f32.division_by_small_number (instance 0)", () => {
        let _f32_division_by_small_number = module.getExport("f32.division_by_small_number");
        expect(_f32_division_by_small_number).not.toBeUndefined();
        let _f32_division_by_small_number_result = module.invoke(
            _f32_division_by_small_number,
            112000000.0,
            100000.0,
            0.0009
        );
        expect(_f32_division_by_small_number_result).toBe(888888.0);
    });

    _test("execution of float_exprs_90: f64.division_by_small_number (instance 0)", () => {
        let _f64_division_by_small_number = module.getExport("f64.division_by_small_number");
        expect(_f64_division_by_small_number).not.toBeUndefined();
        let _f64_division_by_small_number_result = module.invoke(
            _f64_division_by_small_number,
            112000000.0,
            100000.0,
            0.0009
        );
        expect(_f64_division_by_small_number_result).toBe(888888.8888888806);
    });
});

describe("float_exprs_91", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_91.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_91: f32.golden_ratio (instance 0)", () => {
        let _f32_golden_ratio = module.getExport("f32.golden_ratio");
        expect(_f32_golden_ratio).not.toBeUndefined();
        let _f32_golden_ratio_result = module.invoke(_f32_golden_ratio, 0.5, 1.0, 5.0);
        expect(_f32_golden_ratio_result).toBe(1.618034);
    });

    _test("execution of float_exprs_91: f64.golden_ratio (instance 0)", () => {
        let _f64_golden_ratio = module.getExport("f64.golden_ratio");
        expect(_f64_golden_ratio).not.toBeUndefined();
        let _f64_golden_ratio_result = module.invoke(_f64_golden_ratio, 0.5, 1.0, 5.0);
        expect(_f64_golden_ratio_result).toBe(1.618033988749895);
    });
});

describe("float_exprs_92", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_92.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_92: f32.silver_means (instance 0)", () => {
        let _f32_silver_means = module.getExport("f32.silver_means");
        expect(_f32_silver_means).not.toBeUndefined();
        let _f32_silver_means_result = module.invoke(_f32_silver_means, 0.0);
        expect(_f32_silver_means_result).toBe(1.0);
    });

    _test("execution of float_exprs_92: f32.silver_means (instance 1)", () => {
        let _f32_silver_means = module.getExport("f32.silver_means");
        expect(_f32_silver_means).not.toBeUndefined();
        let _f32_silver_means_result = module.invoke(_f32_silver_means, 1.0);
        expect(_f32_silver_means_result).toBe(1.618034);
    });

    _test("execution of float_exprs_92: f32.silver_means (instance 2)", () => {
        let _f32_silver_means = module.getExport("f32.silver_means");
        expect(_f32_silver_means).not.toBeUndefined();
        let _f32_silver_means_result = module.invoke(_f32_silver_means, 2.0);
        expect(_f32_silver_means_result).toBe(2.4142136);
    });

    _test("execution of float_exprs_92: f32.silver_means (instance 3)", () => {
        let _f32_silver_means = module.getExport("f32.silver_means");
        expect(_f32_silver_means).not.toBeUndefined();
        let _f32_silver_means_result = module.invoke(_f32_silver_means, 3.0);
        expect(_f32_silver_means_result).toBe(3.3027756);
    });

    _test("execution of float_exprs_92: f32.silver_means (instance 4)", () => {
        let _f32_silver_means = module.getExport("f32.silver_means");
        expect(_f32_silver_means).not.toBeUndefined();
        let _f32_silver_means_result = module.invoke(_f32_silver_means, 4.0);
        expect(_f32_silver_means_result).toBe(4.236068);
    });

    _test("execution of float_exprs_92: f32.silver_means (instance 5)", () => {
        let _f32_silver_means = module.getExport("f32.silver_means");
        expect(_f32_silver_means).not.toBeUndefined();
        let _f32_silver_means_result = module.invoke(_f32_silver_means, 5.0);
        expect(_f32_silver_means_result).toBe(5.1925821);
    });

    _test("execution of float_exprs_92: f64.silver_means (instance 0)", () => {
        let _f64_silver_means = module.getExport("f64.silver_means");
        expect(_f64_silver_means).not.toBeUndefined();
        let _f64_silver_means_result = module.invoke(_f64_silver_means, 0.0);
        expect(_f64_silver_means_result).toBe(1.0);
    });

    _test("execution of float_exprs_92: f64.silver_means (instance 1)", () => {
        let _f64_silver_means = module.getExport("f64.silver_means");
        expect(_f64_silver_means).not.toBeUndefined();
        let _f64_silver_means_result = module.invoke(_f64_silver_means, 1.0);
        expect(_f64_silver_means_result).toBe(1.618033988749895);
    });

    _test("execution of float_exprs_92: f64.silver_means (instance 2)", () => {
        let _f64_silver_means = module.getExport("f64.silver_means");
        expect(_f64_silver_means).not.toBeUndefined();
        let _f64_silver_means_result = module.invoke(_f64_silver_means, 2.0);
        expect(_f64_silver_means_result).toBe(2.414213562373095);
    });

    _test("execution of float_exprs_92: f64.silver_means (instance 3)", () => {
        let _f64_silver_means = module.getExport("f64.silver_means");
        expect(_f64_silver_means).not.toBeUndefined();
        let _f64_silver_means_result = module.invoke(_f64_silver_means, 3.0);
        expect(_f64_silver_means_result).toBe(3.302775637731995);
    });

    _test("execution of float_exprs_92: f64.silver_means (instance 4)", () => {
        let _f64_silver_means = module.getExport("f64.silver_means");
        expect(_f64_silver_means).not.toBeUndefined();
        let _f64_silver_means_result = module.invoke(_f64_silver_means, 4.0);
        expect(_f64_silver_means_result).toBe(4.23606797749979);
    });

    _test("execution of float_exprs_92: f64.silver_means (instance 5)", () => {
        let _f64_silver_means = module.getExport("f64.silver_means");
        expect(_f64_silver_means).not.toBeUndefined();
        let _f64_silver_means_result = module.invoke(_f64_silver_means, 5.0);
        expect(_f64_silver_means_result).toBe(5.192582403567252);
    });
});

describe("float_exprs_93", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_93.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_93: point_four (instance 0)", () => {
        let _point_four = module.getExport("point_four");
        expect(_point_four).not.toBeUndefined();
        let _point_four_result = module.invoke(_point_four, 4.0, 10.0);
        expect(_point_four_result).toBe(0);
    });
});

describe("float_exprs_94", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_94.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_94: tau (instance 0)", () => {
        let _tau = module.getExport("tau");
        expect(_tau).not.toBeUndefined();
        let _tau_result = module.invoke(_tau, 10);
        expect(_tau_result).toBe(6.283185307179583);
    });

    _test("execution of float_exprs_94: tau (instance 1)", () => {
        let _tau = module.getExport("tau");
        expect(_tau).not.toBeUndefined();
        let _tau_result = module.invoke(_tau, 11);
        expect(_tau_result).toBe(6.283185307179586);
    });
});

describe("float_exprs_95", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_exprs_95.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_exprs_95: f32.no_fold_conditional_inc (instance 0)", () => {
        let _f32_no_fold_conditional_inc = module.getExport("f32.no_fold_conditional_inc");
        expect(_f32_no_fold_conditional_inc).not.toBeUndefined();
        let _f32_no_fold_conditional_inc_result = module.invoke(
            _f32_no_fold_conditional_inc,
            -0.0,
            -1.0
        );
        expect(_f32_no_fold_conditional_inc_result).toBe(-0.0);
    });

    _test("execution of float_exprs_95: f64.no_fold_conditional_inc (instance 0)", () => {
        let _f64_no_fold_conditional_inc = module.getExport("f64.no_fold_conditional_inc");
        expect(_f64_no_fold_conditional_inc).not.toBeUndefined();
        let _f64_no_fold_conditional_inc_result = module.invoke(
            _f64_no_fold_conditional_inc,
            -0.0,
            -1.0
        );
        expect(_f64_no_fold_conditional_inc_result).toBe(-0.0);
    });
});
