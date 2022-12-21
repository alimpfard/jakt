let globalImportObject = {};
let namedModules = {};

describe("table_copy_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules[":a"] = module;
    globalImportObject["a"] = module;
});

describe("table_copy_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_1: test (instance 0)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_1: check_t0 (instance 0)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 1)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 2)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_1: check_t0 (instance 3)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_1: check_t0 (instance 4)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_1: check_t0 (instance 5)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_1: check_t0 (instance 6)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 7)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 8)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 9)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 10)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 11)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 12)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_1: check_t0 (instance 13)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_1: check_t0 (instance 14)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_1: check_t0 (instance 15)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_1: check_t0 (instance 16)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_1: check_t0 (instance 17)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 18)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 19)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 20)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 21)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 22)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 23)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 24)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 25)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 26)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 27)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 28)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t0 (instance 29)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 0)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 1)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 2)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 3)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_1: check_t1 (instance 4)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_1: check_t1 (instance 5)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_1: check_t1 (instance 6)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_1: check_t1 (instance 7)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 8)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 9)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 10)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 11)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_1: check_t1 (instance 12)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_1: check_t1 (instance 13)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_1: check_t1 (instance 14)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_1: check_t1 (instance 15)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_1: check_t1 (instance 16)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 17)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 18)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 19)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 20)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 21)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 22)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 23)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 24)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 25)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 26)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 27)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 28)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_1: check_t1 (instance 29)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_2: test (instance 1)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_2: check_t0 (instance 30)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 31)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 32)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_2: check_t0 (instance 33)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_2: check_t0 (instance 34)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_2: check_t0 (instance 35)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_2: check_t0 (instance 36)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 37)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 38)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 39)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 40)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 41)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 42)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_2: check_t0 (instance 43)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_2: check_t0 (instance 44)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_2: check_t0 (instance 45)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_2: check_t0 (instance 46)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_2: check_t0 (instance 47)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 48)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 49)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 50)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 51)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 52)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 53)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 54)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 55)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 56)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 57)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 58)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t0 (instance 59)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 30)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 31)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 32)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 33)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_2: check_t1 (instance 34)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_2: check_t1 (instance 35)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_2: check_t1 (instance 36)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_2: check_t1 (instance 37)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 38)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 39)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 40)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 41)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_2: check_t1 (instance 42)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_2: check_t1 (instance 43)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_2: check_t1 (instance 44)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_2: check_t1 (instance 45)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_2: check_t1 (instance 46)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 47)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 48)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 49)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 50)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 51)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 52)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 53)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 54)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 55)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 56)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 57)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 58)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_2: check_t1 (instance 59)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_3: test (instance 2)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_3: check_t0 (instance 60)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 61)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 62)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_3: check_t0 (instance 63)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_3: check_t0 (instance 64)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_3: check_t0 (instance 65)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_3: check_t0 (instance 66)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 67)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 68)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 69)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 70)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 71)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 72)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_3: check_t0 (instance 73)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_3: check_t0 (instance 74)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_3: check_t0 (instance 75)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_3: check_t0 (instance 76)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_3: check_t0 (instance 77)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 78)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 79)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 80)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 81)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 82)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 83)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 84)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 85)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 25);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_3: check_t0 (instance 86)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 26);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_3: check_t0 (instance 87)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 88)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t0 (instance 89)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 60)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 61)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 62)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 63)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_3: check_t1 (instance 64)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_3: check_t1 (instance 65)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_3: check_t1 (instance 66)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_3: check_t1 (instance 67)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 68)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 69)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 70)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 71)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_3: check_t1 (instance 72)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_3: check_t1 (instance 73)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_3: check_t1 (instance 74)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_3: check_t1 (instance 75)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_3: check_t1 (instance 76)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 77)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 78)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 79)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 80)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 81)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 82)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 83)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 84)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 85)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 86)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 87)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 88)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_3: check_t1 (instance 89)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_4: test (instance 3)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_4: check_t0 (instance 90)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 91)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 92)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_4: check_t0 (instance 93)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_4: check_t0 (instance 94)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_4: check_t0 (instance 95)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_4: check_t0 (instance 96)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 97)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 98)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 99)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 100)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 101)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 102)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_4: check_t0 (instance 103)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 104)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 105)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 106)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_4: check_t0 (instance 107)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 108)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 109)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 110)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 111)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 112)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 113)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 114)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 115)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 116)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 117)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 118)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t0 (instance 119)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 90)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 91)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 92)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 93)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_4: check_t1 (instance 94)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_4: check_t1 (instance 95)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_4: check_t1 (instance 96)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_4: check_t1 (instance 97)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 98)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 99)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 100)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 101)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_4: check_t1 (instance 102)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_4: check_t1 (instance 103)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_4: check_t1 (instance 104)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_4: check_t1 (instance 105)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_4: check_t1 (instance 106)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 107)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 108)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 109)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 110)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 111)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 112)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 113)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 114)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 115)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 116)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 117)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 118)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_4: check_t1 (instance 119)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_5: test (instance 4)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_5: check_t0 (instance 120)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 121)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 122)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_5: check_t0 (instance 123)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_5: check_t0 (instance 124)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_5: check_t0 (instance 125)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_5: check_t0 (instance 126)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 127)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 128)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 129)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 130)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 131)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 132)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_5: check_t0 (instance 133)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_5: check_t0 (instance 134)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_5: check_t0 (instance 135)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_5: check_t0 (instance 136)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_5: check_t0 (instance 137)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 138)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 139)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 140)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 141)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 142)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 143)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 144)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 145)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 146)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 147)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 148)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t0 (instance 149)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 120)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 121)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 122)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 123)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_5: check_t1 (instance 124)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_5: check_t1 (instance 125)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_5: check_t1 (instance 126)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_5: check_t1 (instance 127)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 128)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 129)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 130)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 131)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_5: check_t1 (instance 132)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_5: check_t1 (instance 133)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_5: check_t1 (instance 134)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_5: check_t1 (instance 135)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_5: check_t1 (instance 136)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 137)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 138)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 139)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 140)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 141)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 142)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 143)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 144)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 145)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 146)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 147)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 148)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_5: check_t1 (instance 149)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_6: test (instance 5)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_6: check_t0 (instance 150)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 151)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 152)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_6: check_t0 (instance 153)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_6: check_t0 (instance 154)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_6: check_t0 (instance 155)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_6: check_t0 (instance 156)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 157)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 158)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 159)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 160)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 161)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 162)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_6: check_t0 (instance 163)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_6: check_t0 (instance 164)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_6: check_t0 (instance 165)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_6: check_t0 (instance 166)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_6: check_t0 (instance 167)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 168)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 169)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 170)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 171)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 172)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 173)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 174)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 175)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 176)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 26);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_6: check_t0 (instance 177)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 27);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_6: check_t0 (instance 178)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t0 (instance 179)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 150)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 151)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 152)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 153)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_6: check_t1 (instance 154)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_6: check_t1 (instance 155)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_6: check_t1 (instance 156)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_6: check_t1 (instance 157)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 158)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 159)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 160)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 161)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_6: check_t1 (instance 162)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_6: check_t1 (instance 163)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_6: check_t1 (instance 164)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_6: check_t1 (instance 165)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_6: check_t1 (instance 166)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 167)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 168)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 169)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 170)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 171)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 172)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 173)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 174)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 175)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 176)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 177)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 178)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_6: check_t1 (instance 179)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_7: test (instance 6)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_7: check_t0 (instance 180)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 181)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 182)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_7: check_t0 (instance 183)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_7: check_t0 (instance 184)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_7: check_t0 (instance 185)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_7: check_t0 (instance 186)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 187)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 188)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 189)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 190)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 10);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_7: check_t0 (instance 191)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 11);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_7: check_t0 (instance 192)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_7: check_t0 (instance 193)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_7: check_t0 (instance 194)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_7: check_t0 (instance 195)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 196)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 197)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 198)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 199)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 200)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 201)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 202)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 203)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 204)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 205)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 206)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 207)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 208)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t0 (instance 209)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 180)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 181)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 182)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 183)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_7: check_t1 (instance 184)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_7: check_t1 (instance 185)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_7: check_t1 (instance 186)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_7: check_t1 (instance 187)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 188)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 189)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 190)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 191)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_7: check_t1 (instance 192)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_7: check_t1 (instance 193)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_7: check_t1 (instance 194)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_7: check_t1 (instance 195)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_7: check_t1 (instance 196)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 197)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 198)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 199)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 200)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 201)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 202)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 203)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 204)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 205)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 206)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 207)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 208)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_7: check_t1 (instance 209)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_8: test (instance 7)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_8: check_t0 (instance 210)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 211)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 212)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_8: check_t0 (instance 213)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_8: check_t0 (instance 214)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_8: check_t0 (instance 215)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_8: check_t0 (instance 216)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 217)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 218)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 219)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 220)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 221)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 222)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 223)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 224)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_8: check_t0 (instance 225)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_8: check_t0 (instance 226)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_8: check_t0 (instance 227)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 17);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_8: check_t0 (instance 228)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 18);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_8: check_t0 (instance 229)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 230)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 231)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 232)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 233)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 234)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 235)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 236)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 237)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 238)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t0 (instance 239)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 210)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 211)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 212)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 213)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_8: check_t1 (instance 214)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_8: check_t1 (instance 215)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_8: check_t1 (instance 216)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_8: check_t1 (instance 217)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 218)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 219)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 220)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 221)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_8: check_t1 (instance 222)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_8: check_t1 (instance 223)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_8: check_t1 (instance 224)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_8: check_t1 (instance 225)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_8: check_t1 (instance 226)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 227)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 228)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 229)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 230)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 231)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 232)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 233)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 234)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 235)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 236)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 237)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 238)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_8: check_t1 (instance 239)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_9: test (instance 8)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_9: check_t0 (instance 240)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 241)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 242)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_9: check_t0 (instance 243)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_9: check_t0 (instance 244)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_9: check_t0 (instance 245)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_9: check_t0 (instance 246)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 247)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 248)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 249)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 250)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 251)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 252)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_9: check_t0 (instance 253)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_9: check_t0 (instance 254)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_9: check_t0 (instance 255)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_9: check_t0 (instance 256)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_9: check_t0 (instance 257)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 258)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 259)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 260)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 261)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 262)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 263)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 264)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 265)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 266)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 267)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 268)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t0 (instance 269)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 240)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 241)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 242)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 243)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_9: check_t1 (instance 244)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_9: check_t1 (instance 245)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_9: check_t1 (instance 246)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_9: check_t1 (instance 247)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 248)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 249)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 250)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 251)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 252)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_9: check_t1 (instance 253)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_9: check_t1 (instance 254)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_9: check_t1 (instance 255)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_9: check_t1 (instance 256)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 257)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 258)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 259)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 260)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 261)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 262)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 22);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_9: check_t1 (instance 263)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 23);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_9: check_t1 (instance 264)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 24);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_9: check_t1 (instance 265)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 25);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_9: check_t1 (instance 266)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 26);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_9: check_t1 (instance 267)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 268)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_9: check_t1 (instance 269)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_10: test (instance 9)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_10: check_t0 (instance 270)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 271)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 272)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_10: check_t0 (instance 273)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_10: check_t0 (instance 274)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_10: check_t0 (instance 275)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_10: check_t0 (instance 276)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 277)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 278)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 279)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 280)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 281)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 282)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_10: check_t0 (instance 283)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_10: check_t0 (instance 284)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_10: check_t0 (instance 285)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_10: check_t0 (instance 286)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_10: check_t0 (instance 287)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 288)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 289)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 290)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 291)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 292)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 293)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 294)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 295)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 296)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 297)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 298)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t0 (instance 299)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 270)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 271)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 272)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 273)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_10: check_t1 (instance 274)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_10: check_t1 (instance 275)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_10: check_t1 (instance 276)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_10: check_t1 (instance 277)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 278)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 279)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 280)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 281)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_10: check_t1 (instance 282)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_10: check_t1 (instance 283)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_10: check_t1 (instance 284)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_10: check_t1 (instance 285)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_10: check_t1 (instance 286)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 287)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 288)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 289)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 290)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 291)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 292)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 293)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 294)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 295)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 296)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 297)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 298)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_10: check_t1 (instance 299)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_11: test (instance 10)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_11: check_t0 (instance 300)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 301)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 302)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_11: check_t0 (instance 303)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_11: check_t0 (instance 304)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_11: check_t0 (instance 305)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_11: check_t0 (instance 306)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 307)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 308)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 309)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 310)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 311)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 312)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_11: check_t0 (instance 313)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_11: check_t0 (instance 314)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_11: check_t0 (instance 315)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_11: check_t0 (instance 316)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_11: check_t0 (instance 317)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 318)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 319)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 320)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 321)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 322)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 323)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 324)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 325)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 326)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 327)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 328)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t0 (instance 329)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 300)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 301)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 302)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 303)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_11: check_t1 (instance 304)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_11: check_t1 (instance 305)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_11: check_t1 (instance 306)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_11: check_t1 (instance 307)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 308)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 309)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 310)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 311)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_11: check_t1 (instance 312)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_11: check_t1 (instance 313)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_11: check_t1 (instance 314)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_11: check_t1 (instance 315)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_11: check_t1 (instance 316)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 317)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 318)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 319)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 320)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 321)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 322)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 323)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 324)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 325)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 326)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 327)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 328)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_11: check_t1 (instance 329)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_12: test (instance 11)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_12: check_t0 (instance 330)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 331)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 332)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_12: check_t0 (instance 333)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_12: check_t0 (instance 334)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_12: check_t0 (instance 335)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_12: check_t0 (instance 336)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 337)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 338)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 339)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 340)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 341)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 342)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_12: check_t0 (instance 343)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_12: check_t0 (instance 344)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_12: check_t0 (instance 345)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_12: check_t0 (instance 346)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_12: check_t0 (instance 347)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 348)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 349)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 350)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 351)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 352)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 353)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 354)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 355)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 25);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_12: check_t0 (instance 356)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 26);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_12: check_t0 (instance 357)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 358)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t0 (instance 359)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 330)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 331)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 332)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 333)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_12: check_t1 (instance 334)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_12: check_t1 (instance 335)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_12: check_t1 (instance 336)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_12: check_t1 (instance 337)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 338)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 339)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 340)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 341)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_12: check_t1 (instance 342)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_12: check_t1 (instance 343)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_12: check_t1 (instance 344)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_12: check_t1 (instance 345)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_12: check_t1 (instance 346)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 347)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 348)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 349)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 350)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 351)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 352)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 353)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 354)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 355)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 356)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 357)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 358)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_12: check_t1 (instance 359)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_13", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_13.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_13: test (instance 12)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_13: check_t0 (instance 360)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 361)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 362)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_13: check_t0 (instance 363)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_13: check_t0 (instance 364)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_13: check_t0 (instance 365)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_13: check_t0 (instance 366)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 367)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 368)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 369)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 370)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 371)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 372)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_13: check_t0 (instance 373)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 374)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 375)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 376)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_13: check_t0 (instance 377)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 378)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 379)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 380)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 381)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 382)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 383)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 384)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 385)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 386)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 387)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 388)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t0 (instance 389)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 360)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 361)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 362)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 363)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_13: check_t1 (instance 364)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_13: check_t1 (instance 365)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_13: check_t1 (instance 366)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_13: check_t1 (instance 367)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 368)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 369)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 370)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 371)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_13: check_t1 (instance 372)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_13: check_t1 (instance 373)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_13: check_t1 (instance 374)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_13: check_t1 (instance 375)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_13: check_t1 (instance 376)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 377)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 378)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 379)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 380)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 381)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 382)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 383)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 384)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 385)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 386)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 387)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 388)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_13: check_t1 (instance 389)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_14", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_14.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_14: test (instance 13)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_14: check_t0 (instance 390)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 391)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 392)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_14: check_t0 (instance 393)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_14: check_t0 (instance 394)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_14: check_t0 (instance 395)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_14: check_t0 (instance 396)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 397)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 398)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 399)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 400)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 401)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 402)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_14: check_t0 (instance 403)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_14: check_t0 (instance 404)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_14: check_t0 (instance 405)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_14: check_t0 (instance 406)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_14: check_t0 (instance 407)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 408)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 409)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 410)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 411)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 412)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 413)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 414)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 415)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 416)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 417)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 418)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t0 (instance 419)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 390)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 391)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 392)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 393)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_14: check_t1 (instance 394)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_14: check_t1 (instance 395)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_14: check_t1 (instance 396)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_14: check_t1 (instance 397)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 398)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 399)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 400)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 401)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_14: check_t1 (instance 402)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_14: check_t1 (instance 403)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_14: check_t1 (instance 404)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_14: check_t1 (instance 405)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_14: check_t1 (instance 406)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 407)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 408)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 409)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 410)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 411)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 412)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 413)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 414)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 415)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 416)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 417)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 418)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_14: check_t1 (instance 419)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_15", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_15.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_15: test (instance 14)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_15: check_t0 (instance 420)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 421)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 422)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_15: check_t0 (instance 423)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_15: check_t0 (instance 424)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_15: check_t0 (instance 425)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_15: check_t0 (instance 426)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 427)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 428)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 429)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 430)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 431)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 432)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_15: check_t0 (instance 433)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_15: check_t0 (instance 434)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_15: check_t0 (instance 435)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_15: check_t0 (instance 436)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_15: check_t0 (instance 437)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 438)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 439)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 440)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 441)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 442)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 443)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 444)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 445)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 446)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 26);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_15: check_t0 (instance 447)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 27);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_15: check_t0 (instance 448)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t0 (instance 449)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 420)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 421)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 422)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 423)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_15: check_t1 (instance 424)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_15: check_t1 (instance 425)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_15: check_t1 (instance 426)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_15: check_t1 (instance 427)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 428)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 429)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 430)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 431)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_15: check_t1 (instance 432)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_15: check_t1 (instance 433)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_15: check_t1 (instance 434)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_15: check_t1 (instance 435)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_15: check_t1 (instance 436)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 437)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 438)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 439)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 440)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 441)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 442)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 443)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 444)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 445)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 446)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 447)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 448)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_15: check_t1 (instance 449)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_16", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_16.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_16: test (instance 15)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_16: check_t0 (instance 450)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 451)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 452)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_16: check_t0 (instance 453)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_16: check_t0 (instance 454)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_16: check_t0 (instance 455)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_16: check_t0 (instance 456)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 457)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 458)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 459)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 460)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 10);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_16: check_t0 (instance 461)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 11);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_16: check_t0 (instance 462)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_16: check_t0 (instance 463)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_16: check_t0 (instance 464)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_16: check_t0 (instance 465)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 466)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 467)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 468)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 469)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 470)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 471)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 472)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 473)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 474)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 475)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 476)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 477)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 478)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t0 (instance 479)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 450)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 451)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 452)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 453)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_16: check_t1 (instance 454)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_16: check_t1 (instance 455)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_16: check_t1 (instance 456)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_16: check_t1 (instance 457)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 458)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 459)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 460)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 461)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_16: check_t1 (instance 462)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_16: check_t1 (instance 463)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_16: check_t1 (instance 464)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_16: check_t1 (instance 465)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_16: check_t1 (instance 466)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 467)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 468)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 469)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 470)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 471)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 472)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 473)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 474)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 475)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 476)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 477)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 478)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_16: check_t1 (instance 479)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_17: test (instance 16)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_17: check_t0 (instance 480)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 481)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 482)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_17: check_t0 (instance 483)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_17: check_t0 (instance 484)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_17: check_t0 (instance 485)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_17: check_t0 (instance 486)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 487)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 488)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 489)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 490)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 491)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 492)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 493)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 494)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_17: check_t0 (instance 495)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_17: check_t0 (instance 496)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_17: check_t0 (instance 497)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 17);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_17: check_t0 (instance 498)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 18);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_17: check_t0 (instance 499)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 500)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 501)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 502)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 503)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 504)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 505)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 506)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 507)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 508)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t0 (instance 509)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 480)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 481)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 482)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 483)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_17: check_t1 (instance 484)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_17: check_t1 (instance 485)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_17: check_t1 (instance 486)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_17: check_t1 (instance 487)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 488)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 489)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 490)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 491)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 11);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_17: check_t1 (instance 492)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_17: check_t1 (instance 493)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_17: check_t1 (instance 494)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_17: check_t1 (instance 495)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_17: check_t1 (instance 496)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 497)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 498)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 499)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 500)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 501)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 502)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 503)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 504)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 505)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 506)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 507)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 508)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_17: check_t1 (instance 509)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_18: test (instance 17)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_copy_18: check_t0 (instance 510)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 511)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 512)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 2);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_18: check_t0 (instance 513)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 3);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_18: check_t0 (instance 514)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 4);
        expect(_check_t0_result).toBe(4);
    });

    _test("execution of table_copy_18: check_t0 (instance 515)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 5);
        expect(_check_t0_result).toBe(1);
    });

    _test("execution of table_copy_18: check_t0 (instance 516)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 517)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 518)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 519)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 520)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 521)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 522)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 12);
        expect(_check_t0_result).toBe(7);
    });

    _test("execution of table_copy_18: check_t0 (instance 523)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 13);
        expect(_check_t0_result).toBe(5);
    });

    _test("execution of table_copy_18: check_t0 (instance 524)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 14);
        expect(_check_t0_result).toBe(2);
    });

    _test("execution of table_copy_18: check_t0 (instance 525)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 15);
        expect(_check_t0_result).toBe(3);
    });

    _test("execution of table_copy_18: check_t0 (instance 526)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        let _check_t0_result = module.invoke(_check_t0, 16);
        expect(_check_t0_result).toBe(6);
    });

    _test("execution of table_copy_18: check_t0 (instance 527)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 528)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 529)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 530)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 531)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 532)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 533)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 534)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 535)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 536)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 537)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 538)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t0 (instance 539)", () => {
        let _check_t0 = module.getExport("check_t0");
        expect(_check_t0).not.toBeUndefined();
        expect(() => module.invoke(_check_t0, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 510)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 511)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 512)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 513)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 3);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_18: check_t1 (instance 514)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 4);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_18: check_t1 (instance 515)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 5);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_18: check_t1 (instance 516)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 6);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_18: check_t1 (instance 517)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 518)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 519)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 520)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 521)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 522)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 12);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_18: check_t1 (instance 523)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 13);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_18: check_t1 (instance 524)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 14);
        expect(_check_t1_result).toBe(4);
    });

    _test("execution of table_copy_18: check_t1 (instance 525)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 15);
        expect(_check_t1_result).toBe(1);
    });

    _test("execution of table_copy_18: check_t1 (instance 526)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 527)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 528)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 529)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 530)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 531)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 532)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 22);
        expect(_check_t1_result).toBe(7);
    });

    _test("execution of table_copy_18: check_t1 (instance 533)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 23);
        expect(_check_t1_result).toBe(5);
    });

    _test("execution of table_copy_18: check_t1 (instance 534)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 24);
        expect(_check_t1_result).toBe(2);
    });

    _test("execution of table_copy_18: check_t1 (instance 535)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 25);
        expect(_check_t1_result).toBe(3);
    });

    _test("execution of table_copy_18: check_t1 (instance 536)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        let _check_t1_result = module.invoke(_check_t1, 26);
        expect(_check_t1_result).toBe(6);
    });

    _test("execution of table_copy_18: check_t1 (instance 537)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 538)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_18: check_t1 (instance 539)", () => {
        let _check_t1 = module.getExport("check_t1");
        expect(_check_t1).not.toBeUndefined();
        expect(() => module.invoke(_check_t1, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_19: test (instance 18)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_20", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_20.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_20: test (instance 19)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_21", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_21.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_21: test (instance 20)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_22", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_22.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_22: test (instance 21)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_23", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_23.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_23: test (instance 22)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_24", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_24.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_24: test (instance 23)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_25", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_25.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_25: test (instance 24)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_26", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_26.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_26: test (instance 25)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_27", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_27.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_27: test (instance 26)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_28", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_28.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_28: test (instance 27)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_29", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_29.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_29: test (instance 28)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_30", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_30.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_30: test (instance 29)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_31", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_31.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_31: test (instance 30)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_32", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_32.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_32: test (instance 31)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_33", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_33.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_33: test (instance 32)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_34", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_34.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_34: test (instance 33)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_35", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_35.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_35: test (instance 34)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_36", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_36.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_36: test (instance 35)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_37", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_37.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_37: test (instance 36)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_38", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_38.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_38: test (instance 37)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_39", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_39.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_39: test (instance 38)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_copy_40", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_40.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_40: test (instance 39)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_41", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_41.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_41: run (instance 0)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 24, 0, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 40)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 0);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_41: test (instance 41)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 1);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_41: test (instance 42)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 2);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_41: test (instance 43)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 3);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_41: test (instance 44)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 4);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_41: test (instance 45)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 5);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_41: test (instance 46)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 6);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_41: test (instance 47)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 7);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_41: test (instance 48)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 49)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 50)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 51)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 52)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 53)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 54)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 55)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 56)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 57)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 58)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 59)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 60)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 61)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 62)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 63)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 64)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 65)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 66)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 67)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 68)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 69)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 70)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_41: test (instance 71)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_42", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_42.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_42: run (instance 1)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 23, 0, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 72)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 0);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_42: test (instance 73)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 1);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_42: test (instance 74)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 2);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_42: test (instance 75)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 3);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_42: test (instance 76)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 4);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_42: test (instance 77)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 5);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_42: test (instance 78)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 6);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_42: test (instance 79)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 7);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_42: test (instance 80)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 8);
        expect(_test_result).toBe(8);
    });

    _test("execution of table_copy_42: test (instance 81)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 82)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 83)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 84)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 85)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 86)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 87)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 88)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 89)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 90)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 91)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 92)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 93)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 94)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 95)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 96)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 97)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 98)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 99)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 100)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 101)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 102)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_42: test (instance 103)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_43", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_43.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_43: run (instance 2)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 0, 24, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 104)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 105)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 106)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 107)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 108)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 109)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 110)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 111)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 112)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 113)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 114)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 115)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 116)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 117)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 118)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 119)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 120)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 121)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 122)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 123)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 124)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 125)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 126)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 127)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_43: test (instance 128)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 24);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_43: test (instance 129)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 25);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_43: test (instance 130)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 26);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_43: test (instance 131)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 27);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_43: test (instance 132)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 28);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_43: test (instance 133)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 29);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_43: test (instance 134)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 30);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_43: test (instance 135)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 31);
        expect(_test_result).toBe(7);
    });
});

