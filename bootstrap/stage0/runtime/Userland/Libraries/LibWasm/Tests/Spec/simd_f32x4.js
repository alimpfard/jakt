let globalImportObject = {};
let namedModules = {};

describe("simd_f32x4_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_f32x4_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_f32x4_0: f32x4.min_with_const_0 (instance 0)", () => {
        let _f32x4_min_with_const_0 = module.getExport("f32x4.min_with_const_0");
        expect(_f32x4_min_with_const_0).not.toBeUndefined();
        let _f32x4_min_with_const_0_result = module.invoke(_f32x4_min_with_const_0);
        expect(_f32x4_min_with_const_0_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min_with_const_1 (instance 0)", () => {
        let _f32x4_min_with_const_1 = module.getExport("f32x4.min_with_const_1");
        expect(_f32x4_min_with_const_1).not.toBeUndefined();
        let _f32x4_min_with_const_1_result = module.invoke(_f32x4_min_with_const_1);
        expect(_f32x4_min_with_const_1_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min_with_const_2 (instance 0)", () => {
        let _f32x4_min_with_const_2 = module.getExport("f32x4.min_with_const_2");
        expect(_f32x4_min_with_const_2).not.toBeUndefined();
        let _f32x4_min_with_const_2_result = module.invoke(_f32x4_min_with_const_2);
        expect(_f32x4_min_with_const_2_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min_with_const_3 (instance 0)", () => {
        let _f32x4_min_with_const_3 = module.getExport("f32x4.min_with_const_3");
        expect(_f32x4_min_with_const_3).not.toBeUndefined();
        let _f32x4_min_with_const_3_result = module.invoke(_f32x4_min_with_const_3);
        expect(_f32x4_min_with_const_3_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min_with_const_5 (instance 0)", () => {
        let _f32x4_min_with_const_5 = module.getExport("f32x4.min_with_const_5");
        expect(_f32x4_min_with_const_5).not.toBeUndefined();
        let _f32x4_min_with_const_5_result = module.invoke(_f32x4_min_with_const_5, 0);
        expect(_f32x4_min_with_const_5_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min_with_const_6 (instance 0)", () => {
        let _f32x4_min_with_const_6 = module.getExport("f32x4.min_with_const_6");
        expect(_f32x4_min_with_const_6).not.toBeUndefined();
        let _f32x4_min_with_const_6_result = module.invoke(_f32x4_min_with_const_6, 0);
        expect(_f32x4_min_with_const_6_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min_with_const_7 (instance 0)", () => {
        let _f32x4_min_with_const_7 = module.getExport("f32x4.min_with_const_7");
        expect(_f32x4_min_with_const_7).not.toBeUndefined();
        let _f32x4_min_with_const_7_result = module.invoke(_f32x4_min_with_const_7, 0);
        expect(_f32x4_min_with_const_7_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min_with_const_8 (instance 0)", () => {
        let _f32x4_min_with_const_8 = module.getExport("f32x4.min_with_const_8");
        expect(_f32x4_min_with_const_8).not.toBeUndefined();
        let _f32x4_min_with_const_8_result = module.invoke(_f32x4_min_with_const_8, 0);
        expect(_f32x4_min_with_const_8_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_10 (instance 0)", () => {
        let _f32x4_max_with_const_10 = module.getExport("f32x4.max_with_const_10");
        expect(_f32x4_max_with_const_10).not.toBeUndefined();
        let _f32x4_max_with_const_10_result = module.invoke(_f32x4_max_with_const_10);
        expect(_f32x4_max_with_const_10_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_11 (instance 0)", () => {
        let _f32x4_max_with_const_11 = module.getExport("f32x4.max_with_const_11");
        expect(_f32x4_max_with_const_11).not.toBeUndefined();
        let _f32x4_max_with_const_11_result = module.invoke(_f32x4_max_with_const_11);
        expect(_f32x4_max_with_const_11_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_12 (instance 0)", () => {
        let _f32x4_max_with_const_12 = module.getExport("f32x4.max_with_const_12");
        expect(_f32x4_max_with_const_12).not.toBeUndefined();
        let _f32x4_max_with_const_12_result = module.invoke(_f32x4_max_with_const_12);
        expect(_f32x4_max_with_const_12_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_13 (instance 0)", () => {
        let _f32x4_max_with_const_13 = module.getExport("f32x4.max_with_const_13");
        expect(_f32x4_max_with_const_13).not.toBeUndefined();
        let _f32x4_max_with_const_13_result = module.invoke(_f32x4_max_with_const_13);
        expect(_f32x4_max_with_const_13_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_15 (instance 0)", () => {
        let _f32x4_max_with_const_15 = module.getExport("f32x4.max_with_const_15");
        expect(_f32x4_max_with_const_15).not.toBeUndefined();
        let _f32x4_max_with_const_15_result = module.invoke(_f32x4_max_with_const_15, 0);
        expect(_f32x4_max_with_const_15_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_16 (instance 0)", () => {
        let _f32x4_max_with_const_16 = module.getExport("f32x4.max_with_const_16");
        expect(_f32x4_max_with_const_16).not.toBeUndefined();
        let _f32x4_max_with_const_16_result = module.invoke(_f32x4_max_with_const_16, 0);
        expect(_f32x4_max_with_const_16_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_17 (instance 0)", () => {
        let _f32x4_max_with_const_17 = module.getExport("f32x4.max_with_const_17");
        expect(_f32x4_max_with_const_17).not.toBeUndefined();
        let _f32x4_max_with_const_17_result = module.invoke(_f32x4_max_with_const_17, 0);
        expect(_f32x4_max_with_const_17_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max_with_const_18 (instance 0)", () => {
        let _f32x4_max_with_const_18 = module.getExport("f32x4.max_with_const_18");
        expect(_f32x4_max_with_const_18).not.toBeUndefined();
        let _f32x4_max_with_const_18_result = module.invoke(_f32x4_max_with_const_18, 0);
        expect(_f32x4_max_with_const_18_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs_with_const (instance 0)", () => {
        let _f32x4_abs_with_const = module.getExport("f32x4.abs_with_const");
        expect(_f32x4_abs_with_const).not.toBeUndefined();
        let _f32x4_abs_with_const_result = module.invoke(_f32x4_abs_with_const);
        expect(_f32x4_abs_with_const_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 0)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 1)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 0)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 1)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 2)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 3)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 4)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 5)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 6)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 7)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 8)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 9)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 10)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 11)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 12)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 13)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 14)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 15)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 16)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 17)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 18)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 19)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 20)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 21)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 22)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 23)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 24)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 25)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 26)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 27)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 28)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 29)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 30)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 31)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 32)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 33)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 34)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 35)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 36)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 37)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 38)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 39)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 40)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 41)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 42)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 43)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 44)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 45)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 46)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 47)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 48)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 49)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 50)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 51)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 52)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 53)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 54)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 55)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 56)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 57)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 58)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 59)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 60)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 61)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 62)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 63)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 64)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 65)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 66)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 67)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 68)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 69)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 70)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 71)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 72)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 73)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 74)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 75)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 76)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 77)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 78)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 79)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 80)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 81)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 82)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 83)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 84)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 85)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 86)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 87)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 88)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 89)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 90)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 91)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 92)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 93)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 94)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 95)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 96)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 97)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 98)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 99)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 100)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 101)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 102)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 103)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 104)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 105)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 106)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 107)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 108)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 109)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 110)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 111)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 112)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 113)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 114)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 115)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 116)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 117)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 118)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 119)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 120)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 121)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 122)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 123)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 124)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 125)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 126)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 127)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 128)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 129)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 130)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 131)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 132)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 133)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 134)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 135)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 136)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 137)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 138)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 139)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 140)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 141)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 142)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 143)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 144)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 145)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 146)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 147)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 148)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 149)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 150)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 151)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 152)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 153)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 154)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 155)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 156)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 157)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 158)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 159)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 160)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 161)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 162)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 163)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 164)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 165)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 166)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 167)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 168)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 169)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 170)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 171)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 172)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 173)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 174)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 175)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 176)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 177)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 178)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 179)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 180)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 181)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 182)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 183)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 184)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 185)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 186)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 187)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 188)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 189)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 190)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 191)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 192)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 193)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 194)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 195)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 196)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 197)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 198)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 199)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 200)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 201)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 202)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 203)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 204)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 205)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 206)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 207)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 208)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 209)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 210)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 211)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 212)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 213)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 214)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 215)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 216)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 217)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 218)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 219)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 220)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 221)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 222)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 223)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 224)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 225)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 226)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 227)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 228)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 229)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 230)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 231)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 232)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 233)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 234)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 235)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 236)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 237)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 238)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 239)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 240)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 241)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 242)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 243)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 244)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 245)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 246)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 247)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 248)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 249)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 250)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 251)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 252)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 253)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 254)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 255)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 256)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 257)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 258)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 259)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 260)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 261)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 262)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 263)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 264)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 265)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 266)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 267)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 268)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 269)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 270)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 271)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 272)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 273)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 274)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 275)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 276)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 277)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 278)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 279)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 280)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 281)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 282)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 283)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 284)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 285)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 286)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 287)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 288)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 289)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 290)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 291)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 292)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 293)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 294)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 295)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 296)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 297)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 298)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 299)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 300)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 301)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 302)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 303)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 304)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 305)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 306)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 307)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 308)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 309)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 310)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 311)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 312)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 313)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 314)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 315)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 316)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 317)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 318)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 319)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 320)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 321)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 322)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 323)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 324)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 325)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 326)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 327)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 328)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 329)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 330)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 331)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 332)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 333)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 334)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 335)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 336)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 337)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 338)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 339)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 340)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 341)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 342)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 343)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 344)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 345)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 346)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 347)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 348)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 349)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 350)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 351)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 352)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 353)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 354)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 355)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 356)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 357)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 358)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 359)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 360)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 361)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 362)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 2)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 3)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 4)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 5)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 6)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 7)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 8)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 9)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 10)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 11)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 12)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 13)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 14)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 15)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 16)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 17)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 18)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 19)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 20)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 21)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 22)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 23)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 24)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 25)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 26)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 27)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 28)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 29)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 30)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 31)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 32)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 33)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 34)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 35)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 36)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 37)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 38)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 39)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 40)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 41)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 42)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 43)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 44)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 45)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 46)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 47)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 48)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 49)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 50)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 51)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 52)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 53)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 54)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 55)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 56)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 57)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 58)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 59)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 60)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 61)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 62)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 63)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 64)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 65)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 66)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 67)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 68)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 69)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 70)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 71)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 72)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 73)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 74)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 75)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 76)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 77)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 78)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 79)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 80)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 81)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 82)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 83)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 84)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 85)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 86)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 87)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 88)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 89)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 90)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 91)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 92)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 93)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 94)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 95)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 96)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 97)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 98)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 99)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 100)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 101)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 102)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 103)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 104)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 105)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 106)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 107)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 108)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 109)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 110)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 111)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 112)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 113)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 114)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 115)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 116)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 117)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 118)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 119)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 120)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 121)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 122)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 123)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 124)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 125)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 126)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 127)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 128)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 129)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 130)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 131)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 132)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 133)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 134)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 135)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 136)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 137)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 138)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 139)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 140)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 141)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 142)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 143)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 144)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 145)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 146)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 147)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 148)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 149)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 150)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 151)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 152)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 153)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 154)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 155)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 156)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 157)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 158)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 159)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 160)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 161)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 162)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 163)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 164)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 165)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 166)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 167)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 168)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 169)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 170)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 171)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 172)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 173)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 174)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 175)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 176)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 177)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 178)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 179)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 180)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 181)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 182)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 183)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 184)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 185)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 186)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 187)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 188)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 189)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 190)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 191)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 192)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 193)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 194)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 195)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 196)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 197)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 198)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 199)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 200)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 201)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 202)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 203)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 204)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 205)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 206)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 207)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 208)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 209)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 210)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 211)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 212)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 213)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 214)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 215)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 216)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 217)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 218)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 219)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 220)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 221)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 222)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 223)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 224)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 225)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 226)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 227)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 228)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 229)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 230)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 231)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 232)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 233)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 234)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 235)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 236)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 237)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 238)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 239)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 240)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 241)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 242)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 243)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 244)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 245)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 246)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 247)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 248)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 249)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 250)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 251)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 252)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 253)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 254)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 255)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 256)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 257)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 258)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 259)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 260)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 261)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 262)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 263)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 264)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 265)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 266)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 267)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 268)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 269)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 270)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 271)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 272)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 273)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 274)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 275)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 276)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 277)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 278)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 279)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 280)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 281)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 282)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 283)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 284)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 285)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 286)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 287)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 288)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 289)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 290)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 291)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 292)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 293)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 294)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 295)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 296)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 297)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 298)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 299)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 300)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 301)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 302)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 303)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 304)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 305)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 306)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 307)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 308)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 309)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 310)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 311)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 312)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 313)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 314)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 315)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 316)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 317)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 318)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 319)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 320)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 321)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 322)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 323)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 324)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 325)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 326)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 327)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 328)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 329)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 330)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 331)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 332)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 333)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 334)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 335)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 336)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 337)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 338)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 339)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 340)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 341)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 342)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 343)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 344)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 345)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 346)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 347)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 348)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 349)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 350)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 351)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 352)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 353)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 354)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 355)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 356)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 357)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 358)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 359)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 360)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 361)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 362)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 363)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.min (instance 364)", () => {
        let _f32x4_min = module.getExport("f32x4.min");
        expect(_f32x4_min).not.toBeUndefined();
        let _f32x4_min_result = module.invoke(_f32x4_min, 0, 0);
        expect(_f32x4_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 363)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.max (instance 364)", () => {
        let _f32x4_max = module.getExport("f32x4.max");
        expect(_f32x4_max).not.toBeUndefined();
        let _f32x4_max_result = module.invoke(_f32x4_max, 0, 0);
        expect(_f32x4_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 0)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 1)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 2)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 3)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 4)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 5)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 6)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 7)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 8)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 9)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 10)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 11)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 12)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 13)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 14)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 15)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 16)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 17)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 18)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 19)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_0: f32x4.abs (instance 20)", () => {
        let _f32x4_abs = module.getExport("f32x4.abs");
        expect(_f32x4_abs).not.toBeUndefined();
        let _f32x4_abs_result = module.invoke(_f32x4_abs, 0);
        expect(_f32x4_abs_result).toBe(0);
    });
});

