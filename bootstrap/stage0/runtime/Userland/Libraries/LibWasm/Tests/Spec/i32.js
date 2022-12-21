let globalImportObject = {};
let namedModules = {};

describe("i32_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/i32_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of i32_0: add (instance 0)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1, 1);
        expect(_add_result).toBe(2);
    });

    _test("execution of i32_0: add (instance 1)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1, 0);
        expect(_add_result).toBe(1);
    });

    _test("execution of i32_0: add (instance 2)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1, -1);
        expect(_add_result).toBe(-2);
    });

    _test("execution of i32_0: add (instance 3)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1, 1);
        expect(_add_result).toBe(0);
    });

    _test("execution of i32_0: add (instance 4)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 2147483647, 1);
        expect(_add_result).toBe(-2147483648);
    });

    _test("execution of i32_0: add (instance 5)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2147483648, -1);
        expect(_add_result).toBe(2147483647);
    });

    _test("execution of i32_0: add (instance 6)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -2147483648, -2147483648);
        expect(_add_result).toBe(0);
    });

    _test("execution of i32_0: add (instance 7)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1073741823, 1);
        expect(_add_result).toBe(1073741824);
    });

    _test("execution of i32_0: sub (instance 0)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1, 1);
        expect(_sub_result).toBe(0);
    });

    _test("execution of i32_0: sub (instance 1)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1, 0);
        expect(_sub_result).toBe(1);
    });

    _test("execution of i32_0: sub (instance 2)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1, -1);
        expect(_sub_result).toBe(0);
    });

    _test("execution of i32_0: sub (instance 3)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 2147483647, -1);
        expect(_sub_result).toBe(-2147483648);
    });

    _test("execution of i32_0: sub (instance 4)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2147483648, 1);
        expect(_sub_result).toBe(2147483647);
    });

    _test("execution of i32_0: sub (instance 5)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -2147483648, -2147483648);
        expect(_sub_result).toBe(0);
    });

    _test("execution of i32_0: sub (instance 6)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1073741823, -1);
        expect(_sub_result).toBe(1073741824);
    });

    _test("execution of i32_0: mul (instance 0)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1, 1);
        expect(_mul_result).toBe(1);
    });

    _test("execution of i32_0: mul (instance 1)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1, 0);
        expect(_mul_result).toBe(0);
    });

    _test("execution of i32_0: mul (instance 2)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1, -1);
        expect(_mul_result).toBe(1);
    });

    _test("execution of i32_0: mul (instance 3)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 268435456, 4096);
        expect(_mul_result).toBe(0);
    });

    _test("execution of i32_0: mul (instance 4)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2147483648, 0);
        expect(_mul_result).toBe(0);
    });

    _test("execution of i32_0: mul (instance 5)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -2147483648, -1);
        expect(_mul_result).toBe(-2147483648);
    });

    _test("execution of i32_0: mul (instance 6)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2147483647, -1);
        expect(_mul_result).toBe(-2147483647);
    });

    _test("execution of i32_0: mul (instance 7)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 19088743, 1985229328);
        expect(_mul_result).toBe(898528368);
    });

    _test("execution of i32_0: mul (instance 8)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 2147483647, 2147483647);
        expect(_mul_result).toBe(1);
    });

    _test("execution of i32_0: div_s (instance 0)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() => module.invoke(_div_s, 1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: div_s (instance 1)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() => module.invoke(_div_s, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: div_s (instance 2)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_div_s, -2147483648, -1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of i32_0: div_s (instance 3)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() => module.invoke(_div_s, -2147483648, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: div_s (instance 4)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 1, 1);
        expect(_div_s_result).toBe(1);
    });

    _test("execution of i32_0: div_s (instance 5)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 0, 1);
        expect(_div_s_result).toBe(0);
    });

    _test("execution of i32_0: div_s (instance 6)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 0, -1);
        expect(_div_s_result).toBe(0);
    });

    _test("execution of i32_0: div_s (instance 7)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -1, -1);
        expect(_div_s_result).toBe(1);
    });

    _test("execution of i32_0: div_s (instance 8)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -2147483648, 2);
        expect(_div_s_result).toBe(-1073741824);
    });

    _test("execution of i32_0: div_s (instance 9)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -2147483647, 1000);
        expect(_div_s_result).toBe(-2147483);
    });

    _test("execution of i32_0: div_s (instance 10)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 5, 2);
        expect(_div_s_result).toBe(2);
    });

    _test("execution of i32_0: div_s (instance 11)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -5, 2);
        expect(_div_s_result).toBe(-2);
    });

    _test("execution of i32_0: div_s (instance 12)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 5, -2);
        expect(_div_s_result).toBe(-2);
    });

    _test("execution of i32_0: div_s (instance 13)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -5, -2);
        expect(_div_s_result).toBe(2);
    });

    _test("execution of i32_0: div_s (instance 14)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 7, 3);
        expect(_div_s_result).toBe(2);
    });

    _test("execution of i32_0: div_s (instance 15)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -7, 3);
        expect(_div_s_result).toBe(-2);
    });

    _test("execution of i32_0: div_s (instance 16)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 7, -3);
        expect(_div_s_result).toBe(-2);
    });

    _test("execution of i32_0: div_s (instance 17)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -7, -3);
        expect(_div_s_result).toBe(2);
    });

    _test("execution of i32_0: div_s (instance 18)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 11, 5);
        expect(_div_s_result).toBe(2);
    });

    _test("execution of i32_0: div_s (instance 19)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 17, 7);
        expect(_div_s_result).toBe(2);
    });

    _test("execution of i32_0: div_u (instance 0)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        expect(() => module.invoke(_div_u, 1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: div_u (instance 1)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        expect(() => module.invoke(_div_u, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: div_u (instance 2)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 1, 1);
        expect(_div_u_result).toBe(1);
    });

    _test("execution of i32_0: div_u (instance 3)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 0, 1);
        expect(_div_u_result).toBe(0);
    });

    _test("execution of i32_0: div_u (instance 4)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -1, -1);
        expect(_div_u_result).toBe(1);
    });

    _test("execution of i32_0: div_u (instance 5)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -2147483648, -1);
        expect(_div_u_result).toBe(0);
    });

    _test("execution of i32_0: div_u (instance 6)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -2147483648, 2);
        expect(_div_u_result).toBe(1073741824);
    });

    _test("execution of i32_0: div_u (instance 7)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -1880092688, 65537);
        expect(_div_u_result).toBe(36847);
    });

    _test("execution of i32_0: div_u (instance 8)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -2147483647, 1000);
        expect(_div_u_result).toBe(2147483);
    });

    _test("execution of i32_0: div_u (instance 9)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 5, 2);
        expect(_div_u_result).toBe(2);
    });

    _test("execution of i32_0: div_u (instance 10)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -5, 2);
        expect(_div_u_result).toBe(2147483645);
    });

    _test("execution of i32_0: div_u (instance 11)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 5, -2);
        expect(_div_u_result).toBe(0);
    });

    _test("execution of i32_0: div_u (instance 12)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -5, -2);
        expect(_div_u_result).toBe(0);
    });

    _test("execution of i32_0: div_u (instance 13)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 7, 3);
        expect(_div_u_result).toBe(2);
    });

    _test("execution of i32_0: div_u (instance 14)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 11, 5);
        expect(_div_u_result).toBe(2);
    });

    _test("execution of i32_0: div_u (instance 15)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 17, 7);
        expect(_div_u_result).toBe(2);
    });

    _test("execution of i32_0: rem_s (instance 0)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        expect(() => module.invoke(_rem_s, 1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: rem_s (instance 1)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        expect(() => module.invoke(_rem_s, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: rem_s (instance 2)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 2147483647, -1);
        expect(_rem_s_result).toBe(0);
    });

    _test("execution of i32_0: rem_s (instance 3)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 1, 1);
        expect(_rem_s_result).toBe(0);
    });

    _test("execution of i32_0: rem_s (instance 4)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 0, 1);
        expect(_rem_s_result).toBe(0);
    });

    _test("execution of i32_0: rem_s (instance 5)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 0, -1);
        expect(_rem_s_result).toBe(0);
    });

    _test("execution of i32_0: rem_s (instance 6)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -1, -1);
        expect(_rem_s_result).toBe(0);
    });

    _test("execution of i32_0: rem_s (instance 7)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -2147483648, -1);
        expect(_rem_s_result).toBe(0);
    });

    _test("execution of i32_0: rem_s (instance 8)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -2147483648, 2);
        expect(_rem_s_result).toBe(0);
    });

    _test("execution of i32_0: rem_s (instance 9)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -2147483647, 1000);
        expect(_rem_s_result).toBe(-647);
    });

    _test("execution of i32_0: rem_s (instance 10)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 5, 2);
        expect(_rem_s_result).toBe(1);
    });

    _test("execution of i32_0: rem_s (instance 11)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -5, 2);
        expect(_rem_s_result).toBe(-1);
    });

    _test("execution of i32_0: rem_s (instance 12)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 5, -2);
        expect(_rem_s_result).toBe(1);
    });

    _test("execution of i32_0: rem_s (instance 13)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -5, -2);
        expect(_rem_s_result).toBe(-1);
    });

    _test("execution of i32_0: rem_s (instance 14)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 7, 3);
        expect(_rem_s_result).toBe(1);
    });

    _test("execution of i32_0: rem_s (instance 15)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -7, 3);
        expect(_rem_s_result).toBe(-1);
    });

    _test("execution of i32_0: rem_s (instance 16)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 7, -3);
        expect(_rem_s_result).toBe(1);
    });

    _test("execution of i32_0: rem_s (instance 17)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -7, -3);
        expect(_rem_s_result).toBe(-1);
    });

    _test("execution of i32_0: rem_s (instance 18)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 11, 5);
        expect(_rem_s_result).toBe(1);
    });

    _test("execution of i32_0: rem_s (instance 19)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 17, 7);
        expect(_rem_s_result).toBe(3);
    });

    _test("execution of i32_0: rem_u (instance 0)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        expect(() => module.invoke(_rem_u, 1, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: rem_u (instance 1)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        expect(() => module.invoke(_rem_u, 0, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i32_0: rem_u (instance 2)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 1, 1);
        expect(_rem_u_result).toBe(0);
    });

    _test("execution of i32_0: rem_u (instance 3)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 0, 1);
        expect(_rem_u_result).toBe(0);
    });

    _test("execution of i32_0: rem_u (instance 4)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -1, -1);
        expect(_rem_u_result).toBe(0);
    });

    _test("execution of i32_0: rem_u (instance 5)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -2147483648, -1);
        expect(_rem_u_result).toBe(-2147483648);
    });

    _test("execution of i32_0: rem_u (instance 6)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -2147483648, 2);
        expect(_rem_u_result).toBe(0);
    });

    _test("execution of i32_0: rem_u (instance 7)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -1880092688, 65537);
        expect(_rem_u_result).toBe(32769);
    });

    _test("execution of i32_0: rem_u (instance 8)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -2147483647, 1000);
        expect(_rem_u_result).toBe(649);
    });

    _test("execution of i32_0: rem_u (instance 9)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 5, 2);
        expect(_rem_u_result).toBe(1);
    });

    _test("execution of i32_0: rem_u (instance 10)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -5, 2);
        expect(_rem_u_result).toBe(1);
    });

    _test("execution of i32_0: rem_u (instance 11)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 5, -2);
        expect(_rem_u_result).toBe(5);
    });

    _test("execution of i32_0: rem_u (instance 12)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -5, -2);
        expect(_rem_u_result).toBe(-5);
    });

    _test("execution of i32_0: rem_u (instance 13)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 7, 3);
        expect(_rem_u_result).toBe(1);
    });

    _test("execution of i32_0: rem_u (instance 14)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 11, 5);
        expect(_rem_u_result).toBe(1);
    });

    _test("execution of i32_0: rem_u (instance 15)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 17, 7);
        expect(_rem_u_result).toBe(3);
    });

    _test("execution of i32_0: and (instance 0)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 1, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of i32_0: and (instance 1)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 1);
        expect(_and_result).toBe(0);
    });

    _test("execution of i32_0: and (instance 2)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 1, 1);
        expect(_and_result).toBe(1);
    });

    _test("execution of i32_0: and (instance 3)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of i32_0: and (instance 4)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 2147483647, -2147483648);
        expect(_and_result).toBe(0);
    });

    _test("execution of i32_0: and (instance 5)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 2147483647, -1);
        expect(_and_result).toBe(2147483647);
    });

    _test("execution of i32_0: and (instance 6)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, -252641281, -3856);
        expect(_and_result).toBe(-252645136);
    });

    _test("execution of i32_0: and (instance 7)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, -1, -1);
        expect(_and_result).toBe(-1);
    });

    _test("execution of i32_0: or (instance 0)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 1, 0);
        expect(_or_result).toBe(1);
    });

    _test("execution of i32_0: or (instance 1)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 1);
        expect(_or_result).toBe(1);
    });

    _test("execution of i32_0: or (instance 2)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 1, 1);
        expect(_or_result).toBe(1);
    });

    _test("execution of i32_0: or (instance 3)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of i32_0: or (instance 4)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 2147483647, -2147483648);
        expect(_or_result).toBe(-1);
    });

    _test("execution of i32_0: or (instance 5)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, -2147483648, 0);
        expect(_or_result).toBe(-2147483648);
    });

    _test("execution of i32_0: or (instance 6)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, -252641281, -3856);
        expect(_or_result).toBe(-1);
    });

    _test("execution of i32_0: or (instance 7)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, -1, -1);
        expect(_or_result).toBe(-1);
    });

    _test("execution of i32_0: xor (instance 0)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 1, 0);
        expect(_xor_result).toBe(1);
    });

    _test("execution of i32_0: xor (instance 1)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 1);
        expect(_xor_result).toBe(1);
    });

    _test("execution of i32_0: xor (instance 2)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 1, 1);
        expect(_xor_result).toBe(0);
    });

    _test("execution of i32_0: xor (instance 3)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of i32_0: xor (instance 4)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 2147483647, -2147483648);
        expect(_xor_result).toBe(-1);
    });

    _test("execution of i32_0: xor (instance 5)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -2147483648, 0);
        expect(_xor_result).toBe(-2147483648);
    });

    _test("execution of i32_0: xor (instance 6)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -1, -2147483648);
        expect(_xor_result).toBe(2147483647);
    });

    _test("execution of i32_0: xor (instance 7)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -1, 2147483647);
        expect(_xor_result).toBe(-2147483648);
    });

    _test("execution of i32_0: xor (instance 8)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -252641281, -3856);
        expect(_xor_result).toBe(252645135);
    });

    _test("execution of i32_0: xor (instance 9)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -1, -1);
        expect(_xor_result).toBe(0);
    });

    _test("execution of i32_0: shl (instance 0)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1, 1);
        expect(_shl_result).toBe(2);
    });

    _test("execution of i32_0: shl (instance 1)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1, 0);
        expect(_shl_result).toBe(1);
    });

    _test("execution of i32_0: shl (instance 2)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 2147483647, 1);
        expect(_shl_result).toBe(-2);
    });

    _test("execution of i32_0: shl (instance 3)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, -1, 1);
        expect(_shl_result).toBe(-2);
    });

    _test("execution of i32_0: shl (instance 4)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, -2147483648, 1);
        expect(_shl_result).toBe(0);
    });

    _test("execution of i32_0: shl (instance 5)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1073741824, 1);
        expect(_shl_result).toBe(-2147483648);
    });

    _test("execution of i32_0: shl (instance 6)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1, 31);
        expect(_shl_result).toBe(-2147483648);
    });

    _test("execution of i32_0: shl (instance 7)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1, 32);
        expect(_shl_result).toBe(1);
    });

    _test("execution of i32_0: shl (instance 8)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1, 33);
        expect(_shl_result).toBe(2);
    });

    _test("execution of i32_0: shl (instance 9)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1, -1);
        expect(_shl_result).toBe(-2147483648);
    });

    _test("execution of i32_0: shl (instance 10)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1, 2147483647);
        expect(_shl_result).toBe(-2147483648);
    });

    _test("execution of i32_0: shr_s (instance 0)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1, 1);
        expect(_shr_s_result).toBe(0);
    });

    _test("execution of i32_0: shr_s (instance 1)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1, 0);
        expect(_shr_s_result).toBe(1);
    });

    _test("execution of i32_0: shr_s (instance 2)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1, 1);
        expect(_shr_s_result).toBe(-1);
    });

    _test("execution of i32_0: shr_s (instance 3)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 2147483647, 1);
        expect(_shr_s_result).toBe(1073741823);
    });

    _test("execution of i32_0: shr_s (instance 4)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -2147483648, 1);
        expect(_shr_s_result).toBe(-1073741824);
    });

    _test("execution of i32_0: shr_s (instance 5)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1073741824, 1);
        expect(_shr_s_result).toBe(536870912);
    });

    _test("execution of i32_0: shr_s (instance 6)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1, 32);
        expect(_shr_s_result).toBe(1);
    });

    _test("execution of i32_0: shr_s (instance 7)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1, 33);
        expect(_shr_s_result).toBe(0);
    });

    _test("execution of i32_0: shr_s (instance 8)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1, -1);
        expect(_shr_s_result).toBe(0);
    });

    _test("execution of i32_0: shr_s (instance 9)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1, 2147483647);
        expect(_shr_s_result).toBe(0);
    });

    _test("execution of i32_0: shr_s (instance 10)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1, -2147483648);
        expect(_shr_s_result).toBe(1);
    });

    _test("execution of i32_0: shr_s (instance 11)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -2147483648, 31);
        expect(_shr_s_result).toBe(-1);
    });

    _test("execution of i32_0: shr_s (instance 12)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1, 32);
        expect(_shr_s_result).toBe(-1);
    });

    _test("execution of i32_0: shr_s (instance 13)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1, 33);
        expect(_shr_s_result).toBe(-1);
    });

    _test("execution of i32_0: shr_s (instance 14)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1, -1);
        expect(_shr_s_result).toBe(-1);
    });

    _test("execution of i32_0: shr_s (instance 15)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1, 2147483647);
        expect(_shr_s_result).toBe(-1);
    });

    _test("execution of i32_0: shr_s (instance 16)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1, -2147483648);
        expect(_shr_s_result).toBe(-1);
    });

    _test("execution of i32_0: shr_u (instance 0)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1, 1);
        expect(_shr_u_result).toBe(0);
    });

    _test("execution of i32_0: shr_u (instance 1)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1, 0);
        expect(_shr_u_result).toBe(1);
    });

    _test("execution of i32_0: shr_u (instance 2)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1, 1);
        expect(_shr_u_result).toBe(2147483647);
    });

    _test("execution of i32_0: shr_u (instance 3)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 2147483647, 1);
        expect(_shr_u_result).toBe(1073741823);
    });

    _test("execution of i32_0: shr_u (instance 4)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -2147483648, 1);
        expect(_shr_u_result).toBe(1073741824);
    });

    _test("execution of i32_0: shr_u (instance 5)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1073741824, 1);
        expect(_shr_u_result).toBe(536870912);
    });

    _test("execution of i32_0: shr_u (instance 6)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1, 32);
        expect(_shr_u_result).toBe(1);
    });

    _test("execution of i32_0: shr_u (instance 7)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1, 33);
        expect(_shr_u_result).toBe(0);
    });

    _test("execution of i32_0: shr_u (instance 8)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1, -1);
        expect(_shr_u_result).toBe(0);
    });

    _test("execution of i32_0: shr_u (instance 9)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1, 2147483647);
        expect(_shr_u_result).toBe(0);
    });

    _test("execution of i32_0: shr_u (instance 10)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1, -2147483648);
        expect(_shr_u_result).toBe(1);
    });

    _test("execution of i32_0: shr_u (instance 11)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -2147483648, 31);
        expect(_shr_u_result).toBe(1);
    });

    _test("execution of i32_0: shr_u (instance 12)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1, 32);
        expect(_shr_u_result).toBe(-1);
    });

    _test("execution of i32_0: shr_u (instance 13)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1, 33);
        expect(_shr_u_result).toBe(2147483647);
    });

    _test("execution of i32_0: shr_u (instance 14)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1, -1);
        expect(_shr_u_result).toBe(1);
    });

    _test("execution of i32_0: shr_u (instance 15)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1, 2147483647);
        expect(_shr_u_result).toBe(1);
    });

    _test("execution of i32_0: shr_u (instance 16)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1, -2147483648);
        expect(_shr_u_result).toBe(-1);
    });

    _test("execution of i32_0: rotl (instance 0)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1, 1);
        expect(_rotl_result).toBe(2);
    });

    _test("execution of i32_0: rotl (instance 1)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1, 0);
        expect(_rotl_result).toBe(1);
    });

    _test("execution of i32_0: rotl (instance 2)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -1, 1);
        expect(_rotl_result).toBe(-1);
    });

    _test("execution of i32_0: rotl (instance 3)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1, 32);
        expect(_rotl_result).toBe(1);
    });

    _test("execution of i32_0: rotl (instance 4)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -1412589450, 1);
        expect(_rotl_result).toBe(1469788397);
    });

    _test("execution of i32_0: rotl (instance 5)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -33498112, 4);
        expect(_rotl_result).toBe(-535969777);
    });

    _test("execution of i32_0: rotl (instance 6)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -1329474845, 5);
        expect(_rotl_result).toBe(406477942);
    });

    _test("execution of i32_0: rotl (instance 7)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 32768, 37);
        expect(_rotl_result).toBe(1048576);
    });

    _test("execution of i32_0: rotl (instance 8)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -1329474845, 65285);
        expect(_rotl_result).toBe(406477942);
    });

    _test("execution of i32_0: rotl (instance 9)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1989852383, -19);
        expect(_rotl_result).toBe(1469837011);
    });

    _test("execution of i32_0: rotl (instance 10)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1989852383, -2147483635);
        expect(_rotl_result).toBe(1469837011);
    });

    _test("execution of i32_0: rotl (instance 11)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1, 31);
        expect(_rotl_result).toBe(-2147483648);
    });

    _test("execution of i32_0: rotl (instance 12)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -2147483648, 1);
        expect(_rotl_result).toBe(1);
    });

    _test("execution of i32_0: rotr (instance 0)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1, 1);
        expect(_rotr_result).toBe(-2147483648);
    });

    _test("execution of i32_0: rotr (instance 1)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1, 0);
        expect(_rotr_result).toBe(1);
    });

    _test("execution of i32_0: rotr (instance 2)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -1, 1);
        expect(_rotr_result).toBe(-1);
    });

    _test("execution of i32_0: rotr (instance 3)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1, 32);
        expect(_rotr_result).toBe(1);
    });

    _test("execution of i32_0: rotr (instance 4)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -16724992, 1);
        expect(_rotr_result).toBe(2139121152);
    });

    _test("execution of i32_0: rotr (instance 5)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 524288, 4);
        expect(_rotr_result).toBe(32768);
    });

    _test("execution of i32_0: rotr (instance 6)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -1329474845, 5);
        expect(_rotr_result).toBe(495324823);
    });

    _test("execution of i32_0: rotr (instance 7)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 32768, 37);
        expect(_rotr_result).toBe(1024);
    });

    _test("execution of i32_0: rotr (instance 8)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -1329474845, 65285);
        expect(_rotr_result).toBe(495324823);
    });

    _test("execution of i32_0: rotr (instance 9)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1989852383, -19);
        expect(_rotr_result).toBe(-419711787);
    });

    _test("execution of i32_0: rotr (instance 10)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1989852383, -2147483635);
        expect(_rotr_result).toBe(-419711787);
    });

    _test("execution of i32_0: rotr (instance 11)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1, 31);
        expect(_rotr_result).toBe(2);
    });

    _test("execution of i32_0: rotr (instance 12)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -2147483648, 31);
        expect(_rotr_result).toBe(1);
    });

    _test("execution of i32_0: clz (instance 0)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, -1);
        expect(_clz_result).toBe(0);
    });

    _test("execution of i32_0: clz (instance 1)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 0);
        expect(_clz_result).toBe(32);
    });

    _test("execution of i32_0: clz (instance 2)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 32768);
        expect(_clz_result).toBe(16);
    });

    _test("execution of i32_0: clz (instance 3)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 255);
        expect(_clz_result).toBe(24);
    });

    _test("execution of i32_0: clz (instance 4)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, -2147483648);
        expect(_clz_result).toBe(0);
    });

    _test("execution of i32_0: clz (instance 5)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 1);
        expect(_clz_result).toBe(31);
    });

    _test("execution of i32_0: clz (instance 6)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 2);
        expect(_clz_result).toBe(30);
    });

    _test("execution of i32_0: clz (instance 7)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 2147483647);
        expect(_clz_result).toBe(1);
    });

    _test("execution of i32_0: ctz (instance 0)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, -1);
        expect(_ctz_result).toBe(0);
    });

    _test("execution of i32_0: ctz (instance 1)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 0);
        expect(_ctz_result).toBe(32);
    });

    _test("execution of i32_0: ctz (instance 2)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 32768);
        expect(_ctz_result).toBe(15);
    });

    _test("execution of i32_0: ctz (instance 3)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 65536);
        expect(_ctz_result).toBe(16);
    });

    _test("execution of i32_0: ctz (instance 4)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, -2147483648);
        expect(_ctz_result).toBe(31);
    });

    _test("execution of i32_0: ctz (instance 5)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 2147483647);
        expect(_ctz_result).toBe(0);
    });

    _test("execution of i32_0: popcnt (instance 0)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -1);
        expect(_popcnt_result).toBe(32);
    });

    _test("execution of i32_0: popcnt (instance 1)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, 0);
        expect(_popcnt_result).toBe(0);
    });

    _test("execution of i32_0: popcnt (instance 2)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, 32768);
        expect(_popcnt_result).toBe(1);
    });

    _test("execution of i32_0: popcnt (instance 3)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -2147450880);
        expect(_popcnt_result).toBe(2);
    });

    _test("execution of i32_0: popcnt (instance 4)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, 2147483647);
        expect(_popcnt_result).toBe(31);
    });

    _test("execution of i32_0: popcnt (instance 5)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -1431655766);
        expect(_popcnt_result).toBe(16);
    });

    _test("execution of i32_0: popcnt (instance 6)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, 1431655765);
        expect(_popcnt_result).toBe(16);
    });

    _test("execution of i32_0: popcnt (instance 7)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -559038737);
        expect(_popcnt_result).toBe(24);
    });

    _test("execution of i32_0: extend8_s (instance 0)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 0);
        expect(_extend8_s_result).toBe(0);
    });

    _test("execution of i32_0: extend8_s (instance 1)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 127);
        expect(_extend8_s_result).toBe(127);
    });

    _test("execution of i32_0: extend8_s (instance 2)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 128);
        expect(_extend8_s_result).toBe(-128);
    });

    _test("execution of i32_0: extend8_s (instance 3)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 255);
        expect(_extend8_s_result).toBe(-1);
    });

    _test("execution of i32_0: extend8_s (instance 4)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 19088640);
        expect(_extend8_s_result).toBe(0);
    });

    _test("execution of i32_0: extend8_s (instance 5)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, -19088768);
        expect(_extend8_s_result).toBe(-0x80);
    });

    _test("execution of i32_0: extend8_s (instance 6)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, -1);
        expect(_extend8_s_result).toBe(-1);
    });

    _test("execution of i32_0: extend16_s (instance 0)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 0);
        expect(_extend16_s_result).toBe(0);
    });

    _test("execution of i32_0: extend16_s (instance 1)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 32767);
        expect(_extend16_s_result).toBe(32767);
    });

    _test("execution of i32_0: extend16_s (instance 2)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 32768);
        expect(_extend16_s_result).toBe(-32768);
    });

    _test("execution of i32_0: extend16_s (instance 3)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 65535);
        expect(_extend16_s_result).toBe(-1);
    });

    _test("execution of i32_0: extend16_s (instance 4)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 19070976);
        expect(_extend16_s_result).toBe(0);
    });

    _test("execution of i32_0: extend16_s (instance 5)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, -19103744);
        expect(_extend16_s_result).toBe(-0x8000);
    });

    _test("execution of i32_0: extend16_s (instance 6)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, -1);
        expect(_extend16_s_result).toBe(-1);
    });

    _test("execution of i32_0: eqz (instance 0)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, 0);
        expect(_eqz_result).toBe(1);
    });

    _test("execution of i32_0: eqz (instance 1)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, 1);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i32_0: eqz (instance 2)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, -2147483648);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i32_0: eqz (instance 3)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, 2147483647);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i32_0: eqz (instance 4)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, -1);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 0)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i32_0: eq (instance 1)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1, 1);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i32_0: eq (instance 2)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1, 1);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 3)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -2147483648, -2147483648);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i32_0: eq (instance 4)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 2147483647, 2147483647);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i32_0: eq (instance 5)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1, -1);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i32_0: eq (instance 6)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 7)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 1);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 8)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -2147483648, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 9)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, -2147483648);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 10)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -2147483648, -1);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 11)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1, -2147483648);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 12)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -2147483648, 2147483647);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: eq (instance 13)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 2147483647, -2147483648);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i32_0: ne (instance 0)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i32_0: ne (instance 1)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1, 1);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i32_0: ne (instance 2)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1, 1);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 3)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -2147483648, -2147483648);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i32_0: ne (instance 4)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 2147483647, 2147483647);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i32_0: ne (instance 5)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1, -1);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i32_0: ne (instance 6)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1, 0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 7)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 1);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 8)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -2147483648, 0);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 9)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, -2147483648);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 10)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -2147483648, -1);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 11)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1, -2147483648);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 12)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -2147483648, 2147483647);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: ne (instance 13)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 2147483647, -2147483648);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i32_0: lt_s (instance 0)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 1)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 1, 1);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 2)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -1, 1);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i32_0: lt_s (instance 3)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -2147483648, -2147483648);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 4)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 2147483647, 2147483647);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 5)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -1, -1);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 6)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 1, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 7)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 1);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i32_0: lt_s (instance 8)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -2147483648, 0);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i32_0: lt_s (instance 9)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, -2147483648);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 10)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -2147483648, -1);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i32_0: lt_s (instance 11)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -1, -2147483648);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_s (instance 12)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -2147483648, 2147483647);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i32_0: lt_s (instance 13)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 2147483647, -2147483648);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 0)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 1)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 1, 1);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 2)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -1, 1);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 3)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -2147483648, -2147483648);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 4)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 2147483647, 2147483647);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 5)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -1, -1);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 6)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 1, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 7)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 1);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i32_0: lt_u (instance 8)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -2147483648, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 9)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, -2147483648);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i32_0: lt_u (instance 10)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -2147483648, -1);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i32_0: lt_u (instance 11)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -1, -2147483648);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 12)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -2147483648, 2147483647);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i32_0: lt_u (instance 13)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 2147483647, -2147483648);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 0)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 1)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 1, 1);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 2)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -1, 1);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 3)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -2147483648, -2147483648);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 4)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 2147483647, 2147483647);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 5)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -1, -1);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 6)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 1, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i32_0: le_s (instance 7)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 1);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 8)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -2147483648, 0);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 9)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, -2147483648);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i32_0: le_s (instance 10)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -2147483648, -1);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 11)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -1, -2147483648);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i32_0: le_s (instance 12)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -2147483648, 2147483647);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i32_0: le_s (instance 13)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 2147483647, -2147483648);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i32_0: le_u (instance 0)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 1)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 1, 1);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 2)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -1, 1);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i32_0: le_u (instance 3)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -2147483648, -2147483648);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 4)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 2147483647, 2147483647);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 5)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -1, -1);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 6)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 1, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i32_0: le_u (instance 7)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 1);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 8)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -2147483648, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i32_0: le_u (instance 9)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, -2147483648);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 10)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -2147483648, -1);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: le_u (instance 11)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -1, -2147483648);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i32_0: le_u (instance 12)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -2147483648, 2147483647);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i32_0: le_u (instance 13)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 2147483647, -2147483648);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i32_0: gt_s (instance 0)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 1)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 1, 1);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 2)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -1, 1);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 3)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -2147483648, -2147483648);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 4)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 2147483647, 2147483647);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 5)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -1, -1);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 6)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 1, 0);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i32_0: gt_s (instance 7)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 1);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 8)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -2147483648, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 9)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, -2147483648);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i32_0: gt_s (instance 10)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -2147483648, -1);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 11)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -1, -2147483648);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i32_0: gt_s (instance 12)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -2147483648, 2147483647);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i32_0: gt_s (instance 13)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 2147483647, -2147483648);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i32_0: gt_u (instance 0)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 1)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 1, 1);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 2)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -1, 1);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i32_0: gt_u (instance 3)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -2147483648, -2147483648);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 4)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 2147483647, 2147483647);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 5)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -1, -1);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 6)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 1, 0);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i32_0: gt_u (instance 7)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 1);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 8)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -2147483648, 0);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i32_0: gt_u (instance 9)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, -2147483648);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 10)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -2147483648, -1);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: gt_u (instance 11)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -1, -2147483648);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i32_0: gt_u (instance 12)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -2147483648, 2147483647);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i32_0: gt_u (instance 13)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 2147483647, -2147483648);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i32_0: ge_s (instance 0)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 1)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 1, 1);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 2)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -1, 1);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i32_0: ge_s (instance 3)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -2147483648, -2147483648);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 4)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 2147483647, 2147483647);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 5)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -1, -1);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 6)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 1, 0);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 7)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 1);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i32_0: ge_s (instance 8)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -2147483648, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i32_0: ge_s (instance 9)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, -2147483648);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 10)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -2147483648, -1);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i32_0: ge_s (instance 11)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -1, -2147483648);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_s (instance 12)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -2147483648, 2147483647);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i32_0: ge_s (instance 13)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 2147483647, -2147483648);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 0)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 1)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 1, 1);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 2)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -1, 1);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 3)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -2147483648, -2147483648);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 4)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 2147483647, 2147483647);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 5)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -1, -1);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 6)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 1, 0);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 7)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 1);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of i32_0: ge_u (instance 8)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -2147483648, 0);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 9)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, -2147483648);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of i32_0: ge_u (instance 10)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -2147483648, -1);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of i32_0: ge_u (instance 11)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -1, -2147483648);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 12)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -2147483648, 2147483647);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i32_0: ge_u (instance 13)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 2147483647, -2147483648);
        expect(_ge_u_result).toBe(0);
    });
});

