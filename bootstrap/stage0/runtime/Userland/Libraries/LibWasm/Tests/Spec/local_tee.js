let globalImportObject = {};
let namedModules = {};

describe("local_tee_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/local_tee_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of local_tee_0: type-local-i32 (instance 0)", () => {
        let _type_local_i32 = module.getExport("type-local-i32");
        expect(_type_local_i32).not.toBeUndefined();
        let _type_local_i32_result = module.invoke(_type_local_i32);
        expect(_type_local_i32_result).toBe(0);
    });

    _test("execution of local_tee_0: type-local-i64 (instance 0)", () => {
        let _type_local_i64 = module.getExport("type-local-i64");
        expect(_type_local_i64).not.toBeUndefined();
        let _type_local_i64_result = module.invoke(_type_local_i64);
        expect(_type_local_i64_result).toBe(0n);
    });

    _test("execution of local_tee_0: type-local-f32 (instance 0)", () => {
        let _type_local_f32 = module.getExport("type-local-f32");
        expect(_type_local_f32).not.toBeUndefined();
        let _type_local_f32_result = module.invoke(_type_local_f32);
        expect(_type_local_f32_result).toBe(0.0);
    });

    _test("execution of local_tee_0: type-local-f64 (instance 0)", () => {
        let _type_local_f64 = module.getExport("type-local-f64");
        expect(_type_local_f64).not.toBeUndefined();
        let _type_local_f64_result = module.invoke(_type_local_f64);
        expect(_type_local_f64_result).toBe(0.0);
    });

    _test("execution of local_tee_0: type-param-i32 (instance 0)", () => {
        let _type_param_i32 = module.getExport("type-param-i32");
        expect(_type_param_i32).not.toBeUndefined();
        let _type_param_i32_result = module.invoke(_type_param_i32, 2);
        expect(_type_param_i32_result).toBe(10);
    });

    _test("execution of local_tee_0: type-param-i64 (instance 0)", () => {
        let _type_param_i64 = module.getExport("type-param-i64");
        expect(_type_param_i64).not.toBeUndefined();
        let _type_param_i64_result = module.invoke(_type_param_i64, 3n);
        expect(_type_param_i64_result).toBe(11n);
    });

    _test("execution of local_tee_0: type-param-f32 (instance 0)", () => {
        let _type_param_f32 = module.getExport("type-param-f32");
        expect(_type_param_f32).not.toBeUndefined();
        let _type_param_f32_result = module.invoke(_type_param_f32, 4.4);
        expect(_type_param_f32_result).toBe(11.1);
    });

    _test("execution of local_tee_0: type-param-f64 (instance 0)", () => {
        let _type_param_f64 = module.getExport("type-param-f64");
        expect(_type_param_f64).not.toBeUndefined();
        let _type_param_f64_result = module.invoke(_type_param_f64, 5.5);
        expect(_type_param_f64_result).toBe(12.2);
    });

    _test("execution of local_tee_0: as-block-first (instance 0)", () => {
        let _as_block_first = module.getExport("as-block-first");
        expect(_as_block_first).not.toBeUndefined();
        let _as_block_first_result = module.invoke(_as_block_first, 0);
        expect(_as_block_first_result).toBe(1);
    });

    _test("execution of local_tee_0: as-block-mid (instance 0)", () => {
        let _as_block_mid = module.getExport("as-block-mid");
        expect(_as_block_mid).not.toBeUndefined();
        let _as_block_mid_result = module.invoke(_as_block_mid, 0);
        expect(_as_block_mid_result).toBe(1);
    });

    _test("execution of local_tee_0: as-block-last (instance 0)", () => {
        let _as_block_last = module.getExport("as-block-last");
        expect(_as_block_last).not.toBeUndefined();
        let _as_block_last_result = module.invoke(_as_block_last, 0);
        expect(_as_block_last_result).toBe(1);
    });

    _test("execution of local_tee_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first, 0);
        expect(_as_loop_first_result).toBe(3);
    });

    _test("execution of local_tee_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid, 0);
        expect(_as_loop_mid_result).toBe(4);
    });

    _test("execution of local_tee_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last, 0);
        expect(_as_loop_last_result).toBe(5);
    });

    _test("execution of local_tee_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value, 0);
        expect(_as_br_value_result).toBe(9);
    });

    _test("execution of local_tee_0: as-br_if-cond (instance 0)", () => {
        let _as_br_if_cond = module.getExport("as-br_if-cond");
        expect(_as_br_if_cond).not.toBeUndefined();
        let _as_br_if_cond_result = module.invoke(_as_br_if_cond, 0);
    });

    _test("execution of local_tee_0: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value, 0);
        expect(_as_br_if_value_result).toBe(8);
    });

    _test("execution of local_tee_0: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond, 0);
        expect(_as_br_if_value_cond_result).toBe(6);
    });

    _test("execution of local_tee_0: as-br_table-index (instance 0)", () => {
        let _as_br_table_index = module.getExport("as-br_table-index");
        expect(_as_br_table_index).not.toBeUndefined();
        let _as_br_table_index_result = module.invoke(_as_br_table_index, 0);
    });

    _test("execution of local_tee_0: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value, 0);
        expect(_as_br_table_value_result).toBe(10);
    });

    _test("execution of local_tee_0: as-br_table-value-index (instance 0)", () => {
        let _as_br_table_value_index = module.getExport("as-br_table-value-index");
        expect(_as_br_table_value_index).not.toBeUndefined();
        let _as_br_table_value_index_result = module.invoke(_as_br_table_value_index, 0);
        expect(_as_br_table_value_index_result).toBe(6);
    });

    _test("execution of local_tee_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value, 0);
        expect(_as_return_value_result).toBe(7);
    });

    _test("execution of local_tee_0: as-if-cond (instance 0)", () => {
        let _as_if_cond = module.getExport("as-if-cond");
        expect(_as_if_cond).not.toBeUndefined();
        let _as_if_cond_result = module.invoke(_as_if_cond, 0);
        expect(_as_if_cond_result).toBe(0);
    });

    _test("execution of local_tee_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 1);
        expect(_as_if_then_result).toBe(3);
    });

    _test("execution of local_tee_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 0);
        expect(_as_if_else_result).toBe(4);
    });

    _test("execution of local_tee_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 0, 1);
        expect(_as_select_first_result).toBe(5);
    });

    _test("execution of local_tee_0: as-select-second (instance 0)", () => {
        let _as_select_second = module.getExport("as-select-second");
        expect(_as_select_second).not.toBeUndefined();
        let _as_select_second_result = module.invoke(_as_select_second, 0, 0);
        expect(_as_select_second_result).toBe(6);
    });

    _test("execution of local_tee_0: as-select-cond (instance 0)", () => {
        let _as_select_cond = module.getExport("as-select-cond");
        expect(_as_select_cond).not.toBeUndefined();
        let _as_select_cond_result = module.invoke(_as_select_cond, 0);
        expect(_as_select_cond_result).toBe(0);
    });

    _test("execution of local_tee_0: as-call-first (instance 0)", () => {
        let _as_call_first = module.getExport("as-call-first");
        expect(_as_call_first).not.toBeUndefined();
        let _as_call_first_result = module.invoke(_as_call_first, 0);
        expect(_as_call_first_result).toBe(-1);
    });

    _test("execution of local_tee_0: as-call-mid (instance 0)", () => {
        let _as_call_mid = module.getExport("as-call-mid");
        expect(_as_call_mid).not.toBeUndefined();
        let _as_call_mid_result = module.invoke(_as_call_mid, 0);
        expect(_as_call_mid_result).toBe(-1);
    });

    _test("execution of local_tee_0: as-call-last (instance 0)", () => {
        let _as_call_last = module.getExport("as-call-last");
        expect(_as_call_last).not.toBeUndefined();
        let _as_call_last_result = module.invoke(_as_call_last, 0);
        expect(_as_call_last_result).toBe(-1);
    });

    _test("execution of local_tee_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first, 0);
        expect(_as_call_indirect_first_result).toBe(-1);
    });

    _test("execution of local_tee_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid, 0);
        expect(_as_call_indirect_mid_result).toBe(-1);
    });

    _test("execution of local_tee_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        let _as_call_indirect_last_result = module.invoke(_as_call_indirect_last, 0);
        expect(_as_call_indirect_last_result).toBe(-1);
    });

    _test("execution of local_tee_0: as-call_indirect-index (instance 0)", () => {
        let _as_call_indirect_index = module.getExport("as-call_indirect-index");
        expect(_as_call_indirect_index).not.toBeUndefined();
        let _as_call_indirect_index_result = module.invoke(_as_call_indirect_index, 0);
        expect(_as_call_indirect_index_result).toBe(-1);
    });

    _test("execution of local_tee_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value);
    });

    _test("execution of local_tee_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 0);
        expect(_as_local_tee_value_result).toBe(1);
    });

    _test("execution of local_tee_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value);
    });

    _test("execution of local_tee_0: as-load-address (instance 0)", () => {
        let _as_load_address = module.getExport("as-load-address");
        expect(_as_load_address).not.toBeUndefined();
        let _as_load_address_result = module.invoke(_as_load_address, 0);
        expect(_as_load_address_result).toBe(0);
    });

    _test("execution of local_tee_0: as-loadN-address (instance 0)", () => {
        let _as_loadN_address = module.getExport("as-loadN-address");
        expect(_as_loadN_address).not.toBeUndefined();
        let _as_loadN_address_result = module.invoke(_as_loadN_address, 0);
        expect(_as_loadN_address_result).toBe(0);
    });

    _test("execution of local_tee_0: as-store-address (instance 0)", () => {
        let _as_store_address = module.getExport("as-store-address");
        expect(_as_store_address).not.toBeUndefined();
        let _as_store_address_result = module.invoke(_as_store_address, 0);
    });

    _test("execution of local_tee_0: as-store-value (instance 0)", () => {
        let _as_store_value = module.getExport("as-store-value");
        expect(_as_store_value).not.toBeUndefined();
        let _as_store_value_result = module.invoke(_as_store_value, 0);
    });

    _test("execution of local_tee_0: as-storeN-address (instance 0)", () => {
        let _as_storeN_address = module.getExport("as-storeN-address");
        expect(_as_storeN_address).not.toBeUndefined();
        let _as_storeN_address_result = module.invoke(_as_storeN_address, 0);
    });

    _test("execution of local_tee_0: as-storeN-value (instance 0)", () => {
        let _as_storeN_value = module.getExport("as-storeN-value");
        expect(_as_storeN_value).not.toBeUndefined();
        let _as_storeN_value_result = module.invoke(_as_storeN_value, 0);
    });

    _test("execution of local_tee_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand, 0.0);
        expect(_as_unary_operand_result).toBe(-NaN);
    });

    _test("execution of local_tee_0: as-binary-left (instance 0)", () => {
        let _as_binary_left = module.getExport("as-binary-left");
        expect(_as_binary_left).not.toBeUndefined();
        let _as_binary_left_result = module.invoke(_as_binary_left, 0);
        expect(_as_binary_left_result).toBe(13);
    });

    _test("execution of local_tee_0: as-binary-right (instance 0)", () => {
        let _as_binary_right = module.getExport("as-binary-right");
        expect(_as_binary_right).not.toBeUndefined();
        let _as_binary_right_result = module.invoke(_as_binary_right, 0);
        expect(_as_binary_right_result).toBe(6);
    });

    _test("execution of local_tee_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand, 0);
        expect(_as_test_operand_result).toBe(1);
    });

    _test("execution of local_tee_0: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left, 0);
        expect(_as_compare_left_result).toBe(0);
    });

    _test("execution of local_tee_0: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right, 0);
        expect(_as_compare_right_result).toBe(1);
    });

    _test("execution of local_tee_0: as-convert-operand (instance 0)", () => {
        let _as_convert_operand = module.getExport("as-convert-operand");
        expect(_as_convert_operand).not.toBeUndefined();
        let _as_convert_operand_result = module.invoke(_as_convert_operand, 0n);
        expect(_as_convert_operand_result).toBe(41);
    });

    _test("execution of local_tee_0: as-memory.grow-size (instance 0)", () => {
        let _as_memory_grow_size = module.getExport("as-memory.grow-size");
        expect(_as_memory_grow_size).not.toBeUndefined();
        let _as_memory_grow_size_result = module.invoke(_as_memory_grow_size, 0);
        expect(_as_memory_grow_size_result).toBe(1);
    });

    _test("execution of local_tee_0: type-mixed (instance 0)", () => {
        let _type_mixed = module.getExport("type-mixed");
        expect(_type_mixed).not.toBeUndefined();
        let _type_mixed_result = module.invoke(_type_mixed, 1n, 2.2, 3.3, 4, 5);
    });

    _test("execution of local_tee_0: write (instance 0)", () => {
        let _write = module.getExport("write");
        expect(_write).not.toBeUndefined();
        let _write_result = module.invoke(_write, 1n, 2.0, 3.3, 4, 5);
        expect(_write_result).toBe(56n);
    });

    _test("execution of local_tee_0: result (instance 0)", () => {
        let _result = module.getExport("result");
        expect(_result).not.toBeUndefined();
        let _result_result = module.invoke(_result, -1n, -2.0, -3.3, -4, -5);
        expect(_result_result).toBe(34.8);
    });
});

