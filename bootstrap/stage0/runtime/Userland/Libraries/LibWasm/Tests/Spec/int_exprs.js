let globalImportObject = {};
let namedModules = {};

describe("int_exprs_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_0: i32.no_fold_cmp_s_offset (instance 0)", () => {
        let _i32_no_fold_cmp_s_offset = module.getExport("i32.no_fold_cmp_s_offset");
        expect(_i32_no_fold_cmp_s_offset).not.toBeUndefined();
        let _i32_no_fold_cmp_s_offset_result = module.invoke(
            _i32_no_fold_cmp_s_offset,
            2147483647,
            0
        );
        expect(_i32_no_fold_cmp_s_offset_result).toBe(1);
    });

    _test("execution of int_exprs_0: i32.no_fold_cmp_u_offset (instance 0)", () => {
        let _i32_no_fold_cmp_u_offset = module.getExport("i32.no_fold_cmp_u_offset");
        expect(_i32_no_fold_cmp_u_offset).not.toBeUndefined();
        let _i32_no_fold_cmp_u_offset_result = module.invoke(_i32_no_fold_cmp_u_offset, -1, 0);
        expect(_i32_no_fold_cmp_u_offset_result).toBe(1);
    });

    _test("execution of int_exprs_0: i64.no_fold_cmp_s_offset (instance 0)", () => {
        let _i64_no_fold_cmp_s_offset = module.getExport("i64.no_fold_cmp_s_offset");
        expect(_i64_no_fold_cmp_s_offset).not.toBeUndefined();
        let _i64_no_fold_cmp_s_offset_result = module.invoke(
            _i64_no_fold_cmp_s_offset,
            9223372036854775807n,
            0n
        );
        expect(_i64_no_fold_cmp_s_offset_result).toBe(1);
    });

    _test("execution of int_exprs_0: i64.no_fold_cmp_u_offset (instance 0)", () => {
        let _i64_no_fold_cmp_u_offset = module.getExport("i64.no_fold_cmp_u_offset");
        expect(_i64_no_fold_cmp_u_offset).not.toBeUndefined();
        let _i64_no_fold_cmp_u_offset_result = module.invoke(_i64_no_fold_cmp_u_offset, -1n, 0n);
        expect(_i64_no_fold_cmp_u_offset_result).toBe(1);
    });
});

describe("int_exprs_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_1: i64.no_fold_wrap_extend_s (instance 0)", () => {
        let _i64_no_fold_wrap_extend_s = module.getExport("i64.no_fold_wrap_extend_s");
        expect(_i64_no_fold_wrap_extend_s).not.toBeUndefined();
        let _i64_no_fold_wrap_extend_s_result = module.invoke(
            _i64_no_fold_wrap_extend_s,
            4538991236898928n
        );
        expect(_i64_no_fold_wrap_extend_s_result).toBe(1079009392n);
    });

    _test("execution of int_exprs_1: i64.no_fold_wrap_extend_s (instance 1)", () => {
        let _i64_no_fold_wrap_extend_s = module.getExport("i64.no_fold_wrap_extend_s");
        expect(_i64_no_fold_wrap_extend_s).not.toBeUndefined();
        let _i64_no_fold_wrap_extend_s_result = module.invoke(
            _i64_no_fold_wrap_extend_s,
            45230338458316960n
        );
        expect(_i64_no_fold_wrap_extend_s_result).toBe(-790564704n);
    });
});

describe("int_exprs_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_2: i64.no_fold_wrap_extend_u (instance 0)", () => {
        let _i64_no_fold_wrap_extend_u = module.getExport("i64.no_fold_wrap_extend_u");
        expect(_i64_no_fold_wrap_extend_u).not.toBeUndefined();
        let _i64_no_fold_wrap_extend_u_result = module.invoke(
            _i64_no_fold_wrap_extend_u,
            4538991236898928n
        );
        expect(_i64_no_fold_wrap_extend_u_result).toBe(1079009392n);
    });
});

