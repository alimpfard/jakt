let globalImportObject = {};
let namedModules = {};

describe("simd_address_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_address_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_address_0: load_data_1 (instance 0)", () => {
        let _load_data_1 = module.getExport("load_data_1");
        expect(_load_data_1).not.toBeUndefined();
        let _load_data_1_result = module.invoke(_load_data_1, 0);
        expect(_load_data_1_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_2 (instance 0)", () => {
        let _load_data_2 = module.getExport("load_data_2");
        expect(_load_data_2).not.toBeUndefined();
        let _load_data_2_result = module.invoke(_load_data_2, 0);
        expect(_load_data_2_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_3 (instance 0)", () => {
        let _load_data_3 = module.getExport("load_data_3");
        expect(_load_data_3).not.toBeUndefined();
        let _load_data_3_result = module.invoke(_load_data_3, 0);
        expect(_load_data_3_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_4 (instance 0)", () => {
        let _load_data_4 = module.getExport("load_data_4");
        expect(_load_data_4).not.toBeUndefined();
        let _load_data_4_result = module.invoke(_load_data_4, 0);
        expect(_load_data_4_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_5 (instance 0)", () => {
        let _load_data_5 = module.getExport("load_data_5");
        expect(_load_data_5).not.toBeUndefined();
        let _load_data_5_result = module.invoke(_load_data_5, 0);
        expect(_load_data_5_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_1 (instance 1)", () => {
        let _load_data_1 = module.getExport("load_data_1");
        expect(_load_data_1).not.toBeUndefined();
        let _load_data_1_result = module.invoke(_load_data_1, 0);
        expect(_load_data_1_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_2 (instance 1)", () => {
        let _load_data_2 = module.getExport("load_data_2");
        expect(_load_data_2).not.toBeUndefined();
        let _load_data_2_result = module.invoke(_load_data_2, 0);
        expect(_load_data_2_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_3 (instance 1)", () => {
        let _load_data_3 = module.getExport("load_data_3");
        expect(_load_data_3).not.toBeUndefined();
        let _load_data_3_result = module.invoke(_load_data_3, 0);
        expect(_load_data_3_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_4 (instance 1)", () => {
        let _load_data_4 = module.getExport("load_data_4");
        expect(_load_data_4).not.toBeUndefined();
        let _load_data_4_result = module.invoke(_load_data_4, 0);
        expect(_load_data_4_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_5 (instance 1)", () => {
        let _load_data_5 = module.getExport("load_data_5");
        expect(_load_data_5).not.toBeUndefined();
        let _load_data_5_result = module.invoke(_load_data_5, 0);
        expect(_load_data_5_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_1 (instance 2)", () => {
        let _load_data_1 = module.getExport("load_data_1");
        expect(_load_data_1).not.toBeUndefined();
        let _load_data_1_result = module.invoke(_load_data_1, 0);
        expect(_load_data_1_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_2 (instance 2)", () => {
        let _load_data_2 = module.getExport("load_data_2");
        expect(_load_data_2).not.toBeUndefined();
        let _load_data_2_result = module.invoke(_load_data_2, 0);
        expect(_load_data_2_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_3 (instance 2)", () => {
        let _load_data_3 = module.getExport("load_data_3");
        expect(_load_data_3).not.toBeUndefined();
        let _load_data_3_result = module.invoke(_load_data_3, 0);
        expect(_load_data_3_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_4 (instance 2)", () => {
        let _load_data_4 = module.getExport("load_data_4");
        expect(_load_data_4).not.toBeUndefined();
        let _load_data_4_result = module.invoke(_load_data_4, 0);
        expect(_load_data_4_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_5 (instance 2)", () => {
        let _load_data_5 = module.getExport("load_data_5");
        expect(_load_data_5).not.toBeUndefined();
        let _load_data_5_result = module.invoke(_load_data_5, 0);
        expect(_load_data_5_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_1 (instance 3)", () => {
        let _load_data_1 = module.getExport("load_data_1");
        expect(_load_data_1).not.toBeUndefined();
        let _load_data_1_result = module.invoke(_load_data_1, 65505);
        expect(_load_data_1_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_2 (instance 3)", () => {
        let _load_data_2 = module.getExport("load_data_2");
        expect(_load_data_2).not.toBeUndefined();
        let _load_data_2_result = module.invoke(_load_data_2, 65505);
        expect(_load_data_2_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_3 (instance 3)", () => {
        let _load_data_3 = module.getExport("load_data_3");
        expect(_load_data_3).not.toBeUndefined();
        let _load_data_3_result = module.invoke(_load_data_3, 65505);
        expect(_load_data_3_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_4 (instance 3)", () => {
        let _load_data_4 = module.getExport("load_data_4");
        expect(_load_data_4).not.toBeUndefined();
        let _load_data_4_result = module.invoke(_load_data_4, 65505);
        expect(_load_data_4_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_5 (instance 3)", () => {
        let _load_data_5 = module.getExport("load_data_5");
        expect(_load_data_5).not.toBeUndefined();
        let _load_data_5_result = module.invoke(_load_data_5, 65505);
        expect(_load_data_5_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_1 (instance 4)", () => {
        let _load_data_1 = module.getExport("load_data_1");
        expect(_load_data_1).not.toBeUndefined();
        let _load_data_1_result = module.invoke(_load_data_1, 65505);
        expect(_load_data_1_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_2 (instance 4)", () => {
        let _load_data_2 = module.getExport("load_data_2");
        expect(_load_data_2).not.toBeUndefined();
        let _load_data_2_result = module.invoke(_load_data_2, 65505);
        expect(_load_data_2_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_3 (instance 4)", () => {
        let _load_data_3 = module.getExport("load_data_3");
        expect(_load_data_3).not.toBeUndefined();
        let _load_data_3_result = module.invoke(_load_data_3, 65505);
        expect(_load_data_3_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_4 (instance 4)", () => {
        let _load_data_4 = module.getExport("load_data_4");
        expect(_load_data_4).not.toBeUndefined();
        let _load_data_4_result = module.invoke(_load_data_4, 65505);
        expect(_load_data_4_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_5 (instance 4)", () => {
        let _load_data_5 = module.getExport("load_data_5");
        expect(_load_data_5).not.toBeUndefined();
        let _load_data_5_result = module.invoke(_load_data_5, 65505);
        expect(_load_data_5_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_1 (instance 5)", () => {
        let _load_data_1 = module.getExport("load_data_1");
        expect(_load_data_1).not.toBeUndefined();
        let _load_data_1_result = module.invoke(_load_data_1, 65505);
        expect(_load_data_1_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_2 (instance 5)", () => {
        let _load_data_2 = module.getExport("load_data_2");
        expect(_load_data_2).not.toBeUndefined();
        let _load_data_2_result = module.invoke(_load_data_2, 65505);
        expect(_load_data_2_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_3 (instance 5)", () => {
        let _load_data_3 = module.getExport("load_data_3");
        expect(_load_data_3).not.toBeUndefined();
        let _load_data_3_result = module.invoke(_load_data_3, 65505);
        expect(_load_data_3_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_4 (instance 5)", () => {
        let _load_data_4 = module.getExport("load_data_4");
        expect(_load_data_4).not.toBeUndefined();
        let _load_data_4_result = module.invoke(_load_data_4, 65505);
        expect(_load_data_4_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_5 (instance 5)", () => {
        let _load_data_5 = module.getExport("load_data_5");
        expect(_load_data_5).not.toBeUndefined();
        let _load_data_5_result = module.invoke(_load_data_5, 65505);
        expect(_load_data_5_result).toBe(0);
    });

    _test("execution of simd_address_0: load_data_3 (instance 6)", () => {
        let _load_data_3 = module.getExport("load_data_3");
        expect(_load_data_3).not.toBeUndefined();
        expect(() => module.invoke(_load_data_3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_address_0: load_data_5 (instance 6)", () => {
        let _load_data_5 = module.getExport("load_data_5");
        expect(_load_data_5).not.toBeUndefined();
        expect(() => module.invoke(_load_data_5, 65506).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_address_0: store_data_0 (instance 0)", () => {
        let _store_data_0 = module.getExport("store_data_0");
        expect(_store_data_0).not.toBeUndefined();
        let _store_data_0_result = module.invoke(_store_data_0);
        expect(_store_data_0_result).toBe(0);
    });

    _test("execution of simd_address_0: store_data_1 (instance 0)", () => {
        let _store_data_1 = module.getExport("store_data_1");
        expect(_store_data_1).not.toBeUndefined();
        let _store_data_1_result = module.invoke(_store_data_1);
        expect(_store_data_1_result).toBe(0);
    });

    _test("execution of simd_address_0: store_data_2 (instance 0)", () => {
        let _store_data_2 = module.getExport("store_data_2");
        expect(_store_data_2).not.toBeUndefined();
        let _store_data_2_result = module.invoke(_store_data_2);
        expect(_store_data_2_result).toBe(0);
    });

    _test("execution of simd_address_0: store_data_3 (instance 0)", () => {
        let _store_data_3 = module.getExport("store_data_3");
        expect(_store_data_3).not.toBeUndefined();
        let _store_data_3_result = module.invoke(_store_data_3);
        expect(_store_data_3_result).toBe(0);
    });

    _test("execution of simd_address_0: store_data_4 (instance 0)", () => {
        let _store_data_4 = module.getExport("store_data_4");
        expect(_store_data_4).not.toBeUndefined();
        let _store_data_4_result = module.invoke(_store_data_4);
        expect(_store_data_4_result).toBe(0);
    });

    _test("execution of simd_address_0: store_data_5 (instance 0)", () => {
        let _store_data_5 = module.getExport("store_data_5");
        expect(_store_data_5).not.toBeUndefined();
        let _store_data_5_result = module.invoke(_store_data_5);
        expect(_store_data_5_result).toBe(0);
    });

    _test("execution of simd_address_0: store_data_6 (instance 0)", () => {
        let _store_data_6 = module.getExport("store_data_6");
        expect(_store_data_6).not.toBeUndefined();
        expect(() => module.invoke(_store_data_6, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_address_0: store_data_6 (instance 1)", () => {
        let _store_data_6 = module.getExport("store_data_6");
        expect(_store_data_6).not.toBeUndefined();
        expect(() => module.invoke(_store_data_6, 65535).toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_address_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_address_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_address_1: v128.load_offset_65521 (instance 0)", () => {
        let _v128_load_offset_65521 = module.getExport("v128.load_offset_65521");
        expect(_v128_load_offset_65521).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load_offset_65521).toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("simd_address_2", () => {
    let _test = test;

    _test("execution of simd_address_2: _inline_test_0 (instance 0)", () => {});
});

describe("simd_address_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_address_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_address_3: v128.store_offset_65521 (instance 0)", () => {
        let _v128_store_offset_65521 = module.getExport("v128.store_offset_65521");
        expect(_v128_store_offset_65521).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_store_offset_65521).toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("simd_address_4", () => {
    let _test = test;

    _test("execution of simd_address_4: _inline_test_1 (instance 0)", () => {});
});

describe("simd_address_5", () => {
    let _test = test;

    _test("execution of simd_address_5: _inline_test_2 (instance 0)", () => {});
});

describe("simd_address_6", () => {
    let _test = test;

    _test("execution of simd_address_6: _inline_test_3 (instance 0)", () => {});
});
