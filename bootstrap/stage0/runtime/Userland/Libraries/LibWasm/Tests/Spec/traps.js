let globalImportObject = {};
let namedModules = {};

describe("traps_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/traps_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of traps_0: no_dce.i32.div_s (instance 0)", () => {
        let _no_dce_i32_div_s = module.getExport("no_dce.i32.div_s");
        expect(_no_dce_i32_div_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_div_s, 1, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_0: no_dce.i32.div_u (instance 0)", () => {
        let _no_dce_i32_div_u = module.getExport("no_dce.i32.div_u");
        expect(_no_dce_i32_div_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_div_u, 1, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_0: no_dce.i64.div_s (instance 0)", () => {
        let _no_dce_i64_div_s = module.getExport("no_dce.i64.div_s");
        expect(_no_dce_i64_div_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_div_s, 1n, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_0: no_dce.i64.div_u (instance 0)", () => {
        let _no_dce_i64_div_u = module.getExport("no_dce.i64.div_u");
        expect(_no_dce_i64_div_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_div_u, 1n, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_0: no_dce.i32.div_s (instance 1)", () => {
        let _no_dce_i32_div_s = module.getExport("no_dce.i32.div_s");
        expect(_no_dce_i32_div_s).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_no_dce_i32_div_s, -2147483648, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_0: no_dce.i64.div_s (instance 1)", () => {
        let _no_dce_i64_div_s = module.getExport("no_dce.i64.div_s");
        expect(_no_dce_i64_div_s).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_no_dce_i64_div_s, -9223372036854775808n, -1n)
                .toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("traps_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/traps_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of traps_1: no_dce.i32.rem_s (instance 0)", () => {
        let _no_dce_i32_rem_s = module.getExport("no_dce.i32.rem_s");
        expect(_no_dce_i32_rem_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_rem_s, 1, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_1: no_dce.i32.rem_u (instance 0)", () => {
        let _no_dce_i32_rem_u = module.getExport("no_dce.i32.rem_u");
        expect(_no_dce_i32_rem_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_rem_u, 1, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_1: no_dce.i64.rem_s (instance 0)", () => {
        let _no_dce_i64_rem_s = module.getExport("no_dce.i64.rem_s");
        expect(_no_dce_i64_rem_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_rem_s, 1n, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_1: no_dce.i64.rem_u (instance 0)", () => {
        let _no_dce_i64_rem_u = module.getExport("no_dce.i64.rem_u");
        expect(_no_dce_i64_rem_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_rem_u, 1n, 0n).toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("traps_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/traps_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of traps_2: no_dce.i32.trunc_f32_s (instance 0)", () => {
        let _no_dce_i32_trunc_f32_s = module.getExport("no_dce.i32.trunc_f32_s");
        expect(_no_dce_i32_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_trunc_f32_s, NaN).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_2: no_dce.i32.trunc_f32_u (instance 0)", () => {
        let _no_dce_i32_trunc_f32_u = module.getExport("no_dce.i32.trunc_f32_u");
        expect(_no_dce_i32_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_trunc_f32_u, NaN).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_2: no_dce.i32.trunc_f64_s (instance 0)", () => {
        let _no_dce_i32_trunc_f64_s = module.getExport("no_dce.i32.trunc_f64_s");
        expect(_no_dce_i32_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_trunc_f64_s, NaN).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_2: no_dce.i32.trunc_f64_u (instance 0)", () => {
        let _no_dce_i32_trunc_f64_u = module.getExport("no_dce.i32.trunc_f64_u");
        expect(_no_dce_i32_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_trunc_f64_u, NaN).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_2: no_dce.i64.trunc_f32_s (instance 0)", () => {
        let _no_dce_i64_trunc_f32_s = module.getExport("no_dce.i64.trunc_f32_s");
        expect(_no_dce_i64_trunc_f32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_trunc_f32_s, NaN).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_2: no_dce.i64.trunc_f32_u (instance 0)", () => {
        let _no_dce_i64_trunc_f32_u = module.getExport("no_dce.i64.trunc_f32_u");
        expect(_no_dce_i64_trunc_f32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_trunc_f32_u, NaN).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_2: no_dce.i64.trunc_f64_s (instance 0)", () => {
        let _no_dce_i64_trunc_f64_s = module.getExport("no_dce.i64.trunc_f64_s");
        expect(_no_dce_i64_trunc_f64_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_trunc_f64_s, NaN).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_2: no_dce.i64.trunc_f64_u (instance 0)", () => {
        let _no_dce_i64_trunc_f64_u = module.getExport("no_dce.i64.trunc_f64_u");
        expect(_no_dce_i64_trunc_f64_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_trunc_f64_u, NaN).toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("traps_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/traps_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of traps_3: no_dce.i32.load (instance 0)", () => {
        let _no_dce_i32_load = module.getExport("no_dce.i32.load");
        expect(_no_dce_i32_load).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_load, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i32.load16_s (instance 0)", () => {
        let _no_dce_i32_load16_s = module.getExport("no_dce.i32.load16_s");
        expect(_no_dce_i32_load16_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_load16_s, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i32.load16_u (instance 0)", () => {
        let _no_dce_i32_load16_u = module.getExport("no_dce.i32.load16_u");
        expect(_no_dce_i32_load16_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_load16_u, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i32.load8_s (instance 0)", () => {
        let _no_dce_i32_load8_s = module.getExport("no_dce.i32.load8_s");
        expect(_no_dce_i32_load8_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_load8_s, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i32.load8_u (instance 0)", () => {
        let _no_dce_i32_load8_u = module.getExport("no_dce.i32.load8_u");
        expect(_no_dce_i32_load8_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i32_load8_u, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i64.load (instance 0)", () => {
        let _no_dce_i64_load = module.getExport("no_dce.i64.load");
        expect(_no_dce_i64_load).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_load, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i64.load32_s (instance 0)", () => {
        let _no_dce_i64_load32_s = module.getExport("no_dce.i64.load32_s");
        expect(_no_dce_i64_load32_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_load32_s, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i64.load32_u (instance 0)", () => {
        let _no_dce_i64_load32_u = module.getExport("no_dce.i64.load32_u");
        expect(_no_dce_i64_load32_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_load32_u, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i64.load16_s (instance 0)", () => {
        let _no_dce_i64_load16_s = module.getExport("no_dce.i64.load16_s");
        expect(_no_dce_i64_load16_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_load16_s, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i64.load16_u (instance 0)", () => {
        let _no_dce_i64_load16_u = module.getExport("no_dce.i64.load16_u");
        expect(_no_dce_i64_load16_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_load16_u, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i64.load8_s (instance 0)", () => {
        let _no_dce_i64_load8_s = module.getExport("no_dce.i64.load8_s");
        expect(_no_dce_i64_load8_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_load8_s, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.i64.load8_u (instance 0)", () => {
        let _no_dce_i64_load8_u = module.getExport("no_dce.i64.load8_u");
        expect(_no_dce_i64_load8_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_i64_load8_u, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.f32.load (instance 0)", () => {
        let _no_dce_f32_load = module.getExport("no_dce.f32.load");
        expect(_no_dce_f32_load).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_f32_load, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of traps_3: no_dce.f64.load (instance 0)", () => {
        let _no_dce_f64_load = module.getExport("no_dce.f64.load");
        expect(_no_dce_f64_load).not.toBeUndefined();
        expect(() =>
            module.invoke(_no_dce_f64_load, 65536).toThrow(TypeError, "Execution trapped")
        );
    });
});
