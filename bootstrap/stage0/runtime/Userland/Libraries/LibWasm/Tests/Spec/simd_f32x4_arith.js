let globalImportObject = {};
let namedModules = {};

describe("simd_f32x4_arith_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_f32x4_arith_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 0)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 1)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 2)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 3)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 4)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 5)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 6)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 7)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 8)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 9)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 10)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 11)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 12)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 13)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 14)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 15)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 16)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 17)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 18)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 19)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 20)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 21)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 22)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 23)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 24)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 25)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 26)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 27)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 28)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 29)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 30)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 31)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 32)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 33)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 34)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 35)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 36)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 37)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 38)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 39)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 40)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 41)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 42)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 43)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 44)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 45)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 46)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 47)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 48)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 49)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 50)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 51)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 52)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 53)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 54)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 55)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 56)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 57)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 58)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 59)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 60)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 61)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 62)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 63)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 64)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 65)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 66)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 67)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 68)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 69)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 70)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 71)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 72)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 73)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 74)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 75)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 76)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 77)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 78)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 79)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 80)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 81)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 82)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 83)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 84)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 85)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 86)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 87)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 88)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 89)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 90)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 91)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 92)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 93)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 94)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 95)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 96)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 97)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 98)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 99)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 100)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 101)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 102)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 103)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 104)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 105)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 106)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 107)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 108)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 109)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 110)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 111)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 112)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 113)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 114)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 115)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 116)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 117)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 118)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 119)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 120)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 121)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 122)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 123)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 124)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 125)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 126)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 127)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 128)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 129)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 130)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 131)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 132)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 133)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 134)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 135)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 136)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 137)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 138)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 139)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 140)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 141)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 142)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 143)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 144)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 145)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 146)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 147)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 148)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 149)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 150)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 151)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 152)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 153)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 154)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 155)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 156)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 157)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 158)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 159)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 160)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 161)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 162)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 163)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 164)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 165)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 166)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 167)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 168)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 169)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 170)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 171)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 172)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 173)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 174)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 175)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 176)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 177)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 178)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 179)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 180)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 181)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 182)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 183)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 184)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 185)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 186)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 187)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 188)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 189)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 190)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 191)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 192)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 193)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 194)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 195)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 196)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 197)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 198)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 199)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 200)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 201)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 202)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 203)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 204)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 205)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 206)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 207)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 208)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 209)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 210)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 211)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 212)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 213)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 214)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 215)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 216)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 217)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 218)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 219)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 220)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 221)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 222)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 223)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 224)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 225)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 226)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 227)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 228)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 229)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 230)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 231)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 232)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 233)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 234)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 235)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 236)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 237)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 238)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 239)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 240)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 241)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 242)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 243)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 244)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 245)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 246)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 247)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 248)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 249)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 250)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 251)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 252)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 253)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 254)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 255)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 256)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 257)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 258)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 259)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 260)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 261)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 262)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 263)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 264)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 265)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 266)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 267)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 268)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 269)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 270)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 271)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 272)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 273)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 274)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 275)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 276)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 277)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 278)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 279)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 280)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 281)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 282)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 283)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 284)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 285)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 286)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 287)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 288)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 289)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 290)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 291)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 292)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 293)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 294)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 295)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 296)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 297)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 298)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 299)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 300)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 301)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 302)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 303)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 304)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 305)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 306)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 307)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 308)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 309)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 310)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 311)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 312)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 313)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 314)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 315)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 316)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 317)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 318)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 319)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 320)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 321)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 322)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 323)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 324)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 325)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 326)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 327)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 328)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 329)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 330)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 331)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 332)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 333)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 334)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 335)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 336)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 337)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 338)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 339)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 340)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 341)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 342)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 343)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 344)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 345)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 346)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 347)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 348)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 349)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 350)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 351)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 352)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 353)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 354)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 355)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 356)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 357)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 358)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 359)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 360)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 361)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 362)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 363)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 364)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 365)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 366)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 367)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 368)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 369)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 370)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 371)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 372)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 373)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 374)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 375)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 376)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 377)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 378)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 379)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 380)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 381)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 382)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 383)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 384)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 385)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 386)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 387)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 388)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 389)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 390)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 391)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 392)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 393)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 394)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 395)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 396)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 397)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 398)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 399)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 400)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 401)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 402)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 403)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 404)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 405)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 406)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 407)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 408)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 409)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 410)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 411)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 412)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 413)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 414)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 415)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 416)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 417)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 418)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 419)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 420)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 421)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 422)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.add (instance 423)", () => {
        let _f32x4_add = module.getExport("f32x4.add");
        expect(_f32x4_add).not.toBeUndefined();
        let _f32x4_add_result = module.invoke(_f32x4_add, 0, 0);
        expect(_f32x4_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 0)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 1)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 2)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 3)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 4)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 5)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 6)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 7)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 8)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 9)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 10)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 11)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 12)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 13)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 14)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 15)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 16)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 17)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 18)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 19)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 20)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 21)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 22)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 23)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 24)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 25)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 26)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 27)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 28)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 29)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 30)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 31)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 32)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 33)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 34)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 35)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 36)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 37)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 38)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 39)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 40)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 41)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 42)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 43)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 44)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 45)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 46)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 47)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 48)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 49)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 50)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 51)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 52)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 53)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 54)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 55)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 56)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 57)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 58)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 59)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 60)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 61)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 62)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 63)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 64)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 65)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 66)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 67)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 68)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 69)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 70)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 71)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 72)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 73)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 74)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 75)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 76)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 77)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 78)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 79)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 80)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 81)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 82)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 83)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 84)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 85)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 86)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 87)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 88)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 89)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 90)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 91)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 92)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 93)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 94)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 95)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 96)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 97)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 98)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 99)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 100)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 101)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 102)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 103)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 104)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 105)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 106)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 107)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 108)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 109)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 110)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 111)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 112)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 113)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 114)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 115)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 116)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 117)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 118)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 119)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 120)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 121)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 122)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 123)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 124)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 125)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 126)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 127)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 128)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 129)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 130)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 131)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 132)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 133)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 134)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 135)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 136)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 137)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 138)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 139)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 140)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 141)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 142)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 143)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 144)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 145)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 146)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 147)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 148)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 149)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 150)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 151)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 152)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 153)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 154)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 155)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 156)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 157)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 158)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 159)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 160)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 161)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 162)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 163)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 164)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 165)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 166)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 167)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 168)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 169)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 170)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 171)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 172)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 173)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 174)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 175)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 176)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 177)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 178)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 179)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 180)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 181)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 182)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 183)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 184)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 185)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 186)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 187)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 188)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 189)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 190)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 191)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 192)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 193)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 194)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 195)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 196)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 197)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 198)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 199)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 200)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 201)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 202)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 203)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 204)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 205)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 206)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 207)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 208)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 209)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 210)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 211)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 212)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 213)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 214)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 215)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 216)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 217)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 218)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 219)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 220)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 221)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 222)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 223)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 224)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 225)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 226)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 227)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 228)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 229)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 230)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 231)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 232)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 233)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 234)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 235)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 236)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 237)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 238)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 239)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 240)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 241)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 242)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 243)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 244)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 245)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 246)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 247)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 248)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 249)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 250)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 251)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 252)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 253)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 254)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 255)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 256)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 257)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 258)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 259)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 260)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 261)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 262)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 263)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 264)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 265)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 266)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 267)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 268)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 269)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 270)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 271)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 272)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 273)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 274)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 275)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 276)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 277)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 278)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 279)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 280)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 281)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 282)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 283)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 284)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 285)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 286)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 287)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 288)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 289)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 290)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 291)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 292)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 293)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 294)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 295)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 296)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 297)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 298)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 299)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 300)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 301)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 302)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 303)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 304)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 305)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 306)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 307)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 308)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 309)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 310)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 311)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 312)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 313)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 314)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 315)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 316)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 317)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 318)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 319)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 320)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 321)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 322)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 323)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 324)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 325)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 326)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 327)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 328)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 329)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 330)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 331)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 332)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 333)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 334)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 335)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 336)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 337)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 338)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 339)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 340)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 341)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 342)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 343)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 344)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 345)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 346)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 347)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 348)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 349)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 350)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 351)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 352)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 353)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 354)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 355)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 356)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 357)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 358)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 359)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 360)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 361)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 362)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 363)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 364)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 365)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 366)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 367)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 368)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 369)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 370)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 371)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 372)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 373)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 374)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 375)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 376)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 377)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 378)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 379)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 380)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 381)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 382)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 383)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 384)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 385)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 386)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 387)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 388)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 389)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 390)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 391)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 392)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 393)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 394)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 395)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 396)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 397)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 398)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 399)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 400)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 401)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 402)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 403)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 404)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 405)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 406)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 407)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 408)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 409)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 410)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 411)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 412)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 413)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 414)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 415)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 416)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 417)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 418)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 419)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 420)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 421)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 422)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sub (instance 423)", () => {
        let _f32x4_sub = module.getExport("f32x4.sub");
        expect(_f32x4_sub).not.toBeUndefined();
        let _f32x4_sub_result = module.invoke(_f32x4_sub, 0, 0);
        expect(_f32x4_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 0)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 1)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 2)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 3)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 4)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 5)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 6)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 7)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 8)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 9)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 10)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 11)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 12)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 13)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 14)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 15)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 16)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 17)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 18)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 19)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 20)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 21)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 22)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 23)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 24)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 25)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 26)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 27)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 28)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 29)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 30)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 31)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 32)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 33)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 34)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 35)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 36)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 37)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 38)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 39)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 40)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 41)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 42)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 43)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 44)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 45)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 46)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 47)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 48)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 49)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 50)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 51)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 52)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 53)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 54)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 55)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 56)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 57)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 58)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 59)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 60)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 61)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 62)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 63)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 64)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 65)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 66)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 67)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 68)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 69)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 70)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 71)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 72)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 73)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 74)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 75)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 76)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 77)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 78)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 79)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 80)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 81)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 82)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 83)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 84)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 85)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 86)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 87)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 88)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 89)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 90)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 91)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 92)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 93)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 94)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 95)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 96)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 97)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 98)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 99)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 100)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 101)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 102)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 103)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 104)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 105)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 106)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 107)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 108)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 109)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 110)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 111)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 112)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 113)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 114)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 115)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 116)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 117)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 118)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 119)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 120)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 121)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 122)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 123)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 124)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 125)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 126)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 127)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 128)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 129)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 130)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 131)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 132)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 133)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 134)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 135)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 136)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 137)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 138)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 139)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 140)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 141)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 142)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 143)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 144)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 145)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 146)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 147)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 148)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 149)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 150)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 151)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 152)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 153)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 154)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 155)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 156)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 157)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 158)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 159)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 160)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 161)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 162)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 163)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 164)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 165)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 166)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 167)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 168)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 169)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 170)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 171)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 172)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 173)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 174)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 175)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 176)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 177)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 178)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 179)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 180)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 181)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 182)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 183)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 184)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 185)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 186)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 187)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 188)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 189)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 190)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 191)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 192)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 193)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 194)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 195)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 196)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 197)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 198)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 199)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 200)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 201)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 202)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 203)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 204)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 205)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 206)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 207)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 208)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 209)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 210)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 211)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 212)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 213)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 214)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 215)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 216)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 217)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 218)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 219)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 220)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 221)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 222)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 223)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 224)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 225)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 226)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 227)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 228)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 229)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 230)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 231)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 232)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 233)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 234)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 235)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 236)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 237)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 238)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 239)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 240)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 241)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 242)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 243)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 244)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 245)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 246)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 247)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 248)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 249)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 250)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 251)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 252)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 253)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 254)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 255)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 256)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 257)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 258)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 259)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 260)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 261)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 262)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 263)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 264)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 265)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 266)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 267)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 268)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 269)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 270)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 271)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 272)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 273)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 274)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 275)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 276)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 277)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 278)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 279)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 280)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 281)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 282)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 283)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 284)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 285)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 286)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 287)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 288)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 289)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 290)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 291)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 292)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 293)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 294)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 295)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 296)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 297)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 298)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 299)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 300)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 301)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 302)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 303)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 304)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 305)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 306)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 307)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 308)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 309)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 310)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 311)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 312)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 313)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 314)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 315)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 316)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 317)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 318)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 319)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 320)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 321)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 322)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 323)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 324)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 325)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 326)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 327)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 328)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 329)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 330)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 331)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 332)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 333)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 334)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 335)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 336)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 337)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 338)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 339)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 340)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 341)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 342)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 343)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 344)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 345)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 346)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 347)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 348)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 349)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 350)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 351)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 352)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 353)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 354)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 355)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 356)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 357)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 358)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 359)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 360)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 361)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 362)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 363)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 364)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 365)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 366)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 367)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 368)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 369)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 370)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 371)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 372)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 373)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 374)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 375)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 376)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 377)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 378)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 379)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 380)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 381)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 382)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 383)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 384)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 385)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 386)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 387)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 388)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 389)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 390)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 391)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 392)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 393)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 394)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 395)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 396)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 397)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 398)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 399)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 400)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 401)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 402)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 403)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 404)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 405)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 406)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 407)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 408)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 409)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 410)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 411)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 412)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 413)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 414)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 415)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 416)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 417)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 418)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 419)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 420)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 421)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 422)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.mul (instance 423)", () => {
        let _f32x4_mul = module.getExport("f32x4.mul");
        expect(_f32x4_mul).not.toBeUndefined();
        let _f32x4_mul_result = module.invoke(_f32x4_mul, 0, 0);
        expect(_f32x4_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 0)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 1)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 2)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 3)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 4)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 5)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 6)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 7)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 8)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 9)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 10)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 11)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 12)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 13)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 14)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 15)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 16)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 17)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 18)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 19)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 20)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 21)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 22)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 23)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 24)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 25)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 26)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 27)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 28)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 29)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 30)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 31)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 32)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 33)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 34)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 35)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 36)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 37)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 38)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 39)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 40)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 41)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 42)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 43)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 44)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 45)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 46)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 47)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 48)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 49)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 50)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 51)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 52)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 53)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 54)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 55)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 56)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 57)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 58)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 59)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 60)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 61)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 62)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 63)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 64)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 65)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 66)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 67)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 68)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 69)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 70)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 71)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 72)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 73)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 74)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 75)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 76)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 77)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 78)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 79)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 80)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 81)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 82)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 83)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 84)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 85)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 86)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 87)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 88)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 89)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 90)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 91)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 92)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 93)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 94)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 95)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 96)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 97)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 98)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 99)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 100)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 101)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 102)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 103)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 104)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 105)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 106)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 107)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 108)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 109)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 110)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 111)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 112)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 113)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 114)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 115)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 116)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 117)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 118)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 119)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 120)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 121)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 122)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 123)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 124)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 125)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 126)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 127)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 128)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 129)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 130)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 131)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 132)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 133)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 134)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 135)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 136)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 137)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 138)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 139)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 140)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 141)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 142)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 143)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 144)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 145)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 146)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 147)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 148)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 149)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 150)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 151)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 152)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 153)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 154)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 155)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 156)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 157)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 158)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 159)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 160)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 161)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 162)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 163)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 164)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 165)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 166)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 167)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 168)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 169)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 170)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 171)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 172)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 173)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 174)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 175)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 176)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 177)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 178)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 179)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 180)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 181)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 182)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 183)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 184)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 185)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 186)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 187)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 188)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 189)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 190)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 191)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 192)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 193)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 194)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 195)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 196)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 197)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 198)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 199)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 200)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 201)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 202)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 203)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 204)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 205)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 206)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 207)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 208)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 209)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 210)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 211)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 212)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 213)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 214)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 215)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 216)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 217)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 218)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 219)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 220)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 221)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 222)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 223)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 224)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 225)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 226)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 227)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 228)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 229)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 230)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 231)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 232)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 233)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 234)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 235)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 236)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 237)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 238)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 239)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 240)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 241)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 242)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 243)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 244)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 245)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 246)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 247)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 248)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 249)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 250)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 251)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 252)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 253)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 254)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 255)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 256)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 257)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 258)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 259)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 260)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 261)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 262)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 263)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 264)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 265)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 266)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 267)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 268)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 269)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 270)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 271)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 272)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 273)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 274)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 275)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 276)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 277)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 278)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 279)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 280)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 281)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 282)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 283)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 284)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 285)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 286)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 287)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 288)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 289)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 290)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 291)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 292)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 293)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 294)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 295)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 296)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 297)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 298)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 299)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 300)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 301)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 302)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 303)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 304)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 305)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 306)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 307)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 308)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 309)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 310)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 311)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 312)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 313)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 314)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 315)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 316)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 317)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 318)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 319)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 320)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 321)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 322)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 323)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 324)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 325)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 326)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 327)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 328)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 329)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 330)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 331)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 332)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 333)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 334)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 335)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 336)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 337)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 338)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 339)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 340)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 341)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 342)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 343)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 344)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 345)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 346)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 347)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 348)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 349)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 350)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 351)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 352)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 353)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 354)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 355)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 356)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 357)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 358)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 359)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 360)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 361)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 362)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 363)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 364)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 365)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 366)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 367)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 368)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 369)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 370)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 371)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 372)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 373)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 374)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 375)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 376)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 377)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 378)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 379)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 380)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 381)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 382)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 383)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 384)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 385)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 386)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 387)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 388)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 389)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 390)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 391)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 392)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 393)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 394)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 395)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 396)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 397)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 398)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 399)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 400)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 401)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 402)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 403)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 404)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 405)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 406)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 407)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 408)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 409)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 410)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 411)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 412)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 413)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 414)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 415)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 416)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 417)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 418)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 419)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 420)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 421)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 422)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.div (instance 423)", () => {
        let _f32x4_div = module.getExport("f32x4.div");
        expect(_f32x4_div).not.toBeUndefined();
        let _f32x4_div_result = module.invoke(_f32x4_div, 0, 0);
        expect(_f32x4_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 0)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 1)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 2)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 3)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 4)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 5)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 6)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 7)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 8)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 9)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 10)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 11)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 12)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 13)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 14)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 15)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 16)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 17)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 18)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 19)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 20)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 21)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 22)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 23)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 24)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 25)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 26)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 27)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 28)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 29)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 30)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 31)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 32)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 33)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 34)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 35)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 36)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 37)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 38)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 39)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 40)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 41)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 42)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.sqrt (instance 43)", () => {
        let _f32x4_sqrt = module.getExport("f32x4.sqrt");
        expect(_f32x4_sqrt).not.toBeUndefined();
        let _f32x4_sqrt_result = module.invoke(_f32x4_sqrt, 0);
        expect(_f32x4_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 0)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 1)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 2)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 3)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 4)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 5)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 6)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 7)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 8)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 9)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 10)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 11)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 12)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 13)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 14)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 15)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 16)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 17)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 18)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 19)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 20)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 21)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 22)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 23)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 24)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 25)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 26)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 27)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 28)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 29)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 30)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 31)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 32)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 33)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 34)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 35)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 36)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 37)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 38)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 39)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 40)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 41)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 42)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_0: f32x4.neg (instance 43)", () => {
        let _f32x4_neg = module.getExport("f32x4.neg");
        expect(_f32x4_neg).not.toBeUndefined();
        let _f32x4_neg_result = module.invoke(_f32x4_neg, 0);
        expect(_f32x4_neg_result).toBe(0);
    });
});

