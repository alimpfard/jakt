let globalImportObject = {};
let namedModules = {};

describe("table_fill_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_fill_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_fill_0: get (instance 0)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 1);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 1)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 2);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 2)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 3);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 3)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 4);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 4)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 5);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 0)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        let _fill_result = module.invoke(_fill, 2, 0, 3);
    });

    _test("execution of table_fill_0: get (instance 5)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 1);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 6)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 2);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 7)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 3);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 8)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 4);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 9)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 5);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 1)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        let _fill_result = module.invoke(_fill, 4, 0, 2);
    });

    _test("execution of table_fill_0: get (instance 10)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 3);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 11)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 4);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 12)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 5);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 13)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 6);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 2)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        let _fill_result = module.invoke(_fill, 4, 0, 0);
    });

    _test("execution of table_fill_0: get (instance 14)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 3);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 15)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 4);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 16)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 5);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 3)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        let _fill_result = module.invoke(_fill, 8, 0, 2);
    });

    _test("execution of table_fill_0: get (instance 17)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 7);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 18)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 8);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 19)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 9);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 4)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        let _fill_result = module.invoke(_fill, 9, 0, 1);
    });

    _test("execution of table_fill_0: get (instance 20)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 8);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 21)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 9);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 5)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        let _fill_result = module.invoke(_fill, 10, 0, 0);
    });

    _test("execution of table_fill_0: get (instance 22)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 9);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 6)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        expect(() => module.invoke(_fill, 8, 0, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_fill_0: get (instance 23)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 7);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 24)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 8);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: get (instance 25)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 9);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_fill_0: fill (instance 7)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        expect(() => module.invoke(_fill, 11, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_fill_0: fill (instance 8)", () => {
        let _fill = module.getExport("fill");
        expect(_fill).not.toBeUndefined();
        expect(() => module.invoke(_fill, 11, 0, 10).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_1", () => {
    let _test = test;

    _test("execution of table_fill_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_2", () => {
    let _test = test;

    _test("execution of table_fill_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_3", () => {
    let _test = test;

    _test("execution of table_fill_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_4", () => {
    let _test = test;

    _test("execution of table_fill_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_5", () => {
    let _test = test;

    _test("execution of table_fill_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_6", () => {
    let _test = test;

    _test("execution of table_fill_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_7", () => {
    let _test = test;

    _test("execution of table_fill_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_8", () => {
    let _test = test;

    _test("execution of table_fill_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_fill_9", () => {
    let _test = test;

    _test("execution of table_fill_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
