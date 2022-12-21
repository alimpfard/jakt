let globalImportObject = {};
let namedModules = {};

describe("global_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/global_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of global_0: get-a (instance 0)", () => {
        let _get_a = module.getExport("get-a");
        expect(_get_a).not.toBeUndefined();
        let _get_a_result = module.invoke(_get_a);
        expect(_get_a_result).toBe(-2);
    });

    _test("execution of global_0: get-b (instance 0)", () => {
        let _get_b = module.getExport("get-b");
        expect(_get_b).not.toBeUndefined();
        let _get_b_result = module.invoke(_get_b);
        expect(_get_b_result).toBe(-5n);
    });

    _test("execution of global_0: get-r (instance 0)", () => {
        let _get_r = module.getExport("get-r");
        expect(_get_r).not.toBeUndefined();
        let _get_r_result = module.invoke(_get_r);
        expect(_get_r_result).toBe(0);
    });

    _test("execution of global_0: get-mr (instance 0)", () => {
        let _get_mr = module.getExport("get-mr");
        expect(_get_mr).not.toBeUndefined();
        let _get_mr_result = module.invoke(_get_mr);
        expect(_get_mr_result).toBe(0);
    });

    _test("execution of global_0: get-x (instance 0)", () => {
        let _get_x = module.getExport("get-x");
        expect(_get_x).not.toBeUndefined();
        let _get_x_result = module.invoke(_get_x);
        expect(_get_x_result).toBe(-12);
    });

    _test("execution of global_0: get-y (instance 0)", () => {
        let _get_y = module.getExport("get-y");
        expect(_get_y).not.toBeUndefined();
        let _get_y_result = module.invoke(_get_y);
        expect(_get_y_result).toBe(-15n);
    });

    _test("execution of global_0: get-z1 (instance 0)", () => {
        let _get_z1 = module.getExport("get-z1");
        expect(_get_z1).not.toBeUndefined();
        let _get_z1_result = module.invoke(_get_z1);
        expect(_get_z1_result).toBe(666);
    });

    _test("execution of global_0: get-z2 (instance 0)", () => {
        let _get_z2 = module.getExport("get-z2");
        expect(_get_z2).not.toBeUndefined();
        let _get_z2_result = module.invoke(_get_z2);
        expect(_get_z2_result).toBe(666n);
    });

    _test("execution of global_0: get-3 (instance 0)", () => {
        let _get_3 = module.getExport("get-3");
        expect(_get_3).not.toBeUndefined();
        let _get_3_result = module.invoke(_get_3);
        expect(_get_3_result).toBe(-3.0);
    });

    _test("execution of global_0: get-4 (instance 0)", () => {
        let _get_4 = module.getExport("get-4");
        expect(_get_4).not.toBeUndefined();
        let _get_4_result = module.invoke(_get_4);
        expect(_get_4_result).toBe(-4.0);
    });

    _test("execution of global_0: get-7 (instance 0)", () => {
        let _get_7 = module.getExport("get-7");
        expect(_get_7).not.toBeUndefined();
        let _get_7_result = module.invoke(_get_7);
        expect(_get_7_result).toBe(-13.0);
    });

    _test("execution of global_0: get-8 (instance 0)", () => {
        let _get_8 = module.getExport("get-8");
        expect(_get_8).not.toBeUndefined();
        let _get_8_result = module.invoke(_get_8);
        expect(_get_8_result).toBe(-14.0);
    });

    _test("execution of global_0: set-x (instance 0)", () => {
        let _set_x = module.getExport("set-x");
        expect(_set_x).not.toBeUndefined();
        let _set_x_result = module.invoke(_set_x, 6);
    });

    _test("execution of global_0: set-y (instance 0)", () => {
        let _set_y = module.getExport("set-y");
        expect(_set_y).not.toBeUndefined();
        let _set_y_result = module.invoke(_set_y, 7n);
    });

    _test("execution of global_0: set-7 (instance 0)", () => {
        let _set_7 = module.getExport("set-7");
        expect(_set_7).not.toBeUndefined();
        let _set_7_result = module.invoke(_set_7, 8.0);
    });

    _test("execution of global_0: set-8 (instance 0)", () => {
        let _set_8 = module.getExport("set-8");
        expect(_set_8).not.toBeUndefined();
        let _set_8_result = module.invoke(_set_8, 9.0);
    });

    _test("execution of global_0: get-x (instance 1)", () => {
        let _get_x = module.getExport("get-x");
        expect(_get_x).not.toBeUndefined();
        let _get_x_result = module.invoke(_get_x);
        expect(_get_x_result).toBe(6);
    });

    _test("execution of global_0: get-y (instance 1)", () => {
        let _get_y = module.getExport("get-y");
        expect(_get_y).not.toBeUndefined();
        let _get_y_result = module.invoke(_get_y);
        expect(_get_y_result).toBe(7n);
    });

    _test("execution of global_0: get-7 (instance 1)", () => {
        let _get_7 = module.getExport("get-7");
        expect(_get_7).not.toBeUndefined();
        let _get_7_result = module.invoke(_get_7);
        expect(_get_7_result).toBe(8.0);
    });

    _test("execution of global_0: get-8 (instance 1)", () => {
        let _get_8 = module.getExport("get-8");
        expect(_get_8).not.toBeUndefined();
        let _get_8_result = module.invoke(_get_8);
        expect(_get_8_result).toBe(9.0);
    });

    _test("execution of global_0: set-7 (instance 1)", () => {
        let _set_7 = module.getExport("set-7");
        expect(_set_7).not.toBeUndefined();
        let _set_7_result = module.invoke(_set_7, 8.0);
    });

    _test("execution of global_0: set-8 (instance 1)", () => {
        let _set_8 = module.getExport("set-8");
        expect(_set_8).not.toBeUndefined();
        let _set_8_result = module.invoke(_set_8, 9.0);
    });

    _test("execution of global_0: set-mr (instance 0)", () => {
        let _set_mr = module.getExport("set-mr");
        expect(_set_mr).not.toBeUndefined();
        let _set_mr_result = module.invoke(_set_mr, 0);
    });

    _test("execution of global_0: get-x (instance 2)", () => {
        let _get_x = module.getExport("get-x");
        expect(_get_x).not.toBeUndefined();
        let _get_x_result = module.invoke(_get_x);
        expect(_get_x_result).toBe(6);
    });

    _test("execution of global_0: get-y (instance 2)", () => {
        let _get_y = module.getExport("get-y");
        expect(_get_y).not.toBeUndefined();
        let _get_y_result = module.invoke(_get_y);
        expect(_get_y_result).toBe(7n);
    });

    _test("execution of global_0: get-7 (instance 2)", () => {
        let _get_7 = module.getExport("get-7");
        expect(_get_7).not.toBeUndefined();
        let _get_7_result = module.invoke(_get_7);
        expect(_get_7_result).toBe(8.0);
    });

    _test("execution of global_0: get-8 (instance 2)", () => {
        let _get_8 = module.getExport("get-8");
        expect(_get_8).not.toBeUndefined();
        let _get_8_result = module.invoke(_get_8);
        expect(_get_8_result).toBe(9.0);
    });

    _test("execution of global_0: get-mr (instance 1)", () => {
        let _get_mr = module.getExport("get-mr");
        expect(_get_mr).not.toBeUndefined();
        let _get_mr_result = module.invoke(_get_mr);
        expect(_get_mr_result).toBe(0);
    });

    _test("execution of global_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first);
        expect(_as_select_first_result).toBe(6);
    });

    _test("execution of global_0: as-select-mid (instance 0)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of global_0: as-select-last (instance 0)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last);
        expect(_as_select_last_result).toBe(2);
    });

    _test("execution of global_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first);
        expect(_as_loop_first_result).toBe(6);
    });

    _test("execution of global_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid);
        expect(_as_loop_mid_result).toBe(6);
    });

    _test("execution of global_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last);
        expect(_as_loop_last_result).toBe(6);
    });

    _test("execution of global_0: as-if-condition (instance 0)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition);
        expect(_as_if_condition_result).toBe(2);
    });

    _test("execution of global_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then);
        expect(_as_if_then_result).toBe(6);
    });

    _test("execution of global_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else);
        expect(_as_if_else_result).toBe(6);
    });

    _test("execution of global_0: as-br_if-first (instance 0)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first);
        expect(_as_br_if_first_result).toBe(6);
    });

    _test("execution of global_0: as-br_if-last (instance 0)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last);
        expect(_as_br_if_last_result).toBe(2);
    });

    _test("execution of global_0: as-br_table-first (instance 0)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first);
        expect(_as_br_table_first_result).toBe(6);
    });

    _test("execution of global_0: as-br_table-last (instance 0)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of global_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first);
        expect(_as_call_indirect_first_result).toBe(6);
    });

    _test("execution of global_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid);
        expect(_as_call_indirect_mid_result).toBe(2);
    });

    _test("execution of global_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        expect(() => module.invoke(_as_call_indirect_last).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of global_0: as-store-first (instance 0)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first);
    });

    _test("execution of global_0: as-store-last (instance 0)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last);
    });

    _test("execution of global_0: as-load-operand (instance 0)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand);
        expect(_as_load_operand_result).toBe(1);
    });

    _test("execution of global_0: as-memory.grow-value (instance 0)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value);
        expect(_as_memory_grow_value_result).toBe(1);
    });

    _test("execution of global_0: as-call-value (instance 0)", () => {
        let _as_call_value = module.getExport("as-call-value");
        expect(_as_call_value).not.toBeUndefined();
        let _as_call_value_result = module.invoke(_as_call_value);
        expect(_as_call_value_result).toBe(6);
    });

    _test("execution of global_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
        expect(_as_return_value_result).toBe(6);
    });

    _test("execution of global_0: as-drop-operand (instance 0)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand);
    });

    _test("execution of global_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(6);
    });

    _test("execution of global_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 1);
        expect(_as_local_set_value_result).toBe(6);
    });

    _test("execution of global_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 1);
        expect(_as_local_tee_value_result).toBe(6);
    });

    _test("execution of global_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value);
        expect(_as_global_set_value_result).toBe(6);
    });

    _test("execution of global_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand);
        expect(_as_unary_operand_result).toBe(0);
    });

    _test("execution of global_0: as-binary-operand (instance 0)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand);
        expect(_as_binary_operand_result).toBe(36);
    });

    _test("execution of global_0: as-compare-operand (instance 0)", () => {
        let _as_compare_operand = module.getExport("as-compare-operand");
        expect(_as_compare_operand).not.toBeUndefined();
        let _as_compare_operand_result = module.invoke(_as_compare_operand);
        expect(_as_compare_operand_result).toBe(1);
    });
});

