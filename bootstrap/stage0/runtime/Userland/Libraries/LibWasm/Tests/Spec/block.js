let globalImportObject = {};
let namedModules = {};

describe("block_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/block_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of block_0: empty (instance 0)", () => {
        let _empty = module.getExport("empty");
        expect(_empty).not.toBeUndefined();
        let _empty_result = module.invoke(_empty);
    });

    _test("execution of block_0: singular (instance 0)", () => {
        let _singular = module.getExport("singular");
        expect(_singular).not.toBeUndefined();
        let _singular_result = module.invoke(_singular);
        expect(_singular_result).toBe(7);
    });

    _test("execution of block_0: multi (instance 0)", () => {
        let _multi = module.getExport("multi");
        expect(_multi).not.toBeUndefined();
        let _multi_result = module.invoke(_multi);
        expect(_multi_result).toBe(8);
    });

    _test("execution of block_0: nested (instance 0)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested);
        expect(_nested_result).toBe(9);
    });

    _test("execution of block_0: deep (instance 0)", () => {
        let _deep = module.getExport("deep");
        expect(_deep).not.toBeUndefined();
        let _deep_result = module.invoke(_deep);
        expect(_deep_result).toBe(150);
    });

    _test("execution of block_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first);
        expect(_as_select_first_result).toBe(1);
    });

    _test("execution of block_0: as-select-mid (instance 0)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of block_0: as-select-last (instance 0)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last);
        expect(_as_select_last_result).toBe(2);
    });

    _test("execution of block_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first);
        expect(_as_loop_first_result).toBe(1);
    });

    _test("execution of block_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid);
        expect(_as_loop_mid_result).toBe(1);
    });

    _test("execution of block_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last);
        expect(_as_loop_last_result).toBe(1);
    });

    _test("execution of block_0: as-if-condition (instance 0)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition);
    });

    _test("execution of block_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then);
        expect(_as_if_then_result).toBe(1);
    });

    _test("execution of block_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else);
        expect(_as_if_else_result).toBe(2);
    });

    _test("execution of block_0: as-br_if-first (instance 0)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first);
        expect(_as_br_if_first_result).toBe(1);
    });

    _test("execution of block_0: as-br_if-last (instance 0)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last);
        expect(_as_br_if_last_result).toBe(2);
    });

    _test("execution of block_0: as-br_table-first (instance 0)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first);
        expect(_as_br_table_first_result).toBe(1);
    });

    _test("execution of block_0: as-br_table-last (instance 0)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of block_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first);
        expect(_as_call_indirect_first_result).toBe(1);
    });

    _test("execution of block_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid);
        expect(_as_call_indirect_mid_result).toBe(2);
    });

    _test("execution of block_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        let _as_call_indirect_last_result = module.invoke(_as_call_indirect_last);
        expect(_as_call_indirect_last_result).toBe(1);
    });

    _test("execution of block_0: as-store-first (instance 0)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first);
    });

    _test("execution of block_0: as-store-last (instance 0)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last);
    });

    _test("execution of block_0: as-memory.grow-value (instance 0)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value);
        expect(_as_memory_grow_value_result).toBe(1);
    });

    _test("execution of block_0: as-call-value (instance 0)", () => {
        let _as_call_value = module.getExport("as-call-value");
        expect(_as_call_value).not.toBeUndefined();
        let _as_call_value_result = module.invoke(_as_call_value);
        expect(_as_call_value_result).toBe(1);
    });

    _test("execution of block_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
        expect(_as_return_value_result).toBe(1);
    });

    _test("execution of block_0: as-drop-operand (instance 0)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand);
    });

    _test("execution of block_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(1);
    });

    _test("execution of block_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value);
        expect(_as_local_set_value_result).toBe(1);
    });

    _test("execution of block_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value);
        expect(_as_local_tee_value_result).toBe(1);
    });

    _test("execution of block_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value);
        expect(_as_global_set_value_result).toBe(1);
    });

    _test("execution of block_0: as-load-operand (instance 0)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand);
        expect(_as_load_operand_result).toBe(1);
    });

    _test("execution of block_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand);
        expect(_as_unary_operand_result).toBe(0);
    });

    _test("execution of block_0: as-binary-operand (instance 0)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand);
        expect(_as_binary_operand_result).toBe(12);
    });

    _test("execution of block_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand);
        expect(_as_test_operand_result).toBe(0);
    });

    _test("execution of block_0: as-compare-operand (instance 0)", () => {
        let _as_compare_operand = module.getExport("as-compare-operand");
        expect(_as_compare_operand).not.toBeUndefined();
        let _as_compare_operand_result = module.invoke(_as_compare_operand);
        expect(_as_compare_operand_result).toBe(0);
    });

    _test("execution of block_0: as-binary-operands (instance 0)", () => {
        let _as_binary_operands = module.getExport("as-binary-operands");
        expect(_as_binary_operands).not.toBeUndefined();
        let _as_binary_operands_result = module.invoke(_as_binary_operands);
        expect(_as_binary_operands_result).toBe(12);
    });

    _test("execution of block_0: as-compare-operands (instance 0)", () => {
        let _as_compare_operands = module.getExport("as-compare-operands");
        expect(_as_compare_operands).not.toBeUndefined();
        let _as_compare_operands_result = module.invoke(_as_compare_operands);
        expect(_as_compare_operands_result).toBe(0);
    });

    _test("execution of block_0: as-mixed-operands (instance 0)", () => {
        let _as_mixed_operands = module.getExport("as-mixed-operands");
        expect(_as_mixed_operands).not.toBeUndefined();
        let _as_mixed_operands_result = module.invoke(_as_mixed_operands);
        expect(_as_mixed_operands_result).toBe(27);
    });

    _test("execution of block_0: break-bare (instance 0)", () => {
        let _break_bare = module.getExport("break-bare");
        expect(_break_bare).not.toBeUndefined();
        let _break_bare_result = module.invoke(_break_bare);
        expect(_break_bare_result).toBe(19);
    });

    _test("execution of block_0: break-value (instance 0)", () => {
        let _break_value = module.getExport("break-value");
        expect(_break_value).not.toBeUndefined();
        let _break_value_result = module.invoke(_break_value);
        expect(_break_value_result).toBe(18);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of block_0: <unknown> (instance 0)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of block_0: break-repeated (instance 0)", () => {
        let _break_repeated = module.getExport("break-repeated");
        expect(_break_repeated).not.toBeUndefined();
        let _break_repeated_result = module.invoke(_break_repeated);
        expect(_break_repeated_result).toBe(18);
    });

    _test("execution of block_0: break-inner (instance 0)", () => {
        let _break_inner = module.getExport("break-inner");
        expect(_break_inner).not.toBeUndefined();
        let _break_inner_result = module.invoke(_break_inner);
        expect(_break_inner_result).toBe(15);
    });

    _test("execution of block_0: param (instance 0)", () => {
        let _param = module.getExport("param");
        expect(_param).not.toBeUndefined();
        let _param_result = module.invoke(_param);
        expect(_param_result).toBe(3);
    });

    _test("execution of block_0: params (instance 0)", () => {
        let _params = module.getExport("params");
        expect(_params).not.toBeUndefined();
        let _params_result = module.invoke(_params);
        expect(_params_result).toBe(3);
    });

    _test("execution of block_0: params-id (instance 0)", () => {
        let _params_id = module.getExport("params-id");
        expect(_params_id).not.toBeUndefined();
        let _params_id_result = module.invoke(_params_id);
        expect(_params_id_result).toBe(3);
    });

    _test("execution of block_0: param-break (instance 0)", () => {
        let _param_break = module.getExport("param-break");
        expect(_param_break).not.toBeUndefined();
        let _param_break_result = module.invoke(_param_break);
        expect(_param_break_result).toBe(3);
    });

    _test("execution of block_0: params-break (instance 0)", () => {
        let _params_break = module.getExport("params-break");
        expect(_params_break).not.toBeUndefined();
        let _params_break_result = module.invoke(_params_break);
        expect(_params_break_result).toBe(3);
    });

    _test("execution of block_0: params-id-break (instance 0)", () => {
        let _params_id_break = module.getExport("params-id-break");
        expect(_params_id_break).not.toBeUndefined();
        let _params_id_break_result = module.invoke(_params_id_break);
        expect(_params_id_break_result).toBe(3);
    });

    _test("execution of block_0: effects (instance 0)", () => {
        let _effects = module.getExport("effects");
        expect(_effects).not.toBeUndefined();
        let _effects_result = module.invoke(_effects);
        expect(_effects_result).toBe(1);
    });

    _test("execution of block_0: type-use (instance 0)", () => {
        let _type_use = module.getExport("type-use");
        expect(_type_use).not.toBeUndefined();
        let _type_use_result = module.invoke(_type_use);
    });
});

