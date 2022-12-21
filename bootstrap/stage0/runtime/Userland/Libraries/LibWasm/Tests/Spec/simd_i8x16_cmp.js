let globalImportObject = {};
let namedModules = {};

describe("simd_i8x16_cmp_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i8x16_cmp_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i8x16_cmp_0: eq (instance 0)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 1)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 2)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 3)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 4)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 5)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 6)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 7)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 8)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 9)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 10)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 11)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 12)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 13)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 14)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 15)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 16)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 17)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 18)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 19)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 20)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 21)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 22)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 23)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 24)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 25)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 26)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 27)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 28)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 29)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 30)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 31)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 32)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 33)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 34)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 35)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 36)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 37)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 38)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: eq (instance 39)", () => {
        let _eq = module.getExport("eq");
        expect(_eq).not.toBeUndefined();
        let _eq_result = module.invoke(_eq, 0, 0);
        expect(_eq_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 0)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 1)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 2)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 3)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 4)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 5)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 6)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 7)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 8)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 9)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 10)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 11)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 12)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 13)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 14)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 15)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 16)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 17)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 18)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 19)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 20)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 21)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 22)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 23)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 24)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 25)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 26)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 27)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 28)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 29)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 30)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 31)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 32)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 33)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 34)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 35)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 36)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 37)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 38)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ne (instance 39)", () => {
        let _ne = module.getExport("ne");
        expect(_ne).not.toBeUndefined();
        let _ne_result = module.invoke(_ne, 0, 0);
        expect(_ne_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 0)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 1)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 2)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 3)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 4)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 5)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 6)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 7)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 8)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 9)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 10)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 11)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 12)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 13)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 14)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 15)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 16)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 17)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 18)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 19)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 20)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 21)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 22)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 23)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 24)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 25)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 26)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 27)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 28)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 29)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 30)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 31)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 32)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 33)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 34)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 35)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 36)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 37)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 38)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_s (instance 39)", () => {
        let _lt_s = module.getExport("lt_s");
        expect(_lt_s).not.toBeUndefined();
        let _lt_s_result = module.invoke(_lt_s, 0, 0);
        expect(_lt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 0)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 1)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 2)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 3)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 4)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 5)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 6)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 7)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 8)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 9)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 10)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 11)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 12)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 13)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 14)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 15)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 16)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 17)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 18)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 19)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 20)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 21)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 22)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 23)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 24)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 25)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 26)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 27)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 28)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 29)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 30)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 31)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 32)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 33)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 34)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 35)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 36)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 37)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 38)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: lt_u (instance 39)", () => {
        let _lt_u = module.getExport("lt_u");
        expect(_lt_u).not.toBeUndefined();
        let _lt_u_result = module.invoke(_lt_u, 0, 0);
        expect(_lt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 0)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 1)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 2)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 3)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 4)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 5)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 6)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 7)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 8)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 9)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 10)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 11)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 12)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 13)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 14)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 15)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 16)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 17)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 18)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 19)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 20)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 21)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 22)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 23)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 24)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 25)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 26)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 27)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 28)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 29)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 30)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 31)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 32)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 33)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 34)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 35)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 36)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 37)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 38)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_s (instance 39)", () => {
        let _le_s = module.getExport("le_s");
        expect(_le_s).not.toBeUndefined();
        let _le_s_result = module.invoke(_le_s, 0, 0);
        expect(_le_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 0)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 1)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 2)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 3)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 4)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 5)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 6)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 7)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 8)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 9)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 10)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 11)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 12)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 13)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 14)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 15)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 16)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 17)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 18)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 19)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 20)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 21)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 22)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 23)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 24)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 25)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 26)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 27)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 28)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 29)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 30)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 31)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 32)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 33)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 34)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 35)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 36)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 37)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 38)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: le_u (instance 39)", () => {
        let _le_u = module.getExport("le_u");
        expect(_le_u).not.toBeUndefined();
        let _le_u_result = module.invoke(_le_u, 0, 0);
        expect(_le_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 0)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 1)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 2)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 3)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 4)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 5)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 6)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 7)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 8)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 9)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 10)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 11)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 12)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 13)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 14)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 15)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 16)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 17)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 18)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 19)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 20)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 21)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 22)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 23)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 24)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 25)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 26)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 27)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 28)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 29)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 30)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 31)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 32)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 33)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 34)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 35)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 36)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 37)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 38)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_s (instance 39)", () => {
        let _gt_s = module.getExport("gt_s");
        expect(_gt_s).not.toBeUndefined();
        let _gt_s_result = module.invoke(_gt_s, 0, 0);
        expect(_gt_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 0)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 1)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 2)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 3)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 4)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 5)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 6)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 7)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 8)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 9)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 10)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 11)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 12)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 13)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 14)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 15)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 16)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 17)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 18)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 19)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 20)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 21)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 22)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 23)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 24)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 25)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 26)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 27)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 28)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 29)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 30)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 31)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 32)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 33)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 34)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 35)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 36)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 37)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 38)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: gt_u (instance 39)", () => {
        let _gt_u = module.getExport("gt_u");
        expect(_gt_u).not.toBeUndefined();
        let _gt_u_result = module.invoke(_gt_u, 0, 0);
        expect(_gt_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 0)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 1)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 2)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 3)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 4)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 5)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 6)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 7)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 8)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 9)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 10)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 11)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 12)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 13)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 14)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 15)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 16)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 17)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 18)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 19)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 20)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 21)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 22)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 23)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 24)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 25)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 26)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 27)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 28)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 29)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 30)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 31)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 32)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 33)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 34)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 35)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 36)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 37)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 38)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_s (instance 39)", () => {
        let _ge_s = module.getExport("ge_s");
        expect(_ge_s).not.toBeUndefined();
        let _ge_s_result = module.invoke(_ge_s, 0, 0);
        expect(_ge_s_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 0)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 1)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 2)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 3)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 4)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 5)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 6)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 7)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 8)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 9)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 10)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 11)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 12)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 13)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 14)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 15)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 16)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 17)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 18)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 19)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 20)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 21)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 22)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 23)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 24)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 25)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 26)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 27)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 28)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 29)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 30)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 31)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 32)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 33)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 34)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 35)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 36)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 37)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 38)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });

    _test("execution of simd_i8x16_cmp_0: ge_u (instance 39)", () => {
        let _ge_u = module.getExport("ge_u");
        expect(_ge_u).not.toBeUndefined();
        let _ge_u_result = module.invoke(_ge_u, 0, 0);
        expect(_ge_u_result).toBe(0);
    });
});

