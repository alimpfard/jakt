let globalImportObject = {};
let namedModules = {};

describe("imports_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules[":test"] = module;
    globalImportObject["test"] = module;
});

describe("imports_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_1: print32 (instance 0)", () => {
        let _print32 = module.getExport("print32");
        expect(_print32).not.toBeUndefined();
        let _print32_result = module.invoke(_print32, 13);
    });

    _test("execution of imports_1: print64 (instance 0)", () => {
        let _print64 = module.getExport("print64");
        expect(_print64).not.toBeUndefined();
        let _print64_result = module.invoke(_print64, 24n);
    });
});

describe("imports_2", () => {
    let _test = test;

    _test("execution of imports_2: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_3: print_i32 (instance 0)", () => {
        let _print_i32 = module.getExport("print_i32");
        expect(_print_i32).not.toBeUndefined();
        let _print_i32_result = module.invoke(_print_i32, 13);
    });
});

describe("imports_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_4: print_i32 (instance 1)", () => {
        let _print_i32 = module.getExport("print_i32");
        expect(_print_i32).not.toBeUndefined();
        let _print_i32_result = module.invoke(_print_i32, 5, 11);
        expect(_print_i32_result).toBe(16);
    });
});

describe("imports_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_9", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_9.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_10", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_10.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_12", () => {
    let _test = test;

    _test("execution of imports_12: _inline_test_1 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_1-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_13", () => {
    let _test = test;

    _test("execution of imports_13: _inline_test_2 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_2-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_14", () => {
    let _test = test;

    _test("execution of imports_14: _inline_test_3 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_3-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_15", () => {
    let _test = test;

    _test("execution of imports_15: _inline_test_4 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_4-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_16", () => {
    let _test = test;

    _test("execution of imports_16: _inline_test_5 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_5-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_17", () => {
    let _test = test;

    _test("execution of imports_17: _inline_test_6 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_6-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_18", () => {
    let _test = test;

    _test("execution of imports_18: _inline_test_7 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_7-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_19", () => {
    let _test = test;

    _test("execution of imports_19: _inline_test_8 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_8-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_20", () => {
    let _test = test;

    _test("execution of imports_20: _inline_test_9 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_9-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_21", () => {
    let _test = test;

    _test("execution of imports_21: _inline_test_10 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_10-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_22", () => {
    let _test = test;

    _test("execution of imports_22: _inline_test_11 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_11-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_23", () => {
    let _test = test;

    _test("execution of imports_23: _inline_test_12 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_12-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_24", () => {
    let _test = test;

    _test("execution of imports_24: _inline_test_13 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_13-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_25", () => {
    let _test = test;

    _test("execution of imports_25: _inline_test_14 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_14-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_26", () => {
    let _test = test;

    _test("execution of imports_26: _inline_test_15 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_15-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_27", () => {
    let _test = test;

    _test("execution of imports_27: _inline_test_16 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_16-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_28", () => {
    let _test = test;

    _test("execution of imports_28: _inline_test_17 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_17-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_29", () => {
    let _test = test;

    _test("execution of imports_29: _inline_test_18 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_18-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_30", () => {
    let _test = test;

    _test("execution of imports_30: _inline_test_19 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_19-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_31", () => {
    let _test = test;

    _test("execution of imports_31: _inline_test_20 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_20-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_32", () => {
    let _test = test;

    _test("execution of imports_32: _inline_test_21 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_21-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_33", () => {
    let _test = test;

    _test("execution of imports_33: _inline_test_22 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_22-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_34", () => {
    let _test = test;

    _test("execution of imports_34: _inline_test_23 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_23-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_35", () => {
    let _test = test;

    _test("execution of imports_35: _inline_test_24 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_24-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_36", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_36.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_36: get-0 (instance 0)", () => {
        let _get_0 = module.getExport("get-0");
        expect(_get_0).not.toBeUndefined();
        let _get_0_result = module.invoke(_get_0);
        expect(_get_0_result).toBe(666);
    });

    _test("execution of imports_36: get-1 (instance 0)", () => {
        let _get_1 = module.getExport("get-1");
        expect(_get_1).not.toBeUndefined();
        let _get_1_result = module.invoke(_get_1);
        expect(_get_1_result).toBe(666);
    });

    _test("execution of imports_36: get-x (instance 0)", () => {
        let _get_x = module.getExport("get-x");
        expect(_get_x).not.toBeUndefined();
        let _get_x_result = module.invoke(_get_x);
        expect(_get_x_result).toBe(666);
    });

    _test("execution of imports_36: get-y (instance 0)", () => {
        let _get_y = module.getExport("get-y");
        expect(_get_y).not.toBeUndefined();
        let _get_y_result = module.invoke(_get_y);
        expect(_get_y_result).toBe(666);
    });
});

describe("imports_37", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_37.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_38", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_38.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_39", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_39.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_40", () => {
    let _test = test;

    _test("execution of imports_40: _inline_test_25 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_25-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_41", () => {
    let _test = test;

    _test("execution of imports_41: _inline_test_26 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_26-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_42", () => {
    let _test = test;

    _test("execution of imports_42: _inline_test_27 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_27-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_43", () => {
    let _test = test;

    _test("execution of imports_43: _inline_test_28 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_28-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_44", () => {
    let _test = test;

    _test("execution of imports_44: _inline_test_29 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_29-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_45", () => {
    let _test = test;

    _test("execution of imports_45: _inline_test_30 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_30-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_46", () => {
    let _test = test;

    _test("execution of imports_46: _inline_test_31 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_31-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_47", () => {
    let _test = test;

    _test("execution of imports_47: _inline_test_32 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_32-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_48", () => {
    let _test = test;

    _test("execution of imports_48: _inline_test_33 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_33-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_49", () => {
    let _test = test;

    _test("execution of imports_49: _inline_test_34 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_34-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_50", () => {
    let _test = test;

    _test("execution of imports_50: _inline_test_35 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_35-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_51", () => {
    let _test = test;

    _test("execution of imports_51: _inline_test_36 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_36-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_52", () => {
    let _test = test;

    _test("execution of imports_52: _inline_test_37 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_37-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_53", () => {
    let _test = test;

    _test("execution of imports_53: _inline_test_38 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_38-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_54", () => {
    let _test = test;

    _test("execution of imports_54: _inline_test_39 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_39-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_55", () => {
    let _test = test;

    _test("execution of imports_55: _inline_test_40 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_40-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_56", () => {
    let _test = test;

    _test("execution of imports_56: _inline_test_41 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_41-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_57", () => {
    let _test = test;

    _test("execution of imports_57: _inline_test_42 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_42-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_58", () => {
    let _test = test;

    _test("execution of imports_58: _inline_test_43 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_43-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_59", () => {
    let _test = test;

    _test("execution of imports_59: _inline_test_44 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_44-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_60", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_60.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_60: call (instance 0)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of imports_60: call (instance 1)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 1);
        expect(_call_result).toBe(11);
    });

    _test("execution of imports_60: call (instance 2)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 2);
        expect(_call_result).toBe(22);
    });

    _test("execution of imports_60: call (instance 3)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of imports_60: call (instance 4)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 100).toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_61", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_61.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_61: call (instance 5)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 0).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of imports_61: call (instance 6)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 1);
        expect(_call_result).toBe(11);
    });

    _test("execution of imports_61: call (instance 7)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        let _call_result = module.invoke(_call, 2);
        expect(_call_result).toBe(22);
    });

    _test("execution of imports_61: call (instance 8)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 3).toThrow(TypeError, "Execution trapped"));
    });

    _test("execution of imports_61: call (instance 9)", () => {
        let _call = module.getExport("call");
        expect(_call).not.toBeUndefined();
        expect(() => module.invoke(_call, 100).toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_62", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_62.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_63", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_63.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_64", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_64.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_65", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_65.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_66", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_66.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_67", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_67.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_68", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_68.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_69", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_69.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_70", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_70.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_71", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_71.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_72", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_72.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_73", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_73.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_74", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_74.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_75", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_75.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_76", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_76.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_77", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_77.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_78", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_78.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_79", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_79.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_80", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_80.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_81", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_81.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_82", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_82.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_83", () => {
    let _test = test;

    _test("execution of imports_83: _inline_test_45 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_45-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_84", () => {
    let _test = test;

    _test("execution of imports_84: _inline_test_46 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_46-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_85", () => {
    let _test = test;

    _test("execution of imports_85: _inline_test_47 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_47-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_86", () => {
    let _test = test;

    _test("execution of imports_86: _inline_test_48 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_48-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_87", () => {
    let _test = test;

    _test("execution of imports_87: _inline_test_49 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_49-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_88", () => {
    let _test = test;

    _test("execution of imports_88: _inline_test_50 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_50-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_89", () => {
    let _test = test;

    _test("execution of imports_89: _inline_test_51 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_51-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_90", () => {
    let _test = test;

    _test("execution of imports_90: _inline_test_52 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_52-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_91", () => {
    let _test = test;

    _test("execution of imports_91: _inline_test_53 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_53-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_92", () => {
    let _test = test;

    _test("execution of imports_92: _inline_test_54 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_54-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_93", () => {
    let _test = test;

    _test("execution of imports_93: _inline_test_55 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_55-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_94", () => {
    let _test = test;

    _test("execution of imports_94: _inline_test_56 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_56-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_95", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_95.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_95: load (instance 0)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = module.invoke(_load, 0);
        expect(_load_result).toBe(0);
    });

    _test("execution of imports_95: load (instance 1)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = module.invoke(_load, 10);
        expect(_load_result).toBe(16);
    });

    _test("execution of imports_95: load (instance 2)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = module.invoke(_load, 8);
        expect(_load_result).toBe(1048576);
    });

    _test("execution of imports_95: load (instance 3)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        expect(() => module.invoke(_load, 1000000).toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_96", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_96.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_96: load (instance 4)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = module.invoke(_load, 0);
        expect(_load_result).toBe(0);
    });

    _test("execution of imports_96: load (instance 5)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = module.invoke(_load, 10);
        expect(_load_result).toBe(16);
    });

    _test("execution of imports_96: load (instance 6)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        let _load_result = module.invoke(_load, 8);
        expect(_load_result).toBe(1048576);
    });

    _test("execution of imports_96: load (instance 7)", () => {
        let _load = module.getExport("load");
        expect(_load).not.toBeUndefined();
        expect(() => module.invoke(_load, 1000000).toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_97", () => {
    let _test = test;

    _test("execution of imports_97: _inline_test_57 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_98", () => {
    let _test = test;

    _test("execution of imports_98: _inline_test_58 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_99", () => {
    let _test = test;

    _test("execution of imports_99: _inline_test_59 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("imports_100", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_100.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_101", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_101.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_102", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_102.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_103", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_103.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_104", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_104.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_105", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_105.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_106", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_106.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_107", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_107.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_108", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_108.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("imports_109", () => {
    let _test = test;

    _test("execution of imports_109: _inline_test_60 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_60-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_110", () => {
    let _test = test;

    _test("execution of imports_110: _inline_test_61 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_61-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_111", () => {
    let _test = test;

    _test("execution of imports_111: _inline_test_62 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_62-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_112", () => {
    let _test = test;

    _test("execution of imports_112: _inline_test_63 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_63-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_113", () => {
    let _test = test;

    _test("execution of imports_113: _inline_test_64 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_64-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_114", () => {
    let _test = test;

    _test("execution of imports_114: _inline_test_65 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_65-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_115", () => {
    let _test = test;

    _test("execution of imports_115: _inline_test_66 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_66-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_116", () => {
    let _test = test;

    _test("execution of imports_116: _inline_test_67 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_67-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_117", () => {
    let _test = test;

    _test("execution of imports_117: _inline_test_68 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_68-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_118", () => {
    let _test = test;

    _test("execution of imports_118: _inline_test_69 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_69-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_119", () => {
    let _test = test;

    _test("execution of imports_119: _inline_test_70 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_70-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_120", () => {
    let _test = test;

    _test("execution of imports_120: _inline_test_71 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_71-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_121", () => {
    let _test = test;

    _test("execution of imports_121: _inline_test_72 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_72-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_122", () => {
    let _test = test;

    _test("execution of imports_122: _inline_test_73 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_73-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});

describe("imports_123", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_123.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of imports_123: grow (instance 0)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(1);
    });

    _test("execution of imports_123: grow (instance 1)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(1);
    });

    _test("execution of imports_123: grow (instance 2)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(2);
    });

    _test("execution of imports_123: grow (instance 3)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 1);
        expect(_grow_result).toBe(-1);
    });

    _test("execution of imports_123: grow (instance 4)", () => {
        let _grow = module.getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = module.invoke(_grow, 0);
        expect(_grow_result).toBe(2);
    });
});

describe("imports_124", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_124.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mgm"] = module;
    globalImportObject["grown-memory"] = module;

    _test("execution of imports_124: grow (instance 5)", () => {
        let _grow = namedModules["$Mgm"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Mgm"].invoke(_grow);
    });
});

describe("imports_125", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_125.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mgim1"] = module;
    globalImportObject["grown-imported-memory"] = module;

    _test("execution of imports_125: grow (instance 6)", () => {
        let _grow = namedModules["$Mgim1"].getExport("grow");
        expect(_grow).not.toBeUndefined();
        let _grow_result = namedModules["$Mgim1"].invoke(_grow);
    });
});

describe("imports_126", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_126.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$Mgim2"] = module;

    _test("execution of imports_126: size (instance 0)", () => {
        let _size = namedModules["$Mgim2"].getExport("size");
        expect(_size).not.toBeUndefined();
        let _size_result = namedModules["$Mgim2"].invoke(_size);
    });
});

describe("imports_127", () => {
    let _test = test;

    _test("execution of imports_127: _inline_test_74 (instance 0)", () => {});
});

describe("imports_128", () => {
    let _test = test;

    _test("execution of imports_128: _inline_test_75 (instance 0)", () => {});
});

describe("imports_129", () => {
    let _test = test;

    _test("execution of imports_129: _inline_test_76 (instance 0)", () => {});
});

describe("imports_130", () => {
    let _test = test;

    _test("execution of imports_130: _inline_test_77 (instance 0)", () => {});
});

describe("imports_131", () => {
    let _test = test;

    _test("execution of imports_131: _inline_test_78 (instance 0)", () => {});
});

describe("imports_132", () => {
    let _test = test;

    _test("execution of imports_132: _inline_test_79 (instance 0)", () => {});
});

describe("imports_133", () => {
    let _test = test;

    _test("execution of imports_133: _inline_test_80 (instance 0)", () => {});
});

describe("imports_134", () => {
    let _test = test;

    _test("execution of imports_134: _inline_test_81 (instance 0)", () => {});
});

describe("imports_135", () => {
    let _test = test;

    _test("execution of imports_135: _inline_test_82 (instance 0)", () => {});
});

describe("imports_136", () => {
    let _test = test;

    _test("execution of imports_136: _inline_test_83 (instance 0)", () => {});
});

describe("imports_137", () => {
    let _test = test;

    _test("execution of imports_137: _inline_test_84 (instance 0)", () => {});
});

describe("imports_138", () => {
    let _test = test;

    _test("execution of imports_138: _inline_test_85 (instance 0)", () => {});
});

describe("imports_139", () => {
    let _test = test;

    _test("execution of imports_139: _inline_test_86 (instance 0)", () => {});
});

describe("imports_140", () => {
    let _test = test;

    _test("execution of imports_140: _inline_test_87 (instance 0)", () => {});
});

describe("imports_141", () => {
    let _test = test;

    _test("execution of imports_141: _inline_test_88 (instance 0)", () => {});
});

describe("imports_142", () => {
    let _test = test;

    _test("execution of imports_142: _inline_test_89 (instance 0)", () => {});
});

describe("imports_143", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/imports_143.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules[":not wasm"] = module;
    globalImportObject["not wasm"] = module;
});

describe("imports_144", () => {
    let _test = test;

    _test("execution of imports_144: _inline_test_90 (instance 0)", () => {
        expect(() => {
            let content = readBinaryWasmFile("Fixtures/SpecTests/mod-__inline_test_90-0.wasm");
            parseWebAssemblyModule(content, globalImportObject);
        }).toThrow(TypeError, "Linking failed");
    });
});