describe("int_exprs_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_3: i32.no_fold_shl_shr_s (instance 0)", () => {
        let _i32_no_fold_shl_shr_s = module.getExport("i32.no_fold_shl_shr_s");
        expect(_i32_no_fold_shl_shr_s).not.toBeUndefined();
        let _i32_no_fold_shl_shr_s_result = module.invoke(_i32_no_fold_shl_shr_s, -2147483648);
        expect(_i32_no_fold_shl_shr_s_result).toBe(0);
    });

    _test("execution of int_exprs_3: i32.no_fold_shl_shr_u (instance 0)", () => {
        let _i32_no_fold_shl_shr_u = module.getExport("i32.no_fold_shl_shr_u");
        expect(_i32_no_fold_shl_shr_u).not.toBeUndefined();
        let _i32_no_fold_shl_shr_u_result = module.invoke(_i32_no_fold_shl_shr_u, -2147483648);
        expect(_i32_no_fold_shl_shr_u_result).toBe(0);
    });

    _test("execution of int_exprs_3: i64.no_fold_shl_shr_s (instance 0)", () => {
        let _i64_no_fold_shl_shr_s = module.getExport("i64.no_fold_shl_shr_s");
        expect(_i64_no_fold_shl_shr_s).not.toBeUndefined();
        let _i64_no_fold_shl_shr_s_result = module.invoke(
            _i64_no_fold_shl_shr_s,
            -9223372036854775808n
        );
        expect(_i64_no_fold_shl_shr_s_result).toBe(0n);
    });

    _test("execution of int_exprs_3: i64.no_fold_shl_shr_u (instance 0)", () => {
        let _i64_no_fold_shl_shr_u = module.getExport("i64.no_fold_shl_shr_u");
        expect(_i64_no_fold_shl_shr_u).not.toBeUndefined();
        let _i64_no_fold_shl_shr_u_result = module.invoke(
            _i64_no_fold_shl_shr_u,
            -9223372036854775808n
        );
        expect(_i64_no_fold_shl_shr_u_result).toBe(0n);
    });
});

describe("int_exprs_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_4: i32.no_fold_shr_s_shl (instance 0)", () => {
        let _i32_no_fold_shr_s_shl = module.getExport("i32.no_fold_shr_s_shl");
        expect(_i32_no_fold_shr_s_shl).not.toBeUndefined();
        let _i32_no_fold_shr_s_shl_result = module.invoke(_i32_no_fold_shr_s_shl, 1);
        expect(_i32_no_fold_shr_s_shl_result).toBe(0);
    });

    _test("execution of int_exprs_4: i32.no_fold_shr_u_shl (instance 0)", () => {
        let _i32_no_fold_shr_u_shl = module.getExport("i32.no_fold_shr_u_shl");
        expect(_i32_no_fold_shr_u_shl).not.toBeUndefined();
        let _i32_no_fold_shr_u_shl_result = module.invoke(_i32_no_fold_shr_u_shl, 1);
        expect(_i32_no_fold_shr_u_shl_result).toBe(0);
    });

    _test("execution of int_exprs_4: i64.no_fold_shr_s_shl (instance 0)", () => {
        let _i64_no_fold_shr_s_shl = module.getExport("i64.no_fold_shr_s_shl");
        expect(_i64_no_fold_shr_s_shl).not.toBeUndefined();
        let _i64_no_fold_shr_s_shl_result = module.invoke(_i64_no_fold_shr_s_shl, 1n);
        expect(_i64_no_fold_shr_s_shl_result).toBe(0n);
    });

    _test("execution of int_exprs_4: i64.no_fold_shr_u_shl (instance 0)", () => {
        let _i64_no_fold_shr_u_shl = module.getExport("i64.no_fold_shr_u_shl");
        expect(_i64_no_fold_shr_u_shl).not.toBeUndefined();
        let _i64_no_fold_shr_u_shl_result = module.invoke(_i64_no_fold_shr_u_shl, 1n);
        expect(_i64_no_fold_shr_u_shl_result).toBe(0n);
    });
});

describe("int_exprs_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_5: i32.no_fold_div_s_mul (instance 0)", () => {
        let _i32_no_fold_div_s_mul = module.getExport("i32.no_fold_div_s_mul");
        expect(_i32_no_fold_div_s_mul).not.toBeUndefined();
        let _i32_no_fold_div_s_mul_result = module.invoke(_i32_no_fold_div_s_mul, 1);
        expect(_i32_no_fold_div_s_mul_result).toBe(0);
    });

    _test("execution of int_exprs_5: i32.no_fold_div_u_mul (instance 0)", () => {
        let _i32_no_fold_div_u_mul = module.getExport("i32.no_fold_div_u_mul");
        expect(_i32_no_fold_div_u_mul).not.toBeUndefined();
        let _i32_no_fold_div_u_mul_result = module.invoke(_i32_no_fold_div_u_mul, 1);
        expect(_i32_no_fold_div_u_mul_result).toBe(0);
    });

    _test("execution of int_exprs_5: i64.no_fold_div_s_mul (instance 0)", () => {
        let _i64_no_fold_div_s_mul = module.getExport("i64.no_fold_div_s_mul");
        expect(_i64_no_fold_div_s_mul).not.toBeUndefined();
        let _i64_no_fold_div_s_mul_result = module.invoke(_i64_no_fold_div_s_mul, 1n);
        expect(_i64_no_fold_div_s_mul_result).toBe(0n);
    });

    _test("execution of int_exprs_5: i64.no_fold_div_u_mul (instance 0)", () => {
        let _i64_no_fold_div_u_mul = module.getExport("i64.no_fold_div_u_mul");
        expect(_i64_no_fold_div_u_mul).not.toBeUndefined();
        let _i64_no_fold_div_u_mul_result = module.invoke(_i64_no_fold_div_u_mul, 1n);
        expect(_i64_no_fold_div_u_mul_result).toBe(0n);
    });
});

