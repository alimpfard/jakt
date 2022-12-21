let globalImportObject = {};
let namedModules = {};

describe("simd_i32x4_arith2_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i32x4_arith2_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 0)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 1)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 2)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 3)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 4)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 5)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 6)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 7)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 8)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 9)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 10)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 0)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 1)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 2)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 3)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 4)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 5)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 6)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 7)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 8)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 9)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 10)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 0)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 1)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 2)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 3)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 4)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 5)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 6)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 7)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 8)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 9)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 10)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 0)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 1)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 2)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 3)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 4)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 5)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 6)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 7)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 8)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 9)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 10)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 0)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 1)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 2)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 3)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 4)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 5)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 6)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 7)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 8)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 9)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 10)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 11)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 12)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 13)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s_with_const_0 (instance 0)", () => {
        let _i32x4_min_s_with_const_0 = module.getExport("i32x4.min_s_with_const_0");
        expect(_i32x4_min_s_with_const_0).not.toBeUndefined();
        let _i32x4_min_s_with_const_0_result = module.invoke(_i32x4_min_s_with_const_0);
        expect(_i32x4_min_s_with_const_0_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s_with_const_1 (instance 0)", () => {
        let _i32x4_min_s_with_const_1 = module.getExport("i32x4.min_s_with_const_1");
        expect(_i32x4_min_s_with_const_1).not.toBeUndefined();
        let _i32x4_min_s_with_const_1_result = module.invoke(_i32x4_min_s_with_const_1);
        expect(_i32x4_min_s_with_const_1_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u_with_const_2 (instance 0)", () => {
        let _i32x4_min_u_with_const_2 = module.getExport("i32x4.min_u_with_const_2");
        expect(_i32x4_min_u_with_const_2).not.toBeUndefined();
        let _i32x4_min_u_with_const_2_result = module.invoke(_i32x4_min_u_with_const_2);
        expect(_i32x4_min_u_with_const_2_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u_with_const_3 (instance 0)", () => {
        let _i32x4_min_u_with_const_3 = module.getExport("i32x4.min_u_with_const_3");
        expect(_i32x4_min_u_with_const_3).not.toBeUndefined();
        let _i32x4_min_u_with_const_3_result = module.invoke(_i32x4_min_u_with_const_3);
        expect(_i32x4_min_u_with_const_3_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s_with_const_4 (instance 0)", () => {
        let _i32x4_max_s_with_const_4 = module.getExport("i32x4.max_s_with_const_4");
        expect(_i32x4_max_s_with_const_4).not.toBeUndefined();
        let _i32x4_max_s_with_const_4_result = module.invoke(_i32x4_max_s_with_const_4);
        expect(_i32x4_max_s_with_const_4_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s_with_const_5 (instance 0)", () => {
        let _i32x4_max_s_with_const_5 = module.getExport("i32x4.max_s_with_const_5");
        expect(_i32x4_max_s_with_const_5).not.toBeUndefined();
        let _i32x4_max_s_with_const_5_result = module.invoke(_i32x4_max_s_with_const_5);
        expect(_i32x4_max_s_with_const_5_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u_with_const_6 (instance 0)", () => {
        let _i32x4_max_u_with_const_6 = module.getExport("i32x4.max_u_with_const_6");
        expect(_i32x4_max_u_with_const_6).not.toBeUndefined();
        let _i32x4_max_u_with_const_6_result = module.invoke(_i32x4_max_u_with_const_6);
        expect(_i32x4_max_u_with_const_6_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u_with_const_7 (instance 0)", () => {
        let _i32x4_max_u_with_const_7 = module.getExport("i32x4.max_u_with_const_7");
        expect(_i32x4_max_u_with_const_7).not.toBeUndefined();
        let _i32x4_max_u_with_const_7_result = module.invoke(_i32x4_max_u_with_const_7);
        expect(_i32x4_max_u_with_const_7_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs_with_const_8 (instance 0)", () => {
        let _i32x4_abs_with_const_8 = module.getExport("i32x4.abs_with_const_8");
        expect(_i32x4_abs_with_const_8).not.toBeUndefined();
        let _i32x4_abs_with_const_8_result = module.invoke(_i32x4_abs_with_const_8);
        expect(_i32x4_abs_with_const_8_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s_with_const_9 (instance 0)", () => {
        let _i32x4_min_s_with_const_9 = module.getExport("i32x4.min_s_with_const_9");
        expect(_i32x4_min_s_with_const_9).not.toBeUndefined();
        let _i32x4_min_s_with_const_9_result = module.invoke(_i32x4_min_s_with_const_9, 0);
        expect(_i32x4_min_s_with_const_9_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s_with_const_10 (instance 0)", () => {
        let _i32x4_min_s_with_const_10 = module.getExport("i32x4.min_s_with_const_10");
        expect(_i32x4_min_s_with_const_10).not.toBeUndefined();
        let _i32x4_min_s_with_const_10_result = module.invoke(_i32x4_min_s_with_const_10, 0);
        expect(_i32x4_min_s_with_const_10_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u_with_const_11 (instance 0)", () => {
        let _i32x4_min_u_with_const_11 = module.getExport("i32x4.min_u_with_const_11");
        expect(_i32x4_min_u_with_const_11).not.toBeUndefined();
        let _i32x4_min_u_with_const_11_result = module.invoke(_i32x4_min_u_with_const_11, 0);
        expect(_i32x4_min_u_with_const_11_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u_with_const_12 (instance 0)", () => {
        let _i32x4_min_u_with_const_12 = module.getExport("i32x4.min_u_with_const_12");
        expect(_i32x4_min_u_with_const_12).not.toBeUndefined();
        let _i32x4_min_u_with_const_12_result = module.invoke(_i32x4_min_u_with_const_12, 0);
        expect(_i32x4_min_u_with_const_12_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s_with_const_13 (instance 0)", () => {
        let _i32x4_max_s_with_const_13 = module.getExport("i32x4.max_s_with_const_13");
        expect(_i32x4_max_s_with_const_13).not.toBeUndefined();
        let _i32x4_max_s_with_const_13_result = module.invoke(_i32x4_max_s_with_const_13, 0);
        expect(_i32x4_max_s_with_const_13_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s_with_const_14 (instance 0)", () => {
        let _i32x4_max_s_with_const_14 = module.getExport("i32x4.max_s_with_const_14");
        expect(_i32x4_max_s_with_const_14).not.toBeUndefined();
        let _i32x4_max_s_with_const_14_result = module.invoke(_i32x4_max_s_with_const_14, 0);
        expect(_i32x4_max_s_with_const_14_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u_with_const_15 (instance 0)", () => {
        let _i32x4_max_u_with_const_15 = module.getExport("i32x4.max_u_with_const_15");
        expect(_i32x4_max_u_with_const_15).not.toBeUndefined();
        let _i32x4_max_u_with_const_15_result = module.invoke(_i32x4_max_u_with_const_15, 0);
        expect(_i32x4_max_u_with_const_15_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u_with_const_16 (instance 0)", () => {
        let _i32x4_max_u_with_const_16 = module.getExport("i32x4.max_u_with_const_16");
        expect(_i32x4_max_u_with_const_16).not.toBeUndefined();
        let _i32x4_max_u_with_const_16_result = module.invoke(_i32x4_max_u_with_const_16, 0);
        expect(_i32x4_max_u_with_const_16_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 11)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 12)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 11)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 12)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 11)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 12)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 11)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 12)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 14)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 13)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_s (instance 14)", () => {
        let _i32x4_min_s = module.getExport("i32x4.min_s");
        expect(_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_result = module.invoke(_i32x4_min_s, 0, 0);
        expect(_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 13)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.min_u (instance 14)", () => {
        let _i32x4_min_u = module.getExport("i32x4.min_u");
        expect(_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_result = module.invoke(_i32x4_min_u, 0, 0);
        expect(_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 13)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_s (instance 14)", () => {
        let _i32x4_max_s = module.getExport("i32x4.max_s");
        expect(_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_result = module.invoke(_i32x4_max_s, 0, 0);
        expect(_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 13)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.max_u (instance 14)", () => {
        let _i32x4_max_u = module.getExport("i32x4.max_u");
        expect(_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_result = module.invoke(_i32x4_max_u, 0, 0);
        expect(_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 15)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 16)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 17)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_0: i32x4.abs (instance 18)", () => {
        let _i32x4_abs = module.getExport("i32x4.abs");
        expect(_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_result = module.invoke(_i32x4_abs, 0);
        expect(_i32x4_abs_result).toBe(0);
    });
});

describe("simd_i32x4_arith2_1", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_1: _inline_test_0 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_2", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_2: _inline_test_1 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_3", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_3: _inline_test_2 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_4", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_4: _inline_test_3 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_5", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_5: _inline_test_4 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_6", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_6: _inline_test_5 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_7", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_7: _inline_test_6 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_8", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_8: _inline_test_7 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_9", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_9: _inline_test_8 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_10", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_10: _inline_test_9 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_11", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_11: _inline_test_10 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_12", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_12: _inline_test_11 (instance 0)", () => {});
});

describe("simd_i32x4_arith2_13", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_14", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_15", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_16", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_17", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_18", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_19", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_20", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_21", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_22", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_23", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_24", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_25", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_26", () => {
    let _test = test;

    _test("execution of simd_i32x4_arith2_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_arith2_27", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i32x4_arith2_27.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i32x4_arith2_27: i32x4.min_s-i32x4.max_u (instance 0)", () => {
        let _i32x4_min_s_i32x4_max_u = module.getExport("i32x4.min_s-i32x4.max_u");
        expect(_i32x4_min_s_i32x4_max_u).not.toBeUndefined();
        let _i32x4_min_s_i32x4_max_u_result = module.invoke(_i32x4_min_s_i32x4_max_u, 0, 0, 0);
        expect(_i32x4_min_s_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_s-i32x4.max_s (instance 0)", () => {
        let _i32x4_min_s_i32x4_max_s = module.getExport("i32x4.min_s-i32x4.max_s");
        expect(_i32x4_min_s_i32x4_max_s).not.toBeUndefined();
        let _i32x4_min_s_i32x4_max_s_result = module.invoke(_i32x4_min_s_i32x4_max_s, 0, 0, 0);
        expect(_i32x4_min_s_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_s-i32x4.min_u (instance 0)", () => {
        let _i32x4_min_s_i32x4_min_u = module.getExport("i32x4.min_s-i32x4.min_u");
        expect(_i32x4_min_s_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_s_i32x4_min_u_result = module.invoke(_i32x4_min_s_i32x4_min_u, 0, 0, 0);
        expect(_i32x4_min_s_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_s-i32x4.min_s (instance 0)", () => {
        let _i32x4_min_s_i32x4_min_s = module.getExport("i32x4.min_s-i32x4.min_s");
        expect(_i32x4_min_s_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_s_i32x4_min_s_result = module.invoke(_i32x4_min_s_i32x4_min_s, 0, 0, 0);
        expect(_i32x4_min_s_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_s-i32x4.abs (instance 0)", () => {
        let _i32x4_min_s_i32x4_abs = module.getExport("i32x4.min_s-i32x4.abs");
        expect(_i32x4_min_s_i32x4_abs).not.toBeUndefined();
        let _i32x4_min_s_i32x4_abs_result = module.invoke(_i32x4_min_s_i32x4_abs, 0, 0);
        expect(_i32x4_min_s_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.abs-i32x4.min_s (instance 0)", () => {
        let _i32x4_abs_i32x4_min_s = module.getExport("i32x4.abs-i32x4.min_s");
        expect(_i32x4_abs_i32x4_min_s).not.toBeUndefined();
        let _i32x4_abs_i32x4_min_s_result = module.invoke(_i32x4_abs_i32x4_min_s, 0, 0);
        expect(_i32x4_abs_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_u-i32x4.max_u (instance 0)", () => {
        let _i32x4_min_u_i32x4_max_u = module.getExport("i32x4.min_u-i32x4.max_u");
        expect(_i32x4_min_u_i32x4_max_u).not.toBeUndefined();
        let _i32x4_min_u_i32x4_max_u_result = module.invoke(_i32x4_min_u_i32x4_max_u, 0, 0, 0);
        expect(_i32x4_min_u_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_u-i32x4.max_s (instance 0)", () => {
        let _i32x4_min_u_i32x4_max_s = module.getExport("i32x4.min_u-i32x4.max_s");
        expect(_i32x4_min_u_i32x4_max_s).not.toBeUndefined();
        let _i32x4_min_u_i32x4_max_s_result = module.invoke(_i32x4_min_u_i32x4_max_s, 0, 0, 0);
        expect(_i32x4_min_u_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_u-i32x4.min_u (instance 0)", () => {
        let _i32x4_min_u_i32x4_min_u = module.getExport("i32x4.min_u-i32x4.min_u");
        expect(_i32x4_min_u_i32x4_min_u).not.toBeUndefined();
        let _i32x4_min_u_i32x4_min_u_result = module.invoke(_i32x4_min_u_i32x4_min_u, 0, 0, 0);
        expect(_i32x4_min_u_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_u-i32x4.min_s (instance 0)", () => {
        let _i32x4_min_u_i32x4_min_s = module.getExport("i32x4.min_u-i32x4.min_s");
        expect(_i32x4_min_u_i32x4_min_s).not.toBeUndefined();
        let _i32x4_min_u_i32x4_min_s_result = module.invoke(_i32x4_min_u_i32x4_min_s, 0, 0, 0);
        expect(_i32x4_min_u_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.min_u-i32x4.abs (instance 0)", () => {
        let _i32x4_min_u_i32x4_abs = module.getExport("i32x4.min_u-i32x4.abs");
        expect(_i32x4_min_u_i32x4_abs).not.toBeUndefined();
        let _i32x4_min_u_i32x4_abs_result = module.invoke(_i32x4_min_u_i32x4_abs, 0, 0);
        expect(_i32x4_min_u_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.abs-i32x4.min_u (instance 0)", () => {
        let _i32x4_abs_i32x4_min_u = module.getExport("i32x4.abs-i32x4.min_u");
        expect(_i32x4_abs_i32x4_min_u).not.toBeUndefined();
        let _i32x4_abs_i32x4_min_u_result = module.invoke(_i32x4_abs_i32x4_min_u, 0, 0);
        expect(_i32x4_abs_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_s-i32x4.max_u (instance 0)", () => {
        let _i32x4_max_s_i32x4_max_u = module.getExport("i32x4.max_s-i32x4.max_u");
        expect(_i32x4_max_s_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_s_i32x4_max_u_result = module.invoke(_i32x4_max_s_i32x4_max_u, 0, 0, 0);
        expect(_i32x4_max_s_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_s-i32x4.max_s (instance 0)", () => {
        let _i32x4_max_s_i32x4_max_s = module.getExport("i32x4.max_s-i32x4.max_s");
        expect(_i32x4_max_s_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_s_i32x4_max_s_result = module.invoke(_i32x4_max_s_i32x4_max_s, 0, 0, 0);
        expect(_i32x4_max_s_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_s-i32x4.min_u (instance 0)", () => {
        let _i32x4_max_s_i32x4_min_u = module.getExport("i32x4.max_s-i32x4.min_u");
        expect(_i32x4_max_s_i32x4_min_u).not.toBeUndefined();
        let _i32x4_max_s_i32x4_min_u_result = module.invoke(_i32x4_max_s_i32x4_min_u, 0, 0, 0);
        expect(_i32x4_max_s_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_s-i32x4.min_s (instance 0)", () => {
        let _i32x4_max_s_i32x4_min_s = module.getExport("i32x4.max_s-i32x4.min_s");
        expect(_i32x4_max_s_i32x4_min_s).not.toBeUndefined();
        let _i32x4_max_s_i32x4_min_s_result = module.invoke(_i32x4_max_s_i32x4_min_s, 0, 0, 0);
        expect(_i32x4_max_s_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_s-i32x4.abs (instance 0)", () => {
        let _i32x4_max_s_i32x4_abs = module.getExport("i32x4.max_s-i32x4.abs");
        expect(_i32x4_max_s_i32x4_abs).not.toBeUndefined();
        let _i32x4_max_s_i32x4_abs_result = module.invoke(_i32x4_max_s_i32x4_abs, 0, 0);
        expect(_i32x4_max_s_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.abs-i32x4.max_s (instance 0)", () => {
        let _i32x4_abs_i32x4_max_s = module.getExport("i32x4.abs-i32x4.max_s");
        expect(_i32x4_abs_i32x4_max_s).not.toBeUndefined();
        let _i32x4_abs_i32x4_max_s_result = module.invoke(_i32x4_abs_i32x4_max_s, 0, 0);
        expect(_i32x4_abs_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_u-i32x4.max_u (instance 0)", () => {
        let _i32x4_max_u_i32x4_max_u = module.getExport("i32x4.max_u-i32x4.max_u");
        expect(_i32x4_max_u_i32x4_max_u).not.toBeUndefined();
        let _i32x4_max_u_i32x4_max_u_result = module.invoke(_i32x4_max_u_i32x4_max_u, 0, 0, 0);
        expect(_i32x4_max_u_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_u-i32x4.max_s (instance 0)", () => {
        let _i32x4_max_u_i32x4_max_s = module.getExport("i32x4.max_u-i32x4.max_s");
        expect(_i32x4_max_u_i32x4_max_s).not.toBeUndefined();
        let _i32x4_max_u_i32x4_max_s_result = module.invoke(_i32x4_max_u_i32x4_max_s, 0, 0, 0);
        expect(_i32x4_max_u_i32x4_max_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_u-i32x4.min_u (instance 0)", () => {
        let _i32x4_max_u_i32x4_min_u = module.getExport("i32x4.max_u-i32x4.min_u");
        expect(_i32x4_max_u_i32x4_min_u).not.toBeUndefined();
        let _i32x4_max_u_i32x4_min_u_result = module.invoke(_i32x4_max_u_i32x4_min_u, 0, 0, 0);
        expect(_i32x4_max_u_i32x4_min_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_u-i32x4.min_s (instance 0)", () => {
        let _i32x4_max_u_i32x4_min_s = module.getExport("i32x4.max_u-i32x4.min_s");
        expect(_i32x4_max_u_i32x4_min_s).not.toBeUndefined();
        let _i32x4_max_u_i32x4_min_s_result = module.invoke(_i32x4_max_u_i32x4_min_s, 0, 0, 0);
        expect(_i32x4_max_u_i32x4_min_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.max_u-i32x4.abs (instance 0)", () => {
        let _i32x4_max_u_i32x4_abs = module.getExport("i32x4.max_u-i32x4.abs");
        expect(_i32x4_max_u_i32x4_abs).not.toBeUndefined();
        let _i32x4_max_u_i32x4_abs_result = module.invoke(_i32x4_max_u_i32x4_abs, 0, 0);
        expect(_i32x4_max_u_i32x4_abs_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.abs-i32x4.max_u (instance 0)", () => {
        let _i32x4_abs_i32x4_max_u = module.getExport("i32x4.abs-i32x4.max_u");
        expect(_i32x4_abs_i32x4_max_u).not.toBeUndefined();
        let _i32x4_abs_i32x4_max_u_result = module.invoke(_i32x4_abs_i32x4_max_u, 0, 0);
        expect(_i32x4_abs_i32x4_max_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_arith2_27: i32x4.abs-i32x4.abs (instance 0)", () => {
        let _i32x4_abs_i32x4_abs = module.getExport("i32x4.abs-i32x4.abs");
        expect(_i32x4_abs_i32x4_abs).not.toBeUndefined();
        let _i32x4_abs_i32x4_abs_result = module.invoke(_i32x4_abs_i32x4_abs, 0);
        expect(_i32x4_abs_i32x4_abs_result).toBe(0);
    });
});
