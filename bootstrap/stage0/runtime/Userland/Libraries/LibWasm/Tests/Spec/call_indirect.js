let globalImportObject = {};
let namedModules = {};

describe("call_indirect_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/call_indirect_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of call_indirect_0: type-i32 (instance 0)", () => {
        let _type_i32 = module.getExport("type-i32");
        expect(_type_i32).not.toBeUndefined();
        let _type_i32_result = module.invoke(_type_i32);
        expect(_type_i32_result).toBe(306);
    });

    _test("execution of call_indirect_0: type-i64 (instance 0)", () => {
        let _type_i64 = module.getExport("type-i64");
        expect(_type_i64).not.toBeUndefined();
        let _type_i64_result = module.invoke(_type_i64);
        expect(_type_i64_result).toBe(356n);
    });

    _test("execution of call_indirect_0: type-f32 (instance 0)", () => {
        let _type_f32 = module.getExport("type-f32");
        expect(_type_f32).not.toBeUndefined();
        let _type_f32_result = module.invoke(_type_f32);
        expect(_type_f32_result).toBe(3890.0);
    });

    _test("execution of call_indirect_0: type-f64 (instance 0)", () => {
        let _type_f64 = module.getExport("type-f64");
        expect(_type_f64).not.toBeUndefined();
        let _type_f64_result = module.invoke(_type_f64);
        expect(_type_f64_result).toBe(3940.0);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of call_indirect_0: <unknown> (instance 0)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of call_indirect_0: type-index (instance 0)", () => {
        let _type_index = module.getExport("type-index");
        expect(_type_index).not.toBeUndefined();
        let _type_index_result = module.invoke(_type_index);
        expect(_type_index_result).toBe(100n);
    });

    _test("execution of call_indirect_0: type-first-i32 (instance 0)", () => {
        let _type_first_i32 = module.getExport("type-first-i32");
        expect(_type_first_i32).not.toBeUndefined();
        let _type_first_i32_result = module.invoke(_type_first_i32);
        expect(_type_first_i32_result).toBe(32);
    });

    _test("execution of call_indirect_0: type-first-i64 (instance 0)", () => {
        let _type_first_i64 = module.getExport("type-first-i64");
        expect(_type_first_i64).not.toBeUndefined();
        let _type_first_i64_result = module.invoke(_type_first_i64);
        expect(_type_first_i64_result).toBe(64n);
    });

    _test("execution of call_indirect_0: type-first-f32 (instance 0)", () => {
        let _type_first_f32 = module.getExport("type-first-f32");
        expect(_type_first_f32).not.toBeUndefined();
        let _type_first_f32_result = module.invoke(_type_first_f32);
        expect(_type_first_f32_result).toBe(1.32);
    });

    _test("execution of call_indirect_0: type-first-f64 (instance 0)", () => {
        let _type_first_f64 = module.getExport("type-first-f64");
        expect(_type_first_f64).not.toBeUndefined();
        let _type_first_f64_result = module.invoke(_type_first_f64);
        expect(_type_first_f64_result).toBe(1.64);
    });

    _test("execution of call_indirect_0: type-second-i32 (instance 0)", () => {
        let _type_second_i32 = module.getExport("type-second-i32");
        expect(_type_second_i32).not.toBeUndefined();
        let _type_second_i32_result = module.invoke(_type_second_i32);
        expect(_type_second_i32_result).toBe(32);
    });

    _test("execution of call_indirect_0: type-second-i64 (instance 0)", () => {
        let _type_second_i64 = module.getExport("type-second-i64");
        expect(_type_second_i64).not.toBeUndefined();
        let _type_second_i64_result = module.invoke(_type_second_i64);
        expect(_type_second_i64_result).toBe(64n);
    });

    _test("execution of call_indirect_0: type-second-f32 (instance 0)", () => {
        let _type_second_f32 = module.getExport("type-second-f32");
        expect(_type_second_f32).not.toBeUndefined();
        let _type_second_f32_result = module.invoke(_type_second_f32);
        expect(_type_second_f32_result).toBe(32.0);
    });

    _test("execution of call_indirect_0: type-second-f64 (instance 0)", () => {
        let _type_second_f64 = module.getExport("type-second-f64");
        expect(_type_second_f64).not.toBeUndefined();
        let _type_second_f64_result = module.invoke(_type_second_f64);
        expect(_type_second_f64_result).toBe(64.1);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of call_indirect_0: <unknown> (instance 1)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of call_indirect_0: <unknown> (instance 2)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of call_indirect_0: <unknown> (instance 3)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of call_indirect_0: dispatch (instance 0)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        let _dispatch_result = module.invoke(_dispatch, 5, 2n);
        expect(_dispatch_result).toBe(2n);
    });

    _test("execution of call_indirect_0: dispatch (instance 1)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        let _dispatch_result = module.invoke(_dispatch, 5, 5n);
        expect(_dispatch_result).toBe(5n);
    });

    _test("execution of call_indirect_0: dispatch (instance 2)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        let _dispatch_result = module.invoke(_dispatch, 12, 5n);
        expect(_dispatch_result).toBe(120n);
    });

    _test("execution of call_indirect_0: dispatch (instance 3)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        let _dispatch_result = module.invoke(_dispatch, 13, 5n);
        expect(_dispatch_result).toBe(8n);
    });

    _test("execution of call_indirect_0: dispatch (instance 4)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        let _dispatch_result = module.invoke(_dispatch, 20, 2n);
        expect(_dispatch_result).toBe(2n);
    });

    _test("execution of call_indirect_0: dispatch (instance 5)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        expect(() => module.invoke(_dispatch, 0, 2n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_0: dispatch (instance 6)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        expect(() => module.invoke(_dispatch, 15, 2n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_0: dispatch (instance 7)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        expect(() => module.invoke(_dispatch, 32, 2n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_0: dispatch (instance 8)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        expect(() => module.invoke(_dispatch, -1, 2n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_0: dispatch (instance 9)", () => {
        let _dispatch = module.getExport("dispatch");
        expect(_dispatch).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch, 1213432423, 2n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-i64 (instance 0)", () => {
        let _dispatch_structural_i64 = module.getExport("dispatch-structural-i64");
        expect(_dispatch_structural_i64).not.toBeUndefined();
        let _dispatch_structural_i64_result = module.invoke(_dispatch_structural_i64, 5);
        expect(_dispatch_structural_i64_result).toBe(9n);
    });

    _test("execution of call_indirect_0: dispatch-structural-i64 (instance 1)", () => {
        let _dispatch_structural_i64 = module.getExport("dispatch-structural-i64");
        expect(_dispatch_structural_i64).not.toBeUndefined();
        let _dispatch_structural_i64_result = module.invoke(_dispatch_structural_i64, 12);
        expect(_dispatch_structural_i64_result).toBe(362880n);
    });

    _test("execution of call_indirect_0: dispatch-structural-i64 (instance 2)", () => {
        let _dispatch_structural_i64 = module.getExport("dispatch-structural-i64");
        expect(_dispatch_structural_i64).not.toBeUndefined();
        let _dispatch_structural_i64_result = module.invoke(_dispatch_structural_i64, 13);
        expect(_dispatch_structural_i64_result).toBe(55n);
    });

    _test("execution of call_indirect_0: dispatch-structural-i64 (instance 3)", () => {
        let _dispatch_structural_i64 = module.getExport("dispatch-structural-i64");
        expect(_dispatch_structural_i64).not.toBeUndefined();
        let _dispatch_structural_i64_result = module.invoke(_dispatch_structural_i64, 20);
        expect(_dispatch_structural_i64_result).toBe(9n);
    });

    _test("execution of call_indirect_0: dispatch-structural-i64 (instance 4)", () => {
        let _dispatch_structural_i64 = module.getExport("dispatch-structural-i64");
        expect(_dispatch_structural_i64).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_i64, 11).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-i64 (instance 5)", () => {
        let _dispatch_structural_i64 = module.getExport("dispatch-structural-i64");
        expect(_dispatch_structural_i64).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_i64, 22).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-i32 (instance 0)", () => {
        let _dispatch_structural_i32 = module.getExport("dispatch-structural-i32");
        expect(_dispatch_structural_i32).not.toBeUndefined();
        let _dispatch_structural_i32_result = module.invoke(_dispatch_structural_i32, 4);
        expect(_dispatch_structural_i32_result).toBe(9);
    });

    _test("execution of call_indirect_0: dispatch-structural-i32 (instance 1)", () => {
        let _dispatch_structural_i32 = module.getExport("dispatch-structural-i32");
        expect(_dispatch_structural_i32).not.toBeUndefined();
        let _dispatch_structural_i32_result = module.invoke(_dispatch_structural_i32, 23);
        expect(_dispatch_structural_i32_result).toBe(362880);
    });

    _test("execution of call_indirect_0: dispatch-structural-i32 (instance 2)", () => {
        let _dispatch_structural_i32 = module.getExport("dispatch-structural-i32");
        expect(_dispatch_structural_i32).not.toBeUndefined();
        let _dispatch_structural_i32_result = module.invoke(_dispatch_structural_i32, 26);
        expect(_dispatch_structural_i32_result).toBe(55);
    });

    _test("execution of call_indirect_0: dispatch-structural-i32 (instance 3)", () => {
        let _dispatch_structural_i32 = module.getExport("dispatch-structural-i32");
        expect(_dispatch_structural_i32).not.toBeUndefined();
        let _dispatch_structural_i32_result = module.invoke(_dispatch_structural_i32, 19);
        expect(_dispatch_structural_i32_result).toBe(9);
    });

    _test("execution of call_indirect_0: dispatch-structural-i32 (instance 4)", () => {
        let _dispatch_structural_i32 = module.getExport("dispatch-structural-i32");
        expect(_dispatch_structural_i32).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_i32, 9).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-i32 (instance 5)", () => {
        let _dispatch_structural_i32 = module.getExport("dispatch-structural-i32");
        expect(_dispatch_structural_i32).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_i32, 21).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-f32 (instance 0)", () => {
        let _dispatch_structural_f32 = module.getExport("dispatch-structural-f32");
        expect(_dispatch_structural_f32).not.toBeUndefined();
        let _dispatch_structural_f32_result = module.invoke(_dispatch_structural_f32, 6);
        expect(_dispatch_structural_f32_result).toBe(9.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f32 (instance 1)", () => {
        let _dispatch_structural_f32 = module.getExport("dispatch-structural-f32");
        expect(_dispatch_structural_f32).not.toBeUndefined();
        let _dispatch_structural_f32_result = module.invoke(_dispatch_structural_f32, 24);
        expect(_dispatch_structural_f32_result).toBe(362880.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f32 (instance 2)", () => {
        let _dispatch_structural_f32 = module.getExport("dispatch-structural-f32");
        expect(_dispatch_structural_f32).not.toBeUndefined();
        let _dispatch_structural_f32_result = module.invoke(_dispatch_structural_f32, 27);
        expect(_dispatch_structural_f32_result).toBe(55.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f32 (instance 3)", () => {
        let _dispatch_structural_f32 = module.getExport("dispatch-structural-f32");
        expect(_dispatch_structural_f32).not.toBeUndefined();
        let _dispatch_structural_f32_result = module.invoke(_dispatch_structural_f32, 21);
        expect(_dispatch_structural_f32_result).toBe(9.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f32 (instance 4)", () => {
        let _dispatch_structural_f32 = module.getExport("dispatch-structural-f32");
        expect(_dispatch_structural_f32).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_f32, 8).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-f32 (instance 5)", () => {
        let _dispatch_structural_f32 = module.getExport("dispatch-structural-f32");
        expect(_dispatch_structural_f32).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_f32, 19).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-f64 (instance 0)", () => {
        let _dispatch_structural_f64 = module.getExport("dispatch-structural-f64");
        expect(_dispatch_structural_f64).not.toBeUndefined();
        let _dispatch_structural_f64_result = module.invoke(_dispatch_structural_f64, 7);
        expect(_dispatch_structural_f64_result).toBe(9.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f64 (instance 1)", () => {
        let _dispatch_structural_f64 = module.getExport("dispatch-structural-f64");
        expect(_dispatch_structural_f64).not.toBeUndefined();
        let _dispatch_structural_f64_result = module.invoke(_dispatch_structural_f64, 25);
        expect(_dispatch_structural_f64_result).toBe(362880.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f64 (instance 2)", () => {
        let _dispatch_structural_f64 = module.getExport("dispatch-structural-f64");
        expect(_dispatch_structural_f64).not.toBeUndefined();
        let _dispatch_structural_f64_result = module.invoke(_dispatch_structural_f64, 28);
        expect(_dispatch_structural_f64_result).toBe(55.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f64 (instance 3)", () => {
        let _dispatch_structural_f64 = module.getExport("dispatch-structural-f64");
        expect(_dispatch_structural_f64).not.toBeUndefined();
        let _dispatch_structural_f64_result = module.invoke(_dispatch_structural_f64, 22);
        expect(_dispatch_structural_f64_result).toBe(9.0);
    });

    _test("execution of call_indirect_0: dispatch-structural-f64 (instance 4)", () => {
        let _dispatch_structural_f64 = module.getExport("dispatch-structural-f64");
        expect(_dispatch_structural_f64).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_f64, 10).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: dispatch-structural-f64 (instance 5)", () => {
        let _dispatch_structural_f64 = module.getExport("dispatch-structural-f64");
        expect(_dispatch_structural_f64).not.toBeUndefined();
        expect(() =>
            module.invoke(_dispatch_structural_f64, 18).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of call_indirect_0: fac-i64 (instance 0)", () => {
        let _fac_i64 = module.getExport("fac-i64");
        expect(_fac_i64).not.toBeUndefined();
        let _fac_i64_result = module.invoke(_fac_i64, 0n);
        expect(_fac_i64_result).toBe(1n);
    });

    _test("execution of call_indirect_0: fac-i64 (instance 1)", () => {
        let _fac_i64 = module.getExport("fac-i64");
        expect(_fac_i64).not.toBeUndefined();
        let _fac_i64_result = module.invoke(_fac_i64, 1n);
        expect(_fac_i64_result).toBe(1n);
    });

    _test("execution of call_indirect_0: fac-i64 (instance 2)", () => {
        let _fac_i64 = module.getExport("fac-i64");
        expect(_fac_i64).not.toBeUndefined();
        let _fac_i64_result = module.invoke(_fac_i64, 5n);
        expect(_fac_i64_result).toBe(120n);
    });

    _test("execution of call_indirect_0: fac-i64 (instance 3)", () => {
        let _fac_i64 = module.getExport("fac-i64");
        expect(_fac_i64).not.toBeUndefined();
        let _fac_i64_result = module.invoke(_fac_i64, 25n);
        expect(_fac_i64_result).toBe(7034535277573963776n);
    });

    _test("execution of call_indirect_0: fac-i32 (instance 0)", () => {
        let _fac_i32 = module.getExport("fac-i32");
        expect(_fac_i32).not.toBeUndefined();
        let _fac_i32_result = module.invoke(_fac_i32, 0);
        expect(_fac_i32_result).toBe(1);
    });

    _test("execution of call_indirect_0: fac-i32 (instance 1)", () => {
        let _fac_i32 = module.getExport("fac-i32");
        expect(_fac_i32).not.toBeUndefined();
        let _fac_i32_result = module.invoke(_fac_i32, 1);
        expect(_fac_i32_result).toBe(1);
    });

    _test("execution of call_indirect_0: fac-i32 (instance 2)", () => {
        let _fac_i32 = module.getExport("fac-i32");
        expect(_fac_i32).not.toBeUndefined();
        let _fac_i32_result = module.invoke(_fac_i32, 5);
        expect(_fac_i32_result).toBe(120);
    });

    _test("execution of call_indirect_0: fac-i32 (instance 3)", () => {
        let _fac_i32 = module.getExport("fac-i32");
        expect(_fac_i32).not.toBeUndefined();
        let _fac_i32_result = module.invoke(_fac_i32, 10);
        expect(_fac_i32_result).toBe(3628800);
    });

    _test("execution of call_indirect_0: fac-f32 (instance 0)", () => {
        let _fac_f32 = module.getExport("fac-f32");
        expect(_fac_f32).not.toBeUndefined();
        let _fac_f32_result = module.invoke(_fac_f32, 0.0);
        expect(_fac_f32_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fac-f32 (instance 1)", () => {
        let _fac_f32 = module.getExport("fac-f32");
        expect(_fac_f32).not.toBeUndefined();
        let _fac_f32_result = module.invoke(_fac_f32, 1.0);
        expect(_fac_f32_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fac-f32 (instance 2)", () => {
        let _fac_f32 = module.getExport("fac-f32");
        expect(_fac_f32).not.toBeUndefined();
        let _fac_f32_result = module.invoke(_fac_f32, 5.0);
        expect(_fac_f32_result).toBe(120.0);
    });

    _test("execution of call_indirect_0: fac-f32 (instance 3)", () => {
        let _fac_f32 = module.getExport("fac-f32");
        expect(_fac_f32).not.toBeUndefined();
        let _fac_f32_result = module.invoke(_fac_f32, 10.0);
        expect(_fac_f32_result).toBe(3628800.0);
    });

    _test("execution of call_indirect_0: fac-f64 (instance 0)", () => {
        let _fac_f64 = module.getExport("fac-f64");
        expect(_fac_f64).not.toBeUndefined();
        let _fac_f64_result = module.invoke(_fac_f64, 0.0);
        expect(_fac_f64_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fac-f64 (instance 1)", () => {
        let _fac_f64 = module.getExport("fac-f64");
        expect(_fac_f64).not.toBeUndefined();
        let _fac_f64_result = module.invoke(_fac_f64, 1.0);
        expect(_fac_f64_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fac-f64 (instance 2)", () => {
        let _fac_f64 = module.getExport("fac-f64");
        expect(_fac_f64).not.toBeUndefined();
        let _fac_f64_result = module.invoke(_fac_f64, 5.0);
        expect(_fac_f64_result).toBe(120.0);
    });

    _test("execution of call_indirect_0: fac-f64 (instance 3)", () => {
        let _fac_f64 = module.getExport("fac-f64");
        expect(_fac_f64).not.toBeUndefined();
        let _fac_f64_result = module.invoke(_fac_f64, 10.0);
        expect(_fac_f64_result).toBe(3628800.0);
    });

    _test("execution of call_indirect_0: fib-i64 (instance 0)", () => {
        let _fib_i64 = module.getExport("fib-i64");
        expect(_fib_i64).not.toBeUndefined();
        let _fib_i64_result = module.invoke(_fib_i64, 0n);
        expect(_fib_i64_result).toBe(1n);
    });

    _test("execution of call_indirect_0: fib-i64 (instance 1)", () => {
        let _fib_i64 = module.getExport("fib-i64");
        expect(_fib_i64).not.toBeUndefined();
        let _fib_i64_result = module.invoke(_fib_i64, 1n);
        expect(_fib_i64_result).toBe(1n);
    });

    _test("execution of call_indirect_0: fib-i64 (instance 2)", () => {
        let _fib_i64 = module.getExport("fib-i64");
        expect(_fib_i64).not.toBeUndefined();
        let _fib_i64_result = module.invoke(_fib_i64, 2n);
        expect(_fib_i64_result).toBe(2n);
    });

    _test("execution of call_indirect_0: fib-i64 (instance 3)", () => {
        let _fib_i64 = module.getExport("fib-i64");
        expect(_fib_i64).not.toBeUndefined();
        let _fib_i64_result = module.invoke(_fib_i64, 5n);
        expect(_fib_i64_result).toBe(8n);
    });

    _test("execution of call_indirect_0: fib-i64 (instance 4)", () => {
        let _fib_i64 = module.getExport("fib-i64");
        expect(_fib_i64).not.toBeUndefined();
        let _fib_i64_result = module.invoke(_fib_i64, 20n);
        expect(_fib_i64_result).toBe(10946n);
    });

    _test("execution of call_indirect_0: fib-i32 (instance 0)", () => {
        let _fib_i32 = module.getExport("fib-i32");
        expect(_fib_i32).not.toBeUndefined();
        let _fib_i32_result = module.invoke(_fib_i32, 0);
        expect(_fib_i32_result).toBe(1);
    });

    _test("execution of call_indirect_0: fib-i32 (instance 1)", () => {
        let _fib_i32 = module.getExport("fib-i32");
        expect(_fib_i32).not.toBeUndefined();
        let _fib_i32_result = module.invoke(_fib_i32, 1);
        expect(_fib_i32_result).toBe(1);
    });

    _test("execution of call_indirect_0: fib-i32 (instance 2)", () => {
        let _fib_i32 = module.getExport("fib-i32");
        expect(_fib_i32).not.toBeUndefined();
        let _fib_i32_result = module.invoke(_fib_i32, 2);
        expect(_fib_i32_result).toBe(2);
    });

    _test("execution of call_indirect_0: fib-i32 (instance 3)", () => {
        let _fib_i32 = module.getExport("fib-i32");
        expect(_fib_i32).not.toBeUndefined();
        let _fib_i32_result = module.invoke(_fib_i32, 5);
        expect(_fib_i32_result).toBe(8);
    });

    _test("execution of call_indirect_0: fib-i32 (instance 4)", () => {
        let _fib_i32 = module.getExport("fib-i32");
        expect(_fib_i32).not.toBeUndefined();
        let _fib_i32_result = module.invoke(_fib_i32, 20);
        expect(_fib_i32_result).toBe(10946);
    });

    _test("execution of call_indirect_0: fib-f32 (instance 0)", () => {
        let _fib_f32 = module.getExport("fib-f32");
        expect(_fib_f32).not.toBeUndefined();
        let _fib_f32_result = module.invoke(_fib_f32, 0.0);
        expect(_fib_f32_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fib-f32 (instance 1)", () => {
        let _fib_f32 = module.getExport("fib-f32");
        expect(_fib_f32).not.toBeUndefined();
        let _fib_f32_result = module.invoke(_fib_f32, 1.0);
        expect(_fib_f32_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fib-f32 (instance 2)", () => {
        let _fib_f32 = module.getExport("fib-f32");
        expect(_fib_f32).not.toBeUndefined();
        let _fib_f32_result = module.invoke(_fib_f32, 2.0);
        expect(_fib_f32_result).toBe(2.0);
    });

    _test("execution of call_indirect_0: fib-f32 (instance 3)", () => {
        let _fib_f32 = module.getExport("fib-f32");
        expect(_fib_f32).not.toBeUndefined();
        let _fib_f32_result = module.invoke(_fib_f32, 5.0);
        expect(_fib_f32_result).toBe(8.0);
    });

    _test("execution of call_indirect_0: fib-f32 (instance 4)", () => {
        let _fib_f32 = module.getExport("fib-f32");
        expect(_fib_f32).not.toBeUndefined();
        let _fib_f32_result = module.invoke(_fib_f32, 20.0);
        expect(_fib_f32_result).toBe(10946.0);
    });

    _test("execution of call_indirect_0: fib-f64 (instance 0)", () => {
        let _fib_f64 = module.getExport("fib-f64");
        expect(_fib_f64).not.toBeUndefined();
        let _fib_f64_result = module.invoke(_fib_f64, 0.0);
        expect(_fib_f64_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fib-f64 (instance 1)", () => {
        let _fib_f64 = module.getExport("fib-f64");
        expect(_fib_f64).not.toBeUndefined();
        let _fib_f64_result = module.invoke(_fib_f64, 1.0);
        expect(_fib_f64_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: fib-f64 (instance 2)", () => {
        let _fib_f64 = module.getExport("fib-f64");
        expect(_fib_f64).not.toBeUndefined();
        let _fib_f64_result = module.invoke(_fib_f64, 2.0);
        expect(_fib_f64_result).toBe(2.0);
    });

    _test("execution of call_indirect_0: fib-f64 (instance 3)", () => {
        let _fib_f64 = module.getExport("fib-f64");
        expect(_fib_f64).not.toBeUndefined();
        let _fib_f64_result = module.invoke(_fib_f64, 5.0);
        expect(_fib_f64_result).toBe(8.0);
    });

    _test("execution of call_indirect_0: fib-f64 (instance 4)", () => {
        let _fib_f64 = module.getExport("fib-f64");
        expect(_fib_f64).not.toBeUndefined();
        let _fib_f64_result = module.invoke(_fib_f64, 20.0);
        expect(_fib_f64_result).toBe(10946.0);
    });

    _test("execution of call_indirect_0: even (instance 0)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 0);
        expect(_even_result).toBe(44);
    });

    _test("execution of call_indirect_0: even (instance 1)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 1);
        expect(_even_result).toBe(99);
    });

    _test("execution of call_indirect_0: even (instance 2)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 100);
        expect(_even_result).toBe(44);
    });

    _test("execution of call_indirect_0: even (instance 3)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 77);
        expect(_even_result).toBe(99);
    });

    _test("execution of call_indirect_0: odd (instance 0)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 0);
        expect(_odd_result).toBe(99);
    });

    _test("execution of call_indirect_0: odd (instance 1)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 1);
        expect(_odd_result).toBe(44);
    });

    _test("execution of call_indirect_0: odd (instance 2)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 200);
        expect(_odd_result).toBe(99);
    });

    _test("execution of call_indirect_0: odd (instance 3)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 77);
        expect(_odd_result).toBe(44);
    });

    _test("execution of call_indirect_0: runaway (instance 0)", () => {
        let _runaway = module.getExport("runaway");
        expect(_runaway).not.toBeUndefined();
        expect(() => module.invoke(_runaway).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_0: mutual-runaway (instance 0)", () => {
        let _mutual_runaway = module.getExport("mutual-runaway");
        expect(_mutual_runaway).not.toBeUndefined();
        expect(() => module.invoke(_mutual_runaway).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first);
        expect(_as_select_first_result).toBe(306);
    });

    _test("execution of call_indirect_0: as-select-mid (instance 0)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of call_indirect_0: as-select-last (instance 0)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last);
        expect(_as_select_last_result).toBe(2);
    });

    _test("execution of call_indirect_0: as-if-condition (instance 0)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition);
        expect(_as_if_condition_result).toBe(1);
    });

    _test("execution of call_indirect_0: as-br_if-first (instance 0)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first);
        expect(_as_br_if_first_result).toBe(356n);
    });

    _test("execution of call_indirect_0: as-br_if-last (instance 0)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last);
        expect(_as_br_if_last_result).toBe(2);
    });

    _test("execution of call_indirect_0: as-br_table-first (instance 0)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first);
        expect(_as_br_table_first_result).toBe(3890.0);
    });

    _test("execution of call_indirect_0: as-br_table-last (instance 0)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of call_indirect_0: as-store-first (instance 0)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first);
    });

    _test("execution of call_indirect_0: as-store-last (instance 0)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last);
    });

    _test("execution of call_indirect_0: as-memory.grow-value (instance 0)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value);
        expect(_as_memory_grow_value_result).toBe(1);
    });

    _test("execution of call_indirect_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
        expect(_as_return_value_result).toBe(1);
    });

    _test("execution of call_indirect_0: as-drop-operand (instance 0)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand);
    });

    _test("execution of call_indirect_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value);
        expect(_as_local_set_value_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value);
        expect(_as_local_tee_value_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value);
        expect(_as_global_set_value_result).toBe(1.0);
    });

    _test("execution of call_indirect_0: as-load-operand (instance 0)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand);
        expect(_as_load_operand_result).toBe(1);
    });

    _test("execution of call_indirect_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand);
        expect(_as_unary_operand_result).toBe(0.0);
    });

    _test("execution of call_indirect_0: as-binary-left (instance 0)", () => {
        let _as_binary_left = module.getExport("as-binary-left");
        expect(_as_binary_left).not.toBeUndefined();
        let _as_binary_left_result = module.invoke(_as_binary_left);
        expect(_as_binary_left_result).toBe(11);
    });

    _test("execution of call_indirect_0: as-binary-right (instance 0)", () => {
        let _as_binary_right = module.getExport("as-binary-right");
        expect(_as_binary_right).not.toBeUndefined();
        let _as_binary_right_result = module.invoke(_as_binary_right);
        expect(_as_binary_right_result).toBe(9);
    });

    _test("execution of call_indirect_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand);
        expect(_as_test_operand_result).toBe(0);
    });

    _test("execution of call_indirect_0: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left);
        expect(_as_compare_left_result).toBe(1);
    });

    _test("execution of call_indirect_0: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right);
        expect(_as_compare_right_result).toBe(1);
    });

    _test("execution of call_indirect_0: as-convert-operand (instance 0)", () => {
        let _as_convert_operand = module.getExport("as-convert-operand");
        expect(_as_convert_operand).not.toBeUndefined();
        let _as_convert_operand_result = module.invoke(_as_convert_operand);
        expect(_as_convert_operand_result).toBe(1n);
    });
});