describe("block_1", () => {
    let _test = test;

    _test("execution of block_1: _inline_test_0 (instance 0)", () => {});
});

describe("block_2", () => {
    let _test = test;

    _test("execution of block_2: _inline_test_1 (instance 0)", () => {});
});

describe("block_3", () => {
    let _test = test;

    _test("execution of block_3: _inline_test_2 (instance 0)", () => {});
});

describe("block_4", () => {
    let _test = test;

    _test("execution of block_4: _inline_test_3 (instance 0)", () => {});
});

describe("block_5", () => {
    let _test = test;

    _test("execution of block_5: _inline_test_4 (instance 0)", () => {});
});

describe("block_6", () => {
    let _test = test;

    _test("execution of block_6: _inline_test_5 (instance 0)", () => {});
});

describe("block_7", () => {
    let _test = test;

    _test("execution of block_7: _inline_test_6 (instance 0)", () => {});
});

describe("block_8", () => {
    let _test = test;

    _test("execution of block_8: _inline_test_7 (instance 0)", () => {});
});

describe("block_9", () => {
    let _test = test;

    _test("execution of block_9: _inline_test_8 (instance 0)", () => {});
});

describe("block_10", () => {
    let _test = test;

    _test("execution of block_10: _inline_test_9 (instance 0)", () => {});
});

