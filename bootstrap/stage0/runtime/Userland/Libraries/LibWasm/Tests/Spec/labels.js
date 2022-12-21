let globalImportObject = {};
let namedModules = {};

describe("labels_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/labels_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of labels_0: block (instance 0)", () => {
        let _block = module.getExport("block");
        expect(_block).not.toBeUndefined();
        let _block_result = module.invoke(_block);
        expect(_block_result).toBe(1);
    });

    _test("execution of labels_0: loop1 (instance 0)", () => {
        let _loop1 = module.getExport("loop1");
        expect(_loop1).not.toBeUndefined();
        let _loop1_result = module.invoke(_loop1);
        expect(_loop1_result).toBe(5);
    });

    _test("execution of labels_0: loop2 (instance 0)", () => {
        let _loop2 = module.getExport("loop2");
        expect(_loop2).not.toBeUndefined();
        let _loop2_result = module.invoke(_loop2);
        expect(_loop2_result).toBe(8);
    });

    _test("execution of labels_0: loop3 (instance 0)", () => {
        let _loop3 = module.getExport("loop3");
        expect(_loop3).not.toBeUndefined();
        let _loop3_result = module.invoke(_loop3);
        expect(_loop3_result).toBe(1);
    });

    _test("execution of labels_0: loop4 (instance 0)", () => {
        let _loop4 = module.getExport("loop4");
        expect(_loop4).not.toBeUndefined();
        let _loop4_result = module.invoke(_loop4, 8);
        expect(_loop4_result).toBe(16);
    });

    _test("execution of labels_0: loop5 (instance 0)", () => {
        let _loop5 = module.getExport("loop5");
        expect(_loop5).not.toBeUndefined();
        let _loop5_result = module.invoke(_loop5);
        expect(_loop5_result).toBe(2);
    });

    _test("execution of labels_0: loop6 (instance 0)", () => {
        let _loop6 = module.getExport("loop6");
        expect(_loop6).not.toBeUndefined();
        let _loop6_result = module.invoke(_loop6);
        expect(_loop6_result).toBe(3);
    });

    _test("execution of labels_0: if (instance 0)", () => {
        let _if = module.getExport("if");
        expect(_if).not.toBeUndefined();
        let _if_result = module.invoke(_if);
        expect(_if_result).toBe(5);
    });

    _test("execution of labels_0: if2 (instance 0)", () => {
        let _if2 = module.getExport("if2");
        expect(_if2).not.toBeUndefined();
        let _if2_result = module.invoke(_if2);
        expect(_if2_result).toBe(5);
    });

    _test("execution of labels_0: switch (instance 0)", () => {
        let _switch = module.getExport("switch");
        expect(_switch).not.toBeUndefined();
        let _switch_result = module.invoke(_switch, 0);
        expect(_switch_result).toBe(50);
    });

    _test("execution of labels_0: switch (instance 1)", () => {
        let _switch = module.getExport("switch");
        expect(_switch).not.toBeUndefined();
        let _switch_result = module.invoke(_switch, 1);
        expect(_switch_result).toBe(20);
    });

    _test("execution of labels_0: switch (instance 2)", () => {
        let _switch = module.getExport("switch");
        expect(_switch).not.toBeUndefined();
        let _switch_result = module.invoke(_switch, 2);
        expect(_switch_result).toBe(20);
    });

    _test("execution of labels_0: switch (instance 3)", () => {
        let _switch = module.getExport("switch");
        expect(_switch).not.toBeUndefined();
        let _switch_result = module.invoke(_switch, 3);
        expect(_switch_result).toBe(3);
    });

    _test("execution of labels_0: switch (instance 4)", () => {
        let _switch = module.getExport("switch");
        expect(_switch).not.toBeUndefined();
        let _switch_result = module.invoke(_switch, 4);
        expect(_switch_result).toBe(50);
    });

    _test("execution of labels_0: switch (instance 5)", () => {
        let _switch = module.getExport("switch");
        expect(_switch).not.toBeUndefined();
        let _switch_result = module.invoke(_switch, 5);
        expect(_switch_result).toBe(50);
    });

    _test("execution of labels_0: return (instance 0)", () => {
        let _return = module.getExport("return");
        expect(_return).not.toBeUndefined();
        let _return_result = module.invoke(_return, 0);
        expect(_return_result).toBe(0);
    });

    _test("execution of labels_0: return (instance 1)", () => {
        let _return = module.getExport("return");
        expect(_return).not.toBeUndefined();
        let _return_result = module.invoke(_return, 1);
        expect(_return_result).toBe(2);
    });

    _test("execution of labels_0: return (instance 2)", () => {
        let _return = module.getExport("return");
        expect(_return).not.toBeUndefined();
        let _return_result = module.invoke(_return, 2);
        expect(_return_result).toBe(2);
    });

    _test("execution of labels_0: br_if0 (instance 0)", () => {
        let _br_if0 = module.getExport("br_if0");
        expect(_br_if0).not.toBeUndefined();
        let _br_if0_result = module.invoke(_br_if0);
        expect(_br_if0_result).toBe(29);
    });

    _test("execution of labels_0: br_if1 (instance 0)", () => {
        let _br_if1 = module.getExport("br_if1");
        expect(_br_if1).not.toBeUndefined();
        let _br_if1_result = module.invoke(_br_if1);
        expect(_br_if1_result).toBe(1);
    });

    _test("execution of labels_0: br_if2 (instance 0)", () => {
        let _br_if2 = module.getExport("br_if2");
        expect(_br_if2).not.toBeUndefined();
        let _br_if2_result = module.invoke(_br_if2);
        expect(_br_if2_result).toBe(1);
    });

    _test("execution of labels_0: br_if3 (instance 0)", () => {
        let _br_if3 = module.getExport("br_if3");
        expect(_br_if3).not.toBeUndefined();
        let _br_if3_result = module.invoke(_br_if3);
        expect(_br_if3_result).toBe(2);
    });

    _test("execution of labels_0: br (instance 0)", () => {
        let _br = module.getExport("br");
        expect(_br).not.toBeUndefined();
        let _br_result = module.invoke(_br);
        expect(_br_result).toBe(1);
    });

    _test("execution of labels_0: shadowing (instance 0)", () => {
        let _shadowing = module.getExport("shadowing");
        expect(_shadowing).not.toBeUndefined();
        let _shadowing_result = module.invoke(_shadowing);
        expect(_shadowing_result).toBe(1);
    });

    _test("execution of labels_0: redefinition (instance 0)", () => {
        let _redefinition = module.getExport("redefinition");
        expect(_redefinition).not.toBeUndefined();
        let _redefinition_result = module.invoke(_redefinition);
        expect(_redefinition_result).toBe(5);
    });
});

describe("labels_1", () => {
    let _test = test;

    _test("execution of labels_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("labels_2", () => {
    let _test = test;

    _test("execution of labels_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("labels_3", () => {
    let _test = test;

    _test("execution of labels_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
