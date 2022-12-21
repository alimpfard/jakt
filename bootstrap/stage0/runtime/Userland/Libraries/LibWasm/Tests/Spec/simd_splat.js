let globalImportObject = {};
let namedModules = {};

describe("simd_splat_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_splat_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_splat_0: i8x16.splat (instance 0)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 0);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 1)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 5);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 2)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, -5);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 3)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 257);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 4)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 255);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 5)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, -128);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 6)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 127);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 7)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, -129);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 8)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 128);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 9)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 65407);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 10)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 128);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i8x16.splat (instance 11)", () => {
        let _i8x16_splat = module.getExport("i8x16.splat");
        expect(_i8x16_splat).not.toBeUndefined();
        let _i8x16_splat_result = module.invoke(_i8x16_splat, 171);
        expect(_i8x16_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 0)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 0);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 1)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 5);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 2)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, -5);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 3)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 65537);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 4)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 65535);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 5)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, -32768);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 6)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 32767);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 7)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, -32769);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 8)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 32768);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 9)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, -32769);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 10)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 32768);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 11)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 43981);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 12)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 012345);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i16x8.splat (instance 13)", () => {
        let _i16x8_splat = module.getExport("i16x8.splat");
        expect(_i16x8_splat).not.toBeUndefined();
        let _i16x8_splat_result = module.invoke(_i16x8_splat, 4660);
        expect(_i16x8_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 0)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, 0);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 1)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, 5);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 2)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, -5);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 3)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, -1);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 4)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, 4294967295);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 5)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, -2147483648);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 6)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, 2147483647);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 7)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, 2147483648);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 8)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, 01234567890);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i32x4.splat (instance 9)", () => {
        let _i32x4_splat = module.getExport("i32x4.splat");
        expect(_i32x4_splat).not.toBeUndefined();
        let _i32x4_splat_result = module.invoke(_i32x4_splat, 305419896);
        expect(_i32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 0)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 0.0);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 1)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 1.1);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 2)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, -1.1);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 3)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 1e38);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 4)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, -1e38);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 5)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 3.4028234663852886e38);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 6)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, -3.4028234663852886e38);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 7)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 1.7014118346046923e38);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 8)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, -1.7014118346046923e38);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 9)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, Infinity);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 10)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, -Infinity);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 11)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, NaN);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 12)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, NaN);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 13)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, NaN);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 14)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 123456789.0);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 15)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 123456789.0);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 16)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 8.19855292164869e16);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 17)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 8.19855292164869e16);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 18)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 1.23456789e27);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 19)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 1.23456789e27);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 20)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 4.298402914185348e22);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f32x4.splat (instance 21)", () => {
        let _f32x4_splat = module.getExport("f32x4.splat");
        expect(_f32x4_splat).not.toBeUndefined();
        let _f32x4_splat_result = module.invoke(_f32x4_splat, 156374987061.47556);
        expect(_f32x4_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 0)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, 0n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 1)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, -0n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 2)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, 1n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 3)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, -1n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 4)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, -9223372036854775808n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 5)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, -9223372036854775808n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 6)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, 9223372036854775807n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 7)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, 18446744073709551615n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 8)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, 9223372036854775807n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 9)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, -1n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 10)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, -0x8000000000000000n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 11)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, -0x8000000000000000n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 12)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, 1234567890123456789n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: i64x2.splat (instance 13)", () => {
        let _i64x2_splat = module.getExport("i64x2.splat");
        expect(_i64x2_splat).not.toBeUndefined();
        let _i64x2_splat_result = module.invoke(_i64x2_splat, 1311768467294899695n);
        expect(_i64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 0)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 0.0);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 1)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -0.0);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 2)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 1.1);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 3)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -1.1);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 4)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 5e-324);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 5)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -5e-324);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 6)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 2.2250738585072014e-308);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 7)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -2.2250738585072014e-308);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 8)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 0.5);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 9)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -0.5);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 10)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 1.0);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 11)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -1.0);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 12)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 6.283185307179586);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 13)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -6.283185307179586);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 14)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 1.7976931348623157e308);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 15)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -1.7976931348623157e308);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 16)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, Infinity);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 17)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -Infinity);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 18)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, NaN);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 19)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -NaN);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 20)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, NaN);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 21)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, -NaN);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 22)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 123456789.0);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 23)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 123456789.0);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 24)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 1.3754889325393114e24);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 25)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 1.3754889325393114e24);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 26)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 1.23456789e27);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 27)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 1.23456789e27);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 28)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 7.211523414631705e29);
        expect(_f64x2_splat_result).toBe(0);
    });

    _test("execution of simd_splat_0: f64x2.splat (instance 29)", () => {
        let _f64x2_splat = module.getExport("f64x2.splat");
        expect(_f64x2_splat).not.toBeUndefined();
        let _f64x2_splat_result = module.invoke(_f64x2_splat, 2.6235369349275807e18);
        expect(_f64x2_splat_result).toBe(0);
    });
});

