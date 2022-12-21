let globalImportObject = {};
let namedModules = {};

describe("func_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/func_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of func_0: type-use-1 (instance 0)", () => {
        let _type_use_1 = module.getExport("type-use-1");
        expect(_type_use_1).not.toBeUndefined();
        let _type_use_1_result = module.invoke(_type_use_1);
    });

    _test("execution of func_0: type-use-2 (instance 0)", () => {
        let _type_use_2 = module.getExport("type-use-2");
        expect(_type_use_2).not.toBeUndefined();
        let _type_use_2_result = module.invoke(_type_use_2);
        expect(_type_use_2_result).toBe(0);
    });

    _test("execution of func_0: type-use-3 (instance 0)", () => {
        let _type_use_3 = module.getExport("type-use-3");
        expect(_type_use_3).not.toBeUndefined();
        let _type_use_3_result = module.invoke(_type_use_3, 1);
    });

    _test("execution of func_0: type-use-4 (instance 0)", () => {
        let _type_use_4 = module.getExport("type-use-4");
        expect(_type_use_4).not.toBeUndefined();
        let _type_use_4_result = module.invoke(_type_use_4, 1, 1.0, 1);
        expect(_type_use_4_result).toBe(0);
    });

    _test("execution of func_0: type-use-5 (instance 0)", () => {
        let _type_use_5 = module.getExport("type-use-5");
        expect(_type_use_5).not.toBeUndefined();
        let _type_use_5_result = module.invoke(_type_use_5);
        expect(_type_use_5_result).toBe(0);
    });

    _test("execution of func_0: type-use-6 (instance 0)", () => {
        let _type_use_6 = module.getExport("type-use-6");
        expect(_type_use_6).not.toBeUndefined();
        let _type_use_6_result = module.invoke(_type_use_6, 1);
    });

    _test("execution of func_0: type-use-7 (instance 0)", () => {
        let _type_use_7 = module.getExport("type-use-7");
        expect(_type_use_7).not.toBeUndefined();
        let _type_use_7_result = module.invoke(_type_use_7, 1, 1.0, 1);
        expect(_type_use_7_result).toBe(0);
    });

    _test("execution of func_0: local-first-i32 (instance 0)", () => {
        let _local_first_i32 = module.getExport("local-first-i32");
        expect(_local_first_i32).not.toBeUndefined();
        let _local_first_i32_result = module.invoke(_local_first_i32);
        expect(_local_first_i32_result).toBe(0);
    });

    _test("execution of func_0: local-first-i64 (instance 0)", () => {
        let _local_first_i64 = module.getExport("local-first-i64");
        expect(_local_first_i64).not.toBeUndefined();
        let _local_first_i64_result = module.invoke(_local_first_i64);
        expect(_local_first_i64_result).toBe(0n);
    });

    _test("execution of func_0: local-first-f32 (instance 0)", () => {
        let _local_first_f32 = module.getExport("local-first-f32");
        expect(_local_first_f32).not.toBeUndefined();
        let _local_first_f32_result = module.invoke(_local_first_f32);
        expect(_local_first_f32_result).toBe(0.0);
    });

    _test("execution of func_0: local-first-f64 (instance 0)", () => {
        let _local_first_f64 = module.getExport("local-first-f64");
        expect(_local_first_f64).not.toBeUndefined();
        let _local_first_f64_result = module.invoke(_local_first_f64);
        expect(_local_first_f64_result).toBe(0.0);
    });

    _test("execution of func_0: local-second-i32 (instance 0)", () => {
        let _local_second_i32 = module.getExport("local-second-i32");
        expect(_local_second_i32).not.toBeUndefined();
        let _local_second_i32_result = module.invoke(_local_second_i32);
        expect(_local_second_i32_result).toBe(0);
    });

    _test("execution of func_0: local-second-i64 (instance 0)", () => {
        let _local_second_i64 = module.getExport("local-second-i64");
        expect(_local_second_i64).not.toBeUndefined();
        let _local_second_i64_result = module.invoke(_local_second_i64);
        expect(_local_second_i64_result).toBe(0n);
    });

    _test("execution of func_0: local-second-f32 (instance 0)", () => {
        let _local_second_f32 = module.getExport("local-second-f32");
        expect(_local_second_f32).not.toBeUndefined();
        let _local_second_f32_result = module.invoke(_local_second_f32);
        expect(_local_second_f32_result).toBe(0.0);
    });

    _test("execution of func_0: local-second-f64 (instance 0)", () => {
        let _local_second_f64 = module.getExport("local-second-f64");
        expect(_local_second_f64).not.toBeUndefined();
        let _local_second_f64_result = module.invoke(_local_second_f64);
        expect(_local_second_f64_result).toBe(0.0);
    });

    _test("execution of func_0: local-mixed (instance 0)", () => {
        let _local_mixed = module.getExport("local-mixed");
        expect(_local_mixed).not.toBeUndefined();
        let _local_mixed_result = module.invoke(_local_mixed);
        expect(_local_mixed_result).toBe(0.0);
    });

    _test("execution of func_0: param-first-i32 (instance 0)", () => {
        let _param_first_i32 = module.getExport("param-first-i32");
        expect(_param_first_i32).not.toBeUndefined();
        let _param_first_i32_result = module.invoke(_param_first_i32, 2, 3);
        expect(_param_first_i32_result).toBe(2);
    });

    _test("execution of func_0: param-first-i64 (instance 0)", () => {
        let _param_first_i64 = module.getExport("param-first-i64");
        expect(_param_first_i64).not.toBeUndefined();
        let _param_first_i64_result = module.invoke(_param_first_i64, 2n, 3n);
        expect(_param_first_i64_result).toBe(2n);
    });

    _test("execution of func_0: param-first-f32 (instance 0)", () => {
        let _param_first_f32 = module.getExport("param-first-f32");
        expect(_param_first_f32).not.toBeUndefined();
        let _param_first_f32_result = module.invoke(_param_first_f32, 2.0, 3.0);
        expect(_param_first_f32_result).toBe(2.0);
    });

    _test("execution of func_0: param-first-f64 (instance 0)", () => {
        let _param_first_f64 = module.getExport("param-first-f64");
        expect(_param_first_f64).not.toBeUndefined();
        let _param_first_f64_result = module.invoke(_param_first_f64, 2.0, 3.0);
        expect(_param_first_f64_result).toBe(2.0);
    });

    _test("execution of func_0: param-second-i32 (instance 0)", () => {
        let _param_second_i32 = module.getExport("param-second-i32");
        expect(_param_second_i32).not.toBeUndefined();
        let _param_second_i32_result = module.invoke(_param_second_i32, 2, 3);
        expect(_param_second_i32_result).toBe(3);
    });

    _test("execution of func_0: param-second-i64 (instance 0)", () => {
        let _param_second_i64 = module.getExport("param-second-i64");
        expect(_param_second_i64).not.toBeUndefined();
        let _param_second_i64_result = module.invoke(_param_second_i64, 2n, 3n);
        expect(_param_second_i64_result).toBe(3n);
    });

    _test("execution of func_0: param-second-f32 (instance 0)", () => {
        let _param_second_f32 = module.getExport("param-second-f32");
        expect(_param_second_f32).not.toBeUndefined();
        let _param_second_f32_result = module.invoke(_param_second_f32, 2.0, 3.0);
        expect(_param_second_f32_result).toBe(3.0);
    });

    _test("execution of func_0: param-second-f64 (instance 0)", () => {
        let _param_second_f64 = module.getExport("param-second-f64");
        expect(_param_second_f64).not.toBeUndefined();
        let _param_second_f64_result = module.invoke(_param_second_f64, 2.0, 3.0);
        expect(_param_second_f64_result).toBe(3.0);
    });

    _test("execution of func_0: param-mixed (instance 0)", () => {
        let _param_mixed = module.getExport("param-mixed");
        expect(_param_mixed).not.toBeUndefined();
        let _param_mixed_result = module.invoke(_param_mixed, 1.0, 2, 3n, 4, 5.5, 6);
        expect(_param_mixed_result).toBe(5.5);
    });

    _test("execution of func_0: empty (instance 0)", () => {
        let _empty = module.getExport("empty");
        expect(_empty).not.toBeUndefined();
        let _empty_result = module.invoke(_empty);
    });

    _test("execution of func_0: value-void (instance 0)", () => {
        let _value_void = module.getExport("value-void");
        expect(_value_void).not.toBeUndefined();
        let _value_void_result = module.invoke(_value_void);
    });

    _test("execution of func_0: value-i32 (instance 0)", () => {
        let _value_i32 = module.getExport("value-i32");
        expect(_value_i32).not.toBeUndefined();
        let _value_i32_result = module.invoke(_value_i32);
        expect(_value_i32_result).toBe(77);
    });

    _test("execution of func_0: value-i64 (instance 0)", () => {
        let _value_i64 = module.getExport("value-i64");
        expect(_value_i64).not.toBeUndefined();
        let _value_i64_result = module.invoke(_value_i64);
        expect(_value_i64_result).toBe(7777n);
    });

    _test("execution of func_0: value-f32 (instance 0)", () => {
        let _value_f32 = module.getExport("value-f32");
        expect(_value_f32).not.toBeUndefined();
        let _value_f32_result = module.invoke(_value_f32);
        expect(_value_f32_result).toBe(77.7);
    });

    _test("execution of func_0: value-f64 (instance 0)", () => {
        let _value_f64 = module.getExport("value-f64");
        expect(_value_f64).not.toBeUndefined();
        let _value_f64_result = module.invoke(_value_f64);
        expect(_value_f64_result).toBe(77.77);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 0)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 1)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: value-block-void (instance 0)", () => {
        let _value_block_void = module.getExport("value-block-void");
        expect(_value_block_void).not.toBeUndefined();
        let _value_block_void_result = module.invoke(_value_block_void);
    });

    _test("execution of func_0: value-block-i32 (instance 0)", () => {
        let _value_block_i32 = module.getExport("value-block-i32");
        expect(_value_block_i32).not.toBeUndefined();
        let _value_block_i32_result = module.invoke(_value_block_i32);
        expect(_value_block_i32_result).toBe(77);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 2)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: return-empty (instance 0)", () => {
        let _return_empty = module.getExport("return-empty");
        expect(_return_empty).not.toBeUndefined();
        let _return_empty_result = module.invoke(_return_empty);
    });

    _test("execution of func_0: return-i32 (instance 0)", () => {
        let _return_i32 = module.getExport("return-i32");
        expect(_return_i32).not.toBeUndefined();
        let _return_i32_result = module.invoke(_return_i32);
        expect(_return_i32_result).toBe(78);
    });

    _test("execution of func_0: return-i64 (instance 0)", () => {
        let _return_i64 = module.getExport("return-i64");
        expect(_return_i64).not.toBeUndefined();
        let _return_i64_result = module.invoke(_return_i64);
        expect(_return_i64_result).toBe(7878n);
    });

    _test("execution of func_0: return-f32 (instance 0)", () => {
        let _return_f32 = module.getExport("return-f32");
        expect(_return_f32).not.toBeUndefined();
        let _return_f32_result = module.invoke(_return_f32);
        expect(_return_f32_result).toBe(78.7);
    });

    _test("execution of func_0: return-f64 (instance 0)", () => {
        let _return_f64 = module.getExport("return-f64");
        expect(_return_f64).not.toBeUndefined();
        let _return_f64_result = module.invoke(_return_f64);
        expect(_return_f64_result).toBe(78.78);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 3)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 4)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: return-block-i32 (instance 0)", () => {
        let _return_block_i32 = module.getExport("return-block-i32");
        expect(_return_block_i32).not.toBeUndefined();
        let _return_block_i32_result = module.invoke(_return_block_i32);
        expect(_return_block_i32_result).toBe(77);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 5)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: break-empty (instance 0)", () => {
        let _break_empty = module.getExport("break-empty");
        expect(_break_empty).not.toBeUndefined();
        let _break_empty_result = module.invoke(_break_empty);
    });

    _test("execution of func_0: break-i32 (instance 0)", () => {
        let _break_i32 = module.getExport("break-i32");
        expect(_break_i32).not.toBeUndefined();
        let _break_i32_result = module.invoke(_break_i32);
        expect(_break_i32_result).toBe(79);
    });

    _test("execution of func_0: break-i64 (instance 0)", () => {
        let _break_i64 = module.getExport("break-i64");
        expect(_break_i64).not.toBeUndefined();
        let _break_i64_result = module.invoke(_break_i64);
        expect(_break_i64_result).toBe(7979n);
    });

    _test("execution of func_0: break-f32 (instance 0)", () => {
        let _break_f32 = module.getExport("break-f32");
        expect(_break_f32).not.toBeUndefined();
        let _break_f32_result = module.invoke(_break_f32);
        expect(_break_f32_result).toBe(79.9);
    });

    _test("execution of func_0: break-f64 (instance 0)", () => {
        let _break_f64 = module.getExport("break-f64");
        expect(_break_f64).not.toBeUndefined();
        let _break_f64_result = module.invoke(_break_f64);
        expect(_break_f64_result).toBe(79.79);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 6)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 7)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: break-block-i32 (instance 0)", () => {
        let _break_block_i32 = module.getExport("break-block-i32");
        expect(_break_block_i32).not.toBeUndefined();
        let _break_block_i32_result = module.invoke(_break_block_i32);
        expect(_break_block_i32_result).toBe(77);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 8)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: break-br_if-empty (instance 0)", () => {
        let _break_br_if_empty = module.getExport("break-br_if-empty");
        expect(_break_br_if_empty).not.toBeUndefined();
        let _break_br_if_empty_result = module.invoke(_break_br_if_empty, 0);
    });

    _test("execution of func_0: break-br_if-empty (instance 1)", () => {
        let _break_br_if_empty = module.getExport("break-br_if-empty");
        expect(_break_br_if_empty).not.toBeUndefined();
        let _break_br_if_empty_result = module.invoke(_break_br_if_empty, 2);
    });

    _test("execution of func_0: break-br_if-num (instance 0)", () => {
        let _break_br_if_num = module.getExport("break-br_if-num");
        expect(_break_br_if_num).not.toBeUndefined();
        let _break_br_if_num_result = module.invoke(_break_br_if_num, 0);
        expect(_break_br_if_num_result).toBe(51);
    });

    _test("execution of func_0: break-br_if-num (instance 1)", () => {
        let _break_br_if_num = module.getExport("break-br_if-num");
        expect(_break_br_if_num).not.toBeUndefined();
        let _break_br_if_num_result = module.invoke(_break_br_if_num, 1);
        expect(_break_br_if_num_result).toBe(50);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 9)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 10)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: break-br_table-empty (instance 0)", () => {
        let _break_br_table_empty = module.getExport("break-br_table-empty");
        expect(_break_br_table_empty).not.toBeUndefined();
        let _break_br_table_empty_result = module.invoke(_break_br_table_empty, 0);
    });

    _test("execution of func_0: break-br_table-empty (instance 1)", () => {
        let _break_br_table_empty = module.getExport("break-br_table-empty");
        expect(_break_br_table_empty).not.toBeUndefined();
        let _break_br_table_empty_result = module.invoke(_break_br_table_empty, 1);
    });

    _test("execution of func_0: break-br_table-empty (instance 2)", () => {
        let _break_br_table_empty = module.getExport("break-br_table-empty");
        expect(_break_br_table_empty).not.toBeUndefined();
        let _break_br_table_empty_result = module.invoke(_break_br_table_empty, 5);
    });

    _test("execution of func_0: break-br_table-empty (instance 3)", () => {
        let _break_br_table_empty = module.getExport("break-br_table-empty");
        expect(_break_br_table_empty).not.toBeUndefined();
        let _break_br_table_empty_result = module.invoke(_break_br_table_empty, -1);
    });

    _test("execution of func_0: break-br_table-num (instance 0)", () => {
        let _break_br_table_num = module.getExport("break-br_table-num");
        expect(_break_br_table_num).not.toBeUndefined();
        let _break_br_table_num_result = module.invoke(_break_br_table_num, 0);
        expect(_break_br_table_num_result).toBe(50);
    });

    _test("execution of func_0: break-br_table-num (instance 1)", () => {
        let _break_br_table_num = module.getExport("break-br_table-num");
        expect(_break_br_table_num).not.toBeUndefined();
        let _break_br_table_num_result = module.invoke(_break_br_table_num, 1);
        expect(_break_br_table_num_result).toBe(50);
    });

    _test("execution of func_0: break-br_table-num (instance 2)", () => {
        let _break_br_table_num = module.getExport("break-br_table-num");
        expect(_break_br_table_num).not.toBeUndefined();
        let _break_br_table_num_result = module.invoke(_break_br_table_num, 10);
        expect(_break_br_table_num_result).toBe(50);
    });

    _test("execution of func_0: break-br_table-num (instance 3)", () => {
        let _break_br_table_num = module.getExport("break-br_table-num");
        expect(_break_br_table_num).not.toBeUndefined();
        let _break_br_table_num_result = module.invoke(_break_br_table_num, -100);
        expect(_break_br_table_num_result).toBe(50);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 11)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 12)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 13)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 14)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: break-br_table-nested-empty (instance 0)", () => {
        let _break_br_table_nested_empty = module.getExport("break-br_table-nested-empty");
        expect(_break_br_table_nested_empty).not.toBeUndefined();
        let _break_br_table_nested_empty_result = module.invoke(_break_br_table_nested_empty, 0);
    });

    _test("execution of func_0: break-br_table-nested-empty (instance 1)", () => {
        let _break_br_table_nested_empty = module.getExport("break-br_table-nested-empty");
        expect(_break_br_table_nested_empty).not.toBeUndefined();
        let _break_br_table_nested_empty_result = module.invoke(_break_br_table_nested_empty, 1);
    });

    _test("execution of func_0: break-br_table-nested-empty (instance 2)", () => {
        let _break_br_table_nested_empty = module.getExport("break-br_table-nested-empty");
        expect(_break_br_table_nested_empty).not.toBeUndefined();
        let _break_br_table_nested_empty_result = module.invoke(_break_br_table_nested_empty, 3);
    });

    _test("execution of func_0: break-br_table-nested-empty (instance 3)", () => {
        let _break_br_table_nested_empty = module.getExport("break-br_table-nested-empty");
        expect(_break_br_table_nested_empty).not.toBeUndefined();
        let _break_br_table_nested_empty_result = module.invoke(_break_br_table_nested_empty, -2);
    });

    _test("execution of func_0: break-br_table-nested-num (instance 0)", () => {
        let _break_br_table_nested_num = module.getExport("break-br_table-nested-num");
        expect(_break_br_table_nested_num).not.toBeUndefined();
        let _break_br_table_nested_num_result = module.invoke(_break_br_table_nested_num, 0);
        expect(_break_br_table_nested_num_result).toBe(52);
    });

    _test("execution of func_0: break-br_table-nested-num (instance 1)", () => {
        let _break_br_table_nested_num = module.getExport("break-br_table-nested-num");
        expect(_break_br_table_nested_num).not.toBeUndefined();
        let _break_br_table_nested_num_result = module.invoke(_break_br_table_nested_num, 1);
        expect(_break_br_table_nested_num_result).toBe(50);
    });

    _test("execution of func_0: break-br_table-nested-num (instance 2)", () => {
        let _break_br_table_nested_num = module.getExport("break-br_table-nested-num");
        expect(_break_br_table_nested_num).not.toBeUndefined();
        let _break_br_table_nested_num_result = module.invoke(_break_br_table_nested_num, 2);
        expect(_break_br_table_nested_num_result).toBe(52);
    });

    _test("execution of func_0: break-br_table-nested-num (instance 3)", () => {
        let _break_br_table_nested_num = module.getExport("break-br_table-nested-num");
        expect(_break_br_table_nested_num).not.toBeUndefined();
        let _break_br_table_nested_num_result = module.invoke(_break_br_table_nested_num, -3);
        expect(_break_br_table_nested_num_result).toBe(52);
    });

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 15)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 16)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 17)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 18)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command assert_return */ _test.skip(
        "execution of func_0: <unknown> (instance 19)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    _test("execution of func_0: init-local-i32 (instance 0)", () => {
        let _init_local_i32 = module.getExport("init-local-i32");
        expect(_init_local_i32).not.toBeUndefined();
        let _init_local_i32_result = module.invoke(_init_local_i32);
        expect(_init_local_i32_result).toBe(0);
    });

    _test("execution of func_0: init-local-i64 (instance 0)", () => {
        let _init_local_i64 = module.getExport("init-local-i64");
        expect(_init_local_i64).not.toBeUndefined();
        let _init_local_i64_result = module.invoke(_init_local_i64);
        expect(_init_local_i64_result).toBe(0n);
    });

    _test("execution of func_0: init-local-f32 (instance 0)", () => {
        let _init_local_f32 = module.getExport("init-local-f32");
        expect(_init_local_f32).not.toBeUndefined();
        let _init_local_f32_result = module.invoke(_init_local_f32);
        expect(_init_local_f32_result).toBe(0.0);
    });

    _test("execution of func_0: init-local-f64 (instance 0)", () => {
        let _init_local_f64 = module.getExport("init-local-f64");
        expect(_init_local_f64).not.toBeUndefined();
        let _init_local_f64_result = module.invoke(_init_local_f64);
        expect(_init_local_f64_result).toBe(0.0);
    });
});

