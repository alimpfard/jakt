let globalImportObject = {};
let namedModules = {};

describe("i64_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/i64_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of i64_0: add (instance 0)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1n, 1n);
        expect(_add_result).toBe(2n);
    });

    _test("execution of i64_0: add (instance 1)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1n, 0n);
        expect(_add_result).toBe(1n);
    });

    _test("execution of i64_0: add (instance 2)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1n, -1n);
        expect(_add_result).toBe(-2n);
    });

    _test("execution of i64_0: add (instance 3)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -1n, 1n);
        expect(_add_result).toBe(0n);
    });

    _test("execution of i64_0: add (instance 4)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 9223372036854775807n, 1n);
        expect(_add_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: add (instance 5)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -9223372036854775808n, -1n);
        expect(_add_result).toBe(9223372036854775807n);
    });

    _test("execution of i64_0: add (instance 6)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, -9223372036854775808n, -9223372036854775808n);
        expect(_add_result).toBe(0n);
    });

    _test("execution of i64_0: add (instance 7)", () => {
        let _add = module.getExport("add");
        expect(_add).not.toBeUndefined();
        let _add_result = module.invoke(_add, 1073741823n, 1n);
        expect(_add_result).toBe(1073741824n);
    });

    _test("execution of i64_0: sub (instance 0)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1n, 1n);
        expect(_sub_result).toBe(0n);
    });

    _test("execution of i64_0: sub (instance 1)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1n, 0n);
        expect(_sub_result).toBe(1n);
    });

    _test("execution of i64_0: sub (instance 2)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -1n, -1n);
        expect(_sub_result).toBe(0n);
    });

    _test("execution of i64_0: sub (instance 3)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 9223372036854775807n, -1n);
        expect(_sub_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: sub (instance 4)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -9223372036854775808n, 1n);
        expect(_sub_result).toBe(9223372036854775807n);
    });

    _test("execution of i64_0: sub (instance 5)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, -9223372036854775808n, -9223372036854775808n);
        expect(_sub_result).toBe(0n);
    });

    _test("execution of i64_0: sub (instance 6)", () => {
        let _sub = module.getExport("sub");
        expect(_sub).not.toBeUndefined();
        let _sub_result = module.invoke(_sub, 1073741823n, -1n);
        expect(_sub_result).toBe(1073741824n);
    });

    _test("execution of i64_0: mul (instance 0)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1n, 1n);
        expect(_mul_result).toBe(1n);
    });

    _test("execution of i64_0: mul (instance 1)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1n, 0n);
        expect(_mul_result).toBe(0n);
    });

    _test("execution of i64_0: mul (instance 2)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -1n, -1n);
        expect(_mul_result).toBe(1n);
    });

    _test("execution of i64_0: mul (instance 3)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 1152921504606846976n, 4096n);
        expect(_mul_result).toBe(0n);
    });

    _test("execution of i64_0: mul (instance 4)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -9223372036854775808n, 0n);
        expect(_mul_result).toBe(0n);
    });

    _test("execution of i64_0: mul (instance 5)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, -9223372036854775808n, -1n);
        expect(_mul_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: mul (instance 6)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 9223372036854775807n, -1n);
        expect(_mul_result).toBe(-9223372036854775807n);
    });

    _test("execution of i64_0: mul (instance 7)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 81985529216486895n, -81985529216486896n);
        expect(_mul_result).toBe(2465395958572223728n);
    });

    _test("execution of i64_0: mul (instance 8)", () => {
        let _mul = module.getExport("mul");
        expect(_mul).not.toBeUndefined();
        let _mul_result = module.invoke(_mul, 9223372036854775807n, 9223372036854775807n);
        expect(_mul_result).toBe(1n);
    });

    _test("execution of i64_0: div_s (instance 0)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() => module.invoke(_div_s, 1n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: div_s (instance 1)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() => module.invoke(_div_s, 0n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: div_s (instance 2)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_div_s, -9223372036854775808n, -1n)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of i64_0: div_s (instance 3)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_div_s, -9223372036854775808n, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of i64_0: div_s (instance 4)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 1n, 1n);
        expect(_div_s_result).toBe(1n);
    });

    _test("execution of i64_0: div_s (instance 5)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 0n, 1n);
        expect(_div_s_result).toBe(0n);
    });

    _test("execution of i64_0: div_s (instance 6)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 0n, -1n);
        expect(_div_s_result).toBe(0n);
    });

    _test("execution of i64_0: div_s (instance 7)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -1n, -1n);
        expect(_div_s_result).toBe(1n);
    });

    _test("execution of i64_0: div_s (instance 8)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -9223372036854775808n, 2n);
        expect(_div_s_result).toBe(-4611686018427387904n);
    });

    _test("execution of i64_0: div_s (instance 9)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -9223372036854775807n, 1000n);
        expect(_div_s_result).toBe(-9223372036854775n);
    });

    _test("execution of i64_0: div_s (instance 10)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 5n, 2n);
        expect(_div_s_result).toBe(2n);
    });

    _test("execution of i64_0: div_s (instance 11)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -5n, 2n);
        expect(_div_s_result).toBe(-2n);
    });

    _test("execution of i64_0: div_s (instance 12)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 5n, -2n);
        expect(_div_s_result).toBe(-2n);
    });

    _test("execution of i64_0: div_s (instance 13)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -5n, -2n);
        expect(_div_s_result).toBe(2n);
    });

    _test("execution of i64_0: div_s (instance 14)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 7n, 3n);
        expect(_div_s_result).toBe(2n);
    });

    _test("execution of i64_0: div_s (instance 15)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -7n, 3n);
        expect(_div_s_result).toBe(-2n);
    });

    _test("execution of i64_0: div_s (instance 16)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 7n, -3n);
        expect(_div_s_result).toBe(-2n);
    });

    _test("execution of i64_0: div_s (instance 17)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, -7n, -3n);
        expect(_div_s_result).toBe(2n);
    });

    _test("execution of i64_0: div_s (instance 18)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 11n, 5n);
        expect(_div_s_result).toBe(2n);
    });

    _test("execution of i64_0: div_s (instance 19)", () => {
        let _div_s = module.getExport("div_s");
        expect(_div_s).not.toBeUndefined();
        let _div_s_result = module.invoke(_div_s, 17n, 7n);
        expect(_div_s_result).toBe(2n);
    });

    _test("execution of i64_0: div_u (instance 0)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        expect(() => module.invoke(_div_u, 1n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: div_u (instance 1)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        expect(() => module.invoke(_div_u, 0n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: div_u (instance 2)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 1n, 1n);
        expect(_div_u_result).toBe(1n);
    });

    _test("execution of i64_0: div_u (instance 3)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 0n, 1n);
        expect(_div_u_result).toBe(0n);
    });

    _test("execution of i64_0: div_u (instance 4)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -1n, -1n);
        expect(_div_u_result).toBe(1n);
    });

    _test("execution of i64_0: div_u (instance 5)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -9223372036854775808n, -1n);
        expect(_div_u_result).toBe(0n);
    });

    _test("execution of i64_0: div_u (instance 6)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -9223372036854775808n, 2n);
        expect(_div_u_result).toBe(4611686018427387904n);
    });

    _test("execution of i64_0: div_u (instance 7)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -8074936608141340688n, 4294967297n);
        expect(_div_u_result).toBe(2414874607n);
    });

    _test("execution of i64_0: div_u (instance 8)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -9223372036854775807n, 1000n);
        expect(_div_u_result).toBe(9223372036854775n);
    });

    _test("execution of i64_0: div_u (instance 9)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 5n, 2n);
        expect(_div_u_result).toBe(2n);
    });

    _test("execution of i64_0: div_u (instance 10)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -5n, 2n);
        expect(_div_u_result).toBe(9223372036854775805n);
    });

    _test("execution of i64_0: div_u (instance 11)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 5n, -2n);
        expect(_div_u_result).toBe(0n);
    });

    _test("execution of i64_0: div_u (instance 12)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, -5n, -2n);
        expect(_div_u_result).toBe(0n);
    });

    _test("execution of i64_0: div_u (instance 13)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 7n, 3n);
        expect(_div_u_result).toBe(2n);
    });

    _test("execution of i64_0: div_u (instance 14)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 11n, 5n);
        expect(_div_u_result).toBe(2n);
    });

    _test("execution of i64_0: div_u (instance 15)", () => {
        let _div_u = module.getExport("div_u");
        expect(_div_u).not.toBeUndefined();
        let _div_u_result = module.invoke(_div_u, 17n, 7n);
        expect(_div_u_result).toBe(2n);
    });

    _test("execution of i64_0: rem_s (instance 0)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        expect(() => module.invoke(_rem_s, 1n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: rem_s (instance 1)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        expect(() => module.invoke(_rem_s, 0n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: rem_s (instance 2)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 9223372036854775807n, -1n);
        expect(_rem_s_result).toBe(0n);
    });

    _test("execution of i64_0: rem_s (instance 3)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 1n, 1n);
        expect(_rem_s_result).toBe(0n);
    });

    _test("execution of i64_0: rem_s (instance 4)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 0n, 1n);
        expect(_rem_s_result).toBe(0n);
    });

    _test("execution of i64_0: rem_s (instance 5)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 0n, -1n);
        expect(_rem_s_result).toBe(0n);
    });

    _test("execution of i64_0: rem_s (instance 6)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -1n, -1n);
        expect(_rem_s_result).toBe(0n);
    });

    _test("execution of i64_0: rem_s (instance 7)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -9223372036854775808n, -1n);
        expect(_rem_s_result).toBe(0n);
    });

    _test("execution of i64_0: rem_s (instance 8)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -9223372036854775808n, 2n);
        expect(_rem_s_result).toBe(0n);
    });

    _test("execution of i64_0: rem_s (instance 9)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -9223372036854775807n, 1000n);
        expect(_rem_s_result).toBe(-807n);
    });

    _test("execution of i64_0: rem_s (instance 10)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 5n, 2n);
        expect(_rem_s_result).toBe(1n);
    });

    _test("execution of i64_0: rem_s (instance 11)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -5n, 2n);
        expect(_rem_s_result).toBe(-1n);
    });

    _test("execution of i64_0: rem_s (instance 12)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 5n, -2n);
        expect(_rem_s_result).toBe(1n);
    });

    _test("execution of i64_0: rem_s (instance 13)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -5n, -2n);
        expect(_rem_s_result).toBe(-1n);
    });

    _test("execution of i64_0: rem_s (instance 14)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 7n, 3n);
        expect(_rem_s_result).toBe(1n);
    });

    _test("execution of i64_0: rem_s (instance 15)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -7n, 3n);
        expect(_rem_s_result).toBe(-1n);
    });

    _test("execution of i64_0: rem_s (instance 16)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 7n, -3n);
        expect(_rem_s_result).toBe(1n);
    });

    _test("execution of i64_0: rem_s (instance 17)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, -7n, -3n);
        expect(_rem_s_result).toBe(-1n);
    });

    _test("execution of i64_0: rem_s (instance 18)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 11n, 5n);
        expect(_rem_s_result).toBe(1n);
    });

    _test("execution of i64_0: rem_s (instance 19)", () => {
        let _rem_s = module.getExport("rem_s");
        expect(_rem_s).not.toBeUndefined();
        let _rem_s_result = module.invoke(_rem_s, 17n, 7n);
        expect(_rem_s_result).toBe(3n);
    });

    _test("execution of i64_0: rem_u (instance 0)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        expect(() => module.invoke(_rem_u, 1n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: rem_u (instance 1)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        expect(() => module.invoke(_rem_u, 0n, 0n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of i64_0: rem_u (instance 2)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 1n, 1n);
        expect(_rem_u_result).toBe(0n);
    });

    _test("execution of i64_0: rem_u (instance 3)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 0n, 1n);
        expect(_rem_u_result).toBe(0n);
    });

    _test("execution of i64_0: rem_u (instance 4)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -1n, -1n);
        expect(_rem_u_result).toBe(0n);
    });

    _test("execution of i64_0: rem_u (instance 5)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -9223372036854775808n, -1n);
        expect(_rem_u_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: rem_u (instance 6)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -9223372036854775808n, 2n);
        expect(_rem_u_result).toBe(0n);
    });

    _test("execution of i64_0: rem_u (instance 7)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -8074936608141340688n, 4294967297n);
        expect(_rem_u_result).toBe(2147483649n);
    });

    _test("execution of i64_0: rem_u (instance 8)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -9223372036854775807n, 1000n);
        expect(_rem_u_result).toBe(809n);
    });

    _test("execution of i64_0: rem_u (instance 9)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 5n, 2n);
        expect(_rem_u_result).toBe(1n);
    });

    _test("execution of i64_0: rem_u (instance 10)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -5n, 2n);
        expect(_rem_u_result).toBe(1n);
    });

    _test("execution of i64_0: rem_u (instance 11)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 5n, -2n);
        expect(_rem_u_result).toBe(5n);
    });

    _test("execution of i64_0: rem_u (instance 12)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, -5n, -2n);
        expect(_rem_u_result).toBe(-5n);
    });

    _test("execution of i64_0: rem_u (instance 13)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 7n, 3n);
        expect(_rem_u_result).toBe(1n);
    });

    _test("execution of i64_0: rem_u (instance 14)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 11n, 5n);
        expect(_rem_u_result).toBe(1n);
    });

    _test("execution of i64_0: rem_u (instance 15)", () => {
        let _rem_u = module.getExport("rem_u");
        expect(_rem_u).not.toBeUndefined();
        let _rem_u_result = module.invoke(_rem_u, 17n, 7n);
        expect(_rem_u_result).toBe(3n);
    });

    _test("execution of i64_0: and (instance 0)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 1n, 0n);
        expect(_and_result).toBe(0n);
    });

    _test("execution of i64_0: and (instance 1)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0n, 1n);
        expect(_and_result).toBe(0n);
    });

    _test("execution of i64_0: and (instance 2)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 1n, 1n);
        expect(_and_result).toBe(1n);
    });

    _test("execution of i64_0: and (instance 3)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0n, 0n);
        expect(_and_result).toBe(0n);
    });

    _test("execution of i64_0: and (instance 4)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 9223372036854775807n, -9223372036854775808n);
        expect(_and_result).toBe(0n);
    });

    _test("execution of i64_0: and (instance 5)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 9223372036854775807n, -1n);
        expect(_and_result).toBe(9223372036854775807n);
    });

    _test("execution of i64_0: and (instance 6)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 4042326015n, 4294963440n);
        expect(_and_result).toBe(4042322160n);
    });

    _test("execution of i64_0: and (instance 7)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, -1n, -1n);
        expect(_and_result).toBe(-1n);
    });

    _test("execution of i64_0: or (instance 0)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 1n, 0n);
        expect(_or_result).toBe(1n);
    });

    _test("execution of i64_0: or (instance 1)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0n, 1n);
        expect(_or_result).toBe(1n);
    });

    _test("execution of i64_0: or (instance 2)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 1n, 1n);
        expect(_or_result).toBe(1n);
    });

    _test("execution of i64_0: or (instance 3)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0n, 0n);
        expect(_or_result).toBe(0n);
    });

    _test("execution of i64_0: or (instance 4)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 9223372036854775807n, -9223372036854775808n);
        expect(_or_result).toBe(-1n);
    });

    _test("execution of i64_0: or (instance 5)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, -9223372036854775808n, 0n);
        expect(_or_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: or (instance 6)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 4042326015n, 4294963440n);
        expect(_or_result).toBe(4294967295n);
    });

    _test("execution of i64_0: or (instance 7)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, -1n, -1n);
        expect(_or_result).toBe(-1n);
    });

    _test("execution of i64_0: xor (instance 0)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 1n, 0n);
        expect(_xor_result).toBe(1n);
    });

    _test("execution of i64_0: xor (instance 1)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0n, 1n);
        expect(_xor_result).toBe(1n);
    });

    _test("execution of i64_0: xor (instance 2)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 1n, 1n);
        expect(_xor_result).toBe(0n);
    });

    _test("execution of i64_0: xor (instance 3)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0n, 0n);
        expect(_xor_result).toBe(0n);
    });

    _test("execution of i64_0: xor (instance 4)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 9223372036854775807n, -9223372036854775808n);
        expect(_xor_result).toBe(-1n);
    });

    _test("execution of i64_0: xor (instance 5)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -9223372036854775808n, 0n);
        expect(_xor_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: xor (instance 6)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -1n, -9223372036854775808n);
        expect(_xor_result).toBe(9223372036854775807n);
    });

    _test("execution of i64_0: xor (instance 7)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -1n, 9223372036854775807n);
        expect(_xor_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: xor (instance 8)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 4042326015n, 4294963440n);
        expect(_xor_result).toBe(252645135n);
    });

    _test("execution of i64_0: xor (instance 9)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, -1n, -1n);
        expect(_xor_result).toBe(0n);
    });

    _test("execution of i64_0: shl (instance 0)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1n, 1n);
        expect(_shl_result).toBe(2n);
    });

    _test("execution of i64_0: shl (instance 1)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1n, 0n);
        expect(_shl_result).toBe(1n);
    });

    _test("execution of i64_0: shl (instance 2)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 9223372036854775807n, 1n);
        expect(_shl_result).toBe(-2n);
    });

    _test("execution of i64_0: shl (instance 3)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, -1n, 1n);
        expect(_shl_result).toBe(-2n);
    });

    _test("execution of i64_0: shl (instance 4)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, -9223372036854775808n, 1n);
        expect(_shl_result).toBe(0n);
    });

    _test("execution of i64_0: shl (instance 5)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 4611686018427387904n, 1n);
        expect(_shl_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: shl (instance 6)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1n, 63n);
        expect(_shl_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: shl (instance 7)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1n, 64n);
        expect(_shl_result).toBe(1n);
    });

    _test("execution of i64_0: shl (instance 8)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1n, 65n);
        expect(_shl_result).toBe(2n);
    });

    _test("execution of i64_0: shl (instance 9)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1n, -1n);
        expect(_shl_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: shl (instance 10)", () => {
        let _shl = module.getExport("shl");
        expect(_shl).not.toBeUndefined();
        let _shl_result = module.invoke(_shl, 1n, 9223372036854775807n);
        expect(_shl_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: shr_s (instance 0)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1n, 1n);
        expect(_shr_s_result).toBe(0n);
    });

    _test("execution of i64_0: shr_s (instance 1)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1n, 0n);
        expect(_shr_s_result).toBe(1n);
    });

    _test("execution of i64_0: shr_s (instance 2)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1n, 1n);
        expect(_shr_s_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_s (instance 3)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 9223372036854775807n, 1n);
        expect(_shr_s_result).toBe(4611686018427387903n);
    });

    _test("execution of i64_0: shr_s (instance 4)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -9223372036854775808n, 1n);
        expect(_shr_s_result).toBe(-4611686018427387904n);
    });

    _test("execution of i64_0: shr_s (instance 5)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 4611686018427387904n, 1n);
        expect(_shr_s_result).toBe(2305843009213693952n);
    });

    _test("execution of i64_0: shr_s (instance 6)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1n, 64n);
        expect(_shr_s_result).toBe(1n);
    });

    _test("execution of i64_0: shr_s (instance 7)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1n, 65n);
        expect(_shr_s_result).toBe(0n);
    });

    _test("execution of i64_0: shr_s (instance 8)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1n, -1n);
        expect(_shr_s_result).toBe(0n);
    });

    _test("execution of i64_0: shr_s (instance 9)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1n, 9223372036854775807n);
        expect(_shr_s_result).toBe(0n);
    });

    _test("execution of i64_0: shr_s (instance 10)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, 1n, -9223372036854775808n);
        expect(_shr_s_result).toBe(1n);
    });

    _test("execution of i64_0: shr_s (instance 11)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -9223372036854775808n, 63n);
        expect(_shr_s_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_s (instance 12)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1n, 64n);
        expect(_shr_s_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_s (instance 13)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1n, 65n);
        expect(_shr_s_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_s (instance 14)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1n, -1n);
        expect(_shr_s_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_s (instance 15)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1n, 9223372036854775807n);
        expect(_shr_s_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_s (instance 16)", () => {
        let _shr_s = module.getExport("shr_s");
        expect(_shr_s).not.toBeUndefined();
        let _shr_s_result = module.invoke(_shr_s, -1n, -9223372036854775808n);
        expect(_shr_s_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_u (instance 0)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1n, 1n);
        expect(_shr_u_result).toBe(0n);
    });

    _test("execution of i64_0: shr_u (instance 1)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1n, 0n);
        expect(_shr_u_result).toBe(1n);
    });

    _test("execution of i64_0: shr_u (instance 2)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1n, 1n);
        expect(_shr_u_result).toBe(9223372036854775807n);
    });

    _test("execution of i64_0: shr_u (instance 3)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 9223372036854775807n, 1n);
        expect(_shr_u_result).toBe(4611686018427387903n);
    });

    _test("execution of i64_0: shr_u (instance 4)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -9223372036854775808n, 1n);
        expect(_shr_u_result).toBe(4611686018427387904n);
    });

    _test("execution of i64_0: shr_u (instance 5)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 4611686018427387904n, 1n);
        expect(_shr_u_result).toBe(2305843009213693952n);
    });

    _test("execution of i64_0: shr_u (instance 6)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1n, 64n);
        expect(_shr_u_result).toBe(1n);
    });

    _test("execution of i64_0: shr_u (instance 7)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1n, 65n);
        expect(_shr_u_result).toBe(0n);
    });

    _test("execution of i64_0: shr_u (instance 8)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1n, -1n);
        expect(_shr_u_result).toBe(0n);
    });

    _test("execution of i64_0: shr_u (instance 9)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1n, 9223372036854775807n);
        expect(_shr_u_result).toBe(0n);
    });

    _test("execution of i64_0: shr_u (instance 10)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, 1n, -9223372036854775808n);
        expect(_shr_u_result).toBe(1n);
    });

    _test("execution of i64_0: shr_u (instance 11)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -9223372036854775808n, 63n);
        expect(_shr_u_result).toBe(1n);
    });

    _test("execution of i64_0: shr_u (instance 12)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1n, 64n);
        expect(_shr_u_result).toBe(-1n);
    });

    _test("execution of i64_0: shr_u (instance 13)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1n, 65n);
        expect(_shr_u_result).toBe(9223372036854775807n);
    });

    _test("execution of i64_0: shr_u (instance 14)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1n, -1n);
        expect(_shr_u_result).toBe(1n);
    });

    _test("execution of i64_0: shr_u (instance 15)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1n, 9223372036854775807n);
        expect(_shr_u_result).toBe(1n);
    });

    _test("execution of i64_0: shr_u (instance 16)", () => {
        let _shr_u = module.getExport("shr_u");
        expect(_shr_u).not.toBeUndefined();
        let _shr_u_result = module.invoke(_shr_u, -1n, -9223372036854775808n);
        expect(_shr_u_result).toBe(-1n);
    });

    _test("execution of i64_0: rotl (instance 0)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1n, 1n);
        expect(_rotl_result).toBe(2n);
    });

    _test("execution of i64_0: rotl (instance 1)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1n, 0n);
        expect(_rotl_result).toBe(1n);
    });

    _test("execution of i64_0: rotl (instance 2)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -1n, 1n);
        expect(_rotl_result).toBe(-1n);
    });

    _test("execution of i64_0: rotl (instance 3)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1n, 64n);
        expect(_rotl_result).toBe(1n);
    });

    _test("execution of i64_0: rotl (instance 4)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -6067025490386449714n, 1n);
        expect(_rotl_result).toBe(6312693092936652189n);
    });

    _test("execution of i64_0: rotl (instance 5)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -144115184384868352n, 4n);
        expect(_rotl_result).toBe(-2305842950157893617n);
    });

    _test("execution of i64_0: rotl (instance 6)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -6067173104435169271n, 53n);
        expect(_rotl_result).toBe(87109505680009935n);
    });

    _test("execution of i64_0: rotl (instance 7)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -6066028401059725156n, 63n);
        expect(_rotl_result).toBe(6190357836324913230n);
    });

    _test("execution of i64_0: rotl (instance 8)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -6067173104435169271n, 245n);
        expect(_rotl_result).toBe(87109505680009935n);
    });

    _test("execution of i64_0: rotl (instance 9)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -6067067139002042359n, -19n);
        expect(_rotl_result).toBe(-3530481836149793302n);
    });

    _test("execution of i64_0: rotl (instance 10)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -6066028401059725156n, -9223372036854775745n);
        expect(_rotl_result).toBe(6190357836324913230n);
    });

    _test("execution of i64_0: rotl (instance 11)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, 1n, 63n);
        expect(_rotl_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: rotl (instance 12)", () => {
        let _rotl = module.getExport("rotl");
        expect(_rotl).not.toBeUndefined();
        let _rotl_result = module.invoke(_rotl, -9223372036854775808n, 1n);
        expect(_rotl_result).toBe(1n);
    });

    _test("execution of i64_0: rotr (instance 0)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1n, 1n);
        expect(_rotr_result).toBe(-9223372036854775808n);
    });

    _test("execution of i64_0: rotr (instance 1)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1n, 0n);
        expect(_rotr_result).toBe(1n);
    });

    _test("execution of i64_0: rotr (instance 2)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -1n, 1n);
        expect(_rotr_result).toBe(-1n);
    });

    _test("execution of i64_0: rotr (instance 3)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1n, 64n);
        expect(_rotr_result).toBe(1n);
    });

    _test("execution of i64_0: rotr (instance 4)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -6067025490386449714n, 1n);
        expect(_rotr_result).toBe(6189859291661550951n);
    });

    _test("execution of i64_0: rotr (instance 5)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -144115184384868352n, 4n);
        expect(_rotr_result).toBe(1143914305582792704n);
    });

    _test("execution of i64_0: rotr (instance 6)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -6067173104435169271n, 53n);
        expect(_rotr_result).toBe(7534987797011123550n);
    });

    _test("execution of i64_0: rotr (instance 7)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -6066028401059725156n, 63n);
        expect(_rotr_result).toBe(6314687271590101305n);
    });

    _test("execution of i64_0: rotr (instance 8)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -6067173104435169271n, 245n);
        expect(_rotr_result).toBe(7534987797011123550n);
    });

    _test("execution of i64_0: rotr (instance 9)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -6067067139002042359n, -19n);
        expect(_rotr_result).toBe(-7735078922541506965n);
    });

    _test("execution of i64_0: rotr (instance 10)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -6066028401059725156n, -9223372036854775745n);
        expect(_rotr_result).toBe(6314687271590101305n);
    });

    _test("execution of i64_0: rotr (instance 11)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, 1n, 63n);
        expect(_rotr_result).toBe(2n);
    });

    _test("execution of i64_0: rotr (instance 12)", () => {
        let _rotr = module.getExport("rotr");
        expect(_rotr).not.toBeUndefined();
        let _rotr_result = module.invoke(_rotr, -9223372036854775808n, 63n);
        expect(_rotr_result).toBe(1n);
    });

    _test("execution of i64_0: clz (instance 0)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, -1n);
        expect(_clz_result).toBe(0n);
    });

    _test("execution of i64_0: clz (instance 1)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 0n);
        expect(_clz_result).toBe(64n);
    });

    _test("execution of i64_0: clz (instance 2)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 32768n);
        expect(_clz_result).toBe(48n);
    });

    _test("execution of i64_0: clz (instance 3)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 255n);
        expect(_clz_result).toBe(56n);
    });

    _test("execution of i64_0: clz (instance 4)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, -9223372036854775808n);
        expect(_clz_result).toBe(0n);
    });

    _test("execution of i64_0: clz (instance 5)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 1n);
        expect(_clz_result).toBe(63n);
    });

    _test("execution of i64_0: clz (instance 6)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 2n);
        expect(_clz_result).toBe(62n);
    });

    _test("execution of i64_0: clz (instance 7)", () => {
        let _clz = module.getExport("clz");
        expect(_clz).not.toBeUndefined();
        let _clz_result = module.invoke(_clz, 9223372036854775807n);
        expect(_clz_result).toBe(1n);
    });

    _test("execution of i64_0: ctz (instance 0)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, -1n);
        expect(_ctz_result).toBe(0n);
    });

    _test("execution of i64_0: ctz (instance 1)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 0n);
        expect(_ctz_result).toBe(64n);
    });

    _test("execution of i64_0: ctz (instance 2)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 32768n);
        expect(_ctz_result).toBe(15n);
    });

    _test("execution of i64_0: ctz (instance 3)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 65536n);
        expect(_ctz_result).toBe(16n);
    });

    _test("execution of i64_0: ctz (instance 4)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, -9223372036854775808n);
        expect(_ctz_result).toBe(63n);
    });

    _test("execution of i64_0: ctz (instance 5)", () => {
        let _ctz = module.getExport("ctz");
        expect(_ctz).not.toBeUndefined();
        let _ctz_result = module.invoke(_ctz, 9223372036854775807n);
        expect(_ctz_result).toBe(0n);
    });

    _test("execution of i64_0: popcnt (instance 0)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -1n);
        expect(_popcnt_result).toBe(64n);
    });

    _test("execution of i64_0: popcnt (instance 1)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, 0n);
        expect(_popcnt_result).toBe(0n);
    });

    _test("execution of i64_0: popcnt (instance 2)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, 32768n);
        expect(_popcnt_result).toBe(1n);
    });

    _test("execution of i64_0: popcnt (instance 3)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -9223231297218904064n);
        expect(_popcnt_result).toBe(4n);
    });

    _test("execution of i64_0: popcnt (instance 4)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, 9223372036854775807n);
        expect(_popcnt_result).toBe(63n);
    });

    _test("execution of i64_0: popcnt (instance 5)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -6148914692668172971n);
        expect(_popcnt_result).toBe(32n);
    });

    _test("execution of i64_0: popcnt (instance 6)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -7378697629197489494n);
        expect(_popcnt_result).toBe(32n);
    });

    _test("execution of i64_0: popcnt (instance 7)", () => {
        let _popcnt = module.getExport("popcnt");
        expect(_popcnt).not.toBeUndefined();
        let _popcnt_result = module.invoke(_popcnt, -2401053088876216593n);
        expect(_popcnt_result).toBe(48n);
    });

    _test("execution of i64_0: extend8_s (instance 0)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 0n);
        expect(_extend8_s_result).toBe(0n);
    });

    _test("execution of i64_0: extend8_s (instance 1)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 127n);
        expect(_extend8_s_result).toBe(127n);
    });

    _test("execution of i64_0: extend8_s (instance 2)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 128n);
        expect(_extend8_s_result).toBe(-128n);
    });

    _test("execution of i64_0: extend8_s (instance 3)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 255n);
        expect(_extend8_s_result).toBe(-1n);
    });

    _test("execution of i64_0: extend8_s (instance 4)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, 81985529216486656n);
        expect(_extend8_s_result).toBe(0n);
    });

    _test("execution of i64_0: extend8_s (instance 5)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, -81985529216486784n);
        expect(_extend8_s_result).toBe(-0x80n);
    });

    _test("execution of i64_0: extend8_s (instance 6)", () => {
        let _extend8_s = module.getExport("extend8_s");
        expect(_extend8_s).not.toBeUndefined();
        let _extend8_s_result = module.invoke(_extend8_s, -1n);
        expect(_extend8_s_result).toBe(-1n);
    });

    _test("execution of i64_0: extend16_s (instance 0)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 0n);
        expect(_extend16_s_result).toBe(0n);
    });

    _test("execution of i64_0: extend16_s (instance 1)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 32767n);
        expect(_extend16_s_result).toBe(32767n);
    });

    _test("execution of i64_0: extend16_s (instance 2)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 32768n);
        expect(_extend16_s_result).toBe(-32768n);
    });

    _test("execution of i64_0: extend16_s (instance 3)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 65535n);
        expect(_extend16_s_result).toBe(-1n);
    });

    _test("execution of i64_0: extend16_s (instance 4)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, 1311768467463733248n);
        expect(_extend16_s_result).toBe(0n);
    });

    _test("execution of i64_0: extend16_s (instance 5)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, -81985529216466944n);
        expect(_extend16_s_result).toBe(-0x8000n);
    });

    _test("execution of i64_0: extend16_s (instance 6)", () => {
        let _extend16_s = module.getExport("extend16_s");
        expect(_extend16_s).not.toBeUndefined();
        let _extend16_s_result = module.invoke(_extend16_s, -1n);
        expect(_extend16_s_result).toBe(-1n);
    });

    _test("execution of i64_0: extend32_s (instance 0)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 0n);
        expect(_extend32_s_result).toBe(0n);
    });

    _test("execution of i64_0: extend32_s (instance 1)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 32767n);
        expect(_extend32_s_result).toBe(32767n);
    });

    _test("execution of i64_0: extend32_s (instance 2)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 32768n);
        expect(_extend32_s_result).toBe(32768n);
    });

    _test("execution of i64_0: extend32_s (instance 3)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 65535n);
        expect(_extend32_s_result).toBe(65535n);
    });

    _test("execution of i64_0: extend32_s (instance 4)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 2147483647n);
        expect(_extend32_s_result).toBe(2147483647n);
    });

    _test("execution of i64_0: extend32_s (instance 5)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 2147483648n);
        expect(_extend32_s_result).toBe(-0x80000000n);
    });

    _test("execution of i64_0: extend32_s (instance 6)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 4294967295n);
        expect(_extend32_s_result).toBe(-1n);
    });

    _test("execution of i64_0: extend32_s (instance 7)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, 81985526906748928n);
        expect(_extend32_s_result).toBe(0n);
    });

    _test("execution of i64_0: extend32_s (instance 8)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, -81985529054232576n);
        expect(_extend32_s_result).toBe(-0x80000000n);
    });

    _test("execution of i64_0: extend32_s (instance 9)", () => {
        let _extend32_s = module.getExport("extend32_s");
        expect(_extend32_s).not.toBeUndefined();
        let _extend32_s_result = module.invoke(_extend32_s, -1n);
        expect(_extend32_s_result).toBe(-1n);
    });

    _test("execution of i64_0: eqz (instance 0)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, 0n);
        expect(_eqz_result).toBe(1);
    });

    _test("execution of i64_0: eqz (instance 1)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, 1n);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i64_0: eqz (instance 2)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, -9223372036854775808n);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i64_0: eqz (instance 3)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, 9223372036854775807n);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i64_0: eqz (instance 4)", () => {
        let _eqz = module.getExport("eqz");
        expect(_eqz).not.toBeUndefined();
        let _eqz_result = module.invoke(_eqz, -1n);
        expect(_eqz_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 0)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0n, 0n);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i64_0: eq (instance 1)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1n, 1n);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i64_0: eq (instance 2)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1n, 1n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 3)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -9223372036854775808n, -9223372036854775808n);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i64_0: eq (instance 4)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 9223372036854775807n, 9223372036854775807n);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i64_0: eq (instance 5)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1n, -1n);
        expect(_eq_result).toBe(1);
    });

    _test("execution of i64_0: eq (instance 6)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 1n, 0n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 7)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0n, 1n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 8)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -9223372036854775808n, 0n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 9)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0n, -9223372036854775808n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 10)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -9223372036854775808n, -1n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 11)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -1n, -9223372036854775808n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 12)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, -9223372036854775808n, 9223372036854775807n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: eq (instance 13)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 9223372036854775807n, -9223372036854775808n);
        expect(_eq_result).toBe(0);
    });

    _test("execution of i64_0: ne (instance 0)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0n, 0n);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i64_0: ne (instance 1)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1n, 1n);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i64_0: ne (instance 2)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1n, 1n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 3)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -9223372036854775808n, -9223372036854775808n);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i64_0: ne (instance 4)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 9223372036854775807n, 9223372036854775807n);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i64_0: ne (instance 5)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1n, -1n);
        expect(_ne_result).toBe(0);
    });

    _test("execution of i64_0: ne (instance 6)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 1n, 0n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 7)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0n, 1n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 8)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -9223372036854775808n, 0n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 9)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0n, -9223372036854775808n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 10)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -9223372036854775808n, -1n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 11)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -1n, -9223372036854775808n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 12)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, -9223372036854775808n, 9223372036854775807n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: ne (instance 13)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 9223372036854775807n, -9223372036854775808n);
        expect(_ne_result).toBe(1);
    });

    _test("execution of i64_0: lt_s (instance 0)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0n, 0n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 1)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 1n, 1n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 2)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -1n, 1n);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i64_0: lt_s (instance 3)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -9223372036854775808n, -9223372036854775808n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 4)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 9223372036854775807n, 9223372036854775807n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 5)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -1n, -1n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 6)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 1n, 0n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 7)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0n, 1n);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i64_0: lt_s (instance 8)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -9223372036854775808n, 0n);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i64_0: lt_s (instance 9)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0n, -9223372036854775808n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 10)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -9223372036854775808n, -1n);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i64_0: lt_s (instance 11)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -1n, -9223372036854775808n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_s (instance 12)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, -9223372036854775808n, 9223372036854775807n);
        expect(_lt_s_result).toBe(1);
    });

    _test("execution of i64_0: lt_s (instance 13)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 9223372036854775807n, -9223372036854775808n);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 0)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0n, 0n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 1)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 1n, 1n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 2)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -1n, 1n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 3)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -9223372036854775808n, -9223372036854775808n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 4)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 9223372036854775807n, 9223372036854775807n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 5)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -1n, -1n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 6)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 1n, 0n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 7)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0n, 1n);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i64_0: lt_u (instance 8)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -9223372036854775808n, 0n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 9)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0n, -9223372036854775808n);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i64_0: lt_u (instance 10)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -9223372036854775808n, -1n);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i64_0: lt_u (instance 11)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -1n, -9223372036854775808n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 12)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, -9223372036854775808n, 9223372036854775807n);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of i64_0: lt_u (instance 13)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 9223372036854775807n, -9223372036854775808n);
        expect(_lt_u_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 0)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0n, 0n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 1)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 1n, 1n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 2)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -1n, 1n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 3)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -9223372036854775808n, -9223372036854775808n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 4)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 9223372036854775807n, 9223372036854775807n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 5)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -1n, -1n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 6)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 1n, 0n);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i64_0: le_s (instance 7)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0n, 1n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 8)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -9223372036854775808n, 0n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 9)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0n, -9223372036854775808n);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i64_0: le_s (instance 10)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -9223372036854775808n, -1n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 11)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -1n, -9223372036854775808n);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i64_0: le_s (instance 12)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, -9223372036854775808n, 9223372036854775807n);
        expect(_le_s_result).toBe(1);
    });

    _test("execution of i64_0: le_s (instance 13)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 9223372036854775807n, -9223372036854775808n);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of i64_0: le_u (instance 0)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0n, 0n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 1)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 1n, 1n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 2)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -1n, 1n);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i64_0: le_u (instance 3)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -9223372036854775808n, -9223372036854775808n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 4)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 9223372036854775807n, 9223372036854775807n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 5)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -1n, -1n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 6)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 1n, 0n);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i64_0: le_u (instance 7)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0n, 1n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 8)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -9223372036854775808n, 0n);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i64_0: le_u (instance 9)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0n, -9223372036854775808n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 10)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -9223372036854775808n, -1n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: le_u (instance 11)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -1n, -9223372036854775808n);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i64_0: le_u (instance 12)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, -9223372036854775808n, 9223372036854775807n);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of i64_0: le_u (instance 13)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 9223372036854775807n, -9223372036854775808n);
        expect(_le_u_result).toBe(1);
    });

    _test("execution of i64_0: gt_s (instance 0)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0n, 0n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 1)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 1n, 1n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 2)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -1n, 1n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 3)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -9223372036854775808n, -9223372036854775808n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 4)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 9223372036854775807n, 9223372036854775807n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 5)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -1n, -1n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 6)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 1n, 0n);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i64_0: gt_s (instance 7)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0n, 1n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 8)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -9223372036854775808n, 0n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 9)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0n, -9223372036854775808n);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i64_0: gt_s (instance 10)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -9223372036854775808n, -1n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 11)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -1n, -9223372036854775808n);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i64_0: gt_s (instance 12)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, -9223372036854775808n, 9223372036854775807n);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of i64_0: gt_s (instance 13)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 9223372036854775807n, -9223372036854775808n);
        expect(_gt_s_result).toBe(1);
    });

    _test("execution of i64_0: gt_u (instance 0)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0n, 0n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 1)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 1n, 1n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 2)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -1n, 1n);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i64_0: gt_u (instance 3)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -9223372036854775808n, -9223372036854775808n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 4)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 9223372036854775807n, 9223372036854775807n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 5)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -1n, -1n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 6)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 1n, 0n);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i64_0: gt_u (instance 7)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0n, 1n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 8)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -9223372036854775808n, 0n);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i64_0: gt_u (instance 9)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0n, -9223372036854775808n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 10)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -9223372036854775808n, -1n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: gt_u (instance 11)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -1n, -9223372036854775808n);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i64_0: gt_u (instance 12)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, -9223372036854775808n, 9223372036854775807n);
        expect(_gt_u_result).toBe(1);
    });

    _test("execution of i64_0: gt_u (instance 13)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 9223372036854775807n, -9223372036854775808n);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of i64_0: ge_s (instance 0)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0n, 0n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 1)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 1n, 1n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 2)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -1n, 1n);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i64_0: ge_s (instance 3)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -9223372036854775808n, -9223372036854775808n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 4)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 9223372036854775807n, 9223372036854775807n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 5)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -1n, -1n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 6)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 1n, 0n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 7)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0n, 1n);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i64_0: ge_s (instance 8)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -9223372036854775808n, 0n);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i64_0: ge_s (instance 9)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0n, -9223372036854775808n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 10)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -9223372036854775808n, -1n);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i64_0: ge_s (instance 11)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -1n, -9223372036854775808n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_s (instance 12)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, -9223372036854775808n, 9223372036854775807n);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of i64_0: ge_s (instance 13)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 9223372036854775807n, -9223372036854775808n);
        expect(_ge_s_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 0)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0n, 0n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 1)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 1n, 1n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 2)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -1n, 1n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 3)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -9223372036854775808n, -9223372036854775808n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 4)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 9223372036854775807n, 9223372036854775807n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 5)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -1n, -1n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 6)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 1n, 0n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 7)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0n, 1n);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of i64_0: ge_u (instance 8)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -9223372036854775808n, 0n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 9)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0n, -9223372036854775808n);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of i64_0: ge_u (instance 10)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -9223372036854775808n, -1n);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of i64_0: ge_u (instance 11)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -1n, -9223372036854775808n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 12)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, -9223372036854775808n, 9223372036854775807n);
        expect(_ge_u_result).toBe(1);
    });

    _test("execution of i64_0: ge_u (instance 13)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 9223372036854775807n, -9223372036854775808n);
        expect(_ge_u_result).toBe(0);
    });
});

