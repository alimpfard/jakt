let globalImportObject = {};
let namedModules = {};

describe("simd_load_zero_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_zero_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_zero_0: v128.load32_zero (instance 0)", () => {
        let _v128_load32_zero = module.getExport("v128.load32_zero");
        expect(_v128_load32_zero).not.toBeUndefined();
        let _v128_load32_zero_result = module.invoke(_v128_load32_zero, 0);
        expect(_v128_load32_zero_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero (instance 0)", () => {
        let _v128_load64_zero = module.getExport("v128.load64_zero");
        expect(_v128_load64_zero).not.toBeUndefined();
        let _v128_load64_zero_result = module.invoke(_v128_load64_zero, 0);
        expect(_v128_load64_zero_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero (instance 1)", () => {
        let _v128_load32_zero = module.getExport("v128.load32_zero");
        expect(_v128_load32_zero).not.toBeUndefined();
        let _v128_load32_zero_result = module.invoke(_v128_load32_zero, 10);
        expect(_v128_load32_zero_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero (instance 1)", () => {
        let _v128_load64_zero = module.getExport("v128.load64_zero");
        expect(_v128_load64_zero).not.toBeUndefined();
        let _v128_load64_zero_result = module.invoke(_v128_load64_zero, 10);
        expect(_v128_load64_zero_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero (instance 2)", () => {
        let _v128_load32_zero = module.getExport("v128.load32_zero");
        expect(_v128_load32_zero).not.toBeUndefined();
        let _v128_load32_zero_result = module.invoke(_v128_load32_zero, 20);
        expect(_v128_load32_zero_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero (instance 2)", () => {
        let _v128_load64_zero = module.getExport("v128.load64_zero");
        expect(_v128_load64_zero).not.toBeUndefined();
        let _v128_load64_zero_result = module.invoke(_v128_load64_zero, 20);
        expect(_v128_load64_zero_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero_const0 (instance 0)", () => {
        let _v128_load32_zero_const0 = module.getExport("v128.load32_zero_const0");
        expect(_v128_load32_zero_const0).not.toBeUndefined();
        let _v128_load32_zero_const0_result = module.invoke(_v128_load32_zero_const0);
        expect(_v128_load32_zero_const0_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero_const8 (instance 0)", () => {
        let _v128_load64_zero_const8 = module.getExport("v128.load64_zero_const8");
        expect(_v128_load64_zero_const8).not.toBeUndefined();
        let _v128_load64_zero_const8_result = module.invoke(_v128_load64_zero_const8);
        expect(_v128_load64_zero_const8_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero_offset0 (instance 0)", () => {
        let _v128_load32_zero_offset0 = module.getExport("v128.load32_zero_offset0");
        expect(_v128_load32_zero_offset0).not.toBeUndefined();
        let _v128_load32_zero_offset0_result = module.invoke(_v128_load32_zero_offset0, 0);
        expect(_v128_load32_zero_offset0_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero_align1 (instance 0)", () => {
        let _v128_load32_zero_align1 = module.getExport("v128.load32_zero_align1");
        expect(_v128_load32_zero_align1).not.toBeUndefined();
        let _v128_load32_zero_align1_result = module.invoke(_v128_load32_zero_align1, 1);
        expect(_v128_load32_zero_align1_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero_offset0_align1 (instance 0)", () => {
        let _v128_load32_zero_offset0_align1 = module.getExport("v128.load32_zero_offset0_align1");
        expect(_v128_load32_zero_offset0_align1).not.toBeUndefined();
        let _v128_load32_zero_offset0_align1_result = module.invoke(
            _v128_load32_zero_offset0_align1,
            2
        );
        expect(_v128_load32_zero_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero_offset10_align4 (instance 0)", () => {
        let _v128_load32_zero_offset10_align4 = module.getExport(
            "v128.load32_zero_offset10_align4"
        );
        expect(_v128_load32_zero_offset10_align4).not.toBeUndefined();
        let _v128_load32_zero_offset10_align4_result = module.invoke(
            _v128_load32_zero_offset10_align4,
            3
        );
        expect(_v128_load32_zero_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero_offset0 (instance 0)", () => {
        let _v128_load64_zero_offset0 = module.getExport("v128.load64_zero_offset0");
        expect(_v128_load64_zero_offset0).not.toBeUndefined();
        let _v128_load64_zero_offset0_result = module.invoke(_v128_load64_zero_offset0, 0);
        expect(_v128_load64_zero_offset0_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero_align1 (instance 0)", () => {
        let _v128_load64_zero_align1 = module.getExport("v128.load64_zero_align1");
        expect(_v128_load64_zero_align1).not.toBeUndefined();
        let _v128_load64_zero_align1_result = module.invoke(_v128_load64_zero_align1, 1);
        expect(_v128_load64_zero_align1_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero_offset0_align1 (instance 0)", () => {
        let _v128_load64_zero_offset0_align1 = module.getExport("v128.load64_zero_offset0_align1");
        expect(_v128_load64_zero_offset0_align1).not.toBeUndefined();
        let _v128_load64_zero_offset0_align1_result = module.invoke(
            _v128_load64_zero_offset0_align1,
            2
        );
        expect(_v128_load64_zero_offset0_align1_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero_offset10_align4 (instance 0)", () => {
        let _v128_load64_zero_offset10_align4 = module.getExport(
            "v128.load64_zero_offset10_align4"
        );
        expect(_v128_load64_zero_offset10_align4).not.toBeUndefined();
        let _v128_load64_zero_offset10_align4_result = module.invoke(
            _v128_load64_zero_offset10_align4,
            3
        );
        expect(_v128_load64_zero_offset10_align4_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load64_zero_offset20_align8 (instance 0)", () => {
        let _v128_load64_zero_offset20_align8 = module.getExport(
            "v128.load64_zero_offset20_align8"
        );
        expect(_v128_load64_zero_offset20_align8).not.toBeUndefined();
        let _v128_load64_zero_offset20_align8_result = module.invoke(
            _v128_load64_zero_offset20_align8,
            4
        );
        expect(_v128_load64_zero_offset20_align8_result).toBe(0);
    });

    _test("execution of simd_load_zero_0: v128.load32_zero (instance 3)", () => {
        let _v128_load32_zero = module.getExport("v128.load32_zero");
        expect(_v128_load32_zero).not.toBeUndefined();
        expect(() => module.invoke(_v128_load32_zero, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_zero_0: v128.load64_zero (instance 3)", () => {
        let _v128_load64_zero = module.getExport("v128.load64_zero");
        expect(_v128_load64_zero).not.toBeUndefined();
        expect(() => module.invoke(_v128_load64_zero, -1).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of simd_load_zero_0: v128.load32_zero_offset1_align1 (instance 0)", () => {
        let _v128_load32_zero_offset1_align1 = module.getExport("v128.load32_zero_offset1_align1");
        expect(_v128_load32_zero_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load32_zero_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of simd_load_zero_0: v128.load64_zero_offset1_align1 (instance 0)", () => {
        let _v128_load64_zero_offset1_align1 = module.getExport("v128.load64_zero_offset1_align1");
        expect(_v128_load64_zero_offset1_align1).not.toBeUndefined();
        expect(() =>
            module
                .invoke(_v128_load64_zero_offset1_align1, -1)
                .toThrow(TypeError, "Execution trapped")
        );
    });
});

describe("simd_load_zero_1", () => {
    let _test = test;

    _test("execution of simd_load_zero_1: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_zero_2", () => {
    let _test = test;

    _test("execution of simd_load_zero_2: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_zero_3", () => {
    let _test = test;

    _test("execution of simd_load_zero_3: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_zero_4", () => {
    let _test = test;

    _test("execution of simd_load_zero_4: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("simd_load_zero_5", () => {
    let _test = test;

    _test("execution of simd_load_zero_5: _inline_test_4 (instance 0)", () => {});
});

describe("simd_load_zero_6", () => {
    let _test = test;

    _test("execution of simd_load_zero_6: _inline_test_5 (instance 0)", () => {});
});

describe("simd_load_zero_7", () => {
    let _test = test;

    _test("execution of simd_load_zero_7: _inline_test_6 (instance 0)", () => {});
});

describe("simd_load_zero_8", () => {
    let _test = test;

    _test("execution of simd_load_zero_8: _inline_test_7 (instance 0)", () => {});
});

describe("simd_load_zero_9", () => {
    let _test = test;

    _test("execution of simd_load_zero_9: _inline_test_8 (instance 0)", () => {});
});

describe("simd_load_zero_10", () => {
    let _test = test;

    _test("execution of simd_load_zero_10: _inline_test_9 (instance 0)", () => {});
});

describe("simd_load_zero_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/simd_load_zero_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of simd_load_zero_11: v128.load32_zero-in-block (instance 0)", () => {
        let _v128_load32_zero_in_block = module.getExport("v128.load32_zero-in-block");
        expect(_v128_load32_zero_in_block).not.toBeUndefined();
        let _v128_load32_zero_in_block_result = module.invoke(_v128_load32_zero_in_block);
        expect(_v128_load32_zero_in_block_result).toBe(0);
    });

    _test("execution of simd_load_zero_11: v128.load64_zero-in-block (instance 0)", () => {
        let _v128_load64_zero_in_block = module.getExport("v128.load64_zero-in-block");
        expect(_v128_load64_zero_in_block).not.toBeUndefined();
        let _v128_load64_zero_in_block_result = module.invoke(_v128_load64_zero_in_block);
        expect(_v128_load64_zero_in_block_result).toBe(0);
    });

    _test("execution of simd_load_zero_11: v128.load32_zero-as-br-value (instance 0)", () => {
        let _v128_load32_zero_as_br_value = module.getExport("v128.load32_zero-as-br-value");
        expect(_v128_load32_zero_as_br_value).not.toBeUndefined();
        let _v128_load32_zero_as_br_value_result = module.invoke(_v128_load32_zero_as_br_value);
        expect(_v128_load32_zero_as_br_value_result).toBe(0);
    });

    _test("execution of simd_load_zero_11: v128.load64_zero-as-br-value (instance 0)", () => {
        let _v128_load64_zero_as_br_value = module.getExport("v128.load64_zero-as-br-value");
        expect(_v128_load64_zero_as_br_value).not.toBeUndefined();
        let _v128_load64_zero_as_br_value_result = module.invoke(_v128_load64_zero_as_br_value);
        expect(_v128_load64_zero_as_br_value_result).toBe(0);
    });

    _test(
        "execution of simd_load_zero_11: v128.load32_zero-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load32_zero_extract_lane_s_operand = module.getExport(
                "v128.load32_zero-extract_lane_s-operand"
            );
            expect(_v128_load32_zero_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load32_zero_extract_lane_s_operand_result = module.invoke(
                _v128_load32_zero_extract_lane_s_operand
            );
            expect(_v128_load32_zero_extract_lane_s_operand_result).toBe(252579084);
        }
    );

    _test(
        "execution of simd_load_zero_11: v128.load64_zero-extract_lane_s-operand (instance 0)",
        () => {
            let _v128_load64_zero_extract_lane_s_operand = module.getExport(
                "v128.load64_zero-extract_lane_s-operand"
            );
            expect(_v128_load64_zero_extract_lane_s_operand).not.toBeUndefined();
            let _v128_load64_zero_extract_lane_s_operand_result = module.invoke(
                _v128_load64_zero_extract_lane_s_operand
            );
            expect(_v128_load64_zero_extract_lane_s_operand_result).toBe(-8898124946043105779n);
        }
    );
});