describe("simd_splat_1", () => {
    let _test = test;

    _test("execution of simd_splat_1: _inline_test_0 (instance 0)", () => {});
});

describe("simd_splat_2", () => {
    let _test = test;

    _test("execution of simd_splat_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_3", () => {
    let _test = test;

    _test("execution of simd_splat_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_4", () => {
    let _test = test;

    _test("execution of simd_splat_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_5", () => {
    let _test = test;

    _test("execution of simd_splat_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_6", () => {
    let _test = test;

    _test("execution of simd_splat_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_7", () => {
    let _test = test;

    _test("execution of simd_splat_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_8", () => {
    let _test = test;

    _test("execution of simd_splat_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_9", () => {
    let _test = test;

    _test("execution of simd_splat_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_10", () => {
    let _test = test;

    _test("execution of simd_splat_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_11", () => {
    let _test = test;

    _test("execution of simd_splat_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_12", () => {
    let _test = test;

    _test("execution of simd_splat_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_13", () => {
    let _test = test;

    _test("execution of simd_splat_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_14", () => {
    let _test = test;

    _test("execution of simd_splat_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_15", () => {
    let _test = test;

    _test("execution of simd_splat_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_16", () => {
    let _test = test;

    _test("execution of simd_splat_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_17", () => {
    let _test = test;

    _test("execution of simd_splat_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_splat_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_splat_18: as-v128_store-operand-1 (instance 0)", () => {
        let _as_v128_store_operand_1 = module.getExport("as-v128_store-operand-1");
        expect(_as_v128_store_operand_1).not.toBeUndefined();
        let _as_v128_store_operand_1_result = module.invoke(_as_v128_store_operand_1, 1);
        expect(_as_v128_store_operand_1_result).toBe(0);
    });

    _test("execution of simd_splat_18: as-v128_store-operand-2 (instance 0)", () => {
        let _as_v128_store_operand_2 = module.getExport("as-v128_store-operand-2");
        expect(_as_v128_store_operand_2).not.toBeUndefined();
        let _as_v128_store_operand_2_result = module.invoke(_as_v128_store_operand_2, 256);
        expect(_as_v128_store_operand_2_result).toBe(0);
    });

    _test("execution of simd_splat_18: as-v128_store-operand-3 (instance 0)", () => {
        let _as_v128_store_operand_3 = module.getExport("as-v128_store-operand-3");
        expect(_as_v128_store_operand_3).not.toBeUndefined();
        let _as_v128_store_operand_3_result = module.invoke(_as_v128_store_operand_3, -1);
        expect(_as_v128_store_operand_3_result).toBe(0);
    });

    _test("execution of simd_splat_18: as-v128_store-operand-4 (instance 0)", () => {
        let _as_v128_store_operand_4 = module.getExport("as-v128_store-operand-4");
        expect(_as_v128_store_operand_4).not.toBeUndefined();
        let _as_v128_store_operand_4_result = module.invoke(_as_v128_store_operand_4, 1n);
        expect(_as_v128_store_operand_4_result).toBe(0);
    });

    _test("execution of simd_splat_18: as-v128_store-operand-5 (instance 0)", () => {
        let _as_v128_store_operand_5 = module.getExport("as-v128_store-operand-5");
        expect(_as_v128_store_operand_5).not.toBeUndefined();
        let _as_v128_store_operand_5_result = module.invoke(_as_v128_store_operand_5, -1.0);
        expect(_as_v128_store_operand_5_result).toBe(0);
    });
});

describe("simd_splat_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_splat_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_splat_19: as-i8x16_extract_lane_s-operand-first (instance 0)", () => {
        let _as_i8x16_extract_lane_s_operand_first = module.getExport(
            "as-i8x16_extract_lane_s-operand-first"
        );
        expect(_as_i8x16_extract_lane_s_operand_first).not.toBeUndefined();
        let _as_i8x16_extract_lane_s_operand_first_result = module.invoke(
            _as_i8x16_extract_lane_s_operand_first,
            42
        );
        expect(_as_i8x16_extract_lane_s_operand_first_result).toBe(42);
    });

    _test("execution of simd_splat_19: as-i8x16_extract_lane_s-operand-last (instance 0)", () => {
        let _as_i8x16_extract_lane_s_operand_last = module.getExport(
            "as-i8x16_extract_lane_s-operand-last"
        );
        expect(_as_i8x16_extract_lane_s_operand_last).not.toBeUndefined();
        let _as_i8x16_extract_lane_s_operand_last_result = module.invoke(
            _as_i8x16_extract_lane_s_operand_last,
            -42
        );
        expect(_as_i8x16_extract_lane_s_operand_last_result).toBe(-42);
    });

    _test("execution of simd_splat_19: as-i16x8_extract_lane_s-operand-first (instance 0)", () => {
        let _as_i16x8_extract_lane_s_operand_first = module.getExport(
            "as-i16x8_extract_lane_s-operand-first"
        );
        expect(_as_i16x8_extract_lane_s_operand_first).not.toBeUndefined();
        let _as_i16x8_extract_lane_s_operand_first_result = module.invoke(
            _as_i16x8_extract_lane_s_operand_first,
            -32769
        );
        expect(_as_i16x8_extract_lane_s_operand_first_result).toBe(32767);
    });

    _test("execution of simd_splat_19: as-i16x8_extract_lane_s-operand-last (instance 0)", () => {
        let _as_i16x8_extract_lane_s_operand_last = module.getExport(
            "as-i16x8_extract_lane_s-operand-last"
        );
        expect(_as_i16x8_extract_lane_s_operand_last).not.toBeUndefined();
        let _as_i16x8_extract_lane_s_operand_last_result = module.invoke(
            _as_i16x8_extract_lane_s_operand_last,
            32768
        );
        expect(_as_i16x8_extract_lane_s_operand_last_result).toBe(-32768);
    });

    _test("execution of simd_splat_19: as-i32x4_extract_lane_s-operand-first (instance 0)", () => {
        let _as_i32x4_extract_lane_s_operand_first = module.getExport(
            "as-i32x4_extract_lane_s-operand-first"
        );
        expect(_as_i32x4_extract_lane_s_operand_first).not.toBeUndefined();
        let _as_i32x4_extract_lane_s_operand_first_result = module.invoke(
            _as_i32x4_extract_lane_s_operand_first,
            2147483647
        );
        expect(_as_i32x4_extract_lane_s_operand_first_result).toBe(2147483647);
    });

    _test("execution of simd_splat_19: as-i32x4_extract_lane_s-operand-last (instance 0)", () => {
        let _as_i32x4_extract_lane_s_operand_last = module.getExport(
            "as-i32x4_extract_lane_s-operand-last"
        );
        expect(_as_i32x4_extract_lane_s_operand_last).not.toBeUndefined();
        let _as_i32x4_extract_lane_s_operand_last_result = module.invoke(
            _as_i32x4_extract_lane_s_operand_last,
            -2147483648
        );
        expect(_as_i32x4_extract_lane_s_operand_last_result).toBe(-2147483648);
    });

    _test("execution of simd_splat_19: as-f32x4_extract_lane_s-operand-first (instance 0)", () => {
        let _as_f32x4_extract_lane_s_operand_first = module.getExport(
            "as-f32x4_extract_lane_s-operand-first"
        );
        expect(_as_f32x4_extract_lane_s_operand_first).not.toBeUndefined();
        let _as_f32x4_extract_lane_s_operand_first_result = module.invoke(
            _as_f32x4_extract_lane_s_operand_first,
            1.5
        );
        expect(_as_f32x4_extract_lane_s_operand_first_result).toBe(1.5);
    });

    _test("execution of simd_splat_19: as-f32x4_extract_lane_s-operand-last (instance 0)", () => {
        let _as_f32x4_extract_lane_s_operand_last = module.getExport(
            "as-f32x4_extract_lane_s-operand-last"
        );
        expect(_as_f32x4_extract_lane_s_operand_last).not.toBeUndefined();
        let _as_f32x4_extract_lane_s_operand_last_result = module.invoke(
            _as_f32x4_extract_lane_s_operand_last,
            -0.25
        );
        expect(_as_f32x4_extract_lane_s_operand_last_result).toBe(-0.25);
    });

    _test("execution of simd_splat_19: as-v8x16_swizzle-operands (instance 0)", () => {
        let _as_v8x16_swizzle_operands = module.getExport("as-v8x16_swizzle-operands");
        expect(_as_v8x16_swizzle_operands).not.toBeUndefined();
        let _as_v8x16_swizzle_operands_result = module.invoke(_as_v8x16_swizzle_operands, 1, -1);
        expect(_as_v8x16_swizzle_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i64x2_extract_lane-operand-last (instance 0)", () => {
        let _as_i64x2_extract_lane_operand_last = module.getExport(
            "as-i64x2_extract_lane-operand-last"
        );
        expect(_as_i64x2_extract_lane_operand_last).not.toBeUndefined();
        let _as_i64x2_extract_lane_operand_last_result = module.invoke(
            _as_i64x2_extract_lane_operand_last,
            -42n
        );
        expect(_as_i64x2_extract_lane_operand_last_result).toBe(-42n);
    });

    _test("execution of simd_splat_19: as-i64x2_extract_lane-operand-first (instance 0)", () => {
        let _as_i64x2_extract_lane_operand_first = module.getExport(
            "as-i64x2_extract_lane-operand-first"
        );
        expect(_as_i64x2_extract_lane_operand_first).not.toBeUndefined();
        let _as_i64x2_extract_lane_operand_first_result = module.invoke(
            _as_i64x2_extract_lane_operand_first,
            42n
        );
        expect(_as_i64x2_extract_lane_operand_first_result).toBe(42n);
    });

    _test("execution of simd_splat_19: as-f64x2_extract_lane-operand-first (instance 0)", () => {
        let _as_f64x2_extract_lane_operand_first = module.getExport(
            "as-f64x2_extract_lane-operand-first"
        );
        expect(_as_f64x2_extract_lane_operand_first).not.toBeUndefined();
        let _as_f64x2_extract_lane_operand_first_result = module.invoke(
            _as_f64x2_extract_lane_operand_first,
            1.5
        );
        expect(_as_f64x2_extract_lane_operand_first_result).toBe(1.5);
    });

    _test("execution of simd_splat_19: as-f64x2_extract_lane-operand-last (instance 0)", () => {
        let _as_f64x2_extract_lane_operand_last = module.getExport(
            "as-f64x2_extract_lane-operand-last"
        );
        expect(_as_f64x2_extract_lane_operand_last).not.toBeUndefined();
        let _as_f64x2_extract_lane_operand_last_result = module.invoke(
            _as_f64x2_extract_lane_operand_last,
            -1.0
        );
        expect(_as_f64x2_extract_lane_operand_last_result).toBe(-1.0);
    });

    _test("execution of simd_splat_19: as-i8x16_add_sub-operands (instance 0)", () => {
        let _as_i8x16_add_sub_operands = module.getExport("as-i8x16_add_sub-operands");
        expect(_as_i8x16_add_sub_operands).not.toBeUndefined();
        let _as_i8x16_add_sub_operands_result = module.invoke(_as_i8x16_add_sub_operands, 3, 2, 1);
        expect(_as_i8x16_add_sub_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i16x8_add_sub_mul-operands (instance 0)", () => {
        let _as_i16x8_add_sub_mul_operands = module.getExport("as-i16x8_add_sub_mul-operands");
        expect(_as_i16x8_add_sub_mul_operands).not.toBeUndefined();
        let _as_i16x8_add_sub_mul_operands_result = module.invoke(
            _as_i16x8_add_sub_mul_operands,
            257,
            128,
            16,
            16
        );
        expect(_as_i16x8_add_sub_mul_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i32x4_add_sub_mul-operands (instance 0)", () => {
        let _as_i32x4_add_sub_mul_operands = module.getExport("as-i32x4_add_sub_mul-operands");
        expect(_as_i32x4_add_sub_mul_operands).not.toBeUndefined();
        let _as_i32x4_add_sub_mul_operands_result = module.invoke(
            _as_i32x4_add_sub_mul_operands,
            65535,
            65537,
            256,
            256
        );
        expect(_as_i32x4_add_sub_mul_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i64x2_add_sub_mul-operands (instance 0)", () => {
        let _as_i64x2_add_sub_mul_operands = module.getExport("as-i64x2_add_sub_mul-operands");
        expect(_as_i64x2_add_sub_mul_operands).not.toBeUndefined();
        let _as_i64x2_add_sub_mul_operands_result = module.invoke(
            _as_i64x2_add_sub_mul_operands,
            2147483647n,
            4294967297n,
            65536n,
            65536n
        );
        expect(_as_i64x2_add_sub_mul_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-f64x2_add_sub_mul-operands (instance 0)", () => {
        let _as_f64x2_add_sub_mul_operands = module.getExport("as-f64x2_add_sub_mul-operands");
        expect(_as_f64x2_add_sub_mul_operands).not.toBeUndefined();
        let _as_f64x2_add_sub_mul_operands_result = module.invoke(
            _as_f64x2_add_sub_mul_operands,
            0.5,
            0.75,
            0.5,
            0.5
        );
        expect(_as_f64x2_add_sub_mul_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i8x16_add_sat_s-operands (instance 0)", () => {
        let _as_i8x16_add_sat_s_operands = module.getExport("as-i8x16_add_sat_s-operands");
        expect(_as_i8x16_add_sat_s_operands).not.toBeUndefined();
        let _as_i8x16_add_sat_s_operands_result = module.invoke(
            _as_i8x16_add_sat_s_operands,
            127,
            1
        );
        expect(_as_i8x16_add_sat_s_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i16x8_add_sat_s-operands (instance 0)", () => {
        let _as_i16x8_add_sat_s_operands = module.getExport("as-i16x8_add_sat_s-operands");
        expect(_as_i16x8_add_sat_s_operands).not.toBeUndefined();
        let _as_i16x8_add_sat_s_operands_result = module.invoke(
            _as_i16x8_add_sat_s_operands,
            32767,
            1
        );
        expect(_as_i16x8_add_sat_s_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i8x16_sub_sat_u-operands (instance 0)", () => {
        let _as_i8x16_sub_sat_u_operands = module.getExport("as-i8x16_sub_sat_u-operands");
        expect(_as_i8x16_sub_sat_u_operands).not.toBeUndefined();
        let _as_i8x16_sub_sat_u_operands_result = module.invoke(
            _as_i8x16_sub_sat_u_operands,
            127,
            255
        );
        expect(_as_i8x16_sub_sat_u_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i16x8_sub_sat_u-operands (instance 0)", () => {
        let _as_i16x8_sub_sat_u_operands = module.getExport("as-i16x8_sub_sat_u-operands");
        expect(_as_i16x8_sub_sat_u_operands).not.toBeUndefined();
        let _as_i16x8_sub_sat_u_operands_result = module.invoke(
            _as_i16x8_sub_sat_u_operands,
            32767,
            65535
        );
        expect(_as_i16x8_sub_sat_u_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i8x16_shr_s-operand (instance 0)", () => {
        let _as_i8x16_shr_s_operand = module.getExport("as-i8x16_shr_s-operand");
        expect(_as_i8x16_shr_s_operand).not.toBeUndefined();
        let _as_i8x16_shr_s_operand_result = module.invoke(_as_i8x16_shr_s_operand, 240, 3);
        expect(_as_i8x16_shr_s_operand_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i16x8_shr_s-operand (instance 0)", () => {
        let _as_i16x8_shr_s_operand = module.getExport("as-i16x8_shr_s-operand");
        expect(_as_i16x8_shr_s_operand).not.toBeUndefined();
        let _as_i16x8_shr_s_operand_result = module.invoke(_as_i16x8_shr_s_operand, 256, 4);
        expect(_as_i16x8_shr_s_operand_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i32x4_shr_s-operand (instance 0)", () => {
        let _as_i32x4_shr_s_operand = module.getExport("as-i32x4_shr_s-operand");
        expect(_as_i32x4_shr_s_operand).not.toBeUndefined();
        let _as_i32x4_shr_s_operand_result = module.invoke(_as_i32x4_shr_s_operand, -1, 16);
        expect(_as_i32x4_shr_s_operand_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-v128_and-operands (instance 0)", () => {
        let _as_v128_and_operands = module.getExport("as-v128_and-operands");
        expect(_as_v128_and_operands).not.toBeUndefined();
        let _as_v128_and_operands_result = module.invoke(_as_v128_and_operands, 17, 255);
        expect(_as_v128_and_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-v128_or-operands (instance 0)", () => {
        let _as_v128_or_operands = module.getExport("as-v128_or-operands");
        expect(_as_v128_or_operands).not.toBeUndefined();
        let _as_v128_or_operands_result = module.invoke(_as_v128_or_operands, 0, 65535);
        expect(_as_v128_or_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-v128_xor-operands (instance 0)", () => {
        let _as_v128_xor_operands = module.getExport("as-v128_xor-operands");
        expect(_as_v128_xor_operands).not.toBeUndefined();
        let _as_v128_xor_operands_result = module.invoke(_as_v128_xor_operands, -252645136, -1);
        expect(_as_v128_xor_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i8x16_all_true-operand (instance 0)", () => {
        let _as_i8x16_all_true_operand = module.getExport("as-i8x16_all_true-operand");
        expect(_as_i8x16_all_true_operand).not.toBeUndefined();
        let _as_i8x16_all_true_operand_result = module.invoke(_as_i8x16_all_true_operand, 0);
        expect(_as_i8x16_all_true_operand_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i16x8_all_true-operand (instance 0)", () => {
        let _as_i16x8_all_true_operand = module.getExport("as-i16x8_all_true-operand");
        expect(_as_i16x8_all_true_operand).not.toBeUndefined();
        let _as_i16x8_all_true_operand_result = module.invoke(_as_i16x8_all_true_operand, 65535);
        expect(_as_i16x8_all_true_operand_result).toBe(1);
    });

    _test("execution of simd_splat_19: as-i32x4_all_true-operand1 (instance 0)", () => {
        let _as_i32x4_all_true_operand1 = module.getExport("as-i32x4_all_true-operand1");
        expect(_as_i32x4_all_true_operand1).not.toBeUndefined();
        let _as_i32x4_all_true_operand1_result = module.invoke(
            _as_i32x4_all_true_operand1,
            -252645136
        );
        expect(_as_i32x4_all_true_operand1_result).toBe(1);
    });

    _test("execution of simd_splat_19: as-i32x4_all_true-operand2 (instance 0)", () => {
        let _as_i32x4_all_true_operand2 = module.getExport("as-i32x4_all_true-operand2");
        expect(_as_i32x4_all_true_operand2).not.toBeUndefined();
        let _as_i32x4_all_true_operand2_result = module.invoke(_as_i32x4_all_true_operand2, -1n);
        expect(_as_i32x4_all_true_operand2_result).toBe(1);
    });

    _test("execution of simd_splat_19: as-i8x16_eq-operands (instance 0)", () => {
        let _as_i8x16_eq_operands = module.getExport("as-i8x16_eq-operands");
        expect(_as_i8x16_eq_operands).not.toBeUndefined();
        let _as_i8x16_eq_operands_result = module.invoke(_as_i8x16_eq_operands, 1, 2);
        expect(_as_i8x16_eq_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i16x8_eq-operands (instance 0)", () => {
        let _as_i16x8_eq_operands = module.getExport("as-i16x8_eq-operands");
        expect(_as_i16x8_eq_operands).not.toBeUndefined();
        let _as_i16x8_eq_operands_result = module.invoke(_as_i16x8_eq_operands, -1, 65535);
        expect(_as_i16x8_eq_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i32x4_eq-operands1 (instance 0)", () => {
        let _as_i32x4_eq_operands1 = module.getExport("as-i32x4_eq-operands1");
        expect(_as_i32x4_eq_operands1).not.toBeUndefined();
        let _as_i32x4_eq_operands1_result = module.invoke(_as_i32x4_eq_operands1, -1, -1);
        expect(_as_i32x4_eq_operands1_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-f32x4_eq-operands (instance 0)", () => {
        let _as_f32x4_eq_operands = module.getExport("as-f32x4_eq-operands");
        expect(_as_f32x4_eq_operands).not.toBeUndefined();
        let _as_f32x4_eq_operands_result = module.invoke(_as_f32x4_eq_operands, 0.0, -0.0);
        expect(_as_f32x4_eq_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i32x4_eq-operands2 (instance 0)", () => {
        let _as_i32x4_eq_operands2 = module.getExport("as-i32x4_eq-operands2");
        expect(_as_i32x4_eq_operands2).not.toBeUndefined();
        let _as_i32x4_eq_operands2_result = module.invoke(_as_i32x4_eq_operands2, 1n, 2n);
        expect(_as_i32x4_eq_operands2_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-f64x2_eq-operands (instance 0)", () => {
        let _as_f64x2_eq_operands = module.getExport("as-f64x2_eq-operands");
        expect(_as_f64x2_eq_operands).not.toBeUndefined();
        let _as_f64x2_eq_operands_result = module.invoke(_as_f64x2_eq_operands, 0.0, -0.0);
        expect(_as_f64x2_eq_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-f32x4_abs-operand (instance 0)", () => {
        let _as_f32x4_abs_operand = module.getExport("as-f32x4_abs-operand");
        expect(_as_f32x4_abs_operand).not.toBeUndefined();
        let _as_f32x4_abs_operand_result = module.invoke(_as_f32x4_abs_operand, -1.125);
        expect(_as_f32x4_abs_operand_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-f32x4_min-operands (instance 0)", () => {
        let _as_f32x4_min_operands = module.getExport("as-f32x4_min-operands");
        expect(_as_f32x4_min_operands).not.toBeUndefined();
        let _as_f32x4_min_operands_result = module.invoke(_as_f32x4_min_operands, 0.25, 1e-38);
        expect(_as_f32x4_min_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-f32x4_div-operands (instance 0)", () => {
        let _as_f32x4_div_operands = module.getExport("as-f32x4_div-operands");
        expect(_as_f32x4_div_operands).not.toBeUndefined();
        let _as_f32x4_div_operands_result = module.invoke(_as_f32x4_div_operands, 1.0, 8.0);
        expect(_as_f32x4_div_operands_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-f32x4_convert_s_i32x4-operand (instance 0)", () => {
        let _as_f32x4_convert_s_i32x4_operand = module.getExport(
            "as-f32x4_convert_s_i32x4-operand"
        );
        expect(_as_f32x4_convert_s_i32x4_operand).not.toBeUndefined();
        let _as_f32x4_convert_s_i32x4_operand_result = module.invoke(
            _as_f32x4_convert_s_i32x4_operand,
            12345
        );
        expect(_as_f32x4_convert_s_i32x4_operand_result).toBe(0);
    });

    _test("execution of simd_splat_19: as-i32x4_trunc_s_f32x4_sat-operand (instance 0)", () => {
        let _as_i32x4_trunc_s_f32x4_sat_operand = module.getExport(
            "as-i32x4_trunc_s_f32x4_sat-operand"
        );
        expect(_as_i32x4_trunc_s_f32x4_sat_operand).not.toBeUndefined();
        let _as_i32x4_trunc_s_f32x4_sat_operand_result = module.invoke(
            _as_i32x4_trunc_s_f32x4_sat_operand,
            1.1
        );
        expect(_as_i32x4_trunc_s_f32x4_sat_operand_result).toBe(0);
    });
});

describe("simd_splat_20", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_splat_20.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_splat_20: as-br-value1 (instance 0)", () => {
        let _as_br_value1 = module.getExport("as-br-value1");
        expect(_as_br_value1).not.toBeUndefined();
        let _as_br_value1_result = module.invoke(_as_br_value1, 171);
        expect(_as_br_value1_result).toBe(0);
    });

    _test("execution of simd_splat_20: as-return-value1 (instance 0)", () => {
        let _as_return_value1 = module.getExport("as-return-value1");
        expect(_as_return_value1).not.toBeUndefined();
        let _as_return_value1_result = module.invoke(_as_return_value1, 43981);
        expect(_as_return_value1_result).toBe(0);
    });

    _test("execution of simd_splat_20: as-local_set-value1 (instance 0)", () => {
        let _as_local_set_value1 = module.getExport("as-local_set-value1");
        expect(_as_local_set_value1).not.toBeUndefined();
        let _as_local_set_value1_result = module.invoke(_as_local_set_value1, 65536);
        expect(_as_local_set_value1_result).toBe(0);
    });

    _test("execution of simd_splat_20: as-global_set-value1 (instance 0)", () => {
        let _as_global_set_value1 = module.getExport("as-global_set-value1");
        expect(_as_global_set_value1).not.toBeUndefined();
        let _as_global_set_value1_result = module.invoke(_as_global_set_value1, 1.0);
        expect(_as_global_set_value1_result).toBe(0);
    });

    _test("execution of simd_splat_20: as-br-value2 (instance 0)", () => {
        let _as_br_value2 = module.getExport("as-br-value2");
        expect(_as_br_value2).not.toBeUndefined();
        let _as_br_value2_result = module.invoke(_as_br_value2, 43981n);
        expect(_as_br_value2_result).toBe(0);
    });

    _test("execution of simd_splat_20: as-return-value2 (instance 0)", () => {
        let _as_return_value2 = module.getExport("as-return-value2");
        expect(_as_return_value2).not.toBeUndefined();
        let _as_return_value2_result = module.invoke(_as_return_value2, 43981n);
        expect(_as_return_value2_result).toBe(0);
    });

    _test("execution of simd_splat_20: as-local_set-value2 (instance 0)", () => {
        let _as_local_set_value2 = module.getExport("as-local_set-value2");
        expect(_as_local_set_value2).not.toBeUndefined();
        let _as_local_set_value2_result = module.invoke(_as_local_set_value2, 65536n);
        expect(_as_local_set_value2_result).toBe(0);
    });

    _test("execution of simd_splat_20: as-global_set-value2 (instance 0)", () => {
        let _as_global_set_value2 = module.getExport("as-global_set-value2");
        expect(_as_global_set_value2).not.toBeUndefined();
        let _as_global_set_value2_result = module.invoke(_as_global_set_value2, 1.0);
        expect(_as_global_set_value2_result).toBe(0);
    });
});

describe("simd_splat_21", () => {
    let _test = test;

    _test("execution of simd_splat_21: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_22", () => {
    let _test = test;

    _test("execution of simd_splat_22: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_23", () => {
    let _test = test;

    _test("execution of simd_splat_23: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_24", () => {
    let _test = test;

    _test("execution of simd_splat_24: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_25", () => {
    let _test = test;

    _test("execution of simd_splat_25: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_splat_26", () => {
    let _test = test;

    _test("execution of simd_splat_26: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
