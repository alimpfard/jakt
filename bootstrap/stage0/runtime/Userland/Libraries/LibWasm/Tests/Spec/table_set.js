let globalImportObject = {};
let namedModules = {};

describe("table_set_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_set_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_set_0: get-externref (instance 0)", () => {
        let _get_externref = module.getExport("get-externref");
        expect(_get_externref).not.toBeUndefined();
        let _get_externref_result = module.invoke(_get_externref, 0);
        expect(_get_externref_result).toBe(0);
    });

    _test("execution of table_set_0: set-externref (instance 0)", () => {
        let _set_externref = module.getExport("set-externref");
        expect(_set_externref).not.toBeUndefined();
        let _set_externref_result = module.invoke(_set_externref, 0, 0);
    });

    _test("execution of table_set_0: get-externref (instance 1)", () => {
        let _get_externref = module.getExport("get-externref");
        expect(_get_externref).not.toBeUndefined();
        let _get_externref_result = module.invoke(_get_externref, 0);
        expect(_get_externref_result).toBe(0);
    });

    _test("execution of table_set_0: set-externref (instance 1)", () => {
        let _set_externref = module.getExport("set-externref");
        expect(_set_externref).not.toBeUndefined();
        let _set_externref_result = module.invoke(_set_externref, 0, 0);
    });

    _test("execution of table_set_0: get-externref (instance 2)", () => {
        let _get_externref = module.getExport("get-externref");
        expect(_get_externref).not.toBeUndefined();
        let _get_externref_result = module.invoke(_get_externref, 0);
        expect(_get_externref_result).toBe(0);
    });

    _test("execution of table_set_0: get-funcref (instance 0)", () => {
        let _get_funcref = module.getExport("get-funcref");
        expect(_get_funcref).not.toBeUndefined();
        let _get_funcref_result = module.invoke(_get_funcref, 0);
        expect(_get_funcref_result).toBe(0);
    });

    _test("execution of table_set_0: set-funcref-from (instance 0)", () => {
        let _set_funcref_from = module.getExport("set-funcref-from");
        expect(_set_funcref_from).not.toBeUndefined();
        let _set_funcref_from_result = module.invoke(_set_funcref_from, 0, 1);
    });

    _test("execution of table_set_0: is_null-funcref (instance 0)", () => {
        let _is_null_funcref = module.getExport("is_null-funcref");
        expect(_is_null_funcref).not.toBeUndefined();
        let _is_null_funcref_result = module.invoke(_is_null_funcref, 0);
        expect(_is_null_funcref_result).toBe(0);
    });

    _test("execution of table_set_0: set-funcref (instance 0)", () => {
        let _set_funcref = module.getExport("set-funcref");
        expect(_set_funcref).not.toBeUndefined();
        let _set_funcref_result = module.invoke(_set_funcref, 0, 0);
    });

    _test("execution of table_set_0: get-funcref (instance 1)", () => {
        let _get_funcref = module.getExport("get-funcref");
        expect(_get_funcref).not.toBeUndefined();
        let _get_funcref_result = module.invoke(_get_funcref, 0);
        expect(_get_funcref_result).toBe(0);
    });

    _test("execution of table_set_0: set-externref (instance 2)", () => {
        let _set_externref = module.getExport("set-externref");
        expect(_set_externref).not.toBeUndefined();
        expect(() => module.invoke(_set_externref, 2, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_set_0: set-funcref (instance 1)", () => {
        let _set_funcref = module.getExport("set-funcref");
        expect(_set_funcref).not.toBeUndefined();
        expect(() => module.invoke(_set_funcref, 3, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_set_0: set-externref (instance 3)", () => {
        let _set_externref = module.getExport("set-externref");
        expect(_set_externref).not.toBeUndefined();
        expect(() => module.invoke(_set_externref, -1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_set_0: set-funcref (instance 2)", () => {
        let _set_funcref = module.getExport("set-funcref");
        expect(_set_funcref).not.toBeUndefined();
        expect(() => module.invoke(_set_funcref, -1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_set_0: set-externref (instance 4)", () => {
        let _set_externref = module.getExport("set-externref");
        expect(_set_externref).not.toBeUndefined();
        expect(() => module.invoke(_set_externref, 2, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_set_0: set-funcref-from (instance 1)", () => {
        let _set_funcref_from = module.getExport("set-funcref-from");
        expect(_set_funcref_from).not.toBeUndefined();
        expect(() =>
            module.invoke(_set_funcref_from, 3, 1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of table_set_0: set-externref (instance 5)", () => {
        let _set_externref = module.getExport("set-externref");
        expect(_set_externref).not.toBeUndefined();
        expect(() => module.invoke(_set_externref, -1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_set_0: set-funcref-from (instance 2)", () => {
        let _set_funcref_from = module.getExport("set-funcref-from");
        expect(_set_funcref_from).not.toBeUndefined();
        expect(() =>
            module.invoke(_set_funcref_from, -1, 1).toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("table_set_1", () => {
    let _test = test;

    _test("execution of table_set_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_set_2", () => {
    let _test = test;

    _test("execution of table_set_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_set_3", () => {
    let _test = test;

    _test("execution of table_set_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_set_4", () => {
    let _test = test;

    _test("execution of table_set_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_set_5", () => {
    let _test = test;

    _test("execution of table_set_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_set_6", () => {
    let _test = test;

    _test("execution of table_set_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_set_7", () => {
    let _test = test;

    _test("execution of table_set_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
