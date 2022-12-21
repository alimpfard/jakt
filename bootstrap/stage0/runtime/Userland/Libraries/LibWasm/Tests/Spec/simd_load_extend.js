let globalImportObject = {};
let namedModules = {};

describe("simd_load_extend_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_extend_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_extend_0: v128.load8x8_s (instance 0)", () => {
        let _v128_load8x8_s = module.getExport("v128.load8x8_s");
        expect(_v128_load8x8_s).not.toBeUndefined();
        let _v128_load8x8_s_result = module.invoke(_v128_load8x8_s, 0);
        expect(_v128_load8x8_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u (instance 0)", () => {
        let _v128_load8x8_u = module.getExport("v128.load8x8_u");
        expect(_v128_load8x8_u).not.toBeUndefined();
        let _v128_load8x8_u_result = module.invoke(_v128_load8x8_u, 0);
        expect(_v128_load8x8_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s (instance 0)", () => {
        let _v128_load16x4_s = module.getExport("v128.load16x4_s");
        expect(_v128_load16x4_s).not.toBeUndefined();
        let _v128_load16x4_s_result = module.invoke(_v128_load16x4_s, 0);
        expect(_v128_load16x4_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u (instance 0)", () => {
        let _v128_load16x4_u = module.getExport("v128.load16x4_u");
        expect(_v128_load16x4_u).not.toBeUndefined();
        let _v128_load16x4_u_result = module.invoke(_v128_load16x4_u, 0);
        expect(_v128_load16x4_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s (instance 0)", () => {
        let _v128_load32x2_s = module.getExport("v128.load32x2_s");
        expect(_v128_load32x2_s).not.toBeUndefined();
        let _v128_load32x2_s_result = module.invoke(_v128_load32x2_s, 0);
        expect(_v128_load32x2_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u (instance 0)", () => {
        let _v128_load32x2_u = module.getExport("v128.load32x2_u");
        expect(_v128_load32x2_u).not.toBeUndefined();
        let _v128_load32x2_u_result = module.invoke(_v128_load32x2_u, 0);
        expect(_v128_load32x2_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s (instance 1)", () => {
        let _v128_load8x8_s = module.getExport("v128.load8x8_s");
        expect(_v128_load8x8_s).not.toBeUndefined();
        let _v128_load8x8_s_result = module.invoke(_v128_load8x8_s, 10);
        expect(_v128_load8x8_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u (instance 1)", () => {
        let _v128_load8x8_u = module.getExport("v128.load8x8_u");
        expect(_v128_load8x8_u).not.toBeUndefined();
        let _v128_load8x8_u_result = module.invoke(_v128_load8x8_u, 10);
        expect(_v128_load8x8_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s (instance 1)", () => {
        let _v128_load16x4_s = module.getExport("v128.load16x4_s");
        expect(_v128_load16x4_s).not.toBeUndefined();
        let _v128_load16x4_s_result = module.invoke(_v128_load16x4_s, 10);
        expect(_v128_load16x4_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u (instance 1)", () => {
        let _v128_load16x4_u = module.getExport("v128.load16x4_u");
        expect(_v128_load16x4_u).not.toBeUndefined();
        let _v128_load16x4_u_result = module.invoke(_v128_load16x4_u, 10);
        expect(_v128_load16x4_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s (instance 1)", () => {
        let _v128_load32x2_s = module.getExport("v128.load32x2_s");
        expect(_v128_load32x2_s).not.toBeUndefined();
        let _v128_load32x2_s_result = module.invoke(_v128_load32x2_s, 10);
        expect(_v128_load32x2_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u (instance 1)", () => {
        let _v128_load32x2_u = module.getExport("v128.load32x2_u");
        expect(_v128_load32x2_u).not.toBeUndefined();
        let _v128_load32x2_u_result = module.invoke(_v128_load32x2_u, 10);
        expect(_v128_load32x2_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s (instance 2)", () => {
        let _v128_load8x8_s = module.getExport("v128.load8x8_s");
        expect(_v128_load8x8_s).not.toBeUndefined();
        let _v128_load8x8_s_result = module.invoke(_v128_load8x8_s, 20);
        expect(_v128_load8x8_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u (instance 2)", () => {
        let _v128_load8x8_u = module.getExport("v128.load8x8_u");
        expect(_v128_load8x8_u).not.toBeUndefined();
        let _v128_load8x8_u_result = module.invoke(_v128_load8x8_u, 20);
        expect(_v128_load8x8_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s (instance 2)", () => {
        let _v128_load16x4_s = module.getExport("v128.load16x4_s");
        expect(_v128_load16x4_s).not.toBeUndefined();
        let _v128_load16x4_s_result = module.invoke(_v128_load16x4_s, 20);
        expect(_v128_load16x4_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u (instance 2)", () => {
        let _v128_load16x4_u = module.getExport("v128.load16x4_u");
        expect(_v128_load16x4_u).not.toBeUndefined();
        let _v128_load16x4_u_result = module.invoke(_v128_load16x4_u, 20);
        expect(_v128_load16x4_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s (instance 2)", () => {
        let _v128_load32x2_s = module.getExport("v128.load32x2_s");
        expect(_v128_load32x2_s).not.toBeUndefined();
        let _v128_load32x2_s_result = module.invoke(_v128_load32x2_s, 20);
        expect(_v128_load32x2_s_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u (instance 2)", () => {
        let _v128_load32x2_u = module.getExport("v128.load32x2_u");
        expect(_v128_load32x2_u).not.toBeUndefined();
        let _v128_load32x2_u_result = module.invoke(_v128_load32x2_u, 20);
        expect(_v128_load32x2_u_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s_const0 (instance 0)", () => {
        let _v128_load8x8_s_const0 = module.getExport("v128.load8x8_s_const0");
        expect(_v128_load8x8_s_const0).not.toBeUndefined();
        let _v128_load8x8_s_const0_result = module.invoke(_v128_load8x8_s_const0);
        expect(_v128_load8x8_s_const0_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u_const8 (instance 0)", () => {
        let _v128_load8x8_u_const8 = module.getExport("v128.load8x8_u_const8");
        expect(_v128_load8x8_u_const8).not.toBeUndefined();
        let _v128_load8x8_u_const8_result = module.invoke(_v128_load8x8_u_const8);
        expect(_v128_load8x8_u_const8_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s_const10 (instance 0)", () => {
        let _v128_load16x4_s_const10 = module.getExport("v128.load16x4_s_const10");
        expect(_v128_load16x4_s_const10).not.toBeUndefined();
        let _v128_load16x4_s_const10_result = module.invoke(_v128_load16x4_s_const10);
        expect(_v128_load16x4_s_const10_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u_const20 (instance 0)", () => {
        let _v128_load16x4_u_const20 = module.getExport("v128.load16x4_u_const20");
        expect(_v128_load16x4_u_const20).not.toBeUndefined();
        let _v128_load16x4_u_const20_result = module.invoke(_v128_load16x4_u_const20);
        expect(_v128_load16x4_u_const20_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s_const65520 (instance 0)", () => {
        let _v128_load32x2_s_const65520 = module.getExport("v128.load32x2_s_const65520");
        expect(_v128_load32x2_s_const65520).not.toBeUndefined();
        let _v128_load32x2_s_const65520_result = module.invoke(_v128_load32x2_s_const65520);
        expect(_v128_load32x2_s_const65520_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u_const65526 (instance 0)", () => {
        let _v128_load32x2_u_const65526 = module.getExport("v128.load32x2_u_const65526");
        expect(_v128_load32x2_u_const65526).not.toBeUndefined();
        let _v128_load32x2_u_const65526_result = module.invoke(_v128_load32x2_u_const65526);
        expect(_v128_load32x2_u_const65526_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s_offset0 (instance 0)", () => {
        let _v128_load8x8_s_offset0 = module.getExport("v128.load8x8_s_offset0");
        expect(_v128_load8x8_s_offset0).not.toBeUndefined();
        let _v128_load8x8_s_offset0_result = module.invoke(_v128_load8x8_s_offset0, 0);
        expect(_v128_load8x8_s_offset0_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s_align1 (instance 0)", () => {
        let _v128_load8x8_s_align1 = module.getExport("v128.load8x8_s_align1");
        expect(_v128_load8x8_s_align1).not.toBeUndefined();
        let _v128_load8x8_s_align1_result = module.invoke(_v128_load8x8_s_align1, 1);
        expect(_v128_load8x8_s_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s_offset0_align1 (instance 0)", () => {
        let _v128_load8x8_s_offset0_align1 = module.getExport("v128.load8x8_s_offset0_align1");
        expect(_v128_load8x8_s_offset0_align1).not.toBeUndefined();
        let _v128_load8x8_s_offset0_align1_result = module.invoke(
            _v128_load8x8_s_offset0_align1,
            2
        );
        expect(_v128_load8x8_s_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s_offset10_align4 (instance 0)", () => {
        let _v128_load8x8_s_offset10_align4 = module.getExport("v128.load8x8_s_offset10_align4");
        expect(_v128_load8x8_s_offset10_align4).not.toBeUndefined();
        let _v128_load8x8_s_offset10_align4_result = module.invoke(
            _v128_load8x8_s_offset10_align4,
            3
        );
        expect(_v128_load8x8_s_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s_offset20_align8 (instance 0)", () => {
        let _v128_load8x8_s_offset20_align8 = module.getExport("v128.load8x8_s_offset20_align8");
        expect(_v128_load8x8_s_offset20_align8).not.toBeUndefined();
        let _v128_load8x8_s_offset20_align8_result = module.invoke(
            _v128_load8x8_s_offset20_align8,
            4
        );
        expect(_v128_load8x8_s_offset20_align8_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u_offset0 (instance 0)", () => {
        let _v128_load8x8_u_offset0 = module.getExport("v128.load8x8_u_offset0");
        expect(_v128_load8x8_u_offset0).not.toBeUndefined();
        let _v128_load8x8_u_offset0_result = module.invoke(_v128_load8x8_u_offset0, 0);
        expect(_v128_load8x8_u_offset0_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u_align1 (instance 0)", () => {
        let _v128_load8x8_u_align1 = module.getExport("v128.load8x8_u_align1");
        expect(_v128_load8x8_u_align1).not.toBeUndefined();
        let _v128_load8x8_u_align1_result = module.invoke(_v128_load8x8_u_align1, 1);
        expect(_v128_load8x8_u_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u_offset0_align1 (instance 0)", () => {
        let _v128_load8x8_u_offset0_align1 = module.getExport("v128.load8x8_u_offset0_align1");
        expect(_v128_load8x8_u_offset0_align1).not.toBeUndefined();
        let _v128_load8x8_u_offset0_align1_result = module.invoke(
            _v128_load8x8_u_offset0_align1,
            2
        );
        expect(_v128_load8x8_u_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u_offset10_align4 (instance 0)", () => {
        let _v128_load8x8_u_offset10_align4 = module.getExport("v128.load8x8_u_offset10_align4");
        expect(_v128_load8x8_u_offset10_align4).not.toBeUndefined();
        let _v128_load8x8_u_offset10_align4_result = module.invoke(
            _v128_load8x8_u_offset10_align4,
            3
        );
        expect(_v128_load8x8_u_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u_offset20_align8 (instance 0)", () => {
        let _v128_load8x8_u_offset20_align8 = module.getExport("v128.load8x8_u_offset20_align8");
        expect(_v128_load8x8_u_offset20_align8).not.toBeUndefined();
        let _v128_load8x8_u_offset20_align8_result = module.invoke(
            _v128_load8x8_u_offset20_align8,
            4
        );
        expect(_v128_load8x8_u_offset20_align8_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s_offset0 (instance 0)", () => {
        let _v128_load16x4_s_offset0 = module.getExport("v128.load16x4_s_offset0");
        expect(_v128_load16x4_s_offset0).not.toBeUndefined();
        let _v128_load16x4_s_offset0_result = module.invoke(_v128_load16x4_s_offset0, 0);
        expect(_v128_load16x4_s_offset0_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s_align1 (instance 0)", () => {
        let _v128_load16x4_s_align1 = module.getExport("v128.load16x4_s_align1");
        expect(_v128_load16x4_s_align1).not.toBeUndefined();
        let _v128_load16x4_s_align1_result = module.invoke(_v128_load16x4_s_align1, 1);
        expect(_v128_load16x4_s_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s_offset0_align1 (instance 0)", () => {
        let _v128_load16x4_s_offset0_align1 = module.getExport("v128.load16x4_s_offset0_align1");
        expect(_v128_load16x4_s_offset0_align1).not.toBeUndefined();
        let _v128_load16x4_s_offset0_align1_result = module.invoke(
            _v128_load16x4_s_offset0_align1,
            2
        );
        expect(_v128_load16x4_s_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s_offset10_align4 (instance 0)", () => {
        let _v128_load16x4_s_offset10_align4 = module.getExport("v128.load16x4_s_offset10_align4");
        expect(_v128_load16x4_s_offset10_align4).not.toBeUndefined();
        let _v128_load16x4_s_offset10_align4_result = module.invoke(
            _v128_load16x4_s_offset10_align4,
            3
        );
        expect(_v128_load16x4_s_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s_offset20_align8 (instance 0)", () => {
        let _v128_load16x4_s_offset20_align8 = module.getExport("v128.load16x4_s_offset20_align8");
        expect(_v128_load16x4_s_offset20_align8).not.toBeUndefined();
        let _v128_load16x4_s_offset20_align8_result = module.invoke(
            _v128_load16x4_s_offset20_align8,
            4
        );
        expect(_v128_load16x4_s_offset20_align8_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u_offset0 (instance 0)", () => {
        let _v128_load16x4_u_offset0 = module.getExport("v128.load16x4_u_offset0");
        expect(_v128_load16x4_u_offset0).not.toBeUndefined();
        let _v128_load16x4_u_offset0_result = module.invoke(_v128_load16x4_u_offset0, 0);
        expect(_v128_load16x4_u_offset0_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u_align1 (instance 0)", () => {
        let _v128_load16x4_u_align1 = module.getExport("v128.load16x4_u_align1");
        expect(_v128_load16x4_u_align1).not.toBeUndefined();
        let _v128_load16x4_u_align1_result = module.invoke(_v128_load16x4_u_align1, 1);
        expect(_v128_load16x4_u_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u_offset0_align1 (instance 0)", () => {
        let _v128_load16x4_u_offset0_align1 = module.getExport("v128.load16x4_u_offset0_align1");
        expect(_v128_load16x4_u_offset0_align1).not.toBeUndefined();
        let _v128_load16x4_u_offset0_align1_result = module.invoke(
            _v128_load16x4_u_offset0_align1,
            2
        );
        expect(_v128_load16x4_u_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u_offset10_align4 (instance 0)", () => {
        let _v128_load16x4_u_offset10_align4 = module.getExport("v128.load16x4_u_offset10_align4");
        expect(_v128_load16x4_u_offset10_align4).not.toBeUndefined();
        let _v128_load16x4_u_offset10_align4_result = module.invoke(
            _v128_load16x4_u_offset10_align4,
            3
        );
        expect(_v128_load16x4_u_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u_offset20_align8 (instance 0)", () => {
        let _v128_load16x4_u_offset20_align8 = module.getExport("v128.load16x4_u_offset20_align8");
        expect(_v128_load16x4_u_offset20_align8).not.toBeUndefined();
        let _v128_load16x4_u_offset20_align8_result = module.invoke(
            _v128_load16x4_u_offset20_align8,
            4
        );
        expect(_v128_load16x4_u_offset20_align8_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s_offset0 (instance 0)", () => {
        let _v128_load32x2_s_offset0 = module.getExport("v128.load32x2_s_offset0");
        expect(_v128_load32x2_s_offset0).not.toBeUndefined();
        let _v128_load32x2_s_offset0_result = module.invoke(_v128_load32x2_s_offset0, 0);
        expect(_v128_load32x2_s_offset0_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s_align1 (instance 0)", () => {
        let _v128_load32x2_s_align1 = module.getExport("v128.load32x2_s_align1");
        expect(_v128_load32x2_s_align1).not.toBeUndefined();
        let _v128_load32x2_s_align1_result = module.invoke(_v128_load32x2_s_align1, 1);
        expect(_v128_load32x2_s_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s_offset0_align1 (instance 0)", () => {
        let _v128_load32x2_s_offset0_align1 = module.getExport("v128.load32x2_s_offset0_align1");
        expect(_v128_load32x2_s_offset0_align1).not.toBeUndefined();
        let _v128_load32x2_s_offset0_align1_result = module.invoke(
            _v128_load32x2_s_offset0_align1,
            2
        );
        expect(_v128_load32x2_s_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s_offset10_align4 (instance 0)", () => {
        let _v128_load32x2_s_offset10_align4 = module.getExport("v128.load32x2_s_offset10_align4");
        expect(_v128_load32x2_s_offset10_align4).not.toBeUndefined();
        let _v128_load32x2_s_offset10_align4_result = module.invoke(
            _v128_load32x2_s_offset10_align4,
            3
        );
        expect(_v128_load32x2_s_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s_offset20_align8 (instance 0)", () => {
        let _v128_load32x2_s_offset20_align8 = module.getExport("v128.load32x2_s_offset20_align8");
        expect(_v128_load32x2_s_offset20_align8).not.toBeUndefined();
        let _v128_load32x2_s_offset20_align8_result = module.invoke(
            _v128_load32x2_s_offset20_align8,
            4
        );
        expect(_v128_load32x2_s_offset20_align8_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u_offset0 (instance 0)", () => {
        let _v128_load32x2_u_offset0 = module.getExport("v128.load32x2_u_offset0");
        expect(_v128_load32x2_u_offset0).not.toBeUndefined();
        let _v128_load32x2_u_offset0_result = module.invoke(_v128_load32x2_u_offset0, 0);
        expect(_v128_load32x2_u_offset0_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u_align1 (instance 0)", () => {
        let _v128_load32x2_u_align1 = module.getExport("v128.load32x2_u_align1");
        expect(_v128_load32x2_u_align1).not.toBeUndefined();
        let _v128_load32x2_u_align1_result = module.invoke(_v128_load32x2_u_align1, 1);
        expect(_v128_load32x2_u_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u_offset0_align1 (instance 0)", () => {
        let _v128_load32x2_u_offset0_align1 = module.getExport("v128.load32x2_u_offset0_align1");
        expect(_v128_load32x2_u_offset0_align1).not.toBeUndefined();
        let _v128_load32x2_u_offset0_align1_result = module.invoke(
            _v128_load32x2_u_offset0_align1,
            2
        );
        expect(_v128_load32x2_u_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u_offset10_align4 (instance 0)", () => {
        let _v128_load32x2_u_offset10_align4 = module.getExport("v128.load32x2_u_offset10_align4");
        expect(_v128_load32x2_u_offset10_align4).not.toBeUndefined();
        let _v128_load32x2_u_offset10_align4_result = module.invoke(
            _v128_load32x2_u_offset10_align4,
            3
        );
        expect(_v128_load32x2_u_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u_offset20_align8 (instance 0)", () => {
        let _v128_load32x2_u_offset20_align8 = module.getExport("v128.load32x2_u_offset20_align8");
        expect(_v128_load32x2_u_offset20_align8).not.toBeUndefined();
        let _v128_load32x2_u_offset20_align8_result = module.invoke(
            _v128_load32x2_u_offset20_align8,
            4
        );
        expect(_v128_load32x2_u_offset20_align8_result).toBe(0);
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s (instance 3)", () => {
        let _v128_load8x8_s = module.getExport("v128.load8x8_s");
        expect(_v128_load8x8_s).not.toBeUndefined();
        expect(() => module.invoke(_v128_load8x8_s, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u (instance 3)", () => {
        let _v128_load8x8_u = module.getExport("v128.load8x8_u");
        expect(_v128_load8x8_u).not.toBeUndefined();
        expect(() => module.invoke(_v128_load8x8_u, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s (instance 3)", () => {
        let _v128_load16x4_s = module.getExport("v128.load16x4_s");
        expect(_v128_load16x4_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load16x4_s, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u (instance 3)", () => {
        let _v128_load16x4_u = module.getExport("v128.load16x4_u");
        expect(_v128_load16x4_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load16x4_u, 65536).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s (instance 3)", () => {
        let _v128_load32x2_s = module.getExport("v128.load32x2_s");
        expect(_v128_load32x2_s).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load32x2_s, 65529).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u (instance 3)", () => {
        let _v128_load32x2_u = module.getExport("v128.load32x2_u");
        expect(_v128_load32x2_u).not.toBeUndefined();
        expect(() =>
            module.invoke(_v128_load32x2_u, 65529).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load8x8_s_offset1_align1 (instance 0)", () => {
        let _v128_load8x8_s_offset1_align1 = module.getExport("v128.load8x8_s_offset1_align1");
        expect(_v128_load8x8_s_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load8x8_s_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load8x8_u_offset1_align1 (instance 0)", () => {
        let _v128_load8x8_u_offset1_align1 = module.getExport("v128.load8x8_u_offset1_align1");
        expect(_v128_load8x8_u_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load8x8_u_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load16x4_s_offset1_align1 (instance 0)", () => {
        let _v128_load16x4_s_offset1_align1 = module.getExport("v128.load16x4_s_offset1_align1");
        expect(_v128_load16x4_s_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load16x4_s_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load16x4_u_offset1_align1 (instance 0)", () => {
        let _v128_load16x4_u_offset1_align1 = module.getExport("v128.load16x4_u_offset1_align1");
        expect(_v128_load16x4_u_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load16x4_u_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load32x2_s_offset1_align1 (instance 0)", () => {
        let _v128_load32x2_s_offset1_align1 = module.getExport("v128.load32x2_s_offset1_align1");
        expect(_v128_load32x2_s_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load32x2_s_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_extend_0: v128.load32x2_u_offset1_align1 (instance 0)", () => {
        let _v128_load32x2_u_offset1_align1 = module.getExport("v128.load32x2_u_offset1_align1");
        expect(_v128_load32x2_u_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load32x2_u_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("simd_load_extend_1", () => {
    let _test = test;

    _test("execution of simd_load_extend_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_2", () => {
    let _test = test;

    _test("execution of simd_load_extend_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_3", () => {
    let _test = test;

    _test("execution of simd_load_extend_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_4", () => {
    let _test = test;

    _test("execution of simd_load_extend_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_5", () => {
    let _test = test;

    _test("execution of simd_load_extend_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_6", () => {
    let _test = test;

    _test("execution of simd_load_extend_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_7", () => {
    let _test = test;

    _test("execution of simd_load_extend_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_8", () => {
    let _test = test;

    _test("execution of simd_load_extend_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_9", () => {
    let _test = test;

    _test("execution of simd_load_extend_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_10", () => {
    let _test = test;

    _test("execution of simd_load_extend_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_11", () => {
    let _test = test;

    _test("execution of simd_load_extend_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_12", () => {
    let _test = test;

    _test("execution of simd_load_extend_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_extend_13", () => {
    let _test = test;

    _test("execution of simd_load_extend_13: _inline_test_12 (instance 0)", () => {});
});

describe("simd_load_extend_14", () => {
    let _test = test;

    _test("execution of simd_load_extend_14: _inline_test_13 (instance 0)", () => {});
});

describe("simd_load_extend_15", () => {
    let _test = test;

    _test("execution of simd_load_extend_15: _inline_test_14 (instance 0)", () => {});
});

describe("simd_load_extend_16", () => {
    let _test = test;

    _test("execution of simd_load_extend_16: _inline_test_15 (instance 0)", () => {});
});

describe("simd_load_extend_17", () => {
    let _test = test;

    _test("execution of simd_load_extend_17: _inline_test_16 (instance 0)", () => {});
});

describe("simd_load_extend_18", () => {
    let _test = test;

    _test("execution of simd_load_extend_18: _inline_test_17 (instance 0)", () => {});
});

describe("simd_load_extend_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_extend_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_extend_19: v128.load8x8_s-in-block (instance 0)", () => {
        let _v128_load8x8_s_in_block = module.getExport("v128.load8x8_s-in-block");
        expect(_v128_load8x8_s_in_block).not.toBeUndefined();
        let _v128_load8x8_s_in_block_result = module.invoke(_v128_load8x8_s_in_block);
        expect(_v128_load8x8_s_in_block_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load8x8_u-in-block (instance 0)", () => {
        let _v128_load8x8_u_in_block = module.getExport("v128.load8x8_u-in-block");
        expect(_v128_load8x8_u_in_block).not.toBeUndefined();
        let _v128_load8x8_u_in_block_result = module.invoke(_v128_load8x8_u_in_block);
        expect(_v128_load8x8_u_in_block_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load16x4_s-in-block (instance 0)", () => {
        let _v128_load16x4_s_in_block = module.getExport("v128.load16x4_s-in-block");
        expect(_v128_load16x4_s_in_block).not.toBeUndefined();
        let _v128_load16x4_s_in_block_result = module.invoke(_v128_load16x4_s_in_block);
        expect(_v128_load16x4_s_in_block_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load16x4_u-in-block (instance 0)", () => {
        let _v128_load16x4_u_in_block = module.getExport("v128.load16x4_u-in-block");
        expect(_v128_load16x4_u_in_block).not.toBeUndefined();
        let _v128_load16x4_u_in_block_result = module.invoke(_v128_load16x4_u_in_block);
        expect(_v128_load16x4_u_in_block_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load32x2_s-in-block (instance 0)", () => {
        let _v128_load32x2_s_in_block = module.getExport("v128.load32x2_s-in-block");
        expect(_v128_load32x2_s_in_block).not.toBeUndefined();
        let _v128_load32x2_s_in_block_result = module.invoke(_v128_load32x2_s_in_block);
        expect(_v128_load32x2_s_in_block_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load32x2_u-in-block (instance 0)", () => {
        let _v128_load32x2_u_in_block = module.getExport("v128.load32x2_u-in-block");
        expect(_v128_load32x2_u_in_block).not.toBeUndefined();
        let _v128_load32x2_u_in_block_result = module.invoke(_v128_load32x2_u_in_block);
        expect(_v128_load32x2_u_in_block_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load8x8_s-as-br-value (instance 0)", () => {
        let _v128_load8x8_s_as_br_value = module.getExport("v128.load8x8_s-as-br-value");
        expect(_v128_load8x8_s_as_br_value).not.toBeUndefined();
        let _v128_load8x8_s_as_br_value_result = module.invoke(_v128_load8x8_s_as_br_value);
        expect(_v128_load8x8_s_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load8x8_u-as-br-value (instance 0)", () => {
        let _v128_load8x8_u_as_br_value = module.getExport("v128.load8x8_u-as-br-value");
        expect(_v128_load8x8_u_as_br_value).not.toBeUndefined();
        let _v128_load8x8_u_as_br_value_result = module.invoke(_v128_load8x8_u_as_br_value);
        expect(_v128_load8x8_u_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load16x4_s-as-br-value (instance 0)", () => {
        let _v128_load16x4_s_as_br_value = module.getExport("v128.load16x4_s-as-br-value");
        expect(_v128_load16x4_s_as_br_value).not.toBeUndefined();
        let _v128_load16x4_s_as_br_value_result = module.invoke(_v128_load16x4_s_as_br_value);
        expect(_v128_load16x4_s_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load16x4_u-as-br-value (instance 0)", () => {
        let _v128_load16x4_u_as_br_value = module.getExport("v128.load16x4_u-as-br-value");
        expect(_v128_load16x4_u_as_br_value).not.toBeUndefined();
        let _v128_load16x4_u_as_br_value_result = module.invoke(_v128_load16x4_u_as_br_value);
        expect(_v128_load16x4_u_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load32x2_s-as-br-value (instance 0)", () => {
        let _v128_load32x2_s_as_br_value = module.getExport("v128.load32x2_s-as-br-value");
        expect(_v128_load32x2_s_as_br_value).not.toBeUndefined();
        let _v128_load32x2_s_as_br_value_result = module.invoke(_v128_load32x2_s_as_br_value);
        expect(_v128_load32x2_s_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_extend_19: v128.load32x2_u-as-br-value (instance 0)", () => {
        let _v128_load32x2_u_as_br_value = module.getExport("v128.load32x2_u-as-br-value");
        expect(_v128_load32x2_u_as_br_value).not.toBeUndefined();
        let _v128_load32x2_u_as_br_value_result = module.invoke(_v128_load32x2_u_as_br_value);
        expect(_v128_load32x2_u_as_br_value_result).toBe(0);
    });

    _test(
        "execution of simd_load_extend_19: v128.load8x8_s-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load8x8_s_extract_lane_s_operand = module.getExport(
                "v128.load8x8_s-extract_lane_s-operand"
            );
            expect(_v128_load8x8_s_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load8x8_s_extract_lane_s_operand_result = module.invoke(
                _v128_load8x8_s_extract_lane_s_operand
            );
            expect(_v128_load8x8_s_extract_lane_s_operand_result).toBe(12);
        }
    );

    _test(
        "execution of simd_load_extend_19: v128.load8x8_u-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load8x8_u_extract_lane_s_operand = module.getExport(
                "v128.load8x8_u-extract_lane_s-operand"
            );
            expect(_v128_load8x8_u_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load8x8_u_extract_lane_s_operand_result = module.invoke(
                _v128_load8x8_u_extract_lane_s_operand
            );
            expect(_v128_load8x8_u_extract_lane_s_operand_result).toBe(13);
        }
    );

    _test(
        "execution of simd_load_extend_19: v128.load16x4_s-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load16x4_s_extract_lane_s_operand = module.getExport(
                "v128.load16x4_s-extract_lane_s-operand"
            );
            expect(_v128_load16x4_s_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load16x4_s_extract_lane_s_operand_result = module.invoke(
                _v128_load16x4_s_extract_lane_s_operand
            );
            expect(_v128_load16x4_s_extract_lane_s_operand_result).toBe(14);
        }
    );

    _test(
        "execution of simd_load_extend_19: v128.load16x4_u-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load16x4_u_extract_lane_s_operand = module.getExport(
                "v128.load16x4_u-extract_lane_s-operand"
            );
            expect(_v128_load16x4_u_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load16x4_u_extract_lane_s_operand_result = module.invoke(
                _v128_load16x4_u_extract_lane_s_operand
            );
            expect(_v128_load16x4_u_extract_lane_s_operand_result).toBe(15);
        }
    );

    _test(
        "execution of simd_load_extend_19: v128.load32x2_s-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load32x2_s_extract_lane_s_operand = module.getExport(
                "v128.load32x2_s-extract_lane_s-operand"
            );
            expect(_v128_load32x2_s_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load32x2_s_extract_lane_s_operand_result = module.invoke(
                _v128_load32x2_s_extract_lane_s_operand
            );
            expect(_v128_load32x2_s_extract_lane_s_operand_result).toBe(-128);
        }
    );

    _test(
        "execution of simd_load_extend_19: v128.load32x2_u-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load32x2_u_extract_lane_s_operand = module.getExport(
                "v128.load32x2_u-extract_lane_s-operand"
            );
            expect(_v128_load32x2_u_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load32x2_u_extract_lane_s_operand_result = module.invoke(
                _v128_load32x2_u_extract_lane_s_operand
            );
            expect(_v128_load32x2_u_extract_lane_s_operand_result).toBe(-127);
        }
    );
});
