let globalImportObject = {};
let namedModules = {};

describe("forward_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/forward_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of forward_0: even (instance 0)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 13);
        expect(_even_result).toBe(0);
    });

    _test("execution of forward_0: even (instance 1)", () => {
        let _even = module.getExport("even");
        expect(_even).not.toBeUndefined();
        let _even_result = module.invoke(_even, 20);
        expect(_even_result).toBe(1);
    });

    _test("execution of forward_0: odd (instance 0)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 13);
        expect(_odd_result).toBe(1);
    });

    _test("execution of forward_0: odd (instance 1)", () => {
        let _odd = module.getExport("odd");
        expect(_odd).not.toBeUndefined();
        let _odd_result = module.invoke(_odd, 20);
        expect(_odd_result).toBe(0);
    });
});
