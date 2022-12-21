let globalImportObject = {};
let namedModules = {};

describe("conversions_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/conversions_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of conversions_0: i64.extend_i32_s (instance 0)", () => {
        let _i64_extend_i32_s = module.getExport("i64.extend_i32_s");
        expect(_i64_extend_i32_s).not.toBeUndefined();
        let _i64_extend_i32_s_result = module.invoke(_i64_extend_i32_s, 0);
        expect(_i64_extend_i32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.extend_i32_s (instance 1)", () => {
        let _i64_extend_i32_s = module.getExport("i64.extend_i32_s");
        expect(_i64_extend_i32_s).not.toBeUndefined();
        let _i64_extend_i32_s_result = module.invoke(_i64_extend_i32_s, 10000);
        expect(_i64_extend_i32_s_result).toBe(10000n);
    });

    _test("execution of conversions_0: i64.extend_i32_s (instance 2)", () => {
        let _i64_extend_i32_s = module.getExport("i64.extend_i32_s");
        expect(_i64_extend_i32_s).not.toBeUndefined();
        let _i64_extend_i32_s_result = module.invoke(_i64_extend_i32_s, -10000);
        expect(_i64_extend_i32_s_result).toBe(-10000n);
    });

    _test("execution of conversions_0: i64.extend_i32_s (instance 3)", () => {
        let _i64_extend_i32_s = module.getExport("i64.extend_i32_s");
        expect(_i64_extend_i32_s).not.toBeUndefined();
        let _i64_extend_i32_s_result = module.invoke(_i64_extend_i32_s, -1);
        expect(_i64_extend_i32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.extend_i32_s (instance 4)", () => {
        let _i64_extend_i32_s = module.getExport("i64.extend_i32_s");
        expect(_i64_extend_i32_s).not.toBeUndefined();
        let _i64_extend_i32_s_result = module.invoke(_i64_extend_i32_s, 2147483647);
        expect(_i64_extend_i32_s_result).toBe(2147483647n);
    });

    _test("execution of conversions_0: i64.extend_i32_s (instance 5)", () => {
        let _i64_extend_i32_s = module.getExport("i64.extend_i32_s");
        expect(_i64_extend_i32_s).not.toBeUndefined();
        let _i64_extend_i32_s_result = module.invoke(_i64_extend_i32_s, -2147483648);
        expect(_i64_extend_i32_s_result).toBe(-2147483648n);
    });

    _test("execution of conversions_0: i64.extend_i32_u (instance 0)", () => {
        let _i64_extend_i32_u = module.getExport("i64.extend_i32_u");
        expect(_i64_extend_i32_u).not.toBeUndefined();
        let _i64_extend_i32_u_result = module.invoke(_i64_extend_i32_u, 0);
        expect(_i64_extend_i32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.extend_i32_u (instance 1)", () => {
        let _i64_extend_i32_u = module.getExport("i64.extend_i32_u");
        expect(_i64_extend_i32_u).not.toBeUndefined();
        let _i64_extend_i32_u_result = module.invoke(_i64_extend_i32_u, 10000);
        expect(_i64_extend_i32_u_result).toBe(10000n);
    });

    _test("execution of conversions_0: i64.extend_i32_u (instance 2)", () => {
        let _i64_extend_i32_u = module.getExport("i64.extend_i32_u");
        expect(_i64_extend_i32_u).not.toBeUndefined();
        let _i64_extend_i32_u_result = module.invoke(_i64_extend_i32_u, -10000);
        expect(_i64_extend_i32_u_result).toBe(4294957296n);
    });

    _test("execution of conversions_0: i64.extend_i32_u (instance 3)", () => {
        let _i64_extend_i32_u = module.getExport("i64.extend_i32_u");
        expect(_i64_extend_i32_u).not.toBeUndefined();
        let _i64_extend_i32_u_result = module.invoke(_i64_extend_i32_u, -1);
        expect(_i64_extend_i32_u_result).toBe(4294967295n);
    });

    _test("execution of conversions_0: i64.extend_i32_u (instance 4)", () => {
        let _i64_extend_i32_u = module.getExport("i64.extend_i32_u");
        expect(_i64_extend_i32_u).not.toBeUndefined();
        let _i64_extend_i32_u_result = module.invoke(_i64_extend_i32_u, 2147483647);
        expect(_i64_extend_i32_u_result).toBe(2147483647n);
    });

    _test("execution of conversions_0: i64.extend_i32_u (instance 5)", () => {
        let _i64_extend_i32_u = module.getExport("i64.extend_i32_u");
        expect(_i64_extend_i32_u).not.toBeUndefined();
        let _i64_extend_i32_u_result = module.invoke(_i64_extend_i32_u, -2147483648);
        expect(_i64_extend_i32_u_result).toBe(2147483648n);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 0)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, -1n);
        expect(_i32_wrap_i64_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 1)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, -100000n);
        expect(_i32_wrap_i64_result).toBe(-100000);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 2)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, 2147483648n);
        expect(_i32_wrap_i64_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 3)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, -2147483649n);
        expect(_i32_wrap_i64_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 4)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, -4294967296n);
        expect(_i32_wrap_i64_result).toBe(0);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 5)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, -4294967297n);
        expect(_i32_wrap_i64_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 6)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, -4294967295n);
        expect(_i32_wrap_i64_result).toBe(1);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 7)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, 0n);
        expect(_i32_wrap_i64_result).toBe(0);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 8)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, 1311768467463790320n);
        expect(_i32_wrap_i64_result).toBe(-1698898192);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 9)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, 4294967295n);
        expect(_i32_wrap_i64_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 10)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, 4294967296n);
        expect(_i32_wrap_i64_result).toBe(0);
    });

    _test("execution of conversions_0: i32.wrap_i64 (instance 11)", () => {
        let _i32_wrap_i64 = module.getExport("i32.wrap_i64");
        expect(_i32_wrap_i64).not.toBeUndefined();
        let _i32_wrap_i64_result = module.invoke(_i32_wrap_i64, 4294967297n);
        expect(_i32_wrap_i64_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 0)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, 0.0);
        expect(_i32_trunc_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 1)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -0.0);
        expect(_i32_trunc_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 2)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, 1.401298464324817e-45);
        expect(_i32_trunc_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 3)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -1.401298464324817e-45);
        expect(_i32_trunc_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 4)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, 1.0);
        expect(_i32_trunc_f32_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 5)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, 1.100000023841858);
        expect(_i32_trunc_f32_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 6)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, 1.5);
        expect(_i32_trunc_f32_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 7)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -1.0);
        expect(_i32_trunc_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 8)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -1.100000023841858);
        expect(_i32_trunc_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 9)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -1.5);
        expect(_i32_trunc_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 10)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -1.9);
        expect(_i32_trunc_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 11)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -2.0);
        expect(_i32_trunc_f32_s_result).toBe(-2);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 12)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, 2147483520.0);
        expect(_i32_trunc_f32_s_result).toBe(2147483520);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 13)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        let _i32_trunc_f32_s_result = module.invoke(_i32_trunc_f32_s, -2147483648.0);
        expect(_i32_trunc_f32_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 14)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f32_s, 2147483648.0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 15)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f32_s, -2147483904.0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 16)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f32_s, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 17)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f32_s, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 18)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 19)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 20)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_s (instance 21)", () => {
        let _i32_trunc_f32_s = module.getExport("i32.trunc_f32_s");
        expect(_i32_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 0)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 0.0);
        expect(_i32_trunc_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 1)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, -0.0);
        expect(_i32_trunc_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 2)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 1.401298464324817e-45);
        expect(_i32_trunc_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 3)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, -1.401298464324817e-45);
        expect(_i32_trunc_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 4)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 1.0);
        expect(_i32_trunc_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 5)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 1.100000023841858);
        expect(_i32_trunc_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 6)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 1.5);
        expect(_i32_trunc_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 7)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 1.9);
        expect(_i32_trunc_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 8)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 2.0);
        expect(_i32_trunc_f32_u_result).toBe(2);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 9)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 2147483648.0);
        expect(_i32_trunc_f32_u_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 10)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, 4294967040.0);
        expect(_i32_trunc_f32_u_result).toBe(-256);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 11)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, -0.8999999761581421);
        expect(_i32_trunc_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 12)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        let _i32_trunc_f32_u_result = module.invoke(_i32_trunc_f32_u, -0.9999999403953552);
        expect(_i32_trunc_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 13)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f32_u, 4294967296.0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 14)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_u, -1.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 15)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f32_u, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 16)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f32_u, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 17)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 18)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 19)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f32_u (instance 20)", () => {
        let _i32_trunc_f32_u = module.getExport("i32.trunc_f32_u");
        expect(_i32_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f32_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 0)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, 0.0);
        expect(_i32_trunc_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 1)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -0.0);
        expect(_i32_trunc_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 2)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, 5e-324);
        expect(_i32_trunc_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 3)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -5e-324);
        expect(_i32_trunc_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 4)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, 1.0);
        expect(_i32_trunc_f64_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 5)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, 1.1);
        expect(_i32_trunc_f64_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 6)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, 1.5);
        expect(_i32_trunc_f64_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 7)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -1.0);
        expect(_i32_trunc_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 8)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -1.1);
        expect(_i32_trunc_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 9)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -1.5);
        expect(_i32_trunc_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 10)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -1.9);
        expect(_i32_trunc_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 11)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -2.0);
        expect(_i32_trunc_f64_s_result).toBe(-2);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 12)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, 2147483647.0);
        expect(_i32_trunc_f64_s_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 13)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -2147483648.0);
        expect(_i32_trunc_f64_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 14)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, -2147483648.9);
        expect(_i32_trunc_f64_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 15)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        let _i32_trunc_f64_s_result = module.invoke(_i32_trunc_f64_s, 2147483647.9);
        expect(_i32_trunc_f64_s_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 16)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f64_s, 2147483648.0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 17)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f64_s, -2147483649.0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 18)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f64_s, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 19)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f64_s, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 20)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 21)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 22)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_s (instance 23)", () => {
        let _i32_trunc_f64_s = module.getExport("i32.trunc_f64_s");
        expect(_i32_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 0)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 0.0);
        expect(_i32_trunc_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 1)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, -0.0);
        expect(_i32_trunc_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 2)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 5e-324);
        expect(_i32_trunc_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 3)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, -5e-324);
        expect(_i32_trunc_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 4)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 1.0);
        expect(_i32_trunc_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 5)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 1.1);
        expect(_i32_trunc_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 6)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 1.5);
        expect(_i32_trunc_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 7)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 1.9);
        expect(_i32_trunc_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 8)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 2.0);
        expect(_i32_trunc_f64_u_result).toBe(2);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 9)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 2147483648.0);
        expect(_i32_trunc_f64_u_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 10)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 4294967295.0);
        expect(_i32_trunc_f64_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 11)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, -0.9);
        expect(_i32_trunc_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 12)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, -0.9999999999999999);
        expect(_i32_trunc_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 13)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 100000000.0);
        expect(_i32_trunc_f64_u_result).toBe(100000000);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 14)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, -0.9);
        expect(_i32_trunc_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 15)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        let _i32_trunc_f64_u_result = module.invoke(_i32_trunc_f64_u, 4294967295.9);
        expect(_i32_trunc_f64_u_result).toBe(4294967295);
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 16)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f64_u, 4294967296.0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 17)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_u, -1.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 18)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_u, 1e16).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 19)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_u, 1e30).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 20)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i32_trunc_f64_u, 9.223372036854776e18)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 21)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f64_u, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 22)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_trunc_f64_u, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 23)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 24)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 25)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i32.trunc_f64_u (instance 26)", () => {
        let _i32_trunc_f64_u = module.getExport("i32.trunc_f64_u");
        expect(_i32_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i32_trunc_f64_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 0)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, 0.0);
        expect(_i64_trunc_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 1)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -0.0);
        expect(_i64_trunc_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 2)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, 1.401298464324817e-45);
        expect(_i64_trunc_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 3)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -1.401298464324817e-45);
        expect(_i64_trunc_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 4)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, 1.0);
        expect(_i64_trunc_f32_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 5)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, 1.100000023841858);
        expect(_i64_trunc_f32_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 6)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, 1.5);
        expect(_i64_trunc_f32_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 7)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -1.0);
        expect(_i64_trunc_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 8)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -1.100000023841858);
        expect(_i64_trunc_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 9)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -1.5);
        expect(_i64_trunc_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 10)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -1.9);
        expect(_i64_trunc_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 11)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -2.0);
        expect(_i64_trunc_f32_s_result).toBe(-2n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 12)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, 4294967296.0);
        expect(_i64_trunc_f32_s_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 13)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -4294967296.0);
        expect(_i64_trunc_f32_s_result).toBe(-4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 14)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, 9.223371487098962e18);
        expect(_i64_trunc_f32_s_result).toBe(9223371487098961920n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 15)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        let _i64_trunc_f32_s_result = module.invoke(_i64_trunc_f32_s, -9.223372036854776e18);
        expect(_i64_trunc_f32_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 16)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_trunc_f32_s, 9.223372036854776e18)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 17)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_trunc_f32_s, -9.223373136366404e18)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 18)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f32_s, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 19)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f32_s, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 20)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 21)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 22)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_s (instance 23)", () => {
        let _i64_trunc_f32_s = module.getExport("i64.trunc_f32_s");
        expect(_i64_trunc_f32_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 0)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, 0.0);
        expect(_i64_trunc_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 1)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, -0.0);
        expect(_i64_trunc_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 2)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, 1.401298464324817e-45);
        expect(_i64_trunc_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 3)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, -1.401298464324817e-45);
        expect(_i64_trunc_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 4)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, 1.0);
        expect(_i64_trunc_f32_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 5)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, 1.100000023841858);
        expect(_i64_trunc_f32_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 6)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, 1.5);
        expect(_i64_trunc_f32_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 7)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, 4294967296.0);
        expect(_i64_trunc_f32_u_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 8)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, 1.8446742974197924e19);
        expect(_i64_trunc_f32_u_result).toBe(-1099511627776n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 9)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, -0.8999999761581421);
        expect(_i64_trunc_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 10)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        let _i64_trunc_f32_u_result = module.invoke(_i64_trunc_f32_u, -0.9999999403953552);
        expect(_i64_trunc_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 11)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_trunc_f32_u, 1.8446744073709552e19)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 12)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_u, -1.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 13)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f32_u, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 14)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f32_u, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 15)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 16)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 17)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f32_u (instance 18)", () => {
        let _i64_trunc_f32_u = module.getExport("i64.trunc_f32_u");
        expect(_i64_trunc_f32_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f32_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 0)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, 0.0);
        expect(_i64_trunc_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 1)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -0.0);
        expect(_i64_trunc_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 2)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, 5e-324);
        expect(_i64_trunc_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 3)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -5e-324);
        expect(_i64_trunc_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 4)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, 1.0);
        expect(_i64_trunc_f64_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 5)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, 1.1);
        expect(_i64_trunc_f64_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 6)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, 1.5);
        expect(_i64_trunc_f64_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 7)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -1.0);
        expect(_i64_trunc_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 8)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -1.1);
        expect(_i64_trunc_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 9)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -1.5);
        expect(_i64_trunc_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 10)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -1.9);
        expect(_i64_trunc_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 11)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -2.0);
        expect(_i64_trunc_f64_s_result).toBe(-2n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 12)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, 4294967296.0);
        expect(_i64_trunc_f64_s_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 13)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -4294967296.0);
        expect(_i64_trunc_f64_s_result).toBe(-4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 14)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, 9.223372036854775e18);
        expect(_i64_trunc_f64_s_result).toBe(9223372036854774784n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 15)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        let _i64_trunc_f64_s_result = module.invoke(_i64_trunc_f64_s, -9.223372036854776e18);
        expect(_i64_trunc_f64_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 16)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_trunc_f64_s, 9.223372036854776e18)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 17)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_trunc_f64_s, -9.223372036854778e18)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 18)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f64_s, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 19)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f64_s, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 20)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 21)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_s, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 22)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_s (instance 23)", () => {
        let _i64_trunc_f64_s = module.getExport("i64.trunc_f64_s");
        expect(_i64_trunc_f64_s).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_s, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 0)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 0.0);
        expect(_i64_trunc_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 1)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, -0.0);
        expect(_i64_trunc_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 2)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 5e-324);
        expect(_i64_trunc_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 3)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, -5e-324);
        expect(_i64_trunc_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 4)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 1.0);
        expect(_i64_trunc_f64_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 5)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 1.1);
        expect(_i64_trunc_f64_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 6)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 1.5);
        expect(_i64_trunc_f64_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 7)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 4294967295.0);
        expect(_i64_trunc_f64_u_result).toBe(4294967295n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 8)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 4294967296.0);
        expect(_i64_trunc_f64_u_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 9)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 1.844674407370955e19);
        expect(_i64_trunc_f64_u_result).toBe(-2048n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 10)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, -0.9);
        expect(_i64_trunc_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 11)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, -0.9999999999999999);
        expect(_i64_trunc_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 12)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 100000000.0);
        expect(_i64_trunc_f64_u_result).toBe(100000000n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 13)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 1e16);
        expect(_i64_trunc_f64_u_result).toBe(10000000000000000n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 14)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        let _i64_trunc_f64_u_result = module.invoke(_i64_trunc_f64_u, 9.223372036854776e18);
        expect(_i64_trunc_f64_u_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 15)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_trunc_f64_u, 1.8446744073709552e19)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 16)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_u, -1.0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 17)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f64_u, Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 18)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_trunc_f64_u, -Infinity).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 19)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 20)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_u, NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 21)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: i64.trunc_f64_u (instance 22)", () => {
        let _i64_trunc_f64_u = module.getExport("i64.trunc_f64_u");
        expect(_i64_trunc_f64_u).not.toBeUndefined();
        expect(() => module.invoke(_i64_trunc_f64_u, -NaN).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 0)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, 1);
        expect(_f32_convert_i32_s_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 1)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, -1);
        expect(_f32_convert_i32_s_result).toBe(-1.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 2)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, 0);
        expect(_f32_convert_i32_s_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 3)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, 2147483647);
        expect(_f32_convert_i32_s_result).toBe(2147483648.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 4)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, -2147483648);
        expect(_f32_convert_i32_s_result).toBe(-2147483648.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 5)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, 1234567890);
        expect(_f32_convert_i32_s_result).toBe(1234567936.0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 0)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, 0.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 1)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -0.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 2)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(
            _i32_trunc_sat_f32_s,
            1.401298464324817e-45
        );
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 3)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(
            _i32_trunc_sat_f32_s,
            -1.401298464324817e-45
        );
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 4)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, 1.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 5)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, 1.100000023841858);
        expect(_i32_trunc_sat_f32_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 6)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, 1.5);
        expect(_i32_trunc_sat_f32_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 7)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -1.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 8)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -1.100000023841858);
        expect(_i32_trunc_sat_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 9)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -1.5);
        expect(_i32_trunc_sat_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 10)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -1.9);
        expect(_i32_trunc_sat_f32_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 11)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -2.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(-2);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 12)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, 2147483520.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(2147483520);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 13)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -2147483648.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 14)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, 2147483648.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 15)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -2147483904.0);
        expect(_i32_trunc_sat_f32_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 16)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, Infinity);
        expect(_i32_trunc_sat_f32_s_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 17)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -Infinity);
        expect(_i32_trunc_sat_f32_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 18)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, NaN);
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 19)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, NaN);
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 20)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -NaN);
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_s (instance 21)", () => {
        let _i32_trunc_sat_f32_s = module.getExport("i32.trunc_sat_f32_s");
        expect(_i32_trunc_sat_f32_s).not.toBeUndefined();
        let _i32_trunc_sat_f32_s_result = module.invoke(_i32_trunc_sat_f32_s, -NaN);
        expect(_i32_trunc_sat_f32_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 0)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 0.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 1)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, -0.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 2)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(
            _i32_trunc_sat_f32_u,
            1.401298464324817e-45
        );
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 3)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(
            _i32_trunc_sat_f32_u,
            -1.401298464324817e-45
        );
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 4)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 1.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 5)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 1.100000023841858);
        expect(_i32_trunc_sat_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 6)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 1.5);
        expect(_i32_trunc_sat_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 7)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 1.9);
        expect(_i32_trunc_sat_f32_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 8)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 2.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(2);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 9)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 2147483648.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 10)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 4294967040.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(-256);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 11)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, -0.8999999761581421);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 12)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, -0.9999999403953552);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 13)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, 4294967296.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 14)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, -1.0);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 15)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, Infinity);
        expect(_i32_trunc_sat_f32_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 16)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, -Infinity);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 17)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, NaN);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 18)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, NaN);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 19)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, -NaN);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f32_u (instance 20)", () => {
        let _i32_trunc_sat_f32_u = module.getExport("i32.trunc_sat_f32_u");
        expect(_i32_trunc_sat_f32_u).not.toBeUndefined();
        let _i32_trunc_sat_f32_u_result = module.invoke(_i32_trunc_sat_f32_u, -NaN);
        expect(_i32_trunc_sat_f32_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 0)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, 0.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 1)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -0.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 2)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, 5e-324);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 3)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -5e-324);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 4)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, 1.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 5)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, 1.1);
        expect(_i32_trunc_sat_f64_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 6)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, 1.5);
        expect(_i32_trunc_sat_f64_s_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 7)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -1.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 8)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -1.1);
        expect(_i32_trunc_sat_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 9)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -1.5);
        expect(_i32_trunc_sat_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 10)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -1.9);
        expect(_i32_trunc_sat_f64_s_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 11)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -2.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(-2);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 12)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, 2147483647.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 13)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -2147483648.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 14)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, 2147483648.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 15)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -2147483649.0);
        expect(_i32_trunc_sat_f64_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 16)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, Infinity);
        expect(_i32_trunc_sat_f64_s_result).toBe(2147483647);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 17)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -Infinity);
        expect(_i32_trunc_sat_f64_s_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 18)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, NaN);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 19)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, NaN);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 20)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -NaN);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_s (instance 21)", () => {
        let _i32_trunc_sat_f64_s = module.getExport("i32.trunc_sat_f64_s");
        expect(_i32_trunc_sat_f64_s).not.toBeUndefined();
        let _i32_trunc_sat_f64_s_result = module.invoke(_i32_trunc_sat_f64_s, -NaN);
        expect(_i32_trunc_sat_f64_s_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 0)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 0.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 1)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -0.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 2)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 5e-324);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 3)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -5e-324);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 4)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 1.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 5)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 1.1);
        expect(_i32_trunc_sat_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 6)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 1.5);
        expect(_i32_trunc_sat_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 7)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 1.9);
        expect(_i32_trunc_sat_f64_u_result).toBe(1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 8)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 2.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(2);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 9)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 2147483648.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 10)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 4294967295.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 11)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -0.9);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 12)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -0.9999999999999999);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 13)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 100000000.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(100000000);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 14)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 4294967296.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 15)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -1.0);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 16)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 1e16);
        expect(_i32_trunc_sat_f64_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 17)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 1e30);
        expect(_i32_trunc_sat_f64_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 18)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, 9.223372036854776e18);
        expect(_i32_trunc_sat_f64_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 19)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, Infinity);
        expect(_i32_trunc_sat_f64_u_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 20)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -Infinity);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 21)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, NaN);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 22)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, NaN);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 23)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -NaN);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i32.trunc_sat_f64_u (instance 24)", () => {
        let _i32_trunc_sat_f64_u = module.getExport("i32.trunc_sat_f64_u");
        expect(_i32_trunc_sat_f64_u).not.toBeUndefined();
        let _i32_trunc_sat_f64_u_result = module.invoke(_i32_trunc_sat_f64_u, -NaN);
        expect(_i32_trunc_sat_f64_u_result).toBe(0);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 0)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, 0.0);
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 1)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -0.0);
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 2)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(
            _i64_trunc_sat_f32_s,
            1.401298464324817e-45
        );
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 3)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(
            _i64_trunc_sat_f32_s,
            -1.401298464324817e-45
        );
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 4)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, 1.0);
        expect(_i64_trunc_sat_f32_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 5)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, 1.100000023841858);
        expect(_i64_trunc_sat_f32_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 6)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, 1.5);
        expect(_i64_trunc_sat_f32_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 7)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -1.0);
        expect(_i64_trunc_sat_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 8)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -1.100000023841858);
        expect(_i64_trunc_sat_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 9)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -1.5);
        expect(_i64_trunc_sat_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 10)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -1.9);
        expect(_i64_trunc_sat_f32_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 11)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -2.0);
        expect(_i64_trunc_sat_f32_s_result).toBe(-2n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 12)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, 4294967296.0);
        expect(_i64_trunc_sat_f32_s_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 13)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -4294967296.0);
        expect(_i64_trunc_sat_f32_s_result).toBe(-4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 14)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, 9.223371487098962e18);
        expect(_i64_trunc_sat_f32_s_result).toBe(9223371487098961920n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 15)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(
            _i64_trunc_sat_f32_s,
            -9.223372036854776e18
        );
        expect(_i64_trunc_sat_f32_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 16)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, 9.223372036854776e18);
        expect(_i64_trunc_sat_f32_s_result).toBe(9223372036854775807n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 17)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(
            _i64_trunc_sat_f32_s,
            -9.223373136366404e18
        );
        expect(_i64_trunc_sat_f32_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 18)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, Infinity);
        expect(_i64_trunc_sat_f32_s_result).toBe(9223372036854775807n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 19)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -Infinity);
        expect(_i64_trunc_sat_f32_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 20)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, NaN);
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 21)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, NaN);
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 22)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -NaN);
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_s (instance 23)", () => {
        let _i64_trunc_sat_f32_s = module.getExport("i64.trunc_sat_f32_s");
        expect(_i64_trunc_sat_f32_s).not.toBeUndefined();
        let _i64_trunc_sat_f32_s_result = module.invoke(_i64_trunc_sat_f32_s, -NaN);
        expect(_i64_trunc_sat_f32_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 0)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, 0.0);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 1)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, -0.0);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 2)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(
            _i64_trunc_sat_f32_u,
            1.401298464324817e-45
        );
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 3)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(
            _i64_trunc_sat_f32_u,
            -1.401298464324817e-45
        );
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 4)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, 1.0);
        expect(_i64_trunc_sat_f32_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 5)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, 1.100000023841858);
        expect(_i64_trunc_sat_f32_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 6)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, 1.5);
        expect(_i64_trunc_sat_f32_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 7)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, 4294967296.0);
        expect(_i64_trunc_sat_f32_u_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 8)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(
            _i64_trunc_sat_f32_u,
            1.8446742974197924e19
        );
        expect(_i64_trunc_sat_f32_u_result).toBe(-1099511627776n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 9)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, -0.8999999761581421);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 10)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, -0.9999999403953552);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 11)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(
            _i64_trunc_sat_f32_u,
            1.8446744073709552e19
        );
        expect(_i64_trunc_sat_f32_u_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 12)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, -1.0);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 13)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, Infinity);
        expect(_i64_trunc_sat_f32_u_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 14)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, -Infinity);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 15)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, NaN);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 16)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, NaN);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 17)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, -NaN);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f32_u (instance 18)", () => {
        let _i64_trunc_sat_f32_u = module.getExport("i64.trunc_sat_f32_u");
        expect(_i64_trunc_sat_f32_u).not.toBeUndefined();
        let _i64_trunc_sat_f32_u_result = module.invoke(_i64_trunc_sat_f32_u, -NaN);
        expect(_i64_trunc_sat_f32_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 0)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 0.0);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 1)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -0.0);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 2)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 5e-324);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 3)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -5e-324);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 4)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 1.0);
        expect(_i64_trunc_sat_f64_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 5)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 1.1);
        expect(_i64_trunc_sat_f64_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 6)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 1.5);
        expect(_i64_trunc_sat_f64_s_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 7)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -1.0);
        expect(_i64_trunc_sat_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 8)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -1.1);
        expect(_i64_trunc_sat_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 9)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -1.5);
        expect(_i64_trunc_sat_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 10)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -1.9);
        expect(_i64_trunc_sat_f64_s_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 11)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -2.0);
        expect(_i64_trunc_sat_f64_s_result).toBe(-2n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 12)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 4294967296.0);
        expect(_i64_trunc_sat_f64_s_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 13)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -4294967296.0);
        expect(_i64_trunc_sat_f64_s_result).toBe(-4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 14)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 9.223372036854775e18);
        expect(_i64_trunc_sat_f64_s_result).toBe(9223372036854774784n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 15)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(
            _i64_trunc_sat_f64_s,
            -9.223372036854776e18
        );
        expect(_i64_trunc_sat_f64_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 16)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, 9.223372036854776e18);
        expect(_i64_trunc_sat_f64_s_result).toBe(9223372036854775807n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 17)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(
            _i64_trunc_sat_f64_s,
            -9.223372036854778e18
        );
        expect(_i64_trunc_sat_f64_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 18)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, Infinity);
        expect(_i64_trunc_sat_f64_s_result).toBe(9223372036854775807n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 19)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -Infinity);
        expect(_i64_trunc_sat_f64_s_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 20)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, NaN);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 21)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, NaN);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 22)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -NaN);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_s (instance 23)", () => {
        let _i64_trunc_sat_f64_s = module.getExport("i64.trunc_sat_f64_s");
        expect(_i64_trunc_sat_f64_s).not.toBeUndefined();
        let _i64_trunc_sat_f64_s_result = module.invoke(_i64_trunc_sat_f64_s, -NaN);
        expect(_i64_trunc_sat_f64_s_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 0)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 0.0);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 1)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -0.0);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 2)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 5e-324);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 3)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -5e-324);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 4)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 1.0);
        expect(_i64_trunc_sat_f64_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 5)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 1.1);
        expect(_i64_trunc_sat_f64_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 6)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 1.5);
        expect(_i64_trunc_sat_f64_u_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 7)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 4294967295.0);
        expect(_i64_trunc_sat_f64_u_result).toBe(4294967295n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 8)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 4294967296.0);
        expect(_i64_trunc_sat_f64_u_result).toBe(4294967296n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 9)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 1.844674407370955e19);
        expect(_i64_trunc_sat_f64_u_result).toBe(-2048n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 10)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -0.9);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 11)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -0.9999999999999999);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 12)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 100000000.0);
        expect(_i64_trunc_sat_f64_u_result).toBe(100000000n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 13)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 1e16);
        expect(_i64_trunc_sat_f64_u_result).toBe(10000000000000000n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 14)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, 9.223372036854776e18);
        expect(_i64_trunc_sat_f64_u_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 15)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(
            _i64_trunc_sat_f64_u,
            1.8446744073709552e19
        );
        expect(_i64_trunc_sat_f64_u_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 16)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -1.0);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 17)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, Infinity);
        expect(_i64_trunc_sat_f64_u_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 18)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -Infinity);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 19)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, NaN);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 20)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, NaN);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 21)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -NaN);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.trunc_sat_f64_u (instance 22)", () => {
        let _i64_trunc_sat_f64_u = module.getExport("i64.trunc_sat_f64_u");
        expect(_i64_trunc_sat_f64_u).not.toBeUndefined();
        let _i64_trunc_sat_f64_u_result = module.invoke(_i64_trunc_sat_f64_u, -NaN);
        expect(_i64_trunc_sat_f64_u_result).toBe(0n);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 6)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, 16777217);
        expect(_f32_convert_i32_s_result).toBe(16777216.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 7)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, -16777217);
        expect(_f32_convert_i32_s_result).toBe(-16777216.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 8)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, 16777219);
        expect(_f32_convert_i32_s_result).toBe(16777220.0);
    });

    _test("execution of conversions_0: f32.convert_i32_s (instance 9)", () => {
        let _f32_convert_i32_s = module.getExport("f32.convert_i32_s");
        expect(_f32_convert_i32_s).not.toBeUndefined();
        let _f32_convert_i32_s_result = module.invoke(_f32_convert_i32_s, -16777219);
        expect(_f32_convert_i32_s_result).toBe(-16777220.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 0)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 1n);
        expect(_f32_convert_i64_s_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 1)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, -1n);
        expect(_f32_convert_i64_s_result).toBe(-1.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 2)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 0n);
        expect(_f32_convert_i64_s_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 3)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 9223372036854775807n);
        expect(_f32_convert_i64_s_result).toBe(9.223372036854776e18);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 4)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, -9223372036854775808n);
        expect(_f32_convert_i64_s_result).toBe(-9.223372036854776e18);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 5)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 314159265358979n);
        expect(_f32_convert_i64_s_result).toBe(314159275180032.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 6)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 16777217n);
        expect(_f32_convert_i64_s_result).toBe(16777216.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 7)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, -16777217n);
        expect(_f32_convert_i64_s_result).toBe(-16777216.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 8)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 16777219n);
        expect(_f32_convert_i64_s_result).toBe(16777220.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 9)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, -16777219n);
        expect(_f32_convert_i64_s_result).toBe(-16777220.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 10)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 9223371212221054977n);
        expect(_f32_convert_i64_s_result).toBe(9.223371487098962e18);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 11)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, -9223371761976868863n);
        expect(_f32_convert_i64_s_result).toBe(-9.223371487098962e18);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 12)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, 9007199791611905n);
        expect(_f32_convert_i64_s_result).toBe(9007200328482816.0);
    });

    _test("execution of conversions_0: f32.convert_i64_s (instance 13)", () => {
        let _f32_convert_i64_s = module.getExport("f32.convert_i64_s");
        expect(_f32_convert_i64_s).not.toBeUndefined();
        let _f32_convert_i64_s_result = module.invoke(_f32_convert_i64_s, -9007199791611905n);
        expect(_f32_convert_i64_s_result).toBe(-9007200328482816.0);
    });

    _test("execution of conversions_0: f64.convert_i32_s (instance 0)", () => {
        let _f64_convert_i32_s = module.getExport("f64.convert_i32_s");
        expect(_f64_convert_i32_s).not.toBeUndefined();
        let _f64_convert_i32_s_result = module.invoke(_f64_convert_i32_s, 1);
        expect(_f64_convert_i32_s_result).toBe(1.0);
    });

    _test("execution of conversions_0: f64.convert_i32_s (instance 1)", () => {
        let _f64_convert_i32_s = module.getExport("f64.convert_i32_s");
        expect(_f64_convert_i32_s).not.toBeUndefined();
        let _f64_convert_i32_s_result = module.invoke(_f64_convert_i32_s, -1);
        expect(_f64_convert_i32_s_result).toBe(-1.0);
    });

    _test("execution of conversions_0: f64.convert_i32_s (instance 2)", () => {
        let _f64_convert_i32_s = module.getExport("f64.convert_i32_s");
        expect(_f64_convert_i32_s).not.toBeUndefined();
        let _f64_convert_i32_s_result = module.invoke(_f64_convert_i32_s, 0);
        expect(_f64_convert_i32_s_result).toBe(0.0);
    });

    _test("execution of conversions_0: f64.convert_i32_s (instance 3)", () => {
        let _f64_convert_i32_s = module.getExport("f64.convert_i32_s");
        expect(_f64_convert_i32_s).not.toBeUndefined();
        let _f64_convert_i32_s_result = module.invoke(_f64_convert_i32_s, 2147483647);
        expect(_f64_convert_i32_s_result).toBe(2147483647.0);
    });

    _test("execution of conversions_0: f64.convert_i32_s (instance 4)", () => {
        let _f64_convert_i32_s = module.getExport("f64.convert_i32_s");
        expect(_f64_convert_i32_s).not.toBeUndefined();
        let _f64_convert_i32_s_result = module.invoke(_f64_convert_i32_s, -2147483648);
        expect(_f64_convert_i32_s_result).toBe(-2147483648.0);
    });

    _test("execution of conversions_0: f64.convert_i32_s (instance 5)", () => {
        let _f64_convert_i32_s = module.getExport("f64.convert_i32_s");
        expect(_f64_convert_i32_s).not.toBeUndefined();
        let _f64_convert_i32_s_result = module.invoke(_f64_convert_i32_s, 987654321);
        expect(_f64_convert_i32_s_result).toBe(987654321.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 0)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, 1n);
        expect(_f64_convert_i64_s_result).toBe(1.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 1)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, -1n);
        expect(_f64_convert_i64_s_result).toBe(-1.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 2)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, 0n);
        expect(_f64_convert_i64_s_result).toBe(0.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 3)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, 9223372036854775807n);
        expect(_f64_convert_i64_s_result).toBe(9.223372036854776e18);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 4)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, -9223372036854775808n);
        expect(_f64_convert_i64_s_result).toBe(-9.223372036854776e18);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 5)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, 4669201609102990n);
        expect(_f64_convert_i64_s_result).toBe(4669201609102990.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 6)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, 9007199254740993n);
        expect(_f64_convert_i64_s_result).toBe(9007199254740992.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 7)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, -9007199254740993n);
        expect(_f64_convert_i64_s_result).toBe(-9007199254740992.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 8)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, 9007199254740995n);
        expect(_f64_convert_i64_s_result).toBe(9007199254740996.0);
    });

    _test("execution of conversions_0: f64.convert_i64_s (instance 9)", () => {
        let _f64_convert_i64_s = module.getExport("f64.convert_i64_s");
        expect(_f64_convert_i64_s).not.toBeUndefined();
        let _f64_convert_i64_s_result = module.invoke(_f64_convert_i64_s, -9007199254740995n);
        expect(_f64_convert_i64_s_result).toBe(-9007199254740996.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 0)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, 1);
        expect(_f32_convert_i32_u_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 1)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, 0);
        expect(_f32_convert_i32_u_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 2)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, 2147483647);
        expect(_f32_convert_i32_u_result).toBe(2147483648.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 3)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -2147483648);
        expect(_f32_convert_i32_u_result).toBe(2147483648.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 4)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, 305419896);
        expect(_f32_convert_i32_u_result).toBe(305419904.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 5)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -1);
        expect(_f32_convert_i32_u_result).toBe(4294967296.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 6)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -2147483520);
        expect(_f32_convert_i32_u_result).toBe(2147483648.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 7)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -2147483519);
        expect(_f32_convert_i32_u_result).toBe(2147483904.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 8)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -2147483518);
        expect(_f32_convert_i32_u_result).toBe(2147483904.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 9)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -384);
        expect(_f32_convert_i32_u_result).toBe(4294966784.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 10)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -383);
        expect(_f32_convert_i32_u_result).toBe(4294967040.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 11)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, -382);
        expect(_f32_convert_i32_u_result).toBe(4294967040.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 12)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, 16777217);
        expect(_f32_convert_i32_u_result).toBe(16777216.0);
    });

    _test("execution of conversions_0: f32.convert_i32_u (instance 13)", () => {
        let _f32_convert_i32_u = module.getExport("f32.convert_i32_u");
        expect(_f32_convert_i32_u).not.toBeUndefined();
        let _f32_convert_i32_u_result = module.invoke(_f32_convert_i32_u, 16777219);
        expect(_f32_convert_i32_u_result).toBe(16777220.0);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 0)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, 1n);
        expect(_f32_convert_i64_u_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 1)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, 0n);
        expect(_f32_convert_i64_u_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 2)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, 9223372036854775807n);
        expect(_f32_convert_i64_u_result).toBe(9.223372036854776e18);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 3)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, -9223372036854775808n);
        expect(_f32_convert_i64_u_result).toBe(9.223372036854776e18);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 4)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, -1n);
        expect(_f32_convert_i64_u_result).toBe(1.8446744073709552e19);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 5)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, 16777217n);
        expect(_f32_convert_i64_u_result).toBe(16777216.0);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 6)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, 16777219n);
        expect(_f32_convert_i64_u_result).toBe(16777220.0);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 7)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, 9007199791611905n);
        expect(_f32_convert_i64_u_result).toBe(9007200328482816.0);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 8)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, 9223371761976868863n);
        expect(_f32_convert_i64_u_result).toBe(9.223371487098962e18);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 9)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, -9223371487098961919n);
        expect(_f32_convert_i64_u_result).toBe(9.223373136366404e18);
    });

    _test("execution of conversions_0: f32.convert_i64_u (instance 10)", () => {
        let _f32_convert_i64_u = module.getExport("f32.convert_i64_u");
        expect(_f32_convert_i64_u).not.toBeUndefined();
        let _f32_convert_i64_u_result = module.invoke(_f32_convert_i64_u, -1649267441663n);
        expect(_f32_convert_i64_u_result).toBe(1.8446742974197924e19);
    });

    _test("execution of conversions_0: f64.convert_i32_u (instance 0)", () => {
        let _f64_convert_i32_u = module.getExport("f64.convert_i32_u");
        expect(_f64_convert_i32_u).not.toBeUndefined();
        let _f64_convert_i32_u_result = module.invoke(_f64_convert_i32_u, 1);
        expect(_f64_convert_i32_u_result).toBe(1.0);
    });

    _test("execution of conversions_0: f64.convert_i32_u (instance 1)", () => {
        let _f64_convert_i32_u = module.getExport("f64.convert_i32_u");
        expect(_f64_convert_i32_u).not.toBeUndefined();
        let _f64_convert_i32_u_result = module.invoke(_f64_convert_i32_u, 0);
        expect(_f64_convert_i32_u_result).toBe(0.0);
    });

    _test("execution of conversions_0: f64.convert_i32_u (instance 2)", () => {
        let _f64_convert_i32_u = module.getExport("f64.convert_i32_u");
        expect(_f64_convert_i32_u).not.toBeUndefined();
        let _f64_convert_i32_u_result = module.invoke(_f64_convert_i32_u, 2147483647);
        expect(_f64_convert_i32_u_result).toBe(2147483647.0);
    });

    _test("execution of conversions_0: f64.convert_i32_u (instance 3)", () => {
        let _f64_convert_i32_u = module.getExport("f64.convert_i32_u");
        expect(_f64_convert_i32_u).not.toBeUndefined();
        let _f64_convert_i32_u_result = module.invoke(_f64_convert_i32_u, -2147483648);
        expect(_f64_convert_i32_u_result).toBe(2147483648.0);
    });

    _test("execution of conversions_0: f64.convert_i32_u (instance 4)", () => {
        let _f64_convert_i32_u = module.getExport("f64.convert_i32_u");
        expect(_f64_convert_i32_u).not.toBeUndefined();
        let _f64_convert_i32_u_result = module.invoke(_f64_convert_i32_u, -1);
        expect(_f64_convert_i32_u_result).toBe(4294967295.0);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 0)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, 1n);
        expect(_f64_convert_i64_u_result).toBe(1.0);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 1)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, 0n);
        expect(_f64_convert_i64_u_result).toBe(0.0);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 2)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, 9223372036854775807n);
        expect(_f64_convert_i64_u_result).toBe(9.223372036854776e18);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 3)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -9223372036854775808n);
        expect(_f64_convert_i64_u_result).toBe(9.223372036854776e18);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 4)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -1n);
        expect(_f64_convert_i64_u_result).toBe(1.8446744073709552e19);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 5)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -9223372036854774784n);
        expect(_f64_convert_i64_u_result).toBe(9.223372036854776e18);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 6)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -9223372036854774783n);
        expect(_f64_convert_i64_u_result).toBe(9.223372036854778e18);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 7)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -9223372036854774782n);
        expect(_f64_convert_i64_u_result).toBe(9.223372036854778e18);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 8)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -3072n);
        expect(_f64_convert_i64_u_result).toBe(1.8446744073709548e19);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 9)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -3071n);
        expect(_f64_convert_i64_u_result).toBe(1.844674407370955e19);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 10)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, -3070n);
        expect(_f64_convert_i64_u_result).toBe(1.844674407370955e19);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 11)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, 9007199254740993n);
        expect(_f64_convert_i64_u_result).toBe(9007199254740992.0);
    });

    _test("execution of conversions_0: f64.convert_i64_u (instance 12)", () => {
        let _f64_convert_i64_u = module.getExport("f64.convert_i64_u");
        expect(_f64_convert_i64_u).not.toBeUndefined();
        let _f64_convert_i64_u_result = module.invoke(_f64_convert_i64_u, 9007199254740995n);
        expect(_f64_convert_i64_u_result).toBe(9007199254740996.0);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 0)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, 0.0);
        expect(_f64_promote_f32_result).toBe(0.0);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 1)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, -0.0);
        expect(_f64_promote_f32_result).toBe(-0.0);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 2)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, 1.401298464324817e-45);
        expect(_f64_promote_f32_result).toBe(1.401298464324817e-45);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 3)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, -1.401298464324817e-45);
        expect(_f64_promote_f32_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 4)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, 1.0);
        expect(_f64_promote_f32_result).toBe(1.0);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 5)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, -1.0);
        expect(_f64_promote_f32_result).toBe(-1.0);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 6)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, -3.4028234663852886e38);
        expect(_f64_promote_f32_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 7)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, 3.4028234663852886e38);
        expect(_f64_promote_f32_result).toBe(3.4028234663852886e38);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 8)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, 1.504632769052528e-36);
        expect(_f64_promote_f32_result).toBe(1.504632769052528e-36);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 9)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, 6.6382536710104395e37);
        expect(_f64_promote_f32_result).toBe(6.6382536710104395e37);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 10)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, Infinity);
        expect(_f64_promote_f32_result).toBe(Infinity);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 11)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, -Infinity);
        expect(_f64_promote_f32_result).toBe(-Infinity);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 12)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, NaN);
        expect(_f64_promote_f32_result).toBe(NaN);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 13)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, NaN);
        expect(_f64_promote_f32_result).toBe(NaN);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 14)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, -NaN);
        expect(_f64_promote_f32_result).toBe(NaN);
    });

    _test("execution of conversions_0: f64.promote_f32 (instance 15)", () => {
        let _f64_promote_f32 = module.getExport("f64.promote_f32");
        expect(_f64_promote_f32).not.toBeUndefined();
        let _f64_promote_f32_result = module.invoke(_f64_promote_f32, -NaN);
        expect(_f64_promote_f32_result).toBe(NaN);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 0)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 0.0);
        expect(_f32_demote_f64_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 1)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -0.0);
        expect(_f32_demote_f64_result).toBe(-0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 2)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 5e-324);
        expect(_f32_demote_f64_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 3)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -5e-324);
        expect(_f32_demote_f64_result).toBe(-0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 4)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.0);
        expect(_f32_demote_f64_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 5)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -1.0);
        expect(_f32_demote_f64_result).toBe(-1.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 6)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.1754942807573643e-38);
        expect(_f32_demote_f64_result).toBe(1.1754943508222875e-38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 7)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -1.1754942807573643e-38);
        expect(_f32_demote_f64_result).toBe(-1.1754943508222875e-38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 8)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.1754942807573642e-38);
        expect(_f32_demote_f64_result).toBe(1.1754942106924411e-38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 9)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -1.1754942807573642e-38);
        expect(_f32_demote_f64_result).toBe(-1.1754942106924411e-38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 10)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.401298464324817e-45);
        expect(_f32_demote_f64_result).toBe(1.401298464324817e-45);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 11)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -1.401298464324817e-45);
        expect(_f32_demote_f64_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 12)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 3.4028233649732406e38);
        expect(_f32_demote_f64_result).toBe(3.4028232635611926e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 13)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -3.4028233649732406e38);
        expect(_f32_demote_f64_result).toBe(-3.4028232635611926e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 14)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 3.402823364973241e38);
        expect(_f32_demote_f64_result).toBe(3.4028234663852886e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 15)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -3.402823364973241e38);
        expect(_f32_demote_f64_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 16)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 3.4028234663852886e38);
        expect(_f32_demote_f64_result).toBe(3.4028234663852886e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 17)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -3.4028234663852886e38);
        expect(_f32_demote_f64_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 18)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 3.4028235677973362e38);
        expect(_f32_demote_f64_result).toBe(3.4028234663852886e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 19)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -3.4028235677973362e38);
        expect(_f32_demote_f64_result).toBe(-3.4028234663852886e38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 20)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 3.4028235677973366e38);
        expect(_f32_demote_f64_result).toBe(Infinity);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 21)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -3.4028235677973366e38);
        expect(_f32_demote_f64_result).toBe(-Infinity);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 22)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.504632769052528e-36);
        expect(_f32_demote_f64_result).toBe(1.504632769052528e-36);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 23)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 6.6382536710104395e37);
        expect(_f32_demote_f64_result).toBe(6.6382536710104395e37);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 24)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, Infinity);
        expect(_f32_demote_f64_result).toBe(Infinity);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 25)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -Infinity);
        expect(_f32_demote_f64_result).toBe(-Infinity);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 26)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.0000000000000002);
        expect(_f32_demote_f64_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 27)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 0.9999999999999999);
        expect(_f32_demote_f64_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 28)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.0000000596046448);
        expect(_f32_demote_f64_result).toBe(1.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 29)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.000000059604645);
        expect(_f32_demote_f64_result).toBe(1.0000001192092896);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 30)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.000000178813934);
        expect(_f32_demote_f64_result).toBe(1.0000001192092896);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 31)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.0000001788139343);
        expect(_f32_demote_f64_result).toBe(1.000000238418579);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 32)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.0000002980232239);
        expect(_f32_demote_f64_result).toBe(1.000000238418579);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 33)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 16777217.0);
        expect(_f32_demote_f64_result).toBe(16777216.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 34)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 16777217.000000004);
        expect(_f32_demote_f64_result).toBe(16777218.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 35)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 16777218.999999996);
        expect(_f32_demote_f64_result).toBe(16777218.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 36)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 16777219.0);
        expect(_f32_demote_f64_result).toBe(16777220.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 37)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 4.242584432991427e32);
        expect(_f32_demote_f64_result).toBe(4.2425845416862035e32);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 38)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.569262107843488e-34);
        expect(_f32_demote_f64_result).toBe(1.5692621142680845e-34);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 39)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 1.0551773688605172e-38);
        expect(_f32_demote_f64_result).toBe(1.055177323247048e-38);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 40)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -2.8238128484141933);
        expect(_f32_demote_f64_result).toBe(-2.823812961578369);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 41)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -9.063376370095757e33);
        expect(_f32_demote_f64_result).toBe(-9.063376213401508e33);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 42)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, NaN);
        expect(_f32_demote_f64_result).toBe(NaN);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 43)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, NaN);
        expect(_f32_demote_f64_result).toBe(NaN);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 44)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -NaN);
        expect(_f32_demote_f64_result).toBe(NaN);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 45)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -NaN);
        expect(_f32_demote_f64_result).toBe(NaN);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 46)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 2.2250738585072014e-308);
        expect(_f32_demote_f64_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 47)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -2.2250738585072014e-308);
        expect(_f32_demote_f64_result).toBe(-0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 48)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 7.006492321624085e-46);
        expect(_f32_demote_f64_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 49)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -7.006492321624085e-46);
        expect(_f32_demote_f64_result).toBe(-0.0);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 50)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, 7.006492321624087e-46);
        expect(_f32_demote_f64_result).toBe(1.401298464324817e-45);
    });

    _test("execution of conversions_0: f32.demote_f64 (instance 51)", () => {
        let _f32_demote_f64 = module.getExport("f32.demote_f64");
        expect(_f32_demote_f64).not.toBeUndefined();
        let _f32_demote_f64_result = module.invoke(_f32_demote_f64, -7.006492321624087e-46);
        expect(_f32_demote_f64_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 0)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, 0);
        expect(_f32_reinterpret_i32_result).toBe(0.0);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 1)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, -2147483648);
        expect(_f32_reinterpret_i32_result).toBe(-0.0);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 2)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, 1);
        expect(_f32_reinterpret_i32_result).toBe(1.401298464324817e-45);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 3)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, -1);
        expect(_f32_reinterpret_i32_result).toBe(-NaN);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 4)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, 123456789);
        expect(_f32_reinterpret_i32_result).toBe(1.6535997013422565e-34);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 5)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, -2147483647);
        expect(_f32_reinterpret_i32_result).toBe(-1.401298464324817e-45);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 6)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, 2139095040);
        expect(_f32_reinterpret_i32_result).toBe(Infinity);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 7)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, -8388608);
        expect(_f32_reinterpret_i32_result).toBe(-Infinity);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 8)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, 2143289344);
        expect(_f32_reinterpret_i32_result).toBe(NaN);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 9)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, -4194304);
        expect(_f32_reinterpret_i32_result).toBe(-NaN);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 10)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, 2141192192);
        expect(_f32_reinterpret_i32_result).toBe(NaN);
    });

    _test("execution of conversions_0: f32.reinterpret_i32 (instance 11)", () => {
        let _f32_reinterpret_i32 = module.getExport("f32.reinterpret_i32");
        expect(_f32_reinterpret_i32).not.toBeUndefined();
        let _f32_reinterpret_i32_result = module.invoke(_f32_reinterpret_i32, -6291456);
        expect(_f32_reinterpret_i32_result).toBe(-NaN);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 0)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, 0n);
        expect(_f64_reinterpret_i64_result).toBe(0.0);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 1)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, 1n);
        expect(_f64_reinterpret_i64_result).toBe(5e-324);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 2)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, -1n);
        expect(_f64_reinterpret_i64_result).toBe(-NaN);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 3)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(
            _f64_reinterpret_i64,
            -9223372036854775808n
        );
        expect(_f64_reinterpret_i64_result).toBe(-0.0);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 4)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, 1234567890n);
        expect(_f64_reinterpret_i64_result).toBe(6.09957582e-315);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 5)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(
            _f64_reinterpret_i64,
            -9223372036854775807n
        );
        expect(_f64_reinterpret_i64_result).toBe(-5e-324);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 6)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, 9218868437227405312n);
        expect(_f64_reinterpret_i64_result).toBe(Infinity);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 7)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, -4503599627370496n);
        expect(_f64_reinterpret_i64_result).toBe(-Infinity);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 8)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, 9221120237041090560n);
        expect(_f64_reinterpret_i64_result).toBe(NaN);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 9)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, -2251799813685248n);
        expect(_f64_reinterpret_i64_result).toBe(-NaN);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 10)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, 9219994337134247936n);
        expect(_f64_reinterpret_i64_result).toBe(NaN);
    });

    _test("execution of conversions_0: f64.reinterpret_i64 (instance 11)", () => {
        let _f64_reinterpret_i64 = module.getExport("f64.reinterpret_i64");
        expect(_f64_reinterpret_i64).not.toBeUndefined();
        let _f64_reinterpret_i64_result = module.invoke(_f64_reinterpret_i64, -3377699720527872n);
        expect(_f64_reinterpret_i64_result).toBe(-NaN);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 0)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, 0.0);
        expect(_i32_reinterpret_f32_result).toBe(0);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 1)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, -0.0);
        expect(_i32_reinterpret_f32_result).toBe(-2147483648);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 2)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(
            _i32_reinterpret_f32,
            1.401298464324817e-45
        );
        expect(_i32_reinterpret_f32_result).toBe(1);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 3)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, -NaN);
        expect(_i32_reinterpret_f32_result).toBe(-1);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 4)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(
            _i32_reinterpret_f32,
            -1.401298464324817e-45
        );
        expect(_i32_reinterpret_f32_result).toBe(-2147483647);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 5)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, 1.0);
        expect(_i32_reinterpret_f32_result).toBe(1065353216);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 6)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, 3.1415926);
        expect(_i32_reinterpret_f32_result).toBe(1078530010);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 7)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(
            _i32_reinterpret_f32,
            3.4028234663852886e38
        );
        expect(_i32_reinterpret_f32_result).toBe(2139095039);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 8)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(
            _i32_reinterpret_f32,
            -3.4028234663852886e38
        );
        expect(_i32_reinterpret_f32_result).toBe(-8388609);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 9)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, Infinity);
        expect(_i32_reinterpret_f32_result).toBe(2139095040);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 10)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, -Infinity);
        expect(_i32_reinterpret_f32_result).toBe(-8388608);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 11)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, NaN);
        expect(_i32_reinterpret_f32_result).toBe(2143289344);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 12)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, -NaN);
        expect(_i32_reinterpret_f32_result).toBe(-4194304);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 13)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, NaN);
        expect(_i32_reinterpret_f32_result).toBe(2141192192);
    });

    _test("execution of conversions_0: i32.reinterpret_f32 (instance 14)", () => {
        let _i32_reinterpret_f32 = module.getExport("i32.reinterpret_f32");
        expect(_i32_reinterpret_f32).not.toBeUndefined();
        let _i32_reinterpret_f32_result = module.invoke(_i32_reinterpret_f32, -NaN);
        expect(_i32_reinterpret_f32_result).toBe(-6291456);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 0)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, 0.0);
        expect(_i64_reinterpret_f64_result).toBe(0n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 1)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, -0.0);
        expect(_i64_reinterpret_f64_result).toBe(-9223372036854775808n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 2)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, 5e-324);
        expect(_i64_reinterpret_f64_result).toBe(1n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 3)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, -NaN);
        expect(_i64_reinterpret_f64_result).toBe(-1n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 4)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, -5e-324);
        expect(_i64_reinterpret_f64_result).toBe(-9223372036854775807n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 5)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, 1.0);
        expect(_i64_reinterpret_f64_result).toBe(4607182418800017408n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 6)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, 3.14159265358979);
        expect(_i64_reinterpret_f64_result).toBe(4614256656552045841n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 7)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(
            _i64_reinterpret_f64,
            1.7976931348623157e308
        );
        expect(_i64_reinterpret_f64_result).toBe(9218868437227405311n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 8)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(
            _i64_reinterpret_f64,
            -1.7976931348623157e308
        );
        expect(_i64_reinterpret_f64_result).toBe(-4503599627370497n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 9)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, Infinity);
        expect(_i64_reinterpret_f64_result).toBe(9218868437227405312n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 10)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, -Infinity);
        expect(_i64_reinterpret_f64_result).toBe(-4503599627370496n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 11)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, NaN);
        expect(_i64_reinterpret_f64_result).toBe(9221120237041090560n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 12)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, -NaN);
        expect(_i64_reinterpret_f64_result).toBe(-2251799813685248n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 13)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, NaN);
        expect(_i64_reinterpret_f64_result).toBe(9219994337134247936n);
    });

    _test("execution of conversions_0: i64.reinterpret_f64 (instance 14)", () => {
        let _i64_reinterpret_f64 = module.getExport("i64.reinterpret_f64");
        expect(_i64_reinterpret_f64).not.toBeUndefined();
        let _i64_reinterpret_f64_result = module.invoke(_i64_reinterpret_f64, -NaN);
        expect(_i64_reinterpret_f64_result).toBe(-3377699720527872n);
    });
});

