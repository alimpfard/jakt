let globalImportObject = {};
let namedModules = {};

describe("unreached-valid_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/unreached-valid_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of unreached-valid_0: select-trap-left (instance 0)", () => {
        let _select_trap_left = module.getExport("select-trap-left");
        expect(_select_trap_left).not.toBeUndefined();
        expect(() => module.invoke(_select_trap_left, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreached-valid_0: select-trap-left (instance 1)", () => {
        let _select_trap_left = module.getExport("select-trap-left");
        expect(_select_trap_left).not.toBeUndefined();
        expect(() => module.invoke(_select_trap_left, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreached-valid_0: select-trap-right (instance 0)", () => {
        let _select_trap_right = module.getExport("select-trap-right");
        expect(_select_trap_right).not.toBeUndefined();
        expect(() => module.invoke(_select_trap_right, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of unreached-valid_0: select-trap-right (instance 1)", () => {
        let _select_trap_right = module.getExport("select-trap-right");
        expect(_select_trap_right).not.toBeUndefined();
        expect(() => module.invoke(_select_trap_right, 0).toThrow(TypeError, "Execution trapped"));
    });
});

describe("unreached-valid_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/unreached-valid_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of unreached-valid_1: meet-bottom (instance 0)", () => {
        let _meet_bottom = module.getExport("meet-bottom");
        expect(_meet_bottom).not.toBeUndefined();
        expect(() => module.invoke(_meet_bottom).toThrow(TypeError, "Execution trapped"));
    });
});
