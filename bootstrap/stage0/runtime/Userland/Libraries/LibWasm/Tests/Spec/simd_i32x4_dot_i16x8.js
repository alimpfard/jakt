let globalImportObject = {};
let namedModules = {};

describe("simd_i32x4_dot_i16x8_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i32x4_dot_i16x8_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 0)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 1)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 2)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 3)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 4)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 5)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 6)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 7)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 8)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 9)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 10)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 11)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 12)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 13)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 14)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 15)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 16)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 17)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 18)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 19)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 20)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 21)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 22)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 23)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 24)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_dot_i16x8_0: i32x4.dot_i16x8_s (instance 25)", () => {
        let _i32x4_dot_i16x8_s = module.getExport("i32x4.dot_i16x8_s");
        expect(_i32x4_dot_i16x8_s).not.toBeUndefined();
        let _i32x4_dot_i16x8_s_result = module.invoke(_i32x4_dot_i16x8_s, 0, 0);
        expect(_i32x4_dot_i16x8_s_result).toBe(0);
    });
});

describe("simd_i32x4_dot_i16x8_1", () => {
    let _test = test;

    _test("execution of simd_i32x4_dot_i16x8_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_dot_i16x8_2", () => {
    let _test = test;

    _test("execution of simd_i32x4_dot_i16x8_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_dot_i16x8_3", () => {
    let _test = test;

    _test("execution of simd_i32x4_dot_i16x8_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
