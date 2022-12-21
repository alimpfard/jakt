let globalImportObject = {};
let namedModules = {};

describe("table_size_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/table_size_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of table_size_0: size-t0 (instance 0)", () => {
        let _size_t0 = module.getExport("size-t0");
        expect(_size_t0).not.toBeUndefined();
        let _size_t0_result = module.invoke(_size_t0);
        expect(_size_t0_result).toBe(0);
    });

    _test("execution of table_size_0: grow-t0 (instance 0)", () => {
        let _grow_t0 = module.getExport("grow-t0");
        expect(_grow_t0).not.toBeUndefined();
        let _grow_t0_result = module.invoke(_grow_t0, 1);
    });

    _test("execution of table_size_0: size-t0 (instance 1)", () => {
        let _size_t0 = module.getExport("size-t0");
        expect(_size_t0).not.toBeUndefined();
        let _size_t0_result = module.invoke(_size_t0);
        expect(_size_t0_result).toBe(1);
    });

    _test("execution of table_size_0: grow-t0 (instance 1)", () => {
        let _grow_t0 = module.getExport("grow-t0");
        expect(_grow_t0).not.toBeUndefined();
        let _grow_t0_result = module.invoke(_grow_t0, 4);
    });

    _test("execution of table_size_0: size-t0 (instance 2)", () => {
        let _size_t0 = module.getExport("size-t0");
        expect(_size_t0).not.toBeUndefined();
        let _size_t0_result = module.invoke(_size_t0);
        expect(_size_t0_result).toBe(5);
    });

    _test("execution of table_size_0: grow-t0 (instance 2)", () => {
        let _grow_t0 = module.getExport("grow-t0");
        expect(_grow_t0).not.toBeUndefined();
        let _grow_t0_result = module.invoke(_grow_t0, 0);
    });

    _test("execution of table_size_0: size-t0 (instance 3)", () => {
        let _size_t0 = module.getExport("size-t0");
        expect(_size_t0).not.toBeUndefined();
        let _size_t0_result = module.invoke(_size_t0);
        expect(_size_t0_result).toBe(5);
    });

    _test("execution of table_size_0: size-t1 (instance 0)", () => {
        let _size_t1 = module.getExport("size-t1");
        expect(_size_t1).not.toBeUndefined();
        let _size_t1_result = module.invoke(_size_t1);
        expect(_size_t1_result).toBe(1);
    });

    _test("execution of table_size_0: grow-t1 (instance 0)", () => {
        let _grow_t1 = module.getExport("grow-t1");
        expect(_grow_t1).not.toBeUndefined();
        let _grow_t1_result = module.invoke(_grow_t1, 1);
    });

    _test("execution of table_size_0: size-t1 (instance 1)", () => {
        let _size_t1 = module.getExport("size-t1");
        expect(_size_t1).not.toBeUndefined();
        let _size_t1_result = module.invoke(_size_t1);
        expect(_size_t1_result).toBe(2);
    });

    _test("execution of table_size_0: grow-t1 (instance 1)", () => {
        let _grow_t1 = module.getExport("grow-t1");
        expect(_grow_t1).not.toBeUndefined();
        let _grow_t1_result = module.invoke(_grow_t1, 4);
    });

    _test("execution of table_size_0: size-t1 (instance 2)", () => {
        let _size_t1 = module.getExport("size-t1");
        expect(_size_t1).not.toBeUndefined();
        let _size_t1_result = module.invoke(_size_t1);
        expect(_size_t1_result).toBe(6);
    });

    _test("execution of table_size_0: grow-t1 (instance 2)", () => {
        let _grow_t1 = module.getExport("grow-t1");
        expect(_grow_t1).not.toBeUndefined();
        let _grow_t1_result = module.invoke(_grow_t1, 0);
    });

    _test("execution of table_size_0: size-t1 (instance 3)", () => {
        let _size_t1 = module.getExport("size-t1");
        expect(_size_t1).not.toBeUndefined();
        let _size_t1_result = module.invoke(_size_t1);
        expect(_size_t1_result).toBe(6);
    });

    _test("execution of table_size_0: size-t2 (instance 0)", () => {
        let _size_t2 = module.getExport("size-t2");
        expect(_size_t2).not.toBeUndefined();
        let _size_t2_result = module.invoke(_size_t2);
        expect(_size_t2_result).toBe(0);
    });

    _test("execution of table_size_0: grow-t2 (instance 0)", () => {
        let _grow_t2 = module.getExport("grow-t2");
        expect(_grow_t2).not.toBeUndefined();
        let _grow_t2_result = module.invoke(_grow_t2, 3);
    });

    _test("execution of table_size_0: size-t2 (instance 1)", () => {
        let _size_t2 = module.getExport("size-t2");
        expect(_size_t2).not.toBeUndefined();
        let _size_t2_result = module.invoke(_size_t2);
        expect(_size_t2_result).toBe(0);
    });

    _test("execution of table_size_0: grow-t2 (instance 1)", () => {
        let _grow_t2 = module.getExport("grow-t2");
        expect(_grow_t2).not.toBeUndefined();
        let _grow_t2_result = module.invoke(_grow_t2, 1);
    });

    _test("execution of table_size_0: size-t2 (instance 2)", () => {
        let _size_t2 = module.getExport("size-t2");
        expect(_size_t2).not.toBeUndefined();
        let _size_t2_result = module.invoke(_size_t2);
        expect(_size_t2_result).toBe(1);
    });

    _test("execution of table_size_0: grow-t2 (instance 2)", () => {
        let _grow_t2 = module.getExport("grow-t2");
        expect(_grow_t2).not.toBeUndefined();
        let _grow_t2_result = module.invoke(_grow_t2, 0);
    });

    _test("execution of table_size_0: size-t2 (instance 3)", () => {
        let _size_t2 = module.getExport("size-t2");
        expect(_size_t2).not.toBeUndefined();
        let _size_t2_result = module.invoke(_size_t2);
        expect(_size_t2_result).toBe(1);
    });

    _test("execution of table_size_0: grow-t2 (instance 3)", () => {
        let _grow_t2 = module.getExport("grow-t2");
        expect(_grow_t2).not.toBeUndefined();
        let _grow_t2_result = module.invoke(_grow_t2, 4);
    });

    _test("execution of table_size_0: size-t2 (instance 4)", () => {
        let _size_t2 = module.getExport("size-t2");
        expect(_size_t2).not.toBeUndefined();
        let _size_t2_result = module.invoke(_size_t2);
        expect(_size_t2_result).toBe(1);
    });

    _test("execution of table_size_0: grow-t2 (instance 4)", () => {
        let _grow_t2 = module.getExport("grow-t2");
        expect(_grow_t2).not.toBeUndefined();
        let _grow_t2_result = module.invoke(_grow_t2, 1);
    });

    _test("execution of table_size_0: size-t2 (instance 5)", () => {
        let _size_t2 = module.getExport("size-t2");
        expect(_size_t2).not.toBeUndefined();
        let _size_t2_result = module.invoke(_size_t2);
        expect(_size_t2_result).toBe(2);
    });

    _test("execution of table_size_0: size-t3 (instance 0)", () => {
        let _size_t3 = module.getExport("size-t3");
        expect(_size_t3).not.toBeUndefined();
        let _size_t3_result = module.invoke(_size_t3);
        expect(_size_t3_result).toBe(3);
    });

    _test("execution of table_size_0: grow-t3 (instance 0)", () => {
        let _grow_t3 = module.getExport("grow-t3");
        expect(_grow_t3).not.toBeUndefined();
        let _grow_t3_result = module.invoke(_grow_t3, 1);
    });

    _test("execution of table_size_0: size-t3 (instance 1)", () => {
        let _size_t3 = module.getExport("size-t3");
        expect(_size_t3).not.toBeUndefined();
        let _size_t3_result = module.invoke(_size_t3);
        expect(_size_t3_result).toBe(4);
    });

    _test("execution of table_size_0: grow-t3 (instance 1)", () => {
        let _grow_t3 = module.getExport("grow-t3");
        expect(_grow_t3).not.toBeUndefined();
        let _grow_t3_result = module.invoke(_grow_t3, 3);
    });

    _test("execution of table_size_0: size-t3 (instance 2)", () => {
        let _size_t3 = module.getExport("size-t3");
        expect(_size_t3).not.toBeUndefined();
        let _size_t3_result = module.invoke(_size_t3);
        expect(_size_t3_result).toBe(7);
    });

    _test("execution of table_size_0: grow-t3 (instance 2)", () => {
        let _grow_t3 = module.getExport("grow-t3");
        expect(_grow_t3).not.toBeUndefined();
        let _grow_t3_result = module.invoke(_grow_t3, 0);
    });

    _test("execution of table_size_0: size-t3 (instance 3)", () => {
        let _size_t3 = module.getExport("size-t3");
        expect(_size_t3).not.toBeUndefined();
        let _size_t3_result = module.invoke(_size_t3);
        expect(_size_t3_result).toBe(7);
    });

    _test("execution of table_size_0: grow-t3 (instance 3)", () => {
        let _grow_t3 = module.getExport("grow-t3");
        expect(_grow_t3).not.toBeUndefined();
        let _grow_t3_result = module.invoke(_grow_t3, 2);
    });

    _test("execution of table_size_0: size-t3 (instance 4)", () => {
        let _size_t3 = module.getExport("size-t3");
        expect(_size_t3).not.toBeUndefined();
        let _size_t3_result = module.invoke(_size_t3);
        expect(_size_t3_result).toBe(7);
    });

    _test("execution of table_size_0: grow-t3 (instance 4)", () => {
        let _grow_t3 = module.getExport("grow-t3");
        expect(_grow_t3).not.toBeUndefined();
        let _grow_t3_result = module.invoke(_grow_t3, 1);
    });

    _test("execution of table_size_0: size-t3 (instance 5)", () => {
        let _size_t3 = module.getExport("size-t3");
        expect(_size_t3).not.toBeUndefined();
        let _size_t3_result = module.invoke(_size_t3);
        expect(_size_t3_result).toBe(8);
    });
});

describe("table_size_1", () => {
    let _test = test;

    _test("execution of table_size_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("table_size_2", () => {
    let _test = test;

    _test("execution of table_size_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