describe("table_copy_44", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_44.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_44: run (instance 3)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 0, 23, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 136)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 137)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 138)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 139)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 140)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 141)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 142)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 143)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 144)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 145)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 146)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 147)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 148)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 149)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 150)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 151)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 152)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 153)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 154)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 155)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 156)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 157)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 158)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_44: test (instance 159)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 23);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_44: test (instance 160)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 24);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_44: test (instance 161)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 25);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_44: test (instance 162)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 26);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_44: test (instance 163)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 27);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_44: test (instance 164)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 28);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_44: test (instance 165)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 29);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_44: test (instance 166)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 30);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_44: test (instance 167)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 31);
        expect(_test_result).toBe(8);
    });
});

describe("table_copy_45", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_45.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_45: run (instance 4)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 24, 11, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 168)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 169)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 170)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 171)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 172)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 173)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 174)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 175)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 176)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 177)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 178)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 179)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 11);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_45: test (instance 180)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 12);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_45: test (instance 181)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 13);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_45: test (instance 182)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 14);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_45: test (instance 183)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 15);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_45: test (instance 184)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 16);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_45: test (instance 185)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 17);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_45: test (instance 186)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 18);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_45: test (instance 187)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 188)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 189)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 190)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 191)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 192)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 193)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 194)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 195)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 196)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 197)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 198)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_45: test (instance 199)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_46", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_46.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_46: run (instance 5)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 11, 24, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 200)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 201)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 202)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 203)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 204)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 205)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 206)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 207)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 208)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 209)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 210)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 211)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 212)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 213)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 214)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 215)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 216)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 217)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 218)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 219)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 220)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 221)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 222)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 223)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_46: test (instance 224)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 24);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_46: test (instance 225)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 25);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_46: test (instance 226)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 26);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_46: test (instance 227)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 27);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_46: test (instance 228)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 28);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_46: test (instance 229)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 29);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_46: test (instance 230)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 30);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_46: test (instance 231)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 31);
        expect(_test_result).toBe(7);
    });
});

