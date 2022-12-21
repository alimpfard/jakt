let globalImportObject = {};
let namedModules = {};

describe("unreachable_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/unreachable_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of unreachable_0: type-i32 (instance 0)", () => {
        let _type_i32 = module.getExport("type-i32");
        expect(_type_i32).not.toBeUndefined();
        expect(() => module.invoke(_type_i32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: type-i64 (instance 0)", () => {
        let _type_i64 = module.getExport("type-i64");
        expect(_type_i64).not.toBeUndefined();
        expect(() => module.invoke(_type_i64).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: type-f32 (instance 0)", () => {
        let _type_f32 = module.getExport("type-f32");
        expect(_type_f32).not.toBeUndefined();
        expect(() => module.invoke(_type_f32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: type-f64 (instance 0)", () => {
        let _type_f64 = module.getExport("type-f64");
        expect(_type_f64).not.toBeUndefined();
        expect(() => module.invoke(_type_f64).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-func-first (instance 0)", () => {
        let _as_func_first = module.getExport("as-func-first");
        expect(_as_func_first).not.toBeUndefined();
        expect(() => module.invoke(_as_func_first).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-func-mid (instance 0)", () => {
        let _as_func_mid = module.getExport("as-func-mid");
        expect(_as_func_mid).not.toBeUndefined();
        expect(() => module.invoke(_as_func_mid).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-func-last (instance 0)", () => {
        let _as_func_last = module.getExport("as-func-last");
        expect(_as_func_last).not.toBeUndefined();
        expect(() => module.invoke(_as_func_last).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-func-value (instance 0)", () => {
        let _as_func_value = module.getExport("as-func-value");
        expect(_as_func_value).not.toBeUndefined();
        expect(() => module.invoke(_as_func_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-block-first (instance 0)", () => {
        let _as_block_first = module.getExport("as-block-first");
        expect(_as_block_first).not.toBeUndefined();
        expect(() => module.invoke(_as_block_first).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-block-mid (instance 0)", () => {
        let _as_block_mid = module.getExport("as-block-mid");
        expect(_as_block_mid).not.toBeUndefined();
        expect(() => module.invoke(_as_block_mid).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-block-last (instance 0)", () => {
        let _as_block_last = module.getExport("as-block-last");
        expect(_as_block_last).not.toBeUndefined();
        expect(() => module.invoke(_as_block_last).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-block-value (instance 0)", () => {
        let _as_block_value = module.getExport("as-block-value");
        expect(_as_block_value).not.toBeUndefined();
        expect(() => module.invoke(_as_block_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-block-broke (instance 0)", () => {
        let _as_block_broke = module.getExport("as-block-broke");
        expect(_as_block_broke).not.toBeUndefined();
        let _as_block_broke_result = module.invoke(_as_block_broke);
        expect(_as_block_broke_result).toBe(1);
    });

    _test("execution of unreachable_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        expect(() => module.invoke(_as_loop_first).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        expect(() => module.invoke(_as_loop_mid).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        expect(() => module.invoke(_as_loop_last).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-loop-broke (instance 0)", () => {
        let _as_loop_broke = module.getExport("as-loop-broke");
        expect(_as_loop_broke).not.toBeUndefined();
        let _as_loop_broke_result = module.invoke(_as_loop_broke);
        expect(_as_loop_broke_result).toBe(1);
    });

    _test("execution of unreachable_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        expect(() => module.invoke(_as_br_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-br_if-cond (instance 0)", () => {
        let _as_br_if_cond = module.getExport("as-br_if-cond");
        expect(_as_br_if_cond).not.toBeUndefined();
        expect(() => module.invoke(_as_br_if_cond).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        expect(() => module.invoke(_as_br_if_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        expect(() => module.invoke(_as_br_if_value_cond).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-br_table-index (instance 0)", () => {
        let _as_br_table_index = module.getExport("as-br_table-index");
        expect(_as_br_table_index).not.toBeUndefined();
        expect(() => module.invoke(_as_br_table_index).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        expect(() => module.invoke(_as_br_table_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-br_table-value-2 (instance 0)", () => {
        let _as_br_table_value_2 = module.getExport("as-br_table-value-2");
        expect(_as_br_table_value_2).not.toBeUndefined();
        expect(() => module.invoke(_as_br_table_value_2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-br_table-value-index (instance 0)", () => {
        let _as_br_table_value_index = module.getExport("as-br_table-value-index");
        expect(_as_br_table_value_index).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_br_table_value_index).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unreachable_0: as-br_table-value-and-index (instance 0)", () => {
        let _as_br_table_value_and_index = module.getExport("as-br_table-value-and-index");
        expect(_as_br_table_value_and_index).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_br_table_value_and_index).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unreachable_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        expect(() => module.invoke(_as_return_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-if-cond (instance 0)", () => {
        let _as_if_cond = module.getExport("as-if-cond");
        expect(_as_if_cond).not.toBeUndefined();
        expect(() => module.invoke(_as_if_cond).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        expect(() => module.invoke(_as_if_then, 1, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-if-then (instance 1)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 0, 6);
        expect(_as_if_then_result).toBe(6);
    });

    _test("execution of unreachable_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        expect(() => module.invoke(_as_if_else, 0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-if-else (instance 1)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 1, 6);
        expect(_as_if_else_result).toBe(6);
    });

    _test("execution of unreachable_0: as-if-then-no-else (instance 0)", () => {
        let _as_if_then_no_else = module.getExport("as-if-then-no-else");
        expect(_as_if_then_no_else).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_if_then_no_else, 1, 6).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unreachable_0: as-if-then-no-else (instance 1)", () => {
        let _as_if_then_no_else = module.getExport("as-if-then-no-else");
        expect(_as_if_then_no_else).not.toBeUndefined();
        let _as_if_then_no_else_result = module.invoke(_as_if_then_no_else, 0, 6);
        expect(_as_if_then_no_else_result).toBe(6);
    });

    _test("execution of unreachable_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        expect(() => module.invoke(_as_select_first, 0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-select-first (instance 1)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        expect(() => module.invoke(_as_select_first, 1, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-select-second (instance 0)", () => {
        let _as_select_second = module.getExport("as-select-second");
        expect(_as_select_second).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_select_second, 0, 6).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unreachable_0: as-select-second (instance 1)", () => {
        let _as_select_second = module.getExport("as-select-second");
        expect(_as_select_second).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_select_second, 1, 6).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unreachable_0: as-select-cond (instance 0)", () => {
        let _as_select_cond = module.getExport("as-select-cond");
        expect(_as_select_cond).not.toBeUndefined();
        expect(() => module.invoke(_as_select_cond).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-call-first (instance 0)", () => {
        let _as_call_first = module.getExport("as-call-first");
        expect(_as_call_first).not.toBeUndefined();
        expect(() => module.invoke(_as_call_first).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-call-mid (instance 0)", () => {
        let _as_call_mid = module.getExport("as-call-mid");
        expect(_as_call_mid).not.toBeUndefined();
        expect(() => module.invoke(_as_call_mid).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-call-last (instance 0)", () => {
        let _as_call_last = module.getExport("as-call-last");
        expect(_as_call_last).not.toBeUndefined();
        expect(() => module.invoke(_as_call_last).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-call_indirect-func (instance 0)", () => {
        let _as_call_indirect_func = module.getExport("as-call_indirect-func");
        expect(_as_call_indirect_func).not.toBeUndefined();
        expect(() => module.invoke(_as_call_indirect_func).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_call_indirect_first).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unreachable_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        expect(() => module.invoke(_as_call_indirect_mid).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        expect(() => module.invoke(_as_call_indirect_last).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        expect(() => module.invoke(_as_local_set_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        expect(() => module.invoke(_as_local_tee_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        expect(() => module.invoke(_as_global_set_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-load-address (instance 0)", () => {
        let _as_load_address = module.getExport("as-load-address");
        expect(_as_load_address).not.toBeUndefined();
        expect(() => module.invoke(_as_load_address).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-loadN-address (instance 0)", () => {
        let _as_loadN_address = module.getExport("as-loadN-address");
        expect(_as_loadN_address).not.toBeUndefined();
        expect(() => module.invoke(_as_loadN_address).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-store-address (instance 0)", () => {
        let _as_store_address = module.getExport("as-store-address");
        expect(_as_store_address).not.toBeUndefined();
        expect(() => module.invoke(_as_store_address).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-store-value (instance 0)", () => {
        let _as_store_value = module.getExport("as-store-value");
        expect(_as_store_value).not.toBeUndefined();
        expect(() => module.invoke(_as_store_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-storeN-address (instance 0)", () => {
        let _as_storeN_address = module.getExport("as-storeN-address");
        expect(_as_storeN_address).not.toBeUndefined();
        expect(() => module.invoke(_as_storeN_address).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-storeN-value (instance 0)", () => {
        let _as_storeN_value = module.getExport("as-storeN-value");
        expect(_as_storeN_value).not.toBeUndefined();
        expect(() => module.invoke(_as_storeN_value).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        expect(() => module.invoke(_as_unary_operand).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-binary-left (instance 0)", () => {
        let _as_binary_left = module.getExport("as-binary-left");
        expect(_as_binary_left).not.toBeUndefined();
        expect(() => module.invoke(_as_binary_left).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-binary-right (instance 0)", () => {
        let _as_binary_right = module.getExport("as-binary-right");
        expect(_as_binary_right).not.toBeUndefined();
        expect(() => module.invoke(_as_binary_right).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        expect(() => module.invoke(_as_test_operand).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        expect(() => module.invoke(_as_compare_left).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        expect(() => module.invoke(_as_compare_right).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-convert-operand (instance 0)", () => {
        let _as_convert_operand = module.getExport("as-convert-operand");
        expect(_as_convert_operand).not.toBeUndefined();
        expect(() => module.invoke(_as_convert_operand).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreachable_0: as-memory.grow-size (instance 0)", () => {
        let _as_memory_grow_size = module.getExport("as-memory.grow-size");
        expect(_as_memory_grow_size).not.toBeUndefined();
        expect(() => module.invoke(_as_memory_grow_size).toThrow(TypeError, "Execution trapped"));
    });
});
