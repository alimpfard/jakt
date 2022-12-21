let globalImportObject = {};
let namedModules = {};

describe("inline-module_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/inline-module_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    /* Unknown command func */ _test.skip(
        "execution of inline-module_0: <unknown> (instance 0)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command memory */ _test.skip(
        "execution of inline-module_0: <unknown> (instance 1)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );

    /* Unknown command func */ _test.skip(
        "execution of inline-module_0: <unknown> (instance 2)",
        () => {
            let __unknown_ = module.getExport("<unknown>");
            expect(__unknown_).not.toBeUndefined();
        }
    );
});