describe("int_exprs_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_6: i32.no_fold_div_s_self (instance 0)", () => {
        let _i32_no_fold_div_s_self = module.getExport("i32.no_fold_div_s_self");
        expect(_i32_no_fold_div_s_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_no_fold_div_s_self, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of int_exprs_6: i32.no_fold_div_u_self (instance 0)", () => {
        let _i32_no_fold_div_u_self = module.getExport("i32.no_fold_div_u_self");
        expect(_i32_no_fold_div_u_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_no_fold_div_u_self, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of int_exprs_6: i64.no_fold_div_s_self (instance 0)", () => {
        let _i64_no_fold_div_s_self = module.getExport("i64.no_fold_div_s_self");
        expect(_i64_no_fold_div_s_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_no_fold_div_s_self, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of int_exprs_6: i64.no_fold_div_u_self (instance 0)", () => {
        let _i64_no_fold_div_u_self = module.getExport("i64.no_fold_div_u_self");
        expect(_i64_no_fold_div_u_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_no_fold_div_u_self, 0n).toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("int_exprs_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_7: i32.no_fold_rem_s_self (instance 0)", () => {
        let _i32_no_fold_rem_s_self = module.getExport("i32.no_fold_rem_s_self");
        expect(_i32_no_fold_rem_s_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_no_fold_rem_s_self, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of int_exprs_7: i32.no_fold_rem_u_self (instance 0)", () => {
        let _i32_no_fold_rem_u_self = module.getExport("i32.no_fold_rem_u_self");
        expect(_i32_no_fold_rem_u_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i32_no_fold_rem_u_self, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of int_exprs_7: i64.no_fold_rem_s_self (instance 0)", () => {
        let _i64_no_fold_rem_s_self = module.getExport("i64.no_fold_rem_s_self");
        expect(_i64_no_fold_rem_s_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_no_fold_rem_s_self, 0n).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of int_exprs_7: i64.no_fold_rem_u_self (instance 0)", () => {
        let _i64_no_fold_rem_u_self = module.getExport("i64.no_fold_rem_u_self");
        expect(_i64_no_fold_rem_u_self).not.toBeUndefined();
        expect(() =>
            module.invoke(_i64_no_fold_rem_u_self, 0n).toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("int_exprs_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_8: i32.no_fold_mul_div_s (instance 0)", () => {
        let _i32_no_fold_mul_div_s = module.getExport("i32.no_fold_mul_div_s");
        expect(_i32_no_fold_mul_div_s).not.toBeUndefined();
        let _i32_no_fold_mul_div_s_result = module.invoke(_i32_no_fold_mul_div_s, -2147483648);
        expect(_i32_no_fold_mul_div_s_result).toBe(0);
    });

    _test("execution of int_exprs_8: i32.no_fold_mul_div_u (instance 0)", () => {
        let _i32_no_fold_mul_div_u = module.getExport("i32.no_fold_mul_div_u");
        expect(_i32_no_fold_mul_div_u).not.toBeUndefined();
        let _i32_no_fold_mul_div_u_result = module.invoke(_i32_no_fold_mul_div_u, -2147483648);
        expect(_i32_no_fold_mul_div_u_result).toBe(0);
    });

    _test("execution of int_exprs_8: i64.no_fold_mul_div_s (instance 0)", () => {
        let _i64_no_fold_mul_div_s = module.getExport("i64.no_fold_mul_div_s");
        expect(_i64_no_fold_mul_div_s).not.toBeUndefined();
        let _i64_no_fold_mul_div_s_result = module.invoke(
            _i64_no_fold_mul_div_s,
            -9223372036854775808n
        );
        expect(_i64_no_fold_mul_div_s_result).toBe(0n);
    });

    _test("execution of int_exprs_8: i64.no_fold_mul_div_u (instance 0)", () => {
        let _i64_no_fold_mul_div_u = module.getExport("i64.no_fold_mul_div_u");
        expect(_i64_no_fold_mul_div_u).not.toBeUndefined();
        let _i64_no_fold_mul_div_u_result = module.invoke(
            _i64_no_fold_mul_div_u,
            -9223372036854775808n
        );
        expect(_i64_no_fold_mul_div_u_result).toBe(0n);
    });
});

describe("int_exprs_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_9: i32.no_fold_div_s_2 (instance 0)", () => {
        let _i32_no_fold_div_s_2 = module.getExport("i32.no_fold_div_s_2");
        expect(_i32_no_fold_div_s_2).not.toBeUndefined();
        let _i32_no_fold_div_s_2_result = module.invoke(_i32_no_fold_div_s_2, -11);
        expect(_i32_no_fold_div_s_2_result).toBe(-5);
    });

    _test("execution of int_exprs_9: i64.no_fold_div_s_2 (instance 0)", () => {
        let _i64_no_fold_div_s_2 = module.getExport("i64.no_fold_div_s_2");
        expect(_i64_no_fold_div_s_2).not.toBeUndefined();
        let _i64_no_fold_div_s_2_result = module.invoke(_i64_no_fold_div_s_2, -11n);
        expect(_i64_no_fold_div_s_2_result).toBe(-5n);
    });
});

describe("int_exprs_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_10: i32.no_fold_rem_s_2 (instance 0)", () => {
        let _i32_no_fold_rem_s_2 = module.getExport("i32.no_fold_rem_s_2");
        expect(_i32_no_fold_rem_s_2).not.toBeUndefined();
        let _i32_no_fold_rem_s_2_result = module.invoke(_i32_no_fold_rem_s_2, -11);
        expect(_i32_no_fold_rem_s_2_result).toBe(-1);
    });

    _test("execution of int_exprs_10: i64.no_fold_rem_s_2 (instance 0)", () => {
        let _i64_no_fold_rem_s_2 = module.getExport("i64.no_fold_rem_s_2");
        expect(_i64_no_fold_rem_s_2).not.toBeUndefined();
        let _i64_no_fold_rem_s_2_result = module.invoke(_i64_no_fold_rem_s_2, -11n);
        expect(_i64_no_fold_rem_s_2_result).toBe(-1n);
    });
});

describe("int_exprs_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_11: i32.div_s_0 (instance 0)", () => {
        let _i32_div_s_0 = module.getExport("i32.div_s_0");
        expect(_i32_div_s_0).not.toBeUndefined();
        expect(() => module.invoke(_i32_div_s_0, 71).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of int_exprs_11: i32.div_u_0 (instance 0)", () => {
        let _i32_div_u_0 = module.getExport("i32.div_u_0");
        expect(_i32_div_u_0).not.toBeUndefined();
        expect(() => module.invoke(_i32_div_u_0, 71).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of int_exprs_11: i64.div_s_0 (instance 0)", () => {
        let _i64_div_s_0 = module.getExport("i64.div_s_0");
        expect(_i64_div_s_0).not.toBeUndefined();
        expect(() => module.invoke(_i64_div_s_0, 71n).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of int_exprs_11: i64.div_u_0 (instance 0)", () => {
        let _i64_div_u_0 = module.getExport("i64.div_u_0");
        expect(_i64_div_u_0).not.toBeUndefined();
        expect(() => module.invoke(_i64_div_u_0, 71n).toThrow(TypeError, "Execution trapped"));
    });
});

describe("int_exprs_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_12: i32.div_s_3 (instance 0)", () => {
        let _i32_div_s_3 = module.getExport("i32.div_s_3");
        expect(_i32_div_s_3).not.toBeUndefined();
        let _i32_div_s_3_result = module.invoke(_i32_div_s_3, 71);
        expect(_i32_div_s_3_result).toBe(23);
    });

    _test("execution of int_exprs_12: i32.div_s_3 (instance 1)", () => {
        let _i32_div_s_3 = module.getExport("i32.div_s_3");
        expect(_i32_div_s_3).not.toBeUndefined();
        let _i32_div_s_3_result = module.invoke(_i32_div_s_3, 1610612736);
        expect(_i32_div_s_3_result).toBe(536870912);
    });

    _test("execution of int_exprs_12: i32.div_u_3 (instance 0)", () => {
        let _i32_div_u_3 = module.getExport("i32.div_u_3");
        expect(_i32_div_u_3).not.toBeUndefined();
        let _i32_div_u_3_result = module.invoke(_i32_div_u_3, 71);
        expect(_i32_div_u_3_result).toBe(23);
    });

    _test("execution of int_exprs_12: i32.div_u_3 (instance 1)", () => {
        let _i32_div_u_3 = module.getExport("i32.div_u_3");
        expect(_i32_div_u_3).not.toBeUndefined();
        let _i32_div_u_3_result = module.invoke(_i32_div_u_3, -1073741824);
        expect(_i32_div_u_3_result).toBe(1073741824);
    });

    _test("execution of int_exprs_12: i64.div_s_3 (instance 0)", () => {
        let _i64_div_s_3 = module.getExport("i64.div_s_3");
        expect(_i64_div_s_3).not.toBeUndefined();
        let _i64_div_s_3_result = module.invoke(_i64_div_s_3, 71n);
        expect(_i64_div_s_3_result).toBe(23n);
    });

    _test("execution of int_exprs_12: i64.div_s_3 (instance 1)", () => {
        let _i64_div_s_3 = module.getExport("i64.div_s_3");
        expect(_i64_div_s_3).not.toBeUndefined();
        let _i64_div_s_3_result = module.invoke(_i64_div_s_3, 3458764513820540928n);
        expect(_i64_div_s_3_result).toBe(1152921504606846976n);
    });

    _test("execution of int_exprs_12: i64.div_u_3 (instance 0)", () => {
        let _i64_div_u_3 = module.getExport("i64.div_u_3");
        expect(_i64_div_u_3).not.toBeUndefined();
        let _i64_div_u_3_result = module.invoke(_i64_div_u_3, 71n);
        expect(_i64_div_u_3_result).toBe(23n);
    });

    _test("execution of int_exprs_12: i64.div_u_3 (instance 1)", () => {
        let _i64_div_u_3 = module.getExport("i64.div_u_3");
        expect(_i64_div_u_3).not.toBeUndefined();
        let _i64_div_u_3_result = module.invoke(_i64_div_u_3, -4611686018427387904n);
        expect(_i64_div_u_3_result).toBe(4611686018427387904n);
    });
});

describe("int_exprs_13", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_13.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_13: i32.div_s_5 (instance 0)", () => {
        let _i32_div_s_5 = module.getExport("i32.div_s_5");
        expect(_i32_div_s_5).not.toBeUndefined();
        let _i32_div_s_5_result = module.invoke(_i32_div_s_5, 71);
        expect(_i32_div_s_5_result).toBe(14);
    });

    _test("execution of int_exprs_13: i32.div_s_5 (instance 1)", () => {
        let _i32_div_s_5 = module.getExport("i32.div_s_5");
        expect(_i32_div_s_5).not.toBeUndefined();
        let _i32_div_s_5_result = module.invoke(_i32_div_s_5, 1342177280);
        expect(_i32_div_s_5_result).toBe(268435456);
    });

    _test("execution of int_exprs_13: i32.div_u_5 (instance 0)", () => {
        let _i32_div_u_5 = module.getExport("i32.div_u_5");
        expect(_i32_div_u_5).not.toBeUndefined();
        let _i32_div_u_5_result = module.invoke(_i32_div_u_5, 71);
        expect(_i32_div_u_5_result).toBe(14);
    });

    _test("execution of int_exprs_13: i32.div_u_5 (instance 1)", () => {
        let _i32_div_u_5 = module.getExport("i32.div_u_5");
        expect(_i32_div_u_5).not.toBeUndefined();
        let _i32_div_u_5_result = module.invoke(_i32_div_u_5, -1610612736);
        expect(_i32_div_u_5_result).toBe(536870912);
    });

    _test("execution of int_exprs_13: i64.div_s_5 (instance 0)", () => {
        let _i64_div_s_5 = module.getExport("i64.div_s_5");
        expect(_i64_div_s_5).not.toBeUndefined();
        let _i64_div_s_5_result = module.invoke(_i64_div_s_5, 71n);
        expect(_i64_div_s_5_result).toBe(14n);
    });

    _test("execution of int_exprs_13: i64.div_s_5 (instance 1)", () => {
        let _i64_div_s_5 = module.getExport("i64.div_s_5");
        expect(_i64_div_s_5).not.toBeUndefined();
        let _i64_div_s_5_result = module.invoke(_i64_div_s_5, 5764607523034234880n);
        expect(_i64_div_s_5_result).toBe(1152921504606846976n);
    });

    _test("execution of int_exprs_13: i64.div_u_5 (instance 0)", () => {
        let _i64_div_u_5 = module.getExport("i64.div_u_5");
        expect(_i64_div_u_5).not.toBeUndefined();
        let _i64_div_u_5_result = module.invoke(_i64_div_u_5, 71n);
        expect(_i64_div_u_5_result).toBe(14n);
    });

    _test("execution of int_exprs_13: i64.div_u_5 (instance 1)", () => {
        let _i64_div_u_5 = module.getExport("i64.div_u_5");
        expect(_i64_div_u_5).not.toBeUndefined();
        let _i64_div_u_5_result = module.invoke(_i64_div_u_5, -6917529027641081856n);
        expect(_i64_div_u_5_result).toBe(2305843009213693952n);
    });
});

