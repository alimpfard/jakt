let globalImportObject = {};
let namedModules = {};

describe("select_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/select_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of select_0: select-i32 (instance 0)", () => {
        let _select_i32 = module.getExport("select-i32");
        expect(_select_i32).not.toBeUndefined();
        let _select_i32_result = module.invoke(_select_i32, 1, 2, 1);
        expect(_select_i32_result).toBe(1);
    });

    _test("execution of select_0: select-i64 (instance 0)", () => {
        let _select_i64 = module.getExport("select-i64");
        expect(_select_i64).not.toBeUndefined();
        let _select_i64_result = module.invoke(_select_i64, 2n, 1n, 1);
        expect(_select_i64_result).toBe(2n);
    });

    _test("execution of select_0: select-f32 (instance 0)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, 1.0, 2.0, 1);
        expect(_select_f32_result).toBe(1.0);
    });

    _test("execution of select_0: select-f64 (instance 0)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, 1.0, 2.0, 1);
        expect(_select_f64_result).toBe(1.0);
    });

    _test("execution of select_0: select-i32 (instance 1)", () => {
        let _select_i32 = module.getExport("select-i32");
        expect(_select_i32).not.toBeUndefined();
        let _select_i32_result = module.invoke(_select_i32, 1, 2, 0);
        expect(_select_i32_result).toBe(2);
    });

    _test("execution of select_0: select-i32 (instance 2)", () => {
        let _select_i32 = module.getExport("select-i32");
        expect(_select_i32).not.toBeUndefined();
        let _select_i32_result = module.invoke(_select_i32, 2, 1, 0);
        expect(_select_i32_result).toBe(1);
    });

    _test("execution of select_0: select-i64 (instance 1)", () => {
        let _select_i64 = module.getExport("select-i64");
        expect(_select_i64).not.toBeUndefined();
        let _select_i64_result = module.invoke(_select_i64, 2n, 1n, -1);
        expect(_select_i64_result).toBe(2n);
    });

    _test("execution of select_0: select-i64 (instance 2)", () => {
        let _select_i64 = module.getExport("select-i64");
        expect(_select_i64).not.toBeUndefined();
        let _select_i64_result = module.invoke(_select_i64, 2n, 1n, -252645136);
        expect(_select_i64_result).toBe(2n);
    });

    _test("execution of select_0: select-f32 (instance 1)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, NaN, 1.0, 1);
        expect(_select_f32_result).toBe(NaN);
    });

    _test("execution of select_0: select-f32 (instance 2)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, NaN, 1.0, 1);
        expect(_select_f32_result).toBe(NaN);
    });

    _test("execution of select_0: select-f32 (instance 3)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, NaN, 1.0, 0);
        expect(_select_f32_result).toBe(1.0);
    });

    _test("execution of select_0: select-f32 (instance 4)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, NaN, 1.0, 0);
        expect(_select_f32_result).toBe(1.0);
    });

    _test("execution of select_0: select-f32 (instance 5)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, 2.0, NaN, 1);
        expect(_select_f32_result).toBe(2.0);
    });

    _test("execution of select_0: select-f32 (instance 6)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, 2.0, NaN, 1);
        expect(_select_f32_result).toBe(2.0);
    });

    _test("execution of select_0: select-f32 (instance 7)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, 2.0, NaN, 0);
        expect(_select_f32_result).toBe(NaN);
    });

    _test("execution of select_0: select-f32 (instance 8)", () => {
        let _select_f32 = module.getExport("select-f32");
        expect(_select_f32).not.toBeUndefined();
        let _select_f32_result = module.invoke(_select_f32, 2.0, NaN, 0);
        expect(_select_f32_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64 (instance 1)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, NaN, 1.0, 1);
        expect(_select_f64_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64 (instance 2)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, NaN, 1.0, 1);
        expect(_select_f64_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64 (instance 3)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, NaN, 1.0, 0);
        expect(_select_f64_result).toBe(1.0);
    });

    _test("execution of select_0: select-f64 (instance 4)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, NaN, 1.0, 0);
        expect(_select_f64_result).toBe(1.0);
    });

    _test("execution of select_0: select-f64 (instance 5)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, 2.0, NaN, 1);
        expect(_select_f64_result).toBe(2.0);
    });

    _test("execution of select_0: select-f64 (instance 6)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, 2.0, NaN, 1);
        expect(_select_f64_result).toBe(2.0);
    });

    _test("execution of select_0: select-f64 (instance 7)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, 2.0, NaN, 0);
        expect(_select_f64_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64 (instance 8)", () => {
        let _select_f64 = module.getExport("select-f64");
        expect(_select_f64).not.toBeUndefined();
        let _select_f64_result = module.invoke(_select_f64, 2.0, NaN, 0);
        expect(_select_f64_result).toBe(NaN);
    });

    _test("execution of select_0: select-i32-t (instance 0)", () => {
        let _select_i32_t = module.getExport("select-i32-t");
        expect(_select_i32_t).not.toBeUndefined();
        let _select_i32_t_result = module.invoke(_select_i32_t, 1, 2, 1);
        expect(_select_i32_t_result).toBe(1);
    });

    _test("execution of select_0: select-i64-t (instance 0)", () => {
        let _select_i64_t = module.getExport("select-i64-t");
        expect(_select_i64_t).not.toBeUndefined();
        let _select_i64_t_result = module.invoke(_select_i64_t, 2n, 1n, 1);
        expect(_select_i64_t_result).toBe(2n);
    });

    _test("execution of select_0: select-f32-t (instance 0)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, 1.0, 2.0, 1);
        expect(_select_f32_t_result).toBe(1.0);
    });

    _test("execution of select_0: select-f64-t (instance 0)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, 1.0, 2.0, 1);
        expect(_select_f64_t_result).toBe(1.0);
    });

    _test("execution of select_0: select-funcref (instance 0)", () => {
        let _select_funcref = module.getExport("select-funcref");
        expect(_select_funcref).not.toBeUndefined();
        let _select_funcref_result = module.invoke(_select_funcref, 0, 0, 1);
        expect(_select_funcref_result).toBe(0);
    });

    _test("execution of select_0: select-externref (instance 0)", () => {
        let _select_externref = module.getExport("select-externref");
        expect(_select_externref).not.toBeUndefined();
        let _select_externref_result = module.invoke(_select_externref, 0, 0, 1);
        expect(_select_externref_result).toBe(0);
    });

    _test("execution of select_0: select-i32-t (instance 1)", () => {
        let _select_i32_t = module.getExport("select-i32-t");
        expect(_select_i32_t).not.toBeUndefined();
        let _select_i32_t_result = module.invoke(_select_i32_t, 1, 2, 0);
        expect(_select_i32_t_result).toBe(2);
    });

    _test("execution of select_0: select-i32-t (instance 2)", () => {
        let _select_i32_t = module.getExport("select-i32-t");
        expect(_select_i32_t).not.toBeUndefined();
        let _select_i32_t_result = module.invoke(_select_i32_t, 2, 1, 0);
        expect(_select_i32_t_result).toBe(1);
    });

    _test("execution of select_0: select-i64-t (instance 1)", () => {
        let _select_i64_t = module.getExport("select-i64-t");
        expect(_select_i64_t).not.toBeUndefined();
        let _select_i64_t_result = module.invoke(_select_i64_t, 2n, 1n, -1);
        expect(_select_i64_t_result).toBe(2n);
    });

    _test("execution of select_0: select-i64-t (instance 2)", () => {
        let _select_i64_t = module.getExport("select-i64-t");
        expect(_select_i64_t).not.toBeUndefined();
        let _select_i64_t_result = module.invoke(_select_i64_t, 2n, 1n, -252645136);
        expect(_select_i64_t_result).toBe(2n);
    });

    _test("execution of select_0: select-externref (instance 1)", () => {
        let _select_externref = module.getExport("select-externref");
        expect(_select_externref).not.toBeUndefined();
        let _select_externref_result = module.invoke(_select_externref, 0, 0, 0);
        expect(_select_externref_result).toBe(0);
    });

    _test("execution of select_0: select-externref (instance 2)", () => {
        let _select_externref = module.getExport("select-externref");
        expect(_select_externref).not.toBeUndefined();
        let _select_externref_result = module.invoke(_select_externref, 0, 0, 0);
        expect(_select_externref_result).toBe(0);
    });

    _test("execution of select_0: select-f32-t (instance 1)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, NaN, 1.0, 1);
        expect(_select_f32_t_result).toBe(NaN);
    });

    _test("execution of select_0: select-f32-t (instance 2)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, NaN, 1.0, 1);
        expect(_select_f32_t_result).toBe(NaN);
    });

    _test("execution of select_0: select-f32-t (instance 3)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, NaN, 1.0, 0);
        expect(_select_f32_t_result).toBe(1.0);
    });

    _test("execution of select_0: select-f32-t (instance 4)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, NaN, 1.0, 0);
        expect(_select_f32_t_result).toBe(1.0);
    });

    _test("execution of select_0: select-f32-t (instance 5)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, 2.0, NaN, 1);
        expect(_select_f32_t_result).toBe(2.0);
    });

    _test("execution of select_0: select-f32-t (instance 6)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, 2.0, NaN, 1);
        expect(_select_f32_t_result).toBe(2.0);
    });

    _test("execution of select_0: select-f32-t (instance 7)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, 2.0, NaN, 0);
        expect(_select_f32_t_result).toBe(NaN);
    });

    _test("execution of select_0: select-f32-t (instance 8)", () => {
        let _select_f32_t = module.getExport("select-f32-t");
        expect(_select_f32_t).not.toBeUndefined();
        let _select_f32_t_result = module.invoke(_select_f32_t, 2.0, NaN, 0);
        expect(_select_f32_t_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64-t (instance 1)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, NaN, 1.0, 1);
        expect(_select_f64_t_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64-t (instance 2)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, NaN, 1.0, 1);
        expect(_select_f64_t_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64-t (instance 3)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, NaN, 1.0, 0);
        expect(_select_f64_t_result).toBe(1.0);
    });

    _test("execution of select_0: select-f64-t (instance 4)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, NaN, 1.0, 0);
        expect(_select_f64_t_result).toBe(1.0);
    });

    _test("execution of select_0: select-f64-t (instance 5)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, 2.0, NaN, 1);
        expect(_select_f64_t_result).toBe(2.0);
    });

    _test("execution of select_0: select-f64-t (instance 6)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, 2.0, NaN, 1);
        expect(_select_f64_t_result).toBe(2.0);
    });

    _test("execution of select_0: select-f64-t (instance 7)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, 2.0, NaN, 0);
        expect(_select_f64_t_result).toBe(NaN);
    });

    _test("execution of select_0: select-f64-t (instance 8)", () => {
        let _select_f64_t = module.getExport("select-f64-t");
        expect(_select_f64_t).not.toBeUndefined();
        let _select_f64_t_result = module.invoke(_select_f64_t, 2.0, NaN, 0);
        expect(_select_f64_t_result).toBe(NaN);
    });

    _test("execution of select_0: as-select-first (instance 0)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 0);
        expect(_as_select_first_result).toBe(1);
    });

    _test("execution of select_0: as-select-first (instance 1)", () => {
        let _as_select_first = module.getExport("as-select-first");
        expect(_as_select_first).not.toBeUndefined();
        let _as_select_first_result = module.invoke(_as_select_first, 1);
        expect(_as_select_first_result).toBe(0);
    });

    _test("execution of select_0: as-select-mid (instance 0)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid, 0);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of select_0: as-select-mid (instance 1)", () => {
        let _as_select_mid = module.getExport("as-select-mid");
        expect(_as_select_mid).not.toBeUndefined();
        let _as_select_mid_result = module.invoke(_as_select_mid, 1);
        expect(_as_select_mid_result).toBe(2);
    });

    _test("execution of select_0: as-select-last (instance 0)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last, 0);
        expect(_as_select_last_result).toBe(2);
    });

    _test("execution of select_0: as-select-last (instance 1)", () => {
        let _as_select_last = module.getExport("as-select-last");
        expect(_as_select_last).not.toBeUndefined();
        let _as_select_last_result = module.invoke(_as_select_last, 1);
        expect(_as_select_last_result).toBe(3);
    });

    _test("execution of select_0: as-loop-first (instance 0)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first, 0);
        expect(_as_loop_first_result).toBe(3);
    });

    _test("execution of select_0: as-loop-first (instance 1)", () => {
        let _as_loop_first = module.getExport("as-loop-first");
        expect(_as_loop_first).not.toBeUndefined();
        let _as_loop_first_result = module.invoke(_as_loop_first, 1);
        expect(_as_loop_first_result).toBe(2);
    });

    _test("execution of select_0: as-loop-mid (instance 0)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid, 0);
        expect(_as_loop_mid_result).toBe(3);
    });

    _test("execution of select_0: as-loop-mid (instance 1)", () => {
        let _as_loop_mid = module.getExport("as-loop-mid");
        expect(_as_loop_mid).not.toBeUndefined();
        let _as_loop_mid_result = module.invoke(_as_loop_mid, 1);
        expect(_as_loop_mid_result).toBe(2);
    });

    _test("execution of select_0: as-loop-last (instance 0)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last, 0);
        expect(_as_loop_last_result).toBe(3);
    });

    _test("execution of select_0: as-loop-last (instance 1)", () => {
        let _as_loop_last = module.getExport("as-loop-last");
        expect(_as_loop_last).not.toBeUndefined();
        let _as_loop_last_result = module.invoke(_as_loop_last, 1);
        expect(_as_loop_last_result).toBe(2);
    });

    _test("execution of select_0: as-if-condition (instance 0)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition, 0);
    });

    _test("execution of select_0: as-if-condition (instance 1)", () => {
        let _as_if_condition = module.getExport("as-if-condition");
        expect(_as_if_condition).not.toBeUndefined();
        let _as_if_condition_result = module.invoke(_as_if_condition, 1);
    });

    _test("execution of select_0: as-if-then (instance 0)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 0);
        expect(_as_if_then_result).toBe(3);
    });

    _test("execution of select_0: as-if-then (instance 1)", () => {
        let _as_if_then = module.getExport("as-if-then");
        expect(_as_if_then).not.toBeUndefined();
        let _as_if_then_result = module.invoke(_as_if_then, 1);
        expect(_as_if_then_result).toBe(2);
    });

    _test("execution of select_0: as-if-else (instance 0)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 0);
        expect(_as_if_else_result).toBe(3);
    });

    _test("execution of select_0: as-if-else (instance 1)", () => {
        let _as_if_else = module.getExport("as-if-else");
        expect(_as_if_else).not.toBeUndefined();
        let _as_if_else_result = module.invoke(_as_if_else, 1);
        expect(_as_if_else_result).toBe(2);
    });

    _test("execution of select_0: as-br_if-first (instance 0)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first, 0);
        expect(_as_br_if_first_result).toBe(3);
    });

    _test("execution of select_0: as-br_if-first (instance 1)", () => {
        let _as_br_if_first = module.getExport("as-br_if-first");
        expect(_as_br_if_first).not.toBeUndefined();
        let _as_br_if_first_result = module.invoke(_as_br_if_first, 1);
        expect(_as_br_if_first_result).toBe(2);
    });

    _test("execution of select_0: as-br_if-last (instance 0)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last, 0);
        expect(_as_br_if_last_result).toBe(2);
    });

    _test("execution of select_0: as-br_if-last (instance 1)", () => {
        let _as_br_if_last = module.getExport("as-br_if-last");
        expect(_as_br_if_last).not.toBeUndefined();
        let _as_br_if_last_result = module.invoke(_as_br_if_last, 1);
        expect(_as_br_if_last_result).toBe(2);
    });

    _test("execution of select_0: as-br_table-first (instance 0)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first, 0);
        expect(_as_br_table_first_result).toBe(3);
    });

    _test("execution of select_0: as-br_table-first (instance 1)", () => {
        let _as_br_table_first = module.getExport("as-br_table-first");
        expect(_as_br_table_first).not.toBeUndefined();
        let _as_br_table_first_result = module.invoke(_as_br_table_first, 1);
        expect(_as_br_table_first_result).toBe(2);
    });

    _test("execution of select_0: as-br_table-last (instance 0)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last, 0);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of select_0: as-br_table-last (instance 1)", () => {
        let _as_br_table_last = module.getExport("as-br_table-last");
        expect(_as_br_table_last).not.toBeUndefined();
        let _as_br_table_last_result = module.invoke(_as_br_table_last, 1);
        expect(_as_br_table_last_result).toBe(2);
    });

    _test("execution of select_0: as-call_indirect-first (instance 0)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first, 0);
        expect(_as_call_indirect_first_result).toBe(3);
    });

    _test("execution of select_0: as-call_indirect-first (instance 1)", () => {
        let _as_call_indirect_first = module.getExport("as-call_indirect-first");
        expect(_as_call_indirect_first).not.toBeUndefined();
        let _as_call_indirect_first_result = module.invoke(_as_call_indirect_first, 1);
        expect(_as_call_indirect_first_result).toBe(2);
    });

    _test("execution of select_0: as-call_indirect-mid (instance 0)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid, 0);
        expect(_as_call_indirect_mid_result).toBe(1);
    });

    _test("execution of select_0: as-call_indirect-mid (instance 1)", () => {
        let _as_call_indirect_mid = module.getExport("as-call_indirect-mid");
        expect(_as_call_indirect_mid).not.toBeUndefined();
        let _as_call_indirect_mid_result = module.invoke(_as_call_indirect_mid, 1);
        expect(_as_call_indirect_mid_result).toBe(1);
    });

    _test("execution of select_0: as-call_indirect-last (instance 0)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_call_indirect_last, 0).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of select_0: as-call_indirect-last (instance 1)", () => {
        let _as_call_indirect_last = module.getExport("as-call_indirect-last");
        expect(_as_call_indirect_last).not.toBeUndefined();
        expect(() =>
            module.invoke(_as_call_indirect_last, 1).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of select_0: as-store-first (instance 0)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first, 0);
    });

    _test("execution of select_0: as-store-first (instance 1)", () => {
        let _as_store_first = module.getExport("as-store-first");
        expect(_as_store_first).not.toBeUndefined();
        let _as_store_first_result = module.invoke(_as_store_first, 1);
    });

    _test("execution of select_0: as-store-last (instance 0)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last, 0);
    });

    _test("execution of select_0: as-store-last (instance 1)", () => {
        let _as_store_last = module.getExport("as-store-last");
        expect(_as_store_last).not.toBeUndefined();
        let _as_store_last_result = module.invoke(_as_store_last, 1);
    });

    _test("execution of select_0: as-memory.grow-value (instance 0)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value, 0);
        expect(_as_memory_grow_value_result).toBe(1);
    });

    _test("execution of select_0: as-memory.grow-value (instance 1)", () => {
        let _as_memory_grow_value = module.getExport("as-memory.grow-value");
        expect(_as_memory_grow_value).not.toBeUndefined();
        let _as_memory_grow_value_result = module.invoke(_as_memory_grow_value, 1);
        expect(_as_memory_grow_value_result).toBe(3);
    });

    _test("execution of select_0: as-call-value (instance 0)", () => {
        let _as_call_value = module.getExport("as-call-value");
        expect(_as_call_value).not.toBeUndefined();
        let _as_call_value_result = module.invoke(_as_call_value, 0);
        expect(_as_call_value_result).toBe(2);
    });

    _test("execution of select_0: as-call-value (instance 1)", () => {
        let _as_call_value = module.getExport("as-call-value");
        expect(_as_call_value).not.toBeUndefined();
        let _as_call_value_result = module.invoke(_as_call_value, 1);
        expect(_as_call_value_result).toBe(1);
    });

    _test("execution of select_0: as-return-value (instance 0)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value, 0);
        expect(_as_return_value_result).toBe(2);
    });

    _test("execution of select_0: as-return-value (instance 1)", () => {
        let _as_return_value = module.getExport("as-return-value");
        expect(_as_return_value).not.toBeUndefined();
        let _as_return_value_result = module.invoke(_as_return_value, 1);
        expect(_as_return_value_result).toBe(1);
    });

    _test("execution of select_0: as-drop-operand (instance 0)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand, 0);
    });

    _test("execution of select_0: as-drop-operand (instance 1)", () => {
        let _as_drop_operand = module.getExport("as-drop-operand");
        expect(_as_drop_operand).not.toBeUndefined();
        let _as_drop_operand_result = module.invoke(_as_drop_operand, 1);
    });

    _test("execution of select_0: as-br-value (instance 0)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value, 0);
        expect(_as_br_value_result).toBe(2);
    });

    _test("execution of select_0: as-br-value (instance 1)", () => {
        let _as_br_value = module.getExport("as-br-value");
        expect(_as_br_value).not.toBeUndefined();
        let _as_br_value_result = module.invoke(_as_br_value, 1);
        expect(_as_br_value_result).toBe(1);
    });

    _test("execution of select_0: as-local.set-value (instance 0)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 0);
        expect(_as_local_set_value_result).toBe(2);
    });

    _test("execution of select_0: as-local.set-value (instance 1)", () => {
        let _as_local_set_value = module.getExport("as-local.set-value");
        expect(_as_local_set_value).not.toBeUndefined();
        let _as_local_set_value_result = module.invoke(_as_local_set_value, 1);
        expect(_as_local_set_value_result).toBe(1);
    });

    _test("execution of select_0: as-local.tee-value (instance 0)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 0);
        expect(_as_local_tee_value_result).toBe(2);
    });

    _test("execution of select_0: as-local.tee-value (instance 1)", () => {
        let _as_local_tee_value = module.getExport("as-local.tee-value");
        expect(_as_local_tee_value).not.toBeUndefined();
        let _as_local_tee_value_result = module.invoke(_as_local_tee_value, 1);
        expect(_as_local_tee_value_result).toBe(1);
    });

    _test("execution of select_0: as-global.set-value (instance 0)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value, 0);
        expect(_as_global_set_value_result).toBe(2);
    });

    _test("execution of select_0: as-global.set-value (instance 1)", () => {
        let _as_global_set_value = module.getExport("as-global.set-value");
        expect(_as_global_set_value).not.toBeUndefined();
        let _as_global_set_value_result = module.invoke(_as_global_set_value, 1);
        expect(_as_global_set_value_result).toBe(1);
    });

    _test("execution of select_0: as-load-operand (instance 0)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand, 0);
        expect(_as_load_operand_result).toBe(1);
    });

    _test("execution of select_0: as-load-operand (instance 1)", () => {
        let _as_load_operand = module.getExport("as-load-operand");
        expect(_as_load_operand).not.toBeUndefined();
        let _as_load_operand_result = module.invoke(_as_load_operand, 1);
        expect(_as_load_operand_result).toBe(1);
    });

    _test("execution of select_0: as-unary-operand (instance 0)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand, 0);
        expect(_as_unary_operand_result).toBe(0);
    });

    _test("execution of select_0: as-unary-operand (instance 1)", () => {
        let _as_unary_operand = module.getExport("as-unary-operand");
        expect(_as_unary_operand).not.toBeUndefined();
        let _as_unary_operand_result = module.invoke(_as_unary_operand, 1);
        expect(_as_unary_operand_result).toBe(1);
    });

    _test("execution of select_0: as-binary-operand (instance 0)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand, 0);
        expect(_as_binary_operand_result).toBe(4);
    });

    _test("execution of select_0: as-binary-operand (instance 1)", () => {
        let _as_binary_operand = module.getExport("as-binary-operand");
        expect(_as_binary_operand).not.toBeUndefined();
        let _as_binary_operand_result = module.invoke(_as_binary_operand, 1);
        expect(_as_binary_operand_result).toBe(1);
    });

    _test("execution of select_0: as-test-operand (instance 0)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand, 0);
        expect(_as_test_operand_result).toBe(0);
    });

    _test("execution of select_0: as-test-operand (instance 1)", () => {
        let _as_test_operand = module.getExport("as-test-operand");
        expect(_as_test_operand).not.toBeUndefined();
        let _as_test_operand_result = module.invoke(_as_test_operand, 1);
        expect(_as_test_operand_result).toBe(1);
    });

    _test("execution of select_0: as-compare-left (instance 0)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left, 0);
        expect(_as_compare_left_result).toBe(0);
    });

    _test("execution of select_0: as-compare-left (instance 1)", () => {
        let _as_compare_left = module.getExport("as-compare-left");
        expect(_as_compare_left).not.toBeUndefined();
        let _as_compare_left_result = module.invoke(_as_compare_left, 1);
        expect(_as_compare_left_result).toBe(1);
    });

    _test("execution of select_0: as-compare-right (instance 0)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right, 0);
        expect(_as_compare_right_result).toBe(0);
    });

    _test("execution of select_0: as-compare-right (instance 1)", () => {
        let _as_compare_right = module.getExport("as-compare-right");
        expect(_as_compare_right).not.toBeUndefined();
        let _as_compare_right_result = module.invoke(_as_compare_right, 1);
        expect(_as_compare_right_result).toBe(1);
    });

    _test("execution of select_0: as-convert-operand (instance 0)", () => {
        let _as_convert_operand = module.getExport("as-convert-operand");
        expect(_as_convert_operand).not.toBeUndefined();
        let _as_convert_operand_result = module.invoke(_as_convert_operand, 0);
        expect(_as_convert_operand_result).toBe(0);
    });

    _test("execution of select_0: as-convert-operand (instance 1)", () => {
        let _as_convert_operand = module.getExport("as-convert-operand");
        expect(_as_convert_operand).not.toBeUndefined();
        let _as_convert_operand_result = module.invoke(_as_convert_operand, 1);
        expect(_as_convert_operand_result).toBe(1);
    });
});

