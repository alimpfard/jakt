let globalImportObject = {};
let namedModules = {};

describe("memory_init_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_0: test (instance 0)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of memory_init_0: load8_u (instance 0)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 0);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 1)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 1);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 2)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 2);
        expect(_load8_u_result).toBe(3);
    });

    _test("execution of memory_init_0: load8_u (instance 3)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 3);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_0: load8_u (instance 4)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 4);
        expect(_load8_u_result).toBe(4);
    });

    _test("execution of memory_init_0: load8_u (instance 5)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 5);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_0: load8_u (instance 6)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 6);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 7)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 7);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 8)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 8);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 9)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 9);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 10)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 10);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 11)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 11);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 12)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 12);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_0: load8_u (instance 13)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 13);
        expect(_load8_u_result).toBe(5);
    });

    _test("execution of memory_init_0: load8_u (instance 14)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 14);
        expect(_load8_u_result).toBe(2);
    });

    _test("execution of memory_init_0: load8_u (instance 15)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 15);
        expect(_load8_u_result).toBe(3);
    });

    _test("execution of memory_init_0: load8_u (instance 16)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 16);
        expect(_load8_u_result).toBe(6);
    });

    _test("execution of memory_init_0: load8_u (instance 17)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 17);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 18)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 18);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 19)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 19);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 20)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 20);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 21)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 21);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 22)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 22);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 23)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 23);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 24)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 24);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 25)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 25);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 26)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 26);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 27)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 27);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 28)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 28);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_0: load8_u (instance 29)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 29);
        expect(_load8_u_result).toBe(0);
    });
});

describe("memory_init_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_1: test (instance 1)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of memory_init_1: load8_u (instance 30)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 0);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 31)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 1);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 32)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 2);
        expect(_load8_u_result).toBe(3);
    });

    _test("execution of memory_init_1: load8_u (instance 33)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 3);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_1: load8_u (instance 34)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 4);
        expect(_load8_u_result).toBe(4);
    });

    _test("execution of memory_init_1: load8_u (instance 35)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 5);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_1: load8_u (instance 36)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 6);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 37)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 7);
        expect(_load8_u_result).toBe(2);
    });

    _test("execution of memory_init_1: load8_u (instance 38)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 8);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_1: load8_u (instance 39)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 9);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_1: load8_u (instance 40)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 10);
        expect(_load8_u_result).toBe(8);
    });

    _test("execution of memory_init_1: load8_u (instance 41)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 11);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 42)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 12);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_1: load8_u (instance 43)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 13);
        expect(_load8_u_result).toBe(5);
    });

    _test("execution of memory_init_1: load8_u (instance 44)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 14);
        expect(_load8_u_result).toBe(2);
    });

    _test("execution of memory_init_1: load8_u (instance 45)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 15);
        expect(_load8_u_result).toBe(3);
    });

    _test("execution of memory_init_1: load8_u (instance 46)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 16);
        expect(_load8_u_result).toBe(6);
    });

    _test("execution of memory_init_1: load8_u (instance 47)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 17);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 48)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 18);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 49)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 19);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 50)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 20);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 51)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 21);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 52)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 22);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 53)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 23);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 54)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 24);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 55)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 25);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 56)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 26);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 57)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 27);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 58)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 28);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_1: load8_u (instance 59)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 29);
        expect(_load8_u_result).toBe(0);
    });
});

