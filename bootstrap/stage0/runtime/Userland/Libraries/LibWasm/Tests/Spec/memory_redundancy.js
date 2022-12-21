let globalImportObject = {};
let namedModules = {};

describe("memory_redundancy_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/memory_redundancy_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of memory_redundancy_0: test_store_to_load (instance 0)", () => {
        let _test_store_to_load = module.getExport("test_store_to_load");
        expect(_test_store_to_load).not.toBeUndefined();
        let _test_store_to_load_result = module.invoke(_test_store_to_load);
        expect(_test_store_to_load_result).toBe(128);
    });

    _test("execution of memory_redundancy_0: zero_everything (instance 0)", () => {
        let _zero_everything = module.getExport("zero_everything");
        expect(_zero_everything).not.toBeUndefined();
        module.invoke(_zero_everything, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of memory_redundancy_0: test_redundant_load (instance 0)", () => {
        let _test_redundant_load = module.getExport("test_redundant_load");
        expect(_test_redundant_load).not.toBeUndefined();
        let _test_redundant_load_result = module.invoke(_test_redundant_load);
        expect(_test_redundant_load_result).toBe(128);
    });

    _test("execution of memory_redundancy_0: zero_everything (instance 1)", () => {
        let _zero_everything = module.getExport("zero_everything");
        expect(_zero_everything).not.toBeUndefined();
        module.invoke(_zero_everything, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of memory_redundancy_0: test_dead_store (instance 0)", () => {
        let _test_dead_store = module.getExport("test_dead_store");
        expect(_test_dead_store).not.toBeUndefined();
        let _test_dead_store_result = module.invoke(_test_dead_store);
        expect(_test_dead_store_result).toBe(4.90454462513686e-44);
    });

    _test("execution of memory_redundancy_0: zero_everything (instance 2)", () => {
        let _zero_everything = module.getExport("zero_everything");
        expect(_zero_everything).not.toBeUndefined();
        module.invoke(_zero_everything, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    });

    _test("execution of memory_redundancy_0: malloc_aliasing (instance 0)", () => {
        let _malloc_aliasing = module.getExport("malloc_aliasing");
        expect(_malloc_aliasing).not.toBeUndefined();
        let _malloc_aliasing_result = module.invoke(_malloc_aliasing);
        expect(_malloc_aliasing_result).toBe(43);
    });
});
