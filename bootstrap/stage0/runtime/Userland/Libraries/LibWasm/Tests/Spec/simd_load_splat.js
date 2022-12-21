let globalImportObject = {};
let namedModules = {};

describe("simd_load_splat_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_splat_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_splat_0: v128.load8_splat (instance 0)", () => {
        let _v128_load8_splat = module.getExport("v128.load8_splat");
        expect(_v128_load8_splat).not.toBeUndefined();
        let _v128_load8_splat_result = module.invoke(_v128_load8_splat, 0);
        expect(_v128_load8_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load8_splat (instance 1)", () => {
        let _v128_load8_splat = module.getExport("v128.load8_splat");
        expect(_v128_load8_splat).not.toBeUndefined();
        let _v128_load8_splat_result = module.invoke(_v128_load8_splat, 1);
        expect(_v128_load8_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load8_splat (instance 2)", () => {
        let _v128_load8_splat = module.getExport("v128.load8_splat");
        expect(_v128_load8_splat).not.toBeUndefined();
        let _v128_load8_splat_result = module.invoke(_v128_load8_splat, 2);
        expect(_v128_load8_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load8_splat (instance 3)", () => {
        let _v128_load8_splat = module.getExport("v128.load8_splat");
        expect(_v128_load8_splat).not.toBeUndefined();
        let _v128_load8_splat_result = module.invoke(_v128_load8_splat, 3);
        expect(_v128_load8_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load8_splat (instance 4)", () => {
        let _v128_load8_splat = module.getExport("v128.load8_splat");
        expect(_v128_load8_splat).not.toBeUndefined();
        let _v128_load8_splat_result = module.invoke(_v128_load8_splat, 65535);
        expect(_v128_load8_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load16_splat (instance 0)", () => {
        let _v128_load16_splat = module.getExport("v128.load16_splat");
        expect(_v128_load16_splat).not.toBeUndefined();
        let _v128_load16_splat_result = module.invoke(_v128_load16_splat, 4);
        expect(_v128_load16_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load16_splat (instance 1)", () => {
        let _v128_load16_splat = module.getExport("v128.load16_splat");
        expect(_v128_load16_splat).not.toBeUndefined();
        let _v128_load16_splat_result = module.invoke(_v128_load16_splat, 5);
        expect(_v128_load16_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load16_splat (instance 2)", () => {
        let _v128_load16_splat = module.getExport("v128.load16_splat");
        expect(_v128_load16_splat).not.toBeUndefined();
        let _v128_load16_splat_result = module.invoke(_v128_load16_splat, 6);
        expect(_v128_load16_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load16_splat (instance 3)", () => {
        let _v128_load16_splat = module.getExport("v128.load16_splat");
        expect(_v128_load16_splat).not.toBeUndefined();
        let _v128_load16_splat_result = module.invoke(_v128_load16_splat, 7);
        expect(_v128_load16_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load16_splat (instance 4)", () => {
        let _v128_load16_splat = module.getExport("v128.load16_splat");
        expect(_v128_load16_splat).not.toBeUndefined();
        let _v128_load16_splat_result = module.invoke(_v128_load16_splat, 65534);
        expect(_v128_load16_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load32_splat (instance 0)", () => {
        let _v128_load32_splat = module.getExport("v128.load32_splat");
        expect(_v128_load32_splat).not.toBeUndefined();
        let _v128_load32_splat_result = module.invoke(_v128_load32_splat, 8);
        expect(_v128_load32_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load32_splat (instance 1)", () => {
        let _v128_load32_splat = module.getExport("v128.load32_splat");
        expect(_v128_load32_splat).not.toBeUndefined();
        let _v128_load32_splat_result = module.invoke(_v128_load32_splat, 9);
        expect(_v128_load32_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load32_splat (instance 2)", () => {
        let _v128_load32_splat = module.getExport("v128.load32_splat");
        expect(_v128_load32_splat).not.toBeUndefined();
        let _v128_load32_splat_result = module.invoke(_v128_load32_splat, 10);
        expect(_v128_load32_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load32_splat (instance 3)", () => {
        let _v128_load32_splat = module.getExport("v128.load32_splat");
        expect(_v128_load32_splat).not.toBeUndefined();
        let _v128_load32_splat_result = module.invoke(_v128_load32_splat, 11);
        expect(_v128_load32_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load32_splat (instance 4)", () => {
        let _v128_load32_splat = module.getExport("v128.load32_splat");
        expect(_v128_load32_splat).not.toBeUndefined();
        let _v128_load32_splat_result = module.invoke(_v128_load32_splat, 65532);
        expect(_v128_load32_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load64_splat (instance 0)", () => {
        let _v128_load64_splat = module.getExport("v128.load64_splat");
        expect(_v128_load64_splat).not.toBeUndefined();
        let _v128_load64_splat_result = module.invoke(_v128_load64_splat, 12);
        expect(_v128_load64_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load64_splat (instance 1)", () => {
        let _v128_load64_splat = module.getExport("v128.load64_splat");
        expect(_v128_load64_splat).not.toBeUndefined();
        let _v128_load64_splat_result = module.invoke(_v128_load64_splat, 13);
        expect(_v128_load64_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load64_splat (instance 2)", () => {
        let _v128_load64_splat = module.getExport("v128.load64_splat");
        expect(_v128_load64_splat).not.toBeUndefined();
        let _v128_load64_splat_result = module.invoke(_v128_load64_splat, 14);
        expect(_v128_load64_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load64_splat (instance 3)", () => {
        let _v128_load64_splat = module.getExport("v128.load64_splat");
        expect(_v128_load64_splat).not.toBeUndefined();
        let _v128_load64_splat_result = module.invoke(_v128_load64_splat, 15);
        expect(_v128_load64_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load64_splat (instance 4)", () => {
        let _v128_load64_splat = module.getExport("v128.load64_splat");
        expect(_v128_load64_splat).not.toBeUndefined();
        let _v128_load64_splat_result = module.invoke(_v128_load64_splat, 65528);
        expect(_v128_load64_splat_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset0 (instance 0)", () => {
        let _v8x16_offset0 = module.getExport("v8x16.offset0");
        expect(_v8x16_offset0).not.toBeUndefined();
        let _v8x16_offset0_result = module.invoke(_v8x16_offset0, 0);
        expect(_v8x16_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.align1 (instance 0)", () => {
        let _v8x16_align1 = module.getExport("v8x16.align1");
        expect(_v8x16_align1).not.toBeUndefined();
        let _v8x16_align1_result = module.invoke(_v8x16_align1, 0);
        expect(_v8x16_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset1_align1 (instance 0)", () => {
        let _v8x16_offset1_align1 = module.getExport("v8x16.offset1_align1");
        expect(_v8x16_offset1_align1).not.toBeUndefined();
        let _v8x16_offset1_align1_result = module.invoke(_v8x16_offset1_align1, 0);
        expect(_v8x16_offset1_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset2_align1 (instance 0)", () => {
        let _v8x16_offset2_align1 = module.getExport("v8x16.offset2_align1");
        expect(_v8x16_offset2_align1).not.toBeUndefined();
        let _v8x16_offset2_align1_result = module.invoke(_v8x16_offset2_align1, 0);
        expect(_v8x16_offset2_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset15_align1 (instance 0)", () => {
        let _v8x16_offset15_align1 = module.getExport("v8x16.offset15_align1");
        expect(_v8x16_offset15_align1).not.toBeUndefined();
        let _v8x16_offset15_align1_result = module.invoke(_v8x16_offset15_align1, 0);
        expect(_v8x16_offset15_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset0 (instance 1)", () => {
        let _v8x16_offset0 = module.getExport("v8x16.offset0");
        expect(_v8x16_offset0).not.toBeUndefined();
        let _v8x16_offset0_result = module.invoke(_v8x16_offset0, 1);
        expect(_v8x16_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.align1 (instance 1)", () => {
        let _v8x16_align1 = module.getExport("v8x16.align1");
        expect(_v8x16_align1).not.toBeUndefined();
        let _v8x16_align1_result = module.invoke(_v8x16_align1, 1);
        expect(_v8x16_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset1_align1 (instance 1)", () => {
        let _v8x16_offset1_align1 = module.getExport("v8x16.offset1_align1");
        expect(_v8x16_offset1_align1).not.toBeUndefined();
        let _v8x16_offset1_align1_result = module.invoke(_v8x16_offset1_align1, 1);
        expect(_v8x16_offset1_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset2_align1 (instance 1)", () => {
        let _v8x16_offset2_align1 = module.getExport("v8x16.offset2_align1");
        expect(_v8x16_offset2_align1).not.toBeUndefined();
        let _v8x16_offset2_align1_result = module.invoke(_v8x16_offset2_align1, 1);
        expect(_v8x16_offset2_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset15_align1 (instance 1)", () => {
        let _v8x16_offset15_align1 = module.getExport("v8x16.offset15_align1");
        expect(_v8x16_offset15_align1).not.toBeUndefined();
        let _v8x16_offset15_align1_result = module.invoke(_v8x16_offset15_align1, 1);
        expect(_v8x16_offset15_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.offset0 (instance 2)", () => {
        let _v8x16_offset0 = module.getExport("v8x16.offset0");
        expect(_v8x16_offset0).not.toBeUndefined();
        let _v8x16_offset0_result = module.invoke(_v8x16_offset0, 65535);
        expect(_v8x16_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v8x16.align1 (instance 2)", () => {
        let _v8x16_align1 = module.getExport("v8x16.align1");
        expect(_v8x16_align1).not.toBeUndefined();
        let _v8x16_align1_result = module.invoke(_v8x16_align1, 65535);
        expect(_v8x16_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset0 (instance 0)", () => {
        let _v16x8_offset0 = module.getExport("v16x8.offset0");
        expect(_v16x8_offset0).not.toBeUndefined();
        let _v16x8_offset0_result = module.invoke(_v16x8_offset0, 0);
        expect(_v16x8_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.align1 (instance 0)", () => {
        let _v16x8_align1 = module.getExport("v16x8.align1");
        expect(_v16x8_align1).not.toBeUndefined();
        let _v16x8_align1_result = module.invoke(_v16x8_align1, 0);
        expect(_v16x8_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset1_align1 (instance 0)", () => {
        let _v16x8_offset1_align1 = module.getExport("v16x8.offset1_align1");
        expect(_v16x8_offset1_align1).not.toBeUndefined();
        let _v16x8_offset1_align1_result = module.invoke(_v16x8_offset1_align1, 0);
        expect(_v16x8_offset1_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset2_align1 (instance 0)", () => {
        let _v16x8_offset2_align1 = module.getExport("v16x8.offset2_align1");
        expect(_v16x8_offset2_align1).not.toBeUndefined();
        let _v16x8_offset2_align1_result = module.invoke(_v16x8_offset2_align1, 0);
        expect(_v16x8_offset2_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset15_align2 (instance 0)", () => {
        let _v16x8_offset15_align2 = module.getExport("v16x8.offset15_align2");
        expect(_v16x8_offset15_align2).not.toBeUndefined();
        let _v16x8_offset15_align2_result = module.invoke(_v16x8_offset15_align2, 0);
        expect(_v16x8_offset15_align2_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset0 (instance 1)", () => {
        let _v16x8_offset0 = module.getExport("v16x8.offset0");
        expect(_v16x8_offset0).not.toBeUndefined();
        let _v16x8_offset0_result = module.invoke(_v16x8_offset0, 1);
        expect(_v16x8_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.align1 (instance 1)", () => {
        let _v16x8_align1 = module.getExport("v16x8.align1");
        expect(_v16x8_align1).not.toBeUndefined();
        let _v16x8_align1_result = module.invoke(_v16x8_align1, 1);
        expect(_v16x8_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset1_align1 (instance 1)", () => {
        let _v16x8_offset1_align1 = module.getExport("v16x8.offset1_align1");
        expect(_v16x8_offset1_align1).not.toBeUndefined();
        let _v16x8_offset1_align1_result = module.invoke(_v16x8_offset1_align1, 1);
        expect(_v16x8_offset1_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset2_align1 (instance 1)", () => {
        let _v16x8_offset2_align1 = module.getExport("v16x8.offset2_align1");
        expect(_v16x8_offset2_align1).not.toBeUndefined();
        let _v16x8_offset2_align1_result = module.invoke(_v16x8_offset2_align1, 1);
        expect(_v16x8_offset2_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset15_align2 (instance 1)", () => {
        let _v16x8_offset15_align2 = module.getExport("v16x8.offset15_align2");
        expect(_v16x8_offset15_align2).not.toBeUndefined();
        let _v16x8_offset15_align2_result = module.invoke(_v16x8_offset15_align2, 1);
        expect(_v16x8_offset15_align2_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.offset0 (instance 2)", () => {
        let _v16x8_offset0 = module.getExport("v16x8.offset0");
        expect(_v16x8_offset0).not.toBeUndefined();
        let _v16x8_offset0_result = module.invoke(_v16x8_offset0, 65534);
        expect(_v16x8_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v16x8.align1 (instance 2)", () => {
        let _v16x8_align1 = module.getExport("v16x8.align1");
        expect(_v16x8_align1).not.toBeUndefined();
        let _v16x8_align1_result = module.invoke(_v16x8_align1, 65534);
        expect(_v16x8_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset0 (instance 0)", () => {
        let _v32x4_offset0 = module.getExport("v32x4.offset0");
        expect(_v32x4_offset0).not.toBeUndefined();
        let _v32x4_offset0_result = module.invoke(_v32x4_offset0, 0);
        expect(_v32x4_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.align1 (instance 0)", () => {
        let _v32x4_align1 = module.getExport("v32x4.align1");
        expect(_v32x4_align1).not.toBeUndefined();
        let _v32x4_align1_result = module.invoke(_v32x4_align1, 0);
        expect(_v32x4_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset1_align1 (instance 0)", () => {
        let _v32x4_offset1_align1 = module.getExport("v32x4.offset1_align1");
        expect(_v32x4_offset1_align1).not.toBeUndefined();
        let _v32x4_offset1_align1_result = module.invoke(_v32x4_offset1_align1, 0);
        expect(_v32x4_offset1_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset2_align2 (instance 0)", () => {
        let _v32x4_offset2_align2 = module.getExport("v32x4.offset2_align2");
        expect(_v32x4_offset2_align2).not.toBeUndefined();
        let _v32x4_offset2_align2_result = module.invoke(_v32x4_offset2_align2, 0);
        expect(_v32x4_offset2_align2_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset15_align4 (instance 0)", () => {
        let _v32x4_offset15_align4 = module.getExport("v32x4.offset15_align4");
        expect(_v32x4_offset15_align4).not.toBeUndefined();
        let _v32x4_offset15_align4_result = module.invoke(_v32x4_offset15_align4, 0);
        expect(_v32x4_offset15_align4_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset0 (instance 1)", () => {
        let _v32x4_offset0 = module.getExport("v32x4.offset0");
        expect(_v32x4_offset0).not.toBeUndefined();
        let _v32x4_offset0_result = module.invoke(_v32x4_offset0, 1);
        expect(_v32x4_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.align1 (instance 1)", () => {
        let _v32x4_align1 = module.getExport("v32x4.align1");
        expect(_v32x4_align1).not.toBeUndefined();
        let _v32x4_align1_result = module.invoke(_v32x4_align1, 1);
        expect(_v32x4_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset1_align1 (instance 1)", () => {
        let _v32x4_offset1_align1 = module.getExport("v32x4.offset1_align1");
        expect(_v32x4_offset1_align1).not.toBeUndefined();
        let _v32x4_offset1_align1_result = module.invoke(_v32x4_offset1_align1, 1);
        expect(_v32x4_offset1_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset2_align2 (instance 1)", () => {
        let _v32x4_offset2_align2 = module.getExport("v32x4.offset2_align2");
        expect(_v32x4_offset2_align2).not.toBeUndefined();
        let _v32x4_offset2_align2_result = module.invoke(_v32x4_offset2_align2, 1);
        expect(_v32x4_offset2_align2_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset15_align4 (instance 1)", () => {
        let _v32x4_offset15_align4 = module.getExport("v32x4.offset15_align4");
        expect(_v32x4_offset15_align4).not.toBeUndefined();
        let _v32x4_offset15_align4_result = module.invoke(_v32x4_offset15_align4, 1);
        expect(_v32x4_offset15_align4_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.offset0 (instance 2)", () => {
        let _v32x4_offset0 = module.getExport("v32x4.offset0");
        expect(_v32x4_offset0).not.toBeUndefined();
        let _v32x4_offset0_result = module.invoke(_v32x4_offset0, 65532);
        expect(_v32x4_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v32x4.align1 (instance 2)", () => {
        let _v32x4_align1 = module.getExport("v32x4.align1");
        expect(_v32x4_align1).not.toBeUndefined();
        let _v32x4_align1_result = module.invoke(_v32x4_align1, 65532);
        expect(_v32x4_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset0 (instance 0)", () => {
        let _v64x2_offset0 = module.getExport("v64x2.offset0");
        expect(_v64x2_offset0).not.toBeUndefined();
        let _v64x2_offset0_result = module.invoke(_v64x2_offset0, 0);
        expect(_v64x2_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.align1 (instance 0)", () => {
        let _v64x2_align1 = module.getExport("v64x2.align1");
        expect(_v64x2_align1).not.toBeUndefined();
        let _v64x2_align1_result = module.invoke(_v64x2_align1, 0);
        expect(_v64x2_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset1_align2 (instance 0)", () => {
        let _v64x2_offset1_align2 = module.getExport("v64x2.offset1_align2");
        expect(_v64x2_offset1_align2).not.toBeUndefined();
        let _v64x2_offset1_align2_result = module.invoke(_v64x2_offset1_align2, 0);
        expect(_v64x2_offset1_align2_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset2_align4 (instance 0)", () => {
        let _v64x2_offset2_align4 = module.getExport("v64x2.offset2_align4");
        expect(_v64x2_offset2_align4).not.toBeUndefined();
        let _v64x2_offset2_align4_result = module.invoke(_v64x2_offset2_align4, 0);
        expect(_v64x2_offset2_align4_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset15_align8 (instance 0)", () => {
        let _v64x2_offset15_align8 = module.getExport("v64x2.offset15_align8");
        expect(_v64x2_offset15_align8).not.toBeUndefined();
        let _v64x2_offset15_align8_result = module.invoke(_v64x2_offset15_align8, 0);
        expect(_v64x2_offset15_align8_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset0 (instance 1)", () => {
        let _v64x2_offset0 = module.getExport("v64x2.offset0");
        expect(_v64x2_offset0).not.toBeUndefined();
        let _v64x2_offset0_result = module.invoke(_v64x2_offset0, 1);
        expect(_v64x2_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.align1 (instance 1)", () => {
        let _v64x2_align1 = module.getExport("v64x2.align1");
        expect(_v64x2_align1).not.toBeUndefined();
        let _v64x2_align1_result = module.invoke(_v64x2_align1, 1);
        expect(_v64x2_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset1_align2 (instance 1)", () => {
        let _v64x2_offset1_align2 = module.getExport("v64x2.offset1_align2");
        expect(_v64x2_offset1_align2).not.toBeUndefined();
        let _v64x2_offset1_align2_result = module.invoke(_v64x2_offset1_align2, 1);
        expect(_v64x2_offset1_align2_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset2_align4 (instance 1)", () => {
        let _v64x2_offset2_align4 = module.getExport("v64x2.offset2_align4");
        expect(_v64x2_offset2_align4).not.toBeUndefined();
        let _v64x2_offset2_align4_result = module.invoke(_v64x2_offset2_align4, 1);
        expect(_v64x2_offset2_align4_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset15_align8 (instance 1)", () => {
        let _v64x2_offset15_align8 = module.getExport("v64x2.offset15_align8");
        expect(_v64x2_offset15_align8).not.toBeUndefined();
        let _v64x2_offset15_align8_result = module.invoke(_v64x2_offset15_align8, 1);
        expect(_v64x2_offset15_align8_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.offset0 (instance 2)", () => {
        let _v64x2_offset0 = module.getExport("v64x2.offset0");
        expect(_v64x2_offset0).not.toBeUndefined();
        let _v64x2_offset0_result = module.invoke(_v64x2_offset0, 65528);
        expect(_v64x2_offset0_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v64x2.align1 (instance 2)", () => {
        let _v64x2_align1 = module.getExport("v64x2.align1");
        expect(_v64x2_align1).not.toBeUndefined();
        let _v64x2_align1_result = module.invoke(_v64x2_align1, 65528);
        expect(_v64x2_align1_result).toBe(0);
    });

    _test("execution of simd_load_splat_0: v128.load8_splat (instance 5)", () => {
        let _v128_load8_splat = module.getExport("v128.load8_splat");
        expect(_v128_load8_splat).not.toBeUndefined();
        expect(() => module.invoke(_v128_load8_splat, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v128.load16_splat (instance 5)", () => {
        let _v128_load16_splat = module.getExport("v128.load16_splat");
        expect(_v128_load16_splat).not.toBeUndefined();
        expect(() => module.invoke(_v128_load16_splat, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v128.load32_splat (instance 5)", () => {
        let _v128_load32_splat = module.getExport("v128.load32_splat");
        expect(_v128_load32_splat).not.toBeUndefined();
        expect(() => module.invoke(_v128_load32_splat, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v128.load64_splat (instance 5)", () => {
        let _v128_load64_splat = module.getExport("v128.load64_splat");
        expect(_v128_load64_splat).not.toBeUndefined();
        expect(() => module.invoke(_v128_load64_splat, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v128.load8_splat (instance 6)", () => {
        let _v128_load8_splat = module.getExport("v128.load8_splat");
        expect(_v128_load8_splat).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load8_splat, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v128.load16_splat (instance 6)", () => {
        let _v128_load16_splat = module.getExport("v128.load16_splat");
        expect(_v128_load16_splat).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load16_splat, 65535).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v128.load32_splat (instance 6)", () => {
        let _v128_load32_splat = module.getExport("v128.load32_splat");
        expect(_v128_load32_splat).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load32_splat, 65533).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v128.load64_splat (instance 6)", () => {
        let _v128_load64_splat = module.getExport("v128.load64_splat");
        expect(_v128_load64_splat).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load64_splat, 65529).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v8x16.offset1_align1 (instance 2)", () => {
        let _v8x16_offset1_align1 = module.getExport("v8x16.offset1_align1");
        expect(_v8x16_offset1_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v8x16_offset1_align1, 65535).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v8x16.offset2_align1 (instance 2)", () => {
        let _v8x16_offset2_align1 = module.getExport("v8x16.offset2_align1");
        expect(_v8x16_offset2_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v8x16_offset2_align1, 65535).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v8x16.offset15_align1 (instance 2)", () => {
        let _v8x16_offset15_align1 = module.getExport("v8x16.offset15_align1");
        expect(_v8x16_offset15_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v8x16_offset15_align1, 65535).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v16x8.offset1_align1 (instance 2)", () => {
        let _v16x8_offset1_align1 = module.getExport("v16x8.offset1_align1");
        expect(_v16x8_offset1_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v16x8_offset1_align1, 65534).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v16x8.offset2_align1 (instance 2)", () => {
        let _v16x8_offset2_align1 = module.getExport("v16x8.offset2_align1");
        expect(_v16x8_offset2_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v16x8_offset2_align1, 65534).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v16x8.offset15_align2 (instance 2)", () => {
        let _v16x8_offset15_align2 = module.getExport("v16x8.offset15_align2");
        expect(_v16x8_offset15_align2).not.toBeUndefined();
        expect(() =>
            module.invoke(_v16x8_offset15_align2, 65534).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v32x4.offset1_align1 (instance 2)", () => {
        let _v32x4_offset1_align1 = module.getExport("v32x4.offset1_align1");
        expect(_v32x4_offset1_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v32x4_offset1_align1, 65532).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v32x4.offset2_align2 (instance 2)", () => {
        let _v32x4_offset2_align2 = module.getExport("v32x4.offset2_align2");
        expect(_v32x4_offset2_align2).not.toBeUndefined();
        expect(() =>
            module.invoke(_v32x4_offset2_align2, 65532).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v32x4.offset15_align4 (instance 2)", () => {
        let _v32x4_offset15_align4 = module.getExport("v32x4.offset15_align4");
        expect(_v32x4_offset15_align4).not.toBeUndefined();
        expect(() =>
            module.invoke(_v32x4_offset15_align4, 65532).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v64x2.offset1_align2 (instance 2)", () => {
        let _v64x2_offset1_align2 = module.getExport("v64x2.offset1_align2");
        expect(_v64x2_offset1_align2).not.toBeUndefined();
        expect(() =>
            module.invoke(_v64x2_offset1_align2, 65528).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v64x2.offset2_align4 (instance 2)", () => {
        let _v64x2_offset2_align4 = module.getExport("v64x2.offset2_align4");
        expect(_v64x2_offset2_align4).not.toBeUndefined();
        expect(() =>
            module.invoke(_v64x2_offset2_align4, 65528).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v64x2.offset15_align8 (instance 2)", () => {
        let _v64x2_offset15_align8 = module.getExport("v64x2.offset15_align8");
        expect(_v64x2_offset15_align8).not.toBeUndefined();
        expect(() =>
            module.invoke(_v64x2_offset15_align8, 65528).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v8x16.offset1_align1 (instance 3)", () => {
        let _v8x16_offset1_align1 = module.getExport("v8x16.offset1_align1");
        expect(_v8x16_offset1_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v8x16_offset1_align1, -1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v16x8.offset1_align1 (instance 3)", () => {
        let _v16x8_offset1_align1 = module.getExport("v16x8.offset1_align1");
        expect(_v16x8_offset1_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v16x8_offset1_align1, -1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v32x4.offset1_align1 (instance 3)", () => {
        let _v32x4_offset1_align1 = module.getExport("v32x4.offset1_align1");
        expect(_v32x4_offset1_align1).not.toBeUndefined();
        expect(() =>
            module.invoke(_v32x4_offset1_align1, -1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v64x2.offset1_align2 (instance 3)", () => {
        let _v64x2_offset1_align2 = module.getExport("v64x2.offset1_align2");
        expect(_v64x2_offset1_align2).not.toBeUndefined();
        expect(() =>
            module.invoke(_v64x2_offset1_align2, -1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_splat_0: v8x16.offset65536 (instance 0)", () => {
        let _v8x16_offset65536 = module.getExport("v8x16.offset65536");
        expect(_v8x16_offset65536).not.toBeUndefined();
        expect(() => module.invoke(_v8x16_offset65536, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v16x8.offset65535 (instance 0)", () => {
        let _v16x8_offset65535 = module.getExport("v16x8.offset65535");
        expect(_v16x8_offset65535).not.toBeUndefined();
        expect(() => module.invoke(_v16x8_offset65535, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v32x4.offset65533 (instance 0)", () => {
        let _v32x4_offset65533 = module.getExport("v32x4.offset65533");
        expect(_v32x4_offset65533).not.toBeUndefined();
        expect(() => module.invoke(_v32x4_offset65533, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v64x2.offset65529 (instance 0)", () => {
        let _v64x2_offset65529 = module.getExport("v64x2.offset65529");
        expect(_v64x2_offset65529).not.toBeUndefined();
        expect(() => module.invoke(_v64x2_offset65529, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v8x16.offset65536 (instance 1)", () => {
        let _v8x16_offset65536 = module.getExport("v8x16.offset65536");
        expect(_v8x16_offset65536).not.toBeUndefined();
        expect(() => module.invoke(_v8x16_offset65536, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v16x8.offset65535 (instance 1)", () => {
        let _v16x8_offset65535 = module.getExport("v16x8.offset65535");
        expect(_v16x8_offset65535).not.toBeUndefined();
        expect(() => module.invoke(_v16x8_offset65535, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v32x4.offset65533 (instance 1)", () => {
        let _v32x4_offset65533 = module.getExport("v32x4.offset65533");
        expect(_v32x4_offset65533).not.toBeUndefined();
        expect(() => module.invoke(_v32x4_offset65533, 1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_splat_0: v64x2.offset65529 (instance 1)", () => {
        let _v64x2_offset65529 = module.getExport("v64x2.offset65529");
        expect(_v64x2_offset65529).not.toBeUndefined();
        expect(() => module.invoke(_v64x2_offset65529, 1).toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_splat_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_splat_1: v128.load8_splat-in-block (instance 0)", () => {
        let _v128_load8_splat_in_block = module.getExport("v128.load8_splat-in-block");
        expect(_v128_load8_splat_in_block).not.toBeUndefined();
        let _v128_load8_splat_in_block_result = module.invoke(_v128_load8_splat_in_block);
        expect(_v128_load8_splat_in_block_result).toBe(0);
    });

    _test("execution of simd_load_splat_1: v128.load16_splat-in-block (instance 0)", () => {
        let _v128_load16_splat_in_block = module.getExport("v128.load16_splat-in-block");
        expect(_v128_load16_splat_in_block).not.toBeUndefined();
        let _v128_load16_splat_in_block_result = module.invoke(_v128_load16_splat_in_block);
        expect(_v128_load16_splat_in_block_result).toBe(0);
    });

    _test("execution of simd_load_splat_1: v128.load32_splat-in-block (instance 0)", () => {
        let _v128_load32_splat_in_block = module.getExport("v128.load32_splat-in-block");
        expect(_v128_load32_splat_in_block).not.toBeUndefined();
        let _v128_load32_splat_in_block_result = module.invoke(_v128_load32_splat_in_block);
        expect(_v128_load32_splat_in_block_result).toBe(0);
    });

    _test("execution of simd_load_splat_1: v128.load64_splat-in-block (instance 0)", () => {
        let _v128_load64_splat_in_block = module.getExport("v128.load64_splat-in-block");
        expect(_v128_load64_splat_in_block).not.toBeUndefined();
        let _v128_load64_splat_in_block_result = module.invoke(_v128_load64_splat_in_block);
        expect(_v128_load64_splat_in_block_result).toBe(0);
    });

    _test("execution of simd_load_splat_1: v128.load8_splat-as-br-value (instance 0)", () => {
        let _v128_load8_splat_as_br_value = module.getExport("v128.load8_splat-as-br-value");
        expect(_v128_load8_splat_as_br_value).not.toBeUndefined();
        let _v128_load8_splat_as_br_value_result = module.invoke(_v128_load8_splat_as_br_value);
        expect(_v128_load8_splat_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_splat_1: v128.load16_splat-as-br-value (instance 0)", () => {
        let _v128_load16_splat_as_br_value = module.getExport("v128.load16_splat-as-br-value");
        expect(_v128_load16_splat_as_br_value).not.toBeUndefined();
        let _v128_load16_splat_as_br_value_result = module.invoke(_v128_load16_splat_as_br_value);
        expect(_v128_load16_splat_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_splat_1: v128.load32_splat-as-br-value (instance 0)", () => {
        let _v128_load32_splat_as_br_value = module.getExport("v128.load32_splat-as-br-value");
        expect(_v128_load32_splat_as_br_value).not.toBeUndefined();
        let _v128_load32_splat_as_br_value_result = module.invoke(_v128_load32_splat_as_br_value);
        expect(_v128_load32_splat_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_splat_1: v128.load64_splat-as-br-value (instance 0)", () => {
        let _v128_load64_splat_as_br_value = module.getExport("v128.load64_splat-as-br-value");
        expect(_v128_load64_splat_as_br_value).not.toBeUndefined();
        let _v128_load64_splat_as_br_value_result = module.invoke(_v128_load64_splat_as_br_value);
        expect(_v128_load64_splat_as_br_value_result).toBe(0);
    });

    _test(
        "execution of simd_load_splat_1: v128.load8_splat-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load8_splat_extract_lane_s_operand = module.getExport(
                "v128.load8_splat-extract_lane_s-operand"
            );
            expect(_v128_load8_splat_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load8_splat_extract_lane_s_operand_result = module.invoke(
                _v128_load8_splat_extract_lane_s_operand
            );
            expect(_v128_load8_splat_extract_lane_s_operand_result).toBe(6);
        }
    );

    _test(
        "execution of simd_load_splat_1: v128.load16_splat-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load16_splat_extract_lane_s_operand = module.getExport(
                "v128.load16_splat-extract_lane_s-operand"
            );
            expect(_v128_load16_splat_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load16_splat_extract_lane_s_operand_result = module.invoke(
                _v128_load16_splat_extract_lane_s_operand
            );
            expect(_v128_load16_splat_extract_lane_s_operand_result).toBe(7);
        }
    );

    _test(
        "execution of simd_load_splat_1: v128.load32_splat-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load32_splat_extract_lane_s_operand = module.getExport(
                "v128.load32_splat-extract_lane_s-operand"
            );
            expect(_v128_load32_splat_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load32_splat_extract_lane_s_operand_result = module.invoke(
                _v128_load32_splat_extract_lane_s_operand
            );
            expect(_v128_load32_splat_extract_lane_s_operand_result).toBe(8);
        }
    );

    _test(
        "execution of simd_load_splat_1: v128.load64_splat-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load64_splat_extract_lane_s_operand = module.getExport(
                "v128.load64_splat-extract_lane_s-operand"
            );
            expect(_v128_load64_splat_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load64_splat_extract_lane_s_operand_result = module.invoke(
                _v128_load64_splat_extract_lane_s_operand
            );
            expect(_v128_load64_splat_extract_lane_s_operand_result).toBe(0);
        }
    );
});

describe("simd_load_splat_2", () => {
    let _test = test;

    _test("execution of simd_load_splat_2: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_3", () => {
    let _test = test;

    _test("execution of simd_load_splat_3: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_4", () => {
    let _test = test;

    _test("execution of simd_load_splat_4: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_5", () => {
    let _test = test;

    _test("execution of simd_load_splat_5: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_6", () => {
    let _test = test;

    _test("execution of simd_load_splat_6: _inline_test_4 (instance 0)", () => {});
});

describe("simd_load_splat_7", () => {
    let _test = test;

    _test("execution of simd_load_splat_7: _inline_test_5 (instance 0)", () => {});
});

describe("simd_load_splat_8", () => {
    let _test = test;

    _test("execution of simd_load_splat_8: _inline_test_6 (instance 0)", () => {});
});

describe("simd_load_splat_9", () => {
    let _test = test;

    _test("execution of simd_load_splat_9: _inline_test_7 (instance 0)", () => {});
});

describe("simd_load_splat_10", () => {
    let _test = test;

    _test("execution of simd_load_splat_10: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_11", () => {
    let _test = test;

    _test("execution of simd_load_splat_11: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_12", () => {
    let _test = test;

    _test("execution of simd_load_splat_12: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_splat_13", () => {
    let _test = test;

    _test("execution of simd_load_splat_13: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