describe("memory_init_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_2: test (instance 2)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of memory_init_2: load8_u (instance 60)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 0);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 61)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 1);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 62)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 2);
        expect(_load8_u_result).toBe(3);
    });

    _test("execution of memory_init_2: load8_u (instance 63)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 3);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_2: load8_u (instance 64)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 4);
        expect(_load8_u_result).toBe(4);
    });

    _test("execution of memory_init_2: load8_u (instance 65)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 5);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_2: load8_u (instance 66)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 6);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 67)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 7);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 68)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 8);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 69)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 9);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 70)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 10);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 71)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 11);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 72)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 12);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_2: load8_u (instance 73)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 13);
        expect(_load8_u_result).toBe(5);
    });

    _test("execution of memory_init_2: load8_u (instance 74)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 14);
        expect(_load8_u_result).toBe(2);
    });

    _test("execution of memory_init_2: load8_u (instance 75)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 15);
        expect(_load8_u_result).toBe(9);
    });

    _test("execution of memory_init_2: load8_u (instance 76)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 16);
        expect(_load8_u_result).toBe(2);
    });

    _test("execution of memory_init_2: load8_u (instance 77)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 17);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_2: load8_u (instance 78)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 18);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 79)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 19);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 80)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 20);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 81)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 21);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 82)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 22);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 83)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 23);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 84)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 24);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 85)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 25);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 86)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 26);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 87)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 27);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 88)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 28);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_2: load8_u (instance 89)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 29);
        expect(_load8_u_result).toBe(0);
    });
});

describe("memory_init_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_3: test (instance 3)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });

    _test("execution of memory_init_3: load8_u (instance 90)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 0);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 91)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 1);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 92)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 2);
        expect(_load8_u_result).toBe(3);
    });

    _test("execution of memory_init_3: load8_u (instance 93)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 3);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_3: load8_u (instance 94)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 4);
        expect(_load8_u_result).toBe(4);
    });

    _test("execution of memory_init_3: load8_u (instance 95)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 5);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_3: load8_u (instance 96)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 6);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 97)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 7);
        expect(_load8_u_result).toBe(2);
    });

    _test("execution of memory_init_3: load8_u (instance 98)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 8);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_3: load8_u (instance 99)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 9);
        expect(_load8_u_result).toBe(1);
    });

    _test("execution of memory_init_3: load8_u (instance 100)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 10);
        expect(_load8_u_result).toBe(8);
    });

    _test("execution of memory_init_3: load8_u (instance 101)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 11);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 102)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 12);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_3: load8_u (instance 103)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 13);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 104)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 14);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_3: load8_u (instance 105)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 15);
        expect(_load8_u_result).toBe(5);
    });

    _test("execution of memory_init_3: load8_u (instance 106)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 16);
        expect(_load8_u_result).toBe(2);
    });

    _test("execution of memory_init_3: load8_u (instance 107)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 17);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_3: load8_u (instance 108)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 18);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 109)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 19);
        expect(_load8_u_result).toBe(9);
    });

    _test("execution of memory_init_3: load8_u (instance 110)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 20);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 111)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 21);
        expect(_load8_u_result).toBe(7);
    });

    _test("execution of memory_init_3: load8_u (instance 112)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 22);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 113)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 23);
        expect(_load8_u_result).toBe(8);
    });

    _test("execution of memory_init_3: load8_u (instance 114)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 24);
        expect(_load8_u_result).toBe(8);
    });

    _test("execution of memory_init_3: load8_u (instance 115)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 25);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 116)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 26);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 117)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 27);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 118)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 28);
        expect(_load8_u_result).toBe(0);
    });

    _test("execution of memory_init_3: load8_u (instance 119)", () => {
        let _load8_u = module.getExport("load8_u");
        expect(_load8_u).not.toBeUndefined();
        let _load8_u_result = module.invoke(_load8_u, 29);
        expect(_load8_u_result).toBe(0);
    });
});

