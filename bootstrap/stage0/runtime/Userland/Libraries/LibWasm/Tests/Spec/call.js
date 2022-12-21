let globalImportObject = {};
let namedModules = {};

describe("call_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/call_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of call_0: type-i32 (instance 0)", () => {
        let _type_i32 = module.getExport("type-i32");
        expect(_type_i32).not.toBeUndefined();
        let _type_i32_result = module.invoke(_type_i32);
        expect(_type_i32_result).toBe(306);
    });

    _test("execution of call_0: type-i64 (instance 0)", () => {
        let _type_i64 = module.getExport("type-i64");
        expect(_type_i64).not.toBeUndefined();
        let _type_i64_result = module.invoke(_type_i64);
        expect(_type_i64_result).toBe(356n);
    });

    _test("execution of call_0: type-f32 (instance 0)", () => {
        let _type_f32 = module.getExport("type-f32");
        expect(_type_f32).not.toBeUndefined();
        let _type_f32_result = module.invoke(_type_f32);
        expect(_type_f32_result).toBe(3890.0);
    });

    _test("execution of call_0: type-f64 (instance 0)", () => {
        let _type_f64 = module.getExport("type-f64");
        expect(_type_f64).not.toBeUndefined();
        let _type_f64_result = module.invoke(_type_f64);
        expect(_type_f64_result).toBe(3940.0);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of call_0: <unknown> (instance 0)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of call_0: type-first-i32 (instance 0)", () => {
        let _type_first_i32 = module.getExport("type-first-i32");
        expect(_type_first_i32).not.toBeUndefined();
        let _type_first_i32_result = module.invoke(_type_first_i32);
        expect(_type_first_i32_result).toBe(32);
    });

    _test("execution of call_0: type-first-i64 (instance 0)", () => {
        let _type_first_i64 = module.getExport("type-first-i64");
        expect(_type_first_i64).not.toBeUndefined();
        let _type_first_i64_result = module.invoke(_type_first_i64);
        expect(_type_first_i64_result).toBe(64n);
    });

    _test("execution of call_0: type-first-f32 (instance 0)", () => {
        let _type_first_f32 = module.getExport("type-first-f32");
        expect(_type_first_f32).not.toBeUndefined();
        let _type_first_f32_result = module.invoke(_type_first_f32);
        expect(_type_first_f32_result).toBe(1.32);
    });

    _test("execution of call_0: type-first-f64 (instance 0)", () => {
        let _type_first_f64 = module.getExport("type-first-f64");
        expect(_type_first_f64).not.toBeUndefined();
        let _type_first_f64_result = module.invoke(_type_first_f64);
        expect(_type_first_f64_result).toBe(1.64);
    });

    _test("execution of call_0: type-second-i32 (instance 0)", () => {
        let _type_second_i32 = module.getExport("type-second-i32");
        expect(_type_second_i32).not.toBeUndefined();
        let _type_second_i32_result = module.invoke(_type_second_i32);
        expect(_type_second_i32_result).toBe(32);
    });

    _test("execution of call_0: type-second-i64 (instance 0)", () => {
        let _type_second_i64 = module.getExport("type-second-i64");
        expect(_type_second_i64).not.toBeUndefined();
        let _type_second_i64_result = module.invoke(_type_second_i64);
        expect(_type_second_i64_result).toBe(64n);
    });

    _test("execution of call_0: type-second-f32 (instance 0)", () => {
        let _type_second_f32 = module.getExport("type-second-f32");
        expect(_type_second_f32).not.toBeUndefined();
        let _type_second_f32_result = module.invoke(_type_second_f32);
        expect(_type_second_f32_result).toBe(32.0);
    });

    _test("execution of call_0: type-second-f64 (instance 0)", () => {
        let _type_second_f64 = module.getExport("type-second-f64");
        expect(_type_second_f64).not.toBeUndefined();
        let _type_second_f64_result = module.invoke(_type_second_f64);
        expect(_type_second_f64_result).toBe(64.1);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of call_0: <unknown> (instance 1)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of call_0: <unknown> (instance 2)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of call_0: <unknown> (instance 3)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of call_0: <unknown> (instance 4)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of call_0: as-binary-all-operands (instance 0)", () => {
        let _as_binary_all_operands = module.getExport("as-binary-all-operands");
        expect(_as_binary_all_operands).not.toBeUndefined();
        let _as_binary_all_operands_result = module.invoke(_as_binary_all_operands);
        expect(_as_binary_all_operands_result).toBe(7);
    });

    _test("execution of call_0: as-mixed-operands (instance 0)", () => {
        let _as_mixed_operands = module.getExport("as-mixed-operands");
        expect(_as_mixed_operands).not.toBeUndefined();
        let _as_mixed_operands_result = module.invoke(_as_mixed_operands);
        expect(_as_mixed_operands_result).toBe(32);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of call_0: <unknown> (instance 5)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of call_0: fac (instance 0)", () => {
        let _fac = module.getExport("fac");
        expect(_fac).not.toBeUndefined();
        let _fac_result = module.invoke(_fac, 0n);
        expect(_fac_result).toBe(1n);
    });

    _test("execution of call_0: fac (instance 1)", () => {
        let _fac = module.getExport("fac");
        expect(_fac).not.toBeUndefined();
        let _fac_result = module.invoke(_fac, 1n);
        expect(_fac_result).toBe(1n);
    });

    _test("execution of call_0: fac (instance 2)", () => {
        let _fac = module.getExport("fac");
        expect(_fac).not.toBeUndefined();
        let _fac_result = module.invoke(_fac, 5n);
        expect(_fac_result).toBe(120n);
    });

    _test("execution of call_0: fac (instance 3)", () => {
        let _fac = module.getExport("fac");
        expect(_fac).not.toBeUndefined();
        let _fac_result = module.invoke(_fac, 25n);
        expect(_fac_result).toBe(7034535277573963776n);
    });

    _test("execution of call_0: fac-acc (instance 0)", () => {
        let _fac_acc = module.getExport("fac-acc");
        expect(_fac_acc).not.toBeUndefined();
        let _fac_acc_result = module.invoke(_fac_acc, 0n, 1n);
        expect(_fac_acc_result).toBe(1n);
    });

    _test("execution of call_0: fac-acc (instance 1)", () => {
        let _fac_acc = module.getExport("fac-acc");
        expect(_fac_acc).not.toBeUndefined();
        let _fac_acc_result = module.invoke(_fac_acc, 1n, 1n);
        expect(_fac_acc_result).toBe(1n);
    });

    _test("execution of call_0: fac-acc (instance 2)", () => {
        let _fac_acc = module.getExport("fac-acc");
        expect(_fac_acc).not.toBeUndefined();
        let _fac_acc_result = module.invoke(_fac_acc, 5n, 1n);
        expect(_fac_acc_result).toBe(120n);
    });

    _test("execution of call_0: fac-acc (instance 3)", () => {
        let _fac_acc = module.getExport("fac-acc");
        expect(_fac_acc).not.toBeUndefined();
        let _fac_acc_result = module.invoke(_fac_acc, 25n, 1n);
        expect(_fac_acc_result).toBe(7034535277573963776n);
    });

    _test("execution of call_0: fib (instance 0)", () => {
        let _fib = module.getExport("fib");
        expect(_fib).not.toBeUndefined();
        let _fib_result = module.invoke(_fib, 0n);
        expect(_fib_result).toBe(1n);
    });

    _test("execution of call_0: fib (instance 1)", () => {
        let _fib = module.getExport("fib");
        expect(_fib).not.toBeUndefined();
        let _fib_result = module.invoke(_fib, 1n);
        expect(_fib_result).toBe(1n);
    });

    _test("execution of call_0: fib (instance 2)", () => {
        let _fib = module.getExport("fib");
        expect(_fib).not.toBeUndefined();
        let _fib_result = module.invoke(_fib, 2n);
        expect(_fib_result).toBe(2n);
    });

    _test("execution of call_0: fib (instance 3)", () => {
        let _fib = module.getExport("fib");
        expect(_fib).not.toBeUndefined();
        let _fib_result = module.invoke(_fib, 5n);
        expect(_fib_result).toBe(8n);
    });

    _test("execution of call_0: fib (instance 4)", () => {
        let _fib = module.getExport("fib");
        expect(_fib).not.toBeUndefined();
        let _fib_result = module.invoke(_fib, 20n);
        expect(_fib_result).toBe(10946n);
    });

    _test("execution of call_0: even (instance 0)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 0n);
        expect(_even_result).toBe(44);
    });

    _test("execution of call_0: even (instance 1)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 1n);
        expect(_even_result).toBe(99);
    });

    _test("execution of call_0: even (instance 2)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 100n);
        expect(_even_result).toBe(44);
    });

    _test("execution of call_0: even (instance 3)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 77n);
        expect(_even_result).toBe(99);
    });

    _test("execution of call_0: odd (instance 0)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 0n);
        expect(_odd_result).toBe(99);
    });

    _test("execution of call_0: odd (instance 1)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 1n);
        expect(_odd_result).toBe(44);
    });

    _test("execution of call_0: odd (instance 2)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 200n);
        expect(_odd_result).toBe(99);
    });

    _test("execution of call_0: odd (instance 3)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 77n);
        expect(_odd_result).toBe(44);
    });

    _test("execution of call_0: runaway (instance 0)", () => {
        let _runaway = module.getExport("runaway");
        expect(_runaway).not.toBeUndefined();
        expect(() => module.invoke(_runaway).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_0: mutual-runaway (instance 0)", () => {
        let _mutual_runaway = module.getExport("mutual-runaway");
        expect(_mutual_runaway).not.toBeUndefined();
        expect(() => module.invoke(_mutual_runaway).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first);
        expect(_as_select_first_result).toBe(306);
    });

    _test("execution of call_0: as-select-mid (instance 0)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of call_0: as-select-last (instance 0)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last);
        expect(_as_select_last_result).toBe(2);
    });

    _test("execution of call_0: as-if-condition (instance 0)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition);
        expect(_as_if_condition_result).toBe(1);
    });

    _test("execution of call_0: as-br_if-first (instance 0)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first);
        expect(_as_br_if_first_result).toBe(306);
    });

    _test("execution of call_0: as-br_if-last (instance 0)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last);
        expect(_as_br_if_last_result).toBe(2);
    });

    _test("execution of call_0: as-br_table-first (instance 0)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first);
        expect(_as_br_table_first_result).toBe(306);
    });

    _test("execution of call_0: as-br_table-last (instance 0)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of call_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first);
        expect(_as_call_indirect_first_result).toBe(306);
    });

    _test("execution of call_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid);
        expect(_as_call_indirect_mid_result).toBe(2);
    });

    _test("execution of call_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        expect(() => module.invoke(_as_call_indirect_last).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of call_0: as-store-first (instance 0)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first);
    });

    _test("execution of call_0: as-store-last (instance 0)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last);
    });

    _test("execution of call_0: as-memory.grow-value (instance 0)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value);
        expect(_as_memory_grow_value_result).toBe(1);
    });

    _test("execution of call_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
        expect(_as_return_value_result).toBe(306);
    });

    _test("execution of call_0: as-drop-operand (instance 0)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand);
    });

    _test("execution of call_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(306);
    });

    _test("execution of call_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value);
        expect(_as_local_set_value_result).toBe(306);
    });

    _test("execution of call_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value);
        expect(_as_local_tee_value_result).toBe(306);
    });

    _test("execution of call_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value);
        expect(_as_global_set_value_result).toBe(306);
    });

    _test("execution of call_0: as-load-operand (instance 0)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand);
        expect(_as_load_operand_result).toBe(1);
    });

    _test("execution of call_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand);
        expect(_as_unary_operand_result).toBe(0.0);
    });

    _test("execution of call_0: as-binary-left (instance 0)", () => {
        let _as_binary_left = module.getExport("as-binary-left");
        expect(_as_binary_left).not.toBeUndefined();
        let _as_binary_left_result = module.invoke(_as_binary_left);
        expect(_as_binary_left_result).toBe(11);
    });

    _test("execution of call_0: as-binary-right (instance 0)", () => {
        let _as_binary_right = module.getExport("as-binary-right");
        expect(_as_binary_right).not.toBeUndefined();
        let _as_binary_right_result = module.invoke(_as_binary_right);
        expect(_as_binary_right_result).toBe(9);
    });

    _test("execution of call_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand);
        expect(_as_test_operand_result).toBe(0);
    });

    _test("execution of call_0: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left);
        expect(_as_compare_left_result).toBe(1);
    });

    _test("execution of call_0: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right);
        expect(_as_compare_right_result).toBe(1);
    });

    _test("execution of call_0: as-convert-operand (instance 0)", () => {
        let _as_convert_operand = module.getExport("as-convert-operand");
        expect(_as_convert_operand).not.toBeUndefined();
        let _as_convert_operand_result = module.invoke(_as_convert_operand);
        expect(_as_convert_operand_result).toBe(1n);
    });

    _test("execution of call_0: return-from-long-argument-list (instance 0)", () => {
        let _return_from_long_argument_list = module.getExport("return-from-long-argument-list");
        expect(_return_from_long_argument_list).not.toBeUndefined();
        let _return_from_long_argument_list_result = module.invoke(
            _return_from_long_argument_list,
            42
        );
        expect(_return_from_long_argument_list_result).toBe(42);
    });
});

describe("call_1", () => {
    let _test = test;

    _test("execution of call_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_2", () => {
    let _test = test;

    _test("execution of call_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_3", () => {
    let _test = test;

    _test("execution of call_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_4", () => {
    let _test = test;

    _test("execution of call_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_5", () => {
    let _test = test;

    _test("execution of call_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_6", () => {
    let _test = test;

    _test("execution of call_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_7", () => {
    let _test = test;

    _test("execution of call_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_8", () => {
    let _test = test;

    _test("execution of call_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_9", () => {
    let _test = test;

    _test("execution of call_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_10", () => {
    let _test = test;

    _test("execution of call_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_11", () => {
    let _test = test;

    _test("execution of call_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_12", () => {
    let _test = test;

    _test("execution of call_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_13", () => {
    let _test = test;

    _test("execution of call_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_14", () => {
    let _test = test;

    _test("execution of call_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_15", () => {
    let _test = test;

    _test("execution of call_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_16", () => {
    let _test = test;

    _test("execution of call_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_17", () => {
    let _test = test;

    _test("execution of call_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("call_18", () => {
    let _test = test;

    _test("execution of call_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
