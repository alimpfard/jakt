let globalImportObject = {};
let namedModules = {};

describe("simd_bitwise_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_bitwise_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_bitwise_0: not (instance 0)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 1)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 2)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 3)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 4)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 5)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 6)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 7)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 0)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 1)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 2)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 3)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 4)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 5)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 6)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 7)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 8)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 9)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 10)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 11)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 12)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 13)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 0)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 1)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 2)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 3)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 4)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 5)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 6)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 7)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 8)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 9)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 10)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 11)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 12)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 13)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 0)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 1)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 2)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 3)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 4)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 5)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 6)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 7)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 8)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 9)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 10)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 11)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 12)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 13)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 0)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 1)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 2)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 3)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 4)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 5)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 6)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 7)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 0)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 1)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 2)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 3)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 4)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 5)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 6)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 7)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 8)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 9)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 10)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 11)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 12)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 13)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 8)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 9)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 10)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: not (instance 11)", () => {
        let _not = module.getExport("not");
        expect(_not).not.toBeUndefined();
        let _not_result = module.invoke(_not, 0);
        expect(_not_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 14)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 15)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 16)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 17)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 18)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 19)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 20)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 21)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 22)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: and (instance 23)", () => {
        let _and = module.getExport("and");
        expect(_and).not.toBeUndefined();
        let _and_result = module.invoke(_and, 0, 0);
        expect(_and_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 14)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 15)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 16)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 17)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 18)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 19)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 20)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 21)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 22)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: or (instance 23)", () => {
        let _or = module.getExport("or");
        expect(_or).not.toBeUndefined();
        let _or_result = module.invoke(_or, 0, 0);
        expect(_or_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 14)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 15)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 16)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 17)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 18)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 19)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 20)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 21)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 22)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: xor (instance 23)", () => {
        let _xor = module.getExport("xor");
        expect(_xor).not.toBeUndefined();
        let _xor_result = module.invoke(_xor, 0, 0);
        expect(_xor_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 8)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 9)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 10)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 11)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 12)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 13)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 14)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 15)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 16)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: bitselect (instance 17)", () => {
        let _bitselect = module.getExport("bitselect");
        expect(_bitselect).not.toBeUndefined();
        let _bitselect_result = module.invoke(_bitselect, 0, 0, 0);
        expect(_bitselect_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 14)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 15)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 16)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 17)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 18)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 19)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 20)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 21)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 22)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });

    _test("execution of simd_bitwise_0: andnot (instance 23)", () => {
        let _andnot = module.getExport("andnot");
        expect(_andnot).not.toBeUndefined();
        let _andnot_result = module.invoke(_andnot, 0, 0);
        expect(_andnot_result).toBe(0);
    });
});

