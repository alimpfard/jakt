let globalImportObject = {};
let namedModules = {};

describe("simd_load32_lane_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load32_lane_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load32_lane_0: v128.load32_lane_0 (instance 0)", () => {
        let _v128_load32_lane_0 = module.getExport("v128.load32_lane_0");
        expect(_v128_load32_lane_0).not.toBeUndefined();
        let _v128_load32_lane_0_result = module.invoke(_v128_load32_lane_0, 0, 0);
        expect(_v128_load32_lane_0_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_1 (instance 0)", () => {
        let _v128_load32_lane_1 = module.getExport("v128.load32_lane_1");
        expect(_v128_load32_lane_1).not.toBeUndefined();
        let _v128_load32_lane_1_result = module.invoke(_v128_load32_lane_1, 1, 0);
        expect(_v128_load32_lane_1_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_2 (instance 0)", () => {
        let _v128_load32_lane_2 = module.getExport("v128.load32_lane_2");
        expect(_v128_load32_lane_2).not.toBeUndefined();
        let _v128_load32_lane_2_result = module.invoke(_v128_load32_lane_2, 2, 0);
        expect(_v128_load32_lane_2_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_3 (instance 0)", () => {
        let _v128_load32_lane_3 = module.getExport("v128.load32_lane_3");
        expect(_v128_load32_lane_3).not.toBeUndefined();
        let _v128_load32_lane_3_result = module.invoke(_v128_load32_lane_3, 3, 0);
        expect(_v128_load32_lane_3_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_0_offset_0 (instance 0)", () => {
        let _v128_load32_lane_0_offset_0 = module.getExport("v128.load32_lane_0_offset_0");
        expect(_v128_load32_lane_0_offset_0).not.toBeUndefined();
        let _v128_load32_lane_0_offset_0_result = module.invoke(_v128_load32_lane_0_offset_0, 0);
        expect(_v128_load32_lane_0_offset_0_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_1_offset_1 (instance 0)", () => {
        let _v128_load32_lane_1_offset_1 = module.getExport("v128.load32_lane_1_offset_1");
        expect(_v128_load32_lane_1_offset_1).not.toBeUndefined();
        let _v128_load32_lane_1_offset_1_result = module.invoke(_v128_load32_lane_1_offset_1, 0);
        expect(_v128_load32_lane_1_offset_1_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_2_offset_2 (instance 0)", () => {
        let _v128_load32_lane_2_offset_2 = module.getExport("v128.load32_lane_2_offset_2");
        expect(_v128_load32_lane_2_offset_2).not.toBeUndefined();
        let _v128_load32_lane_2_offset_2_result = module.invoke(_v128_load32_lane_2_offset_2, 0);
        expect(_v128_load32_lane_2_offset_2_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_3_offset_3 (instance 0)", () => {
        let _v128_load32_lane_3_offset_3 = module.getExport("v128.load32_lane_3_offset_3");
        expect(_v128_load32_lane_3_offset_3).not.toBeUndefined();
        let _v128_load32_lane_3_offset_3_result = module.invoke(_v128_load32_lane_3_offset_3, 0);
        expect(_v128_load32_lane_3_offset_3_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_0_align_1 (instance 0)", () => {
        let _v128_load32_lane_0_align_1 = module.getExport("v128.load32_lane_0_align_1");
        expect(_v128_load32_lane_0_align_1).not.toBeUndefined();
        let _v128_load32_lane_0_align_1_result = module.invoke(_v128_load32_lane_0_align_1, 0, 0);
        expect(_v128_load32_lane_0_align_1_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_0_align_2 (instance 0)", () => {
        let _v128_load32_lane_0_align_2 = module.getExport("v128.load32_lane_0_align_2");
        expect(_v128_load32_lane_0_align_2).not.toBeUndefined();
        let _v128_load32_lane_0_align_2_result = module.invoke(_v128_load32_lane_0_align_2, 0, 0);
        expect(_v128_load32_lane_0_align_2_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_0_align_4 (instance 0)", () => {
        let _v128_load32_lane_0_align_4 = module.getExport("v128.load32_lane_0_align_4");
        expect(_v128_load32_lane_0_align_4).not.toBeUndefined();
        let _v128_load32_lane_0_align_4_result = module.invoke(_v128_load32_lane_0_align_4, 0, 0);
        expect(_v128_load32_lane_0_align_4_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_1_align_1 (instance 0)", () => {
        let _v128_load32_lane_1_align_1 = module.getExport("v128.load32_lane_1_align_1");
        expect(_v128_load32_lane_1_align_1).not.toBeUndefined();
        let _v128_load32_lane_1_align_1_result = module.invoke(_v128_load32_lane_1_align_1, 1, 0);
        expect(_v128_load32_lane_1_align_1_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_1_align_2 (instance 0)", () => {
        let _v128_load32_lane_1_align_2 = module.getExport("v128.load32_lane_1_align_2");
        expect(_v128_load32_lane_1_align_2).not.toBeUndefined();
        let _v128_load32_lane_1_align_2_result = module.invoke(_v128_load32_lane_1_align_2, 1, 0);
        expect(_v128_load32_lane_1_align_2_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_1_align_4 (instance 0)", () => {
        let _v128_load32_lane_1_align_4 = module.getExport("v128.load32_lane_1_align_4");
        expect(_v128_load32_lane_1_align_4).not.toBeUndefined();
        let _v128_load32_lane_1_align_4_result = module.invoke(_v128_load32_lane_1_align_4, 1, 0);
        expect(_v128_load32_lane_1_align_4_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_2_align_1 (instance 0)", () => {
        let _v128_load32_lane_2_align_1 = module.getExport("v128.load32_lane_2_align_1");
        expect(_v128_load32_lane_2_align_1).not.toBeUndefined();
        let _v128_load32_lane_2_align_1_result = module.invoke(_v128_load32_lane_2_align_1, 2, 0);
        expect(_v128_load32_lane_2_align_1_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_2_align_2 (instance 0)", () => {
        let _v128_load32_lane_2_align_2 = module.getExport("v128.load32_lane_2_align_2");
        expect(_v128_load32_lane_2_align_2).not.toBeUndefined();
        let _v128_load32_lane_2_align_2_result = module.invoke(_v128_load32_lane_2_align_2, 2, 0);
        expect(_v128_load32_lane_2_align_2_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_2_align_4 (instance 0)", () => {
        let _v128_load32_lane_2_align_4 = module.getExport("v128.load32_lane_2_align_4");
        expect(_v128_load32_lane_2_align_4).not.toBeUndefined();
        let _v128_load32_lane_2_align_4_result = module.invoke(_v128_load32_lane_2_align_4, 2, 0);
        expect(_v128_load32_lane_2_align_4_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_3_align_1 (instance 0)", () => {
        let _v128_load32_lane_3_align_1 = module.getExport("v128.load32_lane_3_align_1");
        expect(_v128_load32_lane_3_align_1).not.toBeUndefined();
        let _v128_load32_lane_3_align_1_result = module.invoke(_v128_load32_lane_3_align_1, 3, 0);
        expect(_v128_load32_lane_3_align_1_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_3_align_2 (instance 0)", () => {
        let _v128_load32_lane_3_align_2 = module.getExport("v128.load32_lane_3_align_2");
        expect(_v128_load32_lane_3_align_2).not.toBeUndefined();
        let _v128_load32_lane_3_align_2_result = module.invoke(_v128_load32_lane_3_align_2, 3, 0);
        expect(_v128_load32_lane_3_align_2_result).toBe(0);
    });

    _test("execution of simd_load32_lane_0: v128.load32_lane_3_align_4 (instance 0)", () => {
        let _v128_load32_lane_3_align_4 = module.getExport("v128.load32_lane_3_align_4");
        expect(_v128_load32_lane_3_align_4).not.toBeUndefined();
        let _v128_load32_lane_3_align_4_result = module.invoke(_v128_load32_lane_3_align_4, 3, 0);
        expect(_v128_load32_lane_3_align_4_result).toBe(0);
    });
});

describe("simd_load32_lane_1", () => {
    let _test = test;

    _test("execution of simd_load32_lane_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load32_lane_2", () => {
    let _test = test;

    _test("execution of simd_load32_lane_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load32_lane_3", () => {
    let _test = test;

    _test("execution of simd_load32_lane_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
