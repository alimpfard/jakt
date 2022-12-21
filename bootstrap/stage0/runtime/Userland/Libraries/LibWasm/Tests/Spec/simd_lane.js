let globalImportObject = {};
let namedModules = {};

describe("simd_lane_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_lane_0: i8x16_extract_lane_s-first (instance 0)", () => {
        let _i8x16_extract_lane_s_first = module.getExport("i8x16_extract_lane_s-first");
        expect(_i8x16_extract_lane_s_first).not.toBeUndefined();
        let _i8x16_extract_lane_s_first_result = module.invoke(_i8x16_extract_lane_s_first, 0);
        expect(_i8x16_extract_lane_s_first_result).toBe(127);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_s-first (instance 1)", () => {
        let _i8x16_extract_lane_s_first = module.getExport("i8x16_extract_lane_s-first");
        expect(_i8x16_extract_lane_s_first).not.toBeUndefined();
        let _i8x16_extract_lane_s_first_result = module.invoke(_i8x16_extract_lane_s_first, 0);
        expect(_i8x16_extract_lane_s_first_result).toBe(127);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_s-first (instance 2)", () => {
        let _i8x16_extract_lane_s_first = module.getExport("i8x16_extract_lane_s-first");
        expect(_i8x16_extract_lane_s_first).not.toBeUndefined();
        let _i8x16_extract_lane_s_first_result = module.invoke(_i8x16_extract_lane_s_first, 0);
        expect(_i8x16_extract_lane_s_first_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_s-first (instance 3)", () => {
        let _i8x16_extract_lane_s_first = module.getExport("i8x16_extract_lane_s-first");
        expect(_i8x16_extract_lane_s_first).not.toBeUndefined();
        let _i8x16_extract_lane_s_first_result = module.invoke(_i8x16_extract_lane_s_first, 0);
        expect(_i8x16_extract_lane_s_first_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_u-first (instance 0)", () => {
        let _i8x16_extract_lane_u_first = module.getExport("i8x16_extract_lane_u-first");
        expect(_i8x16_extract_lane_u_first).not.toBeUndefined();
        let _i8x16_extract_lane_u_first_result = module.invoke(_i8x16_extract_lane_u_first, 0);
        expect(_i8x16_extract_lane_u_first_result).toBe(255);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_u-first (instance 1)", () => {
        let _i8x16_extract_lane_u_first = module.getExport("i8x16_extract_lane_u-first");
        expect(_i8x16_extract_lane_u_first).not.toBeUndefined();
        let _i8x16_extract_lane_u_first_result = module.invoke(_i8x16_extract_lane_u_first, 0);
        expect(_i8x16_extract_lane_u_first_result).toBe(255);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_s-last (instance 0)", () => {
        let _i8x16_extract_lane_s_last = module.getExport("i8x16_extract_lane_s-last");
        expect(_i8x16_extract_lane_s_last).not.toBeUndefined();
        let _i8x16_extract_lane_s_last_result = module.invoke(_i8x16_extract_lane_s_last, 0);
        expect(_i8x16_extract_lane_s_last_result).toBe(-128);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_s-last (instance 1)", () => {
        let _i8x16_extract_lane_s_last = module.getExport("i8x16_extract_lane_s-last");
        expect(_i8x16_extract_lane_s_last).not.toBeUndefined();
        let _i8x16_extract_lane_s_last_result = module.invoke(_i8x16_extract_lane_s_last, 0);
        expect(_i8x16_extract_lane_s_last_result).toBe(-128);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_u-last (instance 0)", () => {
        let _i8x16_extract_lane_u_last = module.getExport("i8x16_extract_lane_u-last");
        expect(_i8x16_extract_lane_u_last).not.toBeUndefined();
        let _i8x16_extract_lane_u_last_result = module.invoke(_i8x16_extract_lane_u_last, 0);
        expect(_i8x16_extract_lane_u_last_result).toBe(255);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_u-last (instance 1)", () => {
        let _i8x16_extract_lane_u_last = module.getExport("i8x16_extract_lane_u-last");
        expect(_i8x16_extract_lane_u_last).not.toBeUndefined();
        let _i8x16_extract_lane_u_last_result = module.invoke(_i8x16_extract_lane_u_last, 0);
        expect(_i8x16_extract_lane_u_last_result).toBe(255);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_u-last (instance 2)", () => {
        let _i8x16_extract_lane_u_last = module.getExport("i8x16_extract_lane_u-last");
        expect(_i8x16_extract_lane_u_last).not.toBeUndefined();
        let _i8x16_extract_lane_u_last_result = module.invoke(_i8x16_extract_lane_u_last, 0);
        expect(_i8x16_extract_lane_u_last_result).toBe(128);
    });

    _test("execution of simd_lane_0: i8x16_extract_lane_u-last (instance 3)", () => {
        let _i8x16_extract_lane_u_last = module.getExport("i8x16_extract_lane_u-last");
        expect(_i8x16_extract_lane_u_last).not.toBeUndefined();
        let _i8x16_extract_lane_u_last_result = module.invoke(_i8x16_extract_lane_u_last, 0);
        expect(_i8x16_extract_lane_u_last_result).toBe(128);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-first (instance 0)", () => {
        let _i16x8_extract_lane_s_first = module.getExport("i16x8_extract_lane_s-first");
        expect(_i16x8_extract_lane_s_first).not.toBeUndefined();
        let _i16x8_extract_lane_s_first_result = module.invoke(_i16x8_extract_lane_s_first, 0);
        expect(_i16x8_extract_lane_s_first_result).toBe(32767);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-first (instance 1)", () => {
        let _i16x8_extract_lane_s_first = module.getExport("i16x8_extract_lane_s-first");
        expect(_i16x8_extract_lane_s_first).not.toBeUndefined();
        let _i16x8_extract_lane_s_first_result = module.invoke(_i16x8_extract_lane_s_first, 0);
        expect(_i16x8_extract_lane_s_first_result).toBe(32767);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-first (instance 2)", () => {
        let _i16x8_extract_lane_s_first = module.getExport("i16x8_extract_lane_s-first");
        expect(_i16x8_extract_lane_s_first).not.toBeUndefined();
        let _i16x8_extract_lane_s_first_result = module.invoke(_i16x8_extract_lane_s_first, 0);
        expect(_i16x8_extract_lane_s_first_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-first (instance 3)", () => {
        let _i16x8_extract_lane_s_first = module.getExport("i16x8_extract_lane_s-first");
        expect(_i16x8_extract_lane_s_first).not.toBeUndefined();
        let _i16x8_extract_lane_s_first_result = module.invoke(_i16x8_extract_lane_s_first, 0);
        expect(_i16x8_extract_lane_s_first_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-first (instance 4)", () => {
        let _i16x8_extract_lane_s_first = module.getExport("i16x8_extract_lane_s-first");
        expect(_i16x8_extract_lane_s_first).not.toBeUndefined();
        let _i16x8_extract_lane_s_first_result = module.invoke(_i16x8_extract_lane_s_first, 0);
        expect(_i16x8_extract_lane_s_first_result).toBe(12345);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-first (instance 5)", () => {
        let _i16x8_extract_lane_s_first = module.getExport("i16x8_extract_lane_s-first");
        expect(_i16x8_extract_lane_s_first).not.toBeUndefined();
        let _i16x8_extract_lane_s_first_result = module.invoke(_i16x8_extract_lane_s_first, 0);
        expect(_i16x8_extract_lane_s_first_result).toBe(-0x1234);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-first (instance 0)", () => {
        let _i16x8_extract_lane_u_first = module.getExport("i16x8_extract_lane_u-first");
        expect(_i16x8_extract_lane_u_first).not.toBeUndefined();
        let _i16x8_extract_lane_u_first_result = module.invoke(_i16x8_extract_lane_u_first, 0);
        expect(_i16x8_extract_lane_u_first_result).toBe(65535);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-first (instance 1)", () => {
        let _i16x8_extract_lane_u_first = module.getExport("i16x8_extract_lane_u-first");
        expect(_i16x8_extract_lane_u_first).not.toBeUndefined();
        let _i16x8_extract_lane_u_first_result = module.invoke(_i16x8_extract_lane_u_first, 0);
        expect(_i16x8_extract_lane_u_first_result).toBe(65535);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-first (instance 2)", () => {
        let _i16x8_extract_lane_u_first = module.getExport("i16x8_extract_lane_u-first");
        expect(_i16x8_extract_lane_u_first).not.toBeUndefined();
        let _i16x8_extract_lane_u_first_result = module.invoke(_i16x8_extract_lane_u_first, 0);
        expect(_i16x8_extract_lane_u_first_result).toBe(12345);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-first (instance 3)", () => {
        let _i16x8_extract_lane_u_first = module.getExport("i16x8_extract_lane_u-first");
        expect(_i16x8_extract_lane_u_first).not.toBeUndefined();
        let _i16x8_extract_lane_u_first_result = module.invoke(_i16x8_extract_lane_u_first, 0);
        expect(_i16x8_extract_lane_u_first_result).toBe(60876);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-last (instance 0)", () => {
        let _i16x8_extract_lane_s_last = module.getExport("i16x8_extract_lane_s-last");
        expect(_i16x8_extract_lane_s_last).not.toBeUndefined();
        let _i16x8_extract_lane_s_last_result = module.invoke(_i16x8_extract_lane_s_last, 0);
        expect(_i16x8_extract_lane_s_last_result).toBe(-32768);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-last (instance 1)", () => {
        let _i16x8_extract_lane_s_last = module.getExport("i16x8_extract_lane_s-last");
        expect(_i16x8_extract_lane_s_last).not.toBeUndefined();
        let _i16x8_extract_lane_s_last_result = module.invoke(_i16x8_extract_lane_s_last, 0);
        expect(_i16x8_extract_lane_s_last_result).toBe(-32768);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-last (instance 2)", () => {
        let _i16x8_extract_lane_s_last = module.getExport("i16x8_extract_lane_s-last");
        expect(_i16x8_extract_lane_s_last).not.toBeUndefined();
        let _i16x8_extract_lane_s_last_result = module.invoke(_i16x8_extract_lane_s_last, 0);
        expect(_i16x8_extract_lane_s_last_result).toBe(6789);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_s-last (instance 3)", () => {
        let _i16x8_extract_lane_s_last = module.getExport("i16x8_extract_lane_s-last");
        expect(_i16x8_extract_lane_s_last).not.toBeUndefined();
        let _i16x8_extract_lane_s_last_result = module.invoke(_i16x8_extract_lane_s_last, 0);
        expect(_i16x8_extract_lane_s_last_result).toBe(-0x6789);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-last (instance 0)", () => {
        let _i16x8_extract_lane_u_last = module.getExport("i16x8_extract_lane_u-last");
        expect(_i16x8_extract_lane_u_last).not.toBeUndefined();
        let _i16x8_extract_lane_u_last_result = module.invoke(_i16x8_extract_lane_u_last, 0);
        expect(_i16x8_extract_lane_u_last_result).toBe(65535);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-last (instance 1)", () => {
        let _i16x8_extract_lane_u_last = module.getExport("i16x8_extract_lane_u-last");
        expect(_i16x8_extract_lane_u_last).not.toBeUndefined();
        let _i16x8_extract_lane_u_last_result = module.invoke(_i16x8_extract_lane_u_last, 0);
        expect(_i16x8_extract_lane_u_last_result).toBe(65535);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-last (instance 2)", () => {
        let _i16x8_extract_lane_u_last = module.getExport("i16x8_extract_lane_u-last");
        expect(_i16x8_extract_lane_u_last).not.toBeUndefined();
        let _i16x8_extract_lane_u_last_result = module.invoke(_i16x8_extract_lane_u_last, 0);
        expect(_i16x8_extract_lane_u_last_result).toBe(32768);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-last (instance 3)", () => {
        let _i16x8_extract_lane_u_last = module.getExport("i16x8_extract_lane_u-last");
        expect(_i16x8_extract_lane_u_last).not.toBeUndefined();
        let _i16x8_extract_lane_u_last_result = module.invoke(_i16x8_extract_lane_u_last, 0);
        expect(_i16x8_extract_lane_u_last_result).toBe(32768);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-last (instance 4)", () => {
        let _i16x8_extract_lane_u_last = module.getExport("i16x8_extract_lane_u-last");
        expect(_i16x8_extract_lane_u_last).not.toBeUndefined();
        let _i16x8_extract_lane_u_last_result = module.invoke(_i16x8_extract_lane_u_last, 0);
        expect(_i16x8_extract_lane_u_last_result).toBe(6789);
    });

    _test("execution of simd_lane_0: i16x8_extract_lane_u-last (instance 5)", () => {
        let _i16x8_extract_lane_u_last = module.getExport("i16x8_extract_lane_u-last");
        expect(_i16x8_extract_lane_u_last).not.toBeUndefined();
        let _i16x8_extract_lane_u_last_result = module.invoke(_i16x8_extract_lane_u_last, 0);
        expect(_i16x8_extract_lane_u_last_result).toBe(39031);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-first (instance 0)", () => {
        let _i32x4_extract_lane_first = module.getExport("i32x4_extract_lane-first");
        expect(_i32x4_extract_lane_first).not.toBeUndefined();
        let _i32x4_extract_lane_first_result = module.invoke(_i32x4_extract_lane_first, 0);
        expect(_i32x4_extract_lane_first_result).toBe(2147483647);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-first (instance 1)", () => {
        let _i32x4_extract_lane_first = module.getExport("i32x4_extract_lane-first");
        expect(_i32x4_extract_lane_first).not.toBeUndefined();
        let _i32x4_extract_lane_first_result = module.invoke(_i32x4_extract_lane_first, 0);
        expect(_i32x4_extract_lane_first_result).toBe(2147483647);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-first (instance 2)", () => {
        let _i32x4_extract_lane_first = module.getExport("i32x4_extract_lane-first");
        expect(_i32x4_extract_lane_first).not.toBeUndefined();
        let _i32x4_extract_lane_first_result = module.invoke(_i32x4_extract_lane_first, 0);
        expect(_i32x4_extract_lane_first_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-first (instance 3)", () => {
        let _i32x4_extract_lane_first = module.getExport("i32x4_extract_lane-first");
        expect(_i32x4_extract_lane_first).not.toBeUndefined();
        let _i32x4_extract_lane_first_result = module.invoke(_i32x4_extract_lane_first, 0);
        expect(_i32x4_extract_lane_first_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-first (instance 4)", () => {
        let _i32x4_extract_lane_first = module.getExport("i32x4_extract_lane-first");
        expect(_i32x4_extract_lane_first).not.toBeUndefined();
        let _i32x4_extract_lane_first_result = module.invoke(_i32x4_extract_lane_first, 0);
        expect(_i32x4_extract_lane_first_result).toBe(1234567890);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-first (instance 5)", () => {
        let _i32x4_extract_lane_first = module.getExport("i32x4_extract_lane-first");
        expect(_i32x4_extract_lane_first).not.toBeUndefined();
        let _i32x4_extract_lane_first_result = module.invoke(_i32x4_extract_lane_first, 0);
        expect(_i32x4_extract_lane_first_result).toBe(-0x12345678);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-last (instance 0)", () => {
        let _i32x4_extract_lane_last = module.getExport("i32x4_extract_lane-last");
        expect(_i32x4_extract_lane_last).not.toBeUndefined();
        let _i32x4_extract_lane_last_result = module.invoke(_i32x4_extract_lane_last, 0);
        expect(_i32x4_extract_lane_last_result).toBe(-2147483648);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-last (instance 1)", () => {
        let _i32x4_extract_lane_last = module.getExport("i32x4_extract_lane-last");
        expect(_i32x4_extract_lane_last).not.toBeUndefined();
        let _i32x4_extract_lane_last_result = module.invoke(_i32x4_extract_lane_last, 0);
        expect(_i32x4_extract_lane_last_result).toBe(-2147483648);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-last (instance 2)", () => {
        let _i32x4_extract_lane_last = module.getExport("i32x4_extract_lane-last");
        expect(_i32x4_extract_lane_last).not.toBeUndefined();
        let _i32x4_extract_lane_last_result = module.invoke(_i32x4_extract_lane_last, 0);
        expect(_i32x4_extract_lane_last_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-last (instance 3)", () => {
        let _i32x4_extract_lane_last = module.getExport("i32x4_extract_lane-last");
        expect(_i32x4_extract_lane_last).not.toBeUndefined();
        let _i32x4_extract_lane_last_result = module.invoke(_i32x4_extract_lane_last, 0);
        expect(_i32x4_extract_lane_last_result).toBe(-1);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-last (instance 4)", () => {
        let _i32x4_extract_lane_last = module.getExport("i32x4_extract_lane-last");
        expect(_i32x4_extract_lane_last).not.toBeUndefined();
        let _i32x4_extract_lane_last_result = module.invoke(_i32x4_extract_lane_last, 0);
        expect(_i32x4_extract_lane_last_result).toBe(987654321);
    });

    _test("execution of simd_lane_0: i32x4_extract_lane-last (instance 5)", () => {
        let _i32x4_extract_lane_last = module.getExport("i32x4_extract_lane-last");
        expect(_i32x4_extract_lane_last).not.toBeUndefined();
        let _i32x4_extract_lane_last_result = module.invoke(_i32x4_extract_lane_last, 0);
        expect(_i32x4_extract_lane_last_result).toBe(-0x12345678);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-first (instance 0)", () => {
        let _i64x2_extract_lane_first = module.getExport("i64x2_extract_lane-first");
        expect(_i64x2_extract_lane_first).not.toBeUndefined();
        let _i64x2_extract_lane_first_result = module.invoke(_i64x2_extract_lane_first, 0);
        expect(_i64x2_extract_lane_first_result).toBe(9223372036854775807n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-first (instance 1)", () => {
        let _i64x2_extract_lane_first = module.getExport("i64x2_extract_lane-first");
        expect(_i64x2_extract_lane_first).not.toBeUndefined();
        let _i64x2_extract_lane_first_result = module.invoke(_i64x2_extract_lane_first, 0);
        expect(_i64x2_extract_lane_first_result).toBe(9223372036854775806n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-first (instance 2)", () => {
        let _i64x2_extract_lane_first = module.getExport("i64x2_extract_lane-first");
        expect(_i64x2_extract_lane_first).not.toBeUndefined();
        let _i64x2_extract_lane_first_result = module.invoke(_i64x2_extract_lane_first, 0);
        expect(_i64x2_extract_lane_first_result).toBe(-1n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-first (instance 3)", () => {
        let _i64x2_extract_lane_first = module.getExport("i64x2_extract_lane-first");
        expect(_i64x2_extract_lane_first).not.toBeUndefined();
        let _i64x2_extract_lane_first_result = module.invoke(_i64x2_extract_lane_first, 0);
        expect(_i64x2_extract_lane_first_result).toBe(-1n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-first (instance 4)", () => {
        let _i64x2_extract_lane_first = module.getExport("i64x2_extract_lane-first");
        expect(_i64x2_extract_lane_first).not.toBeUndefined();
        let _i64x2_extract_lane_first_result = module.invoke(_i64x2_extract_lane_first, 0);
        expect(_i64x2_extract_lane_first_result).toBe(1234567890123456789n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-first (instance 5)", () => {
        let _i64x2_extract_lane_first = module.getExport("i64x2_extract_lane-first");
        expect(_i64x2_extract_lane_first).not.toBeUndefined();
        let _i64x2_extract_lane_first_result = module.invoke(_i64x2_extract_lane_first, 0);
        expect(_i64x2_extract_lane_first_result).toBe(1311768467294899695n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 0)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(-9223372036854775808n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 1)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(-0x8000000000000000n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 2)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(-9223372036854775808n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 3)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(9223372036854775807n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 4)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(-9223372036854775808n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 5)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(9223372036854775807n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 6)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(9218868437227405312n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 7)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(1234567890123456789n);
    });

    _test("execution of simd_lane_0: i64x2_extract_lane-last (instance 8)", () => {
        let _i64x2_extract_lane_last = module.getExport("i64x2_extract_lane-last");
        expect(_i64x2_extract_lane_last).not.toBeUndefined();
        let _i64x2_extract_lane_last_result = module.invoke(_i64x2_extract_lane_last, 0);
        expect(_i64x2_extract_lane_last_result).toBe(1311768467294899695n);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 0)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(-5.0);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 1)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(1e38);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 2)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(3.4028234663852886e38);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 3)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(1.7014118346046923e38);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 4)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(Infinity);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 5)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(NaN);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 6)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(1.2345678901234569e27);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-first (instance 7)", () => {
        let _f32x4_extract_lane_first = module.getExport("f32x4_extract_lane-first");
        expect(_f32x4_extract_lane_first).not.toBeUndefined();
        let _f32x4_extract_lane_first_result = module.invoke(_f32x4_extract_lane_first, 0);
        expect(_f32x4_extract_lane_first_result).toBe(156374987061.47556);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-last (instance 0)", () => {
        let _f32x4_extract_lane_last = module.getExport("f32x4_extract_lane-last");
        expect(_f32x4_extract_lane_last).not.toBeUndefined();
        let _f32x4_extract_lane_last_result = module.invoke(_f32x4_extract_lane_last, 0);
        expect(_f32x4_extract_lane_last_result).toBe(-1e38);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-last (instance 1)", () => {
        let _f32x4_extract_lane_last = module.getExport("f32x4_extract_lane-last");
        expect(_f32x4_extract_lane_last).not.toBeUndefined();
        let _f32x4_extract_lane_last_result = module.invoke(_f32x4_extract_lane_last, 0);
        expect(_f32x4_extract_lane_last_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-last (instance 2)", () => {
        let _f32x4_extract_lane_last = module.getExport("f32x4_extract_lane-last");
        expect(_f32x4_extract_lane_last).not.toBeUndefined();
        let _f32x4_extract_lane_last_result = module.invoke(_f32x4_extract_lane_last, 0);
        expect(_f32x4_extract_lane_last_result).toBe(-1.7014118346046923e38);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-last (instance 3)", () => {
        let _f32x4_extract_lane_last = module.getExport("f32x4_extract_lane-last");
        expect(_f32x4_extract_lane_last).not.toBeUndefined();
        let _f32x4_extract_lane_last_result = module.invoke(_f32x4_extract_lane_last, 0);
        expect(_f32x4_extract_lane_last_result).toBe(-Infinity);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-last (instance 4)", () => {
        let _f32x4_extract_lane_last = module.getExport("f32x4_extract_lane-last");
        expect(_f32x4_extract_lane_last).not.toBeUndefined();
        let _f32x4_extract_lane_last_result = module.invoke(_f32x4_extract_lane_last, 0);
        expect(_f32x4_extract_lane_last_result).toBe(NaN);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-last (instance 5)", () => {
        let _f32x4_extract_lane_last = module.getExport("f32x4_extract_lane-last");
        expect(_f32x4_extract_lane_last).not.toBeUndefined();
        let _f32x4_extract_lane_last_result = module.invoke(_f32x4_extract_lane_last, 0);
        expect(_f32x4_extract_lane_last_result).toBe(123456789.0);
    });

    _test("execution of simd_lane_0: f32x4_extract_lane-last (instance 6)", () => {
        let _f32x4_extract_lane_last = module.getExport("f32x4_extract_lane-last");
        expect(_f32x4_extract_lane_last).not.toBeUndefined();
        let _f32x4_extract_lane_last_result = module.invoke(_f32x4_extract_lane_last, 0);
        expect(_f32x4_extract_lane_last_result).toBe(8.19855292164869e16);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 0)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(-1.5);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 1)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(1.5);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 2)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(-1.7976931348623155e-308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 3)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(1.7976931348623155e-308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 4)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 5)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 6)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(-Infinity);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 7)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(Infinity);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 8)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(-NaN);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 9)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(NaN);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 10)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(1.2345678901234569e27);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-first (instance 11)", () => {
        let _f64x2_extract_lane_first = module.getExport("f64x2_extract_lane-first");
        expect(_f64x2_extract_lane_first).not.toBeUndefined();
        let _f64x2_extract_lane_first_result = module.invoke(_f64x2_extract_lane_first, 0);
        expect(_f64x2_extract_lane_first_result).toBe(2.6235369349275807e18);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 0)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(2.25);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 1)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(-2.25);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 2)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 3)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(1.7976931348623157e308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 4)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 5)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(1.7976931348623157e308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 6)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(-Infinity);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 7)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(Infinity);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 8)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(-NaN);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 9)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(NaN);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 10)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(123456789.0);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 11)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(1.3754889325393114e24);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 12)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(0.0);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 13)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(-0.0);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 14)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(2.0);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 15)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(-2.0);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 16)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(1.7976931348623157e308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 17)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 18)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(2.225073858507201e-308);
    });

    _test("execution of simd_lane_0: f64x2_extract_lane-last (instance 19)", () => {
        let _f64x2_extract_lane_last = module.getExport("f64x2_extract_lane-last");
        expect(_f64x2_extract_lane_last).not.toBeUndefined();
        let _f64x2_extract_lane_last_result = module.invoke(_f64x2_extract_lane_last, 0);
        expect(_f64x2_extract_lane_last_result).toBe(5e-324);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-first (instance 0)", () => {
        let _i8x16_replace_lane_first = module.getExport("i8x16_replace_lane-first");
        expect(_i8x16_replace_lane_first).not.toBeUndefined();
        let _i8x16_replace_lane_first_result = module.invoke(_i8x16_replace_lane_first, 0, 127);
        expect(_i8x16_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-first (instance 1)", () => {
        let _i8x16_replace_lane_first = module.getExport("i8x16_replace_lane-first");
        expect(_i8x16_replace_lane_first).not.toBeUndefined();
        let _i8x16_replace_lane_first_result = module.invoke(_i8x16_replace_lane_first, 0, 128);
        expect(_i8x16_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-first (instance 2)", () => {
        let _i8x16_replace_lane_first = module.getExport("i8x16_replace_lane-first");
        expect(_i8x16_replace_lane_first).not.toBeUndefined();
        let _i8x16_replace_lane_first_result = module.invoke(_i8x16_replace_lane_first, 0, 255);
        expect(_i8x16_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-first (instance 3)", () => {
        let _i8x16_replace_lane_first = module.getExport("i8x16_replace_lane-first");
        expect(_i8x16_replace_lane_first).not.toBeUndefined();
        let _i8x16_replace_lane_first_result = module.invoke(_i8x16_replace_lane_first, 0, 256);
        expect(_i8x16_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-last (instance 0)", () => {
        let _i8x16_replace_lane_last = module.getExport("i8x16_replace_lane-last");
        expect(_i8x16_replace_lane_last).not.toBeUndefined();
        let _i8x16_replace_lane_last_result = module.invoke(_i8x16_replace_lane_last, 0, -128);
        expect(_i8x16_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-last (instance 1)", () => {
        let _i8x16_replace_lane_last = module.getExport("i8x16_replace_lane-last");
        expect(_i8x16_replace_lane_last).not.toBeUndefined();
        let _i8x16_replace_lane_last_result = module.invoke(_i8x16_replace_lane_last, 0, -129);
        expect(_i8x16_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-last (instance 2)", () => {
        let _i8x16_replace_lane_last = module.getExport("i8x16_replace_lane-last");
        expect(_i8x16_replace_lane_last).not.toBeUndefined();
        let _i8x16_replace_lane_last_result = module.invoke(_i8x16_replace_lane_last, 0, 32767);
        expect(_i8x16_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i8x16_replace_lane-last (instance 3)", () => {
        let _i8x16_replace_lane_last = module.getExport("i8x16_replace_lane-last");
        expect(_i8x16_replace_lane_last).not.toBeUndefined();
        let _i8x16_replace_lane_last_result = module.invoke(_i8x16_replace_lane_last, 0, -32768);
        expect(_i8x16_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-first (instance 0)", () => {
        let _i16x8_replace_lane_first = module.getExport("i16x8_replace_lane-first");
        expect(_i16x8_replace_lane_first).not.toBeUndefined();
        let _i16x8_replace_lane_first_result = module.invoke(_i16x8_replace_lane_first, 0, 32767);
        expect(_i16x8_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-first (instance 1)", () => {
        let _i16x8_replace_lane_first = module.getExport("i16x8_replace_lane-first");
        expect(_i16x8_replace_lane_first).not.toBeUndefined();
        let _i16x8_replace_lane_first_result = module.invoke(_i16x8_replace_lane_first, 0, 32768);
        expect(_i16x8_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-first (instance 2)", () => {
        let _i16x8_replace_lane_first = module.getExport("i16x8_replace_lane-first");
        expect(_i16x8_replace_lane_first).not.toBeUndefined();
        let _i16x8_replace_lane_first_result = module.invoke(_i16x8_replace_lane_first, 0, 65535);
        expect(_i16x8_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-first (instance 3)", () => {
        let _i16x8_replace_lane_first = module.getExport("i16x8_replace_lane-first");
        expect(_i16x8_replace_lane_first).not.toBeUndefined();
        let _i16x8_replace_lane_first_result = module.invoke(_i16x8_replace_lane_first, 0, 65536);
        expect(_i16x8_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-first (instance 4)", () => {
        let _i16x8_replace_lane_first = module.getExport("i16x8_replace_lane-first");
        expect(_i16x8_replace_lane_first).not.toBeUndefined();
        let _i16x8_replace_lane_first_result = module.invoke(_i16x8_replace_lane_first, 0, 012345);
        expect(_i16x8_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-first (instance 5)", () => {
        let _i16x8_replace_lane_first = module.getExport("i16x8_replace_lane-first");
        expect(_i16x8_replace_lane_first).not.toBeUndefined();
        let _i16x8_replace_lane_first_result = module.invoke(
            _i16x8_replace_lane_first,
            0,
            -0x01234
        );
        expect(_i16x8_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-last (instance 0)", () => {
        let _i16x8_replace_lane_last = module.getExport("i16x8_replace_lane-last");
        expect(_i16x8_replace_lane_last).not.toBeUndefined();
        let _i16x8_replace_lane_last_result = module.invoke(_i16x8_replace_lane_last, 0, -32768);
        expect(_i16x8_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-last (instance 1)", () => {
        let _i16x8_replace_lane_last = module.getExport("i16x8_replace_lane-last");
        expect(_i16x8_replace_lane_last).not.toBeUndefined();
        let _i16x8_replace_lane_last_result = module.invoke(_i16x8_replace_lane_last, 0, -32769);
        expect(_i16x8_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-last (instance 2)", () => {
        let _i16x8_replace_lane_last = module.getExport("i16x8_replace_lane-last");
        expect(_i16x8_replace_lane_last).not.toBeUndefined();
        let _i16x8_replace_lane_last_result = module.invoke(
            _i16x8_replace_lane_last,
            0,
            2147483647
        );
        expect(_i16x8_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-last (instance 3)", () => {
        let _i16x8_replace_lane_last = module.getExport("i16x8_replace_lane-last");
        expect(_i16x8_replace_lane_last).not.toBeUndefined();
        let _i16x8_replace_lane_last_result = module.invoke(
            _i16x8_replace_lane_last,
            0,
            -2147483648
        );
        expect(_i16x8_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-last (instance 4)", () => {
        let _i16x8_replace_lane_last = module.getExport("i16x8_replace_lane-last");
        expect(_i16x8_replace_lane_last).not.toBeUndefined();
        let _i16x8_replace_lane_last_result = module.invoke(_i16x8_replace_lane_last, 0, 054321);
        expect(_i16x8_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i16x8_replace_lane-last (instance 5)", () => {
        let _i16x8_replace_lane_last = module.getExport("i16x8_replace_lane-last");
        expect(_i16x8_replace_lane_last).not.toBeUndefined();
        let _i16x8_replace_lane_last_result = module.invoke(_i16x8_replace_lane_last, 0, -0x04321);
        expect(_i16x8_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-first (instance 0)", () => {
        let _i32x4_replace_lane_first = module.getExport("i32x4_replace_lane-first");
        expect(_i32x4_replace_lane_first).not.toBeUndefined();
        let _i32x4_replace_lane_first_result = module.invoke(
            _i32x4_replace_lane_first,
            0,
            2147483647
        );
        expect(_i32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-first (instance 1)", () => {
        let _i32x4_replace_lane_first = module.getExport("i32x4_replace_lane-first");
        expect(_i32x4_replace_lane_first).not.toBeUndefined();
        let _i32x4_replace_lane_first_result = module.invoke(
            _i32x4_replace_lane_first,
            0,
            4294967295
        );
        expect(_i32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-first (instance 2)", () => {
        let _i32x4_replace_lane_first = module.getExport("i32x4_replace_lane-first");
        expect(_i32x4_replace_lane_first).not.toBeUndefined();
        let _i32x4_replace_lane_first_result = module.invoke(
            _i32x4_replace_lane_first,
            0,
            01234567890
        );
        expect(_i32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-first (instance 3)", () => {
        let _i32x4_replace_lane_first = module.getExport("i32x4_replace_lane-first");
        expect(_i32x4_replace_lane_first).not.toBeUndefined();
        let _i32x4_replace_lane_first_result = module.invoke(
            _i32x4_replace_lane_first,
            0,
            -0x012345678
        );
        expect(_i32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-last (instance 0)", () => {
        let _i32x4_replace_lane_last = module.getExport("i32x4_replace_lane-last");
        expect(_i32x4_replace_lane_last).not.toBeUndefined();
        let _i32x4_replace_lane_last_result = module.invoke(
            _i32x4_replace_lane_last,
            0,
            2147483648
        );
        expect(_i32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-last (instance 1)", () => {
        let _i32x4_replace_lane_last = module.getExport("i32x4_replace_lane-last");
        expect(_i32x4_replace_lane_last).not.toBeUndefined();
        let _i32x4_replace_lane_last_result = module.invoke(
            _i32x4_replace_lane_last,
            0,
            -2147483648
        );
        expect(_i32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-last (instance 2)", () => {
        let _i32x4_replace_lane_last = module.getExport("i32x4_replace_lane-last");
        expect(_i32x4_replace_lane_last).not.toBeUndefined();
        let _i32x4_replace_lane_last_result = module.invoke(
            _i32x4_replace_lane_last,
            0,
            01234567890
        );
        expect(_i32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i32x4_replace_lane-last (instance 3)", () => {
        let _i32x4_replace_lane_last = module.getExport("i32x4_replace_lane-last");
        expect(_i32x4_replace_lane_last).not.toBeUndefined();
        let _i32x4_replace_lane_last_result = module.invoke(
            _i32x4_replace_lane_last,
            0,
            -0x012345678
        );
        expect(_i32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 0)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(_f32x4_replace_lane_first, 0, 53.0);
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 1)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(_f32x4_replace_lane_first, 0, 53.0);
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 2)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(_f32x4_replace_lane_first, 0, NaN);
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 3)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(
            _f32x4_replace_lane_first,
            0,
            Infinity
        );
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 4)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(_f32x4_replace_lane_first, 0, 3.14);
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 5)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(_f32x4_replace_lane_first, 0, 1e38);
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 6)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(
            _f32x4_replace_lane_first,
            0,
            3.4028234663852886e38
        );
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 7)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(
            _f32x4_replace_lane_first,
            0,
            1.7014118346046923e38
        );
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 8)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(
            _f32x4_replace_lane_first,
            0,
            123456789.0
        );
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 9)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(
            _f32x4_replace_lane_first,
            0,
            123456789.0
        );
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 10)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(
            _f32x4_replace_lane_first,
            0,
            8.19855292164869e16
        );
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-first (instance 11)", () => {
        let _f32x4_replace_lane_first = module.getExport("f32x4_replace_lane-first");
        expect(_f32x4_replace_lane_first).not.toBeUndefined();
        let _f32x4_replace_lane_first_result = module.invoke(
            _f32x4_replace_lane_first,
            0,
            8.19855292164869e16
        );
        expect(_f32x4_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 0)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(_f32x4_replace_lane_last, 0, -53.0);
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 1)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(_f32x4_replace_lane_last, 0, -53.0);
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 2)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(_f32x4_replace_lane_last, 0, NaN);
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 3)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(_f32x4_replace_lane_last, 0, -Infinity);
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 4)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(_f32x4_replace_lane_last, 0, 3.14);
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 5)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(_f32x4_replace_lane_last, 0, -1e38);
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 6)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(
            _f32x4_replace_lane_last,
            0,
            -3.4028234663852886e38
        );
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 7)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(
            _f32x4_replace_lane_last,
            0,
            -1.7014118346046923e38
        );
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 8)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(
            _f32x4_replace_lane_last,
            0,
            1.23456789e27
        );
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 9)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(
            _f32x4_replace_lane_last,
            0,
            1.23456789e27
        );
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 10)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(
            _f32x4_replace_lane_last,
            0,
            4.298402914185348e22
        );
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f32x4_replace_lane-last (instance 11)", () => {
        let _f32x4_replace_lane_last = module.getExport("f32x4_replace_lane-last");
        expect(_f32x4_replace_lane_last).not.toBeUndefined();
        let _f32x4_replace_lane_last_result = module.invoke(
            _f32x4_replace_lane_last,
            0,
            156374987061.47556
        );
        expect(_f32x4_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-first (instance 0)", () => {
        let _i64x2_replace_lane_first = module.getExport("i64x2_replace_lane-first");
        expect(_i64x2_replace_lane_first).not.toBeUndefined();
        let _i64x2_replace_lane_first_result = module.invoke(
            _i64x2_replace_lane_first,
            0,
            9223372036854775807n
        );
        expect(_i64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-first (instance 1)", () => {
        let _i64x2_replace_lane_first = module.getExport("i64x2_replace_lane-first");
        expect(_i64x2_replace_lane_first).not.toBeUndefined();
        let _i64x2_replace_lane_first_result = module.invoke(
            _i64x2_replace_lane_first,
            0,
            18446744073709551615n
        );
        expect(_i64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-first (instance 2)", () => {
        let _i64x2_replace_lane_first = module.getExport("i64x2_replace_lane-first");
        expect(_i64x2_replace_lane_first).not.toBeUndefined();
        let _i64x2_replace_lane_first_result = module.invoke(
            _i64x2_replace_lane_first,
            0,
            1234567890123456789n
        );
        expect(_i64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-first (instance 3)", () => {
        let _i64x2_replace_lane_first = module.getExport("i64x2_replace_lane-first");
        expect(_i64x2_replace_lane_first).not.toBeUndefined();
        let _i64x2_replace_lane_first_result = module.invoke(
            _i64x2_replace_lane_first,
            0,
            1311768467294899695n
        );
        expect(_i64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-last (instance 0)", () => {
        let _i64x2_replace_lane_last = module.getExport("i64x2_replace_lane-last");
        expect(_i64x2_replace_lane_last).not.toBeUndefined();
        let _i64x2_replace_lane_last_result = module.invoke(
            _i64x2_replace_lane_last,
            0,
            9223372036854775808n
        );
        expect(_i64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-last (instance 1)", () => {
        let _i64x2_replace_lane_last = module.getExport("i64x2_replace_lane-last");
        expect(_i64x2_replace_lane_last).not.toBeUndefined();
        let _i64x2_replace_lane_last_result = module.invoke(
            _i64x2_replace_lane_last,
            0,
            9223372036854775808n
        );
        expect(_i64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-last (instance 2)", () => {
        let _i64x2_replace_lane_last = module.getExport("i64x2_replace_lane-last");
        expect(_i64x2_replace_lane_last).not.toBeUndefined();
        let _i64x2_replace_lane_last_result = module.invoke(
            _i64x2_replace_lane_last,
            0,
            1234567890123456789n
        );
        expect(_i64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: i64x2_replace_lane-last (instance 3)", () => {
        let _i64x2_replace_lane_last = module.getExport("i64x2_replace_lane-last");
        expect(_i64x2_replace_lane_last).not.toBeUndefined();
        let _i64x2_replace_lane_last_result = module.invoke(
            _i64x2_replace_lane_last,
            0,
            1311768467294899695n
        );
        expect(_i64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 0)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(_f64x2_replace_lane_first, 0, 0.0);
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 1)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(_f64x2_replace_lane_first, 0, -0.0);
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 2)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(_f64x2_replace_lane_first, 0, 1.25);
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 3)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(_f64x2_replace_lane_first, 0, -1.25);
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 4)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            -1.7976931348623157e308
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 5)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            1.7976931348623157e308
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 6)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            -2.2250738585072014e-308
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 7)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            2.2250738585072014e-308
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 8)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(_f64x2_replace_lane_first, 0, -NaN);
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 9)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(_f64x2_replace_lane_first, 0, NaN);
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 10)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            -Infinity
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 11)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            Infinity
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 12)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            123456789.0
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 13)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            123456789.0
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 14)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            1.3754889325393114e24
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-first (instance 15)", () => {
        let _f64x2_replace_lane_first = module.getExport("f64x2_replace_lane-first");
        expect(_f64x2_replace_lane_first).not.toBeUndefined();
        let _f64x2_replace_lane_first_result = module.invoke(
            _f64x2_replace_lane_first,
            0,
            1.3754889325393114e24
        );
        expect(_f64x2_replace_lane_first_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 0)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, 0.0);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 1)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, -0.0);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 2)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, 2.25);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 3)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, -2.25);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 4)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            -1.7976931348623157e308
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 5)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            1.7976931348623157e308
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 6)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            -2.2250738585072014e-308
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 7)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            2.2250738585072014e-308
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 8)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, -NaN);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 9)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, NaN);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 10)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, -Infinity);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 11)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(_f64x2_replace_lane_last, 0, Infinity);
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 12)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            1.23456789e27
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 13)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            1.23456789e27
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 14)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            1.23456789e27
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: f64x2_replace_lane-last (instance 15)", () => {
        let _f64x2_replace_lane_last = module.getExport("f64x2_replace_lane-last");
        expect(_f64x2_replace_lane_last).not.toBeUndefined();
        let _f64x2_replace_lane_last_result = module.invoke(
            _f64x2_replace_lane_last,
            0,
            1.23456789e-11
        );
        expect(_f64x2_replace_lane_last_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 0)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 1)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 2)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 3)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 4)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 5)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 6)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 7)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 8)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 9)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-1 (instance 0)", () => {
        let _v8x16_shuffle_1 = module.getExport("v8x16_shuffle-1");
        expect(_v8x16_shuffle_1).not.toBeUndefined();
        let _v8x16_shuffle_1_result = module.invoke(_v8x16_shuffle_1, 0, 0);
        expect(_v8x16_shuffle_1_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-2 (instance 0)", () => {
        let _v8x16_shuffle_2 = module.getExport("v8x16_shuffle-2");
        expect(_v8x16_shuffle_2).not.toBeUndefined();
        let _v8x16_shuffle_2_result = module.invoke(_v8x16_shuffle_2, 0, 0);
        expect(_v8x16_shuffle_2_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-3 (instance 0)", () => {
        let _v8x16_shuffle_3 = module.getExport("v8x16_shuffle-3");
        expect(_v8x16_shuffle_3).not.toBeUndefined();
        let _v8x16_shuffle_3_result = module.invoke(_v8x16_shuffle_3, 0, 0);
        expect(_v8x16_shuffle_3_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-4 (instance 0)", () => {
        let _v8x16_shuffle_4 = module.getExport("v8x16_shuffle-4");
        expect(_v8x16_shuffle_4).not.toBeUndefined();
        let _v8x16_shuffle_4_result = module.invoke(_v8x16_shuffle_4, 0, 0);
        expect(_v8x16_shuffle_4_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-5 (instance 0)", () => {
        let _v8x16_shuffle_5 = module.getExport("v8x16_shuffle-5");
        expect(_v8x16_shuffle_5).not.toBeUndefined();
        let _v8x16_shuffle_5_result = module.invoke(_v8x16_shuffle_5, 0, 0);
        expect(_v8x16_shuffle_5_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-6 (instance 0)", () => {
        let _v8x16_shuffle_6 = module.getExport("v8x16_shuffle-6");
        expect(_v8x16_shuffle_6).not.toBeUndefined();
        let _v8x16_shuffle_6_result = module.invoke(_v8x16_shuffle_6, 0, 0);
        expect(_v8x16_shuffle_6_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-7 (instance 0)", () => {
        let _v8x16_shuffle_7 = module.getExport("v8x16_shuffle-7");
        expect(_v8x16_shuffle_7).not.toBeUndefined();
        let _v8x16_shuffle_7_result = module.invoke(_v8x16_shuffle_7, 0, 0);
        expect(_v8x16_shuffle_7_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-1 (instance 1)", () => {
        let _v8x16_shuffle_1 = module.getExport("v8x16_shuffle-1");
        expect(_v8x16_shuffle_1).not.toBeUndefined();
        let _v8x16_shuffle_1_result = module.invoke(_v8x16_shuffle_1, 0, 0);
        expect(_v8x16_shuffle_1_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-1 (instance 2)", () => {
        let _v8x16_shuffle_1 = module.getExport("v8x16_shuffle-1");
        expect(_v8x16_shuffle_1).not.toBeUndefined();
        let _v8x16_shuffle_1_result = module.invoke(_v8x16_shuffle_1, 0, 0);
        expect(_v8x16_shuffle_1_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-2 (instance 1)", () => {
        let _v8x16_shuffle_2 = module.getExport("v8x16_shuffle-2");
        expect(_v8x16_shuffle_2).not.toBeUndefined();
        let _v8x16_shuffle_2_result = module.invoke(_v8x16_shuffle_2, 0, 0);
        expect(_v8x16_shuffle_2_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-1 (instance 3)", () => {
        let _v8x16_shuffle_1 = module.getExport("v8x16_shuffle-1");
        expect(_v8x16_shuffle_1).not.toBeUndefined();
        let _v8x16_shuffle_1_result = module.invoke(_v8x16_shuffle_1, 0, 0);
        expect(_v8x16_shuffle_1_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-1 (instance 4)", () => {
        let _v8x16_shuffle_1 = module.getExport("v8x16_shuffle-1");
        expect(_v8x16_shuffle_1).not.toBeUndefined();
        let _v8x16_shuffle_1_result = module.invoke(_v8x16_shuffle_1, 0, 0);
        expect(_v8x16_shuffle_1_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-1 (instance 5)", () => {
        let _v8x16_shuffle_1 = module.getExport("v8x16_shuffle-1");
        expect(_v8x16_shuffle_1).not.toBeUndefined();
        let _v8x16_shuffle_1_result = module.invoke(_v8x16_shuffle_1, 0, 0);
        expect(_v8x16_shuffle_1_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_swizzle (instance 10)", () => {
        let _v8x16_swizzle = module.getExport("v8x16_swizzle");
        expect(_v8x16_swizzle).not.toBeUndefined();
        let _v8x16_swizzle_result = module.invoke(_v8x16_swizzle, 0, 0);
        expect(_v8x16_swizzle_result).toBe(0);
    });

    _test("execution of simd_lane_0: v8x16_shuffle-1 (instance 6)", () => {
        let _v8x16_shuffle_1 = module.getExport("v8x16_shuffle-1");
        expect(_v8x16_shuffle_1).not.toBeUndefined();
        let _v8x16_shuffle_1_result = module.invoke(_v8x16_shuffle_1, 0, 0);
        expect(_v8x16_shuffle_1_result).toBe(0);
    });
});

describe("simd_lane_1", () => {
    let _test = test;

    _test("execution of simd_lane_1: _inline_test_0 (instance 0)", () => {});
});

describe("simd_lane_2", () => {
    let _test = test;

    _test("execution of simd_lane_2: _inline_test_1 (instance 0)", () => {});
});

describe("simd_lane_3", () => {
    let _test = test;

    _test("execution of simd_lane_3: _inline_test_2 (instance 0)", () => {});
});

describe("simd_lane_4", () => {
    let _test = test;

    _test("execution of simd_lane_4: _inline_test_3 (instance 0)", () => {});
});

describe("simd_lane_5", () => {
    let _test = test;

    _test("execution of simd_lane_5: _inline_test_4 (instance 0)", () => {});
});

describe("simd_lane_6", () => {
    let _test = test;

    _test("execution of simd_lane_6: _inline_test_5 (instance 0)", () => {});
});

describe("simd_lane_7", () => {
    let _test = test;

    _test("execution of simd_lane_7: _inline_test_6 (instance 0)", () => {});
});

describe("simd_lane_8", () => {
    let _test = test;

    _test("execution of simd_lane_8: _inline_test_7 (instance 0)", () => {});
});

describe("simd_lane_9", () => {
    let _test = test;

    _test("execution of simd_lane_9: _inline_test_8 (instance 0)", () => {});
});

describe("simd_lane_10", () => {
    let _test = test;

    _test("execution of simd_lane_10: _inline_test_9 (instance 0)", () => {});
});

describe("simd_lane_11", () => {
    let _test = test;

    _test("execution of simd_lane_11: _inline_test_10 (instance 0)", () => {});
});

describe("simd_lane_12", () => {
    let _test = test;

    _test("execution of simd_lane_12: _inline_test_11 (instance 0)", () => {});
});

describe("simd_lane_13", () => {
    let _test = test;

    _test("execution of simd_lane_13: _inline_test_12 (instance 0)", () => {});
});

describe("simd_lane_14", () => {
    let _test = test;

    _test("execution of simd_lane_14: _inline_test_13 (instance 0)", () => {});
});

describe("simd_lane_15", () => {
    let _test = test;

    _test("execution of simd_lane_15: _inline_test_14 (instance 0)", () => {});
});

describe("simd_lane_16", () => {
    let _test = test;

    _test("execution of simd_lane_16: _inline_test_15 (instance 0)", () => {});
});

describe("simd_lane_17", () => {
    let _test = test;

    _test("execution of simd_lane_17: _inline_test_16 (instance 0)", () => {});
});

describe("simd_lane_18", () => {
    let _test = test;

    _test("execution of simd_lane_18: _inline_test_17 (instance 0)", () => {});
});

describe("simd_lane_19", () => {
    let _test = test;

    _test("execution of simd_lane_19: _inline_test_18 (instance 0)", () => {});
});

describe("simd_lane_20", () => {
    let _test = test;

    _test("execution of simd_lane_20: _inline_test_19 (instance 0)", () => {});
});

describe("simd_lane_21", () => {
    let _test = test;

    _test("execution of simd_lane_21: _inline_test_20 (instance 0)", () => {});
});

describe("simd_lane_22", () => {
    let _test = test;

    _test("execution of simd_lane_22: _inline_test_21 (instance 0)", () => {});
});

describe("simd_lane_23", () => {
    let _test = test;

    _test("execution of simd_lane_23: _inline_test_22 (instance 0)", () => {});
});

describe("simd_lane_24", () => {
    let _test = test;

    _test("execution of simd_lane_24: _inline_test_23 (instance 0)", () => {});
});

describe("simd_lane_25", () => {
    let _test = test;

    _test("execution of simd_lane_25: _inline_test_24 (instance 0)", () => {});
});

describe("simd_lane_26", () => {
    let _test = test;

    _test("execution of simd_lane_26: _inline_test_25 (instance 0)", () => {});
});

describe("simd_lane_27", () => {
    let _test = test;

    _test("execution of simd_lane_27: _inline_test_26 (instance 0)", () => {});
});

describe("simd_lane_28", () => {
    let _test = test;

    _test("execution of simd_lane_28: _inline_test_27 (instance 0)", () => {});
});

describe("simd_lane_29", () => {
    let _test = test;

    _test("execution of simd_lane_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_30", () => {
    let _test = test;

    _test("execution of simd_lane_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_31", () => {
    let _test = test;

    _test("execution of simd_lane_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_32", () => {
    let _test = test;

    _test("execution of simd_lane_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_33", () => {
    let _test = test;

    _test("execution of simd_lane_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_34", () => {
    let _test = test;

    _test("execution of simd_lane_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_35", () => {
    let _test = test;

    _test("execution of simd_lane_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_36", () => {
    let _test = test;

    _test("execution of simd_lane_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_37", () => {
    let _test = test;

    _test("execution of simd_lane_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_38", () => {
    let _test = test;

    _test("execution of simd_lane_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_39", () => {
    let _test = test;

    _test("execution of simd_lane_39: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_40", () => {
    let _test = test;

    _test("execution of simd_lane_40: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_41", () => {
    let _test = test;

    _test("execution of simd_lane_41: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_42", () => {
    let _test = test;

    _test("execution of simd_lane_42: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_43", () => {
    let _test = test;

    _test("execution of simd_lane_43: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_44", () => {
    let _test = test;

    _test("execution of simd_lane_44: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_45", () => {
    let _test = test;

    _test("execution of simd_lane_45: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_46", () => {
    let _test = test;

    _test("execution of simd_lane_46: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_47", () => {
    let _test = test;

    _test("execution of simd_lane_47: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_48", () => {
    let _test = test;

    _test("execution of simd_lane_48: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_49", () => {
    let _test = test;

    _test("execution of simd_lane_49: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_50", () => {
    let _test = test;

    _test("execution of simd_lane_50: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_51", () => {
    let _test = test;

    _test("execution of simd_lane_51: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_52", () => {
    let _test = test;

    _test("execution of simd_lane_52: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_53", () => {
    let _test = test;

    _test("execution of simd_lane_53: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_54", () => {
    let _test = test;

    _test("execution of simd_lane_54: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_55", () => {
    let _test = test;

    _test("execution of simd_lane_55: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_56", () => {
    let _test = test;

    _test("execution of simd_lane_56: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_57", () => {
    let _test = test;

    _test("execution of simd_lane_57: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_58", () => {
    let _test = test;

    _test("execution of simd_lane_58: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_59", () => {
    let _test = test;

    _test("execution of simd_lane_59: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_60", () => {
    let _test = test;

    _test("execution of simd_lane_60: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_61", () => {
    let _test = test;

    _test("execution of simd_lane_61: _inline_test_60 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_62", () => {
    let _test = test;

    _test("execution of simd_lane_62: _inline_test_61 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_63", () => {
    let _test = test;

    _test("execution of simd_lane_63: _inline_test_62 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_64", () => {
    let _test = test;

    _test("execution of simd_lane_64: _inline_test_63 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_65", () => {
    let _test = test;

    _test("execution of simd_lane_65: _inline_test_64 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_66", () => {
    let _test = test;

    _test("execution of simd_lane_66: _inline_test_65 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_67", () => {
    let _test = test;

    _test("execution of simd_lane_67: _inline_test_66 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_68", () => {
    let _test = test;

    _test("execution of simd_lane_68: _inline_test_67 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_69", () => {
    let _test = test;

    _test("execution of simd_lane_69: _inline_test_68 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_70", () => {
    let _test = test;

    _test("execution of simd_lane_70: _inline_test_69 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_71", () => {
    let _test = test;

    _test("execution of simd_lane_71: _inline_test_70 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_72", () => {
    let _test = test;

    _test("execution of simd_lane_72: _inline_test_71 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_73", () => {
    let _test = test;

    _test("execution of simd_lane_73: _inline_test_72 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_74", () => {
    let _test = test;

    _test("execution of simd_lane_74: _inline_test_73 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_75", () => {
    let _test = test;

    _test("execution of simd_lane_75: _inline_test_74 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_76", () => {
    let _test = test;

    _test("execution of simd_lane_76: _inline_test_75 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_77", () => {
    let _test = test;

    _test("execution of simd_lane_77: _inline_test_76 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_78", () => {
    let _test = test;

    _test("execution of simd_lane_78: _inline_test_77 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_79", () => {
    let _test = test;

    _test("execution of simd_lane_79: _inline_test_78 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_80", () => {
    let _test = test;

    _test("execution of simd_lane_80: _inline_test_79 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_81", () => {
    let _test = test;

    _test("execution of simd_lane_81: _inline_test_80 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_82", () => {
    let _test = test;

    _test("execution of simd_lane_82: _inline_test_81 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_83", () => {
    let _test = test;

    _test("execution of simd_lane_83: _inline_test_82 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_84", () => {
    let _test = test;

    _test("execution of simd_lane_84: _inline_test_83 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_85", () => {
    let _test = test;

    _test("execution of simd_lane_85: _inline_test_84 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_86", () => {
    let _test = test;

    _test("execution of simd_lane_86: _inline_test_85 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_87", () => {
    let _test = test;

    _test("execution of simd_lane_87: _inline_test_86 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_88", () => {
    let _test = test;

    _test("execution of simd_lane_88: _inline_test_87 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_89", () => {
    let _test = test;

    _test("execution of simd_lane_89: _inline_test_88 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_90", () => {
    let _test = test;

    _test("execution of simd_lane_90: _inline_test_89 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_91", () => {
    let _test = test;

    _test("execution of simd_lane_91: _inline_test_90 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_92", () => {
    let _test = test;

    _test("execution of simd_lane_92: _inline_test_91 (instance 0)", () => {});
});

describe("simd_lane_93", () => {
    let _test = test;

    _test("execution of simd_lane_93: _inline_test_92 (instance 0)", () => {});
});

describe("simd_lane_94", () => {
    let _test = test;

    _test("execution of simd_lane_94: _inline_test_93 (instance 0)", () => {});
});

describe("simd_lane_95", () => {
    let _test = test;

    _test("execution of simd_lane_95: _inline_test_94 (instance 0)", () => {});
});

describe("simd_lane_96", () => {
    let _test = test;

    _test("execution of simd_lane_96: _inline_test_95 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_97", () => {
    let _test = test;

    _test("execution of simd_lane_97: _inline_test_96 (instance 0)", () => {});
});

describe("simd_lane_98", () => {
    let _test = test;

    _test("execution of simd_lane_98: _inline_test_97 (instance 0)", () => {});
});

describe("simd_lane_99", () => {
    let _test = test;

    _test("execution of simd_lane_99: _inline_test_98 (instance 0)", () => {});
});

describe("simd_lane_100", () => {
    let _test = test;

    _test("execution of simd_lane_100: _inline_test_99 (instance 0)", () => {});
});

describe("simd_lane_101", () => {
    let _test = test;

    _test("execution of simd_lane_101: _inline_test_100 (instance 0)", () => {});
});

describe("simd_lane_102", () => {
    let _test = test;

    _test("execution of simd_lane_102: _inline_test_101 (instance 0)", () => {});
});

describe("simd_lane_103", () => {
    let _test = test;

    _test("execution of simd_lane_103: _inline_test_102 (instance 0)", () => {});
});

describe("simd_lane_104", () => {
    let _test = test;

    _test("execution of simd_lane_104: _inline_test_103 (instance 0)", () => {});
});

describe("simd_lane_105", () => {
    let _test = test;

    _test("execution of simd_lane_105: _inline_test_104 (instance 0)", () => {});
});

describe("simd_lane_106", () => {
    let _test = test;

    _test("execution of simd_lane_106: _inline_test_105 (instance 0)", () => {});
});

describe("simd_lane_107", () => {
    let _test = test;

    _test("execution of simd_lane_107: _inline_test_106 (instance 0)", () => {});
});

describe("simd_lane_108", () => {
    let _test = test;

    _test("execution of simd_lane_108: _inline_test_107 (instance 0)", () => {});
});

describe("simd_lane_109", () => {
    let _test = test;

    _test("execution of simd_lane_109: _inline_test_108 (instance 0)", () => {});
});

describe("simd_lane_110", () => {
    let _test = test;

    _test("execution of simd_lane_110: _inline_test_109 (instance 0)", () => {});
});

describe("simd_lane_111", () => {
    let _test = test;

    _test("execution of simd_lane_111: _inline_test_110 (instance 0)", () => {});
});

describe("simd_lane_112", () => {
    let _test = test;

    _test("execution of simd_lane_112: _inline_test_111 (instance 0)", () => {});
});

describe("simd_lane_113", () => {
    let _test = test;

    _test("execution of simd_lane_113: _inline_test_112 (instance 0)", () => {});
});

describe("simd_lane_114", () => {
    let _test = test;

    _test("execution of simd_lane_114: _inline_test_113 (instance 0)", () => {});
});

describe("simd_lane_115", () => {
    let _test = test;

    _test("execution of simd_lane_115: _inline_test_114 (instance 0)", () => {});
});

describe("simd_lane_116", () => {
    let _test = test;

    _test("execution of simd_lane_116: _inline_test_115 (instance 0)", () => {});
});

describe("simd_lane_117", () => {
    let _test = test;

    _test("execution of simd_lane_117: _inline_test_116 (instance 0)", () => {});
});

describe("simd_lane_118", () => {
    let _test = test;

    _test("execution of simd_lane_118: _inline_test_117 (instance 0)", () => {});
});

describe("simd_lane_119", () => {
    let _test = test;

    _test("execution of simd_lane_119: _inline_test_118 (instance 0)", () => {});
});

describe("simd_lane_120", () => {
    let _test = test;

    _test("execution of simd_lane_120: _inline_test_119 (instance 0)", () => {});
});

describe("simd_lane_121", () => {
    let _test = test;

    _test("execution of simd_lane_121: _inline_test_120 (instance 0)", () => {});
});

describe("simd_lane_122", () => {
    let _test = test;

    _test("execution of simd_lane_122: _inline_test_121 (instance 0)", () => {});
});

describe("simd_lane_123", () => {
    let _test = test;

    _test("execution of simd_lane_123: _inline_test_122 (instance 0)", () => {});
});

describe("simd_lane_124", () => {
    let _test = test;

    _test("execution of simd_lane_124: _inline_test_123 (instance 0)", () => {});
});

describe("simd_lane_125", () => {
    let _test = test;

    _test("execution of simd_lane_125: _inline_test_124 (instance 0)", () => {});
});

describe("simd_lane_126", () => {
    let _test = test;

    _test("execution of simd_lane_126: _inline_test_125 (instance 0)", () => {});
});

describe("simd_lane_127", () => {
    let _test = test;

    _test("execution of simd_lane_127: _inline_test_126 (instance 0)", () => {});
});

describe("simd_lane_128", () => {
    let _test = test;

    _test("execution of simd_lane_128: _inline_test_127 (instance 0)", () => {});
});

describe("simd_lane_129", () => {
    let _test = test;

    _test("execution of simd_lane_129: _inline_test_128 (instance 0)", () => {});
});

describe("simd_lane_130", () => {
    let _test = test;

    _test("execution of simd_lane_130: _inline_test_129 (instance 0)", () => {});
});

describe("simd_lane_131", () => {
    let _test = test;

    _test("execution of simd_lane_131: _inline_test_130 (instance 0)", () => {});
});

describe("simd_lane_132", () => {
    let _test = test;

    _test("execution of simd_lane_132: _inline_test_131 (instance 0)", () => {});
});

describe("simd_lane_133", () => {
    let _test = test;

    _test("execution of simd_lane_133: _inline_test_132 (instance 0)", () => {});
});

describe("simd_lane_134", () => {
    let _test = test;

    _test("execution of simd_lane_134: _inline_test_133 (instance 0)", () => {});
});

describe("simd_lane_135", () => {
    let _test = test;

    _test("execution of simd_lane_135: _inline_test_134 (instance 0)", () => {});
});

describe("simd_lane_136", () => {
    let _test = test;

    _test("execution of simd_lane_136: _inline_test_135 (instance 0)", () => {});
});

describe("simd_lane_137", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_137.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_lane_137: i8x16_extract_lane_s (instance 0)", () => {
        let _i8x16_extract_lane_s = module.getExport("i8x16_extract_lane_s");
        expect(_i8x16_extract_lane_s).not.toBeUndefined();
        let _i8x16_extract_lane_s_result = module.invoke(_i8x16_extract_lane_s, 0, 0);
        expect(_i8x16_extract_lane_s_result).toBe(0);
    });

    _test("execution of simd_lane_137: i8x16_extract_lane_u (instance 0)", () => {
        let _i8x16_extract_lane_u = module.getExport("i8x16_extract_lane_u");
        expect(_i8x16_extract_lane_u).not.toBeUndefined();
        let _i8x16_extract_lane_u_result = module.invoke(_i8x16_extract_lane_u, 0, 0);
        expect(_i8x16_extract_lane_u_result).toBe(0);
    });

    _test("execution of simd_lane_137: i16x8_extract_lane_s (instance 0)", () => {
        let _i16x8_extract_lane_s = module.getExport("i16x8_extract_lane_s");
        expect(_i16x8_extract_lane_s).not.toBeUndefined();
        let _i16x8_extract_lane_s_result = module.invoke(_i16x8_extract_lane_s, 0, 0);
        expect(_i16x8_extract_lane_s_result).toBe(0);
    });

    _test("execution of simd_lane_137: i16x8_extract_lane_u (instance 0)", () => {
        let _i16x8_extract_lane_u = module.getExport("i16x8_extract_lane_u");
        expect(_i16x8_extract_lane_u).not.toBeUndefined();
        let _i16x8_extract_lane_u_result = module.invoke(_i16x8_extract_lane_u, 0, 0);
        expect(_i16x8_extract_lane_u_result).toBe(0);
    });

    _test("execution of simd_lane_137: i32x4_extract_lane (instance 0)", () => {
        let _i32x4_extract_lane = module.getExport("i32x4_extract_lane");
        expect(_i32x4_extract_lane).not.toBeUndefined();
        let _i32x4_extract_lane_result = module.invoke(_i32x4_extract_lane, 0, 0);
        expect(_i32x4_extract_lane_result).toBe(0);
    });

    _test("execution of simd_lane_137: f32x4_extract_lane (instance 0)", () => {
        let _f32x4_extract_lane = module.getExport("f32x4_extract_lane");
        expect(_f32x4_extract_lane).not.toBeUndefined();
        let _f32x4_extract_lane_result = module.invoke(_f32x4_extract_lane, 0, 0);
        expect(_f32x4_extract_lane_result).toBe(0);
    });

    _test("execution of simd_lane_137: i8x16_replace_lane-s (instance 0)", () => {
        let _i8x16_replace_lane_s = module.getExport("i8x16_replace_lane-s");
        expect(_i8x16_replace_lane_s).not.toBeUndefined();
        let _i8x16_replace_lane_s_result = module.invoke(_i8x16_replace_lane_s, 0, 255);
        expect(_i8x16_replace_lane_s_result).toBe(-1);
    });

    _test("execution of simd_lane_137: i8x16_replace_lane-u (instance 0)", () => {
        let _i8x16_replace_lane_u = module.getExport("i8x16_replace_lane-u");
        expect(_i8x16_replace_lane_u).not.toBeUndefined();
        let _i8x16_replace_lane_u_result = module.invoke(_i8x16_replace_lane_u, 0, 255);
        expect(_i8x16_replace_lane_u_result).toBe(255);
    });

    _test("execution of simd_lane_137: i16x8_replace_lane-s (instance 0)", () => {
        let _i16x8_replace_lane_s = module.getExport("i16x8_replace_lane-s");
        expect(_i16x8_replace_lane_s).not.toBeUndefined();
        let _i16x8_replace_lane_s_result = module.invoke(_i16x8_replace_lane_s, 0, 65535);
        expect(_i16x8_replace_lane_s_result).toBe(-1);
    });

    _test("execution of simd_lane_137: i16x8_replace_lane-u (instance 0)", () => {
        let _i16x8_replace_lane_u = module.getExport("i16x8_replace_lane-u");
        expect(_i16x8_replace_lane_u).not.toBeUndefined();
        let _i16x8_replace_lane_u_result = module.invoke(_i16x8_replace_lane_u, 0, 65535);
        expect(_i16x8_replace_lane_u_result).toBe(65535);
    });

    _test("execution of simd_lane_137: i32x4_replace_lane (instance 0)", () => {
        let _i32x4_replace_lane = module.getExport("i32x4_replace_lane");
        expect(_i32x4_replace_lane).not.toBeUndefined();
        let _i32x4_replace_lane_result = module.invoke(_i32x4_replace_lane, 0, -1);
        expect(_i32x4_replace_lane_result).toBe(-1);
    });

    _test("execution of simd_lane_137: f32x4_replace_lane (instance 0)", () => {
        let _f32x4_replace_lane = module.getExport("f32x4_replace_lane");
        expect(_f32x4_replace_lane).not.toBeUndefined();
        let _f32x4_replace_lane_result = module.invoke(_f32x4_replace_lane, 0, 1.25);
        expect(_f32x4_replace_lane_result).toBe(1.25);
    });

    _test("execution of simd_lane_137: i64x2_extract_lane (instance 0)", () => {
        let _i64x2_extract_lane = module.getExport("i64x2_extract_lane");
        expect(_i64x2_extract_lane).not.toBeUndefined();
        let _i64x2_extract_lane_result = module.invoke(_i64x2_extract_lane, 0, 0);
        expect(_i64x2_extract_lane_result).toBe(0);
    });

    _test("execution of simd_lane_137: f64x2_extract_lane (instance 0)", () => {
        let _f64x2_extract_lane = module.getExport("f64x2_extract_lane");
        expect(_f64x2_extract_lane).not.toBeUndefined();
        let _f64x2_extract_lane_result = module.invoke(_f64x2_extract_lane, 0, 0);
        expect(_f64x2_extract_lane_result).toBe(0);
    });

    _test("execution of simd_lane_137: i64x2_replace_lane (instance 0)", () => {
        let _i64x2_replace_lane = module.getExport("i64x2_replace_lane");
        expect(_i64x2_replace_lane).not.toBeUndefined();
        let _i64x2_replace_lane_result = module.invoke(_i64x2_replace_lane, 0, -1n);
        expect(_i64x2_replace_lane_result).toBe(-1n);
    });

    _test("execution of simd_lane_137: f64x2_replace_lane (instance 0)", () => {
        let _f64x2_replace_lane = module.getExport("f64x2_replace_lane");
        expect(_f64x2_replace_lane).not.toBeUndefined();
        let _f64x2_replace_lane_result = module.invoke(_f64x2_replace_lane, 0, 2.5);
        expect(_f64x2_replace_lane_result).toBe(2.5);
    });

    _test("execution of simd_lane_137: as-v8x16_swizzle-operand (instance 0)", () => {
        let _as_v8x16_swizzle_operand = module.getExport("as-v8x16_swizzle-operand");
        expect(_as_v8x16_swizzle_operand).not.toBeUndefined();
        let _as_v8x16_swizzle_operand_result = module.invoke(_as_v8x16_swizzle_operand, 0, 255, 0);
        expect(_as_v8x16_swizzle_operand_result).toBe(0);
    });

    _test("execution of simd_lane_137: as-v8x16_shuffle-operands (instance 0)", () => {
        let _as_v8x16_shuffle_operands = module.getExport("as-v8x16_shuffle-operands");
        expect(_as_v8x16_shuffle_operands).not.toBeUndefined();
        let _as_v8x16_shuffle_operands_result = module.invoke(
            _as_v8x16_shuffle_operands,
            0,
            1,
            0,
            0
        );
        expect(_as_v8x16_shuffle_operands_result).toBe(0);
    });
});

describe("simd_lane_138", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_138.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_lane_138: as-i8x16_splat-operand (instance 0)", () => {
        let _as_i8x16_splat_operand = module.getExport("as-i8x16_splat-operand");
        expect(_as_i8x16_splat_operand).not.toBeUndefined();
        let _as_i8x16_splat_operand_result = module.invoke(_as_i8x16_splat_operand, 0);
        expect(_as_i8x16_splat_operand_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i16x8_splat-operand (instance 0)", () => {
        let _as_i16x8_splat_operand = module.getExport("as-i16x8_splat-operand");
        expect(_as_i16x8_splat_operand).not.toBeUndefined();
        let _as_i16x8_splat_operand_result = module.invoke(_as_i16x8_splat_operand, 0);
        expect(_as_i16x8_splat_operand_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i32x4_splat-operand (instance 0)", () => {
        let _as_i32x4_splat_operand = module.getExport("as-i32x4_splat-operand");
        expect(_as_i32x4_splat_operand).not.toBeUndefined();
        let _as_i32x4_splat_operand_result = module.invoke(_as_i32x4_splat_operand, 0);
        expect(_as_i32x4_splat_operand_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-f32x4_splat-operand (instance 0)", () => {
        let _as_f32x4_splat_operand = module.getExport("as-f32x4_splat-operand");
        expect(_as_f32x4_splat_operand).not.toBeUndefined();
        let _as_f32x4_splat_operand_result = module.invoke(_as_f32x4_splat_operand, 0);
        expect(_as_f32x4_splat_operand_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i64x2_splat-operand (instance 0)", () => {
        let _as_i64x2_splat_operand = module.getExport("as-i64x2_splat-operand");
        expect(_as_i64x2_splat_operand).not.toBeUndefined();
        let _as_i64x2_splat_operand_result = module.invoke(_as_i64x2_splat_operand, 0);
        expect(_as_i64x2_splat_operand_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-f64x2_splat-operand (instance 0)", () => {
        let _as_f64x2_splat_operand = module.getExport("as-f64x2_splat-operand");
        expect(_as_f64x2_splat_operand).not.toBeUndefined();
        let _as_f64x2_splat_operand_result = module.invoke(_as_f64x2_splat_operand, 0);
        expect(_as_f64x2_splat_operand_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i8x16_add-operands (instance 0)", () => {
        let _as_i8x16_add_operands = module.getExport("as-i8x16_add-operands");
        expect(_as_i8x16_add_operands).not.toBeUndefined();
        let _as_i8x16_add_operands_result = module.invoke(_as_i8x16_add_operands, 0, 1, 0, 1);
        expect(_as_i8x16_add_operands_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i16x8_add-operands (instance 0)", () => {
        let _as_i16x8_add_operands = module.getExport("as-i16x8_add-operands");
        expect(_as_i16x8_add_operands).not.toBeUndefined();
        let _as_i16x8_add_operands_result = module.invoke(_as_i16x8_add_operands, 0, 1, 0, 1);
        expect(_as_i16x8_add_operands_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i32x4_add-operands (instance 0)", () => {
        let _as_i32x4_add_operands = module.getExport("as-i32x4_add-operands");
        expect(_as_i32x4_add_operands).not.toBeUndefined();
        let _as_i32x4_add_operands_result = module.invoke(_as_i32x4_add_operands, 0, 1, 0, 1);
        expect(_as_i32x4_add_operands_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i64x2_add-operands (instance 0)", () => {
        let _as_i64x2_add_operands = module.getExport("as-i64x2_add-operands");
        expect(_as_i64x2_add_operands).not.toBeUndefined();
        let _as_i64x2_add_operands_result = module.invoke(_as_i64x2_add_operands, 0, 1n, 0, 1n);
        expect(_as_i64x2_add_operands_result).toBe(0);
    });

    _test("execution of simd_lane_138: swizzle-as-i8x16_add-operands (instance 0)", () => {
        let _swizzle_as_i8x16_add_operands = module.getExport("swizzle-as-i8x16_add-operands");
        expect(_swizzle_as_i8x16_add_operands).not.toBeUndefined();
        let _swizzle_as_i8x16_add_operands_result = module.invoke(
            _swizzle_as_i8x16_add_operands,
            0,
            0,
            0,
            0
        );
        expect(_swizzle_as_i8x16_add_operands_result).toBe(0);
    });

    _test("execution of simd_lane_138: shuffle-as-i8x16_sub-operands (instance 0)", () => {
        let _shuffle_as_i8x16_sub_operands = module.getExport("shuffle-as-i8x16_sub-operands");
        expect(_shuffle_as_i8x16_sub_operands).not.toBeUndefined();
        let _shuffle_as_i8x16_sub_operands_result = module.invoke(
            _shuffle_as_i8x16_sub_operands,
            0,
            0,
            0,
            0
        );
        expect(_shuffle_as_i8x16_sub_operands_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i8x16_any_true-operand (instance 0)", () => {
        let _as_i8x16_any_true_operand = module.getExport("as-i8x16_any_true-operand");
        expect(_as_i8x16_any_true_operand).not.toBeUndefined();
        let _as_i8x16_any_true_operand_result = module.invoke(_as_i8x16_any_true_operand, 0, 1);
        expect(_as_i8x16_any_true_operand_result).toBe(1);
    });

    _test("execution of simd_lane_138: as-i16x8_any_true-operand (instance 0)", () => {
        let _as_i16x8_any_true_operand = module.getExport("as-i16x8_any_true-operand");
        expect(_as_i16x8_any_true_operand).not.toBeUndefined();
        let _as_i16x8_any_true_operand_result = module.invoke(_as_i16x8_any_true_operand, 0, 1);
        expect(_as_i16x8_any_true_operand_result).toBe(1);
    });

    _test("execution of simd_lane_138: as-i32x4_any_true-operand1 (instance 0)", () => {
        let _as_i32x4_any_true_operand1 = module.getExport("as-i32x4_any_true-operand1");
        expect(_as_i32x4_any_true_operand1).not.toBeUndefined();
        let _as_i32x4_any_true_operand1_result = module.invoke(_as_i32x4_any_true_operand1, 0, 0);
        expect(_as_i32x4_any_true_operand1_result).toBe(0);
    });

    _test("execution of simd_lane_138: as-i32x4_any_true-operand2 (instance 0)", () => {
        let _as_i32x4_any_true_operand2 = module.getExport("as-i32x4_any_true-operand2");
        expect(_as_i32x4_any_true_operand2).not.toBeUndefined();
        let _as_i32x4_any_true_operand2_result = module.invoke(_as_i32x4_any_true_operand2, 0, 0n);
        expect(_as_i32x4_any_true_operand2_result).toBe(0);
    });

    _test("execution of simd_lane_138: swizzle-as-i8x16_all_true-operands (instance 0)", () => {
        let _swizzle_as_i8x16_all_true_operands = module.getExport(
            "swizzle-as-i8x16_all_true-operands"
        );
        expect(_swizzle_as_i8x16_all_true_operands).not.toBeUndefined();
        let _swizzle_as_i8x16_all_true_operands_result = module.invoke(
            _swizzle_as_i8x16_all_true_operands,
            0,
            0
        );
        expect(_swizzle_as_i8x16_all_true_operands_result).toBe(1);
    });

    _test("execution of simd_lane_138: swizzle-as-i8x16_all_true-operands (instance 1)", () => {
        let _swizzle_as_i8x16_all_true_operands = module.getExport(
            "swizzle-as-i8x16_all_true-operands"
        );
        expect(_swizzle_as_i8x16_all_true_operands).not.toBeUndefined();
        let _swizzle_as_i8x16_all_true_operands_result = module.invoke(
            _swizzle_as_i8x16_all_true_operands,
            0,
            0
        );
        expect(_swizzle_as_i8x16_all_true_operands_result).toBe(0);
    });

    _test("execution of simd_lane_138: shuffle-as-i8x16_any_true-operands (instance 0)", () => {
        let _shuffle_as_i8x16_any_true_operands = module.getExport(
            "shuffle-as-i8x16_any_true-operands"
        );
        expect(_shuffle_as_i8x16_any_true_operands).not.toBeUndefined();
        let _shuffle_as_i8x16_any_true_operands_result = module.invoke(
            _shuffle_as_i8x16_any_true_operands,
            0,
            0
        );
        expect(_shuffle_as_i8x16_any_true_operands_result).toBe(1);
    });
});

describe("simd_lane_139", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_139.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_lane_139: as-v128_store-operand-1 (instance 0)", () => {
        let _as_v128_store_operand_1 = module.getExport("as-v128_store-operand-1");
        expect(_as_v128_store_operand_1).not.toBeUndefined();
        let _as_v128_store_operand_1_result = module.invoke(_as_v128_store_operand_1, 0, 1);
        expect(_as_v128_store_operand_1_result).toBe(0);
    });

    _test("execution of simd_lane_139: as-v128_store-operand-2 (instance 0)", () => {
        let _as_v128_store_operand_2 = module.getExport("as-v128_store-operand-2");
        expect(_as_v128_store_operand_2).not.toBeUndefined();
        let _as_v128_store_operand_2_result = module.invoke(_as_v128_store_operand_2, 0, 256);
        expect(_as_v128_store_operand_2_result).toBe(0);
    });

    _test("execution of simd_lane_139: as-v128_store-operand-3 (instance 0)", () => {
        let _as_v128_store_operand_3 = module.getExport("as-v128_store-operand-3");
        expect(_as_v128_store_operand_3).not.toBeUndefined();
        let _as_v128_store_operand_3_result = module.invoke(_as_v128_store_operand_3, 0, -1);
        expect(_as_v128_store_operand_3_result).toBe(0);
    });

    _test("execution of simd_lane_139: as-v128_store-operand-4 (instance 0)", () => {
        let _as_v128_store_operand_4 = module.getExport("as-v128_store-operand-4");
        expect(_as_v128_store_operand_4).not.toBeUndefined();
        let _as_v128_store_operand_4_result = module.invoke(_as_v128_store_operand_4, 0, 3.14);
        expect(_as_v128_store_operand_4_result).toBe(0);
    });

    _test("execution of simd_lane_139: as-v128_store-operand-5 (instance 0)", () => {
        let _as_v128_store_operand_5 = module.getExport("as-v128_store-operand-5");
        expect(_as_v128_store_operand_5).not.toBeUndefined();
        let _as_v128_store_operand_5_result = module.invoke(_as_v128_store_operand_5, 0, -1n);
        expect(_as_v128_store_operand_5_result).toBe(0);
    });

    _test("execution of simd_lane_139: as-v128_store-operand-6 (instance 0)", () => {
        let _as_v128_store_operand_6 = module.getExport("as-v128_store-operand-6");
        expect(_as_v128_store_operand_6).not.toBeUndefined();
        let _as_v128_store_operand_6_result = module.invoke(_as_v128_store_operand_6, 0, 3.14);
        expect(_as_v128_store_operand_6_result).toBe(0);
    });
});

describe("simd_lane_140", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_140.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_lane_140: as-if-condition-value (instance 0)", () => {
        let _as_if_condition_value = module.getExport("as-if-condition-value");
        expect(_as_if_condition_value).not.toBeUndefined();
        let _as_if_condition_value_result = module.invoke(_as_if_condition_value, 0);
        expect(_as_if_condition_value_result).toBe(0);
    });

    _test("execution of simd_lane_140: as-return-value-1 (instance 0)", () => {
        let _as_return_value_1 = module.getExport("as-return-value-1");
        expect(_as_return_value_1).not.toBeUndefined();
        let _as_return_value_1_result = module.invoke(_as_return_value_1, 0, 1);
        expect(_as_return_value_1_result).toBe(0);
    });

    _test("execution of simd_lane_140: as-local_set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local_set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 0);
        expect(_as_local_set_value_result).toBe(-1);
    });

    _test("execution of simd_lane_140: as-global_set-value-1 (instance 0)", () => {
        let _as_global_set_value_1 = module.getExport("as-global_set-value-1");
        expect(_as_global_set_value_1).not.toBeUndefined();
        let _as_global_set_value_1_result = module.invoke(_as_global_set_value_1, 0, 3.14);
        expect(_as_global_set_value_1_result).toBe(0);
    });

    _test("execution of simd_lane_140: as-return-value-2 (instance 0)", () => {
        let _as_return_value_2 = module.getExport("as-return-value-2");
        expect(_as_return_value_2).not.toBeUndefined();
        let _as_return_value_2_result = module.invoke(_as_return_value_2, 0, 0);
        expect(_as_return_value_2_result).toBe(0);
    });

    _test("execution of simd_lane_140: as-global_set-value-2 (instance 0)", () => {
        let _as_global_set_value_2 = module.getExport("as-global_set-value-2");
        expect(_as_global_set_value_2).not.toBeUndefined();
        let _as_global_set_value_2_result = module.invoke(_as_global_set_value_2, 0, 0);
        expect(_as_global_set_value_2_result).toBe(0);
    });

    _test("execution of simd_lane_140: as-local_set-value-1 (instance 0)", () => {
        let _as_local_set_value_1 = module.getExport("as-local_set-value-1");
        expect(_as_local_set_value_1).not.toBeUndefined();
        let _as_local_set_value_1_result = module.invoke(_as_local_set_value_1, 0);
        expect(_as_local_set_value_1_result).toBe(-1n);
    });

    _test("execution of simd_lane_140: as-global_set-value-3 (instance 0)", () => {
        let _as_global_set_value_3 = module.getExport("as-global_set-value-3");
        expect(_as_global_set_value_3).not.toBeUndefined();
        let _as_global_set_value_3_result = module.invoke(_as_global_set_value_3, 0, 3.14);
        expect(_as_global_set_value_3_result).toBe(0);
    });
});

describe("simd_lane_141", () => {
    let _test = test;

    _test("execution of simd_lane_141: _inline_test_136 (instance 0)", () => {});
});

describe("simd_lane_142", () => {
    let _test = test;

    _test("execution of simd_lane_142: _inline_test_137 (instance 0)", () => {});
});

describe("simd_lane_143", () => {
    let _test = test;

    _test("execution of simd_lane_143: _inline_test_138 (instance 0)", () => {});
});

describe("simd_lane_144", () => {
    let _test = test;

    _test("execution of simd_lane_144: _inline_test_139 (instance 0)", () => {});
});

describe("simd_lane_145", () => {
    let _test = test;

    _test("execution of simd_lane_145: _inline_test_140 (instance 0)", () => {});
});

describe("simd_lane_146", () => {
    let _test = test;

    _test("execution of simd_lane_146: _inline_test_141 (instance 0)", () => {});
});

describe("simd_lane_147", () => {
    let _test = test;

    _test("execution of simd_lane_147: _inline_test_142 (instance 0)", () => {});
});

describe("simd_lane_148", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_148.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("simd_lane_149", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_149.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("simd_lane_150", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_150.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("simd_lane_151", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_151.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("simd_lane_152", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_152.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("simd_lane_153", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_153.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("simd_lane_154", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_lane_154.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("simd_lane_155", () => {
    let _test = test;

    _test("execution of simd_lane_155: _inline_test_143 (instance 0)", () => {});
});

describe("simd_lane_156", () => {
    let _test = test;

    _test("execution of simd_lane_156: _inline_test_144 (instance 0)", () => {});
});

describe("simd_lane_157", () => {
    let _test = test;

    _test("execution of simd_lane_157: _inline_test_145 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_158", () => {
    let _test = test;

    _test("execution of simd_lane_158: _inline_test_146 (instance 0)", () => {});
});

describe("simd_lane_159", () => {
    let _test = test;

    _test("execution of simd_lane_159: _inline_test_147 (instance 0)", () => {});
});

describe("simd_lane_160", () => {
    let _test = test;

    _test("execution of simd_lane_160: _inline_test_148 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_161", () => {
    let _test = test;

    _test("execution of simd_lane_161: _inline_test_149 (instance 0)", () => {});
});

describe("simd_lane_162", () => {
    let _test = test;

    _test("execution of simd_lane_162: _inline_test_150 (instance 0)", () => {});
});

describe("simd_lane_163", () => {
    let _test = test;

    _test("execution of simd_lane_163: _inline_test_151 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_164", () => {
    let _test = test;

    _test("execution of simd_lane_164: _inline_test_152 (instance 0)", () => {});
});

describe("simd_lane_165", () => {
    let _test = test;

    _test("execution of simd_lane_165: _inline_test_153 (instance 0)", () => {});
});

describe("simd_lane_166", () => {
    let _test = test;

    _test("execution of simd_lane_166: _inline_test_154 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_167", () => {
    let _test = test;

    _test("execution of simd_lane_167: _inline_test_155 (instance 0)", () => {});
});

describe("simd_lane_168", () => {
    let _test = test;

    _test("execution of simd_lane_168: _inline_test_156 (instance 0)", () => {});
});

describe("simd_lane_169", () => {
    let _test = test;

    _test("execution of simd_lane_169: _inline_test_157 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_170", () => {
    let _test = test;

    _test("execution of simd_lane_170: _inline_test_158 (instance 0)", () => {});
});

describe("simd_lane_171", () => {
    let _test = test;

    _test("execution of simd_lane_171: _inline_test_159 (instance 0)", () => {});
});

describe("simd_lane_172", () => {
    let _test = test;

    _test("execution of simd_lane_172: _inline_test_160 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_173", () => {
    let _test = test;

    _test("execution of simd_lane_173: _inline_test_161 (instance 0)", () => {});
});

describe("simd_lane_174", () => {
    let _test = test;

    _test("execution of simd_lane_174: _inline_test_162 (instance 0)", () => {});
});

describe("simd_lane_175", () => {
    let _test = test;

    _test("execution of simd_lane_175: _inline_test_163 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_176", () => {
    let _test = test;

    _test("execution of simd_lane_176: _inline_test_164 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_177", () => {
    let _test = test;

    _test("execution of simd_lane_177: _inline_test_165 (instance 0)", () => {});
});

describe("simd_lane_178", () => {
    let _test = test;

    _test("execution of simd_lane_178: _inline_test_166 (instance 0)", () => {});
});

describe("simd_lane_179", () => {
    let _test = test;

    _test("execution of simd_lane_179: _inline_test_167 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_180", () => {
    let _test = test;

    _test("execution of simd_lane_180: _inline_test_168 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_181", () => {
    let _test = test;

    _test("execution of simd_lane_181: _inline_test_169 (instance 0)", () => {});
});

describe("simd_lane_182", () => {
    let _test = test;

    _test("execution of simd_lane_182: _inline_test_170 (instance 0)", () => {});
});

describe("simd_lane_183", () => {
    let _test = test;

    _test("execution of simd_lane_183: _inline_test_171 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_184", () => {
    let _test = test;

    _test("execution of simd_lane_184: _inline_test_172 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_185", () => {
    let _test = test;

    _test("execution of simd_lane_185: _inline_test_173 (instance 0)", () => {});
});

describe("simd_lane_186", () => {
    let _test = test;

    _test("execution of simd_lane_186: _inline_test_174 (instance 0)", () => {});
});

describe("simd_lane_187", () => {
    let _test = test;

    _test("execution of simd_lane_187: _inline_test_175 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_188", () => {
    let _test = test;

    _test("execution of simd_lane_188: _inline_test_176 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_189", () => {
    let _test = test;

    _test("execution of simd_lane_189: _inline_test_177 (instance 0)", () => {});
});

describe("simd_lane_190", () => {
    let _test = test;

    _test("execution of simd_lane_190: _inline_test_178 (instance 0)", () => {});
});

describe("simd_lane_191", () => {
    let _test = test;

    _test("execution of simd_lane_191: _inline_test_179 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_192", () => {
    let _test = test;

    _test("execution of simd_lane_192: _inline_test_180 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_193", () => {
    let _test = test;

    _test("execution of simd_lane_193: _inline_test_181 (instance 0)", () => {});
});

describe("simd_lane_194", () => {
    let _test = test;

    _test("execution of simd_lane_194: _inline_test_182 (instance 0)", () => {});
});

describe("simd_lane_195", () => {
    let _test = test;

    _test("execution of simd_lane_195: _inline_test_183 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_196", () => {
    let _test = test;

    _test("execution of simd_lane_196: _inline_test_184 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_197", () => {
    let _test = test;

    _test("execution of simd_lane_197: _inline_test_185 (instance 0)", () => {});
});

describe("simd_lane_198", () => {
    let _test = test;

    _test("execution of simd_lane_198: _inline_test_186 (instance 0)", () => {});
});

describe("simd_lane_199", () => {
    let _test = test;

    _test("execution of simd_lane_199: _inline_test_187 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_lane_200", () => {
    let _test = test;

    _test("execution of simd_lane_200: _inline_test_188 (instance 0)", () => {});
});
