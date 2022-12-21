let globalImportObject = {};
let namedModules = {};

describe("simd_i64x2_cmp_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i64x2_cmp_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i64x2_cmp_0: eq (instance 0)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 1)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 2)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 3)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 4)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 5)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 6)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 7)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: eq (instance 8)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ne (instance 0)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ne (instance 1)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ne (instance 2)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ne (instance 3)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ne (instance 4)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ne (instance 5)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ne (instance 6)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 0)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 1)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 2)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 3)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 4)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 5)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 6)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 7)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 8)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 9)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 10)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 11)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 12)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 13)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 14)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 15)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 16)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 17)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 18)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 19)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: lt_s (instance 20)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 0)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 1)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 2)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 3)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 4)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 5)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 6)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 7)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 8)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 9)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 10)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 11)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 12)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 13)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 14)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 15)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 16)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 17)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 18)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 19)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 20)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: le_s (instance 21)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 0)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 1)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 2)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 3)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 4)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 5)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 6)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 7)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 8)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 9)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 10)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 11)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 12)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 13)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 14)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 15)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 16)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 17)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 18)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 19)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: gt_s (instance 20)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 0)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 1)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 2)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 3)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 4)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 5)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 6)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 7)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 8)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 9)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 10)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 11)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 12)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 13)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 14)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 15)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 16)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 17)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 18)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 19)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 20)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i64x2_cmp_0: ge_s (instance 21)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });
});

describe("simd_i64x2_cmp_1", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_2", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_3", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_4", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_5", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_6", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_7", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_8", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_9", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i64x2_cmp_10", () => {
    let _test = test;

    _test("execution of simd_i64x2_cmp_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
