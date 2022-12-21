let globalImportObject = {};
let namedModules = {};

describe("load_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/load_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of load_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(0);
    });

    _test("execution of load_0: as-br_if-cond (instance 0)", () => {
        let _as_br_if_cond = module.getExport("as-br_if-cond");
        expect(_as_br_if_cond).not.toBeUndefined();
        let _as_br_if_cond_result = module.invoke(_as_br_if_cond);
    });

    _test("execution of load_0: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value);
        expect(_as_br_if_value_result).toBe(0);
    });

    _test("execution of load_0: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond);
        expect(_as_br_if_value_cond_result).toBe(7);
    });

    _test("execution of load_0: as-br_table-index (instance 0)", () => {
        let _as_br_table_index = module.getExport("as-br_table-index");
        expect(_as_br_table_index).not.toBeUndefined();
        let _as_br_table_index_result = module.invoke(_as_br_table_index);
    });

    _test("execution of load_0: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value);
        expect(_as_br_table_value_result).toBe(0);
    });

    _test("execution of load_0: as-br_table-value-index (instance 0)", () => {
        let _as_br_table_value_index = module.getExport("as-br_table-value-index");
        expect(_as_br_table_value_index).not.toBeUndefined();
        let _as_br_table_value_index_result = module.invoke(_as_br_table_value_index);
        expect(_as_br_table_value_index_result).toBe(6);
    });

    _test("execution of load_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
        expect(_as_return_value_result).toBe(0);
    });

    _test("execution of load_0: as-if-cond (instance 0)", () => {
        let _as_if_cond = module.getExport("as-if-cond");
        expect(_as_if_cond).not.toBeUndefined();
        let _as_if_cond_result = module.invoke(_as_if_cond);
        expect(_as_if_cond_result).toBe(1);
    });

    _test("execution of load_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then);
        expect(_as_if_then_result).toBe(0);
    });

    _test("execution of load_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else);
        expect(_as_if_else_result).toBe(0);
    });

    _test("execution of load_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 0, 1);
        expect(_as_select_first_result).toBe(0);
    });

    _test("execution of load_0: as-select-second (instance 0)", () => {
        let _as_select_second = module.getExport("as-select-second");
        expect(_as_select_second).not.toBeUndefined();
        let _as_select_second_result = module.invoke(_as_select_second, 0, 0);
        expect(_as_select_second_result).toBe(0);
    });

    _test("execution of load_0: as-select-cond (instance 0)", () => {
        let _as_select_cond = module.getExport("as-select-cond");
        expect(_as_select_cond).not.toBeUndefined();
        let _as_select_cond_result = module.invoke(_as_select_cond);
        expect(_as_select_cond_result).toBe(1);
    });

    _test("execution of load_0: as-call-first (instance 0)", () => {
        let _as_call_first = module.getExport("as-call-first");
        expect(_as_call_first).not.toBeUndefined();
        let _as_call_first_result = module.invoke(_as_call_first);
        expect(_as_call_first_result).toBe(-1);
    });

    _test("execution of load_0: as-call-mid (instance 0)", () => {
        let _as_call_mid = module.getExport("as-call-mid");
        expect(_as_call_mid).not.toBeUndefined();
        let _as_call_mid_result = module.invoke(_as_call_mid);
        expect(_as_call_mid_result).toBe(-1);
    });

    _test("execution of load_0: as-call-last (instance 0)", () => {
        let _as_call_last = module.getExport("as-call-last");
        expect(_as_call_last).not.toBeUndefined();
        let _as_call_last_result = module.invoke(_as_call_last);
        expect(_as_call_last_result).toBe(-1);
    });

    _test("execution of load_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first);
        expect(_as_call_indirect_first_result).toBe(-1);
    });

    _test("execution of load_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid);
        expect(_as_call_indirect_mid_result).toBe(-1);
    });

    _test("execution of load_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        let _as_call_indirect_last_result = module.invoke(_as_call_indirect_last);
        expect(_as_call_indirect_last_result).toBe(-1);
    });

    _test("execution of load_0: as-call_indirect-index (instance 0)", () => {
        let _as_call_indirect_index = module.getExport("as-call_indirect-index");
        expect(_as_call_indirect_index).not.toBeUndefined();
        let _as_call_indirect_index_result = module.invoke(_as_call_indirect_index);
        expect(_as_call_indirect_index_result).toBe(-1);
    });

    _test("execution of load_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value);
    });

    _test("execution of load_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value);
        expect(_as_local_tee_value_result).toBe(0);
    });

    _test("execution of load_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value);
    });

    _test("execution of load_0: as-load-address (instance 0)", () => {
        let _as_load_address = module.getExport("as-load-address");
        expect(_as_load_address).not.toBeUndefined();
        let _as_load_address_result = module.invoke(_as_load_address);
        expect(_as_load_address_result).toBe(0);
    });

    _test("execution of load_0: as-loadN-address (instance 0)", () => {
        let _as_loadN_address = module.getExport("as-loadN-address");
        expect(_as_loadN_address).not.toBeUndefined();
        let _as_loadN_address_result = module.invoke(_as_loadN_address);
        expect(_as_loadN_address_result).toBe(0);
    });

    _test("execution of load_0: as-store-address (instance 0)", () => {
        let _as_store_address = module.getExport("as-store-address");
        expect(_as_store_address).not.toBeUndefined();
        let _as_store_address_result = module.invoke(_as_store_address);
    });

    _test("execution of load_0: as-store-value (instance 0)", () => {
        let _as_store_value = module.getExport("as-store-value");
        expect(_as_store_value).not.toBeUndefined();
        let _as_store_value_result = module.invoke(_as_store_value);
    });

    _test("execution of load_0: as-storeN-address (instance 0)", () => {
        let _as_storeN_address = module.getExport("as-storeN-address");
        expect(_as_storeN_address).not.toBeUndefined();
        let _as_storeN_address_result = module.invoke(_as_storeN_address);
    });

    _test("execution of load_0: as-storeN-value (instance 0)", () => {
        let _as_storeN_value = module.getExport("as-storeN-value");
        expect(_as_storeN_value).not.toBeUndefined();
        let _as_storeN_value_result = module.invoke(_as_storeN_value);
    });

    _test("execution of load_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand);
        expect(_as_unary_operand_result).toBe(32);
    });

    _test("execution of load_0: as-binary-left (instance 0)", () => {
        let _as_binary_left = module.getExport("as-binary-left");
        expect(_as_binary_left).not.toBeUndefined();
        let _as_binary_left_result = module.invoke(_as_binary_left);
        expect(_as_binary_left_result).toBe(10);
    });

    _test("execution of load_0: as-binary-right (instance 0)", () => {
        let _as_binary_right = module.getExport("as-binary-right");
        expect(_as_binary_right).not.toBeUndefined();
        let _as_binary_right_result = module.invoke(_as_binary_right);
        expect(_as_binary_right_result).toBe(10);
    });

    _test("execution of load_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand);
        expect(_as_test_operand_result).toBe(1);
    });

    _test("execution of load_0: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left);
        expect(_as_compare_left_result).toBe(1);
    });

    _test("execution of load_0: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right);
        expect(_as_compare_right_result).toBe(1);
    });

    _test("execution of load_0: as-memory.grow-size (instance 0)", () => {
        let _as_memory_grow_size = module.getExport("as-memory.grow-size");
        expect(_as_memory_grow_size).not.toBeUndefined();
        let _as_memory_grow_size_result = module.invoke(_as_memory_grow_size);
        expect(_as_memory_grow_size_result).toBe(1);
    });
});