describe("int_exprs_14", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_14.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_14: i32.div_s_7 (instance 0)", () => {
        let _i32_div_s_7 = module.getExport("i32.div_s_7");
        expect(_i32_div_s_7).not.toBeUndefined();
        let _i32_div_s_7_result = module.invoke(_i32_div_s_7, 71);
        expect(_i32_div_s_7_result).toBe(10);
    });

    _test("execution of int_exprs_14: i32.div_s_7 (instance 1)", () => {
        let _i32_div_s_7 = module.getExport("i32.div_s_7");
        expect(_i32_div_s_7).not.toBeUndefined();
        let _i32_div_s_7_result = module.invoke(_i32_div_s_7, 1879048192);
        expect(_i32_div_s_7_result).toBe(268435456);
    });

    _test("execution of int_exprs_14: i32.div_u_7 (instance 0)", () => {
        let _i32_div_u_7 = module.getExport("i32.div_u_7");
        expect(_i32_div_u_7).not.toBeUndefined();
        let _i32_div_u_7_result = module.invoke(_i32_div_u_7, 71);
        expect(_i32_div_u_7_result).toBe(10);
    });

    _test("execution of int_exprs_14: i32.div_u_7 (instance 1)", () => {
        let _i32_div_u_7 = module.getExport("i32.div_u_7");
        expect(_i32_div_u_7).not.toBeUndefined();
        let _i32_div_u_7_result = module.invoke(_i32_div_u_7, -536870912);
        expect(_i32_div_u_7_result).toBe(536870912);
    });

    _test("execution of int_exprs_14: i64.div_s_7 (instance 0)", () => {
        let _i64_div_s_7 = module.getExport("i64.div_s_7");
        expect(_i64_div_s_7).not.toBeUndefined();
        let _i64_div_s_7_result = module.invoke(_i64_div_s_7, 71n);
        expect(_i64_div_s_7_result).toBe(10n);
    });

    _test("execution of int_exprs_14: i64.div_s_7 (instance 1)", () => {
        let _i64_div_s_7 = module.getExport("i64.div_s_7");
        expect(_i64_div_s_7).not.toBeUndefined();
        let _i64_div_s_7_result = module.invoke(_i64_div_s_7, 8070450532247928832n);
        expect(_i64_div_s_7_result).toBe(1152921504606846976n);
    });

    _test("execution of int_exprs_14: i64.div_u_7 (instance 0)", () => {
        let _i64_div_u_7 = module.getExport("i64.div_u_7");
        expect(_i64_div_u_7).not.toBeUndefined();
        let _i64_div_u_7_result = module.invoke(_i64_div_u_7, 71n);
        expect(_i64_div_u_7_result).toBe(10n);
    });

    _test("execution of int_exprs_14: i64.div_u_7 (instance 1)", () => {
        let _i64_div_u_7 = module.getExport("i64.div_u_7");
        expect(_i64_div_u_7).not.toBeUndefined();
        let _i64_div_u_7_result = module.invoke(_i64_div_u_7, -2305843009213693952n);
        expect(_i64_div_u_7_result).toBe(2305843009213693952n);
    });
});