describe("table_copy_47", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_47.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_47: run (instance 6)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 24, 21, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 232)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 233)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 234)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 235)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 236)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 237)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 238)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 239)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 240)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 241)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 242)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 243)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 244)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 245)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 246)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 247)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 248)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 249)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 250)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 251)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 252)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 253)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 21);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_47: test (instance 254)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 22);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_47: test (instance 255)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 23);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_47: test (instance 256)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 24);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_47: test (instance 257)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 25);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_47: test (instance 258)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 26);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_47: test (instance 259)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 27);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_47: test (instance 260)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 28);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_47: test (instance 261)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 262)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_47: test (instance 263)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_copy_48", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_48.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_48: run (instance 7)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 21, 24, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 264)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 265)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 266)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 267)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 268)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 269)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 270)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 271)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 272)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 273)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 274)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 275)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 276)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 277)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 278)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 279)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 280)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 281)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 282)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 283)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 284)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 285)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 286)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 287)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_48: test (instance 288)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 24);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_48: test (instance 289)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 25);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_48: test (instance 290)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 26);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_48: test (instance 291)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 27);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_48: test (instance 292)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 28);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_48: test (instance 293)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 29);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_48: test (instance 294)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 30);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_48: test (instance 295)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 31);
        expect(_test_result).toBe(7);
    });
});

