let globalImportObject = {};
let namedModules = {};

describe("ref_is_null_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/ref_is_null_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of ref_is_null_0: funcref (instance 0)", () => {
        let _funcref = module.getExport("funcref");
        expect(_funcref).not.toBeUndefined();
        let _funcref_result = module.invoke(_funcref, 0);
        expect(_funcref_result).toBe(1);
    });

    _test("execution of ref_is_null_0: externref (instance 0)", () => {
        let _externref = module.getExport("externref");
        expect(_externref).not.toBeUndefined();
        let _externref_result = module.invoke(_externref, 0);
        expect(_externref_result).toBe(1);
    });

    _test("execution of ref_is_null_0: externref (instance 1)", () => {
        let _externref = module.getExport("externref");
        expect(_externref).not.toBeUndefined();
        let _externref_result = module.invoke(_externref, 0);
        expect(_externref_result).toBe(0);
    });

    _test("execution of ref_is_null_0: init (instance 0)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        module.invoke(_init, 0, 0);
    });

    _test("execution of ref_is_null_0: funcref-elem (instance 0)", () => {
        let _funcref_elem = module.getExport("funcref-elem");
        expect(_funcref_elem).not.toBeUndefined();
        let _funcref_elem_result = module.invoke(_funcref_elem, 0);
        expect(_funcref_elem_result).toBe(1);
    });

    _test("execution of ref_is_null_0: externref-elem (instance 0)", () => {
        let _externref_elem = module.getExport("externref-elem");
        expect(_externref_elem).not.toBeUndefined();
        let _externref_elem_result = module.invoke(_externref_elem, 0);
        expect(_externref_elem_result).toBe(1);
    });

    _test("execution of ref_is_null_0: funcref-elem (instance 1)", () => {
        let _funcref_elem = module.getExport("funcref-elem");
        expect(_funcref_elem).not.toBeUndefined();
        let _funcref_elem_result = module.invoke(_funcref_elem, 1);
        expect(_funcref_elem_result).toBe(0);
    });

    _test("execution of ref_is_null_0: externref-elem (instance 1)", () => {
        let _externref_elem = module.getExport("externref-elem");
        expect(_externref_elem).not.toBeUndefined();
        let _externref_elem_result = module.invoke(_externref_elem, 1);
        expect(_externref_elem_result).toBe(0);
    });

    _test("execution of ref_is_null_0: deinit (instance 0)", () => {
        let _deinit = module.getExport("deinit");
        expect(_deinit).not.toBeUndefined();
        module.invoke(_deinit, 0, 0, 0, 0);
    });

    _test("execution of ref_is_null_0: funcref-elem (instance 2)", () => {
        let _funcref_elem = module.getExport("funcref-elem");
        expect(_funcref_elem).not.toBeUndefined();
        let _funcref_elem_result = module.invoke(_funcref_elem, 0);
        expect(_funcref_elem_result).toBe(1);
    });

    _test("execution of ref_is_null_0: externref-elem (instance 2)", () => {
        let _externref_elem = module.getExport("externref-elem");
        expect(_externref_elem).not.toBeUndefined();
        let _externref_elem_result = module.invoke(_externref_elem, 0);
        expect(_externref_elem_result).toBe(1);
    });

    _test("execution of ref_is_null_0: funcref-elem (instance 3)", () => {
        let _funcref_elem = module.getExport("funcref-elem");
        expect(_funcref_elem).not.toBeUndefined();
        let _funcref_elem_result = module.invoke(_funcref_elem, 1);
        expect(_funcref_elem_result).toBe(1);
    });

    _test("execution of ref_is_null_0: externref-elem (instance 3)", () => {
        let _externref_elem = module.getExport("externref-elem");
        expect(_externref_elem).not.toBeUndefined();
        let _externref_elem_result = module.invoke(_externref_elem, 1);
        expect(_externref_elem_result).toBe(1);
    });
});

describe("ref_is_null_1", () => {
    let _test = test;

    _test("execution of ref_is_null_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("ref_is_null_2", () => {
    let _test = test;

    _test("execution of ref_is_null_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
