let globalImportObject = {};
let namedModules = {};

describe("skip-stack-guard-page_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/skip-stack-guard-page_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 0)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 1)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 100).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 2)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 200).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 3)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 300).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 4)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 400).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 5)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 500).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 6)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 600).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 7)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 700).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 8)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 800).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of skip-stack-guard-page_0: test-guard-page-skip (instance 9)", () => {
        let _test_guard_page_skip = module.getExport("test-guard-page-skip");
        expect(_test_guard_page_skip).not.toBeUndefined();
        expect(() =>
            module.invoke(_test_guard_page_skip, 900).toThrow(TypeError, "Execution trapped")
        );
    });
});
