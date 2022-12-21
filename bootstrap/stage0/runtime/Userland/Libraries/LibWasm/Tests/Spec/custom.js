let globalImportObject = {};
let namedModules = {};

describe("custom_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/custom_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("custom_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/custom_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("custom_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/custom_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("custom_3", () => {
    let _test = test;

    _test("execution of custom_3: _inline_test_0 (instance 0)", () => {});
});

describe("custom_4", () => {
    let _test = test;

    _test("execution of custom_4: _inline_test_1 (instance 0)", () => {});
});

describe("custom_5", () => {
    let _test = test;

    _test("execution of custom_5: _inline_test_2 (instance 0)", () => {});
});

describe("custom_6", () => {
    let _test = test;

    _test("execution of custom_6: _inline_test_3 (instance 0)", () => {});
});

describe("custom_7", () => {
    let _test = test;

    _test("execution of custom_7: _inline_test_4 (instance 0)", () => {});
});

describe("custom_8", () => {
    let _test = test;

    _test("execution of custom_8: _inline_test_5 (instance 0)", () => {});
});

describe("custom_9", () => {
    let _test = test;

    _test("execution of custom_9: _inline_test_6 (instance 0)", () => {});
});

describe("custom_10", () => {
    let _test = test;

    _test("execution of custom_10: _inline_test_7 (instance 0)", () => {});
});
