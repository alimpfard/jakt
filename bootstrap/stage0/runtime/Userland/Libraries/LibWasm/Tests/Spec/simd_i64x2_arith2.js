let globalImportObject = {};
let namedModules = {};

describe("simd_i64x2_arith2_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i64x2_arith2_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 0)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 1)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 2)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 3)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 4)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 5)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 6)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 7)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 8)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 9)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 10)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 11)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 12)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 13)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs_with_const_0 (instance 0)", () => {
        let _i64x2_abs_with_const_0 = module.getExport("i64x2.abs_with_const_0");
        expect(_i64x2_abs_with_const_0).not.toBeUndefined();
        let _i64x2_abs_with_const_0_result = module.invoke(_i64x2_abs_with_const_0);
        expect(_i64x2_abs_with_const_0_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 14)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 15)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 16)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 17)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });

    _test("execution of simd_i64x2_arith2_0: i64x2.abs (instance 18)", () => {
        let _i64x2_abs = module.getExport("i64x2.abs");
        expect(_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_result = module.invoke(_i64x2_abs, 0);
        expect(_i64x2_abs_result).toBe(0);
    });
});

describe("simd_i64x2_arith2_1", () => {
    let _test = test;

    _test("execution of simd_i64x2_arith2_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_arith2_2", () => {
    let _test = test;

    _test("execution of simd_i64x2_arith2_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_arith2_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i64x2_arith2_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i64x2_arith2_3: i64x2.abs-i64x2.abs (instance 0)", () => {
        let _i64x2_abs_i64x2_abs = module.getExport("i64x2.abs-i64x2.abs");
        expect(_i64x2_abs_i64x2_abs).not.toBeUndefined();
        let _i64x2_abs_i64x2_abs_result = module.invoke(_i64x2_abs_i64x2_abs, 0);
        expect(_i64x2_abs_i64x2_abs_result).toBe(0);
    });
});
