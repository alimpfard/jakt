let globalImportObject = {};
let namedModules = {};

describe("simd_boolean_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_boolean_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_boolean_0: i8x16.any_true (instance 0)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 1)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 2)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 3)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 4)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 5)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 6)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 7)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.any_true (instance 8)", () => {
        let _i8x16_any_true = module.getExport("i8x16.any_true");
        expect(_i8x16_any_true).not.toBeUndefined();
        let _i8x16_any_true_result = module.invoke(_i8x16_any_true, 0);
        expect(_i8x16_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 0)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 1)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 2)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 3)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 4)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 5)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 6)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 7)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.all_true (instance 8)", () => {
        let _i8x16_all_true = module.getExport("i8x16.all_true");
        expect(_i8x16_all_true).not.toBeUndefined();
        let _i8x16_all_true_result = module.invoke(_i8x16_all_true, 0);
        expect(_i8x16_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i8x16.bitmask (instance 0)", () => {
        let _i8x16_bitmask = module.getExport("i8x16.bitmask");
        expect(_i8x16_bitmask).not.toBeUndefined();
        let _i8x16_bitmask_result = module.invoke(_i8x16_bitmask, 0);
        expect(_i8x16_bitmask_result).toBe(65535);
    });

    _test("execution of simd_boolean_0: i8x16.bitmask (instance 1)", () => {
        let _i8x16_bitmask = module.getExport("i8x16.bitmask");
        expect(_i8x16_bitmask).not.toBeUndefined();
        let _i8x16_bitmask_result = module.invoke(_i8x16_bitmask, 0);
        expect(_i8x16_bitmask_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 0)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 1)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 2)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 3)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 4)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 5)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 6)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 7)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 8)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 9)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.any_true (instance 10)", () => {
        let _i16x8_any_true = module.getExport("i16x8.any_true");
        expect(_i16x8_any_true).not.toBeUndefined();
        let _i16x8_any_true_result = module.invoke(_i16x8_any_true, 0);
        expect(_i16x8_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 0)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 1)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 2)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 3)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 4)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 5)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 6)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 7)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 8)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 9)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.all_true (instance 10)", () => {
        let _i16x8_all_true = module.getExport("i16x8.all_true");
        expect(_i16x8_all_true).not.toBeUndefined();
        let _i16x8_all_true_result = module.invoke(_i16x8_all_true, 0);
        expect(_i16x8_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i16x8.bitmask (instance 0)", () => {
        let _i16x8_bitmask = module.getExport("i16x8.bitmask");
        expect(_i16x8_bitmask).not.toBeUndefined();
        let _i16x8_bitmask_result = module.invoke(_i16x8_bitmask, 0);
        expect(_i16x8_bitmask_result).toBe(255);
    });

    _test("execution of simd_boolean_0: i16x8.bitmask (instance 1)", () => {
        let _i16x8_bitmask = module.getExport("i16x8.bitmask");
        expect(_i16x8_bitmask).not.toBeUndefined();
        let _i16x8_bitmask_result = module.invoke(_i16x8_bitmask, 0);
        expect(_i16x8_bitmask_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 0)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 1)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 2)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 3)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 4)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 5)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 6)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 7)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 8)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 9)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.any_true (instance 10)", () => {
        let _i32x4_any_true = module.getExport("i32x4.any_true");
        expect(_i32x4_any_true).not.toBeUndefined();
        let _i32x4_any_true_result = module.invoke(_i32x4_any_true, 0);
        expect(_i32x4_any_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 0)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 1)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 2)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 3)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 4)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 5)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 6)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 7)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 8)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 9)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.all_true (instance 10)", () => {
        let _i32x4_all_true = module.getExport("i32x4.all_true");
        expect(_i32x4_all_true).not.toBeUndefined();
        let _i32x4_all_true_result = module.invoke(_i32x4_all_true, 0);
        expect(_i32x4_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i32x4.bitmask (instance 0)", () => {
        let _i32x4_bitmask = module.getExport("i32x4.bitmask");
        expect(_i32x4_bitmask).not.toBeUndefined();
        let _i32x4_bitmask_result = module.invoke(_i32x4_bitmask, 0);
        expect(_i32x4_bitmask_result).toBe(15);
    });

    _test("execution of simd_boolean_0: i32x4.bitmask (instance 1)", () => {
        let _i32x4_bitmask = module.getExport("i32x4.bitmask");
        expect(_i32x4_bitmask).not.toBeUndefined();
        let _i32x4_bitmask_result = module.invoke(_i32x4_bitmask, 0);
        expect(_i32x4_bitmask_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 0)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 1)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 2)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 3)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 4)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 5)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(0);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 6)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 7)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i64x2.all_true (instance 8)", () => {
        let _i64x2_all_true = module.getExport("i64x2.all_true");
        expect(_i64x2_all_true).not.toBeUndefined();
        let _i64x2_all_true_result = module.invoke(_i64x2_all_true, 0);
        expect(_i64x2_all_true_result).toBe(1);
    });

    _test("execution of simd_boolean_0: i64x2.bitmask (instance 0)", () => {
        let _i64x2_bitmask = module.getExport("i64x2.bitmask");
        expect(_i64x2_bitmask).not.toBeUndefined();
        let _i64x2_bitmask_result = module.invoke(_i64x2_bitmask, 0);
        expect(_i64x2_bitmask_result).toBe(3);
    });

    _test("execution of simd_boolean_0: i64x2.bitmask (instance 1)", () => {
        let _i64x2_bitmask = module.getExport("i64x2.bitmask");
        expect(_i64x2_bitmask).not.toBeUndefined();
        let _i64x2_bitmask_result = module.invoke(_i64x2_bitmask, 0);
        expect(_i64x2_bitmask_result).toBe(1);
    });
});

