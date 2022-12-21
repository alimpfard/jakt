let globalImportObject = {};
let namedModules = {};

describe("simd_load_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_0: v128.load (instance 0)", () => {
        let _v128_load = module.getExport("v128.load");
        expect(_v128_load).not.toBeUndefined();
        let _v128_load_result = module.invoke(_v128_load);
        expect(_v128_load_result).toBe(0);
    });

    _test("execution of simd_load_0: v128.load (instance 1)", () => {
        let _v128_load = module.getExport("v128.load");
        expect(_v128_load).not.toBeUndefined();
        let _v128_load_result = module.invoke(_v128_load);
        expect(_v128_load_result).toBe(0);
    });

    _test("execution of simd_load_0: v128.load (instance 2)", () => {
        let _v128_load = module.getExport("v128.load");
        expect(_v128_load).not.toBeUndefined();
        let _v128_load_result = module.invoke(_v128_load);
        expect(_v128_load_result).toBe(0);
    });
});

describe("simd_load_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_1: as-i8x16_extract_lane_s-value/0 (instance 0)", () => {
        let _as_i8x16_extract_lane_s_value_0 = module.getExport("as-i8x16_extract_lane_s-value/0");
        expect(_as_i8x16_extract_lane_s_value_0).not.toBeUndefined();
        let _as_i8x16_extract_lane_s_value_0_result = module.invoke(
            _as_i8x16_extract_lane_s_value_0
        );
        expect(_as_i8x16_extract_lane_s_value_0_result).toBe(0);
    });
});

describe("simd_load_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_2: as-i8x16.eq-operand (instance 0)", () => {
        let _as_i8x16_eq_operand = module.getExport("as-i8x16.eq-operand");
        expect(_as_i8x16_eq_operand).not.toBeUndefined();
        let _as_i8x16_eq_operand_result = module.invoke(_as_i8x16_eq_operand);
        expect(_as_i8x16_eq_operand_result).toBe(0);
    });
});

describe("simd_load_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_3: as-v128.not-operand (instance 0)", () => {
        let _as_v128_not_operand = module.getExport("as-v128.not-operand");
        expect(_as_v128_not_operand).not.toBeUndefined();
        let _as_v128_not_operand_result = module.invoke(_as_v128_not_operand);
        expect(_as_v128_not_operand_result).toBe(0);
    });

    _test("execution of simd_load_3: as-i8x16.all_true-operand (instance 0)", () => {
        let _as_i8x16_all_true_operand = module.getExport("as-i8x16.all_true-operand");
        expect(_as_i8x16_all_true_operand).not.toBeUndefined();
        let _as_i8x16_all_true_operand_result = module.invoke(_as_i8x16_all_true_operand);
        expect(_as_i8x16_all_true_operand_result).toBe(0);
    });
});

describe("simd_load_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_4: as-v128.bitselect-operand (instance 0)", () => {
        let _as_v128_bitselect_operand = module.getExport("as-v128.bitselect-operand");
        expect(_as_v128_bitselect_operand).not.toBeUndefined();
        let _as_v128_bitselect_operand_result = module.invoke(_as_v128_bitselect_operand);
        expect(_as_v128_bitselect_operand_result).toBe(0);
    });
});

describe("simd_load_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_5: as-i8x16.shl-operand (instance 0)", () => {
        let _as_i8x16_shl_operand = module.getExport("as-i8x16.shl-operand");
        expect(_as_i8x16_shl_operand).not.toBeUndefined();
        let _as_i8x16_shl_operand_result = module.invoke(_as_i8x16_shl_operand);
        expect(_as_i8x16_shl_operand_result).toBe(0);
    });
});

describe("simd_load_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_6: as-add/sub-operand (instance 0)", () => {
        let _as_add_sub_operand = module.getExport("as-add/sub-operand");
        expect(_as_add_sub_operand).not.toBeUndefined();
        let _as_add_sub_operand_result = module.invoke(_as_add_sub_operand);
        expect(_as_add_sub_operand_result).toBe(0);
    });
});

