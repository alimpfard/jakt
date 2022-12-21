let globalImportObject = {};
let namedModules = {};

describe("simd_load8_lane_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load8_lane_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load8_lane_0: v128.load8_lane_0 (instance 0)", () => {
        let _v128_load8_lane_0 = module.getExport("v128.load8_lane_0");
        expect(_v128_load8_lane_0).not.toBeUndefined();
        let _v128_load8_lane_0_result = module.invoke(_v128_load8_lane_0, 0, 0);
        expect(_v128_load8_lane_0_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_1 (instance 0)", () => {
        let _v128_load8_lane_1 = module.getExport("v128.load8_lane_1");
        expect(_v128_load8_lane_1).not.toBeUndefined();
        let _v128_load8_lane_1_result = module.invoke(_v128_load8_lane_1, 1, 0);
        expect(_v128_load8_lane_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_2 (instance 0)", () => {
        let _v128_load8_lane_2 = module.getExport("v128.load8_lane_2");
        expect(_v128_load8_lane_2).not.toBeUndefined();
        let _v128_load8_lane_2_result = module.invoke(_v128_load8_lane_2, 2, 0);
        expect(_v128_load8_lane_2_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_3 (instance 0)", () => {
        let _v128_load8_lane_3 = module.getExport("v128.load8_lane_3");
        expect(_v128_load8_lane_3).not.toBeUndefined();
        let _v128_load8_lane_3_result = module.invoke(_v128_load8_lane_3, 3, 0);
        expect(_v128_load8_lane_3_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_4 (instance 0)", () => {
        let _v128_load8_lane_4 = module.getExport("v128.load8_lane_4");
        expect(_v128_load8_lane_4).not.toBeUndefined();
        let _v128_load8_lane_4_result = module.invoke(_v128_load8_lane_4, 4, 0);
        expect(_v128_load8_lane_4_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_5 (instance 0)", () => {
        let _v128_load8_lane_5 = module.getExport("v128.load8_lane_5");
        expect(_v128_load8_lane_5).not.toBeUndefined();
        let _v128_load8_lane_5_result = module.invoke(_v128_load8_lane_5, 5, 0);
        expect(_v128_load8_lane_5_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_6 (instance 0)", () => {
        let _v128_load8_lane_6 = module.getExport("v128.load8_lane_6");
        expect(_v128_load8_lane_6).not.toBeUndefined();
        let _v128_load8_lane_6_result = module.invoke(_v128_load8_lane_6, 6, 0);
        expect(_v128_load8_lane_6_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_7 (instance 0)", () => {
        let _v128_load8_lane_7 = module.getExport("v128.load8_lane_7");
        expect(_v128_load8_lane_7).not.toBeUndefined();
        let _v128_load8_lane_7_result = module.invoke(_v128_load8_lane_7, 7, 0);
        expect(_v128_load8_lane_7_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_8 (instance 0)", () => {
        let _v128_load8_lane_8 = module.getExport("v128.load8_lane_8");
        expect(_v128_load8_lane_8).not.toBeUndefined();
        let _v128_load8_lane_8_result = module.invoke(_v128_load8_lane_8, 8, 0);
        expect(_v128_load8_lane_8_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_9 (instance 0)", () => {
        let _v128_load8_lane_9 = module.getExport("v128.load8_lane_9");
        expect(_v128_load8_lane_9).not.toBeUndefined();
        let _v128_load8_lane_9_result = module.invoke(_v128_load8_lane_9, 9, 0);
        expect(_v128_load8_lane_9_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_10 (instance 0)", () => {
        let _v128_load8_lane_10 = module.getExport("v128.load8_lane_10");
        expect(_v128_load8_lane_10).not.toBeUndefined();
        let _v128_load8_lane_10_result = module.invoke(_v128_load8_lane_10, 10, 0);
        expect(_v128_load8_lane_10_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_11 (instance 0)", () => {
        let _v128_load8_lane_11 = module.getExport("v128.load8_lane_11");
        expect(_v128_load8_lane_11).not.toBeUndefined();
        let _v128_load8_lane_11_result = module.invoke(_v128_load8_lane_11, 11, 0);
        expect(_v128_load8_lane_11_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_12 (instance 0)", () => {
        let _v128_load8_lane_12 = module.getExport("v128.load8_lane_12");
        expect(_v128_load8_lane_12).not.toBeUndefined();
        let _v128_load8_lane_12_result = module.invoke(_v128_load8_lane_12, 12, 0);
        expect(_v128_load8_lane_12_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_13 (instance 0)", () => {
        let _v128_load8_lane_13 = module.getExport("v128.load8_lane_13");
        expect(_v128_load8_lane_13).not.toBeUndefined();
        let _v128_load8_lane_13_result = module.invoke(_v128_load8_lane_13, 13, 0);
        expect(_v128_load8_lane_13_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_14 (instance 0)", () => {
        let _v128_load8_lane_14 = module.getExport("v128.load8_lane_14");
        expect(_v128_load8_lane_14).not.toBeUndefined();
        let _v128_load8_lane_14_result = module.invoke(_v128_load8_lane_14, 14, 0);
        expect(_v128_load8_lane_14_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_15 (instance 0)", () => {
        let _v128_load8_lane_15 = module.getExport("v128.load8_lane_15");
        expect(_v128_load8_lane_15).not.toBeUndefined();
        let _v128_load8_lane_15_result = module.invoke(_v128_load8_lane_15, 15, 0);
        expect(_v128_load8_lane_15_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_0_offset_0 (instance 0)", () => {
        let _v128_load8_lane_0_offset_0 = module.getExport("v128.load8_lane_0_offset_0");
        expect(_v128_load8_lane_0_offset_0).not.toBeUndefined();
        let _v128_load8_lane_0_offset_0_result = module.invoke(_v128_load8_lane_0_offset_0, 0);
        expect(_v128_load8_lane_0_offset_0_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_1_offset_1 (instance 0)", () => {
        let _v128_load8_lane_1_offset_1 = module.getExport("v128.load8_lane_1_offset_1");
        expect(_v128_load8_lane_1_offset_1).not.toBeUndefined();
        let _v128_load8_lane_1_offset_1_result = module.invoke(_v128_load8_lane_1_offset_1, 0);
        expect(_v128_load8_lane_1_offset_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_2_offset_2 (instance 0)", () => {
        let _v128_load8_lane_2_offset_2 = module.getExport("v128.load8_lane_2_offset_2");
        expect(_v128_load8_lane_2_offset_2).not.toBeUndefined();
        let _v128_load8_lane_2_offset_2_result = module.invoke(_v128_load8_lane_2_offset_2, 0);
        expect(_v128_load8_lane_2_offset_2_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_3_offset_3 (instance 0)", () => {
        let _v128_load8_lane_3_offset_3 = module.getExport("v128.load8_lane_3_offset_3");
        expect(_v128_load8_lane_3_offset_3).not.toBeUndefined();
        let _v128_load8_lane_3_offset_3_result = module.invoke(_v128_load8_lane_3_offset_3, 0);
        expect(_v128_load8_lane_3_offset_3_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_4_offset_4 (instance 0)", () => {
        let _v128_load8_lane_4_offset_4 = module.getExport("v128.load8_lane_4_offset_4");
        expect(_v128_load8_lane_4_offset_4).not.toBeUndefined();
        let _v128_load8_lane_4_offset_4_result = module.invoke(_v128_load8_lane_4_offset_4, 0);
        expect(_v128_load8_lane_4_offset_4_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_5_offset_5 (instance 0)", () => {
        let _v128_load8_lane_5_offset_5 = module.getExport("v128.load8_lane_5_offset_5");
        expect(_v128_load8_lane_5_offset_5).not.toBeUndefined();
        let _v128_load8_lane_5_offset_5_result = module.invoke(_v128_load8_lane_5_offset_5, 0);
        expect(_v128_load8_lane_5_offset_5_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_6_offset_6 (instance 0)", () => {
        let _v128_load8_lane_6_offset_6 = module.getExport("v128.load8_lane_6_offset_6");
        expect(_v128_load8_lane_6_offset_6).not.toBeUndefined();
        let _v128_load8_lane_6_offset_6_result = module.invoke(_v128_load8_lane_6_offset_6, 0);
        expect(_v128_load8_lane_6_offset_6_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_7_offset_7 (instance 0)", () => {
        let _v128_load8_lane_7_offset_7 = module.getExport("v128.load8_lane_7_offset_7");
        expect(_v128_load8_lane_7_offset_7).not.toBeUndefined();
        let _v128_load8_lane_7_offset_7_result = module.invoke(_v128_load8_lane_7_offset_7, 0);
        expect(_v128_load8_lane_7_offset_7_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_8_offset_8 (instance 0)", () => {
        let _v128_load8_lane_8_offset_8 = module.getExport("v128.load8_lane_8_offset_8");
        expect(_v128_load8_lane_8_offset_8).not.toBeUndefined();
        let _v128_load8_lane_8_offset_8_result = module.invoke(_v128_load8_lane_8_offset_8, 0);
        expect(_v128_load8_lane_8_offset_8_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_9_offset_9 (instance 0)", () => {
        let _v128_load8_lane_9_offset_9 = module.getExport("v128.load8_lane_9_offset_9");
        expect(_v128_load8_lane_9_offset_9).not.toBeUndefined();
        let _v128_load8_lane_9_offset_9_result = module.invoke(_v128_load8_lane_9_offset_9, 0);
        expect(_v128_load8_lane_9_offset_9_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_10_offset_10 (instance 0)", () => {
        let _v128_load8_lane_10_offset_10 = module.getExport("v128.load8_lane_10_offset_10");
        expect(_v128_load8_lane_10_offset_10).not.toBeUndefined();
        let _v128_load8_lane_10_offset_10_result = module.invoke(_v128_load8_lane_10_offset_10, 0);
        expect(_v128_load8_lane_10_offset_10_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_11_offset_11 (instance 0)", () => {
        let _v128_load8_lane_11_offset_11 = module.getExport("v128.load8_lane_11_offset_11");
        expect(_v128_load8_lane_11_offset_11).not.toBeUndefined();
        let _v128_load8_lane_11_offset_11_result = module.invoke(_v128_load8_lane_11_offset_11, 0);
        expect(_v128_load8_lane_11_offset_11_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_12_offset_12 (instance 0)", () => {
        let _v128_load8_lane_12_offset_12 = module.getExport("v128.load8_lane_12_offset_12");
        expect(_v128_load8_lane_12_offset_12).not.toBeUndefined();
        let _v128_load8_lane_12_offset_12_result = module.invoke(_v128_load8_lane_12_offset_12, 0);
        expect(_v128_load8_lane_12_offset_12_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_13_offset_13 (instance 0)", () => {
        let _v128_load8_lane_13_offset_13 = module.getExport("v128.load8_lane_13_offset_13");
        expect(_v128_load8_lane_13_offset_13).not.toBeUndefined();
        let _v128_load8_lane_13_offset_13_result = module.invoke(_v128_load8_lane_13_offset_13, 0);
        expect(_v128_load8_lane_13_offset_13_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_14_offset_14 (instance 0)", () => {
        let _v128_load8_lane_14_offset_14 = module.getExport("v128.load8_lane_14_offset_14");
        expect(_v128_load8_lane_14_offset_14).not.toBeUndefined();
        let _v128_load8_lane_14_offset_14_result = module.invoke(_v128_load8_lane_14_offset_14, 0);
        expect(_v128_load8_lane_14_offset_14_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_15_offset_15 (instance 0)", () => {
        let _v128_load8_lane_15_offset_15 = module.getExport("v128.load8_lane_15_offset_15");
        expect(_v128_load8_lane_15_offset_15).not.toBeUndefined();
        let _v128_load8_lane_15_offset_15_result = module.invoke(_v128_load8_lane_15_offset_15, 0);
        expect(_v128_load8_lane_15_offset_15_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_0_align_1 (instance 0)", () => {
        let _v128_load8_lane_0_align_1 = module.getExport("v128.load8_lane_0_align_1");
        expect(_v128_load8_lane_0_align_1).not.toBeUndefined();
        let _v128_load8_lane_0_align_1_result = module.invoke(_v128_load8_lane_0_align_1, 0, 0);
        expect(_v128_load8_lane_0_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_1_align_1 (instance 0)", () => {
        let _v128_load8_lane_1_align_1 = module.getExport("v128.load8_lane_1_align_1");
        expect(_v128_load8_lane_1_align_1).not.toBeUndefined();
        let _v128_load8_lane_1_align_1_result = module.invoke(_v128_load8_lane_1_align_1, 1, 0);
        expect(_v128_load8_lane_1_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_2_align_1 (instance 0)", () => {
        let _v128_load8_lane_2_align_1 = module.getExport("v128.load8_lane_2_align_1");
        expect(_v128_load8_lane_2_align_1).not.toBeUndefined();
        let _v128_load8_lane_2_align_1_result = module.invoke(_v128_load8_lane_2_align_1, 2, 0);
        expect(_v128_load8_lane_2_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_3_align_1 (instance 0)", () => {
        let _v128_load8_lane_3_align_1 = module.getExport("v128.load8_lane_3_align_1");
        expect(_v128_load8_lane_3_align_1).not.toBeUndefined();
        let _v128_load8_lane_3_align_1_result = module.invoke(_v128_load8_lane_3_align_1, 3, 0);
        expect(_v128_load8_lane_3_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_4_align_1 (instance 0)", () => {
        let _v128_load8_lane_4_align_1 = module.getExport("v128.load8_lane_4_align_1");
        expect(_v128_load8_lane_4_align_1).not.toBeUndefined();
        let _v128_load8_lane_4_align_1_result = module.invoke(_v128_load8_lane_4_align_1, 4, 0);
        expect(_v128_load8_lane_4_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_5_align_1 (instance 0)", () => {
        let _v128_load8_lane_5_align_1 = module.getExport("v128.load8_lane_5_align_1");
        expect(_v128_load8_lane_5_align_1).not.toBeUndefined();
        let _v128_load8_lane_5_align_1_result = module.invoke(_v128_load8_lane_5_align_1, 5, 0);
        expect(_v128_load8_lane_5_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_6_align_1 (instance 0)", () => {
        let _v128_load8_lane_6_align_1 = module.getExport("v128.load8_lane_6_align_1");
        expect(_v128_load8_lane_6_align_1).not.toBeUndefined();
        let _v128_load8_lane_6_align_1_result = module.invoke(_v128_load8_lane_6_align_1, 6, 0);
        expect(_v128_load8_lane_6_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_7_align_1 (instance 0)", () => {
        let _v128_load8_lane_7_align_1 = module.getExport("v128.load8_lane_7_align_1");
        expect(_v128_load8_lane_7_align_1).not.toBeUndefined();
        let _v128_load8_lane_7_align_1_result = module.invoke(_v128_load8_lane_7_align_1, 7, 0);
        expect(_v128_load8_lane_7_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_8_align_1 (instance 0)", () => {
        let _v128_load8_lane_8_align_1 = module.getExport("v128.load8_lane_8_align_1");
        expect(_v128_load8_lane_8_align_1).not.toBeUndefined();
        let _v128_load8_lane_8_align_1_result = module.invoke(_v128_load8_lane_8_align_1, 8, 0);
        expect(_v128_load8_lane_8_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_9_align_1 (instance 0)", () => {
        let _v128_load8_lane_9_align_1 = module.getExport("v128.load8_lane_9_align_1");
        expect(_v128_load8_lane_9_align_1).not.toBeUndefined();
        let _v128_load8_lane_9_align_1_result = module.invoke(_v128_load8_lane_9_align_1, 9, 0);
        expect(_v128_load8_lane_9_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_10_align_1 (instance 0)", () => {
        let _v128_load8_lane_10_align_1 = module.getExport("v128.load8_lane_10_align_1");
        expect(_v128_load8_lane_10_align_1).not.toBeUndefined();
        let _v128_load8_lane_10_align_1_result = module.invoke(_v128_load8_lane_10_align_1, 10, 0);
        expect(_v128_load8_lane_10_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_11_align_1 (instance 0)", () => {
        let _v128_load8_lane_11_align_1 = module.getExport("v128.load8_lane_11_align_1");
        expect(_v128_load8_lane_11_align_1).not.toBeUndefined();
        let _v128_load8_lane_11_align_1_result = module.invoke(_v128_load8_lane_11_align_1, 11, 0);
        expect(_v128_load8_lane_11_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_12_align_1 (instance 0)", () => {
        let _v128_load8_lane_12_align_1 = module.getExport("v128.load8_lane_12_align_1");
        expect(_v128_load8_lane_12_align_1).not.toBeUndefined();
        let _v128_load8_lane_12_align_1_result = module.invoke(_v128_load8_lane_12_align_1, 12, 0);
        expect(_v128_load8_lane_12_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_13_align_1 (instance 0)", () => {
        let _v128_load8_lane_13_align_1 = module.getExport("v128.load8_lane_13_align_1");
        expect(_v128_load8_lane_13_align_1).not.toBeUndefined();
        let _v128_load8_lane_13_align_1_result = module.invoke(_v128_load8_lane_13_align_1, 13, 0);
        expect(_v128_load8_lane_13_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_14_align_1 (instance 0)", () => {
        let _v128_load8_lane_14_align_1 = module.getExport("v128.load8_lane_14_align_1");
        expect(_v128_load8_lane_14_align_1).not.toBeUndefined();
        let _v128_load8_lane_14_align_1_result = module.invoke(_v128_load8_lane_14_align_1, 14, 0);
        expect(_v128_load8_lane_14_align_1_result).toBe(0);
    });

    _test("execution of simd_load8_lane_0: v128.load8_lane_15_align_1 (instance 0)", () => {
        let _v128_load8_lane_15_align_1 = module.getExport("v128.load8_lane_15_align_1");
        expect(_v128_load8_lane_15_align_1).not.toBeUndefined();
        let _v128_load8_lane_15_align_1_result = module.invoke(_v128_load8_lane_15_align_1, 15, 0);
        expect(_v128_load8_lane_15_align_1_result).toBe(0);
    });
});

describe("simd_load8_lane_1", () => {
    let _test = test;

    _test("execution of simd_load8_lane_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load8_lane_2", () => {
    let _test = test;

    _test("execution of simd_load8_lane_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load8_lane_3", () => {
    let _test = test;

    _test("execution of simd_load8_lane_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
