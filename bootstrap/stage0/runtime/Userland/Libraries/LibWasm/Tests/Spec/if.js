let globalImportObject = {};
let namedModules = {};

describe("if_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/if_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of if_0: empty (instance 0)", () => {
        let _empty = module.getExport("empty");
        expect(_empty).not.toBeUndefined();
        let _empty_result = module.invoke(_empty, 0);
    });

    _test("execution of if_0: empty (instance 1)", () => {
        let _empty = module.getExport("empty");
        expect(_empty).not.toBeUndefined();
        let _empty_result = module.invoke(_empty, 1);
    });

    _test("execution of if_0: empty (instance 2)", () => {
        let _empty = module.getExport("empty");
        expect(_empty).not.toBeUndefined();
        let _empty_result = module.invoke(_empty, 100);
    });

    _test("execution of if_0: empty (instance 3)", () => {
        let _empty = module.getExport("empty");
        expect(_empty).not.toBeUndefined();
        let _empty_result = module.invoke(_empty, -2);
    });

    _test("execution of if_0: singular (instance 0)", () => {
        let _singular = module.getExport("singular");
        expect(_singular).not.toBeUndefined();
        let _singular_result = module.invoke(_singular, 0);
        expect(_singular_result).toBe(8);
    });

    _test("execution of if_0: singular (instance 1)", () => {
        let _singular = module.getExport("singular");
        expect(_singular).not.toBeUndefined();
        let _singular_result = module.invoke(_singular, 1);
        expect(_singular_result).toBe(7);
    });

    _test("execution of if_0: singular (instance 2)", () => {
        let _singular = module.getExport("singular");
        expect(_singular).not.toBeUndefined();
        let _singular_result = module.invoke(_singular, 10);
        expect(_singular_result).toBe(7);
    });

    _test("execution of if_0: singular (instance 3)", () => {
        let _singular = module.getExport("singular");
        expect(_singular).not.toBeUndefined();
        let _singular_result = module.invoke(_singular, -10);
        expect(_singular_result).toBe(7);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 0)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 1)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 2)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 3)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of if_0: nested (instance 0)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, 0, 0);
        expect(_nested_result).toBe(11);
    });

    _test("execution of if_0: nested (instance 1)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, 1, 0);
        expect(_nested_result).toBe(10);
    });

    _test("execution of if_0: nested (instance 2)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, 0, 1);
        expect(_nested_result).toBe(10);
    });

    _test("execution of if_0: nested (instance 3)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, 3, 2);
        expect(_nested_result).toBe(9);
    });

    _test("execution of if_0: nested (instance 4)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, 0, -100);
        expect(_nested_result).toBe(10);
    });

    _test("execution of if_0: nested (instance 5)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, 10, 10);
        expect(_nested_result).toBe(9);
    });

    _test("execution of if_0: nested (instance 6)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, 0, -1);
        expect(_nested_result).toBe(10);
    });

    _test("execution of if_0: nested (instance 7)", () => {
        let _nested = module.getExport("nested");
        expect(_nested).not.toBeUndefined();
        let _nested_result = module.invoke(_nested, -111, -2);
        expect(_nested_result).toBe(9);
    });

    _test("execution of if_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 0);
        expect(_as_select_first_result).toBe(0);
    });

    _test("execution of if_0: as-select-first (instance 1)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 1);
        expect(_as_select_first_result).toBe(1);
    });

    _test("execution of if_0: as-select-mid (instance 0)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid, 0);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of if_0: as-select-mid (instance 1)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid, 1);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of if_0: as-select-last (instance 0)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last, 0);
        expect(_as_select_last_result).toBe(3);
    });

    _test("execution of if_0: as-select-last (instance 1)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last, 1);
        expect(_as_select_last_result).toBe(2);
    });

    _test("execution of if_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first, 0);
        expect(_as_loop_first_result).toBe(0);
    });

    _test("execution of if_0: as-loop-first (instance 1)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first, 1);
        expect(_as_loop_first_result).toBe(1);
    });

    _test("execution of if_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid, 0);
        expect(_as_loop_mid_result).toBe(0);
    });

    _test("execution of if_0: as-loop-mid (instance 1)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid, 1);
        expect(_as_loop_mid_result).toBe(1);
    });

    _test("execution of if_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last, 0);
        expect(_as_loop_last_result).toBe(0);
    });

    _test("execution of if_0: as-loop-last (instance 1)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last, 1);
        expect(_as_loop_last_result).toBe(1);
    });

    _test("execution of if_0: as-if-condition (instance 0)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition, 0);
        expect(_as_if_condition_result).toBe(3);
    });

    _test("execution of if_0: as-if-condition (instance 1)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition, 1);
        expect(_as_if_condition_result).toBe(2);
    });

    _test("execution of if_0: as-br_if-first (instance 0)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first, 0);
        expect(_as_br_if_first_result).toBe(0);
    });

    _test("execution of if_0: as-br_if-first (instance 1)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first, 1);
        expect(_as_br_if_first_result).toBe(1);
    });

    _test("execution of if_0: as-br_if-last (instance 0)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last, 0);
        expect(_as_br_if_last_result).toBe(3);
    });

    _test("execution of if_0: as-br_if-last (instance 1)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last, 1);
        expect(_as_br_if_last_result).toBe(2);
    });

    _test("execution of if_0: as-br_table-first (instance 0)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first, 0);
        expect(_as_br_table_first_result).toBe(0);
    });

    _test("execution of if_0: as-br_table-first (instance 1)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first, 1);
        expect(_as_br_table_first_result).toBe(1);
    });

    _test("execution of if_0: as-br_table-last (instance 0)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last, 0);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of if_0: as-br_table-last (instance 1)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last, 1);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of if_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first, 0);
        expect(_as_call_indirect_first_result).toBe(0);
    });

    _test("execution of if_0: as-call_indirect-first (instance 1)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first, 1);
        expect(_as_call_indirect_first_result).toBe(1);
    });

    _test("execution of if_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid, 0);
        expect(_as_call_indirect_mid_result).toBe(2);
    });

    _test("execution of if_0: as-call_indirect-mid (instance 1)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid, 1);
        expect(_as_call_indirect_mid_result).toBe(2);
    });

    _test("execution of if_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        let _as_call_indirect_last_result = module.invoke(_as_call_indirect_last, 0);
        expect(_as_call_indirect_last_result).toBe(2);
    });

    _test("execution of if_0: as-call_indirect-last (instance 1)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_call_indirect_last, 1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of if_0: as-store-first (instance 0)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first, 0);
    });

    _test("execution of if_0: as-store-first (instance 1)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first, 1);
    });

    _test("execution of if_0: as-store-last (instance 0)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last, 0);
    });

    _test("execution of if_0: as-store-last (instance 1)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last, 1);
    });

    _test("execution of if_0: as-memory.grow-value (instance 0)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value, 0);
        expect(_as_memory_grow_value_result).toBe(1);
    });

    _test("execution of if_0: as-memory.grow-value (instance 1)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value, 1);
        expect(_as_memory_grow_value_result).toBe(1);
    });

    _test("execution of if_0: as-call-value (instance 0)", () => {
        let _as_call_value = module.getExport("as-call-value");
        expect(_as_call_value).not.toBeUndefined();
        let _as_call_value_result = module.invoke(_as_call_value, 0);
        expect(_as_call_value_result).toBe(0);
    });

    _test("execution of if_0: as-call-value (instance 1)", () => {
        let _as_call_value = module.getExport("as-call-value");
        expect(_as_call_value).not.toBeUndefined();
        let _as_call_value_result = module.invoke(_as_call_value, 1);
        expect(_as_call_value_result).toBe(1);
    });

    _test("execution of if_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value, 0);
        expect(_as_return_value_result).toBe(0);
    });

    _test("execution of if_0: as-return-value (instance 1)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value, 1);
        expect(_as_return_value_result).toBe(1);
    });

    _test("execution of if_0: as-drop-operand (instance 0)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand, 0);
    });

    _test("execution of if_0: as-drop-operand (instance 1)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand, 1);
    });

    _test("execution of if_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value, 0);
        expect(_as_br_value_result).toBe(0);
    });

    _test("execution of if_0: as-br-value (instance 1)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value, 1);
        expect(_as_br_value_result).toBe(1);
    });

    _test("execution of if_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 0);
        expect(_as_local_set_value_result).toBe(0);
    });

    _test("execution of if_0: as-local.set-value (instance 1)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 1);
        expect(_as_local_set_value_result).toBe(1);
    });

    _test("execution of if_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 0);
        expect(_as_local_tee_value_result).toBe(0);
    });

    _test("execution of if_0: as-local.tee-value (instance 1)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 1);
        expect(_as_local_tee_value_result).toBe(1);
    });

    _test("execution of if_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value, 0);
        expect(_as_global_set_value_result).toBe(0);
    });

    _test("execution of if_0: as-global.set-value (instance 1)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value, 1);
        expect(_as_global_set_value_result).toBe(1);
    });

    _test("execution of if_0: as-load-operand (instance 0)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand, 0);
        expect(_as_load_operand_result).toBe(0);
    });

    _test("execution of if_0: as-load-operand (instance 1)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand, 1);
        expect(_as_load_operand_result).toBe(0);
    });

    _test("execution of if_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand, 0);
        expect(_as_unary_operand_result).toBe(0);
    });

    _test("execution of if_0: as-unary-operand (instance 1)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand, 1);
        expect(_as_unary_operand_result).toBe(0);
    });

    _test("execution of if_0: as-unary-operand (instance 2)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand, -1);
        expect(_as_unary_operand_result).toBe(0);
    });

    _test("execution of if_0: as-binary-operand (instance 0)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand, 0, 0);
        expect(_as_binary_operand_result).toBe(15);
    });

    _test("execution of if_0: as-binary-operand (instance 1)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand, 0, 1);
        expect(_as_binary_operand_result).toBe(-12);
    });

    _test("execution of if_0: as-binary-operand (instance 2)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand, 1, 0);
        expect(_as_binary_operand_result).toBe(-15);
    });

    _test("execution of if_0: as-binary-operand (instance 3)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand, 1, 1);
        expect(_as_binary_operand_result).toBe(12);
    });

    _test("execution of if_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand, 0);
        expect(_as_test_operand_result).toBe(1);
    });

    _test("execution of if_0: as-test-operand (instance 1)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand, 1);
        expect(_as_test_operand_result).toBe(0);
    });

    _test("execution of if_0: as-compare-operand (instance 0)", () => {
        let _as_compare_operand = module.getExport("as-compare-operand");
        expect(_as_compare_operand).not.toBeUndefined();
        let _as_compare_operand_result = module.invoke(_as_compare_operand, 0, 0);
        expect(_as_compare_operand_result).toBe(1);
    });

    _test("execution of if_0: as-compare-operand (instance 1)", () => {
        let _as_compare_operand = module.getExport("as-compare-operand");
        expect(_as_compare_operand).not.toBeUndefined();
        let _as_compare_operand_result = module.invoke(_as_compare_operand, 0, 1);
        expect(_as_compare_operand_result).toBe(0);
    });

    _test("execution of if_0: as-compare-operand (instance 2)", () => {
        let _as_compare_operand = module.getExport("as-compare-operand");
        expect(_as_compare_operand).not.toBeUndefined();
        let _as_compare_operand_result = module.invoke(_as_compare_operand, 1, 0);
        expect(_as_compare_operand_result).toBe(1);
    });

    _test("execution of if_0: as-compare-operand (instance 3)", () => {
        let _as_compare_operand = module.getExport("as-compare-operand");
        expect(_as_compare_operand).not.toBeUndefined();
        let _as_compare_operand_result = module.invoke(_as_compare_operand, 1, 1);
        expect(_as_compare_operand_result).toBe(0);
    });

    _test("execution of if_0: as-binary-operands (instance 0)", () => {
        let _as_binary_operands = module.getExport("as-binary-operands");
        expect(_as_binary_operands).not.toBeUndefined();
        let _as_binary_operands_result = module.invoke(_as_binary_operands, 0);
        expect(_as_binary_operands_result).toBe(-12);
    });

    _test("execution of if_0: as-binary-operands (instance 1)", () => {
        let _as_binary_operands = module.getExport("as-binary-operands");
        expect(_as_binary_operands).not.toBeUndefined();
        let _as_binary_operands_result = module.invoke(_as_binary_operands, 1);
        expect(_as_binary_operands_result).toBe(12);
    });

    _test("execution of if_0: as-compare-operands (instance 0)", () => {
        let _as_compare_operands = module.getExport("as-compare-operands");
        expect(_as_compare_operands).not.toBeUndefined();
        let _as_compare_operands_result = module.invoke(_as_compare_operands, 0);
        expect(_as_compare_operands_result).toBe(1);
    });

    _test("execution of if_0: as-compare-operands (instance 1)", () => {
        let _as_compare_operands = module.getExport("as-compare-operands");
        expect(_as_compare_operands).not.toBeUndefined();
        let _as_compare_operands_result = module.invoke(_as_compare_operands, 1);
        expect(_as_compare_operands_result).toBe(0);
    });

    _test("execution of if_0: as-mixed-operands (instance 0)", () => {
        let _as_mixed_operands = module.getExport("as-mixed-operands");
        expect(_as_mixed_operands).not.toBeUndefined();
        let _as_mixed_operands_result = module.invoke(_as_mixed_operands, 0);
        expect(_as_mixed_operands_result).toBe(-3);
    });

    _test("execution of if_0: as-mixed-operands (instance 1)", () => {
        let _as_mixed_operands = module.getExport("as-mixed-operands");
        expect(_as_mixed_operands).not.toBeUndefined();
        let _as_mixed_operands_result = module.invoke(_as_mixed_operands, 1);
        expect(_as_mixed_operands_result).toBe(27);
    });

    _test("execution of if_0: break-bare (instance 0)", () => {
        let _break_bare = module.getExport("break-bare");
        expect(_break_bare).not.toBeUndefined();
        let _break_bare_result = module.invoke(_break_bare);
        expect(_break_bare_result).toBe(19);
    });

    _test("execution of if_0: break-value (instance 0)", () => {
        let _break_value = module.getExport("break-value");
        expect(_break_value).not.toBeUndefined();
        let _break_value_result = module.invoke(_break_value, 1);
        expect(_break_value_result).toBe(18);
    });

    _test("execution of if_0: break-value (instance 1)", () => {
        let _break_value = module.getExport("break-value");
        expect(_break_value).not.toBeUndefined();
        let _break_value_result = module.invoke(_break_value, 0);
        expect(_break_value_result).toBe(21);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 4)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 5)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of if_0: param (instance 0)", () => {
        let _param = module.getExport("param");
        expect(_param).not.toBeUndefined();
        let _param_result = module.invoke(_param, 0);
        expect(_param_result).toBe(-1);
    });

    _test("execution of if_0: param (instance 1)", () => {
        let _param = module.getExport("param");
        expect(_param).not.toBeUndefined();
        let _param_result = module.invoke(_param, 1);
        expect(_param_result).toBe(3);
    });

    _test("execution of if_0: params (instance 0)", () => {
        let _params = module.getExport("params");
        expect(_params).not.toBeUndefined();
        let _params_result = module.invoke(_params, 0);
        expect(_params_result).toBe(-1);
    });

    _test("execution of if_0: params (instance 1)", () => {
        let _params = module.getExport("params");
        expect(_params).not.toBeUndefined();
        let _params_result = module.invoke(_params, 1);
        expect(_params_result).toBe(3);
    });

    _test("execution of if_0: params-id (instance 0)", () => {
        let _params_id = module.getExport("params-id");
        expect(_params_id).not.toBeUndefined();
        let _params_id_result = module.invoke(_params_id, 0);
        expect(_params_id_result).toBe(3);
    });

    _test("execution of if_0: params-id (instance 1)", () => {
        let _params_id = module.getExport("params-id");
        expect(_params_id).not.toBeUndefined();
        let _params_id_result = module.invoke(_params_id, 1);
        expect(_params_id_result).toBe(3);
    });

    _test("execution of if_0: param-break (instance 0)", () => {
        let _param_break = module.getExport("param-break");
        expect(_param_break).not.toBeUndefined();
        let _param_break_result = module.invoke(_param_break, 0);
        expect(_param_break_result).toBe(-1);
    });

    _test("execution of if_0: param-break (instance 1)", () => {
        let _param_break = module.getExport("param-break");
        expect(_param_break).not.toBeUndefined();
        let _param_break_result = module.invoke(_param_break, 1);
        expect(_param_break_result).toBe(3);
    });

    _test("execution of if_0: params-break (instance 0)", () => {
        let _params_break = module.getExport("params-break");
        expect(_params_break).not.toBeUndefined();
        let _params_break_result = module.invoke(_params_break, 0);
        expect(_params_break_result).toBe(-1);
    });

    _test("execution of if_0: params-break (instance 1)", () => {
        let _params_break = module.getExport("params-break");
        expect(_params_break).not.toBeUndefined();
        let _params_break_result = module.invoke(_params_break, 1);
        expect(_params_break_result).toBe(3);
    });

    _test("execution of if_0: params-id-break (instance 0)", () => {
        let _params_id_break = module.getExport("params-id-break");
        expect(_params_id_break).not.toBeUndefined();
        let _params_id_break_result = module.invoke(_params_id_break, 0);
        expect(_params_id_break_result).toBe(3);
    });

    _test("execution of if_0: params-id-break (instance 1)", () => {
        let _params_id_break = module.getExport("params-id-break");
        expect(_params_id_break).not.toBeUndefined();
        let _params_id_break_result = module.invoke(_params_id_break, 1);
        expect(_params_id_break_result).toBe(3);
    });

    _test("execution of if_0: effects (instance 0)", () => {
        let _effects = module.getExport("effects");
        expect(_effects).not.toBeUndefined();
        let _effects_result = module.invoke(_effects, 1);
        expect(_effects_result).toBe(-14);
    });

    _test("execution of if_0: effects (instance 1)", () => {
        let _effects = module.getExport("effects");
        expect(_effects).not.toBeUndefined();
        let _effects_result = module.invoke(_effects, 0);
        expect(_effects_result).toBe(-6);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 6)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 7)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 8)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 9)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 10)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 11)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 12)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of if_0: <unknown> (instance 13)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of if_0: add64_u_saturated (instance 0)", () => {
        let _add64_u_saturated = module.getExport("add64_u_saturated");
        expect(_add64_u_saturated).not.toBeUndefined();
        let _add64_u_saturated_result = module.invoke(_add64_u_saturated, 0n, 0n);
        expect(_add64_u_saturated_result).toBe(0n);
    });

    _test("execution of if_0: add64_u_saturated (instance 1)", () => {
        let _add64_u_saturated = module.getExport("add64_u_saturated");
        expect(_add64_u_saturated).not.toBeUndefined();
        let _add64_u_saturated_result = module.invoke(_add64_u_saturated, 1230n, 23n);
        expect(_add64_u_saturated_result).toBe(1253n);
    });

    _test("execution of if_0: add64_u_saturated (instance 2)", () => {
        let _add64_u_saturated = module.getExport("add64_u_saturated");
        expect(_add64_u_saturated).not.toBeUndefined();
        let _add64_u_saturated_result = module.invoke(_add64_u_saturated, -1n, 0n);
        expect(_add64_u_saturated_result).toBe(-1n);
    });

    _test("execution of if_0: add64_u_saturated (instance 3)", () => {
        let _add64_u_saturated = module.getExport("add64_u_saturated");
        expect(_add64_u_saturated).not.toBeUndefined();
        let _add64_u_saturated_result = module.invoke(_add64_u_saturated, -1n, 1n);
        expect(_add64_u_saturated_result).toBe(-1n);
    });

    _test("execution of if_0: add64_u_saturated (instance 4)", () => {
        let _add64_u_saturated = module.getExport("add64_u_saturated");
        expect(_add64_u_saturated).not.toBeUndefined();
        let _add64_u_saturated_result = module.invoke(_add64_u_saturated, -1n, -1n);
        expect(_add64_u_saturated_result).toBe(-1n);
    });

    _test("execution of if_0: add64_u_saturated (instance 5)", () => {
        let _add64_u_saturated = module.getExport("add64_u_saturated");
        expect(_add64_u_saturated).not.toBeUndefined();
        let _add64_u_saturated_result = module.invoke(
            _add64_u_saturated,
            -9223372036854775808n,
            -9223372036854775808n
        );
        expect(_add64_u_saturated_result).toBe(-1n);
    });

    _test("execution of if_0: type-use (instance 0)", () => {
        let _type_use = module.getExport("type-use");
        expect(_type_use).not.toBeUndefined();
        let _type_use_result = module.invoke(_type_use);
    });
});

