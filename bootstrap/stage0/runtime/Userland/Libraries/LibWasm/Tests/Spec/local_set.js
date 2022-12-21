let globalImportObject = {};
let namedModules = {};

describe("local_set_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/local_set_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of local_set_0: type-local-i32 (instance 0)", () => {
        let _type_local_i32 = module.getExport("type-local-i32");
        expect(_type_local_i32).not.toBeUndefined();
        let _type_local_i32_result = module.invoke(_type_local_i32);
    });

    _test("execution of local_set_0: type-local-i64 (instance 0)", () => {
        let _type_local_i64 = module.getExport("type-local-i64");
        expect(_type_local_i64).not.toBeUndefined();
        let _type_local_i64_result = module.invoke(_type_local_i64);
    });

    _test("execution of local_set_0: type-local-f32 (instance 0)", () => {
        let _type_local_f32 = module.getExport("type-local-f32");
        expect(_type_local_f32).not.toBeUndefined();
        let _type_local_f32_result = module.invoke(_type_local_f32);
    });

    _test("execution of local_set_0: type-local-f64 (instance 0)", () => {
        let _type_local_f64 = module.getExport("type-local-f64");
        expect(_type_local_f64).not.toBeUndefined();
        let _type_local_f64_result = module.invoke(_type_local_f64);
    });

    _test("execution of local_set_0: type-param-i32 (instance 0)", () => {
        let _type_param_i32 = module.getExport("type-param-i32");
        expect(_type_param_i32).not.toBeUndefined();
        let _type_param_i32_result = module.invoke(_type_param_i32, 2);
    });

    _test("execution of local_set_0: type-param-i64 (instance 0)", () => {
        let _type_param_i64 = module.getExport("type-param-i64");
        expect(_type_param_i64).not.toBeUndefined();
        let _type_param_i64_result = module.invoke(_type_param_i64, 3n);
    });

    _test("execution of local_set_0: type-param-f32 (instance 0)", () => {
        let _type_param_f32 = module.getExport("type-param-f32");
        expect(_type_param_f32).not.toBeUndefined();
        let _type_param_f32_result = module.invoke(_type_param_f32, 4.4);
    });

    _test("execution of local_set_0: type-param-f64 (instance 0)", () => {
        let _type_param_f64 = module.getExport("type-param-f64");
        expect(_type_param_f64).not.toBeUndefined();
        let _type_param_f64_result = module.invoke(_type_param_f64, 5.5);
    });

    _test("execution of local_set_0: as-block-value (instance 0)", () => {
        let _as_block_value = module.getExport("as-block-value");
        expect(_as_block_value).not.toBeUndefined();
        let _as_block_value_result = module.invoke(_as_block_value, 0);
    });

    _test("execution of local_set_0: as-loop-value (instance 0)", () => {
        let _as_loop_value = module.getExport("as-loop-value");
        expect(_as_loop_value).not.toBeUndefined();
        let _as_loop_value_result = module.invoke(_as_loop_value, 0);
    });

    _test("execution of local_set_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value, 0);
    });

    _test("execution of local_set_0: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value, 0);
    });

    _test("execution of local_set_0: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond, 0);
    });

    _test("execution of local_set_0: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value, 0);
    });

    _test("execution of local_set_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value, 0);
    });

    _test("execution of local_set_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 1);
    });

    _test("execution of local_set_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 0);
    });

    _test("execution of local_set_0: type-mixed (instance 0)", () => {
        let _type_mixed = module.getExport("type-mixed");
        expect(_type_mixed).not.toBeUndefined();
        let _type_mixed_result = module.invoke(_type_mixed, 1n, 2.2, 3.3, 4, 5);
    });

    _test("execution of local_set_0: write (instance 0)", () => {
        let _write = module.getExport("write");
        expect(_write).not.toBeUndefined();
        let _write_result = module.invoke(_write, 1n, 2.0, 3.3, 4, 5);
        expect(_write_result).toBe(56n);
    });
});

describe("local_set_1", () => {
    let _test = test;

    _test("execution of local_set_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_2", () => {
    let _test = test;

    _test("execution of local_set_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_3", () => {
    let _test = test;

    _test("execution of local_set_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_4", () => {
    let _test = test;

    _test("execution of local_set_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_5", () => {
    let _test = test;

    _test("execution of local_set_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_6", () => {
    let _test = test;

    _test("execution of local_set_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_7", () => {
    let _test = test;

    _test("execution of local_set_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_8", () => {
    let _test = test;

    _test("execution of local_set_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_9", () => {
    let _test = test;

    _test("execution of local_set_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_10", () => {
    let _test = test;

    _test("execution of local_set_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_11", () => {
    let _test = test;

    _test("execution of local_set_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_12", () => {
    let _test = test;

    _test("execution of local_set_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_13", () => {
    let _test = test;

    _test("execution of local_set_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_14", () => {
    let _test = test;

    _test("execution of local_set_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_15", () => {
    let _test = test;

    _test("execution of local_set_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_16", () => {
    let _test = test;

    _test("execution of local_set_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_17", () => {
    let _test = test;

    _test("execution of local_set_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_18", () => {
    let _test = test;

    _test("execution of local_set_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_19", () => {
    let _test = test;

    _test("execution of local_set_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_20", () => {
    let _test = test;

    _test("execution of local_set_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_21", () => {
    let _test = test;

    _test("execution of local_set_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_22", () => {
    let _test = test;

    _test("execution of local_set_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_23", () => {
    let _test = test;

    _test("execution of local_set_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_24", () => {
    let _test = test;

    _test("execution of local_set_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_25", () => {
    let _test = test;

    _test("execution of local_set_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_26", () => {
    let _test = test;

    _test("execution of local_set_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_27", () => {
    let _test = test;

    _test("execution of local_set_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_28", () => {
    let _test = test;

    _test("execution of local_set_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_29", () => {
    let _test = test;

    _test("execution of local_set_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_30", () => {
    let _test = test;

    _test("execution of local_set_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_31", () => {
    let _test = test;

    _test("execution of local_set_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_32", () => {
    let _test = test;

    _test("execution of local_set_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_set_33", () => {
    let _test = test;

    _test("execution of local_set_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
