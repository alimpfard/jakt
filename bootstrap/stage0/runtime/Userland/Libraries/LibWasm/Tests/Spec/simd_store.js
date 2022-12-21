let globalImportObject = {};
let namedModules = {};

describe("simd_store_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_store_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_store_0: v128.store_i8x16 (instance 0)", () => {
        let _v128_store_i8x16 = module.getExport("v128.store_i8x16");
        expect(_v128_store_i8x16).not.toBeUndefined();
        let _v128_store_i8x16_result = module.invoke(_v128_store_i8x16);
        expect(_v128_store_i8x16_result).toBe(0);
    });

    _test("execution of simd_store_0: v128.store_i16x8 (instance 0)", () => {
        let _v128_store_i16x8 = module.getExport("v128.store_i16x8");
        expect(_v128_store_i16x8).not.toBeUndefined();
        let _v128_store_i16x8_result = module.invoke(_v128_store_i16x8);
        expect(_v128_store_i16x8_result).toBe(0);
    });

    _test("execution of simd_store_0: v128.store_i16x8_2 (instance 0)", () => {
        let _v128_store_i16x8_2 = module.getExport("v128.store_i16x8_2");
        expect(_v128_store_i16x8_2).not.toBeUndefined();
        let _v128_store_i16x8_2_result = module.invoke(_v128_store_i16x8_2);
        expect(_v128_store_i16x8_2_result).toBe(0);
    });

    _test("execution of simd_store_0: v128.store_i16x8_3 (instance 0)", () => {
        let _v128_store_i16x8_3 = module.getExport("v128.store_i16x8_3");
        expect(_v128_store_i16x8_3).not.toBeUndefined();
        let _v128_store_i16x8_3_result = module.invoke(_v128_store_i16x8_3);
        expect(_v128_store_i16x8_3_result).toBe(0);
    });

    _test("execution of simd_store_0: v128.store_i32x4 (instance 0)", () => {
        let _v128_store_i32x4 = module.getExport("v128.store_i32x4");
        expect(_v128_store_i32x4).not.toBeUndefined();
        let _v128_store_i32x4_result = module.invoke(_v128_store_i32x4);
        expect(_v128_store_i32x4_result).toBe(0);
    });

    _test("execution of simd_store_0: v128.store_i32x4_2 (instance 0)", () => {
        let _v128_store_i32x4_2 = module.getExport("v128.store_i32x4_2");
        expect(_v128_store_i32x4_2).not.toBeUndefined();
        let _v128_store_i32x4_2_result = module.invoke(_v128_store_i32x4_2);
        expect(_v128_store_i32x4_2_result).toBe(0);
    });

    _test("execution of simd_store_0: v128.store_i32x4_3 (instance 0)", () => {
        let _v128_store_i32x4_3 = module.getExport("v128.store_i32x4_3");
        expect(_v128_store_i32x4_3).not.toBeUndefined();
        let _v128_store_i32x4_3_result = module.invoke(_v128_store_i32x4_3);
        expect(_v128_store_i32x4_3_result).toBe(0);
    });

    _test("execution of simd_store_0: v128.store_f32x4 (instance 0)", () => {
        let _v128_store_f32x4 = module.getExport("v128.store_f32x4");
        expect(_v128_store_f32x4).not.toBeUndefined();
        let _v128_store_f32x4_result = module.invoke(_v128_store_f32x4);
        expect(_v128_store_f32x4_result).toBe(0);
    });
});

describe("simd_store_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_store_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_store_1: as-block-value (instance 0)", () => {
        let _as_block_value = module.getExport("as-block-value");
        expect(_as_block_value).not.toBeUndefined();
        let _as_block_value_result = module.invoke(_as_block_value);
    });

    _test("execution of simd_store_1: as-loop-value (instance 0)", () => {
        let _as_loop_value = module.getExport("as-loop-value");
        expect(_as_loop_value).not.toBeUndefined();
        let _as_loop_value_result = module.invoke(_as_loop_value);
    });

    _test("execution of simd_store_1: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value);
    });

    _test("execution of simd_store_1: as-br_if-value (instance 0)", () => {
        let _as_br_if_value = module.getExport("as-br_if-value");
        expect(_as_br_if_value).not.toBeUndefined();
        let _as_br_if_value_result = module.invoke(_as_br_if_value);
    });

    _test("execution of simd_store_1: as-br_if-value-cond (instance 0)", () => {
        let _as_br_if_value_cond = module.getExport("as-br_if-value-cond");
        expect(_as_br_if_value_cond).not.toBeUndefined();
        let _as_br_if_value_cond_result = module.invoke(_as_br_if_value_cond);
    });

    _test("execution of simd_store_1: as-br_table-value (instance 0)", () => {
        let _as_br_table_value = module.getExport("as-br_table-value");
        expect(_as_br_table_value).not.toBeUndefined();
        let _as_br_table_value_result = module.invoke(_as_br_table_value);
    });

    _test("execution of simd_store_1: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value);
    });

    _test("execution of simd_store_1: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then);
    });

    _test("execution of simd_store_1: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else);
    });
});

describe("simd_store_2", () => {
    let _test = test;

    _test("execution of simd_store_2: _inline_test_0 (instance 0)", () => {});
});

describe("simd_store_3", () => {
    let _test = test;

    _test("execution of simd_store_3: _inline_test_1 (instance 0)", () => {});
});

describe("simd_store_4", () => {
    let _test = test;

    _test("execution of simd_store_4: _inline_test_2 (instance 0)", () => {});
});

describe("simd_store_5", () => {
    let _test = test;

    _test("execution of simd_store_5: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_store_6", () => {
    let _test = test;

    _test("execution of simd_store_6: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_store_7", () => {
    let _test = test;

    _test("execution of simd_store_7: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_store_8", () => {
    let _test = test;

    _test("execution of simd_store_8: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_store_9", () => {
    let _test = test;

    _test("execution of simd_store_9: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_store_10", () => {
    let _test = test;

    _test("execution of simd_store_10: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