describe("if_1", () => {
    let _test = test;

    _test("execution of if_1: _inline_test_0 (instance 0)", () => {});
});

describe("if_2", () => {
    let _test = test;

    _test("execution of if_2: _inline_test_1 (instance 0)", () => {});
});

describe("if_3", () => {
    let _test = test;

    _test("execution of if_3: _inline_test_2 (instance 0)", () => {});
});

describe("if_4", () => {
    let _test = test;

    _test("execution of if_4: _inline_test_3 (instance 0)", () => {});
});

describe("if_5", () => {
    let _test = test;

    _test("execution of if_5: _inline_test_4 (instance 0)", () => {});
});

describe("if_6", () => {
    let _test = test;

    _test("execution of if_6: _inline_test_5 (instance 0)", () => {});
});

describe("if_7", () => {
    let _test = test;

    _test("execution of if_7: _inline_test_6 (instance 0)", () => {});
});

describe("if_8", () => {
    let _test = test;

    _test("execution of if_8: _inline_test_7 (instance 0)", () => {});
});

describe("if_9", () => {
    let _test = test;

    _test("execution of if_9: _inline_test_8 (instance 0)", () => {});
});

describe("if_10", () => {
    let _test = test;

    _test("execution of if_10: _inline_test_9 (instance 0)", () => {});
});

