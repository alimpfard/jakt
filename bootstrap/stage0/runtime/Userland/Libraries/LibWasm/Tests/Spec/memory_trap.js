let globalImportObject = {};
let namedModules = {};

describe("memory_trap_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_trap_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_trap_0: store (instance 0)", () => {
        let _store = module.getExport("store");
        expect(_store).not.toBeUndefined();
        let _store_result = module.invoke(_store, -4, 42);
    });

    _test("execution of memory_trap_0: load (instance 0)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = module.invoke(_load, -4);
        expect(_load_result).toBe(42);
    });

    _test("execution of memory_trap_0: store (instance 1)", () => {
        let _store = module.getExport("store");
        expect(_store).not.toBeUndefined();
        expect(() => module.invoke(_store, -3, 305419896).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: load (instance 1)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        expect(() => module.invoke(_load, -3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: store (instance 2)", () => {
        let _store = module.getExport("store");
        expect(_store).not.toBeUndefined();
        expect(() => module.invoke(_store, -2, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: load (instance 2)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        expect(() => module.invoke(_load, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: store (instance 3)", () => {
        let _store = module.getExport("store");
        expect(_store).not.toBeUndefined();
        expect(() => module.invoke(_store, -1, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: load (instance 3)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        expect(() => module.invoke(_load, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: store (instance 4)", () => {
        let _store = module.getExport("store");
        expect(_store).not.toBeUndefined();
        expect(() => module.invoke(_store, 0, 13).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: load (instance 4)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        expect(() => module.invoke(_load, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: store (instance 5)", () => {
        let _store = module.getExport("store");
        expect(_store).not.toBeUndefined();
        expect(() =>
            module.invoke(_store, -2147483648, 13).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_0: load (instance 5)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        expect(() => module.invoke(_load, -2147483648).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_0: memory.grow (instance 0)", () => {
        let _memory_grow = module.getExport("memory.grow");
        expect(_memory_grow).not.toBeUndefined();
        let _memory_grow_result = module.invoke(_memory_grow, 65537);
        expect(_memory_grow_result).toBe(-1);
    });
});

describe("memory_trap_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_trap_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_trap_1: i32.store (instance 0)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, 65536, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store (instance 1)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, 65535, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store (instance 2)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, 65534, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store (instance 3)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, 65533, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store (instance 4)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, -1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store (instance 5)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, -2, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store (instance 6)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, -3, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store (instance 7)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() => module.invoke(_i32_store, -4, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 0)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65536, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 1)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65535, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 2)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65534, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 3)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65533, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 4)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65532, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 5)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65531, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 6)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65530, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 7)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, 65529, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 8)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -1, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 9)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -2, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 10)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -3, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 11)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -4, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 12)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -5, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 13)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -6, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 14)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -7, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store (instance 15)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() => module.invoke(_i64_store, -8, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 0)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, 65536, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 1)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, 65535, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 2)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, 65534, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 3)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, 65533, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 4)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, -1, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 5)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, -2, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 6)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, -3, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.store (instance 7)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() => module.invoke(_f32_store, -4, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 0)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65536, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 1)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65535, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 2)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65534, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 3)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65533, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 4)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65532, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 5)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65531, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 6)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65530, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 7)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, 65529, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 8)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -1, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 9)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -2, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 10)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -3, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 11)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -4, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 12)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -5, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 13)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -6, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 14)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -7, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.store (instance 15)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() => module.invoke(_f64_store, -8, 0.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store8 (instance 0)", () => {
        let _i32_store8 = module.getExport("i32.store8");
        expect(_i32_store8).not.toBeUndefined();
        expect(() => module.invoke(_i32_store8, 65536, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store8 (instance 1)", () => {
        let _i32_store8 = module.getExport("i32.store8");
        expect(_i32_store8).not.toBeUndefined();
        expect(() => module.invoke(_i32_store8, -1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store16 (instance 0)", () => {
        let _i32_store16 = module.getExport("i32.store16");
        expect(_i32_store16).not.toBeUndefined();
        expect(() => module.invoke(_i32_store16, 65536, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store16 (instance 1)", () => {
        let _i32_store16 = module.getExport("i32.store16");
        expect(_i32_store16).not.toBeUndefined();
        expect(() => module.invoke(_i32_store16, 65535, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store16 (instance 2)", () => {
        let _i32_store16 = module.getExport("i32.store16");
        expect(_i32_store16).not.toBeUndefined();
        expect(() => module.invoke(_i32_store16, -1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.store16 (instance 3)", () => {
        let _i32_store16 = module.getExport("i32.store16");
        expect(_i32_store16).not.toBeUndefined();
        expect(() => module.invoke(_i32_store16, -2, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store8 (instance 0)", () => {
        let _i64_store8 = module.getExport("i64.store8");
        expect(_i64_store8).not.toBeUndefined();
        expect(() => module.invoke(_i64_store8, 65536, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store8 (instance 1)", () => {
        let _i64_store8 = module.getExport("i64.store8");
        expect(_i64_store8).not.toBeUndefined();
        expect(() => module.invoke(_i64_store8, -1, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store16 (instance 0)", () => {
        let _i64_store16 = module.getExport("i64.store16");
        expect(_i64_store16).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_store16, 65536, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i64.store16 (instance 1)", () => {
        let _i64_store16 = module.getExport("i64.store16");
        expect(_i64_store16).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_store16, 65535, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i64.store16 (instance 2)", () => {
        let _i64_store16 = module.getExport("i64.store16");
        expect(_i64_store16).not.toBeUndefined();
        expect(() => module.invoke(_i64_store16, -1, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store16 (instance 3)", () => {
        let _i64_store16 = module.getExport("i64.store16");
        expect(_i64_store16).not.toBeUndefined();
        expect(() => module.invoke(_i64_store16, -2, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store32 (instance 0)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_store32, 65536, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i64.store32 (instance 1)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_store32, 65535, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i64.store32 (instance 2)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_store32, 65534, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i64.store32 (instance 3)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_store32, 65533, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i64.store32 (instance 4)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() => module.invoke(_i64_store32, -1, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store32 (instance 5)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() => module.invoke(_i64_store32, -2, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store32 (instance 6)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() => module.invoke(_i64_store32, -3, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.store32 (instance 7)", () => {
        let _i64_store32 = module.getExport("i64.store32");
        expect(_i64_store32).not.toBeUndefined();
        expect(() => module.invoke(_i64_store32, -4, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 0)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 1)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 2)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, 65534).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 3)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, 65533).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 4)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 5)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 6)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, -3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load (instance 7)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        expect(() => module.invoke(_i32_load, -4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 0)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 1)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 2)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65534).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 3)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65533).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 4)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65532).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 5)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65531).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 6)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65530).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 7)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, 65529).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 8)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 9)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 10)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 11)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 12)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 13)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 14)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 15)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        expect(() => module.invoke(_i64_load, -8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 0)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 1)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 2)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, 65534).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 3)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, 65533).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 4)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 5)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 6)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, -3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f32.load (instance 7)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        expect(() => module.invoke(_f32_load, -4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 0)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 1)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 2)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65534).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 3)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65533).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 4)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65532).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 5)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65531).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 6)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65530).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 7)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, 65529).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 8)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 9)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 10)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 11)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 12)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -5).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 13)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -6).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 14)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: f64.load (instance 15)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        expect(() => module.invoke(_f64_load, -8).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load8_s (instance 0)", () => {
        let _i32_load8_s = module.getExport("i32.load8_s");
        expect(_i32_load8_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_load8_s, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load8_s (instance 1)", () => {
        let _i32_load8_s = module.getExport("i32.load8_s");
        expect(_i32_load8_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_load8_s, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load8_u (instance 0)", () => {
        let _i32_load8_u = module.getExport("i32.load8_u");
        expect(_i32_load8_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_load8_u, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load8_u (instance 1)", () => {
        let _i32_load8_u = module.getExport("i32.load8_u");
        expect(_i32_load8_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_load8_u, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_s (instance 0)", () => {
        let _i32_load16_s = module.getExport("i32.load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_s, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_s (instance 1)", () => {
        let _i32_load16_s = module.getExport("i32.load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_s, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_s (instance 2)", () => {
        let _i32_load16_s = module.getExport("i32.load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_s, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_s (instance 3)", () => {
        let _i32_load16_s = module.getExport("i32.load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_s, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_u (instance 0)", () => {
        let _i32_load16_u = module.getExport("i32.load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_u, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_u (instance 1)", () => {
        let _i32_load16_u = module.getExport("i32.load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_u, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_u (instance 2)", () => {
        let _i32_load16_u = module.getExport("i32.load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_u, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i32.load16_u (instance 3)", () => {
        let _i32_load16_u = module.getExport("i32.load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_load16_u, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load8_s (instance 0)", () => {
        let _i64_load8_s = module.getExport("i64.load8_s");
        expect(_i64_load8_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load8_s, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load8_s (instance 1)", () => {
        let _i64_load8_s = module.getExport("i64.load8_s");
        expect(_i64_load8_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load8_s, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load8_u (instance 0)", () => {
        let _i64_load8_u = module.getExport("i64.load8_u");
        expect(_i64_load8_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load8_u, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load8_u (instance 1)", () => {
        let _i64_load8_u = module.getExport("i64.load8_u");
        expect(_i64_load8_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load8_u, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_s (instance 0)", () => {
        let _i64_load16_s = module.getExport("i64.load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_s, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_s (instance 1)", () => {
        let _i64_load16_s = module.getExport("i64.load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_s, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_s (instance 2)", () => {
        let _i64_load16_s = module.getExport("i64.load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_s, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_s (instance 3)", () => {
        let _i64_load16_s = module.getExport("i64.load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_s, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_u (instance 0)", () => {
        let _i64_load16_u = module.getExport("i64.load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_u, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_u (instance 1)", () => {
        let _i64_load16_u = module.getExport("i64.load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_u, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_u (instance 2)", () => {
        let _i64_load16_u = module.getExport("i64.load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_u, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load16_u (instance 3)", () => {
        let _i64_load16_u = module.getExport("i64.load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load16_u, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 0)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 1)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 2)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, 65534).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 3)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, 65533).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 4)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 5)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 6)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, -3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_s (instance 7)", () => {
        let _i64_load32_s = module.getExport("i64.load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_s, -4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 0)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, 65536).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 1)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, 65535).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 2)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, 65534).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 3)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, 65533).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 4)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 5)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, -2).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 6)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, -3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load32_u (instance 7)", () => {
        let _i64_load32_u = module.getExport("i64.load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_load32_u, -4).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of memory_trap_1: i64.load (instance 16)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load, 65528);
        expect(_i64_load_result).toBe(7523094288207667809n);
    });

    _test("execution of memory_trap_1: i64.load (instance 17)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load, 0);
        expect(_i64_load_result).toBe(7523094288207667809n);
    });

    _test("execution of memory_trap_1: i64.store (instance 16)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        let _i64_store_result = module.invoke(_i64_store, 65528, 0n);
    });

    _test("execution of memory_trap_1: i32.store (instance 8)", () => {
        let _i32_store = module.getExport("i32.store");
        expect(_i32_store).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_store, 65533, 305419896).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i32.load (instance 8)", () => {
        let _i32_load = module.getExport("i32.load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load, 65532);
        expect(_i32_load_result).toBe(0);
    });

    _test("execution of memory_trap_1: i64.store (instance 17)", () => {
        let _i64_store = module.getExport("i64.store");
        expect(_i64_store).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_store, 65529, 1311768467294899695n)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: i64.load (instance 18)", () => {
        let _i64_load = module.getExport("i64.load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load, 65528);
        expect(_i64_load_result).toBe(0n);
    });

    _test("execution of memory_trap_1: f32.store (instance 8)", () => {
        let _f32_store = module.getExport("f32.store");
        expect(_f32_store).not.toBeUndefined();
        expect(() =>
            module.invoke(_f32_store, 65533, 305419896.0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: f32.load (instance 8)", () => {
        let _f32_load = module.getExport("f32.load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 65532);
        expect(_f32_load_result).toBe(0.0);
    });

    _test("execution of memory_trap_1: f64.store (instance 16)", () => {
        let _f64_store = module.getExport("f64.store");
        expect(_f64_store).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_f64_store, 65529, 1.3117684672948997e18)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of memory_trap_1: f64.load (instance 16)", () => {
        let _f64_load = module.getExport("f64.load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 65528);
        expect(_f64_load_result).toBe(0.0);
    });
});
