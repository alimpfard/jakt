let globalImportObject = {};
let namedModules = {};

describe("left-to-right_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/left-to-right_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of left-to-right_0: i32_add (instance 0)", () => {
        let _i32_add = module.getExport("i32_add");
        expect(_i32_add).not.toBeUndefined();
        let _i32_add_result = module.invoke(_i32_add);
        expect(_i32_add_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_add (instance 0)", () => {
        let _i64_add = module.getExport("i64_add");
        expect(_i64_add).not.toBeUndefined();
        let _i64_add_result = module.invoke(_i64_add);
        expect(_i64_add_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_sub (instance 0)", () => {
        let _i32_sub = module.getExport("i32_sub");
        expect(_i32_sub).not.toBeUndefined();
        let _i32_sub_result = module.invoke(_i32_sub);
        expect(_i32_sub_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_sub (instance 0)", () => {
        let _i64_sub = module.getExport("i64_sub");
        expect(_i64_sub).not.toBeUndefined();
        let _i64_sub_result = module.invoke(_i64_sub);
        expect(_i64_sub_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_mul (instance 0)", () => {
        let _i32_mul = module.getExport("i32_mul");
        expect(_i32_mul).not.toBeUndefined();
        let _i32_mul_result = module.invoke(_i32_mul);
        expect(_i32_mul_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_mul (instance 0)", () => {
        let _i64_mul = module.getExport("i64_mul");
        expect(_i64_mul).not.toBeUndefined();
        let _i64_mul_result = module.invoke(_i64_mul);
        expect(_i64_mul_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_div_s (instance 0)", () => {
        let _i32_div_s = module.getExport("i32_div_s");
        expect(_i32_div_s).not.toBeUndefined();
        let _i32_div_s_result = module.invoke(_i32_div_s);
        expect(_i32_div_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_div_s (instance 0)", () => {
        let _i64_div_s = module.getExport("i64_div_s");
        expect(_i64_div_s).not.toBeUndefined();
        let _i64_div_s_result = module.invoke(_i64_div_s);
        expect(_i64_div_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_div_u (instance 0)", () => {
        let _i32_div_u = module.getExport("i32_div_u");
        expect(_i32_div_u).not.toBeUndefined();
        let _i32_div_u_result = module.invoke(_i32_div_u);
        expect(_i32_div_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_div_u (instance 0)", () => {
        let _i64_div_u = module.getExport("i64_div_u");
        expect(_i64_div_u).not.toBeUndefined();
        let _i64_div_u_result = module.invoke(_i64_div_u);
        expect(_i64_div_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_rem_s (instance 0)", () => {
        let _i32_rem_s = module.getExport("i32_rem_s");
        expect(_i32_rem_s).not.toBeUndefined();
        let _i32_rem_s_result = module.invoke(_i32_rem_s);
        expect(_i32_rem_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_rem_s (instance 0)", () => {
        let _i64_rem_s = module.getExport("i64_rem_s");
        expect(_i64_rem_s).not.toBeUndefined();
        let _i64_rem_s_result = module.invoke(_i64_rem_s);
        expect(_i64_rem_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_rem_u (instance 0)", () => {
        let _i32_rem_u = module.getExport("i32_rem_u");
        expect(_i32_rem_u).not.toBeUndefined();
        let _i32_rem_u_result = module.invoke(_i32_rem_u);
        expect(_i32_rem_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_rem_u (instance 0)", () => {
        let _i64_rem_u = module.getExport("i64_rem_u");
        expect(_i64_rem_u).not.toBeUndefined();
        let _i64_rem_u_result = module.invoke(_i64_rem_u);
        expect(_i64_rem_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_and (instance 0)", () => {
        let _i32_and = module.getExport("i32_and");
        expect(_i32_and).not.toBeUndefined();
        let _i32_and_result = module.invoke(_i32_and);
        expect(_i32_and_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_and (instance 0)", () => {
        let _i64_and = module.getExport("i64_and");
        expect(_i64_and).not.toBeUndefined();
        let _i64_and_result = module.invoke(_i64_and);
        expect(_i64_and_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_or (instance 0)", () => {
        let _i32_or = module.getExport("i32_or");
        expect(_i32_or).not.toBeUndefined();
        let _i32_or_result = module.invoke(_i32_or);
        expect(_i32_or_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_or (instance 0)", () => {
        let _i64_or = module.getExport("i64_or");
        expect(_i64_or).not.toBeUndefined();
        let _i64_or_result = module.invoke(_i64_or);
        expect(_i64_or_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_xor (instance 0)", () => {
        let _i32_xor = module.getExport("i32_xor");
        expect(_i32_xor).not.toBeUndefined();
        let _i32_xor_result = module.invoke(_i32_xor);
        expect(_i32_xor_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_xor (instance 0)", () => {
        let _i64_xor = module.getExport("i64_xor");
        expect(_i64_xor).not.toBeUndefined();
        let _i64_xor_result = module.invoke(_i64_xor);
        expect(_i64_xor_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_shl (instance 0)", () => {
        let _i32_shl = module.getExport("i32_shl");
        expect(_i32_shl).not.toBeUndefined();
        let _i32_shl_result = module.invoke(_i32_shl);
        expect(_i32_shl_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_shl (instance 0)", () => {
        let _i64_shl = module.getExport("i64_shl");
        expect(_i64_shl).not.toBeUndefined();
        let _i64_shl_result = module.invoke(_i64_shl);
        expect(_i64_shl_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_shr_u (instance 0)", () => {
        let _i32_shr_u = module.getExport("i32_shr_u");
        expect(_i32_shr_u).not.toBeUndefined();
        let _i32_shr_u_result = module.invoke(_i32_shr_u);
        expect(_i32_shr_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_shr_u (instance 0)", () => {
        let _i64_shr_u = module.getExport("i64_shr_u");
        expect(_i64_shr_u).not.toBeUndefined();
        let _i64_shr_u_result = module.invoke(_i64_shr_u);
        expect(_i64_shr_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_shr_s (instance 0)", () => {
        let _i32_shr_s = module.getExport("i32_shr_s");
        expect(_i32_shr_s).not.toBeUndefined();
        let _i32_shr_s_result = module.invoke(_i32_shr_s);
        expect(_i32_shr_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_shr_s (instance 0)", () => {
        let _i64_shr_s = module.getExport("i64_shr_s");
        expect(_i64_shr_s).not.toBeUndefined();
        let _i64_shr_s_result = module.invoke(_i64_shr_s);
        expect(_i64_shr_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_eq (instance 0)", () => {
        let _i32_eq = module.getExport("i32_eq");
        expect(_i32_eq).not.toBeUndefined();
        let _i32_eq_result = module.invoke(_i32_eq);
        expect(_i32_eq_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_eq (instance 0)", () => {
        let _i64_eq = module.getExport("i64_eq");
        expect(_i64_eq).not.toBeUndefined();
        let _i64_eq_result = module.invoke(_i64_eq);
        expect(_i64_eq_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_ne (instance 0)", () => {
        let _i32_ne = module.getExport("i32_ne");
        expect(_i32_ne).not.toBeUndefined();
        let _i32_ne_result = module.invoke(_i32_ne);
        expect(_i32_ne_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_ne (instance 0)", () => {
        let _i64_ne = module.getExport("i64_ne");
        expect(_i64_ne).not.toBeUndefined();
        let _i64_ne_result = module.invoke(_i64_ne);
        expect(_i64_ne_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_lt_s (instance 0)", () => {
        let _i32_lt_s = module.getExport("i32_lt_s");
        expect(_i32_lt_s).not.toBeUndefined();
        let _i32_lt_s_result = module.invoke(_i32_lt_s);
        expect(_i32_lt_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_lt_s (instance 0)", () => {
        let _i64_lt_s = module.getExport("i64_lt_s");
        expect(_i64_lt_s).not.toBeUndefined();
        let _i64_lt_s_result = module.invoke(_i64_lt_s);
        expect(_i64_lt_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_le_s (instance 0)", () => {
        let _i32_le_s = module.getExport("i32_le_s");
        expect(_i32_le_s).not.toBeUndefined();
        let _i32_le_s_result = module.invoke(_i32_le_s);
        expect(_i32_le_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_le_s (instance 0)", () => {
        let _i64_le_s = module.getExport("i64_le_s");
        expect(_i64_le_s).not.toBeUndefined();
        let _i64_le_s_result = module.invoke(_i64_le_s);
        expect(_i64_le_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_lt_u (instance 0)", () => {
        let _i32_lt_u = module.getExport("i32_lt_u");
        expect(_i32_lt_u).not.toBeUndefined();
        let _i32_lt_u_result = module.invoke(_i32_lt_u);
        expect(_i32_lt_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_lt_u (instance 0)", () => {
        let _i64_lt_u = module.getExport("i64_lt_u");
        expect(_i64_lt_u).not.toBeUndefined();
        let _i64_lt_u_result = module.invoke(_i64_lt_u);
        expect(_i64_lt_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_le_u (instance 0)", () => {
        let _i32_le_u = module.getExport("i32_le_u");
        expect(_i32_le_u).not.toBeUndefined();
        let _i32_le_u_result = module.invoke(_i32_le_u);
        expect(_i32_le_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_le_u (instance 0)", () => {
        let _i64_le_u = module.getExport("i64_le_u");
        expect(_i64_le_u).not.toBeUndefined();
        let _i64_le_u_result = module.invoke(_i64_le_u);
        expect(_i64_le_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_gt_s (instance 0)", () => {
        let _i32_gt_s = module.getExport("i32_gt_s");
        expect(_i32_gt_s).not.toBeUndefined();
        let _i32_gt_s_result = module.invoke(_i32_gt_s);
        expect(_i32_gt_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_gt_s (instance 0)", () => {
        let _i64_gt_s = module.getExport("i64_gt_s");
        expect(_i64_gt_s).not.toBeUndefined();
        let _i64_gt_s_result = module.invoke(_i64_gt_s);
        expect(_i64_gt_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_ge_s (instance 0)", () => {
        let _i32_ge_s = module.getExport("i32_ge_s");
        expect(_i32_ge_s).not.toBeUndefined();
        let _i32_ge_s_result = module.invoke(_i32_ge_s);
        expect(_i32_ge_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_ge_s (instance 0)", () => {
        let _i64_ge_s = module.getExport("i64_ge_s");
        expect(_i64_ge_s).not.toBeUndefined();
        let _i64_ge_s_result = module.invoke(_i64_ge_s);
        expect(_i64_ge_s_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_gt_u (instance 0)", () => {
        let _i32_gt_u = module.getExport("i32_gt_u");
        expect(_i32_gt_u).not.toBeUndefined();
        let _i32_gt_u_result = module.invoke(_i32_gt_u);
        expect(_i32_gt_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_gt_u (instance 0)", () => {
        let _i64_gt_u = module.getExport("i64_gt_u");
        expect(_i64_gt_u).not.toBeUndefined();
        let _i64_gt_u_result = module.invoke(_i64_gt_u);
        expect(_i64_gt_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_ge_u (instance 0)", () => {
        let _i32_ge_u = module.getExport("i32_ge_u");
        expect(_i32_ge_u).not.toBeUndefined();
        let _i32_ge_u_result = module.invoke(_i32_ge_u);
        expect(_i32_ge_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_ge_u (instance 0)", () => {
        let _i64_ge_u = module.getExport("i64_ge_u");
        expect(_i64_ge_u).not.toBeUndefined();
        let _i64_ge_u_result = module.invoke(_i64_ge_u);
        expect(_i64_ge_u_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_store (instance 0)", () => {
        let _i32_store = module.getExport("i32_store");
        expect(_i32_store).not.toBeUndefined();
        let _i32_store_result = module.invoke(_i32_store);
        expect(_i32_store_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_store (instance 0)", () => {
        let _i64_store = module.getExport("i64_store");
        expect(_i64_store).not.toBeUndefined();
        let _i64_store_result = module.invoke(_i64_store);
        expect(_i64_store_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_store8 (instance 0)", () => {
        let _i32_store8 = module.getExport("i32_store8");
        expect(_i32_store8).not.toBeUndefined();
        let _i32_store8_result = module.invoke(_i32_store8);
        expect(_i32_store8_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_store8 (instance 0)", () => {
        let _i64_store8 = module.getExport("i64_store8");
        expect(_i64_store8).not.toBeUndefined();
        let _i64_store8_result = module.invoke(_i64_store8);
        expect(_i64_store8_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_store16 (instance 0)", () => {
        let _i32_store16 = module.getExport("i32_store16");
        expect(_i32_store16).not.toBeUndefined();
        let _i32_store16_result = module.invoke(_i32_store16);
        expect(_i32_store16_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_store16 (instance 0)", () => {
        let _i64_store16 = module.getExport("i64_store16");
        expect(_i64_store16).not.toBeUndefined();
        let _i64_store16_result = module.invoke(_i64_store16);
        expect(_i64_store16_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_store32 (instance 0)", () => {
        let _i64_store32 = module.getExport("i64_store32");
        expect(_i64_store32).not.toBeUndefined();
        let _i64_store32_result = module.invoke(_i64_store32);
        expect(_i64_store32_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_call (instance 0)", () => {
        let _i32_call = module.getExport("i32_call");
        expect(_i32_call).not.toBeUndefined();
        let _i32_call_result = module.invoke(_i32_call);
        expect(_i32_call_result).toBe(258);
    });

    _test("execution of left-to-right_0: i64_call (instance 0)", () => {
        let _i64_call = module.getExport("i64_call");
        expect(_i64_call).not.toBeUndefined();
        let _i64_call_result = module.invoke(_i64_call);
        expect(_i64_call_result).toBe(258);
    });

    _test("execution of left-to-right_0: i32_call_indirect (instance 0)", () => {
        let _i32_call_indirect = module.getExport("i32_call_indirect");
        expect(_i32_call_indirect).not.toBeUndefined();
        let _i32_call_indirect_result = module.invoke(_i32_call_indirect);
        expect(_i32_call_indirect_result).toBe(66052);
    });

    _test("execution of left-to-right_0: i64_call_indirect (instance 0)", () => {
        let _i64_call_indirect = module.getExport("i64_call_indirect");
        expect(_i64_call_indirect).not.toBeUndefined();
        let _i64_call_indirect_result = module.invoke(_i64_call_indirect);
        expect(_i64_call_indirect_result).toBe(66052);
    });

    _test("execution of left-to-right_0: i32_select (instance 0)", () => {
        let _i32_select = module.getExport("i32_select");
        expect(_i32_select).not.toBeUndefined();
        let _i32_select_result = module.invoke(_i32_select);
        expect(_i32_select_result).toBe(66053);
    });

    _test("execution of left-to-right_0: i64_select (instance 0)", () => {
        let _i64_select = module.getExport("i64_select");
        expect(_i64_select).not.toBeUndefined();
        let _i64_select_result = module.invoke(_i64_select);
        expect(_i64_select_result).toBe(66053);
    });

    _test("execution of left-to-right_0: f32_add (instance 0)", () => {
        let _f32_add = module.getExport("f32_add");
        expect(_f32_add).not.toBeUndefined();
        let _f32_add_result = module.invoke(_f32_add);
        expect(_f32_add_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_add (instance 0)", () => {
        let _f64_add = module.getExport("f64_add");
        expect(_f64_add).not.toBeUndefined();
        let _f64_add_result = module.invoke(_f64_add);
        expect(_f64_add_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_sub (instance 0)", () => {
        let _f32_sub = module.getExport("f32_sub");
        expect(_f32_sub).not.toBeUndefined();
        let _f32_sub_result = module.invoke(_f32_sub);
        expect(_f32_sub_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_sub (instance 0)", () => {
        let _f64_sub = module.getExport("f64_sub");
        expect(_f64_sub).not.toBeUndefined();
        let _f64_sub_result = module.invoke(_f64_sub);
        expect(_f64_sub_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_mul (instance 0)", () => {
        let _f32_mul = module.getExport("f32_mul");
        expect(_f32_mul).not.toBeUndefined();
        let _f32_mul_result = module.invoke(_f32_mul);
        expect(_f32_mul_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_mul (instance 0)", () => {
        let _f64_mul = module.getExport("f64_mul");
        expect(_f64_mul).not.toBeUndefined();
        let _f64_mul_result = module.invoke(_f64_mul);
        expect(_f64_mul_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_div (instance 0)", () => {
        let _f32_div = module.getExport("f32_div");
        expect(_f32_div).not.toBeUndefined();
        let _f32_div_result = module.invoke(_f32_div);
        expect(_f32_div_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_div (instance 0)", () => {
        let _f64_div = module.getExport("f64_div");
        expect(_f64_div).not.toBeUndefined();
        let _f64_div_result = module.invoke(_f64_div);
        expect(_f64_div_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_copysign (instance 0)", () => {
        let _f32_copysign = module.getExport("f32_copysign");
        expect(_f32_copysign).not.toBeUndefined();
        let _f32_copysign_result = module.invoke(_f32_copysign);
        expect(_f32_copysign_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_copysign (instance 0)", () => {
        let _f64_copysign = module.getExport("f64_copysign");
        expect(_f64_copysign).not.toBeUndefined();
        let _f64_copysign_result = module.invoke(_f64_copysign);
        expect(_f64_copysign_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_eq (instance 0)", () => {
        let _f32_eq = module.getExport("f32_eq");
        expect(_f32_eq).not.toBeUndefined();
        let _f32_eq_result = module.invoke(_f32_eq);
        expect(_f32_eq_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_eq (instance 0)", () => {
        let _f64_eq = module.getExport("f64_eq");
        expect(_f64_eq).not.toBeUndefined();
        let _f64_eq_result = module.invoke(_f64_eq);
        expect(_f64_eq_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_ne (instance 0)", () => {
        let _f32_ne = module.getExport("f32_ne");
        expect(_f32_ne).not.toBeUndefined();
        let _f32_ne_result = module.invoke(_f32_ne);
        expect(_f32_ne_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_ne (instance 0)", () => {
        let _f64_ne = module.getExport("f64_ne");
        expect(_f64_ne).not.toBeUndefined();
        let _f64_ne_result = module.invoke(_f64_ne);
        expect(_f64_ne_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_lt (instance 0)", () => {
        let _f32_lt = module.getExport("f32_lt");
        expect(_f32_lt).not.toBeUndefined();
        let _f32_lt_result = module.invoke(_f32_lt);
        expect(_f32_lt_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_lt (instance 0)", () => {
        let _f64_lt = module.getExport("f64_lt");
        expect(_f64_lt).not.toBeUndefined();
        let _f64_lt_result = module.invoke(_f64_lt);
        expect(_f64_lt_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_le (instance 0)", () => {
        let _f32_le = module.getExport("f32_le");
        expect(_f32_le).not.toBeUndefined();
        let _f32_le_result = module.invoke(_f32_le);
        expect(_f32_le_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_le (instance 0)", () => {
        let _f64_le = module.getExport("f64_le");
        expect(_f64_le).not.toBeUndefined();
        let _f64_le_result = module.invoke(_f64_le);
        expect(_f64_le_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_gt (instance 0)", () => {
        let _f32_gt = module.getExport("f32_gt");
        expect(_f32_gt).not.toBeUndefined();
        let _f32_gt_result = module.invoke(_f32_gt);
        expect(_f32_gt_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_gt (instance 0)", () => {
        let _f64_gt = module.getExport("f64_gt");
        expect(_f64_gt).not.toBeUndefined();
        let _f64_gt_result = module.invoke(_f64_gt);
        expect(_f64_gt_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_ge (instance 0)", () => {
        let _f32_ge = module.getExport("f32_ge");
        expect(_f32_ge).not.toBeUndefined();
        let _f32_ge_result = module.invoke(_f32_ge);
        expect(_f32_ge_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_ge (instance 0)", () => {
        let _f64_ge = module.getExport("f64_ge");
        expect(_f64_ge).not.toBeUndefined();
        let _f64_ge_result = module.invoke(_f64_ge);
        expect(_f64_ge_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_min (instance 0)", () => {
        let _f32_min = module.getExport("f32_min");
        expect(_f32_min).not.toBeUndefined();
        let _f32_min_result = module.invoke(_f32_min);
        expect(_f32_min_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_min (instance 0)", () => {
        let _f64_min = module.getExport("f64_min");
        expect(_f64_min).not.toBeUndefined();
        let _f64_min_result = module.invoke(_f64_min);
        expect(_f64_min_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_max (instance 0)", () => {
        let _f32_max = module.getExport("f32_max");
        expect(_f32_max).not.toBeUndefined();
        let _f32_max_result = module.invoke(_f32_max);
        expect(_f32_max_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_max (instance 0)", () => {
        let _f64_max = module.getExport("f64_max");
        expect(_f64_max).not.toBeUndefined();
        let _f64_max_result = module.invoke(_f64_max);
        expect(_f64_max_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_store (instance 0)", () => {
        let _f32_store = module.getExport("f32_store");
        expect(_f32_store).not.toBeUndefined();
        let _f32_store_result = module.invoke(_f32_store);
        expect(_f32_store_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_store (instance 0)", () => {
        let _f64_store = module.getExport("f64_store");
        expect(_f64_store).not.toBeUndefined();
        let _f64_store_result = module.invoke(_f64_store);
        expect(_f64_store_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_call (instance 0)", () => {
        let _f32_call = module.getExport("f32_call");
        expect(_f32_call).not.toBeUndefined();
        let _f32_call_result = module.invoke(_f32_call);
        expect(_f32_call_result).toBe(258);
    });

    _test("execution of left-to-right_0: f64_call (instance 0)", () => {
        let _f64_call = module.getExport("f64_call");
        expect(_f64_call).not.toBeUndefined();
        let _f64_call_result = module.invoke(_f64_call);
        expect(_f64_call_result).toBe(258);
    });

    _test("execution of left-to-right_0: f32_call_indirect (instance 0)", () => {
        let _f32_call_indirect = module.getExport("f32_call_indirect");
        expect(_f32_call_indirect).not.toBeUndefined();
        let _f32_call_indirect_result = module.invoke(_f32_call_indirect);
        expect(_f32_call_indirect_result).toBe(66052);
    });

    _test("execution of left-to-right_0: f64_call_indirect (instance 0)", () => {
        let _f64_call_indirect = module.getExport("f64_call_indirect");
        expect(_f64_call_indirect).not.toBeUndefined();
        let _f64_call_indirect_result = module.invoke(_f64_call_indirect);
        expect(_f64_call_indirect_result).toBe(66052);
    });

    _test("execution of left-to-right_0: f32_select (instance 0)", () => {
        let _f32_select = module.getExport("f32_select");
        expect(_f32_select).not.toBeUndefined();
        let _f32_select_result = module.invoke(_f32_select);
        expect(_f32_select_result).toBe(66053);
    });

    _test("execution of left-to-right_0: f64_select (instance 0)", () => {
        let _f64_select = module.getExport("f64_select");
        expect(_f64_select).not.toBeUndefined();
        let _f64_select_result = module.invoke(_f64_select);
        expect(_f64_select_result).toBe(66053);
    });

    _test("execution of left-to-right_0: br_if (instance 0)", () => {
        let _br_if = module.getExport("br_if");
        expect(_br_if).not.toBeUndefined();
        let _br_if_result = module.invoke(_br_if);
        expect(_br_if_result).toBe(258);
    });

    _test("execution of left-to-right_0: br_table (instance 0)", () => {
        let _br_table = module.getExport("br_table");
        expect(_br_table).not.toBeUndefined();
        let _br_table_result = module.invoke(_br_table);
        expect(_br_table_result).toBe(258);
    });
});
