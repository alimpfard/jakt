let globalImportObject = {};
let namedModules = {};

describe("ref_func_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/ref_func_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules[":M"] = module;
    globalImportObject["M"] = module;
});

describe("ref_func_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/ref_func_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of ref_func_1: is_null-f (instance 0)", () => {
        let _is_null_f = module.getExport("is_null-f");
        expect(_is_null_f).not.toBeUndefined();
        let _is_null_f_result = module.invoke(_is_null_f);
        expect(_is_null_f_result).toBe(0);
    });

    _test("execution of ref_func_1: is_null-g (instance 0)", () => {
        let _is_null_g = module.getExport("is_null-g");
        expect(_is_null_g).not.toBeUndefined();
        let _is_null_g_result = module.invoke(_is_null_g);
        expect(_is_null_g_result).toBe(0);
    });

    _test("execution of ref_func_1: is_null-v (instance 0)", () => {
        let _is_null_v = module.getExport("is_null-v");
        expect(_is_null_v).not.toBeUndefined();
        let _is_null_v_result = module.invoke(_is_null_v);
        expect(_is_null_v_result).toBe(0);
    });

    _test("execution of ref_func_1: call-f (instance 0)", () => {
        let _call_f = module.getExport("call-f");
        expect(_call_f).not.toBeUndefined();
        let _call_f_result = module.invoke(_call_f, 4);
        expect(_call_f_result).toBe(4);
    });

    _test("execution of ref_func_1: call-g (instance 0)", () => {
        let _call_g = module.getExport("call-g");
        expect(_call_g).not.toBeUndefined();
        let _call_g_result = module.invoke(_call_g, 4);
        expect(_call_g_result).toBe(5);
    });

    _test("execution of ref_func_1: call-v (instance 0)", () => {
        let _call_v = module.getExport("call-v");
        expect(_call_v).not.toBeUndefined();
        let _call_v_result = module.invoke(_call_v, 4);
        expect(_call_v_result).toBe(4);
    });

    _test("execution of ref_func_1: set-g (instance 0)", () => {
        let _set_g = module.getExport("set-g");
        expect(_set_g).not.toBeUndefined();
        module.invoke(_set_g, 0, 0, 0);
    });

    _test("execution of ref_func_1: call-v (instance 1)", () => {
        let _call_v = module.getExport("call-v");
        expect(_call_v).not.toBeUndefined();
        let _call_v_result = module.invoke(_call_v, 4);
        expect(_call_v_result).toBe(5);
    });

    _test("execution of ref_func_1: set-f (instance 0)", () => {
        let _set_f = module.getExport("set-f");
        expect(_set_f).not.toBeUndefined();
        module.invoke(_set_f, 0, 0, 0);
    });

    _test("execution of ref_func_1: call-v (instance 2)", () => {
        let _call_v = module.getExport("call-v");
        expect(_call_v).not.toBeUndefined();
        let _call_v_result = module.invoke(_call_v, 4);
        expect(_call_v_result).toBe(4);
    });
});

describe("ref_func_2", () => {
    let _test = test;

    _test("execution of ref_func_2: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("ref_func_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/ref_func_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("ref_func_4", () => {
    let _test = test;

    _test("execution of ref_func_4: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("ref_func_5", () => {
    let _test = test;

    _test("execution of ref_func_5: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
