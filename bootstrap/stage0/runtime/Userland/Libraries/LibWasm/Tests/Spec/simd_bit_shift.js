let globalImportObject = {};
let namedModules = {};

describe("simd_bit_shift_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_bit_shift_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 0)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 1);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 1)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 4);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 2)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 8);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 3)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 32);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 4)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 128);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 5)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 256);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 6)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 9);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 7)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 9);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 8)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 17);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 9)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 33);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 10)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 129);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 11)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 257);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 12)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 513);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl (instance 13)", () => {
        let _i8x16_shl = module.getExport("i8x16.shl");
        expect(_i8x16_shl).not.toBeUndefined();
        let _i8x16_shl_result = module.invoke(_i8x16_shl, 0, 514);
        expect(_i8x16_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 0)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 1);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 1)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 4);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 2)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 8);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 3)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 32);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 4)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 128);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 5)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 256);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 6)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 9);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 7)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 9);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 8)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 17);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 9)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 33);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 10)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 129);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 11)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 257);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 12)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 513);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u (instance 13)", () => {
        let _i8x16_shr_u = module.getExport("i8x16.shr_u");
        expect(_i8x16_shr_u).not.toBeUndefined();
        let _i8x16_shr_u_result = module.invoke(_i8x16_shr_u, 0, 514);
        expect(_i8x16_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 0)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 1);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 1)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 4);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 2)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 8);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 3)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 32);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 4)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 128);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 5)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 256);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 6)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 9);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 7)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 9);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 8)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 17);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 9)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 33);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 10)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 129);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 11)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 257);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 12)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 513);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s (instance 13)", () => {
        let _i8x16_shr_s = module.getExport("i8x16.shr_s");
        expect(_i8x16_shr_s).not.toBeUndefined();
        let _i8x16_shr_s_result = module.invoke(_i8x16_shr_s, 0, 514);
        expect(_i8x16_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shl_1 (instance 0)", () => {
        let _i8x16_shl_1 = module.getExport("i8x16.shl_1");
        expect(_i8x16_shl_1).not.toBeUndefined();
        let _i8x16_shl_1_result = module.invoke(_i8x16_shl_1, 0);
        expect(_i8x16_shl_1_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_u_8 (instance 0)", () => {
        let _i8x16_shr_u_8 = module.getExport("i8x16.shr_u_8");
        expect(_i8x16_shr_u_8).not.toBeUndefined();
        let _i8x16_shr_u_8_result = module.invoke(_i8x16_shr_u_8, 0);
        expect(_i8x16_shr_u_8_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i8x16.shr_s_9 (instance 0)", () => {
        let _i8x16_shr_s_9 = module.getExport("i8x16.shr_s_9");
        expect(_i8x16_shr_s_9).not.toBeUndefined();
        let _i8x16_shr_s_9_result = module.invoke(_i8x16_shr_s_9, 0);
        expect(_i8x16_shr_s_9_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 0)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 1);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 1)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 2);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 2)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 2);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 3)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 4);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 4)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 8);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 5)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 32);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 6)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 128);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 7)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 256);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 8)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 17);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 9)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 17);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 10)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 33);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 11)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 129);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 12)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 257);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 13)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 513);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl (instance 14)", () => {
        let _i16x8_shl = module.getExport("i16x8.shl");
        expect(_i16x8_shl).not.toBeUndefined();
        let _i16x8_shl_result = module.invoke(_i16x8_shl, 0, 514);
        expect(_i16x8_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 0)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 1);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 1)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 2);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 2)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 2);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 3)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 4);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 4)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 8);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 5)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 32);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 6)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 128);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 7)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 256);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 8)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 17);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 9)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 17);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 10)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 33);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 11)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 129);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 12)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 257);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 13)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 513);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u (instance 14)", () => {
        let _i16x8_shr_u = module.getExport("i16x8.shr_u");
        expect(_i16x8_shr_u).not.toBeUndefined();
        let _i16x8_shr_u_result = module.invoke(_i16x8_shr_u, 0, 514);
        expect(_i16x8_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 0)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 1);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 1)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 2);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 2)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 2);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 3)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 4);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 4)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 8);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 5)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 32);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 6)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 128);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 7)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 256);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 8)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 17);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 9)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 17);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 10)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 33);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 11)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 129);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 12)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 257);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 13)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 513);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s (instance 14)", () => {
        let _i16x8_shr_s = module.getExport("i16x8.shr_s");
        expect(_i16x8_shr_s).not.toBeUndefined();
        let _i16x8_shr_s_result = module.invoke(_i16x8_shr_s, 0, 514);
        expect(_i16x8_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shl_1 (instance 0)", () => {
        let _i16x8_shl_1 = module.getExport("i16x8.shl_1");
        expect(_i16x8_shl_1).not.toBeUndefined();
        let _i16x8_shl_1_result = module.invoke(_i16x8_shl_1, 0);
        expect(_i16x8_shl_1_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_u_16 (instance 0)", () => {
        let _i16x8_shr_u_16 = module.getExport("i16x8.shr_u_16");
        expect(_i16x8_shr_u_16).not.toBeUndefined();
        let _i16x8_shr_u_16_result = module.invoke(_i16x8_shr_u_16, 0);
        expect(_i16x8_shr_u_16_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i16x8.shr_s_17 (instance 0)", () => {
        let _i16x8_shr_s_17 = module.getExport("i16x8.shr_s_17");
        expect(_i16x8_shr_s_17).not.toBeUndefined();
        let _i16x8_shr_s_17_result = module.invoke(_i16x8_shr_s_17, 0);
        expect(_i16x8_shr_s_17_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 0)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 1);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 1)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 2);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 2)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 2);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 3)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 4);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 4)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 8);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 5)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 32);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 6)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 128);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 7)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 256);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 8)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 33);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 9)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 33);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 10)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 65);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 11)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 129);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 12)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 257);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 13)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 513);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl (instance 14)", () => {
        let _i32x4_shl = module.getExport("i32x4.shl");
        expect(_i32x4_shl).not.toBeUndefined();
        let _i32x4_shl_result = module.invoke(_i32x4_shl, 0, 514);
        expect(_i32x4_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 0)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 1);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 1)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 2);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 2)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 2);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 3)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 4);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 4)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 8);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 5)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 32);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 6)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 128);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 7)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 256);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 8)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 33);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 9)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 33);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 10)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 65);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 11)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 129);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 12)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 257);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 13)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 513);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u (instance 14)", () => {
        let _i32x4_shr_u = module.getExport("i32x4.shr_u");
        expect(_i32x4_shr_u).not.toBeUndefined();
        let _i32x4_shr_u_result = module.invoke(_i32x4_shr_u, 0, 514);
        expect(_i32x4_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 0)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 1);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 1)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 2);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 2)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 2);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 3)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 4);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 4)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 8);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 5)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 32);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 6)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 128);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 7)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 256);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 8)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 33);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 9)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 33);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 10)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 65);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 11)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 129);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 12)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 257);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 13)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 513);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s (instance 14)", () => {
        let _i32x4_shr_s = module.getExport("i32x4.shr_s");
        expect(_i32x4_shr_s).not.toBeUndefined();
        let _i32x4_shr_s_result = module.invoke(_i32x4_shr_s, 0, 514);
        expect(_i32x4_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shl_1 (instance 0)", () => {
        let _i32x4_shl_1 = module.getExport("i32x4.shl_1");
        expect(_i32x4_shl_1).not.toBeUndefined();
        let _i32x4_shl_1_result = module.invoke(_i32x4_shl_1, 0);
        expect(_i32x4_shl_1_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_u_32 (instance 0)", () => {
        let _i32x4_shr_u_32 = module.getExport("i32x4.shr_u_32");
        expect(_i32x4_shr_u_32).not.toBeUndefined();
        let _i32x4_shr_u_32_result = module.invoke(_i32x4_shr_u_32, 0);
        expect(_i32x4_shr_u_32_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i32x4.shr_s_33 (instance 0)", () => {
        let _i32x4_shr_s_33 = module.getExport("i32x4.shr_s_33");
        expect(_i32x4_shr_s_33).not.toBeUndefined();
        let _i32x4_shr_s_33_result = module.invoke(_i32x4_shr_s_33, 0);
        expect(_i32x4_shr_s_33_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 0)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 1);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 1)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 2);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 2)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 2);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 3)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 4);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 4)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 8);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 5)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 16);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 6)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 32);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 7)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 128);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 8)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 256);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 9)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 65);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 10)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 129);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 11)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 257);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 12)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 513);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl (instance 13)", () => {
        let _i64x2_shl = module.getExport("i64x2.shl");
        expect(_i64x2_shl).not.toBeUndefined();
        let _i64x2_shl_result = module.invoke(_i64x2_shl, 0, 514);
        expect(_i64x2_shl_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 0)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 1);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 1)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 2);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 2)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 2);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 3)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 4);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 4)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 8);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 5)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 16);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 6)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 32);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 7)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 128);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 8)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 256);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 9)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 65);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 10)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 129);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 11)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 257);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 12)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 513);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u (instance 13)", () => {
        let _i64x2_shr_u = module.getExport("i64x2.shr_u");
        expect(_i64x2_shr_u).not.toBeUndefined();
        let _i64x2_shr_u_result = module.invoke(_i64x2_shr_u, 0, 514);
        expect(_i64x2_shr_u_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 0)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 1);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 1)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 2);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 2)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 2);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 3)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 4);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 4)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 8);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 5)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 16);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 6)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 32);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 7)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 128);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 8)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 256);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 9)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 65);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 10)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 65);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 11)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 129);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 12)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 257);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 13)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 513);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s (instance 14)", () => {
        let _i64x2_shr_s = module.getExport("i64x2.shr_s");
        expect(_i64x2_shr_s).not.toBeUndefined();
        let _i64x2_shr_s_result = module.invoke(_i64x2_shr_s, 0, 514);
        expect(_i64x2_shr_s_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shl_1 (instance 0)", () => {
        let _i64x2_shl_1 = module.getExport("i64x2.shl_1");
        expect(_i64x2_shl_1).not.toBeUndefined();
        let _i64x2_shl_1_result = module.invoke(_i64x2_shl_1, 0);
        expect(_i64x2_shl_1_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_u_64 (instance 0)", () => {
        let _i64x2_shr_u_64 = module.getExport("i64x2.shr_u_64");
        expect(_i64x2_shr_u_64).not.toBeUndefined();
        let _i64x2_shr_u_64_result = module.invoke(_i64x2_shr_u_64, 0);
        expect(_i64x2_shr_u_64_result).toBe(0);
    });

    _test("execution of simd_bit_shift_0: i64x2.shr_s_65 (instance 0)", () => {
        let _i64x2_shr_s_65 = module.getExport("i64x2.shr_s_65");
        expect(_i64x2_shr_s_65).not.toBeUndefined();
        let _i64x2_shr_s_65_result = module.invoke(_i64x2_shr_s_65, 0);
        expect(_i64x2_shr_s_65_result).toBe(0);
    });
});

