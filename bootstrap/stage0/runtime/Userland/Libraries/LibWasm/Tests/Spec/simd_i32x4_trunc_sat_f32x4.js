let globalImportObject = {};
let namedModules = {};

describe("simd_i32x4_trunc_sat_f32x4_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i32x4_trunc_sat_f32x4_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 0)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 1)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 2)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 3)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 4)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 5)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 6)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 7)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 8)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 9)", () => {
        let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
        expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
        expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
    });

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 10)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 11)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 12)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 13)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 14)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 15)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 16)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 17)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 18)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 19)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 20)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 21)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 22)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 23)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 24)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 25)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 26)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 27)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 28)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 29)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 30)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 31)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 32)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 33)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 34)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 35)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 36)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 37)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 38)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 39)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 40)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 41)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 42)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 43)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 44)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 45)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 46)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 47)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 48)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 49)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_s (instance 50)",
        () => {
            let _i32x4_trunc_sat_f32x4_s = module.getExport("i32x4.trunc_sat_f32x4_s");
            expect(_i32x4_trunc_sat_f32x4_s).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_s_result = module.invoke(_i32x4_trunc_sat_f32x4_s, 0);
            expect(_i32x4_trunc_sat_f32x4_s_result).toBe(0);
        }
    );

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 0)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 1)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 2)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 3)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 4)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 5)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 6)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 7)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 8)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test("execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 9)", () => {
        let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
        expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
        let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
        expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
    });

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 10)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 11)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 12)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 13)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 14)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 15)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 16)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 17)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 18)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 19)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 20)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 21)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 22)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 23)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 24)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 25)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 26)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 27)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 28)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 29)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 30)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 31)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 32)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 33)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 34)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 35)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 36)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 37)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 38)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 39)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 40)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 41)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 42)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 43)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 44)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 45)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 46)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 47)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 48)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 49)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_trunc_sat_f32x4_0: i32x4.trunc_sat_f32x4_u (instance 50)",
        () => {
            let _i32x4_trunc_sat_f32x4_u = module.getExport("i32x4.trunc_sat_f32x4_u");
            expect(_i32x4_trunc_sat_f32x4_u).not.toBeUndefined();
            let _i32x4_trunc_sat_f32x4_u_result = module.invoke(_i32x4_trunc_sat_f32x4_u, 0);
            expect(_i32x4_trunc_sat_f32x4_u_result).toBe(0);
        }
    );
});

describe("simd_i32x4_trunc_sat_f32x4_1", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f32x4_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_trunc_sat_f32x4_2", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f32x4_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_trunc_sat_f32x4_3", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f32x4_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_trunc_sat_f32x4_4", () => {
    let _test = test;

    _test("execution of simd_i32x4_trunc_sat_f32x4_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