describe("memory_init_4", () => {
    let _test = test;

    _test("execution of memory_init_4: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_5", () => {
    let _test = test;

    _test("execution of memory_init_5: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_6: test (instance 4)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("memory_init_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_7: test (instance 5)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_8: test (instance 6)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_9", () => {
    let _test = test;

    _test("execution of memory_init_9: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_10", () => {
    let _test = test;

    _test("execution of memory_init_10: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_11: test (instance 7)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("memory_init_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_12: test (instance 8)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_13", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_13.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_13: test (instance 9)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_14", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_14.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_14: test (instance 10)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_15", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_15.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_15: test (instance 11)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_16", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_16.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_16: test (instance 12)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("memory_init_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_17: test (instance 13)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_18: test (instance 14)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("memory_init_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_19: test (instance 15)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        module.invoke(_test, 0, 0);
    });
});

describe("memory_init_20", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_20.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_20: test (instance 16)", () => {
        let _test = module.getExport("test");
        expect(_test).not.toBeUndefined();
        expect(() => module.invoke(_test).toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_21", () => {
    let _test = test;

    _test("execution of memory_init_21: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_22", () => {
    let _test = test;

    _test("execution of memory_init_22: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_23", () => {
    let _test = test;

    _test("execution of memory_init_23: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_24", () => {
    let _test = test;

    _test("execution of memory_init_24: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_25", () => {
    let _test = test;

    _test("execution of memory_init_25: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_26", () => {
    let _test = test;

    _test("execution of memory_init_26: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_27", () => {
    let _test = test;

    _test("execution of memory_init_27: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_28", () => {
    let _test = test;

    _test("execution of memory_init_28: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_29", () => {
    let _test = test;

    _test("execution of memory_init_29: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_30", () => {
    let _test = test;

    _test("execution of memory_init_30: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_31", () => {
    let _test = test;

    _test("execution of memory_init_31: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_32", () => {
    let _test = test;

    _test("execution of memory_init_32: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_33", () => {
    let _test = test;

    _test("execution of memory_init_33: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_34", () => {
    let _test = test;

    _test("execution of memory_init_34: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_35", () => {
    let _test = test;

    _test("execution of memory_init_35: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_36", () => {
    let _test = test;

    _test("execution of memory_init_36: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_37", () => {
    let _test = test;

    _test("execution of memory_init_37: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_38", () => {
    let _test = test;

    _test("execution of memory_init_38: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_39", () => {
    let _test = test;

    _test("execution of memory_init_39: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_40", () => {
    let _test = test;

    _test("execution of memory_init_40: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_41", () => {
    let _test = test;

    _test("execution of memory_init_41: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_42", () => {
    let _test = test;

    _test("execution of memory_init_42: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_43", () => {
    let _test = test;

    _test("execution of memory_init_43: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_44", () => {
    let _test = test;

    _test("execution of memory_init_44: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_45", () => {
    let _test = test;

    _test("execution of memory_init_45: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_46", () => {
    let _test = test;

    _test("execution of memory_init_46: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_47", () => {
    let _test = test;

    _test("execution of memory_init_47: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_48", () => {
    let _test = test;

    _test("execution of memory_init_48: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_49", () => {
    let _test = test;

    _test("execution of memory_init_49: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_50", () => {
    let _test = test;

    _test("execution of memory_init_50: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_51", () => {
    let _test = test;

    _test("execution of memory_init_51: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_52", () => {
    let _test = test;

    _test("execution of memory_init_52: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_53", () => {
    let _test = test;

    _test("execution of memory_init_53: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_54", () => {
    let _test = test;

    _test("execution of memory_init_54: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_55", () => {
    let _test = test;

    _test("execution of memory_init_55: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_56", () => {
    let _test = test;

    _test("execution of memory_init_56: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_57", () => {
    let _test = test;

    _test("execution of memory_init_57: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_58", () => {
    let _test = test;

    _test("execution of memory_init_58: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_59", () => {
    let _test = test;

    _test("execution of memory_init_59: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_60", () => {
    let _test = test;

    _test("execution of memory_init_60: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_61", () => {
    let _test = test;

    _test("execution of memory_init_61: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_62", () => {
    let _test = test;

    _test("execution of memory_init_62: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_63", () => {
    let _test = test;

    _test("execution of memory_init_63: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_64", () => {
    let _test = test;

    _test("execution of memory_init_64: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_65", () => {
    let _test = test;

    _test("execution of memory_init_65: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_66", () => {
    let _test = test;

    _test("execution of memory_init_66: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_67", () => {
    let _test = test;

    _test("execution of memory_init_67: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_68", () => {
    let _test = test;

    _test("execution of memory_init_68: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_69", () => {
    let _test = test;

    _test("execution of memory_init_69: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_70", () => {
    let _test = test;

    _test("execution of memory_init_70: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_71", () => {
    let _test = test;

    _test("execution of memory_init_71: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_72", () => {
    let _test = test;

    _test("execution of memory_init_72: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_73", () => {
    let _test = test;

    _test("execution of memory_init_73: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_74", () => {
    let _test = test;

    _test("execution of memory_init_74: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_75", () => {
    let _test = test;

    _test("execution of memory_init_75: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_76", () => {
    let _test = test;

    _test("execution of memory_init_76: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_77", () => {
    let _test = test;

    _test("execution of memory_init_77: _inline_test_60 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_78", () => {
    let _test = test;

    _test("execution of memory_init_78: _inline_test_61 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_79", () => {
    let _test = test;

    _test("execution of memory_init_79: _inline_test_62 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_80", () => {
    let _test = test;

    _test("execution of memory_init_80: _inline_test_63 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_81", () => {
    let _test = test;

    _test("execution of memory_init_81: _inline_test_64 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_82", () => {
    let _test = test;

    _test("execution of memory_init_82: _inline_test_65 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_83", () => {
    let _test = test;

    _test("execution of memory_init_83: _inline_test_66 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_init_84", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_84.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_84: run (instance 0)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 65528, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_init_84: checkRange (instance 0)", () => {
        let _checkRange = module.getExport("checkRange");
        expect(_checkRange).not.toBeUndefined();
        let _checkRange_result = module.invoke(_checkRange, 0, 1, 0);
        expect(_checkRange_result).toBe(-1);
    });
});

describe("memory_init_85", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_85.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_85: run (instance 1)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 65527, 16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_init_85: checkRange (instance 1)", () => {
        let _checkRange = module.getExport("checkRange");
        expect(_checkRange).not.toBeUndefined();
        let _checkRange_result = module.invoke(_checkRange, 0, 1, 0);
        expect(_checkRange_result).toBe(-1);
    });
});

describe("memory_init_86", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_86.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_86: run (instance 2)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 65472, 30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_init_86: checkRange (instance 2)", () => {
        let _checkRange = module.getExport("checkRange");
        expect(_checkRange).not.toBeUndefined();
        let _checkRange_result = module.invoke(_checkRange, 0, 1, 0);
        expect(_checkRange_result).toBe(-1);
    });
});

describe("memory_init_87", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_87.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_87: run (instance 3)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 65473, 31).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_init_87: checkRange (instance 3)", () => {
        let _checkRange = module.getExport("checkRange");
        expect(_checkRange).not.toBeUndefined();
        let _checkRange_result = module.invoke(_checkRange, 0, 1, 0);
        expect(_checkRange_result).toBe(-1);
    });
});

describe("memory_init_88", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_88.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_88: run (instance 4)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() =>
            module.invoke(_run, 65528, 4294967040).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_init_88: checkRange (instance 4)", () => {
        let _checkRange = module.getExport("checkRange");
        expect(_checkRange).not.toBeUndefined();
        let _checkRange_result = module.invoke(_checkRange, 0, 1, 0);
        expect(_checkRange_result).toBe(-1);
    });
});

describe("memory_init_89", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_89.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_init_89: run (instance 5)", () => {
        let _run = module.getExport("run");
        expect(_run).not.toBeUndefined();
        expect(() => module.invoke(_run, 0, 4294967292).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_init_89: checkRange (instance 5)", () => {
        let _checkRange = module.getExport("checkRange");
        expect(_checkRange).not.toBeUndefined();
        let _checkRange_result = module.invoke(_checkRange, 0, 1, 0);
        expect(_checkRange_result).toBe(-1);
    });
});

describe("memory_init_90", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_init_90.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});
