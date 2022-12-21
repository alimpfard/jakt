let globalImportObject = {};
let namedModules = {};

describe("simd_conversions_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_conversions_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 0)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 1)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 2)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 3)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 4)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 5)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 6)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 7)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 8)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 9)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 10)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 11)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 12)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 13)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 14)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.promote_low_f32x4 (instance 15)", () => {
        let _f64x2_promote_low_f32x4 = module.getExport("f64x2.promote_low_f32x4");
        expect(_f64x2_promote_low_f32x4).not.toBeUndefined();
        let _f64x2_promote_low_f32x4_result = module.invoke(_f64x2_promote_low_f32x4, 0);
        expect(_f64x2_promote_low_f32x4_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 0)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 1)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 2)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 3)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 4)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 5)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 6)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 7)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 8)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 9)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 10)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 11)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 12)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 13)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 14)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 15)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 16)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 17)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 18)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 19)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 20)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 21)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 22)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 23)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 24)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 25)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 26)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 27)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 28)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 29)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 30)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 31)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 32)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 33)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 34)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 35)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 36)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 37)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 38)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 39)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 40)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 41)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 42)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 43)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 44)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 45)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 46)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 47)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 48)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 49)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 50)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.demote_f64x2_zero (instance 51)", () => {
        let _f32x4_demote_f64x2_zero = module.getExport("f32x4.demote_f64x2_zero");
        expect(_f32x4_demote_f64x2_zero).not.toBeUndefined();
        let _f32x4_demote_f64x2_zero_result = module.invoke(_f32x4_demote_f64x2_zero, 0);
        expect(_f32x4_demote_f64x2_zero_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 0)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 1)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 2)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 3)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 4)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 5)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 6)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 7)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 8)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 9)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 10)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 11)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_s (instance 12)", () => {
        let _f32x4_convert_i32x4_s = module.getExport("f32x4.convert_i32x4_s");
        expect(_f32x4_convert_i32x4_s).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_result = module.invoke(_f32x4_convert_i32x4_s, 0);
        expect(_f32x4_convert_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 0)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 1)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 2)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 3)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 4)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 5)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 6)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 7)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 8)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 9)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 10)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 11)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 12)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 13)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 14)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 15)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f32x4.convert_i32x4_u (instance 16)", () => {
        let _f32x4_convert_i32x4_u = module.getExport("f32x4.convert_i32x4_u");
        expect(_f32x4_convert_i32x4_u).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_result = module.invoke(_f32x4_convert_i32x4_u, 0);
        expect(_f32x4_convert_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_s (instance 0)", () => {
        let _f64x2_convert_low_i32x4_s = module.getExport("f64x2.convert_low_i32x4_s");
        expect(_f64x2_convert_low_i32x4_s).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_s_result = module.invoke(_f64x2_convert_low_i32x4_s, 0);
        expect(_f64x2_convert_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_s (instance 1)", () => {
        let _f64x2_convert_low_i32x4_s = module.getExport("f64x2.convert_low_i32x4_s");
        expect(_f64x2_convert_low_i32x4_s).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_s_result = module.invoke(_f64x2_convert_low_i32x4_s, 0);
        expect(_f64x2_convert_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_s (instance 2)", () => {
        let _f64x2_convert_low_i32x4_s = module.getExport("f64x2.convert_low_i32x4_s");
        expect(_f64x2_convert_low_i32x4_s).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_s_result = module.invoke(_f64x2_convert_low_i32x4_s, 0);
        expect(_f64x2_convert_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_s (instance 3)", () => {
        let _f64x2_convert_low_i32x4_s = module.getExport("f64x2.convert_low_i32x4_s");
        expect(_f64x2_convert_low_i32x4_s).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_s_result = module.invoke(_f64x2_convert_low_i32x4_s, 0);
        expect(_f64x2_convert_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_s (instance 4)", () => {
        let _f64x2_convert_low_i32x4_s = module.getExport("f64x2.convert_low_i32x4_s");
        expect(_f64x2_convert_low_i32x4_s).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_s_result = module.invoke(_f64x2_convert_low_i32x4_s, 0);
        expect(_f64x2_convert_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_s (instance 5)", () => {
        let _f64x2_convert_low_i32x4_s = module.getExport("f64x2.convert_low_i32x4_s");
        expect(_f64x2_convert_low_i32x4_s).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_s_result = module.invoke(_f64x2_convert_low_i32x4_s, 0);
        expect(_f64x2_convert_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_u (instance 0)", () => {
        let _f64x2_convert_low_i32x4_u = module.getExport("f64x2.convert_low_i32x4_u");
        expect(_f64x2_convert_low_i32x4_u).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_u_result = module.invoke(_f64x2_convert_low_i32x4_u, 0);
        expect(_f64x2_convert_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_u (instance 1)", () => {
        let _f64x2_convert_low_i32x4_u = module.getExport("f64x2.convert_low_i32x4_u");
        expect(_f64x2_convert_low_i32x4_u).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_u_result = module.invoke(_f64x2_convert_low_i32x4_u, 0);
        expect(_f64x2_convert_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_u (instance 2)", () => {
        let _f64x2_convert_low_i32x4_u = module.getExport("f64x2.convert_low_i32x4_u");
        expect(_f64x2_convert_low_i32x4_u).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_u_result = module.invoke(_f64x2_convert_low_i32x4_u, 0);
        expect(_f64x2_convert_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_u (instance 3)", () => {
        let _f64x2_convert_low_i32x4_u = module.getExport("f64x2.convert_low_i32x4_u");
        expect(_f64x2_convert_low_i32x4_u).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_u_result = module.invoke(_f64x2_convert_low_i32x4_u, 0);
        expect(_f64x2_convert_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: f64x2.convert_low_i32x4_u (instance 4)", () => {
        let _f64x2_convert_low_i32x4_u = module.getExport("f64x2.convert_low_i32x4_u");
        expect(_f64x2_convert_low_i32x4_u).not.toBeUndefined();
        let _f64x2_convert_low_i32x4_u_result = module.invoke(_f64x2_convert_low_i32x4_u, 0);
        expect(_f64x2_convert_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 0)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 1)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 2)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 3)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 4)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 5)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 6)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 7)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 8)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 9)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 10)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 11)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 12)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 13)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 14)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 15)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 16)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 17)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 18)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 19)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 20)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 21)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 22)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 23)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 24)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 25)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 26)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 27)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_s (instance 28)", () => {
        let _i8x16_narrow_i16x8_s = module.getExport("i8x16.narrow_i16x8_s");
        expect(_i8x16_narrow_i16x8_s).not.toBeUndefined();
        let _i8x16_narrow_i16x8_s_result = module.invoke(_i8x16_narrow_i16x8_s, 0, 0);
        expect(_i8x16_narrow_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 0)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 1)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 2)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 3)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 4)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 5)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 6)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 7)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 8)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 9)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 10)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 11)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 12)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 13)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 14)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 15)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 16)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 17)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 18)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 19)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 20)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 21)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 22)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 23)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 24)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i8x16.narrow_i16x8_u (instance 25)", () => {
        let _i8x16_narrow_i16x8_u = module.getExport("i8x16.narrow_i16x8_u");
        expect(_i8x16_narrow_i16x8_u).not.toBeUndefined();
        let _i8x16_narrow_i16x8_u_result = module.invoke(_i8x16_narrow_i16x8_u, 0, 0);
        expect(_i8x16_narrow_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 0)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 1)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 2)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 3)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 4)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 5)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 6)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 7)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 8)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 9)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 10)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 11)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 12)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 13)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 14)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 15)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 16)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 17)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 18)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 19)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 20)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 21)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 22)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 23)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 24)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 25)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 26)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 27)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_s (instance 28)", () => {
        let _i16x8_narrow_i32x4_s = module.getExport("i16x8.narrow_i32x4_s");
        expect(_i16x8_narrow_i32x4_s).not.toBeUndefined();
        let _i16x8_narrow_i32x4_s_result = module.invoke(_i16x8_narrow_i32x4_s, 0, 0);
        expect(_i16x8_narrow_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 0)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 1)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 2)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 3)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 4)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 5)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 6)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 7)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 8)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 9)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 10)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 11)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 12)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 13)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 14)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 15)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 16)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 17)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 18)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_conversions_0: i16x8.narrow_i32x4_u (instance 19)", () => {
        let _i16x8_narrow_i32x4_u = module.getExport("i16x8.narrow_i32x4_u");
        expect(_i16x8_narrow_i32x4_u).not.toBeUndefined();
        let _i16x8_narrow_i32x4_u_result = module.invoke(_i16x8_narrow_i32x4_u, 0, 0);
        expect(_i16x8_narrow_i32x4_u_result).toBe(0);
    });
});

