let globalImportObject = {};
let namedModules = {};

describe("comments_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/comments_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    /* Unknown command m */ _test.skip("execution of comments_0: <unknown> (instance 0)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown command ;comment */ _test.skip(
        "execution of comments_0: <unknown> (instance 1)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );
});
