let globalImportObject = {};
let namedModules = {};

describe("br_if_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/br_if_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of br_if_0: type-i32 (instance 0)", () => {
        let _type_i32 = module.getExport("type-i32");
        expect(_type_i32).not.toBeUndefined();
        let _type_i32_result = module.invoke(_type_i32);
    });

    _test("execution of br_if_0: type-i64 (instance 0)", () => {
        let _type_i64 = module.getExport("type-i64");
        expect(_type_i64).not.toBeUndefined();
        let _type_i64_result = module.invoke(_type_i64);
    });

    _test("execution of br_if_0: type-f32 (instance 0)", () => {
        let _type_f32 = module.getExport("type-f32");
        expect(_type_f32).not.toBeUndefined();
        let _type_f32_result = module.invoke(_type_f32);
    });

    _test("execution of br_if_0: type-f64 (instance 0)", () => {
        let _type_f64 = module.getExport("type-f64");
        expect(_type_f64).not.toBeUndefined();
        let _type_f64_result = module.invoke(_type_f64);
    });

    _test("execution of br_if_0: type-i32-value (instance 0)", () => {
        let _type_i32_value = module.getExport("type-i32-value");
        expect(_type_i32_value).not.toBeUndefined();
        let _type_i32_value_result = module.invoke(_type_i32_value);
        expect(_type_i32_value_result).toBe(1);
    });

    _test("execution of br_if_0: type-i64-value (instance 0)", () => {
        let _type_i64_value = module.getExport("type-i64-value");
        expect(_type_i64_value).not.toBeUndefined();
        let _type_i64_value_result = module.invoke(_type_i64_value);
        expect(_type_i64_value_result).toBe(2n);
    });

    _test("execution of br_if_0: type-f32-value (instance 0)", () => {
        let _type_f32_value = module.getExport("type-f32-value");
        expect(_type_f32_value).not.toBeUndefined();
        let _type_f32_value_result = module.invoke(_type_f32_value);
        expect(_type_f32_value_result).toBe(3.0);
    });

    _test("execution of br_if_0: type-f64-value (instance 0)", () => {
        let _type_f64_value = module.getExport("type-f64-value");
        expect(_type_f64_value).not.toBeUndefined();
        let _type_f64_value_result = module.invoke(_type_f64_value);
        expect(_type_f64_value_result).toBe(4.0);
    });

    _test("execution of br_if_0: as-block-first (instance 0)", () => {
        let _as_block_first = module.getExport("as-block-first");
        expect(_as_block_first).not.toBeUndefined();
        let _as_block_first_result = module.invoke(_as_block_first, 0);
        expect(_as_block_first_result).toBe(2);
    });

    _test("execution of br_if_0: as-block-first (instance 1)", () => {
        let _as_block_first = module.getExport("as-block-first");
        expect(_as_block_first).not.toBeUndefined();
        let _as_block_first_result = module.invoke(_as_block_first, 1);
        expect(_as_block_first_result).toBe(3);
    });

    _test("execution of br_if_0: as-block-mid (instance 0)", () => {
        let _as_block_mid = module.getExport("as-block-mid");
        expect(_as_block_mid).not.toBeUndefined();
        let _as_block_mid_result = module.invoke(_as_block_mid, 0);
        expect(_as_block_mid_result).toBe(2);
    });

    _test("execution of br_if_0: as-block-mid (instance 1)", () => {
        let _as_block_mid = module.getExport("as-block-mid");
        expect(_as_block_mid).not.toBeUndefined();
        let _as_block_mid_result = module.invoke(_as_block_mid, 1);
        expect(_as_block_mid_result).toBe(3);
    });

    _test("execution of br_if_0: as-block-last (instance 0)", () => {
        let _as_block_last = module.getExport("as-block-last");
        expect(_as_block_last).not.toBeUndefined();
        let _as_block_last_result = module.invoke(_as_block_last, 0);
    });

    _test("execution of br_if_0: as-block-last (instance 1)", () => {
        let _as_block_last = module.getExport("as-block-last");
        expect(_as_block_last).not.toBeUndefined();
        let _as_block_last_result = module.invoke(_as_block_last, 1);
    });

    _test("execution of br_if_0: as-block-first-value (instance 0)", () => {
        let _as_block_first_value = module.getExport("as-block-first-value");
        expect(_as_block_first_value).not.toBeUndefined();
        let _as_block_first_value_result = module.invoke(_as_block_first_value, 0);
        expect(_as_block_first_value_result).toBe(11);
    });

    _test("execution of br_if_0: as-block-first-value (instance 1)", () => {
        let _as_block_first_value = module.getExport("as-block-first-value");
        expect(_as_block_first_value).not.toBeUndefined();
        let _as_block_first_value_result = module.invoke(_as_block_first_value, 1);
        expect(_as_block_first_value_result).toBe(10);
    });

    _test("execution of br_if_0: as-block-mid-value (instance 0)", () => {
        let _as_block_mid_value = module.getExport("as-block-mid-value");
        expect(_as_block_mid_value).not.toBeUndefined();
        let _as_block_mid_value_result = module.invoke(_as_block_mid_value, 0);
        expect(_as_block_mid_value_result).toBe(21);
    });

    _test("execution of br_if_0: as-block-mid-value (instance 1)", () => {
        let _as_block_mid_value = module.getExport("as-block-mid-value");
        expect(_as_block_mid_value).not.toBeUndefined();
        let _as_block_mid_value_result = module.invoke(_as_block_mid_value, 1);
        expect(_as_block_mid_value_result).toBe(20);
    });

    _test("execution of br_if_0: as-block-last-value (instance 0)", () => {
        let _as_block_last_value = module.getExport("as-block-last-value");
        expect(_as_block_last_value).not.toBeUndefined();
        let _as_block_last_value_result = module.invoke(_as_block_last_value, 0);
        expect(_as_block_last_value_result).toBe(11);
    });

    _test("execution of br_if_0: as-block-last-value (instance 1)", () => {
        let _as_block_last_value = module.getExport("as-block-last-value");
        expect(_as_block_last_value).not.toBeUndefined();
        let _as_block_last_value_result = module.invoke(_as_block_last_value, 1);
        expect(_as_block_last_value_result).toBe(11);
    });

    _test("execution of br_if_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first, 0);
        expect(_as_loop_first_result).toBe(2);
    });

    _test("execution of br_if_0: as-loop-first (instance 1)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first, 1);
        expect(_as_loop_first_result).toBe(3);
    });

    _test("execution of br_if_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid, 0);
        expect(_as_loop_mid_result).toBe(2);
    });

    _test("execution of br_if_0: as-loop-mid (instance 1)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid, 1);
        expect(_as_loop_mid_result).toBe(4);
    });

    _test("execution of br_if_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last, 0);
    });

    _test("execution of br_if_0: as-loop-last (instance 1)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last, 1);
    });

    _test("execution of br_if_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(1);
    });

    _test("execution of br_if_0: as-br_if-cond (instance 0)", () => {
        let _as_br_if_cond = module.getExport("as-br_if-cond");
        expect(_as_br_if_cond).not.toBeUndefined();
        let _as_br_if_cond_result = module.invoke(_as_br_if_cond);
    });

    _test("execution of br_if_0: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value);
        expect(_as_br_if_value_result).toBe(1);
    });

    _test("execution of br_if_0: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond, 0);
        expect(_as_br_if_value_cond_result).toBe(2);
    });

    _test("execution of br_if_0: as-br_if-value-cond (instance 1)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond, 1);
        expect(_as_br_if_value_cond_result).toBe(1);
    });

    _test("execution of br_if_0: as-br_table-index (instance 0)", () => {
        let _as_br_table_index = module.getExport("as-br_table-index");
        expect(_as_br_table_index).not.toBeUndefined();
        let _as_br_table_index_result = module.invoke(_as_br_table_index);
    });

    _test("execution of br_if_0: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value);
        expect(_as_br_table_value_result).toBe(1);
    });

    _test("execution of br_if_0: as-br_table-value-index (instance 0)", () => {
        let _as_br_table_value_index = module.getExport("as-br_table-value-index");
        expect(_as_br_table_value_index).not.toBeUndefined();
        let _as_br_table_value_index_result = module.invoke(_as_br_table_value_index);
        expect(_as_br_table_value_index_result).toBe(1);
    });

    _test("execution of br_if_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
        expect(_as_return_value_result).toBe(1n);
    });

    _test("execution of br_if_0: as-if-cond (instance 0)", () => {
        let _as_if_cond = module.getExport("as-if-cond");
        expect(_as_if_cond).not.toBeUndefined();
        let _as_if_cond_result = module.invoke(_as_if_cond, 0);
        expect(_as_if_cond_result).toBe(2);
    });

    _test("execution of br_if_0: as-if-cond (instance 1)", () => {
        let _as_if_cond = module.getExport("as-if-cond");
        expect(_as_if_cond).not.toBeUndefined();
        let _as_if_cond_result = module.invoke(_as_if_cond, 1);
        expect(_as_if_cond_result).toBe(1);
    });

    _test("execution of br_if_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 0, 0);
    });

    _test("execution of br_if_0: as-if-then (instance 1)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 4, 0);
    });

    _test("execution of br_if_0: as-if-then (instance 2)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 0, 1);
    });

    _test("execution of br_if_0: as-if-then (instance 3)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 4, 1);
    });

    _test("execution of br_if_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 0, 0);
    });

    _test("execution of br_if_0: as-if-else (instance 1)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 3, 0);
    });

    _test("execution of br_if_0: as-if-else (instance 2)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 0, 1);
    });

    _test("execution of br_if_0: as-if-else (instance 3)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 3, 1);
    });

    _test("execution of br_if_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 0);
        expect(_as_select_first_result).toBe(3);
    });

    _test("execution of br_if_0: as-select-first (instance 1)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 1);
        expect(_as_select_first_result).toBe(3);
    });

    _test("execution of br_if_0: as-select-second (instance 0)", () => {
        let _as_select_second = module.getExport("as-select-second");
        expect(_as_select_second).not.toBeUndefined();
        let _as_select_second_result = module.invoke(_as_select_second, 0);
        expect(_as_select_second_result).toBe(3);
    });

    _test("execution of br_if_0: as-select-second (instance 1)", () => {
        let _as_select_second = module.getExport("as-select-second");
        expect(_as_select_second).not.toBeUndefined();
        let _as_select_second_result = module.invoke(_as_select_second, 1);
        expect(_as_select_second_result).toBe(3);
    });

    _test("execution of br_if_0: as-select-cond (instance 0)", () => {
        let _as_select_cond = module.getExport("as-select-cond");
        expect(_as_select_cond).not.toBeUndefined();
        let _as_select_cond_result = module.invoke(_as_select_cond);
        expect(_as_select_cond_result).toBe(3);
    });

    _test("execution of br_if_0: as-call-first (instance 0)", () => {
        let _as_call_first = module.getExport("as-call-first");
        expect(_as_call_first).not.toBeUndefined();
        let _as_call_first_result = module.invoke(_as_call_first);
        expect(_as_call_first_result).toBe(12);
    });

    _test("execution of br_if_0: as-call-mid (instance 0)", () => {
        let _as_call_mid = module.getExport("as-call-mid");
        expect(_as_call_mid).not.toBeUndefined();
        let _as_call_mid_result = module.invoke(_as_call_mid);
        expect(_as_call_mid_result).toBe(13);
    });

    _test("execution of br_if_0: as-call-last (instance 0)", () => {
        let _as_call_last = module.getExport("as-call-last");
        expect(_as_call_last).not.toBeUndefined();
        let _as_call_last_result = module.invoke(_as_call_last);
        expect(_as_call_last_result).toBe(14);
    });

    _test("execution of br_if_0: as-call_indirect-func (instance 0)", () => {
        let _as_call_indirect_func = module.getExport("as-call_indirect-func");
        expect(_as_call_indirect_func).not.toBeUndefined();
        let _as_call_indirect_func_result = module.invoke(_as_call_indirect_func);
        expect(_as_call_indirect_func_result).toBe(4);
    });

    _test("execution of br_if_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first);
        expect(_as_call_indirect_first_result).toBe(4);
    });

    _test("execution of br_if_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid);
        expect(_as_call_indirect_mid_result).toBe(4);
    });

    _test("execution of br_if_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        let _as_call_indirect_last_result = module.invoke(_as_call_indirect_last);
        expect(_as_call_indirect_last_result).toBe(4);
    });

    _test("execution of br_if_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 0);
        expect(_as_local_set_value_result).toBe(-1);
    });

    _test("execution of br_if_0: as-local.set-value (instance 1)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 1);
        expect(_as_local_set_value_result).toBe(17);
    });

    _test("execution of br_if_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 0);
        expect(_as_local_tee_value_result).toBe(-1);
    });

    _test("execution of br_if_0: as-local.tee-value (instance 1)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 1);
        expect(_as_local_tee_value_result).toBe(1);
    });

    _test("execution of br_if_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value, 0);
        expect(_as_global_set_value_result).toBe(-1);
    });

    _test("execution of br_if_0: as-global.set-value (instance 1)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value, 1);
        expect(_as_global_set_value_result).toBe(1);
    });

    _test("execution of br_if_0: as-load-address (instance 0)", () => {
        let _as_load_address = module.getExport("as-load-address");
        expect(_as_load_address).not.toBeUndefined();
        let _as_load_address_result = module.invoke(_as_load_address);
        expect(_as_load_address_result).toBe(1);
    });

    _test("execution of br_if_0: as-loadN-address (instance 0)", () => {
        let _as_loadN_address = module.getExport("as-loadN-address");
        expect(_as_loadN_address).not.toBeUndefined();
        let _as_loadN_address_result = module.invoke(_as_loadN_address);
        expect(_as_loadN_address_result).toBe(30);
    });

    _test("execution of br_if_0: as-store-address (instance 0)", () => {
        let _as_store_address = module.getExport("as-store-address");
        expect(_as_store_address).not.toBeUndefined();
        let _as_store_address_result = module.invoke(_as_store_address);
        expect(_as_store_address_result).toBe(30);
    });

    _test("execution of br_if_0: as-store-value (instance 0)", () => {
        let _as_store_value = module.getExport("as-store-value");
        expect(_as_store_value).not.toBeUndefined();
        let _as_store_value_result = module.invoke(_as_store_value);
        expect(_as_store_value_result).toBe(31);
    });

    _test("execution of br_if_0: as-storeN-address (instance 0)", () => {
        let _as_storeN_address = module.getExport("as-storeN-address");
        expect(_as_storeN_address).not.toBeUndefined();
        let _as_storeN_address_result = module.invoke(_as_storeN_address);
        expect(_as_storeN_address_result).toBe(32);
    });

    _test("execution of br_if_0: as-storeN-value (instance 0)", () => {
        let _as_storeN_value = module.getExport("as-storeN-value");
        expect(_as_storeN_value).not.toBeUndefined();
        let _as_storeN_value_result = module.invoke(_as_storeN_value);
        expect(_as_storeN_value_result).toBe(33);
    });

    _test("execution of br_if_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand);
        expect(_as_unary_operand_result).toBe(1.0);
    });

    _test("execution of br_if_0: as-binary-left (instance 0)", () => {
        let _as_binary_left = module.getExport("as-binary-left");
        expect(_as_binary_left).not.toBeUndefined();
        let _as_binary_left_result = module.invoke(_as_binary_left);
        expect(_as_binary_left_result).toBe(1);
    });

    _test("execution of br_if_0: as-binary-right (instance 0)", () => {
        let _as_binary_right = module.getExport("as-binary-right");
        expect(_as_binary_right).not.toBeUndefined();
        let _as_binary_right_result = module.invoke(_as_binary_right);
        expect(_as_binary_right_result).toBe(1);
    });

    _test("execution of br_if_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand);
        expect(_as_test_operand_result).toBe(0);
    });

    _test("execution of br_if_0: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left);
        expect(_as_compare_left_result).toBe(1);
    });

    _test("execution of br_if_0: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right);
        expect(_as_compare_right_result).toBe(1);
    });

    _test("execution of br_if_0: as-memory.grow-size (instance 0)", () => {
        let _as_memory_grow_size = module.getExport("as-memory.grow-size");
        expect(_as_memory_grow_size).not.toBeUndefined();
        let _as_memory_grow_size_result = module.invoke(_as_memory_grow_size);
        expect(_as_memory_grow_size_result).toBe(1);
    });

    _test("execution of br_if_0: nested-block-value (instance 0)", () => {
        let _nested_block_value = module.getExport("nested-block-value");
        expect(_nested_block_value).not.toBeUndefined();
        let _nested_block_value_result = module.invoke(_nested_block_value, 0);
        expect(_nested_block_value_result).toBe(21);
    });

    _test("execution of br_if_0: nested-block-value (instance 1)", () => {
        let _nested_block_value = module.getExport("nested-block-value");
        expect(_nested_block_value).not.toBeUndefined();
        let _nested_block_value_result = module.invoke(_nested_block_value, 1);
        expect(_nested_block_value_result).toBe(9);
    });

    _test("execution of br_if_0: nested-br-value (instance 0)", () => {
        let _nested_br_value = module.getExport("nested-br-value");
        expect(_nested_br_value).not.toBeUndefined();
        let _nested_br_value_result = module.invoke(_nested_br_value, 0);
        expect(_nested_br_value_result).toBe(5);
    });

    _test("execution of br_if_0: nested-br-value (instance 1)", () => {
        let _nested_br_value = module.getExport("nested-br-value");
        expect(_nested_br_value).not.toBeUndefined();
        let _nested_br_value_result = module.invoke(_nested_br_value, 1);
        expect(_nested_br_value_result).toBe(9);
    });

    _test("execution of br_if_0: nested-br_if-value (instance 0)", () => {
        let _nested_br_if_value = module.getExport("nested-br_if-value");
        expect(_nested_br_if_value).not.toBeUndefined();
        let _nested_br_if_value_result = module.invoke(_nested_br_if_value, 0);
        expect(_nested_br_if_value_result).toBe(5);
    });

    _test("execution of br_if_0: nested-br_if-value (instance 1)", () => {
        let _nested_br_if_value = module.getExport("nested-br_if-value");
        expect(_nested_br_if_value).not.toBeUndefined();
        let _nested_br_if_value_result = module.invoke(_nested_br_if_value, 1);
        expect(_nested_br_if_value_result).toBe(9);
    });

    _test("execution of br_if_0: nested-br_if-value-cond (instance 0)", () => {
        let _nested_br_if_value_cond = module.getExport("nested-br_if-value-cond");
        expect(_nested_br_if_value_cond).not.toBeUndefined();
        let _nested_br_if_value_cond_result = module.invoke(_nested_br_if_value_cond, 0);
        expect(_nested_br_if_value_cond_result).toBe(5);
    });

    _test("execution of br_if_0: nested-br_if-value-cond (instance 1)", () => {
        let _nested_br_if_value_cond = module.getExport("nested-br_if-value-cond");
        expect(_nested_br_if_value_cond).not.toBeUndefined();
        let _nested_br_if_value_cond_result = module.invoke(_nested_br_if_value_cond, 1);
        expect(_nested_br_if_value_cond_result).toBe(9);
    });

    _test("execution of br_if_0: nested-br_table-value (instance 0)", () => {
        let _nested_br_table_value = module.getExport("nested-br_table-value");
        expect(_nested_br_table_value).not.toBeUndefined();
        let _nested_br_table_value_result = module.invoke(_nested_br_table_value, 0);
        expect(_nested_br_table_value_result).toBe(5);
    });

    _test("execution of br_if_0: nested-br_table-value (instance 1)", () => {
        let _nested_br_table_value = module.getExport("nested-br_table-value");
        expect(_nested_br_table_value).not.toBeUndefined();
        let _nested_br_table_value_result = module.invoke(_nested_br_table_value, 1);
        expect(_nested_br_table_value_result).toBe(9);
    });

    _test("execution of br_if_0: nested-br_table-value-index (instance 0)", () => {
        let _nested_br_table_value_index = module.getExport("nested-br_table-value-index");
        expect(_nested_br_table_value_index).not.toBeUndefined();
        let _nested_br_table_value_index_result = module.invoke(_nested_br_table_value_index, 0);
        expect(_nested_br_table_value_index_result).toBe(5);
    });

    _test("execution of br_if_0: nested-br_table-value-index (instance 1)", () => {
        let _nested_br_table_value_index = module.getExport("nested-br_table-value-index");
        expect(_nested_br_table_value_index).not.toBeUndefined();
        let _nested_br_table_value_index_result = module.invoke(_nested_br_table_value_index, 1);
        expect(_nested_br_table_value_index_result).toBe(9);
    });
});