describe("simd_conversions_1", () => {
    let _test = test;

    _test("execution of simd_conversions_1: _inline_test_0 (instance 0)", () => {});
});

describe("simd_conversions_2", () => {
    let _test = test;

    _test("execution of simd_conversions_2: _inline_test_1 (instance 0)", () => {});
});

describe("simd_conversions_3", () => {
    let _test = test;

    _test("execution of simd_conversions_3: _inline_test_2 (instance 0)", () => {});
});

describe("simd_conversions_4", () => {
    let _test = test;

    _test("execution of simd_conversions_4: _inline_test_3 (instance 0)", () => {});
});

describe("simd_conversions_5", () => {
    let _test = test;

    _test("execution of simd_conversions_5: _inline_test_4 (instance 0)", () => {});
});

describe("simd_conversions_6", () => {
    let _test = test;

    _test("execution of simd_conversions_6: _inline_test_5 (instance 0)", () => {});
});

describe("simd_conversions_7", () => {
    let _test = test;

    _test("execution of simd_conversions_7: _inline_test_6 (instance 0)", () => {});
});

describe("simd_conversions_8", () => {
    let _test = test;

    _test("execution of simd_conversions_8: _inline_test_7 (instance 0)", () => {});
});

describe("simd_conversions_9", () => {
    let _test = test;

    _test("execution of simd_conversions_9: _inline_test_8 (instance 0)", () => {});
});