describe("func_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/func_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("func_2", () => {
    let _test = test;

    _test("execution of func_2: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_3", () => {
    let _test = test;

    _test("execution of func_3: _inline_test_1 (instance 0)", () => {});
});

describe("func_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/func_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of func_4: f (instance 0)", () => {
        let _f = module.getExport("f");
        expect(_f).not.toBeUndefined();
        let _f_result = module.invoke(_f, 42);
        expect(_f_result).toBe(0);
    });

    _test("execution of func_4: g (instance 0)", () => {
        let _g = module.getExport("g");
        expect(_g).not.toBeUndefined();
        let _g_result = module.invoke(_g, 42);
        expect(_g_result).toBe(0);
    });

    _test("execution of func_4: p (instance 0)", () => {
        let _p = module.getExport("p");
        expect(_p).not.toBeUndefined();
        let _p_result = module.invoke(_p);
        expect(_p_result).toBe(42);
    });
});

describe("func_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/func_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of func_5: signature-explicit-reused (instance 0)", () => {
        let _signature_explicit_reused = module.getExport("signature-explicit-reused");
        expect(_signature_explicit_reused).not.toBeUndefined();
        let _signature_explicit_reused_result = module.invoke(_signature_explicit_reused);
    });

    _test("execution of func_5: signature-implicit-reused (instance 0)", () => {
        let _signature_implicit_reused = module.getExport("signature-implicit-reused");
        expect(_signature_implicit_reused).not.toBeUndefined();
        let _signature_implicit_reused_result = module.invoke(_signature_implicit_reused);
    });

    _test("execution of func_5: signature-explicit-duplicate (instance 0)", () => {
        let _signature_explicit_duplicate = module.getExport("signature-explicit-duplicate");
        expect(_signature_explicit_duplicate).not.toBeUndefined();
        let _signature_explicit_duplicate_result = module.invoke(_signature_explicit_duplicate);
    });

    _test("execution of func_5: signature-implicit-duplicate (instance 0)", () => {
        let _signature_implicit_duplicate = module.getExport("signature-implicit-duplicate");
        expect(_signature_implicit_duplicate).not.toBeUndefined();
        let _signature_implicit_duplicate_result = module.invoke(_signature_implicit_duplicate);
    });
});