describe("if_11", () => {
    let _test = test;

    _test("execution of if_11: _inline_test_10 (instance 0)", () => {});
});

describe("if_12", () => {
    let _test = test;

    _test("execution of if_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_13", () => {
    let _test = test;

    _test("execution of if_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_14", () => {
    let _test = test;

    _test("execution of if_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_15", () => {
    let _test = test;

    _test("execution of if_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_16", () => {
    let _test = test;

    _test("execution of if_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_17", () => {
    let _test = test;

    _test("execution of if_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_18", () => {
    let _test = test;

    _test("execution of if_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_19", () => {
    let _test = test;

    _test("execution of if_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_20", () => {
    let _test = test;

    _test("execution of if_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_21", () => {
    let _test = test;

    _test("execution of if_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_22", () => {
    let _test = test;

    _test("execution of if_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_23", () => {
    let _test = test;

    _test("execution of if_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_24", () => {
    let _test = test;

    _test("execution of if_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_25", () => {
    let _test = test;

    _test("execution of if_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_26", () => {
    let _test = test;

    _test("execution of if_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_27", () => {
    let _test = test;

    _test("execution of if_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_28", () => {
    let _test = test;

    _test("execution of if_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_29", () => {
    let _test = test;

    _test("execution of if_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_30", () => {
    let _test = test;

    _test("execution of if_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_31", () => {
    let _test = test;

    _test("execution of if_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_32", () => {
    let _test = test;

    _test("execution of if_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_33", () => {
    let _test = test;

    _test("execution of if_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_34", () => {
    let _test = test;

    _test("execution of if_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_35", () => {
    let _test = test;

    _test("execution of if_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_36", () => {
    let _test = test;

    _test("execution of if_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_37", () => {
    let _test = test;

    _test("execution of if_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_38", () => {
    let _test = test;

    _test("execution of if_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_39", () => {
    let _test = test;

    _test("execution of if_39: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_40", () => {
    let _test = test;

    _test("execution of if_40: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_41", () => {
    let _test = test;

    _test("execution of if_41: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_42", () => {
    let _test = test;

    _test("execution of if_42: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_43", () => {
    let _test = test;

    _test("execution of if_43: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_44", () => {
    let _test = test;

    _test("execution of if_44: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_45", () => {
    let _test = test;

    _test("execution of if_45: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_46", () => {
    let _test = test;

    _test("execution of if_46: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_47", () => {
    let _test = test;

    _test("execution of if_47: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_48", () => {
    let _test = test;

    _test("execution of if_48: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_49", () => {
    let _test = test;

    _test("execution of if_49: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_50", () => {
    let _test = test;

    _test("execution of if_50: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_51", () => {
    let _test = test;

    _test("execution of if_51: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_52", () => {
    let _test = test;

    _test("execution of if_52: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_53", () => {
    let _test = test;

    _test("execution of if_53: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_54", () => {
    let _test = test;

    _test("execution of if_54: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_55", () => {
    let _test = test;

    _test("execution of if_55: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_56", () => {
    let _test = test;

    _test("execution of if_56: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_57", () => {
    let _test = test;

    _test("execution of if_57: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_58", () => {
    let _test = test;

    _test("execution of if_58: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_59", () => {
    let _test = test;

    _test("execution of if_59: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_60", () => {
    let _test = test;

    _test("execution of if_60: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_61", () => {
    let _test = test;

    _test("execution of if_61: _inline_test_60 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_62", () => {
    let _test = test;

    _test("execution of if_62: _inline_test_61 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_63", () => {
    let _test = test;

    _test("execution of if_63: _inline_test_62 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_64", () => {
    let _test = test;

    _test("execution of if_64: _inline_test_63 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_65", () => {
    let _test = test;

    _test("execution of if_65: _inline_test_64 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_66", () => {
    let _test = test;

    _test("execution of if_66: _inline_test_65 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_67", () => {
    let _test = test;

    _test("execution of if_67: _inline_test_66 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_68", () => {
    let _test = test;

    _test("execution of if_68: _inline_test_67 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_69", () => {
    let _test = test;

    _test("execution of if_69: _inline_test_68 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_70", () => {
    let _test = test;

    _test("execution of if_70: _inline_test_69 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_71", () => {
    let _test = test;

    _test("execution of if_71: _inline_test_70 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_72", () => {
    let _test = test;

    _test("execution of if_72: _inline_test_71 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_73", () => {
    let _test = test;

    _test("execution of if_73: _inline_test_72 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_74", () => {
    let _test = test;

    _test("execution of if_74: _inline_test_73 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_75", () => {
    let _test = test;

    _test("execution of if_75: _inline_test_74 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_76", () => {
    let _test = test;

    _test("execution of if_76: _inline_test_75 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_77", () => {
    let _test = test;

    _test("execution of if_77: _inline_test_76 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_78", () => {
    let _test = test;

    _test("execution of if_78: _inline_test_77 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_79", () => {
    let _test = test;

    _test("execution of if_79: _inline_test_78 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_80", () => {
    let _test = test;

    _test("execution of if_80: _inline_test_79 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_81", () => {
    let _test = test;

    _test("execution of if_81: _inline_test_80 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_82", () => {
    let _test = test;

    _test("execution of if_82: _inline_test_81 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_83", () => {
    let _test = test;

    _test("execution of if_83: _inline_test_82 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_84", () => {
    let _test = test;

    _test("execution of if_84: _inline_test_83 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_85", () => {
    let _test = test;

    _test("execution of if_85: _inline_test_84 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_86", () => {
    let _test = test;

    _test("execution of if_86: _inline_test_85 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_87", () => {
    let _test = test;

    _test("execution of if_87: _inline_test_86 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_88", () => {
    let _test = test;

    _test("execution of if_88: _inline_test_87 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_89", () => {
    let _test = test;

    _test("execution of if_89: _inline_test_88 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_90", () => {
    let _test = test;

    _test("execution of if_90: _inline_test_89 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_91", () => {
    let _test = test;

    _test("execution of if_91: _inline_test_90 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_92", () => {
    let _test = test;

    _test("execution of if_92: _inline_test_91 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_93", () => {
    let _test = test;

    _test("execution of if_93: _inline_test_92 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_94", () => {
    let _test = test;

    _test("execution of if_94: _inline_test_93 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_95", () => {
    let _test = test;

    _test("execution of if_95: _inline_test_94 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_96", () => {
    let _test = test;

    _test("execution of if_96: _inline_test_95 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_97", () => {
    let _test = test;

    _test("execution of if_97: _inline_test_96 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_98", () => {
    let _test = test;

    _test("execution of if_98: _inline_test_97 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_99", () => {
    let _test = test;

    _test("execution of if_99: _inline_test_98 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_100", () => {
    let _test = test;

    _test("execution of if_100: _inline_test_99 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_101", () => {
    let _test = test;

    _test("execution of if_101: _inline_test_100 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_102", () => {
    let _test = test;

    _test("execution of if_102: _inline_test_101 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_103", () => {
    let _test = test;

    _test("execution of if_103: _inline_test_102 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("if_104", () => {
    let _test = test;

    _test("execution of if_104: _inline_test_103 (instance 0)", () => {});
});

describe("if_105", () => {
    let _test = test;

    _test("execution of if_105: _inline_test_104 (instance 0)", () => {});
});

describe("if_106", () => {
    let _test = test;

    _test("execution of if_106: _inline_test_105 (instance 0)", () => {});
});

describe("if_107", () => {
    let _test = test;

    _test("execution of if_107: _inline_test_106 (instance 0)", () => {});
});

describe("if_108", () => {
    let _test = test;

    _test("execution of if_108: _inline_test_107 (instance 0)", () => {});
});

describe("if_109", () => {
    let _test = test;

    _test("execution of if_109: _inline_test_108 (instance 0)", () => {});
});

describe("if_110", () => {
    let _test = test;

    _test("execution of if_110: _inline_test_109 (instance 0)", () => {});
});

describe("if_111", () => {
    let _test = test;

    _test("execution of if_111: _inline_test_110 (instance 0)", () => {});
});

describe("if_112", () => {
    let _test = test;

    _test("execution of if_112: _inline_test_111 (instance 0)", () => {});
});

describe("if_113", () => {
    let _test = test;

    _test("execution of if_113: _inline_test_112 (instance 0)", () => {});
});

describe("if_114", () => {
    let _test = test;

    _test("execution of if_114: _inline_test_113 (instance 0)", () => {});
});

describe("if_115", () => {
    let _test = test;

    _test("execution of if_115: _inline_test_114 (instance 0)", () => {});
});
