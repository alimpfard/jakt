let globalImportObject = {};
let namedModules = {};

describe("address_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/address_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of address_0: 8u_good1 (instance 0)", () => {
        let _8u_good1 = module.getExport("8u_good1");
        expect(_8u_good1).not.toBeUndefined();
        let _8u_good1_result = module.invoke(_8u_good1, 0);
        expect(_8u_good1_result).toBe(97);
    });

    _test("execution of address_0: 8u_good2 (instance 0)", () => {
        let _8u_good2 = module.getExport("8u_good2");
        expect(_8u_good2).not.toBeUndefined();
        let _8u_good2_result = module.invoke(_8u_good2, 0);
        expect(_8u_good2_result).toBe(97);
    });

    _test("execution of address_0: 8u_good3 (instance 0)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        let _8u_good3_result = module.invoke(_8u_good3, 0);
        expect(_8u_good3_result).toBe(98);
    });

    _test("execution of address_0: 8u_good4 (instance 0)", () => {
        let _8u_good4 = module.getExport("8u_good4");
        expect(_8u_good4).not.toBeUndefined();
        let _8u_good4_result = module.invoke(_8u_good4, 0);
        expect(_8u_good4_result).toBe(99);
    });

    _test("execution of address_0: 8u_good5 (instance 0)", () => {
        let _8u_good5 = module.getExport("8u_good5");
        expect(_8u_good5).not.toBeUndefined();
        let _8u_good5_result = module.invoke(_8u_good5, 0);
        expect(_8u_good5_result).toBe(122);
    });

    _test("execution of address_0: 8s_good1 (instance 0)", () => {
        let _8s_good1 = module.getExport("8s_good1");
        expect(_8s_good1).not.toBeUndefined();
        let _8s_good1_result = module.invoke(_8s_good1, 0);
        expect(_8s_good1_result).toBe(97);
    });

    _test("execution of address_0: 8s_good2 (instance 0)", () => {
        let _8s_good2 = module.getExport("8s_good2");
        expect(_8s_good2).not.toBeUndefined();
        let _8s_good2_result = module.invoke(_8s_good2, 0);
        expect(_8s_good2_result).toBe(97);
    });

    _test("execution of address_0: 8s_good3 (instance 0)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        let _8s_good3_result = module.invoke(_8s_good3, 0);
        expect(_8s_good3_result).toBe(98);
    });

    _test("execution of address_0: 8s_good4 (instance 0)", () => {
        let _8s_good4 = module.getExport("8s_good4");
        expect(_8s_good4).not.toBeUndefined();
        let _8s_good4_result = module.invoke(_8s_good4, 0);
        expect(_8s_good4_result).toBe(99);
    });

    _test("execution of address_0: 8s_good5 (instance 0)", () => {
        let _8s_good5 = module.getExport("8s_good5");
        expect(_8s_good5).not.toBeUndefined();
        let _8s_good5_result = module.invoke(_8s_good5, 0);
        expect(_8s_good5_result).toBe(122);
    });

    _test("execution of address_0: 16u_good1 (instance 0)", () => {
        let _16u_good1 = module.getExport("16u_good1");
        expect(_16u_good1).not.toBeUndefined();
        let _16u_good1_result = module.invoke(_16u_good1, 0);
        expect(_16u_good1_result).toBe(25185);
    });

    _test("execution of address_0: 16u_good2 (instance 0)", () => {
        let _16u_good2 = module.getExport("16u_good2");
        expect(_16u_good2).not.toBeUndefined();
        let _16u_good2_result = module.invoke(_16u_good2, 0);
        expect(_16u_good2_result).toBe(25185);
    });

    _test("execution of address_0: 16u_good3 (instance 0)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        let _16u_good3_result = module.invoke(_16u_good3, 0);
        expect(_16u_good3_result).toBe(25442);
    });

    _test("execution of address_0: 16u_good4 (instance 0)", () => {
        let _16u_good4 = module.getExport("16u_good4");
        expect(_16u_good4).not.toBeUndefined();
        let _16u_good4_result = module.invoke(_16u_good4, 0);
        expect(_16u_good4_result).toBe(25699);
    });

    _test("execution of address_0: 16u_good5 (instance 0)", () => {
        let _16u_good5 = module.getExport("16u_good5");
        expect(_16u_good5).not.toBeUndefined();
        let _16u_good5_result = module.invoke(_16u_good5, 0);
        expect(_16u_good5_result).toBe(122);
    });

    _test("execution of address_0: 16s_good1 (instance 0)", () => {
        let _16s_good1 = module.getExport("16s_good1");
        expect(_16s_good1).not.toBeUndefined();
        let _16s_good1_result = module.invoke(_16s_good1, 0);
        expect(_16s_good1_result).toBe(25185);
    });

    _test("execution of address_0: 16s_good2 (instance 0)", () => {
        let _16s_good2 = module.getExport("16s_good2");
        expect(_16s_good2).not.toBeUndefined();
        let _16s_good2_result = module.invoke(_16s_good2, 0);
        expect(_16s_good2_result).toBe(25185);
    });

    _test("execution of address_0: 16s_good3 (instance 0)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        let _16s_good3_result = module.invoke(_16s_good3, 0);
        expect(_16s_good3_result).toBe(25442);
    });

    _test("execution of address_0: 16s_good4 (instance 0)", () => {
        let _16s_good4 = module.getExport("16s_good4");
        expect(_16s_good4).not.toBeUndefined();
        let _16s_good4_result = module.invoke(_16s_good4, 0);
        expect(_16s_good4_result).toBe(25699);
    });

    _test("execution of address_0: 16s_good5 (instance 0)", () => {
        let _16s_good5 = module.getExport("16s_good5");
        expect(_16s_good5).not.toBeUndefined();
        let _16s_good5_result = module.invoke(_16s_good5, 0);
        expect(_16s_good5_result).toBe(122);
    });

    _test("execution of address_0: 32_good1 (instance 0)", () => {
        let _32_good1 = module.getExport("32_good1");
        expect(_32_good1).not.toBeUndefined();
        let _32_good1_result = module.invoke(_32_good1, 0);
        expect(_32_good1_result).toBe(1684234849);
    });

    _test("execution of address_0: 32_good2 (instance 0)", () => {
        let _32_good2 = module.getExport("32_good2");
        expect(_32_good2).not.toBeUndefined();
        let _32_good2_result = module.invoke(_32_good2, 0);
        expect(_32_good2_result).toBe(1684234849);
    });

    _test("execution of address_0: 32_good3 (instance 0)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        let _32_good3_result = module.invoke(_32_good3, 0);
        expect(_32_good3_result).toBe(1701077858);
    });

    _test("execution of address_0: 32_good4 (instance 0)", () => {
        let _32_good4 = module.getExport("32_good4");
        expect(_32_good4).not.toBeUndefined();
        let _32_good4_result = module.invoke(_32_good4, 0);
        expect(_32_good4_result).toBe(1717920867);
    });

    _test("execution of address_0: 32_good5 (instance 0)", () => {
        let _32_good5 = module.getExport("32_good5");
        expect(_32_good5).not.toBeUndefined();
        let _32_good5_result = module.invoke(_32_good5, 0);
        expect(_32_good5_result).toBe(122);
    });

    _test("execution of address_0: 8u_good1 (instance 1)", () => {
        let _8u_good1 = module.getExport("8u_good1");
        expect(_8u_good1).not.toBeUndefined();
        let _8u_good1_result = module.invoke(_8u_good1, 65507);
        expect(_8u_good1_result).toBe(0);
    });

    _test("execution of address_0: 8u_good2 (instance 1)", () => {
        let _8u_good2 = module.getExport("8u_good2");
        expect(_8u_good2).not.toBeUndefined();
        let _8u_good2_result = module.invoke(_8u_good2, 65507);
        expect(_8u_good2_result).toBe(0);
    });

    _test("execution of address_0: 8u_good3 (instance 1)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        let _8u_good3_result = module.invoke(_8u_good3, 65507);
        expect(_8u_good3_result).toBe(0);
    });

    _test("execution of address_0: 8u_good4 (instance 1)", () => {
        let _8u_good4 = module.getExport("8u_good4");
        expect(_8u_good4).not.toBeUndefined();
        let _8u_good4_result = module.invoke(_8u_good4, 65507);
        expect(_8u_good4_result).toBe(0);
    });

    _test("execution of address_0: 8u_good5 (instance 1)", () => {
        let _8u_good5 = module.getExport("8u_good5");
        expect(_8u_good5).not.toBeUndefined();
        let _8u_good5_result = module.invoke(_8u_good5, 65507);
        expect(_8u_good5_result).toBe(0);
    });

    _test("execution of address_0: 8s_good1 (instance 1)", () => {
        let _8s_good1 = module.getExport("8s_good1");
        expect(_8s_good1).not.toBeUndefined();
        let _8s_good1_result = module.invoke(_8s_good1, 65507);
        expect(_8s_good1_result).toBe(0);
    });

    _test("execution of address_0: 8s_good2 (instance 1)", () => {
        let _8s_good2 = module.getExport("8s_good2");
        expect(_8s_good2).not.toBeUndefined();
        let _8s_good2_result = module.invoke(_8s_good2, 65507);
        expect(_8s_good2_result).toBe(0);
    });

    _test("execution of address_0: 8s_good3 (instance 1)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        let _8s_good3_result = module.invoke(_8s_good3, 65507);
        expect(_8s_good3_result).toBe(0);
    });

    _test("execution of address_0: 8s_good4 (instance 1)", () => {
        let _8s_good4 = module.getExport("8s_good4");
        expect(_8s_good4).not.toBeUndefined();
        let _8s_good4_result = module.invoke(_8s_good4, 65507);
        expect(_8s_good4_result).toBe(0);
    });

    _test("execution of address_0: 8s_good5 (instance 1)", () => {
        let _8s_good5 = module.getExport("8s_good5");
        expect(_8s_good5).not.toBeUndefined();
        let _8s_good5_result = module.invoke(_8s_good5, 65507);
        expect(_8s_good5_result).toBe(0);
    });

    _test("execution of address_0: 16u_good1 (instance 1)", () => {
        let _16u_good1 = module.getExport("16u_good1");
        expect(_16u_good1).not.toBeUndefined();
        let _16u_good1_result = module.invoke(_16u_good1, 65507);
        expect(_16u_good1_result).toBe(0);
    });

    _test("execution of address_0: 16u_good2 (instance 1)", () => {
        let _16u_good2 = module.getExport("16u_good2");
        expect(_16u_good2).not.toBeUndefined();
        let _16u_good2_result = module.invoke(_16u_good2, 65507);
        expect(_16u_good2_result).toBe(0);
    });

    _test("execution of address_0: 16u_good3 (instance 1)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        let _16u_good3_result = module.invoke(_16u_good3, 65507);
        expect(_16u_good3_result).toBe(0);
    });

    _test("execution of address_0: 16u_good4 (instance 1)", () => {
        let _16u_good4 = module.getExport("16u_good4");
        expect(_16u_good4).not.toBeUndefined();
        let _16u_good4_result = module.invoke(_16u_good4, 65507);
        expect(_16u_good4_result).toBe(0);
    });

    _test("execution of address_0: 16u_good5 (instance 1)", () => {
        let _16u_good5 = module.getExport("16u_good5");
        expect(_16u_good5).not.toBeUndefined();
        let _16u_good5_result = module.invoke(_16u_good5, 65507);
        expect(_16u_good5_result).toBe(0);
    });

    _test("execution of address_0: 16s_good1 (instance 1)", () => {
        let _16s_good1 = module.getExport("16s_good1");
        expect(_16s_good1).not.toBeUndefined();
        let _16s_good1_result = module.invoke(_16s_good1, 65507);
        expect(_16s_good1_result).toBe(0);
    });

    _test("execution of address_0: 16s_good2 (instance 1)", () => {
        let _16s_good2 = module.getExport("16s_good2");
        expect(_16s_good2).not.toBeUndefined();
        let _16s_good2_result = module.invoke(_16s_good2, 65507);
        expect(_16s_good2_result).toBe(0);
    });

    _test("execution of address_0: 16s_good3 (instance 1)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        let _16s_good3_result = module.invoke(_16s_good3, 65507);
        expect(_16s_good3_result).toBe(0);
    });

    _test("execution of address_0: 16s_good4 (instance 1)", () => {
        let _16s_good4 = module.getExport("16s_good4");
        expect(_16s_good4).not.toBeUndefined();
        let _16s_good4_result = module.invoke(_16s_good4, 65507);
        expect(_16s_good4_result).toBe(0);
    });

    _test("execution of address_0: 16s_good5 (instance 1)", () => {
        let _16s_good5 = module.getExport("16s_good5");
        expect(_16s_good5).not.toBeUndefined();
        let _16s_good5_result = module.invoke(_16s_good5, 65507);
        expect(_16s_good5_result).toBe(0);
    });

    _test("execution of address_0: 32_good1 (instance 1)", () => {
        let _32_good1 = module.getExport("32_good1");
        expect(_32_good1).not.toBeUndefined();
        let _32_good1_result = module.invoke(_32_good1, 65507);
        expect(_32_good1_result).toBe(0);
    });

    _test("execution of address_0: 32_good2 (instance 1)", () => {
        let _32_good2 = module.getExport("32_good2");
        expect(_32_good2).not.toBeUndefined();
        let _32_good2_result = module.invoke(_32_good2, 65507);
        expect(_32_good2_result).toBe(0);
    });

    _test("execution of address_0: 32_good3 (instance 1)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        let _32_good3_result = module.invoke(_32_good3, 65507);
        expect(_32_good3_result).toBe(0);
    });

    _test("execution of address_0: 32_good4 (instance 1)", () => {
        let _32_good4 = module.getExport("32_good4");
        expect(_32_good4).not.toBeUndefined();
        let _32_good4_result = module.invoke(_32_good4, 65507);
        expect(_32_good4_result).toBe(0);
    });

    _test("execution of address_0: 32_good5 (instance 1)", () => {
        let _32_good5 = module.getExport("32_good5");
        expect(_32_good5).not.toBeUndefined();
        let _32_good5_result = module.invoke(_32_good5, 65507);
        expect(_32_good5_result).toBe(0);
    });

    _test("execution of address_0: 8u_good1 (instance 2)", () => {
        let _8u_good1 = module.getExport("8u_good1");
        expect(_8u_good1).not.toBeUndefined();
        let _8u_good1_result = module.invoke(_8u_good1, 65508);
        expect(_8u_good1_result).toBe(0);
    });

    _test("execution of address_0: 8u_good2 (instance 2)", () => {
        let _8u_good2 = module.getExport("8u_good2");
        expect(_8u_good2).not.toBeUndefined();
        let _8u_good2_result = module.invoke(_8u_good2, 65508);
        expect(_8u_good2_result).toBe(0);
    });

    _test("execution of address_0: 8u_good3 (instance 2)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        let _8u_good3_result = module.invoke(_8u_good3, 65508);
        expect(_8u_good3_result).toBe(0);
    });

    _test("execution of address_0: 8u_good4 (instance 2)", () => {
        let _8u_good4 = module.getExport("8u_good4");
        expect(_8u_good4).not.toBeUndefined();
        let _8u_good4_result = module.invoke(_8u_good4, 65508);
        expect(_8u_good4_result).toBe(0);
    });

    _test("execution of address_0: 8u_good5 (instance 2)", () => {
        let _8u_good5 = module.getExport("8u_good5");
        expect(_8u_good5).not.toBeUndefined();
        let _8u_good5_result = module.invoke(_8u_good5, 65508);
        expect(_8u_good5_result).toBe(0);
    });

    _test("execution of address_0: 8s_good1 (instance 2)", () => {
        let _8s_good1 = module.getExport("8s_good1");
        expect(_8s_good1).not.toBeUndefined();
        let _8s_good1_result = module.invoke(_8s_good1, 65508);
        expect(_8s_good1_result).toBe(0);
    });

    _test("execution of address_0: 8s_good2 (instance 2)", () => {
        let _8s_good2 = module.getExport("8s_good2");
        expect(_8s_good2).not.toBeUndefined();
        let _8s_good2_result = module.invoke(_8s_good2, 65508);
        expect(_8s_good2_result).toBe(0);
    });

    _test("execution of address_0: 8s_good3 (instance 2)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        let _8s_good3_result = module.invoke(_8s_good3, 65508);
        expect(_8s_good3_result).toBe(0);
    });

    _test("execution of address_0: 8s_good4 (instance 2)", () => {
        let _8s_good4 = module.getExport("8s_good4");
        expect(_8s_good4).not.toBeUndefined();
        let _8s_good4_result = module.invoke(_8s_good4, 65508);
        expect(_8s_good4_result).toBe(0);
    });

    _test("execution of address_0: 8s_good5 (instance 2)", () => {
        let _8s_good5 = module.getExport("8s_good5");
        expect(_8s_good5).not.toBeUndefined();
        let _8s_good5_result = module.invoke(_8s_good5, 65508);
        expect(_8s_good5_result).toBe(0);
    });

    _test("execution of address_0: 16u_good1 (instance 2)", () => {
        let _16u_good1 = module.getExport("16u_good1");
        expect(_16u_good1).not.toBeUndefined();
        let _16u_good1_result = module.invoke(_16u_good1, 65508);
        expect(_16u_good1_result).toBe(0);
    });

    _test("execution of address_0: 16u_good2 (instance 2)", () => {
        let _16u_good2 = module.getExport("16u_good2");
        expect(_16u_good2).not.toBeUndefined();
        let _16u_good2_result = module.invoke(_16u_good2, 65508);
        expect(_16u_good2_result).toBe(0);
    });

    _test("execution of address_0: 16u_good3 (instance 2)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        let _16u_good3_result = module.invoke(_16u_good3, 65508);
        expect(_16u_good3_result).toBe(0);
    });

    _test("execution of address_0: 16u_good4 (instance 2)", () => {
        let _16u_good4 = module.getExport("16u_good4");
        expect(_16u_good4).not.toBeUndefined();
        let _16u_good4_result = module.invoke(_16u_good4, 65508);
        expect(_16u_good4_result).toBe(0);
    });

    _test("execution of address_0: 16u_good5 (instance 2)", () => {
        let _16u_good5 = module.getExport("16u_good5");
        expect(_16u_good5).not.toBeUndefined();
        let _16u_good5_result = module.invoke(_16u_good5, 65508);
        expect(_16u_good5_result).toBe(0);
    });

    _test("execution of address_0: 16s_good1 (instance 2)", () => {
        let _16s_good1 = module.getExport("16s_good1");
        expect(_16s_good1).not.toBeUndefined();
        let _16s_good1_result = module.invoke(_16s_good1, 65508);
        expect(_16s_good1_result).toBe(0);
    });

    _test("execution of address_0: 16s_good2 (instance 2)", () => {
        let _16s_good2 = module.getExport("16s_good2");
        expect(_16s_good2).not.toBeUndefined();
        let _16s_good2_result = module.invoke(_16s_good2, 65508);
        expect(_16s_good2_result).toBe(0);
    });

    _test("execution of address_0: 16s_good3 (instance 2)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        let _16s_good3_result = module.invoke(_16s_good3, 65508);
        expect(_16s_good3_result).toBe(0);
    });

    _test("execution of address_0: 16s_good4 (instance 2)", () => {
        let _16s_good4 = module.getExport("16s_good4");
        expect(_16s_good4).not.toBeUndefined();
        let _16s_good4_result = module.invoke(_16s_good4, 65508);
        expect(_16s_good4_result).toBe(0);
    });

    _test("execution of address_0: 16s_good5 (instance 2)", () => {
        let _16s_good5 = module.getExport("16s_good5");
        expect(_16s_good5).not.toBeUndefined();
        let _16s_good5_result = module.invoke(_16s_good5, 65508);
        expect(_16s_good5_result).toBe(0);
    });

    _test("execution of address_0: 32_good1 (instance 2)", () => {
        let _32_good1 = module.getExport("32_good1");
        expect(_32_good1).not.toBeUndefined();
        let _32_good1_result = module.invoke(_32_good1, 65508);
        expect(_32_good1_result).toBe(0);
    });

    _test("execution of address_0: 32_good2 (instance 2)", () => {
        let _32_good2 = module.getExport("32_good2");
        expect(_32_good2).not.toBeUndefined();
        let _32_good2_result = module.invoke(_32_good2, 65508);
        expect(_32_good2_result).toBe(0);
    });

    _test("execution of address_0: 32_good3 (instance 2)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        let _32_good3_result = module.invoke(_32_good3, 65508);
        expect(_32_good3_result).toBe(0);
    });

    _test("execution of address_0: 32_good4 (instance 2)", () => {
        let _32_good4 = module.getExport("32_good4");
        expect(_32_good4).not.toBeUndefined();
        let _32_good4_result = module.invoke(_32_good4, 65508);
        expect(_32_good4_result).toBe(0);
    });

    _test("execution of address_0: 32_good5 (instance 2)", () => {
        let _32_good5 = module.getExport("32_good5");
        expect(_32_good5).not.toBeUndefined();
        expect(() => module.invoke(_32_good5, 65508).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 8u_good3 (instance 3)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        expect(() => module.invoke(_8u_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 8s_good3 (instance 3)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        expect(() => module.invoke(_8s_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 16u_good3 (instance 3)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        expect(() => module.invoke(_16u_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 16s_good3 (instance 3)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        expect(() => module.invoke(_16s_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 32_good3 (instance 3)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        expect(() => module.invoke(_32_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 32_good3 (instance 4)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        expect(() => module.invoke(_32_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 8u_bad (instance 0)", () => {
        let _8u_bad = module.getExport("8u_bad");
        expect(_8u_bad).not.toBeUndefined();
        expect(() => module.invoke(_8u_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 8s_bad (instance 0)", () => {
        let _8s_bad = module.getExport("8s_bad");
        expect(_8s_bad).not.toBeUndefined();
        expect(() => module.invoke(_8s_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 16u_bad (instance 0)", () => {
        let _16u_bad = module.getExport("16u_bad");
        expect(_16u_bad).not.toBeUndefined();
        expect(() => module.invoke(_16u_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 16s_bad (instance 0)", () => {
        let _16s_bad = module.getExport("16s_bad");
        expect(_16s_bad).not.toBeUndefined();
        expect(() => module.invoke(_16s_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 32_bad (instance 0)", () => {
        let _32_bad = module.getExport("32_bad");
        expect(_32_bad).not.toBeUndefined();
        expect(() => module.invoke(_32_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 8u_bad (instance 1)", () => {
        let _8u_bad = module.getExport("8u_bad");
        expect(_8u_bad).not.toBeUndefined();
        expect(() => module.invoke(_8u_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 8s_bad (instance 1)", () => {
        let _8s_bad = module.getExport("8s_bad");
        expect(_8s_bad).not.toBeUndefined();
        expect(() => module.invoke(_8s_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 16u_bad (instance 1)", () => {
        let _16u_bad = module.getExport("16u_bad");
        expect(_16u_bad).not.toBeUndefined();
        expect(() => module.invoke(_16u_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 16s_bad (instance 1)", () => {
        let _16s_bad = module.getExport("16s_bad");
        expect(_16s_bad).not.toBeUndefined();
        expect(() => module.invoke(_16s_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_0: 32_bad (instance 1)", () => {
        let _32_bad = module.getExport("32_bad");
        expect(_32_bad).not.toBeUndefined();
        expect(() => module.invoke(_32_bad, 1).toThrow(TypeError, "Execution trapped"));
    });
});

describe("address_1", () => {
    let _test = test;

    _test("execution of address_1: _inline_test_0 (instance 0)", () => {});
});

describe("address_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/address_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of address_2: 8u_good1 (instance 3)", () => {
        let _8u_good1 = module.getExport("8u_good1");
        expect(_8u_good1).not.toBeUndefined();
        let _8u_good1_result = module.invoke(_8u_good1, 0);
        expect(_8u_good1_result).toBe(97n);
    });

    _test("execution of address_2: 8u_good2 (instance 3)", () => {
        let _8u_good2 = module.getExport("8u_good2");
        expect(_8u_good2).not.toBeUndefined();
        let _8u_good2_result = module.invoke(_8u_good2, 0);
        expect(_8u_good2_result).toBe(97n);
    });

    _test("execution of address_2: 8u_good3 (instance 4)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        let _8u_good3_result = module.invoke(_8u_good3, 0);
        expect(_8u_good3_result).toBe(98n);
    });

    _test("execution of address_2: 8u_good4 (instance 3)", () => {
        let _8u_good4 = module.getExport("8u_good4");
        expect(_8u_good4).not.toBeUndefined();
        let _8u_good4_result = module.invoke(_8u_good4, 0);
        expect(_8u_good4_result).toBe(99n);
    });

    _test("execution of address_2: 8u_good5 (instance 3)", () => {
        let _8u_good5 = module.getExport("8u_good5");
        expect(_8u_good5).not.toBeUndefined();
        let _8u_good5_result = module.invoke(_8u_good5, 0);
        expect(_8u_good5_result).toBe(122n);
    });

    _test("execution of address_2: 8s_good1 (instance 3)", () => {
        let _8s_good1 = module.getExport("8s_good1");
        expect(_8s_good1).not.toBeUndefined();
        let _8s_good1_result = module.invoke(_8s_good1, 0);
        expect(_8s_good1_result).toBe(97n);
    });

    _test("execution of address_2: 8s_good2 (instance 3)", () => {
        let _8s_good2 = module.getExport("8s_good2");
        expect(_8s_good2).not.toBeUndefined();
        let _8s_good2_result = module.invoke(_8s_good2, 0);
        expect(_8s_good2_result).toBe(97n);
    });

    _test("execution of address_2: 8s_good3 (instance 4)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        let _8s_good3_result = module.invoke(_8s_good3, 0);
        expect(_8s_good3_result).toBe(98n);
    });

    _test("execution of address_2: 8s_good4 (instance 3)", () => {
        let _8s_good4 = module.getExport("8s_good4");
        expect(_8s_good4).not.toBeUndefined();
        let _8s_good4_result = module.invoke(_8s_good4, 0);
        expect(_8s_good4_result).toBe(99n);
    });

    _test("execution of address_2: 8s_good5 (instance 3)", () => {
        let _8s_good5 = module.getExport("8s_good5");
        expect(_8s_good5).not.toBeUndefined();
        let _8s_good5_result = module.invoke(_8s_good5, 0);
        expect(_8s_good5_result).toBe(122n);
    });

    _test("execution of address_2: 16u_good1 (instance 3)", () => {
        let _16u_good1 = module.getExport("16u_good1");
        expect(_16u_good1).not.toBeUndefined();
        let _16u_good1_result = module.invoke(_16u_good1, 0);
        expect(_16u_good1_result).toBe(25185n);
    });

    _test("execution of address_2: 16u_good2 (instance 3)", () => {
        let _16u_good2 = module.getExport("16u_good2");
        expect(_16u_good2).not.toBeUndefined();
        let _16u_good2_result = module.invoke(_16u_good2, 0);
        expect(_16u_good2_result).toBe(25185n);
    });

    _test("execution of address_2: 16u_good3 (instance 4)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        let _16u_good3_result = module.invoke(_16u_good3, 0);
        expect(_16u_good3_result).toBe(25442n);
    });

    _test("execution of address_2: 16u_good4 (instance 3)", () => {
        let _16u_good4 = module.getExport("16u_good4");
        expect(_16u_good4).not.toBeUndefined();
        let _16u_good4_result = module.invoke(_16u_good4, 0);
        expect(_16u_good4_result).toBe(25699n);
    });

    _test("execution of address_2: 16u_good5 (instance 3)", () => {
        let _16u_good5 = module.getExport("16u_good5");
        expect(_16u_good5).not.toBeUndefined();
        let _16u_good5_result = module.invoke(_16u_good5, 0);
        expect(_16u_good5_result).toBe(122n);
    });

    _test("execution of address_2: 16s_good1 (instance 3)", () => {
        let _16s_good1 = module.getExport("16s_good1");
        expect(_16s_good1).not.toBeUndefined();
        let _16s_good1_result = module.invoke(_16s_good1, 0);
        expect(_16s_good1_result).toBe(25185n);
    });

    _test("execution of address_2: 16s_good2 (instance 3)", () => {
        let _16s_good2 = module.getExport("16s_good2");
        expect(_16s_good2).not.toBeUndefined();
        let _16s_good2_result = module.invoke(_16s_good2, 0);
        expect(_16s_good2_result).toBe(25185n);
    });

    _test("execution of address_2: 16s_good3 (instance 4)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        let _16s_good3_result = module.invoke(_16s_good3, 0);
        expect(_16s_good3_result).toBe(25442n);
    });

    _test("execution of address_2: 16s_good4 (instance 3)", () => {
        let _16s_good4 = module.getExport("16s_good4");
        expect(_16s_good4).not.toBeUndefined();
        let _16s_good4_result = module.invoke(_16s_good4, 0);
        expect(_16s_good4_result).toBe(25699n);
    });

    _test("execution of address_2: 16s_good5 (instance 3)", () => {
        let _16s_good5 = module.getExport("16s_good5");
        expect(_16s_good5).not.toBeUndefined();
        let _16s_good5_result = module.invoke(_16s_good5, 0);
        expect(_16s_good5_result).toBe(122n);
    });

    _test("execution of address_2: 32u_good1 (instance 0)", () => {
        let _32u_good1 = module.getExport("32u_good1");
        expect(_32u_good1).not.toBeUndefined();
        let _32u_good1_result = module.invoke(_32u_good1, 0);
        expect(_32u_good1_result).toBe(1684234849n);
    });

    _test("execution of address_2: 32u_good2 (instance 0)", () => {
        let _32u_good2 = module.getExport("32u_good2");
        expect(_32u_good2).not.toBeUndefined();
        let _32u_good2_result = module.invoke(_32u_good2, 0);
        expect(_32u_good2_result).toBe(1684234849n);
    });

    _test("execution of address_2: 32u_good3 (instance 0)", () => {
        let _32u_good3 = module.getExport("32u_good3");
        expect(_32u_good3).not.toBeUndefined();
        let _32u_good3_result = module.invoke(_32u_good3, 0);
        expect(_32u_good3_result).toBe(1701077858n);
    });

    _test("execution of address_2: 32u_good4 (instance 0)", () => {
        let _32u_good4 = module.getExport("32u_good4");
        expect(_32u_good4).not.toBeUndefined();
        let _32u_good4_result = module.invoke(_32u_good4, 0);
        expect(_32u_good4_result).toBe(1717920867n);
    });

    _test("execution of address_2: 32u_good5 (instance 0)", () => {
        let _32u_good5 = module.getExport("32u_good5");
        expect(_32u_good5).not.toBeUndefined();
        let _32u_good5_result = module.invoke(_32u_good5, 0);
        expect(_32u_good5_result).toBe(122n);
    });

    _test("execution of address_2: 32s_good1 (instance 0)", () => {
        let _32s_good1 = module.getExport("32s_good1");
        expect(_32s_good1).not.toBeUndefined();
        let _32s_good1_result = module.invoke(_32s_good1, 0);
        expect(_32s_good1_result).toBe(1684234849n);
    });

    _test("execution of address_2: 32s_good2 (instance 0)", () => {
        let _32s_good2 = module.getExport("32s_good2");
        expect(_32s_good2).not.toBeUndefined();
        let _32s_good2_result = module.invoke(_32s_good2, 0);
        expect(_32s_good2_result).toBe(1684234849n);
    });

    _test("execution of address_2: 32s_good3 (instance 0)", () => {
        let _32s_good3 = module.getExport("32s_good3");
        expect(_32s_good3).not.toBeUndefined();
        let _32s_good3_result = module.invoke(_32s_good3, 0);
        expect(_32s_good3_result).toBe(1701077858n);
    });

    _test("execution of address_2: 32s_good4 (instance 0)", () => {
        let _32s_good4 = module.getExport("32s_good4");
        expect(_32s_good4).not.toBeUndefined();
        let _32s_good4_result = module.invoke(_32s_good4, 0);
        expect(_32s_good4_result).toBe(1717920867n);
    });

    _test("execution of address_2: 32s_good5 (instance 0)", () => {
        let _32s_good5 = module.getExport("32s_good5");
        expect(_32s_good5).not.toBeUndefined();
        let _32s_good5_result = module.invoke(_32s_good5, 0);
        expect(_32s_good5_result).toBe(122n);
    });

    _test("execution of address_2: 64_good1 (instance 0)", () => {
        let _64_good1 = module.getExport("64_good1");
        expect(_64_good1).not.toBeUndefined();
        let _64_good1_result = module.invoke(_64_good1, 0);
        expect(_64_good1_result).toBe(7523094288207667809n);
    });

    _test("execution of address_2: 64_good2 (instance 0)", () => {
        let _64_good2 = module.getExport("64_good2");
        expect(_64_good2).not.toBeUndefined();
        let _64_good2_result = module.invoke(_64_good2, 0);
        expect(_64_good2_result).toBe(7523094288207667809n);
    });

    _test("execution of address_2: 64_good3 (instance 0)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        let _64_good3_result = module.invoke(_64_good3, 0);
        expect(_64_good3_result).toBe(7595434461045744482n);
    });

    _test("execution of address_2: 64_good4 (instance 0)", () => {
        let _64_good4 = module.getExport("64_good4");
        expect(_64_good4).not.toBeUndefined();
        let _64_good4_result = module.invoke(_64_good4, 0);
        expect(_64_good4_result).toBe(7667774633883821155n);
    });

    _test("execution of address_2: 64_good5 (instance 0)", () => {
        let _64_good5 = module.getExport("64_good5");
        expect(_64_good5).not.toBeUndefined();
        let _64_good5_result = module.invoke(_64_good5, 0);
        expect(_64_good5_result).toBe(122n);
    });

    _test("execution of address_2: 8u_good1 (instance 4)", () => {
        let _8u_good1 = module.getExport("8u_good1");
        expect(_8u_good1).not.toBeUndefined();
        let _8u_good1_result = module.invoke(_8u_good1, 65503);
        expect(_8u_good1_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good2 (instance 4)", () => {
        let _8u_good2 = module.getExport("8u_good2");
        expect(_8u_good2).not.toBeUndefined();
        let _8u_good2_result = module.invoke(_8u_good2, 65503);
        expect(_8u_good2_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good3 (instance 5)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        let _8u_good3_result = module.invoke(_8u_good3, 65503);
        expect(_8u_good3_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good4 (instance 4)", () => {
        let _8u_good4 = module.getExport("8u_good4");
        expect(_8u_good4).not.toBeUndefined();
        let _8u_good4_result = module.invoke(_8u_good4, 65503);
        expect(_8u_good4_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good5 (instance 4)", () => {
        let _8u_good5 = module.getExport("8u_good5");
        expect(_8u_good5).not.toBeUndefined();
        let _8u_good5_result = module.invoke(_8u_good5, 65503);
        expect(_8u_good5_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good1 (instance 4)", () => {
        let _8s_good1 = module.getExport("8s_good1");
        expect(_8s_good1).not.toBeUndefined();
        let _8s_good1_result = module.invoke(_8s_good1, 65503);
        expect(_8s_good1_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good2 (instance 4)", () => {
        let _8s_good2 = module.getExport("8s_good2");
        expect(_8s_good2).not.toBeUndefined();
        let _8s_good2_result = module.invoke(_8s_good2, 65503);
        expect(_8s_good2_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good3 (instance 5)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        let _8s_good3_result = module.invoke(_8s_good3, 65503);
        expect(_8s_good3_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good4 (instance 4)", () => {
        let _8s_good4 = module.getExport("8s_good4");
        expect(_8s_good4).not.toBeUndefined();
        let _8s_good4_result = module.invoke(_8s_good4, 65503);
        expect(_8s_good4_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good5 (instance 4)", () => {
        let _8s_good5 = module.getExport("8s_good5");
        expect(_8s_good5).not.toBeUndefined();
        let _8s_good5_result = module.invoke(_8s_good5, 65503);
        expect(_8s_good5_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good1 (instance 4)", () => {
        let _16u_good1 = module.getExport("16u_good1");
        expect(_16u_good1).not.toBeUndefined();
        let _16u_good1_result = module.invoke(_16u_good1, 65503);
        expect(_16u_good1_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good2 (instance 4)", () => {
        let _16u_good2 = module.getExport("16u_good2");
        expect(_16u_good2).not.toBeUndefined();
        let _16u_good2_result = module.invoke(_16u_good2, 65503);
        expect(_16u_good2_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good3 (instance 5)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        let _16u_good3_result = module.invoke(_16u_good3, 65503);
        expect(_16u_good3_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good4 (instance 4)", () => {
        let _16u_good4 = module.getExport("16u_good4");
        expect(_16u_good4).not.toBeUndefined();
        let _16u_good4_result = module.invoke(_16u_good4, 65503);
        expect(_16u_good4_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good5 (instance 4)", () => {
        let _16u_good5 = module.getExport("16u_good5");
        expect(_16u_good5).not.toBeUndefined();
        let _16u_good5_result = module.invoke(_16u_good5, 65503);
        expect(_16u_good5_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good1 (instance 4)", () => {
        let _16s_good1 = module.getExport("16s_good1");
        expect(_16s_good1).not.toBeUndefined();
        let _16s_good1_result = module.invoke(_16s_good1, 65503);
        expect(_16s_good1_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good2 (instance 4)", () => {
        let _16s_good2 = module.getExport("16s_good2");
        expect(_16s_good2).not.toBeUndefined();
        let _16s_good2_result = module.invoke(_16s_good2, 65503);
        expect(_16s_good2_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good3 (instance 5)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        let _16s_good3_result = module.invoke(_16s_good3, 65503);
        expect(_16s_good3_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good4 (instance 4)", () => {
        let _16s_good4 = module.getExport("16s_good4");
        expect(_16s_good4).not.toBeUndefined();
        let _16s_good4_result = module.invoke(_16s_good4, 65503);
        expect(_16s_good4_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good5 (instance 4)", () => {
        let _16s_good5 = module.getExport("16s_good5");
        expect(_16s_good5).not.toBeUndefined();
        let _16s_good5_result = module.invoke(_16s_good5, 65503);
        expect(_16s_good5_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good1 (instance 1)", () => {
        let _32u_good1 = module.getExport("32u_good1");
        expect(_32u_good1).not.toBeUndefined();
        let _32u_good1_result = module.invoke(_32u_good1, 65503);
        expect(_32u_good1_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good2 (instance 1)", () => {
        let _32u_good2 = module.getExport("32u_good2");
        expect(_32u_good2).not.toBeUndefined();
        let _32u_good2_result = module.invoke(_32u_good2, 65503);
        expect(_32u_good2_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good3 (instance 1)", () => {
        let _32u_good3 = module.getExport("32u_good3");
        expect(_32u_good3).not.toBeUndefined();
        let _32u_good3_result = module.invoke(_32u_good3, 65503);
        expect(_32u_good3_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good4 (instance 1)", () => {
        let _32u_good4 = module.getExport("32u_good4");
        expect(_32u_good4).not.toBeUndefined();
        let _32u_good4_result = module.invoke(_32u_good4, 65503);
        expect(_32u_good4_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good5 (instance 1)", () => {
        let _32u_good5 = module.getExport("32u_good5");
        expect(_32u_good5).not.toBeUndefined();
        let _32u_good5_result = module.invoke(_32u_good5, 65503);
        expect(_32u_good5_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good1 (instance 1)", () => {
        let _32s_good1 = module.getExport("32s_good1");
        expect(_32s_good1).not.toBeUndefined();
        let _32s_good1_result = module.invoke(_32s_good1, 65503);
        expect(_32s_good1_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good2 (instance 1)", () => {
        let _32s_good2 = module.getExport("32s_good2");
        expect(_32s_good2).not.toBeUndefined();
        let _32s_good2_result = module.invoke(_32s_good2, 65503);
        expect(_32s_good2_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good3 (instance 1)", () => {
        let _32s_good3 = module.getExport("32s_good3");
        expect(_32s_good3).not.toBeUndefined();
        let _32s_good3_result = module.invoke(_32s_good3, 65503);
        expect(_32s_good3_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good4 (instance 1)", () => {
        let _32s_good4 = module.getExport("32s_good4");
        expect(_32s_good4).not.toBeUndefined();
        let _32s_good4_result = module.invoke(_32s_good4, 65503);
        expect(_32s_good4_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good5 (instance 1)", () => {
        let _32s_good5 = module.getExport("32s_good5");
        expect(_32s_good5).not.toBeUndefined();
        let _32s_good5_result = module.invoke(_32s_good5, 65503);
        expect(_32s_good5_result).toBe(0n);
    });

    _test("execution of address_2: 64_good1 (instance 1)", () => {
        let _64_good1 = module.getExport("64_good1");
        expect(_64_good1).not.toBeUndefined();
        let _64_good1_result = module.invoke(_64_good1, 65503);
        expect(_64_good1_result).toBe(0n);
    });

    _test("execution of address_2: 64_good2 (instance 1)", () => {
        let _64_good2 = module.getExport("64_good2");
        expect(_64_good2).not.toBeUndefined();
        let _64_good2_result = module.invoke(_64_good2, 65503);
        expect(_64_good2_result).toBe(0n);
    });

    _test("execution of address_2: 64_good3 (instance 1)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        let _64_good3_result = module.invoke(_64_good3, 65503);
        expect(_64_good3_result).toBe(0n);
    });

    _test("execution of address_2: 64_good4 (instance 1)", () => {
        let _64_good4 = module.getExport("64_good4");
        expect(_64_good4).not.toBeUndefined();
        let _64_good4_result = module.invoke(_64_good4, 65503);
        expect(_64_good4_result).toBe(0n);
    });

    _test("execution of address_2: 64_good5 (instance 1)", () => {
        let _64_good5 = module.getExport("64_good5");
        expect(_64_good5).not.toBeUndefined();
        let _64_good5_result = module.invoke(_64_good5, 65503);
        expect(_64_good5_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good1 (instance 5)", () => {
        let _8u_good1 = module.getExport("8u_good1");
        expect(_8u_good1).not.toBeUndefined();
        let _8u_good1_result = module.invoke(_8u_good1, 65504);
        expect(_8u_good1_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good2 (instance 5)", () => {
        let _8u_good2 = module.getExport("8u_good2");
        expect(_8u_good2).not.toBeUndefined();
        let _8u_good2_result = module.invoke(_8u_good2, 65504);
        expect(_8u_good2_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good3 (instance 6)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        let _8u_good3_result = module.invoke(_8u_good3, 65504);
        expect(_8u_good3_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good4 (instance 5)", () => {
        let _8u_good4 = module.getExport("8u_good4");
        expect(_8u_good4).not.toBeUndefined();
        let _8u_good4_result = module.invoke(_8u_good4, 65504);
        expect(_8u_good4_result).toBe(0n);
    });

    _test("execution of address_2: 8u_good5 (instance 5)", () => {
        let _8u_good5 = module.getExport("8u_good5");
        expect(_8u_good5).not.toBeUndefined();
        let _8u_good5_result = module.invoke(_8u_good5, 65504);
        expect(_8u_good5_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good1 (instance 5)", () => {
        let _8s_good1 = module.getExport("8s_good1");
        expect(_8s_good1).not.toBeUndefined();
        let _8s_good1_result = module.invoke(_8s_good1, 65504);
        expect(_8s_good1_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good2 (instance 5)", () => {
        let _8s_good2 = module.getExport("8s_good2");
        expect(_8s_good2).not.toBeUndefined();
        let _8s_good2_result = module.invoke(_8s_good2, 65504);
        expect(_8s_good2_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good3 (instance 6)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        let _8s_good3_result = module.invoke(_8s_good3, 65504);
        expect(_8s_good3_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good4 (instance 5)", () => {
        let _8s_good4 = module.getExport("8s_good4");
        expect(_8s_good4).not.toBeUndefined();
        let _8s_good4_result = module.invoke(_8s_good4, 65504);
        expect(_8s_good4_result).toBe(0n);
    });

    _test("execution of address_2: 8s_good5 (instance 5)", () => {
        let _8s_good5 = module.getExport("8s_good5");
        expect(_8s_good5).not.toBeUndefined();
        let _8s_good5_result = module.invoke(_8s_good5, 65504);
        expect(_8s_good5_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good1 (instance 5)", () => {
        let _16u_good1 = module.getExport("16u_good1");
        expect(_16u_good1).not.toBeUndefined();
        let _16u_good1_result = module.invoke(_16u_good1, 65504);
        expect(_16u_good1_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good2 (instance 5)", () => {
        let _16u_good2 = module.getExport("16u_good2");
        expect(_16u_good2).not.toBeUndefined();
        let _16u_good2_result = module.invoke(_16u_good2, 65504);
        expect(_16u_good2_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good3 (instance 6)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        let _16u_good3_result = module.invoke(_16u_good3, 65504);
        expect(_16u_good3_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good4 (instance 5)", () => {
        let _16u_good4 = module.getExport("16u_good4");
        expect(_16u_good4).not.toBeUndefined();
        let _16u_good4_result = module.invoke(_16u_good4, 65504);
        expect(_16u_good4_result).toBe(0n);
    });

    _test("execution of address_2: 16u_good5 (instance 5)", () => {
        let _16u_good5 = module.getExport("16u_good5");
        expect(_16u_good5).not.toBeUndefined();
        let _16u_good5_result = module.invoke(_16u_good5, 65504);
        expect(_16u_good5_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good1 (instance 5)", () => {
        let _16s_good1 = module.getExport("16s_good1");
        expect(_16s_good1).not.toBeUndefined();
        let _16s_good1_result = module.invoke(_16s_good1, 65504);
        expect(_16s_good1_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good2 (instance 5)", () => {
        let _16s_good2 = module.getExport("16s_good2");
        expect(_16s_good2).not.toBeUndefined();
        let _16s_good2_result = module.invoke(_16s_good2, 65504);
        expect(_16s_good2_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good3 (instance 6)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        let _16s_good3_result = module.invoke(_16s_good3, 65504);
        expect(_16s_good3_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good4 (instance 5)", () => {
        let _16s_good4 = module.getExport("16s_good4");
        expect(_16s_good4).not.toBeUndefined();
        let _16s_good4_result = module.invoke(_16s_good4, 65504);
        expect(_16s_good4_result).toBe(0n);
    });

    _test("execution of address_2: 16s_good5 (instance 5)", () => {
        let _16s_good5 = module.getExport("16s_good5");
        expect(_16s_good5).not.toBeUndefined();
        let _16s_good5_result = module.invoke(_16s_good5, 65504);
        expect(_16s_good5_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good1 (instance 2)", () => {
        let _32u_good1 = module.getExport("32u_good1");
        expect(_32u_good1).not.toBeUndefined();
        let _32u_good1_result = module.invoke(_32u_good1, 65504);
        expect(_32u_good1_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good2 (instance 2)", () => {
        let _32u_good2 = module.getExport("32u_good2");
        expect(_32u_good2).not.toBeUndefined();
        let _32u_good2_result = module.invoke(_32u_good2, 65504);
        expect(_32u_good2_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good3 (instance 2)", () => {
        let _32u_good3 = module.getExport("32u_good3");
        expect(_32u_good3).not.toBeUndefined();
        let _32u_good3_result = module.invoke(_32u_good3, 65504);
        expect(_32u_good3_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good4 (instance 2)", () => {
        let _32u_good4 = module.getExport("32u_good4");
        expect(_32u_good4).not.toBeUndefined();
        let _32u_good4_result = module.invoke(_32u_good4, 65504);
        expect(_32u_good4_result).toBe(0n);
    });

    _test("execution of address_2: 32u_good5 (instance 2)", () => {
        let _32u_good5 = module.getExport("32u_good5");
        expect(_32u_good5).not.toBeUndefined();
        let _32u_good5_result = module.invoke(_32u_good5, 65504);
        expect(_32u_good5_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good1 (instance 2)", () => {
        let _32s_good1 = module.getExport("32s_good1");
        expect(_32s_good1).not.toBeUndefined();
        let _32s_good1_result = module.invoke(_32s_good1, 65504);
        expect(_32s_good1_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good2 (instance 2)", () => {
        let _32s_good2 = module.getExport("32s_good2");
        expect(_32s_good2).not.toBeUndefined();
        let _32s_good2_result = module.invoke(_32s_good2, 65504);
        expect(_32s_good2_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good3 (instance 2)", () => {
        let _32s_good3 = module.getExport("32s_good3");
        expect(_32s_good3).not.toBeUndefined();
        let _32s_good3_result = module.invoke(_32s_good3, 65504);
        expect(_32s_good3_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good4 (instance 2)", () => {
        let _32s_good4 = module.getExport("32s_good4");
        expect(_32s_good4).not.toBeUndefined();
        let _32s_good4_result = module.invoke(_32s_good4, 65504);
        expect(_32s_good4_result).toBe(0n);
    });

    _test("execution of address_2: 32s_good5 (instance 2)", () => {
        let _32s_good5 = module.getExport("32s_good5");
        expect(_32s_good5).not.toBeUndefined();
        let _32s_good5_result = module.invoke(_32s_good5, 65504);
        expect(_32s_good5_result).toBe(0n);
    });

    _test("execution of address_2: 64_good1 (instance 2)", () => {
        let _64_good1 = module.getExport("64_good1");
        expect(_64_good1).not.toBeUndefined();
        let _64_good1_result = module.invoke(_64_good1, 65504);
        expect(_64_good1_result).toBe(0n);
    });

    _test("execution of address_2: 64_good2 (instance 2)", () => {
        let _64_good2 = module.getExport("64_good2");
        expect(_64_good2).not.toBeUndefined();
        let _64_good2_result = module.invoke(_64_good2, 65504);
        expect(_64_good2_result).toBe(0n);
    });

    _test("execution of address_2: 64_good3 (instance 2)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        let _64_good3_result = module.invoke(_64_good3, 65504);
        expect(_64_good3_result).toBe(0n);
    });

    _test("execution of address_2: 64_good4 (instance 2)", () => {
        let _64_good4 = module.getExport("64_good4");
        expect(_64_good4).not.toBeUndefined();
        let _64_good4_result = module.invoke(_64_good4, 65504);
        expect(_64_good4_result).toBe(0n);
    });

    _test("execution of address_2: 64_good5 (instance 2)", () => {
        let _64_good5 = module.getExport("64_good5");
        expect(_64_good5).not.toBeUndefined();
        expect(() => module.invoke(_64_good5, 65504).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 8u_good3 (instance 7)", () => {
        let _8u_good3 = module.getExport("8u_good3");
        expect(_8u_good3).not.toBeUndefined();
        expect(() => module.invoke(_8u_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 8s_good3 (instance 7)", () => {
        let _8s_good3 = module.getExport("8s_good3");
        expect(_8s_good3).not.toBeUndefined();
        expect(() => module.invoke(_8s_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 16u_good3 (instance 7)", () => {
        let _16u_good3 = module.getExport("16u_good3");
        expect(_16u_good3).not.toBeUndefined();
        expect(() => module.invoke(_16u_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 16s_good3 (instance 7)", () => {
        let _16s_good3 = module.getExport("16s_good3");
        expect(_16s_good3).not.toBeUndefined();
        expect(() => module.invoke(_16s_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 32u_good3 (instance 3)", () => {
        let _32u_good3 = module.getExport("32u_good3");
        expect(_32u_good3).not.toBeUndefined();
        expect(() => module.invoke(_32u_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 32s_good3 (instance 3)", () => {
        let _32s_good3 = module.getExport("32s_good3");
        expect(_32s_good3).not.toBeUndefined();
        expect(() => module.invoke(_32s_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 64_good3 (instance 3)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        expect(() => module.invoke(_64_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 8u_bad (instance 2)", () => {
        let _8u_bad = module.getExport("8u_bad");
        expect(_8u_bad).not.toBeUndefined();
        expect(() => module.invoke(_8u_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 8s_bad (instance 2)", () => {
        let _8s_bad = module.getExport("8s_bad");
        expect(_8s_bad).not.toBeUndefined();
        expect(() => module.invoke(_8s_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 16u_bad (instance 2)", () => {
        let _16u_bad = module.getExport("16u_bad");
        expect(_16u_bad).not.toBeUndefined();
        expect(() => module.invoke(_16u_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 16s_bad (instance 2)", () => {
        let _16s_bad = module.getExport("16s_bad");
        expect(_16s_bad).not.toBeUndefined();
        expect(() => module.invoke(_16s_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 32u_bad (instance 0)", () => {
        let _32u_bad = module.getExport("32u_bad");
        expect(_32u_bad).not.toBeUndefined();
        expect(() => module.invoke(_32u_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 32s_bad (instance 0)", () => {
        let _32s_bad = module.getExport("32s_bad");
        expect(_32s_bad).not.toBeUndefined();
        expect(() => module.invoke(_32s_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 64_bad (instance 0)", () => {
        let _64_bad = module.getExport("64_bad");
        expect(_64_bad).not.toBeUndefined();
        expect(() => module.invoke(_64_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 8u_bad (instance 3)", () => {
        let _8u_bad = module.getExport("8u_bad");
        expect(_8u_bad).not.toBeUndefined();
        expect(() => module.invoke(_8u_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 8s_bad (instance 3)", () => {
        let _8s_bad = module.getExport("8s_bad");
        expect(_8s_bad).not.toBeUndefined();
        expect(() => module.invoke(_8s_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 16u_bad (instance 3)", () => {
        let _16u_bad = module.getExport("16u_bad");
        expect(_16u_bad).not.toBeUndefined();
        expect(() => module.invoke(_16u_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 16s_bad (instance 3)", () => {
        let _16s_bad = module.getExport("16s_bad");
        expect(_16s_bad).not.toBeUndefined();
        expect(() => module.invoke(_16s_bad, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 32u_bad (instance 1)", () => {
        let _32u_bad = module.getExport("32u_bad");
        expect(_32u_bad).not.toBeUndefined();
        expect(() => module.invoke(_32u_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 32s_bad (instance 1)", () => {
        let _32s_bad = module.getExport("32s_bad");
        expect(_32s_bad).not.toBeUndefined();
        expect(() => module.invoke(_32s_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_2: 64_bad (instance 1)", () => {
        let _64_bad = module.getExport("64_bad");
        expect(_64_bad).not.toBeUndefined();
        expect(() => module.invoke(_64_bad, 1).toThrow(TypeError, "Execution trapped"));
    });
});

describe("address_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/address_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of address_3: 32_good1 (instance 3)", () => {
        let _32_good1 = module.getExport("32_good1");
        expect(_32_good1).not.toBeUndefined();
        let _32_good1_result = module.invoke(_32_good1, 0);
        expect(_32_good1_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good2 (instance 3)", () => {
        let _32_good2 = module.getExport("32_good2");
        expect(_32_good2).not.toBeUndefined();
        let _32_good2_result = module.invoke(_32_good2, 0);
        expect(_32_good2_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good3 (instance 5)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        let _32_good3_result = module.invoke(_32_good3, 0);
        expect(_32_good3_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good4 (instance 3)", () => {
        let _32_good4 = module.getExport("32_good4");
        expect(_32_good4).not.toBeUndefined();
        let _32_good4_result = module.invoke(_32_good4, 0);
        expect(_32_good4_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good5 (instance 3)", () => {
        let _32_good5 = module.getExport("32_good5");
        expect(_32_good5).not.toBeUndefined();
        let _32_good5_result = module.invoke(_32_good5, 0);
        expect(_32_good5_result).toBe(NaN);
    });

    _test("execution of address_3: 32_good1 (instance 4)", () => {
        let _32_good1 = module.getExport("32_good1");
        expect(_32_good1).not.toBeUndefined();
        let _32_good1_result = module.invoke(_32_good1, 65524);
        expect(_32_good1_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good2 (instance 4)", () => {
        let _32_good2 = module.getExport("32_good2");
        expect(_32_good2).not.toBeUndefined();
        let _32_good2_result = module.invoke(_32_good2, 65524);
        expect(_32_good2_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good3 (instance 6)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        let _32_good3_result = module.invoke(_32_good3, 65524);
        expect(_32_good3_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good4 (instance 4)", () => {
        let _32_good4 = module.getExport("32_good4");
        expect(_32_good4).not.toBeUndefined();
        let _32_good4_result = module.invoke(_32_good4, 65524);
        expect(_32_good4_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good5 (instance 4)", () => {
        let _32_good5 = module.getExport("32_good5");
        expect(_32_good5).not.toBeUndefined();
        let _32_good5_result = module.invoke(_32_good5, 65524);
        expect(_32_good5_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good1 (instance 5)", () => {
        let _32_good1 = module.getExport("32_good1");
        expect(_32_good1).not.toBeUndefined();
        let _32_good1_result = module.invoke(_32_good1, 65525);
        expect(_32_good1_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good2 (instance 5)", () => {
        let _32_good2 = module.getExport("32_good2");
        expect(_32_good2).not.toBeUndefined();
        let _32_good2_result = module.invoke(_32_good2, 65525);
        expect(_32_good2_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good3 (instance 7)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        let _32_good3_result = module.invoke(_32_good3, 65525);
        expect(_32_good3_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good4 (instance 5)", () => {
        let _32_good4 = module.getExport("32_good4");
        expect(_32_good4).not.toBeUndefined();
        let _32_good4_result = module.invoke(_32_good4, 65525);
        expect(_32_good4_result).toBe(0.0);
    });

    _test("execution of address_3: 32_good5 (instance 5)", () => {
        let _32_good5 = module.getExport("32_good5");
        expect(_32_good5).not.toBeUndefined();
        expect(() => module.invoke(_32_good5, 65525).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_3: 32_good3 (instance 8)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        expect(() => module.invoke(_32_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_3: 32_good3 (instance 9)", () => {
        let _32_good3 = module.getExport("32_good3");
        expect(_32_good3).not.toBeUndefined();
        expect(() => module.invoke(_32_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_3: 32_bad (instance 2)", () => {
        let _32_bad = module.getExport("32_bad");
        expect(_32_bad).not.toBeUndefined();
        expect(() => module.invoke(_32_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_3: 32_bad (instance 3)", () => {
        let _32_bad = module.getExport("32_bad");
        expect(_32_bad).not.toBeUndefined();
        expect(() => module.invoke(_32_bad, 1).toThrow(TypeError, "Execution trapped"));
    });
});

describe("address_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/address_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of address_4: 64_good1 (instance 3)", () => {
        let _64_good1 = module.getExport("64_good1");
        expect(_64_good1).not.toBeUndefined();
        let _64_good1_result = module.invoke(_64_good1, 0);
        expect(_64_good1_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good2 (instance 3)", () => {
        let _64_good2 = module.getExport("64_good2");
        expect(_64_good2).not.toBeUndefined();
        let _64_good2_result = module.invoke(_64_good2, 0);
        expect(_64_good2_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good3 (instance 4)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        let _64_good3_result = module.invoke(_64_good3, 0);
        expect(_64_good3_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good4 (instance 3)", () => {
        let _64_good4 = module.getExport("64_good4");
        expect(_64_good4).not.toBeUndefined();
        let _64_good4_result = module.invoke(_64_good4, 0);
        expect(_64_good4_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good5 (instance 3)", () => {
        let _64_good5 = module.getExport("64_good5");
        expect(_64_good5).not.toBeUndefined();
        let _64_good5_result = module.invoke(_64_good5, 0);
        expect(_64_good5_result).toBe(NaN);
    });

    _test("execution of address_4: 64_good1 (instance 4)", () => {
        let _64_good1 = module.getExport("64_good1");
        expect(_64_good1).not.toBeUndefined();
        let _64_good1_result = module.invoke(_64_good1, 65510);
        expect(_64_good1_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good2 (instance 4)", () => {
        let _64_good2 = module.getExport("64_good2");
        expect(_64_good2).not.toBeUndefined();
        let _64_good2_result = module.invoke(_64_good2, 65510);
        expect(_64_good2_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good3 (instance 5)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        let _64_good3_result = module.invoke(_64_good3, 65510);
        expect(_64_good3_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good4 (instance 4)", () => {
        let _64_good4 = module.getExport("64_good4");
        expect(_64_good4).not.toBeUndefined();
        let _64_good4_result = module.invoke(_64_good4, 65510);
        expect(_64_good4_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good5 (instance 4)", () => {
        let _64_good5 = module.getExport("64_good5");
        expect(_64_good5).not.toBeUndefined();
        let _64_good5_result = module.invoke(_64_good5, 65510);
        expect(_64_good5_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good1 (instance 5)", () => {
        let _64_good1 = module.getExport("64_good1");
        expect(_64_good1).not.toBeUndefined();
        let _64_good1_result = module.invoke(_64_good1, 65511);
        expect(_64_good1_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good2 (instance 5)", () => {
        let _64_good2 = module.getExport("64_good2");
        expect(_64_good2).not.toBeUndefined();
        let _64_good2_result = module.invoke(_64_good2, 65511);
        expect(_64_good2_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good3 (instance 6)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        let _64_good3_result = module.invoke(_64_good3, 65511);
        expect(_64_good3_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good4 (instance 5)", () => {
        let _64_good4 = module.getExport("64_good4");
        expect(_64_good4).not.toBeUndefined();
        let _64_good4_result = module.invoke(_64_good4, 65511);
        expect(_64_good4_result).toBe(0.0);
    });

    _test("execution of address_4: 64_good5 (instance 5)", () => {
        let _64_good5 = module.getExport("64_good5");
        expect(_64_good5).not.toBeUndefined();
        expect(() => module.invoke(_64_good5, 65511).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_4: 64_good3 (instance 7)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        expect(() => module.invoke(_64_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_4: 64_good3 (instance 8)", () => {
        let _64_good3 = module.getExport("64_good3");
        expect(_64_good3).not.toBeUndefined();
        expect(() => module.invoke(_64_good3, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_4: 64_bad (instance 2)", () => {
        let _64_bad = module.getExport("64_bad");
        expect(_64_bad).not.toBeUndefined();
        expect(() => module.invoke(_64_bad, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of address_4: 64_bad (instance 3)", () => {
        let _64_bad = module.getExport("64_bad");
        expect(_64_bad).not.toBeUndefined();
        expect(() => module.invoke(_64_bad, 1).toThrow(TypeError, "Execution trapped"));
    });
});