describe("simd_f32x4_1", () => {
    let _test = test;

    _test("execution of simd_f32x4_1: _inline_test_0 (instance 0)", () => {});
});

describe("simd_f32x4_2", () => {
    let _test = test;

    _test("execution of simd_f32x4_2: _inline_test_1 (instance 0)", () => {});
});

describe("simd_f32x4_3", () => {
    let _test = test;

    _test("execution of simd_f32x4_3: _inline_test_2 (instance 0)", () => {});
});

describe("simd_f32x4_4", () => {
    let _test = test;

    _test("execution of simd_f32x4_4: _inline_test_3 (instance 0)", () => {});
});

describe("simd_f32x4_5", () => {
    let _test = test;

    _test("execution of simd_f32x4_5: _inline_test_4 (instance 0)", () => {});
});

describe("simd_f32x4_6", () => {
    let _test = test;

    _test("execution of simd_f32x4_6: _inline_test_5 (instance 0)", () => {});
});

describe("simd_f32x4_7", () => {
    let _test = test;

    _test("execution of simd_f32x4_7: _inline_test_6 (instance 0)", () => {});
});

describe("simd_f32x4_8", () => {
    let _test = test;

    _test("execution of simd_f32x4_8: _inline_test_7 (instance 0)", () => {});
});

