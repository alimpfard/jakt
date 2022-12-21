let globalImportObject = {};
let namedModules = {};

describe("unwind_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/unwind_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of unwind_0: func-unwind-by-unreachable (instance 0)", () => {
        let _func_unwind_by_unreachable = module.getExport("func-unwind-by-unreachable");
        expect(_func_unwind_by_unreachable).not.toBeUndefined();
        expect(() =>
            module.invoke(_func_unwind_by_unreachable).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: func-unwind-by-br (instance 0)", () => {
        let _func_unwind_by_br = module.getExport("func-unwind-by-br");
        expect(_func_unwind_by_br).not.toBeUndefined();
        let _func_unwind_by_br_result = module.invoke(_func_unwind_by_br);
    });

    _test("execution of unwind_0: func-unwind-by-br-value (instance 0)", () => {
        let _func_unwind_by_br_value = module.getExport("func-unwind-by-br-value");
        expect(_func_unwind_by_br_value).not.toBeUndefined();
        let _func_unwind_by_br_value_result = module.invoke(_func_unwind_by_br_value);
        expect(_func_unwind_by_br_value_result).toBe(9);
    });

    _test("execution of unwind_0: func-unwind-by-br_if (instance 0)", () => {
        let _func_unwind_by_br_if = module.getExport("func-unwind-by-br_if");
        expect(_func_unwind_by_br_if).not.toBeUndefined();
        let _func_unwind_by_br_if_result = module.invoke(_func_unwind_by_br_if);
    });

    _test("execution of unwind_0: func-unwind-by-br_if-value (instance 0)", () => {
        let _func_unwind_by_br_if_value = module.getExport("func-unwind-by-br_if-value");
        expect(_func_unwind_by_br_if_value).not.toBeUndefined();
        let _func_unwind_by_br_if_value_result = module.invoke(_func_unwind_by_br_if_value);
        expect(_func_unwind_by_br_if_value_result).toBe(9);
    });

    _test("execution of unwind_0: func-unwind-by-br_table (instance 0)", () => {
        let _func_unwind_by_br_table = module.getExport("func-unwind-by-br_table");
        expect(_func_unwind_by_br_table).not.toBeUndefined();
        let _func_unwind_by_br_table_result = module.invoke(_func_unwind_by_br_table);
    });

    _test("execution of unwind_0: func-unwind-by-br_table-value (instance 0)", () => {
        let _func_unwind_by_br_table_value = module.getExport("func-unwind-by-br_table-value");
        expect(_func_unwind_by_br_table_value).not.toBeUndefined();
        let _func_unwind_by_br_table_value_result = module.invoke(_func_unwind_by_br_table_value);
        expect(_func_unwind_by_br_table_value_result).toBe(9);
    });

    _test("execution of unwind_0: func-unwind-by-return (instance 0)", () => {
        let _func_unwind_by_return = module.getExport("func-unwind-by-return");
        expect(_func_unwind_by_return).not.toBeUndefined();
        let _func_unwind_by_return_result = module.invoke(_func_unwind_by_return);
        expect(_func_unwind_by_return_result).toBe(9);
    });

    _test("execution of unwind_0: block-unwind-by-unreachable (instance 0)", () => {
        let _block_unwind_by_unreachable = module.getExport("block-unwind-by-unreachable");
        expect(_block_unwind_by_unreachable).not.toBeUndefined();
        expect(() =>
            module.invoke(_block_unwind_by_unreachable).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: block-unwind-by-br (instance 0)", () => {
        let _block_unwind_by_br = module.getExport("block-unwind-by-br");
        expect(_block_unwind_by_br).not.toBeUndefined();
        let _block_unwind_by_br_result = module.invoke(_block_unwind_by_br);
        expect(_block_unwind_by_br_result).toBe(9);
    });

    _test("execution of unwind_0: block-unwind-by-br-value (instance 0)", () => {
        let _block_unwind_by_br_value = module.getExport("block-unwind-by-br-value");
        expect(_block_unwind_by_br_value).not.toBeUndefined();
        let _block_unwind_by_br_value_result = module.invoke(_block_unwind_by_br_value);
        expect(_block_unwind_by_br_value_result).toBe(9);
    });

    _test("execution of unwind_0: block-unwind-by-br_if (instance 0)", () => {
        let _block_unwind_by_br_if = module.getExport("block-unwind-by-br_if");
        expect(_block_unwind_by_br_if).not.toBeUndefined();
        let _block_unwind_by_br_if_result = module.invoke(_block_unwind_by_br_if);
        expect(_block_unwind_by_br_if_result).toBe(9);
    });

    _test("execution of unwind_0: block-unwind-by-br_if-value (instance 0)", () => {
        let _block_unwind_by_br_if_value = module.getExport("block-unwind-by-br_if-value");
        expect(_block_unwind_by_br_if_value).not.toBeUndefined();
        let _block_unwind_by_br_if_value_result = module.invoke(_block_unwind_by_br_if_value);
        expect(_block_unwind_by_br_if_value_result).toBe(9);
    });

    _test("execution of unwind_0: block-unwind-by-br_table (instance 0)", () => {
        let _block_unwind_by_br_table = module.getExport("block-unwind-by-br_table");
        expect(_block_unwind_by_br_table).not.toBeUndefined();
        let _block_unwind_by_br_table_result = module.invoke(_block_unwind_by_br_table);
        expect(_block_unwind_by_br_table_result).toBe(9);
    });

    _test("execution of unwind_0: block-unwind-by-br_table-value (instance 0)", () => {
        let _block_unwind_by_br_table_value = module.getExport("block-unwind-by-br_table-value");
        expect(_block_unwind_by_br_table_value).not.toBeUndefined();
        let _block_unwind_by_br_table_value_result = module.invoke(_block_unwind_by_br_table_value);
        expect(_block_unwind_by_br_table_value_result).toBe(9);
    });

    _test("execution of unwind_0: block-unwind-by-return (instance 0)", () => {
        let _block_unwind_by_return = module.getExport("block-unwind-by-return");
        expect(_block_unwind_by_return).not.toBeUndefined();
        let _block_unwind_by_return_result = module.invoke(_block_unwind_by_return);
        expect(_block_unwind_by_return_result).toBe(9);
    });

    _test("execution of unwind_0: block-nested-unwind-by-unreachable (instance 0)", () => {
        let _block_nested_unwind_by_unreachable = module.getExport(
            "block-nested-unwind-by-unreachable"
        );
        expect(_block_nested_unwind_by_unreachable).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_block_nested_unwind_by_unreachable)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: block-nested-unwind-by-br (instance 0)", () => {
        let _block_nested_unwind_by_br = module.getExport("block-nested-unwind-by-br");
        expect(_block_nested_unwind_by_br).not.toBeUndefined();
        let _block_nested_unwind_by_br_result = module.invoke(_block_nested_unwind_by_br);
        expect(_block_nested_unwind_by_br_result).toBe(9);
    });

    _test("execution of unwind_0: block-nested-unwind-by-br-value (instance 0)", () => {
        let _block_nested_unwind_by_br_value = module.getExport("block-nested-unwind-by-br-value");
        expect(_block_nested_unwind_by_br_value).not.toBeUndefined();
        let _block_nested_unwind_by_br_value_result = module.invoke(
            _block_nested_unwind_by_br_value
        );
        expect(_block_nested_unwind_by_br_value_result).toBe(9);
    });

    _test("execution of unwind_0: block-nested-unwind-by-br_if (instance 0)", () => {
        let _block_nested_unwind_by_br_if = module.getExport("block-nested-unwind-by-br_if");
        expect(_block_nested_unwind_by_br_if).not.toBeUndefined();
        let _block_nested_unwind_by_br_if_result = module.invoke(_block_nested_unwind_by_br_if);
        expect(_block_nested_unwind_by_br_if_result).toBe(9);
    });

    _test("execution of unwind_0: block-nested-unwind-by-br_if-value (instance 0)", () => {
        let _block_nested_unwind_by_br_if_value = module.getExport(
            "block-nested-unwind-by-br_if-value"
        );
        expect(_block_nested_unwind_by_br_if_value).not.toBeUndefined();
        let _block_nested_unwind_by_br_if_value_result = module.invoke(
            _block_nested_unwind_by_br_if_value
        );
        expect(_block_nested_unwind_by_br_if_value_result).toBe(9);
    });

    _test("execution of unwind_0: block-nested-unwind-by-br_table (instance 0)", () => {
        let _block_nested_unwind_by_br_table = module.getExport("block-nested-unwind-by-br_table");
        expect(_block_nested_unwind_by_br_table).not.toBeUndefined();
        let _block_nested_unwind_by_br_table_result = module.invoke(
            _block_nested_unwind_by_br_table
        );
        expect(_block_nested_unwind_by_br_table_result).toBe(9);
    });

    _test("execution of unwind_0: block-nested-unwind-by-br_table-value (instance 0)", () => {
        let _block_nested_unwind_by_br_table_value = module.getExport(
            "block-nested-unwind-by-br_table-value"
        );
        expect(_block_nested_unwind_by_br_table_value).not.toBeUndefined();
        let _block_nested_unwind_by_br_table_value_result = module.invoke(
            _block_nested_unwind_by_br_table_value
        );
        expect(_block_nested_unwind_by_br_table_value_result).toBe(9);
    });

    _test("execution of unwind_0: block-nested-unwind-by-return (instance 0)", () => {
        let _block_nested_unwind_by_return = module.getExport("block-nested-unwind-by-return");
        expect(_block_nested_unwind_by_return).not.toBeUndefined();
        let _block_nested_unwind_by_return_result = module.invoke(_block_nested_unwind_by_return);
        expect(_block_nested_unwind_by_return_result).toBe(9);
    });

    _test("execution of unwind_0: unary-after-unreachable (instance 0)", () => {
        let _unary_after_unreachable = module.getExport("unary-after-unreachable");
        expect(_unary_after_unreachable).not.toBeUndefined();
        expect(() =>
            module.invoke(_unary_after_unreachable).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: unary-after-br (instance 0)", () => {
        let _unary_after_br = module.getExport("unary-after-br");
        expect(_unary_after_br).not.toBeUndefined();
        let _unary_after_br_result = module.invoke(_unary_after_br);
        expect(_unary_after_br_result).toBe(9);
    });

    _test("execution of unwind_0: unary-after-br_if (instance 0)", () => {
        let _unary_after_br_if = module.getExport("unary-after-br_if");
        expect(_unary_after_br_if).not.toBeUndefined();
        let _unary_after_br_if_result = module.invoke(_unary_after_br_if);
        expect(_unary_after_br_if_result).toBe(9);
    });

    _test("execution of unwind_0: unary-after-br_table (instance 0)", () => {
        let _unary_after_br_table = module.getExport("unary-after-br_table");
        expect(_unary_after_br_table).not.toBeUndefined();
        let _unary_after_br_table_result = module.invoke(_unary_after_br_table);
        expect(_unary_after_br_table_result).toBe(9);
    });

    _test("execution of unwind_0: unary-after-return (instance 0)", () => {
        let _unary_after_return = module.getExport("unary-after-return");
        expect(_unary_after_return).not.toBeUndefined();
        let _unary_after_return_result = module.invoke(_unary_after_return);
        expect(_unary_after_return_result).toBe(9);
    });

    _test("execution of unwind_0: binary-after-unreachable (instance 0)", () => {
        let _binary_after_unreachable = module.getExport("binary-after-unreachable");
        expect(_binary_after_unreachable).not.toBeUndefined();
        expect(() =>
            module.invoke(_binary_after_unreachable).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: binary-after-br (instance 0)", () => {
        let _binary_after_br = module.getExport("binary-after-br");
        expect(_binary_after_br).not.toBeUndefined();
        let _binary_after_br_result = module.invoke(_binary_after_br);
        expect(_binary_after_br_result).toBe(9);
    });

    _test("execution of unwind_0: binary-after-br_if (instance 0)", () => {
        let _binary_after_br_if = module.getExport("binary-after-br_if");
        expect(_binary_after_br_if).not.toBeUndefined();
        let _binary_after_br_if_result = module.invoke(_binary_after_br_if);
        expect(_binary_after_br_if_result).toBe(9);
    });

    _test("execution of unwind_0: binary-after-br_table (instance 0)", () => {
        let _binary_after_br_table = module.getExport("binary-after-br_table");
        expect(_binary_after_br_table).not.toBeUndefined();
        let _binary_after_br_table_result = module.invoke(_binary_after_br_table);
        expect(_binary_after_br_table_result).toBe(9);
    });

    _test("execution of unwind_0: binary-after-return (instance 0)", () => {
        let _binary_after_return = module.getExport("binary-after-return");
        expect(_binary_after_return).not.toBeUndefined();
        let _binary_after_return_result = module.invoke(_binary_after_return);
        expect(_binary_after_return_result).toBe(9);
    });

    _test("execution of unwind_0: select-after-unreachable (instance 0)", () => {
        let _select_after_unreachable = module.getExport("select-after-unreachable");
        expect(_select_after_unreachable).not.toBeUndefined();
        expect(() =>
            module.invoke(_select_after_unreachable).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: select-after-br (instance 0)", () => {
        let _select_after_br = module.getExport("select-after-br");
        expect(_select_after_br).not.toBeUndefined();
        let _select_after_br_result = module.invoke(_select_after_br);
        expect(_select_after_br_result).toBe(9);
    });

    _test("execution of unwind_0: select-after-br_if (instance 0)", () => {
        let _select_after_br_if = module.getExport("select-after-br_if");
        expect(_select_after_br_if).not.toBeUndefined();
        let _select_after_br_if_result = module.invoke(_select_after_br_if);
        expect(_select_after_br_if_result).toBe(9);
    });

    _test("execution of unwind_0: select-after-br_table (instance 0)", () => {
        let _select_after_br_table = module.getExport("select-after-br_table");
        expect(_select_after_br_table).not.toBeUndefined();
        let _select_after_br_table_result = module.invoke(_select_after_br_table);
        expect(_select_after_br_table_result).toBe(9);
    });

    _test("execution of unwind_0: select-after-return (instance 0)", () => {
        let _select_after_return = module.getExport("select-after-return");
        expect(_select_after_return).not.toBeUndefined();
        let _select_after_return_result = module.invoke(_select_after_return);
        expect(_select_after_return_result).toBe(9);
    });

    _test("execution of unwind_0: block-value-after-unreachable (instance 0)", () => {
        let _block_value_after_unreachable = module.getExport("block-value-after-unreachable");
        expect(_block_value_after_unreachable).not.toBeUndefined();
        expect(() =>
            module.invoke(_block_value_after_unreachable).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: block-value-after-br (instance 0)", () => {
        let _block_value_after_br = module.getExport("block-value-after-br");
        expect(_block_value_after_br).not.toBeUndefined();
        let _block_value_after_br_result = module.invoke(_block_value_after_br);
        expect(_block_value_after_br_result).toBe(9);
    });

    _test("execution of unwind_0: block-value-after-br_if (instance 0)", () => {
        let _block_value_after_br_if = module.getExport("block-value-after-br_if");
        expect(_block_value_after_br_if).not.toBeUndefined();
        let _block_value_after_br_if_result = module.invoke(_block_value_after_br_if);
        expect(_block_value_after_br_if_result).toBe(9);
    });

    _test("execution of unwind_0: block-value-after-br_table (instance 0)", () => {
        let _block_value_after_br_table = module.getExport("block-value-after-br_table");
        expect(_block_value_after_br_table).not.toBeUndefined();
        let _block_value_after_br_table_result = module.invoke(_block_value_after_br_table);
        expect(_block_value_after_br_table_result).toBe(9);
    });

    _test("execution of unwind_0: block-value-after-return (instance 0)", () => {
        let _block_value_after_return = module.getExport("block-value-after-return");
        expect(_block_value_after_return).not.toBeUndefined();
        let _block_value_after_return_result = module.invoke(_block_value_after_return);
        expect(_block_value_after_return_result).toBe(9);
    });

    _test("execution of unwind_0: loop-value-after-unreachable (instance 0)", () => {
        let _loop_value_after_unreachable = module.getExport("loop-value-after-unreachable");
        expect(_loop_value_after_unreachable).not.toBeUndefined();
        expect(() =>
            module.invoke(_loop_value_after_unreachable).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of unwind_0: loop-value-after-br (instance 0)", () => {
        let _loop_value_after_br = module.getExport("loop-value-after-br");
        expect(_loop_value_after_br).not.toBeUndefined();
        let _loop_value_after_br_result = module.invoke(_loop_value_after_br);
        expect(_loop_value_after_br_result).toBe(9);
    });

    _test("execution of unwind_0: loop-value-after-br_if (instance 0)", () => {
        let _loop_value_after_br_if = module.getExport("loop-value-after-br_if");
        expect(_loop_value_after_br_if).not.toBeUndefined();
        let _loop_value_after_br_if_result = module.invoke(_loop_value_after_br_if);
        expect(_loop_value_after_br_if_result).toBe(9);
    });

    _test("execution of unwind_0: loop-value-after-br_table (instance 0)", () => {
        let _loop_value_after_br_table = module.getExport("loop-value-after-br_table");
        expect(_loop_value_after_br_table).not.toBeUndefined();
        let _loop_value_after_br_table_result = module.invoke(_loop_value_after_br_table);
        expect(_loop_value_after_br_table_result).toBe(9);
    });

    _test("execution of unwind_0: loop-value-after-return (instance 0)", () => {
        let _loop_value_after_return = module.getExport("loop-value-after-return");
        expect(_loop_value_after_return).not.toBeUndefined();
        let _loop_value_after_return_result = module.invoke(_loop_value_after_return);
        expect(_loop_value_after_return_result).toBe(9);
    });
});
