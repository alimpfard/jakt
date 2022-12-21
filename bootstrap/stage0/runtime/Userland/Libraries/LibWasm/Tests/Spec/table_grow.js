let globalImportObject = {};
let namedModules = {};

describe("table_grow_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_grow_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_grow_0: size (instance 0)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(0);
    });

    _test("execution of table_grow_0: set (instance 0)", () => {
        let _set = module.getExport("set");
        expect(_set).not.toBeUndefined();
        expect(() => module.invoke(_set, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_grow_0: get (instance 0)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        expect(() => module.invoke(_get, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_grow_0: grow (instance 0)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1, 0);
        expect(_grow_result).toBe(0);
    });

    _test("execution of table_grow_0: size (instance 1)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(1);
    });

    _test("execution of table_grow_0: get (instance 1)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 0);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_grow_0: set (instance 1)", () => {
        let _set = module.getExport("set");
        expect(_set).not.toBeUndefined();
        let _set_result = module.invoke(_set, 0, 0);
    });

    _test("execution of table_grow_0: get (instance 2)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 0);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_grow_0: set (instance 2)", () => {
        let _set = module.getExport("set");
        expect(_set).not.toBeUndefined();
        expect(() => module.invoke(_set, 1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_grow_0: get (instance 3)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        expect(() => module.invoke(_get, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_grow_0: grow (instance 1)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 4, 0);
        expect(_grow_result).toBe(1);
    });

    _test("execution of table_grow_0: size (instance 2)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(5);
    });

    _test("execution of table_grow_0: get (instance 4)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 0);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_grow_0: set (instance 3)", () => {
        let _set = module.getExport("set");
        expect(_set).not.toBeUndefined();
        let _set_result = module.invoke(_set, 0, 0);
    });

    _test("execution of table_grow_0: get (instance 5)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 0);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_grow_0: get (instance 6)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 1);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_grow_0: get (instance 7)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 4);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_grow_0: set (instance 4)", () => {
        let _set = module.getExport("set");
        expect(_set).not.toBeUndefined();
        let _set_result = module.invoke(_set, 4, 0);
    });

    _test("execution of table_grow_0: get (instance 8)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get, 4);
        expect(_get_result).toBe(0);
    });

    _test("execution of table_grow_0: set (instance 5)", () => {
        let _set = module.getExport("set");
        expect(_set).not.toBeUndefined();
        expect(() => module.invoke(_set, 5, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_grow_0: get (instance 9)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        expect(() => module.invoke(_get, 5).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_grow_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_grow_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_grow_1: grow (instance 2)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow);
        expect(_grow_result).toBe(-1);
    });
});

describe("table_grow_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_grow_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_grow_2: grow (instance 3)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(0);
    });

    _test("execution of table_grow_2: grow (instance 4)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(0);
    });

    _test("execution of table_grow_2: grow (instance 5)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(1);
    });

    _test("execution of table_grow_2: grow (instance 6)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 2);
        expect(_grow_result).toBe(1);
    });

    _test("execution of table_grow_2: grow (instance 7)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 800);
        expect(_grow_result).toBe(3);
    });
});

describe("table_grow_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_grow_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_grow_3: grow (instance 8)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(0);
    });

    _test("execution of table_grow_3: grow (instance 9)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(0);
    });

    _test("execution of table_grow_3: grow (instance 10)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(1);
    });

    _test("execution of table_grow_3: grow (instance 11)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 2);
        expect(_grow_result).toBe(2);
    });

    _test("execution of table_grow_3: grow (instance 12)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 6);
        expect(_grow_result).toBe(4);
    });

    _test("execution of table_grow_3: grow (instance 13)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(10);
    });

    _test("execution of table_grow_3: grow (instance 14)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(-1);
    });

    _test("execution of table_grow_3: grow (instance 15)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 65536);
        expect(_grow_result).toBe(-1);
    });
});

describe("table_grow_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_grow_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_grow_4: check-table-null (instance 0)", () => {
        let _check_table_null = module.getExport("check-table-null");
        expect(_check_table_null).not.toBeUndefined();
        let _check_table_null_result = module.invoke(_check_table_null, 0, 9);
        expect(_check_table_null_result).toBe(0);
    });

    _test("execution of table_grow_4: grow (instance 16)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 10);
        expect(_grow_result).toBe(10);
    });

    _test("execution of table_grow_4: check-table-null (instance 1)", () => {
        let _check_table_null = module.getExport("check-table-null");
        expect(_check_table_null).not.toBeUndefined();
        let _check_table_null_result = module.invoke(_check_table_null, 0, 19);
        expect(_check_table_null_result).toBe(0);
    });
});

describe("table_grow_5", () => {
    let _test = test;

    _test("execution of table_grow_5: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_grow_6", () => {
    let _test = test;

    _test("execution of table_grow_6: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_grow_7", () => {
    let _test = test;

    _test("execution of table_grow_7: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_grow_8", () => {
    let _test = test;

    _test("execution of table_grow_8: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_grow_9", () => {
    let _test = test;

    _test("execution of table_grow_9: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_grow_10", () => {
    let _test = test;

    _test("execution of table_grow_10: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_grow_11", () => {
    let _test = test;

    _test("execution of table_grow_11: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