describe("int_exprs_15", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_15.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_15: i32.rem_s_3 (instance 0)", () => {
        let _i32_rem_s_3 = module.getExport("i32.rem_s_3");
        expect(_i32_rem_s_3).not.toBeUndefined();
        let _i32_rem_s_3_result = module.invoke(_i32_rem_s_3, 71);
        expect(_i32_rem_s_3_result).toBe(2);
    });

    _test("execution of int_exprs_15: i32.rem_s_3 (instance 1)", () => {
        let _i32_rem_s_3 = module.getExport("i32.rem_s_3");
        expect(_i32_rem_s_3).not.toBeUndefined();
        let _i32_rem_s_3_result = module.invoke(_i32_rem_s_3, 1610612736);
        expect(_i32_rem_s_3_result).toBe(0);
    });

    _test("execution of int_exprs_15: i32.rem_u_3 (instance 0)", () => {
        let _i32_rem_u_3 = module.getExport("i32.rem_u_3");
        expect(_i32_rem_u_3).not.toBeUndefined();
        let _i32_rem_u_3_result = module.invoke(_i32_rem_u_3, 71);
        expect(_i32_rem_u_3_result).toBe(2);
    });

    _test("execution of int_exprs_15: i32.rem_u_3 (instance 1)", () => {
        let _i32_rem_u_3 = module.getExport("i32.rem_u_3");
        expect(_i32_rem_u_3).not.toBeUndefined();
        let _i32_rem_u_3_result = module.invoke(_i32_rem_u_3, -1073741824);
        expect(_i32_rem_u_3_result).toBe(0);
    });

    _test("execution of int_exprs_15: i64.rem_s_3 (instance 0)", () => {
        let _i64_rem_s_3 = module.getExport("i64.rem_s_3");
        expect(_i64_rem_s_3).not.toBeUndefined();
        let _i64_rem_s_3_result = module.invoke(_i64_rem_s_3, 71n);
        expect(_i64_rem_s_3_result).toBe(2n);
    });

    _test("execution of int_exprs_15: i64.rem_s_3 (instance 1)", () => {
        let _i64_rem_s_3 = module.getExport("i64.rem_s_3");
        expect(_i64_rem_s_3).not.toBeUndefined();
        let _i64_rem_s_3_result = module.invoke(_i64_rem_s_3, 3458764513820540928n);
        expect(_i64_rem_s_3_result).toBe(0n);
    });

    _test("execution of int_exprs_15: i64.rem_u_3 (instance 0)", () => {
        let _i64_rem_u_3 = module.getExport("i64.rem_u_3");
        expect(_i64_rem_u_3).not.toBeUndefined();
        let _i64_rem_u_3_result = module.invoke(_i64_rem_u_3, 71n);
        expect(_i64_rem_u_3_result).toBe(2n);
    });

    _test("execution of int_exprs_15: i64.rem_u_3 (instance 1)", () => {
        let _i64_rem_u_3 = module.getExport("i64.rem_u_3");
        expect(_i64_rem_u_3).not.toBeUndefined();
        let _i64_rem_u_3_result = module.invoke(_i64_rem_u_3, -4611686018427387904n);
        expect(_i64_rem_u_3_result).toBe(0n);
    });
});