describe("simd_conversions_10", () => {
    let _test = test;

    _test("execution of simd_conversions_10: _inline_test_9 (instance 0)", () => {});
});

describe("simd_conversions_11", () => {
    let _test = test;

    _test("execution of simd_conversions_11: _inline_test_10 (instance 0)", () => {});
});

describe("simd_conversions_12", () => {
    let _test = test;

    _test("execution of simd_conversions_12: _inline_test_11 (instance 0)", () => {});
});

describe("simd_conversions_13", () => {
    let _test = test;

    _test("execution of simd_conversions_13: _inline_test_12 (instance 0)", () => {});
});

describe("simd_conversions_14", () => {
    let _test = test;

    _test("execution of simd_conversions_14: _inline_test_13 (instance 0)", () => {});
});

describe("simd_conversions_15", () => {
    let _test = test;

    _test("execution of simd_conversions_15: _inline_test_14 (instance 0)", () => {});
});

describe("simd_conversions_16", () => {
    let _test = test;

    _test("execution of simd_conversions_16: _inline_test_15 (instance 0)", () => {});
});

describe("simd_conversions_17", () => {
    let _test = test;

    _test("execution of simd_conversions_17: _inline_test_16 (instance 0)", () => {});
});

describe("simd_conversions_18", () => {
    let _test = test;

    _test("execution of simd_conversions_18: _inline_test_17 (instance 0)", () => {});
});

describe("simd_conversions_19", () => {
    let _test = test;

    _test("execution of simd_conversions_19: _inline_test_18 (instance 0)", () => {});
});