describe("simd_boolean_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_boolean_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_boolean_1: i8x16_any_true_as_if_cond (instance 0)", () => {
        let _i8x16_any_true_as_if_cond = module.getExport("i8x16_any_true_as_if_cond");
        expect(_i8x16_any_true_as_if_cond).not.toBeUndefined();
        let _i8x16_any_true_as_if_cond_result = module.invoke(_i8x16_any_true_as_if_cond, 0);
        expect(_i8x16_any_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_if_cond (instance 1)", () => {
        let _i8x16_any_true_as_if_cond = module.getExport("i8x16_any_true_as_if_cond");
        expect(_i8x16_any_true_as_if_cond).not.toBeUndefined();
        let _i8x16_any_true_as_if_cond_result = module.invoke(_i8x16_any_true_as_if_cond, 0);
        expect(_i8x16_any_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_if_cond (instance 2)", () => {
        let _i8x16_any_true_as_if_cond = module.getExport("i8x16_any_true_as_if_cond");
        expect(_i8x16_any_true_as_if_cond).not.toBeUndefined();
        let _i8x16_any_true_as_if_cond_result = module.invoke(_i8x16_any_true_as_if_cond, 0);
        expect(_i8x16_any_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_if_cond (instance 0)", () => {
        let _i16x8_any_true_as_if_cond = module.getExport("i16x8_any_true_as_if_cond");
        expect(_i16x8_any_true_as_if_cond).not.toBeUndefined();
        let _i16x8_any_true_as_if_cond_result = module.invoke(_i16x8_any_true_as_if_cond, 0);
        expect(_i16x8_any_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_if_cond (instance 1)", () => {
        let _i16x8_any_true_as_if_cond = module.getExport("i16x8_any_true_as_if_cond");
        expect(_i16x8_any_true_as_if_cond).not.toBeUndefined();
        let _i16x8_any_true_as_if_cond_result = module.invoke(_i16x8_any_true_as_if_cond, 0);
        expect(_i16x8_any_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_if_cond (instance 2)", () => {
        let _i16x8_any_true_as_if_cond = module.getExport("i16x8_any_true_as_if_cond");
        expect(_i16x8_any_true_as_if_cond).not.toBeUndefined();
        let _i16x8_any_true_as_if_cond_result = module.invoke(_i16x8_any_true_as_if_cond, 0);
        expect(_i16x8_any_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_if_cond (instance 0)", () => {
        let _i32x4_any_true_as_if_cond = module.getExport("i32x4_any_true_as_if_cond");
        expect(_i32x4_any_true_as_if_cond).not.toBeUndefined();
        let _i32x4_any_true_as_if_cond_result = module.invoke(_i32x4_any_true_as_if_cond, 0);
        expect(_i32x4_any_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_if_cond (instance 1)", () => {
        let _i32x4_any_true_as_if_cond = module.getExport("i32x4_any_true_as_if_cond");
        expect(_i32x4_any_true_as_if_cond).not.toBeUndefined();
        let _i32x4_any_true_as_if_cond_result = module.invoke(_i32x4_any_true_as_if_cond, 0);
        expect(_i32x4_any_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_if_cond (instance 2)", () => {
        let _i32x4_any_true_as_if_cond = module.getExport("i32x4_any_true_as_if_cond");
        expect(_i32x4_any_true_as_if_cond).not.toBeUndefined();
        let _i32x4_any_true_as_if_cond_result = module.invoke(_i32x4_any_true_as_if_cond, 0);
        expect(_i32x4_any_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_if_cond (instance 0)", () => {
        let _i8x16_all_true_as_if_cond = module.getExport("i8x16_all_true_as_if_cond");
        expect(_i8x16_all_true_as_if_cond).not.toBeUndefined();
        let _i8x16_all_true_as_if_cond_result = module.invoke(_i8x16_all_true_as_if_cond, 0);
        expect(_i8x16_all_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_if_cond (instance 1)", () => {
        let _i8x16_all_true_as_if_cond = module.getExport("i8x16_all_true_as_if_cond");
        expect(_i8x16_all_true_as_if_cond).not.toBeUndefined();
        let _i8x16_all_true_as_if_cond_result = module.invoke(_i8x16_all_true_as_if_cond, 0);
        expect(_i8x16_all_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_if_cond (instance 2)", () => {
        let _i8x16_all_true_as_if_cond = module.getExport("i8x16_all_true_as_if_cond");
        expect(_i8x16_all_true_as_if_cond).not.toBeUndefined();
        let _i8x16_all_true_as_if_cond_result = module.invoke(_i8x16_all_true_as_if_cond, 0);
        expect(_i8x16_all_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_if_cond (instance 0)", () => {
        let _i16x8_all_true_as_if_cond = module.getExport("i16x8_all_true_as_if_cond");
        expect(_i16x8_all_true_as_if_cond).not.toBeUndefined();
        let _i16x8_all_true_as_if_cond_result = module.invoke(_i16x8_all_true_as_if_cond, 0);
        expect(_i16x8_all_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_if_cond (instance 1)", () => {
        let _i16x8_all_true_as_if_cond = module.getExport("i16x8_all_true_as_if_cond");
        expect(_i16x8_all_true_as_if_cond).not.toBeUndefined();
        let _i16x8_all_true_as_if_cond_result = module.invoke(_i16x8_all_true_as_if_cond, 0);
        expect(_i16x8_all_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_if_cond (instance 2)", () => {
        let _i16x8_all_true_as_if_cond = module.getExport("i16x8_all_true_as_if_cond");
        expect(_i16x8_all_true_as_if_cond).not.toBeUndefined();
        let _i16x8_all_true_as_if_cond_result = module.invoke(_i16x8_all_true_as_if_cond, 0);
        expect(_i16x8_all_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_if_cond (instance 0)", () => {
        let _i32x4_all_true_as_if_cond = module.getExport("i32x4_all_true_as_if_cond");
        expect(_i32x4_all_true_as_if_cond).not.toBeUndefined();
        let _i32x4_all_true_as_if_cond_result = module.invoke(_i32x4_all_true_as_if_cond, 0);
        expect(_i32x4_all_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_if_cond (instance 1)", () => {
        let _i32x4_all_true_as_if_cond = module.getExport("i32x4_all_true_as_if_cond");
        expect(_i32x4_all_true_as_if_cond).not.toBeUndefined();
        let _i32x4_all_true_as_if_cond_result = module.invoke(_i32x4_all_true_as_if_cond, 0);
        expect(_i32x4_all_true_as_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_if_cond (instance 2)", () => {
        let _i32x4_all_true_as_if_cond = module.getExport("i32x4_all_true_as_if_cond");
        expect(_i32x4_all_true_as_if_cond).not.toBeUndefined();
        let _i32x4_all_true_as_if_cond_result = module.invoke(_i32x4_all_true_as_if_cond, 0);
        expect(_i32x4_all_true_as_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_select_cond (instance 0)", () => {
        let _i8x16_any_true_as_select_cond = module.getExport("i8x16_any_true_as_select_cond");
        expect(_i8x16_any_true_as_select_cond).not.toBeUndefined();
        let _i8x16_any_true_as_select_cond_result = module.invoke(
            _i8x16_any_true_as_select_cond,
            0
        );
        expect(_i8x16_any_true_as_select_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_select_cond (instance 1)", () => {
        let _i8x16_any_true_as_select_cond = module.getExport("i8x16_any_true_as_select_cond");
        expect(_i8x16_any_true_as_select_cond).not.toBeUndefined();
        let _i8x16_any_true_as_select_cond_result = module.invoke(
            _i8x16_any_true_as_select_cond,
            0
        );
        expect(_i8x16_any_true_as_select_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_select_cond (instance 0)", () => {
        let _i16x8_any_true_as_select_cond = module.getExport("i16x8_any_true_as_select_cond");
        expect(_i16x8_any_true_as_select_cond).not.toBeUndefined();
        let _i16x8_any_true_as_select_cond_result = module.invoke(
            _i16x8_any_true_as_select_cond,
            0
        );
        expect(_i16x8_any_true_as_select_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_select_cond (instance 1)", () => {
        let _i16x8_any_true_as_select_cond = module.getExport("i16x8_any_true_as_select_cond");
        expect(_i16x8_any_true_as_select_cond).not.toBeUndefined();
        let _i16x8_any_true_as_select_cond_result = module.invoke(
            _i16x8_any_true_as_select_cond,
            0
        );
        expect(_i16x8_any_true_as_select_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_select_cond (instance 0)", () => {
        let _i32x4_any_true_as_select_cond = module.getExport("i32x4_any_true_as_select_cond");
        expect(_i32x4_any_true_as_select_cond).not.toBeUndefined();
        let _i32x4_any_true_as_select_cond_result = module.invoke(
            _i32x4_any_true_as_select_cond,
            0
        );
        expect(_i32x4_any_true_as_select_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_select_cond (instance 1)", () => {
        let _i32x4_any_true_as_select_cond = module.getExport("i32x4_any_true_as_select_cond");
        expect(_i32x4_any_true_as_select_cond).not.toBeUndefined();
        let _i32x4_any_true_as_select_cond_result = module.invoke(
            _i32x4_any_true_as_select_cond,
            0
        );
        expect(_i32x4_any_true_as_select_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_select_cond (instance 0)", () => {
        let _i8x16_all_true_as_select_cond = module.getExport("i8x16_all_true_as_select_cond");
        expect(_i8x16_all_true_as_select_cond).not.toBeUndefined();
        let _i8x16_all_true_as_select_cond_result = module.invoke(
            _i8x16_all_true_as_select_cond,
            0
        );
        expect(_i8x16_all_true_as_select_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_select_cond (instance 1)", () => {
        let _i8x16_all_true_as_select_cond = module.getExport("i8x16_all_true_as_select_cond");
        expect(_i8x16_all_true_as_select_cond).not.toBeUndefined();
        let _i8x16_all_true_as_select_cond_result = module.invoke(
            _i8x16_all_true_as_select_cond,
            0
        );
        expect(_i8x16_all_true_as_select_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_select_cond (instance 0)", () => {
        let _i16x8_all_true_as_select_cond = module.getExport("i16x8_all_true_as_select_cond");
        expect(_i16x8_all_true_as_select_cond).not.toBeUndefined();
        let _i16x8_all_true_as_select_cond_result = module.invoke(
            _i16x8_all_true_as_select_cond,
            0
        );
        expect(_i16x8_all_true_as_select_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_select_cond (instance 1)", () => {
        let _i16x8_all_true_as_select_cond = module.getExport("i16x8_all_true_as_select_cond");
        expect(_i16x8_all_true_as_select_cond).not.toBeUndefined();
        let _i16x8_all_true_as_select_cond_result = module.invoke(
            _i16x8_all_true_as_select_cond,
            0
        );
        expect(_i16x8_all_true_as_select_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_select_cond (instance 0)", () => {
        let _i32x4_all_true_as_select_cond = module.getExport("i32x4_all_true_as_select_cond");
        expect(_i32x4_all_true_as_select_cond).not.toBeUndefined();
        let _i32x4_all_true_as_select_cond_result = module.invoke(
            _i32x4_all_true_as_select_cond,
            0
        );
        expect(_i32x4_all_true_as_select_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_select_cond (instance 1)", () => {
        let _i32x4_all_true_as_select_cond = module.getExport("i32x4_all_true_as_select_cond");
        expect(_i32x4_all_true_as_select_cond).not.toBeUndefined();
        let _i32x4_all_true_as_select_cond_result = module.invoke(
            _i32x4_all_true_as_select_cond,
            0
        );
        expect(_i32x4_all_true_as_select_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_br_if_cond (instance 0)", () => {
        let _i8x16_any_true_as_br_if_cond = module.getExport("i8x16_any_true_as_br_if_cond");
        expect(_i8x16_any_true_as_br_if_cond).not.toBeUndefined();
        let _i8x16_any_true_as_br_if_cond_result = module.invoke(_i8x16_any_true_as_br_if_cond, 0);
        expect(_i8x16_any_true_as_br_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_br_if_cond (instance 1)", () => {
        let _i8x16_any_true_as_br_if_cond = module.getExport("i8x16_any_true_as_br_if_cond");
        expect(_i8x16_any_true_as_br_if_cond).not.toBeUndefined();
        let _i8x16_any_true_as_br_if_cond_result = module.invoke(_i8x16_any_true_as_br_if_cond, 0);
        expect(_i8x16_any_true_as_br_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_br_if_cond (instance 0)", () => {
        let _i16x8_any_true_as_br_if_cond = module.getExport("i16x8_any_true_as_br_if_cond");
        expect(_i16x8_any_true_as_br_if_cond).not.toBeUndefined();
        let _i16x8_any_true_as_br_if_cond_result = module.invoke(_i16x8_any_true_as_br_if_cond, 0);
        expect(_i16x8_any_true_as_br_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_br_if_cond (instance 1)", () => {
        let _i16x8_any_true_as_br_if_cond = module.getExport("i16x8_any_true_as_br_if_cond");
        expect(_i16x8_any_true_as_br_if_cond).not.toBeUndefined();
        let _i16x8_any_true_as_br_if_cond_result = module.invoke(_i16x8_any_true_as_br_if_cond, 0);
        expect(_i16x8_any_true_as_br_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_br_if_cond (instance 0)", () => {
        let _i32x4_any_true_as_br_if_cond = module.getExport("i32x4_any_true_as_br_if_cond");
        expect(_i32x4_any_true_as_br_if_cond).not.toBeUndefined();
        let _i32x4_any_true_as_br_if_cond_result = module.invoke(_i32x4_any_true_as_br_if_cond, 0);
        expect(_i32x4_any_true_as_br_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_br_if_cond (instance 1)", () => {
        let _i32x4_any_true_as_br_if_cond = module.getExport("i32x4_any_true_as_br_if_cond");
        expect(_i32x4_any_true_as_br_if_cond).not.toBeUndefined();
        let _i32x4_any_true_as_br_if_cond_result = module.invoke(_i32x4_any_true_as_br_if_cond, 0);
        expect(_i32x4_any_true_as_br_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_br_if_cond (instance 0)", () => {
        let _i8x16_all_true_as_br_if_cond = module.getExport("i8x16_all_true_as_br_if_cond");
        expect(_i8x16_all_true_as_br_if_cond).not.toBeUndefined();
        let _i8x16_all_true_as_br_if_cond_result = module.invoke(_i8x16_all_true_as_br_if_cond, 0);
        expect(_i8x16_all_true_as_br_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_br_if_cond (instance 1)", () => {
        let _i8x16_all_true_as_br_if_cond = module.getExport("i8x16_all_true_as_br_if_cond");
        expect(_i8x16_all_true_as_br_if_cond).not.toBeUndefined();
        let _i8x16_all_true_as_br_if_cond_result = module.invoke(_i8x16_all_true_as_br_if_cond, 0);
        expect(_i8x16_all_true_as_br_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_br_if_cond (instance 0)", () => {
        let _i16x8_all_true_as_br_if_cond = module.getExport("i16x8_all_true_as_br_if_cond");
        expect(_i16x8_all_true_as_br_if_cond).not.toBeUndefined();
        let _i16x8_all_true_as_br_if_cond_result = module.invoke(_i16x8_all_true_as_br_if_cond, 0);
        expect(_i16x8_all_true_as_br_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_br_if_cond (instance 1)", () => {
        let _i16x8_all_true_as_br_if_cond = module.getExport("i16x8_all_true_as_br_if_cond");
        expect(_i16x8_all_true_as_br_if_cond).not.toBeUndefined();
        let _i16x8_all_true_as_br_if_cond_result = module.invoke(_i16x8_all_true_as_br_if_cond, 0);
        expect(_i16x8_all_true_as_br_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_br_if_cond (instance 0)", () => {
        let _i32x4_all_true_as_br_if_cond = module.getExport("i32x4_all_true_as_br_if_cond");
        expect(_i32x4_all_true_as_br_if_cond).not.toBeUndefined();
        let _i32x4_all_true_as_br_if_cond_result = module.invoke(_i32x4_all_true_as_br_if_cond, 0);
        expect(_i32x4_all_true_as_br_if_cond_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_br_if_cond (instance 1)", () => {
        let _i32x4_all_true_as_br_if_cond = module.getExport("i32x4_all_true_as_br_if_cond");
        expect(_i32x4_all_true_as_br_if_cond).not.toBeUndefined();
        let _i32x4_all_true_as_br_if_cond_result = module.invoke(_i32x4_all_true_as_br_if_cond, 0);
        expect(_i32x4_all_true_as_br_if_cond_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.and_operand (instance 0)", () => {
        let _i8x16_any_true_as_i32_and_operand = module.getExport(
            "i8x16_any_true_as_i32.and_operand"
        );
        expect(_i8x16_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_and_operand_result = module.invoke(
            _i8x16_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.and_operand (instance 1)", () => {
        let _i8x16_any_true_as_i32_and_operand = module.getExport(
            "i8x16_any_true_as_i32.and_operand"
        );
        expect(_i8x16_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_and_operand_result = module.invoke(
            _i8x16_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.and_operand (instance 2)", () => {
        let _i8x16_any_true_as_i32_and_operand = module.getExport(
            "i8x16_any_true_as_i32.and_operand"
        );
        expect(_i8x16_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_and_operand_result = module.invoke(
            _i8x16_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_and_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.and_operand (instance 0)", () => {
        let _i16x8_any_true_as_i32_and_operand = module.getExport(
            "i16x8_any_true_as_i32.and_operand"
        );
        expect(_i16x8_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_and_operand_result = module.invoke(
            _i16x8_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.and_operand (instance 1)", () => {
        let _i16x8_any_true_as_i32_and_operand = module.getExport(
            "i16x8_any_true_as_i32.and_operand"
        );
        expect(_i16x8_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_and_operand_result = module.invoke(
            _i16x8_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.and_operand (instance 2)", () => {
        let _i16x8_any_true_as_i32_and_operand = module.getExport(
            "i16x8_any_true_as_i32.and_operand"
        );
        expect(_i16x8_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_and_operand_result = module.invoke(
            _i16x8_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_and_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.and_operand (instance 0)", () => {
        let _i32x4_any_true_as_i32_and_operand = module.getExport(
            "i32x4_any_true_as_i32.and_operand"
        );
        expect(_i32x4_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_and_operand_result = module.invoke(
            _i32x4_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.and_operand (instance 1)", () => {
        let _i32x4_any_true_as_i32_and_operand = module.getExport(
            "i32x4_any_true_as_i32.and_operand"
        );
        expect(_i32x4_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_and_operand_result = module.invoke(
            _i32x4_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.and_operand (instance 2)", () => {
        let _i32x4_any_true_as_i32_and_operand = module.getExport(
            "i32x4_any_true_as_i32.and_operand"
        );
        expect(_i32x4_any_true_as_i32_and_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_and_operand_result = module.invoke(
            _i32x4_any_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_and_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.or_operand (instance 0)", () => {
        let _i8x16_any_true_as_i32_or_operand = module.getExport(
            "i8x16_any_true_as_i32.or_operand"
        );
        expect(_i8x16_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_or_operand_result = module.invoke(
            _i8x16_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_or_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.or_operand (instance 1)", () => {
        let _i8x16_any_true_as_i32_or_operand = module.getExport(
            "i8x16_any_true_as_i32.or_operand"
        );
        expect(_i8x16_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_or_operand_result = module.invoke(
            _i8x16_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.or_operand (instance 2)", () => {
        let _i8x16_any_true_as_i32_or_operand = module.getExport(
            "i8x16_any_true_as_i32.or_operand"
        );
        expect(_i8x16_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_or_operand_result = module.invoke(
            _i8x16_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.or_operand (instance 0)", () => {
        let _i16x8_any_true_as_i32_or_operand = module.getExport(
            "i16x8_any_true_as_i32.or_operand"
        );
        expect(_i16x8_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_or_operand_result = module.invoke(
            _i16x8_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_or_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.or_operand (instance 1)", () => {
        let _i16x8_any_true_as_i32_or_operand = module.getExport(
            "i16x8_any_true_as_i32.or_operand"
        );
        expect(_i16x8_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_or_operand_result = module.invoke(
            _i16x8_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.or_operand (instance 2)", () => {
        let _i16x8_any_true_as_i32_or_operand = module.getExport(
            "i16x8_any_true_as_i32.or_operand"
        );
        expect(_i16x8_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_or_operand_result = module.invoke(
            _i16x8_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.or_operand (instance 0)", () => {
        let _i32x4_any_true_as_i32_or_operand = module.getExport(
            "i32x4_any_true_as_i32.or_operand"
        );
        expect(_i32x4_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_or_operand_result = module.invoke(
            _i32x4_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_or_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.or_operand (instance 1)", () => {
        let _i32x4_any_true_as_i32_or_operand = module.getExport(
            "i32x4_any_true_as_i32.or_operand"
        );
        expect(_i32x4_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_or_operand_result = module.invoke(
            _i32x4_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.or_operand (instance 2)", () => {
        let _i32x4_any_true_as_i32_or_operand = module.getExport(
            "i32x4_any_true_as_i32.or_operand"
        );
        expect(_i32x4_any_true_as_i32_or_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_or_operand_result = module.invoke(
            _i32x4_any_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.xor_operand (instance 0)", () => {
        let _i8x16_any_true_as_i32_xor_operand = module.getExport(
            "i8x16_any_true_as_i32.xor_operand"
        );
        expect(_i8x16_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_xor_operand_result = module.invoke(
            _i8x16_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.xor_operand (instance 1)", () => {
        let _i8x16_any_true_as_i32_xor_operand = module.getExport(
            "i8x16_any_true_as_i32.xor_operand"
        );
        expect(_i8x16_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_xor_operand_result = module.invoke(
            _i8x16_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_xor_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_as_i32.xor_operand (instance 2)", () => {
        let _i8x16_any_true_as_i32_xor_operand = module.getExport(
            "i8x16_any_true_as_i32.xor_operand"
        );
        expect(_i8x16_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i8x16_any_true_as_i32_xor_operand_result = module.invoke(
            _i8x16_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i8x16_any_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.xor_operand (instance 0)", () => {
        let _i16x8_any_true_as_i32_xor_operand = module.getExport(
            "i16x8_any_true_as_i32.xor_operand"
        );
        expect(_i16x8_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_xor_operand_result = module.invoke(
            _i16x8_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.xor_operand (instance 1)", () => {
        let _i16x8_any_true_as_i32_xor_operand = module.getExport(
            "i16x8_any_true_as_i32.xor_operand"
        );
        expect(_i16x8_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_xor_operand_result = module.invoke(
            _i16x8_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_xor_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_as_i32.xor_operand (instance 2)", () => {
        let _i16x8_any_true_as_i32_xor_operand = module.getExport(
            "i16x8_any_true_as_i32.xor_operand"
        );
        expect(_i16x8_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i16x8_any_true_as_i32_xor_operand_result = module.invoke(
            _i16x8_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i16x8_any_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.xor_operand (instance 0)", () => {
        let _i32x4_any_true_as_i32_xor_operand = module.getExport(
            "i32x4_any_true_as_i32.xor_operand"
        );
        expect(_i32x4_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_xor_operand_result = module.invoke(
            _i32x4_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.xor_operand (instance 1)", () => {
        let _i32x4_any_true_as_i32_xor_operand = module.getExport(
            "i32x4_any_true_as_i32.xor_operand"
        );
        expect(_i32x4_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_xor_operand_result = module.invoke(
            _i32x4_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_xor_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_as_i32.xor_operand (instance 2)", () => {
        let _i32x4_any_true_as_i32_xor_operand = module.getExport(
            "i32x4_any_true_as_i32.xor_operand"
        );
        expect(_i32x4_any_true_as_i32_xor_operand).not.toBeUndefined();
        let _i32x4_any_true_as_i32_xor_operand_result = module.invoke(
            _i32x4_any_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i32x4_any_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.and_operand (instance 0)", () => {
        let _i8x16_all_true_as_i32_and_operand = module.getExport(
            "i8x16_all_true_as_i32.and_operand"
        );
        expect(_i8x16_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_and_operand_result = module.invoke(
            _i8x16_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_and_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.and_operand (instance 1)", () => {
        let _i8x16_all_true_as_i32_and_operand = module.getExport(
            "i8x16_all_true_as_i32.and_operand"
        );
        expect(_i8x16_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_and_operand_result = module.invoke(
            _i8x16_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.and_operand (instance 2)", () => {
        let _i8x16_all_true_as_i32_and_operand = module.getExport(
            "i8x16_all_true_as_i32.and_operand"
        );
        expect(_i8x16_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_and_operand_result = module.invoke(
            _i8x16_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.and_operand (instance 0)", () => {
        let _i16x8_all_true_as_i32_and_operand = module.getExport(
            "i16x8_all_true_as_i32.and_operand"
        );
        expect(_i16x8_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_and_operand_result = module.invoke(
            _i16x8_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_and_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.and_operand (instance 1)", () => {
        let _i16x8_all_true_as_i32_and_operand = module.getExport(
            "i16x8_all_true_as_i32.and_operand"
        );
        expect(_i16x8_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_and_operand_result = module.invoke(
            _i16x8_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.and_operand (instance 2)", () => {
        let _i16x8_all_true_as_i32_and_operand = module.getExport(
            "i16x8_all_true_as_i32.and_operand"
        );
        expect(_i16x8_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_and_operand_result = module.invoke(
            _i16x8_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.and_operand (instance 0)", () => {
        let _i32x4_all_true_as_i32_and_operand = module.getExport(
            "i32x4_all_true_as_i32.and_operand"
        );
        expect(_i32x4_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_and_operand_result = module.invoke(
            _i32x4_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_and_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.and_operand (instance 1)", () => {
        let _i32x4_all_true_as_i32_and_operand = module.getExport(
            "i32x4_all_true_as_i32.and_operand"
        );
        expect(_i32x4_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_and_operand_result = module.invoke(
            _i32x4_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.and_operand (instance 2)", () => {
        let _i32x4_all_true_as_i32_and_operand = module.getExport(
            "i32x4_all_true_as_i32.and_operand"
        );
        expect(_i32x4_all_true_as_i32_and_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_and_operand_result = module.invoke(
            _i32x4_all_true_as_i32_and_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_and_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.or_operand (instance 0)", () => {
        let _i8x16_all_true_as_i32_or_operand = module.getExport(
            "i8x16_all_true_as_i32.or_operand"
        );
        expect(_i8x16_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_or_operand_result = module.invoke(
            _i8x16_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.or_operand (instance 1)", () => {
        let _i8x16_all_true_as_i32_or_operand = module.getExport(
            "i8x16_all_true_as_i32.or_operand"
        );
        expect(_i8x16_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_or_operand_result = module.invoke(
            _i8x16_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.or_operand (instance 2)", () => {
        let _i8x16_all_true_as_i32_or_operand = module.getExport(
            "i8x16_all_true_as_i32.or_operand"
        );
        expect(_i8x16_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_or_operand_result = module.invoke(
            _i8x16_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_or_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.or_operand (instance 0)", () => {
        let _i16x8_all_true_as_i32_or_operand = module.getExport(
            "i16x8_all_true_as_i32.or_operand"
        );
        expect(_i16x8_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_or_operand_result = module.invoke(
            _i16x8_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.or_operand (instance 1)", () => {
        let _i16x8_all_true_as_i32_or_operand = module.getExport(
            "i16x8_all_true_as_i32.or_operand"
        );
        expect(_i16x8_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_or_operand_result = module.invoke(
            _i16x8_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.or_operand (instance 2)", () => {
        let _i16x8_all_true_as_i32_or_operand = module.getExport(
            "i16x8_all_true_as_i32.or_operand"
        );
        expect(_i16x8_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_or_operand_result = module.invoke(
            _i16x8_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_or_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.or_operand (instance 0)", () => {
        let _i32x4_all_true_as_i32_or_operand = module.getExport(
            "i32x4_all_true_as_i32.or_operand"
        );
        expect(_i32x4_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_or_operand_result = module.invoke(
            _i32x4_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.or_operand (instance 1)", () => {
        let _i32x4_all_true_as_i32_or_operand = module.getExport(
            "i32x4_all_true_as_i32.or_operand"
        );
        expect(_i32x4_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_or_operand_result = module.invoke(
            _i32x4_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_or_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.or_operand (instance 2)", () => {
        let _i32x4_all_true_as_i32_or_operand = module.getExport(
            "i32x4_all_true_as_i32.or_operand"
        );
        expect(_i32x4_all_true_as_i32_or_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_or_operand_result = module.invoke(
            _i32x4_all_true_as_i32_or_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_or_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.xor_operand (instance 0)", () => {
        let _i8x16_all_true_as_i32_xor_operand = module.getExport(
            "i8x16_all_true_as_i32.xor_operand"
        );
        expect(_i8x16_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_xor_operand_result = module.invoke(
            _i8x16_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.xor_operand (instance 1)", () => {
        let _i8x16_all_true_as_i32_xor_operand = module.getExport(
            "i8x16_all_true_as_i32.xor_operand"
        );
        expect(_i8x16_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_xor_operand_result = module.invoke(
            _i8x16_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_xor_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_as_i32.xor_operand (instance 2)", () => {
        let _i8x16_all_true_as_i32_xor_operand = module.getExport(
            "i8x16_all_true_as_i32.xor_operand"
        );
        expect(_i8x16_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i8x16_all_true_as_i32_xor_operand_result = module.invoke(
            _i8x16_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i8x16_all_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.xor_operand (instance 0)", () => {
        let _i16x8_all_true_as_i32_xor_operand = module.getExport(
            "i16x8_all_true_as_i32.xor_operand"
        );
        expect(_i16x8_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_xor_operand_result = module.invoke(
            _i16x8_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.xor_operand (instance 1)", () => {
        let _i16x8_all_true_as_i32_xor_operand = module.getExport(
            "i16x8_all_true_as_i32.xor_operand"
        );
        expect(_i16x8_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_xor_operand_result = module.invoke(
            _i16x8_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_xor_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_as_i32.xor_operand (instance 2)", () => {
        let _i16x8_all_true_as_i32_xor_operand = module.getExport(
            "i16x8_all_true_as_i32.xor_operand"
        );
        expect(_i16x8_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i16x8_all_true_as_i32_xor_operand_result = module.invoke(
            _i16x8_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i16x8_all_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.xor_operand (instance 0)", () => {
        let _i32x4_all_true_as_i32_xor_operand = module.getExport(
            "i32x4_all_true_as_i32.xor_operand"
        );
        expect(_i32x4_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_xor_operand_result = module.invoke(
            _i32x4_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.xor_operand (instance 1)", () => {
        let _i32x4_all_true_as_i32_xor_operand = module.getExport(
            "i32x4_all_true_as_i32.xor_operand"
        );
        expect(_i32x4_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_xor_operand_result = module.invoke(
            _i32x4_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_xor_operand_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_as_i32.xor_operand (instance 2)", () => {
        let _i32x4_all_true_as_i32_xor_operand = module.getExport(
            "i32x4_all_true_as_i32.xor_operand"
        );
        expect(_i32x4_all_true_as_i32_xor_operand).not.toBeUndefined();
        let _i32x4_all_true_as_i32_xor_operand_result = module.invoke(
            _i32x4_all_true_as_i32_xor_operand,
            0,
            0
        );
        expect(_i32x4_all_true_as_i32_xor_operand_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.not (instance 0)", () => {
        let _i8x16_any_true_with_v128_not = module.getExport("i8x16_any_true_with_v128.not");
        expect(_i8x16_any_true_with_v128_not).not.toBeUndefined();
        let _i8x16_any_true_with_v128_not_result = module.invoke(_i8x16_any_true_with_v128_not, 0);
        expect(_i8x16_any_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.not (instance 1)", () => {
        let _i8x16_any_true_with_v128_not = module.getExport("i8x16_any_true_with_v128.not");
        expect(_i8x16_any_true_with_v128_not).not.toBeUndefined();
        let _i8x16_any_true_with_v128_not_result = module.invoke(_i8x16_any_true_with_v128_not, 0);
        expect(_i8x16_any_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.not (instance 2)", () => {
        let _i8x16_any_true_with_v128_not = module.getExport("i8x16_any_true_with_v128.not");
        expect(_i8x16_any_true_with_v128_not).not.toBeUndefined();
        let _i8x16_any_true_with_v128_not_result = module.invoke(_i8x16_any_true_with_v128_not, 0);
        expect(_i8x16_any_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.not (instance 0)", () => {
        let _i16x8_any_true_with_v128_not = module.getExport("i16x8_any_true_with_v128.not");
        expect(_i16x8_any_true_with_v128_not).not.toBeUndefined();
        let _i16x8_any_true_with_v128_not_result = module.invoke(_i16x8_any_true_with_v128_not, 0);
        expect(_i16x8_any_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.not (instance 1)", () => {
        let _i16x8_any_true_with_v128_not = module.getExport("i16x8_any_true_with_v128.not");
        expect(_i16x8_any_true_with_v128_not).not.toBeUndefined();
        let _i16x8_any_true_with_v128_not_result = module.invoke(_i16x8_any_true_with_v128_not, 0);
        expect(_i16x8_any_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.not (instance 2)", () => {
        let _i16x8_any_true_with_v128_not = module.getExport("i16x8_any_true_with_v128.not");
        expect(_i16x8_any_true_with_v128_not).not.toBeUndefined();
        let _i16x8_any_true_with_v128_not_result = module.invoke(_i16x8_any_true_with_v128_not, 0);
        expect(_i16x8_any_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.not (instance 0)", () => {
        let _i32x4_any_true_with_v128_not = module.getExport("i32x4_any_true_with_v128.not");
        expect(_i32x4_any_true_with_v128_not).not.toBeUndefined();
        let _i32x4_any_true_with_v128_not_result = module.invoke(_i32x4_any_true_with_v128_not, 0);
        expect(_i32x4_any_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.not (instance 1)", () => {
        let _i32x4_any_true_with_v128_not = module.getExport("i32x4_any_true_with_v128.not");
        expect(_i32x4_any_true_with_v128_not).not.toBeUndefined();
        let _i32x4_any_true_with_v128_not_result = module.invoke(_i32x4_any_true_with_v128_not, 0);
        expect(_i32x4_any_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.not (instance 2)", () => {
        let _i32x4_any_true_with_v128_not = module.getExport("i32x4_any_true_with_v128.not");
        expect(_i32x4_any_true_with_v128_not).not.toBeUndefined();
        let _i32x4_any_true_with_v128_not_result = module.invoke(_i32x4_any_true_with_v128_not, 0);
        expect(_i32x4_any_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.and (instance 0)", () => {
        let _i8x16_any_true_with_v128_and = module.getExport("i8x16_any_true_with_v128.and");
        expect(_i8x16_any_true_with_v128_and).not.toBeUndefined();
        let _i8x16_any_true_with_v128_and_result = module.invoke(
            _i8x16_any_true_with_v128_and,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.and (instance 1)", () => {
        let _i8x16_any_true_with_v128_and = module.getExport("i8x16_any_true_with_v128.and");
        expect(_i8x16_any_true_with_v128_and).not.toBeUndefined();
        let _i8x16_any_true_with_v128_and_result = module.invoke(
            _i8x16_any_true_with_v128_and,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.and (instance 2)", () => {
        let _i8x16_any_true_with_v128_and = module.getExport("i8x16_any_true_with_v128.and");
        expect(_i8x16_any_true_with_v128_and).not.toBeUndefined();
        let _i8x16_any_true_with_v128_and_result = module.invoke(
            _i8x16_any_true_with_v128_and,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.and (instance 0)", () => {
        let _i16x8_any_true_with_v128_and = module.getExport("i16x8_any_true_with_v128.and");
        expect(_i16x8_any_true_with_v128_and).not.toBeUndefined();
        let _i16x8_any_true_with_v128_and_result = module.invoke(
            _i16x8_any_true_with_v128_and,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.and (instance 1)", () => {
        let _i16x8_any_true_with_v128_and = module.getExport("i16x8_any_true_with_v128.and");
        expect(_i16x8_any_true_with_v128_and).not.toBeUndefined();
        let _i16x8_any_true_with_v128_and_result = module.invoke(
            _i16x8_any_true_with_v128_and,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.and (instance 2)", () => {
        let _i16x8_any_true_with_v128_and = module.getExport("i16x8_any_true_with_v128.and");
        expect(_i16x8_any_true_with_v128_and).not.toBeUndefined();
        let _i16x8_any_true_with_v128_and_result = module.invoke(
            _i16x8_any_true_with_v128_and,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.and (instance 0)", () => {
        let _i32x4_any_true_with_v128_and = module.getExport("i32x4_any_true_with_v128.and");
        expect(_i32x4_any_true_with_v128_and).not.toBeUndefined();
        let _i32x4_any_true_with_v128_and_result = module.invoke(
            _i32x4_any_true_with_v128_and,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.and (instance 1)", () => {
        let _i32x4_any_true_with_v128_and = module.getExport("i32x4_any_true_with_v128.and");
        expect(_i32x4_any_true_with_v128_and).not.toBeUndefined();
        let _i32x4_any_true_with_v128_and_result = module.invoke(
            _i32x4_any_true_with_v128_and,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.and (instance 2)", () => {
        let _i32x4_any_true_with_v128_and = module.getExport("i32x4_any_true_with_v128.and");
        expect(_i32x4_any_true_with_v128_and).not.toBeUndefined();
        let _i32x4_any_true_with_v128_and_result = module.invoke(
            _i32x4_any_true_with_v128_and,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.or (instance 0)", () => {
        let _i8x16_any_true_with_v128_or = module.getExport("i8x16_any_true_with_v128.or");
        expect(_i8x16_any_true_with_v128_or).not.toBeUndefined();
        let _i8x16_any_true_with_v128_or_result = module.invoke(_i8x16_any_true_with_v128_or, 0, 0);
        expect(_i8x16_any_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.or (instance 1)", () => {
        let _i8x16_any_true_with_v128_or = module.getExport("i8x16_any_true_with_v128.or");
        expect(_i8x16_any_true_with_v128_or).not.toBeUndefined();
        let _i8x16_any_true_with_v128_or_result = module.invoke(_i8x16_any_true_with_v128_or, 0, 0);
        expect(_i8x16_any_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.or (instance 2)", () => {
        let _i8x16_any_true_with_v128_or = module.getExport("i8x16_any_true_with_v128.or");
        expect(_i8x16_any_true_with_v128_or).not.toBeUndefined();
        let _i8x16_any_true_with_v128_or_result = module.invoke(_i8x16_any_true_with_v128_or, 0, 0);
        expect(_i8x16_any_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.or (instance 0)", () => {
        let _i16x8_any_true_with_v128_or = module.getExport("i16x8_any_true_with_v128.or");
        expect(_i16x8_any_true_with_v128_or).not.toBeUndefined();
        let _i16x8_any_true_with_v128_or_result = module.invoke(_i16x8_any_true_with_v128_or, 0, 0);
        expect(_i16x8_any_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.or (instance 1)", () => {
        let _i16x8_any_true_with_v128_or = module.getExport("i16x8_any_true_with_v128.or");
        expect(_i16x8_any_true_with_v128_or).not.toBeUndefined();
        let _i16x8_any_true_with_v128_or_result = module.invoke(_i16x8_any_true_with_v128_or, 0, 0);
        expect(_i16x8_any_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.or (instance 2)", () => {
        let _i16x8_any_true_with_v128_or = module.getExport("i16x8_any_true_with_v128.or");
        expect(_i16x8_any_true_with_v128_or).not.toBeUndefined();
        let _i16x8_any_true_with_v128_or_result = module.invoke(_i16x8_any_true_with_v128_or, 0, 0);
        expect(_i16x8_any_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.or (instance 0)", () => {
        let _i32x4_any_true_with_v128_or = module.getExport("i32x4_any_true_with_v128.or");
        expect(_i32x4_any_true_with_v128_or).not.toBeUndefined();
        let _i32x4_any_true_with_v128_or_result = module.invoke(_i32x4_any_true_with_v128_or, 0, 0);
        expect(_i32x4_any_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.or (instance 1)", () => {
        let _i32x4_any_true_with_v128_or = module.getExport("i32x4_any_true_with_v128.or");
        expect(_i32x4_any_true_with_v128_or).not.toBeUndefined();
        let _i32x4_any_true_with_v128_or_result = module.invoke(_i32x4_any_true_with_v128_or, 0, 0);
        expect(_i32x4_any_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.or (instance 2)", () => {
        let _i32x4_any_true_with_v128_or = module.getExport("i32x4_any_true_with_v128.or");
        expect(_i32x4_any_true_with_v128_or).not.toBeUndefined();
        let _i32x4_any_true_with_v128_or_result = module.invoke(_i32x4_any_true_with_v128_or, 0, 0);
        expect(_i32x4_any_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.xor (instance 0)", () => {
        let _i8x16_any_true_with_v128_xor = module.getExport("i8x16_any_true_with_v128.xor");
        expect(_i8x16_any_true_with_v128_xor).not.toBeUndefined();
        let _i8x16_any_true_with_v128_xor_result = module.invoke(
            _i8x16_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.xor (instance 1)", () => {
        let _i8x16_any_true_with_v128_xor = module.getExport("i8x16_any_true_with_v128.xor");
        expect(_i8x16_any_true_with_v128_xor).not.toBeUndefined();
        let _i8x16_any_true_with_v128_xor_result = module.invoke(
            _i8x16_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.xor (instance 2)", () => {
        let _i8x16_any_true_with_v128_xor = module.getExport("i8x16_any_true_with_v128.xor");
        expect(_i8x16_any_true_with_v128_xor).not.toBeUndefined();
        let _i8x16_any_true_with_v128_xor_result = module.invoke(
            _i8x16_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_xor_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.xor (instance 0)", () => {
        let _i16x8_any_true_with_v128_xor = module.getExport("i16x8_any_true_with_v128.xor");
        expect(_i16x8_any_true_with_v128_xor).not.toBeUndefined();
        let _i16x8_any_true_with_v128_xor_result = module.invoke(
            _i16x8_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.xor (instance 1)", () => {
        let _i16x8_any_true_with_v128_xor = module.getExport("i16x8_any_true_with_v128.xor");
        expect(_i16x8_any_true_with_v128_xor).not.toBeUndefined();
        let _i16x8_any_true_with_v128_xor_result = module.invoke(
            _i16x8_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.xor (instance 2)", () => {
        let _i16x8_any_true_with_v128_xor = module.getExport("i16x8_any_true_with_v128.xor");
        expect(_i16x8_any_true_with_v128_xor).not.toBeUndefined();
        let _i16x8_any_true_with_v128_xor_result = module.invoke(
            _i16x8_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_xor_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.xor (instance 0)", () => {
        let _i32x4_any_true_with_v128_xor = module.getExport("i32x4_any_true_with_v128.xor");
        expect(_i32x4_any_true_with_v128_xor).not.toBeUndefined();
        let _i32x4_any_true_with_v128_xor_result = module.invoke(
            _i32x4_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.xor (instance 1)", () => {
        let _i32x4_any_true_with_v128_xor = module.getExport("i32x4_any_true_with_v128.xor");
        expect(_i32x4_any_true_with_v128_xor).not.toBeUndefined();
        let _i32x4_any_true_with_v128_xor_result = module.invoke(
            _i32x4_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.xor (instance 2)", () => {
        let _i32x4_any_true_with_v128_xor = module.getExport("i32x4_any_true_with_v128.xor");
        expect(_i32x4_any_true_with_v128_xor).not.toBeUndefined();
        let _i32x4_any_true_with_v128_xor_result = module.invoke(
            _i32x4_any_true_with_v128_xor,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_xor_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.bitselect (instance 0)", () => {
        let _i8x16_any_true_with_v128_bitselect = module.getExport(
            "i8x16_any_true_with_v128.bitselect"
        );
        expect(_i8x16_any_true_with_v128_bitselect).not.toBeUndefined();
        let _i8x16_any_true_with_v128_bitselect_result = module.invoke(
            _i8x16_any_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_bitselect_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_any_true_with_v128.bitselect (instance 1)", () => {
        let _i8x16_any_true_with_v128_bitselect = module.getExport(
            "i8x16_any_true_with_v128.bitselect"
        );
        expect(_i8x16_any_true_with_v128_bitselect).not.toBeUndefined();
        let _i8x16_any_true_with_v128_bitselect_result = module.invoke(
            _i8x16_any_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i8x16_any_true_with_v128_bitselect_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.bitselect (instance 0)", () => {
        let _i16x8_any_true_with_v128_bitselect = module.getExport(
            "i16x8_any_true_with_v128.bitselect"
        );
        expect(_i16x8_any_true_with_v128_bitselect).not.toBeUndefined();
        let _i16x8_any_true_with_v128_bitselect_result = module.invoke(
            _i16x8_any_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_bitselect_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_any_true_with_v128.bitselect (instance 1)", () => {
        let _i16x8_any_true_with_v128_bitselect = module.getExport(
            "i16x8_any_true_with_v128.bitselect"
        );
        expect(_i16x8_any_true_with_v128_bitselect).not.toBeUndefined();
        let _i16x8_any_true_with_v128_bitselect_result = module.invoke(
            _i16x8_any_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i16x8_any_true_with_v128_bitselect_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.bitselect (instance 0)", () => {
        let _i32x4_any_true_with_v128_bitselect = module.getExport(
            "i32x4_any_true_with_v128.bitselect"
        );
        expect(_i32x4_any_true_with_v128_bitselect).not.toBeUndefined();
        let _i32x4_any_true_with_v128_bitselect_result = module.invoke(
            _i32x4_any_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_bitselect_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_any_true_with_v128.bitselect (instance 1)", () => {
        let _i32x4_any_true_with_v128_bitselect = module.getExport(
            "i32x4_any_true_with_v128.bitselect"
        );
        expect(_i32x4_any_true_with_v128_bitselect).not.toBeUndefined();
        let _i32x4_any_true_with_v128_bitselect_result = module.invoke(
            _i32x4_any_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i32x4_any_true_with_v128_bitselect_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.not (instance 0)", () => {
        let _i8x16_all_true_with_v128_not = module.getExport("i8x16_all_true_with_v128.not");
        expect(_i8x16_all_true_with_v128_not).not.toBeUndefined();
        let _i8x16_all_true_with_v128_not_result = module.invoke(_i8x16_all_true_with_v128_not, 0);
        expect(_i8x16_all_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.not (instance 1)", () => {
        let _i8x16_all_true_with_v128_not = module.getExport("i8x16_all_true_with_v128.not");
        expect(_i8x16_all_true_with_v128_not).not.toBeUndefined();
        let _i8x16_all_true_with_v128_not_result = module.invoke(_i8x16_all_true_with_v128_not, 0);
        expect(_i8x16_all_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.not (instance 2)", () => {
        let _i8x16_all_true_with_v128_not = module.getExport("i8x16_all_true_with_v128.not");
        expect(_i8x16_all_true_with_v128_not).not.toBeUndefined();
        let _i8x16_all_true_with_v128_not_result = module.invoke(_i8x16_all_true_with_v128_not, 0);
        expect(_i8x16_all_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.not (instance 0)", () => {
        let _i16x8_all_true_with_v128_not = module.getExport("i16x8_all_true_with_v128.not");
        expect(_i16x8_all_true_with_v128_not).not.toBeUndefined();
        let _i16x8_all_true_with_v128_not_result = module.invoke(_i16x8_all_true_with_v128_not, 0);
        expect(_i16x8_all_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.not (instance 1)", () => {
        let _i16x8_all_true_with_v128_not = module.getExport("i16x8_all_true_with_v128.not");
        expect(_i16x8_all_true_with_v128_not).not.toBeUndefined();
        let _i16x8_all_true_with_v128_not_result = module.invoke(_i16x8_all_true_with_v128_not, 0);
        expect(_i16x8_all_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.not (instance 2)", () => {
        let _i16x8_all_true_with_v128_not = module.getExport("i16x8_all_true_with_v128.not");
        expect(_i16x8_all_true_with_v128_not).not.toBeUndefined();
        let _i16x8_all_true_with_v128_not_result = module.invoke(_i16x8_all_true_with_v128_not, 0);
        expect(_i16x8_all_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.not (instance 0)", () => {
        let _i32x4_all_true_with_v128_not = module.getExport("i32x4_all_true_with_v128.not");
        expect(_i32x4_all_true_with_v128_not).not.toBeUndefined();
        let _i32x4_all_true_with_v128_not_result = module.invoke(_i32x4_all_true_with_v128_not, 0);
        expect(_i32x4_all_true_with_v128_not_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.not (instance 1)", () => {
        let _i32x4_all_true_with_v128_not = module.getExport("i32x4_all_true_with_v128.not");
        expect(_i32x4_all_true_with_v128_not).not.toBeUndefined();
        let _i32x4_all_true_with_v128_not_result = module.invoke(_i32x4_all_true_with_v128_not, 0);
        expect(_i32x4_all_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.not (instance 2)", () => {
        let _i32x4_all_true_with_v128_not = module.getExport("i32x4_all_true_with_v128.not");
        expect(_i32x4_all_true_with_v128_not).not.toBeUndefined();
        let _i32x4_all_true_with_v128_not_result = module.invoke(_i32x4_all_true_with_v128_not, 0);
        expect(_i32x4_all_true_with_v128_not_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.and (instance 0)", () => {
        let _i8x16_all_true_with_v128_and = module.getExport("i8x16_all_true_with_v128.and");
        expect(_i8x16_all_true_with_v128_and).not.toBeUndefined();
        let _i8x16_all_true_with_v128_and_result = module.invoke(
            _i8x16_all_true_with_v128_and,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.and (instance 1)", () => {
        let _i8x16_all_true_with_v128_and = module.getExport("i8x16_all_true_with_v128.and");
        expect(_i8x16_all_true_with_v128_and).not.toBeUndefined();
        let _i8x16_all_true_with_v128_and_result = module.invoke(
            _i8x16_all_true_with_v128_and,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.and (instance 2)", () => {
        let _i8x16_all_true_with_v128_and = module.getExport("i8x16_all_true_with_v128.and");
        expect(_i8x16_all_true_with_v128_and).not.toBeUndefined();
        let _i8x16_all_true_with_v128_and_result = module.invoke(
            _i8x16_all_true_with_v128_and,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.and (instance 0)", () => {
        let _i16x8_all_true_with_v128_and = module.getExport("i16x8_all_true_with_v128.and");
        expect(_i16x8_all_true_with_v128_and).not.toBeUndefined();
        let _i16x8_all_true_with_v128_and_result = module.invoke(
            _i16x8_all_true_with_v128_and,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.and (instance 1)", () => {
        let _i16x8_all_true_with_v128_and = module.getExport("i16x8_all_true_with_v128.and");
        expect(_i16x8_all_true_with_v128_and).not.toBeUndefined();
        let _i16x8_all_true_with_v128_and_result = module.invoke(
            _i16x8_all_true_with_v128_and,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.and (instance 2)", () => {
        let _i16x8_all_true_with_v128_and = module.getExport("i16x8_all_true_with_v128.and");
        expect(_i16x8_all_true_with_v128_and).not.toBeUndefined();
        let _i16x8_all_true_with_v128_and_result = module.invoke(
            _i16x8_all_true_with_v128_and,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.and (instance 0)", () => {
        let _i32x4_all_true_with_v128_and = module.getExport("i32x4_all_true_with_v128.and");
        expect(_i32x4_all_true_with_v128_and).not.toBeUndefined();
        let _i32x4_all_true_with_v128_and_result = module.invoke(
            _i32x4_all_true_with_v128_and,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.and (instance 1)", () => {
        let _i32x4_all_true_with_v128_and = module.getExport("i32x4_all_true_with_v128.and");
        expect(_i32x4_all_true_with_v128_and).not.toBeUndefined();
        let _i32x4_all_true_with_v128_and_result = module.invoke(
            _i32x4_all_true_with_v128_and,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_and_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.and (instance 2)", () => {
        let _i32x4_all_true_with_v128_and = module.getExport("i32x4_all_true_with_v128.and");
        expect(_i32x4_all_true_with_v128_and).not.toBeUndefined();
        let _i32x4_all_true_with_v128_and_result = module.invoke(
            _i32x4_all_true_with_v128_and,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_and_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.or (instance 0)", () => {
        let _i8x16_all_true_with_v128_or = module.getExport("i8x16_all_true_with_v128.or");
        expect(_i8x16_all_true_with_v128_or).not.toBeUndefined();
        let _i8x16_all_true_with_v128_or_result = module.invoke(_i8x16_all_true_with_v128_or, 0, 0);
        expect(_i8x16_all_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.or (instance 1)", () => {
        let _i8x16_all_true_with_v128_or = module.getExport("i8x16_all_true_with_v128.or");
        expect(_i8x16_all_true_with_v128_or).not.toBeUndefined();
        let _i8x16_all_true_with_v128_or_result = module.invoke(_i8x16_all_true_with_v128_or, 0, 0);
        expect(_i8x16_all_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.or (instance 2)", () => {
        let _i8x16_all_true_with_v128_or = module.getExport("i8x16_all_true_with_v128.or");
        expect(_i8x16_all_true_with_v128_or).not.toBeUndefined();
        let _i8x16_all_true_with_v128_or_result = module.invoke(_i8x16_all_true_with_v128_or, 0, 0);
        expect(_i8x16_all_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.or (instance 0)", () => {
        let _i16x8_all_true_with_v128_or = module.getExport("i16x8_all_true_with_v128.or");
        expect(_i16x8_all_true_with_v128_or).not.toBeUndefined();
        let _i16x8_all_true_with_v128_or_result = module.invoke(_i16x8_all_true_with_v128_or, 0, 0);
        expect(_i16x8_all_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.or (instance 1)", () => {
        let _i16x8_all_true_with_v128_or = module.getExport("i16x8_all_true_with_v128.or");
        expect(_i16x8_all_true_with_v128_or).not.toBeUndefined();
        let _i16x8_all_true_with_v128_or_result = module.invoke(_i16x8_all_true_with_v128_or, 0, 0);
        expect(_i16x8_all_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.or (instance 2)", () => {
        let _i16x8_all_true_with_v128_or = module.getExport("i16x8_all_true_with_v128.or");
        expect(_i16x8_all_true_with_v128_or).not.toBeUndefined();
        let _i16x8_all_true_with_v128_or_result = module.invoke(_i16x8_all_true_with_v128_or, 0, 0);
        expect(_i16x8_all_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.or (instance 0)", () => {
        let _i32x4_all_true_with_v128_or = module.getExport("i32x4_all_true_with_v128.or");
        expect(_i32x4_all_true_with_v128_or).not.toBeUndefined();
        let _i32x4_all_true_with_v128_or_result = module.invoke(_i32x4_all_true_with_v128_or, 0, 0);
        expect(_i32x4_all_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.or (instance 1)", () => {
        let _i32x4_all_true_with_v128_or = module.getExport("i32x4_all_true_with_v128.or");
        expect(_i32x4_all_true_with_v128_or).not.toBeUndefined();
        let _i32x4_all_true_with_v128_or_result = module.invoke(_i32x4_all_true_with_v128_or, 0, 0);
        expect(_i32x4_all_true_with_v128_or_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.or (instance 2)", () => {
        let _i32x4_all_true_with_v128_or = module.getExport("i32x4_all_true_with_v128.or");
        expect(_i32x4_all_true_with_v128_or).not.toBeUndefined();
        let _i32x4_all_true_with_v128_or_result = module.invoke(_i32x4_all_true_with_v128_or, 0, 0);
        expect(_i32x4_all_true_with_v128_or_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.xor (instance 0)", () => {
        let _i8x16_all_true_with_v128_xor = module.getExport("i8x16_all_true_with_v128.xor");
        expect(_i8x16_all_true_with_v128_xor).not.toBeUndefined();
        let _i8x16_all_true_with_v128_xor_result = module.invoke(
            _i8x16_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.xor (instance 1)", () => {
        let _i8x16_all_true_with_v128_xor = module.getExport("i8x16_all_true_with_v128.xor");
        expect(_i8x16_all_true_with_v128_xor).not.toBeUndefined();
        let _i8x16_all_true_with_v128_xor_result = module.invoke(
            _i8x16_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.xor (instance 2)", () => {
        let _i8x16_all_true_with_v128_xor = module.getExport("i8x16_all_true_with_v128.xor");
        expect(_i8x16_all_true_with_v128_xor).not.toBeUndefined();
        let _i8x16_all_true_with_v128_xor_result = module.invoke(
            _i8x16_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_xor_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.xor (instance 0)", () => {
        let _i16x8_all_true_with_v128_xor = module.getExport("i16x8_all_true_with_v128.xor");
        expect(_i16x8_all_true_with_v128_xor).not.toBeUndefined();
        let _i16x8_all_true_with_v128_xor_result = module.invoke(
            _i16x8_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.xor (instance 1)", () => {
        let _i16x8_all_true_with_v128_xor = module.getExport("i16x8_all_true_with_v128.xor");
        expect(_i16x8_all_true_with_v128_xor).not.toBeUndefined();
        let _i16x8_all_true_with_v128_xor_result = module.invoke(
            _i16x8_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.xor (instance 2)", () => {
        let _i16x8_all_true_with_v128_xor = module.getExport("i16x8_all_true_with_v128.xor");
        expect(_i16x8_all_true_with_v128_xor).not.toBeUndefined();
        let _i16x8_all_true_with_v128_xor_result = module.invoke(
            _i16x8_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_xor_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.xor (instance 0)", () => {
        let _i32x4_all_true_with_v128_xor = module.getExport("i32x4_all_true_with_v128.xor");
        expect(_i32x4_all_true_with_v128_xor).not.toBeUndefined();
        let _i32x4_all_true_with_v128_xor_result = module.invoke(
            _i32x4_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.xor (instance 1)", () => {
        let _i32x4_all_true_with_v128_xor = module.getExport("i32x4_all_true_with_v128.xor");
        expect(_i32x4_all_true_with_v128_xor).not.toBeUndefined();
        let _i32x4_all_true_with_v128_xor_result = module.invoke(
            _i32x4_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_xor_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.xor (instance 2)", () => {
        let _i32x4_all_true_with_v128_xor = module.getExport("i32x4_all_true_with_v128.xor");
        expect(_i32x4_all_true_with_v128_xor).not.toBeUndefined();
        let _i32x4_all_true_with_v128_xor_result = module.invoke(
            _i32x4_all_true_with_v128_xor,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_xor_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.bitselect (instance 0)", () => {
        let _i8x16_all_true_with_v128_bitselect = module.getExport(
            "i8x16_all_true_with_v128.bitselect"
        );
        expect(_i8x16_all_true_with_v128_bitselect).not.toBeUndefined();
        let _i8x16_all_true_with_v128_bitselect_result = module.invoke(
            _i8x16_all_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_bitselect_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i8x16_all_true_with_v128.bitselect (instance 1)", () => {
        let _i8x16_all_true_with_v128_bitselect = module.getExport(
            "i8x16_all_true_with_v128.bitselect"
        );
        expect(_i8x16_all_true_with_v128_bitselect).not.toBeUndefined();
        let _i8x16_all_true_with_v128_bitselect_result = module.invoke(
            _i8x16_all_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i8x16_all_true_with_v128_bitselect_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.bitselect (instance 0)", () => {
        let _i16x8_all_true_with_v128_bitselect = module.getExport(
            "i16x8_all_true_with_v128.bitselect"
        );
        expect(_i16x8_all_true_with_v128_bitselect).not.toBeUndefined();
        let _i16x8_all_true_with_v128_bitselect_result = module.invoke(
            _i16x8_all_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_bitselect_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i16x8_all_true_with_v128.bitselect (instance 1)", () => {
        let _i16x8_all_true_with_v128_bitselect = module.getExport(
            "i16x8_all_true_with_v128.bitselect"
        );
        expect(_i16x8_all_true_with_v128_bitselect).not.toBeUndefined();
        let _i16x8_all_true_with_v128_bitselect_result = module.invoke(
            _i16x8_all_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i16x8_all_true_with_v128_bitselect_result).toBe(1);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.bitselect (instance 0)", () => {
        let _i32x4_all_true_with_v128_bitselect = module.getExport(
            "i32x4_all_true_with_v128.bitselect"
        );
        expect(_i32x4_all_true_with_v128_bitselect).not.toBeUndefined();
        let _i32x4_all_true_with_v128_bitselect_result = module.invoke(
            _i32x4_all_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_bitselect_result).toBe(0);
    });

    _test("execution of simd_boolean_1: i32x4_all_true_with_v128.bitselect (instance 1)", () => {
        let _i32x4_all_true_with_v128_bitselect = module.getExport(
            "i32x4_all_true_with_v128.bitselect"
        );
        expect(_i32x4_all_true_with_v128_bitselect).not.toBeUndefined();
        let _i32x4_all_true_with_v128_bitselect_result = module.invoke(
            _i32x4_all_true_with_v128_bitselect,
            0,
            0,
            0
        );
        expect(_i32x4_all_true_with_v128_bitselect_result).toBe(1);
    });
});

describe("simd_boolean_2", () => {
    let _test = test;

    _test("execution of simd_boolean_2: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_3", () => {
    let _test = test;

    _test("execution of simd_boolean_3: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_4", () => {
    let _test = test;

    _test("execution of simd_boolean_4: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_5", () => {
    let _test = test;

    _test("execution of simd_boolean_5: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_6", () => {
    let _test = test;

    _test("execution of simd_boolean_6: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_7", () => {
    let _test = test;

    _test("execution of simd_boolean_7: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_8", () => {
    let _test = test;

    _test("execution of simd_boolean_8: _inline_test_6 (instance 0)", () => {});
});

describe("simd_boolean_9", () => {
    let _test = test;

    _test("execution of simd_boolean_9: _inline_test_7 (instance 0)", () => {});
});

describe("simd_boolean_10", () => {
    let _test = test;

    _test("execution of simd_boolean_10: _inline_test_8 (instance 0)", () => {});
});

describe("simd_boolean_11", () => {
    let _test = test;

    _test("execution of simd_boolean_11: _inline_test_9 (instance 0)", () => {});
});

describe("simd_boolean_12", () => {
    let _test = test;

    _test("execution of simd_boolean_12: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_13", () => {
    let _test = test;

    _test("execution of simd_boolean_13: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_14", () => {
    let _test = test;

    _test("execution of simd_boolean_14: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_15", () => {
    let _test = test;

    _test("execution of simd_boolean_15: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_16", () => {
    let _test = test;

    _test("execution of simd_boolean_16: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_boolean_17", () => {
    let _test = test;

    _test("execution of simd_boolean_17: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