describe("int_exprs_16", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_16.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_16: i32.rem_s_5 (instance 0)", () => {
        let _i32_rem_s_5 = module.getExport("i32.rem_s_5");
        expect(_i32_rem_s_5).not.toBeUndefined();
        let _i32_rem_s_5_result = module.invoke(_i32_rem_s_5, 71);
        expect(_i32_rem_s_5_result).toBe(1);
    });

    _test("execution of int_exprs_16: i32.rem_s_5 (instance 1)", () => {
        let _i32_rem_s_5 = module.getExport("i32.rem_s_5");
        expect(_i32_rem_s_5).not.toBeUndefined();
        let _i32_rem_s_5_result = module.invoke(_i32_rem_s_5, 1342177280);
        expect(_i32_rem_s_5_result).toBe(0);
    });

    _test("execution of int_exprs_16: i32.rem_u_5 (instance 0)", () => {
        let _i32_rem_u_5 = module.getExport("i32.rem_u_5");
        expect(_i32_rem_u_5).not.toBeUndefined();
        let _i32_rem_u_5_result = module.invoke(_i32_rem_u_5, 71);
        expect(_i32_rem_u_5_result).toBe(1);
    });

    _test("execution of int_exprs_16: i32.rem_u_5 (instance 1)", () => {
        let _i32_rem_u_5 = module.getExport("i32.rem_u_5");
        expect(_i32_rem_u_5).not.toBeUndefined();
        let _i32_rem_u_5_result = module.invoke(_i32_rem_u_5, -1610612736);
        expect(_i32_rem_u_5_result).toBe(0);
    });

    _test("execution of int_exprs_16: i64.rem_s_5 (instance 0)", () => {
        let _i64_rem_s_5 = module.getExport("i64.rem_s_5");
        expect(_i64_rem_s_5).not.toBeUndefined();
        let _i64_rem_s_5_result = module.invoke(_i64_rem_s_5, 71n);
        expect(_i64_rem_s_5_result).toBe(1n);
    });

    _test("execution of int_exprs_16: i64.rem_s_5 (instance 1)", () => {
        let _i64_rem_s_5 = module.getExport("i64.rem_s_5");
        expect(_i64_rem_s_5).not.toBeUndefined();
        let _i64_rem_s_5_result = module.invoke(_i64_rem_s_5, 5764607523034234880n);
        expect(_i64_rem_s_5_result).toBe(0n);
    });

    _test("execution of int_exprs_16: i64.rem_u_5 (instance 0)", () => {
        let _i64_rem_u_5 = module.getExport("i64.rem_u_5");
        expect(_i64_rem_u_5).not.toBeUndefined();
        let _i64_rem_u_5_result = module.invoke(_i64_rem_u_5, 71n);
        expect(_i64_rem_u_5_result).toBe(1n);
    });

    _test("execution of int_exprs_16: i64.rem_u_5 (instance 1)", () => {
        let _i64_rem_u_5 = module.getExport("i64.rem_u_5");
        expect(_i64_rem_u_5).not.toBeUndefined();
        let _i64_rem_u_5_result = module.invoke(_i64_rem_u_5, -6917529027641081856n);
        expect(_i64_rem_u_5_result).toBe(0n);
    });
});

