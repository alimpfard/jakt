let globalImportObject = {};
let namedModules = {};

describe("float_memory_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_memory_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_memory_0: i32.load (instance 0)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2141192192);
    });

    _test("execution of float_memory_0: f32.load (instance 0)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });

    _test("execution of float_memory_0: reset (instance 0)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_0: i32.load (instance 1)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(0);
    });

    _test("execution of float_memory_0: f32.load (instance 1)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of float_memory_0: f32.store (instance 0)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        module.invoke(_f32_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_0: i32.load (instance 2)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2141192192);
    });

    _test("execution of float_memory_0: f32.load (instance 2)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });

    _test("execution of float_memory_0: reset (instance 1)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_0: i32.load (instance 3)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(0);
    });

    _test("execution of float_memory_0: f32.load (instance 3)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of float_memory_0: i32.store (instance 0)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        module.invoke(_i32_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_0: i32.load (instance 4)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2141192192);
    });

    _test("execution of float_memory_0: f32.load (instance 4)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });
});

describe("float_memory_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_memory_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_memory_1: i64.load (instance 0)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9219994337134247936n);
    });

    _test("execution of float_memory_1: f64.load (instance 0)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });

    _test("execution of float_memory_1: reset (instance 2)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_1: i64.load (instance 1)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(0n);
    });

    _test("execution of float_memory_1: f64.load (instance 1)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(0.0);
    });

    _test("execution of float_memory_1: f64.store (instance 0)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        module.invoke(_f64_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_1: i64.load (instance 2)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9219994337134247936n);
    });

    _test("execution of float_memory_1: f64.load (instance 2)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });

    _test("execution of float_memory_1: reset (instance 3)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_1: i64.load (instance 3)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(0n);
    });

    _test("execution of float_memory_1: f64.load (instance 3)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(0.0);
    });

    _test("execution of float_memory_1: i64.store (instance 0)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        module.invoke(_i64_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_1: i64.load (instance 4)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9219994337134247936n);
    });

    _test("execution of float_memory_1: f64.load (instance 4)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });
});

describe("float_memory_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_memory_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_memory_2: i32.load (instance 5)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2141192192);
    });

    _test("execution of float_memory_2: f32.load (instance 5)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });

    _test("execution of float_memory_2: reset (instance 4)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_2: i32.load (instance 6)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(0);
    });

    _test("execution of float_memory_2: f32.load (instance 6)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of float_memory_2: f32.store (instance 1)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        module.invoke(_f32_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_2: i32.load (instance 7)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2141192192);
    });

    _test("execution of float_memory_2: f32.load (instance 7)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });

    _test("execution of float_memory_2: reset (instance 5)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_2: i32.load (instance 8)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(0);
    });

    _test("execution of float_memory_2: f32.load (instance 8)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of float_memory_2: i32.store (instance 1)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        module.invoke(_i32_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_2: i32.load (instance 9)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2141192192);
    });

    _test("execution of float_memory_2: f32.load (instance 9)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });
});

describe("float_memory_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_memory_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_memory_3: i64.load (instance 5)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9219994337134247936n);
    });

    _test("execution of float_memory_3: f64.load (instance 5)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });

    _test("execution of float_memory_3: reset (instance 6)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_3: i64.load (instance 6)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(0n);
    });

    _test("execution of float_memory_3: f64.load (instance 6)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(0.0);
    });

    _test("execution of float_memory_3: f64.store (instance 1)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        module.invoke(_f64_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_3: i64.load (instance 7)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9219994337134247936n);
    });

    _test("execution of float_memory_3: f64.load (instance 7)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });

    _test("execution of float_memory_3: reset (instance 7)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_3: i64.load (instance 8)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(0n);
    });

    _test("execution of float_memory_3: f64.load (instance 8)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(0.0);
    });

    _test("execution of float_memory_3: i64.store (instance 1)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        module.invoke(_i64_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_3: i64.load (instance 9)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9219994337134247936n);
    });

    _test("execution of float_memory_3: f64.load (instance 9)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });
});

describe("float_memory_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_memory_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_memory_4: i32.load (instance 10)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2144337921);
    });

    _test("execution of float_memory_4: f32.load (instance 10)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });

    _test("execution of float_memory_4: reset (instance 8)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_4: i32.load (instance 11)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(0);
    });

    _test("execution of float_memory_4: f32.load (instance 11)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of float_memory_4: f32.store (instance 2)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        module.invoke(_f32_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_4: i32.load (instance 12)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2144337921);
    });

    _test("execution of float_memory_4: f32.load (instance 12)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });

    _test("execution of float_memory_4: reset (instance 9)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_4: i32.load (instance 13)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(0);
    });

    _test("execution of float_memory_4: f32.load (instance 13)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of float_memory_4: i32.store (instance 2)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        module.invoke(_i32_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_4: i32.load (instance 14)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load);
        expect(_i32_load_result).toBe(2144337921);
    });

    _test("execution of float_memory_4: f32.load (instance 14)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load);
        expect(_f32_load_result).toBe(NaN);
    });
});

describe("float_memory_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/float_memory_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of float_memory_5: i64.load (instance 10)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9222246136947933185n);
    });

    _test("execution of float_memory_5: f64.load (instance 10)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });

    _test("execution of float_memory_5: reset (instance 10)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_5: i64.load (instance 11)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(0n);
    });

    _test("execution of float_memory_5: f64.load (instance 11)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(0.0);
    });

    _test("execution of float_memory_5: f64.store (instance 2)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        module.invoke(_f64_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_5: i64.load (instance 12)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9222246136947933185n);
    });

    _test("execution of float_memory_5: f64.load (instance 12)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });

    _test("execution of float_memory_5: reset (instance 11)", () => {
        let _reset = module.getExport("reset");
        expect(_reset).not.toBeUndefined();
        module.invoke(_reset, 0, 0, 0);
    });

    _test("execution of float_memory_5: i64.load (instance 13)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(0n);
    });

    _test("execution of float_memory_5: f64.load (instance 13)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(0.0);
    });

    _test("execution of float_memory_5: i64.store (instance 2)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        module.invoke(_i64_store, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of float_memory_5: i64.load (instance 14)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load);
        expect(_i64_load_result).toBe(9222246136947933185n);
    });

    _test("execution of float_memory_5: f64.load (instance 14)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load);
        expect(_f64_load_result).toBe(NaN);
    });
});