describe("load_1", () => {
    let _test = test;

    _test("execution of load_1: _inline_test_0 (instance 0)", () => {});
});

describe("load_2", () => {
    let _test = test;

    _test("execution of load_2: _inline_test_1 (instance 0)", () => {});
});

describe("load_3", () => {
    let _test = test;

    _test("execution of load_3: _inline_test_2 (instance 0)", () => {});
});

describe("load_4", () => {
    let _test = test;

    _test("execution of load_4: _inline_test_3 (instance 0)", () => {});
});

describe("load_5", () => {
    let _test = test;

    _test("execution of load_5: _inline_test_4 (instance 0)", () => {});
});

describe("load_6", () => {
    let _test = test;

    _test("execution of load_6: _inline_test_5 (instance 0)", () => {});
});

describe("load_7", () => {
    let _test = test;

    _test("execution of load_7: _inline_test_6 (instance 0)", () => {});
});

describe("load_8", () => {
    let _test = test;

    _test("execution of load_8: _inline_test_7 (instance 0)", () => {});
});

describe("load_9", () => {
    let _test = test;

    _test("execution of load_9: _inline_test_8 (instance 0)", () => {});
});

describe("load_10", () => {
    let _test = test;

    _test("execution of load_10: _inline_test_9 (instance 0)", () => {});
});

