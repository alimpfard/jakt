let globalImportObject = {};
let namedModules = {};

describe("fac_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/fac_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of fac_0: fac-rec (instance 0)", () => {
        let _fac_rec = module.getExport("fac-rec");
        expect(_fac_rec).not.toBeUndefined();
        let _fac_rec_result = module.invoke(_fac_rec, 25n);
        expect(_fac_rec_result).toBe(7034535277573963776n);
    });

    _test("execution of fac_0: fac-iter (instance 0)", () => {
        let _fac_iter = module.getExport("fac-iter");
        expect(_fac_iter).not.toBeUndefined();
        let _fac_iter_result = module.invoke(_fac_iter, 25n);
        expect(_fac_iter_result).toBe(7034535277573963776n);
    });

    _test("execution of fac_0: fac-rec-named (instance 0)", () => {
        let _fac_rec_named = module.getExport("fac-rec-named");
        expect(_fac_rec_named).not.toBeUndefined();
        let _fac_rec_named_result = module.invoke(_fac_rec_named, 25n);
        expect(_fac_rec_named_result).toBe(7034535277573963776n);
    });

    _test("execution of fac_0: fac-iter-named (instance 0)", () => {
        let _fac_iter_named = module.getExport("fac-iter-named");
        expect(_fac_iter_named).not.toBeUndefined();
        let _fac_iter_named_result = module.invoke(_fac_iter_named, 25n);
        expect(_fac_iter_named_result).toBe(7034535277573963776n);
    });

    _test("execution of fac_0: fac-opt (instance 0)", () => {
        let _fac_opt = module.getExport("fac-opt");
        expect(_fac_opt).not.toBeUndefined();
        let _fac_opt_result = module.invoke(_fac_opt, 25n);
        expect(_fac_opt_result).toBe(7034535277573963776n);
    });

    _test("execution of fac_0: fac-ssa (instance 0)", () => {
        let _fac_ssa = module.getExport("fac-ssa");
        expect(_fac_ssa).not.toBeUndefined();
        let _fac_ssa_result = module.invoke(_fac_ssa, 25n);
        expect(_fac_ssa_result).toBe(7034535277573963776n);
    });

    _test("execution of fac_0: fac-rec (instance 1)", () => {
        let _fac_rec = module.getExport("fac-rec");
        expect(_fac_rec).not.toBeUndefined();
        expect(() => module.invoke(_fac_rec, 1073741824n).toThrow(TypeError, "Execution trapped"));
    });
});
