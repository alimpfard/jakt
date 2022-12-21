let globalImportObject = {};
let namedModules = {};

describe("ref_null_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/ref_null_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of ref_null_0: externref (instance 0)", () => {
        let _externref = module.getExport("externref");
        expect(_externref).not.toBeUndefined();
        let _externref_result = module.invoke(_externref);
        expect(_externref_result).toBe(0);
    });

    _test("execution of ref_null_0: funcref (instance 0)", () => {
        let _funcref = module.getExport("funcref");
        expect(_funcref).not.toBeUndefined();
        let _funcref_result = module.invoke(_funcref);
        expect(_funcref_result).toBe(0);
    });
});
