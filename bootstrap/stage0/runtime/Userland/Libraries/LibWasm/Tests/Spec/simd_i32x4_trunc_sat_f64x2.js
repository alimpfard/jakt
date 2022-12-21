let globalImportObject = {};
let namedModules = {};

describe("simd_i32x4_trunc_sat_f64x2_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i32x4_trunc_sat_f64x2_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 0)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 1)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 2)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 3)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 4)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 5)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 6)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 7)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 8)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 9)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 10)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 11)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 12)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 13)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 14)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 15)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 16)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 17)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 18)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 19)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 20)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 21)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 22)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 23)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 24)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 25)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 26)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 27)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 28)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 29)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 30)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 31)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 32)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 33)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 34)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 35)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 36)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 37)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 38)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 39)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 40)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 41)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 42)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 43)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 44)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 45)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 46)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 47)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 48)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 49)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_s_zero (instance 50)",
        () => {
            let _i32x4_trunc_sat_f64x2_s_zero = module.getExport("i32x4.trunc_sat_f64x2_s_zero");
            expect(_i32x4_trunc_sat_f64x2_s_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_s_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_s_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_s_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 0)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 1)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 2)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 3)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 4)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 5)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 6)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 7)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 8)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 9)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 10)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 11)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 12)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 13)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 14)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 15)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 16)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 17)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 18)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 19)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 20)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 21)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 22)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 23)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 24)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 25)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 26)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 27)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 28)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 29)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 30)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 31)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 32)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 33)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 34)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 35)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 36)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 37)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 38)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 39)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 40)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 41)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 42)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 43)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 44)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 45)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 46)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 47)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 48)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 49)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f64x2_0: i32x4.trunc_sat_f64x2_u_zero (instance 50)",
        () => {
            let _i32x4_trunc_sat_f64x2_u_zero = module.getExport("i32x4.trunc_sat_f64x2_u_zero");
            expect(_i32x4_trunc_sat_f64x2_u_zero).not.toBeUndefined();
            let _i32x4_trunc_sat_f64x2_u_zero_result = module.invoke(
                _i32x4_trunc_sat_f64x2_u_zero,
                0
            );
            expect(_i32x4_trunc_sat_f64x2_u_zero_result).toBe(0);
        }
    );
});

describe("simd_i32x4_trunc_sat_f64x2_1", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f64x2_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_trunc_sat_f64x2_2", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f64x2_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_trunc_sat_f64x2_3", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f64x2_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_trunc_sat_f64x2_4", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f64x2_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