describe("simd_conversions_20", () => {
    let _test = test;

    _test("execution of simd_conversions_20: _inline_test_19 (instance 0)", () => {});
});

describe("simd_conversions_21", () => {
    let _test = test;

    _test("execution of simd_conversions_21: _inline_test_20 (instance 0)", () => {});
});

describe("simd_conversions_22", () => {
    let _test = test;

    _test("execution of simd_conversions_22: _inline_test_21 (instance 0)", () => {});
});

describe("simd_conversions_23", () => {
    let _test = test;

    _test("execution of simd_conversions_23: _inline_test_22 (instance 0)", () => {});
});

describe("simd_conversions_24", () => {
    let _test = test;

    _test("execution of simd_conversions_24: _inline_test_23 (instance 0)", () => {});
});

describe("simd_conversions_25", () => {
    let _test = test;

    _test("execution of simd_conversions_25: _inline_test_24 (instance 0)", () => {});
});

describe("simd_conversions_26", () => {
    let _test = test;

    _test("execution of simd_conversions_26: _inline_test_25 (instance 0)", () => {});
});

describe("simd_conversions_27", () => {
    let _test = test;

    _test("execution of simd_conversions_27: _inline_test_26 (instance 0)", () => {});
});

describe("simd_conversions_28", () => {
    let _test = test;

    _test("execution of simd_conversions_28: _inline_test_27 (instance 0)", () => {});
});

describe("simd_conversions_29", () => {
    let _test = test;

    _test("execution of simd_conversions_29: _inline_test_28 (instance 0)", () => {});
});

describe("simd_conversions_30", () => {
    let _test = test;

    _test("execution of simd_conversions_30: _inline_test_29 (instance 0)", () => {});
});

