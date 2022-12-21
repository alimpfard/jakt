let globalImportObject = {};
let namedModules = {};

describe("table_get_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_get_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_get_0: init (instance 0)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of table_get_0: get-externref (instance 0)", () => {
        let _get_externref = module.getExport("get-externref");
        expect(_get_externref).not.toBeUndefined();
        let _get_externref_result = module.invoke(_get_externref, 0);
        expect(_get_externref_result).toBe(0);
    });

    _test("execution of table_get_0: get-externref (instance 1)", () => {
        let _get_externref = module.getExport("get-externref");
        expect(_get_externref).not.toBeUndefined();
        let _get_externref_result = module.invoke(_get_externref, 1);
        expect(_get_externref_result).toBe(0);
    });

    _test("execution of table_get_0: get-funcref (instance 0)", () => {
        let _get_funcref = module.getExport("get-funcref");
        expect(_get_funcref).not.toBeUndefined();
        let _get_funcref_result = module.invoke(_get_funcref, 0);
        expect(_get_funcref_result).toBe(0);
    });

    _test("execution of table_get_0: is_null-funcref (instance 0)", () => {
        let _is_null_funcref = module.getExport("is_null-funcref");
        expect(_is_null_funcref).not.toBeUndefined();
        let _is_null_funcref_result = module.invoke(_is_null_funcref, 1);
        expect(_is_null_funcref_result).toBe(0);
    });

    _test("execution of table_get_0: is_null-funcref (instance 1)", () => {
        let _is_null_funcref = module.getExport("is_null-funcref");
        expect(_is_null_funcref).not.toBeUndefined();
        let _is_null_funcref_result = module.invoke(_is_null_funcref, 2);
        expect(_is_null_funcref_result).toBe(0);
    });

    _test("execution of table_get_0: get-externref (instance 2)", () => {
        let _get_externref = module.getExport("get-externref");
        expect(_get_externref).not.toBeUndefined();
        expect(() => module.invoke(_get_externref, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_get_0: get-funcref (instance 1)", () => {
        let _get_funcref = module.getExport("get-funcref");
        expect(_get_funcref).not.toBeUndefined();
        expect(() => module.invoke(_get_funcref, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_get_0: get-externref (instance 3)", () => {
        let _get_externref = module.getExport("get-externref");
        expect(_get_externref).not.toBeUndefined();
        expect(() => module.invoke(_get_externref, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_get_0: get-funcref (instance 2)", () => {
        let _get_funcref = module.getExport("get-funcref");
        expect(_get_funcref).not.toBeUndefined();
        expect(() => module.invoke(_get_funcref, -1).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_get_1", () => {
    let _test = test;

    _test("execution of table_get_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_get_2", () => {
    let _test = test;

    _test("execution of table_get_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_get_3", () => {
    let _test = test;

    _test("execution of table_get_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_get_4", () => {
    let _test = test;

    _test("execution of table_get_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_get_5", () => {
    let _test = test;

    _test("execution of table_get_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