describe("call_indirect_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/call_indirect_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of call_indirect_1: call-1 (instance 0)", () => {
        let _call_1 = module.getExport("call-1");
        expect(_call_1).not.toBeUndefined();
        let _call_1_result = module.invoke(_call_1, 2, 3, 0);
        expect(_call_1_result).toBe(5);
    });

    _test("execution of call_indirect_1: call-1 (instance 1)", () => {
        let _call_1 = module.getExport("call-1");
        expect(_call_1).not.toBeUndefined();
        let _call_1_result = module.invoke(_call_1, 2, 3, 1);
        expect(_call_1_result).toBe(-1);
    });

    _test("execution of call_indirect_1: call-1 (instance 2)", () => {
        let _call_1 = module.getExport("call-1");
        expect(_call_1).not.toBeUndefined();
        expect(() => module.invoke(_call_1, 2, 3, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_1: call-2 (instance 0)", () => {
        let _call_2 = module.getExport("call-2");
        expect(_call_2).not.toBeUndefined();
        let _call_2_result = module.invoke(_call_2, 2, 3, 0);
        expect(_call_2_result).toBe(6);
    });

    _test("execution of call_indirect_1: call-2 (instance 1)", () => {
        let _call_2 = module.getExport("call-2");
        expect(_call_2).not.toBeUndefined();
        let _call_2_result = module.invoke(_call_2, 2, 3, 1);
        expect(_call_2_result).toBe(0);
    });

    _test("execution of call_indirect_1: call-2 (instance 2)", () => {
        let _call_2 = module.getExport("call-2");
        expect(_call_2).not.toBeUndefined();
        let _call_2_result = module.invoke(_call_2, 2, 3, 2);
        expect(_call_2_result).toBe(2);
    });

    _test("execution of call_indirect_1: call-2 (instance 3)", () => {
        let _call_2 = module.getExport("call-2");
        expect(_call_2).not.toBeUndefined();
        expect(() => module.invoke(_call_2, 2, 3, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_1: call-3 (instance 0)", () => {
        let _call_3 = module.getExport("call-3");
        expect(_call_3).not.toBeUndefined();
        let _call_3_result = module.invoke(_call_3, 2, 3, 0);
        expect(_call_3_result).toBe(-1);
    });

    _test("execution of call_indirect_1: call-3 (instance 1)", () => {
        let _call_3 = module.getExport("call-3");
        expect(_call_3).not.toBeUndefined();
        let _call_3_result = module.invoke(_call_3, 2, 3, 1);
        expect(_call_3_result).toBe(6);
    });

    _test("execution of call_indirect_1: call-3 (instance 2)", () => {
        let _call_3 = module.getExport("call-3");
        expect(_call_3).not.toBeUndefined();
        expect(() => module.invoke(_call_3, 2, 3, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_1: call-3 (instance 3)", () => {
        let _call_3 = module.getExport("call-3");
        expect(_call_3).not.toBeUndefined();
        expect(() => module.invoke(_call_3, 2, 3, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_indirect_1: call-3 (instance 4)", () => {
        let _call_3 = module.getExport("call-3");
        expect(_call_3).not.toBeUndefined();
        expect(() => module.invoke(_call_3, 2, 3, 4).toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_2", () => {
    let _test = test;

    _test("execution of call_indirect_2: _inline_test_0 (instance 0)", () => {});
});

describe("call_indirect_3", () => {
    let _test = test;

    _test("execution of call_indirect_3: _inline_test_1 (instance 0)", () => {});
});

describe("call_indirect_4", () => {
    let _test = test;

    _test("execution of call_indirect_4: _inline_test_2 (instance 0)", () => {});
});

describe("call_indirect_5", () => {
    let _test = test;

    _test("execution of call_indirect_5: _inline_test_3 (instance 0)", () => {});
});

describe("call_indirect_6", () => {
    let _test = test;

    _test("execution of call_indirect_6: _inline_test_4 (instance 0)", () => {});
});

describe("call_indirect_7", () => {
    let _test = test;

    _test("execution of call_indirect_7: _inline_test_5 (instance 0)", () => {});
});

describe("call_indirect_8", () => {
    let _test = test;

    _test("execution of call_indirect_8: _inline_test_6 (instance 0)", () => {});
});

describe("call_indirect_9", () => {
    let _test = test;

    _test("execution of call_indirect_9: _inline_test_7 (instance 0)", () => {});
});

describe("call_indirect_10", () => {
    let _test = test;

    _test("execution of call_indirect_10: _inline_test_8 (instance 0)", () => {});
});

describe("call_indirect_11", () => {
    let _test = test;

    _test("execution of call_indirect_11: _inline_test_9 (instance 0)", () => {});
});

describe("call_indirect_12", () => {
    let _test = test;

    _test("execution of call_indirect_12: _inline_test_10 (instance 0)", () => {});
});

describe("call_indirect_13", () => {
    let _test = test;

    _test("execution of call_indirect_13: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_14", () => {
    let _test = test;

    _test("execution of call_indirect_14: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_15", () => {
    let _test = test;

    _test("execution of call_indirect_15: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_16", () => {
    let _test = test;

    _test("execution of call_indirect_16: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_17", () => {
    let _test = test;

    _test("execution of call_indirect_17: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_18", () => {
    let _test = test;

    _test("execution of call_indirect_18: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_19", () => {
    let _test = test;

    _test("execution of call_indirect_19: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_20", () => {
    let _test = test;

    _test("execution of call_indirect_20: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_21", () => {
    let _test = test;

    _test("execution of call_indirect_21: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_22", () => {
    let _test = test;

    _test("execution of call_indirect_22: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_23", () => {
    let _test = test;

    _test("execution of call_indirect_23: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_24", () => {
    let _test = test;

    _test("execution of call_indirect_24: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_25", () => {
    let _test = test;

    _test("execution of call_indirect_25: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_26", () => {
    let _test = test;

    _test("execution of call_indirect_26: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_27", () => {
    let _test = test;

    _test("execution of call_indirect_27: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_28", () => {
    let _test = test;

    _test("execution of call_indirect_28: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_29", () => {
    let _test = test;

    _test("execution of call_indirect_29: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_30", () => {
    let _test = test;

    _test("execution of call_indirect_30: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_31", () => {
    let _test = test;

    _test("execution of call_indirect_31: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_32", () => {
    let _test = test;

    _test("execution of call_indirect_32: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_33", () => {
    let _test = test;

    _test("execution of call_indirect_33: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_indirect_34", () => {
    let _test = test;

    _test("execution of call_indirect_34: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
