let globalImportObject = {};
let namedModules = {};

describe("nop_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/nop_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of nop_0: as-func-first (instance 0)", () => {
        let _as_func_first = module.getExport("as-func-first");
        expect(_as_func_first).not.toBeUndefined();
        let _as_func_first_result = module.invoke(_as_func_first);
        expect(_as_func_first_result).toBe(1);
    });

    _test("execution of nop_0: as-func-mid (instance 0)", () => {
        let _as_func_mid = module.getExport("as-func-mid");
        expect(_as_func_mid).not.toBeUndefined();
        let _as_func_mid_result = module.invoke(_as_func_mid);
        expect(_as_func_mid_result).toBe(2);
    });

    _test("execution of nop_0: as-func-last (instance 0)", () => {
        let _as_func_last = module.getExport("as-func-last");
        expect(_as_func_last).not.toBeUndefined();
        let _as_func_last_result = module.invoke(_as_func_last);
        expect(_as_func_last_result).toBe(3);
    });

    _test("execution of nop_0: as-func-everywhere (instance 0)", () => {
        let _as_func_everywhere = module.getExport("as-func-everywhere");
        expect(_as_func_everywhere).not.toBeUndefined();
        let _as_func_everywhere_result = module.invoke(_as_func_everywhere);
        expect(_as_func_everywhere_result).toBe(4);
    });

    _test("execution of nop_0: as-drop-first (instance 0)", () => {
        let _as_drop_first = module.getExport("as-drop-first");
        expect(_as_drop_first).not.toBeUndefined();
        let _as_drop_first_result = module.invoke(_as_drop_first, 0);
    });

    _test("execution of nop_0: as-drop-last (instance 0)", () => {
        let _as_drop_last = module.getExport("as-drop-last");
        expect(_as_drop_last).not.toBeUndefined();
        let _as_drop_last_result = module.invoke(_as_drop_last, 0);
    });

    _test("execution of nop_0: as-drop-everywhere (instance 0)", () => {
        let _as_drop_everywhere = module.getExport("as-drop-everywhere");
        expect(_as_drop_everywhere).not.toBeUndefined();
        let _as_drop_everywhere_result = module.invoke(_as_drop_everywhere, 0);
    });

    _test("execution of nop_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 3);
        expect(_as_select_first_result).toBe(3);
    });

    _test("execution of nop_0: as-select-mid1 (instance 0)", () => {
        let _as_select_mid1 = module.getExport("as-select-mid1");
        expect(_as_select_mid1).not.toBeUndefined();
        let _as_select_mid1_result = module.invoke(_as_select_mid1, 3);
        expect(_as_select_mid1_result).toBe(3);
    });

    _test("execution of nop_0: as-select-mid2 (instance 0)", () => {
        let _as_select_mid2 = module.getExport("as-select-mid2");
        expect(_as_select_mid2).not.toBeUndefined();
        let _as_select_mid2_result = module.invoke(_as_select_mid2, 3);
        expect(_as_select_mid2_result).toBe(3);
    });

    _test("execution of nop_0: as-select-last (instance 0)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last, 3);
        expect(_as_select_last_result).toBe(3);
    });

    _test("execution of nop_0: as-select-everywhere (instance 0)", () => {
        let _as_select_everywhere = module.getExport("as-select-everywhere");
        expect(_as_select_everywhere).not.toBeUndefined();
        let _as_select_everywhere_result = module.invoke(_as_select_everywhere, 3);
        expect(_as_select_everywhere_result).toBe(3);
    });

    _test("execution of nop_0: as-block-first (instance 0)", () => {
        let _as_block_first = module.getExport("as-block-first");
        expect(_as_block_first).not.toBeUndefined();
        let _as_block_first_result = module.invoke(_as_block_first);
        expect(_as_block_first_result).toBe(2);
    });

    _test("execution of nop_0: as-block-mid (instance 0)", () => {
        let _as_block_mid = module.getExport("as-block-mid");
        expect(_as_block_mid).not.toBeUndefined();
        let _as_block_mid_result = module.invoke(_as_block_mid);
        expect(_as_block_mid_result).toBe(2);
    });

    _test("execution of nop_0: as-block-last (instance 0)", () => {
        let _as_block_last = module.getExport("as-block-last");
        expect(_as_block_last).not.toBeUndefined();
        let _as_block_last_result = module.invoke(_as_block_last);
        expect(_as_block_last_result).toBe(3);
    });

    _test("execution of nop_0: as-block-everywhere (instance 0)", () => {
        let _as_block_everywhere = module.getExport("as-block-everywhere");
        expect(_as_block_everywhere).not.toBeUndefined();
        let _as_block_everywhere_result = module.invoke(_as_block_everywhere);
        expect(_as_block_everywhere_result).toBe(4);
    });

    _test("execution of nop_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first);
        expect(_as_loop_first_result).toBe(2);
    });

    _test("execution of nop_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid);
        expect(_as_loop_mid_result).toBe(2);
    });

    _test("execution of nop_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last);
        expect(_as_loop_last_result).toBe(3);
    });

    _test("execution of nop_0: as-loop-everywhere (instance 0)", () => {
        let _as_loop_everywhere = module.getExport("as-loop-everywhere");
        expect(_as_loop_everywhere).not.toBeUndefined();
        let _as_loop_everywhere_result = module.invoke(_as_loop_everywhere);
        expect(_as_loop_everywhere_result).toBe(4);
    });

    _test("execution of nop_0: as-if-condition (instance 0)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition, 0);
    });

    _test("execution of nop_0: as-if-condition (instance 1)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition, -1);
    });

    _test("execution of nop_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 0);
    });

    _test("execution of nop_0: as-if-then (instance 1)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 4);
    });

    _test("execution of nop_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 0);
    });

    _test("execution of nop_0: as-if-else (instance 1)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 3);
    });

    _test("execution of nop_0: as-br-first (instance 0)", () => {
        let _as_br_first = module.getExport("as-br-first");
        expect(_as_br_first).not.toBeUndefined();
        let _as_br_first_result = module.invoke(_as_br_first, 5);
        expect(_as_br_first_result).toBe(5);
    });

    _test("execution of nop_0: as-br-last (instance 0)", () => {
        let _as_br_last = module.getExport("as-br-last");
        expect(_as_br_last).not.toBeUndefined();
        let _as_br_last_result = module.invoke(_as_br_last, 6);
        expect(_as_br_last_result).toBe(6);
    });

    _test("execution of nop_0: as-br-everywhere (instance 0)", () => {
        let _as_br_everywhere = module.getExport("as-br-everywhere");
        expect(_as_br_everywhere).not.toBeUndefined();
        let _as_br_everywhere_result = module.invoke(_as_br_everywhere, 7);
        expect(_as_br_everywhere_result).toBe(7);
    });

    _test("execution of nop_0: as-br_if-first (instance 0)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first, 4);
        expect(_as_br_if_first_result).toBe(4);
    });

    _test("execution of nop_0: as-br_if-mid (instance 0)", () => {
        let _as_br_if_mid = module.getExport("as-br_if-mid");
        expect(_as_br_if_mid).not.toBeUndefined();
        let _as_br_if_mid_result = module.invoke(_as_br_if_mid, 5);
        expect(_as_br_if_mid_result).toBe(5);
    });

    _test("execution of nop_0: as-br_if-last (instance 0)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last, 6);
        expect(_as_br_if_last_result).toBe(6);
    });

    _test("execution of nop_0: as-br_if-everywhere (instance 0)", () => {
        let _as_br_if_everywhere = module.getExport("as-br_if-everywhere");
        expect(_as_br_if_everywhere).not.toBeUndefined();
        let _as_br_if_everywhere_result = module.invoke(_as_br_if_everywhere, 7);
        expect(_as_br_if_everywhere_result).toBe(7);
    });

    _test("execution of nop_0: as-br_table-first (instance 0)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first, 4);
        expect(_as_br_table_first_result).toBe(4);
    });

    _test("execution of nop_0: as-br_table-mid (instance 0)", () => {
        let _as_br_table_mid = module.getExport("as-br_table-mid");
        expect(_as_br_table_mid).not.toBeUndefined();
        let _as_br_table_mid_result = module.invoke(_as_br_table_mid, 5);
        expect(_as_br_table_mid_result).toBe(5);
    });

    _test("execution of nop_0: as-br_table-last (instance 0)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last, 6);
        expect(_as_br_table_last_result).toBe(6);
    });

    _test("execution of nop_0: as-br_table-everywhere (instance 0)", () => {
        let _as_br_table_everywhere = module.getExport("as-br_table-everywhere");
        expect(_as_br_table_everywhere).not.toBeUndefined();
        let _as_br_table_everywhere_result = module.invoke(_as_br_table_everywhere, 7);
        expect(_as_br_table_everywhere_result).toBe(7);
    });

    _test("execution of nop_0: as-return-first (instance 0)", () => {
        let _as_return_first = module.getExport("as-return-first");
        expect(_as_return_first).not.toBeUndefined();
        let _as_return_first_result = module.invoke(_as_return_first, 5);
        expect(_as_return_first_result).toBe(5);
    });

    _test("execution of nop_0: as-return-last (instance 0)", () => {
        let _as_return_last = module.getExport("as-return-last");
        expect(_as_return_last).not.toBeUndefined();
        let _as_return_last_result = module.invoke(_as_return_last, 6);
        expect(_as_return_last_result).toBe(6);
    });

    _test("execution of nop_0: as-return-everywhere (instance 0)", () => {
        let _as_return_everywhere = module.getExport("as-return-everywhere");
        expect(_as_return_everywhere).not.toBeUndefined();
        let _as_return_everywhere_result = module.invoke(_as_return_everywhere, 7);
        expect(_as_return_everywhere_result).toBe(7);
    });

    _test("execution of nop_0: as-call-first (instance 0)", () => {
        let _as_call_first = module.getExport("as-call-first");
        expect(_as_call_first).not.toBeUndefined();
        let _as_call_first_result = module.invoke(_as_call_first, 3, 1, 2);
        expect(_as_call_first_result).toBe(2);
    });

    _test("execution of nop_0: as-call-mid1 (instance 0)", () => {
        let _as_call_mid1 = module.getExport("as-call-mid1");
        expect(_as_call_mid1).not.toBeUndefined();
        let _as_call_mid1_result = module.invoke(_as_call_mid1, 3, 1, 2);
        expect(_as_call_mid1_result).toBe(2);
    });

    _test("execution of nop_0: as-call-mid2 (instance 0)", () => {
        let _as_call_mid2 = module.getExport("as-call-mid2");
        expect(_as_call_mid2).not.toBeUndefined();
        let _as_call_mid2_result = module.invoke(_as_call_mid2, 0, 3, 1);
        expect(_as_call_mid2_result).toBe(2);
    });

    _test("execution of nop_0: as-call-last (instance 0)", () => {
        let _as_call_last = module.getExport("as-call-last");
        expect(_as_call_last).not.toBeUndefined();
        let _as_call_last_result = module.invoke(_as_call_last, 10, 9, -1);
        expect(_as_call_last_result).toBe(20);
    });

    _test("execution of nop_0: as-call-everywhere (instance 0)", () => {
        let _as_call_everywhere = module.getExport("as-call-everywhere");
        expect(_as_call_everywhere).not.toBeUndefined();
        let _as_call_everywhere_result = module.invoke(_as_call_everywhere, 2, 1, 5);
        expect(_as_call_everywhere_result).toBe(-2);
    });

    _test("execution of nop_0: as-unary-first (instance 0)", () => {
        let _as_unary_first = module.getExport("as-unary-first");
        expect(_as_unary_first).not.toBeUndefined();
        let _as_unary_first_result = module.invoke(_as_unary_first, 30);
        expect(_as_unary_first_result).toBe(1);
    });

    _test("execution of nop_0: as-unary-last (instance 0)", () => {
        let _as_unary_last = module.getExport("as-unary-last");
        expect(_as_unary_last).not.toBeUndefined();
        let _as_unary_last_result = module.invoke(_as_unary_last, 30);
        expect(_as_unary_last_result).toBe(1);
    });

    _test("execution of nop_0: as-unary-everywhere (instance 0)", () => {
        let _as_unary_everywhere = module.getExport("as-unary-everywhere");
        expect(_as_unary_everywhere).not.toBeUndefined();
        let _as_unary_everywhere_result = module.invoke(_as_unary_everywhere, 12);
        expect(_as_unary_everywhere_result).toBe(2);
    });

    _test("execution of nop_0: as-binary-first (instance 0)", () => {
        let _as_binary_first = module.getExport("as-binary-first");
        expect(_as_binary_first).not.toBeUndefined();
        let _as_binary_first_result = module.invoke(_as_binary_first, 3);
        expect(_as_binary_first_result).toBe(6);
    });

    _test("execution of nop_0: as-binary-mid (instance 0)", () => {
        let _as_binary_mid = module.getExport("as-binary-mid");
        expect(_as_binary_mid).not.toBeUndefined();
        let _as_binary_mid_result = module.invoke(_as_binary_mid, 3);
        expect(_as_binary_mid_result).toBe(6);
    });

    _test("execution of nop_0: as-binary-last (instance 0)", () => {
        let _as_binary_last = module.getExport("as-binary-last");
        expect(_as_binary_last).not.toBeUndefined();
        let _as_binary_last_result = module.invoke(_as_binary_last, 3);
        expect(_as_binary_last_result).toBe(6);
    });

    _test("execution of nop_0: as-binary-everywhere (instance 0)", () => {
        let _as_binary_everywhere = module.getExport("as-binary-everywhere");
        expect(_as_binary_everywhere).not.toBeUndefined();
        let _as_binary_everywhere_result = module.invoke(_as_binary_everywhere, 3);
        expect(_as_binary_everywhere_result).toBe(6);
    });

    _test("execution of nop_0: as-test-first (instance 0)", () => {
        let _as_test_first = module.getExport("as-test-first");
        expect(_as_test_first).not.toBeUndefined();
        let _as_test_first_result = module.invoke(_as_test_first, 0);
        expect(_as_test_first_result).toBe(1);
    });

    _test("execution of nop_0: as-test-last (instance 0)", () => {
        let _as_test_last = module.getExport("as-test-last");
        expect(_as_test_last).not.toBeUndefined();
        let _as_test_last_result = module.invoke(_as_test_last, 0);
        expect(_as_test_last_result).toBe(1);
    });

    _test("execution of nop_0: as-test-everywhere (instance 0)", () => {
        let _as_test_everywhere = module.getExport("as-test-everywhere");
        expect(_as_test_everywhere).not.toBeUndefined();
        let _as_test_everywhere_result = module.invoke(_as_test_everywhere, 0);
        expect(_as_test_everywhere_result).toBe(1);
    });

    _test("execution of nop_0: as-compare-first (instance 0)", () => {
        let _as_compare_first = module.getExport("as-compare-first");
        expect(_as_compare_first).not.toBeUndefined();
        let _as_compare_first_result = module.invoke(_as_compare_first, 3);
        expect(_as_compare_first_result).toBe(0);
    });

    _test("execution of nop_0: as-compare-mid (instance 0)", () => {
        let _as_compare_mid = module.getExport("as-compare-mid");
        expect(_as_compare_mid).not.toBeUndefined();
        let _as_compare_mid_result = module.invoke(_as_compare_mid, 3);
        expect(_as_compare_mid_result).toBe(0);
    });

    _test("execution of nop_0: as-compare-last (instance 0)", () => {
        let _as_compare_last = module.getExport("as-compare-last");
        expect(_as_compare_last).not.toBeUndefined();
        let _as_compare_last_result = module.invoke(_as_compare_last, 3);
        expect(_as_compare_last_result).toBe(0);
    });

    _test("execution of nop_0: as-compare-everywhere (instance 0)", () => {
        let _as_compare_everywhere = module.getExport("as-compare-everywhere");
        expect(_as_compare_everywhere).not.toBeUndefined();
        let _as_compare_everywhere_result = module.invoke(_as_compare_everywhere, 3);
        expect(_as_compare_everywhere_result).toBe(1);
    });

    _test("execution of nop_0: as-memory.grow-first (instance 0)", () => {
        let _as_memory_grow_first = module.getExport("as-memory.grow-first");
        expect(_as_memory_grow_first).not.toBeUndefined();
        let _as_memory_grow_first_result = module.invoke(_as_memory_grow_first, 0);
        expect(_as_memory_grow_first_result).toBe(1);
    });

    _test("execution of nop_0: as-memory.grow-last (instance 0)", () => {
        let _as_memory_grow_last = module.getExport("as-memory.grow-last");
        expect(_as_memory_grow_last).not.toBeUndefined();
        let _as_memory_grow_last_result = module.invoke(_as_memory_grow_last, 2);
        expect(_as_memory_grow_last_result).toBe(1);
    });

    _test("execution of nop_0: as-memory.grow-everywhere (instance 0)", () => {
        let _as_memory_grow_everywhere = module.getExport("as-memory.grow-everywhere");
        expect(_as_memory_grow_everywhere).not.toBeUndefined();
        let _as_memory_grow_everywhere_result = module.invoke(_as_memory_grow_everywhere, 12);
        expect(_as_memory_grow_everywhere_result).toBe(3);
    });

    _test("execution of nop_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first);
        expect(_as_call_indirect_first_result).toBe(1);
    });

    _test("execution of nop_0: as-call_indirect-mid1 (instance 0)", () => {
        let _as_call_indirect_mid1 = module.getExport("as-call_indirect-mid1");
        expect(_as_call_indirect_mid1).not.toBeUndefined();
        let _as_call_indirect_mid1_result = module.invoke(_as_call_indirect_mid1);
        expect(_as_call_indirect_mid1_result).toBe(1);
    });

    _test("execution of nop_0: as-call_indirect-mid2 (instance 0)", () => {
        let _as_call_indirect_mid2 = module.getExport("as-call_indirect-mid2");
        expect(_as_call_indirect_mid2).not.toBeUndefined();
        let _as_call_indirect_mid2_result = module.invoke(_as_call_indirect_mid2);
        expect(_as_call_indirect_mid2_result).toBe(1);
    });

    _test("execution of nop_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        let _as_call_indirect_last_result = module.invoke(_as_call_indirect_last);
        expect(_as_call_indirect_last_result).toBe(1);
    });

    _test("execution of nop_0: as-call_indirect-everywhere (instance 0)", () => {
        let _as_call_indirect_everywhere = module.getExport("as-call_indirect-everywhere");
        expect(_as_call_indirect_everywhere).not.toBeUndefined();
        let _as_call_indirect_everywhere_result = module.invoke(_as_call_indirect_everywhere);
        expect(_as_call_indirect_everywhere_result).toBe(1);
    });

    _test("execution of nop_0: as-local.set-first (instance 0)", () => {
        let _as_local_set_first = module.getExport("as-local.set-first");
        expect(_as_local_set_first).not.toBeUndefined();
        let _as_local_set_first_result = module.invoke(_as_local_set_first, 1);
        expect(_as_local_set_first_result).toBe(2);
    });

    _test("execution of nop_0: as-local.set-last (instance 0)", () => {
        let _as_local_set_last = module.getExport("as-local.set-last");
        expect(_as_local_set_last).not.toBeUndefined();
        let _as_local_set_last_result = module.invoke(_as_local_set_last, 1);
        expect(_as_local_set_last_result).toBe(2);
    });

    _test("execution of nop_0: as-local.set-everywhere (instance 0)", () => {
        let _as_local_set_everywhere = module.getExport("as-local.set-everywhere");
        expect(_as_local_set_everywhere).not.toBeUndefined();
        let _as_local_set_everywhere_result = module.invoke(_as_local_set_everywhere, 1);
        expect(_as_local_set_everywhere_result).toBe(2);
    });

    _test("execution of nop_0: as-local.tee-first (instance 0)", () => {
        let _as_local_tee_first = module.getExport("as-local.tee-first");
        expect(_as_local_tee_first).not.toBeUndefined();
        let _as_local_tee_first_result = module.invoke(_as_local_tee_first, 1);
        expect(_as_local_tee_first_result).toBe(2);
    });

    _test("execution of nop_0: as-local.tee-last (instance 0)", () => {
        let _as_local_tee_last = module.getExport("as-local.tee-last");
        expect(_as_local_tee_last).not.toBeUndefined();
        let _as_local_tee_last_result = module.invoke(_as_local_tee_last, 1);
        expect(_as_local_tee_last_result).toBe(2);
    });

    _test("execution of nop_0: as-local.tee-everywhere (instance 0)", () => {
        let _as_local_tee_everywhere = module.getExport("as-local.tee-everywhere");
        expect(_as_local_tee_everywhere).not.toBeUndefined();
        let _as_local_tee_everywhere_result = module.invoke(_as_local_tee_everywhere, 1);
        expect(_as_local_tee_everywhere_result).toBe(2);
    });

    _test("execution of nop_0: as-global.set-first (instance 0)", () => {
        let _as_global_set_first = module.getExport("as-global.set-first");
        expect(_as_global_set_first).not.toBeUndefined();
        let _as_global_set_first_result = module.invoke(_as_global_set_first);
        expect(_as_global_set_first_result).toBe(2);
    });

    _test("execution of nop_0: as-global.set-last (instance 0)", () => {
        let _as_global_set_last = module.getExport("as-global.set-last");
        expect(_as_global_set_last).not.toBeUndefined();
        let _as_global_set_last_result = module.invoke(_as_global_set_last);
        expect(_as_global_set_last_result).toBe(2);
    });

    _test("execution of nop_0: as-global.set-everywhere (instance 0)", () => {
        let _as_global_set_everywhere = module.getExport("as-global.set-everywhere");
        expect(_as_global_set_everywhere).not.toBeUndefined();
        let _as_global_set_everywhere_result = module.invoke(_as_global_set_everywhere);
        expect(_as_global_set_everywhere_result).toBe(2);
    });

    _test("execution of nop_0: as-load-first (instance 0)", () => {
        let _as_load_first = module.getExport("as-load-first");
        expect(_as_load_first).not.toBeUndefined();
        let _as_load_first_result = module.invoke(_as_load_first, 100);
        expect(_as_load_first_result).toBe(0);
    });

    _test("execution of nop_0: as-load-last (instance 0)", () => {
        let _as_load_last = module.getExport("as-load-last");
        expect(_as_load_last).not.toBeUndefined();
        let _as_load_last_result = module.invoke(_as_load_last, 100);
        expect(_as_load_last_result).toBe(0);
    });

    _test("execution of nop_0: as-load-everywhere (instance 0)", () => {
        let _as_load_everywhere = module.getExport("as-load-everywhere");
        expect(_as_load_everywhere).not.toBeUndefined();
        let _as_load_everywhere_result = module.invoke(_as_load_everywhere, 100);
        expect(_as_load_everywhere_result).toBe(0);
    });

    _test("execution of nop_0: as-store-first (instance 0)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first, 0, 1);
    });

    _test("execution of nop_0: as-store-mid (instance 0)", () => {
        let _as_store_mid = module.getExport("as-store-mid");
        expect(_as_store_mid).not.toBeUndefined();
        let _as_store_mid_result = module.invoke(_as_store_mid, 0, 2);
    });

    _test("execution of nop_0: as-store-last (instance 0)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last, 0, 3);
    });

    _test("execution of nop_0: as-store-everywhere (instance 0)", () => {
        let _as_store_everywhere = module.getExport("as-store-everywhere");
        expect(_as_store_everywhere).not.toBeUndefined();
        let _as_store_everywhere_result = module.invoke(_as_store_everywhere, 0, 4);
    });
});

describe("nop_1", () => {
    let _test = test;

    _test("execution of nop_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("nop_2", () => {
    let _test = test;

    _test("execution of nop_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("nop_3", () => {
    let _test = test;

    _test("execution of nop_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("nop_4", () => {
    let _test = test;

    _test("execution of nop_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
