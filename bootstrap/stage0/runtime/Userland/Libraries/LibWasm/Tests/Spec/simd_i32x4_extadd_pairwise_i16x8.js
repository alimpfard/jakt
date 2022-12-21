let globalImportObject = {};
let namedModules = {};

describe("simd_i32x4_extadd_pairwise_i16x8_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i32x4_extadd_pairwise_i16x8_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 0)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 1)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 2)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 3)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 4)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 5)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 6)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_s (instance 7)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_s = module.getExport("i32x4.extadd_pairwise_i16x8_s");
            expect(_i32x4_extadd_pairwise_i16x8_s).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_s_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_s,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 0)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 1)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 2)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 3)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 4)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 5)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 6)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i32x4_extadd_pairwise_i16x8_0: i32x4.extadd_pairwise_i16x8_u (instance 7)",
        () => {
            let _i32x4_extadd_pairwise_i16x8_u = module.getExport("i32x4.extadd_pairwise_i16x8_u");
            expect(_i32x4_extadd_pairwise_i16x8_u).not.toBeUndefined();
            let _i32x4_extadd_pairwise_i16x8_u_result = module.invoke(
                _i32x4_extadd_pairwise_i16x8_u,
                0
            );
            expect(_i32x4_extadd_pairwise_i16x8_u_result).toBe(0);
        }
    );
});

describe("simd_i32x4_extadd_pairwise_i16x8_1", () => {
    let _test = test;

    _test("execution of simd_i32x4_extadd_pairwise_i16x8_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_extadd_pairwise_i16x8_2", () => {
    let _test = test;

    _test("execution of simd_i32x4_extadd_pairwise_i16x8_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_extadd_pairwise_i16x8_3", () => {
    let _test = test;

    _test("execution of simd_i32x4_extadd_pairwise_i16x8_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i32x4_extadd_pairwise_i16x8_4", () => {
    let _test = test;

    _test("execution of simd_i32x4_extadd_pairwise_i16x8_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