describe("int_exprs_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_17: i32.rem_s_7 (instance 0)", () => {
        let _i32_rem_s_7 = module.getExport("i32.rem_s_7");
        expect(_i32_rem_s_7).not.toBeUndefined();
        let _i32_rem_s_7_result = module.invoke(_i32_rem_s_7, 71);
        expect(_i32_rem_s_7_result).toBe(1);
    });

    _test("execution of int_exprs_17: i32.rem_s_7 (instance 1)", () => {
        let _i32_rem_s_7 = module.getExport("i32.rem_s_7");
        expect(_i32_rem_s_7).not.toBeUndefined();
        let _i32_rem_s_7_result = module.invoke(_i32_rem_s_7, 1879048192);
        expect(_i32_rem_s_7_result).toBe(0);
    });

    _test("execution of int_exprs_17: i32.rem_u_7 (instance 0)", () => {
        let _i32_rem_u_7 = module.getExport("i32.rem_u_7");
        expect(_i32_rem_u_7).not.toBeUndefined();
        let _i32_rem_u_7_result = module.invoke(_i32_rem_u_7, 71);
        expect(_i32_rem_u_7_result).toBe(1);
    });

    _test("execution of int_exprs_17: i32.rem_u_7 (instance 1)", () => {
        let _i32_rem_u_7 = module.getExport("i32.rem_u_7");
        expect(_i32_rem_u_7).not.toBeUndefined();
        let _i32_rem_u_7_result = module.invoke(_i32_rem_u_7, -536870912);
        expect(_i32_rem_u_7_result).toBe(0);
    });

    _test("execution of int_exprs_17: i64.rem_s_7 (instance 0)", () => {
        let _i64_rem_s_7 = module.getExport("i64.rem_s_7");
        expect(_i64_rem_s_7).not.toBeUndefined();
        let _i64_rem_s_7_result = module.invoke(_i64_rem_s_7, 71n);
        expect(_i64_rem_s_7_result).toBe(1n);
    });

    _test("execution of int_exprs_17: i64.rem_s_7 (instance 1)", () => {
        let _i64_rem_s_7 = module.getExport("i64.rem_s_7");
        expect(_i64_rem_s_7).not.toBeUndefined();
        let _i64_rem_s_7_result = module.invoke(_i64_rem_s_7, 8070450532247928832n);
        expect(_i64_rem_s_7_result).toBe(0n);
    });

    _test("execution of int_exprs_17: i64.rem_u_7 (instance 0)", () => {
        let _i64_rem_u_7 = module.getExport("i64.rem_u_7");
        expect(_i64_rem_u_7).not.toBeUndefined();
        let _i64_rem_u_7_result = module.invoke(_i64_rem_u_7, 71n);
        expect(_i64_rem_u_7_result).toBe(1n);
    });

    _test("execution of int_exprs_17: i64.rem_u_7 (instance 1)", () => {
        let _i64_rem_u_7 = module.getExport("i64.rem_u_7");
        expect(_i64_rem_u_7).not.toBeUndefined();
        let _i64_rem_u_7_result = module.invoke(_i64_rem_u_7, -2305843009213693952n);
        expect(_i64_rem_u_7_result).toBe(0n);
    });
});

describe("int_exprs_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/int_exprs_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of int_exprs_18: i32.no_fold_div_neg1 (instance 0)", () => {
        let _i32_no_fold_div_neg1 = module.getExport("i32.no_fold_div_neg1");
        expect(_i32_no_fold_div_neg1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i32_no_fold_div_neg1, -2147483648)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of int_exprs_18: i64.no_fold_div_neg1 (instance 0)", () => {
        let _i64_no_fold_div_neg1 = module.getExport("i64.no_fold_div_neg1");
        expect(_i64_no_fold_div_neg1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_i64_no_fold_div_neg1, -9223372036854775808n)
                .toThrow(TypeError, "Execution trapped")
        );
    });
});