describe("func_6", () => {
    let _test = test;

    _test("execution of func_6: _inline_test_2 (instance 0)", () => {});
});

describe("func_7", () => {
    let _test = test;

    _test("execution of func_7: _inline_test_3 (instance 0)", () => {});
});

describe("func_8", () => {
    let _test = test;

    _test("execution of func_8: _inline_test_4 (instance 0)", () => {});
});

describe("func_9", () => {
    let _test = test;

    _test("execution of func_9: _inline_test_5 (instance 0)", () => {});
});

describe("func_10", () => {
    let _test = test;

    _test("execution of func_10: _inline_test_6 (instance 0)", () => {});
});

describe("func_11", () => {
    let _test = test;

    _test("execution of func_11: _inline_test_7 (instance 0)", () => {});
});

describe("func_12", () => {
    let _test = test;

    _test("execution of func_12: _inline_test_8 (instance 0)", () => {});
});

describe("func_13", () => {
    let _test = test;

    _test("execution of func_13: _inline_test_9 (instance 0)", () => {});
});

describe("func_14", () => {
    let _test = test;

    _test("execution of func_14: _inline_test_10 (instance 0)", () => {});
});

describe("func_15", () => {
    let _test = test;

    _test("execution of func_15: _inline_test_11 (instance 0)", () => {});
});

