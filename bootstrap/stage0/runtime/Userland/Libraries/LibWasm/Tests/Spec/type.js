let globalImportObject = {};
let namedModules = {};

describe("type_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/type_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("type_1", () => {
    let _test = test;

    _test("execution of type_1: _inline_test_0 (instance 0)", () => {});
});

describe("type_2", () => {
    let _test = test;

    _test("execution of type_2: _inline_test_1 (instance 0)", () => {});
});