describe("i32_1", () => {
    let _test = test;

    _test("execution of i32_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_2", () => {
    let _test = test;

    _test("execution of i32_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_3", () => {
    let _test = test;

    _test("execution of i32_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_4", () => {
    let _test = test;

    _test("execution of i32_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_5", () => {
    let _test = test;

    _test("execution of i32_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_6", () => {
    let _test = test;

    _test("execution of i32_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_7", () => {
    let _test = test;

    _test("execution of i32_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_8", () => {
    let _test = test;

    _test("execution of i32_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_9", () => {
    let _test = test;

    _test("execution of i32_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_10", () => {
    let _test = test;

    _test("execution of i32_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_11", () => {
    let _test = test;

    _test("execution of i32_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_12", () => {
    let _test = test;

    _test("execution of i32_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_13", () => {
    let _test = test;

    _test("execution of i32_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_14", () => {
    let _test = test;

    _test("execution of i32_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_15", () => {
    let _test = test;

    _test("execution of i32_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_16", () => {
    let _test = test;

    _test("execution of i32_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_17", () => {
    let _test = test;

    _test("execution of i32_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_18", () => {
    let _test = test;

    _test("execution of i32_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_19", () => {
    let _test = test;

    _test("execution of i32_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_20", () => {
    let _test = test;

    _test("execution of i32_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_21", () => {
    let _test = test;

    _test("execution of i32_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_22", () => {
    let _test = test;

    _test("execution of i32_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_23", () => {
    let _test = test;

    _test("execution of i32_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_24", () => {
    let _test = test;

    _test("execution of i32_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_25", () => {
    let _test = test;

    _test("execution of i32_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_26", () => {
    let _test = test;

    _test("execution of i32_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_27", () => {
    let _test = test;

    _test("execution of i32_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_28", () => {
    let _test = test;

    _test("execution of i32_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_29", () => {
    let _test = test;

    _test("execution of i32_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_30", () => {
    let _test = test;

    _test("execution of i32_30: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_31", () => {
    let _test = test;

    _test("execution of i32_31: _inline_test_30 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_32", () => {
    let _test = test;

    _test("execution of i32_32: _inline_test_31 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_33", () => {
    let _test = test;

    _test("execution of i32_33: _inline_test_32 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_34", () => {
    let _test = test;

    _test("execution of i32_34: _inline_test_33 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_35", () => {
    let _test = test;

    _test("execution of i32_35: _inline_test_34 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_36", () => {
    let _test = test;

    _test("execution of i32_36: _inline_test_35 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_37", () => {
    let _test = test;

    _test("execution of i32_37: _inline_test_36 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_38", () => {
    let _test = test;

    _test("execution of i32_38: _inline_test_37 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_39", () => {
    let _test = test;

    _test("execution of i32_39: _inline_test_38 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_40", () => {
    let _test = test;

    _test("execution of i32_40: _inline_test_39 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_41", () => {
    let _test = test;

    _test("execution of i32_41: _inline_test_40 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_42", () => {
    let _test = test;

    _test("execution of i32_42: _inline_test_41 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_43", () => {
    let _test = test;

    _test("execution of i32_43: _inline_test_42 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_44", () => {
    let _test = test;

    _test("execution of i32_44: _inline_test_43 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_45", () => {
    let _test = test;

    _test("execution of i32_45: _inline_test_44 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_46", () => {
    let _test = test;

    _test("execution of i32_46: _inline_test_45 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_47", () => {
    let _test = test;

    _test("execution of i32_47: _inline_test_46 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_48", () => {
    let _test = test;

    _test("execution of i32_48: _inline_test_47 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_49", () => {
    let _test = test;

    _test("execution of i32_49: _inline_test_48 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_50", () => {
    let _test = test;

    _test("execution of i32_50: _inline_test_49 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_51", () => {
    let _test = test;

    _test("execution of i32_51: _inline_test_50 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_52", () => {
    let _test = test;

    _test("execution of i32_52: _inline_test_51 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_53", () => {
    let _test = test;

    _test("execution of i32_53: _inline_test_52 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_54", () => {
    let _test = test;

    _test("execution of i32_54: _inline_test_53 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_55", () => {
    let _test = test;

    _test("execution of i32_55: _inline_test_54 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_56", () => {
    let _test = test;

    _test("execution of i32_56: _inline_test_55 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_57", () => {
    let _test = test;

    _test("execution of i32_57: _inline_test_56 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_58", () => {
    let _test = test;

    _test("execution of i32_58: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_59", () => {
    let _test = test;

    _test("execution of i32_59: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_60", () => {
    let _test = test;

    _test("execution of i32_60: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_61", () => {
    let _test = test;

    _test("execution of i32_61: _inline_test_60 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_62", () => {
    let _test = test;

    _test("execution of i32_62: _inline_test_61 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_63", () => {
    let _test = test;

    _test("execution of i32_63: _inline_test_62 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_64", () => {
    let _test = test;

    _test("execution of i32_64: _inline_test_63 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_65", () => {
    let _test = test;

    _test("execution of i32_65: _inline_test_64 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_66", () => {
    let _test = test;

    _test("execution of i32_66: _inline_test_65 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_67", () => {
    let _test = test;

    _test("execution of i32_67: _inline_test_66 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_68", () => {
    let _test = test;

    _test("execution of i32_68: _inline_test_67 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_69", () => {
    let _test = test;

    _test("execution of i32_69: _inline_test_68 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_70", () => {
    let _test = test;

    _test("execution of i32_70: _inline_test_69 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_71", () => {
    let _test = test;

    _test("execution of i32_71: _inline_test_70 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_72", () => {
    let _test = test;

    _test("execution of i32_72: _inline_test_71 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_73", () => {
    let _test = test;

    _test("execution of i32_73: _inline_test_72 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_74", () => {
    let _test = test;

    _test("execution of i32_74: _inline_test_73 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_75", () => {
    let _test = test;

    _test("execution of i32_75: _inline_test_74 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_76", () => {
    let _test = test;

    _test("execution of i32_76: _inline_test_75 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_77", () => {
    let _test = test;

    _test("execution of i32_77: _inline_test_76 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_78", () => {
    let _test = test;

    _test("execution of i32_78: _inline_test_77 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_79", () => {
    let _test = test;

    _test("execution of i32_79: _inline_test_78 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_80", () => {
    let _test = test;

    _test("execution of i32_80: _inline_test_79 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_81", () => {
    let _test = test;

    _test("execution of i32_81: _inline_test_80 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_82", () => {
    let _test = test;

    _test("execution of i32_82: _inline_test_81 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_83", () => {
    let _test = test;

    _test("execution of i32_83: _inline_test_82 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i32_84", () => {
    let _test = test;

    _test("execution of i32_84: _inline_test_83 (instance 0)", () => {});
});

describe("i32_85", () => {
    let _test = test;

    _test("execution of i32_85: _inline_test_84 (instance 0)", () => {});
});