describe("func_16", () => {
    let _test = test;

    _test("execution of func_16: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_17", () => {
    let _test = test;

    _test("execution of func_17: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_18", () => {
    let _test = test;

    _test("execution of func_18: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_19", () => {
    let _test = test;

    _test("execution of func_19: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_20", () => {
    let _test = test;

    _test("execution of func_20: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_21", () => {
    let _test = test;

    _test("execution of func_21: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_22", () => {
    let _test = test;

    _test("execution of func_22: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_23", () => {
    let _test = test;

    _test("execution of func_23: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_24", () => {
    let _test = test;

    _test("execution of func_24: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_25", () => {
    let _test = test;

    _test("execution of func_25: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_26", () => {
    let _test = test;

    _test("execution of func_26: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_27", () => {
    let _test = test;

    _test("execution of func_27: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_28", () => {
    let _test = test;

    _test("execution of func_28: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_29", () => {
    let _test = test;

    _test("execution of func_29: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_30", () => {
    let _test = test;

    _test("execution of func_30: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_31", () => {
    let _test = test;

    _test("execution of func_31: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_32", () => {
    let _test = test;

    _test("execution of func_32: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_33", () => {
    let _test = test;

    _test("execution of func_33: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_34", () => {
    let _test = test;

    _test("execution of func_34: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_35", () => {
    let _test = test;

    _test("execution of func_35: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_36", () => {
    let _test = test;

    _test("execution of func_36: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_37", () => {
    let _test = test;

    _test("execution of func_37: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_38", () => {
    let _test = test;

    _test("execution of func_38: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_39", () => {
    let _test = test;

    _test("execution of func_39: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_40", () => {
    let _test = test;

    _test("execution of func_40: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_41", () => {
    let _test = test;

    _test("execution of func_41: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_42", () => {
    let _test = test;

    _test("execution of func_42: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_43", () => {
    let _test = test;

    _test("execution of func_43: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_44", () => {
    let _test = test;

    _test("execution of func_44: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_45", () => {
    let _test = test;

    _test("execution of func_45: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_46", () => {
    let _test = test;

    _test("execution of func_46: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_47", () => {
    let _test = test;

    _test("execution of func_47: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_48", () => {
    let _test = test;

    _test("execution of func_48: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_49", () => {
    let _test = test;

    _test("execution of func_49: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_50", () => {
    let _test = test;

    _test("execution of func_50: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_51", () => {
    let _test = test;

    _test("execution of func_51: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_52", () => {
    let _test = test;

    _test("execution of func_52: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_53", () => {
    let _test = test;

    _test("execution of func_53: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_54", () => {
    let _test = test;

    _test("execution of func_54: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_55", () => {
    let _test = test;

    _test("execution of func_55: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_56", () => {
    let _test = test;

    _test("execution of func_56: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_57", () => {
    let _test = test;

    _test("execution of func_57: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_58", () => {
    let _test = test;

    _test("execution of func_58: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_59", () => {
    let _test = test;

    _test("execution of func_59: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_60", () => {
    let _test = test;

    _test("execution of func_60: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_61", () => {
    let _test = test;

    _test("execution of func_61: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_62", () => {
    let _test = test;

    _test("execution of func_62: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_63", () => {
    let _test = test;

    _test("execution of func_63: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_64", () => {
    let _test = test;

    _test("execution of func_64: _inline_test_60 (instance 0)", () => {});
});

describe("func_65", () => {
    let _test = test;

    _test("execution of func_65: _inline_test_61 (instance 0)", () => {});
});

describe("func_66", () => {
    let _test = test;

    _test("execution of func_66: _inline_test_62 (instance 0)", () => {});
});

describe("func_67", () => {
    let _test = test;

    _test("execution of func_67: _inline_test_63 (instance 0)", () => {});
});

describe("func_68", () => {
    let _test = test;

    _test("execution of func_68: _inline_test_64 (instance 0)", () => {});
});

describe("func_69", () => {
    let _test = test;

    _test("execution of func_69: _inline_test_65 (instance 0)", () => {});
});

describe("func_70", () => {
    let _test = test;

    _test("execution of func_70: _inline_test_66 (instance 0)", () => {});
});

describe("func_71", () => {
    let _test = test;

    _test("execution of func_71: _inline_test_67 (instance 0)", () => {});
});

describe("func_72", () => {
    let _test = test;

    _test("execution of func_72: _inline_test_68 (instance 0)", () => {});
});

describe("func_73", () => {
    let _test = test;

    _test("execution of func_73: _inline_test_69 (instance 0)", () => {});
});

describe("func_74", () => {
    let _test = test;

    _test("execution of func_74: _inline_test_70 (instance 0)", () => {});
});

describe("func_75", () => {
    let _test = test;

    _test("execution of func_75: _inline_test_71 (instance 0)", () => {});
});
