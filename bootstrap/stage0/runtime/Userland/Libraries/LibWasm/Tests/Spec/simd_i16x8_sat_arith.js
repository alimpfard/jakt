let globalImportObject = {};
let namedModules = {};

describe("simd_i16x8_sat_arith_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i16x8_sat_arith_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 0)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 1)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 2)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 3)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 4)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 5)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 6)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 7)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 8)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 9)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 10)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 11)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 12)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 13)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 14)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 15)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 16)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 17)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 18)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 19)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 20)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 21)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 22)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 23)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 24)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 25)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 26)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 27)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 28)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 29)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 30)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 31)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 32)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 33)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 34)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 35)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 36)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 37)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 38)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 39)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 40)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 41)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 42)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 43)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 44)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 45)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 46)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 47)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_s (instance 48)", () => {
        let _i16x8_add_sat_s = module.getExport("i16x8.add_sat_s");
        expect(_i16x8_add_sat_s).not.toBeUndefined();
        let _i16x8_add_sat_s_result = module.invoke(_i16x8_add_sat_s, 0, 0);
        expect(_i16x8_add_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 0)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 1)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 2)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 3)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 4)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 5)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 6)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 7)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 8)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 9)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 10)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 11)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 12)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 13)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 14)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 15)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 16)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 17)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 18)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 19)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 20)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 21)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 22)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 23)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 24)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 25)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 26)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 27)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 28)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 29)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 30)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 31)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 32)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 33)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 34)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 35)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 36)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 37)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 38)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 39)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 40)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 41)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 42)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 43)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 44)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 45)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 46)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 47)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.add_sat_u (instance 48)", () => {
        let _i16x8_add_sat_u = module.getExport("i16x8.add_sat_u");
        expect(_i16x8_add_sat_u).not.toBeUndefined();
        let _i16x8_add_sat_u_result = module.invoke(_i16x8_add_sat_u, 0, 0);
        expect(_i16x8_add_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 0)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 1)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 2)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 3)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 4)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 5)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 6)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 7)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 8)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 9)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 10)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 11)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 12)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 13)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 14)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 15)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 16)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 17)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 18)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 19)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 20)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 21)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 22)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 23)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 24)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 25)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 26)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 27)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 28)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 29)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 30)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 31)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 32)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 33)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 34)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 35)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 36)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 37)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 38)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 39)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 40)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 41)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 42)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 43)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 44)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 45)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 46)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 47)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_s (instance 48)", () => {
        let _i16x8_sub_sat_s = module.getExport("i16x8.sub_sat_s");
        expect(_i16x8_sub_sat_s).not.toBeUndefined();
        let _i16x8_sub_sat_s_result = module.invoke(_i16x8_sub_sat_s, 0, 0);
        expect(_i16x8_sub_sat_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 0)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 1)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 2)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 3)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 4)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 5)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 6)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 7)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 8)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 9)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 10)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 11)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 12)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 13)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 14)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 15)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 16)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 17)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 18)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 19)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 20)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 21)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 22)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 23)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 24)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 25)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 26)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 27)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 28)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 29)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 30)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 31)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 32)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 33)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 34)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 35)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 36)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 37)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 38)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 39)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 40)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 41)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 42)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 43)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 44)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 45)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 46)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 47)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_0: i16x8.sub_sat_u (instance 48)", () => {
        let _i16x8_sub_sat_u = module.getExport("i16x8.sub_sat_u");
        expect(_i16x8_sub_sat_u).not.toBeUndefined();
        let _i16x8_sub_sat_u_result = module.invoke(_i16x8_sub_sat_u, 0, 0);
        expect(_i16x8_sub_sat_u_result).toBe(0);
    });
});

describe("simd_i16x8_sat_arith_1", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_1: _inline_test_0 (instance 0)", () => {});
});

describe("simd_i16x8_sat_arith_2", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_2: _inline_test_1 (instance 0)", () => {});
});

describe("simd_i16x8_sat_arith_3", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_3: _inline_test_2 (instance 0)", () => {});
});

describe("simd_i16x8_sat_arith_4", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_4: _inline_test_3 (instance 0)", () => {});
});

describe("simd_i16x8_sat_arith_5", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_6", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_7", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_8", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_9", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_10", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_11", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_12", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_13", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_14", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_15", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_16", () => {
    let _test = test;

    _test("execution of simd_i16x8_sat_arith_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_sat_arith_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i16x8_sat_arith_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i16x8_sat_arith_17: sat-add_s-sub_s (instance 0)", () => {
        let _sat_add_s_sub_s = module.getExport("sat-add_s-sub_s");
        expect(_sat_add_s_sub_s).not.toBeUndefined();
        let _sat_add_s_sub_s_result = module.invoke(_sat_add_s_sub_s, 0, 0, 0);
        expect(_sat_add_s_sub_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_17: sat-add_s-sub_u (instance 0)", () => {
        let _sat_add_s_sub_u = module.getExport("sat-add_s-sub_u");
        expect(_sat_add_s_sub_u).not.toBeUndefined();
        let _sat_add_s_sub_u_result = module.invoke(_sat_add_s_sub_u, 0, 0, 0);
        expect(_sat_add_s_sub_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_17: sat-add_u-sub_s (instance 0)", () => {
        let _sat_add_u_sub_s = module.getExport("sat-add_u-sub_s");
        expect(_sat_add_u_sub_s).not.toBeUndefined();
        let _sat_add_u_sub_s_result = module.invoke(_sat_add_u_sub_s, 0, 0, 0);
        expect(_sat_add_u_sub_s_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_17: sat-add_u-sub_u (instance 0)", () => {
        let _sat_add_u_sub_u = module.getExport("sat-add_u-sub_u");
        expect(_sat_add_u_sub_u).not.toBeUndefined();
        let _sat_add_u_sub_u_result = module.invoke(_sat_add_u_sub_u, 0, 0, 0);
        expect(_sat_add_u_sub_u_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_17: sat-add_s-neg (instance 0)", () => {
        let _sat_add_s_neg = module.getExport("sat-add_s-neg");
        expect(_sat_add_s_neg).not.toBeUndefined();
        let _sat_add_s_neg_result = module.invoke(_sat_add_s_neg, 0, 0);
        expect(_sat_add_s_neg_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_17: sat-add_u-neg (instance 0)", () => {
        let _sat_add_u_neg = module.getExport("sat-add_u-neg");
        expect(_sat_add_u_neg).not.toBeUndefined();
        let _sat_add_u_neg_result = module.invoke(_sat_add_u_neg, 0, 0);
        expect(_sat_add_u_neg_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_17: sat-sub_s-neg (instance 0)", () => {
        let _sat_sub_s_neg = module.getExport("sat-sub_s-neg");
        expect(_sat_sub_s_neg).not.toBeUndefined();
        let _sat_sub_s_neg_result = module.invoke(_sat_sub_s_neg, 0, 0);
        expect(_sat_sub_s_neg_result).toBe(0);
    });

    _test("execution of simd_i16x8_sat_arith_17: sat-sub_u-neg (instance 0)", () => {
        let _sat_sub_u_neg = module.getExport("sat-sub_u-neg");
        expect(_sat_sub_u_neg).not.toBeUndefined();
        let _sat_sub_u_neg_result = module.invoke(_sat_sub_u_neg, 0, 0);
        expect(_sat_sub_u_neg_result).toBe(0);
    });
});
