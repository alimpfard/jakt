let globalImportObject = {};
let namedModules = {};

describe("memory_size_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_size_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_size_0: size (instance 0)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(0);
    });

    _test("execution of memory_size_0: grow (instance 0)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
    });

    _test("execution of memory_size_0: size (instance 1)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(1);
    });

    _test("execution of memory_size_0: grow (instance 1)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 4);
    });

    _test("execution of memory_size_0: size (instance 2)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(5);
    });

    _test("execution of memory_size_0: grow (instance 2)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
    });

    _test("execution of memory_size_0: size (instance 3)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(5);
    });
});

describe("memory_size_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_size_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_size_1: size (instance 4)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(1);
    });

    _test("execution of memory_size_1: grow (instance 3)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
    });

    _test("execution of memory_size_1: size (instance 5)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(2);
    });

    _test("execution of memory_size_1: grow (instance 4)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 4);
    });

    _test("execution of memory_size_1: size (instance 6)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(6);
    });

    _test("execution of memory_size_1: grow (instance 5)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
    });

    _test("execution of memory_size_1: size (instance 7)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(6);
    });
});

describe("memory_size_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_size_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_size_2: size (instance 8)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(0);
    });

    _test("execution of memory_size_2: grow (instance 6)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 3);
    });

    _test("execution of memory_size_2: size (instance 9)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(0);
    });

    _test("execution of memory_size_2: grow (instance 7)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
    });

    _test("execution of memory_size_2: size (instance 10)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(1);
    });

    _test("execution of memory_size_2: grow (instance 8)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
    });

    _test("execution of memory_size_2: size (instance 11)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(1);
    });

    _test("execution of memory_size_2: grow (instance 9)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 4);
    });

    _test("execution of memory_size_2: size (instance 12)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(1);
    });

    _test("execution of memory_size_2: grow (instance 10)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
    });

    _test("execution of memory_size_2: size (instance 13)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(2);
    });
});

describe("memory_size_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_size_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_size_3: size (instance 14)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(3);
    });

    _test("execution of memory_size_3: grow (instance 11)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
    });

    _test("execution of memory_size_3: size (instance 15)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(4);
    });

    _test("execution of memory_size_3: grow (instance 12)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 3);
    });

    _test("execution of memory_size_3: size (instance 16)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(7);
    });

    _test("execution of memory_size_3: grow (instance 13)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
    });

    _test("execution of memory_size_3: size (instance 17)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(7);
    });

    _test("execution of memory_size_3: grow (instance 14)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 2);
    });

    _test("execution of memory_size_3: size (instance 18)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(7);
    });

    _test("execution of memory_size_3: grow (instance 15)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
    });

    _test("execution of memory_size_3: size (instance 19)", () => {
        let _size = module.getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = module.invoke(_size);
        expect(_size_result).toBe(8);
    });
});

describe("memory_size_4", () => {
    let _test = test;

    _test("execution of memory_size_4: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("memory_size_5", () => {
    let _test = test;

    _test("execution of memory_size_5: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