describe("table_copy_49", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_49.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_49: run (instance 8)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 21, 21, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 296)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 297)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 298)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 299)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 300)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 301)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 302)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 303)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 304)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 305)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 306)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 307)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 308)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 309)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 310)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 311)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 312)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 313)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 314)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 315)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 316)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_49: test (instance 317)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 21);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_49: test (instance 318)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 22);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_49: test (instance 319)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 23);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_49: test (instance 320)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 24);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_49: test (instance 321)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 25);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_49: test (instance 322)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 26);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_49: test (instance 323)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 27);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_49: test (instance 324)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 28);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_49: test (instance 325)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 29);
        expect(_test_result).toBe(8);
    });

    _test("execution of table_copy_49: test (instance 326)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 30);
        expect(_test_result).toBe(9);
    });

    _test("execution of table_copy_49: test (instance 327)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 31);
        expect(_test_result).toBe(10);
    });
});

describe("table_copy_50", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_50.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_50: run (instance 9)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() =>
            module.invoke(_run, 0, 112, 4294967264).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of table_copy_50: test (instance 328)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 329)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 330)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 331)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 332)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 333)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 334)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 335)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 336)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 337)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 338)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 339)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 340)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 341)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 342)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 343)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 344)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 345)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 346)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 347)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 348)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 349)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 350)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 351)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 352)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 353)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 354)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 355)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 356)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 357)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 358)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 359)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 360)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 361)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 33).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 362)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 34).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 363)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 35).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 364)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 36).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 365)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 37).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 366)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 38).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 367)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 39).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 368)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 40).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 369)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 41).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 370)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 42).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 371)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 43).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 372)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 44).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 373)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 45).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 374)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 46).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 375)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 47).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 376)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 48).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 377)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 49).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 378)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 50).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 379)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 51).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 380)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 52).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 381)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 53).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 382)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 54).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 383)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 55).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 384)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 56).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 385)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 57).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 386)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 58).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 387)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 59).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 388)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 60).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 389)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 61).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 390)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 62).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 391)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 63).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 392)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 64).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 393)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 65).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 394)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 66).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 395)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 67).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 396)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 68).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 397)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 69).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 398)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 70).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 399)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 71).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 400)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 72).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 401)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 73).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 402)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 74).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 403)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 75).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 404)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 76).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 405)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 77).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 406)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 78).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 407)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 79).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 408)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 80).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 409)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 81).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 410)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 82).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 411)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 83).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 412)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 84).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 413)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 85).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 414)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 86).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 415)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 87).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 416)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 88).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 417)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 89).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 418)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 90).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 419)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 91).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 420)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 92).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 421)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 93).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 422)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 94).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 423)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 95).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 424)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 96).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 425)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 97).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 426)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 98).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 427)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 99).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 428)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 100).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 429)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 101).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 430)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 102).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 431)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 103).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 432)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 104).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 433)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 105).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 434)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 106).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 435)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 107).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 436)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 108).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 437)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 109).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 438)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 110).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 439)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 111).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_50: test (instance 440)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 112);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_50: test (instance 441)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 113);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_50: test (instance 442)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 114);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_50: test (instance 443)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 115);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_50: test (instance 444)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 116);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_50: test (instance 445)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 117);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_50: test (instance 446)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 118);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_50: test (instance 447)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 119);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_50: test (instance 448)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 120);
        expect(_test_result).toBe(8);
    });

    _test("execution of table_copy_50: test (instance 449)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 121);
        expect(_test_result).toBe(9);
    });

    _test("execution of table_copy_50: test (instance 450)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 122);
        expect(_test_result).toBe(10);
    });

    _test("execution of table_copy_50: test (instance 451)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 123);
        expect(_test_result).toBe(11);
    });

    _test("execution of table_copy_50: test (instance 452)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 124);
        expect(_test_result).toBe(12);
    });

    _test("execution of table_copy_50: test (instance 453)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 125);
        expect(_test_result).toBe(13);
    });

    _test("execution of table_copy_50: test (instance 454)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 126);
        expect(_test_result).toBe(14);
    });

    _test("execution of table_copy_50: test (instance 455)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 127);
        expect(_test_result).toBe(15);
    });
});

