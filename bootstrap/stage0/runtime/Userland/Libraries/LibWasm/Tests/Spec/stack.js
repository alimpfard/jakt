let globalImportObject = {};
let namedModules = {};

describe("stack_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/stack_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of stack_0: fac-expr (instance 0)", () => {
        let _fac_expr = module.getExport("fac-expr");
        expect(_fac_expr).not.toBeUndefined();
        let _fac_expr_result = module.invoke(_fac_expr, 25n);
        expect(_fac_expr_result).toBe(7034535277573963776n);
    });

    _test("execution of stack_0: fac-stack (instance 0)", () => {
        let _fac_stack = module.getExport("fac-stack");
        expect(_fac_stack).not.toBeUndefined();
        let _fac_stack_result = module.invoke(_fac_stack, 25n);
        expect(_fac_stack_result).toBe(7034535277573963776n);
    });

    _test("execution of stack_0: fac-mixed (instance 0)", () => {
        let _fac_mixed = module.getExport("fac-mixed");
        expect(_fac_mixed).not.toBeUndefined();
        let _fac_mixed_result = module.invoke(_fac_mixed, 25n);
        expect(_fac_mixed_result).toBe(7034535277573963776n);
    });

    _test("execution of stack_0: not-quite-a-tree (instance 0)", () => {
        let _not_quite_a_tree = module.getExport("not-quite-a-tree");
        expect(_not_quite_a_tree).not.toBeUndefined();
        let _not_quite_a_tree_result = module.invoke(_not_quite_a_tree);
        expect(_not_quite_a_tree_result).toBe(3);
    });

    _test("execution of stack_0: not-quite-a-tree (instance 1)", () => {
        let _not_quite_a_tree = module.getExport("not-quite-a-tree");
        expect(_not_quite_a_tree).not.toBeUndefined();
        let _not_quite_a_tree_result = module.invoke(_not_quite_a_tree);
        expect(_not_quite_a_tree_result).toBe(9);
    });
});

describe("stack_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/stack_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});