describe("local_tee_1", () => {
    let _test = test;

    _test("execution of local_tee_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_2", () => {
    let _test = test;

    _test("execution of local_tee_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_3", () => {
    let _test = test;

    _test("execution of local_tee_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_4", () => {
    let _test = test;

    _test("execution of local_tee_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_5", () => {
    let _test = test;

    _test("execution of local_tee_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_6", () => {
    let _test = test;

    _test("execution of local_tee_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_7", () => {
    let _test = test;

    _test("execution of local_tee_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_8", () => {
    let _test = test;

    _test("execution of local_tee_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_9", () => {
    let _test = test;

    _test("execution of local_tee_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_10", () => {
    let _test = test;

    _test("execution of local_tee_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_11", () => {
    let _test = test;

    _test("execution of local_tee_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_12", () => {
    let _test = test;

    _test("execution of local_tee_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_13", () => {
    let _test = test;

    _test("execution of local_tee_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_14", () => {
    let _test = test;

    _test("execution of local_tee_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_15", () => {
    let _test = test;

    _test("execution of local_tee_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_16", () => {
    let _test = test;

    _test("execution of local_tee_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_17", () => {
    let _test = test;

    _test("execution of local_tee_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_18", () => {
    let _test = test;

    _test("execution of local_tee_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_19", () => {
    let _test = test;

    _test("execution of local_tee_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_20", () => {
    let _test = test;

    _test("execution of local_tee_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_21", () => {
    let _test = test;

    _test("execution of local_tee_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_22", () => {
    let _test = test;

    _test("execution of local_tee_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_23", () => {
    let _test = test;

    _test("execution of local_tee_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_24", () => {
    let _test = test;

    _test("execution of local_tee_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_25", () => {
    let _test = test;

    _test("execution of local_tee_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_26", () => {
    let _test = test;

    _test("execution of local_tee_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_27", () => {
    let _test = test;

    _test("execution of local_tee_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_28", () => {
    let _test = test;

    _test("execution of local_tee_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_29", () => {
    let _test = test;

    _test("execution of local_tee_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_30", () => {
    let _test = test;

    _test("execution of local_tee_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_31", () => {
    let _test = test;

    _test("execution of local_tee_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_32", () => {
    let _test = test;

    _test("execution of local_tee_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_33", () => {
    let _test = test;

    _test("execution of local_tee_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_34", () => {
    let _test = test;

    _test("execution of local_tee_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_35", () => {
    let _test = test;

    _test("execution of local_tee_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_36", () => {
    let _test = test;

    _test("execution of local_tee_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_37", () => {
    let _test = test;

    _test("execution of local_tee_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_38", () => {
    let _test = test;

    _test("execution of local_tee_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_39", () => {
    let _test = test;

    _test("execution of local_tee_39: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_40", () => {
    let _test = test;

    _test("execution of local_tee_40: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("local_tee_41", () => {
    let _test = test;

    _test("execution of local_tee_41: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
