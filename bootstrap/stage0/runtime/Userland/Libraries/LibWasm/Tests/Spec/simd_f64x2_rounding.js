let globalImportObject = {};
let namedModules = {};

describe("simd_f64x2_rounding_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_f64x2_rounding_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 0)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 1)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 2)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 3)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 4)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 5)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 6)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 7)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 8)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 9)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 10)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 11)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 12)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 13)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 14)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 15)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 16)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 17)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 18)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 19)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 20)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 21)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 22)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 23)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 24)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 25)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 26)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 27)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 28)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 29)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 30)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 31)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 32)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 33)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 34)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 35)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 36)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 37)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 38)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 39)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 40)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 41)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 42)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.ceil (instance 43)", () => {
        let _f64x2_ceil = module.getExport("f64x2.ceil");
        expect(_f64x2_ceil).not.toBeUndefined();
        let _f64x2_ceil_result = module.invoke(_f64x2_ceil, 0);
        expect(_f64x2_ceil_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 0)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 1)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 2)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 3)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 4)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 5)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 6)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 7)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 8)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 9)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 10)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 11)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 12)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 13)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 14)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 15)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 16)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 17)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 18)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 19)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 20)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 21)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 22)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 23)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 24)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 25)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 26)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 27)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 28)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 29)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 30)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 31)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 32)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 33)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 34)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 35)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 36)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 37)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 38)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 39)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 40)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 41)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 42)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.floor (instance 43)", () => {
        let _f64x2_floor = module.getExport("f64x2.floor");
        expect(_f64x2_floor).not.toBeUndefined();
        let _f64x2_floor_result = module.invoke(_f64x2_floor, 0);
        expect(_f64x2_floor_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 0)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 1)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 2)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 3)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 4)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 5)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 6)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 7)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 8)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 9)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 10)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 11)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 12)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 13)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 14)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 15)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 16)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 17)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 18)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 19)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 20)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 21)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 22)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 23)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 24)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 25)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 26)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 27)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 28)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 29)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 30)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 31)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 32)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 33)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 34)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 35)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 36)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 37)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 38)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 39)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 40)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 41)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 42)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.trunc (instance 43)", () => {
        let _f64x2_trunc = module.getExport("f64x2.trunc");
        expect(_f64x2_trunc).not.toBeUndefined();
        let _f64x2_trunc_result = module.invoke(_f64x2_trunc, 0);
        expect(_f64x2_trunc_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 0)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 1)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 2)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 3)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 4)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 5)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 6)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 7)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 8)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 9)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 10)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 11)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 12)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 13)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 14)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 15)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 16)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 17)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 18)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 19)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 20)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 21)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 22)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 23)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 24)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 25)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 26)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 27)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 28)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 29)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 30)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 31)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 32)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 33)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 34)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 35)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 36)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 37)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 38)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 39)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 40)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 41)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 42)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });

    _test("execution of simd_f64x2_rounding_0: f64x2.nearest (instance 43)", () => {
        let _f64x2_nearest = module.getExport("f64x2.nearest");
        expect(_f64x2_nearest).not.toBeUndefined();
        let _f64x2_nearest_result = module.invoke(_f64x2_nearest, 0);
        expect(_f64x2_nearest_result).toBe(0);
    });
});

describe("simd_f64x2_rounding_1", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_1: _inline_test_0 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_2", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_2: _inline_test_1 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_3", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_3: _inline_test_2 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_4", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_4: _inline_test_3 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_5", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_5: _inline_test_4 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_6", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_6: _inline_test_5 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_7", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_7: _inline_test_6 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_8", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_8: _inline_test_7 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_9", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_9: _inline_test_8 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_10", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_10: _inline_test_9 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_11", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_11: _inline_test_10 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_12", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_12: _inline_test_11 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_13", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_13: _inline_test_12 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_14", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_14: _inline_test_13 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_15", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_15: _inline_test_14 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_16", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_16: _inline_test_15 (instance 0)", () => {});
});

describe("simd_f64x2_rounding_17", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f64x2_rounding_18", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f64x2_rounding_19", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f64x2_rounding_20", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f64x2_rounding_21", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f64x2_rounding_22", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f64x2_rounding_23", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f64x2_rounding_24", () => {
    let _test = test;

    _test("execution of simd_f64x2_rounding_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