describe("simd_conversions_31", () => {
    let _test = test;

    _test("execution of simd_conversions_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_32", () => {
    let _test = test;

    _test("execution of simd_conversions_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_33", () => {
    let _test = test;

    _test("execution of simd_conversions_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_34", () => {
    let _test = test;

    _test("execution of simd_conversions_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_35", () => {
    let _test = test;

    _test("execution of simd_conversions_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_36", () => {
    let _test = test;

    _test("execution of simd_conversions_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_37", () => {
    let _test = test;

    _test("execution of simd_conversions_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_38", () => {
    let _test = test;

    _test("execution of simd_conversions_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_39", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_conversions_39.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_conversions_39: f32x4_convert_i32x4_s_add (instance 0)", () => {
        let _f32x4_convert_i32x4_s_add = module.getExport("f32x4_convert_i32x4_s_add");
        expect(_f32x4_convert_i32x4_s_add).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_add_result = module.invoke(_f32x4_convert_i32x4_s_add, 0, 0);
        expect(_f32x4_convert_i32x4_s_add_result).toBe(0);
    });

    _test("execution of simd_conversions_39: f32x4_convert_i32x4_s_sub (instance 0)", () => {
        let _f32x4_convert_i32x4_s_sub = module.getExport("f32x4_convert_i32x4_s_sub");
        expect(_f32x4_convert_i32x4_s_sub).not.toBeUndefined();
        let _f32x4_convert_i32x4_s_sub_result = module.invoke(_f32x4_convert_i32x4_s_sub, 0, 0);
        expect(_f32x4_convert_i32x4_s_sub_result).toBe(0);
    });

    _test("execution of simd_conversions_39: f32x4_convert_i32x4_u_mul (instance 0)", () => {
        let _f32x4_convert_i32x4_u_mul = module.getExport("f32x4_convert_i32x4_u_mul");
        expect(_f32x4_convert_i32x4_u_mul).not.toBeUndefined();
        let _f32x4_convert_i32x4_u_mul_result = module.invoke(_f32x4_convert_i32x4_u_mul, 0, 0);
        expect(_f32x4_convert_i32x4_u_mul_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_low_extend_narrow_ss (instance 0)", () => {
        let _i16x8_low_extend_narrow_ss = module.getExport("i16x8_low_extend_narrow_ss");
        expect(_i16x8_low_extend_narrow_ss).not.toBeUndefined();
        let _i16x8_low_extend_narrow_ss_result = module.invoke(_i16x8_low_extend_narrow_ss, 0, 0);
        expect(_i16x8_low_extend_narrow_ss_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_low_extend_narrow_su (instance 0)", () => {
        let _i16x8_low_extend_narrow_su = module.getExport("i16x8_low_extend_narrow_su");
        expect(_i16x8_low_extend_narrow_su).not.toBeUndefined();
        let _i16x8_low_extend_narrow_su_result = module.invoke(_i16x8_low_extend_narrow_su, 0, 0);
        expect(_i16x8_low_extend_narrow_su_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_high_extend_narrow_ss (instance 0)", () => {
        let _i16x8_high_extend_narrow_ss = module.getExport("i16x8_high_extend_narrow_ss");
        expect(_i16x8_high_extend_narrow_ss).not.toBeUndefined();
        let _i16x8_high_extend_narrow_ss_result = module.invoke(_i16x8_high_extend_narrow_ss, 0, 0);
        expect(_i16x8_high_extend_narrow_ss_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_high_extend_narrow_su (instance 0)", () => {
        let _i16x8_high_extend_narrow_su = module.getExport("i16x8_high_extend_narrow_su");
        expect(_i16x8_high_extend_narrow_su).not.toBeUndefined();
        let _i16x8_high_extend_narrow_su_result = module.invoke(_i16x8_high_extend_narrow_su, 0, 0);
        expect(_i16x8_high_extend_narrow_su_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_low_extend_narrow_uu (instance 0)", () => {
        let _i16x8_low_extend_narrow_uu = module.getExport("i16x8_low_extend_narrow_uu");
        expect(_i16x8_low_extend_narrow_uu).not.toBeUndefined();
        let _i16x8_low_extend_narrow_uu_result = module.invoke(_i16x8_low_extend_narrow_uu, 0, 0);
        expect(_i16x8_low_extend_narrow_uu_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_low_extend_narrow_us (instance 0)", () => {
        let _i16x8_low_extend_narrow_us = module.getExport("i16x8_low_extend_narrow_us");
        expect(_i16x8_low_extend_narrow_us).not.toBeUndefined();
        let _i16x8_low_extend_narrow_us_result = module.invoke(_i16x8_low_extend_narrow_us, 0, 0);
        expect(_i16x8_low_extend_narrow_us_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_high_extend_narrow_uu (instance 0)", () => {
        let _i16x8_high_extend_narrow_uu = module.getExport("i16x8_high_extend_narrow_uu");
        expect(_i16x8_high_extend_narrow_uu).not.toBeUndefined();
        let _i16x8_high_extend_narrow_uu_result = module.invoke(_i16x8_high_extend_narrow_uu, 0, 0);
        expect(_i16x8_high_extend_narrow_uu_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i16x8_high_extend_narrow_us (instance 0)", () => {
        let _i16x8_high_extend_narrow_us = module.getExport("i16x8_high_extend_narrow_us");
        expect(_i16x8_high_extend_narrow_us).not.toBeUndefined();
        let _i16x8_high_extend_narrow_us_result = module.invoke(_i16x8_high_extend_narrow_us, 0, 0);
        expect(_i16x8_high_extend_narrow_us_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_low_extend_narrow_ss (instance 0)", () => {
        let _i32x4_low_extend_narrow_ss = module.getExport("i32x4_low_extend_narrow_ss");
        expect(_i32x4_low_extend_narrow_ss).not.toBeUndefined();
        let _i32x4_low_extend_narrow_ss_result = module.invoke(_i32x4_low_extend_narrow_ss, 0, 0);
        expect(_i32x4_low_extend_narrow_ss_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_low_extend_narrow_su (instance 0)", () => {
        let _i32x4_low_extend_narrow_su = module.getExport("i32x4_low_extend_narrow_su");
        expect(_i32x4_low_extend_narrow_su).not.toBeUndefined();
        let _i32x4_low_extend_narrow_su_result = module.invoke(_i32x4_low_extend_narrow_su, 0, 0);
        expect(_i32x4_low_extend_narrow_su_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_high_extend_narrow_ss (instance 0)", () => {
        let _i32x4_high_extend_narrow_ss = module.getExport("i32x4_high_extend_narrow_ss");
        expect(_i32x4_high_extend_narrow_ss).not.toBeUndefined();
        let _i32x4_high_extend_narrow_ss_result = module.invoke(_i32x4_high_extend_narrow_ss, 0, 0);
        expect(_i32x4_high_extend_narrow_ss_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_high_extend_narrow_su (instance 0)", () => {
        let _i32x4_high_extend_narrow_su = module.getExport("i32x4_high_extend_narrow_su");
        expect(_i32x4_high_extend_narrow_su).not.toBeUndefined();
        let _i32x4_high_extend_narrow_su_result = module.invoke(_i32x4_high_extend_narrow_su, 0, 0);
        expect(_i32x4_high_extend_narrow_su_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_low_extend_narrow_uu (instance 0)", () => {
        let _i32x4_low_extend_narrow_uu = module.getExport("i32x4_low_extend_narrow_uu");
        expect(_i32x4_low_extend_narrow_uu).not.toBeUndefined();
        let _i32x4_low_extend_narrow_uu_result = module.invoke(_i32x4_low_extend_narrow_uu, 0, 0);
        expect(_i32x4_low_extend_narrow_uu_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_low_extend_narrow_us (instance 0)", () => {
        let _i32x4_low_extend_narrow_us = module.getExport("i32x4_low_extend_narrow_us");
        expect(_i32x4_low_extend_narrow_us).not.toBeUndefined();
        let _i32x4_low_extend_narrow_us_result = module.invoke(_i32x4_low_extend_narrow_us, 0, 0);
        expect(_i32x4_low_extend_narrow_us_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_high_extend_narrow_uu (instance 0)", () => {
        let _i32x4_high_extend_narrow_uu = module.getExport("i32x4_high_extend_narrow_uu");
        expect(_i32x4_high_extend_narrow_uu).not.toBeUndefined();
        let _i32x4_high_extend_narrow_uu_result = module.invoke(_i32x4_high_extend_narrow_uu, 0, 0);
        expect(_i32x4_high_extend_narrow_uu_result).toBe(0);
    });

    _test("execution of simd_conversions_39: i32x4_high_extend_narrow_us (instance 0)", () => {
        let _i32x4_high_extend_narrow_us = module.getExport("i32x4_high_extend_narrow_us");
        expect(_i32x4_high_extend_narrow_us).not.toBeUndefined();
        let _i32x4_high_extend_narrow_us_result = module.invoke(_i32x4_high_extend_narrow_us, 0, 0);
        expect(_i32x4_high_extend_narrow_us_result).toBe(0);
    });
});

describe("simd_conversions_40", () => {
    let _test = test;

    _test("execution of simd_conversions_40: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_41", () => {
    let _test = test;

    _test("execution of simd_conversions_41: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_42", () => {
    let _test = test;

    _test("execution of simd_conversions_42: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_43", () => {
    let _test = test;

    _test("execution of simd_conversions_43: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_44", () => {
    let _test = test;

    _test("execution of simd_conversions_44: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_45", () => {
    let _test = test;

    _test("execution of simd_conversions_45: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_46", () => {
    let _test = test;

    _test("execution of simd_conversions_46: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_47", () => {
    let _test = test;

    _test("execution of simd_conversions_47: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_48", () => {
    let _test = test;

    _test("execution of simd_conversions_48: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_conversions_49", () => {
    let _test = test;

    _test("execution of simd_conversions_49: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
