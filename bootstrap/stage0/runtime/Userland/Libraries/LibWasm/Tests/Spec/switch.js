let globalImportObject = {};
let namedModules = {};

describe("switch_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/switch_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of switch_0: stmt (instance 0)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 0);
        expect(_stmt_result).toBe(0);
    });

    _test("execution of switch_0: stmt (instance 1)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 1);
        expect(_stmt_result).toBe(-1);
    });

    _test("execution of switch_0: stmt (instance 2)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 2);
        expect(_stmt_result).toBe(-2);
    });

    _test("execution of switch_0: stmt (instance 3)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 3);
        expect(_stmt_result).toBe(-3);
    });

    _test("execution of switch_0: stmt (instance 4)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 4);
        expect(_stmt_result).toBe(100);
    });

    _test("execution of switch_0: stmt (instance 5)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 5);
        expect(_stmt_result).toBe(101);
    });

    _test("execution of switch_0: stmt (instance 6)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 6);
        expect(_stmt_result).toBe(102);
    });

    _test("execution of switch_0: stmt (instance 7)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, 7);
        expect(_stmt_result).toBe(100);
    });

    _test("execution of switch_0: stmt (instance 8)", () => {
        let _stmt = module.getExport("stmt");
        expect(_stmt).not.toBeUndefined();
        let _stmt_result = module.invoke(_stmt, -10);
        expect(_stmt_result).toBe(102);
    });

    _test("execution of switch_0: expr (instance 0)", () => {
        let _expr = module.getExport("expr");
        expect(_expr).not.toBeUndefined();
        let _expr_result = module.invoke(_expr, 0n);
        expect(_expr_result).toBe(0n);
    });

    _test("execution of switch_0: expr (instance 1)", () => {
        let _expr = module.getExport("expr");
        expect(_expr).not.toBeUndefined();
        let _expr_result = module.invoke(_expr, 1n);
        expect(_expr_result).toBe(-1n);
    });

    _test("execution of switch_0: expr (instance 2)", () => {
        let _expr = module.getExport("expr");
        expect(_expr).not.toBeUndefined();
        let _expr_result = module.invoke(_expr, 2n);
        expect(_expr_result).toBe(-2n);
    });

    _test("execution of switch_0: expr (instance 3)", () => {
        let _expr = module.getExport("expr");
        expect(_expr).not.toBeUndefined();
        let _expr_result = module.invoke(_expr, 3n);
        expect(_expr_result).toBe(-3n);
    });

    _test("execution of switch_0: expr (instance 4)", () => {
        let _expr = module.getExport("expr");
        expect(_expr).not.toBeUndefined();
        let _expr_result = module.invoke(_expr, 6n);
        expect(_expr_result).toBe(101n);
    });

    _test("execution of switch_0: expr (instance 5)", () => {
        let _expr = module.getExport("expr");
        expect(_expr).not.toBeUndefined();
        let _expr_result = module.invoke(_expr, 7n);
        expect(_expr_result).toBe(-5n);
    });

    _test("execution of switch_0: expr (instance 6)", () => {
        let _expr = module.getExport("expr");
        expect(_expr).not.toBeUndefined();
        let _expr_result = module.invoke(_expr, -10n);
        expect(_expr_result).toBe(100n);
    });

    _test("execution of switch_0: arg (instance 0)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 0);
        expect(_arg_result).toBe(110);
    });

    _test("execution of switch_0: arg (instance 1)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 1);
        expect(_arg_result).toBe(12);
    });

    _test("execution of switch_0: arg (instance 2)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 2);
        expect(_arg_result).toBe(4);
    });

    _test("execution of switch_0: arg (instance 3)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 3);
        expect(_arg_result).toBe(1116);
    });

    _test("execution of switch_0: arg (instance 4)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 4);
        expect(_arg_result).toBe(118);
    });

    _test("execution of switch_0: arg (instance 5)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 5);
        expect(_arg_result).toBe(20);
    });

    _test("execution of switch_0: arg (instance 6)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 6);
        expect(_arg_result).toBe(12);
    });

    _test("execution of switch_0: arg (instance 7)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 7);
        expect(_arg_result).toBe(1124);
    });

    _test("execution of switch_0: arg (instance 8)", () => {
        let _arg = module.getExport("arg");
        expect(_arg).not.toBeUndefined();
        let _arg_result = module.invoke(_arg, 8);
        expect(_arg_result).toBe(126);
    });

    _test("execution of switch_0: corner (instance 0)", () => {
        let _corner = module.getExport("corner");
        expect(_corner).not.toBeUndefined();
        let _corner_result = module.invoke(_corner);
        expect(_corner_result).toBe(1);
    });
});

describe("switch_1", () => {
    let _test = test;

    _test("execution of switch_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
