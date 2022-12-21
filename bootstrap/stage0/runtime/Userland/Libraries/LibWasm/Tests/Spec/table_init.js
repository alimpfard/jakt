let globalImportObject = {};
let namedModules = {};

describe("table_init_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules[":a"] = module;
    globalImportObject["a"] = module;
});

describe("table_init_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_1: test (instance 0)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_init_1: check (instance 0)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 1)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 2)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 2);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_1: check (instance 3)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 3);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_1: check (instance 4)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(4);
    });

    _test("execution of table_init_1: check (instance 5)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 5);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_1: check (instance 6)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 7)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 7);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_1: check (instance 8)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_1: check (instance 9)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 9);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_1: check (instance 10)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 10);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_1: check (instance 11)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 12)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_1: check (instance 13)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 13);
        expect(_check_result).toBe(5);
    });

    _test("execution of table_init_1: check (instance 14)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 14);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_1: check (instance 15)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 15);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_1: check (instance 16)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(6);
    });

    _test("execution of table_init_1: check (instance 17)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 18)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 19)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 20)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 21)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 22)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 23)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 24)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 25)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 26)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 27)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 28)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_1: check (instance 29)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_2: test (instance 1)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_init_2: check (instance 30)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 31)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 32)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 2);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_2: check (instance 33)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 3);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_2: check (instance 34)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(4);
    });

    _test("execution of table_init_2: check (instance 35)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 5);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_2: check (instance 36)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 37)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 38)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 39)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 40)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 41)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 42)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_2: check (instance 43)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 13);
        expect(_check_result).toBe(5);
    });

    _test("execution of table_init_2: check (instance 44)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 14);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_2: check (instance 45)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 15);
        expect(_check_result).toBe(9);
    });

    _test("execution of table_init_2: check (instance 46)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_2: check (instance 47)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 17);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_2: check (instance 48)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 49)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 50)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 51)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 52)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 53)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 54)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 55)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 56)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 57)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 58)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_2: check (instance 59)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_3: test (instance 2)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_init_3: check (instance 60)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 61)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 62)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 2);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_3: check (instance 63)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 3);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_3: check (instance 64)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(4);
    });

    _test("execution of table_init_3: check (instance 65)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 5);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_3: check (instance 66)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 67)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 7);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_3: check (instance 68)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_3: check (instance 69)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 9);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_3: check (instance 70)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 10);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_3: check (instance 71)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 72)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_3: check (instance 73)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 74)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 14);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_3: check (instance 75)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 15);
        expect(_check_result).toBe(5);
    });

    _test("execution of table_init_3: check (instance 76)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_3: check (instance 77)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 17);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_3: check (instance 78)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 79)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 19);
        expect(_check_result).toBe(9);
    });

    _test("execution of table_init_3: check (instance 80)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 81)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 21);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_3: check (instance 82)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 83)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 23);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_3: check (instance 84)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 24);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_3: check (instance 85)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 86)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 87)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 88)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_3: check (instance 89)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_4: test (instance 3)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_init_4: check (instance 90)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 91)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 92)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 2);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_4: check (instance 93)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 3);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_4: check (instance 94)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(4);
    });

    _test("execution of table_init_4: check (instance 95)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 5);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_4: check (instance 96)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 97)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 7);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_4: check (instance 98)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_4: check (instance 99)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 9);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_4: check (instance 100)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 10);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_4: check (instance 101)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 102)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_4: check (instance 103)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 13);
        expect(_check_result).toBe(5);
    });

    _test("execution of table_init_4: check (instance 104)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 14);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_4: check (instance 105)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 15);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_4: check (instance 106)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(6);
    });

    _test("execution of table_init_4: check (instance 107)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 108)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 109)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 110)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 111)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 112)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 113)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 114)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 115)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 116)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 117)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 118)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_4: check (instance 119)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_5: test (instance 4)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_init_5: check (instance 120)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 121)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 122)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 2);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_5: check (instance 123)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 3);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_5: check (instance 124)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(4);
    });

    _test("execution of table_init_5: check (instance 125)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 5);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_5: check (instance 126)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 127)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 128)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 129)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 130)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 131)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 132)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_5: check (instance 133)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 13);
        expect(_check_result).toBe(5);
    });

    _test("execution of table_init_5: check (instance 134)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 14);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_5: check (instance 135)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 15);
        expect(_check_result).toBe(9);
    });

    _test("execution of table_init_5: check (instance 136)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_5: check (instance 137)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 17);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_5: check (instance 138)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 139)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 140)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 141)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 142)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 143)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 144)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 145)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 146)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 147)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 148)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_5: check (instance 149)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_6: test (instance 5)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of table_init_6: check (instance 150)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 151)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 152)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 2);
        expect(_check_result).toBe(3);
    });

    _test("execution of table_init_6: check (instance 153)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 3);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_6: check (instance 154)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 4);
        expect(_check_result).toBe(4);
    });

    _test("execution of table_init_6: check (instance 155)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 5);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_6: check (instance 156)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 157)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 7);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_6: check (instance 158)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 8);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_6: check (instance 159)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 9);
        expect(_check_result).toBe(1);
    });

    _test("execution of table_init_6: check (instance 160)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 10);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_6: check (instance 161)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 162)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 12);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_6: check (instance 163)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 164)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 14);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_6: check (instance 165)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 15);
        expect(_check_result).toBe(5);
    });

    _test("execution of table_init_6: check (instance 166)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 16);
        expect(_check_result).toBe(2);
    });

    _test("execution of table_init_6: check (instance 167)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 17);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_6: check (instance 168)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 169)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 19);
        expect(_check_result).toBe(9);
    });

    _test("execution of table_init_6: check (instance 170)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 171)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 21);
        expect(_check_result).toBe(7);
    });

    _test("execution of table_init_6: check (instance 172)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 173)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 23);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_6: check (instance 174)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        let _check_result = module.invoke(_check, 24);
        expect(_check_result).toBe(8);
    });

    _test("execution of table_init_6: check (instance 175)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 176)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 177)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 178)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_6: check (instance 179)", () => {
        let _check = module.getExport("check");
        expect(_check).not.toBeUndefined();
        expect(() => module.invoke(_check, 29).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_7", () => {
    let _test = test;

    _test("execution of table_init_7: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_8", () => {
    let _test = test;

    _test("execution of table_init_8: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_9", () => {
    let _test = test;

    _test("execution of table_init_9: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_10", () => {
    let _test = test;

    _test("execution of table_init_10: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_11: test (instance 6)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_12: test (instance 7)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_13", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_13.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_13: test (instance 8)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_14", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_14.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_14: test (instance 9)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_15", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_15.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_15: test (instance 10)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_16", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_16.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_16: test (instance 11)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_17: test (instance 12)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_18: test (instance 13)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_19: test (instance 14)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_20", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_20.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_20: test (instance 15)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_21", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_21.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_21: test (instance 16)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_22", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_22.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_22: test (instance 17)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_23", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_23.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_23: test (instance 18)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_24", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_24.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_24: test (instance 19)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_25", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_25.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_25: test (instance 20)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_26", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_26.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_26: test (instance 21)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_27", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_27.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_27: test (instance 22)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_28", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_28.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_28: test (instance 23)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_29", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_29.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_29: test (instance 24)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_30", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_30.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_30: test (instance 25)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("table_init_31", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_31.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_31: test (instance 26)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_32", () => {
    let _test = test;

    _test("execution of table_init_32: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_33", () => {
    let _test = test;

    _test("execution of table_init_33: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_34", () => {
    let _test = test;

    _test("execution of table_init_34: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_35", () => {
    let _test = test;

    _test("execution of table_init_35: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_36", () => {
    let _test = test;

    _test("execution of table_init_36: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_37", () => {
    let _test = test;

    _test("execution of table_init_37: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_38", () => {
    let _test = test;

    _test("execution of table_init_38: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_39", () => {
    let _test = test;

    _test("execution of table_init_39: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_40", () => {
    let _test = test;

    _test("execution of table_init_40: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_41", () => {
    let _test = test;

    _test("execution of table_init_41: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_42", () => {
    let _test = test;

    _test("execution of table_init_42: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_43", () => {
    let _test = test;

    _test("execution of table_init_43: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_44", () => {
    let _test = test;

    _test("execution of table_init_44: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_45", () => {
    let _test = test;

    _test("execution of table_init_45: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_46", () => {
    let _test = test;

    _test("execution of table_init_46: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_47", () => {
    let _test = test;

    _test("execution of table_init_47: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_48", () => {
    let _test = test;

    _test("execution of table_init_48: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_49", () => {
    let _test = test;

    _test("execution of table_init_49: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_50", () => {
    let _test = test;

    _test("execution of table_init_50: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_51", () => {
    let _test = test;

    _test("execution of table_init_51: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_52", () => {
    let _test = test;

    _test("execution of table_init_52: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_53", () => {
    let _test = test;

    _test("execution of table_init_53: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_54", () => {
    let _test = test;

    _test("execution of table_init_54: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_55", () => {
    let _test = test;

    _test("execution of table_init_55: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_56", () => {
    let _test = test;

    _test("execution of table_init_56: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_57", () => {
    let _test = test;

    _test("execution of table_init_57: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_58", () => {
    let _test = test;

    _test("execution of table_init_58: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_59", () => {
    let _test = test;

    _test("execution of table_init_59: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_60", () => {
    let _test = test;

    _test("execution of table_init_60: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_61", () => {
    let _test = test;

    _test("execution of table_init_61: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_62", () => {
    let _test = test;

    _test("execution of table_init_62: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_63", () => {
    let _test = test;

    _test("execution of table_init_63: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_64", () => {
    let _test = test;

    _test("execution of table_init_64: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_65", () => {
    let _test = test;

    _test("execution of table_init_65: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_66", () => {
    let _test = test;

    _test("execution of table_init_66: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_67", () => {
    let _test = test;

    _test("execution of table_init_67: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_68", () => {
    let _test = test;

    _test("execution of table_init_68: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_69", () => {
    let _test = test;

    _test("execution of table_init_69: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_70", () => {
    let _test = test;

    _test("execution of table_init_70: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_71", () => {
    let _test = test;

    _test("execution of table_init_71: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_72", () => {
    let _test = test;

    _test("execution of table_init_72: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_73", () => {
    let _test = test;

    _test("execution of table_init_73: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_74", () => {
    let _test = test;

    _test("execution of table_init_74: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_75", () => {
    let _test = test;

    _test("execution of table_init_75: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_76", () => {
    let _test = test;

    _test("execution of table_init_76: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_77", () => {
    let _test = test;

    _test("execution of table_init_77: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_78", () => {
    let _test = test;

    _test("execution of table_init_78: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_79", () => {
    let _test = test;

    _test("execution of table_init_79: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_80", () => {
    let _test = test;

    _test("execution of table_init_80: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_81", () => {
    let _test = test;

    _test("execution of table_init_81: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_82", () => {
    let _test = test;

    _test("execution of table_init_82: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_83", () => {
    let _test = test;

    _test("execution of table_init_83: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_84", () => {
    let _test = test;

    _test("execution of table_init_84: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_85", () => {
    let _test = test;

    _test("execution of table_init_85: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_86", () => {
    let _test = test;

    _test("execution of table_init_86: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_87", () => {
    let _test = test;

    _test("execution of table_init_87: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_88", () => {
    let _test = test;

    _test("execution of table_init_88: _inline_test_60 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_89", () => {
    let _test = test;

    _test("execution of table_init_89: _inline_test_61 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_90", () => {
    let _test = test;

    _test("execution of table_init_90: _inline_test_62 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_91", () => {
    let _test = test;

    _test("execution of table_init_91: _inline_test_63 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_92", () => {
    let _test = test;

    _test("execution of table_init_92: _inline_test_64 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_93", () => {
    let _test = test;

    _test("execution of table_init_93: _inline_test_65 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_94", () => {
    let _test = test;

    _test("execution of table_init_94: _inline_test_66 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_95", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_95.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_95: run (instance 0)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 24, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 27)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 28)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 29)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 30)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 31)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 32)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 33)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 34)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 35)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 36)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 37)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 38)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 39)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 40)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 41)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 42)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 43)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 44)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 45)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 46)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 47)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 48)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 49)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 50)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 51)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 52)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 53)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 54)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 55)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 56)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 57)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_95: test (instance 58)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_96", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_96.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_96: run (instance 1)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 25, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 59)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 60)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 61)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 62)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 63)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 64)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 65)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 66)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 67)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 68)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 69)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 70)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 71)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 72)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 73)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 74)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 75)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 76)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 77)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 78)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 79)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 80)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 81)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 82)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 83)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 84)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 85)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 86)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 87)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 88)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 89)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_96: test (instance 90)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_97", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_97.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_97: run (instance 2)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 96, 32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 91)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 92)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 93)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 94)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 95)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 96)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 97)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 98)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 99)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 100)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 101)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 102)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 103)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 104)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 105)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 106)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 107)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 108)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 109)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 110)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 111)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 112)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 113)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 114)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 115)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 116)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 117)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 118)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 119)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 120)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 121)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 122)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 123)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 124)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 33).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 125)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 34).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 126)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 35).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 127)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 36).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 128)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 37).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 129)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 38).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 130)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 39).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 131)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 40).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 132)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 41).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 133)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 42).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 134)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 43).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 135)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 44).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 136)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 45).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 137)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 46).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 138)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 47).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 139)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 48).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 140)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 49).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 141)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 50).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 142)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 51).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 143)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 52).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 144)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 53).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 145)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 54).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 146)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 55).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 147)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 56).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 148)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 57).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 149)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 58).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 150)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 59).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 151)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 60).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 152)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 61).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 153)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 62).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 154)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 63).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 155)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 64).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 156)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 65).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 157)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 66).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 158)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 67).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 159)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 68).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 160)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 69).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 161)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 70).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 162)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 71).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 163)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 72).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 164)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 73).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 165)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 74).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 166)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 75).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 167)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 76).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 168)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 77).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 169)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 78).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 170)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 79).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 171)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 80).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 172)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 81).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 173)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 82).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 174)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 83).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 175)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 84).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 176)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 85).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 177)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 86).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 178)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 87).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 179)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 88).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 180)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 89).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 181)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 90).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 182)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 91).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 183)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 92).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 184)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 93).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 185)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 94).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 186)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 95).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 187)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 96).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 188)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 97).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 189)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 98).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 190)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 99).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 191)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 100).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 192)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 101).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 193)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 102).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 194)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 103).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 195)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 104).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 196)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 105).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 197)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 106).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 198)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 107).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 199)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 108).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 200)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 109).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 201)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 110).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 202)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 111).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 203)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 112).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 204)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 113).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 205)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 114).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 206)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 115).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 207)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 116).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 208)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 117).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 209)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 118).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 210)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 119).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 211)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 120).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 212)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 121).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 213)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 122).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 214)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 123).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 215)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 124).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 216)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 125).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 217)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 126).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 218)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 127).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 219)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 128).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 220)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 129).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 221)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 130).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 222)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 131).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 223)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 132).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 224)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 133).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 225)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 134).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 226)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 135).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 227)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 136).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 228)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 137).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 229)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 138).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 230)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 139).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 231)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 140).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 232)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 141).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 233)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 142).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 234)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 143).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 235)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 144).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 236)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 145).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 237)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 146).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 238)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 147).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 239)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 148).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 240)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 149).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 241)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 150).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 242)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 151).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 243)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 152).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 244)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 153).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 245)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 154).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 246)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 155).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 247)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 156).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 248)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 157).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 249)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 158).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_97: test (instance 250)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 159).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_98", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_98.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_98: run (instance 3)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 97, 31).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 251)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 252)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 253)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 254)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 255)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 256)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 257)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 258)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 259)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 260)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 261)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 262)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 263)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 264)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 265)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 266)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 267)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 268)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 269)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 270)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 271)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 272)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 273)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 274)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 275)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 276)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 277)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 278)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 279)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 280)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 281)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 282)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 283)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 284)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 33).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 285)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 34).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 286)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 35).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 287)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 36).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 288)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 37).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 289)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 38).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 290)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 39).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 291)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 40).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 292)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 41).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 293)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 42).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 294)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 43).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 295)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 44).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 296)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 45).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 297)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 46).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 298)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 47).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 299)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 48).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 300)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 49).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 301)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 50).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 302)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 51).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 303)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 52).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 304)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 53).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 305)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 54).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 306)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 55).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 307)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 56).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 308)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 57).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 309)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 58).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 310)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 59).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 311)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 60).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 312)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 61).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 313)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 62).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 314)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 63).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 315)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 64).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 316)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 65).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 317)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 66).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 318)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 67).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 319)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 68).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 320)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 69).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 321)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 70).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 322)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 71).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 323)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 72).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 324)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 73).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 325)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 74).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 326)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 75).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 327)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 76).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 328)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 77).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 329)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 78).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 330)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 79).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 331)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 80).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 332)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 81).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 333)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 82).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 334)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 83).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 335)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 84).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 336)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 85).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 337)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 86).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 338)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 87).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 339)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 88).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 340)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 89).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 341)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 90).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 342)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 91).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 343)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 92).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 344)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 93).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 345)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 94).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 346)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 95).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 347)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 96).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 348)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 97).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 349)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 98).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 350)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 99).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 351)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 100).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 352)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 101).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 353)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 102).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 354)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 103).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 355)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 104).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 356)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 105).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 357)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 106).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 358)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 107).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 359)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 108).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 360)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 109).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 361)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 110).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 362)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 111).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 363)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 112).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 364)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 113).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 365)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 114).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 366)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 115).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 367)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 116).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 368)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 117).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 369)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 118).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 370)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 119).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 371)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 120).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 372)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 121).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 373)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 122).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 374)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 123).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 375)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 124).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 376)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 125).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 377)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 126).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 378)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 127).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 379)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 128).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 380)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 129).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 381)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 130).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 382)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 131).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 383)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 132).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 384)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 133).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 385)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 134).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 386)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 135).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 387)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 136).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 388)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 137).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 389)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 138).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 390)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 139).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 391)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 140).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 392)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 141).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 393)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 142).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 394)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 143).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 395)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 144).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 396)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 145).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 397)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 146).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 398)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 147).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 399)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 148).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 400)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 149).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 401)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 150).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 402)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 151).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 403)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 152).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 404)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 153).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 405)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 154).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 406)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 155).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 407)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 156).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 408)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 157).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 409)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 158).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_98: test (instance 410)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 159).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_99", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_99.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_99: run (instance 4)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 48, 4294967280).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 411)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 412)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 413)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 414)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 415)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 416)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 417)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 418)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 419)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 420)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 421)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 422)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 423)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 424)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 425)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 426)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 427)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 428)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 17).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 429)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 18).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 430)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 19).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 431)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 20).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 432)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 21).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 433)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 22).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 434)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 23).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 435)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 24).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 436)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 25).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 437)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 26).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 438)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 27).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 439)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 28).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 440)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 29).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 441)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 442)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 31).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 443)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 32).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 444)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 33).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 445)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 34).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 446)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 35).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 447)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 36).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 448)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 37).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 449)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 38).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 450)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 39).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 451)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 40).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 452)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 41).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 453)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 42).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 454)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 43).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 455)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 44).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 456)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 45).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 457)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 46).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 458)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 47).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 459)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 48).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 460)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 49).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 461)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 50).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 462)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 51).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 463)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 52).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 464)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 53).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 465)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 54).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 466)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 55).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 467)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 56).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 468)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 57).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 469)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 58).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 470)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 59).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 471)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 60).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 472)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 61).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 473)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 62).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_99: test (instance 474)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 63).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_100", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_100.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_init_100: run (instance 5)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 0, 4294967292).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 475)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 476)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 477)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 478)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 479)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 480)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 481)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 482)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 483)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 484)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 9).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 485)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 10).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 486)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 11).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 487)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 12).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 488)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 489)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 14).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of table_init_100: test (instance 490)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test, 15).toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_init_101", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_init_101.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});
