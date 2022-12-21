let globalImportObject = {};
let namedModules = {};

describe("start_0", () => {
    let _test = test;

    _test("execution of start_0: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("start_1", () => {
    let _test = test;

    _test("execution of start_1: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("start_2", () => {
    let _test = test;

    _test("execution of start_2: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("start_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/start_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of start_3: get (instance 0)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get);
        expect(_get_result).toBe(68);
    });

    _test("execution of start_3: inc (instance 0)", () => {
        let _inc = module.getExport("inc");
        expect(_inc).not.toBeUndefined();
        module.invoke(_inc, 0);
    });

    _test("execution of start_3: get (instance 1)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get);
        expect(_get_result).toBe(69);
    });

    _test("execution of start_3: inc (instance 1)", () => {
        let _inc = module.getExport("inc");
        expect(_inc).not.toBeUndefined();
        module.invoke(_inc, 0);
    });

    _test("execution of start_3: get (instance 2)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get);
        expect(_get_result).toBe(70);
    });
});

describe("start_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/start_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of start_4: get (instance 3)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get);
        expect(_get_result).toBe(68);
    });

    _test("execution of start_4: inc (instance 2)", () => {
        let _inc = module.getExport("inc");
        expect(_inc).not.toBeUndefined();
        module.invoke(_inc, 0);
    });

    _test("execution of start_4: get (instance 4)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get);
        expect(_get_result).toBe(69);
    });

    _test("execution of start_4: inc (instance 3)", () => {
        let _inc = module.getExport("inc");
        expect(_inc).not.toBeUndefined();
        module.invoke(_inc, 0);
    });

    _test("execution of start_4: get (instance 5)", () => {
        let _get = module.getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = module.invoke(_get);
        expect(_get_result).toBe(70);
    });
});

describe("start_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/start_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("start_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/start_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("start_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/start_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    /* Unknown assertion trap */ _test.skip("execution of start_7: <unknown> (instance 0)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });
});

describe("start_8", () => {
    let _test = test;

    _test("execution of start_8: _inline_test_3 (instance 0)", () => {});
});