describe("load_11", () => {
    let _test = test;

    _test("execution of load_11: _inline_test_10 (instance 0)", () => {});
});

describe("load_12", () => {
    let _test = test;

    _test("execution of load_12: _inline_test_11 (instance 0)", () => {});
});

describe("load_13", () => {
    let _test = test;

    _test("execution of load_13: _inline_test_12 (instance 0)", () => {});
});

describe("load_14", () => {
    let _test = test;

    _test("execution of load_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_15", () => {
    let _test = test;

    _test("execution of load_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_16", () => {
    let _test = test;

    _test("execution of load_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_17", () => {
    let _test = test;

    _test("execution of load_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_18", () => {
    let _test = test;

    _test("execution of load_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_19", () => {
    let _test = test;

    _test("execution of load_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_20", () => {
    let _test = test;

    _test("execution of load_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_21", () => {
    let _test = test;

    _test("execution of load_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_22", () => {
    let _test = test;

    _test("execution of load_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_23", () => {
    let _test = test;

    _test("execution of load_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_24", () => {
    let _test = test;

    _test("execution of load_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_25", () => {
    let _test = test;

    _test("execution of load_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_26", () => {
    let _test = test;

    _test("execution of load_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_27", () => {
    let _test = test;

    _test("execution of load_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_28", () => {
    let _test = test;

    _test("execution of load_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_29", () => {
    let _test = test;

    _test("execution of load_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_30", () => {
    let _test = test;

    _test("execution of load_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_31", () => {
    let _test = test;

    _test("execution of load_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_32", () => {
    let _test = test;

    _test("execution of load_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_33", () => {
    let _test = test;

    _test("execution of load_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_34", () => {
    let _test = test;

    _test("execution of load_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_35", () => {
    let _test = test;

    _test("execution of load_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_36", () => {
    let _test = test;

    _test("execution of load_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_37", () => {
    let _test = test;

    _test("execution of load_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_38", () => {
    let _test = test;

    _test("execution of load_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_39", () => {
    let _test = test;

    _test("execution of load_39: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_40", () => {
    let _test = test;

    _test("execution of load_40: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_41", () => {
    let _test = test;

    _test("execution of load_41: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_42", () => {
    let _test = test;

    _test("execution of load_42: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_43", () => {
    let _test = test;

    _test("execution of load_43: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_44", () => {
    let _test = test;

    _test("execution of load_44: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_45", () => {
    let _test = test;

    _test("execution of load_45: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_46", () => {
    let _test = test;

    _test("execution of load_46: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_47", () => {
    let _test = test;

    _test("execution of load_47: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_48", () => {
    let _test = test;

    _test("execution of load_48: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_49", () => {
    let _test = test;

    _test("execution of load_49: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_50", () => {
    let _test = test;

    _test("execution of load_50: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_51", () => {
    let _test = test;

    _test("execution of load_51: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_52", () => {
    let _test = test;

    _test("execution of load_52: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_53", () => {
    let _test = test;

    _test("execution of load_53: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_54", () => {
    let _test = test;

    _test("execution of load_54: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_55", () => {
    let _test = test;

    _test("execution of load_55: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_56", () => {
    let _test = test;

    _test("execution of load_56: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_57", () => {
    let _test = test;

    _test("execution of load_57: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_58", () => {
    let _test = test;

    _test("execution of load_58: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("load_59", () => {
    let _test = test;

    _test("execution of load_59: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
