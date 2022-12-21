let globalImportObject = {};
let namedModules = {};

describe("elem_0", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_0.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_1", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_1.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_2", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_2.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_3", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_3.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_4", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_4.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_5", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_5.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_6", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_6.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_7", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_7.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_8", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_8.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of elem_8: call-7 (instance 0)", () => {
        let _call_7 = module.getExport("call-7");
        expect(_call_7).not.toBeUndefined();
        let _call_7_result = module.invoke(_call_7);
        expect(_call_7_result).toBe(65);
    });

    _test("execution of elem_8: call-9 (instance 0)", () => {
        let _call_9 = module.getExport("call-9");
        expect(_call_9).not.toBeUndefined();
        let _call_9_result = module.invoke(_call_9);
        expect(_call_9_result).toBe(66);
    });
});

describe("elem_9", () => {
    let _test = test;

    _test("execution of elem_9: _inline_test_0 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_10", () => {
    let _test = test;

    _test("execution of elem_10: _inline_test_1 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_11", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_11.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_12", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_12.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_13", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_13.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_14", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_14.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_15", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_15.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_16", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_16.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_17", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_17.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_18", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_18.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_19", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_19.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
});

describe("elem_20", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_20.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 0)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 1)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 2)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 3)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 4)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 5)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 6)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 7)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 8)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 9)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 10)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });

    /* Unknown assertion trap */ _test.skip("execution of elem_20: <unknown> (instance 11)", () => {
        let __unknown_ = module.getExport("<unknown>");
        expect(__unknown_).not.toBeUndefined();
    });
});