describe("conversions_1", () => {
    let _test = test;

    _test("execution of conversions_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_2", () => {
    let _test = test;

    _test("execution of conversions_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_3", () => {
    let _test = test;

    _test("execution of conversions_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_4", () => {
    let _test = test;

    _test("execution of conversions_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_5", () => {
    let _test = test;

    _test("execution of conversions_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_6", () => {
    let _test = test;

    _test("execution of conversions_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_7", () => {
    let _test = test;

    _test("execution of conversions_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_8", () => {
    let _test = test;

    _test("execution of conversions_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_9", () => {
    let _test = test;

    _test("execution of conversions_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_10", () => {
    let _test = test;

    _test("execution of conversions_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_11", () => {
    let _test = test;

    _test("execution of conversions_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_12", () => {
    let _test = test;

    _test("execution of conversions_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_13", () => {
    let _test = test;

    _test("execution of conversions_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_14", () => {
    let _test = test;

    _test("execution of conversions_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_15", () => {
    let _test = test;

    _test("execution of conversions_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_16", () => {
    let _test = test;

    _test("execution of conversions_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_17", () => {
    let _test = test;

    _test("execution of conversions_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_18", () => {
    let _test = test;

    _test("execution of conversions_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_19", () => {
    let _test = test;

    _test("execution of conversions_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_20", () => {
    let _test = test;

    _test("execution of conversions_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_21", () => {
    let _test = test;

    _test("execution of conversions_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_22", () => {
    let _test = test;

    _test("execution of conversions_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_23", () => {
    let _test = test;

    _test("execution of conversions_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_24", () => {
    let _test = test;

    _test("execution of conversions_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("conversions_25", () => {
    let _test = test;

    _test("execution of conversions_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