describe("select_1", () => {
    let _test = test;

    _test("execution of select_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_2", () => {
    let _test = test;

    _test("execution of select_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_3", () => {
    let _test = test;

    _test("execution of select_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_4", () => {
    let _test = test;

    _test("execution of select_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_5", () => {
    let _test = test;

    _test("execution of select_5: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_6", () => {
    let _test = test;

    _test("execution of select_6: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_7", () => {
    let _test = test;

    _test("execution of select_7: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_8", () => {
    let _test = test;

    _test("execution of select_8: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_9", () => {
    let _test = test;

    _test("execution of select_9: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_10", () => {
    let _test = test;

    _test("execution of select_10: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_11", () => {
    let _test = test;

    _test("execution of select_11: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_12", () => {
    let _test = test;

    _test("execution of select_12: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_13", () => {
    let _test = test;

    _test("execution of select_13: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_14", () => {
    let _test = test;

    _test("execution of select_14: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_15", () => {
    let _test = test;

    _test("execution of select_15: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_16", () => {
    let _test = test;

    _test("execution of select_16: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_17", () => {
    let _test = test;

    _test("execution of select_17: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_18", () => {
    let _test = test;

    _test("execution of select_18: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_19", () => {
    let _test = test;

    _test("execution of select_19: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_20", () => {
    let _test = test;

    _test("execution of select_20: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_21", () => {
    let _test = test;

    _test("execution of select_21: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_22", () => {
    let _test = test;

    _test("execution of select_22: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_23", () => {
    let _test = test;

    _test("execution of select_23: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_24", () => {
    let _test = test;

    _test("execution of select_24: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_25", () => {
    let _test = test;

    _test("execution of select_25: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_26", () => {
    let _test = test;

    _test("execution of select_26: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_27", () => {
    let _test = test;

    _test("execution of select_27: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("select_28", () => {
    let _test = test;

    _test("execution of select_28: _inline_test_27 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});