describe("simd_load_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_7: as-f32x4.mul-operand (instance 0)", () => {
        let _as_f32x4_mul_operand = module.getExport("as-f32x4.mul-operand");
        expect(_as_f32x4_mul_operand).not.toBeUndefined();
        let _as_f32x4_mul_operand_result = module.invoke(_as_f32x4_mul_operand);
        expect(_as_f32x4_mul_operand_result).toBe(0);
    });
});

describe("simd_load_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_8: as-f32x4.abs-operand (instance 0)", () => {
        let _as_f32x4_abs_operand = module.getExport("as-f32x4.abs-operand");
        expect(_as_f32x4_abs_operand).not.toBeUndefined();
        let _as_f32x4_abs_operand_result = module.invoke(_as_f32x4_abs_operand);
        expect(_as_f32x4_abs_operand_result).toBe(0);
    });
});

describe("simd_load_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_9: as-f32x4.min-operand (instance 0)", () => {
        let _as_f32x4_min_operand = module.getExport("as-f32x4.min-operand");
        expect(_as_f32x4_min_operand).not.toBeUndefined();
        let _as_f32x4_min_operand_result = module.invoke(_as_f32x4_min_operand);
        expect(_as_f32x4_min_operand_result).toBe(0);
    });
});

describe("simd_load_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_10: as-i32x4.trunc_sat_f32x4_s-operand (instance 0)", () => {
        let _as_i32x4_trunc_sat_f32x4_s_operand = module.getExport(
            "as-i32x4.trunc_sat_f32x4_s-operand"
        );
        expect(_as_i32x4_trunc_sat_f32x4_s_operand).not.toBeUndefined();
        let _as_i32x4_trunc_sat_f32x4_s_operand_result = module.invoke(
            _as_i32x4_trunc_sat_f32x4_s_operand
        );
        expect(_as_i32x4_trunc_sat_f32x4_s_operand_result).toBe(0);
    });
});

describe("simd_load_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_11: as-f32x4.convert_i32x4_u-operand (instance 0)", () => {
        let _as_f32x4_convert_i32x4_u_operand = module.getExport(
            "as-f32x4.convert_i32x4_u-operand"
        );
        expect(_as_f32x4_convert_i32x4_u_operand).not.toBeUndefined();
        let _as_f32x4_convert_i32x4_u_operand_result = module.invoke(
            _as_f32x4_convert_i32x4_u_operand
        );
        expect(_as_f32x4_convert_i32x4_u_operand_result).toBe(0);
    });
});

describe("simd_load_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_12: as-i8x16.swizzle-operand (instance 0)", () => {
        let _as_i8x16_swizzle_operand = module.getExport("as-i8x16.swizzle-operand");
        expect(_as_i8x16_swizzle_operand).not.toBeUndefined();
        let _as_i8x16_swizzle_operand_result = module.invoke(_as_i8x16_swizzle_operand);
        expect(_as_i8x16_swizzle_operand_result).toBe(0);
    });
});

describe("simd_load_13", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_13.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_13: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
        expect(_as_br_value_result).toBe(0);
    });
});

describe("simd_load_14", () => {
    let _test = test;

    _test("execution of simd_load_14: _inline_test_0 (instance 0)", () => {});
});

describe("simd_load_15", () => {
    let _test = test;

    _test("execution of simd_load_15: _inline_test_1 (instance 0)", () => {});
});

describe("simd_load_16", () => {
    let _test = test;

    _test("execution of simd_load_16: _inline_test_2 (instance 0)", () => {});
});

describe("simd_load_17", () => {
    let _test = test;

    _test("execution of simd_load_17: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_18", () => {
    let _test = test;

    _test("execution of simd_load_18: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_19", () => {
    let _test = test;

    _test("execution of simd_load_19: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_20", () => {
    let _test = test;

    _test("execution of simd_load_20: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_21", () => {
    let _test = test;

    _test("execution of simd_load_21: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
