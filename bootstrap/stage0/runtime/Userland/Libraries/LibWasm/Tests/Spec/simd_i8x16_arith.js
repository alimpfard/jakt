let globalImportObject = {};
let namedModules = {};

describe("simd_i8x16_arith_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i8x16_arith_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 0)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 1)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 2)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 3)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 4)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 5)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 6)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 7)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 8)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 9)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 10)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 11)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 12)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 13)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 14)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 15)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 16)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 17)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 18)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 19)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 20)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 21)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 22)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 23)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 24)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 25)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 26)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 27)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 28)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 29)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 30)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 31)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 32)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 33)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 34)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 35)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 36)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 37)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 38)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 39)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 40)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 41)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 42)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 43)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 44)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 45)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 46)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 47)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 48)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 49)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.add (instance 50)", () => {
        let _i8x16_add = module.getExport("i8x16.add");
        expect(_i8x16_add).not.toBeUndefined();
        let _i8x16_add_result = module.invoke(_i8x16_add, 0, 0);
        expect(_i8x16_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 0)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 1)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 2)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 3)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 4)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 5)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 6)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 7)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 8)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 9)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 10)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 11)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 12)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 13)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 14)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 15)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 16)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 17)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 18)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 19)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 20)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 21)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 22)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 23)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 24)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 25)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 26)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 27)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 28)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 29)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 30)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 31)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 32)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 33)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 34)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 35)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 36)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 37)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 38)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 39)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 40)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 41)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 42)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 43)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 44)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 45)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 46)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 47)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 48)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 49)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.sub (instance 50)", () => {
        let _i8x16_sub = module.getExport("i8x16.sub");
        expect(_i8x16_sub).not.toBeUndefined();
        let _i8x16_sub_result = module.invoke(_i8x16_sub, 0, 0);
        expect(_i8x16_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 0)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 1)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 2)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 3)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 4)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 5)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 6)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 7)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 8)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 9)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 10)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 11)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 12)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 13)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_0: i8x16.neg (instance 14)", () => {
        let _i8x16_neg = module.getExport("i8x16.neg");
        expect(_i8x16_neg).not.toBeUndefined();
        let _i8x16_neg_result = module.invoke(_i8x16_neg, 0);
        expect(_i8x16_neg_result).toBe(0);
    });
});

describe("simd_i8x16_arith_1", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_2", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_3", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_4", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_5", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_6", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_7", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_8", () => {
    let _test = test;

    _test("execution of simd_i8x16_arith_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_arith_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i8x16_arith_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i8x16_arith_9: add-sub (instance 0)", () => {
        let _add_sub = module.getExport("add-sub");
        expect(_add_sub).not.toBeUndefined();
        let _add_sub_result = module.invoke(_add_sub, 0, 0, 0);
        expect(_add_sub_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_9: sub-add (instance 0)", () => {
        let _sub_add = module.getExport("sub-add");
        expect(_sub_add).not.toBeUndefined();
        let _sub_add_result = module.invoke(_sub_add, 0, 0, 0);
        expect(_sub_add_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_9: add-neg (instance 0)", () => {
        let _add_neg = module.getExport("add-neg");
        expect(_add_neg).not.toBeUndefined();
        let _add_neg_result = module.invoke(_add_neg, 0, 0);
        expect(_add_neg_result).toBe(0);
    });

    _test("execution of simd_i8x16_arith_9: sub-neg (instance 0)", () => {
        let _sub_neg = module.getExport("sub-neg");
        expect(_sub_neg).not.toBeUndefined();
        let _sub_neg_result = module.invoke(_sub_neg, 0, 0);
        expect(_sub_neg_result).toBe(0);
    });
});
