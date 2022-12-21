let globalImportObject = {};
let namedModules = {};

describe("func_ptrs_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/func_ptrs_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of func_ptrs_0: one (instance 0)", () => {
        let _one = module.getExport("one");
        expect(_one).not.toBeUndefined();
        let _one_result = module.invoke(_one);
        expect(_one_result).toBe(13);
    });

    _test("execution of func_ptrs_0: two (instance 0)", () => {
        let _two = module.getExport("two");
        expect(_two).not.toBeUndefined();
        let _two_result = module.invoke(_two, 13);
        expect(_two_result).toBe(14);
    });

    _test("execution of func_ptrs_0: three (instance 0)", () => {
        let _three = module.getExport("three");
        expect(_three).not.toBeUndefined();
        let _three_result = module.invoke(_three, 13);
        expect(_three_result).toBe(11);
    });

    _test("execution of func_ptrs_0: four (instance 0)", () => {
        let _four = module.getExport("four");
        expect(_four).not.toBeUndefined();
        module.invoke(_four, 0, 0);
    });
});

describe("func_ptrs_1", () => {
    let _test = test;

    _test("execution of func_ptrs_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_2", () => {
    let _test = test;

    _test("execution of func_ptrs_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_3", () => {
    let _test = test;

    _test("execution of func_ptrs_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_4", () => {
    let _test = test;

    _test("execution of func_ptrs_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_5", () => {
    let _test = test;

    _test("execution of func_ptrs_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_6", () => {
    let _test = test;

    _test("execution of func_ptrs_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_7", () => {
    let _test = test;

    _test("execution of func_ptrs_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/func_ptrs_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of func_ptrs_8: callt (instance 0)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 0);
        expect(_callt_result).toBe(1);
    });

    _test("execution of func_ptrs_8: callt (instance 1)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 1);
        expect(_callt_result).toBe(2);
    });

    _test("execution of func_ptrs_8: callt (instance 2)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 2);
        expect(_callt_result).toBe(3);
    });

    _test("execution of func_ptrs_8: callt (instance 3)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 3);
        expect(_callt_result).toBe(4);
    });

    _test("execution of func_ptrs_8: callt (instance 4)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 4);
        expect(_callt_result).toBe(5);
    });

    _test("execution of func_ptrs_8: callt (instance 5)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 5);
        expect(_callt_result).toBe(1);
    });

    _test("execution of func_ptrs_8: callt (instance 6)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 6);
        expect(_callt_result).toBe(3);
    });

    _test("execution of func_ptrs_8: callt (instance 7)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        expect(() => module.invoke(_callt, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of func_ptrs_8: callt (instance 8)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        expect(() => module.invoke(_callt, 100).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of func_ptrs_8: callt (instance 9)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        expect(() => module.invoke(_callt, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of func_ptrs_8: callu (instance 0)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        let _callu_result = module.invoke(_callu, 0);
        expect(_callu_result).toBe(1);
    });

    _test("execution of func_ptrs_8: callu (instance 1)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        let _callu_result = module.invoke(_callu, 1);
        expect(_callu_result).toBe(2);
    });

    _test("execution of func_ptrs_8: callu (instance 2)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        let _callu_result = module.invoke(_callu, 2);
        expect(_callu_result).toBe(3);
    });

    _test("execution of func_ptrs_8: callu (instance 3)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        let _callu_result = module.invoke(_callu, 3);
        expect(_callu_result).toBe(4);
    });

    _test("execution of func_ptrs_8: callu (instance 4)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        let _callu_result = module.invoke(_callu, 4);
        expect(_callu_result).toBe(5);
    });

    _test("execution of func_ptrs_8: callu (instance 5)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        let _callu_result = module.invoke(_callu, 5);
        expect(_callu_result).toBe(1);
    });

    _test("execution of func_ptrs_8: callu (instance 6)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        let _callu_result = module.invoke(_callu, 6);
        expect(_callu_result).toBe(3);
    });

    _test("execution of func_ptrs_8: callu (instance 7)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        expect(() => module.invoke(_callu, 7).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of func_ptrs_8: callu (instance 8)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        expect(() => module.invoke(_callu, 100).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of func_ptrs_8: callu (instance 9)", () => {
        let _callu = module.getExport("callu");
        expect(_callu).not.toBeUndefined();
        expect(() => module.invoke(_callu, -1).toThrow(TypeError, "Execution trapped"));
    });
});

describe("func_ptrs_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/func_ptrs_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of func_ptrs_9: callt (instance 10)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 0);
        expect(_callt_result).toBe(1);
    });

    _test("execution of func_ptrs_9: callt (instance 11)", () => {
        let _callt = module.getExport("callt");
        expect(_callt).not.toBeUndefined();
        let _callt_result = module.invoke(_callt, 1);
        expect(_callt_result).toBe(2);
    });
});