describe("br_if_1", () => {
    let _test = test;

    _test("execution of br_if_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_2", () => {
    let _test = test;

    _test("execution of br_if_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_3", () => {
    let _test = test;

    _test("execution of br_if_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_4", () => {
    let _test = test;

    _test("execution of br_if_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_5", () => {
    let _test = test;

    _test("execution of br_if_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_6", () => {
    let _test = test;

    _test("execution of br_if_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_7", () => {
    let _test = test;

    _test("execution of br_if_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_8", () => {
    let _test = test;

    _test("execution of br_if_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_9", () => {
    let _test = test;

    _test("execution of br_if_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_10", () => {
    let _test = test;

    _test("execution of br_if_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_11", () => {
    let _test = test;

    _test("execution of br_if_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_12", () => {
    let _test = test;

    _test("execution of br_if_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_13", () => {
    let _test = test;

    _test("execution of br_if_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_14", () => {
    let _test = test;

    _test("execution of br_if_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_15", () => {
    let _test = test;

    _test("execution of br_if_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_16", () => {
    let _test = test;

    _test("execution of br_if_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_17", () => {
    let _test = test;

    _test("execution of br_if_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_18", () => {
    let _test = test;

    _test("execution of br_if_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_19", () => {
    let _test = test;

    _test("execution of br_if_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_20", () => {
    let _test = test;

    _test("execution of br_if_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_21", () => {
    let _test = test;

    _test("execution of br_if_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_22", () => {
    let _test = test;

    _test("execution of br_if_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_23", () => {
    let _test = test;

    _test("execution of br_if_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_24", () => {
    let _test = test;

    _test("execution of br_if_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_25", () => {
    let _test = test;

    _test("execution of br_if_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_26", () => {
    let _test = test;

    _test("execution of br_if_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_27", () => {
    let _test = test;

    _test("execution of br_if_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_28", () => {
    let _test = test;

    _test("execution of br_if_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("br_if_29", () => {
    let _test = test;

    _test("execution of br_if_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
