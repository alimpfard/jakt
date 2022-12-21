let globalImportObject = {};
let namedModules = {};

describe("simd_int_to_int_extend_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_int_to_int_extend_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 0)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 1)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 2)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 3)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 4)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 5)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 6)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 7)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 8)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 9)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 10)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 11)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 12)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 13)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 14)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 15)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 16)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 17)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_s (instance 18)", () => {
        let _i16x8_extend_high_i8x16_s = module.getExport("i16x8.extend_high_i8x16_s");
        expect(_i16x8_extend_high_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_s_result = module.invoke(_i16x8_extend_high_i8x16_s, 0);
        expect(_i16x8_extend_high_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 0)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 1)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 2)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 3)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 4)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 5)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 6)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 7)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 8)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 9)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 10)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 11)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 12)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 13)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 14)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 15)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 16)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 17)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_high_i8x16_u (instance 18)", () => {
        let _i16x8_extend_high_i8x16_u = module.getExport("i16x8.extend_high_i8x16_u");
        expect(_i16x8_extend_high_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_high_i8x16_u_result = module.invoke(_i16x8_extend_high_i8x16_u, 0);
        expect(_i16x8_extend_high_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 0)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 1)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 2)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 3)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 4)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 5)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 6)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 7)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 8)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 9)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 10)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 11)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 12)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 13)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 14)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 15)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 16)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 17)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_s (instance 18)", () => {
        let _i16x8_extend_low_i8x16_s = module.getExport("i16x8.extend_low_i8x16_s");
        expect(_i16x8_extend_low_i8x16_s).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_s_result = module.invoke(_i16x8_extend_low_i8x16_s, 0);
        expect(_i16x8_extend_low_i8x16_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 0)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 1)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 2)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 3)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 4)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 5)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 6)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 7)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 8)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 9)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 10)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 11)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 12)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 13)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 14)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 15)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 16)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 17)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i16x8.extend_low_i8x16_u (instance 18)", () => {
        let _i16x8_extend_low_i8x16_u = module.getExport("i16x8.extend_low_i8x16_u");
        expect(_i16x8_extend_low_i8x16_u).not.toBeUndefined();
        let _i16x8_extend_low_i8x16_u_result = module.invoke(_i16x8_extend_low_i8x16_u, 0);
        expect(_i16x8_extend_low_i8x16_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 0)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 1)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 2)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 3)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 4)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 5)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 6)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 7)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 8)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 9)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 10)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 11)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 12)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 13)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 14)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 15)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 16)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 17)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_s (instance 18)", () => {
        let _i32x4_extend_high_i16x8_s = module.getExport("i32x4.extend_high_i16x8_s");
        expect(_i32x4_extend_high_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_s_result = module.invoke(_i32x4_extend_high_i16x8_s, 0);
        expect(_i32x4_extend_high_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 0)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 1)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 2)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 3)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 4)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 5)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 6)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 7)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 8)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 9)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 10)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 11)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 12)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 13)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 14)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 15)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 16)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 17)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_high_i16x8_u (instance 18)", () => {
        let _i32x4_extend_high_i16x8_u = module.getExport("i32x4.extend_high_i16x8_u");
        expect(_i32x4_extend_high_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_high_i16x8_u_result = module.invoke(_i32x4_extend_high_i16x8_u, 0);
        expect(_i32x4_extend_high_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 0)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 1)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 2)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 3)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 4)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 5)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 6)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 7)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 8)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 9)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 10)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 11)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 12)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 13)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 14)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 15)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 16)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 17)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_s (instance 18)", () => {
        let _i32x4_extend_low_i16x8_s = module.getExport("i32x4.extend_low_i16x8_s");
        expect(_i32x4_extend_low_i16x8_s).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_s_result = module.invoke(_i32x4_extend_low_i16x8_s, 0);
        expect(_i32x4_extend_low_i16x8_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 0)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 1)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 2)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 3)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 4)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 5)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 6)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 7)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 8)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 9)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 10)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 11)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 12)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 13)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 14)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 15)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 16)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 17)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i32x4.extend_low_i16x8_u (instance 18)", () => {
        let _i32x4_extend_low_i16x8_u = module.getExport("i32x4.extend_low_i16x8_u");
        expect(_i32x4_extend_low_i16x8_u).not.toBeUndefined();
        let _i32x4_extend_low_i16x8_u_result = module.invoke(_i32x4_extend_low_i16x8_u, 0);
        expect(_i32x4_extend_low_i16x8_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 0)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 1)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 2)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 3)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 4)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 5)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 6)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 7)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 8)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 9)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 10)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 11)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 12)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 13)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 14)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 15)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 16)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 17)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_s (instance 18)", () => {
        let _i64x2_extend_high_i32x4_s = module.getExport("i64x2.extend_high_i32x4_s");
        expect(_i64x2_extend_high_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_s_result = module.invoke(_i64x2_extend_high_i32x4_s, 0);
        expect(_i64x2_extend_high_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 0)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 1)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 2)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 3)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 4)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 5)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 6)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 7)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 8)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 9)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 10)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 11)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 12)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 13)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 14)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 15)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 16)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 17)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_high_i32x4_u (instance 18)", () => {
        let _i64x2_extend_high_i32x4_u = module.getExport("i64x2.extend_high_i32x4_u");
        expect(_i64x2_extend_high_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_high_i32x4_u_result = module.invoke(_i64x2_extend_high_i32x4_u, 0);
        expect(_i64x2_extend_high_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 0)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 1)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 2)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 3)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 4)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 5)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 6)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 7)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 8)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 9)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 10)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 11)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 12)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 13)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 14)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 15)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 16)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 17)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_s (instance 18)", () => {
        let _i64x2_extend_low_i32x4_s = module.getExport("i64x2.extend_low_i32x4_s");
        expect(_i64x2_extend_low_i32x4_s).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_s_result = module.invoke(_i64x2_extend_low_i32x4_s, 0);
        expect(_i64x2_extend_low_i32x4_s_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 0)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 1)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 2)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 3)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 4)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 5)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 6)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 7)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 8)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 9)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 10)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 11)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 12)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 13)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 14)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 15)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 16)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 17)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });

    _test("execution of simd_int_to_int_extend_0: i64x2.extend_low_i32x4_u (instance 18)", () => {
        let _i64x2_extend_low_i32x4_u = module.getExport("i64x2.extend_low_i32x4_u");
        expect(_i64x2_extend_low_i32x4_u).not.toBeUndefined();
        let _i64x2_extend_low_i32x4_u_result = module.invoke(_i64x2_extend_low_i32x4_u, 0);
        expect(_i64x2_extend_low_i32x4_u_result).toBe(0);
    });
});

describe("simd_int_to_int_extend_1", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_2", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_3", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_4", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_5", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_6", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_7", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_8", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_9", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_10", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_11", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_12", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_13", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_14", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_15", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_16", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_17", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_18", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_19", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_20", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_21", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_22", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_23", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_int_to_int_extend_24", () => {
    let _test = test;

    _test("execution of simd_int_to_int_extend_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