describe("simd_bit_shift_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_bit_shift_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_bit_shift_1: i8x16.shl-in-block (instance 0)", () => {
        let _i8x16_shl_in_block = module.getExport("i8x16.shl-in-block");
        expect(_i8x16_shl_in_block).not.toBeUndefined();
        let _i8x16_shl_in_block_result = module.invoke(_i8x16_shl_in_block);
    });

    _test("execution of simd_bit_shift_1: i8x16.shr_s-in-block (instance 0)", () => {
        let _i8x16_shr_s_in_block = module.getExport("i8x16.shr_s-in-block");
        expect(_i8x16_shr_s_in_block).not.toBeUndefined();
        let _i8x16_shr_s_in_block_result = module.invoke(_i8x16_shr_s_in_block);
    });

    _test("execution of simd_bit_shift_1: i8x16.shr_u-in-block (instance 0)", () => {
        let _i8x16_shr_u_in_block = module.getExport("i8x16.shr_u-in-block");
        expect(_i8x16_shr_u_in_block).not.toBeUndefined();
        let _i8x16_shr_u_in_block_result = module.invoke(_i8x16_shr_u_in_block);
    });

    _test("execution of simd_bit_shift_1: i16x8.shl-in-block (instance 0)", () => {
        let _i16x8_shl_in_block = module.getExport("i16x8.shl-in-block");
        expect(_i16x8_shl_in_block).not.toBeUndefined();
        let _i16x8_shl_in_block_result = module.invoke(_i16x8_shl_in_block);
    });

    _test("execution of simd_bit_shift_1: i16x8.shr_s-in-block (instance 0)", () => {
        let _i16x8_shr_s_in_block = module.getExport("i16x8.shr_s-in-block");
        expect(_i16x8_shr_s_in_block).not.toBeUndefined();
        let _i16x8_shr_s_in_block_result = module.invoke(_i16x8_shr_s_in_block);
    });

    _test("execution of simd_bit_shift_1: i16x8.shr_u-in-block (instance 0)", () => {
        let _i16x8_shr_u_in_block = module.getExport("i16x8.shr_u-in-block");
        expect(_i16x8_shr_u_in_block).not.toBeUndefined();
        let _i16x8_shr_u_in_block_result = module.invoke(_i16x8_shr_u_in_block);
    });

    _test("execution of simd_bit_shift_1: i32x4.shl-in-block (instance 0)", () => {
        let _i32x4_shl_in_block = module.getExport("i32x4.shl-in-block");
        expect(_i32x4_shl_in_block).not.toBeUndefined();
        let _i32x4_shl_in_block_result = module.invoke(_i32x4_shl_in_block);
    });

    _test("execution of simd_bit_shift_1: i32x4.shr_s-in-block (instance 0)", () => {
        let _i32x4_shr_s_in_block = module.getExport("i32x4.shr_s-in-block");
        expect(_i32x4_shr_s_in_block).not.toBeUndefined();
        let _i32x4_shr_s_in_block_result = module.invoke(_i32x4_shr_s_in_block);
    });

    _test("execution of simd_bit_shift_1: i32x4.shr_u-in-block (instance 0)", () => {
        let _i32x4_shr_u_in_block = module.getExport("i32x4.shr_u-in-block");
        expect(_i32x4_shr_u_in_block).not.toBeUndefined();
        let _i32x4_shr_u_in_block_result = module.invoke(_i32x4_shr_u_in_block);
    });

    _test("execution of simd_bit_shift_1: i64x2.shl-in-block (instance 0)", () => {
        let _i64x2_shl_in_block = module.getExport("i64x2.shl-in-block");
        expect(_i64x2_shl_in_block).not.toBeUndefined();
        let _i64x2_shl_in_block_result = module.invoke(_i64x2_shl_in_block);
    });

    _test("execution of simd_bit_shift_1: i64x2.shr_s-in-block (instance 0)", () => {
        let _i64x2_shr_s_in_block = module.getExport("i64x2.shr_s-in-block");
        expect(_i64x2_shr_s_in_block).not.toBeUndefined();
        let _i64x2_shr_s_in_block_result = module.invoke(_i64x2_shr_s_in_block);
    });

    _test("execution of simd_bit_shift_1: i64x2.shr_u-in-block (instance 0)", () => {
        let _i64x2_shr_u_in_block = module.getExport("i64x2.shr_u-in-block");
        expect(_i64x2_shr_u_in_block).not.toBeUndefined();
        let _i64x2_shr_u_in_block_result = module.invoke(_i64x2_shr_u_in_block);
    });

    _test("execution of simd_bit_shift_1: nested-i8x16.shl (instance 0)", () => {
        let _nested_i8x16_shl = module.getExport("nested-i8x16.shl");
        expect(_nested_i8x16_shl).not.toBeUndefined();
        let _nested_i8x16_shl_result = module.invoke(_nested_i8x16_shl);
    });

    _test("execution of simd_bit_shift_1: nested-i8x16.shr_s (instance 0)", () => {
        let _nested_i8x16_shr_s = module.getExport("nested-i8x16.shr_s");
        expect(_nested_i8x16_shr_s).not.toBeUndefined();
        let _nested_i8x16_shr_s_result = module.invoke(_nested_i8x16_shr_s);
    });

    _test("execution of simd_bit_shift_1: nested-i8x16.shr_u (instance 0)", () => {
        let _nested_i8x16_shr_u = module.getExport("nested-i8x16.shr_u");
        expect(_nested_i8x16_shr_u).not.toBeUndefined();
        let _nested_i8x16_shr_u_result = module.invoke(_nested_i8x16_shr_u);
    });

    _test("execution of simd_bit_shift_1: nested-i16x8.shl (instance 0)", () => {
        let _nested_i16x8_shl = module.getExport("nested-i16x8.shl");
        expect(_nested_i16x8_shl).not.toBeUndefined();
        let _nested_i16x8_shl_result = module.invoke(_nested_i16x8_shl);
    });

    _test("execution of simd_bit_shift_1: nested-i16x8.shr_s (instance 0)", () => {
        let _nested_i16x8_shr_s = module.getExport("nested-i16x8.shr_s");
        expect(_nested_i16x8_shr_s).not.toBeUndefined();
        let _nested_i16x8_shr_s_result = module.invoke(_nested_i16x8_shr_s);
    });

    _test("execution of simd_bit_shift_1: nested-i16x8.shr_u (instance 0)", () => {
        let _nested_i16x8_shr_u = module.getExport("nested-i16x8.shr_u");
        expect(_nested_i16x8_shr_u).not.toBeUndefined();
        let _nested_i16x8_shr_u_result = module.invoke(_nested_i16x8_shr_u);
    });

    _test("execution of simd_bit_shift_1: nested-i32x4.shl (instance 0)", () => {
        let _nested_i32x4_shl = module.getExport("nested-i32x4.shl");
        expect(_nested_i32x4_shl).not.toBeUndefined();
        let _nested_i32x4_shl_result = module.invoke(_nested_i32x4_shl);
    });

    _test("execution of simd_bit_shift_1: nested-i32x4.shr_s (instance 0)", () => {
        let _nested_i32x4_shr_s = module.getExport("nested-i32x4.shr_s");
        expect(_nested_i32x4_shr_s).not.toBeUndefined();
        let _nested_i32x4_shr_s_result = module.invoke(_nested_i32x4_shr_s);
    });

    _test("execution of simd_bit_shift_1: nested-i32x4.shr_u (instance 0)", () => {
        let _nested_i32x4_shr_u = module.getExport("nested-i32x4.shr_u");
        expect(_nested_i32x4_shr_u).not.toBeUndefined();
        let _nested_i32x4_shr_u_result = module.invoke(_nested_i32x4_shr_u);
    });

    _test("execution of simd_bit_shift_1: nested-i64x2.shl (instance 0)", () => {
        let _nested_i64x2_shl = module.getExport("nested-i64x2.shl");
        expect(_nested_i64x2_shl).not.toBeUndefined();
        let _nested_i64x2_shl_result = module.invoke(_nested_i64x2_shl);
    });

    _test("execution of simd_bit_shift_1: nested-i64x2.shr_s (instance 0)", () => {
        let _nested_i64x2_shr_s = module.getExport("nested-i64x2.shr_s");
        expect(_nested_i64x2_shr_s).not.toBeUndefined();
        let _nested_i64x2_shr_s_result = module.invoke(_nested_i64x2_shr_s);
    });

    _test("execution of simd_bit_shift_1: nested-i64x2.shr_u (instance 0)", () => {
        let _nested_i64x2_shr_u = module.getExport("nested-i64x2.shr_u");
        expect(_nested_i64x2_shr_u).not.toBeUndefined();
        let _nested_i64x2_shr_u_result = module.invoke(_nested_i64x2_shr_u);
    });
});