describe("global_1", () => {
    let _test = test;

    _test("execution of global_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_2", () => {
    let _test = test;

    _test("execution of global_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/global_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("global_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/global_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("global_5", () => {
    let _test = test;

    _test("execution of global_5: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_6", () => {
    let _test = test;

    _test("execution of global_6: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_7", () => {
    let _test = test;

    _test("execution of global_7: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_8", () => {
    let _test = test;

    _test("execution of global_8: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_9", () => {
    let _test = test;

    _test("execution of global_9: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_10", () => {
    let _test = test;

    _test("execution of global_10: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_11", () => {
    let _test = test;

    _test("execution of global_11: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_12", () => {
    let _test = test;

    _test("execution of global_12: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_13", () => {
    let _test = test;

    _test("execution of global_13: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_14", () => {
    let _test = test;

    _test("execution of global_14: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_15", () => {
    let _test = test;

    _test("execution of global_15: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_16", () => {
    let _test = test;

    _test("execution of global_16: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_17", () => {
    let _test = test;

    _test("execution of global_17: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_18", () => {
    let _test = test;

    _test("execution of global_18: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_19", () => {
    let _test = test;

    _test("execution of global_19: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_20", () => {
    let _test = test;

    _test("execution of global_20: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_21", () => {
    let _test = test;

    _test("execution of global_21: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_22", () => {
    let _test = test;

    _test("execution of global_22: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_23", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/global_23.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("global_24", () => {
    let _test = test;

    _test("execution of global_24: _inline_test_20 (instance 0)", () => {});
});

describe("global_25", () => {
    let _test = test;

    _test("execution of global_25: _inline_test_21 (instance 0)", () => {});
});

describe("global_26", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/global_26.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("global_27", () => {
    let _test = test;

    _test("execution of global_27: _inline_test_22 (instance 0)", () => {});
});

describe("global_28", () => {
    let _test = test;

    _test("execution of global_28: _inline_test_23 (instance 0)", () => {});
});

describe("global_29", () => {
    let _test = test;

    _test("execution of global_29: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_30", () => {
    let _test = test;

    _test("execution of global_30: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_31", () => {
    let _test = test;

    _test("execution of global_31: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_32", () => {
    let _test = test;

    _test("execution of global_32: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_33", () => {
    let _test = test;

    _test("execution of global_33: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_34", () => {
    let _test = test;

    _test("execution of global_34: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_35", () => {
    let _test = test;

    _test("execution of global_35: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_36", () => {
    let _test = test;

    _test("execution of global_36: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_37", () => {
    let _test = test;

    _test("execution of global_37: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_38", () => {
    let _test = test;

    _test("execution of global_38: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_39", () => {
    let _test = test;

    _test("execution of global_39: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_40", () => {
    let _test = test;

    _test("execution of global_40: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_41", () => {
    let _test = test;

    _test("execution of global_41: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_42", () => {
    let _test = test;

    _test("execution of global_42: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_43", () => {
    let _test = test;

    _test("execution of global_43: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_44", () => {
    let _test = test;

    _test("execution of global_44: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_45", () => {
    let _test = test;

    _test("execution of global_45: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_46", () => {
    let _test = test;

    _test("execution of global_46: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_47", () => {
    let _test = test;

    _test("execution of global_47: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_48", () => {
    let _test = test;

    _test("execution of global_48: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("global_49", () => {
    let _test = test;

    _test("execution of global_49: _inline_test_44 (instance 0)", () => {});
});

describe("global_50", () => {
    let _test = test;

    _test("execution of global_50: _inline_test_45 (instance 0)", () => {});
});

describe("global_51", () => {
    let _test = test;

    _test("execution of global_51: _inline_test_46 (instance 0)", () => {});
});
