let globalImportObject = {};
let namedModules = {};

describe("store_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/store_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of store_0: as-block-value (instance 0)", () => {
        let _as_block_value = module.getExport("as-block-value");
        expect(_as_block_value).not.toBeUndefined();
        let _as_block_value_result = module.invoke(_as_block_value);
    });

    _test("execution of store_0: as-loop-value (instance 0)", () => {
        let _as_loop_value = module.getExport("as-loop-value");
        expect(_as_loop_value).not.toBeUndefined();
        let _as_loop_value_result = module.invoke(_as_loop_value);
    });

    _test("execution of store_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
    });

    _test("execution of store_0: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value);
    });

    _test("execution of store_0: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond);
    });

    _test("execution of store_0: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value);
    });

    _test("execution of store_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
    });

    _test("execution of store_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then);
    });

    _test("execution of store_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else);
    });
});

describe("store_1", () => {
    let _test = test;

    _test("execution of store_1: _inline_test_0 (instance 0)", () => {});
});

describe("store_2", () => {
    let _test = test;

    _test("execution of store_2: _inline_test_1 (instance 0)", () => {});
});

describe("store_3", () => {
    let _test = test;

    _test("execution of store_3: _inline_test_2 (instance 0)", () => {});
});

describe("store_4", () => {
    let _test = test;

    _test("execution of store_4: _inline_test_3 (instance 0)", () => {});
});

describe("store_5", () => {
    let _test = test;

    _test("execution of store_5: _inline_test_4 (instance 0)", () => {});
});

describe("store_6", () => {
    let _test = test;

    _test("execution of store_6: _inline_test_5 (instance 0)", () => {});
});

describe("store_7", () => {
    let _test = test;

    _test("execution of store_7: _inline_test_6 (instance 0)", () => {});
});

describe("store_8", () => {
    let _test = test;

    _test("execution of store_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_9", () => {
    let _test = test;

    _test("execution of store_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_10", () => {
    let _test = test;

    _test("execution of store_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_11", () => {
    let _test = test;

    _test("execution of store_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_12", () => {
    let _test = test;

    _test("execution of store_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_13", () => {
    let _test = test;

    _test("execution of store_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_14", () => {
    let _test = test;

    _test("execution of store_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_15", () => {
    let _test = test;

    _test("execution of store_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_16", () => {
    let _test = test;

    _test("execution of store_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_17", () => {
    let _test = test;

    _test("execution of store_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_18", () => {
    let _test = test;

    _test("execution of store_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_19", () => {
    let _test = test;

    _test("execution of store_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_20", () => {
    let _test = test;

    _test("execution of store_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_21", () => {
    let _test = test;

    _test("execution of store_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_22", () => {
    let _test = test;

    _test("execution of store_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_23", () => {
    let _test = test;

    _test("execution of store_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_24", () => {
    let _test = test;

    _test("execution of store_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_25", () => {
    let _test = test;

    _test("execution of store_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_26", () => {
    let _test = test;

    _test("execution of store_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_27", () => {
    let _test = test;

    _test("execution of store_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_28", () => {
    let _test = test;

    _test("execution of store_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_29", () => {
    let _test = test;

    _test("execution of store_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_30", () => {
    let _test = test;

    _test("execution of store_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_31", () => {
    let _test = test;

    _test("execution of store_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_32", () => {
    let _test = test;

    _test("execution of store_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_33", () => {
    let _test = test;

    _test("execution of store_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_34", () => {
    let _test = test;

    _test("execution of store_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_35", () => {
    let _test = test;

    _test("execution of store_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_36", () => {
    let _test = test;

    _test("execution of store_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_37", () => {
    let _test = test;

    _test("execution of store_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_38", () => {
    let _test = test;

    _test("execution of store_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_39", () => {
    let _test = test;

    _test("execution of store_39: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_40", () => {
    let _test = test;

    _test("execution of store_40: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_41", () => {
    let _test = test;

    _test("execution of store_41: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_42", () => {
    let _test = test;

    _test("execution of store_42: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_43", () => {
    let _test = test;

    _test("execution of store_43: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_44", () => {
    let _test = test;

    _test("execution of store_44: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_45", () => {
    let _test = test;

    _test("execution of store_45: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_46", () => {
    let _test = test;

    _test("execution of store_46: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_47", () => {
    let _test = test;

    _test("execution of store_47: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_48", () => {
    let _test = test;

    _test("execution of store_48: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_49", () => {
    let _test = test;

    _test("execution of store_49: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_50", () => {
    let _test = test;

    _test("execution of store_50: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_51", () => {
    let _test = test;

    _test("execution of store_51: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_52", () => {
    let _test = test;

    _test("execution of store_52: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_53", () => {
    let _test = test;

    _test("execution of store_53: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_54", () => {
    let _test = test;

    _test("execution of store_54: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_55", () => {
    let _test = test;

    _test("execution of store_55: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_56", () => {
    let _test = test;

    _test("execution of store_56: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_57", () => {
    let _test = test;

    _test("execution of store_57: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("store_58", () => {
    let _test = test;

    _test("execution of store_58: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