describe("simd_f32x4_arith_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_f32x4_arith_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_f32x4_arith_1: f32x4_sqrt_arith (instance 0)", () => {
        let _f32x4_sqrt_arith = module.getExport("f32x4_sqrt_arith");
        expect(_f32x4_sqrt_arith).not.toBeUndefined();
        let _f32x4_sqrt_arith_result = module.invoke(_f32x4_sqrt_arith);
        expect(_f32x4_sqrt_arith_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_1: f32x4_sqrt_canon (instance 0)", () => {
        let _f32x4_sqrt_canon = module.getExport("f32x4_sqrt_canon");
        expect(_f32x4_sqrt_canon).not.toBeUndefined();
        let _f32x4_sqrt_canon_result = module.invoke(_f32x4_sqrt_canon);
        expect(_f32x4_sqrt_canon_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_1: f32x4_sqrt_mixed (instance 0)", () => {
        let _f32x4_sqrt_mixed = module.getExport("f32x4_sqrt_mixed");
        expect(_f32x4_sqrt_mixed).not.toBeUndefined();
        let _f32x4_sqrt_mixed_result = module.invoke(_f32x4_sqrt_mixed);
        expect(_f32x4_sqrt_mixed_result).toBe(0);
    });
});

describe("simd_f32x4_arith_2", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_2: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_3", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_3: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_4", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_4: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_5", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_5: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_6", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_6: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_7", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_7: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_8", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_8: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_9", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_9: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_10", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_10: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_11", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_11: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_12", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_12: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_13", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_13: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_14", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_14: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_15", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_15: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_16", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_16: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_17", () => {
    let _test = test;

    _test("execution of simd_f32x4_arith_17: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_f32x4_arith_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_f32x4_arith_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_f32x4_arith_18: add-sub (instance 0)", () => {
        let _add_sub = module.getExport("add-sub");
        expect(_add_sub).not.toBeUndefined();
        let _add_sub_result = module.invoke(_add_sub, 0, 0, 0);
        expect(_add_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: div-add (instance 0)", () => {
        let _div_add = module.getExport("div-add");
        expect(_div_add).not.toBeUndefined();
        let _div_add_result = module.invoke(_div_add, 0, 0, 0);
        expect(_div_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: div-mul (instance 0)", () => {
        let _div_mul = module.getExport("div-mul");
        expect(_div_mul).not.toBeUndefined();
        let _div_mul_result = module.invoke(_div_mul, 0, 0, 0);
        expect(_div_mul_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: div-sub (instance 0)", () => {
        let _div_sub = module.getExport("div-sub");
        expect(_div_sub).not.toBeUndefined();
        let _div_sub_result = module.invoke(_div_sub, 0, 0, 0);
        expect(_div_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: mul-add (instance 0)", () => {
        let _mul_add = module.getExport("mul-add");
        expect(_mul_add).not.toBeUndefined();
        let _mul_add_result = module.invoke(_mul_add, 0, 0, 0);
        expect(_mul_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: mul-div (instance 0)", () => {
        let _mul_div = module.getExport("mul-div");
        expect(_mul_div).not.toBeUndefined();
        let _mul_div_result = module.invoke(_mul_div, 0, 0, 0);
        expect(_mul_div_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: mul-sub (instance 0)", () => {
        let _mul_sub = module.getExport("mul-sub");
        expect(_mul_sub).not.toBeUndefined();
        let _mul_sub_result = module.invoke(_mul_sub, 0, 0, 0);
        expect(_mul_sub_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: sub-add (instance 0)", () => {
        let _sub_add = module.getExport("sub-add");
        expect(_sub_add).not.toBeUndefined();
        let _sub_add_result = module.invoke(_sub_add, 0, 0, 0);
        expect(_sub_add_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: add-neg (instance 0)", () => {
        let _add_neg = module.getExport("add-neg");
        expect(_add_neg).not.toBeUndefined();
        let _add_neg_result = module.invoke(_add_neg, 0, 0);
        expect(_add_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: add-sqrt (instance 0)", () => {
        let _add_sqrt = module.getExport("add-sqrt");
        expect(_add_sqrt).not.toBeUndefined();
        let _add_sqrt_result = module.invoke(_add_sqrt, 0, 0);
        expect(_add_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: div-neg (instance 0)", () => {
        let _div_neg = module.getExport("div-neg");
        expect(_div_neg).not.toBeUndefined();
        let _div_neg_result = module.invoke(_div_neg, 0, 0);
        expect(_div_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: div-sqrt (instance 0)", () => {
        let _div_sqrt = module.getExport("div-sqrt");
        expect(_div_sqrt).not.toBeUndefined();
        let _div_sqrt_result = module.invoke(_div_sqrt, 0, 0);
        expect(_div_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: mul-neg (instance 0)", () => {
        let _mul_neg = module.getExport("mul-neg");
        expect(_mul_neg).not.toBeUndefined();
        let _mul_neg_result = module.invoke(_mul_neg, 0, 0);
        expect(_mul_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: mul-sqrt (instance 0)", () => {
        let _mul_sqrt = module.getExport("mul-sqrt");
        expect(_mul_sqrt).not.toBeUndefined();
        let _mul_sqrt_result = module.invoke(_mul_sqrt, 0, 0);
        expect(_mul_sqrt_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: sub-neg (instance 0)", () => {
        let _sub_neg = module.getExport("sub-neg");
        expect(_sub_neg).not.toBeUndefined();
        let _sub_neg_result = module.invoke(_sub_neg, 0, 0);
        expect(_sub_neg_result).toBe(0);
    });

    _test("execution of simd_f32x4_arith_18: sub-sqrt (instance 0)", () => {
        let _sub_sqrt = module.getExport("sub-sqrt");
        expect(_sub_sqrt).not.toBeUndefined();
        let _sub_sqrt_result = module.invoke(_sub_sqrt, 0, 0);
        expect(_sub_sqrt_result).toBe(0);
    });
});
