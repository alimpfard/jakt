let globalImportObject = {};
let namedModules = {};

describe("f64_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/f64_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of f64_0: add (instance 0)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -0.0);
        expect(_add_result).toBe(-0.0);
    });

    _test("execution of f64_0: add (instance 1)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, 0.0);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 2)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -0.0);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 3)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, 0.0);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 4)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -5e-324);
        expect(_add_result).toBe(-5e-324);
    });

    _test("execution of f64_0: add (instance 5)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, 5e-324);
        expect(_add_result).toBe(5e-324);
    });

    _test("execution of f64_0: add (instance 6)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -5e-324);
        expect(_add_result).toBe(-5e-324);
    });

    _test("execution of f64_0: add (instance 7)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, 5e-324);
        expect(_add_result).toBe(5e-324);
    });

    _test("execution of f64_0: add (instance 8)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -2.2250738585072014e-308);
        expect(_add_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 9)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, 2.2250738585072014e-308);
        expect(_add_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 10)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -2.2250738585072014e-308);
        expect(_add_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 11)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, 2.2250738585072014e-308);
        expect(_add_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 12)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -0.5);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 13)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, 0.5);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 14)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -0.5);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 15)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, 0.5);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 16)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -1.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 17)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, 1.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 18)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -1.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 19)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, 1.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 20)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -6.283185307179586);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 21)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, 6.283185307179586);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 22)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -6.283185307179586);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 23)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, 6.283185307179586);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 24)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 25)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 26)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 27)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 28)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 29)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 30)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 31)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 32)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 33)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 34)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 35)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 36)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 37)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 38)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 39)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 40)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -0.0);
        expect(_add_result).toBe(-5e-324);
    });

    _test("execution of f64_0: add (instance 41)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, 0.0);
        expect(_add_result).toBe(-5e-324);
    });

    _test("execution of f64_0: add (instance 42)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -0.0);
        expect(_add_result).toBe(5e-324);
    });

    _test("execution of f64_0: add (instance 43)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, 0.0);
        expect(_add_result).toBe(5e-324);
    });

    _test("execution of f64_0: add (instance 44)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -5e-324);
        expect(_add_result).toBe(-1e-323);
    });

    _test("execution of f64_0: add (instance 45)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, 5e-324);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 46)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -5e-324);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 47)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, 5e-324);
        expect(_add_result).toBe(1e-323);
    });

    _test("execution of f64_0: add (instance 48)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -2.2250738585072014e-308);
        expect(_add_result).toBe(-2.225073858507202e-308);
    });

    _test("execution of f64_0: add (instance 49)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, 2.2250738585072014e-308);
        expect(_add_result).toBe(2.225073858507201e-308);
    });

    _test("execution of f64_0: add (instance 50)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -2.2250738585072014e-308);
        expect(_add_result).toBe(-2.225073858507201e-308);
    });

    _test("execution of f64_0: add (instance 51)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, 2.2250738585072014e-308);
        expect(_add_result).toBe(2.225073858507202e-308);
    });

    _test("execution of f64_0: add (instance 52)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -0.5);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 53)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, 0.5);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 54)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -0.5);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 55)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, 0.5);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 56)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -1.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 57)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, 1.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 58)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -1.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 59)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, 1.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 60)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -6.283185307179586);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 61)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, 6.283185307179586);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 62)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -6.283185307179586);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 63)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, 6.283185307179586);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 64)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 65)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 66)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 67)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 68)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 69)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 70)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 71)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 72)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 73)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 74)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 75)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -5e-324, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 76)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 77)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 78)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 79)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 5e-324, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 80)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -0.0);
        expect(_add_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 81)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, 0.0);
        expect(_add_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 82)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -0.0);
        expect(_add_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 83)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, 0.0);
        expect(_add_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: add (instance 84)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -5e-324);
        expect(_add_result).toBe(-2.225073858507202e-308);
    });

    _test("execution of f64_0: add (instance 85)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, 5e-324);
        expect(_add_result).toBe(-2.225073858507201e-308);
    });

    _test("execution of f64_0: add (instance 86)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -5e-324);
        expect(_add_result).toBe(2.225073858507201e-308);
    });

    _test("execution of f64_0: add (instance 87)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, 5e-324);
        expect(_add_result).toBe(2.225073858507202e-308);
    });

    _test("execution of f64_0: add (instance 88)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_add_result).toBe(-4.450147717014403e-308);
    });

    _test("execution of f64_0: add (instance 89)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 90)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 91)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_add_result).toBe(4.450147717014403e-308);
    });

    _test("execution of f64_0: add (instance 92)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -0.5);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 93)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, 0.5);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 94)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -0.5);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 95)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, 0.5);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 96)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -1.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 97)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, 1.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 98)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -1.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 99)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, 1.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 100)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -6.283185307179586);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 101)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, 6.283185307179586);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 102)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -6.283185307179586);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 103)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, 6.283185307179586);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 104)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 105)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 106)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 107)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 108)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 109)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 110)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 111)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 112)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 113)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 114)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 115)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2.2250738585072014e-308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 116)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 117)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 118)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 119)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2.2250738585072014e-308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 120)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -0.0);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 121)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, 0.0);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 122)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -0.0);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 123)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, 0.0);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 124)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -5e-324);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 125)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, 5e-324);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 126)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -5e-324);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 127)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, 5e-324);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 128)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -2.2250738585072014e-308);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 129)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, 2.2250738585072014e-308);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 130)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -2.2250738585072014e-308);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 131)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, 2.2250738585072014e-308);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 132)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -0.5);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 133)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, 0.5);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 134)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -0.5);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 135)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, 0.5);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 136)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -1.0);
        expect(_add_result).toBe(-1.5);
    });

    _test("execution of f64_0: add (instance 137)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, 1.0);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 138)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -1.0);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 139)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, 1.0);
        expect(_add_result).toBe(1.5);
    });

    _test("execution of f64_0: add (instance 140)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -6.283185307179586);
        expect(_add_result).toBe(-6.783185307179586);
    });

    _test("execution of f64_0: add (instance 141)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, 6.283185307179586);
        expect(_add_result).toBe(5.783185307179586);
    });

    _test("execution of f64_0: add (instance 142)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -6.283185307179586);
        expect(_add_result).toBe(-5.783185307179586);
    });

    _test("execution of f64_0: add (instance 143)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, 6.283185307179586);
        expect(_add_result).toBe(6.783185307179586);
    });

    _test("execution of f64_0: add (instance 144)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 145)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 146)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 147)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 148)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 149)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 150)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 151)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 152)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 153)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 154)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 155)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -0.5, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 156)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 157)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 158)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 159)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 0.5, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 160)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -0.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 161)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, 0.0);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 162)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -0.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 163)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, 0.0);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 164)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -5e-324);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 165)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, 5e-324);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 166)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -5e-324);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 167)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, 5e-324);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 168)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -2.2250738585072014e-308);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 169)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, 2.2250738585072014e-308);
        expect(_add_result).toBe(-1.0);
    });

    _test("execution of f64_0: add (instance 170)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -2.2250738585072014e-308);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 171)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, 2.2250738585072014e-308);
        expect(_add_result).toBe(1.0);
    });

    _test("execution of f64_0: add (instance 172)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -0.5);
        expect(_add_result).toBe(-1.5);
    });

    _test("execution of f64_0: add (instance 173)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, 0.5);
        expect(_add_result).toBe(-0.5);
    });

    _test("execution of f64_0: add (instance 174)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -0.5);
        expect(_add_result).toBe(0.5);
    });

    _test("execution of f64_0: add (instance 175)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, 0.5);
        expect(_add_result).toBe(1.5);
    });

    _test("execution of f64_0: add (instance 176)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -1.0);
        expect(_add_result).toBe(-2.0);
    });

    _test("execution of f64_0: add (instance 177)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, 1.0);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 178)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -1.0);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 179)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, 1.0);
        expect(_add_result).toBe(2.0);
    });

    _test("execution of f64_0: add (instance 180)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -6.283185307179586);
        expect(_add_result).toBe(-7.283185307179586);
    });

    _test("execution of f64_0: add (instance 181)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, 6.283185307179586);
        expect(_add_result).toBe(5.283185307179586);
    });

    _test("execution of f64_0: add (instance 182)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -6.283185307179586);
        expect(_add_result).toBe(-5.283185307179586);
    });

    _test("execution of f64_0: add (instance 183)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, 6.283185307179586);
        expect(_add_result).toBe(7.283185307179586);
    });

    _test("execution of f64_0: add (instance 184)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 185)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 186)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 187)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 188)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 189)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 190)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 191)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 192)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 193)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 194)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 195)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 196)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 197)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 198)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 199)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.0, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 200)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -0.0);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 201)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, 0.0);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 202)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -0.0);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 203)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, 0.0);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 204)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -5e-324);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 205)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, 5e-324);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 206)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -5e-324);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 207)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, 5e-324);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 208)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -2.2250738585072014e-308);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 209)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, 2.2250738585072014e-308);
        expect(_add_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: add (instance 210)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -2.2250738585072014e-308);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 211)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, 2.2250738585072014e-308);
        expect(_add_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: add (instance 212)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -0.5);
        expect(_add_result).toBe(-6.783185307179586);
    });

    _test("execution of f64_0: add (instance 213)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, 0.5);
        expect(_add_result).toBe(-5.783185307179586);
    });

    _test("execution of f64_0: add (instance 214)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -0.5);
        expect(_add_result).toBe(5.783185307179586);
    });

    _test("execution of f64_0: add (instance 215)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, 0.5);
        expect(_add_result).toBe(6.783185307179586);
    });

    _test("execution of f64_0: add (instance 216)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -1.0);
        expect(_add_result).toBe(-7.283185307179586);
    });

    _test("execution of f64_0: add (instance 217)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, 1.0);
        expect(_add_result).toBe(-5.283185307179586);
    });

    _test("execution of f64_0: add (instance 218)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -1.0);
        expect(_add_result).toBe(5.283185307179586);
    });

    _test("execution of f64_0: add (instance 219)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, 1.0);
        expect(_add_result).toBe(7.283185307179586);
    });

    _test("execution of f64_0: add (instance 220)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -6.283185307179586);
        expect(_add_result).toBe(-12.566370614359172);
    });

    _test("execution of f64_0: add (instance 221)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, 6.283185307179586);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 222)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -6.283185307179586);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 223)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, 6.283185307179586);
        expect(_add_result).toBe(12.566370614359172);
    });

    _test("execution of f64_0: add (instance 224)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 225)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 226)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -1.7976931348623157e308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 227)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, 1.7976931348623157e308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 228)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 229)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 230)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 231)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 232)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 233)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 234)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 235)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -6.283185307179586, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 236)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 237)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 238)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 239)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 6.283185307179586, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 240)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -0.0);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 241)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, 0.0);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 242)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -0.0);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 243)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, 0.0);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 244)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -5e-324);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 245)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, 5e-324);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 246)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -5e-324);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 247)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, 5e-324);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 248)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 249)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 250)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 251)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 252)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -0.5);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 253)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, 0.5);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 254)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -0.5);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 255)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, 0.5);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 256)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -1.0);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 257)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, 1.0);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 258)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -1.0);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 259)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, 1.0);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 260)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -6.283185307179586);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 261)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, 6.283185307179586);
        expect(_add_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 262)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -6.283185307179586);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 263)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, 6.283185307179586);
        expect(_add_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: add (instance 264)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -1.7976931348623157e308);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 265)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, 1.7976931348623157e308);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 266)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -1.7976931348623157e308);
        expect(_add_result).toBe(0.0);
    });

    _test("execution of f64_0: add (instance 267)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, 1.7976931348623157e308);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 268)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 269)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 270)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 271)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 272)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 273)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 274)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 275)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1.7976931348623157e308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 276)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 277)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 278)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 279)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1.7976931348623157e308, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 280)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -0.0);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 281)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, 0.0);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 282)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -0.0);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 283)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, 0.0);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 284)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -5e-324);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 285)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, 5e-324);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 286)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -5e-324);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 287)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, 5e-324);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 288)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -2.2250738585072014e-308);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 289)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, 2.2250738585072014e-308);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 290)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -2.2250738585072014e-308);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 291)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, 2.2250738585072014e-308);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 292)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -0.5);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 293)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, 0.5);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 294)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -0.5);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 295)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, 0.5);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 296)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -1.0);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 297)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, 1.0);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 298)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -1.0);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 299)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, 1.0);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 300)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -6.283185307179586);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 301)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, 6.283185307179586);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 302)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -6.283185307179586);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 303)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, 6.283185307179586);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 304)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -1.7976931348623157e308);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 305)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, 1.7976931348623157e308);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 306)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -1.7976931348623157e308);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 307)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, 1.7976931348623157e308);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 308)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -Infinity);
        expect(_add_result).toBe(-Infinity);
    });

    _test("execution of f64_0: add (instance 309)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 310)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 311)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, Infinity);
        expect(_add_result).toBe(Infinity);
    });

    _test("execution of f64_0: add (instance 312)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 313)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 314)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 315)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -Infinity, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 316)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 317)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 318)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 319)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, Infinity, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 320)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 321)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 322)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 323)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 324)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 325)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 326)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 327)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 0.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 328)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 329)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 330)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 331)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 332)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 333)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 334)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 335)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 5e-324);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 336)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 337)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 338)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 339)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 340)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 341)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 342)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 343)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 2.2250738585072014e-308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 344)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 345)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 346)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 347)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 348)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 349)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 350)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 351)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 0.5);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 352)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 353)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 354)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 355)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 356)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 357)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 358)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 359)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 1.0);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 360)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 361)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 362)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 363)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 364)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 365)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 366)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 367)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 6.283185307179586);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 368)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 369)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 370)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 371)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, 1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 372)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 373)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 374)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 375)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, 1.7976931348623157e308);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 376)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 377)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 378)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 379)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 380)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 381)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 382)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 383)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, Infinity);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 384)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 385)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 386)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 387)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 388)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 389)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 390)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 391)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 392)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 393)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 394)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 395)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, -NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 396)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 397)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 398)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: add (instance 399)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, NaN, NaN);
        expect(_add_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 0)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -0.0);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 1)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, 0.0);
        expect(_sub_result).toBe(-0.0);
    });

    _test("execution of f64_0: sub (instance 2)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -0.0);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 3)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, 0.0);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 4)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -5e-324);
        expect(_sub_result).toBe(5e-324);
    });

    _test("execution of f64_0: sub (instance 5)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, 5e-324);
        expect(_sub_result).toBe(-5e-324);
    });

    _test("execution of f64_0: sub (instance 6)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -5e-324);
        expect(_sub_result).toBe(5e-324);
    });

    _test("execution of f64_0: sub (instance 7)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, 5e-324);
        expect(_sub_result).toBe(-5e-324);
    });

    _test("execution of f64_0: sub (instance 8)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -2.2250738585072014e-308);
        expect(_sub_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 9)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 10)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -2.2250738585072014e-308);
        expect(_sub_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 11)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 12)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -0.5);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 13)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, 0.5);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 14)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -0.5);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 15)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, 0.5);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 16)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -1.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 17)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, 1.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 18)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -1.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 19)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, 1.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 20)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -6.283185307179586);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 21)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, 6.283185307179586);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 22)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -6.283185307179586);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 23)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, 6.283185307179586);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 24)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 25)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 26)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 27)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 28)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 29)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 30)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 31)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 32)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 33)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 34)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 35)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 36)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 37)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 38)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 39)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 40)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -0.0);
        expect(_sub_result).toBe(-5e-324);
    });

    _test("execution of f64_0: sub (instance 41)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, 0.0);
        expect(_sub_result).toBe(-5e-324);
    });

    _test("execution of f64_0: sub (instance 42)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -0.0);
        expect(_sub_result).toBe(5e-324);
    });

    _test("execution of f64_0: sub (instance 43)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, 0.0);
        expect(_sub_result).toBe(5e-324);
    });

    _test("execution of f64_0: sub (instance 44)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -5e-324);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 45)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, 5e-324);
        expect(_sub_result).toBe(-1e-323);
    });

    _test("execution of f64_0: sub (instance 46)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -5e-324);
        expect(_sub_result).toBe(1e-323);
    });

    _test("execution of f64_0: sub (instance 47)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, 5e-324);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 48)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -2.2250738585072014e-308);
        expect(_sub_result).toBe(2.225073858507201e-308);
    });

    _test("execution of f64_0: sub (instance 49)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-2.225073858507202e-308);
    });

    _test("execution of f64_0: sub (instance 50)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -2.2250738585072014e-308);
        expect(_sub_result).toBe(2.225073858507202e-308);
    });

    _test("execution of f64_0: sub (instance 51)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-2.225073858507201e-308);
    });

    _test("execution of f64_0: sub (instance 52)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -0.5);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 53)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, 0.5);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 54)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -0.5);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 55)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, 0.5);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 56)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -1.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 57)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, 1.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 58)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -1.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 59)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, 1.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 60)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -6.283185307179586);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 61)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, 6.283185307179586);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 62)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -6.283185307179586);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 63)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, 6.283185307179586);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 64)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 65)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 66)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 67)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 68)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 69)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 70)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 71)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 72)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 73)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 74)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 75)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -5e-324, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 76)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 77)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 78)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 79)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 5e-324, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 80)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -0.0);
        expect(_sub_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 81)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, 0.0);
        expect(_sub_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 82)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -0.0);
        expect(_sub_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 83)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, 0.0);
        expect(_sub_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: sub (instance 84)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -5e-324);
        expect(_sub_result).toBe(-2.225073858507201e-308);
    });

    _test("execution of f64_0: sub (instance 85)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, 5e-324);
        expect(_sub_result).toBe(-2.225073858507202e-308);
    });

    _test("execution of f64_0: sub (instance 86)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -5e-324);
        expect(_sub_result).toBe(2.225073858507202e-308);
    });

    _test("execution of f64_0: sub (instance 87)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, 5e-324);
        expect(_sub_result).toBe(2.225073858507201e-308);
    });

    _test("execution of f64_0: sub (instance 88)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 89)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-4.450147717014403e-308);
    });

    _test("execution of f64_0: sub (instance 90)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_sub_result).toBe(4.450147717014403e-308);
    });

    _test("execution of f64_0: sub (instance 91)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 92)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -0.5);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 93)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, 0.5);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 94)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -0.5);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 95)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, 0.5);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 96)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -1.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 97)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, 1.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 98)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -1.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 99)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, 1.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 100)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -6.283185307179586);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 101)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, 6.283185307179586);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 102)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -6.283185307179586);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 103)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, 6.283185307179586);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 104)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 105)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 106)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 107)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 108)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 109)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 110)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 111)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 112)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 113)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 114)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 115)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2.2250738585072014e-308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 116)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 117)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 118)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 119)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2.2250738585072014e-308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 120)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -0.0);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 121)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, 0.0);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 122)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -0.0);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 123)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, 0.0);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 124)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -5e-324);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 125)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, 5e-324);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 126)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -5e-324);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 127)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, 5e-324);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 128)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -2.2250738585072014e-308);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 129)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 130)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -2.2250738585072014e-308);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 131)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, 2.2250738585072014e-308);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 132)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -0.5);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 133)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, 0.5);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 134)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -0.5);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 135)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, 0.5);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 136)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -1.0);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 137)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, 1.0);
        expect(_sub_result).toBe(-1.5);
    });

    _test("execution of f64_0: sub (instance 138)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -1.0);
        expect(_sub_result).toBe(1.5);
    });

    _test("execution of f64_0: sub (instance 139)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, 1.0);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 140)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -6.283185307179586);
        expect(_sub_result).toBe(5.783185307179586);
    });

    _test("execution of f64_0: sub (instance 141)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, 6.283185307179586);
        expect(_sub_result).toBe(-6.783185307179586);
    });

    _test("execution of f64_0: sub (instance 142)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -6.283185307179586);
        expect(_sub_result).toBe(6.783185307179586);
    });

    _test("execution of f64_0: sub (instance 143)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, 6.283185307179586);
        expect(_sub_result).toBe(-5.783185307179586);
    });

    _test("execution of f64_0: sub (instance 144)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 145)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 146)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 147)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 148)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 149)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 150)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 151)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 152)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 153)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 154)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 155)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -0.5, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 156)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 157)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 158)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 159)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 0.5, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 160)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -0.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 161)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, 0.0);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 162)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -0.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 163)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, 0.0);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 164)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -5e-324);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 165)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, 5e-324);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 166)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -5e-324);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 167)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, 5e-324);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 168)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -2.2250738585072014e-308);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 169)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-1.0);
    });

    _test("execution of f64_0: sub (instance 170)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -2.2250738585072014e-308);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 171)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, 2.2250738585072014e-308);
        expect(_sub_result).toBe(1.0);
    });

    _test("execution of f64_0: sub (instance 172)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -0.5);
        expect(_sub_result).toBe(-0.5);
    });

    _test("execution of f64_0: sub (instance 173)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, 0.5);
        expect(_sub_result).toBe(-1.5);
    });

    _test("execution of f64_0: sub (instance 174)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -0.5);
        expect(_sub_result).toBe(1.5);
    });

    _test("execution of f64_0: sub (instance 175)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, 0.5);
        expect(_sub_result).toBe(0.5);
    });

    _test("execution of f64_0: sub (instance 176)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -1.0);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 177)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, 1.0);
        expect(_sub_result).toBe(-2.0);
    });

    _test("execution of f64_0: sub (instance 178)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -1.0);
        expect(_sub_result).toBe(2.0);
    });

    _test("execution of f64_0: sub (instance 179)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, 1.0);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 180)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -6.283185307179586);
        expect(_sub_result).toBe(5.283185307179586);
    });

    _test("execution of f64_0: sub (instance 181)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, 6.283185307179586);
        expect(_sub_result).toBe(-7.283185307179586);
    });

    _test("execution of f64_0: sub (instance 182)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -6.283185307179586);
        expect(_sub_result).toBe(7.283185307179586);
    });

    _test("execution of f64_0: sub (instance 183)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, 6.283185307179586);
        expect(_sub_result).toBe(-5.283185307179586);
    });

    _test("execution of f64_0: sub (instance 184)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 185)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 186)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 187)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 188)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 189)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 190)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 191)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 192)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 193)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 194)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 195)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 196)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 197)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 198)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 199)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.0, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 200)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -0.0);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 201)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, 0.0);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 202)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -0.0);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 203)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, 0.0);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 204)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -5e-324);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 205)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, 5e-324);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 206)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -5e-324);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 207)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, 5e-324);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 208)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -2.2250738585072014e-308);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 209)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 210)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -2.2250738585072014e-308);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 211)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, 2.2250738585072014e-308);
        expect(_sub_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: sub (instance 212)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -0.5);
        expect(_sub_result).toBe(-5.783185307179586);
    });

    _test("execution of f64_0: sub (instance 213)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, 0.5);
        expect(_sub_result).toBe(-6.783185307179586);
    });

    _test("execution of f64_0: sub (instance 214)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -0.5);
        expect(_sub_result).toBe(6.783185307179586);
    });

    _test("execution of f64_0: sub (instance 215)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, 0.5);
        expect(_sub_result).toBe(5.783185307179586);
    });

    _test("execution of f64_0: sub (instance 216)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -1.0);
        expect(_sub_result).toBe(-5.283185307179586);
    });

    _test("execution of f64_0: sub (instance 217)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, 1.0);
        expect(_sub_result).toBe(-7.283185307179586);
    });

    _test("execution of f64_0: sub (instance 218)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -1.0);
        expect(_sub_result).toBe(7.283185307179586);
    });

    _test("execution of f64_0: sub (instance 219)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, 1.0);
        expect(_sub_result).toBe(5.283185307179586);
    });

    _test("execution of f64_0: sub (instance 220)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -6.283185307179586);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 221)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, 6.283185307179586);
        expect(_sub_result).toBe(-12.566370614359172);
    });

    _test("execution of f64_0: sub (instance 222)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -6.283185307179586);
        expect(_sub_result).toBe(12.566370614359172);
    });

    _test("execution of f64_0: sub (instance 223)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, 6.283185307179586);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 224)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 225)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 226)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -1.7976931348623157e308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 227)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, 1.7976931348623157e308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 228)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 229)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 230)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 231)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 232)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 233)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 234)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 235)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -6.283185307179586, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 236)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 237)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 238)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 239)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 6.283185307179586, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 240)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -0.0);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 241)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, 0.0);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 242)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -0.0);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 243)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, 0.0);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 244)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -5e-324);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 245)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, 5e-324);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 246)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -5e-324);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 247)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, 5e-324);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 248)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 249)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 250)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 251)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 252)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -0.5);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 253)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, 0.5);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 254)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -0.5);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 255)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, 0.5);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 256)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -1.0);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 257)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, 1.0);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 258)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -1.0);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 259)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, 1.0);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 260)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -6.283185307179586);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 261)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, 6.283185307179586);
        expect(_sub_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 262)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -6.283185307179586);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 263)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, 6.283185307179586);
        expect(_sub_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: sub (instance 264)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -1.7976931348623157e308);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 265)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, 1.7976931348623157e308);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 266)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -1.7976931348623157e308);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 267)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, 1.7976931348623157e308);
        expect(_sub_result).toBe(0.0);
    });

    _test("execution of f64_0: sub (instance 268)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 269)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 270)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 271)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 272)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 273)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 274)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 275)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1.7976931348623157e308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 276)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 277)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 278)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 279)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1.7976931348623157e308, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 280)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -0.0);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 281)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, 0.0);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 282)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -0.0);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 283)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, 0.0);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 284)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -5e-324);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 285)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, 5e-324);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 286)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -5e-324);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 287)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, 5e-324);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 288)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -2.2250738585072014e-308);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 289)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, 2.2250738585072014e-308);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 290)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -2.2250738585072014e-308);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 291)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, 2.2250738585072014e-308);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 292)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -0.5);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 293)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, 0.5);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 294)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -0.5);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 295)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, 0.5);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 296)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -1.0);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 297)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, 1.0);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 298)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -1.0);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 299)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, 1.0);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 300)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -6.283185307179586);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 301)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, 6.283185307179586);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 302)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -6.283185307179586);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 303)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, 6.283185307179586);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 304)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -1.7976931348623157e308);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 305)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, 1.7976931348623157e308);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 306)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -1.7976931348623157e308);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 307)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, 1.7976931348623157e308);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 308)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 309)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, Infinity);
        expect(_sub_result).toBe(-Infinity);
    });

    _test("execution of f64_0: sub (instance 310)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -Infinity);
        expect(_sub_result).toBe(Infinity);
    });

    _test("execution of f64_0: sub (instance 311)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 312)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 313)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 314)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 315)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -Infinity, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 316)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 317)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 318)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 319)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, Infinity, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 320)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 321)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 322)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 323)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 324)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 325)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 326)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 327)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 0.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 328)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 329)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 330)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 331)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 332)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 333)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 334)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 335)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 5e-324);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 336)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 337)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 338)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 339)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 340)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 341)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 342)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 343)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 2.2250738585072014e-308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 344)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 345)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 346)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 347)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 348)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 349)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 350)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 351)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 0.5);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 352)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 353)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 354)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 355)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 356)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 357)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 358)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 359)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 1.0);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 360)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 361)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 362)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 363)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 364)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 365)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 366)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 367)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 6.283185307179586);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 368)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 369)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 370)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 371)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, 1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 372)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 373)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 374)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 375)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, 1.7976931348623157e308);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 376)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 377)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 378)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 379)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 380)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 381)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 382)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 383)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, Infinity);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 384)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 385)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 386)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 387)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 388)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 389)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 390)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 391)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 392)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 393)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 394)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 395)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, -NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 396)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 397)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 398)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: sub (instance 399)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, NaN, NaN);
        expect(_sub_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 0)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 1)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, 0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 2)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 3)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, 0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 4)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 5)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, 5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 6)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 7)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, 5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 8)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -2.2250738585072014e-308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 9)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 10)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 11)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, 2.2250738585072014e-308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 12)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -0.5);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 13)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, 0.5);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 14)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -0.5);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 15)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, 0.5);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 16)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -1.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 17)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, 1.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 18)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -1.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 19)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, 1.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 20)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -6.283185307179586);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 21)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, 6.283185307179586);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 22)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -6.283185307179586);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 23)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, 6.283185307179586);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 24)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -1.7976931348623157e308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 25)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, 1.7976931348623157e308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 26)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -1.7976931348623157e308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 27)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, 1.7976931348623157e308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 28)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 29)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 30)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 31)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 32)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 33)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 34)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 35)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 36)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 37)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 38)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 39)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 40)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 41)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, 0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 42)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 43)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, 0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 44)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 45)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, 5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 46)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 47)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, 5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 48)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -2.2250738585072014e-308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 49)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 50)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 51)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, 2.2250738585072014e-308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 52)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -0.5);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 53)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, 0.5);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 54)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -0.5);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 55)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, 0.5);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 56)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -1.0);
        expect(_mul_result).toBe(5e-324);
    });

    _test("execution of f64_0: mul (instance 57)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, 1.0);
        expect(_mul_result).toBe(-5e-324);
    });

    _test("execution of f64_0: mul (instance 58)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -1.0);
        expect(_mul_result).toBe(-5e-324);
    });

    _test("execution of f64_0: mul (instance 59)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, 1.0);
        expect(_mul_result).toBe(5e-324);
    });

    _test("execution of f64_0: mul (instance 60)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -6.283185307179586);
        expect(_mul_result).toBe(3e-323);
    });

    _test("execution of f64_0: mul (instance 61)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, 6.283185307179586);
        expect(_mul_result).toBe(-3e-323);
    });

    _test("execution of f64_0: mul (instance 62)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -6.283185307179586);
        expect(_mul_result).toBe(-3e-323);
    });

    _test("execution of f64_0: mul (instance 63)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, 6.283185307179586);
        expect(_mul_result).toBe(3e-323);
    });

    _test("execution of f64_0: mul (instance 64)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -1.7976931348623157e308);
        expect(_mul_result).toBe(8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 65)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, 1.7976931348623157e308);
        expect(_mul_result).toBe(-8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 66)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -1.7976931348623157e308);
        expect(_mul_result).toBe(-8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 67)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, 1.7976931348623157e308);
        expect(_mul_result).toBe(8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 68)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 69)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 70)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 71)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 72)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 73)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 74)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 75)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -5e-324, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 76)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 77)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 78)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 79)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 5e-324, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 80)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 81)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, 0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 82)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 83)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, 0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 84)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 85)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, 5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 86)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 87)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, 5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 88)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 89)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 90)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 91)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 92)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -0.5);
        expect(_mul_result).toBe(1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 93)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, 0.5);
        expect(_mul_result).toBe(-1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 94)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -0.5);
        expect(_mul_result).toBe(-1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 95)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, 0.5);
        expect(_mul_result).toBe(1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 96)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -1.0);
        expect(_mul_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 97)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, 1.0);
        expect(_mul_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 98)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -1.0);
        expect(_mul_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 99)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, 1.0);
        expect(_mul_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 100)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -6.283185307179586);
        expect(_mul_result).toBe(1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 101)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, 6.283185307179586);
        expect(_mul_result).toBe(-1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 102)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -6.283185307179586);
        expect(_mul_result).toBe(-1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 103)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, 6.283185307179586);
        expect(_mul_result).toBe(1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 104)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_mul_result).toBe(3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 105)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_mul_result).toBe(-3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 106)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_mul_result).toBe(-3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 107)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_mul_result).toBe(3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 108)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 109)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 110)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 111)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 112)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 113)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 114)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 115)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2.2250738585072014e-308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 116)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 117)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 118)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 119)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2.2250738585072014e-308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 120)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 121)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, 0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 122)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 123)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, 0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 124)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 125)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, 5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 126)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -5e-324);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 127)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, 5e-324);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 128)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -2.2250738585072014e-308);
        expect(_mul_result).toBe(1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 129)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 130)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 131)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, 2.2250738585072014e-308);
        expect(_mul_result).toBe(1.1125369292536007e-308);
    });

    _test("execution of f64_0: mul (instance 132)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -0.5);
        expect(_mul_result).toBe(0.25);
    });

    _test("execution of f64_0: mul (instance 133)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, 0.5);
        expect(_mul_result).toBe(-0.25);
    });

    _test("execution of f64_0: mul (instance 134)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -0.5);
        expect(_mul_result).toBe(-0.25);
    });

    _test("execution of f64_0: mul (instance 135)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, 0.5);
        expect(_mul_result).toBe(0.25);
    });

    _test("execution of f64_0: mul (instance 136)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -1.0);
        expect(_mul_result).toBe(0.5);
    });

    _test("execution of f64_0: mul (instance 137)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, 1.0);
        expect(_mul_result).toBe(-0.5);
    });

    _test("execution of f64_0: mul (instance 138)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -1.0);
        expect(_mul_result).toBe(-0.5);
    });

    _test("execution of f64_0: mul (instance 139)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, 1.0);
        expect(_mul_result).toBe(0.5);
    });

    _test("execution of f64_0: mul (instance 140)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -6.283185307179586);
        expect(_mul_result).toBe(3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 141)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, 6.283185307179586);
        expect(_mul_result).toBe(-3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 142)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -6.283185307179586);
        expect(_mul_result).toBe(-3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 143)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, 6.283185307179586);
        expect(_mul_result).toBe(3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 144)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -1.7976931348623157e308);
        expect(_mul_result).toBe(8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 145)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, 1.7976931348623157e308);
        expect(_mul_result).toBe(-8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 146)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -1.7976931348623157e308);
        expect(_mul_result).toBe(-8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 147)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, 1.7976931348623157e308);
        expect(_mul_result).toBe(8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 148)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 149)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 150)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 151)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 152)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 153)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 154)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 155)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -0.5, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 156)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 157)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 158)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 159)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 0.5, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 160)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 161)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, 0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 162)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 163)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, 0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 164)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -5e-324);
        expect(_mul_result).toBe(5e-324);
    });

    _test("execution of f64_0: mul (instance 165)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, 5e-324);
        expect(_mul_result).toBe(-5e-324);
    });

    _test("execution of f64_0: mul (instance 166)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -5e-324);
        expect(_mul_result).toBe(-5e-324);
    });

    _test("execution of f64_0: mul (instance 167)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, 5e-324);
        expect(_mul_result).toBe(5e-324);
    });

    _test("execution of f64_0: mul (instance 168)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -2.2250738585072014e-308);
        expect(_mul_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 169)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 170)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 171)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, 2.2250738585072014e-308);
        expect(_mul_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: mul (instance 172)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -0.5);
        expect(_mul_result).toBe(0.5);
    });

    _test("execution of f64_0: mul (instance 173)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, 0.5);
        expect(_mul_result).toBe(-0.5);
    });

    _test("execution of f64_0: mul (instance 174)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -0.5);
        expect(_mul_result).toBe(-0.5);
    });

    _test("execution of f64_0: mul (instance 175)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, 0.5);
        expect(_mul_result).toBe(0.5);
    });

    _test("execution of f64_0: mul (instance 176)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -1.0);
        expect(_mul_result).toBe(1.0);
    });

    _test("execution of f64_0: mul (instance 177)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, 1.0);
        expect(_mul_result).toBe(-1.0);
    });

    _test("execution of f64_0: mul (instance 178)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -1.0);
        expect(_mul_result).toBe(-1.0);
    });

    _test("execution of f64_0: mul (instance 179)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, 1.0);
        expect(_mul_result).toBe(1.0);
    });

    _test("execution of f64_0: mul (instance 180)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -6.283185307179586);
        expect(_mul_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 181)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, 6.283185307179586);
        expect(_mul_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 182)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -6.283185307179586);
        expect(_mul_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 183)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, 6.283185307179586);
        expect(_mul_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 184)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -1.7976931348623157e308);
        expect(_mul_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 185)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, 1.7976931348623157e308);
        expect(_mul_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 186)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -1.7976931348623157e308);
        expect(_mul_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 187)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, 1.7976931348623157e308);
        expect(_mul_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 188)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 189)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 190)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 191)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 192)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 193)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 194)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 195)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 196)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 197)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 198)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 199)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.0, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 200)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 201)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, 0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 202)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 203)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, 0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 204)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -5e-324);
        expect(_mul_result).toBe(3e-323);
    });

    _test("execution of f64_0: mul (instance 205)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, 5e-324);
        expect(_mul_result).toBe(-3e-323);
    });

    _test("execution of f64_0: mul (instance 206)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -5e-324);
        expect(_mul_result).toBe(-3e-323);
    });

    _test("execution of f64_0: mul (instance 207)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, 5e-324);
        expect(_mul_result).toBe(3e-323);
    });

    _test("execution of f64_0: mul (instance 208)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -2.2250738585072014e-308);
        expect(_mul_result).toBe(1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 209)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 210)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 211)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, 2.2250738585072014e-308);
        expect(_mul_result).toBe(1.3980551375161837e-307);
    });

    _test("execution of f64_0: mul (instance 212)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -0.5);
        expect(_mul_result).toBe(3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 213)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, 0.5);
        expect(_mul_result).toBe(-3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 214)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -0.5);
        expect(_mul_result).toBe(-3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 215)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, 0.5);
        expect(_mul_result).toBe(3.141592653589793);
    });

    _test("execution of f64_0: mul (instance 216)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -1.0);
        expect(_mul_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 217)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, 1.0);
        expect(_mul_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 218)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -1.0);
        expect(_mul_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 219)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, 1.0);
        expect(_mul_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: mul (instance 220)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -6.283185307179586);
        expect(_mul_result).toBe(39.47841760435743);
    });

    _test("execution of f64_0: mul (instance 221)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, 6.283185307179586);
        expect(_mul_result).toBe(-39.47841760435743);
    });

    _test("execution of f64_0: mul (instance 222)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -6.283185307179586);
        expect(_mul_result).toBe(-39.47841760435743);
    });

    _test("execution of f64_0: mul (instance 223)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, 6.283185307179586);
        expect(_mul_result).toBe(39.47841760435743);
    });

    _test("execution of f64_0: mul (instance 224)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -1.7976931348623157e308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 225)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, 1.7976931348623157e308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 226)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -1.7976931348623157e308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 227)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, 1.7976931348623157e308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 228)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 229)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 230)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 231)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 232)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 233)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 234)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 235)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -6.283185307179586, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 236)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 237)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 238)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 239)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 6.283185307179586, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 240)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 241)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, 0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 242)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -0.0);
        expect(_mul_result).toBe(-0.0);
    });

    _test("execution of f64_0: mul (instance 243)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, 0.0);
        expect(_mul_result).toBe(0.0);
    });

    _test("execution of f64_0: mul (instance 244)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -5e-324);
        expect(_mul_result).toBe(8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 245)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, 5e-324);
        expect(_mul_result).toBe(-8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 246)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -5e-324);
        expect(_mul_result).toBe(-8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 247)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, 5e-324);
        expect(_mul_result).toBe(8.881784197001251e-16);
    });

    _test("execution of f64_0: mul (instance 248)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_mul_result).toBe(3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 249)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 250)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 251)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_mul_result).toBe(3.9999999999999996);
    });

    _test("execution of f64_0: mul (instance 252)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -0.5);
        expect(_mul_result).toBe(8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 253)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, 0.5);
        expect(_mul_result).toBe(-8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 254)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -0.5);
        expect(_mul_result).toBe(-8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 255)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, 0.5);
        expect(_mul_result).toBe(8.988465674311579e307);
    });

    _test("execution of f64_0: mul (instance 256)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -1.0);
        expect(_mul_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 257)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, 1.0);
        expect(_mul_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 258)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -1.0);
        expect(_mul_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 259)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, 1.0);
        expect(_mul_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: mul (instance 260)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -6.283185307179586);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 261)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, 6.283185307179586);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 262)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -6.283185307179586);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 263)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, 6.283185307179586);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 264)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -1.7976931348623157e308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 265)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, 1.7976931348623157e308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 266)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -1.7976931348623157e308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 267)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, 1.7976931348623157e308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 268)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 269)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 270)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 271)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 272)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 273)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 274)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 275)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1.7976931348623157e308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 276)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 277)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 278)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 279)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1.7976931348623157e308, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 280)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 281)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, 0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 282)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 283)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, 0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 284)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -5e-324);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 285)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, 5e-324);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 286)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -5e-324);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 287)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, 5e-324);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 288)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -2.2250738585072014e-308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 289)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, 2.2250738585072014e-308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 290)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -2.2250738585072014e-308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 291)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, 2.2250738585072014e-308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 292)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -0.5);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 293)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, 0.5);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 294)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -0.5);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 295)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, 0.5);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 296)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -1.0);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 297)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, 1.0);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 298)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -1.0);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 299)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, 1.0);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 300)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -6.283185307179586);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 301)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, 6.283185307179586);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 302)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -6.283185307179586);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 303)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, 6.283185307179586);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 304)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -1.7976931348623157e308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 305)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, 1.7976931348623157e308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 306)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -1.7976931348623157e308);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 307)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, 1.7976931348623157e308);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 308)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 309)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 310)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -Infinity);
        expect(_mul_result).toBe(-Infinity);
    });

    _test("execution of f64_0: mul (instance 311)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, Infinity);
        expect(_mul_result).toBe(Infinity);
    });

    _test("execution of f64_0: mul (instance 312)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 313)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 314)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 315)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -Infinity, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 316)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 317)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 318)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 319)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, Infinity, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 320)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 321)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 322)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 323)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 324)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 325)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 326)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 327)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 0.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 328)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 329)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 330)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 331)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 332)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 333)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 334)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 335)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 5e-324);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 336)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 337)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 338)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 339)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 340)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 341)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 342)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 343)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 2.2250738585072014e-308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 344)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 345)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 346)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 347)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 348)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 349)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 350)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 351)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 0.5);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 352)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 353)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 354)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 355)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 356)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 357)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 358)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 359)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 1.0);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 360)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 361)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 362)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 363)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 364)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 365)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 366)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 367)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 6.283185307179586);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 368)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 369)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 370)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 371)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, 1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 372)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 373)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 374)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 375)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, 1.7976931348623157e308);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 376)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 377)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 378)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 379)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 380)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 381)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 382)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 383)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, Infinity);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 384)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 385)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 386)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 387)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 388)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 389)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 390)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 391)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 392)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 393)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 394)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 395)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, -NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 396)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 397)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 398)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: mul (instance 399)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, NaN, NaN);
        expect(_mul_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 0)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 1)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, 0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 2)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 3)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, 0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 4)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -5e-324);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 5)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, 5e-324);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 6)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -5e-324);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 7)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, 5e-324);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 8)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -2.2250738585072014e-308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 9)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, 2.2250738585072014e-308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 10)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -2.2250738585072014e-308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 11)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, 2.2250738585072014e-308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 12)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -0.5);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 13)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, 0.5);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 14)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -0.5);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 15)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, 0.5);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 16)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -1.0);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 17)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, 1.0);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 18)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -1.0);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 19)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, 1.0);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 20)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -6.283185307179586);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 21)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, 6.283185307179586);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 22)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -6.283185307179586);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 23)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, 6.283185307179586);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 24)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -1.7976931348623157e308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 25)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, 1.7976931348623157e308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 26)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -1.7976931348623157e308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 27)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, 1.7976931348623157e308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 28)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 29)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 30)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 31)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 32)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 33)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 34)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 35)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 36)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 37)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 38)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 39)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 40)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 41)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, 0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 42)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 43)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, 0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 44)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -5e-324);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 45)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, 5e-324);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 46)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -5e-324);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 47)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, 5e-324);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 48)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -2.2250738585072014e-308);
        expect(_div_result).toBe(2.220446049250313e-16);
    });

    _test("execution of f64_0: div (instance 49)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, 2.2250738585072014e-308);
        expect(_div_result).toBe(-2.220446049250313e-16);
    });

    _test("execution of f64_0: div (instance 50)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -2.2250738585072014e-308);
        expect(_div_result).toBe(-2.220446049250313e-16);
    });

    _test("execution of f64_0: div (instance 51)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, 2.2250738585072014e-308);
        expect(_div_result).toBe(2.220446049250313e-16);
    });

    _test("execution of f64_0: div (instance 52)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -0.5);
        expect(_div_result).toBe(1e-323);
    });

    _test("execution of f64_0: div (instance 53)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, 0.5);
        expect(_div_result).toBe(-1e-323);
    });

    _test("execution of f64_0: div (instance 54)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -0.5);
        expect(_div_result).toBe(-1e-323);
    });

    _test("execution of f64_0: div (instance 55)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, 0.5);
        expect(_div_result).toBe(1e-323);
    });

    _test("execution of f64_0: div (instance 56)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -1.0);
        expect(_div_result).toBe(5e-324);
    });

    _test("execution of f64_0: div (instance 57)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, 1.0);
        expect(_div_result).toBe(-5e-324);
    });

    _test("execution of f64_0: div (instance 58)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -1.0);
        expect(_div_result).toBe(-5e-324);
    });

    _test("execution of f64_0: div (instance 59)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, 1.0);
        expect(_div_result).toBe(5e-324);
    });

    _test("execution of f64_0: div (instance 60)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -6.283185307179586);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 61)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, 6.283185307179586);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 62)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -6.283185307179586);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 63)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, 6.283185307179586);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 64)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -1.7976931348623157e308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 65)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, 1.7976931348623157e308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 66)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -1.7976931348623157e308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 67)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, 1.7976931348623157e308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 68)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 69)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 70)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 71)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 72)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 73)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 74)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 75)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -5e-324, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 76)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 77)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 78)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 79)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 5e-324, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 80)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 81)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, 0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 82)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 83)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, 0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 84)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -5e-324);
        expect(_div_result).toBe(4503599627370496.0);
    });

    _test("execution of f64_0: div (instance 85)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, 5e-324);
        expect(_div_result).toBe(-4503599627370496.0);
    });

    _test("execution of f64_0: div (instance 86)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -5e-324);
        expect(_div_result).toBe(-4503599627370496.0);
    });

    _test("execution of f64_0: div (instance 87)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, 5e-324);
        expect(_div_result).toBe(4503599627370496.0);
    });

    _test("execution of f64_0: div (instance 88)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 89)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 90)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 91)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 92)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -0.5);
        expect(_div_result).toBe(4.450147717014403e-308);
    });

    _test("execution of f64_0: div (instance 93)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, 0.5);
        expect(_div_result).toBe(-4.450147717014403e-308);
    });

    _test("execution of f64_0: div (instance 94)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -0.5);
        expect(_div_result).toBe(-4.450147717014403e-308);
    });

    _test("execution of f64_0: div (instance 95)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, 0.5);
        expect(_div_result).toBe(4.450147717014403e-308);
    });

    _test("execution of f64_0: div (instance 96)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -1.0);
        expect(_div_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: div (instance 97)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, 1.0);
        expect(_div_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: div (instance 98)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -1.0);
        expect(_div_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: div (instance 99)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, 1.0);
        expect(_div_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: div (instance 100)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -6.283185307179586);
        expect(_div_result).toBe(3.541315033259774e-309);
    });

    _test("execution of f64_0: div (instance 101)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, 6.283185307179586);
        expect(_div_result).toBe(-3.541315033259774e-309);
    });

    _test("execution of f64_0: div (instance 102)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -6.283185307179586);
        expect(_div_result).toBe(-3.541315033259774e-309);
    });

    _test("execution of f64_0: div (instance 103)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, 6.283185307179586);
        expect(_div_result).toBe(3.541315033259774e-309);
    });

    _test("execution of f64_0: div (instance 104)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 105)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 106)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 107)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 108)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 109)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 110)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 111)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 112)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 113)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 114)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 115)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -2.2250738585072014e-308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 116)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 117)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 118)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 119)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 2.2250738585072014e-308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 120)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 121)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, 0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 122)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 123)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, 0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 124)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 125)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, 5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 126)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 127)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, 5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 128)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -2.2250738585072014e-308);
        expect(_div_result).toBe(2.247116418577895e307);
    });

    _test("execution of f64_0: div (instance 129)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, 2.2250738585072014e-308);
        expect(_div_result).toBe(-2.247116418577895e307);
    });

    _test("execution of f64_0: div (instance 130)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -2.2250738585072014e-308);
        expect(_div_result).toBe(-2.247116418577895e307);
    });

    _test("execution of f64_0: div (instance 131)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, 2.2250738585072014e-308);
        expect(_div_result).toBe(2.247116418577895e307);
    });

    _test("execution of f64_0: div (instance 132)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -0.5);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 133)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, 0.5);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 134)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -0.5);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 135)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, 0.5);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 136)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -1.0);
        expect(_div_result).toBe(0.5);
    });

    _test("execution of f64_0: div (instance 137)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, 1.0);
        expect(_div_result).toBe(-0.5);
    });

    _test("execution of f64_0: div (instance 138)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -1.0);
        expect(_div_result).toBe(-0.5);
    });

    _test("execution of f64_0: div (instance 139)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, 1.0);
        expect(_div_result).toBe(0.5);
    });

    _test("execution of f64_0: div (instance 140)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -6.283185307179586);
        expect(_div_result).toBe(0.07957747154594767);
    });

    _test("execution of f64_0: div (instance 141)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, 6.283185307179586);
        expect(_div_result).toBe(-0.07957747154594767);
    });

    _test("execution of f64_0: div (instance 142)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -6.283185307179586);
        expect(_div_result).toBe(-0.07957747154594767);
    });

    _test("execution of f64_0: div (instance 143)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, 6.283185307179586);
        expect(_div_result).toBe(0.07957747154594767);
    });

    _test("execution of f64_0: div (instance 144)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -1.7976931348623157e308);
        expect(_div_result).toBe(2.781342323134e-309);
    });

    _test("execution of f64_0: div (instance 145)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, 1.7976931348623157e308);
        expect(_div_result).toBe(-2.781342323134e-309);
    });

    _test("execution of f64_0: div (instance 146)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -1.7976931348623157e308);
        expect(_div_result).toBe(-2.781342323134e-309);
    });

    _test("execution of f64_0: div (instance 147)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, 1.7976931348623157e308);
        expect(_div_result).toBe(2.781342323134e-309);
    });

    _test("execution of f64_0: div (instance 148)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 149)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 150)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 151)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 152)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 153)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 154)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 155)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -0.5, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 156)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 157)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 158)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 159)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 0.5, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 160)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 161)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, 0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 162)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 163)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, 0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 164)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 165)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, 5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 166)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 167)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, 5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 168)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -2.2250738585072014e-308);
        expect(_div_result).toBe(4.49423283715579e307);
    });

    _test("execution of f64_0: div (instance 169)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, 2.2250738585072014e-308);
        expect(_div_result).toBe(-4.49423283715579e307);
    });

    _test("execution of f64_0: div (instance 170)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -2.2250738585072014e-308);
        expect(_div_result).toBe(-4.49423283715579e307);
    });

    _test("execution of f64_0: div (instance 171)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, 2.2250738585072014e-308);
        expect(_div_result).toBe(4.49423283715579e307);
    });

    _test("execution of f64_0: div (instance 172)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -0.5);
        expect(_div_result).toBe(2.0);
    });

    _test("execution of f64_0: div (instance 173)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, 0.5);
        expect(_div_result).toBe(-2.0);
    });

    _test("execution of f64_0: div (instance 174)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -0.5);
        expect(_div_result).toBe(-2.0);
    });

    _test("execution of f64_0: div (instance 175)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, 0.5);
        expect(_div_result).toBe(2.0);
    });

    _test("execution of f64_0: div (instance 176)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -1.0);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 177)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, 1.0);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 178)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -1.0);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 179)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, 1.0);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 180)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -6.283185307179586);
        expect(_div_result).toBe(0.15915494309189535);
    });

    _test("execution of f64_0: div (instance 181)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, 6.283185307179586);
        expect(_div_result).toBe(-0.15915494309189535);
    });

    _test("execution of f64_0: div (instance 182)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -6.283185307179586);
        expect(_div_result).toBe(-0.15915494309189535);
    });

    _test("execution of f64_0: div (instance 183)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, 6.283185307179586);
        expect(_div_result).toBe(0.15915494309189535);
    });

    _test("execution of f64_0: div (instance 184)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -1.7976931348623157e308);
        expect(_div_result).toBe(5.562684646268003e-309);
    });

    _test("execution of f64_0: div (instance 185)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, 1.7976931348623157e308);
        expect(_div_result).toBe(-5.562684646268003e-309);
    });

    _test("execution of f64_0: div (instance 186)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -1.7976931348623157e308);
        expect(_div_result).toBe(-5.562684646268003e-309);
    });

    _test("execution of f64_0: div (instance 187)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, 1.7976931348623157e308);
        expect(_div_result).toBe(5.562684646268003e-309);
    });

    _test("execution of f64_0: div (instance 188)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 189)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 190)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 191)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 192)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 193)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 194)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 195)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 196)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 197)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 198)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 199)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.0, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 200)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 201)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, 0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 202)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 203)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, 0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 204)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 205)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, 5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 206)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 207)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, 5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 208)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -2.2250738585072014e-308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 209)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, 2.2250738585072014e-308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 210)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -2.2250738585072014e-308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 211)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, 2.2250738585072014e-308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 212)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -0.5);
        expect(_div_result).toBe(12.566370614359172);
    });

    _test("execution of f64_0: div (instance 213)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, 0.5);
        expect(_div_result).toBe(-12.566370614359172);
    });

    _test("execution of f64_0: div (instance 214)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -0.5);
        expect(_div_result).toBe(-12.566370614359172);
    });

    _test("execution of f64_0: div (instance 215)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, 0.5);
        expect(_div_result).toBe(12.566370614359172);
    });

    _test("execution of f64_0: div (instance 216)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -1.0);
        expect(_div_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: div (instance 217)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, 1.0);
        expect(_div_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: div (instance 218)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -1.0);
        expect(_div_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: div (instance 219)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, 1.0);
        expect(_div_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: div (instance 220)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -6.283185307179586);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 221)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, 6.283185307179586);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 222)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -6.283185307179586);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 223)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, 6.283185307179586);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 224)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -1.7976931348623157e308);
        expect(_div_result).toBe(3.49513784379046e-308);
    });

    _test("execution of f64_0: div (instance 225)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, 1.7976931348623157e308);
        expect(_div_result).toBe(-3.49513784379046e-308);
    });

    _test("execution of f64_0: div (instance 226)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -1.7976931348623157e308);
        expect(_div_result).toBe(-3.49513784379046e-308);
    });

    _test("execution of f64_0: div (instance 227)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, 1.7976931348623157e308);
        expect(_div_result).toBe(3.49513784379046e-308);
    });

    _test("execution of f64_0: div (instance 228)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 229)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 230)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 231)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 232)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 233)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 234)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 235)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -6.283185307179586, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 236)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 237)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 238)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 239)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 6.283185307179586, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 240)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 241)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, 0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 242)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 243)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, 0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 244)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 245)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, 5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 246)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 247)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, 5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 248)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 249)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 250)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 251)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 252)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -0.5);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 253)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, 0.5);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 254)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -0.5);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 255)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, 0.5);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 256)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -1.0);
        expect(_div_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: div (instance 257)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, 1.0);
        expect(_div_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: div (instance 258)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -1.0);
        expect(_div_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: div (instance 259)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, 1.0);
        expect(_div_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: div (instance 260)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -6.283185307179586);
        expect(_div_result).toBe(2.861117485757028e307);
    });

    _test("execution of f64_0: div (instance 261)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, 6.283185307179586);
        expect(_div_result).toBe(-2.861117485757028e307);
    });

    _test("execution of f64_0: div (instance 262)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -6.283185307179586);
        expect(_div_result).toBe(-2.861117485757028e307);
    });

    _test("execution of f64_0: div (instance 263)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, 6.283185307179586);
        expect(_div_result).toBe(2.861117485757028e307);
    });

    _test("execution of f64_0: div (instance 264)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -1.7976931348623157e308);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 265)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, 1.7976931348623157e308);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 266)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -1.7976931348623157e308);
        expect(_div_result).toBe(-1.0);
    });

    _test("execution of f64_0: div (instance 267)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, 1.7976931348623157e308);
        expect(_div_result).toBe(1.0);
    });

    _test("execution of f64_0: div (instance 268)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 269)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 270)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -Infinity);
        expect(_div_result).toBe(-0.0);
    });

    _test("execution of f64_0: div (instance 271)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, Infinity);
        expect(_div_result).toBe(0.0);
    });

    _test("execution of f64_0: div (instance 272)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 273)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 274)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 275)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -1.7976931348623157e308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 276)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 277)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 278)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 279)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, 1.7976931348623157e308, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 280)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 281)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, 0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 282)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -0.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 283)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, 0.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 284)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 285)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, 5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 286)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -5e-324);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 287)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, 5e-324);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 288)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -2.2250738585072014e-308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 289)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, 2.2250738585072014e-308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 290)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -2.2250738585072014e-308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 291)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, 2.2250738585072014e-308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 292)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -0.5);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 293)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, 0.5);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 294)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -0.5);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 295)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, 0.5);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 296)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -1.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 297)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, 1.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 298)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -1.0);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 299)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, 1.0);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 300)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -6.283185307179586);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 301)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, 6.283185307179586);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 302)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -6.283185307179586);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 303)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, 6.283185307179586);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 304)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -1.7976931348623157e308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 305)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, 1.7976931348623157e308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 306)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -1.7976931348623157e308);
        expect(_div_result).toBe(-Infinity);
    });

    _test("execution of f64_0: div (instance 307)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, 1.7976931348623157e308);
        expect(_div_result).toBe(Infinity);
    });

    _test("execution of f64_0: div (instance 308)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 309)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 310)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 311)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 312)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 313)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 314)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 315)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -Infinity, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 316)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 317)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 318)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 319)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, Infinity, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 320)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 321)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 322)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 323)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 324)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 325)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 326)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 327)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 0.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 328)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 329)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 330)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 331)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 332)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 333)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 334)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 335)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 5e-324);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 336)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 337)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 338)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 339)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 340)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 341)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 342)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 343)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 2.2250738585072014e-308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 344)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 345)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 346)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 347)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 348)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 349)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 350)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 351)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 0.5);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 352)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 353)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 354)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 355)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 356)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 357)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 358)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 359)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 1.0);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 360)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 361)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 362)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 363)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 364)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 365)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 366)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 367)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 6.283185307179586);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 368)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 369)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 370)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 371)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, 1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 372)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 373)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 374)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 375)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, 1.7976931348623157e308);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 376)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 377)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 378)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 379)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 380)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 381)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 382)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 383)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, Infinity);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 384)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 385)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 386)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 387)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 388)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 389)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 390)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 391)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, -NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 392)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 393)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 394)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 395)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, -NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 396)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 397)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 398)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: div (instance 399)", () => {
        let _div = module.getExport("div");
        expect(_div).not.toBeUndefined();
        let _div_result = module.invoke(_div, NaN, NaN);
        expect(_div_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 0)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 1)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, 0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 2)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 3)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 4)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 5)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, 5e-324);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 6)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 7)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, 5e-324);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 8)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 9)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, 2.2250738585072014e-308);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 10)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 11)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, 2.2250738585072014e-308);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 12)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 13)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, 0.5);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 14)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 15)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, 0.5);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 16)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 17)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, 1.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 18)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 19)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, 1.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 20)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 21)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, 6.283185307179586);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 22)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 23)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, 6.283185307179586);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 24)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 25)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, 1.7976931348623157e308);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 26)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 27)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, 1.7976931348623157e308);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 28)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 29)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, Infinity);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 30)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 31)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, Infinity);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 32)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 33)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 34)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 35)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 36)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 37)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 38)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 39)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 40)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -0.0);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 41)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, 0.0);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 42)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 43)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 44)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 45)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, 5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 46)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 47)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, 5e-324);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 48)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 49)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, 2.2250738585072014e-308);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 50)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 51)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, 2.2250738585072014e-308);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 52)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 53)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, 0.5);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 54)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 55)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, 0.5);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 56)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 57)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, 1.0);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 58)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 59)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, 1.0);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 60)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 61)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, 6.283185307179586);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 62)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 63)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, 6.283185307179586);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 64)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 65)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, 1.7976931348623157e308);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 66)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 67)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, 1.7976931348623157e308);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 68)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 69)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, Infinity);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 70)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 71)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, Infinity);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 72)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 73)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 74)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 75)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -5e-324, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 76)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 77)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 78)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 79)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 5e-324, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 80)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -0.0);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 81)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, 0.0);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 82)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 83)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 84)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -5e-324);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 85)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, 5e-324);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 86)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 87)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, 5e-324);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 88)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 89)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 90)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 91)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 92)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 93)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, 0.5);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 94)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 95)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, 0.5);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 96)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 97)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, 1.0);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 98)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 99)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, 1.0);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 100)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 101)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, 6.283185307179586);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 102)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 103)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, 6.283185307179586);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 104)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 105)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 106)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 107)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 108)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 109)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, Infinity);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 110)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 111)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, Infinity);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 112)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 113)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 114)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 115)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -2.2250738585072014e-308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 116)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 117)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 118)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 119)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 2.2250738585072014e-308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 120)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -0.0);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 121)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, 0.0);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 122)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 123)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 124)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -5e-324);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 125)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, 5e-324);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 126)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 127)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, 5e-324);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 128)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -2.2250738585072014e-308);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 129)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, 2.2250738585072014e-308);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 130)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 131)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, 2.2250738585072014e-308);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 132)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 133)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, 0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 134)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 135)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, 0.5);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 136)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 137)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, 1.0);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 138)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 139)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, 1.0);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 140)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 141)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, 6.283185307179586);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 142)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 143)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, 6.283185307179586);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 144)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 145)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, 1.7976931348623157e308);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 146)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 147)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, 1.7976931348623157e308);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 148)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 149)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, Infinity);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 150)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 151)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, Infinity);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 152)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 153)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 154)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 155)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -0.5, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 156)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 157)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 158)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 159)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 0.5, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 160)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -0.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 161)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, 0.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 162)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 163)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 164)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -5e-324);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 165)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, 5e-324);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 166)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 167)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, 5e-324);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 168)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -2.2250738585072014e-308);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 169)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, 2.2250738585072014e-308);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 170)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 171)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, 2.2250738585072014e-308);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 172)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -0.5);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 173)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, 0.5);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 174)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 175)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, 0.5);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 176)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 177)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, 1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 178)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 179)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, 1.0);
        expect(_min_result).toBe(1.0);
    });

    _test("execution of f64_0: min (instance 180)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 181)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, 6.283185307179586);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 182)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 183)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, 6.283185307179586);
        expect(_min_result).toBe(1.0);
    });

    _test("execution of f64_0: min (instance 184)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 185)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, 1.7976931348623157e308);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 186)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 187)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, 1.7976931348623157e308);
        expect(_min_result).toBe(1.0);
    });

    _test("execution of f64_0: min (instance 188)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 189)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, Infinity);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 190)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 191)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, Infinity);
        expect(_min_result).toBe(1.0);
    });

    _test("execution of f64_0: min (instance 192)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 193)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 194)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 195)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 196)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 197)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 198)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 199)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.0, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 200)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -0.0);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 201)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, 0.0);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 202)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 203)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 204)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -5e-324);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 205)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, 5e-324);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 206)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 207)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, 5e-324);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 208)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -2.2250738585072014e-308);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 209)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, 2.2250738585072014e-308);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 210)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 211)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, 2.2250738585072014e-308);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 212)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -0.5);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 213)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, 0.5);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 214)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 215)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, 0.5);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 216)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -1.0);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 217)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, 1.0);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 218)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 219)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, 1.0);
        expect(_min_result).toBe(1.0);
    });

    _test("execution of f64_0: min (instance 220)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 221)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, 6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 222)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 223)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, 6.283185307179586);
        expect(_min_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: min (instance 224)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 225)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, 1.7976931348623157e308);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 226)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 227)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, 1.7976931348623157e308);
        expect(_min_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: min (instance 228)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 229)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, Infinity);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 230)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 231)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, Infinity);
        expect(_min_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: min (instance 232)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 233)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 234)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 235)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -6.283185307179586, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 236)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 237)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 238)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 239)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 6.283185307179586, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 240)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -0.0);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 241)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, 0.0);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 242)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 243)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 244)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -5e-324);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 245)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, 5e-324);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 246)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 247)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, 5e-324);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 248)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 249)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 250)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 251)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 252)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -0.5);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 253)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, 0.5);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 254)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 255)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, 0.5);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 256)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -1.0);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 257)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, 1.0);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 258)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 259)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, 1.0);
        expect(_min_result).toBe(1.0);
    });

    _test("execution of f64_0: min (instance 260)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -6.283185307179586);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 261)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, 6.283185307179586);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 262)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 263)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, 6.283185307179586);
        expect(_min_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: min (instance 264)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 265)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, 1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 266)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 267)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, 1.7976931348623157e308);
        expect(_min_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 268)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 269)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, Infinity);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 270)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 271)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, Infinity);
        expect(_min_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 272)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 273)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 274)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 275)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -1.7976931348623157e308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 276)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 277)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 278)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 279)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, 1.7976931348623157e308, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 280)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -0.0);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 281)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, 0.0);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 282)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -0.0);
        expect(_min_result).toBe(-0.0);
    });

    _test("execution of f64_0: min (instance 283)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, 0.0);
        expect(_min_result).toBe(0.0);
    });

    _test("execution of f64_0: min (instance 284)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -5e-324);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 285)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, 5e-324);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 286)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -5e-324);
        expect(_min_result).toBe(-5e-324);
    });

    _test("execution of f64_0: min (instance 287)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, 5e-324);
        expect(_min_result).toBe(5e-324);
    });

    _test("execution of f64_0: min (instance 288)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -2.2250738585072014e-308);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 289)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, 2.2250738585072014e-308);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 290)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -2.2250738585072014e-308);
        expect(_min_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 291)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, 2.2250738585072014e-308);
        expect(_min_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: min (instance 292)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -0.5);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 293)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, 0.5);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 294)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -0.5);
        expect(_min_result).toBe(-0.5);
    });

    _test("execution of f64_0: min (instance 295)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, 0.5);
        expect(_min_result).toBe(0.5);
    });

    _test("execution of f64_0: min (instance 296)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -1.0);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 297)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, 1.0);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 298)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -1.0);
        expect(_min_result).toBe(-1.0);
    });

    _test("execution of f64_0: min (instance 299)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, 1.0);
        expect(_min_result).toBe(1.0);
    });

    _test("execution of f64_0: min (instance 300)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -6.283185307179586);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 301)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, 6.283185307179586);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 302)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -6.283185307179586);
        expect(_min_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: min (instance 303)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, 6.283185307179586);
        expect(_min_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: min (instance 304)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -1.7976931348623157e308);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 305)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, 1.7976931348623157e308);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 306)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -1.7976931348623157e308);
        expect(_min_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 307)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, 1.7976931348623157e308);
        expect(_min_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: min (instance 308)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 309)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 310)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -Infinity);
        expect(_min_result).toBe(-Infinity);
    });

    _test("execution of f64_0: min (instance 311)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, Infinity);
        expect(_min_result).toBe(Infinity);
    });

    _test("execution of f64_0: min (instance 312)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 313)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 314)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 315)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -Infinity, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 316)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 317)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 318)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 319)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, Infinity, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 320)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 321)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 322)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 323)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 324)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 325)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 326)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 327)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 0.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 328)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 329)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 330)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 331)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 332)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 333)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 334)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 335)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 5e-324);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 336)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 337)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 338)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 339)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 340)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 341)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 342)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 343)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 2.2250738585072014e-308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 344)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 345)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 346)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 347)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 348)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 349)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 350)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 351)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 0.5);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 352)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 353)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 354)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 355)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 356)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 357)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 358)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 359)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 1.0);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 360)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 361)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 362)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 363)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 364)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 365)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 366)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 367)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 6.283185307179586);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 368)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 369)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 370)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 371)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, 1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 372)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 373)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 374)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 375)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, 1.7976931348623157e308);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 376)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 377)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 378)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 379)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 380)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 381)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 382)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 383)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, Infinity);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 384)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 385)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 386)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 387)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 388)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 389)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 390)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 391)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, -NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 392)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 393)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 394)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 395)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, -NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 396)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 397)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 398)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: min (instance 399)", () => {
        let _min = module.getExport("min");
        expect(_min).not.toBeUndefined();
        let _min_result = module.invoke(_min, NaN, NaN);
        expect(_min_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 0)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 1)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 2)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 3)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 4)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -5e-324);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 5)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 6)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -5e-324);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 7)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 8)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -2.2250738585072014e-308);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 9)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 10)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -2.2250738585072014e-308);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 11)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 12)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -0.5);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 13)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 14)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -0.5);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 15)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 16)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -1.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 17)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 18)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -1.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 19)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 20)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -6.283185307179586);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 21)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 22)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -6.283185307179586);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 23)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 24)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -1.7976931348623157e308);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 25)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 26)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -1.7976931348623157e308);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 27)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 28)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -Infinity);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 29)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 30)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -Infinity);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 31)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 32)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 33)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 34)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 35)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 36)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 37)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 38)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 39)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 40)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 41)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 42)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -0.0);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 43)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, 0.0);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 44)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -5e-324);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 45)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 46)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 47)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 48)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -2.2250738585072014e-308);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 49)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 50)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -2.2250738585072014e-308);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 51)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 52)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -0.5);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 53)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 54)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -0.5);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 55)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 56)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -1.0);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 57)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 58)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -1.0);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 59)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 60)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -6.283185307179586);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 61)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 62)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -6.283185307179586);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 63)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 64)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -1.7976931348623157e308);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 65)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 66)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -1.7976931348623157e308);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 67)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 68)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -Infinity);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 69)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 70)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -Infinity);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 71)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 72)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 73)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 74)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 75)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -5e-324, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 76)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 77)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 78)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 79)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 5e-324, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 80)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 81)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 82)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -0.0);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 83)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, 0.0);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 84)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -5e-324);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 85)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 86)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -5e-324);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 87)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, 5e-324);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 88)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 89)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 90)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 91)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 92)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -0.5);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 93)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 94)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -0.5);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 95)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 96)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -1.0);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 97)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 98)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -1.0);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 99)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 100)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -6.283185307179586);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 101)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 102)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -6.283185307179586);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 103)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 104)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 105)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 106)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -1.7976931348623157e308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 107)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 108)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -Infinity);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 109)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 110)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -Infinity);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 111)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 112)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 113)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 114)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 115)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -2.2250738585072014e-308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 116)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 117)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 118)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 119)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 2.2250738585072014e-308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 120)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 121)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 122)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -0.0);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 123)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, 0.0);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 124)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -5e-324);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 125)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 126)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -5e-324);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 127)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, 5e-324);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 128)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -2.2250738585072014e-308);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 129)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 130)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -2.2250738585072014e-308);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 131)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, 2.2250738585072014e-308);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 132)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -0.5);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 133)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 134)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 135)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 136)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -1.0);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 137)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 138)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -1.0);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 139)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 140)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -6.283185307179586);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 141)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 142)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -6.283185307179586);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 143)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 144)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -1.7976931348623157e308);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 145)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 146)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -1.7976931348623157e308);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 147)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 148)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -Infinity);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 149)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 150)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -Infinity);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 151)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 152)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 153)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 154)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 155)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -0.5, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 156)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 157)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 158)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 159)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 0.5, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 160)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 161)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 162)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -0.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 163)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, 0.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 164)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -5e-324);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 165)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 166)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -5e-324);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 167)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, 5e-324);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 168)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -2.2250738585072014e-308);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 169)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 170)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -2.2250738585072014e-308);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 171)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, 2.2250738585072014e-308);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 172)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -0.5);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 173)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 174)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -0.5);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 175)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, 0.5);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 176)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -1.0);
        expect(_max_result).toBe(-1.0);
    });

    _test("execution of f64_0: max (instance 177)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 178)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 179)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 180)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -6.283185307179586);
        expect(_max_result).toBe(-1.0);
    });

    _test("execution of f64_0: max (instance 181)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 182)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -6.283185307179586);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 183)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 184)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -1.7976931348623157e308);
        expect(_max_result).toBe(-1.0);
    });

    _test("execution of f64_0: max (instance 185)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 186)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -1.7976931348623157e308);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 187)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 188)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -Infinity);
        expect(_max_result).toBe(-1.0);
    });

    _test("execution of f64_0: max (instance 189)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 190)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -Infinity);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 191)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 192)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 193)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 194)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 195)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 196)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 197)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 198)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 199)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.0, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 200)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 201)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 202)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -0.0);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 203)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, 0.0);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 204)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -5e-324);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 205)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 206)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -5e-324);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 207)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, 5e-324);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 208)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -2.2250738585072014e-308);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 209)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 210)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -2.2250738585072014e-308);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 211)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, 2.2250738585072014e-308);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 212)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -0.5);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 213)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 214)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -0.5);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 215)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, 0.5);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 216)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -1.0);
        expect(_max_result).toBe(-1.0);
    });

    _test("execution of f64_0: max (instance 217)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 218)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -1.0);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 219)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, 1.0);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 220)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -6.283185307179586);
        expect(_max_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: max (instance 221)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 222)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 223)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 224)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -1.7976931348623157e308);
        expect(_max_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: max (instance 225)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 226)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -1.7976931348623157e308);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 227)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 228)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -Infinity);
        expect(_max_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: max (instance 229)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 230)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -Infinity);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 231)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 232)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 233)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 234)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 235)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -6.283185307179586, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 236)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 237)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 238)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 239)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 6.283185307179586, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 240)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 241)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 242)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -0.0);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 243)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, 0.0);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 244)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -5e-324);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 245)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 246)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -5e-324);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 247)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, 5e-324);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 248)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 249)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 250)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -2.2250738585072014e-308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 251)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, 2.2250738585072014e-308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 252)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -0.5);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 253)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 254)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -0.5);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 255)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, 0.5);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 256)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -1.0);
        expect(_max_result).toBe(-1.0);
    });

    _test("execution of f64_0: max (instance 257)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 258)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -1.0);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 259)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, 1.0);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 260)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -6.283185307179586);
        expect(_max_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: max (instance 261)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 262)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -6.283185307179586);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 263)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, 6.283185307179586);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 264)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -1.7976931348623157e308);
        expect(_max_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 265)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 266)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 267)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 268)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -Infinity);
        expect(_max_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 269)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 270)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -Infinity);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 271)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 272)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 273)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 274)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 275)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -1.7976931348623157e308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 276)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 277)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 278)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 279)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, 1.7976931348623157e308, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 280)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -0.0);
        expect(_max_result).toBe(-0.0);
    });

    _test("execution of f64_0: max (instance 281)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, 0.0);
        expect(_max_result).toBe(0.0);
    });

    _test("execution of f64_0: max (instance 282)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -0.0);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 283)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, 0.0);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 284)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -5e-324);
        expect(_max_result).toBe(-5e-324);
    });

    _test("execution of f64_0: max (instance 285)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, 5e-324);
        expect(_max_result).toBe(5e-324);
    });

    _test("execution of f64_0: max (instance 286)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -5e-324);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 287)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, 5e-324);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 288)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -2.2250738585072014e-308);
        expect(_max_result).toBe(-2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 289)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, 2.2250738585072014e-308);
        expect(_max_result).toBe(2.2250738585072014e-308);
    });

    _test("execution of f64_0: max (instance 290)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -2.2250738585072014e-308);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 291)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, 2.2250738585072014e-308);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 292)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -0.5);
        expect(_max_result).toBe(-0.5);
    });

    _test("execution of f64_0: max (instance 293)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, 0.5);
        expect(_max_result).toBe(0.5);
    });

    _test("execution of f64_0: max (instance 294)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -0.5);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 295)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, 0.5);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 296)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -1.0);
        expect(_max_result).toBe(-1.0);
    });

    _test("execution of f64_0: max (instance 297)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, 1.0);
        expect(_max_result).toBe(1.0);
    });

    _test("execution of f64_0: max (instance 298)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -1.0);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 299)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, 1.0);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 300)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -6.283185307179586);
        expect(_max_result).toBe(-6.283185307179586);
    });

    _test("execution of f64_0: max (instance 301)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, 6.283185307179586);
        expect(_max_result).toBe(6.283185307179586);
    });

    _test("execution of f64_0: max (instance 302)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -6.283185307179586);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 303)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, 6.283185307179586);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 304)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -1.7976931348623157e308);
        expect(_max_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 305)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, 1.7976931348623157e308);
        expect(_max_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: max (instance 306)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -1.7976931348623157e308);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 307)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, 1.7976931348623157e308);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 308)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -Infinity);
        expect(_max_result).toBe(-Infinity);
    });

    _test("execution of f64_0: max (instance 309)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 310)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 311)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, Infinity);
        expect(_max_result).toBe(Infinity);
    });

    _test("execution of f64_0: max (instance 312)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 313)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 314)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 315)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -Infinity, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 316)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 317)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 318)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 319)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, Infinity, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 320)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 321)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 322)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 323)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 324)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 325)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 326)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 327)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 0.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 328)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 329)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 330)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 331)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 332)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 333)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 334)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 335)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 5e-324);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 336)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 337)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 338)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 339)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 340)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 341)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 342)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 343)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 2.2250738585072014e-308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 344)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 345)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 346)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 347)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 348)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 349)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 350)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 351)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 0.5);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 352)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 353)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 354)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 355)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 356)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 357)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 358)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 359)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 1.0);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 360)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 361)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 362)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 363)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 364)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 365)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 366)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 367)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 6.283185307179586);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 368)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 369)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 370)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 371)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, 1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 372)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 373)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 374)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 375)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, 1.7976931348623157e308);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 376)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 377)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 378)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 379)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 380)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 381)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 382)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 383)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, Infinity);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 384)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 385)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 386)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 387)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 388)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 389)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 390)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 391)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, -NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 392)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 393)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 394)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 395)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, -NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 396)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 397)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 398)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: max (instance 399)", () => {
        let _max = module.getExport("max");
        expect(_max).not.toBeUndefined();
        let _max_result = module.invoke(_max, NaN, NaN);
        expect(_max_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 0)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -0.0);
        expect(_sqrt_result).toBe(-0.0);
    });

    _test("execution of f64_0: sqrt (instance 1)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, 0.0);
        expect(_sqrt_result).toBe(0.0);
    });

    _test("execution of f64_0: sqrt (instance 2)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -5e-324);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 3)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, 5e-324);
        expect(_sqrt_result).toBe(2.2227587494850775e-162);
    });

    _test("execution of f64_0: sqrt (instance 4)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -2.2250738585072014e-308);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 5)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, 2.2250738585072014e-308);
        expect(_sqrt_result).toBe(1.4916681462400413e-154);
    });

    _test("execution of f64_0: sqrt (instance 6)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -0.5);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 7)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, 0.5);
        expect(_sqrt_result).toBe(0.7071067811865476);
    });

    _test("execution of f64_0: sqrt (instance 8)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -1.0);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 9)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, 1.0);
        expect(_sqrt_result).toBe(1.0);
    });

    _test("execution of f64_0: sqrt (instance 10)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -6.283185307179586);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 11)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, 6.283185307179586);
        expect(_sqrt_result).toBe(2.5066282746310002);
    });

    _test("execution of f64_0: sqrt (instance 12)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -1.7976931348623157e308);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 13)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, 1.7976931348623157e308);
        expect(_sqrt_result).toBe(1.3407807929942596e154);
    });

    _test("execution of f64_0: sqrt (instance 14)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -Infinity);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 15)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, Infinity);
        expect(_sqrt_result).toBe(Infinity);
    });

    _test("execution of f64_0: sqrt (instance 16)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -NaN);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 17)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, -NaN);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 18)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, NaN);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: sqrt (instance 19)", () => {
        let _sqrt = module.getExport("sqrt");
        expect(_sqrt).not.toBeUndefined();
        let _sqrt_result = module.invoke(_sqrt, NaN);
        expect(_sqrt_result).toBe(NaN);
    });

    _test("execution of f64_0: floor (instance 0)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -0.0);
        expect(_floor_result).toBe(-0.0);
    });

    _test("execution of f64_0: floor (instance 1)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, 0.0);
        expect(_floor_result).toBe(0.0);
    });

    _test("execution of f64_0: floor (instance 2)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -5e-324);
        expect(_floor_result).toBe(-1.0);
    });

    _test("execution of f64_0: floor (instance 3)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, 5e-324);
        expect(_floor_result).toBe(0.0);
    });

    _test("execution of f64_0: floor (instance 4)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -2.2250738585072014e-308);
        expect(_floor_result).toBe(-1.0);
    });

    _test("execution of f64_0: floor (instance 5)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, 2.2250738585072014e-308);
        expect(_floor_result).toBe(0.0);
    });

    _test("execution of f64_0: floor (instance 6)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -0.5);
        expect(_floor_result).toBe(-1.0);
    });

    _test("execution of f64_0: floor (instance 7)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, 0.5);
        expect(_floor_result).toBe(0.0);
    });

    _test("execution of f64_0: floor (instance 8)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -1.0);
        expect(_floor_result).toBe(-1.0);
    });

    _test("execution of f64_0: floor (instance 9)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, 1.0);
        expect(_floor_result).toBe(1.0);
    });

    _test("execution of f64_0: floor (instance 10)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -6.283185307179586);
        expect(_floor_result).toBe(-7.0);
    });

    _test("execution of f64_0: floor (instance 11)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, 6.283185307179586);
        expect(_floor_result).toBe(6.0);
    });

    _test("execution of f64_0: floor (instance 12)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -1.7976931348623157e308);
        expect(_floor_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: floor (instance 13)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, 1.7976931348623157e308);
        expect(_floor_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: floor (instance 14)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -Infinity);
        expect(_floor_result).toBe(-Infinity);
    });

    _test("execution of f64_0: floor (instance 15)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, Infinity);
        expect(_floor_result).toBe(Infinity);
    });

    _test("execution of f64_0: floor (instance 16)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -NaN);
        expect(_floor_result).toBe(NaN);
    });

    _test("execution of f64_0: floor (instance 17)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, -NaN);
        expect(_floor_result).toBe(NaN);
    });

    _test("execution of f64_0: floor (instance 18)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, NaN);
        expect(_floor_result).toBe(NaN);
    });

    _test("execution of f64_0: floor (instance 19)", () => {
        let _floor = module.getExport("floor");
        expect(_floor).not.toBeUndefined();
        let _floor_result = module.invoke(_floor, NaN);
        expect(_floor_result).toBe(NaN);
    });

    _test("execution of f64_0: ceil (instance 0)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -0.0);
        expect(_ceil_result).toBe(-0.0);
    });

    _test("execution of f64_0: ceil (instance 1)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, 0.0);
        expect(_ceil_result).toBe(0.0);
    });

    _test("execution of f64_0: ceil (instance 2)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -5e-324);
        expect(_ceil_result).toBe(-0.0);
    });

    _test("execution of f64_0: ceil (instance 3)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, 5e-324);
        expect(_ceil_result).toBe(1.0);
    });

    _test("execution of f64_0: ceil (instance 4)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -2.2250738585072014e-308);
        expect(_ceil_result).toBe(-0.0);
    });

    _test("execution of f64_0: ceil (instance 5)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, 2.2250738585072014e-308);
        expect(_ceil_result).toBe(1.0);
    });

    _test("execution of f64_0: ceil (instance 6)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -0.5);
        expect(_ceil_result).toBe(-0.0);
    });

    _test("execution of f64_0: ceil (instance 7)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, 0.5);
        expect(_ceil_result).toBe(1.0);
    });

    _test("execution of f64_0: ceil (instance 8)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -1.0);
        expect(_ceil_result).toBe(-1.0);
    });

    _test("execution of f64_0: ceil (instance 9)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, 1.0);
        expect(_ceil_result).toBe(1.0);
    });

    _test("execution of f64_0: ceil (instance 10)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -6.283185307179586);
        expect(_ceil_result).toBe(-6.0);
    });

    _test("execution of f64_0: ceil (instance 11)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, 6.283185307179586);
        expect(_ceil_result).toBe(7.0);
    });

    _test("execution of f64_0: ceil (instance 12)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -1.7976931348623157e308);
        expect(_ceil_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: ceil (instance 13)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, 1.7976931348623157e308);
        expect(_ceil_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: ceil (instance 14)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -Infinity);
        expect(_ceil_result).toBe(-Infinity);
    });

    _test("execution of f64_0: ceil (instance 15)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, Infinity);
        expect(_ceil_result).toBe(Infinity);
    });

    _test("execution of f64_0: ceil (instance 16)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -NaN);
        expect(_ceil_result).toBe(NaN);
    });

    _test("execution of f64_0: ceil (instance 17)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, -NaN);
        expect(_ceil_result).toBe(NaN);
    });

    _test("execution of f64_0: ceil (instance 18)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, NaN);
        expect(_ceil_result).toBe(NaN);
    });

    _test("execution of f64_0: ceil (instance 19)", () => {
        let _ceil = module.getExport("ceil");
        expect(_ceil).not.toBeUndefined();
        let _ceil_result = module.invoke(_ceil, NaN);
        expect(_ceil_result).toBe(NaN);
    });

    _test("execution of f64_0: trunc (instance 0)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -0.0);
        expect(_trunc_result).toBe(-0.0);
    });

    _test("execution of f64_0: trunc (instance 1)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, 0.0);
        expect(_trunc_result).toBe(0.0);
    });

    _test("execution of f64_0: trunc (instance 2)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -5e-324);
        expect(_trunc_result).toBe(-0.0);
    });

    _test("execution of f64_0: trunc (instance 3)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, 5e-324);
        expect(_trunc_result).toBe(0.0);
    });

    _test("execution of f64_0: trunc (instance 4)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -2.2250738585072014e-308);
        expect(_trunc_result).toBe(-0.0);
    });

    _test("execution of f64_0: trunc (instance 5)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, 2.2250738585072014e-308);
        expect(_trunc_result).toBe(0.0);
    });

    _test("execution of f64_0: trunc (instance 6)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -0.5);
        expect(_trunc_result).toBe(-0.0);
    });

    _test("execution of f64_0: trunc (instance 7)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, 0.5);
        expect(_trunc_result).toBe(0.0);
    });

    _test("execution of f64_0: trunc (instance 8)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -1.0);
        expect(_trunc_result).toBe(-1.0);
    });

    _test("execution of f64_0: trunc (instance 9)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, 1.0);
        expect(_trunc_result).toBe(1.0);
    });

    _test("execution of f64_0: trunc (instance 10)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -6.283185307179586);
        expect(_trunc_result).toBe(-6.0);
    });

    _test("execution of f64_0: trunc (instance 11)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, 6.283185307179586);
        expect(_trunc_result).toBe(6.0);
    });

    _test("execution of f64_0: trunc (instance 12)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -1.7976931348623157e308);
        expect(_trunc_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: trunc (instance 13)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, 1.7976931348623157e308);
        expect(_trunc_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: trunc (instance 14)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -Infinity);
        expect(_trunc_result).toBe(-Infinity);
    });

    _test("execution of f64_0: trunc (instance 15)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, Infinity);
        expect(_trunc_result).toBe(Infinity);
    });

    _test("execution of f64_0: trunc (instance 16)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -NaN);
        expect(_trunc_result).toBe(NaN);
    });

    _test("execution of f64_0: trunc (instance 17)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, -NaN);
        expect(_trunc_result).toBe(NaN);
    });

    _test("execution of f64_0: trunc (instance 18)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, NaN);
        expect(_trunc_result).toBe(NaN);
    });

    _test("execution of f64_0: trunc (instance 19)", () => {
        let _trunc = module.getExport("trunc");
        expect(_trunc).not.toBeUndefined();
        let _trunc_result = module.invoke(_trunc, NaN);
        expect(_trunc_result).toBe(NaN);
    });

    _test("execution of f64_0: nearest (instance 0)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -0.0);
        expect(_nearest_result).toBe(-0.0);
    });

    _test("execution of f64_0: nearest (instance 1)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, 0.0);
        expect(_nearest_result).toBe(0.0);
    });

    _test("execution of f64_0: nearest (instance 2)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -5e-324);
        expect(_nearest_result).toBe(-0.0);
    });

    _test("execution of f64_0: nearest (instance 3)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, 5e-324);
        expect(_nearest_result).toBe(0.0);
    });

    _test("execution of f64_0: nearest (instance 4)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -2.2250738585072014e-308);
        expect(_nearest_result).toBe(-0.0);
    });

    _test("execution of f64_0: nearest (instance 5)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, 2.2250738585072014e-308);
        expect(_nearest_result).toBe(0.0);
    });

    _test("execution of f64_0: nearest (instance 6)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -0.5);
        expect(_nearest_result).toBe(-0.0);
    });

    _test("execution of f64_0: nearest (instance 7)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, 0.5);
        expect(_nearest_result).toBe(0.0);
    });

    _test("execution of f64_0: nearest (instance 8)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -1.0);
        expect(_nearest_result).toBe(-1.0);
    });

    _test("execution of f64_0: nearest (instance 9)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, 1.0);
        expect(_nearest_result).toBe(1.0);
    });

    _test("execution of f64_0: nearest (instance 10)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -6.283185307179586);
        expect(_nearest_result).toBe(-6.0);
    });

    _test("execution of f64_0: nearest (instance 11)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, 6.283185307179586);
        expect(_nearest_result).toBe(6.0);
    });

    _test("execution of f64_0: nearest (instance 12)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -1.7976931348623157e308);
        expect(_nearest_result).toBe(-1.7976931348623157e308);
    });

    _test("execution of f64_0: nearest (instance 13)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, 1.7976931348623157e308);
        expect(_nearest_result).toBe(1.7976931348623157e308);
    });

    _test("execution of f64_0: nearest (instance 14)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -Infinity);
        expect(_nearest_result).toBe(-Infinity);
    });

    _test("execution of f64_0: nearest (instance 15)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, Infinity);
        expect(_nearest_result).toBe(Infinity);
    });

    _test("execution of f64_0: nearest (instance 16)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -NaN);
        expect(_nearest_result).toBe(NaN);
    });

    _test("execution of f64_0: nearest (instance 17)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, -NaN);
        expect(_nearest_result).toBe(NaN);
    });

    _test("execution of f64_0: nearest (instance 18)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, NaN);
        expect(_nearest_result).toBe(NaN);
    });

    _test("execution of f64_0: nearest (instance 19)", () => {
        let _nearest = module.getExport("nearest");
        expect(_nearest).not.toBeUndefined();
        let _nearest_result = module.invoke(_nearest, NaN);
        expect(_nearest_result).toBe(NaN);
    });
});

describe("f64_1", () => {
    let _test = test;

    _test("execution of f64_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_2", () => {
    let _test = test;

    _test("execution of f64_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_3", () => {
    let _test = test;

    _test("execution of f64_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_4", () => {
    let _test = test;

    _test("execution of f64_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_5", () => {
    let _test = test;

    _test("execution of f64_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_6", () => {
    let _test = test;

    _test("execution of f64_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_7", () => {
    let _test = test;

    _test("execution of f64_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_8", () => {
    let _test = test;

    _test("execution of f64_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_9", () => {
    let _test = test;

    _test("execution of f64_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_10", () => {
    let _test = test;

    _test("execution of f64_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_11", () => {
    let _test = test;

    _test("execution of f64_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f64_12", () => {
    let _test = test;

    _test("execution of f64_12: _inline_test_11 (instance 0)", () => {});
});

describe("f64_13", () => {
    let _test = test;

    _test("execution of f64_13: _inline_test_12 (instance 0)", () => {});
});