describe("simd_f32x4_9", () => {
    let _test = test;

    _test("execution of simd_f32x4_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_10", () => {
    let _test = test;

    _test("execution of simd_f32x4_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_11", () => {
    let _test = test;

    _test("execution of simd_f32x4_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_12", () => {
    let _test = test;

    _test("execution of simd_f32x4_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_13", () => {
    let _test = test;

    _test("execution of simd_f32x4_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_14", () => {
    let _test = test;

    _test("execution of simd_f32x4_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_15", () => {
    let _test = test;

    _test("execution of simd_f32x4_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_16", () => {
    let _test = test;

    _test("execution of simd_f32x4_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_f32x4_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_f32x4_17: max-min (instance 0)", () => {
        let _max_min = module.getExport("max-min");
        expect(_max_min).not.toBeUndefined();
        let _max_min_result = module.invoke(_max_min, 0, 0, 0);
        expect(_max_min_result).toBe(0);
    });

    _test("execution of simd_f32x4_17: min-max (instance 0)", () => {
        let _min_max = module.getExport("min-max");
        expect(_min_max).not.toBeUndefined();
        let _min_max_result = module.invoke(_min_max, 0, 0, 0);
        expect(_min_max_result).toBe(0);
    });

    _test("execution of simd_f32x4_17: max-abs (instance 0)", () => {
        let _max_abs = module.getExport("max-abs");
        expect(_max_abs).not.toBeUndefined();
        let _max_abs_result = module.invoke(_max_abs, 0, 0);
        expect(_max_abs_result).toBe(0);
    });

    _test("execution of simd_f32x4_17: min-abs (instance 0)", () => {
        let _min_abs = module.getExport("min-abs");
        expect(_min_abs).not.toBeUndefined();
        let _min_abs_result = module.invoke(_min_abs, 0, 0);
        expect(_min_abs_result).toBe(0);
    });
});