describe("block_11", () => {
    let _test = test;

    _test("execution of block_11: _inline_test_10 (instance 0)", () => {});
});

describe("block_12", () => {
    let _test = test;

    _test("execution of block_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_13", () => {
    let _test = test;

    _test("execution of block_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_14", () => {
    let _test = test;

    _test("execution of block_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_15", () => {
    let _test = test;

    _test("execution of block_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_16", () => {
    let _test = test;

    _test("execution of block_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_17", () => {
    let _test = test;

    _test("execution of block_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_18", () => {
    let _test = test;

    _test("execution of block_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_19", () => {
    let _test = test;

    _test("execution of block_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_20", () => {
    let _test = test;

    _test("execution of block_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_21", () => {
    let _test = test;

    _test("execution of block_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_22", () => {
    let _test = test;

    _test("execution of block_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_23", () => {
    let _test = test;

    _test("execution of block_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_24", () => {
    let _test = test;

    _test("execution of block_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_25", () => {
    let _test = test;

    _test("execution of block_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_26", () => {
    let _test = test;

    _test("execution of block_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_27", () => {
    let _test = test;

    _test("execution of block_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_28", () => {
    let _test = test;

    _test("execution of block_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_29", () => {
    let _test = test;

    _test("execution of block_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_30", () => {
    let _test = test;

    _test("execution of block_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_31", () => {
    let _test = test;

    _test("execution of block_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_32", () => {
    let _test = test;

    _test("execution of block_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_33", () => {
    let _test = test;

    _test("execution of block_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_34", () => {
    let _test = test;

    _test("execution of block_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_35", () => {
    let _test = test;

    _test("execution of block_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_36", () => {
    let _test = test;

    _test("execution of block_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_37", () => {
    let _test = test;

    _test("execution of block_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_38", () => {
    let _test = test;

    _test("execution of block_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_39", () => {
    let _test = test;

    _test("execution of block_39: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_40", () => {
    let _test = test;

    _test("execution of block_40: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_41", () => {
    let _test = test;

    _test("execution of block_41: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_42", () => {
    let _test = test;

    _test("execution of block_42: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_43", () => {
    let _test = test;

    _test("execution of block_43: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_44", () => {
    let _test = test;

    _test("execution of block_44: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_45", () => {
    let _test = test;

    _test("execution of block_45: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_46", () => {
    let _test = test;

    _test("execution of block_46: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_47", () => {
    let _test = test;

    _test("execution of block_47: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_48", () => {
    let _test = test;

    _test("execution of block_48: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_49", () => {
    let _test = test;

    _test("execution of block_49: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_50", () => {
    let _test = test;

    _test("execution of block_50: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_51", () => {
    let _test = test;

    _test("execution of block_51: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_52", () => {
    let _test = test;

    _test("execution of block_52: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_53", () => {
    let _test = test;

    _test("execution of block_53: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_54", () => {
    let _test = test;

    _test("execution of block_54: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_55", () => {
    let _test = test;

    _test("execution of block_55: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_56", () => {
    let _test = test;

    _test("execution of block_56: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_57", () => {
    let _test = test;

    _test("execution of block_57: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_58", () => {
    let _test = test;

    _test("execution of block_58: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_59", () => {
    let _test = test;

    _test("execution of block_59: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_60", () => {
    let _test = test;

    _test("execution of block_60: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_61", () => {
    let _test = test;

    _test("execution of block_61: _inline_test_60 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_62", () => {
    let _test = test;

    _test("execution of block_62: _inline_test_61 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_63", () => {
    let _test = test;

    _test("execution of block_63: _inline_test_62 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_64", () => {
    let _test = test;

    _test("execution of block_64: _inline_test_63 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_65", () => {
    let _test = test;

    _test("execution of block_65: _inline_test_64 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_66", () => {
    let _test = test;

    _test("execution of block_66: _inline_test_65 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_67", () => {
    let _test = test;

    _test("execution of block_67: _inline_test_66 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_68", () => {
    let _test = test;

    _test("execution of block_68: _inline_test_67 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_69", () => {
    let _test = test;

    _test("execution of block_69: _inline_test_68 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_70", () => {
    let _test = test;

    _test("execution of block_70: _inline_test_69 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_71", () => {
    let _test = test;

    _test("execution of block_71: _inline_test_70 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_72", () => {
    let _test = test;

    _test("execution of block_72: _inline_test_71 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_73", () => {
    let _test = test;

    _test("execution of block_73: _inline_test_72 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_74", () => {
    let _test = test;

    _test("execution of block_74: _inline_test_73 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_75", () => {
    let _test = test;

    _test("execution of block_75: _inline_test_74 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_76", () => {
    let _test = test;

    _test("execution of block_76: _inline_test_75 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_77", () => {
    let _test = test;

    _test("execution of block_77: _inline_test_76 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_78", () => {
    let _test = test;

    _test("execution of block_78: _inline_test_77 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_79", () => {
    let _test = test;

    _test("execution of block_79: _inline_test_78 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_80", () => {
    let _test = test;

    _test("execution of block_80: _inline_test_79 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_81", () => {
    let _test = test;

    _test("execution of block_81: _inline_test_80 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_82", () => {
    let _test = test;

    _test("execution of block_82: _inline_test_81 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_83", () => {
    let _test = test;

    _test("execution of block_83: _inline_test_82 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_84", () => {
    let _test = test;

    _test("execution of block_84: _inline_test_83 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_85", () => {
    let _test = test;

    _test("execution of block_85: _inline_test_84 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_86", () => {
    let _test = test;

    _test("execution of block_86: _inline_test_85 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_87", () => {
    let _test = test;

    _test("execution of block_87: _inline_test_86 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_88", () => {
    let _test = test;

    _test("execution of block_88: _inline_test_87 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_89", () => {
    let _test = test;

    _test("execution of block_89: _inline_test_88 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_90", () => {
    let _test = test;

    _test("execution of block_90: _inline_test_89 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_91", () => {
    let _test = test;

    _test("execution of block_91: _inline_test_90 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_92", () => {
    let _test = test;

    _test("execution of block_92: _inline_test_91 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_93", () => {
    let _test = test;

    _test("execution of block_93: _inline_test_92 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_94", () => {
    let _test = test;

    _test("execution of block_94: _inline_test_93 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_95", () => {
    let _test = test;

    _test("execution of block_95: _inline_test_94 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_96", () => {
    let _test = test;

    _test("execution of block_96: _inline_test_95 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_97", () => {
    let _test = test;

    _test("execution of block_97: _inline_test_96 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_98", () => {
    let _test = test;

    _test("execution of block_98: _inline_test_97 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_99", () => {
    let _test = test;

    _test("execution of block_99: _inline_test_98 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_100", () => {
    let _test = test;

    _test("execution of block_100: _inline_test_99 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_101", () => {
    let _test = test;

    _test("execution of block_101: _inline_test_100 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_102", () => {
    let _test = test;

    _test("execution of block_102: _inline_test_101 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_103", () => {
    let _test = test;

    _test("execution of block_103: _inline_test_102 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_104", () => {
    let _test = test;

    _test("execution of block_104: _inline_test_103 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_105", () => {
    let _test = test;

    _test("execution of block_105: _inline_test_104 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_106", () => {
    let _test = test;

    _test("execution of block_106: _inline_test_105 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_107", () => {
    let _test = test;

    _test("execution of block_107: _inline_test_106 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_108", () => {
    let _test = test;

    _test("execution of block_108: _inline_test_107 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_109", () => {
    let _test = test;

    _test("execution of block_109: _inline_test_108 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_110", () => {
    let _test = test;

    _test("execution of block_110: _inline_test_109 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_111", () => {
    let _test = test;

    _test("execution of block_111: _inline_test_110 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_112", () => {
    let _test = test;

    _test("execution of block_112: _inline_test_111 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_113", () => {
    let _test = test;

    _test("execution of block_113: _inline_test_112 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_114", () => {
    let _test = test;

    _test("execution of block_114: _inline_test_113 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_115", () => {
    let _test = test;

    _test("execution of block_115: _inline_test_114 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_116", () => {
    let _test = test;

    _test("execution of block_116: _inline_test_115 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_117", () => {
    let _test = test;

    _test("execution of block_117: _inline_test_116 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_118", () => {
    let _test = test;

    _test("execution of block_118: _inline_test_117 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_119", () => {
    let _test = test;

    _test("execution of block_119: _inline_test_118 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_120", () => {
    let _test = test;

    _test("execution of block_120: _inline_test_119 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_121", () => {
    let _test = test;

    _test("execution of block_121: _inline_test_120 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_122", () => {
    let _test = test;

    _test("execution of block_122: _inline_test_121 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_123", () => {
    let _test = test;

    _test("execution of block_123: _inline_test_122 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_124", () => {
    let _test = test;

    _test("execution of block_124: _inline_test_123 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_125", () => {
    let _test = test;

    _test("execution of block_125: _inline_test_124 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_126", () => {
    let _test = test;

    _test("execution of block_126: _inline_test_125 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_127", () => {
    let _test = test;

    _test("execution of block_127: _inline_test_126 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_128", () => {
    let _test = test;

    _test("execution of block_128: _inline_test_127 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_129", () => {
    let _test = test;

    _test("execution of block_129: _inline_test_128 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_130", () => {
    let _test = test;

    _test("execution of block_130: _inline_test_129 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_131", () => {
    let _test = test;

    _test("execution of block_131: _inline_test_130 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_132", () => {
    let _test = test;

    _test("execution of block_132: _inline_test_131 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_133", () => {
    let _test = test;

    _test("execution of block_133: _inline_test_132 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_134", () => {
    let _test = test;

    _test("execution of block_134: _inline_test_133 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_135", () => {
    let _test = test;

    _test("execution of block_135: _inline_test_134 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_136", () => {
    let _test = test;

    _test("execution of block_136: _inline_test_135 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_137", () => {
    let _test = test;

    _test("execution of block_137: _inline_test_136 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_138", () => {
    let _test = test;

    _test("execution of block_138: _inline_test_137 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_139", () => {
    let _test = test;

    _test("execution of block_139: _inline_test_138 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_140", () => {
    let _test = test;

    _test("execution of block_140: _inline_test_139 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_141", () => {
    let _test = test;

    _test("execution of block_141: _inline_test_140 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_142", () => {
    let _test = test;

    _test("execution of block_142: _inline_test_141 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_143", () => {
    let _test = test;

    _test("execution of block_143: _inline_test_142 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_144", () => {
    let _test = test;

    _test("execution of block_144: _inline_test_143 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_145", () => {
    let _test = test;

    _test("execution of block_145: _inline_test_144 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_146", () => {
    let _test = test;

    _test("execution of block_146: _inline_test_145 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_147", () => {
    let _test = test;

    _test("execution of block_147: _inline_test_146 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_148", () => {
    let _test = test;

    _test("execution of block_148: _inline_test_147 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_149", () => {
    let _test = test;

    _test("execution of block_149: _inline_test_148 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_150", () => {
    let _test = test;

    _test("execution of block_150: _inline_test_149 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_151", () => {
    let _test = test;

    _test("execution of block_151: _inline_test_150 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_152", () => {
    let _test = test;

    _test("execution of block_152: _inline_test_151 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_153", () => {
    let _test = test;

    _test("execution of block_153: _inline_test_152 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_154", () => {
    let _test = test;

    _test("execution of block_154: _inline_test_153 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_155", () => {
    let _test = test;

    _test("execution of block_155: _inline_test_154 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_156", () => {
    let _test = test;

    _test("execution of block_156: _inline_test_155 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_157", () => {
    let _test = test;

    _test("execution of block_157: _inline_test_156 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_158", () => {
    let _test = test;

    _test("execution of block_158: _inline_test_157 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_159", () => {
    let _test = test;

    _test("execution of block_159: _inline_test_158 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_160", () => {
    let _test = test;

    _test("execution of block_160: _inline_test_159 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_161", () => {
    let _test = test;

    _test("execution of block_161: _inline_test_160 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_162", () => {
    let _test = test;

    _test("execution of block_162: _inline_test_161 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_163", () => {
    let _test = test;

    _test("execution of block_163: _inline_test_162 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_164", () => {
    let _test = test;

    _test("execution of block_164: _inline_test_163 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_165", () => {
    let _test = test;

    _test("execution of block_165: _inline_test_164 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_166", () => {
    let _test = test;

    _test("execution of block_166: _inline_test_165 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("block_167", () => {
    let _test = test;

    _test("execution of block_167: _inline_test_166 (instance 0)", () => {});
});

describe("block_168", () => {
    let _test = test;

    _test("execution of block_168: _inline_test_167 (instance 0)", () => {});
});

describe("block_169", () => {
    let _test = test;

    _test("execution of block_169: _inline_test_168 (instance 0)", () => {});
});

describe("block_170", () => {
    let _test = test;

    _test("execution of block_170: _inline_test_169 (instance 0)", () => {});
});