describe("elem_21", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_21.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of elem_21: init (instance 0)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init).toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_22", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_22.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of elem_22: init (instance 1)", () => {
        let _init = module.getExport("init");
        expect(_init).not.toBeUndefined();
        expect(() => module.invoke(_init).toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_23", () => {
    let _test = test;

    _test("execution of elem_23: _inline_test_2 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_24", () => {
    let _test = test;

    _test("execution of elem_24: _inline_test_3 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_25", () => {
    let _test = test;

    _test("execution of elem_25: _inline_test_4 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_26", () => {
    let _test = test;

    _test("execution of elem_26: _inline_test_5 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_27", () => {
    let _test = test;

    _test("execution of elem_27: _inline_test_6 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_28", () => {
    let _test = test;

    _test("execution of elem_28: _inline_test_7 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_29", () => {
    let _test = test;

    _test("execution of elem_29: _inline_test_8 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_30", () => {
    let _test = test;

    _test("execution of elem_30: _inline_test_9 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_31", () => {
    let _test = test;

    _test("execution of elem_31: _inline_test_10 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_32", () => {
    let _test = test;

    _test("execution of elem_32: _inline_test_11 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_33", () => {
    let _test = test;

    _test("execution of elem_33: _inline_test_12 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_34", () => {
    let _test = test;

    _test("execution of elem_34: _inline_test_13 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_35", () => {
    let _test = test;

    _test("execution of elem_35: _inline_test_14 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_36", () => {
    let _test = test;

    _test("execution of elem_36: _inline_test_15 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_37", () => {
    let _test = test;

    _test("execution of elem_37: _inline_test_16 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_38", () => {
    let _test = test;

    _test("execution of elem_38: _inline_test_17 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_39", () => {
    let _test = test;

    _test("execution of elem_39: _inline_test_18 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_40", () => {
    let _test = test;

    _test("execution of elem_40: _inline_test_19 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_41", () => {
    let _test = test;

    _test("execution of elem_41: _inline_test_20 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_42", () => {
    let _test = test;

    _test("execution of elem_42: _inline_test_21 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_43", () => {
    let _test = test;

    _test("execution of elem_43: _inline_test_22 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_44", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_44.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of elem_44: call-overwritten (instance 0)", () => {
        let _call_overwritten = module.getExport("call-overwritten");
        expect(_call_overwritten).not.toBeUndefined();
        let _call_overwritten_result = module.invoke(_call_overwritten);
        expect(_call_overwritten_result).toBe(66);
    });
});

describe("elem_45", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_45.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of elem_45: call-overwritten-element (instance 0)", () => {
        let _call_overwritten_element = module.getExport("call-overwritten-element");
        expect(_call_overwritten_element).not.toBeUndefined();
        let _call_overwritten_element_result = module.invoke(_call_overwritten_element);
        expect(_call_overwritten_element_result).toBe(66);
    });
});

describe("elem_46", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_46.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$module1"] = module;
    globalImportObject["module1"] = module;

    _test("execution of elem_46: call-7 (instance 1)", () => {
        let _call_7 = namedModules["$module1"].getExport("call-7");
        expect(_call_7).not.toBeUndefined();
        expect(() =>
            namedModules["$module1"].invoke(_call_7).toThrow(TypeError, "Execution trapped")
        );
    });

    _test("execution of elem_46: call-8 (instance 0)", () => {
        let _call_8 = namedModules["$module1"].getExport("call-8");
        expect(_call_8).not.toBeUndefined();
        let _call_8_result = namedModules["$module1"].invoke(_call_8);
    });

    _test("execution of elem_46: call-9 (instance 1)", () => {
        let _call_9 = namedModules["$module1"].getExport("call-9");
        expect(_call_9).not.toBeUndefined();
        let _call_9_result = namedModules["$module1"].invoke(_call_9);
    });
});

describe("elem_47", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_47.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$module2"] = module;

    _test("execution of elem_47: call-7 (instance 2)", () => {
        let _call_7 = namedModules["$module1"].getExport("call-7");
        expect(_call_7).not.toBeUndefined();
        let _call_7_result = namedModules["$module1"].invoke(_call_7);
    });

    _test("execution of elem_47: call-8 (instance 1)", () => {
        let _call_8 = namedModules["$module1"].getExport("call-8");
        expect(_call_8).not.toBeUndefined();
        let _call_8_result = namedModules["$module1"].invoke(_call_8);
    });

    _test("execution of elem_47: call-9 (instance 2)", () => {
        let _call_9 = namedModules["$module1"].getExport("call-9");
        expect(_call_9).not.toBeUndefined();
        let _call_9_result = namedModules["$module1"].invoke(_call_9);
    });
});

describe("elem_48", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_48.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$module3"] = module;

    _test("execution of elem_48: call-7 (instance 3)", () => {
        let _call_7 = namedModules["$module1"].getExport("call-7");
        expect(_call_7).not.toBeUndefined();
        let _call_7_result = namedModules["$module1"].invoke(_call_7);
    });

    _test("execution of elem_48: call-8 (instance 2)", () => {
        let _call_8 = namedModules["$module1"].getExport("call-8");
        expect(_call_8).not.toBeUndefined();
        let _call_8_result = namedModules["$module1"].invoke(_call_8);
    });

    _test("execution of elem_48: call-9 (instance 3)", () => {
        let _call_9 = namedModules["$module1"].getExport("call-9");
        expect(_call_9).not.toBeUndefined();
        let _call_9_result = namedModules["$module1"].invoke(_call_9);
    });
});

describe("elem_49", () => {
    let _test = test;

    _test("execution of elem_49: _inline_test_23 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_50", () => {
    let _test = test;

    _test("execution of elem_50: _inline_test_24 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_51", () => {
    let _test = test;

    _test("execution of elem_51: _inline_test_25 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_52", () => {
    let _test = test;

    _test("execution of elem_52: _inline_test_26 (instance 0)", () => {
        expect(() => None.toThrow(TypeError, "Execution trapped"));
    });
});

describe("elem_53", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_53.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }
    namedModules["$m"] = module;
    globalImportObject["exporter"] = module;

    _test("execution of elem_53: get (instance 0)", () => {
        let _get = namedModules["$m"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$m"].invoke(_get, 0);
    });

    _test("execution of elem_53: get (instance 1)", () => {
        let _get = namedModules["$m"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$m"].invoke(_get, 1);
    });

    _test("execution of elem_53: set (instance 0)", () => {
        let _set = namedModules["$m"].getExport("set");
        expect(_set).not.toBeUndefined();
        let _set_result = namedModules["$m"].invoke(_set, 0, 0);
    });

    _test("execution of elem_53: set (instance 1)", () => {
        let _set = namedModules["$m"].getExport("set");
        expect(_set).not.toBeUndefined();
        let _set_result = namedModules["$m"].invoke(_set, 1, 0);
    });

    _test("execution of elem_53: get (instance 2)", () => {
        let _get = namedModules["$m"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$m"].invoke(_get, 0);
    });

    _test("execution of elem_53: get (instance 3)", () => {
        let _get = namedModules["$m"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$m"].invoke(_get, 1);
    });
});

describe("elem_54", () => {
    let _test = test;
    let content, module;
    try {
        content = readBinaryWasmFile("Fixtures/SpecTests/elem_54.wasm");
        module = parseWebAssemblyModule(content, globalImportObject);
    } catch (e) {
        _test("parse", () => expect().fail(e));
        _test = test.skip;
        _test.skip = test.skip;
    }

    _test("execution of elem_54: get (instance 4)", () => {
        let _get = namedModules["$m"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$m"].invoke(_get, 0);
    });

    _test("execution of elem_54: get (instance 5)", () => {
        let _get = namedModules["$m"].getExport("get");
        expect(_get).not.toBeUndefined();
        let _get_result = namedModules["$m"].invoke(_get, 1);
    });
});
