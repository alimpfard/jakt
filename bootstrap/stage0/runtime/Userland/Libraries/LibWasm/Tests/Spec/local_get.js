let globalImportObject = {};
let namedModules = {};

describe("local_get_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/local_get_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of local_get_0: type-local-i32 (instance 0)", () => {
        let _type_local_i32 = module.getExport("type-local-i32");
        expect(_type_local_i32).not.toBeUndefined();
        let _type_local_i32_result = module.invoke(_type_local_i32);
        expect(_type_local_i32_result).toBe(0);
    });

    _test("execution of local_get_0: type-local-i64 (instance 0)", () => {
        let _type_local_i64 = module.getExport("type-local-i64");
        expect(_type_local_i64).not.toBeUndefined();
        let _type_local_i64_result = module.invoke(_type_local_i64);
        expect(_type_local_i64_result).toBe(0n);
    });

    _test("execution of local_get_0: type-local-f32 (instance 0)", () => {
        let _type_local_f32 = module.getExport("type-local-f32");
        expect(_type_local_f32).not.toBeUndefined();
        let _type_local_f32_result = module.invoke(_type_local_f32);
        expect(_type_local_f32_result).toBe(0.0);
    });

    _test("execution of local_get_0: type-local-f64 (instance 0)", () => {
        let _type_local_f64 = module.getExport("type-local-f64");
        expect(_type_local_f64).not.toBeUndefined();
        let _type_local_f64_result = module.invoke(_type_local_f64);
        expect(_type_local_f64_result).toBe(0.0);
    });

    _test("execution of local_get_0: type-param-i32 (instance 0)", () => {
        let _type_param_i32 = module.getExport("type-param-i32");
        expect(_type_param_i32).not.toBeUndefined();
        let _type_param_i32_result = module.invoke(_type_param_i32, 2);
        expect(_type_param_i32_result).toBe(2);
    });

    _test("execution of local_get_0: type-param-i64 (instance 0)", () => {
        let _type_param_i64 = module.getExport("type-param-i64");
        expect(_type_param_i64).not.toBeUndefined();
        let _type_param_i64_result = module.invoke(_type_param_i64, 3n);
        expect(_type_param_i64_result).toBe(3n);
    });

    _test("execution of local_get_0: type-param-f32 (instance 0)", () => {
        let _type_param_f32 = module.getExport("type-param-f32");
        expect(_type_param_f32).not.toBeUndefined();
        let _type_param_f32_result = module.invoke(_type_param_f32, 4.4);
        expect(_type_param_f32_result).toBe(4.4);
    });

    _test("execution of local_get_0: type-param-f64 (instance 0)", () => {
        let _type_param_f64 = module.getExport("type-param-f64");
        expect(_type_param_f64).not.toBeUndefined();
        let _type_param_f64_result = module.invoke(_type_param_f64, 5.5);
        expect(_type_param_f64_result).toBe(5.5);
    });

    _test("execution of local_get_0: as-block-value (instance 0)", () => {
        let _as_block_value = module.getExport("as-block-value");
        expect(_as_block_value).not.toBeUndefined();
        let _as_block_value_result = module.invoke(_as_block_value, 6);
        expect(_as_block_value_result).toBe(6);
    });

    _test("execution of local_get_0: as-loop-value (instance 0)", () => {
        let _as_loop_value = module.getExport("as-loop-value");
        expect(_as_loop_value).not.toBeUndefined();
        let _as_loop_value_result = module.invoke(_as_loop_value, 7);
        expect(_as_loop_value_result).toBe(7);
    });

    _test("execution of local_get_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value, 8);
        expect(_as_br_value_result).toBe(8);
    });

    _test("execution of local_get_0: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value, 9);
        expect(_as_br_if_value_result).toBe(9);
    });

    _test("execution of local_get_0: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond, 10);
        expect(_as_br_if_value_cond_result).toBe(10);
    });

    _test("execution of local_get_0: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value, 1);
        expect(_as_br_table_value_result).toBe(2);
    });

    _test("execution of local_get_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value, 0);
        expect(_as_return_value_result).toBe(0);
    });

    _test("execution of local_get_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 1);
        expect(_as_if_then_result).toBe(1);
    });

    _test("execution of local_get_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 0);
        expect(_as_if_else_result).toBe(0);
    });

    _test("execution of local_get_0: type-mixed (instance 0)", () => {
        let _type_mixed = module.getExport("type-mixed");
        expect(_type_mixed).not.toBeUndefined();
        let _type_mixed_result = module.invoke(_type_mixed, 1n, 2.2, 3.3, 4, 5);
    });

    _test("execution of local_get_0: read (instance 0)", () => {
        let _read = module.getExport("read");
        expect(_read).not.toBeUndefined();
        let _read_result = module.invoke(_read, 1n, 2.0, 3.3, 4, 5);
        expect(_read_result).toBe(34.8);
    });
});

describe("local_get_1", () => {
    let _test = test;

    _test("execution of local_get_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_2", () => {
    let _test = test;

    _test("execution of local_get_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_3", () => {
    let _test = test;

    _test("execution of local_get_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_4", () => {
    let _test = test;

    _test("execution of local_get_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_5", () => {
    let _test = test;

    _test("execution of local_get_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_6", () => {
    let _test = test;

    _test("execution of local_get_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_7", () => {
    let _test = test;

    _test("execution of local_get_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_8", () => {
    let _test = test;

    _test("execution of local_get_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_9", () => {
    let _test = test;

    _test("execution of local_get_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_10", () => {
    let _test = test;

    _test("execution of local_get_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_11", () => {
    let _test = test;

    _test("execution of local_get_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_12", () => {
    let _test = test;

    _test("execution of local_get_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_13", () => {
    let _test = test;

    _test("execution of local_get_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_14", () => {
    let _test = test;

    _test("execution of local_get_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_15", () => {
    let _test = test;

    _test("execution of local_get_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_get_16", () => {
    let _test = test;

    _test("execution of local_get_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