describe("simd_bit_shift_2", () => {
    let _test = test;

    _test("execution of simd_bit_shift_2: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_3", () => {
    let _test = test;

    _test("execution of simd_bit_shift_3: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_4", () => {
    let _test = test;

    _test("execution of simd_bit_shift_4: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_5", () => {
    let _test = test;

    _test("execution of simd_bit_shift_5: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_6", () => {
    let _test = test;

    _test("execution of simd_bit_shift_6: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_7", () => {
    let _test = test;

    _test("execution of simd_bit_shift_7: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_8", () => {
    let _test = test;

    _test("execution of simd_bit_shift_8: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_9", () => {
    let _test = test;

    _test("execution of simd_bit_shift_9: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_10", () => {
    let _test = test;

    _test("execution of simd_bit_shift_10: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_11", () => {
    let _test = test;

    _test("execution of simd_bit_shift_11: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_12", () => {
    let _test = test;

    _test("execution of simd_bit_shift_12: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_13", () => {
    let _test = test;

    _test("execution of simd_bit_shift_13: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_14", () => {
    let _test = test;

    _test("execution of simd_bit_shift_14: _inline_test_12 (instance 0)", () => {});
});

describe("simd_bit_shift_15", () => {
    let _test = test;

    _test("execution of simd_bit_shift_15: _inline_test_13 (instance 0)", () => {});
});

describe("simd_bit_shift_16", () => {
    let _test = test;

    _test("execution of simd_bit_shift_16: _inline_test_14 (instance 0)", () => {});
});

describe("simd_bit_shift_17", () => {
    let _test = test;

    _test("execution of simd_bit_shift_17: _inline_test_15 (instance 0)", () => {});
});

describe("simd_bit_shift_18", () => {
    let _test = test;

    _test("execution of simd_bit_shift_18: _inline_test_16 (instance 0)", () => {});
});

describe("simd_bit_shift_19", () => {
    let _test = test;

    _test("execution of simd_bit_shift_19: _inline_test_17 (instance 0)", () => {});
});

describe("simd_bit_shift_20", () => {
    let _test = test;

    _test("execution of simd_bit_shift_20: _inline_test_18 (instance 0)", () => {});
});

describe("simd_bit_shift_21", () => {
    let _test = test;

    _test("execution of simd_bit_shift_21: _inline_test_19 (instance 0)", () => {});
});

describe("simd_bit_shift_22", () => {
    let _test = test;

    _test("execution of simd_bit_shift_22: _inline_test_20 (instance 0)", () => {});
});

describe("simd_bit_shift_23", () => {
    let _test = test;

    _test("execution of simd_bit_shift_23: _inline_test_21 (instance 0)", () => {});
});

describe("simd_bit_shift_24", () => {
    let _test = test;

    _test("execution of simd_bit_shift_24: _inline_test_22 (instance 0)", () => {});
});

describe("simd_bit_shift_25", () => {
    let _test = test;

    _test("execution of simd_bit_shift_25: _inline_test_23 (instance 0)", () => {});
});

describe("simd_bit_shift_26", () => {
    let _test = test;

    _test("execution of simd_bit_shift_26: _inline_test_24 (instance 0)", () => {});
});

describe("simd_bit_shift_27", () => {
    let _test = test;

    _test("execution of simd_bit_shift_27: _inline_test_25 (instance 0)", () => {});
});

describe("simd_bit_shift_28", () => {
    let _test = test;

    _test("execution of simd_bit_shift_28: _inline_test_26 (instance 0)", () => {});
});

describe("simd_bit_shift_29", () => {
    let _test = test;

    _test("execution of simd_bit_shift_29: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_30", () => {
    let _test = test;

    _test("execution of simd_bit_shift_30: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_31", () => {
    let _test = test;

    _test("execution of simd_bit_shift_31: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_32", () => {
    let _test = test;

    _test("execution of simd_bit_shift_32: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_33", () => {
    let _test = test;

    _test("execution of simd_bit_shift_33: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_34", () => {
    let _test = test;

    _test("execution of simd_bit_shift_34: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_35", () => {
    let _test = test;

    _test("execution of simd_bit_shift_35: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_36", () => {
    let _test = test;

    _test("execution of simd_bit_shift_36: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_37", () => {
    let _test = test;

    _test("execution of simd_bit_shift_37: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_38", () => {
    let _test = test;

    _test("execution of simd_bit_shift_38: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_39", () => {
    let _test = test;

    _test("execution of simd_bit_shift_39: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bit_shift_40", () => {
    let _test = test;

    _test("execution of simd_bit_shift_40: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
