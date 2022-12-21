let globalImportObject = {};
let namedModules = {};

describe("names_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/names_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of names_0: foo (instance 0)", () => {
        let _foo = module.getExport("foo");
        expect(_foo).not.toBeUndefined();
        let _foo_result = module.invoke(_foo);
        expect(_foo_result).toBe(0);
    });
});

describe("names_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/names_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of names_1: foo (instance 1)", () => {
        let _foo = module.getExport("foo");
        expect(_foo).not.toBeUndefined();
        let _foo_result = module.invoke(_foo);
        expect(_foo_result).toBe(1);
    });
});

describe("names_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/names_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of names_3: print32 (instance 0)", () => {
        let _print32 = module.getExport("print32");
        expect(_print32).not.toBeUndefined();
        let _print32_result = module.invoke(_print32, 42, 123);
    });
});
