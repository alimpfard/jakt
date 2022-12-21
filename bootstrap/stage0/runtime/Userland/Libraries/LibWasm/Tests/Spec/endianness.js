let globalImportObject = {};
let namedModules = {};

describe("endianness_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/endianness_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of endianness_0: i32_load16_s (instance 0)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, -1);
        expect(_i32_load16_s_result).toBe(-1);
    });

    _test("execution of endianness_0: i32_load16_s (instance 1)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, -4242);
        expect(_i32_load16_s_result).toBe(-4242);
    });

    _test("execution of endianness_0: i32_load16_s (instance 2)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, 42);
        expect(_i32_load16_s_result).toBe(42);
    });

    _test("execution of endianness_0: i32_load16_s (instance 3)", () => {
        let _i32_load16_s = module.getExport("i32_load16_s");
        expect(_i32_load16_s).not.toBeUndefined();
        let _i32_load16_s_result = module.invoke(_i32_load16_s, 12816);
        expect(_i32_load16_s_result).toBe(12816);
    });

    _test("execution of endianness_0: i32_load16_u (instance 0)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, -1);
        expect(_i32_load16_u_result).toBe(65535);
    });

    _test("execution of endianness_0: i32_load16_u (instance 1)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, -4242);
        expect(_i32_load16_u_result).toBe(61294);
    });

    _test("execution of endianness_0: i32_load16_u (instance 2)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, 42);
        expect(_i32_load16_u_result).toBe(42);
    });

    _test("execution of endianness_0: i32_load16_u (instance 3)", () => {
        let _i32_load16_u = module.getExport("i32_load16_u");
        expect(_i32_load16_u).not.toBeUndefined();
        let _i32_load16_u_result = module.invoke(_i32_load16_u, 51966);
        expect(_i32_load16_u_result).toBe(51966);
    });

    _test("execution of endianness_0: i32_load (instance 0)", () => {
        let _i32_load = module.getExport("i32_load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load, -1);
        expect(_i32_load_result).toBe(-1);
    });

    _test("execution of endianness_0: i32_load (instance 1)", () => {
        let _i32_load = module.getExport("i32_load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load, -42424242);
        expect(_i32_load_result).toBe(-42424242);
    });

    _test("execution of endianness_0: i32_load (instance 2)", () => {
        let _i32_load = module.getExport("i32_load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load, 42424242);
        expect(_i32_load_result).toBe(42424242);
    });

    _test("execution of endianness_0: i32_load (instance 3)", () => {
        let _i32_load = module.getExport("i32_load");
        expect(_i32_load).not.toBeUndefined();
        let _i32_load_result = module.invoke(_i32_load, -1414717974);
        expect(_i32_load_result).toBe(-1414717974);
    });

    _test("execution of endianness_0: i64_load16_s (instance 0)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, -1n);
        expect(_i64_load16_s_result).toBe(-1n);
    });

    _test("execution of endianness_0: i64_load16_s (instance 1)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, -4242n);
        expect(_i64_load16_s_result).toBe(-4242n);
    });

    _test("execution of endianness_0: i64_load16_s (instance 2)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, 42n);
        expect(_i64_load16_s_result).toBe(42n);
    });

    _test("execution of endianness_0: i64_load16_s (instance 3)", () => {
        let _i64_load16_s = module.getExport("i64_load16_s");
        expect(_i64_load16_s).not.toBeUndefined();
        let _i64_load16_s_result = module.invoke(_i64_load16_s, 12816n);
        expect(_i64_load16_s_result).toBe(12816n);
    });

    _test("execution of endianness_0: i64_load16_u (instance 0)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, -1n);
        expect(_i64_load16_u_result).toBe(65535n);
    });

    _test("execution of endianness_0: i64_load16_u (instance 1)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, -4242n);
        expect(_i64_load16_u_result).toBe(61294n);
    });

    _test("execution of endianness_0: i64_load16_u (instance 2)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, 42n);
        expect(_i64_load16_u_result).toBe(42n);
    });

    _test("execution of endianness_0: i64_load16_u (instance 3)", () => {
        let _i64_load16_u = module.getExport("i64_load16_u");
        expect(_i64_load16_u).not.toBeUndefined();
        let _i64_load16_u_result = module.invoke(_i64_load16_u, 51966n);
        expect(_i64_load16_u_result).toBe(51966n);
    });

    _test("execution of endianness_0: i64_load32_s (instance 0)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, -1n);
        expect(_i64_load32_s_result).toBe(-1n);
    });

    _test("execution of endianness_0: i64_load32_s (instance 1)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, -42424242n);
        expect(_i64_load32_s_result).toBe(-42424242n);
    });

    _test("execution of endianness_0: i64_load32_s (instance 2)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, 42424242n);
        expect(_i64_load32_s_result).toBe(42424242n);
    });

    _test("execution of endianness_0: i64_load32_s (instance 3)", () => {
        let _i64_load32_s = module.getExport("i64_load32_s");
        expect(_i64_load32_s).not.toBeUndefined();
        let _i64_load32_s_result = module.invoke(_i64_load32_s, 305419896n);
        expect(_i64_load32_s_result).toBe(305419896n);
    });

    _test("execution of endianness_0: i64_load32_u (instance 0)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, -1n);
        expect(_i64_load32_u_result).toBe(4294967295n);
    });

    _test("execution of endianness_0: i64_load32_u (instance 1)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, -42424242n);
        expect(_i64_load32_u_result).toBe(4252543054n);
    });

    _test("execution of endianness_0: i64_load32_u (instance 2)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, 42424242n);
        expect(_i64_load32_u_result).toBe(42424242n);
    });

    _test("execution of endianness_0: i64_load32_u (instance 3)", () => {
        let _i64_load32_u = module.getExport("i64_load32_u");
        expect(_i64_load32_u).not.toBeUndefined();
        let _i64_load32_u_result = module.invoke(_i64_load32_u, 2880249322n);
        expect(_i64_load32_u_result).toBe(2880249322n);
    });

    _test("execution of endianness_0: i64_load (instance 0)", () => {
        let _i64_load = module.getExport("i64_load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load, -1n);
        expect(_i64_load_result).toBe(-1n);
    });

    _test("execution of endianness_0: i64_load (instance 1)", () => {
        let _i64_load = module.getExport("i64_load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load, -42424242n);
        expect(_i64_load_result).toBe(-42424242n);
    });

    _test("execution of endianness_0: i64_load (instance 2)", () => {
        let _i64_load = module.getExport("i64_load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load, 2880249322n);
        expect(_i64_load_result).toBe(2880249322n);
    });

    _test("execution of endianness_0: i64_load (instance 3)", () => {
        let _i64_load = module.getExport("i64_load");
        expect(_i64_load).not.toBeUndefined();
        let _i64_load_result = module.invoke(_i64_load, -6075977126246539798n);
        expect(_i64_load_result).toBe(-6075977126246539798n);
    });

    _test("execution of endianness_0: f32_load (instance 0)", () => {
        let _f32_load = module.getExport("f32_load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, -1.0);
        expect(_f32_load_result).toBe(-1.0);
    });

    _test("execution of endianness_0: f32_load (instance 1)", () => {
        let _f32_load = module.getExport("f32_load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 0.01234);
        expect(_f32_load_result).toBe(0.01234);
    });

    _test("execution of endianness_0: f32_load (instance 2)", () => {
        let _f32_load = module.getExport("f32_load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 4242.4242);
        expect(_f32_load_result).toBe(4242.4242);
    });

    _test("execution of endianness_0: f32_load (instance 3)", () => {
        let _f32_load = module.getExport("f32_load");
        expect(_f32_load).not.toBeUndefined();
        let _f32_load_result = module.invoke(_f32_load, 3.4028234663852886e38);
        expect(_f32_load_result).toBe(3.4028234663852886e38);
    });

    _test("execution of endianness_0: f64_load (instance 0)", () => {
        let _f64_load = module.getExport("f64_load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, -1.0);
        expect(_f64_load_result).toBe(-1.0);
    });

    _test("execution of endianness_0: f64_load (instance 1)", () => {
        let _f64_load = module.getExport("f64_load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 1234.56789);
        expect(_f64_load_result).toBe(1234.56789);
    });

    _test("execution of endianness_0: f64_load (instance 2)", () => {
        let _f64_load = module.getExport("f64_load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 424242.424242);
        expect(_f64_load_result).toBe(424242.424242);
    });

    _test("execution of endianness_0: f64_load (instance 3)", () => {
        let _f64_load = module.getExport("f64_load");
        expect(_f64_load).not.toBeUndefined();
        let _f64_load_result = module.invoke(_f64_load, 1.7976931348623157e308);
        expect(_f64_load_result).toBe(1.7976931348623157e308);
    });

    _test("execution of endianness_0: i32_store16 (instance 0)", () => {
        let _i32_store16 = module.getExport("i32_store16");
        expect(_i32_store16).not.toBeUndefined();
        let _i32_store16_result = module.invoke(_i32_store16, -1);
        expect(_i32_store16_result).toBe(65535);
    });

    _test("execution of endianness_0: i32_store16 (instance 1)", () => {
        let _i32_store16 = module.getExport("i32_store16");
        expect(_i32_store16).not.toBeUndefined();
        let _i32_store16_result = module.invoke(_i32_store16, -4242);
        expect(_i32_store16_result).toBe(61294);
    });

    _test("execution of endianness_0: i32_store16 (instance 2)", () => {
        let _i32_store16 = module.getExport("i32_store16");
        expect(_i32_store16).not.toBeUndefined();
        let _i32_store16_result = module.invoke(_i32_store16, 42);
        expect(_i32_store16_result).toBe(42);
    });

    _test("execution of endianness_0: i32_store16 (instance 3)", () => {
        let _i32_store16 = module.getExport("i32_store16");
        expect(_i32_store16).not.toBeUndefined();
        let _i32_store16_result = module.invoke(_i32_store16, 51966);
        expect(_i32_store16_result).toBe(51966);
    });

    _test("execution of endianness_0: i32_store (instance 0)", () => {
        let _i32_store = module.getExport("i32_store");
        expect(_i32_store).not.toBeUndefined();
        let _i32_store_result = module.invoke(_i32_store, -1);
        expect(_i32_store_result).toBe(-1);
    });

    _test("execution of endianness_0: i32_store (instance 1)", () => {
        let _i32_store = module.getExport("i32_store");
        expect(_i32_store).not.toBeUndefined();
        let _i32_store_result = module.invoke(_i32_store, -4242);
        expect(_i32_store_result).toBe(-4242);
    });

    _test("execution of endianness_0: i32_store (instance 2)", () => {
        let _i32_store = module.getExport("i32_store");
        expect(_i32_store).not.toBeUndefined();
        let _i32_store_result = module.invoke(_i32_store, 42424242);
        expect(_i32_store_result).toBe(42424242);
    });

    _test("execution of endianness_0: i32_store (instance 3)", () => {
        let _i32_store = module.getExport("i32_store");
        expect(_i32_store).not.toBeUndefined();
        let _i32_store_result = module.invoke(_i32_store, -559035650);
        expect(_i32_store_result).toBe(-559035650);
    });

    _test("execution of endianness_0: i64_store16 (instance 0)", () => {
        let _i64_store16 = module.getExport("i64_store16");
        expect(_i64_store16).not.toBeUndefined();
        let _i64_store16_result = module.invoke(_i64_store16, -1n);
        expect(_i64_store16_result).toBe(65535n);
    });

    _test("execution of endianness_0: i64_store16 (instance 1)", () => {
        let _i64_store16 = module.getExport("i64_store16");
        expect(_i64_store16).not.toBeUndefined();
        let _i64_store16_result = module.invoke(_i64_store16, -4242n);
        expect(_i64_store16_result).toBe(61294n);
    });

    _test("execution of endianness_0: i64_store16 (instance 2)", () => {
        let _i64_store16 = module.getExport("i64_store16");
        expect(_i64_store16).not.toBeUndefined();
        let _i64_store16_result = module.invoke(_i64_store16, 42n);
        expect(_i64_store16_result).toBe(42n);
    });

    _test("execution of endianness_0: i64_store16 (instance 3)", () => {
        let _i64_store16 = module.getExport("i64_store16");
        expect(_i64_store16).not.toBeUndefined();
        let _i64_store16_result = module.invoke(_i64_store16, 51966n);
        expect(_i64_store16_result).toBe(51966n);
    });

    _test("execution of endianness_0: i64_store32 (instance 0)", () => {
        let _i64_store32 = module.getExport("i64_store32");
        expect(_i64_store32).not.toBeUndefined();
        let _i64_store32_result = module.invoke(_i64_store32, -1n);
        expect(_i64_store32_result).toBe(4294967295n);
    });

    _test("execution of endianness_0: i64_store32 (instance 1)", () => {
        let _i64_store32 = module.getExport("i64_store32");
        expect(_i64_store32).not.toBeUndefined();
        let _i64_store32_result = module.invoke(_i64_store32, -4242n);
        expect(_i64_store32_result).toBe(4294963054n);
    });

    _test("execution of endianness_0: i64_store32 (instance 2)", () => {
        let _i64_store32 = module.getExport("i64_store32");
        expect(_i64_store32).not.toBeUndefined();
        let _i64_store32_result = module.invoke(_i64_store32, 42424242n);
        expect(_i64_store32_result).toBe(42424242n);
    });

    _test("execution of endianness_0: i64_store32 (instance 3)", () => {
        let _i64_store32 = module.getExport("i64_store32");
        expect(_i64_store32).not.toBeUndefined();
        let _i64_store32_result = module.invoke(_i64_store32, 3735931646n);
        expect(_i64_store32_result).toBe(3735931646n);
    });

    _test("execution of endianness_0: i64_store (instance 0)", () => {
        let _i64_store = module.getExport("i64_store");
        expect(_i64_store).not.toBeUndefined();
        let _i64_store_result = module.invoke(_i64_store, -1n);
        expect(_i64_store_result).toBe(-1n);
    });

    _test("execution of endianness_0: i64_store (instance 1)", () => {
        let _i64_store = module.getExport("i64_store");
        expect(_i64_store).not.toBeUndefined();
        let _i64_store_result = module.invoke(_i64_store, -42424242n);
        expect(_i64_store_result).toBe(-42424242n);
    });

    _test("execution of endianness_0: i64_store (instance 2)", () => {
        let _i64_store = module.getExport("i64_store");
        expect(_i64_store).not.toBeUndefined();
        let _i64_store_result = module.invoke(_i64_store, 2880249322n);
        expect(_i64_store_result).toBe(2880249322n);
    });

    _test("execution of endianness_0: i64_store (instance 3)", () => {
        let _i64_store = module.getExport("i64_store");
        expect(_i64_store).not.toBeUndefined();
        let _i64_store_result = module.invoke(_i64_store, -6075977126246539798n);
        expect(_i64_store_result).toBe(-6075977126246539798n);
    });

    _test("execution of endianness_0: f32_store (instance 0)", () => {
        let _f32_store = module.getExport("f32_store");
        expect(_f32_store).not.toBeUndefined();
        let _f32_store_result = module.invoke(_f32_store, -1.0);
        expect(_f32_store_result).toBe(-1.0);
    });

    _test("execution of endianness_0: f32_store (instance 1)", () => {
        let _f32_store = module.getExport("f32_store");
        expect(_f32_store).not.toBeUndefined();
        let _f32_store_result = module.invoke(_f32_store, 0.01234);
        expect(_f32_store_result).toBe(0.01234);
    });

    _test("execution of endianness_0: f32_store (instance 2)", () => {
        let _f32_store = module.getExport("f32_store");
        expect(_f32_store).not.toBeUndefined();
        let _f32_store_result = module.invoke(_f32_store, 4242.4242);
        expect(_f32_store_result).toBe(4242.4242);
    });

    _test("execution of endianness_0: f32_store (instance 3)", () => {
        let _f32_store = module.getExport("f32_store");
        expect(_f32_store).not.toBeUndefined();
        let _f32_store_result = module.invoke(_f32_store, 3.4028234663852886e38);
        expect(_f32_store_result).toBe(3.4028234663852886e38);
    });

    _test("execution of endianness_0: f64_store (instance 0)", () => {
        let _f64_store = module.getExport("f64_store");
        expect(_f64_store).not.toBeUndefined();
        let _f64_store_result = module.invoke(_f64_store, -1.0);
        expect(_f64_store_result).toBe(-1.0);
    });

    _test("execution of endianness_0: f64_store (instance 1)", () => {
        let _f64_store = module.getExport("f64_store");
        expect(_f64_store).not.toBeUndefined();
        let _f64_store_result = module.invoke(_f64_store, 1234.56789);
        expect(_f64_store_result).toBe(1234.56789);
    });

    _test("execution of endianness_0: f64_store (instance 2)", () => {
        let _f64_store = module.getExport("f64_store");
        expect(_f64_store).not.toBeUndefined();
        let _f64_store_result = module.invoke(_f64_store, 424242.424242);
        expect(_f64_store_result).toBe(424242.424242);
    });

    _test("execution of endianness_0: f64_store (instance 3)", () => {
        let _f64_store = module.getExport("f64_store");
        expect(_f64_store).not.toBeUndefined();
        let _f64_store_result = module.invoke(_f64_store, 1.7976931348623157e308);
        expect(_f64_store_result).toBe(1.7976931348623157e308);
    });
});