describe("i64_1", () => {
    let _test = test;

    _test("execution of i64_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_2", () => {
    let _test = test;

    _test("execution of i64_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_3", () => {
    let _test = test;

    _test("execution of i64_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_4", () => {
    let _test = test;

    _test("execution of i64_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_5", () => {
    let _test = test;

    _test("execution of i64_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_6", () => {
    let _test = test;

    _test("execution of i64_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_7", () => {
    let _test = test;

    _test("execution of i64_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_8", () => {
    let _test = test;

    _test("execution of i64_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_9", () => {
    let _test = test;

    _test("execution of i64_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_10", () => {
    let _test = test;

    _test("execution of i64_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_11", () => {
    let _test = test;

    _test("execution of i64_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_12", () => {
    let _test = test;

    _test("execution of i64_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_13", () => {
    let _test = test;

    _test("execution of i64_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_14", () => {
    let _test = test;

    _test("execution of i64_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_15", () => {
    let _test = test;

    _test("execution of i64_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_16", () => {
    let _test = test;

    _test("execution of i64_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_17", () => {
    let _test = test;

    _test("execution of i64_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_18", () => {
    let _test = test;

    _test("execution of i64_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_19", () => {
    let _test = test;

    _test("execution of i64_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_20", () => {
    let _test = test;

    _test("execution of i64_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_21", () => {
    let _test = test;

    _test("execution of i64_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_22", () => {
    let _test = test;

    _test("execution of i64_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_23", () => {
    let _test = test;

    _test("execution of i64_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_24", () => {
    let _test = test;

    _test("execution of i64_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_25", () => {
    let _test = test;

    _test("execution of i64_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_26", () => {
    let _test = test;

    _test("execution of i64_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_27", () => {
    let _test = test;

    _test("execution of i64_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_28", () => {
    let _test = test;

    _test("execution of i64_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_29", () => {
    let _test = test;

    _test("execution of i64_29: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("i64_30", () => {
    let _test = test;

    _test("execution of i64_30: _inline_test_29 (instance 0)", () => {});
});

describe("i64_31", () => {
    let _test = test;

    _test("execution of i64_31: _inline_test_30 (instance 0)", () => {});
});
