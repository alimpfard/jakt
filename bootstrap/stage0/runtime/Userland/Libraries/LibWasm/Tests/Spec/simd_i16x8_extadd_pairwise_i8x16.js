let globalImportObject = {};
let namedModules = {};

describe("simd_i16x8_extadd_pairwise_i8x16_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i16x8_extadd_pairwise_i8x16_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 0)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 1)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 2)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 3)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 4)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 5)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 6)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_s (instance 7)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_s = module.getExport("i16x8.extadd_pairwise_i8x16_s");
            expect(_i16x8_extadd_pairwise_i8x16_s).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_s_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_s,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_s_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 0)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 1)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 2)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 3)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 4)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 5)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 6)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );

    _test(
        "execution of simd_i16x8_extadd_pairwise_i8x16_0: i16x8.extadd_pairwise_i8x16_u (instance 7)",
        () => {
            let _i16x8_extadd_pairwise_i8x16_u = module.getExport("i16x8.extadd_pairwise_i8x16_u");
            expect(_i16x8_extadd_pairwise_i8x16_u).not.toBeUndefined();
            let _i16x8_extadd_pairwise_i8x16_u_result = module.invoke(
                _i16x8_extadd_pairwise_i8x16_u,
                0
            );
            expect(_i16x8_extadd_pairwise_i8x16_u_result).toBe(0);
        }
    );
});

describe("simd_i16x8_extadd_pairwise_i8x16_1", () => {
    let _test = test;

    _test("execution of simd_i16x8_extadd_pairwise_i8x16_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_extadd_pairwise_i8x16_2", () => {
    let _test = test;

    _test("execution of simd_i16x8_extadd_pairwise_i8x16_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_extadd_pairwise_i8x16_3", () => {
    let _test = test;

    _test("execution of simd_i16x8_extadd_pairwise_i8x16_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i16x8_extadd_pairwise_i8x16_4", () => {
    let _test = test;

    _test("execution of simd_i16x8_extadd_pairwise_i8x16_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