describe("simd_i8x16_cmp_1", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_2", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_3", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_4", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_5", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_6", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_7", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_8", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_9", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_10", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_i8x16_cmp_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_i8x16_cmp_11: eq-in-block (instance 0)", () => {
        let _eq_in_block = module.getExport("eq-in-block");
        expect(_eq_in_block).not.toBeUndefined();
        let _eq_in_block_result = module.invoke(_eq_in_block);
    });

    _test("execution of simd_i8x16_cmp_11: ne-in-block (instance 0)", () => {
        let _ne_in_block = module.getExport("ne-in-block");
        expect(_ne_in_block).not.toBeUndefined();
        let _ne_in_block_result = module.invoke(_ne_in_block);
    });

    _test("execution of simd_i8x16_cmp_11: lt_s-in-block (instance 0)", () => {
        let _lt_s_in_block = module.getExport("lt_s-in-block");
        expect(_lt_s_in_block).not.toBeUndefined();
        let _lt_s_in_block_result = module.invoke(_lt_s_in_block);
    });

    _test("execution of simd_i8x16_cmp_11: le_u-in-block (instance 0)", () => {
        let _le_u_in_block = module.getExport("le_u-in-block");
        expect(_le_u_in_block).not.toBeUndefined();
        let _le_u_in_block_result = module.invoke(_le_u_in_block);
    });

    _test("execution of simd_i8x16_cmp_11: gt_u-in-block (instance 0)", () => {
        let _gt_u_in_block = module.getExport("gt_u-in-block");
        expect(_gt_u_in_block).not.toBeUndefined();
        let _gt_u_in_block_result = module.invoke(_gt_u_in_block);
    });

    _test("execution of simd_i8x16_cmp_11: ge_s-in-block (instance 0)", () => {
        let _ge_s_in_block = module.getExport("ge_s-in-block");
        expect(_ge_s_in_block).not.toBeUndefined();
        let _ge_s_in_block_result = module.invoke(_ge_s_in_block);
    });

    _test("execution of simd_i8x16_cmp_11: nested-eq (instance 0)", () => {
        let _nested_eq = module.getExport("nested-eq");
        expect(_nested_eq).not.toBeUndefined();
        let _nested_eq_result = module.invoke(_nested_eq);
    });

    _test("execution of simd_i8x16_cmp_11: nested-ne (instance 0)", () => {
        let _nested_ne = module.getExport("nested-ne");
        expect(_nested_ne).not.toBeUndefined();
        let _nested_ne_result = module.invoke(_nested_ne);
    });

    _test("execution of simd_i8x16_cmp_11: nested-lt_s (instance 0)", () => {
        let _nested_lt_s = module.getExport("nested-lt_s");
        expect(_nested_lt_s).not.toBeUndefined();
        let _nested_lt_s_result = module.invoke(_nested_lt_s);
    });

    _test("execution of simd_i8x16_cmp_11: nested-le_u (instance 0)", () => {
        let _nested_le_u = module.getExport("nested-le_u");
        expect(_nested_le_u).not.toBeUndefined();
        let _nested_le_u_result = module.invoke(_nested_le_u);
    });

    _test("execution of simd_i8x16_cmp_11: nested-gt_u (instance 0)", () => {
        let _nested_gt_u = module.getExport("nested-gt_u");
        expect(_nested_gt_u).not.toBeUndefined();
        let _nested_gt_u_result = module.invoke(_nested_gt_u);
    });

    _test("execution of simd_i8x16_cmp_11: nested-ge_s (instance 0)", () => {
        let _nested_ge_s = module.getExport("nested-ge_s");
        expect(_nested_ge_s).not.toBeUndefined();
        let _nested_ge_s_result = module.invoke(_nested_ge_s);
    });

    _test("execution of simd_i8x16_cmp_11: as-param (instance 0)", () => {
        let _as_param = module.getExport("as-param");
        expect(_as_param).not.toBeUndefined();
        let _as_param_result = module.invoke(_as_param);
    });
});

describe("simd_i8x16_cmp_12", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_12: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_13", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_13: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_14", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_14: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_15", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_15: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_16", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_16: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_17", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_17: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_18", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_18: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_19", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_19: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_20", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_20: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_21", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_21: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_22", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_22: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_23", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_23: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_24", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_24: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_25", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_25: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_26", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_26: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_27", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_27: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_28", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_28: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_29", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_29: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_30", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_30: _inline_test_28 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_i8x16_cmp_31", () => {
    let _test = test;

    _test("execution of simd_i8x16_cmp_31: _inline_test_29 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