describe("simd_bitwise_1", () => {
    let _test = test;

    _test("execution of simd_bitwise_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_2", () => {
    let _test = test;

    _test("execution of simd_bitwise_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_3", () => {
    let _test = test;

    _test("execution of simd_bitwise_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_4", () => {
    let _test = test;

    _test("execution of simd_bitwise_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_5", () => {
    let _test = test;

    _test("execution of simd_bitwise_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_6", () => {
    let _test = test;

    _test("execution of simd_bitwise_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_7", () => {
    let _test = test;

    _test("execution of simd_bitwise_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_8", () => {
    let _test = test;

    _test("execution of simd_bitwise_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_9", () => {
    let _test = test;

    _test("execution of simd_bitwise_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_10", () => {
    let _test = test;

    _test("execution of simd_bitwise_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_11", () => {
    let _test = test;

    _test("execution of simd_bitwise_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_12", () => {
    let _test = test;

    _test("execution of simd_bitwise_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_13", () => {
    let _test = test;

    _test("execution of simd_bitwise_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_14", () => {
    let _test = test;

    _test("execution of simd_bitwise_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_15", () => {
    let _test = test;

    _test("execution of simd_bitwise_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_16", () => {
    let _test = test;

    _test("execution of simd_bitwise_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_bitwise_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_bitwise_17: v128.not-in-block (instance 0)", () => {
        let _v128_not_in_block = module.getExport("v128.not-in-block");
        expect(_v128_not_in_block).not.toBeUndefined();
        let _v128_not_in_block_result = module.invoke(_v128_not_in_block);
    });

    _test("execution of simd_bitwise_17: v128.and-in-block (instance 0)", () => {
        let _v128_and_in_block = module.getExport("v128.and-in-block");
        expect(_v128_and_in_block).not.toBeUndefined();
        let _v128_and_in_block_result = module.invoke(_v128_and_in_block);
    });

    _test("execution of simd_bitwise_17: v128.or-in-block (instance 0)", () => {
        let _v128_or_in_block = module.getExport("v128.or-in-block");
        expect(_v128_or_in_block).not.toBeUndefined();
        let _v128_or_in_block_result = module.invoke(_v128_or_in_block);
    });

    _test("execution of simd_bitwise_17: v128.xor-in-block (instance 0)", () => {
        let _v128_xor_in_block = module.getExport("v128.xor-in-block");
        expect(_v128_xor_in_block).not.toBeUndefined();
        let _v128_xor_in_block_result = module.invoke(_v128_xor_in_block);
    });

    _test("execution of simd_bitwise_17: v128.bitselect-in-block (instance 0)", () => {
        let _v128_bitselect_in_block = module.getExport("v128.bitselect-in-block");
        expect(_v128_bitselect_in_block).not.toBeUndefined();
        let _v128_bitselect_in_block_result = module.invoke(_v128_bitselect_in_block);
    });

    _test("execution of simd_bitwise_17: v128.andnot-in-block (instance 0)", () => {
        let _v128_andnot_in_block = module.getExport("v128.andnot-in-block");
        expect(_v128_andnot_in_block).not.toBeUndefined();
        let _v128_andnot_in_block_result = module.invoke(_v128_andnot_in_block);
    });

    _test("execution of simd_bitwise_17: nested-v128.not (instance 0)", () => {
        let _nested_v128_not = module.getExport("nested-v128.not");
        expect(_nested_v128_not).not.toBeUndefined();
        let _nested_v128_not_result = module.invoke(_nested_v128_not);
    });

    _test("execution of simd_bitwise_17: nested-v128.and (instance 0)", () => {
        let _nested_v128_and = module.getExport("nested-v128.and");
        expect(_nested_v128_and).not.toBeUndefined();
        let _nested_v128_and_result = module.invoke(_nested_v128_and);
    });

    _test("execution of simd_bitwise_17: nested-v128.or (instance 0)", () => {
        let _nested_v128_or = module.getExport("nested-v128.or");
        expect(_nested_v128_or).not.toBeUndefined();
        let _nested_v128_or_result = module.invoke(_nested_v128_or);
    });

    _test("execution of simd_bitwise_17: nested-v128.xor (instance 0)", () => {
        let _nested_v128_xor = module.getExport("nested-v128.xor");
        expect(_nested_v128_xor).not.toBeUndefined();
        let _nested_v128_xor_result = module.invoke(_nested_v128_xor);
    });

    _test("execution of simd_bitwise_17: nested-v128.bitselect (instance 0)", () => {
        let _nested_v128_bitselect = module.getExport("nested-v128.bitselect");
        expect(_nested_v128_bitselect).not.toBeUndefined();
        let _nested_v128_bitselect_result = module.invoke(_nested_v128_bitselect);
    });

    _test("execution of simd_bitwise_17: nested-v128.andnot (instance 0)", () => {
        let _nested_v128_andnot = module.getExport("nested-v128.andnot");
        expect(_nested_v128_andnot).not.toBeUndefined();
        let _nested_v128_andnot_result = module.invoke(_nested_v128_andnot);
    });

    _test("execution of simd_bitwise_17: as-param (instance 0)", () => {
        let _as_param = module.getExport("as-param");
        expect(_as_param).not.toBeUndefined();
        let _as_param_result = module.invoke(_as_param);
    });
});

describe("simd_bitwise_18", () => {
    let _test = test;

    _test("execution of simd_bitwise_18: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_19", () => {
    let _test = test;

    _test("execution of simd_bitwise_19: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_20", () => {
    let _test = test;

    _test("execution of simd_bitwise_20: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_21", () => {
    let _test = test;

    _test("execution of simd_bitwise_21: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_22", () => {
    let _test = test;

    _test("execution of simd_bitwise_22: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_23", () => {
    let _test = test;

    _test("execution of simd_bitwise_23: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_24", () => {
    let _test = test;

    _test("execution of simd_bitwise_24: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_25", () => {
    let _test = test;

    _test("execution of simd_bitwise_25: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_26", () => {
    let _test = test;

    _test("execution of simd_bitwise_26: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_27", () => {
    let _test = test;

    _test("execution of simd_bitwise_27: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_28", () => {
    let _test = test;

    _test("execution of simd_bitwise_28: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_bitwise_29", () => {
    let _test = test;

    _test("execution of simd_bitwise_29: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
