let globalImportObject = {};
let namedModules = {};

describe("f32_cmp_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/f32_cmp_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of f32_cmp_0: eq (instance 0)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -0.0);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 1)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, 0.0);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 2)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -0.0);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 3)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, 0.0);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 4)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 5)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 6)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 7)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 8)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 9)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 10)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 11)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 12)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 13)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 14)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 15)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 16)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 17)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 18)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 19)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 20)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 21)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 22)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 23)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 24)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 25)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 26)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 27)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 28)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 29)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 30)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 31)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 32)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 33)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 34)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 35)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 36)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 37)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 38)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 39)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 40)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 41)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 42)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 43)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 44)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -1.401298464324817e-45);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 45)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 46)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 47)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, 1.401298464324817e-45);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 48)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 49)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 50)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 51)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 52)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 53)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 54)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 55)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 56)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 57)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 58)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 59)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 60)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 61)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 62)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 63)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 64)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 65)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 66)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 67)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 68)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 69)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 70)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 71)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 72)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 73)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 74)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 75)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.401298464324817e-45, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 76)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 77)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 78)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 79)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.401298464324817e-45, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 80)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 81)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 82)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 83)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 84)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 85)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 86)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 87)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 88)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 89)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 90)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 91)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 92)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 93)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 94)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 95)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 96)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 97)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 98)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 99)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 100)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 101)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 102)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 103)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 104)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 105)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 106)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 107)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 108)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 109)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 110)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 111)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 112)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 113)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 114)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 115)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.1754943508222875e-38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 116)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 117)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 118)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 119)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.1754943508222875e-38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 120)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 121)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 122)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 123)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 124)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 125)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 126)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 127)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 128)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 129)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 130)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 131)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 132)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -0.5);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 133)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 134)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 135)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, 0.5);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 136)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 137)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 138)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 139)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 140)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 141)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 142)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 143)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 144)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 145)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 146)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 147)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 148)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 149)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 150)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 151)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 152)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 153)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 154)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 155)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -0.5, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 156)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 157)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 158)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 159)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0.5, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 160)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 161)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 162)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 163)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 164)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 165)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 166)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 167)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 168)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 169)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 170)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 171)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 172)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 173)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 174)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 175)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 176)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -1.0);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 177)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 178)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 179)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, 1.0);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 180)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 181)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 182)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 183)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 184)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 185)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 186)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 187)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 188)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 189)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 190)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 191)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 192)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 193)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 194)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 195)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 196)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 197)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 198)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 199)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1.0, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 200)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 201)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 202)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 203)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 204)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 205)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 206)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 207)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 208)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 209)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 210)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 211)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 212)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 213)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 214)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 215)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 216)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 217)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 218)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 219)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 220)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -6.2831854820251465);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 221)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 222)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 223)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, 6.2831854820251465);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 224)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 225)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 226)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 227)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 228)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 229)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 230)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 231)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 232)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 233)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 234)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 235)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -6.2831854820251465, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 236)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 237)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 238)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 239)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 6.2831854820251465, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 240)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 241)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 242)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 243)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 244)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 245)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 246)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 247)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 248)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 249)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 250)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 251)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 252)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 253)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 254)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 255)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 256)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 257)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 258)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 259)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 260)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 261)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 262)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 263)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 264)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -3.4028234663852886e38);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 265)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 266)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 267)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, 3.4028234663852886e38);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 268)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 269)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 270)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 271)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 272)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 273)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 274)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 275)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -3.4028234663852886e38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 276)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 277)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 278)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 279)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 3.4028234663852886e38, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 280)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 281)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 282)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 283)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 284)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 285)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 286)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 287)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 288)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 289)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 290)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 291)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 292)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 293)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 294)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 295)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 296)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 297)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 298)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 299)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 300)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 301)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 302)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 303)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 304)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 305)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 306)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 307)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 308)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -Infinity);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 309)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 310)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 311)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, Infinity);
        expect(_eq_result).toBe(1);
    });

    _test("execution of f32_cmp_0: eq (instance 312)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 313)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 314)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 315)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -Infinity, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 316)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 317)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 318)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 319)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, Infinity, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 320)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 321)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 322)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 323)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 324)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 325)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 326)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 327)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 0.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 328)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 329)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 330)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 331)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 332)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 333)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 334)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 335)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 1.401298464324817e-45);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 336)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 337)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 338)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 339)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 340)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 341)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 342)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 343)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 1.1754943508222875e-38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 344)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 345)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 346)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 347)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 348)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 349)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 350)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 351)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 0.5);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 352)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 353)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 354)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 355)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 356)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 357)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 358)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 359)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 1.0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 360)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 361)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 362)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 363)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 364)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 365)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 366)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 367)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 6.2831854820251465);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 368)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 369)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 370)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 371)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 372)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 373)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 374)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 375)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, 3.4028234663852886e38);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 376)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 377)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 378)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 379)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 380)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 381)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 382)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 383)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, Infinity);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 384)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 385)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 386)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 387)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 388)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 389)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 390)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 391)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 392)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 393)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 394)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 395)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, -NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 396)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 397)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 398)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: eq (instance 399)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, NaN, NaN);
        expect(_eq_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 0)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -0.0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 1)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, 0.0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 2)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -0.0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 3)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, 0.0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 4)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 5)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 6)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 7)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 8)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 9)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 10)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 11)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 12)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 13)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 14)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 15)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 16)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 17)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 18)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 19)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 20)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 21)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 22)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 23)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 24)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 25)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 26)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 27)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 28)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 29)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 30)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 31)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 32)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 33)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 34)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 35)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 36)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 37)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 38)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 39)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 40)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 41)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 42)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 43)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 44)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -1.401298464324817e-45);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 45)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 46)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 47)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, 1.401298464324817e-45);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 48)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 49)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 50)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 51)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 52)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 53)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 54)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 55)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 56)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 57)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 58)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 59)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 60)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 61)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 62)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 63)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 64)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 65)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 66)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 67)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 68)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 69)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 70)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 71)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 72)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 73)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 74)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 75)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.401298464324817e-45, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 76)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 77)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 78)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 79)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.401298464324817e-45, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 80)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 81)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 82)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 83)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 84)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 85)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 86)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 87)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 88)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 89)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 90)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 91)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 92)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 93)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 94)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 95)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 96)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 97)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 98)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 99)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 100)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 101)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 102)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 103)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 104)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 105)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 106)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 107)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 108)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 109)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 110)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 111)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 112)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 113)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 114)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 115)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.1754943508222875e-38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 116)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 117)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 118)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 119)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.1754943508222875e-38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 120)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 121)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 122)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 123)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 124)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 125)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 126)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 127)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 128)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 129)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 130)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 131)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 132)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -0.5);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 133)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 134)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 135)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, 0.5);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 136)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 137)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 138)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 139)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 140)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 141)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 142)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 143)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 144)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 145)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 146)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 147)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 148)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 149)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 150)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 151)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 152)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 153)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 154)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 155)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -0.5, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 156)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 157)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 158)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 159)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0.5, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 160)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 161)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 162)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 163)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 164)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 165)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 166)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 167)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 168)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 169)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 170)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 171)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 172)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 173)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 174)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 175)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 176)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -1.0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 177)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 178)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 179)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, 1.0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 180)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 181)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 182)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 183)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 184)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 185)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 186)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 187)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 188)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 189)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 190)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 191)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 192)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 193)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 194)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 195)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 196)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 197)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 198)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 199)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1.0, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 200)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 201)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 202)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 203)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 204)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 205)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 206)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 207)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 208)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 209)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 210)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 211)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 212)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 213)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 214)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 215)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 216)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 217)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 218)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 219)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 220)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -6.2831854820251465);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 221)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 222)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 223)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, 6.2831854820251465);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 224)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 225)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 226)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 227)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 228)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 229)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 230)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 231)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 232)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 233)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 234)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 235)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -6.2831854820251465, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 236)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 237)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 238)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 239)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 6.2831854820251465, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 240)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 241)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 242)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 243)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 244)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 245)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 246)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 247)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 248)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 249)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 250)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 251)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 252)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 253)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 254)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 255)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 256)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 257)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 258)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 259)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 260)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 261)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 262)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 263)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 264)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -3.4028234663852886e38);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 265)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 266)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 267)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, 3.4028234663852886e38);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 268)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 269)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 270)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 271)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 272)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 273)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 274)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 275)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -3.4028234663852886e38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 276)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 277)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 278)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 279)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 3.4028234663852886e38, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 280)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 281)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 282)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 283)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 284)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 285)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 286)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 287)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 288)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 289)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 290)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 291)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 292)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 293)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 294)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 295)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 296)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 297)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 298)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 299)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 300)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 301)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 302)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 303)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 304)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 305)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 306)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 307)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 308)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -Infinity);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 309)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 310)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 311)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, Infinity);
        expect(_ne_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ne (instance 312)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 313)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 314)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 315)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -Infinity, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 316)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 317)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 318)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 319)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, Infinity, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 320)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 321)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 322)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 323)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 324)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 325)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 326)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 327)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 0.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 328)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 329)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 330)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 331)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 332)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 333)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 334)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 335)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 1.401298464324817e-45);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 336)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 337)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 338)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 339)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 340)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 341)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 342)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 343)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 1.1754943508222875e-38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 344)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 345)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 346)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 347)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 348)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 349)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 350)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 351)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 0.5);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 352)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 353)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 354)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 355)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 356)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 357)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 358)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 359)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 1.0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 360)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 361)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 362)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 363)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 364)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 365)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 366)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 367)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 6.2831854820251465);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 368)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 369)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 370)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 371)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 372)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 373)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 374)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 375)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, 3.4028234663852886e38);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 376)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 377)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 378)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 379)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 380)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 381)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 382)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 383)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, Infinity);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 384)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 385)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 386)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 387)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 388)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 389)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 390)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 391)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 392)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 393)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 394)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 395)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, -NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 396)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 397)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 398)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ne (instance 399)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, NaN, NaN);
        expect(_ne_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 0)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 1)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 2)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 3)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 4)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 5)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 6)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 7)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 8)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 9)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 10)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 11)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 12)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 13)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 14)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 15)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 16)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 17)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 18)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 19)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 20)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 21)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 22)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 23)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 24)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 25)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 26)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 27)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 28)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 29)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 30)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 31)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 32)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 33)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 34)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 35)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 36)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 37)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 38)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 39)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 40)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 41)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, 0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 42)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 43)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 44)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 45)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 46)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 47)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 48)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 49)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 50)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 51)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 52)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 53)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 54)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 55)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 56)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 57)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 58)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 59)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 60)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 61)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 62)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 63)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 64)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 65)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 66)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 67)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 68)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 69)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 70)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 71)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 72)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 73)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 74)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 75)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.401298464324817e-45, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 76)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 77)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 78)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 79)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.401298464324817e-45, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 80)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 81)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, 0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 82)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 83)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 84)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 85)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 86)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 87)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 88)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 89)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 90)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 91)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 92)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 93)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 94)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 95)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 96)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 97)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 98)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 99)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 100)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 101)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 102)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 103)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 104)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 105)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 106)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 107)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 108)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 109)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 110)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 111)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 112)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 113)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 114)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 115)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.1754943508222875e-38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 116)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 117)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 118)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 119)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.1754943508222875e-38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 120)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 121)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, 0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 122)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 123)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 124)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 125)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 126)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 127)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 128)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 129)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 130)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 131)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 132)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 133)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 134)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 135)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 136)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 137)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 138)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 139)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 140)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 141)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 142)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 143)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 144)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 145)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 146)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 147)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 148)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 149)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 150)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 151)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 152)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 153)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 154)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 155)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -0.5, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 156)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 157)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 158)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 159)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 0.5, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 160)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 161)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, 0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 162)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 163)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 164)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 165)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 166)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 167)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 168)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 169)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 170)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 171)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 172)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 173)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 174)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 175)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 176)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 177)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 178)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 179)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 180)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 181)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 182)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 183)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 184)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 185)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 186)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 187)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 188)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 189)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 190)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 191)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 192)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 193)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 194)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 195)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -1.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 196)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 197)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 198)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 199)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 1.0, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 200)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 201)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, 0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 202)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 203)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 204)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 205)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 206)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 207)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 208)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 209)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 210)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 211)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 212)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 213)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 214)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 215)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 216)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 217)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 218)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 219)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 220)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 221)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 222)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 223)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, 6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 224)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 225)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 226)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 227)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 228)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 229)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 230)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 231)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 232)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 233)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 234)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 235)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -6.2831854820251465, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 236)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 237)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 238)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 239)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 6.2831854820251465, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 240)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 241)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, 0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 242)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 243)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 244)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 245)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 246)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 247)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 248)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 249)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 250)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 251)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 252)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 253)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 254)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 255)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 256)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 257)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 258)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 259)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 260)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 261)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 262)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 263)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, 6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 264)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 265)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 266)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 267)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, 3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 268)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 269)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 270)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 271)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 272)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 273)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 274)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 275)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -3.4028234663852886e38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 276)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 277)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 278)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 279)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, 3.4028234663852886e38, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 280)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 281)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, 0.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 282)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 283)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 284)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 285)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, 1.401298464324817e-45);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 286)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 287)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 288)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 289)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, 1.1754943508222875e-38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 290)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 291)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 292)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 293)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, 0.5);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 294)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 295)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 296)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 297)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, 1.0);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 298)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 299)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 300)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 301)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, 6.2831854820251465);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 302)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 303)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, 6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 304)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 305)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, 3.4028234663852886e38);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 306)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 307)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, 3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 308)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 309)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, Infinity);
        expect(_lt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: lt (instance 310)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 311)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 312)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 313)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 314)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 315)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -Infinity, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 316)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 317)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 318)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 319)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, Infinity, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 320)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 321)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 322)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 323)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 324)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 325)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 326)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 327)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 0.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 328)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 329)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 330)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 331)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 332)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 333)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 334)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 335)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 1.401298464324817e-45);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 336)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 337)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 338)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 339)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 340)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 341)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 342)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 343)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 1.1754943508222875e-38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 344)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 345)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 346)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 347)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 348)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 349)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 350)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 351)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 0.5);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 352)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 353)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 354)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 355)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 356)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 357)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 358)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 359)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 1.0);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 360)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 361)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 362)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 363)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 364)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 365)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 366)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 367)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 6.2831854820251465);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 368)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 369)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 370)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 371)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, 3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 372)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 373)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 374)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 375)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, 3.4028234663852886e38);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 376)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 377)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 378)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 379)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 380)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 381)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 382)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 383)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, Infinity);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 384)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 385)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 386)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 387)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 388)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 389)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 390)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 391)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, -NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 392)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 393)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 394)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 395)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, -NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 396)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 397)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 398)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: lt (instance 399)", () => {
        let _lt = module.getExport("lt");
        expect(_lt).not.toBeUndefined();
        let _lt_result = module.invoke(_lt, NaN, NaN);
        expect(_lt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 0)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 1)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 2)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 3)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 4)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 5)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 6)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 7)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 8)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 9)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 10)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 11)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 12)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 13)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 14)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 15)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 16)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 17)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 18)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 19)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 20)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 21)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 22)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 23)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 24)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 25)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 26)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 27)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 28)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 29)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 30)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 31)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 32)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 33)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 34)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 35)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 36)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 37)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 38)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 39)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 40)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 41)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 42)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 43)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 44)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 45)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 46)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 47)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 48)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 49)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 50)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 51)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 52)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 53)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 54)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 55)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 56)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 57)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 58)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 59)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 60)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 61)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 62)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 63)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 64)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 65)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 66)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 67)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 68)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 69)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 70)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 71)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 72)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 73)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 74)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 75)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.401298464324817e-45, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 76)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 77)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 78)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 79)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.401298464324817e-45, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 80)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 81)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 82)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 83)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 84)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 85)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 86)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 87)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 88)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 89)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 90)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 91)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 92)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 93)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 94)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 95)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 96)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 97)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 98)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 99)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 100)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 101)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 102)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 103)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 104)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 105)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 106)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 107)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 108)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 109)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 110)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 111)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 112)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 113)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 114)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 115)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.1754943508222875e-38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 116)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 117)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 118)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 119)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.1754943508222875e-38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 120)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 121)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 122)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 123)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 124)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 125)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 126)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 127)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 128)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 129)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 130)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 131)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 132)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 133)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 134)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 135)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 136)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 137)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 138)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 139)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 140)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 141)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 142)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 143)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 144)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 145)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 146)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 147)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 148)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 149)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 150)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 151)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 152)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 153)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 154)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 155)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -0.5, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 156)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 157)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 158)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 159)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 0.5, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 160)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 161)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 162)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 163)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 164)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 165)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 166)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 167)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 168)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 169)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 170)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 171)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 172)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 173)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 174)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 175)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 176)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 177)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 178)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 179)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 180)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 181)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 182)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 183)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 184)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 185)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 186)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 187)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 188)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 189)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 190)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 191)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 192)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 193)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 194)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 195)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -1.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 196)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 197)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 198)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 199)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 1.0, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 200)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 201)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 202)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 203)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 204)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 205)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 206)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 207)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 208)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 209)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 210)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 211)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 212)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 213)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 214)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 215)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 216)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 217)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 218)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 219)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, 1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 220)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 221)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 222)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 223)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 224)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 225)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 226)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 227)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 228)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 229)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 230)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 231)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 232)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 233)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 234)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 235)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -6.2831854820251465, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 236)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 237)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 238)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 239)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 6.2831854820251465, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 240)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 241)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 242)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 243)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 244)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 245)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 246)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 247)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 248)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 249)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 250)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 251)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 252)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 253)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 254)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 255)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 256)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 257)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 258)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 259)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, 1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 260)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 261)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 262)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 263)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, 6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 264)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 265)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 266)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 267)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 268)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 269)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 270)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 271)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 272)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 273)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 274)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 275)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -3.4028234663852886e38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 276)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 277)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 278)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 279)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, 3.4028234663852886e38, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 280)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 281)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, 0.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 282)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 283)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 284)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 285)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, 1.401298464324817e-45);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 286)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 287)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 288)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 289)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, 1.1754943508222875e-38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 290)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 291)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 292)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 293)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, 0.5);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 294)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 295)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 296)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 297)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, 1.0);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 298)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 299)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, 1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 300)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 301)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, 6.2831854820251465);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 302)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 303)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, 6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 304)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 305)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, 3.4028234663852886e38);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 306)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 307)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, 3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 308)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 309)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 310)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 311)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, Infinity);
        expect(_le_result).toBe(1);
    });

    _test("execution of f32_cmp_0: le (instance 312)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 313)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 314)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 315)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -Infinity, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 316)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 317)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 318)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 319)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, Infinity, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 320)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 321)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 322)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 323)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 324)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 325)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 326)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 327)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 0.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 328)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 329)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 330)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 331)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 332)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 333)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 334)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 335)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 1.401298464324817e-45);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 336)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 337)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 338)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 339)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 340)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 341)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 342)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 343)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 1.1754943508222875e-38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 344)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 345)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 346)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 347)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 348)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 349)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 350)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 351)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 0.5);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 352)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 353)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 354)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 355)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 356)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 357)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 358)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 359)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 1.0);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 360)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 361)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 362)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 363)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 364)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 365)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 366)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 367)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 6.2831854820251465);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 368)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 369)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 370)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 371)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, 3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 372)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 373)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 374)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 375)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, 3.4028234663852886e38);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 376)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 377)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 378)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 379)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 380)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 381)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 382)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 383)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, Infinity);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 384)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 385)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 386)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 387)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 388)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 389)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 390)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 391)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, -NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 392)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 393)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 394)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 395)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, -NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 396)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 397)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 398)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: le (instance 399)", () => {
        let _le = module.getExport("le");
        expect(_le).not.toBeUndefined();
        let _le_result = module.invoke(_le, NaN, NaN);
        expect(_le_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 0)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 1)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 2)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 3)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 4)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 5)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 6)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 7)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 8)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 9)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 10)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 11)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 12)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 13)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 14)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 15)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 16)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 17)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 18)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 19)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 20)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 21)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 22)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 23)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 24)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 25)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 26)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 27)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 28)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 29)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 30)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 31)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 32)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 33)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 34)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 35)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 36)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 37)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 38)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 39)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 40)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 41)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 42)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 43)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, 0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 44)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 45)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 46)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 47)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 48)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 49)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 50)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 51)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 52)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 53)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 54)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 55)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 56)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 57)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 58)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 59)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 60)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 61)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 62)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 63)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 64)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 65)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 66)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 67)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 68)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 69)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 70)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 71)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 72)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 73)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 74)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 75)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.401298464324817e-45, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 76)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 77)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 78)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 79)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.401298464324817e-45, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 80)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 81)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 82)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 83)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, 0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 84)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 85)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 86)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 87)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 88)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 89)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 90)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 91)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 92)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 93)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 94)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 95)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 96)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 97)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 98)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 99)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 100)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 101)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 102)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 103)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 104)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 105)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 106)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 107)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 108)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 109)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 110)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 111)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 112)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 113)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 114)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 115)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.1754943508222875e-38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 116)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 117)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 118)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 119)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.1754943508222875e-38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 120)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 121)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 122)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 123)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, 0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 124)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 125)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 126)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 127)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, 1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 128)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 129)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 130)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 131)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, 1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 132)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 133)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 134)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 135)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 136)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 137)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 138)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 139)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 140)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 141)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 142)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 143)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 144)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 145)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 146)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 147)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 148)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 149)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 150)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 151)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 152)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 153)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 154)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 155)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -0.5, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 156)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 157)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 158)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 159)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 0.5, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 160)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 161)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 162)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 163)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, 0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 164)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 165)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 166)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 167)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, 1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 168)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 169)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 170)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 171)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, 1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 172)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 173)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 174)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 175)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, 0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 176)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 177)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 178)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 179)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 180)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 181)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 182)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 183)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 184)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 185)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 186)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 187)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 188)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 189)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 190)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 191)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 192)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 193)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 194)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 195)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -1.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 196)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 197)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 198)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 199)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 1.0, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 200)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 201)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 202)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 203)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, 0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 204)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 205)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 206)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 207)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, 1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 208)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 209)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 210)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 211)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, 1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 212)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 213)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 214)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 215)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, 0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 216)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 217)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 218)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 219)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, 1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 220)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 221)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 222)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 223)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 224)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 225)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 226)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 227)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 228)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 229)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 230)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 231)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 232)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 233)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 234)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 235)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -6.2831854820251465, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 236)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 237)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 238)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 239)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 6.2831854820251465, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 240)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 241)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 242)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 243)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, 0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 244)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 245)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 246)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 247)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, 1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 248)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 249)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 250)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 251)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 252)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 253)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 254)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 255)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, 0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 256)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 257)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 258)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 259)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, 1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 260)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 261)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 262)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 263)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, 6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 264)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 265)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 266)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 267)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 268)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 269)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 270)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 271)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 272)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 273)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 274)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 275)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -3.4028234663852886e38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 276)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 277)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 278)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 279)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, 3.4028234663852886e38, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 280)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 281)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 282)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 283)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, 0.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 284)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 285)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 286)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 287)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, 1.401298464324817e-45);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 288)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 289)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 290)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 291)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, 1.1754943508222875e-38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 292)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 293)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 294)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 295)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, 0.5);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 296)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 297)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 298)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 299)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, 1.0);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 300)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 301)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 302)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 303)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, 6.2831854820251465);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 304)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 305)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 306)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 307)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, 3.4028234663852886e38);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 308)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 309)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 310)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -Infinity);
        expect(_gt_result).toBe(1);
    });

    _test("execution of f32_cmp_0: gt (instance 311)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 312)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 313)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 314)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 315)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -Infinity, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 316)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 317)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 318)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 319)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, Infinity, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 320)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 321)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 322)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 323)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 324)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 325)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 326)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 327)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 0.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 328)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 329)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 330)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 331)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 332)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 333)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 334)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 335)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 1.401298464324817e-45);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 336)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 337)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 338)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 339)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 340)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 341)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 342)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 343)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 1.1754943508222875e-38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 344)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 345)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 346)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 347)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 348)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 349)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 350)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 351)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 0.5);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 352)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 353)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 354)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 355)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 356)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 357)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 358)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 359)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 1.0);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 360)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 361)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 362)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 363)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 364)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 365)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 366)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 367)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 6.2831854820251465);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 368)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 369)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 370)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 371)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 372)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 373)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 374)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 375)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, 3.4028234663852886e38);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 376)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 377)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 378)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 379)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 380)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 381)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 382)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 383)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, Infinity);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 384)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 385)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 386)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 387)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 388)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 389)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 390)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 391)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, -NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 392)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 393)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 394)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 395)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, -NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 396)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 397)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 398)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: gt (instance 399)", () => {
        let _gt = module.getExport("gt");
        expect(_gt).not.toBeUndefined();
        let _gt_result = module.invoke(_gt, NaN, NaN);
        expect(_gt_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 0)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 1)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 2)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 3)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 4)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 5)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 6)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 7)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 8)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 9)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 10)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 11)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 12)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 13)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 14)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 15)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 16)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 17)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 18)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 19)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 20)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 21)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 22)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 23)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 24)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 25)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 26)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 27)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 28)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 29)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 30)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 31)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 32)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 33)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 34)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 35)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 36)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 37)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 38)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 39)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 40)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 41)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 42)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 43)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 44)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 45)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 46)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 47)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, 1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 48)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 49)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 50)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 51)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 52)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 53)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 54)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 55)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 56)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 57)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 58)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 59)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 60)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 61)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 62)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 63)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 64)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 65)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 66)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 67)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 68)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 69)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 70)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 71)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 72)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 73)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 74)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 75)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.401298464324817e-45, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 76)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 77)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 78)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 79)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.401298464324817e-45, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 80)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 81)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 82)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 83)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 84)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 85)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 86)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 87)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, 1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 88)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 89)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 90)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 91)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, 1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 92)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 93)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 94)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 95)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 96)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 97)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 98)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 99)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 100)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 101)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 102)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 103)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 104)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 105)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 106)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 107)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 108)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 109)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 110)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 111)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 112)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 113)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 114)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 115)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.1754943508222875e-38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 116)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 117)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 118)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 119)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.1754943508222875e-38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 120)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 121)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 122)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 123)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 124)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 125)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 126)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 127)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, 1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 128)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 129)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 130)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 131)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, 1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 132)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 133)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 134)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 135)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, 0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 136)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 137)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 138)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 139)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 140)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 141)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 142)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 143)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 144)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 145)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 146)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 147)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 148)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 149)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 150)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 151)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 152)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 153)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 154)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 155)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -0.5, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 156)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 157)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 158)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 159)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 0.5, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 160)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 161)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 162)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 163)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 164)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 165)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 166)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 167)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, 1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 168)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 169)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 170)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 171)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, 1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 172)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 173)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 174)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 175)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, 0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 176)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 177)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 178)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 179)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, 1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 180)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 181)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 182)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 183)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 184)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 185)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 186)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 187)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 188)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 189)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 190)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 191)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 192)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 193)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 194)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 195)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -1.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 196)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 197)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 198)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 199)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 1.0, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 200)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 201)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 202)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 203)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 204)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 205)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 206)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 207)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, 1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 208)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 209)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 210)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 211)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, 1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 212)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 213)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 214)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 215)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, 0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 216)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 217)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 218)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 219)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, 1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 220)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 221)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 222)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 223)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, 6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 224)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 225)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 226)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 227)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 228)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 229)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 230)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 231)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 232)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 233)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 234)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 235)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -6.2831854820251465, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 236)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 237)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 238)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 239)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 6.2831854820251465, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 240)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 241)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 242)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 243)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 244)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 245)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 246)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 247)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, 1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 248)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 249)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 250)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 251)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, 1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 252)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 253)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 254)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 255)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, 0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 256)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 257)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 258)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 259)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, 1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 260)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 261)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 262)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 263)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, 6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 264)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 265)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 266)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 267)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, 3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 268)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 269)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 270)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 271)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 272)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 273)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 274)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 275)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -3.4028234663852886e38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 276)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 277)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 278)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 279)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, 3.4028234663852886e38, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 280)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 281)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 282)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 283)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, 0.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 284)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 285)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 286)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 287)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, 1.401298464324817e-45);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 288)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 289)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 290)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 291)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, 1.1754943508222875e-38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 292)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 293)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 294)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 295)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, 0.5);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 296)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 297)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 298)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 299)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, 1.0);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 300)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 301)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 302)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 303)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, 6.2831854820251465);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 304)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 305)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 306)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 307)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, 3.4028234663852886e38);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 308)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 309)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 310)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 311)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, Infinity);
        expect(_ge_result).toBe(1);
    });

    _test("execution of f32_cmp_0: ge (instance 312)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 313)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 314)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 315)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -Infinity, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 316)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 317)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 318)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 319)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, Infinity, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 320)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 321)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 322)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 323)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 324)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 325)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 326)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 327)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 0.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 328)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 329)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 330)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 331)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 332)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 333)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 334)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 335)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 1.401298464324817e-45);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 336)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 337)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 338)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 339)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 340)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 341)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 342)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 343)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 1.1754943508222875e-38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 344)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 345)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 346)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 347)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 348)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 349)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 350)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 351)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 0.5);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 352)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 353)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 354)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 355)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 356)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 357)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 358)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 359)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 1.0);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 360)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 361)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 362)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 363)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 364)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 365)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 366)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 367)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 6.2831854820251465);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 368)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 369)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 370)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 371)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 372)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 373)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 374)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 375)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, 3.4028234663852886e38);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 376)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 377)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 378)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 379)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 380)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 381)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 382)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 383)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, Infinity);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 384)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 385)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 386)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 387)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 388)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 389)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 390)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 391)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, -NaN, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 392)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 393)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 394)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 395)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, -NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 396)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 397)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 398)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, NaN);
        expect(_ge_result).toBe(0);
    });

    _test("execution of f32_cmp_0: ge (instance 399)", () => {
        let _ge = module.getExport("ge");
        expect(_ge).not.toBeUndefined();
        let _ge_result = module.invoke(_ge, NaN, NaN);
        expect(_ge_result).toBe(0);
    });
});

describe("f32_cmp_1", () => {
    let _test = test;

    _test("execution of f32_cmp_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f32_cmp_2", () => {
    let _test = test;

    _test("execution of f32_cmp_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f32_cmp_3", () => {
    let _test = test;

    _test("execution of f32_cmp_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f32_cmp_4", () => {
    let _test = test;

    _test("execution of f32_cmp_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f32_cmp_5", () => {
    let _test = test;

    _test("execution of f32_cmp_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f32_cmp_6", () => {
    let _test = test;

    _test("execution of f32_cmp_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