describe("table_copy_51", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_copy_51.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_copy_51: run (instance 10)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() =>
            module.invoke(_run, 112, 0, 4294967264).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of table_copy_51: test (instance 456)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 0);
        expect(_test_result).toBe(0);
    });

    _test("execution of table_copy_51: test (instance 457)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 1);
        expect(_test_result).toBe(1);
    });

    _test("execution of table_copy_51: test (instance 458)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 2);
        expect(_test_result).toBe(2);
    });

    _test("execution of table_copy_51: test (instance 459)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 3);
        expect(_test_result).toBe(3);
    });

    _test("execution of table_copy_51: test (instance 460)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 4);
        expect(_test_result).toBe(4);
    });

    _test("execution of table_copy_51: test (instance 461)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 5);
        expect(_test_result).toBe(5);
    });

    _test("execution of table_copy_51: test (instance 462)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 6);
        expect(_test_result).toBe(6);
    });

    _test("execution of table_copy_51: test (instance 463)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 7);
        expect(_test_result).toBe(7);
    });

    _test("execution of table_copy_51: test (instance 464)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 8);
        expect(_test_result).toBe(8);
    });

    _test("execution of table_copy_51: test (instance 465)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 9);
        expect(_test_result).toBe(9);
    });

    _test("execution of table_copy_51: test (instance 466)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 10);
        expect(_test_result).toBe(10);
    });

    _test("execution of table_copy_51: test (instance 467)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 11);
        expect(_test_result).toBe(11);
    });

    _test("execution of table_copy_51: test (instance 468)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 12);
        expect(_test_result).toBe(12);
    });

    _test("execution of table_copy_51: test (instance 469)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 13);
        expect(_test_result).toBe(13);
    });

    _test("execution of table_copy_51: test (instance 470)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 14);
        expect(_test_result).toBe(14);
    });

    _test("execution of table_copy_51: test (instance 471)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        let _test_result = module.invoke(_test, 15);
        expect(_test_result).toBe(15);
    });

    _test("execution of table_copy_51: test (instance 472)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 473)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 474)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 475)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 476)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 477)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 478)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 479)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 480)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 481)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 482)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 483)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 484)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 485)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 486)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 487)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 488)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 489)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 33).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 490)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 34).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 491)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 35).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 492)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 36).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 493)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 37).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 494)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 38).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 495)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 39).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 496)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 40).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 497)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 41).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 498)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 42).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 499)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 43).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 500)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 44).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 501)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 45).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 502)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 46).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 503)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 47).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 504)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 48).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 505)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 49).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 506)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 50).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 507)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 51).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 508)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 52).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 509)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 53).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 510)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 54).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 511)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 55).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 512)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 56).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 513)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 57).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 514)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 58).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 515)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 59).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 516)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 60).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 517)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 61).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 518)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 62).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 519)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 63).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 520)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 64).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 521)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 65).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 522)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 66).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 523)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 67).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 524)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 68).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 525)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 69).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 526)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 70).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 527)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 71).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 528)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 72).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 529)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 73).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 530)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 74).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 531)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 75).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 532)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 76).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 533)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 77).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 534)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 78).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 535)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 79).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 536)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 80).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 537)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 81).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 538)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 82).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 539)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 83).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 540)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 84).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 541)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 85).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 542)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 86).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 543)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 87).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 544)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 88).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 545)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 89).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 546)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 90).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 547)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 91).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 548)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 92).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 549)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 93).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 550)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 94).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 551)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 95).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 552)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 96).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 553)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 97).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 554)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 98).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 555)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 99).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 556)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 100).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 557)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 101).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 558)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 102).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 559)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 103).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 560)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 104).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 561)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 105).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 562)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 106).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 563)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 107).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 564)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 108).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 565)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 109).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 566)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 110).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 567)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 111).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 568)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 112).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 569)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 113).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 570)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 114).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 571)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 115).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 572)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 116).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 573)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 117).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 574)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 118).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 575)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 119).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 576)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 120).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 577)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 121).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 578)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 122).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 579)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 123).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 580)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 124).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 581)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 125).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 582)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 126).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_copy_51: test (instance 583)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 127).toThrow(TypeError, "Execution trapped"));
    });
});
