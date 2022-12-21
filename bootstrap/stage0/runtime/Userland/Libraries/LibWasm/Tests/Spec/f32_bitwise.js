let globalImportObject = {};
let namedModules = {};

describe("f32_bitwise_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/f32_bitwise_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of f32_bitwise_0: copysign (instance 0)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -0.0);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 1)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, 0.0);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 2)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -0.0);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 3)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, 0.0);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 4)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 5)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, 1.401298464324817e-45);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 6)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 7)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, 1.401298464324817e-45);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 8)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 9)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 10)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 11)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 12)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -0.5);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 13)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, 0.5);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 14)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -0.5);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 15)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, 0.5);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 16)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -1.0);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 17)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, 1.0);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 18)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -1.0);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 19)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, 1.0);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 20)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -6.2831854820251465);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 21)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, 6.2831854820251465);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 22)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -6.2831854820251465);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 23)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, 6.2831854820251465);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 24)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 25)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, 3.4028234663852886e38);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 26)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 27)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, 3.4028234663852886e38);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 28)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -Infinity);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 29)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, Infinity);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 30)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -Infinity);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 31)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, Infinity);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 32)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, -NaN);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 33)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.0, NaN);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 34)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, -NaN);
        expect(_copysign_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 35)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.0, NaN);
        expect(_copysign_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 36)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, -0.0);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 37)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, 0.0);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 38)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, -0.0);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 39)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, 0.0);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 40)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.401298464324817e-45,
            -1.401298464324817e-45
        );
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 41)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.401298464324817e-45,
            1.401298464324817e-45
        );
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 42)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.401298464324817e-45,
            -1.401298464324817e-45
        );
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 43)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.401298464324817e-45,
            1.401298464324817e-45
        );
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 44)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.401298464324817e-45,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 45)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.401298464324817e-45,
            1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 46)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.401298464324817e-45,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 47)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.401298464324817e-45,
            1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 48)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, -0.5);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 49)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, 0.5);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 50)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, -0.5);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 51)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, 0.5);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 52)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, -1.0);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 53)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, 1.0);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 54)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, -1.0);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 55)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, 1.0);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 56)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.401298464324817e-45,
            -6.2831854820251465
        );
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 57)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, 6.2831854820251465);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 58)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, -6.2831854820251465);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 59)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, 6.2831854820251465);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 60)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.401298464324817e-45,
            -3.4028234663852886e38
        );
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 61)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.401298464324817e-45,
            3.4028234663852886e38
        );
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 62)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.401298464324817e-45,
            -3.4028234663852886e38
        );
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 63)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.401298464324817e-45,
            3.4028234663852886e38
        );
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 64)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, -Infinity);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 65)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, Infinity);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 66)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, -Infinity);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 67)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, Infinity);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 68)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, -NaN);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 69)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.401298464324817e-45, NaN);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 70)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, -NaN);
        expect(_copysign_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 71)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.401298464324817e-45, NaN);
        expect(_copysign_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: copysign (instance 72)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, -0.0);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 73)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, 0.0);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 74)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, -0.0);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 75)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, 0.0);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 76)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            -1.401298464324817e-45
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 77)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            1.401298464324817e-45
        );
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 78)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.1754943508222875e-38,
            -1.401298464324817e-45
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 79)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.1754943508222875e-38,
            1.401298464324817e-45
        );
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 80)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 81)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 82)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.1754943508222875e-38,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 83)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.1754943508222875e-38,
            1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 84)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, -0.5);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 85)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, 0.5);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 86)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, -0.5);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 87)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, 0.5);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 88)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, -1.0);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 89)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, 1.0);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 90)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, -1.0);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 91)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, 1.0);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 92)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            -6.2831854820251465
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 93)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            6.2831854820251465
        );
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 94)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.1754943508222875e-38,
            -6.2831854820251465
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 95)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, 6.2831854820251465);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 96)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            -3.4028234663852886e38
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 97)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -1.1754943508222875e-38,
            3.4028234663852886e38
        );
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 98)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.1754943508222875e-38,
            -3.4028234663852886e38
        );
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 99)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            1.1754943508222875e-38,
            3.4028234663852886e38
        );
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 100)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, -Infinity);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 101)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, Infinity);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 102)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, -Infinity);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 103)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, Infinity);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 104)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, -NaN);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 105)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.1754943508222875e-38, NaN);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 106)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, -NaN);
        expect(_copysign_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 107)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.1754943508222875e-38, NaN);
        expect(_copysign_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 108)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -0.0);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 109)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, 0.0);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 110)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -0.0);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 111)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, 0.0);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 112)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 113)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, 1.401298464324817e-45);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 114)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 115)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, 1.401298464324817e-45);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 116)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 117)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 118)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 119)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 120)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -0.5);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 121)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, 0.5);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 122)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -0.5);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 123)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, 0.5);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 124)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -1.0);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 125)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, 1.0);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 126)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -1.0);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 127)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, 1.0);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 128)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -6.2831854820251465);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 129)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, 6.2831854820251465);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 130)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -6.2831854820251465);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 131)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, 6.2831854820251465);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 132)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 133)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, 3.4028234663852886e38);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 134)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 135)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, 3.4028234663852886e38);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 136)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -Infinity);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 137)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, Infinity);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 138)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -Infinity);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 139)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, Infinity);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 140)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, -NaN);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 141)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -0.5, NaN);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 142)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, -NaN);
        expect(_copysign_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 143)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 0.5, NaN);
        expect(_copysign_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: copysign (instance 144)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -0.0);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 145)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, 0.0);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 146)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -0.0);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 147)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, 0.0);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 148)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 149)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, 1.401298464324817e-45);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 150)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 151)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, 1.401298464324817e-45);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 152)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 153)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 154)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 155)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 156)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -0.5);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 157)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, 0.5);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 158)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -0.5);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 159)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, 0.5);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 160)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -1.0);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 161)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, 1.0);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 162)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -1.0);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 163)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, 1.0);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 164)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -6.2831854820251465);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 165)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, 6.2831854820251465);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 166)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -6.2831854820251465);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 167)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, 6.2831854820251465);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 168)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 169)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, 3.4028234663852886e38);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 170)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 171)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, 3.4028234663852886e38);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 172)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -Infinity);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 173)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, Infinity);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 174)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -Infinity);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 175)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, Infinity);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 176)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, -NaN);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 177)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -1.0, NaN);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 178)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, -NaN);
        expect(_copysign_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 179)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 1.0, NaN);
        expect(_copysign_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: copysign (instance 180)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, -0.0);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 181)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, 0.0);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 182)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -0.0);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 183)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, 0.0);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 184)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -6.2831854820251465,
            -1.401298464324817e-45
        );
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 185)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, 1.401298464324817e-45);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 186)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 187)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, 1.401298464324817e-45);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 188)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -6.2831854820251465,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 189)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -6.2831854820251465,
            1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 190)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            6.2831854820251465,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 191)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 192)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, -0.5);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 193)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, 0.5);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 194)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -0.5);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 195)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, 0.5);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 196)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, -1.0);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 197)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, 1.0);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 198)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -1.0);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 199)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, 1.0);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 200)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, -6.2831854820251465);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 201)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, 6.2831854820251465);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 202)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -6.2831854820251465);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 203)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, 6.2831854820251465);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 204)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -6.2831854820251465,
            -3.4028234663852886e38
        );
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 205)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, 3.4028234663852886e38);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 206)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 207)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, 3.4028234663852886e38);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 208)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, -Infinity);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 209)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, Infinity);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 210)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -Infinity);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 211)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, Infinity);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 212)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, -NaN);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 213)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -6.2831854820251465, NaN);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 214)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, -NaN);
        expect(_copysign_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 215)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 6.2831854820251465, NaN);
        expect(_copysign_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: copysign (instance 216)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, -0.0);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 217)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, 0.0);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 218)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, -0.0);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 219)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, 0.0);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 220)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -3.4028234663852886e38,
            -1.401298464324817e-45
        );
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 221)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -3.4028234663852886e38,
            1.401298464324817e-45
        );
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 222)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            3.4028234663852886e38,
            -1.401298464324817e-45
        );
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 223)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            3.4028234663852886e38,
            1.401298464324817e-45
        );
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 224)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -3.4028234663852886e38,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 225)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -3.4028234663852886e38,
            1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 226)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            3.4028234663852886e38,
            -1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 227)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            3.4028234663852886e38,
            1.1754943508222875e-38
        );
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 228)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, -0.5);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 229)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, 0.5);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 230)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, -0.5);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 231)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, 0.5);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 232)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, -1.0);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 233)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, 1.0);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 234)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, -1.0);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 235)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, 1.0);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 236)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -3.4028234663852886e38,
            -6.2831854820251465
        );
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 237)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, 6.2831854820251465);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 238)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, -6.2831854820251465);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 239)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, 6.2831854820251465);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 240)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -3.4028234663852886e38,
            -3.4028234663852886e38
        );
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 241)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            -3.4028234663852886e38,
            3.4028234663852886e38
        );
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 242)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            3.4028234663852886e38,
            -3.4028234663852886e38
        );
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 243)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(
            _copysign,
            3.4028234663852886e38,
            3.4028234663852886e38
        );
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 244)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, -Infinity);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 245)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, Infinity);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 246)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, -Infinity);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 247)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, Infinity);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 248)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, -NaN);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 249)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -3.4028234663852886e38, NaN);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 250)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, -NaN);
        expect(_copysign_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 251)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, 3.4028234663852886e38, NaN);
        expect(_copysign_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: copysign (instance 252)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -0.0);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 253)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, 0.0);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 254)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -0.0);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 255)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, 0.0);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 256)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 257)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, 1.401298464324817e-45);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 258)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 259)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, 1.401298464324817e-45);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 260)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 261)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 262)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 263)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 264)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -0.5);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 265)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, 0.5);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 266)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -0.5);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 267)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, 0.5);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 268)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -1.0);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 269)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, 1.0);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 270)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -1.0);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 271)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, 1.0);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 272)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -6.2831854820251465);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 273)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, 6.2831854820251465);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 274)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -6.2831854820251465);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 275)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, 6.2831854820251465);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 276)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 277)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, 3.4028234663852886e38);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 278)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 279)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, 3.4028234663852886e38);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 280)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -Infinity);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 281)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, Infinity);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 282)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -Infinity);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 283)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, Infinity);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 284)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, -NaN);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 285)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -Infinity, NaN);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 286)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, -NaN);
        expect(_copysign_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 287)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, Infinity, NaN);
        expect(_copysign_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: copysign (instance 288)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -0.0);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 289)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, 0.0);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 290)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -0.0);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 291)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, 0.0);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 292)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 293)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, 1.401298464324817e-45);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 294)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -1.401298464324817e-45);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 295)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, 1.401298464324817e-45);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 296)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 297)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 298)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -1.1754943508222875e-38);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 299)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, 1.1754943508222875e-38);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 300)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -0.5);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 301)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, 0.5);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 302)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -0.5);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 303)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, 0.5);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 304)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -1.0);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 305)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, 1.0);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 306)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -1.0);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 307)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, 1.0);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 308)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -6.2831854820251465);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 309)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, 6.2831854820251465);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 310)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -6.2831854820251465);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 311)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, 6.2831854820251465);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 312)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 313)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, 3.4028234663852886e38);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 314)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -3.4028234663852886e38);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 315)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, 3.4028234663852886e38);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 316)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -Infinity);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 317)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, Infinity);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 318)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -Infinity);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 319)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, Infinity);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 320)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, -NaN);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 321)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, -NaN, NaN);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 322)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, -NaN);
        expect(_copysign_result).toBe(-NaN);
    });

    _test("execution of f32_bitwise_0: copysign (instance 323)", () => {
        let _copysign = module.getExport("copysign");
        expect(_copysign).not.toBeUndefined();
        let _copysign_result = module.invoke(_copysign, NaN, NaN);
        expect(_copysign_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: abs (instance 0)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -0.0);
        expect(_abs_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: abs (instance 1)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, 0.0);
        expect(_abs_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: abs (instance 2)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -1.401298464324817e-45);
        expect(_abs_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: abs (instance 3)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, 1.401298464324817e-45);
        expect(_abs_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: abs (instance 4)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -1.1754943508222875e-38);
        expect(_abs_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: abs (instance 5)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, 1.1754943508222875e-38);
        expect(_abs_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: abs (instance 6)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -0.5);
        expect(_abs_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: abs (instance 7)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, 0.5);
        expect(_abs_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: abs (instance 8)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -1.0);
        expect(_abs_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: abs (instance 9)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, 1.0);
        expect(_abs_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: abs (instance 10)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -6.2831854820251465);
        expect(_abs_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: abs (instance 11)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, 6.2831854820251465);
        expect(_abs_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: abs (instance 12)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -3.4028234663852886e38);
        expect(_abs_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: abs (instance 13)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, 3.4028234663852886e38);
        expect(_abs_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: abs (instance 14)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -Infinity);
        expect(_abs_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: abs (instance 15)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, Infinity);
        expect(_abs_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: abs (instance 16)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, -NaN);
        expect(_abs_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: abs (instance 17)", () => {
        let _abs = module.getExport("abs");
        expect(_abs).not.toBeUndefined();
        let _abs_result = module.invoke(_abs, NaN);
        expect(_abs_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: neg (instance 0)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -0.0);
        expect(_neg_result).toBe(0.0);
    });

    _test("execution of f32_bitwise_0: neg (instance 1)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, 0.0);
        expect(_neg_result).toBe(-0.0);
    });

    _test("execution of f32_bitwise_0: neg (instance 2)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -1.401298464324817e-45);
        expect(_neg_result).toBe(1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: neg (instance 3)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, 1.401298464324817e-45);
        expect(_neg_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of f32_bitwise_0: neg (instance 4)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -1.1754943508222875e-38);
        expect(_neg_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: neg (instance 5)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, 1.1754943508222875e-38);
        expect(_neg_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of f32_bitwise_0: neg (instance 6)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -0.5);
        expect(_neg_result).toBe(0.5);
    });

    _test("execution of f32_bitwise_0: neg (instance 7)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, 0.5);
        expect(_neg_result).toBe(-0.5);
    });

    _test("execution of f32_bitwise_0: neg (instance 8)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -1.0);
        expect(_neg_result).toBe(1.0);
    });

    _test("execution of f32_bitwise_0: neg (instance 9)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, 1.0);
        expect(_neg_result).toBe(-1.0);
    });

    _test("execution of f32_bitwise_0: neg (instance 10)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -6.2831854820251465);
        expect(_neg_result).toBe(6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: neg (instance 11)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, 6.2831854820251465);
        expect(_neg_result).toBe(-6.2831854820251465);
    });

    _test("execution of f32_bitwise_0: neg (instance 12)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -3.4028234663852886e38);
        expect(_neg_result).toBe(3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: neg (instance 13)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, 3.4028234663852886e38);
        expect(_neg_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of f32_bitwise_0: neg (instance 14)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -Infinity);
        expect(_neg_result).toBe(Infinity);
    });

    _test("execution of f32_bitwise_0: neg (instance 15)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, Infinity);
        expect(_neg_result).toBe(-Infinity);
    });

    _test("execution of f32_bitwise_0: neg (instance 16)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, -NaN);
        expect(_neg_result).toBe(NaN);
    });

    _test("execution of f32_bitwise_0: neg (instance 17)", () => {
        let _neg = module.getExport("neg");
        expect(_neg).not.toBeUndefined();
        let _neg_result = module.invoke(_neg, NaN);
        expect(_neg_result).toBe(-NaN);
    });
});

describe("f32_bitwise_1", () => {
    let _test = test;

    _test("execution of f32_bitwise_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f32_bitwise_2", () => {
    let _test = test;

    _test("execution of f32_bitwise_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("f32_bitwise_3", () => {
    let _test = test;

    _test("execution of f32_bitwise_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
